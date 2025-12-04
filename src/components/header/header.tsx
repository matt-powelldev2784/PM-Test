import NavButton from '@/components/ui/navButton'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

const dropDownMenuItems = [
  {
    title: 'Trading',
    items: [
      'Starting',
      'Why trade with premier?',
      'Accounts',
      'Deposits and Withdrawals',
      'Social Media',
    ],
  },
]

export function NavigationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavButton variant="navButton">Open</NavButton>
      </DropdownMenuTrigger>

      {dropDownMenuItems.map((menu) => (
        <MenuItems key={menu.title} title={menu.title} items={menu.items} />
      ))}
    </DropdownMenu>
  )
}

type MenuDropDownProps = {
  title: string
  items: string[]
}

const MenuItems = ({ title, items }: MenuDropDownProps) => {
  return (
    <DropdownMenuContent className="w-auto" align="start">
      <DropdownMenuItem className="flex flex-col items-start justify-between gap-6 w-full pl-8 pr-16 py-4">
        <p className="font-bold text-[18px] text-premier-red">{title}</p>

        {items.map((item) => (
          <li
            key={item}
            className="list-none w-full flex flex-row items-center justify-start gap-4"
          >
            <div className="w-[22px] h-[22px] bg-[#FFF5F5] inline-flex items-center justify-center">
              <img
                src="src/assets/icons/GraphAscend.svg"
                alt="Premier Markets Logo"
              />
            </div>

            <p key={item} className="text-[18px]">
              {item}
            </p>
          </li>
        ))}
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

const Header = () => {
  return (
    <section className="h-[130px] border border-green-500">
      <HeaderTopBar />
      <NavigationBar />
    </section>
  )
}

const NavigationBar = () => {
  return (
    <nav className="px-[60px] h-[90px] flex items-center justify-between border border-red-500">
      <img
        src="src/assets/Header/Light/Center/logo.svg"
        alt="Premier Markets Logo"
        className="w-40 h-[45px]"
      />

      <div className="w-full mx-[120px] border-2 border-red-500">
        <NavigationMenu />
      </div>

      <img
        src="src/assets/Header/Light/Center/logo.svg"
        alt="Premier Markets Logo"
      />
    </nav>
  )
}

const HeaderTopBar = () => {
  return (
    <div className="h-10 border-b border border-[#C9C9C9] px-[60px]">
      <div className="flex flex-row justify-between items-center h-full">
        <div className="flex items-center justify-center gap-2 text-[14px] h-full">
          <a className="inline-flex h-full items-center text-premier-red border-b-2 border-premier-red">
            Personal
          </a>
          <p className="text-[#D6D6D6]">|</p>
          <a>Institutional</a>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2 font-semibold text-[14px] h-full">
            <a>WebTrader</a>
            <p className="text-[#D6D6D6]">|</p>
            <a>Support</a>
            <p className="text-[#D6D6D6]">|</p>
            <a> Open Demo</a>
            <p className="text-[#D6D6D6]">|</p>

            <div className="flex items-center justify-center">
              <img
                src="src/assets/Header/Light/Center/united-kingdom.png"
                alt="flag icon"
                className="w-[30px] h-[30px]"
              />
              <p className="font-[12px]">EN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
