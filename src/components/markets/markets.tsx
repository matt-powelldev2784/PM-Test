import Button from '../ui/button'
import cryptoIcon from '@/assets/images/crypto-logo.svg'
import { tradeButtonData } from './tradeButtonData'
import { cn } from '@/lib/utils'
import { useState } from 'react'

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

      <TradeButtons />
    </section>
  )
}

type TradeButton = {
  key: number
  id: number
  shortName: string
  fullName: string
  price: string
  change: string
  selected: boolean
}

const TradeButtons = () => {
  const [trades, setTrades] = useState<TradeButton[]>(tradeButtonData)

  const setSelected = (id: number) => {
    setTrades((prev) =>
      prev.map((trade) =>
        trade.id === id
          ? { ...trade, selected: true }
          : { ...trade, selected: false }
      )
    )
  }

  const handleButtonClick = (id: number) => {
    setSelected(id)
  }
  return (
    <section className="w-[1048px] flex flex-col gap-6 mt-12 ">
      {trades.map(({ key, ...trade }) => (
        <TradeButton
          key={key}
          {...trade}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </section>
  )
}

type TradeButtonProps = {
  id: number
  shortName: string
  fullName: string
  price: string
  change: string
  selected: boolean
  handleButtonClick: (key: number) => void
}

const TradeButton = ({
  id,
  shortName,
  fullName,
  price,
  change,
  selected,
  handleButtonClick,
}: TradeButtonProps) => {
  return (
    <div className="w-[300px]">
      <Button
        onClick={() => handleButtonClick(id)}
        className={cn(
          'w-[286px] h-[74px] flex justify-between rounded-xl transition-colors shadow-md shadow-grey-500/40 px-4 py-3',
          selected
            ? 'border-2 border-[#FFA7AA] bg-[linear-gradient(160deg,#ED1D25,#871115)]'
            : 'border border-premier-grey/50 bg-white'
        )}
      >
        <div className="flex gap-2">
          <img src={cryptoIcon} alt="flag icon" className="w-[41px] h-[41px]" />

          <div className="flex flex-col items-start justify-center">
            <p
              className={cn(
                'text-[16px] tracking-wide transition-colors',
                selected ? 'text-white' : 'text-black'
              )}
            >
              {shortName}
            </p>
            <p
              className={cn(
                'text-[14px] tracking-wide transition-colors',
                selected ? 'text-white/80' : 'text-black'
              )}
            >
              {fullName}
            </p>
          </div>
        </div>

        <p
          className={cn(
            'text-[14px] tracking-wide transition-colors',
            selected ? 'text-white/80' : 'text-black'
          )}
        >
          {price} {change}
        </p>
      </Button>
    </div>
  )
}

export default Markets
