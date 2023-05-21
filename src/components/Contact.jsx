import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { contactModal } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

/// template_gr5xffp
/// service_kh4uidf
/// o1Fmyq3lWpHSC9pNG

const Contact = ({ top }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [cModal, setCModal] = useRecoilState(contactModal);

  setTimeout(() => {
    document.addEventListener("click", contactClose, true);
  }, 500);

  function contactClose(e) {
    if (cModal) {
      if (!document.getElementById("contactSection").contains(e.target)) {
        document.removeEventListener("click", contactClose, true);
        document.body.style.overflow = "visible";
        setCModal(false);
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.name.length === 0 || form.email.length === 0|| form.message.length === 0) {
      setLoading(false)
      alert("You have left some fields empty. Please enter into all the required fields below.")
      return
    }
    emailjs
      .send(
        "service_kh4uidf",
        "template_gr5xffp",
        {
          from_name: form.name,
          to_name: "Mehdi",
          from_email: form.email,
          to_email: "mo@mehdi.life",
          message: form.message,
        },
        "o1Fmyq3lWpHSC9pNG"
      )
      .then(() => {
        setLoading(false);
        alert("Thanks. I'll get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }),
      (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong. Please try again.");
      };
  };

  return (
    <div
      className="flex h-screen
    overflow-hidden absolute z-[100]  w-full items-between justify-center items-center"
    >
      <motion.div
        id="contactSection"
        variants={slideIn("left", "tween", 0.2, 1)}
        className="contactMod w-[90%] max-h-[87%]  md:w-[725px] lg:w-[775px] p-8 rounded-2xl bg-black-100 
        bg-opacity-[5%] backdrop-filter backdrop-blur-[7px] 
        border border-[#ffffff13] mt-8 overflow-y-auto scrollbar-thin scrollbar-track-rounded-full  scrollbar-thumb-violet-950"
      >
        <p className={`${styles.sectionSubText}`}>Let's have a chat</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-normal mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary placeholder:text-secondary py-4 px-6 
              text-white rounded-lg outline-none font-normal focus:bg-[#221a4a] 
              transition duration-200 hover:bg-[#221a4a]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-normal mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary placeholder:text-secondary py-4 px-6 
              text-white rounded-lg outline-none border-none font-normal focus:bg-[#221a4a] 
              transition duration-200 hover:bg-[#221a4a]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-normal mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary placeholder:text-secondary py-4 px-6 
              text-white rounded-lg outline-none border-none font-normal focus:bg-[#221a4a] 
              transition duration-200 hover:bg-[#221a4a]"
            />
          </label>
          <div className="flex space-x-4 xs:justify-between items-center ">
            <button
              type="submit"
              className="w-fit bg-tertiary py-3 px-8 outline-none font-medium 
            shadow-md shadow-primary text-white rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <div className="text-sm py-3 pr-1 font-light opacity-50">
              tap anywhere outside to close...
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
