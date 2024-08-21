import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineForm } from "react-icons/ai";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import NormalNavbar from "../components/NormalNavbar";

const Contact = () => {
  return (
    <div className="min-h-screen w-4/5 mx-auto border bg-primary   text-black flex flex-col">
        <NormalNavbar/>
      
        <header className="flex flex-col md:flex-row  justify-between items-center p-4 mt-[4.9rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-b border-black">

        <h1 className="text-4xl font-mono text-white">Let's Connect</h1>
        <p className="text-sm md:text-lg font-thin text-right text-white">
          Got a project, question, or just want to say hello? Reach out!
        </p>
      </header>

      <div className="flex flex-wrap justify-between  items-stretch  border-black  border-b h-56 bg- text-secondary  ">
        <div className="w-full md:w-1/2 lg:w-1/3 p-8 border-r border-black flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center text-2xl mb-2">
              <FaEnvelope className="mr-2 text-accent" />
              <span>Email</span>
            </div>
            <p className="text-lg font-thin mb-2">
              Send me an email and I'll get back to you soon.
            </p>
          </div>
          <a
            href="mailto:shashwanthsivakumarn@gmail.com"
            className="underline text-accent font-mono mt-auto"
          >
            shashwanthsivakumarn@gmail.com
          </a>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-8 border-r border-black flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center text-2xl mb-2">
              <FaPhone className="mr-2 text-accent" />
              <span>Social</span>
            </div>
            <p className="text-lg font-thin mb-2">Text me on LinkedIn.</p>
          </div>
          <a
            href="https://www.linkedin.com/in/shashwanth-sivakumar-n"
            className="underline text-accent font-mono mt-auto"
          >
            Shashwanth N Sivakumar
          </a>
        </div>

        {/* Location */}
        <div className="w-full lg:w-1/3 p-8 flex flex-col justify-between flex-grow h-full">
          <div className="flex items-center text-2xl mb-2">
            <FaMapMarkerAlt className="mr-2 text-accent" />
            <span>Location</span>
          </div>
          <p className="text-lg font-thin">
            Currently based in Chennai, Tamil Nadu.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between space-x-4 items-center min-h-max flex-grow p-8 bg-primary  text-secondary border-black  border-b">
        <div className="md:w-2/5 mb-8 md:mb-0 h-full text-center md:text-left">
          <div className="flex items-center text-2xl mb-2">
            <AiOutlineForm className="mr-2 text-accent" />
            <span>Contact Form</span>
          </div>
          <p className="text-lg font-thin text-gray-2">
            Prefer writing? Fill out the form and I'll get back to you soon.
          </p>
        </div>

        

          <form
  action="https://formspree.io/f/xqazypvz"
  method="POST"
  className="md:w-3/5 flex flex-col flex-grow h-full items-stretch"
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you for your message!");
          form.reset();
        } else {
          alert("Oops! There was a problem.");
        }
      })
      .catch((error) => {
        alert("Oops! There was a problem.");
      });
  }}
>
<input
    type="text"
    name="name"
    placeholder="Your Name"
    className="p-4 mb-4 border-black border focus:outline-none focus:ring-2 focus:ring-accent"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="p-4 mb-4 border-black border focus:outline-none focus:ring-2 focus:ring-accent"
    required
  />
  <input type="text" name="_gotcha" style={{ display: 'none' }} />

  <textarea
    name="message"
    placeholder="Your Message"
    className="p-4 mb-4 border-black border focus:outline-none h- focus:ring-2 focus:ring-accent"
    required
  ></textarea>
  <button
    type="submit"
    className="p-4 bg-accent text-black border-black border hover:bg-black hover:text-white transition-all duration-300"
  >
    Send Message
  </button>
</form>

    
      </div>

      <footer className="p-4 bg-secondary  text-primary flex justify-between items-center border-t border-black">
        <div className="text-sm">
          <p className="font-mono">&copy; 2024 Shashwanth.</p>
        </div>
        <div className="text-lg flex items-center">
          <BsFillChatSquareTextFill className="mr-2 text-accent" />
          <p className="font-thin">Let's make something amazing together.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
