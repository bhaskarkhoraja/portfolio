"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

import { IDLE_CURSOR_TIMEOUT } from "@/config/constants"

const CursorTrail = (): JSX.Element => {
  // coordinates of the cursor
  const coords = useRef({ x: 0, y: 0 })
  // cursor circles for trailing effect
  const circles = useRef<HTMLDivElement[]>([])

  // visibility status of cursor
  const [visible, setVisible] = useState(false)
  // triggers blob animations on idle
  const [cursorIdle, setCursorIdle] = useState(false)

  useEffect(() => {
    let idleTime = 0

    // handle cursor position changes
    const handleMouseMove = (e: MouseEvent): void => {
      coords.current.x = e.clientX - 8
      coords.current.y = e.clientY - 8

      // delayed visible for hiding trails during initial render
      if (!visible) {
        setTimeout(() => {
          setVisible(true)
        }, 150)
      }
      resetIdleTimer()
    }

    // handle when mouse re-enter the document making cursor visible
    const handleMouseEnter = (): void => {
      setVisible(true)
      resetIdleTimer()
    }

    // handle when mouse leaves the document making cursor invisible
    const handleMouseLeave = (): void => {
      setVisible(false)
    }

    // clear the timeout and restart the idle Time
    const resetIdleTimer = (): void => {
      idleTime = 0
      setCursorIdle(false)
    }

    // event listeners for mouse events
    document.body.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    // set interval for calculating idle time
    const idleInterval = setInterval((): void => {
      idleTime += 1000
      if (idleTime >= IDLE_CURSOR_TIMEOUT) {
        setCursorIdle(true)
      }
    }, 1000)

    // cleanup
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      clearInterval(idleInterval)
    }
  }, [visible])

  // animations for trailing effects of cursor
  useEffect(() => {
    const animateCircles = (): void => {
      let x = coords.current.x
      let y = coords.current.y

      circles.current.forEach((circle, index) => {
        circle.style.left = `${x}px`
        circle.style.top = `${y}px`
        circle.style.transform = `scale(${(circles.current.length - index) / circles.current.length})`

        const nextCircle = circles.current[index + 1] || circles.current[0]
        x += (nextCircle.offsetLeft - x) * 0.3
        y += (nextCircle.offsetTop - y) * 0.3
      })

      window.requestAnimationFrame(animateCircles)
    }
    animateCircles()
  }, [])

  // Motion animation property
  const cursorIdleAnimationData = [
    {
      id: 1,
      className: "-top-1",
      transition: {
        duration: 1,
        repeatDelay: 1,
        delay: 0,
      },
    },
    {
      id: 2,
      className: "top-1 -right-1",
      transition: {
        duration: 1.4,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      id: 3,
      className: "top-0 -right-1",
      transition: {
        duration: 1.2,
        repeatDelay: 3,
        delay: 0,
      },
    },
    {
      id: 4,
      className: "-top-1 right-1",
      transition: {
        duration: 1.5,
        repeatDelay: 4,
        delay: 3,
      },
    },
    {
      id: 5,
      className: "bottom-1 -right-1",
      transition: {
        duration: 1.2,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      id: 6,
      className: "bottom-0 right-0",
      transition: {
        duration: 1.8,
        repeatDelay: 6,
        delay: 0,
      },
    },
    {
      id: 7,
      className: "bottom-0 left-0",
      transition: {
        duration: 1.3,
        repeatDelay: 5,
        delay: 3,
      },
    },
    {
      id: 8,
      className: "-bottom-1 left-1",
      transition: {
        duration: 1.6,
        repeatDelay: 4,
        delay: 1,
      },
    },
    {
      id: 9,
      className: "bottom-2 -left-1",
      transition: {
        duration: 1.5,
        repeatDelay: 3,
        delay: 2,
      },
    },
    {
      id: 10,
      className: "bottom-3 -left-0.5",
      transition: {
        duration: 1,
        repeatDelay: 2,
        delay: 1.2,
      },
    },
  ] as const

  return (
    <>
      {/* Multiple circles for trailing efects */}
      {Array.from({ length: 20 }, (_, index) => index + 1).map(
        (number, index) => (
          <div
            className={`circle pointer-events-none fixed left-0 top-0 ${!visible && "invisible"}`}
            key={number}
            ref={(el) => {
              if (el) {
                circles.current[index] = el
              }
            }}
          >
            <div className="size-5 rounded-full bg-foreground" />
            {/* Small bubbles visible when the cursor is idle */}
            {index === 0 && cursorIdle ? (
              <>
                {cursorIdleAnimationData.map((data) => (
                  <motion.div
                    animate={{ scale: [0, 1, 0] }}
                    className={`absolute size-2 rounded-full bg-foreground ${data.className}`}
                    key={data.id}
                    transition={{
                      repeat: Infinity,
                      ease: "easeInOut",
                      duration: data.transition.duration,
                      repeatDelay: data.transition.repeatDelay,
                      delay: data.transition.delay,
                    }}
                  />
                ))}
              </>
            ) : null}
          </div>
        )
      )}
    </>
  )
}

export default CursorTrail
