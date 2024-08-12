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
    <main className="container pt-10">
      <section className="space-y-6">
        <h3 className="text-lg font-bold text-foreground/80">
          It&apos;s {weekdayNames[date.getDay()]}, <br />
          Hope Your {greeting} Is Going Well!
        </h3>
        <h1 className="text-3xl font-bold">
          Bhaskar is a Next.js developer who creates clean, stunning, and
          user-friendly web applications. His commitment to best practices
          ensures maintainable and scalable solutions.
        </h1>
      </section>
    </main>
  )
}
