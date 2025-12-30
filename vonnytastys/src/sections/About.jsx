import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      id="aboutus"
      className="py-19 px-4 my-16 max-w-7xl mx-auto font-inter "
    >
      <motion.h3 className="text-center text-pink-500 mb-4 font-semibold ">
        About Us
      </motion.h3>
      <motion.h1 className="text-4xl text-center font-playfair font-bold">
        Refined Baking,{" "}
        <span className="text-pink-500">Exceptional Quality.</span>
      </motion.h1>
      <div className="flex-col items-center mt-11 gap-16">
        <div className="flex flex-col lg:flex-row justify-center mt-11 gap-16">
          <p className="font-inter max-w-xl text-center m-auto lg:w-150 lg:text-left">
            <span className="text-3xl font-playfair text-pink-500">“</span>
            Vonny Tastys is a modern bakery that creates delicious cakes,
            snacks, and enjoyable food experiences for all kinds of occasions.
            We take pride in making beautiful desserts and hosting fun
            bake-and-paint sessions, using quality ingredients and careful
            preparation in everything we do. Our goal is to bring people
            together through good food, creativity, and warm moments.
            <br />
            <br />
            Whether you are celebrating a birthday, planning an event, or just
            treating yourself to something sweet, Vonny Tastys is here to make
            your experience special. Every order and activity is made with care,
            passion, and a love for making people happy.
            <span className="text-3xl text-pink-500 font-playfair">”</span>.
          </p>
          <div className="w-100 ">
            <video controls className="w-full h-auto rounded-lg  mt-4  ">
              <source src="/video/aboutus.webm" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* statistics */}
        <div className="flex flex-wrap mt-20 gap-25  text-gray-600 justify-center ">
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
        </div>
      </div>

      {/* Mission cards */}
      <div className="my-20  font-inter mt-50 ">
        <h2 className="text-center text-4xl font-extrabold mb-3 font-playfair">
          Who We <span className="text-pink-500">Are</span>
        </h2>
        <p className="font-inter text-center text-gray-500 w-88 lg:w-3xl m-auto">
          We are committed to delivering exceptional baked goods and creating
          memorable experiences for our customers.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 mt-4">
          <div className="  p-5 flex-1 shadow-lg/30 bg-white rounded-2xl transition-all ">
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
          </div>

          <div className="  flex-1 p-5 shadow-lg/30 bg-white rounded-2xl transition-all ">
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
          </div>
        </div>
      </div>

      {/* Founder */}

      <div className="flex flex-col lg:flex-row gap-15 justify-center my-50 lg:px-30">
        <div className="flex-1 flex-col text-center lg:w-2xl">
          <h2 className="text-4xl font-black">
            Meet Our Head Chef and Founder of{" "}
            <span className="text-pink-500 font-bold font-playfair">
              Vonny Tastys
            </span>
          </h2>
          <p>
            Richmond Akagre Nsogurime is the founder and driving force behind
            AkagreBakeryShop. An award-winning entrepreneur and a remarkably
            self-taught baker, Richmond launched his journey in 2020 after a
            single homemade birthday cake sparked a deep passion for the craft.
            With no formal training, he skillfully honed his expertise using
            online resources, transforming his creative vision into a celebrated
            local brand.
            <br />
            Today, AkagreBakeryShop is renowned for its exceptional quality,
            accessible pricing, and its mission to empower the community.
            Richmond's practical training programs have equipped numerous
            aspiring bakers to launch their own businesses, cementing his legacy
            as both a master baker and a dedicated mentor. His story is a
            powerful testament to how innovation, dedication, and self-belief
            can build a remarkable enterprise from the ground up.
          </p>
        </div>
        <div className="flex-1 ">
          <img
            src="/images/vonny.jpg"
            alt="Picture of Founder"
            className="rounded-4xl"
          />
        </div>
      </div>
    </motion.section>
  );
}
