import React from 'react';
import { shallow } from 'enzyme';
import PlainButton from '../../../../components/plain-button/PlainButton';
import AdditionalTab from '../AdditionalTab';
import AdditionalTabTooltip from '../AdditionalTabTooltip';
import AdditionalTabPlaceholder from '../AdditionalTabPlaceholder';
describe('elements/content-sidebar/additional-tabs/AdditionalTab', function () {
  var getWrapper = function getWrapper(props) {
    return shallow(React.createElement(AdditionalTab, props));
  };

  test('should render the tooltip and button contents', function () {
    var mockSrc = 'https://foo.com/image';
    var props = {
      title: 'test title',
      iconUrl: mockSrc,
      id: 4,
      callback: function callback() {}
    };
    var wrapper = getWrapper(props);
    expect(wrapper.find(PlainButton).childAt(0).prop('src')).toEqual(mockSrc);
    expect(wrapper.find(AdditionalTabTooltip).prop('defaultTooltipText')).toBe('test title');
    expect(wrapper).toMatchSnapshot();
  });
  test('should render the more icon ellipsis if no valid id and icon URL are provided', function () {
    var props = {
      title: 'test title',
      id: -1,
      callback: function callback() {}
    };
    var wrapper = getWrapper(props);
    expect(wrapper).toMatchSnapshot();
  });
  test('should render the placeholder when an error occurs', function () {
    var props = {
      title: 'test title',
      id: -1,
      callback: function callback() {}
    };
    var wrapper = getWrapper(props);
    wrapper.setState({
      isErrored: true
    });
    expect(wrapper.find(AdditionalTabPlaceholder)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  test('should render disabled button when blocked by shield access policy', function () {
    var mockSrc = 'https://foo.com/image';
    var props = {
      title: 'test title',
      iconUrl: mockSrc,
      id: 4,
      callback: function callback() {},
      status: 'BLOCKED_BY_SHIELD_ACCESS_POLICY'
    };
    var wrapper = getWrapper(props);
    expect(wrapper).toMatchSnapshot();
  });
  test('should render the FTUX tooltip when ftuxTooltipData is present and the tab is not loading', function () {
    var mockSrc = 'https://foo.com/image';
    var props = {
      title: 'test title',
      iconUrl: mockSrc,
      id: 4,
      isLoading: false,
      ftuxTooltipData: {
        targetingApi: function targetingApi() {},
        test: 'ftux tooltip text'
      },
      callback: function callback() {}
    };
    var wrapper = getWrapper(props);
    expect(wrapper.find(AdditionalTabTooltip).exists()).toBeTruthy();
  });
});