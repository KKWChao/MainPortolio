import { motion } from "framer-motion";
import Section from "@/components/Reusable/Section";

function About() {
  return (
    <Section id="about" className="mx-auto">
      <div className="overflow-hidden flex flex-col items-center">
        <motion.h1
          className="text-5xl p-2 rounded-md bg-opacity-80 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          About Me
        </motion.h1>
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          <p className="lg:text-2xl lg:w-1/2 text-sm md:px-10 px-2 md:text-2xl md:w-3/4 md:mt-10 bg-black rounded-lg bg-opacity-60 ease-in-out duration-300">
            I'm a junior web developer with a focus on JavaScript, HTML/CSS, and
            React. I aim to create exceptional user experiences, using my
            understanding of JavaScript to develop elegant and scalable
            front-end solutions. My experience includes combining front-end
            frameworks with back-end technologies, building RESTful APIs, and
            working with databases like MySQL, PostGreSQL, and MongoDB. I'm
            committed to staying updated on emerging web technologies and best
            practices, always seeking opportunities to enhance my skills. If
            you're looking for a dedicated web developer to bring your vision to
            life, I'd be delighted to connect with you. I'm eager to learn more
            about your project and discuss how I can contribute to its success.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

export default About;
