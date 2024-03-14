import "./header.css";
import Moon from "/images/icon-moon.svg";
import Sun from "/images/icon-sun.svg";

export default function Header() {
  return (
    <header>
      <h1>devfinder</h1>
      <div className="theme">
        <p className="theme-text">DARK</p>
        <img className="moon-icon" src={Moon} alt="icon of moon" />
      </div>
    </header>
  );
}
