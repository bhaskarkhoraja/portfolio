import type { ReactNode } from "react"
import { createContext, useContext, useState } from "react"

type DegreeProviderState = {
  degree: number | null
  setDegree: (newDegree: number) => void
}

const initialState: DegreeProviderState = {
  degree: 0,
  setDegree: () => null,
}

const DegreeProviderContext = createContext<DegreeProviderState>(initialState)

export function DegreeProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const [degree, setDegree] = useState<number | null>(null)

  const value = {
    degree,
    setDegree: (newDegree: number) => {
      setDegree(newDegree)
    },
  }

  return (
    <DegreeProviderContext.Provider value={value}>
      {children}
    </DegreeProviderContext.Provider>
  )
}

export const useDegree = (): DegreeProviderState => {
  const context = useContext(DegreeProviderContext)

  if (context === initialState) {
    throw new Error("useDegree must be used within a DegreeProvider")
  }

  return context
}
