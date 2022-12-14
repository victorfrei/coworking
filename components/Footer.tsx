import Image from "next/image";
import Link from "next/link";
import * as React from 'react';



export default function Footer() {
    return (

        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                {/* <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    Coworking
                </a> */}
                <p className="my-6 text-gray-500 dark:text-gray-400"></p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Empresas</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Projetos</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Equipe</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contato</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">Coworking Ceuma</a>. Todos os direitos reservados.</span>
            </div>
        </footer>

    )
}