import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Calendar } from "./Calendar";

export const Contact = () => {
  return (
    <section className="px-12 py-4">
      <div className="w-2/4 ">
        <h5 className="text-3xl font-bold">
          Soy Michael Chacón
        </h5>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 py-12 gap-12">
        <p>
Sientete libre de comunicarse conmigo si estas buscando desarrollador, 
          tiene una pregunta o simplemente desea conectarse.
                  </p>

        <div>
                    <p className="py-2">
            <Calendar
              utm={{
                utmCampaign: "Footer Section",
                utmMedium: "Personal Blog",
                utmSource: "mcljs.vercel.app",
              }}
            />
          </p>

          <div
            className="grid grid-cols-6 py-6"
            style={{
              columnGap: "2rem",
              gridTemplateColumns: "repeat(6, minmax(0, max-content))",
              justifyItems: "start",
            }}
          >
            <a
              href="https://www.linkedin.com/in/mcljs/"
              target="__blank"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/mcljs" target="__blank">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/mcljs15/" target="__blank">
              <FaInstagram className="h-6 w-6" />
            </a>
                      <a href="https://twitter.com/mcljs15" target="__blank">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://github.com/mcljs/" target="__blank">
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
