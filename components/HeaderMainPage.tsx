import Image from "next/image";
import Link from "next/link";
import * as React from 'react';


const NavMenu = [
    {
        nome: 'Home',
        link: '/',

    },
    {
        nome: 'Sobre',
        link: '/sobre',

    },
    {
        nome: 'Empresas',
        link: '/empresas',

    },
    {
        nome: 'Projetos',
        link: '/projetos',

    },
    {
        nome: 'Equipe',
        link: '/equipe',

    },
    {
        nome: 'Contato',
        link: '/contato',

    },
]

type NavMenuType = typeof NavMenu;
type NavMenuItemType = typeof NavMenu[0];

interface HeaderMainPageProps {
    nav: number;
}


export default function HeaderMainPage({ nav }: HeaderMainPageProps) {
    return (

        <nav className="fixed w-full bg-white text-center border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="https://flowbite.com" className="flex items-center">
                    <Image width={50} height={50} src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">Coworking</span>
                </a>


                <ul className="hidden lg:flex flex-row mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    {NavMenu.map((e: NavMenuItemType, key: number) =>
                        <li key={key} className="px-1">
                            <Link href={e.link} className={`block py-2 pr-4 pl-3 rounded  ${nav != key ? 'text-gray-800  dark:text-gray-400' : 'bg-primary-600 hover:bg-primary-700 dark:hover:bg-primary-700 text-black dark:text-white'} dark:hover:bg-gray-700 text-center lg:text-primary-700 `} aria-current="page">{e.nome}</Link>
                        </li>
                    )}


                </ul>

                <div className="flex items-center lg:order-2">



                    <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">



                        <a href="#" className="hidden md:flex text-gray-800 dark:text-white rounded hover:bg-primary-800 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-primary-400 focus:outline-none dark:focus:ring-indigo-800">Entrar</a>
                        {/* <a href="#" className="text-white bg-primary-700 rounded hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a> */}



                        <button data-collapse-toggle="mobile-menu-2" type="button" className="flex md:hidden items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    )
}