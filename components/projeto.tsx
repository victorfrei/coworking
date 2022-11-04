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

  const [showParceiros, setShowParceiros] = useState(false);

  const slide: Array<SlideImage> = [];
  props.demos.map((parceiro: demosType, key: any) =>
    slide.push({src: parceiro.url})
  );

  return (
    <div className="text-[#393f46]">
      <Head>
        <title>{props.nome} - Coworking</title>
        <meta name="description" content={props.nome} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="snap-center w-full h-full">
        {/* Imagem e Descrição do Projeto */}

        <div className={`h-[50vh] article prose lg:prose-sm max-w-none ${(props.Parentkey % 2 == 0) ? 'bg-[#A2A2A3]' : 'bg-[#4A3A34] text-white'} w-full `}>

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
            {props.demos.map((parceiro: demosType, key: any) =>
                  <Image
                    src={parceiro.url}
                    alt="Imagem Demo"
                    key={key}
                    height={200}
                    width={200}
                    className='w-3/6 lg:w-1/6 lg:h-1/6 px-10'
                    quality={80}
                    onClick={()=>setShowParceiros(true)}
                  />
                )
                }



              <Lightbox
                open={showParceiros}
                close={() => setShowParceiros(false)}
                slides={slide}
              />


              {/* <SlideshowLightbox className="w-full h-4/6 grid grid-cols-2 lg:flex text-center self-center items-center justify-center" theme="lightbox" lightboxIdentifier="lightbox1" framework="next" images={props.demos}>

                  {

                    props.demos.map((UrlDemo, key) => (
                      <Image
                        key={key}
                        src={UrlDemo?.src}
                        className='px-10'
                        alt={UrlDemo?.alt}
                        height={500}
                        width={500}
                        data-lightboxjs="lightbox1"
                        quality={80}

                      />
                    ))
                  }

                </SlideshowLightbox> */}



            </div>
          </div>
        </div>



      </div>


    </div>
  )
}
