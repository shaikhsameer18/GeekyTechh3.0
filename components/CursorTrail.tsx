'use client'

import { useEffect, useState } from 'react'

export default function CursorTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prevTrail) => [
        { x: e.clientX, y: e.clientY },
        ...prevTrail.slice(0, 20),
      ])
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trail.map((point, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-50"
          style={{
            left: point.x,
            top: point.y,
            transform: `scale(${1 - index * 0.05})`,
          }}
        />
      ))}
    </div>
  )
}

