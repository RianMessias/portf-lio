import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function FormularioContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemStatus, setMensagemStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem,
    };

    emailjs
      .send('service_d8uvkql', 'template_zqg9zhr', templateParams, '_nUjCose86p7xlUsi')
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        setMensagemStatus('E-mail enviado com sucesso!');
      })
      .catch((err) => {
        console.error('Erro ao enviar o e-mail:', err);
        setMensagemStatus('Erro ao enviar o e-mail. Tente novamente.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
      </label>
      <br />
      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
        E-mail:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
      </label>
      <br />
      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
        Mensagem:
        <textarea  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </label>
      <br />
      <button type="submit"
        className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">Enviar</button>
      <p>{mensagemStatus}</p>
    </form>
  );
}

export default FormularioContato;