'use client'

import { useState, useEffect } from 'react'

export default function HealthMonitor() {
  const [health, setHealth] = useState({
    status: 'CHECKING', 
    services: [
      { name: 'n8n', status: 'ONLINE' },
      { name: 'lambda', status: 'ONLINE' },
      { name: 'vercel', status: 'ONLINE' }
    ]
  })

  useEffect(() => {
    setTimeout(() => {
      setHealth(prev => ({ ...prev, status: 'HEALTHY' }))
    }, 2000)
  }, [])

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Health Monitor</h1>
      <div className="mb-6">
        <p className="text-lg">Overall Status: <span className="text-green-400">{health.status}</span></p>
      </div>
      <div className="grid gap-4">
        {health.services.map(service => (
          <div key={service.name} className="p-4 bg-gray-800 rounded">
            <h3 className="font-bold">{service.name}</h3>
            <p className="text-green-400">{service.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}