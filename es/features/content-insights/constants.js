var _PRESET_TO_TIMESTAMPS;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DOWNLOADS = 'DOWNLOADS';
var PREVIEWS = 'PREVIEWS';
var USERS = 'USERS';
export var METRIC = Object.freeze({
  DOWNLOADS: DOWNLOADS,
  PREVIEWS: PREVIEWS,
  USERS: USERS
});
var WEEK = 'week';
var MONTH = 'month';
var THREEMONTHS = 'threemonths';
var YEAR = 'year';
export var PERIOD = Object.freeze({
  WEEK: WEEK,
  MONTH: MONTH,
  THREEMONTHS: THREEMONTHS,
  YEAR: YEAR
});
var ONE_WEEK = 'one_week';
var TWO_WEEKS = 'two_weeks';
var ONE_MONTH = 'one_month';
var TWO_MONTHS = 'two_months';
var THREE_MONTHS = 'three_months';
var SIX_MONTHS = 'six_months';
var ONE_YEAR = 'one_year';
var TWO_YEARS = 'two_years';
export var PRESET_TIMES = Object.freeze({
  ONE_WEEK: ONE_WEEK,
  TWO_WEEKS: TWO_WEEKS,
  ONE_MONTH: ONE_MONTH,
  TWO_MONTHS: TWO_MONTHS,
  THREE_MONTHS: THREE_MONTHS,
  SIX_MONTHS: SIX_MONTHS,
  ONE_YEAR: ONE_YEAR,
  TWO_YEARS: TWO_YEARS
});
export var PRESET_TO_TIMESTAMPS_MAP = (_PRESET_TO_TIMESTAMPS = {}, _defineProperty(_PRESET_TO_TIMESTAMPS, PERIOD.WEEK, {
  currentPeriod: PRESET_TIMES.ONE_WEEK,
  previousPeriod: PRESET_TIMES.TWO_WEEKS
}), _defineProperty(_PRESET_TO_TIMESTAMPS, PERIOD.MONTH, {
  currentPeriod: PRESET_TIMES.ONE_MONTH,
  previousPeriod: PRESET_TIMES.TWO_MONTHS
}), _defineProperty(_PRESET_TO_TIMESTAMPS, PERIOD.THREEMONTHS, {
  currentPeriod: PRESET_TIMES.THREE_MONTHS,
  previousPeriod: PRESET_TIMES.SIX_MONTHS
}), _defineProperty(_PRESET_TO_TIMESTAMPS, PERIOD.YEAR, {
  currentPeriod: PRESET_TIMES.ONE_YEAR,
  previousPeriod: PRESET_TIMES.TWO_YEARS
}), _PRESET_TO_TIMESTAMPS);
//# sourceMappingURL=constants.js.map