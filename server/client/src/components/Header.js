import { authAtom } from "../states";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

function Header() {
  const [auth] = useAtom(authAtom);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link 
          to={auth ? "/surveys" : "/"} 
          className="left brand-logo"
        >
          Emaily
        </Link>
        <ul className="right">{renderContent(auth)}</ul>
      </div>
    </nav>
  );
}

export default Header;

function renderContent(auth) {
  switch (auth) {
    case null:
      return;
    case false:
      return (
        <li>
          <a href="/auth/google">Login With Google</a>
        </li>
      );
    default:
      return <li><a href="api/logout">Logout</a></li>;
  }
}
