import React, { useEffect, useState } from 'react'
import UseOnlineBar from '../../Hooks/UseOnlineBar'

export default function StatusBar() {
    const isOnline = UseOnlineBar()


  return (
    <div>
      <h1> {isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    </div>
  )
}
