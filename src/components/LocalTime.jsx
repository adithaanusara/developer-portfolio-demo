import { useEffect, useState } from 'react'

export default function LocalTime({ timeZone, className = '' }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15_000)
    return () => clearInterval(id)
  }, [])

  const time = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(now)
  // e.g. "GMT" in winter and "GMT+1" in summer for Europe/London.
  const offset = new Intl.DateTimeFormat('en-GB', { timeZone, timeZoneName: 'shortOffset' })
    .formatToParts(now)
    .find((p) => p.type === 'timeZoneName')?.value

  return (
    <time className={className} dateTime={now.toISOString()}>
      {time}
      {offset && <span className="text-subtle"> {offset}</span>}
    </time>
  )
}
