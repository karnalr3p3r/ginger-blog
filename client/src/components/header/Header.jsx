import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">The Life Of A Book Worm</span>
      </div>
      <img
        className="headerImg"
        src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2044,w_3635,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1602988205/Library_iwde6f"
        alt=""
      />
    </div>
  );
}
