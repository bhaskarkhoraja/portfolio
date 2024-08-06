"use client"

import * as React from "react"
import { Laptop2 as LaptopMinimal, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

const ModeToggle = (): JSX.Element => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const { setTheme, theme } = useTheme()

  return (
    <div className="flex w-full rounded-md bg-muted p-1">
      <span className="sr-only">Toggle Dark Mode</span>
      {mounted ? (
        <div className="flex w-full cursor-pointer rounded-sm">
          <div
            aria-label="Light"
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-sm px-3 py-1",
              theme === "light" && "text-primary-background bg-background"
            )}
            onClick={() => {
              setTheme("light")
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setTheme("light")
              }
            }}
            role="button"
            tabIndex={0}
          >
            <Sun className="size-5" />
          </div>
          <div
            aria-label="dark"
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-sm px-3 py-1",
              theme === "dark" && "bg-primary text-primary-foreground"
            )}
            onClick={() => {
              setTheme("dark")
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setTheme("dark")
              }
            }}
            role="button"
            tabIndex={0}
          >
            <Moon className="size-5" />
          </div>
          <div
            aria-label="system"
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-sm px-3 py-1",
              theme === "system" && "bg-primary text-primary-foreground"
            )}
            onClick={() => {
              setTheme("system")
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setTheme("system")
              }
            }}
            role="button"
            tabIndex={0}
          >
            <LaptopMinimal className="size-5" />
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

export default ModeToggle
