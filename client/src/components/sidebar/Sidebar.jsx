import { axiosInstance } from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Karnalr3p3r</span>
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/a7f5a5db-442d-4e47-99b0-31d205963ff6-profile_banner-480.png"
          alt=""
        />
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW MY SOCIALS</span>
        <div className="sidebarSocial">
          <a
            href="https://facebook.com/"
            className="sidebarLink"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a
            href="https://twitter.com/karnalr3p3r"
            className="sidebarLink"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
          <a
            href="https://instagram.com/karnalr3p3r"
            className="sidebarLink"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
