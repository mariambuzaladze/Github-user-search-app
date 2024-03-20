import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Account from "./components/Account/Account";

function App() {
  const [userInput, setUserInput] = useState("");

  const [data, setData] = useState({
    login: "mariambuzaladze",
    id: 152083568,
    avatar_url: "https://avatars.githubusercontent.com/u/152083568?v=4",
    html_url: "https://github.com/mariambuzaladze",
    company: null,
    location: null,
    bio: null,
    twitter_username: null,
    public_repos: 19,
    followers: 0,
    following: 0,
    created_at: "2023-11-26T15:42:30Z",
  });

  return (
    <>
      <Header />
      <Search
        userInput={userInput}
        setUserInput={setUserInput}
        data={data}
        setData={setData}
      />
      <Account data={data} />
    </>
  );
}

export default App;
