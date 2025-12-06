import Button from '../ui/button'

const Hero = () => {
  return (
    <section className="relative bg-red-500 h-[751px] hidden xl:block overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute w-full h-[691px] bg-[linear-gradient(90deg,#320002_0%,#900006_33%,#ED1D25_100%)]"></div>
      <div className="absolute w-full h-[691px] bg-[linear-gradient(90deg,#ED1D25_100%,#ED1D2500_0%)] opacity-40"></div>

      {/* Bottom Clip Path */}
      <img
        src="src/assets/images/hero-clip-path.svg"
        alt="arrow down icon"
        className="absolute bottom-0 w-full object-fit z-10"
      />

      {/* Content Container */}
      <div className="absolute">
        <p className="font-gilroy text-white text-[70px] leading-[102%] absolute top-[101px] left-[115px] w-[515px] h-[202px]">
          Trade Forex with Premier Markets
        </p>
      </div>

      <div className="absolute">
        <p className="text-white text-[20px] leading-[120%] absolute top-[327px] left-[115px] w-[413px] h-[72px]">
          Access global markets with advanced trading tools, competitive
          spreads, and institutional grade execution.
        </p>
      </div>

      <div className="absolute left-[115px] top-[445px] flex gap-12">
        <Button
          variant="white"
          size="lg"
          className="h-[53px] w-[164px] rounded-3xl text-[16px] font-semibold"
        >
          Start Trading
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="h-[53px] w-[200px] rounded-3xl text-[16px] font-semibold bg-transparent border-white text-white border-2"
        >
          Try Demo Account
        </Button>
      </div>

      <img
        src="src/assets/images/hero_phone_lg.webp"
        alt="arrow down icon"
        className="absolute top-[100px] left-[818px]"
      />
    </section>
  )
}

export default Hero
