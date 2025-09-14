import React, { useState } from "react";
import "./App.css"; 

// === Quotes Data ===
const QUOTES = [
  { text: "The present is theirs; the future, for which I really worked, is mine.", author: "Nikola Tesla" },
  { text: "Nothing in life is to be feared, it is only to be understood.", author: "Marie Curie" },
  { text: "Time is relative; its only worth depends upon what we do as it is passing.", author: "Albert Einstein" },
  { text: "We cannot solve our problems with the same thinking we used when we created them.", author: "Albert Einstein" },
  { text: "The Earth is what we all have in common.", author: "Wendell Berry" },
  { text: "Look up at the stars and not down at your feet.", author: "Stephen Hawking" },
  { text: "Science is a way of thinking much more than it is a body of knowledge.", author: "Carl Sagan" },
  { text: "An experiment is a question which science poses to Nature, and a measurement is the recording of Nature’s answer.", author: "Max Planck" },
  { text: "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.", author: "Galileo Galilei" },
  { text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", author: "Edwin Hubble" }
];

export default function RandomQuote() {

  const [index, setIndex] = useState(0);
   

  const nextQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * QUOTES.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  const { text, author } = QUOTES[index];

  return (
    <div className="quote-app">
       <div className="quote-card">
         <div key={text} className="quote-box">
           <p className="quote-text">{text}</p>
           <p className="quote-author"> - {author}</p>
         </div>
       </div>

       <button className="quote-button" onClick={nextQuote}>
         New Quote
       </button>
    </div>
  );

}