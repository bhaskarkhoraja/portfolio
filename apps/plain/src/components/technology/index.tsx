"use client"

import { useEffect, useRef, useState } from "react"

import { SVG_DELAY_SHOT } from "@/config/constants"
import { Icons } from "@/components/icons"
import Cannon from "@/components/technology/cannon"
import { DegreeProvider } from "@/components/technology/degree-provider"
import TechnologyWrapper from "@/components/technology/technology-wrapper"

import TechnologyCartridge from "./technology-cartridge"

const Technology = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerDimension, setContainerDimension] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (containerRef.current) {
      setContainerDimension({
        // decreasing the width and height of container because svg has offsets
        width: containerRef.current.offsetWidth - 21,
        height: containerRef.current.offsetHeight - 14,
      })
    }
  }, [])

  // commented some technology because it became too cluttered
  const technologyData = [
    {
      id: 1,
      icon: <Icons.NextJSSquared />,
    },
    /* {
      id: 2,
      icon: <Icons.ReactJSSquared />,
    }, */
    /* {
      id: 3,
      icon: <Icons.JavaScriptSquared />,
    }, */
    {
      id: 2,
      icon: <Icons.TypeScriptSquared />,
    },
    {
      id: 3,
      icon: <Icons.NodeJSSquared />,
    },
    {
      id: 4,
      icon: <Icons.TailwindSquared />,
    },
    /* {
      id: 7,
      icon: <Icons.ExpressJSSquared />,
    }, */
    {
      id: 5,
      icon: <Icons.NestJSSquared />,
    },
    {
      id: 6,
      icon: <Icons.PostgreSQL />,
    },
    {
      id: 7,
      icon: <Icons.FramerMotionSquared />,
    },
  ] as const

  return (
    <div className="flex w-full flex-col md:flex-row-reverse">
      <div
        className="relative ml-0 h-96 w-full md:ml-8"
        ref={containerRef}
      >
        <div className="absolute bottom-0 left-0">
          <DegreeProvider>
            <Cannon noOfTech={technologyData.length} />
            {containerDimension.width !== 0 &&
              containerDimension.height !== 0 &&
              technologyData.map((tech) => (
                <TechnologyWrapper
                  containerDimension={containerDimension}
                  delay={tech.id * SVG_DELAY_SHOT}
                  key={tech.id}
                >
                  {tech.icon}
                </TechnologyWrapper>
              ))}
          </DegreeProvider>
        </div>
      </div>
      <div className="mt-2 flex h-16 flex-row gap-4 rounded-lg border p-4 md:h-96 md:w-16 md:flex-col-reverse">
        {technologyData.map((tech) => (
          <TechnologyCartridge
            delay={tech.id * SVG_DELAY_SHOT}
            key={tech.id}
          >
            {tech.icon}
          </TechnologyCartridge>
        ))}
      </div>
    </div>
  )
}

export default Technology
