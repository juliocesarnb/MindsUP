'use client'
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const BtnMenu = () => {
  
  

  const [mostrarMenu, setMostrarMenu] = React.useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div className="lg:hidden mr-10 ">
      <div onClick={toggleMenu}>
        {mostrarMenu ? (
          <div className="cursor-pointer ">
            <div className="w-6 ml-10 -10 h-px transform rotate-45 bg-black"></div>
            <div className="w-6 h-px ml-10 transform -rotate-45 bg-black"></div>
          </div>
        ) : (
          <div className=" cursor-pointer">
            <div className="w-6 h-px bg-black my-1"></div>
            <div className="w-6 h-px bg-black my-1"></div>
            <div className="w-6 h-px bg-black my-1"></div>
          </div>
        )}
      </div>

      {mostrarMenu && (
        <div className="absolute container h-screen backdrop-blur-xl z-20 top-24 overflow-hidden start-2">
          <ul className="flex p-10 justify-center gap-3 items-center">
            <li class="text-2xl hover:text-purple-2">
              <Link href="/">Quem Somos</Link>
            </li>
            <li class="text-2xl cursor-pointer hover:text-purple-2">
              <Link
                activeClass="active"
                to="solucoes"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Soluções
              </Link>
            </li>
            <li class="text-2xl cursor-pointer hover:text-purple-2">
              <Link
                activeClass="active"
                to="produtos"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Produtos
              </Link>
            </li>
            <li class="text-2xl cursor-pointer hover:text-purple-2">
              <Link
                activeClass="active"
                to="contatos"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Contatos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BtnMenu;
