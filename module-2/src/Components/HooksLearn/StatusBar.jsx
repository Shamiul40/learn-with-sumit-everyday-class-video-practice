import React, { useEffect, useState } from 'react'

export default function StatusBar() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    const handleOnline = ()=>{
        setIsOnline(true)
    }
    const handleOffline =()=>{
        setIsOnline(false)
    }

    useEffect(()=>{
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return ()=>{
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    },[])


  return (
    <div>
      <h1> {isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    </div>
  )
}
