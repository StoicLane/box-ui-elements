var formatCount = function formatCount(count, intl) {
  var shouldAbbreviate = count >= 10000;
  return shouldAbbreviate ? intl.formatNumber(count, {
    notation: 'compact'
  }) : intl.formatNumber(count);
}; // eslint-disable-next-line import/prefer-default-export


export { formatCount };
//# sourceMappingURL=numberUtils.js.map