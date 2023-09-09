import { authAtom } from "../states";
import { useAtom } from "jotai";

function Header() {
  const [auth] = useAtom(authAtom);

  console.log("Auth", auth);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">
          Emaily
        </a>
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
      return <li><a>Logout</a></li>;
  }
}
