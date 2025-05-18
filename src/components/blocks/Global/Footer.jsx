import Link from "next/link";

const Footer = () => {
  return (
    <div className=" relative z-10 py-6 bg-amber-800  ">
      <div className="container">
        <p className="text-center text-sm text-white ">
          © {new Date().getFullYear()} All Rights Reserved by
          <Link href="https://discoverarch.org/" target="_blank">
            {" "}
            Desert Safari
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
