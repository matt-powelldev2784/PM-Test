import Button from '../ui/button'
import cryptoIcon from '@/assets/images/crypto-logo.svg'
import { tradeButtonData, tradeButtonDataMobile } from './tradeButtonData'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { marketButtonData } from './marketButtonData'
import arrowSquare from '@/assets/images/arrow-square.svg'
import arrowBottomRight from '@/assets/images/arrow-bottom-right.png'
import arrowTopRight from '@/assets/images/arrow-top-right.png'
import graph from '@/assets/images/graph-red.svg'
import infoIcon from '@/assets/images/info.svg'
import chevronDown from '@/assets/images/chevron-down-white.svg'

const Markets = () => {
  return (
    <>
      <MarketsDesktop />
      <MarketsMobile />
    </>
  )
}

const MarketsDesktop = () => {
  return (
    <section className="hidden xl:flex flex-col items-center justify-center w-full pb-32">
      <p className="mt-24 font-gilroy text-center text-[72px]">Our Markets</p>

      <p className="text-[18px] max-w-[60ch] text-center text-premier-grey">
        Stay informed with the data that matters, on 17,000+ markets1. Get the
        latest news, trader sentiment, spreads, price action and much more.
      </p>

      <MarketButtons />

      <section className="relative w-[1048px] flex flex-row gap-6 mt-12 ">
        <TradeButtons />
        <div className="flex flex-col items-start gap-10 ">
          <div className="flex gap-6">
            <GoldBanner />
            <GoldMarketInfo />
          </div>

          <Graph />
        </div>
      </section>
    </section>
  )
}

const MarketsMobile = () => {
  return (
    <section className="h-[547px] flex xl:hidden flex-col items-center justify-start w-full pb-16">
      <div className="w-[289px] flex flex-col items-center justify-start">
        <p className="font-gilroy font-bold text-[32px] text-premier-red-market mt-8">
          Our <span className="text-premier-black">Markets</span>
        </p>

        <p className="text-[16px]/4.75 mt-2 text-premier-grey max-w-[30ch] text-center">
          Stay informed with the data that matters, on 17,000+ markets. Get the
          latest news, trader sentiment, spreads, price action and much more.
        </p>

        <Button
          variant="redRounded"
          className="relative h-[39px] w-full rounded-3xl text-[16px] font-semibold mt-6 flex justify-between"
        >
          <p className="ml-2">Most Traded</p>

          <img
            src={chevronDown}
            alt="arrow down icon"
            className="w-5 h-5 absolute right-6 top-2.5 text-white"
          />
        </Button>

        <div className="flex flex-col items-center justify-start mt-4 gap-2">
          {tradeButtonDataMobile.map(({ key, ...trade }) => (
            <TradeButtonMobile key={key} {...trade} />
          ))}
        </div>
      </div>
    </section>
  )
}

type TradeButtonMobileProps = {
  shortName: string
  fullName: string
  price: string
  change: string
  selected: boolean
}

const TradeButtonMobile = ({
  shortName,
  fullName,
  price,
  change,
  selected,
}: TradeButtonMobileProps) => {
  return (
    <Button
      className={cn(
        'w-[269px] h-[51px] flex justify-between rounded-xl transition-colors shadow-md shadow-grey-500/40 px-4 py-3',
        selected
          ? 'border-2 border-[#FFA7AA] bg-[linear-gradient(160deg,#ED1D25,#871115)]'
          : 'border border-premier-grey/50 bg-white'
      )}
    >
      <div className="flex items-center gap-7">
        <img src={cryptoIcon} alt="flag icon" className="w-[26px] h-[26px]" />

        <div className="flex flex-col items-start justify-center">
          <p
            className={cn(
              'text-[14px] tracking-wide transition-colors font-semibold',
              selected ? 'text-white' : 'text-black'
            )}
          >
            {shortName}
          </p>
          <p
            className={cn(
              'text-[10px] tracking-wide transition-colors ',
              selected ? 'text-white' : 'text-gray-700'
            )}
          >
            {fullName}
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-2 w-[120px] ">
        <p
          className={cn(
            'text-[10px] tracking-wide transition-colors font-semibold',
            selected ? 'text-white/80' : 'text-black'
          )}
        >
          {price}
        </p>

        <div
          className={cn(
            'h-4 w-px',
            selected ? 'bg-white' : 'bg-premier-black/10'
          )}
        />

        <p
          className={cn(
            'text-[10px] tracking-wide font-semibold',
            selected ? 'text-white/80' : 'text-green-600'
          )}
        >
          {change}
        </p>
      </div>
    </Button>
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

const GoldBanner = () => {
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

const GoldMarketInfo = () => {
  return (
    <div className="bg-[#F9F9F9] w-[186px] h-[66px] flex flex-row items-center justify-center text-[10px] gap-4 rounded-xl">
      <div>
        <p>
          Buyers
          <span className="ml-1 text-bold bg-gray-200 rounded p-0.5">
            66.93%
          </span>
        </p>
        <p className="mt-2">
          Seller
          <span className="ml-1.5 text-bold bg-gray-200 rounded p-0.5">
            66.93%
          </span>
        </p>
      </div>

      <div className="">
        <p className="text-green-500">Low: 3686.38</p>
        <p className="mt-2 text-red-500">High 3788.96</p>
      </div>
    </div>
  )
}
const Graph = () => {
  return (
    <>
      <img src={graph} alt="market graph" />

      <div className="flex gap-2 items-center justify-center -translate-y-4">
        <img src={infoIcon} alt="market graph" className="w-3 h-3" />
        <p className="text-[12px] text-[#B9B9B9]">
          Past performance is not a reliable indicator of future results
        </p>
      </div>

      <div className="absolute h-[343px] right-2 top-43 flex flex-col gap-2 w-auto">
        <p className="w-[37px] h-[37px] bg-premier-black rounded-lg text-white font-gilroy font-bold inline-flex items-center justify-center">
          1d
        </p>
        <p className="w-[37px] h-[37px] bg-premier-red-market rounded-lg text-white font-gilroy font-bold inline-flex items-center justify-center">
          1h
        </p>
        <p className="w-[37px] h-[37px] bg-premier-black rounded-lg text-white font-gilroy font-bold inline-flex items-center justify-center">
          4h
        </p>
        <p className="w-[37px] h-[37px] bg-premier-black rounded-lg text-white font-gilroy font-bold inline-flex items-center justify-center">
          1m
        </p>
        <p className="w-[37px] h-[37px] bg-premier-black rounded-lg text-white font-gilroy font-bold inline-flex items-center justify-center">
          5m
        </p>
        <p className="w-[37px] h-[37px] bg-premier-black rounded-lg text-white font-gilroy font-bold inline-flex items-center justify-center">
          15m
        </p>
        <p className="w-[37px] h-[37px] bg-premier-black rounded-lg text-white font-gilroy font-bold inline-flex items-center justify-center">
          30m
        </p>
        <p className="w-[37px] h-[37px] bg-premier-black rounded-lg text-white font-gilroy font-bold inline-flex items-center justify-center">
          1w
        </p>
      </div>
    </>
  )
}


export default Markets
