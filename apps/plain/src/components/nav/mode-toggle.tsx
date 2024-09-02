"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Laptop2 as LaptopMinimal, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ModeToggle = (): JSX.Element => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const { setTheme, theme } = useTheme()

  return (
    <div className="flex w-fit rounded-md bg-foreground/5 p-1 md:w-full md:bg-tertiary">
      <span className="sr-only">Toggle Dark Mode</span>
      {mounted ? (
        <div className="flex w-fit cursor-pointer rounded-sm md:w-full">
          <div className="relative flex flex-1 justify-center">
            <Button
              aria-label="Light"
              className={cn(
                "flex h-fit items-center justify-center gap-2 rounded-sm bg-transparent px-3 py-1 text-tertiary-foreground shadow-none hover:bg-transparent hover:text-tertiary-foreground",
                theme === "light" &&
                  "text-primary-background hover:text-primary-background"
              )}
              onClick={() => {
                setTheme("light")
              }}
            >
              <Sun className="z-10 size-5" />
            </Button>
            <ActiveModeIndicator
              className="bg-background hover:bg-background"
              mode="light"
            />
          </div>
          <div className="relative flex flex-1 justify-center">
            <Button
              aria-label="dark"
              className={cn(
                "flex h-fit items-center justify-center gap-2 rounded-sm bg-transparent px-3 py-1 text-tertiary-foreground shadow-none hover:bg-transparent hover:text-tertiary-foreground",
                theme === "dark" &&
                  "text-primary-foreground hover:text-primary-foreground"
              )}
              onClick={() => {
                setTheme("dark")
              }}
            >
              <Moon className="z-10 size-5" />
            </Button>
            <ActiveModeIndicator
              className="bg-primary hover:bg-primary"
              mode="dark"
            />
          </div>
          <div className="relative flex flex-1 justify-center">
            <Button
              aria-label="system"
              className={cn(
                "flex h-fit items-center justify-center gap-2 rounded-sm bg-transparent px-3 py-1 text-tertiary-foreground shadow-none hover:bg-transparent hover:text-tertiary-foreground",
                theme === "system" &&
                  "text-primary-foreground hover:text-primary-foreground"
              )}
              onClick={() => {
                setTheme("system")
              }}
            >
              <LaptopMinimal className="z-10 size-5" />
            </Button>
            <ActiveModeIndicator
              className="bg-primary hover:bg-primary"
              mode="system"
            />
          </div>
        </div>
      ) : (
        <div className="flex w-full rounded-md bg-muted">
          <div className="flex flex-1 items-center justify-center rounded-sm px-3 py-1">
            <Sun className="size-5" />
          </div>
          <div className="flex flex-1 items-center justify-center rounded-sm px-3 py-1">
            <Moon className="size-5" />
          </div>
          <div className="flex flex-1 items-center justify-center rounded-sm px-3 py-1">
            <LaptopMinimal className="size-5" />
          </div>
        </div>
      )}
    </div>
  )
}

const ActiveModeIndicator = ({
  mode,
  className,
}: {
  mode: string
  className: string
}): JSX.Element | null => {
  const { theme } = useTheme()

  return mode === theme ? (
    <motion.div
      className={cn(
        "absolute left-0 top-0 flex h-full w-full rounded-sm",
        className
      )}
      layoutId="active-mode"
    />
  ) : null
}

export default ModeToggle
