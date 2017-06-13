const describe = require('mocha/lib/mocha.js').describe;
const it = require('mocha/lib/mocha.js').it;
const expect = require('chai').expect;
const toDuration = require('../index');

describe('Interval to duration converter', () => {
  it('converts 1 year inverval to 1 year duration', () => {
    const result = toDuration('1 YEAR');
    expect(result.asYears()).to.be.equal(1);
  });

  it('converts 7 years inverval to 7 year duration', () => {
    const result = toDuration('7 YEARS');
    expect(result.asYears()).to.be.equal(7);
  });

  it('converts 7 months inverval to 7 months duration', () => {
    const result = toDuration('7 MONTH');
    expect(result.asMonths()).to.be.equal(7);
  });

  it('converts 12 months inverval to 12 months duration', () => {
    const result = toDuration('12 MONTH');
    expect(result.asMonths()).to.be.equal(12);
    expect(result.asYears()).to.be.equal(1);
    expect(result.asDays()).to.be.equal(365);
  });
});
