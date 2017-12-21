# daysleft [![Build Status](https://travis-ci.org/qbolt/daysleft.svg?branch=master)](https://travis-ci.org/qbolt/daysleft)

> A module for getting the days left until a given date


## Install

```
$ npm install --save daysleft
```


## Usage


#### Using `string`
```js
/* Assuming 'today' is 12/24/2017 */
import daysleft from 'daysleft';

const christmas = '12/25/2017';
daysleft(christmas);
//=> '1'
```

#### Using `moment`
```js
/* Assuming 'today' is 12/24/2017 */
import moment from 'moment';
import daysleft from 'daysleft';

const christmas = moment('12/25/2017');
daysleft(christmas);
//=> '1'
```

## API

### daysleft(date, {options})

#### date

Type: `string` or `moment`

Examples: `'12/24/2017'` or `moment('12/24/2017')`

#### options

##### startDate

Type: `string` or `moment`<br>
Default: `today`
Examples: `'12/24/2017'` or `moment('12/24/2017')`

Allows you to provide a different start date other than 'today'

## License

MIT © [Quinton Bolt](http://quintonbolt.com)
