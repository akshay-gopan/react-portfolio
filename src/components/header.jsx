function Header() {
  return (
    <>
      <nav>
        <div class="flex flex-row justify-center h-24 top-0 left-0 w-full fixed bg-white drop-shadow-sm z-10">
          {/* <div class="self-center">
                        <img src="images/logo.png" alt="logo" />
                    </div> */}
          <div class="flex self-center gap-7">
            <a
              href="/"
              class=" px-3 py-2 text-[17px]  underline-offset-[10px] hover:underline"
            >
              Home
            </a>
            <a
              href="/about"
              class=" px-3 py-2 text-[17px] hover:underline underline-offset-[10px] "
            >
              About
            </a>
            <a
              href="/projects"
              class=" px-3 py-2 text-[17px] hover:underline underline-offset-[10px]  "
            >
              Project
            </a>
            <a
              href="/contact"
              class=" px-3 py-2 text-[17px] hover:underline underline-offset-[10px] "
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
