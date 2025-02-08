import logo from "../Pictures/temp-logo.png";

function NavBar() {
  return (
    <>
      <div className="flex flex-row pt-12 ">
        <img src={logo} className="w-[120px] absolute left-10 py-1"></img>
        <nav className=" fixed top-12 left-1/2 -translate-x-1/2 w-[550px] mx-auto rounded-[30px] bg-orange-500 shadow-md shadow-cyan-500">
          <ul className="flex flex-row justify-center py-3 text-white ">
            <li className="px-6 pb-1 text-lg">Home</li>
            <li className="px-6 pb-1 text-lg">About</li>
            <li className="px-6 pb-1 text-lg">Project</li>
            <li className="px-6 pb-1 text-lg">Experience</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
