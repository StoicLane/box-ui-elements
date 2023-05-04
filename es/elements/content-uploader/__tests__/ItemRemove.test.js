import React from 'react';
import { shallow } from 'enzyme';
import PlainButton from '../../../components/plain-button';
import { ItemRemoveBase as ItemRemove } from '../ItemRemove';
import { STATUS_IN_PROGRESS } from '../../../constants';
describe('elements/content-uploader/ItemRemove', function () {
  test('should have aria-label "Remove" and no aria-describedby', function () {
    var wrapper = shallow(React.createElement(ItemRemove, {
      intl: {
        formatMessage: function formatMessage(data) {
          return data.defaultMessage;
        }
      },
      status: STATUS_IN_PROGRESS // Use any status. The label does not change based on status.

    }));
    var plainButton = wrapper.find(PlainButton);
    expect(plainButton.prop('aria-label')).toBe('Remove');
    expect(plainButton.prop('aria-describedby')).toBeFalsy();
  });
});