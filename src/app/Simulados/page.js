"use client";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Link from "next/link";

const Insights = () => {
  return (
    <Background>
      <Navbar />
      <section className="h-auto lg:h-screen bg-blue-100 rounded-2xl m-4 sm:m-8 lg:m-12">
        <div className="flex flex-col gap-8 justify-center items-center container pt-16 sm:pt-24 lg:pt-32 p-4 sm:p-8 md:p-10 lg:p-12">
          
          <h1 className="text-blue-dark text-center pt-4 sm:pt-6 lg:pt-9 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Mind&apos;s Up Simulados
          </h1>

          <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl text-center">
            Os simulados Mind&apos;s Up são aplicados aos estudantes do 9º ao 3º ano e são corrigidos com Teoria da Resposta ao Item (TRI), mesmo método de correção do ENEM. Por meio da nossa plataforma, o professor pode entender quais competências devem ser trabalhadas para diferentes tipos de estudantes, permitindo uma abordagem pedagógica mais personalizada. Além disso, disponibilizamos listas de exercícios por competência. Após os simulados, os estudantes recebem uma devolutiva personalizada com ferramentas de ciência comportamental para aumentar o engajamento nas atividades educacionais. Empodere professores e estudantes com Mind&apos;s Up Simulados.
          </p>
          
          <button className="bg-blue-600 w-full sm:w-[12rem] md:w-[15rem] hover:bg-purple-2 p-2 sm:p-3 md:p-4 rounded-2xl">
            <Link href="#contatos">Entre em contato conosco</Link>
          </button>
        
        </div>
      </section>
      <Footer />
    </Background>
  );
};

export default Insights;
