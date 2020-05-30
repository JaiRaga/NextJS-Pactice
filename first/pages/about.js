import Link from "next/link";
const About = () => {
  console.log("************* About **************");

  return (
    <>
      <Link href='/'>
        <button>Go Back</button>
      </Link>
      <h1>About Page</h1>
      <p>Hello!!!</p>
    </>
  );
};

export default About;
