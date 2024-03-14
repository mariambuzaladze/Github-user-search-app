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
  async function getData(input) {
    try {
      let response = await fetch(`https://api.github.com/users/${input}`);

      if (!response.ok) {
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
    if (data.bio !== null) {
      setBio(data.bio);
    }
    setRepos(data.public_repos);
    setFollowers(data.followers);
    setFollowing(data.following);
    if (data.location !== null) {
      setLocation(data.location);
    }
    setLink(data.html_url !== null);
    if (data.twitter_username) {
      setTwitter(data.twitter_username);
    }
    if (data.company !== null) {
      setCompany(data.company);
    }
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
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
