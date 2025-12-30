import { useState, useEffect } from "react";
import { motion } from "motion/react";
import "../styles/home.css"

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
     className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black font-inter"
>
    
      {/* Background Images */}
   {backgroundImages.map((image, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${image})` }}
    className={`homebg      
      ${index === currentImage
        ? "active"
        : ""
      }
    `}
  />
))}



      {/* Dark Overlay */}
      <div
        className="homeoverlay"
      />

      {/* Content */}
      <motion.div
        className="
          relative z-4
          top-15
          text-center text-white
          max-w-200
          px-5
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="
            font-inter
            text-4xl
            font-semibold
            leading-[1.2]
            mb-5
            uppercase
            tracking-[-0.04em]
            drop-shadow-[2px_2px_8px_rgba(0,0,0,0.5)]
           
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Freshly Baked Cakes <br/> Made With Love
        </motion.h1>

        <motion.p
          className="
            text-xl
            leading-[1.6]
            mb-10
            text-white/95
            drop-shadow-[1px_1px_4px_rgba(0,0,0,0.5)]
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
         Delicious cakes, pastries, and treats made fresh to brighten every moment.
        </motion.p>


        <div className="flex items-center gap-3.5 justify-center">
          <motion.button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="
            inline-flex items-center gap-2.5
            px-4 py-4
            border-2 border-white
            text-white
            rounded-xl
            text-[12px]
            font-semibold
            uppercase tracking-[1px]
            transition-all duration-300 ease-in-out
            hover:bg-pink-500 hover:text-white hover:border-pink-500
            hover:-translate-y-0.5
            cursor-pointer
          "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Place Your Order
        </motion.button>
          <motion.button
          className=" inline-flex items-center gap-2.5
            px-4 py-4
            border-2 border-pink-500
            text-pink-500
            rounded-xl
            text-[12px]
            font-semibold
            uppercase tracking-[1px]
            transition-all duration-300 ease-in-out
            hover:bg-white hover:border-white hover:text-pink-500
            hover:-translate-y-0.5
            cursor-pointer"

              initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          >Get In Touch</motion.button>
        </div>
        
      </motion.div>
    </section>
  );
}
