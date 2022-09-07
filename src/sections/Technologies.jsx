import frontendIcon from "../images/frontend.png";
import backendIcon from "../images/backend.png";
import competitiveIcon from "../images/competitive.png";

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="p-12 flex justify-between tablet:flex-col tablet:px-24 lg:px-10 sm:px-4"
    >
      <div className="bg-slate-700 text-white border-t-4 border-red-500 rounded-xl flex flex-col justify-start text-center w-[30%] px-5 pt-5 pb-10 items-center laptop:w-[31%] tablet:w-full tablet:mb-8">
        <img
          src={frontendIcon}
          className="w-20 h-20 mb-3 laptop:w-16 laptop:h-16"
          alt="Frontend Development"
        />
        <h3 className="text-3xl font-bold laptop:text-2xl">
          Frontend Development
        </h3>
        <p className="text-lg mt-2 laptop:text-base">
          I have been doing frontend development since the day I started coding,
          and I love being able to materialize the ideas that I have.
        </p>
        <div className="flex flex-col my-16 laptop:my-10">
          <h6 className="text-2xl text-yellow-600 laptop:text-xl">
            Languages I speak:
          </h6>
          <p className="text-xl laptop:text-lg">HTML, CSS, Javascript, Git</p>
        </div>
        <div className="flex flex-col">
          <h6 className="text-2xl text-yellow-600 laptop:text-xl">
            Libraries/Frameworks that I use:
          </h6>
          <p className="text-xl laptop:text-lg">
            React, Redux, Tailwind, jQuery, Framer Motion, GSAP, ThreeJS
          </p>
        </div>
      </div>
      <div className="bg-slate-700 text-white border-t-4 border-red-500 rounded-xl flex flex-col justify-start text-center w-[30%] px-5 pt-5 pb-10 items-center laptop:w-[31%] tablet:w-full tablet:mb-8">
        <img
          src={backendIcon}
          className="w-20 h-20 mb-3 laptop:w-16 laptop:h-16"
          alt="Backend Development"
        />
        <h3 className="text-3xl font-bold laptop:text-2xl">
          Backend Development
        </h3>
        <p className="text-lg mt-2 laptop:text-base">
          A strong and secure backend is the backbone for any good project,
          providing your users with the chance to fully and securely enjoy it.
        </p>
        <div className="flex flex-col my-16 laptop:my-10">
          <h6 className="text-2xl text-yellow-600 laptop:text-xl">
            Languages I speak:
          </h6>
          <p className="text-xl laptop:text-lg">SQL, MongoDB Query Language</p>
        </div>
        <div className="flex flex-col">
          <h6 className="text-2xl text-yellow-600 laptop:text-xl">
            Technologies I use:
          </h6>
          <p className="text-xl laptop:text-lg">NodeJS, ExpressJS, MongoDB</p>
        </div>
      </div>
      <div className="bg-slate-700 text-white border-t-4 border-red-500 rounded-xl flex flex-col justify-start text-center w-[30%] px-5 pt-5 pb-10 items-center laptop:w-[31%] tablet:w-full">
        <img
          src={competitiveIcon}
          className="w-20 h-20 mb-3 laptop:w-16 laptop:h-16"
          alt="Competitive Programming"
        />
        <h3 className="text-3xl font-bold laptop:text-2xl">
          Competitive Programming
        </h3>
        <p className="text-lg mb-16 mt-2 laptop:text-base laptop:mb-8">
          I have had a passion for creating algorithms since I took my first
          course in Data Structures and Algorithms. I honestly consider this
          part of programming as being one of the most fun and exciting,
          especially participating in contests.
        </p>
        <div className="flex flex-col laptop:my-10">
          <h6 className="text-2xl text-yellow-600 laptop:text-xl">
            Languages I use for creating algorithms:
          </h6>
          <p className="text-xl laptop:text-lg">Python, Javascript</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
