import Link from "next/link";

const NavBar = () => (
  <>
    <Link href='/about'>
      <button>About Page</button>
    </Link>
    <Link href='/contact'>
      <button>Contact Page</button>
    </Link>
  </>
);

export default NavBar;
