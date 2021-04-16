import React from "react";

export const About = () => {
  return (
    <section className="px-12 py-4">
      <div className=" w-2/4 ">
        <h5 className="text-3xl font-bold">Acerca de mi</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-12">
        <p>
          Soy estudiante de Ingeniera en Sistema y Estadistica. Actualmente vivo en Venezuela. En mi tiempo libre me dedico a estudiar para crear mejores desarrollos y escribir.
                 </p>
        <p>
          Soy Desarrollador Frontend principalmente con el stack MERN (MongoDB, Express,React JS, Node JS)
                  </p>
      </div>
    </section>
  );
};
