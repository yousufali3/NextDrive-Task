import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/techsolutions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Contact Form Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  budget: Number,
  deadline: Date,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Newsletter Subscription Schema
const subscriptionSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'admin@techsolutions.com', // Replace with actual admin email
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Budget:</strong> $${req.body.budget}</p>
        <p><strong>Deadline:</strong> ${req.body.deadline}</p>
        <p><strong>Message:</strong> ${req.body.message}</p>
      `,
    });

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error });
  }
});

// Newsletter Subscription Endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    const subscription = new Subscription({ email: req.body.email });
    await subscription.save();

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: 'Newsletter Subscription Confirmation',
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>You have successfully subscribed to our newsletter.</p>
      `,
    });

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already subscribed' });
    } else {
      res.status(500).json({ message: 'Error subscribing to newsletter', error });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});