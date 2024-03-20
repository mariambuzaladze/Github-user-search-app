import "./header.css";
import Moon from "/images/icon-moon.svg";
import Sun from "/images/icon-sun.svg";

export default function Header({ theme, setTheme }) {
  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header>
      <h1 style={theme === "dark" ? { color: "#fff" } : {}}>devfinder</h1>
      <div onClick={switchTheme} className={theme}>
        <p className="theme-text">{theme === "light" ? "DARK" : "LIGHT"}</p>
        <img
          className="moon-icon"
          src={theme === "dark" ? Sun : Moon}
          alt="icon of moon"
        />
      </div>
    </header>
  );
}
