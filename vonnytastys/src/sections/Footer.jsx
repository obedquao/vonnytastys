import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <section className="bg-white p-8 md:p-16">
      <div className="flex flex-col md:flex-row gap-16 justify-between">
        <div className=" flex flex-row items-center justify-center ">
          <img src="/logo.png" alt="logo" className="w-32 h-auto " />
        </div>

        <div className="flex items-center  flex-row justify-center gap-10 text-center">
          <div className="flex flex-col items-center md:items-start justify-center gap-2">
            <h4 className="text-lg font-bold mb-6 font-playfair">Contact</h4>
            <p className="flex gap-2 text-sm text-gray-400 hover:text-pink-500 cursor-pointer">
              <IoCall /> 055 762 4449
            </p>
            <p className="flex gap-2 text-sm text-gray-400 hover:text-pink-500 cursor-pointer">
              <FaLocationDot /> East Legon hills, Accra
            </p>
            <a
              href="https://maps.app.goo.gl/s7DropDLd2zaf4MV7"
              className=" border hover:border-pink-500 rounded-4xl p-2 flex gap-2 text-sm text-gray-400 hover:text-pink-500 cursor-pointer"
            >
              Google Maps <MdArrowOutward />
            </a>
          </div>

          <div className="flex flex-col font-poppins md:justify-start">
            <h4 className="font-bold mb-4 font-playfair">Navigation</h4>
            <ul className="footer-links ">
              <li>
                <a
                  href="#Home"
                  className="text-sm text-gray-400 hover:text-pink-500 md:text-left"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="text-sm text-gray-400 hover:text-pink-500 text-left"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#Menu"
                  className="text-sm text-gray-400 hover:text-pink-500"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#Training"
                  className="text-sm text-gray-400 hover:text-pink-500"
                >
                  Training
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="text-sm text-gray-400 hover:text-pink-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <h3 className="text-center">Follow our socials</h3>
          <div className="flex md:justify-between gap-4 justify-center">
            <a href="https://www.tiktok.com/@vonnytastys?is_from_webapp=1&sender_device=pc">
              <img src="icons/social/tiktok.png" className="w-6" />
            </a>

            <a href="https://www.instagram.com/vonny_tastys/">
              <img src="icons/social/instagram.png" />
            </a>
            <a href="https://wa.me/233277644259">
              <img src="icons/social/whatsapp.png" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-300 my-4"></div>

      <div>
        <p className="text-gray-400 text-center my-4">
          ©2025 vonnytastys . All rights reserved.
        </p>
      </div>
    </section>
  );
}
