import * as React from 'react';
import InfoBadge16 from '../../icon/fill/InfoBadge16';
import Tooltip, { TooltipPosition } from '../tooltip';

var InfoIconWithTooltip = function InfoIconWithTooltip(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      iconProps = _ref.iconProps,
      tooltipText = _ref.tooltipText;
  return React.createElement("span", {
    key: "infoIcon",
    className: "".concat(className, " tooltip-icon-container")
  }, React.createElement(Tooltip, {
    position: TooltipPosition.TOP_CENTER,
    text: tooltipText
  }, React.createElement("span", {
    className: "info-icon-container"
  }, React.createElement(InfoBadge16, iconProps))));
};

export default InfoIconWithTooltip;
//# sourceMappingURL=InfoIconWithTooltip.js.map