"use client";
import { ActiveContext } from "@/context/ActiveProvider";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const display = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  const { setActive } = useContext(ActiveContext);
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  useEffect(() => {
    if (inView) {
      setActive("Contact");
    }
  }, [inView, setActive]);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    display();
    emailjs
      .sendForm(
        "service_ix8yjw9",
        "template_sc8hejy",
        form.current,
        "PMn5FyYG1L9byKW7y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="contact"
      ref={ref}
      className="padding "
    >
      <SectionHeading>Contact_Me</SectionHeading>

      {showMessage && (
        <div>
          <p>Thank you for reaching me. I will respond as soon as possible</p>
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-2 py-4 sm:w-[50%]"
      >
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="from_name"
          placeholder="Your name"
          className="p-1 rounded-md outline-none bg-slate-300 dark:bg-[#545151]"
        />
        <input
          type="email"
          required
          name="from_name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail"
          className="p-1 rounded-md outline-none bg-slate-300 dark:bg-[#545151]"
        />
        <textarea
          cols="30"
          rows="6"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="p-1 rounded-md resize-none outline-none bg-slate-300 dark:bg-[#545151]"
        />
        <button
          type="submit"
          className="w-fit bg-slate-300 dark:bg-[#545151] py-1 px-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
};
export default Contact;
