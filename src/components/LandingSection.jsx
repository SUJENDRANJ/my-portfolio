import { useEffect, useRef } from "react";

const LandingSection = () => {
  const scroll = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      if (scroll.current)
        scroll.current.style.transform = "translateY(" + offset * 1.75 + "px)";
    });
  }, []);

  return (
    <div
      ref={scroll}
      id="parallax"
      className="container flex flex-col justify-center h-[99vh]"
    >
      <div className="flex flex-col mt-24 md:mt-12 relative items-center">
        <img
          src="/suje.png"
          alt="Sujendran"
          width="320px"
          className="object-contain drop-shadow-md z-10 w-[250px] sm:w-[320px]"
        />
        <div className="w-60 h-60 sm:w-96 sm:h-96 rounded-3xl rotate-45 top-6 bg-gradient-to-t from-brand to-indigo-500 absolute"></div>
        <div className="absolute flex flex-col gap-2 -bottom-16 z-20">
          <h1 className="bg-blue-500 px-4 pt-1 text-center pb-4 xs:pb-5 w-screen xs:w-full text-3xl  xs:text-4xl sm:text-5xl font-bold text-white">
            Sujendran J
          </h1>
          <span className="text-center uppercase text-black text-2xl sm:text-3xl">
            Full Stack Developer
          </span>
        </div>
      </div>

      <a href="#projects" className="mt-24 animate-bounce flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 sm:h-20 text-blue-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </a>
    </div>
  );
};

export default LandingSection;
