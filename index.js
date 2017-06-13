const moment = require('moment');

module.exports = (duration) => {
  const value = parseInt(duration.split(' ')[0], 10);
  const unit = duration.split(' ')[1];
  return moment.duration(value, unit);
};
