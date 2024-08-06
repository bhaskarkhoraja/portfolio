"use client"

import * as React from "react"
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
    <div className="flex w-full rounded-md bg-tertiary p-1">
      <span className="sr-only">Toggle Dark Mode</span>
      {mounted ? (
        <div className="flex w-full cursor-pointer rounded-sm">
          <Button
            aria-label="Light"
            className={cn(
              "flex h-fit flex-1 items-center justify-center gap-2 rounded-sm bg-transparent px-3 py-1 text-tertiary-foreground shadow-none hover:bg-transparent hover:text-tertiary-foreground",
              theme === "light" &&
                "text-primary-background hover:text-primary-background bg-background hover:bg-background"
            )}
            onClick={() => {
              setTheme("light")
            }}
          >
            <Sun className="size-5" />
          </Button>
          <Button
            aria-label="dark"
            className={cn(
              "flex h-fit flex-1 items-center justify-center gap-2 rounded-sm bg-transparent px-3 py-1 text-tertiary-foreground shadow-none hover:bg-transparent hover:text-tertiary-foreground",
              theme === "dark" &&
                "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            )}
            onClick={() => {
              setTheme("dark")
            }}
          >
            <Moon className="size-5" />
          </Button>
          <Button
            aria-label="system"
            className={cn(
              "flex h-fit flex-1 items-center justify-center gap-2 rounded-sm bg-transparent px-3 py-1 text-tertiary-foreground shadow-none hover:bg-transparent hover:text-tertiary-foreground",
              theme === "system" &&
                "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            )}
            onClick={() => {
              setTheme("system")
            }}
          >
            <LaptopMinimal className="size-5" />
          </Button>
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

export default ModeToggle
