import { useEffect, useMemo, useState } from 'react'

const levelClass = [
  'bg-white/[0.06]',
  'bg-accent/30',
  'bg-accent/55',
  'bg-accent/80',
  'bg-accent shadow-[0_0_8px] shadow-accent/70',
]

const monthFmt = new Intl.DateTimeFormat('en', { month: 'short', timeZone: 'UTC' })

// Demo data: a year of plausible activity generated from a fixed seed, in the
// same shape the GitHub contributions API returns. No real account is read.
function demoContributions(seed) {
  let s = seed >>> 0
  const rand = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296)
  const today = new Date()
  const end = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  const contributions = []
  for (let i = 364; i >= 0; i--) {
    const date = new Date(end - i * 86400000)
    const weekend = date.getUTCDay() % 6 === 0
    const r = rand()
    const level = r < (weekend ? 0.45 : 0.12) ? 0 : r < 0.5 ? 1 : r < 0.78 ? 2 : r < 0.93 ? 3 : 4
    const count = level === 0 ? 0 : level * 3 + Math.floor(rand() * 4)
    contributions.push({ date: date.toISOString().slice(0, 10), count, level })
  }
  return { contributions, total: { lastYear: contributions.reduce((n, d) => n + d.count, 0) } }
}

export default function ContributionGraph({ seed = 2026, weeks = 26 }) {
  const [data, setData] = useState(null)

  // Fills in after mount so the empty grid's loading pulse still plays briefly.
  useEffect(() => {
    const id = setTimeout(() => setData(demoContributions(seed)), 400)
    return () => clearTimeout(id)
  }, [seed])

  const columns = useMemo(() => {
    if (!data) return null
    const days = data.contributions
    // Start the grid on a Sunday so each column is one calendar week.
    let start = Math.max(days.length - weeks * 7, 0)
    while (start > 0 && new Date(days[start].date + 'T00:00:00Z').getUTCDay() !== 0) start--
    const cols = []
    for (let i = start; i < days.length; i += 7) cols.push(days.slice(i, i + 7))
    return cols.slice(-weeks)
  }, [data, weeks])

  return (
    <figure className="w-fit">
      <div className="flex gap-[3px]" aria-hidden="true">
        {(columns ?? Array.from({ length: weeks }, () => Array(7).fill(null))).map((week, i) => {
          const first = week[0]
          const showMonth = first && new Date(first.date + 'T00:00:00Z').getUTCDate() <= 7
          return (
            <div key={i} className="flex flex-col gap-[3px]">
              <span className="h-3 text-[9px] leading-3 text-subtle">
                {showMonth ? monthFmt.format(new Date(first.date + 'T00:00:00Z')) : ''}
              </span>
              {week.map((day, j) => (
                <span
                  key={j}
                  title={day ? `${day.count} contributions on ${day.date}` : undefined}
                  className={`h-2.5 w-2.5 rounded-[2px] sm:h-3 sm:w-3 ${
                    day ? levelClass[day.level] : 'animate-pulse bg-white/[0.04]'
                  }`}
                />
              ))}
            </div>
          )
        })}
      </div>
      <figcaption className="mt-2 text-right text-[10px] tracking-wider text-subtle">
        {data ? (
          <>
            <span className="text-accent">{data.total.lastYear.toLocaleString()}</span> contributions in the last year
          </>
        ) : (
          'loading contributions…'
        )}
      </figcaption>
    </figure>
  )
}
