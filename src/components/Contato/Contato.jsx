import React, { useState } from 'react';
import img from "../../assets/website/contato.jpg";
import emailjs from '@emailjs/browser';

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState(''); // Estado para a mensagem de status

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send("service_hoezbmj", "template_c4tug4d", templateParams, "wIAkKOOOeivlixQda")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setStatusMessage('Mensagem enviada com sucesso!'); // Mensagem de sucesso
      })
      .catch((error) => {
        console.error("ERRO AO ENVIAR EMAIL: ", error);
        setStatusMessage('Erro ao enviar mensagem. Tente novamente.'); // Mensagem de erro
      });
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center shadow">Entre em Contato</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="max-w-md md:max-w-lg shadow-md rounded-md overflow-hidden">
          <img src={img} alt="Contato" className="w-full h-auto" />
        </div>
        <div className="max-w-md md:max-w-lg shadow-md rounded-md overflow-hidden p-6">
          <form className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-500">
                Seu Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-500">
                Seu Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-500">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-900 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
              >
                Enviar
              </button>
            </div>
          </form>
          {statusMessage && (
            <div className={`mt-4 text-center ${statusMessage.includes('sucesso') ? 'text-cyan-800' : 'text-rose-950'}`}>
              {statusMessage}
            </div>
          )}
        </div>
      </div>
      <div className="w-full border-t-2 border-gray-300/50 my-6"></div>
    </div>
  );
};

export default Contato;
