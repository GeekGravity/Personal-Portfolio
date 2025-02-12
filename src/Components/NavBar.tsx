import { useState, useEffect } from "react";
import logo from "../Pictures/temp-logo.png";

function NavBar() {
  const [navSection, setNavSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience"];
      let Section = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            Section = section;
          }
        }
      });
      setNavSection(Section);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-row pt-12 ">
        <img src={logo} className="w-[120px] absolute left-10 py-1"></img>
        <nav className=" fixed top-12 left-1/2 -translate-x-1/2 w-[550px] mx-auto rounded-[30px] bg-orange-500 shadow-md shadow-cyan-500 z-40">
          <ul className="flex flex-row justify-center py-3 text-white ">
            <li className="px-6 pb-1 text-lg">
              <a
                href="#home"
                className={`hover:underline underline-offset-5 decoration-2 ${
                  navSection === "home"
                    ? "underline underline-offset-5 decoration-2"
                    : ""
                }`}
              >
                Home
              </a>
            </li>

            <li className="px-6 pb-1 text-lg">
              <a
                href="#about"
                className={`hover:underline underline-offset-5 decoration-2 ${
                  navSection === "about"
                    ? "underline underline-offset-5 decoration-2"
                    : ""
                }`}
              >
                About
              </a>
            </li>

            <li className="px-6 pb-1 text-lg">
              <a
                href="#projects"
                className={`hover:underline underline-offset-5 decoration-2 ${
                  navSection === "projects"
                    ? "underline underline-offset-5 decoration-2"
                    : ""
                }`}
              >
                Projects
              </a>
            </li>

            <li className="px-6 pb-1 text-lg">
              <a
                href="#experience"
                className={`hover:underline underline-offset-5 decoration-2 ${
                  navSection === "experience"
                    ? "underline underline-offset-5 decoration-2"
                    : ""
                }`}
              >
                Experience
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
