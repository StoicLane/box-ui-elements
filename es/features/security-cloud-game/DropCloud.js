import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Logo from '../../components/logo';
import IconCloud from '../../icons/general/IconCloud';
import messages from './messages';

var InsetFilter = function InsetFilter() {
  return React.createElement("filter", {
    id: "inset-shadow"
  }, React.createElement("feOffset", {
    dx: "0",
    dy: "1.5"
  }), React.createElement("feGaussianBlur", {
    result: "offset-blur",
    stdDeviation: "0.5"
  }), React.createElement("feComposite", {
    in: "SourceGraphic",
    in2: "offset-blur",
    operator: "out",
    result: "inverse"
  }), React.createElement("feFlood", {
    floodColor: "black",
    floodOpacity: "1",
    result: "color"
  }), React.createElement("feComposite", {
    in: "color",
    in2: "inverse",
    operator: "in",
    result: "shadow"
  }), React.createElement("feComposite", {
    in: "shadow",
    in2: "SourceGraphic",
    operator: "over"
  }));
};

var DropCloud = function DropCloud(_ref) {
  var className = _ref.className,
      cloudSize = _ref.cloudSize,
      position = _ref.position;
  var x = position.x,
      y = position.y;
  return React.createElement("div", {
    className: classNames('bdl-DropCloud', className),
    style: {
      top: "".concat(y, "px"),
      left: "".concat(x, "px")
    }
  }, React.createElement(IconCloud, {
    filter: {
      id: 'inset-shadow',
      definition: React.createElement(InsetFilter, null)
    },
    height: cloudSize,
    title: React.createElement(FormattedMessage, messages.target),
    width: cloudSize
  }), React.createElement(Logo, {
    title: "Box"
  }));
};

DropCloud.displayName = 'DropCloud';
DropCloud.propTypes = {
  className: PropTypes.string,
  cloudSize: PropTypes.number,
  intl: PropTypes.any,
  position: PropTypes.objectOf(PropTypes.number).isRequired
}; // Actual export

export default DropCloud;
//# sourceMappingURL=DropCloud.js.map