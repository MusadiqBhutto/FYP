import React from 'react';

const WhatsAppLink = (props) => {
  const phoneNumber = props.phone; // Replace with the actual phone number
  const message = 'I am in interseted in you <3'; // Optional default message
  
  // URL encode the message
  const encodedMessage = encodeURIComponent(message);

  return (
    <div className="bg-slate-700 text-center text-white rounded-lg uppercase p-3 hover:opacity-95">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: '#25D366'}}
      >
        Chat with us on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppLink;
