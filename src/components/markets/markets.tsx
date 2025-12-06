import Button from '../ui/button'
import cryptoIcon from '@/assets/images/crypto-logo.svg'
import { tradeButtonData } from './tradeButtonData'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { marketButtonData } from './marketButtonData'
import arrowSquare from '@/assets/images/arrow-square.svg'
import arrowBottomRight from '@/assets/images/arrow-bottom-right.png'
import arrowTopRight from '@/assets/images/arrow-top-right.png'

const Markets = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <p className="mt-24 font-gilroy text-center text-[72px]">Our Markets</p>

      <p className="text-[18px] max-w-[60ch] text-center text-premier-grey">
        Stay informed with the data that matters, on 17,000+ markets1. Get the
        latest news, trader sentiment, spreads, price action and much more.
      </p>

      <MarketButtons />

      <section className="w-[1048px] flex flex-row gap-6 mt-12 ">
        <TradeButtons />
        <Gold />
      </section>
    </section>
  )
}

const Gold = () => {
  return (
    <article className="relative w-[455px] h-[132px] flex items-center justify-evenly bg-[linear-gradient(270deg,#940006,#220001)] rounded-3xl">
      <img
        src={arrowSquare}
        alt="square arrow icon"
        className="absolute right-3 top-3 w-[17px] h-[17px]"
      />

      <div className="h-full pt-7 font-gilroy font-bold text-[24px]">
        <p className="text-white">Gold</p>
      </div>

      <div className="flex flex-row gap-5">
        <div className="w-[145px] h-[72px] flex items-center justify-center rounded-2xl bg-[linear-gradient(270deg,#ED1D25,#871115)] border-2 border-[#871115] ">
          <div>
            <p className="text-white text-[15px] h-5">Buy</p>

            <div className="relative flex items-end w-[110px] ">
              <p className="text-[24px] font-gilroy font-bold text-white">
                3733.31
              </p>
              <img
                src={arrowBottomRight}
                alt="arrow bottom right icon"
                className="absolute right-1 bottom-2.5 w-[17px] h-[17px]"
              />
            </div>
          </div>
        </div>

        <div className="w-[145px] h-[72px] flex items-center justify-center rounded-2xl bg-white border-2 border-premier-neutral ">
          <div>
            <p className="text-premier-red-market text-[15px] h-5">Buy</p>

            <div className="relative flex items-end w-[110px] ">
              <p className="text-[24px] font-gilroy font-bold text-premier-red-market">
                3733.31
              </p>
              <img
                src={arrowTopRight}
                alt="arrow bottom right icon"
                className="absolute right-1 bottom-2.5 w-[17px] h-[17px]"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

const MarketButtons = () => {
  return (
    <div className="flex gap-8 mt-8">
      {marketButtonData.map(({ key, ...buttonProps }) => (
        <MarketButton key={key} {...buttonProps} />
      ))}
    </div>
  )
}

type MarketButtonProps = {
  text: string
  style: string
}

const MarketButton = ({ text, style }: MarketButtonProps) => {
  const variant = style === 'redRounded' ? 'redRounded' : 'redOutline'

  return (
    <Button variant={variant} size="md">
      {text}
    </Button>
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
    <section className="flex flex-col gap-6 mt-12 w-[300px]">
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
                'text-[16px] tracking-wide transition-colors font-semibold',
                selected ? 'text-white' : 'text-black'
              )}
            >
              {shortName}
            </p>
            <p
              className={cn(
                'text-[14px] tracking-wide transition-colors ',
                selected ? 'text-white' : 'text-gray-700'
              )}
            >
              {fullName}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <p
            className={cn(
              'text-[16px] tracking-wide transition-colors font-semibold',
              selected ? 'text-white/80' : 'text-black'
            )}
          >
            {price}
          </p>

          <p
            className={cn(
              'text-[16px] tracking-wide font-semibold',
              selected ? 'text-white/80' : 'text-green-600'
            )}
          >
            {change}
          </p>
        </div>
      </Button>
    </div>
  )
}

export default Markets
