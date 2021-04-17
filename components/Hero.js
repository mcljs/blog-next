import React from "react";
import Image from 'next/image'
export const Hero = () => {


  return (
        <div className=" p-12  grid grid-cols-1 md:grid-cols-2 items-center bg-gray-50">
          <div>
            <h1 className=" text-4xl font-bold ">
              Hola, soy Michael. Frontend Development. Bienvenido a otro blog de tecnologias y escritos.
            </h1>

            <div className="flex overflow-hidden max-w-full items-center relative mt-2">
              <div className="relative">
                <Image
                  src="/image.jpg"
                  style={{ objectFit: "cover" }}
                 width={40}
                  height={40}
                 className="inline-block h-10 w-10   mr-4 rounded-full text-white shadow-solid"
                />{" "}
                <span className="h-4 w-4 bg-green-400 mx-4 -mt-1 border-gray-100 border-2   rounded-full right-0 top-0  absolute"></span>
              </div>{" "}
              <p className="py-4 text-gray-700 text-md">
               Tiempo de respuesta: dentro de 1-2 días hábiles
              </p>
            </div>
          </div>

          <div>
            <Image
              style={{ objectFit: "cover" }}
              src="/header.jpg"
              width={550}
              height={300}
              className="rounded"
            />{" "}
          </div>
        </div>

   
  );
};
