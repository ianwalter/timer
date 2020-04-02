# @ianwalter/timer
> A high resolution timer that returns the duration in a format thats easy for
> humans to understand

[![npm page][npmImage]][npmUrl]

## Installation

```console
yarn add @ianwalter/timer
```

## Usage

```js
const createTimer = require('@ianwalter/timer')
const timer = createTimer()
// Call stop() or duration() or both.
const milliseconds = timer.stop()
const duration = timer.duration()
// timer.time => [2, 506289527]
// milliseconds => 2506.29
// duration => 2s 506.29ms
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[npmImage]: https://img.shields.io/npm/v/@ianwalter/timer.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/timer
[licenseUrl]: https://github.com/ianwalter/timer/blob/master/LICENSE
