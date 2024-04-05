"use client";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

import Link from "next/link";

const Insights = () => {
  return (
    <Background>
      <Navbar />
      <section className="h-screen bg-orange-3 rounded-2xl m-12">
        <div className="flex flex-col gap-8 justify-center items-center container pt-32 p-10">
          <h1 className="text-orange-dark text-center pt-9 text-5xl">
            Mind's Up Insights
          </h1>

          <p className="text-black text-md text-center">
            A equipe de suporte de dados da Mind's Up analisa os dados escolares
            dos simulados e da avaliação socioemocional e fornecem insights para
            toda a gestão escolar sobre competências que devem ser trabalhadas
            nos estudantes. Nossos insights abordam temas tanto cognitivos
            quanto socioemocionais, possibilitando um desenvolvimento integral
            dos estudantes.
          </p>
          <button className="bg-orange-300 w-[15rem] hover:bg-orange-500 p-2 rounded-2xl">
            <Link href="Insights">Entre em contato conosco</Link>
          </button>
        </div>
      </section>
      <Footer />
    </Background>
  );
};
export default Insights;
