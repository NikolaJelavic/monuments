/* eslint-disable react/no-unescaped-entities */
import Header from "../../components/Header"
import Navbar from "../navbar/navbar"



export default function Rest() {
    
    
    return (
      <>
      <Header/>
      <Navbar/>
      
     <div className="flex justify-center mt-10 mb-10">
        <form className="w-full max-w-3xl ">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-first-name">
                First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Josip" autofocus />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2 " for="grid-last-name">
                Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Broz" />
            </div>
        </div>
        <div clasNames="flex flex-wrap -mx-3 mb-6">
            <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-password">
                E-mail
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"  placeholder="josipbroz@nam.org"/>
            <p class="text-gray-600 text-xs italic">We won't misuse your email, promise!</p>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2" for="grid-password">
                Message
            </label>
            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border  border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
            {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div className="md:w-1/3">
            <button className="shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Send
            </button>
            </div>
            {/* <div class="md:w-2/3">text</div> */}
        </div>
        </form>
        </div>
      </>
    )
};
