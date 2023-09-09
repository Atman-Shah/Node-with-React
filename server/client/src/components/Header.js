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
      return "Still deciding";
    case false:
      return "I am logged out";
    default:
      return "I am logged in";
  }
}
