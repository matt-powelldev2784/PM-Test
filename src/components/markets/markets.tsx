import Button from '../ui/button'

const Markets = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <p className="mt-24 font-gilroy text-center text-[72px]">Our Markets</p>

      <p className="text-[18px] max-w-[60ch] text-center text-premier-grey">
        Stay informed with the data that matters, on 17,000+ markets1. Get the
        latest news, trader sentiment, spreads, price action and much more.
      </p>

      <div className="flex gap-8 mt-8">
        <Button variant="redRounded" size="md">
          Most Traded
        </Button>

        <Button variant="redOutline" size="md">
          Commodities
        </Button>

        <Button variant="redOutline" size="md">
          Indices
        </Button>

        <Button variant="redOutline" size="md">
          Cryprocurrencies
        </Button>

        <Button variant="redOutline" size="md">
          Shares
        </Button>

        <Button variant="redOutline" size="md">
          ETFs
        </Button>
      </div>
    </section>
  )
}

export default Markets
