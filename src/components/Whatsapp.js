import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <span className="mr-1">Chat with us</span>
      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
    </a>
  );
};

export default WhatsAppButton