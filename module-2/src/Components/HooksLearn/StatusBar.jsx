import React, { useEffect, useState } from 'react'
import useOnlineBar from '../../Hooks/UseOnlineBar'

export default function StatusBar() {
    const isOnline = useOnlineBar()


  return (
    <div>
      <h1> {isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    </div>
  )
}
