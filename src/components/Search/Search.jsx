import "./search.css";
import SearchIcon from "/images/icon-search.svg";

export default function Search() {
  return (
    <div className="search-bar">
      <img className="search-icon" src={SearchIcon} alt="search icon" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search GitHub username…"
      />
      <button>Search</button>
    </div>
  );
}
