import { GiJigsawBox } from "react-icons/gi";


//can I put 2 functions in onClick? need to keep one highlighted
export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="text-2xl mt-6 mb-3 flex">
      <ul className="flex gap-20">
        <GiJigsawBox size="4rem" className="mx-10" />
        <h4 className="text-blue-800 font-bold font-myFont">
          Thewisdom<span className="text-pink-400 ">Code</span>
        </h4>
        <li className="text-blue-700 font-myFont">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </li>
        <li className="text-blue-700 font-myFont">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="text-blue-700 font-myFont">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>

        <li className="text-blue-700 font-myFont">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
