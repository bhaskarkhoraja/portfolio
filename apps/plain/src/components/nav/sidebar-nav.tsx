import Link from "next/link"

import { Icons } from "@/components/icons"
import ActiveNavIndicator from "@/components/nav/active-nav-indicator"
import Name from "@/components/nav/name"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SideBarNav = (): JSX.Element => {
  return (
    <aside className="hidden h-screen pt-10 lg:block">
      <div className="px-4">
        <Name />
      </div>
      <div className="px-4 pt-8">
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex w-full items-center justify-start gap-4 hover:bg-tertiary"
          )}
          href="/"
        >
          <Icons.Home />
          <div className="flex items-center">
            <p>Home</p>
            <ActiveNavIndicator link="/" />
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default SideBarNav
