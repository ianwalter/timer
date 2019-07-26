module.exports = () => ({
  startTime: process.hrtime(),
  stop () {
    const [seconds, nanoseconds] = process.hrtime(this.startTime)
    const milliseconds = parseFloat((nanoseconds / 1000000).toFixed(3))
    let minutes = seconds / 60
    const hours = seconds / 3600

    let duration = ''
    if (hours >= 1) {
      duration += `${hours}h, `
      minutes = (seconds % 3600) / 60
    }
    if (minutes >= 1) {
      duration += `${minutes}m, `
    }
    if (seconds >= 1) {
      duration += `${seconds}s, `
    }

    return {
      time: [seconds, nanoseconds],
      duration: duration + `${milliseconds}ms`
    }
  }
})
