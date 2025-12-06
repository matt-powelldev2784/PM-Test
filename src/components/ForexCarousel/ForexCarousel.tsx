import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { data } from './data'

const ForexCarousel = () => {
  return (
    <section className="flex items-center justify-center w-screen h-full overflow-x-hidden">
      <Carousel>
        <CarouselContent className="pb-6">
          {data.map(({ key, ...forexCardProps }) => (
            <CarouselItem key={key} className="basis-1/4">
              <ForexCard {...forexCardProps} />
            </CarouselItem>
          ))}
          <CarouselPrevious className="xl:hidden left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="xl:hidden right-4 top-1/2 -translate-y-1/2" />
        </CarouselContent>
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
    <Card className="w-[284px] h-[78px] flex flex-row items-center justify-center gap-2 border-0 rounded-full shadow-md shadow-grey-500/40">
      <img src={icon} alt={`${pair} icon`} className="w-8 h-8" />

      <p className="text-lg font-semibold text-[14px]">{pair}</p>

      {isNegative ? (
        <img src="src/assets/images/negative.png" alt="negative change icon" />
      ) : (
        <img src="src/assets/images/positive.png" alt="positive change icon" />
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

export default ForexCarousel
