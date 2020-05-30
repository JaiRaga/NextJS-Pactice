import Link from "next/link";
const Contact = () => {
  console.log("********** Contact Page ***********");
  return (
    <div>
      <Link href='/'>
        <button>Go Back</button>
      </Link>
      <h1>Contact Page</h1>
      <p>Hello There!</p>
    </div>
  );
};

export default Contact;
