import React from "react";

const About = () => {
  return (
    <div
      id="aboutme"
      className="min-h-screen max-w-6xl px-5 pt-10 pb-16 md:pb-10"
    >
      <div className="text-center mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-400">
          About Me
        </h1>
        {/* <h3 className="text-xl mb-5 font-light">
                Some of the awesome comments from our YouTube channel.
              </h3> */}
        <div className="text-center mb-10">
          {/* Custom Style Used */}
          <span className="line w-1"></span>
          <span className="line w-3"></span>
          <span className="line w-40"></span>
          <span className="line w-3"></span>
          <span className="line w-1"></span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 justify-items-center">
        <img
          src="/about.jpg"
          alt="Sujendran"
          className="border-[16px] mb-5 md:m-0 md:h-5/6 border-black"
        />
        <div className="flex flex-col h-5/6 gap-7 font-mono justify-between text-justify">
          <span className="text-xl sm:text-2xl m-1">
            Sujendran J is a Frontend Developer likes to work on technologies
            like React JS, Next JS, Node JS, etc... Plus, He Likes to talk in
            third person about himself. <br />
            Born and raised in Vellore, Tamil Nadu. In his free time he likes to
            work as a freelancer.
          </span>
          <div>
            <div className="flex flex-col text-lg sm:text-xl gap-5">
              <span className="flex justify-between">
                <b>Name</b>
                <span>Sujendran</span>
              </span>
              <span className="flex justify-between">
                <b>Born</b>
                <span>13 April 2002</span>
              </span>
              <span className="flex justify-between">
                <b>Occupation</b>
                <span>Web Developer</span>
              </span>
              <span className="flex justify-between">
                <b>Hobbies</b>
                <span>Gymnasium</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-lg">
            <a
              // href="https://www.youtube.com/c/RoadsideCoder"
              target="_blank"
              rel="noreferrer"
              className="bg-orange-500 btn2 cursor-pointer"
            >
              Leetcode
            </a>
            <a
              // href="https://github.com/sujendranj"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 btn2 cursor-pointer"
            >
              GitHub
            </a>
            <a
              // href="https://www.linkedin.com/in/sujendran-j"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 btn2 cursor-pointer"
            >
              Linkdin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
