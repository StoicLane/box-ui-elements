function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import * as React from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { MenuLinkItem } from '../menu';
import EllipsisCrumb from './EllipsisCrumb';
import Crumb from './Crumb';
import messages from './messages';
import './Breadcrumb.scss';

var Breadcrumb = function Breadcrumb(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$hasReverseOverfl = _ref.hasReverseOverflowOrder,
      hasReverseOverflowOrder = _ref$hasReverseOverfl === void 0 ? false : _ref$hasReverseOverfl,
      intl = _ref.intl,
      _ref$numItemsBeforeOv = _ref.numItemsBeforeOverflow,
      numItemsBeforeOverflow = _ref$numItemsBeforeOv === void 0 ? 1 : _ref$numItemsBeforeOv,
      overflowMenuButton = _ref.overflowMenuButton,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 4 : _ref$threshold;
  var breadcrumbs = React.Children.toArray(children);

  var constructChildren = function constructChildren() {
    var overflowItems = breadcrumbs.slice(numItemsBeforeOverflow, breadcrumbs.length + 1 - threshold);
    var dotDotDotItems = hasReverseOverflowOrder ? overflowItems : overflowItems.reverse();
    var menuCrumbsItems = React.createElement(EllipsisCrumb, {
      menuButton: overflowMenuButton
    }, dotDotDotItems.map(function (crumb, index) {
      return React.createElement(MenuLinkItem, {
        key: index
      }, crumb);
    }));
    return [].concat(_toConsumableArray(breadcrumbs.slice(0, numItemsBeforeOverflow)), [menuCrumbsItems], _toConsumableArray(breadcrumbs.slice(1 - threshold)));
  };

  var renderBreadcrumbs = function renderBreadcrumbs() {
    var newChildren = breadcrumbs;
    var length = breadcrumbs.length;
    var hasEllipsis = false;

    if (length > threshold) {
      newChildren = constructChildren();
      length = newChildren.length;
      hasEllipsis = true;
    }

    return React.Children.map(newChildren, function (item, i) {
      var isLastCrumb = length === 0 || i === length - 1;
      return React.createElement(Crumb, {
        className: classNames({
          'no-shrink': hasEllipsis && i === numItemsBeforeOverflow
        }),
        isLastCrumb: isLastCrumb
      }, item);
    });
  };

  return React.createElement("nav", {
    "aria-label": intl.formatMessage(messages.breadcrumbLabel),
    className: classNames('breadcrumbs', className)
  }, React.createElement("ol", null, renderBreadcrumbs()));
};

export { Breadcrumb as BreadcrumbBase };
export default injectIntl(Breadcrumb);
//# sourceMappingURL=Breadcrumb.js.map