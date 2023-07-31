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
        <h1 className="text-2xl mt-8 font-bold w-1/2 text-center">
          Feel free to get in contact via email nob-spomenici@gmail.com or the
          form below.
        </h1>
        <h1 className="text-2xl m-1 font-bold w-1/2 text-center">
          Also, If you know about some monument which is not on the map, feel
          free to send name and coordinates (http://bboxfinder.com/).
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
            autofocus
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

//  <div className="flex justify-center mt-10 mb-10">
//     <form className="w-full max-w-3xl ">
//     <div className="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-first-name">
//             First Name
//         </label>
//         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Josip" autofocus />
//         {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
//         </div>
//         <div className="w-full md:w-1/2 px-3">
//         <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2 " for="grid-last-name">
//             Last Name
//         </label>
//         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Broz" />
//         </div>
//     </div>
//     <div clasNames="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full ">
//         <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-password">
//             E-mail
//         </label>
//         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"  placeholder="josipbroz@nam.org"/>
//         <p class="text-gray-600 text-xs italic">We won't misuse your email, promise!</p>
//         </div>
//     </div>
//     <div class="flex flex-wrap -mx-3 mb-6">
//         <div class="w-full px-3">
//         <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-password">
//             Message
//         </label>
//         <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border  border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
//         {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
//         </div>
//     </div>
//     <div class="md:flex md:items-center">
//         <div className="md:w-1/3">
//         <button className="shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
//             Send
//         </button>
//         </div>
//         {/* <div class="md:w-2/3">text</div> */}
//     </div>
//     </form>
//     </div>
