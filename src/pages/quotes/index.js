import Header from "../../../src/components/Header";
import Navbar from "../navbar/navbar";

import React, { useState } from "react";

// import { FaQuoteLeft } from "react-icons/fa";
// &quot;
const quotes = [
  {
    quote: "''We are brothers in blood and battle.''",
    author: "Josip Broz Tito,",
  },
  {
    quote: "''In war, there are no unwounded soldiers.''",
    author: "Josip Broz Tito",
  },
  {
    quote:
      "''Unity and brotherhood of our nations and nationalities is the rock upon which we have built our state.''",
    author: "Josip Broz Tito",
  },
  {
    quote:
      "''We have shown that we are able to fight against the oppressors in war and win, and that we know how to build a new, just, and free world in peace.''",
    author: "Edvard Kardelj",
  },
  {
    quote:
      "''We fight in the name of human dignity, which knows no compromise or retreat.''",
    author: "Josip Broz Tito",
  },
  {
    quote:
      "''Everyone who can think and see beyond their own nose and doorstep must be clear that without their servants - Chetniks and Ustashe - the position of the occupiers would already be unsustainable and unbearable.''",
    author: "Koča Popović",
  },
  {
    quote:
      "	''Ratnički spoljni izgled srazmeran kukavičluku, terminologija i simboli (mrtvačka glava) takođe. Otkuda bi četnik mogao biti hrabar, kada osnova i osnovna pobuda njihovog stava i opredeljenja: kukavičluk, priznanje nemoći pred snagom okupatora.''",
    author: "Koča Popović",
  },
];

export default function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-scree flex flex-col pt-20 items-center bg-gray-100">
        <p className="m-1 sm:mb-16 text-xl s:text-4xl text-black">
          Press the button to get a random quote
        </p>
        <div className="max-w-xl w-full bg-white rounded-lg p-6 shadow-md">
          <button
            className="my-4 bg-red-400 hover:bg-red-500 text-black font-bold py-2 px-4 rounded w-full"
            onClick={getRandomQuote}
          >
            Get Random Quote
          </button>
          <blockquote className="text-xl leading-relaxed text-black">
            {quote}
          </blockquote>
          <p className="text-gray-600 font-semibold mt-4 text-3xl text-black">
            {author}
          </p>
        </div>
      </div>
    </>
  );
}
