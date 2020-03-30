const { test } = require('@ianwalter/bff')
const createTimer = require('.')

test('timer', ({ expect }) => {
  return new Promise(resolve => {
    const timer = createTimer()
    setTimeout(() => {
      const milliseconds = timer.stop()
      expect(milliseconds).toBeGreaterThan(2400)
      expect(milliseconds).toBeLessThan(2599)
      expect(timer.time[0]).toBe(2)
      expect(timer.time[1]).toBeDefined()
      expect(timer.duration()).toMatch(/2s (4|5[0-9]{2})\.([0-9]+)ms/)
      resolve()
    }, 2500)
  })
})
