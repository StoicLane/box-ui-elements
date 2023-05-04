/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';
import Bar from './Bar';
import './BarChart.scss';

function isFunction(valueAccessor) {
  return typeof valueAccessor === 'function';
}

function BarChart(_ref) {
  var className = _ref.className,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'vertical' : _ref$direction,
      _ref$hasAxisLabel = _ref.hasAxisLabel,
      hasAxisLabel = _ref$hasAxisLabel === void 0 ? false : _ref$hasAxisLabel,
      label = _ref.label,
      labelAccessor = _ref.labelAccessor,
      onBarMouseEnter = _ref.onBarMouseEnter,
      onBarMouseLeave = _ref.onBarMouseLeave,
      valueAccessor = _ref.valueAccessor;
  var isHorizontal = direction === 'horizontal';
  var isInteractive = !!onBarMouseEnter || !!onBarMouseLeave;
  var max = data.map(function (datum) {
    return isFunction(valueAccessor) ? valueAccessor(datum) : datum[valueAccessor];
  }).reduce(function (previousValue, currentValue) {
    return Math.max(previousValue, currentValue);
  }, 0);

  var getSize = function getSize(datum) {
    // If max is 0 then all other values in the data array are 0 so return 0
    // instead of allowing the following calculation to return Infinity
    if (max === 0) {
      return 0;
    }

    return (isFunction(valueAccessor) ? valueAccessor(datum) : datum[valueAccessor]) / max * 100;
  };

  var handleBarMouseEnter = onBarMouseEnter || noop;
  var handleBarMouseLeave = onBarMouseLeave || noop;
  return React.createElement("div", {
    "aria-label": label,
    className: classNames('ca-BarChart', className, {
      'is-horizontal': isHorizontal,
      'is-interactive': isInteractive
    }),
    role: "img"
  }, data.map(function (datum) {
    return React.createElement(Bar, {
      key: datum[labelAccessor],
      direction: direction,
      label: hasAxisLabel ? datum[labelAccessor] : '',
      onMouseEnter: function onMouseEnter(position) {
        return handleBarMouseEnter({
          datum: datum
        }, position);
      },
      onMouseLeave: function onMouseLeave() {
        return handleBarMouseLeave({
          datum: datum
        });
      },
      size: getSize(datum)
    });
  }));
}

export default BarChart;
//# sourceMappingURL=BarChart.js.map