import { useState } from "react";
import "./search.css";
import SearchIcon from "/images/icon-search.svg";

export default function Search({
  userInput,
  setUserInput,
  setAvatar,
  setLogin,
  setDate,
  setBio,
  setRepos,
  setFollowers,
  setFollowing,
  setLocation,
  setLink,
  setTwitter,
  setCompany,
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
    }
  }

  const handleClick = async () => {
    let data = await getData(userInput);
    setAvatar(data.avatar_url);
    setLogin(data.login);
    setDate(data.created_at.split("T")[0]);
    setBio(data.bio !== null ? data.bio : "No Bio");
    setRepos(data.public_repos);
    setFollowers(data.followers);
    setFollowing(data.following);
    setLocation(data.location !== null ? data.location : "Not Available");
    setLink(data.html_url);
    setTwitter(data.twitter_username ? data.twitter_username : "Not Available");
    setCompany(data.company !== null ? data.company : "Not Available");
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
