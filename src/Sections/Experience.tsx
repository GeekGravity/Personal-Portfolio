function Experience() {
  const roles = [
    {
      Title: "Data Analyst Intern",
      Date: "January '25 - Present",
      Description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ab ex dolor recusandae. Magni, corporis! Iusto earum officia repellat quae explicabo expedita dolor, iure quas consequuntur? Sed distinctio facilis eos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, ab expedita, aliquam nihil accusamus dolor in maiores quam facilis beatae illo voluptas sed excepturi repellendus? Nam accusantium ea inventore veniam?",
    },
    {
      Title: "VP of Innovations",
      Date: "Ocotober '25 - Present",
      Description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, ab expedita, aliquam nihil accusamus dolor in maiores quam facilis beatae illo voluptas sed excepturi repellendus? Nam accusantium ea inventore veniam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, ab expedita, aliquam nihil accusamus dolor in maiores quam facilis beatae illo voluptas sed excepturi repellendus? Nam accusantium ea inventore veniam?",
    },
  ];

  return (
    <>
      <div className="my-[9%]">
        <h2 className="flex justify-center text-[5rem] text-white underline underline-offset-12 decoration-orange-400">
          Work Experience
        </h2>
        <div className="flex justify-center py-20">
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
