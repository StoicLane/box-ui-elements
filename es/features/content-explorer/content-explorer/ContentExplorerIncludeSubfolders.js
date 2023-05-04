import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import InfoBadge16 from '../../../icon/fill/InfoBadge16';
import Toggle from '../../../components/toggle';
import Tooltip from '../../../components/tooltip';
import messages from '../messages';

var ContentExplorerIncludeSubfolders = function ContentExplorerIncludeSubfolders(_ref) {
  var isDisabled = _ref.isDisabled,
      onChange = _ref.onChange,
      tooltipMessage = _ref.tooltipMessage;
  var label = React.createElement(React.Fragment, null, React.createElement(FormattedMessage, messages.includeSubfolders), tooltipMessage && React.createElement(Tooltip, {
    text: React.createElement(FormattedMessage, tooltipMessage)
  }, React.createElement(InfoBadge16, {
    className: "bdl-ContentExplorerIncludeSubfolders-icon",
    fill: "blue"
  })));
  return React.createElement(Toggle, {
    label: label,
    isDisabled: isDisabled,
    onChange: onChange
  });
};

ContentExplorerIncludeSubfolders.propTypes = {
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  tooltipMessage: PropTypes.object
};
export { ContentExplorerIncludeSubfolders as ContentExplorerIncludeSubfoldersBase };
export default injectIntl(ContentExplorerIncludeSubfolders);
//# sourceMappingURL=ContentExplorerIncludeSubfolders.js.map