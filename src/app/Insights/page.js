"use client";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Link from "next/link";

const Insights = () => {
  return (
    <Background>
      <Navbar />
      <section className="h-auto lg:h-screen bg-orange-3 rounded-2xl m-4 sm:m-8 lg:m-12">
        <div className="flex flex-col gap-8 justify-center items-center container pt-16 sm:pt-24 lg:pt-32 p-4 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-orange-dark text-center pt-4 sm:pt-6 lg:pt-9 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Mind&apos;s Up Insights
          </h1>

          <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl text-center">
            A equipe de suporte de dados da Mind&apos;s Up analisa os dados escolares
            dos simulados e da avaliação socioemocional e fornecem insights para
            toda a gestão escolar sobre competências que devem ser trabalhadas
            nos estudantes. Nossos insights abordam temas tanto cognitivos
            quanto socioemocionais, possibilitando um desenvolvimento integral
            dos estudantes.
          </p>

          <button className="bg-orange-300 w-full sm:w-[12rem] md:w-[15rem] hover:bg-orange-500 p-2 sm:p-3 md:p-4 rounded-2xl">
            <Link href="#contatos">Entre em contato conosco</Link>
          </button>
        </div>
      </section>
      <Footer />
    </Background>
  );
};

export default Insights;
