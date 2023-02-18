import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="sticky top-[100vh] w-full p-4 bg-white border-b-2 border-dark-green shadow md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-mid-green sm:text-center">© 2023 <Link to=".." className="hover:underline">BetterKFUPM</Link>. All Rights Reserved.</span>
        </footer>
    );
}
export default Footer;