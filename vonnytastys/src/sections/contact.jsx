import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className=" bg-white my-16 py-21">
      <div className="flex justify-center">
        <h1 className=" border p-2 border-pink-500 font-boldS text-pink-500">
          #Contact us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-19 py-20 px-8 md:px-37.5 align-middle">
        <div>
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
            <span>East Legon hills (Vonny Tastys on maps)</span>
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
        </div>

        <div className="md:shadow-xl md:rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.086696761354!2d-0.09896442590858759!3d5.700613894281183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf83ca45ac0e59%3A0x50de0ac8cfd58910!2sVonny%20Tastys%20Shop%20A!5e0!3m2!1sen!2sgh!4v1766993036314!5m2!1sen!2sgh"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
