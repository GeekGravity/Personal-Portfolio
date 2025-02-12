function Experience() {
  const roles = [
    {
      Title: "Data Science Research Assistant",
      Date: "January '25 - Present",
      Description:
        "As a Data Science Research Assistant, I collaborate with a Professor at SFU to develop a sample size estimation model analyzing the correlation between soccer players' critical speed and temperature. My work involves coding in R, running simulations, and refining statistical models. I also attend regular meetings to discuss progress and ensure accurate data analysis.",
    },
    {
      Title: "VP of Innovations",
      Date: "Ocotober '25 - Present",
      Description:
        " As VP of Innovations at NeuraXtension, SFU's neurotechnology club, I lead the club's innovation efforts by organizing workshops on neurotechnology devices and projects. I also help plan field trips to research labs and industry facilities, giving members hands-on exposure to the field. Beyond this, I collaborate with the team to drive engagement and expand the club’s impact.",
    },
  ];

  return (
    <>
      <div id="experience" className="my-[9%] scroll-mt-30">
        <h2 className="flex justify-center text-[5rem] text-white underline underline-offset-12 decoration-orange-400">
          Work Experience
        </h2>
        <div className="flex justify-center pt-15">
          <div className="h-[400px] text-center px-12 overflow-y-scroll snap-y snap-mandatory no-scrollbar">
            {roles.map((role, index) => {
              return (
                <section
                  id={`role-${index}`}
                  className="h-500px max-w-[900px] snap-center py-5 px-10"
                >
                  <h3 className="text-[2.5rem] text-white font-bold">
                    {role.Title}
                  </h3>
                  <p className="text-[1.5rem] text-orange-400">{role.Date}</p>
                  <p className=" py-10 text-2xl text-white">
                    {role.Description}
                  </p>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
