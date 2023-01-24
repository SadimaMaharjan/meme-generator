import React from "react";

export default function Meme() {
  return (
    <div className="main-content">
      <form className="meme-form">
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
        <button id="generate-image" className="break-column">
          Get a new meme image 🏞
        </button>
      </form>
    </div>
  );
}
