import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav>
        <div class="flex flex-row justify-center h-20 top-0 left-0 w-full fixed bg-[#000000] shadow-md shadow-violet-500 z-10 text-white">
          <div class="flex self-center gap-4 md:gap-7 lg:gap7">
            <Link
              to="/"
              class=" px-2 py-2 text-[17px]  underline-offset-[10px] hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              class=" px-2 py-2 text-[17px] hover:underline underline-offset-[10px] "
            >
              About
            </Link>
            <Link
              to="/projects"
              class=" px-2 py-2 text-[17px] hover:underline underline-offset-[10px]  "
            >
              Project
            </Link>
            <Link
              to="/contact"
              class=" px-2 py-2 text-[17px] hover:underline underline-offset-[10px] "
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
