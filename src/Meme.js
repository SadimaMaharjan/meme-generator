import React from "react";
import memesData from "./memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState(
    "http://i.imgflip.com/1bij.jpg"
  );
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  }
  return (
    <div className="main-content">
      <div className="meme-form">
        <input
          type="text"
          placeholder="Top Text"
          id="textFirst"
          className="textboxes"
        ></input>
        <input
          type="text"
          placeholder="Bottom Text"
          id="textSecond"
          className="textboxes"
        ></input>
        <button
          id="generate-image"
          className="break-column"
          onClick={getMemeImage}
        >
          Get a new meme image 🏞
        </button>
      </div>
      <div className="image-display">
        <img className="meme-image" src={memeImage} />
      </div>
    </div>
  );
}
