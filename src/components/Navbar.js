import { GiJigsawBox } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="text-2xl mt-6 mb-3">
      <ul className="flex gap-20">
        <GiJigsawBox size="5rem" className="mx-10" />
        <h4 className="text-blue-800 font-bold">
          Thewisdom<span className="text-pink-700">Code</span>
        </h4>
        <a
          className="text-blue-700"
          href={"https://www.youtube.com/watch?v=S4HYwsBRpRs"}
        >
          About Me
        </a>
        <a className="text-blue-700" href={"/contact"}>
          Contact
        </a>
        <a className="text-blue-700" href={"/resume"}>
          Resume
        </a>
      </ul>
    </nav>
  );
}
