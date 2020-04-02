const units = Object.entries({ h: 3600 * 1000, m: 60 * 1000, s: 1000 })

module.exports = () => ({
  startTime: process.hrtime(),
  stop () {
    this.time = process.hrtime(this.startTime)
    this.milliseconds = this.time[0] * 1000 + this.time[1] / 1000000
    return this.milliseconds
  },
  duration (precision = 3) {
    if (this.milliseconds === undefined) {
      this.stop(precision)
    }

    let ms = this.milliseconds
    let duration = ''
    for (const [unit, n] of units) {
      const count = Math.floor(ms / n)
      if (count > 0) {
        duration += count + unit + ' '
        ms = ms % n
      }
    }

    return ms > 0
      ? duration + Math.round(ms * 10 ** precision) / (10 ** precision) + 'ms'
      : duration.trimEnd()
  }
})
