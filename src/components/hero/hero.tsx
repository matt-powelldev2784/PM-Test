import Button from '../ui/button'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { forexData } from './forexData'
import heroClipPath from '@/assets/images/hero-clip-path.svg'
import heroPhoneLarge from '@/assets/images/hero_phone_lg.webp'
import heroPhoneSmall from '@/assets/images/hero_phone_sm.webp'
import negativeIcon from '@/assets/images/negative.png'
import positiveIcon from '@/assets/images/positive.png'

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
    <section className="relative bg-red-500 h-[801px] hidden xl:block overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute w-full h-[691px] bg-[linear-gradient(90deg,#320002_0%,#900006_33%,#ED1D25_100%)]"></div>
      <div className="absolute w-full h-[691px] bg-[linear-gradient(90deg,#ED1D25_100%,#ED1D2500_0%)] opacity-40"></div>

      {/* Bottom Clip Path */}
      <img
        src={heroClipPath}
        alt="arrow down icon"
        className="absolute bottom-0 w-full object-fit z-10"
      />

      {/* Forex Carousel */}
      <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center">
        <ForexCarousel />
      </div>

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
        src={heroPhoneLarge}
        alt="phone image"
        className="absolute top-[100px] left-[818px]"
      />
    </section>
  )
}

const MobileHero = () => {
  return (
    <section className="xl:hidden overflow-hidden">
      <div className="relative bg-red-500 h-[667px] flex ">
        {/* Background Gradients */}
        <div className="absolute w-full h-[667px] bg-[linear-gradient(360deg,#320002_0%,#900006_33%,#ED1D25_100%)]"></div>
        <div className="absolute w-full h-[667px] bg-[linear-gradient(360deg,#ED1D25_100%,#ED1D2500_0%)] opacity-40"></div>

        {/* Content Container */}
        <div className="relative w-full flex flex-col items-center justify-start overflow-hidden">
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
            src={heroPhoneSmall}
            alt="phone image"
            className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-[260px]"
          />
        </div>
      </div>

      {/* Forex Carousel */}
      <ForexCarousel />
    </section>
  )
}

const ForexCarousel = () => {
  return (
    <section className="flex items-center justify-center w-full h-[120px] xl:translate-y-[5px] px-0 xl:px-8 bg-white">
      <Carousel
        opts={{
          align: 'center',
        }}
        className="w-full"
      >
        <CarouselContent className="pb-6">
          {forexData.map(({ key, ...forexCardProps }) => (
            <CarouselItem
              key={key}
              className="basis-full xl:basis-1/4 flex items-center justify-center"
            >
              <ForexCard {...forexCardProps} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          variant="ghost"
          className="xl:hidden left-4 top-1/2 -translate-y-1/2"
        />
        <CarouselNext
          variant="ghost"
          className="xl:hidden right-4 top-1/2 -translate-y-1/2"
        />
      </Carousel>
    </section>
  )
}

type ForexCardProps = {
  pair: string
  rate: string
  change: string
  icon: string
}

const ForexCard = ({ pair, rate, change, icon }: ForexCardProps) => {
  const isNegative = parseFloat(change) < 0

  return (
    <Card className="w-full max-w-[284px] h-[78px] flex flex-row items-center justify-center gap-2 border-0 rounded-full shadow-md shadow-grey-500/40">
      <img src={icon} alt={`${pair} icon`} className="w-8 h-8" />

      <p className="text-lg font-semibold text-[14px]">{pair}</p>

      {isNegative ? (
        <img src={negativeIcon} alt="negative change icon" />
      ) : (
        <img src={positiveIcon} alt="positive change icon" />
      )}

      <div className="flex flex-col gap-1">
        <div className="text-sm font-bold text-[14px]">{rate}</div>
        <div
          className={`text-sm text-[14px] font-bold ${
            isNegative ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {change}
        </div>
      </div>
    </Card>
  )
}

export default Hero
