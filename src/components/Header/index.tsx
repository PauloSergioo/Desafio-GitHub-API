import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <div className="header-title ml40">
          <h3>Github API</h3>
        </div>
      </Link>
    </header>
  );
}
