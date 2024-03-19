import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Account from "./components/Account/Account";

function App() {
  const [userInput, setUserInput] = useState("");

  const [data, setData] = useState({});

  return (
    <>
      <Header />
      <Search
        userInput={userInput}
        setUserInput={setUserInput}
        setData={setData}
      />
      <Account data={data} />
    </>
  );
}

export default App;
