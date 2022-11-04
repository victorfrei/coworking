import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';

export type demosType = {
  "url": string,
}


export type projetoType = {
  nome: string,
  thumbnail: string,
  descricao: string,
  demos: Array<demosType>,
  Parentkey: number
};



export default function Projeto(props: projetoType) {

  console.log(props);

  const [showParceiros, setShowParceiros] = useState(false);

  const slide: Array<SlideImage> = [];
  props.demos.map((parceiro: demosType, key: any) =>
    slide.push({ src: parceiro.url })
  );

  return (
    <div className="text-[#393f46]">


      <div className="snap-center w-full h-full">
        {/* Imagem e Descrição do Projeto */}

        <div className={`h-[50vh] article prose prose-zinc lg:prose-sm max-w-none ${(props.Parentkey % 2 == 0) ? 'bg-[#A2A2A3]' : 'bg-[#4A3A34]'} w-full `}>

  
          <div className="w-full flex text-center justify-between self-center items-center px-64  ">

            <Image src={props.thumbnail ? props.thumbnail : ""} className='mx-5 mt-2 shadow-xl rounded-2xl' width={200} height={200} alt={props.nome}></Image>

            <div className='flex flex-col justify-center items-center' >
              <h1 className={`flex self-start items-start justify-start w-full text-black`}>{props.nome}</h1>
              <p className={`text-start pl-20 text-black`}>
                {props.descricao}
              </p>
            </div>
          </div>

        </div>

        {/* Imagens de Demostração */}

        <div className={`h-[50vh] article prose lg:prose-sm max-w-none ${(props.Parentkey % 2 == 0) ? 'bg-[#4A3A34] text-white' : 'bg-[#A2A2A3] text-black'} w-full`}>
          <div className='h-full'>
            <h1 className={`flex h-1/6 self-start justify-center px-10 pt-5 ${(props.Parentkey % 2 == 0) ? "text-white" : "text-black"}`}>Demos</h1>
            <div className="w-full h-2/6 pt-8 flex text-center self-center items-center justify-center">
              {props.demos.map((parceiro: demosType, key: any) =>
                <Image
                  src={parceiro.url}
                  alt="Imagem Demo"
                  key={key}
                  height={200}
                  width={200}
                  className='w-1/6 lg:w-1/6 lg:h-1/6 px-10'
                  quality={80}
                  onClick={() => setShowParceiros(true)}
                />
              )
              }



              <Lightbox
                open={showParceiros}
                close={() => setShowParceiros(false)}
                slides={slide}
              />
            </div>
          </div>
        </div>



      </div>


    </div>
  )
}
