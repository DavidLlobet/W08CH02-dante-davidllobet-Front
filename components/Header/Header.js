import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <Link className="nav-link" href="/">
        HOME/
      </Link>
      <Link className="nav-link" href="/Tuits">
        TUITS/
      </Link>
      <Link className="nav-link" href="/CreateTuit">
        CREAR TUIT
      </Link>
    </header>
  );
};

export default Header;
