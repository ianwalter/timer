const { test } = require('@ianwalter/bff')
const createTimer = require('.')

test('timer', ({ expect }) => {
  return new Promise(resolve => {
    const timer = createTimer()
    setTimeout(() => {
      const { time, duration } = timer.stop()
      expect(time[0]).toBe(2)
      expect(time[1]).toBeDefined()
      expect(duration).toMatch(/2s, (4|5[0-9]{2})\.([0-9]{3})ms/)
      resolve()
    }, 2500)
  })
})
