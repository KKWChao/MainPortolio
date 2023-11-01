import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Section from "@/components/Reusable/Section";
import Footer from "@/components/Footer";

function Contact() {
  const formStyle = "p-2 md:p-5 rounded-md opacity-90 text-black";

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <Section id="contact" className="mx-auto">
      <div className="flex justify-center">
        <motion.h1
          className="text-5xl md:mb-10 title p-2 rounded-md bg-opacity-80 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          Contact Me
        </motion.h1>
      </div>

      <motion.div
        className="flex justify-center items-center mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <form
          className="md:w-1/2 px-5 md:px-auto flex flex-col items-center gap-10 "
          target="_blank"
          onSubmit={onSubmit}
          // add my link from from submit
          action="https://formsubmit.co/b027a09c64d7703deb2e4956f8e6d717"
          method="POST"
        >
          <div className="flex gap-5 w-full">
            {/* NAME INPUT */}
            <input
              type="text"
              className={`${formStyle} w-1/2`}
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red-300">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            {/* EMAIL INPUT */}
            <input
              className={`${formStyle} w-1/2`}
              type="text"
              onSubmit={onSubmit}
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-300">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
          </div>

          {/* MESSAGE INPUT */}
          <textarea
            className={`${formStyle} w-full h-[10rem]`}
            placeholder="MESSAGE"
            onSubmit={onSubmit}
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-red-300">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <button
            type="submit"
            className="button w-48 rounded-lg border-4 border-white border-opacity-80 
              py-3 text-xl font-bold transition duration-200 ease-in-out hover:bg-gray-300 active:bg-gray-400 hover:border-gray-300"
          >
            SUBMIT
          </button>
        </form>
        <Footer />
      </motion.div>
    </Section>
  );
}

export default Contact;
