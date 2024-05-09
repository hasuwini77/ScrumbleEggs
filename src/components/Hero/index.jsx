import styles from "./Hero.module.css";

function Hero({ isDarkMode }) {
  return (
    <>
      <section className={`${styles.hero} flex flex-col items-center py-10 ss:py-20 sm:py-36`} style={{ backgroundImage: isDarkMode ? "var(--hero-background-dark)" : "var(--hero-background-light)" }}>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Scrum Guide <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">for developers</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
        <div className="flex justify-center my-10">
          <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
            Learn Scrum
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
