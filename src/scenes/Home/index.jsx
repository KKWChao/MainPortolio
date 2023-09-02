import Section from "@/components/Reusable/Section.jsx";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Home() {
  return (
    <Section id="home" className="">
      <div className="relative h-screen flex flex-col justify-center items-center">
        <h1 className="md:text-6xl text-3xl bg-gray-700 w-fit p-2 rounded-md bg-opacity-80">
          Hi, My name is Kelvin Chao
        </h1>
        <h1 className=" text-xl mt-10 bg-gray-700 w-fit p-2 rounded-md bg-opacity-80">
          Full Stack Engineer
        </h1>
        <div className="absolute bottom-10">
          <h3 className="flex flex-col items-center bg-gray-700 w-fit p-2 rounded-md bg-opacity-80">
            Scroll Down for More Info!
          </h3>
          <ArrowCircleDownIcon
            className="drop-shadow-lg p-1 scale-150 animate-bounce text-gray-200"
            fontSize="large"
          />
        </div>
      </div>
    </Section>
  );
}

export default Home;
