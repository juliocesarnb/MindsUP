'use client'
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="contatos" className="bg-purple-2 px-10 py-10 min-h-screen">
      {/* Logo */}
      <div className="flex justify-center md:justify-start p-10">
        <Link href="/">
          <Image
            src="/assets/Logo-MUp-Rodape.svg"
            alt="Logo da empresa"
            width={200}
            height={200}
          />
        </Link>
      </div>

      {/* ---| container |----*/}
      <div className="flex flex-col md:flex-row items-center justify-around flex-wrap">

        {/* ---| bloco de texto |--- */}
        <div className="md:pb-20 pb-5 text-center ">
          <h3 className="text-3xl text-white mb-4">Quer saber mais?</h3>
          <p className="text-gray-1">
            Ajude-nos a conhecer sua escola e entender como podemos construir um caso de sucesso!
          </p>
          <p className="text-gray-1">Preencha o formulário abaixo e fale conosco.</p>
        </div>

        {/* Container do formulário */}
        <div className="w-full md:w-1/2 p-4 rounded-md text-black bg-white mb-10 md:mb-0">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Entre em <span className="text-[#7747ff]">contato</span>
          </div>

          {/* Formulário para contato */}
          <form
            target="_blank"
            action="https://formsubmit.co/juliocesarnb99@gmail.com"
            method="POST"
            className="flex flex-col gap-3"
          >
            <input type="hidden" name="_next" value="http://localhost:3000/" />

            <div className="block relative">
              <label
                htmlFor="email"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="name"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>

            {/* Telefone */}
            <div className="block relative">
              <label
                htmlFor="telefone"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                id="telefone"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>

            {/* Nome da escola */}
            <div className="block relative">
              <label
                htmlFor="nameOfSchool"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Nome da escola
              </label>
              <input
                type="text"
                name="nameOfSchool"
                id="nameOfSchool"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>

            {/* Tipo de instituição */}
            <div className="block relative">
              <label
                htmlFor="TypeOfInstitution"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Tipo de instituição
              </label>

              <select
                id="TypeOfInstitution"
                name="TypeOfInstitution"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              >
                <option value="escolaPrivada">Escola privada</option>
                <option value="escolaPublica">Escola Pública</option>
                <option value="secretariaDeEducação">
                  Secretária de Educação
                </option>
              </select>

              {/* Ícone seta para baixo */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#7747ff] hover:bg-purple-900 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Informações e contatos */}
        <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
          <div className="mb-2 text-white text-xl">Informações</div>
          <Link href="/">
            <div className="mb-2 text-gray-1 cursor-pointer hover:text-white">
              Quem somos
            </div>
          </Link>
          <Link href="/">
            <div className="mb-2 text-gray-1 cursor-pointer hover:text-white">
              Soluções
            </div>
          </Link>
          <Link href="/">
            <div className="text-gray-1 cursor-pointer hover:text-white">
              Produtos
            </div>
          </Link>
        </div>

        {/* Container do email e telefone */}
        <div className="flex flex-col items-center mt-8 gap-8 md:flex-row md:gap-16">
          {/* Ícone telefone */}
          <div className="flex flex-col items-center text-white gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>Telefone</span>
            <span className="w-[9rem] text-center md:text-left">+55859999-9999</span>
          </div>

          {/* Ícone email */}
          <div className="flex flex-col items-center text-white gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <span>Email</span>
            <span className="w-[9rem] text-center md:text-left">MindsUp@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
