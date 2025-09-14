import React, { useState } from "react";
import "./App.css";


const App = () => {
 
  //track the number of likes
  const [likes, setLikes] = useState(0);

  //track the numer of dislikes
  const [dislikes, setDislikes] = useState(0);

  //function to handle like button click
  const handleLike = () => {
    setLikes((prev) => prev + 1); 
    if (dislikes > 0) setDislikes((prev) => prev -1);
  };


  //dislike button
  const handleDislike = () => {
    setDislikes((prev) => prev + 1);
    if(likes > 0) setLikes((prev) => prev - 1);

  };


  return (
    <div className="app">
      <h1 className="title">👍 Like / Dislike 👎</h1>

      <div className="container">
        <button className="btn like" onClick={handleLike}>
          👍 {likes} 
        </button>

        <button className="btn dislike">
            👎 {dislikes}
        </button>
      </div>
    </div>
  );

};


export default App;