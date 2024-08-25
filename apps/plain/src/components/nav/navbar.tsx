import Link from "next/link"

import { Icons } from "@/components/icons"
import ActiveNavIndicator from "@/components/nav/active-nav-indicator"
import Name from "@/components/nav/name"
import { buttonVariants } from "@/components/ui/button"
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
      <Name />
      <div className="flex h-full flex-col justify-between pb-10">
        <div className="mt-4">
          {SITE_NAV.map((item) => (
            <Link
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "relative flex w-full items-center justify-start gap-4 hover:bg-tertiary"
              )}
              href={item.href}
              key={item.title}
            >
              <ActiveNavIndicator link={item.href} />
              <Icons.Home />
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
