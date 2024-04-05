"use client";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

import Link from "next/link";

const Insights = () => {
  return (
    <Background>
      <Navbar />
      <section className="h-screen bg-blue-100 rounded-2xl m-12">
        <div className="flex flex-col gap-8 justify-center items-center container pt-32 p-10">
          <h1 className="text-blue-dark text-center pt-9 text-5xl">
            Mind's Up Simulados
          </h1>

          <p className="text-black text-md text-center">
            Os simulados Mind's Up são aplicados aos estudantes do 9º ao 3º ano
            e são corrigidos com Teoria da Resposta ao Item (TRI), mesmo método
            de correção do ENEM. Por meio da nossa plataforma, o professor pode
            entender quais competências devem ser trabalhadas para diferentes
            tipos de estudantes, permitindo uma abordagem pedagógica mais
            personalizada. Além disso, disponibilizamos listas de exercícios por
            competência. Após os simulados, os estudantes recebem uma devolutiva
            personalizada com ferramentas de ciência comportamental para
            aumentar o engajamento nas atividades educacionais. Empodere
            professores e estudantes com Mind's Up Simulados
          </p>
          <button className="bg-blue-600 w-[15rem] hover:bg-purple-2 p-2 rounded-2xl">
            <Link href="#contatos">Entre em contato conosco</Link>
          </button>
        </div>
      </section>
      <Footer />
    </Background>
  );
};
export default Insights;
