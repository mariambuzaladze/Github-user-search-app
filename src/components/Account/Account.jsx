import "./account.css";
import Moon from "/images/icon-moon.svg";
import Location from "/images/icon-location.svg";
import Website from "/images/icon-website.svg";
import Twitter from "/images/icon-twitter.svg";
import Company from "/images/icon-company.svg";

export default function Account() {
  return (
    <div className="page">
      <div className="title">
        <img className="avatar" src={Moon} alt="" />
        <div className="user">
          <div className="names">
            <p className="name text">The Octocat</p>
            <p className="userName">@octocat</p>
          </div>

          <p className="text">Joined 25 Jan 2011</p>
        </div>
      </div>

      <p className="text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>

      <div className="container">
        <div className="content">
          <p className="text">Repos</p>
          <p className="text number">8</p>
        </div>
        <div className="content">
          <p className="text">Followers</p>
          <p className="text number">3938</p>
        </div>
        <div className="content">
          <p className="text">Following</p>
          <p className="text number">9</p>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <img src={Location} alt="Location icon" />
          <p className="text">San Francisco</p>
        </div>

        <div className="detail">
          <img src={Website} alt="Website icon" />
          <p className="text">https://github.blog</p>
        </div>

        <div className="detail">
          <img src={Twitter} alt="Twitter icon" />
          <p className="text">Not Available</p>
        </div>

        <div className="detail">
          <img src={Company} alt="Company icon" />
          <p className="text">@github</p>
        </div>
      </div>
    </div>
  );
}
