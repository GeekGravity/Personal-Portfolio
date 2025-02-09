import projectImg from "../Pictures/placeholder-image.webp";

function Projects() {
  return (
    <>
      <div className="mt-[4%]">
        <h2 className="flex justify-center text-[5rem] text-white underline underline-offset-12 decoration-orange-400">
          My Projects
        </h2>
        <p className="flex text-center px-140 py-12 text-2xl text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio
          expedita accusantium? Autem sequi neque accusantium saepe, doloribus
          optio mollitia sunt repellendus dolorum maiores deserunt facere
          sapiente sed inventore itaque.
        </p>
        <div className="flex justify-center">
          <div className="bg-orange-500 mx-6 mb-12 rounded-lg w-[22%] h-[325px] border-5 border-white shadow-lg shadow-cyan-500">
            <img src={projectImg} className="w-full h-[70%] rounded-lg"></img>
            <div className=" px-2 py-1 text-white text-[1.5em] text-lg">
              Neurotechnology Club Website
            </div>
          </div>
          <div className="bg-white mx-6 mb-12 rounded-lg w-[22%] h-[325px]">
            <img src={projectImg} className="w-full h-[70%] rounded-lg"></img>
            <div className="text-black text-[1.5em] text-lg">Hello</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white mx-6 mb-12 rounded-lg w-[22%] h-[325px]">
            <img src={projectImg} className="w-full h-[70%] rounded-lg"></img>
            <div className="text-black text-[1.5em] text-lg">Hello</div>
          </div>
          <div className="bg-white mx-6 mb-12 rounded-lg w-[22%] h-[325px]">
            <img src={projectImg} className="w-full h-[70%] rounded-lg"></img>
            <div className="text-black text-[1.5em] text-lg">Hello</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
