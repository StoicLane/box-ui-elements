import * as React from 'react';
import classNames from 'classnames';
import Button, { ButtonType } from '../button';
import IconClose from '../../icons/general/IconClose';
import { bdlGray65 } from '../../styles/variables';
import './CloseButton.scss';

var CloseButton = function CloseButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React.createElement(Button, {
    className: classNames('bdl-CloseButton', className),
    "data-testid": "bdl-CloseButton",
    onClick: onClick,
    type: ButtonType.BUTTON
  }, React.createElement(IconClose, {
    color: bdlGray65,
    height: 18,
    width: 18
  }));
};

export default CloseButton;
//# sourceMappingURL=CloseButton.js.map