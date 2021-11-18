import Link from "next/link";

const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <Link className="nav-link" href="/">
        TUITAH/
      </Link>
      <Link className="nav-link" href="/createTuit">
        CREAR TUIT
      </Link>
    </header>
  );
};

export default Header;
