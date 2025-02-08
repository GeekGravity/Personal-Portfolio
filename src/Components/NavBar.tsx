import logo from "../Pictures/temp-logo.png";

function NavBar() {
  return (
    <>
      <div className="flex flex-row pt-10">
        <img src={logo} className="w-[100px] absolute left-10 py-auto"></img>
        <nav className="bg-orange-500 w-[500px] mx-auto rounded-[30px]">
          <ul className="flex flex-row justify-center py-3 text-white ">
            <li className="px-6 pb-1">Home</li>
            <li className="px-6 pb-1">About</li>
            <li className="px-6 pb-1">Project</li>
            <li className="px-6 pb-1">Experience</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
