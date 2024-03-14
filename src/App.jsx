import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Account from "./components/Account/Account";

function App() {
  const [userInput, setUserInput] = useState("");

  const [avatar, setAvatar] = useState(null);
  const [login, setLogin] = useState(null);
  const [date, setDate] = useState(null);
  const [bio, setBio] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);
  const [location, setLocation] = useState(null);
  const [link, setLink] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [company, setCompany] = useState(null);

  return (
    <>
      <Header />
      <Search
        userInput={userInput}
        setUserInput={setUserInput}
        setAvatar={setAvatar}
        setLogin={setLogin}
        setDate={setDate}
        setBio={setBio}
        setRepos={setRepos}
        setFollowers={setFollowers}
        setFollowing={setFollowing}
        setLocation={setLocation}
        setLink={setLink}
        setTwitter={setTwitter}
        setCompany={setCompany}
      />
      <Account
        avatar={avatar}
        login={login}
        date={date}
        bio={bio}
        repos={repos}
        followers={followers}
        following={following}
        location={location}
        link={link}
        twitter={twitter}
        company={company}
      />
    </>
  );
}

export default App;
