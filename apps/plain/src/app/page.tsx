import Technology from "@/components/technology"
import { cn } from "@/lib/utils"

export default function Home(): JSX.Element {
  const date = new Date()
  const weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const time = date.getHours()
  let greeting

  if (time === 0) {
    greeting = "Midnight"
  } else if (time >= 1 && time <= 10) {
    greeting = "Morning"
  } else if (time === 11 || time === 12) {
    greeting = "Noon"
  } else if (time >= 13 && time <= 17) {
    greeting = "Afternoon"
  } else {
    greeting = "Evening"
  }

  return (
    <main className={cn("container", "md:h-dvh md:overflow-y-auto md:pt-10")}>
      <section className="space-y-6">
        <h3 className="text-lg font-bold text-foreground/80">
          It&apos;s {weekdayNames[date.getDay()]}, <br />
          Hope Your {greeting} Is Going Well!
        </h3>
        <h1 className="text-center text-2xl font-bold md:text-start md:text-3xl">
          Bhaskar is a Next.js developer who turns ideas into reality. With a
          passion for innovation, he crafts seamless web experiences.
        </h1>
      </section>

      <section className="mt-6 space-y-6">
        <h2 className="text-lg font-bold text-foreground/80">
          Technologies I excel at and use right now.
        </h2>
        <Technology />
      </section>
    </main>
  )
}
