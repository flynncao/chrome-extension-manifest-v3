import React from "react";
import { createRoot } from "react-dom/client";
const test = (
  <div>
    <h1 className="text-5xl text-green-500">Hello World</h1>
    <p className="text-gray-500 text-2xl">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quod
      saepe dolore numquam blanditiis voluptas aspernatur, temporibus ipsam!
      Praesentium perferendis quod unde repellendus reprehenderit dolores
      officia doloribus ipsam velit sit.
    </p>
  </div>
);

const container = document.createElement("div");

document.body.appendChild(container);

const root = createRoot(container);

root.render(test);
