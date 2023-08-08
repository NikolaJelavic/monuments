import Header from "../../components/Header";
import Navbar from "../navbar/navbar";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Rest() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqjbut5",
        "template_87nnek8",
        form.current,
        "jD_xZvBkxFpJS5k70"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <h1 className="sm:text-2xl mt-3 sm:w-1/3 text-center">
          Feel free to get in contact via email nob-spomenici@gmail.com or the
          form below.
        </h1>
        <h1 className="sm:text-2xl mx-3 sm:w-1/3 text-center">
          Also, If you know about some monument which is not on the map, feel
          free to send name and <a href="http://bboxfinder.com/">coordinates</a>.
        </h1>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg my-10"
      >
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Josip"
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-blue-500"
            placeholder="josipbroz@nam.org"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Message</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Smrt fasizmu sloboda narodu!"
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Send"
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:bg-blue-600"
          />
        </div>
      </form>
    </>
  );
}
