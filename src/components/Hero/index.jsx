import ButtonComponent from "../Button";
import styles from "./Hero.module.css";

function Hero({ isDarkMode }) {
  return (
    <>
      <section className={`${styles.hero} flex flex-col justify-center items-center h-screen`} style={{ backgroundImage: isDarkMode ? "var(--hero-background-dark)" : "var(--hero-background-light)" }}>
        <div className="title absolute top-30 md:absolute top-40">
          <h1 className="text-6xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-purple-500 to-red-800 text-transparent bg-clip-text">
            Scrum Guide <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">for developers</span>
          </h1>
        </div>
        <p className={`hidden md:block mt-10 text-lg p-3 rounded-xl text-center max-w-4xl ${isDarkMode ? "bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-xl font-semibold" : "bg-white bg-opacity-90 backdrop-blur-lg shadow-md font-semibold "}`}>
          A Guide to Get Started with Learning Scrum
        </p>
        <div className="flex justify-center items-center my-10 space-x-4">
          <ButtonComponent
            text="Learn Scrum"
            className={isDarkMode ? "bg-gradient-to-r from-blue-500 to-red-800 py-4 px-8 rounded-lg text-white text-lg h-16" : "bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-8 rounded-lg text-white text-lg h-16"}
            href="#mainContent"
          />
          <ButtonComponent
            text="Our Team"
            className={isDarkMode ? "bg-gradient-to-r from-blue-500 to-red-800 py-4 px-8 rounded-lg text-white text-lg h-16" : "bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-8 rounded-lg text-white text-lg h-16"}
            href="#ourTeam"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
