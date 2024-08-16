"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { SVG_SIZE } from "@/config/constants"
import { useDegree } from "@/components/technology/degree-provider"

/**     *** Layout of the container in grap ***
 *               Y
 *               |D(0,H)
 *               |------------------|C(W,H)
 *               |                  |
 *               |                  |
 *               |                  |
 *               |                  |
 *               |                  |
 *               |A(0,0)            |B(W,0)
 * -X------------+-------------------------------- X
 *               |
 *               |
 *               |
 *
 *      W = width of the rectangle drawn
 *      H = height of the rectangle drawn
 *
 *      ** Requirement for coordinates for being in edge **
 *      AB = (?,0) - ? is less than W
 *      BC = (W,?) - ? is less than H
 *      CD = (H,?) - ? is less than W
 *      DA = (0,?) - + is less than H
 **/

type Coordinate = { x: number; y: number }

const TechnologyWrapper = ({
  containerDimension,
  delay,
  children,
}: {
  containerDimension: {
    width: number
    height: number
  }
  delay: number
  children: React.ReactNode
}): JSX.Element => {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 })
  const [duration, setDuration] = useState(15)
  const [firstRender, setFirstRender] = useState(true)

  const { setDegree } = useDegree()

  // pick random coordinates from the given edges
  const getRandomCoordinateOnEdge = (
    edge: "AB" | "BC" | "CD" | "DA"
  ): Coordinate => {
    switch (edge) {
      case "AB":
        return {
          x: Math.random() * (containerDimension.width - SVG_SIZE),
          y: 0,
        }
      case "BC":
        return {
          x: containerDimension.width - SVG_SIZE,
          y: Math.random() * (containerDimension.height - SVG_SIZE),
        }
      case "CD":
        return {
          x: Math.random() * (containerDimension.width - SVG_SIZE),
          y: containerDimension.height - SVG_SIZE,
        }
      case "DA":
        return {
          x: 0,
          y: Math.random() * (containerDimension.height - SVG_SIZE),
        }
      default:
        return { x: 0, y: 0 } // Fallback, should not occur
    }
  }

  // pick the edge in which the svg will go towards along with the coordinates
  const getRandomEdgePoint = (): Coordinate => {
    const random = Math.random()
    let newCoordinate: Coordinate = { x: 0, y: 0 }

    const edges = {
      "0,0": ["CD", "BC"],
      "0,*": ["CD", "AB"],
      "*,0": ["DA", "BC"],
      "*,(height-SVG_SIZE)": ["BC", "DA"],
      "(width-SVG_SIZE),*": ["AB", "CD"],
    } as const

    let x, y

    if ((coordinate.x === 0, coordinate.y === 0)) {
      x = "0"
      y = "0"
    } else {
      if (coordinate.x === 0) {
        x = "0"
      } else if (coordinate.x === containerDimension.width - SVG_SIZE) {
        x = "(width-SVG_SIZE)"
      } else {
        x = "*"
      }

      if (coordinate.y === 0) {
        y = "0"
      } else if (-coordinate.y === containerDimension.height - SVG_SIZE) {
        y = "(height-SVG_SIZE)"
      } else {
        y = "*"
      }

      // sometimes we get x = 0 and y = (height-SVG_SIZE) which is not an edge so we need to tackle it
      if (x === "0" && y === "(height-SVG_SIZE)") {
        x = "*"
      }
    }

    const key = `${x},${y}`

    const possibleEdges = edges[key as keyof typeof edges]

    const selectedEdge =
      possibleEdges[Math.floor(random * possibleEdges.length)]
    newCoordinate = getRandomCoordinateOnEdge(selectedEdge)

    const distance = Math.sqrt(
      Math.pow(coordinate.x - newCoordinate.x, 2) +
        Math.pow(Math.abs(coordinate.y) - Math.abs(newCoordinate.y), 2)
    )

    setDuration(distance / 50)

    return {
      x: Math.floor(newCoordinate.x),
      y: -Math.floor(newCoordinate.y), // In programing y axis are flipped. https://support.techsmart.codes/hc/en-us/articles/360058080293-Coordinates-Why-is-the-y-axis-inverted-for-coding
    }
  }

  const handleAnimationComplete = (): void => {
    const newCoordinate = getRandomEdgePoint()
    // if its first time the svg is rendering, rotate the cannon
    if (firstRender) {
      // Subtract two because our initial div is located 6,16 with bottom-1.5 and left-4 classnames
      const angleInRadians = Math.atan2(
        Math.abs(newCoordinate.y - 16),
        newCoordinate.x - 6
      )
      let angleInDegrees = angleInRadians * (180 / Math.PI)
      if (angleInDegrees < 0) {
        angleInDegrees += 360
      }
      setDegree(angleInDegrees)
      setFirstRender(false)
    }

    setCoordinate(newCoordinate)
  }

  return (
    <div className="absolute bottom-1.5 left-4">
      <motion.div
        animate={{ ...coordinate }}
        onAnimationComplete={handleAnimationComplete}
        transition={{
          ease: "linear",
          duration,
          delay: firstRender ? delay : 0,
        }}
      >
        <motion.div
          animate={{ scale: 1.5 }}
          initial={{ scale: 0.4 }}
          transition={{
            type: "spring",
            delay: delay + 2,
            stiffness: 400,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TechnologyWrapper
