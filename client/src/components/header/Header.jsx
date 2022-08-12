import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1 className="headerTitleSm">The Life of a Ginger</h1>
      </div>
      <img
        className="headerImg"
        src="http://www.paperflite.com/sites/default/files/2020-01/WaldoBanner.jpg"
      />
    </div>
  );
}
