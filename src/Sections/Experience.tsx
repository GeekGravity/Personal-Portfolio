function Experience() {
  return (
    <>
      <div className="my-[9%]">
        <h2 className="flex justify-center text-[5rem] text-white underline underline-offset-12 decoration-orange-400">
          Work Experience
        </h2>

        <div className="relative mt-10">
          {/* Timeline vertical line */}
          <div className="absolute left-[50%] transform -translate-x-1/2 w-1 h-full bg-white"></div>

          {/* Timeline Items */}
          <div className="relative mb-12">
            {/* Dot and Content Block */}
            <div className="flex items-center">
              <div className="w-[12px] h-[12px] bg-white rounded-full absolute left-[50%] transform -translate-x-1/2"></div>
              <div className="ml-[5%] text-white">
                <p className="text-orange-400 text-xl">October ‘24</p>
                <p className="text-2xl font-bold">VP of Innovations</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center">
              <div className="w-[12px] h-[12px] bg-white rounded-full absolute left-[50%] transform -translate-x-1/2"></div>
              <div className="ml-[5%] text-white">
                <p className="text-orange-400 text-xl">January ‘25</p>
                <p className="text-2xl font-bold">Data Analysis Intern</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-orange-400 text-white text-[1.5em] py-1 px-6 rounded-2xl mb-10 w-[10%] text-lg shadow-md shadow-cyan-500">
            Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default Experience;
