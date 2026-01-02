import { motion } from "motion/react";
import { useRef, useState } from "react";
import { CirclePlay } from "lucide-react";

export default function About() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  return (
    <motion.section
      id="aboutus"
      className="py-19 px-4 my-16 max-w-7xl mx-auto font-inter "
    >
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-pink-500 mb-4 font-semibold "
      >
        About Us
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl text-center font-playfair font-bold"
      >
        Refined Baking,{" "}
        <span className="text-pink-500">Exceptional Quality.</span>
      </motion.h1>
      <div className="flex-col items-center mt-11 gap-16">
        <div className="flex flex-col lg:flex-row justify-center mt-11 gap-10 items-center">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-inter max-w-xl text-center lg:max-w-lg lg:text-left"
          >
            <span className="text-3xl font-playfair text-pink-500">“</span>
            Vonny Tastys is a modern bakery that creates delicious cakes,
            snacks, and enjoyable food experiences for all kinds of occasions.
            We take pride in making beautiful desserts and hosting fun
            cake-and-sip sessions, using quality ingredients and careful
            preparation in everything we do. Our goal is to bring people
            together through good food, creativity, and warm moments.
            <br />
            <br />
            Whether you are celebrating a birthday, planning an event, or just
            treating yourself to something sweet, Vonny Tastys is here to make
            your experience special. Every order and activity is made with care,
            passion, and a love for making people happy.
            <span className="text-3xl text-pink-500 font-playfair">”</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-md relative"
          >
            {/* Thumbnail + Play Button */}
            {!playing && (
              <div
                onClick={() => {
                  setPlaying(true);
                  videoRef.current.play();
                }}
                className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer rounded-lg bg-black/20"
              >
                <div className=" text-white/90 flex items-center justify-center shadow-lg hover:scale-110 hover:text-pink-500 transition">
                  <CirclePlay size={100} />
                </div>
              </div>
            )}

            {/* Video */}
            <video
              ref={videoRef}
              controls={playing}
              className="w-full h-auto rounded-lg"
              poster="/video/vonny.webp"
            >
              <source src="/video/aboutus.webm" type="video/webm" />
            </video>
          </motion.div>
        </div>

        {/* statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap mt-20 gap-25  text-gray-600 justify-center "
        >
          <div className="flex-col text-center gap-2">
            <h3 className="text-4xl text-pink-500 font-bold">7+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="flex-col text-center">
            <h3 className="text-4xl text-pink-500 font-bold">1000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="flex-col text-center">
            <h3 className="text-4xl text-pink-500 font-bold">1000+</h3>
            <p>Baked Cakes</p>
          </div>
        </motion.div>
      </div>

      {/* Mission cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-20  font-inter mt-50 "
      >
        <h2 className="text-center text-4xl font-extrabold mb-3 font-playfair">
          Who We <span className="text-pink-500">Are</span>
        </h2>
        <p className="font-inter text-center text-gray-500 w-88 lg:w-3xl m-auto">
          We are committed to delivering exceptional baked goods and creating
          memorable experiences for our customers.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 mt-4">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="  p-5 flex-1 shadow-lg/30 bg-white rounded-2xl transition-all "
          >
            <div>
              <img src="" alt="" />
            </div>
            <h3 className="text-center text-pink-500 font-playfair text-2xl font-bold">
              Our Mission
            </h3>
            <p className="text-sm">
              Our mission is to deliver high-quality baked goods, snacks, and
              coffee while creating welcoming food experiences for our
              customers. We are committed to using quality ingredients, skilled
              preparation, and thoughtful service to support celebrations,
              events, and everyday moments. Through our bakery, coffee shop, and
              creative activities, we aim to offer consistency, comfort, and
              satisfaction in everything we do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="  flex-1 p-5 shadow-lg/30 bg-white rounded-2xl transition-all "
          >
            <div>
              <img src="" alt="" />
            </div>
            <h3 className="text-center text-pink-500 font-playfair text-2xl font-bold">
              Our Vision
            </h3>
            <p className="text-sm">
              Our vision is to build a trusted and respected bakery and coffee
              brand known for quality, creativity, and excellent customer
              experience. We strive to grow into a space where great food, good
              coffee, and engaging activities come together, making Vonny Tastys
              a preferred choice for events, relaxation, and memorable
              experiences.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Founder */}

      <div className="flex flex-col lg:flex-row gap-15 justify-center my-50 lg:px-30">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex-col text-center lg:w-3xl"
        >
          <h2 className="text-4xl font-black">
            Meet Our Head Chef and Founder of{" "}
            <span className="text-pink-500 font-bold font-playfair">
              Vonny Tastys
            </span>
          </h2>
          <p>
            Yvonne Enyonam Akakpo is the founder and creative force behind Vonny
            Tastys, a premium baking brand known for quality, consistency, and
            exceptional taste. With over 9 years of experience, she has
            transformed a personal passion for baking into a trusted and
            thriving brand. A graduate of Political Science from the University
            of Ghana and an alumna of Mawuli Senior High School, Yvonne brings
            together analytical thinking and creative artistry. Though largely
            self-taught, she further refined her skills through specialized
            baking courses in both Ghana and Nigeria, strengthening her
            professional approach to the craft. As a young and accomplished
            entrepreneur, Yvonne successfully balances her business
            responsibilities with family life as a wife and mother of three.At
            the heart of Vonny Tastys is her approachable leadership, which
            creates a sense of belonging and reflects the brand’s deep-rooted
            commitment to purpose and experience.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 "
        >
          <img
            src="/images/founder.webp"
            alt="Picture of Founder"
            className="rounded-4xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
