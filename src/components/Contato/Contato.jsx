import React, { useState } from 'react'; // Importa o React e a função useState do pacote 'react'
import img from "../../assets/website/contato.jpg"; // Importa a imagem de um caminho relativo
import emailjs from '@emailjs/browser'; // Importa o módulo 'emailjs-com' para envio de emails

// Declaração do componente Contato como uma função arrow
const Contato = () => {
  // Declaração de três estados usando o hook useState
  const [name, setName] = useState(''); // Estado para armazenar o nome
  const [email, setEmail] = useState(''); // Estado para armazenar o email
  const [message, setMessage] = useState(''); // Estado para armazenar a mensagem

  // Função para enviar o email
  function sendEmail(e) {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Parâmetros do template do email
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    // Função do emailjs para enviar o email
    emailjs.send("service_2kj1xbo", "template_c4tug4d", templateParams, "wIAkKOOOeivlixQda")
      .then((response) => { // Callback para o caso de sucesso
        console.log("EMAIL ENVIADO", response.status, response.text); // Loga o sucesso do envio
        // Limpa os campos de entrada após o envio bem-sucedido
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => { // Callback para o caso de erro
        console.error("ERRO AO ENVIAR EMAIL: ", error); // Loga o erro ocorrido no envio do email
      });
  }

  // Retorno do componente
  return (
    <div className="container mx-auto"> {/* Container principal */}
      <h2 className="text-3xl font-bold mb-6 text-center shadow">Entre em Contato</h2> {/* Título do formulário */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Layout em grid para imagem e formulário */}
        {/* Imagem */}
        <div className="max-w-md md:max-w-lg shadow-md rounded-md overflow-hidden">
          <img src={img} alt="Contato" className="w-full h-auto" /> {/* Imagem de contato */}
        </div>
        {/* Formulário */}
        <div className="max-w-md md:max-w-lg shadow-md rounded-md overflow-hidden p-6">
          <form className="space-y-4" onSubmit={sendEmail}> {/* Formulário de contato */}
            {/* Campo para o nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Campo para o email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Campo para a mensagem */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            {/* Botão de envio */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full border-t-2 border-gray-300/50 my-6"></div> {/* Linha divisória */}
    </div> /* Fim do container principal */
  );
};

export default Contato; // Exporta o componente Contato
