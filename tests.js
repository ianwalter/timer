const { test } = require('@ianwalter/bff')
const { print } = require('@ianwalter/print')
const createTimer = require('.')

test('timer', ({ expect }) => {
  return new Promise(resolve => {
    const timer = createTimer()
    setTimeout(() => {
      const { time, duration } = timer.stop()
      expect(time[0]).toBe(2)
      expect(time[1]).toBeDefined()
      print.debug(duration)
      expect(duration).toMatch(/2s (4|5[0-9]{2})\.([0-9]+)ms/)
      resolve()
    }, 2500)
  })
})
