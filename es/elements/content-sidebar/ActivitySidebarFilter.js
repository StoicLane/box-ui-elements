var _filterOptionToStatus;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Activity feed sidebar filter component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import DropdownMenu, { MenuToggle } from '../../components/dropdown-menu';
import PlainButton from '../../components/plain-button';
import messages from './messages';
import { ACTIVITY_FILTER_OPTION_ALL, ACTIVITY_FILTER_OPTION_RESOLVED, ACTIVITY_FILTER_OPTION_TASKS, ACTIVITY_FILTER_OPTION_UNRESOLVED, COMMENT_STATUS_OPEN, COMMENT_STATUS_RESOLVED, FEED_ITEM_TYPE_TASK } from '../../constants';
import { Menu, SelectMenuItem } from '../../components/menu';
import './ActivitySidebarFilter.scss';
var filterOptionToStatus = (_filterOptionToStatus = {}, _defineProperty(_filterOptionToStatus, ACTIVITY_FILTER_OPTION_ALL, ACTIVITY_FILTER_OPTION_ALL), _defineProperty(_filterOptionToStatus, ACTIVITY_FILTER_OPTION_UNRESOLVED, COMMENT_STATUS_OPEN), _defineProperty(_filterOptionToStatus, ACTIVITY_FILTER_OPTION_RESOLVED, COMMENT_STATUS_RESOLVED), _defineProperty(_filterOptionToStatus, ACTIVITY_FILTER_OPTION_TASKS, FEED_ITEM_TYPE_TASK), _filterOptionToStatus);

function ActivitySidebarFilter(_ref) {
  var _statusMap;

  var activityFilterOptions = _ref.activityFilterOptions,
      _ref$feedItemType = _ref.feedItemType,
      feedItemType = _ref$feedItemType === void 0 ? ACTIVITY_FILTER_OPTION_ALL : _ref$feedItemType,
      onFeedItemTypeClick = _ref.onFeedItemTypeClick;

  var hasOnlyCommentActivity = function hasOnlyCommentActivity(options) {
    var commentActivityFilterOptions = [ACTIVITY_FILTER_OPTION_ALL, ACTIVITY_FILTER_OPTION_RESOLVED, ACTIVITY_FILTER_OPTION_UNRESOLVED];
    return options.every(function (option) {
      return commentActivityFilterOptions.includes(option);
    });
  }; // The message for all activty is based on whether only comments are in the activityFilterOptions prop


  var allFilterMessage = hasOnlyCommentActivity(activityFilterOptions) ? messages.activitySidebarFilterOptionAllComments : messages.activitySidebarFilterOptionAllActivity;
  var statusMap = (_statusMap = {}, _defineProperty(_statusMap, ACTIVITY_FILTER_OPTION_ALL, {
    msg: allFilterMessage,
    val: ACTIVITY_FILTER_OPTION_ALL
  }), _defineProperty(_statusMap, COMMENT_STATUS_OPEN, {
    msg: messages.activitySidebarFilterOptionOpen,
    val: COMMENT_STATUS_OPEN
  }), _defineProperty(_statusMap, COMMENT_STATUS_RESOLVED, {
    msg: messages.activitySidebarFilterOptionResolved,
    val: COMMENT_STATUS_RESOLVED
  }), _defineProperty(_statusMap, FEED_ITEM_TYPE_TASK, {
    msg: messages.activitySidebarFilterOptionTasks,
    val: FEED_ITEM_TYPE_TASK
  }), _statusMap);
  return React.createElement("div", {
    className: "bcs-ActivitySidebarFilter"
  }, React.createElement(DropdownMenu, {
    className: "bcs-ActivitySidebarFilter-dropdownMenu",
    constrainToWindow: true
  }, React.createElement(PlainButton, {
    type: "button"
  }, React.createElement(MenuToggle, null, React.createElement(FormattedMessage, statusMap[feedItemType].msg))), React.createElement(Menu, null, activityFilterOptions.map(function (filterOption) {
    var status = filterOptionToStatus[filterOption];
    return React.createElement(SelectMenuItem, {
      key: status,
      isSelected: status === feedItemType,
      onClick: function onClick() {
        return onFeedItemTypeClick(statusMap[status].val);
      }
    }, React.createElement(FormattedMessage, statusMap[status].msg));
  }))));
}

export default ActivitySidebarFilter;
//# sourceMappingURL=ActivitySidebarFilter.js.map