import React from "react";

export const Skills = () => {
  return (
    <section className="px-12 py-4 bg-gray-50">
      <div className="w-2/4 ">
        <h5 className="text-3xl font-bold">Habilidades</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-12">
        <p>
         He tomado varios cursos en línea para aprender a codificar. Algunos de estos cursos en línea que he tomado incluyen          <a
            href="https://epicreact.dev/"
            target="__blank"
            className="text-black font-bold"
          >
           Epic React With Kent C Dodds 🚀
          </a>
          <span> &amp; cursos en la plataforma de </span>
          <a
            href="https://egghead.io/"
            target="__blank"
            className="text-black font-bold"
          >
            Egghead
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 px-12 md:gap-4 justify-center items-center content-center">
        <ul className="list-disc">
          <li className="py-2">Gatsby JS</li>
          <li className="py-2">React JS</li>
          <li className="py-2">Javascript ES6</li>
        </ul>
        <ul className="list-disc">
          <li className="py-2">Tailwindcss</li>
          <li className="py-2">R</li>
          <li className="py-2">NodeJS</li>
        </ul>
        <ul className="list-disc">
          <li className="py-2">Git</li>
          <li className="py-2">Express JS</li>
          <li className="py-2">HTML &amp; CSS</li>
        </ul>
        <ul className="list-disc">
          <li className="py-2">MongoDB</li>
          <li className="py-2">Next JS</li>
          <li className="py-2">Responsive Web Design</li>
        </ul>
      </div>
    </section>
  );
};
