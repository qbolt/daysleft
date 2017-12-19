import moment from 'moment';
import test from 'ava';
import m from '.';

test('daysleft', t => {
	const err = t.throws(() => {
		m(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');
	t.is(m('12/25/2015', {startDate: '12/24/2015'}), 1);
	t.is(m(moment().format('YYYY-MM-DD')), 0);
	t.is(m(moment().add(1, 'days').format('MM-DD-YYYY')), 1);
});
