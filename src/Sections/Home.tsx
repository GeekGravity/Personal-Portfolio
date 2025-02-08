import profilePic from "../Pictures/profilePic.jpg";

function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <h1 className="text-[9rem] py-[400px] text-orange-400 px-15 leading-[160px] col-span-2">
          <span className="text-white">&lt; </span> WELCOME <br />
          &nbsp;TO MY PAGE! <span className="text-white"> / &gt;</span>
        </h1>
        <img src={profilePic} className="w-[400px] py-[200px]"></img>
      </div>
    </>
  );
}

export default Home;
