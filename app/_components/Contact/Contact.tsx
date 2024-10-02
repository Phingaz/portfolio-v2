import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-8 pt-16 bg-gray-50 dark:bg-black dark:text-white"
    >
      <div className="container flex flex-col md:flex-row gap-10 items-center">
        <Form />
        <div className="w-full order-1 md:order-2">
          <h4 className="text-hero-text font-bold leading-[1.1] mb-5 text-black dark:text-white">
            Let&apos;s build <br /> something
            <span className="outlined tracking-wider"> great</span> together!
          </h4>
          <p className="text-gray-500 dark:text-gray-200 text-sm md:max-w-[500px]">
            I&apos;m always open to discussing product design and work or
            partnerships. Whether you have a question or just want to say hi, my
            inbox is always open. 😊
          </p>

          <div className="flex flex-col mt-5">
            <a
              href="mailto:piinoya@gmail.com"
              className="text-lg font-bold dark:hover:text-gray-300 hover:text-gray-500 transition-all"
            >
              piinoya@gmail.com
            </a>
            <a
              href="tel:+5511951413228"
              className="text-lg font-bold dark:hover:text-gray-300 hover:text-gray-500 transition-all"
            >
              +55 (11) 951413228
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
