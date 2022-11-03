import Head from 'next/head'
import Image from 'next/image'

type demosType = {
  "url": string,
}


export type projetoType = {
  nome: string,
  thumbnail: string,
  descricao: string,
  demos: Array<demosType>,
  showMainTitle?: boolean,
  Parentkey: number
};


export default function Projeto(props: projetoType) {

  return (
    <div className="text-[#393f46]">
      <Head>
        <title>{props.nome} - Coworking</title>
        <meta name="description" content={props.nome} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="snap-center w-full h-full">
        {props.showMainTitle &&
          <h1 className='flex justify-center items-center text-xl bg-black text-white font-bold'>Projetos do Coworking</h1>
        }
        {/* Imagem e Descrição do Projeto */}

        <div className={`${props.showMainTitle ? 'h-[49vh]' : 'h-[50vh]'} article prose lg:prose-sm max-w-none ${(props.Parentkey % 2 == 0) ? 'bg-[#A2A2A3]' : 'bg-[#4A3A34] text-white'} w-full `}>

          <h1 className={`flex self-start items-end justify-center px-10 pt-5  w-full ${(props.Parentkey % 2 == 0) ? 'text-black' : ' text-white'}`}>{props.nome}</h1>
          <div className="w-full flex text-center justify-between self-center items-center px-64  ">

            {props.Parentkey % 2 == 0 &&
              <Image src={props.thumbnail ? props.thumbnail : ""} className='mx-5 mb-5 shadow-xl rounded-2xl' width={300} height={300} alt={props.nome}></Image>
            }
            <div className='flex flex-col justify-center items-center' >
              {/* <h2 className='text-center w-full'>Helpin</h2> */}
              <p className='text-start pl-20'>
                {props.descricao}
              </p>
            </div>

            {!(props.Parentkey % 2 == 0) &&
              <Image src={props.thumbnail ? props.thumbnail : ""} className='mx-5 mb-5 shadow-xl rounded-2xl' width={300} height={300} alt={props.nome}></Image>
            }


          </div>

        </div>

        {/* Imagens de Demostração */}

        <div className={`h-[50vh] article prose lg:prose-sm max-w-none ${(props.Parentkey % 2 == 0) ? 'bg-[#4A3A34]' : 'bg-[#A2A2A3]'} w-full`}>
          <div className='h-full'>
            <h1 className='flex h-1/6 self-start justify-center px-10 pt-5 text-white'>Demos</h1>
            <div className="w-full h-4/6 pt-8 flex text-center self-center items-center justify-center">


              {
                props.demos.map((UrlDemo, key) =>
                  <Image key={key} src={UrlDemo.url} className='px-10' width={220} height={220} alt="Imagem de demostração" />
                )
              }



            </div>
          </div>
        </div>



      </div>


    </div>
  )
}
