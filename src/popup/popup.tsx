import React, { FormEventHandler, useEffect } from "react";

import "../assets/tailwind.css";

const handleInput = (e) => {
  const name = e.target[0].value;
  chrome.storage.sync.set({ name }, () => {
    console.log(`Name is set to ${name}`);
  });
};

const Popup = () => {
  useEffect(() => {
    chrome.storage.sync.get(["name"], (res) => {
      console.log("res", res);
    });
  }, []); // Run only once
  return (
    <div className="popup">
      <form
        className="flex justify-center items-center py-44"
        onSubmit={handleInput}
      >
        <input
          type="text"
          name="name"
          className="bg-gray ring-black px-4 py-4"
          placeholder="What's your task today?"
        />
        <button className="py-4 px-3 bg-indigo-500 text-white m-2 rounded">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Popup;
