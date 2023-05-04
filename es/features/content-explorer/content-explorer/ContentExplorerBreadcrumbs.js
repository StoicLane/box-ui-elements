function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl } from 'react-intl';
import Button from '../../../components/button';
import Breadcrumb from '../../../components/breadcrumb';
import IconChevron from '../../../icons/general/IconChevron';
import IconAllFiles from '../../../icons/general/IconAllFiles';
import PlainButton from '../../../components/plain-button';
import { FoldersPathPropType } from '../prop-types';
import messages from '../messages';

var ContentExplorerBreadcrumbs = function ContentExplorerBreadcrumbs(_ref) {
  var breadcrumbProps = _ref.breadcrumbProps,
      foldersPath = _ref.foldersPath,
      formatMessage = _ref.intl.formatMessage,
      _ref$isUpButtonDisabl = _ref.isUpButtonDisabled,
      isUpButtonDisabled = _ref$isUpButtonDisabl === void 0 ? false : _ref$isUpButtonDisabl,
      onUpButtonClick = _ref.onUpButtonClick,
      onBreadcrumbClick = _ref.onBreadcrumbClick;
  return React.createElement("div", {
    className: "content-explorer-breadcrumbs-container"
  }, React.createElement(Button, {
    "aria-label": formatMessage(messages.clickToGoBack),
    className: "content-explorer-breadcrumbs-up-button",
    type: "button",
    onClick: onUpButtonClick,
    isDisabled: isUpButtonDisabled
  }, React.createElement(IconChevron, {
    direction: "left",
    size: "6px",
    color: "#333"
  })), React.createElement(Breadcrumb, _extends({
    label: formatMessage(messages.breadcrumb)
  }, breadcrumbProps), foldersPath.map(function (folder, i) {
    return React.createElement("div", {
      key: folder.id,
      className: "lnk"
    }, React.createElement(PlainButton, {
      "data-testid": "breadcrumb-lnk",
      onClick: function onClick(event) {
        return onBreadcrumbClick(i, event);
      },
      title: folder.name
    }, i === 0 && React.createElement(IconAllFiles, null), React.createElement("span", null, folder.name)));
  })));
};

ContentExplorerBreadcrumbs.propTypes = {
  breadcrumbProps: PropTypes.object,
  foldersPath: FoldersPathPropType.isRequired,
  intl: PropTypes.any,
  isUpButtonDisabled: PropTypes.bool,
  onUpButtonClick: PropTypes.func,
  onBreadcrumbClick: PropTypes.func
};
export { ContentExplorerBreadcrumbs as ContentExplorerBreadcrumbsBase };
export default injectIntl(ContentExplorerBreadcrumbs);
//# sourceMappingURL=ContentExplorerBreadcrumbs.js.map