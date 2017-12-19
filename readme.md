# daysleft [![Build Status](https://travis-ci.org/qbolt/daysleft.svg?branch=master)](https://travis-ci.org/qbolt/daysleft)

> A module for getting the days left until a given date


## Install

```
$ npm install daysleft
```


## Usage

```js
/* Assuming 'today' is 12/24/2017 */
const daysleft = require('daysleft');

daysleft('12/25/2017');
//=> '1'
```

## API

### daysleft(date, {options})

#### date

Type: `string`

'12/24/2017'

#### options

##### startDate

Type: `string`<br>
Default: `today`

Allows you to provide a different start date other than 'today'

## License

MIT © [Quinton Bolt](http://quintonbolt.com)
