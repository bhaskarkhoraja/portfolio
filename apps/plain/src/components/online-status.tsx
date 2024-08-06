"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Wifi, WifiOff } from "lucide-react"
import { toast } from "sonner"

import useOnlineStatus from "@/hooks/use-online-status"

const OnlineStatus = (): null => {
  const isOnline = useOnlineStatus()
  const firstUpdate = useRef(true)
  const router = useRouter()
  const [offlineToast, setOfflineToast] = useState<string | number | null>(null)

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (isOnline && offlineToast) {
      toast.dismiss(offlineToast)
      setOfflineToast(null)
      toast("Your internet connection was restored.", {
        icon: <Wifi className="size-4" />,
      })
    } else if (!isOnline && !offlineToast) {
      const toastId = toast("You are currently offline.", {
        icon: <WifiOff className="size-4" />,
        action: {
          label: "Refresh",
          onClick: () => {
            router.refresh()
          },
        },
        duration: Infinity,
      })
      setOfflineToast(toastId)
    }
  }, [isOnline, router, offlineToast])

  return null
}

export default OnlineStatus
