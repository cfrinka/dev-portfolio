"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4 overflow-x-clip min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-purple-300"
          >
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center md:items-start px-4 gap-8">
        {/* //fix this div alginment */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-8 rounded-2xl space-y-8 w-full"
          id="this-div"
        >
          <div className="space-y-2">
            <p className="text-lg text-purple-300">Phone</p>
            <a
              href="tel: +999999999"
              className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
            >
              +99 (0) 9999 9999
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-purple-300">Email</p>
            <a
              href="mailto:c.frinkaneto@icloud.com"
              className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
            >
              c.frinkaneto@icloud.com
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-purple-300">Office</p>
            <a
              href="#"
              className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
            >
              Random Address
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full min-h-[400px] h-full rounded-2xl overflow-hidden relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.949657186192!2d-73.97124868459343!3d40.78306097932459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9c1b3d5f5%3A0x6f0b8f0e0b0b0b0b!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1610000000000"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
