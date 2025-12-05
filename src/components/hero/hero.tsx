const Hero = () => {
  return (
    <section className="relative bg-red-500 h-[751px]">
      {/* Background Gradients */}
      <div className="absolute w-full h-[691px] bg-[linear-gradient(90deg,#320002_0%,#900006_33%,#ED1D25_100%)] clip-wave"></div>
      <div className="absolute w-full h-[691px] bg-[linear-gradient(90deg,#ED1D25_100%,#ED1D2500_0%)] opacity-70 clip-wave"></div>

      {/* Bottom Clip Path */}
      <img
        src="src/assets/icons/hero-clip-path.svg"
        alt="arrow down icon"
        className="absolute bottom-0 w-full object-fit"
      />

      {/* Content Container */}
      <div className="absolute">
        <p className="font-gilroy text-white text-[70px] leading-[102%] absolute top-[101px] left-[115px] w-[515px] h-[202px]">
          Trade Forex with Premier Markets
        </p>
      </div>
    </section>
  )
}

export default Hero
