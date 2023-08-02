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
    quote: "''We have shown that we are able to fight against the oppressors in war and win, and that we know how to build a new, just, and free world in peace.''",
    author: "Edvard Kardelj",
  },
  {
    quote: "''We fight in the name of human dignity, which knows no compromise or retreat.''",
    author: "Josip Broz Tito",
  },
  {
    quote: "''Everyone who can think and see beyond their own nose and doorstep must be clear that without their servants - Chetniks and Ustashe - the position of the occupiers would already be unsustainable and unbearable.''",
    author: "Koča Popović",
  },
  {
    quote: "	''Ratnički spoljni izgled srazmeran kukavičluku, terminologija i simboli (mrtvačka glava) takođe. Otkuda bi četnik mogao biti hrabar, kada osnova i osnovna pobuda njihovog stava i opredeljenja: kukavičluk, priznanje nemoći pred snagom okupatora.''",
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
      <p className="mb-16 text-4xl text-black"  >Press the button to get a random quote</p>
        <div className="max-w-xl w-full bg-white rounded-lg p-6 shadow-md">
          <button
            className="my-4 bg-red-400 hover:bg-red-500 text-black font-bold py-2 px-4 rounded w-full"
            onClick={getRandomQuote}
          >
            Get Random Quote
          </button>
          {/* <div className="text-2xl mb-2">
            <FaQuoteLeft />
          </div> */}
          <blockquote className="text-xl leading-relaxed"> {quote} </blockquote>
          <p className="text-gray-600 font-semibold mt-4 text-3xl"> {author}</p>
        </div>
      </div>
      {/* <div className="h-full m-20" >
          <h2 className="text-center text-4xl">Famous quotes from the second world war</h2>
          <p className="text-center flex justify-center m-20 px-20">Sweet roll candy sweet roll donut pie danish cake macaroon bear claw. Soufflé donut dragée chocolate pudding icing. Chocolate cake chocolate cake tootsie roll pastry cupcake icing shortbread oat cake. Gummi bears dessert chocolate powder chocolate cake wafer dessert gummies halvah. Croissant lemon drops powder ice cream jelly beans marshmallow jelly gingerbread tootsie roll. Cookie toffee lollipop sweet roll croissant. Carrot cake jelly pudding cotton candy cake chocolate cake biscuit. Bonbon oat cake chocolate bar gummi bears tootsie roll caramels cotton candy liquorice. Jelly caramels marshmallow chocolate bar shortbread lemon drops. Lollipop shortbread chupa chups oat cake marzipan shortbread marshmallow brownie tart. Jelly-o biscuit cake gummi bears chocolate bar croissant jujubes apple pie oat cake. Sesame snaps jelly jujubes danish oat cake. Carrot cake dessert sugar plum shortbread toffee. Topping caramels cotton candy lemon drops jelly beans gummi bears sweet.</p>  
          <p className="text-center flex justify-center m-20 px-20">Sweet roll candy sweet roll donut pie danish cake macaroon bear claw. Soufflé donut dragée chocolate pudding icing. Chocolate cake chocolate cake tootsie roll pastry cupcake icing shortbread oat cake. Gummi bears dessert chocolate powder chocolate cake wafer dessert gummies halvah. Croissant lemon drops powder ice cream jelly beans marshmallow jelly gingerbread tootsie roll. Cookie toffee lollipop sweet roll croissant. Carrot cake jelly pudding cotton candy cake chocolate cake biscuit. Bonbon oat cake chocolate bar gummi bears tootsie roll caramels cotton candy liquorice. Jelly caramels marshmallow chocolate bar shortbread lemon drops. Lollipop shortbread chupa chups oat cake marzipan shortbread marshmallow brownie tart. Jelly-o biscuit cake gummi bears chocolate bar croissant jujubes apple pie oat cake. Sesame snaps jelly jujubes danish oat cake. Carrot cake dessert sugar plum shortbread toffee. Topping caramels cotton candy lemon drops jelly beans gummi bears sweet.</p>  
          <p className="text-center flex justify-center m-20 px-20">Sweet roll candy sweet roll donut pie danish cake macaroon bear claw. Soufflé donut dragée chocolate pudding icing. Chocolate cake chocolate cake tootsie roll pastry cupcake icing shortbread oat cake. Gummi bears dessert chocolate powder chocolate cake wafer dessert gummies halvah. Croissant lemon drops powder ice cream jelly beans marshmallow jelly gingerbread tootsie roll. Cookie toffee lollipop sweet roll croissant. Carrot cake jelly pudding cotton candy cake chocolate cake biscuit. Bonbon oat cake chocolate bar gummi bears tootsie roll caramels cotton candy liquorice. Jelly caramels marshmallow chocolate bar shortbread lemon drops. Lollipop shortbread chupa chups oat cake marzipan shortbread marshmallow brownie tart. Jelly-o biscuit cake gummi bears chocolate bar croissant jujubes apple pie oat cake. Sesame snaps jelly jujubes danish oat cake. Carrot cake dessert sugar plum shortbread toffee. Topping caramels cotton candy lemon drops jelly beans gummi bears sweet.</p>  
          <p className="text-center flex justify-center m-20 px-20">Sweet roll candy sweet roll donut pie danish cake macaroon bear claw. Soufflé donut dragée chocolate pudding icing. Chocolate cake chocolate cake tootsie roll pastry cupcake icing shortbread oat cake. Gummi bears dessert chocolate powder chocolate cake wafer dessert gummies halvah. Croissant lemon drops powder ice cream jelly beans marshmallow jelly gingerbread tootsie roll. Cookie toffee lollipop sweet roll croissant. Carrot cake jelly pudding cotton candy cake chocolate cake biscuit. Bonbon oat cake chocolate bar gummi bears tootsie roll caramels cotton candy liquorice. Jelly caramels marshmallow chocolate bar shortbread lemon drops. Lollipop shortbread chupa chups oat cake marzipan shortbread marshmallow brownie tart. Jelly-o biscuit cake gummi bears chocolate bar croissant jujubes apple pie oat cake. Sesame snaps jelly jujubes danish oat cake. Carrot cake dessert sugar plum shortbread toffee. Topping caramels cotton candy lemon drops jelly beans gummi bears sweet.</p>  
       
        </div> */}
    </>
  );
}
