import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" border-t-2 border-dark-green font-Roboto relative bottom-0">
      <div className="bg-background mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5">
        <span className="text-sm dark-light-green">
          © 2023{" "}
          <Link to=".." className="hover:underline">
            BetterKFUPM
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
