"use client"

import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const ActiveNavIndicator = ({ link }: { link: string }): JSX.Element | null => {
  const pathname = usePathname()

  return link === pathname ? (
    <motion.div
      className={cn(
        "absolute left-1 top-1.5 flex h-6 w-2 items-center justify-center rounded-sm bg-foreground"
      )}
      layoutId="active-nav"
    />
  ) : null
}

export default ActiveNavIndicator
