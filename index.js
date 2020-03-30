module.exports = () => ({
  startTime: process.hrtime(),
  stop (precision = 3) {
    this.time = process.hrtime(this.startTime)
    this.milliseconds = parseFloat((this.time[1] / 1000000).toFixed(precision))
    return this.time[0] * 1000 + this.milliseconds
  },
  duration (precision) {
    const milliseconds = this.milliseconds || (this.stop() && this.milliseconds)
    const seconds = this.time[0]
    let minutes = seconds / 60
    const hours = seconds / 3600

    let duration = ''
    if (hours >= 1) {
      duration += `${hours}h `
      minutes = (seconds % 3600) / 60
    }
    if (minutes >= 1) {
      duration += `${minutes}m `
    }
    if (seconds >= 1) {
      duration += `${seconds}s `
    }

    return duration + `${milliseconds}ms`
  }
})
