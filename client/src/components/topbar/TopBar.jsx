import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://gingers-blog.herokuapp.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a
          href="https://twitter.com/karnalr3p3r"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
        <a
          href="https://instagram.com/karnalr3p3r"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              POST YOUR STORY
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            {/* <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li> */}
          </ul>
        )}
      </div>
    </div>
  );
}
