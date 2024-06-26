"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Section3 = () => {
  return (
    <div id="produtos" className="min-h-screen mt-12 ">
      <h2 className="text-black-4 flex justify-center items-center text-4xl text-center mb-8">
        inteligência de dados voltada <br></br> para a melhoria da escola
      </h2>

      <p className="text-black-3 flex justify-center items-center text-center mb-20">
        Nossos instrumentos foram desenvolvidos para traduzirem características
        complexas <br></br> dos atores educacionais (estudantes, pais e
        professores) de forma simples, concisa e<br></br> focadas na melhoria
        dos resultados.
      </p>

      <div className="lg:flex flex-wrap justify-center">
        <div className="card bg-purple-1 p-6 rounded-md shadow-md text-center mx-4 my-4 lg:w-[25rem] h-80">
          <div className="text-4xl mb-4 flex justify-center items-center">
            <Image
              src="./assets/images/img-quebra-cabeca.svg"
              alt="Logo da empresa"
              width={74}
              height={74}
            />
          </div>
          <h2 className="card-title text-2xl text-black-2 font-bold mb-2">
            Mind&apos;s Up Socioemocional
          </h2>
          <p className="card-description text-black-3">
            Ferramenta de mensuração das habilidades socioemocionais.
          </p>
          <div className="flex items-center justify-center">
            <Link
              href="/Socioemocional"
              className="card-button inline-block text-orange-1 px-4 py-2 rounded"
            >
              Saiba Mais
            </Link>
            <Image
              src="./assets/images/icone-flecha.svg"
              alt="Seta"
              width="10"
              height="10"
              className="-ml-2"
            />
          </div>
        </div>

        <div className="card bg-blue-1 p-6 rounded-md shadow-md text-center mx-4 my-4 lg:w-[25rem] h-80">
          <div className="text-4xl mb-4 flex justify-center items-center">
            <Image
              src="./assets/images/img-escola.svg"
              alt="Logo da empresa"
              width={74}
              height={74}
            />
          </div>
          <h2 className="card-title text-2xl text-black-2  font-bold mb-3">
            Mind&apos;s Up Simulados
          </h2>
          <p className="card-description text-black-3 mb-4">
            Simulados do ENEM corrigidos com TRI.
          </p>
          <div className="flex items-center justify-center">
            <Link
              href="/Simulados"
              className="card-button inline-block text-orange-1 px-4 py-2 cursor-pointer rounded"
            >
              Saiba Mais
            </Link>
            <Image
              src="./assets/images/icone-flecha.svg"
              alt="Seta"
              width="10"
              height="10"
              className="-ml-2"
            />
          </div>
        </div>

        <div className="card bg-orange-3 p-6 rounded-md shadow-md text-center mx-4 my-4 lg:w-[25rem] h-80">
          <div className="text-4xl mb-4 flex justify-center items-center">
            <Image
              src="./assets/images/img-professor.svg"
              alt="Logo da empresa"
              width={74}
              height={74}
            />
          </div>
          <h2 className="card-title text-2xl text-black-2  font-bold mb-3">
            Mind&apos;s Up Insights
          </h2>
          <p className="card-description text-black-3 mb-4">
            Relatórios gerados pela equipe de dados prontos para potencializar
            as ações da sua escola.
          </p>
          <div className="flex items-center justify-center">
            <Link
              href="/Insights"
              className="card-button inline-block text-orange-1 px-4 py-2 rounded"
            >
              Saiba Mais
            </Link>
            <Image
              src="./assets/images/icone-flecha.svg"
              alt="Seta"
              width="10"
              height="10"
              className="-ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
