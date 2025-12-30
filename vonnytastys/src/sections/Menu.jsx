import Product from "../components/product";
import { motion } from "motion/react";

export default function Menu() {
  return (
    <section id="menu" className=" bg-white py-16">
      <div className="pt-8">
        <h1 className="text-5xl text-center font-extrabold font-playfair mb-4">
          {" "}
          Our Menu{" "}
        </h1>
        <p className="mb-14 text-gray-500 text-sm text-center w-88 md:w-4xl m-auto font-inter">
          {" "}
          Our cakes and pastries are baked fresh with care to deliver delicious
          flavour, moist textures, and pure satisfaction. Choose from our
          Regular Flavours, made up of timeless classics, or explore our Luxury
          Flavours for a richer and more elevated taste experience. With a
          variety of fillings and coverings available, each cake can be
          customized to perfectly suit your taste and occasion.
          <br /> Call us on 055 762 4449, if you want to make enquiries or
          purchase from us
        </p>
      </div>

      <motion.div
        className="w-full h-1 bg-black  my-14"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>

      <div className=" flex flex-col gap-6  md:grid md:grid-cols-2 md:gap-4 py-4 px-10 md:px-17 ">
        <div className="flex flex-col justify-center gap-6 lg:gap-4 px-4  font-inter border border-pink-500 rounded-2xl">
          <h3 className="text-center text-pink-500 text-2xl font-bold font-playfair">
            Regular Flavors
          </h3>
          <p className="text-center font-poppins text-sm text-gray-600">
            Our Regular Flavours are everyday cakes that never go out of
            style—perfect for birthdays, casual celebrations, and simple sweet
            cravings.
          </p>
          <div className="grid grid-cols-3 gap-x-1 gap-y-4 justify-items-center">
            <div className="flex text-sm">
              <img
                src="/icons/vanilla.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Vanilla</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/red-velvet.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Red Velvet</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/chocolate-bar.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Chocolate</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/caramel.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Caramel</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/strawberry.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Strawberry</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/coffee-beans.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Coffee</p>{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4  px-4 font-inter border border-pink-500 rounded-2xl">
          <h3 className="text-center text-pink-500 text-2xl font-bold font-playfair">
            Luxury Flavors
          </h3>
          <p className="text-center font-poppins text-gray-500 text-sm">
            Our Luxury Flavours transform familiar cakes into a rich,
            unforgettable sugar experience—ideal for special occasions and
            premium celebrations.
          </p>
          <div className="flex flex-wrap  justify-center md:grid  md:grid-cols-3 gap-x-2 gap-y-3 justify-items-center items-center px-2">
            <div className="flex text-sm">
              <img
                src="/icons/blueberry.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Lemon Blueberry</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/cookie.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Cookies & Cream</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/wine-bottle.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Baileys Infused</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/fruits.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Traditional Fruit Cake</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/candy.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Sticky Toffee</p>{" "}
            </div>
            <div className="flex text-sm">
              <img
                src="/icons/cheese.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>Classic Cheesecake</p>{" "}
            </div>
            <div className="flex text-sm col-span-3 justify-center">
              <img
                src="/icons/whitechocolate.png"
                alt="vanilla icon"
                loading="lazy"
                className="w-4 h-4 md:w-4.5 md:h:4.5 mr-2"
              />{" "}
              <p>White Chocolate Strawberry</p>{" "}
            </div>
          </div>
        </div>
      </div>

      {/*Product section */}
      {/*Wedding cake */}
      <div className="my-32">
        <h1 className="text-center text-3xl md:text-4xl font-playfair font-extrabold ">
          Signature Wedding Cakes
        </h1>
        <p className="text-xs mt-1 md:text-sm text-gray-400 text-center font-poppins w-93 md:w-3xl m-auto">
          Thoughtfully designed and freshly baked to make your special day truly
          unforgettable, with elegant flavours, refined finishes, and bespoke
          details tailored to your love story.
        </p>
        <div className="flex flex-wrap justify-center gap-6 my-10">
          <Product image="/images/products/wed1.webp" />
          <Product image="/images/products/wed2.webp" />
          <Product image="/images/products/wed3.webp" />
          <Product image="/images/products/wed4.webp" />
        </div>
      </div>

      {/*Classic & Celebration Cakes */}
      <div className="my-32">
        <h1 className="text-center text-3xl md:text-4xl font-playfair font-extrabold ">
          Classic & Celebration Cakes
        </h1>
        <p className="text-xs mt-1 md:text-sm text-gray-400 text-center font-poppins w-93 md:w-3xl m-auto">
          Deliciously baked for life’s everyday moments and celebrations,
          available in a range of sizes and flavours, and customizable to suit
          your taste, style, and occasion.
        </p>
        <div className="flex flex-wrap justify-center gap-6 my-10">
          <Product image="/images/products/p1.webp" />
          <Product image="/images/products/p2.webp" />
          <Product image="/images/products/p3.webp" />
          <Product image="/images/products/p4.webp" />
          <Product image="/images/products/p5.webp" />
          <Product image="/images/products/p6.webp" />
          <Product image="/images/products/p7.webp" />
          <Product image="/images/products/p8.webp" />
          <Product image="/images/products/p9.webp" />
          <Product image="/images/products/p10.webp" />
          <Product image="/images/products/p11.webp" />
          <Product image="/images/products/p12.webp" />
        </div>
      </div>

      {/*Freshly Baked Pastries*/}
      <div className="mt-32 mb-2">
        <h1 className="text-center text-4xl font-playfair font-extrabold ">
          Freshly Baked Pastries
        </h1>
        <p className="text-xs mt-1 md:text-sm text-gray-400 text-center font-poppins w-93 md:w-4xl m-auto ">
          Freshly baked pastries crafted with care, offering rich flavours, soft
          textures, and the perfect treat for any time of day.
        </p>
        <div className="flex flex-wrap justify-center gap-6 my-10">
          <Product image="/images/products/p1.webp" />
          <Product image="/images/products/p2.webp" />
          <Product image="/images/products/p3.webp" />
          <Product image="/images/products/p4.webp" />
        </div>
      </div>

      <p className="w-88 md:w-4xl text-center m-auto font-bold text-gray-500">
        <span className="text-red-500 font-extrabold">Please note</span> that
        the products showcased are a curated preview from our collection. Our
        full menu includes additional flavours, designs, and custom options. For
        enquiries, customization, or more photos, please send us a direct
        message or call us on 055 762 4449
      </p>
    </section>
  );
}
