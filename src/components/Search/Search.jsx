import { useState } from "react";
import "./search.css";
import SearchIcon from "/images/icon-search.svg";

export default function Search({
  userInput,
  setUserInput,
  data,
  setData,
  theme,
}) {
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
      return data;
    }
  }

  const handleClick = async () => {
    setData(await getData(userInput));
  };

  return (
    <div
      className="search-bar"
      style={theme === "dark" ? { backgroundColor: "#1e2a47" } : {}}
    >
      <img className="search-icon" src={SearchIcon} alt="search icon" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search GitHub username…"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value.trim())}
        style={theme === "dark" ? { backgroundColor: "#1e2a47" } : {}}
      />
      <p className="error" style={{ display: display }}>
        No results
      </p>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
