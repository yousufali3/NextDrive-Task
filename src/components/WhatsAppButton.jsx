import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const phoneNumber = '+918392032371'; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default WhatsAppButton;