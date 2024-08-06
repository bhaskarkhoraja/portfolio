import { useEffect, useState } from "react"

const useOnlineStatus = (): boolean => {
  const [status, setStatus] = useState(
    typeof window !== "undefined" ? window.navigator.onLine : true
  )

  const handleStatusChange = (): void => {
    setStatus(navigator.onLine)
  }

  useEffect(() => {
    window.addEventListener("online", handleStatusChange)
    window.addEventListener("offline", handleStatusChange)

    return () => {
      window.removeEventListener("online", handleStatusChange)
      window.removeEventListener("offline", handleStatusChange)
    }
  }, [])

  return status
}

export default useOnlineStatus
