export default function NotFound(): JSX.Element {
  return (
    <main className="container relative flex h-[calc(100dvh-5rem)] flex-col items-center justify-center md:h-dvh">
      <div className="-mt-14 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black md:text-7xl">404</h1>
        <p className="text-sm md:text-lg">Page not found</p>
      </div>
    </main>
  )
}
