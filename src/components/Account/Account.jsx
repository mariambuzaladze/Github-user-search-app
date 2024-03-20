import "./account.css";
import Location from "/images/icon-location.svg";
import Website from "/images/icon-website.svg";
import Twitter from "/images/icon-twitter.svg";
import Company from "/images/icon-company.svg";

export default function Account({ data, theme }) {
  return (
    <div className={theme === "dark" ? "page _dark" : "page"}>
      <div className="title">
        <img className="avatar" src={data.avatar_url} alt="avatar" />
        <div className="user">
          <div className="names">
            <p className="name text">{data.login}</p>
            <p className="userName">
              @<span>{data.login}</span>
            </p>
          </div>

          <p className="text">
            Joined{" "}
            <span>{data.created_at ? data.created_at.split("T")[0] : ""}</span>
          </p>
        </div>
      </div>

      <p className="text bio">
        {data.bio !== null ? data.bio : "This profile has no bio"}
      </p>

      <div
        className="container"
        style={theme === "dark" ? { backgroundColor: "#141d2f" } : {}}
      >
        <div className="content">
          <p className="text">Repos</p>
          <p className="text number">{data.public_repos}</p>
        </div>
        <div className="content">
          <p className="text">Followers</p>
          <p className="text number">{data.followers}</p>
        </div>
        <div className="content">
          <p className="text">Following</p>
          <p className="text number">{data.following}</p>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <img src={Location} alt="Location icon" />
          <p className="text">
            {data.location !== null ? data.location : "Not Available"}
          </p>
        </div>

        <div className="detail">
          <img src={Website} alt="Website icon" />
          <a href={data.html_url} className="text link">
            {data.html_url}
          </a>
        </div>

        <div className="detail">
          <img src={Twitter} alt="Twitter icon" />
          <p className="text">
            {data.twitter_username ? data.twitter_username : "Not Available"}
          </p>
        </div>

        <div className="detail">
          <img src={Company} alt="Company icon" />
          <p className="text">
            {data.company !== null ? data.company : "Not Available"}
          </p>
        </div>
      </div>
    </div>
  );
}
