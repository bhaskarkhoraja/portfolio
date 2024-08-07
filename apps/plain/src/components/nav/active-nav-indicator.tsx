"use client"

import { usePathname } from "next/navigation"
import { Dot } from "lucide-react"

const ActiveNavIndicator = ({ link }: { link: string }): JSX.Element | null => {
  const pathname = usePathname()
  return link === pathname ? <Dot className="size-10" /> : null
}

export default ActiveNavIndicator
