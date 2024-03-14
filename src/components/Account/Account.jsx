import "./account.css";
import Location from "/images/icon-location.svg";
import Website from "/images/icon-website.svg";
import Twitter from "/images/icon-twitter.svg";
import Company from "/images/icon-company.svg";

export default function Account({
  avatar,
  login,
  date,
  bio,
  repos,
  followers,
  following,
  location,
  link,
  twitter,
  company,
}) {
  return (
    <div className="page">
      <div className="title">
        <img className="avatar" src={avatar} alt="avatar" />
        <div className="user">
          <div className="names">
            <p className="name text">{login}</p>
            <p className="userName">
              @<span>{login}</span>
            </p>
          </div>

          <p className="text">
            Joined <span>{date}</span>
          </p>
        </div>
      </div>

      <p className="text bio">{bio}</p>

      <div className="container">
        <div className="content">
          <p className="text">Repos</p>
          <p className="text number">{repos}</p>
        </div>
        <div className="content">
          <p className="text">Followers</p>
          <p className="text number">{followers}</p>
        </div>
        <div className="content">
          <p className="text">Following</p>
          <p className="text number">{following}</p>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <img src={Location} alt="Location icon" />
          <p className="text">{location}</p>
        </div>

        <div className="detail">
          <img src={Website} alt="Website icon" />
          <p className="text link">{link}</p>
        </div>

        <div className="detail">
          <img src={Twitter} alt="Twitter icon" />
          <p className="text">{twitter}</p>
        </div>

        <div className="detail">
          <img src={Company} alt="Company icon" />
          <p className="text">{company}</p>
        </div>
      </div>
    </div>
  );
}
