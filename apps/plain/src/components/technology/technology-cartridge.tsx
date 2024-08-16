"use client"

import { motion } from "framer-motion"

import { SVG_SIZE } from "@/config/constants"
import useWindowSize from "@/hooks/use-window-size"

const TechnologyCartridge = ({
  delay,
  children,
}: {
  delay: number
  children: React.ReactNode
}): JSX.Element => {
  const size = useWindowSize()

  return (
    <>
      {size.width !== 0 && (
        <motion.div
          animate={{
            x: SVG_SIZE + size.width > 1024 ? 63 : 0,
            y: size.width > 1024 ? 8 : -54,
            scale: 0.4,
            display: "block",
            transitionEnd: { display: "none" },
          }}
          initial={{ scale: 1.2 }}
          transition={{ delay: delay - 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}

export default TechnologyCartridge
