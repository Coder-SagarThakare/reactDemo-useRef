/**
 * 
 * In React, useRef is a Hook that provides a way to access and interact with the DOM directly.
 * It is commonly used to get references to DOM elements, manage focus, or interact 
 */

import React from "react";
import { useState, useRef } from "react";

export default function UseRefComponent() {
  // we can give a initial value to refElement in useRef('initial_value')
  const refElement = useRef("");
  console.log("page rendered \n refElement :", refElement);

  const [name, setName] = useState("");

  return (
    <div>
      <br />
      <input
        ref={refElement}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={() => setName("")}> clear input box</button>
      <button onClick={() => refElement.current.focus()}>make in focus </button>
      <button
        onClick={() => (refElement.current.style.backgroundColor = "red")}
      >
        make red background
      </button>
      <button onClick={() => (refElement.current.style.color = "green")}>
        make Text Green
      </button>
    </div>
  );
}

/**
 * if you are using a large number of refs that have a similar purpose (e.g., managing the state of multiple input fields), 
 * you might consider using an array or an object to store them, making your code more concise and scalable. 
 * 
 * const inputRefs = Array.from({ length: 10 }, () => useRef(null));
 * 
 */
