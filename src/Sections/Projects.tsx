import NeuraXtensionImg from "../Pictures/NeuraXtension-ss.png";
import AccessImg from "../Pictures/AccessBuddy-ss.png";
import BlackfootImg from "../Pictures/Blackfoot-ss.webp";
import REMSImg from "../Pictures/REMS-ss.png";

function Projects() {
  return (
    <>
      <div id="projects" className="mt-[4%] scroll-mt-30">
        <h2 className="flex justify-center text-[5rem] text-white underline underline-offset-12 decoration-orange-400 font-lexend">
          My Projects
        </h2>
        <p className="flex text-center px-[22%] pb-15 pt-10 text-2xl text-white font-lexend font-light">
          Here are some projects I've worked on, from AI-driven accessibility
          tools to interactive learning apps. Check them out below!
        </p>
        <div className="flex justify-center">
          <a href="https://github.com/notjamesw/AccessBuddy">
            <div className="bg-[#182848] mx-6 mb-12 rounded-lg w-[450px] h-[325px] transition-transform duration-200 ease-in-out hover:scale-105 border-[5px] border-white shadow-lg shadow-cyan-500">
              <img
                src={AccessImg}
                className="object-cover object-[50%_62%] w-full h-[65%]"
              ></img>
              <div className="bg-[#182848] pl-3 pb-1 text-white text-[1.5em] text-lg">
                <h5 className="font-lexend font-medium pt-1 text-white underline underline-offset-3 decoration-orange-400">
                  Access Buddy
                </h5>
                <p className="text-[0.7em] text-sm pt-3 font-lexend font-light leading-[20px] text-white">
                  A Chrome extension enabling voice-controlled web navigation
                  for accessibility.
                </p>
              </div>
            </div>
          </a>
          <a href="https://github.com/GeekGravity/NeuraXtension">
            <div className="bg-[#182848] mx-6 mb-12 rounded-lg w-[450px] h-[325px] transition-transform duration-200 ease-in-out hover:scale-105 border-[5px] border-white shadow-lg shadow-cyan-500">
              <img src={NeuraXtensionImg} className="w-full h-[65%]"></img>
              <div className=" bg-[#182848] pl-3 pb-1 text-white text-[1.5em] text-lg">
                <h5 className="font-lexend font-medium pt-1 text-white underline underline-offset-3 decoration-orange-400">
                  NeuraXtension Website
                </h5>
                <p className="text-[0.7em] text-sm pt-3 font-lexend font-light leading-[20px] text-white">
                  A website for SFU's neurotechnology club to showcase events
                  and announcements.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="https://github.com/GeekGravity/Q-Properties">
            <div className="bg-[#182848] mx-6 mb-12 rounded-lg w-[450px] h-[325px] transition-transform duration-200 ease-in-out hover:scale-105 border-[5px] border-white shadow-lg shadow-cyan-500">
              <img src={REMSImg} className="w-full h-[65%]"></img>
              <div className=" bg-[#182848] pl-3 pb-1 text-white text-[1.5em] text-lg">
                <h5 className="font-lexend font-medium pt-1 text-white underline underline-offset-3 decoration-orange-400">
                  Q-Properties
                </h5>
                <p className="text-[0.7em] text-sm pt-3 font-lexend font-light leading-[20px] text-white">
                  A real estate management software built for filtering and
                  managing property listings in Qatar.
                </p>
              </div>
            </div>
          </a>
          <a href="https://github.com/GeekGravity/Language-Learning-App">
            <div className="bg-[#182848] mx-6 mb-12 rounded-lg w-[450px] h-[325px] transition-transform duration-200 ease-in-out hover:scale-105 border-[5px] border-white shadow-lg shadow-cyan-500">
              <img
                src={BlackfootImg}
                className="object-cover w-full h-[65%] object-[50%_10%]"
              ></img>
              <div className=" bg-[#182848] pl-3 pb-1 text-white text-[1.5em] text-lg">
                <h5 className="font-lexend font-medium pt-1 text-white underline underline-offset-3 decoration-orange-400">
                  Blackfoot Language Learning App
                </h5>
                <p className="text-[0.7em] text-sm pt-3 font-lexend font-light leading-[20px] text-white">
                  An interactive flashcard app used to teach the Blackfoot
                  language.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Projects;
