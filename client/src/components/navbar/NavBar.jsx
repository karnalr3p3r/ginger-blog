import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://gingers-blog.herokuapp.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navigation-container">
      <div className="left-container">
        <a
          href="https://www.facebook.com/jacob.devereaux.79"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-facebook-square"></i>
        </a>

        <a
          href="https://www.instagram.com/theone_ginger/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
      </div>
      <div className="center-container">
        <ul className="navbar-container">
          <li className="link-container">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="link-container">
            <Link className="link" to="/write">
              RED'S HUT
            </Link>
          </li>
          <li className="link-container" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="right-container">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="navbar-container">
            <li className="link-container">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            {/* <li className="link-container">
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
