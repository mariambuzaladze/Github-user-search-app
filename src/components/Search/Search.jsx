import { useEffect, useState } from "react";
import "./search.css";
import SearchIcon from "/images/icon-search.svg";

export default function Search({ userInput, setUserInput, setData }) {
  const [display, setDisplay] = useState("none");

  async function getData(input) {
    try {
      let response = await fetch(`https://api.github.com/users/${input}`);

      if (!response.ok) {
        setDisplay("inline");
        throw new Error("wrong url");
      }

      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  const handleClick = async () => {
    setData(getData(userInput));
  };

  return (
    <div className="search-bar">
      <img className="search-icon" src={SearchIcon} alt="search icon" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search GitHub username…"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value.trim())}
      />
      <p className="error" style={{ display: display }}>
        No results
      </p>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
