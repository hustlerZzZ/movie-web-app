import Link from "next/link";

function MobileNav({ setClicked }) {
  return (
    <div className="bg-purple-500 flex flex-col gap-8 fixed h-ful z-10 top-0 right-0 py-8 pl-10 pr-28 h-screen">
      <div onClick={() => setClicked((prev) => !prev)}>
        <div className="w-6 h-1 bg-white rounded-full rotate-45 translate-y-1"></div>
        <div className="w-6 h-1 bg-white rounded-full -rotate-45"></div>
      </div>
      <div>
        <ul className="text-white flex gap-8 font-medium text-sm flex-col">
          <Link className="hover:underline cursor-pointer" href="/">
            Home
          </Link>
          <Link className="hover:underline cursor-pointer" href="/how-to-use">
            How To Use
          </Link>
          <Link className="hover:underline cursor-pointer" href="/about-us">
            About Us
          </Link>
          <Link className="hover:underline cursor-pointer" href="/contact-us">
            Contact Us
          </Link>
        </ul>
      </div>
      <div>
        <Link
          className="bg-orange-600 hover:bg-orange-500 py-2 transition-colors px-4 rounded-md cursor-pointer"
          href="/"
        >
          Find a Movie
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
