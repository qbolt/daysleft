const moment = require('moment');

module.exports = (input, opts) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	opts = opts || {};

	if (opts.startDate && typeof opts.startDate !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof opts.startDate}`);
	}

	const startDate = moment(opts.startDate || moment().format('YYYY-MM-DD'));
	const endDate = moment(input);

	if (!endDate.isValid() || !startDate.isValid()) {
		throw new TypeError('Invalid date input');
	}

	return endDate.diff(startDate, 'days');
};

