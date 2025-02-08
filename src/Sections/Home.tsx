import profilePic from "../Pictures/profilePic.jpg";

function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mx-auto">
        <h1 className="col-span-2 mt-[400px] mx-20 text-[9rem] text-orange-400 leading-[160px]">
          <span className="text-white">&lt; </span> WELCOME <br />
          &nbsp;TO MY PAGE! <span className="text-white"> / &gt;</span>
        </h1>
        <img
          src={profilePic}
          className="w-[400px] mt-[200px] mx-4 border-5 rounded-md border-white shadow-lg shadow-cyan-500"
        ></img>
      </div>
    </>
  );
}

export default Home;
