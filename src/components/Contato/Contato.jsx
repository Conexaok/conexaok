import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatusMessage('Todos os campos são obrigatórios.');
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send("service_h9eandy", "template_c4tug4d", templateParams, "wIAkKOOOeivlixQda")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setStatusMessage('Mensagem enviada com sucesso! Obrigado por entrar em contato conosco.');
      })
      .catch((error) => {
        console.error("ERRO AO ENVIAR EMAIL: ", error);
        setStatusMessage('Erro ao enviar mensagem. Tente novamente mais tarde ou entre em contato diretamente pelo nosso email.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div id="Contato">
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 w-full h-96 md:h-auto bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 relative">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps?q=Rua%20Arthur%20Heleno%20de%20Souza%2C%20111%2C%20Conex%C3%A3o%20K&hl=pt-BR&z=18&output=embed"
              style={{ position: 'absolute', top: 0, left: 0 }}
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Contato</h2>
            <p className="leading-relaxed mb-5">Fale um pouco sobre o que você quer realizar, entre em contato conosco!</p>
            <form className="relative mb-4" onSubmit={sendEmail}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-400">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duração-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
            {statusMessage && (
              <p className={`text-sm mt-3 ${statusMessage.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
