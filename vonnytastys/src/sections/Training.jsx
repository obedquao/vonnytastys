import { motion } from "framer-motion";

export default function Training() {
  return (
    <section id="training" className="py-32">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-extrabold  text-center font-playfair my-4 md:my-8"
      >
        Sharing 9+ Years of Baking Experience
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-gray-500 text-sm text-center w-88 md:w-4xl m-auto font-poppins"
      >
        For over nine years, Vonny Tastys has been baking with passion,
        consistency, and love. From everyday treats to special celebration
        cakes, our journey has been built on quality, great taste, and happy
        customers. Now, we are opening our kitchen to share that experience
        through an upcoming baking Class, designed to teach practical skills,
        trusted recipes, and real baking knowledge used in the industry.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 my-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
          }}
          className="flex flex-col p-4 gap-6 md:gap-19 w-80 bg-white rounded-2xl shadow-sm"
        >
          <h3 className="text-base font-inter text-center font-bold ">
            9+ Years of Proven Expertise
          </h3>
          <p className="text-center font-poppins  text-xs text-gray-400 ">
            Learn from a bakery brand built on years of real experience,
            consistency, customer trust and not trial and error.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.8,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.8 },
          }}
          className="flex flex-col p-4 gap-6 md:gap-19 w-80 bg-white rounded-2xl shadow-md "
        >
          <h3 className="text-base font-inter text-center font-bold ">
            Practical and Industry-Ready Training
          </h3>
          <p className="text-center font-poppins text-xs text-gray-400 ">
            Our classes focus on hands-on skills, trusted recipes, and
            techniques used daily at Vonny Tastys to produce quality results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.85 },
          }}
          className="flex flex-col p-2 gap-6 md:gap-19 w-80 bg-white rounded-2xl shadow-md"
        >
          <h3 className="text-base font-inter text-center font-bold ">
            A Brand That Values Quality & Growth
          </h3>
          <p className="text-center font-poppins  text-xs text-gray-400 ">
            We don’t just teach baking, we teach confidence, professionalism,
            and the standards needed to grow as a baker or business.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
