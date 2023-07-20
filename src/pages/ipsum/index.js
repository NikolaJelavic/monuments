import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "../navbar/navbar";

var words = [
  "Josip Broz Tito", "Tjentiste", "Sutjeska", "Neretva", "NOB", "Sumarice", "Bosko Buha", "Bubanj", "Kadinjaca", "Boris Kidric", "Pijade",
  "Ivo Lola Ribar", "Vecna vatra", "Makljen", "Franjo Kluz", "Kupres", "Zrenjanin", "Kardelj", "Koca Popovic", "Save Kovacevic", 
  "Radovan Djilas", "Dedijer", "Milka Planinc", "Batina", "Sremski front", "Stjepan Filipovic", "Partizani"
];

export default function Ipsum() {
  const [numSentences, setNumSentences] = useState(8);
  const [generatedLoremIpsum, setGeneratedLoremIpsum] = useState("");

  function generateLoremIpsum() {
    let loremIpsum = "";

    for (let i = 0; i < numSentences; i++) {
      const sentence = getRandomSentence();
      loremIpsum += sentence.charAt(0).toUpperCase() + sentence.slice(1) + ". ";
    }

    setGeneratedLoremIpsum(loremIpsum);
  }

  function getRandomSentence() {
    const sentenceLength = Math.floor(Math.random() * (15 - 5 + 1) + 5);
    let sentence = "";

    for (let i = 0; i < sentenceLength; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      sentence += words[randomIndex] + " ";
    }

    return sentence.trim();
  }

  return (
    <>
      <Header />
      <Navbar />
       <article className="text-center m-6 h-full">
        <h1 className="text-center text-5xl m-5">NOB Ipsum Generator</h1>
        <label htmlFor="numSentences" className="text-2xl">
          Number of Sentences:
        </label>
        <input
          type="number"
          id="numSentences"
          min="1"
          max="10"
          value={numSentences}
          onChange={(e) => setNumSentences(parseInt(e.target.value))}
          className="m-1 text-center"
        />
        <button onClick={generateLoremIpsum} className="m-1 bg-red-400 rounded-lg p-1 ">
          Generate
        </button>
        <textarea
          id="result"
          readOnly
          value={generatedLoremIpsum}
          className="block mx-auto w-1/2 h-60 rounded-xl border-2 border-rose-600 p-5 sm:w-full md:w-1/2 shadow-md shadow-red-600" 
        ></textarea>
      </article>
    </>
  );
}
