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
              href="tel: +5516981541659"
              className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
            >
              +55 (16) 98154-1659
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
            <p className="text-lg text-purple-300">Localização</p>
            <a
              href="#"
              className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
            >
              Jardinópolis - SP - Brazil
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14634.23061839411!2d-47.59063173023411!3d-21.07287416185227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5ab5db611ebef%3A0x804000d09a418400!2sJardin%C3%B3polis%2C%20SP%2C%20Brazil!5e0!3m2!1sen!2sus!4v1610000000000"
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
