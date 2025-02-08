function NavBar() {
  return (
    <>
      <nav className=" mt-10 bg-orange-500 w-1/4 mx-auto rounded-[30px]">
        <ul className="flex flex-row justify-center py-3 text-white ">
          <li className="px-6 pb-1">Home</li>
          <li className="px-6 pb-1">About</li>
          <li className="px-6 pb-1">Project</li>
          <li className="px-6 pb-1">Experience</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
