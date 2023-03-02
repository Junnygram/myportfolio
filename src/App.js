import { BsFillMoonStarsFill } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import { FcCursor } from "react-icons/fc";
import Typed from "react-typed";
import { useState } from "react";
// import design from "../public/design.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const Card = [
    {
      name: "Snack-eat",
      description: "My snacks store",
      src: " https://stack-eat.onrender.com/",
    },
    {
      name: "Olatube",
      description: "My youtube clone",
      src: "https://junnytube.netlify.app/",
    },

    {
      name: "E-commerce",
      description: "Amazon clone",
      src: "https://willey123.onrender.com/",
    },
    {
      name: "Monster",
      description: "A filter game",
      src: "https://monsterr-rolodex.netlify.app/",
    },
    {
      name: "Data-finance ",
      description: "landing page ",
      src: "https://data-financee.netlify.app/",
    },
    {
      name: "User login ",
      description: "log I/O application",
      src: "https://olalogin-13ec0.web.app/",
    },

    {
      name: "food store",
      description: "My foodapp",
      src: "https://olaleye-s-food-app.web.app/",
    },

    {
      name: "Project1",
      description: "My 1st project",
      src: "https://olaleyeportfolio.netlify.app/",
    },
    {
      name: "Project2",
      description: "My 2nd project",
      src: "https://olaleyereactportfolio.netlify.app",
    },
  ];
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <div>
          <section>
            <nav className="py-10 mb-10 flex justify-between ">
              <h1 className="text-xl font-burtons dark:text-gray-200 ">
                developedbyola
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl dark:text-gray-200 "
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="https://olasportfolio.netlify.app"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <div className="max-w-[800px] mt-[-150px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <article className="dark:text-gray-200 ">
            <h2 className="text-5xl py-2 text-teal-400 font-medium mt-9">
              <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                strings={[
                  "Olaleye Oyewunmi",
                  "Olaleye Oyewunmi",
                  "Olaleye Oyewunmi",
                ]}
                typeSpeed={150}
                backSpeed={180}
                loop
              />
            </h2>
            <h3>Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a <span className="text-teal-500">Frontend </span> deveoper,
              join me and lets start building
            </p>
          </article>

          <div className="flex justify-center gap-8 py-3">
            <SocialIcon
              url="https://www.linkedin.com/in/olaleye-oyewunmi-4967a5223"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/Junnygram"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://api.whatsapp.com/send/?phone=08055408100&text&type=phone_number&app_absent=0"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
          <div className="mx-auto mt-5 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden  md:h-96 md:w-96 ">
            <img
              src="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
              class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
              alt=""
            />
            {/* <img src=""/>
            <Image src={olaimage} layout="fill" objectFit="cover" /> */}
          </div>
        </div>
        <div className="px-3 text-center dark:text-gray-200 ">
          <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as designer/developer, I've worked
            on multiple projects for
            <span className="text-teal-500"> myself </span>, done{" "}
            <span className="text-teal-500">internship </span> in software
            companies and also collaborated with talented minds.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming.
          </p>
        </div>

        <div className="container w-100 lg:grid grid-cols-2 gap-4 sm:w-4/5 mx-auto flex flex-col dark:bg-white-900  ">
          {Card.map((info) => (
            <a href={`${info.src}`}>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-2  ">
                <h1 className="text-gray-800 py-1   dark:text-white text-2xl">
                  {info.name}
                </h1>
                <p className="text-gray-800 py-1  dark:text-white">
                  {info.description}
                </p>
                <h6 className="flex rounded-xl shadow-lg text-red-800 bg-neutral-900 justify-center">
                  <p className="px-6">Click me</p>{" "}
                  <p>
                    <FcCursor />
                  </p>
                </h6>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
