'use client'
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Link from "next/link";



const Produtos = () => {
  return (
    <Background>
      <Navbar />
      <section className="h-screen bg-purple-1 rounded-2xl m-12">
        <div className="flex flex-col gap-8 justify-center items-center container pt-32 p-10">

            <h1 className="text-blue-dark text-center pt-9 text-5xl">
            Mind's Up Socioemocional
            </h1>
          
          
            <p className="text-black text-md text-center">
              Descubra o potencial completo de seus alunos com MindsUp
              Socioemocional. Nossa plataforma inovadora utiliza dados para
              desbloquear insights profundos sobre as características
              socioemocionais de cada estudante. Com uma abordagem
              personalizada, oferecemos respostas claras e acionáveis,
              permitindo que educadores e pais compreendam melhor as
              necessidades individuais de cada aluno. Capacite seus alunos a
              prosperarem não apenas academicamente, mas também emocionalmente.
              Junte-se à MindsUp Socioemocional e embarque na jornada para um
              futuro mais resiliente e conectado.
            </p>
            <button className="bg-purple-600  w-[15rem] hover:bg-purple-2 p-2 rounded-2xl">
              <Link href="#contatos">Entre em contato conosco</Link>
            </button>
          
        </div>
      </section>
      <Footer />
    </Background>
  );
};
export default Produtos;