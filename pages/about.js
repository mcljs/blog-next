import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function About() {
    return (
      <>
      <NextSeo
   title="Sobre mí"
   titleTemplate={'%s | Michael Chacón'}
   description="Un blog de tecnología y escritos"
        canonical="https://mcljs.vercel.app"
        openGraph={{
          url: 'https://mcljs.vercel.app',
          title: 'Michael Chacón',
          description:
            'Un blog de tecnología y escritos',
          images: [
            {
              url: 'https://mcljs.vercel.app/image.jpg',
              width: 1280,
              height: 720,
              alt: 'Michael Chacón'
            }
          ],
          site_name: 'Michael Chacón'
        }}
      />
        <div className=" p-12 gap-12  grid grid-cols-1 md:grid-cols-2 items-center bg-gray-50">
        <div>
          <div className=" w-2/4 ">
            <h5 className="text-3xl font-bold">Sobre Mi</h5>
          </div>
          <div className="py-12">
            <p className="py-4">
             Soy Michael y escribo este blog. Soy venezolano. Me dedico a escribir software y 
             constribuir en proyecto, en mi tiempo libre me gusta leer y hacer escritos
             sean versos o poemas.
            </p>
            <p className="py-4">
              Comence a escribir codigo con el lenguaje de R cuando comenze en la universidad. Al comienzo
              de la pandemia en el mundo quise aventurarme en aprender desarrollo web y a dedicar hacer sitios
              y aplicaciones web.
            </p>
            <p className="py-4">
              Mi stack actual es: JavaScript con React, Gatsby y GraphQL. Este blog está hecho con NextJS
              pase modificando mi blog y pasando por otras tecnologias hasta que me senti bien creandolo y usando 
              con Next JS
            </p>
            <p className="py-4">
             Me encuentras en 
             <a className="text-yellow-800" href="https://twitter.com/mcljs15" target="_blank" rel="noreferrer"> Twitter </a>
             y  <a className="text-yellow-800" href="https://twitter.com/mcljs15" target="_blank" rel="noreferrer">Github</a>
            </p>
          </div>
        </div>
        <div>

        <div>
                <Image
                  imgStyle={{ objectFit: "cover" }}
                  src="/image.jpg"
                  width={550}
                  height={550}
                  className="rounded"
                />{" "}
              </div>
              </div>
      </div>
      </>
    )
}


