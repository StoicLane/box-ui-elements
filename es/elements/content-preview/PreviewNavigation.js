/**
 * 
 * @file Preview Navigation
 * @author Box
 */
import * as React from 'react';
import { useIntl } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';
import PlainButton from '../../components/plain-button/PlainButton';
import IconNavigateLeft from '../../icons/general/IconNavigateLeft';
import IconNavigateRight from '../../icons/general/IconNavigateRight';
import messages from '../common/messages';
export var PreviewNavigation = function PreviewNavigation(_ref) {
  var _ref$collection = _ref.collection,
      collection = _ref$collection === void 0 ? [] : _ref$collection,
      currentIndex = _ref.currentIndex,
      onNavigateLeft = _ref.onNavigateLeft,
      onNavigateRight = _ref.onNavigateRight;

  var _useParams = useParams(),
      activeTab = _useParams.activeTab,
      deeplink = _useParams.deeplink;

  var intl = useIntl();
  var navigate = useNavigate();
  var hasLeftNavigation = currentIndex > 0;
  var hasRightNavigation = currentIndex < collection.length - 1;

  if (!hasLeftNavigation && !hasRightNavigation) {
    return null;
  }

  return React.createElement(React.Fragment, null, hasLeftNavigation && React.createElement(PlainButton, {
    className: "bcpr-navigate-left",
    onClick: function onClick() {
      if (deeplink) {
        navigate("/vault/".concat(activeTab));
      }

      onNavigateLeft();
    },
    title: intl.formatMessage(messages.previousFile)
  }, React.createElement(IconNavigateLeft, null)), hasRightNavigation && React.createElement(PlainButton, {
    className: "bcpr-navigate-right",
    onClick: function onClick() {
      if (deeplink) {
        navigate("/vault/".concat(activeTab));
      }

      onNavigateRight();
    },
    title: intl.formatMessage(messages.nextFile)
  }, React.createElement(IconNavigateRight, null)));
};
export default PreviewNavigation;
//# sourceMappingURL=PreviewNavigation.js.map