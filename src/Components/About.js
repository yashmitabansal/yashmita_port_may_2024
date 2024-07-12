import React from "react";
// import { NavLink } from "react-router-dom";
import "./About.css";
import Resume from "../Images/yashmita.jpg";
const About = () => {
  return (
    <div className="AboutPage">
      <div className=" body-font divide-y divide-gray-700">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col ">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <p className="font-medium text-white AboutMeText sm:text-left sm:text-3xl md:text-3xl">
              {" "}
              About me
            </p>
          </div>
          <div className="lg:flex-grow md:w-3/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left sm:text-left">
            <h1 className="title-font sm:text-4xl  md:text-3xl  mb-4 font-normal text-white AboutDiv1heading">
              I am a front-end developer based in India. Has Computer Science
              Engineering background.
            </h1>
            <p className="mb-8 leading-relaxed ">
              I am a front-end developer based in India looking for exciting
              opportunities. Has Computer Science Engineering Currently, I’m
              seeking an internship opportunity to further enhance my expertise
              and contribute to innovative projects. I'm excited to collaborate
              with dynamic teams and leverage my problem-solving abilities to
              create impactful software solutions during my internship. While I
              am not programming, I enjoy Reading Books, Mandala Art. Learning
              more to improve skills.
            </p>
            <div className="w-[405px] flex flex-row items-start justify-between AboutDiv1btn ">
              <button className="inline-flex text-white bg-[#8F33F0] border-2 py-2 px-6 focus:outline-none hover:bg-[#18092F] hover:border-2 border-[#8F33F0] rounded-xl text-lg">
                <a href={Resume} className="inline-flex " download>
                  Download Resume
                  <span>
                  <svg class="h-6 w-6 text-white"  width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />  <polyline points="7 11 12 16 17 11" />  <line x1="12" y1="4" x2="12" y2="16" /></svg>
                  </span>
                </a>
              </button>

              <div className="flex space-x-3 pt-2 sm:justify-center sm:mt-0 items-start justify-between ">
                <a
                  href="https://twitter.com/yashmita_bansal"
                  className="text-gray-500 hover:text-[#8F33F0]  dark:hover:text-white"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/yashmitabansal"
                  className="text-gray-500 hover:text-[#8F33F0]  dark:hover:text-white"
                >
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/yashmitabansal/s"
                  class="ml-3 text-gray-500 cursor-pointer hover:text-[#8F33F0]"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/yassu_agarwal_14/"
                  className="ml-3 mt-1 text-gray-500 cursor-pointer hover:text-[#8F33F0]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-8 h-8"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex py-24 md:flex-row flex-col min-w-full">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 md:mb-0 mb-10 AboutDiv2">
            <p className="font-medium text-white sm:text-3xl md:text-3xl sm:text-left AboutMeText">
              My Capabilities
            </p>
          </div>
          <div className="lg:flex-grow  md:pl-16 flex flex-col md:items-start md:text-left items-center sm:text-left ">
            <p className="mb-8 leading-relaxed">
              I am always looking to add more skills. Fluent in DSA, Full-Stack
              web development, C, C++, Java, DBMS, and OOPs concepts – Let's
              code the future together!
            </p>
            <div className=" flex flex-row items-start justify-between">
              <div className="text-center sm:mt-0 row gy-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-5 lg:gap-y-6  sm:m-auto AboutDiv2tech">
                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  HTML
                </button>
                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  CSS
                </button>
                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  JavaScript
                </button>

                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  Bootstrap
                </button>
                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  TailwindCSS{" "}
                </button>
                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  {" "}
                  ReactJs{" "}
                </button>
                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  {" "}
                  Nodejs
                </button>
                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  Express.js
                </button>
                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  MongoDB
                </button>
                <button className="inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  Restful-API
                </button>
                <button className="col-span-2 inline-flex text-white border-2 border-[#8F33F0]  py-2 px-4 focus:outline-none hover:bg-[#18092F] rounded-xl text-lg">
                  Figma & Canva
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
