'use client'
import Link from 'next/link';
import BtnMenu from './BtnMenu';
import Image from 'next/image';


const Navbar = () => {
  return (
    <>
    <nav className="text-black-1 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="ml-20">
          <Link href="/" >
            <Image
                src="/assets/Logo-MUp.svg"
                alt="Logo da empresa"
                width={200}
                height={200}
            />
          </Link>
        </div>
        <ul className="">
          <div className="hidden lg:flex flex items-center space-x-10">
            <li className="hover:text-purple-2">
              <Link href="#">Quem Somos</Link>
            </li>
            <li className="cursor-pointer hover:text-purple-2">
              <Link href="#secao2">Soluções</Link>
            </li>
            <li className="cursor-pointer hover:text-purple-2">
              <Link href="#produtos">Produtos</Link>
            </li>
            <li className="cursor-pointer hover:text-purple-2">
              <Link href="#contatos">Contatos</Link>
            </li>
          </div>
          <BtnMenu />
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;