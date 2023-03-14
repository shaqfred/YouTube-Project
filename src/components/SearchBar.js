import { useState } from "react";
import React from "react";
import { Home } from "./Home";
import { Link } from "react-router-dom";

function filterVideo() {
  URL.filter(((names) => names.includes()).map);
}

export function SearchBar() {
  const [input, setUserInput] = useState("");

  function handleUserInput(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  return (
    <main>
      <form>
        <button className="submit" onSubmit={handleUserInput}>Search</button>
        <Link to={`/videos/`}></Link>
      </form>

      <Home />
    </main>
  )


}