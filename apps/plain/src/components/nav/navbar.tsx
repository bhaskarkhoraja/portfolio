import Link from "next/link"
import { Menu } from "lucide-react"

import { Icons } from "@/components/icons"
import ActiveNavIndicator from "@/components/nav/active-nav-indicator"
import Name from "@/components/nav/name"
import { buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

import ModeToggle from "./mode-toggle"

export const SITE_NAV = [
  {
    title: "Home",
    href: "/",
    icon: <Icons.Home />,
  },
] as const

const NavBar = (): JSX.Element => {
  return (
    <nav
      className={cn(
        "container sticky top-0 w-full bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "md:static md:my-10 md:h-[calc(100dvh-5rem)] md:w-fit md:px-4"
      )}
    >
      <div className="flex items-center justify-between md:block">
        <Name />
        <Drawer>
          <DrawerTrigger className="md:hidden">
            <Menu />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <NavItems />
              {/*used drawer close, because animation background on mode toggle is not working in small screen*/}
              <DrawerClose className="mb-2 mt-4 flex w-full justify-center">
                <ModeToggle />
              </DrawerClose>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden h-full flex-col justify-between md:flex md:pb-10">
        <div className="mt-4">
          <NavItems />
        </div>
        <div className="mt-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

const NavItems = (): JSX.Element => {
  return (
    <>
      {SITE_NAV.map((item) => (
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "relative flex w-full items-center justify-start gap-2 px-6 hover:bg-tertiary"
          )}
          href={item.href}
          key={item.title}
        >
          <ActiveNavIndicator link={item.href} />
          <Icons.Home />
          <p>{item.title}</p>
        </Link>
      ))}
    </>
  )
}

export default NavBar
