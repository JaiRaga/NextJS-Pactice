import Link from "next/link";

const Index = () => (
  <>
    <Link href='/about'>
      <button>About Page</button>
    </Link>
    <Link href='/contact'>
      <button>Contact Page</button>
    </Link>
    <h1>Hello World</h1>
  </>
);

export default Index;
