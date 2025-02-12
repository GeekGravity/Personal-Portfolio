function About() {
  return (
    <>
      <div id="about" className="my-[9%] scroll-mt-30">
        <h2 className="flex justify-center text-[5rem] text-white underline underline-offset-12 decoration-orange-400 font-lexend">
          About Me
        </h2>
        <p className="flex text-center px-[25%] py-12 text-2xl text-white font-lexend font-light ">
          Hey there! I'm Mathews Jaison and I'm a second-year Computer Science
          student at Simon Fraser University, with a strong passion for building
          innovative software solutions. I enjoy working on full-stack web
          development and data analysis. My technical expertise includes Python,
          C++, SQL, JavaScript, React, Node.js, and Tailwind CSS. Beyond coding,
          I thrive on competition—whether it's playing table tennis or following
          the world of Formula 1. When I need a break from the screen, I pick up
          my guitar and unwind with music. Checkout my resume below!
        </p>
        <div className="flex justify-center">
          <button className="bg-orange-400 text-white text-[1.5em] py-1 px-0 rounded-2xl mb-10 w-[10%] text-lg shadow-md shadow-cyan-500 transition-transform duration-200 ease-in-out hover:scale-105">
            <a
              href="https://drive.google.com/file/d/1sqChs71asq3QC2JHuuThW7W2xquaRLuN/view?usp=sharing"
              className="font-lexend font-light"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
export default About;
