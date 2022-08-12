import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1 className="headerTitleLg">The Life of a Ginger</h1>
        <h3 className="headerQuestion">Can You Find Waldo?</h3>
      </div>
      <div className="headerImgContainer">
        <img
          className="headerImg"
          src="http://www.paperflite.com/sites/default/files/2020-01/WaldoBanner.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
