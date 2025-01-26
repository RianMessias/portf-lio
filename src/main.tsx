import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React, { useEffect } from 'react';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const ContactForm = () => {
  useEffect(() => {
    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form data
      const formData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        message: (document.getElementById('message') as HTMLInputElement).value,
      };

      // Send form data to server
      fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((err) => {
              throw new Error(err.error);
            });
          }
          return response.json();
        })
        .then((data) => {
          console.log('Success:', data);
          alert(data.message);
          contactForm.reset();
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Erro ao enviar mensagem.');
        });
    });
  }, []);

  return (
    <form id="contact-form">
      <input type="text" id="name" name="name" placeholder="Nome" required />
      <input type="email" id="email" name="email" placeholder="Email" required />
      <input type="tel" id="phone" name="phone" placeholder="Telefone" required />
      <textarea id="message" name="message" placeholder="Mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;