const moment = require('moment');
moment.locale('id-ID');

const dateTimeFormat = 'DD MMM YYYY HH:mm:ss';

const toDateTimeFormat = (datetime) => moment(datetime).format(dateTimeFormat);

module.exports = {
  toDateTimeFormat,
};
