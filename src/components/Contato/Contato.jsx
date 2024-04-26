import React from 'react';
import img from "../../assets/website/contato.jpg";

const Contato = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center shadow">Entre em Contato</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Imagem */}
        <div className="max-w-md md:max-w-lg shadow-md rounded-md overflow-hidden">
          <img src={img} alt="Contato" className="w-full h-auto" />
        </div>
        {/* Formulário */}
        <div className="max-w-md md:max-w-lg shadow-md rounded-md overflow-hidden p-6">
          <form className="space-y-4">
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
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
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
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
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
      <div className="w-full border-t-2 border-gray-300/50 my-6"></div>
    </div>
  );
};

export default Contato;
