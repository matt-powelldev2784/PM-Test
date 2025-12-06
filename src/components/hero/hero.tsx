import Button from '../ui/button'

const Hero = () => {
  return (
    <>
      <HeroDesktop />
      <MobileHero />
    </>
  )
}

const HeroDesktop = () => {
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
        alt="phone image"
        className="absolute top-[100px] left-[818px]"
      />
    </section>
  )
}

const MobileHero = () => {
  return (
    <section className="relative bg-red-500 h-[667px] flex xl:hidden overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute w-full h-[667px] bg-[linear-gradient(360deg,#320002_0%,#900006_33%,#ED1D25_100%)]"></div>
      <div className="absolute w-full h-[667px] bg-[linear-gradient(360deg,#ED1D25_100%,#ED1D2500_0%)] opacity-40"></div>

      {/* Content Container */}
      <div className="relative w-full flex flex-col items-center justify-start border-2 border-blue-500">
        <p className="font-gilroy text-white text-[40px] leading-[103%] tracking-[-0.03em] mt-8 px-14 text-center">
          Trade CFDs with Premier Markets
        </p>

        <p className="text-white text-[16px] leading-[120%] text-center px-12 mt-4">
          Access global markets with advanced trading tools, competitive
          spreads, and institutional grade execution.
        </p>

        <div className="flex flex-col gap-6 mt-8">
          <Button
            variant="white"
            size="lg"
            className="h-[53px] w-[206px] rounded-3xl text-[16px] font-semibold"
          >
            Start Trading
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-[53px] w-[206px] rounded-3xl text-[16px] font-semibold bg-transparent border-white text-white border-2"
          >
            Try Demo Account
          </Button>
        </div>

        <img
          src="src/assets/images/hero_phone_sm.webp"
          alt="phone image"
          className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-[260px]"
        />
      </div>
    </section>
  )
}

export default Hero
