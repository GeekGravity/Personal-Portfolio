function About() {
  return (
    <>
      <div className="my-[9%]">
        <h2 className="flex justify-center text-[5rem] text-white underline underline-offset-12 decoration-orange-400">
          About Me
        </h2>
        <p className="flex text-center px-160 py-12 text-2xl text-white ">
          Hey there! I'm Mathews Jaison and I'm a second-year Computer Science
          student at Simon Fraser University, with a strong passion for building
          innovative software solutions. I enjoy working on full-stack web
          development and data analysis. My technical expertise includes Python,
          C++, SQL, JavaScript, React, Node.js, and Tailwind CSS. Beyond coding,
          I thrive on competition—whether it's playing table tennis or following
          the thrilling world of Formula 1. When I need a break from the screen,
          I pick up my guitar and unwind with music. Checkout my resume below!
        </p>
        <div className="flex justify-center">
          <button className="bg-orange-400 text-white text-[1.5em] py-1 px-6 rounded-2xl mb-10 w-[10%] text-lg shadow-md shadow-cyan-500">
            Resume
          </button>
        </div>
      </div>
    </>
  );
}
export default About;
