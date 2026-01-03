import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className=" bg-white my-16 py-21">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <h1 className=" border p-2 border-pink-500 font-boldS text-pink-500">
          #Contact us
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-19 py-20 px-8 md:px-37.5 align-middle"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-4xl text-pink-500 font-bold mb-5">
            Need a Cake? <br />
            Want to Make Enquiries? <br /> Get in touch!
          </h1>

          <p className="text-gray-500 text-4 mb-9">
            {" "}
            Do you need custom cakes, pastries or food baskets for that cherish
            occassion?
            <br />
            Contact us so we can give the best taste you have ever experienced
            in Ghana at an affordable price.
          </p>
          <div className="flex"></div>

          {/* LOCATION */}
          <div className="flex gap-4 mb-4">
            <MapPin className="w-5.5 h-5.5 text-pink-500 " />
            <span>Vonny Tastys on maps</span>
          </div>

          {/* PHONE NUMBERS */}
          <div className="flex gap-4 mb-4">
            <Phone className="w-5.5 h-5.5 text-pink-500" />
            <p className="m-0 text-md">0557624449</p>
          </div>

          {/* EMAIL */}
          <div className="flex gap-4 mb-4 ">
            <Mail className="w-5.5 h-5.5 text-pink-500 " />
            <a href="mailto:vonnytastys@gmail.com" className="underline">
              vonnytastys@gmail.com
            </a>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-5">
            <a
              href="mailto:vonnytastys@gmail.com"
              className=" bg-pink-500 text-white py-3 px-8 rounded-2xl transition-all hover:bg-white hover:text-pink-500 hover:border hover:border-pink-500 "
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:shadow-xl md:rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0988174971185!2d-0.10088812590861178!3d5.698861294282923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf996b06e1da79%3A0xa1915d09f916bf39!2sVonny%20Tastys!5e0!3m2!1sen!2sgh!4v1767469974894!5m2!1sen!2sgh"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
