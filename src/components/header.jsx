// import { Link } from 'react-router-dom';
// function Header() {
//   return (
//     <>
//       <nav>
//         <div class="flex flex-row justify-center h-20 top-0 left-0 w-full fixed bg-white drop-shadow-sm z-10">
          
//           <div class="flex self-center gap-7">
//             <Link
//               to="/"
//               class=" px-3 py-2 text-[17px]  underline-offset-[10px] hover:underline"
//             >
//               Home
//             </Link>
//             <Link
//               to="/react-portfolio/#/about"
//               class=" px-3 py-2 text-[17px] hover:underline underline-offset-[10px] "
//             >
//               About
//             </Link>
//             <Link
//               to="#/projects"
//               class=" px-3 py-2 text-[17px] hover:underline underline-offset-[10px]  "
//             >
//               Project
//             </Link>
//             <Link
//               to="/contact"
//               class=" px-3 py-2 text-[17px] hover:underline underline-offset-[10px] "
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;

import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <nav>
      <div className="flex flex-row justify-center h-20 top-0 left-0 w-full fixed bg-white drop-shadow-sm z-10">
        <div className="flex self-center gap-7">
          <NavLink
            to="/"
            className="px-3 py-2 text-[17px] underline-offset-[10px] hover:underline"
            activeClassName="font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="px-3 py-2 text-[17px] hover:underline underline-offset-[10px]"
            activeClassName="font-bold"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="px-3 py-2 text-[17px] hover:underline underline-offset-[10px]"
            activeClassName="font-bold"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="px-3 py-2 text-[17px] hover:underline underline-offset-[10px]"
            activeClassName="font-bold"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;

