import { useLayoutEffect, useState } from "react"

/*
  Original from https://github.com/uidotdev/usehooks/blob/90fbbb4cc085e74e50c36a62a5759a40c62bb98e/index.js#L1344
*/
const useWindowSize = (): {
  width: number
  height: number
} => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    const handleResize = (): void => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return size
}

export default useWindowSize
