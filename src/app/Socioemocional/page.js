'use client'
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Link from "next/link";

const Produtos = () => {
  return (
    <Background>
      <Navbar />
      <section className="h-auto lg:h-screen bg-purple-1 rounded-2xl m-4 sm:m-22 lg:m-12">
        <div className="flex flex-col gap-8 justify-center items-center container pt-16 sm:pt-24 lg:pt-32 p-4 sm:p-8 md:p-10 lg:p-12">
          
          <h1 className="text-blue-dark text-center pt-4 sm:pt-6 lg:pt-9 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Mind&apos;s Up Socioemocional
          </h1>

          <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl text-center overflow-hidden  p-4 sm:p-6 md:p-8">
            Descubra o potencial completo de seus alunos com Mind&apos;s Up Socioemocional. Nossa plataforma inovadora utiliza dados para desbloquear insights profundos sobre as características socioemocionais de cada estudante. Com uma abordagem personalizada, oferecemos respostas claras e acionáveis, permitindo que educadores e pais compreendam melhor as necessidades individuais de cada aluno. Capacite seus alunos a prosperarem não apenas academicamente, mas também emocionalmente. Junte-se à Mind&apos;s Up Socioemocional e embarque na jornada para um futuro mais resiliente e conectado.
          </p>
          
          <button className="bg-purple-600 w-full sm:w-[12rem] md:w-[15rem] hover:bg-purple-2 p-2 sm:p-3 md:p-4 rounded-2xl">
            <Link href="#contatos">Entre em contato conosco</Link>
          </button>
        
        </div>
      </section>
      <Footer />
    </Background>
  );
};

export default Produtos;
