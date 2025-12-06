import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { navigationItems } from './navigationItems'
import menuIcon from '@/assets/images/menu-line-horizontal.svg'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import Button from '../ui/button'

const Header = () => {
  return (
    <>
      {/* Desktop Header */}
      <section className="hidden xl:block h-[130px]">
        <TopHeaderBar />
        <BottomNavigationBar />
      </section>

      {/* Mobile Header */}
      <section className="block xl:hidden h-[62px]">
        <MobileNavigation />
      </section>
    </>
  )
}

const TopHeaderBar = () => {
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
                src="src/assets/images/united-kingdom.png"
                alt="flag icon"
                className="w-[30px] h-[30px]"
              />
              <p className="text-[12px]">EN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BottomNavigationBar = () => {
  return (
    <nav className="px-[60px] h-[90px] flex items-center justify-between">
      <img
        src="src/assets/images/logo.svg"
        alt="Premier Markets Logo"
        className="w-40 h-[45px]"
      />

      <NavigationMenu />

      <div className="flex justify-center items-center gap-6">
        <Button
          variant="redShadow"
          className="bg-premier-red px-6 py-3 text-white"
        >
          Register
        </Button>
        <img
          src="src/assets/images/User.svg"
          alt="Premier Markets Logo"
          className="w-6 h-[25px]"
        />
      </div>
    </nav>
  )
}

export function NavigationMenu() {
  return (
    <div className="w-8/12 mx-auto flex items-center justify-center gap-3">
      {navigationItems.map((menu) => (
        <DropdownMenu key={menu.menuName}>
          <DropdownMenuTrigger asChild>
            <Button variant="navButton" className="text-[16px] font-weight-100">
              {menu.menuName}
              <img src="src/assets/images/chevron.svg" alt="arrow down icon" />
            </Button>
          </DropdownMenuTrigger>

          <MenuItems title={menu.title} items={menu.items} />
        </DropdownMenu>
      ))}

      <a className="flex gap-2">
        <p className="text-premier-red">Partner with us</p>
        <img src="src/assets/images/arrow-right.svg" alt="arrow down icon" />
      </a>
    </div>
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
          <a
            key={item}
            className="list-none w-full flex flex-row items-center justify-start gap-4"
          >
            <div className="w-[22px] h-[22px] bg-[#FFF5F5] inline-flex items-center justify-center">
              <img
                src="src/assets/images/GraphAscend.svg"
                alt="Premier Markets Logo"
              />
            </div>

            <p key={item} className="text-[18px]">
              {item}
            </p>
          </a>
        ))}
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

const MobileNavigation = () => {
  return (
    <nav className="h-[63px] flex items-center justify-center bg-white">
      <div className="mx-8 w-full flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <MobileMenu />
          </div>

          <img
            src="src/assets/images/logo.svg"
            alt="Premier Markets Logo"
            className="w-[81px] h-[23px]"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src="src/assets/images/united-kingdom.png"
            alt="flag icon"
            className="w-[30px] h-[30px]"
          />
          <p className="text-[12px] font-gilroy">EN</p>
        </div>
      </div>
    </nav>
  )
}

const MobileMenu = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="navButton" aria-label="Open menu">
          <img src={menuIcon} alt="open menu icon" className="h-6 w-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-start left-0 top-0 z-50 py-4 px-5 h-screen w-[90vw] max-w-none translate-x-0 translate-y-0 rounded-none border-0 shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>

        <img
          src="src/assets/images/logo.svg"
          alt="Premier Markets Logo"
          className="w-[81px] h-[23px]"
        />

        <div className="w-full mt-4">
          <Input
            placeholder="Search"
            icon={<Search className="size-4 text-premier-red" />}
          />

          <MobileMenuItems />
        </div>
      </DialogContent>
    </Dialog>
  )
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function MobileMenuItems() {
  return (
    <Accordion type="single" collapsible className="w-full mt-2">
      {navigationItems.map((item) => (
        <AccordionItem key={item.menuName} value={item.menuName}>
          <AccordionTrigger className="text-[17px] h-[54px]">
            {item.menuName}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 w-full">
            <p>{item.dummyText}</p>
          </AccordionContent>
        </AccordionItem>
      ))}

      <a className="flex justify-between gap-2 mt-4">
        <p className="text-premier-red font-bold">Partner with us</p>
        <img src="src/assets/images/arrow-right.svg" alt="arrow down icon" />
      </a>

      <Button
        variant="neutralRed"
        size="lg"
        className="w-full mt-16 flex items-center justify-center gap-2 py-3"
      >
        <p className="inline-flex h-full items-center text-premier-red">
          Personal
        </p>
        <p className="text-[#D6D6D6]">|</p>
        <a>Institutional</a>
      </Button>

      <div className="flex items-center justify-center gap-3 mt-14 font-gilroy font-regular text-[14px]">
        <a>WebTrader</a>
        <p className="text-[#D6D6D6]">|</p>
        <a>Support</a>
        <p className="text-[#D6D6D6]">|</p>
        <a> Open Demo</a>
        <p className="text-[#D6D6D6]">|</p>
      </div>

      <Button size="lg" className="font-bold w-full mt-12">
        Register
      </Button>

      <Button size="lg" variant="destructive" className="font-bold w-full mt-4">
        Register
      </Button>
    </Accordion>
  )
}


export default Header
