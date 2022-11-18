import Head from "next/head";
import HeaderMainPage from "../components/HeaderMainPage";


export default function Contato() {
    return (
        <div className="dark">
            <Head>
                <title>Projetos - Coworking Ceuma</title>
            </Head>
            <HeaderMainPage nav={3} />
           <div className="h-screen w-full dark:bg-gray-900"></div>
        </div>
    )
}