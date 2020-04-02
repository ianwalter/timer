const { test } = require('@ianwalter/bff')
const createTimer = require('.')

test('timer', (t, done) => {
  const timer = createTimer()
  setTimeout(() => {
    const milliseconds = timer.stop()
    t.expect(milliseconds).toBeGreaterThan(2400)
    t.expect(milliseconds).toBeLessThan(2599)
    t.expect(timer.time[0]).toBe(2)
    t.expect(timer.time[1]).toBeDefined()
    t.expect(timer.duration()).toMatch(/2s (4|5[0-9]{2})\.([0-9]+)ms/)
    done()
  }, 2500)
})

test('duration', t => {
  const timer = createTimer()
  timer.milliseconds = 3600 * 1000 + 120 * 1000 + 30 * 1000 + 420
  t.expect(timer.duration()).toBe('1h 2m 30s 420ms')
})
