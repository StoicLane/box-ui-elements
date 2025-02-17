/**
 * 
 * @file Preview details sidebar notices component
 * @author Box
 */
import * as React from 'react';
import getProp from 'lodash/get';
import SharedLinkExpirationNotice from '../../features/item-details/SharedLinkExpirationNotice';
import ItemExpirationNotice from '../../features/item-details/ItemExpirationNotice';
import { addTime } from '../../utils/datetime';
import DateField from '../common/date';
var ONE_MINUTE_IN_MS = 60000;
var NOTICE_DATE_FORMAT = {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
};

var SidebarNotices = function SidebarNotices(_ref) {
  var file = _ref.file;
  var itemExpiration = getProp(file, 'expires_at');
  var sharedLinkExpiration = getProp(file, 'shared_link.unshared_at');

  if (!itemExpiration && !sharedLinkExpiration) {
    return null;
  }

  return React.createElement(React.Fragment, null, !!itemExpiration && React.createElement(ItemExpirationNotice, {
    expiration: React.createElement(DateField // $FlowFixMe
    , {
      date: addTime(new Date(itemExpiration), ONE_MINUTE_IN_MS),
      dateFormat: NOTICE_DATE_FORMAT,
      relative: false
    }),
    itemType: "file"
  }), !!sharedLinkExpiration && React.createElement(SharedLinkExpirationNotice, {
    expiration: React.createElement(DateField // $FlowFixMe
    , {
      date: addTime(new Date(sharedLinkExpiration), ONE_MINUTE_IN_MS),
      dateFormat: NOTICE_DATE_FORMAT,
      relative: false
    })
  }));
};

export default SidebarNotices;
//# sourceMappingURL=SidebarNotices.js.map