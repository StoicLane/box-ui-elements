import React from 'react';
import { shallow } from 'enzyme';
import AdditionalTab from '../AdditionalTab';
import AdditionalTabs from '../AdditionalTabs';
import AdditionalTabsLoading from '../AdditionalTabsLoading';
describe('elements/content-sidebar/AdditionalTabs', function () {
  var getWrapper = function getWrapper(props) {
    return shallow(React.createElement(AdditionalTabs, props));
  };

  test('should render the correct number of tabs and the loading state', function () {
    var props = {
      tabs: [{
        id: 200,
        title: 'Test title',
        iconUrl: 'https://foo.com/icon',
        callback: jest.fn(),
        status: 'ADDED'
      }, {
        id: 1,
        title: 'Another title',
        iconUrl: 'https://foo.com/icon',
        callback: jest.fn(),
        status: 'ADDED'
      }]
    };
    var wrapper = getWrapper(props);
    expect(wrapper.find(AdditionalTab)).toHaveLength(2);
    expect(wrapper.find(AdditionalTabsLoading).exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
  test('should not render the loading state after the image URLs have loaded', function () {
    var props = {
      tabs: [{
        id: 200,
        title: 'Test title',
        iconUrl: 'https://foo.com/icon',
        callback: jest.fn(),
        status: 'ADDED'
      }]
    };
    var wrapper = getWrapper(props);
    wrapper.setState({
      isLoading: false
    });
    expect(wrapper.find(AdditionalTab).exists()).toBeTruthy();
    expect(wrapper.find(AdditionalTabsLoading)).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });
  test('should only remove the loading state if the correct number of images have loaded', function () {
    var props = {
      tabs: [{
        id: 200,
        title: 'Test title',
        iconUrl: 'https://foo.com/icon',
        callback: jest.fn(),
        status: 'ADDED'
      }, {
        id: 201,
        title: 'Test title2',
        iconUrl: 'https://foo.com/icon2',
        callback: jest.fn(),
        status: 'ADDED'
      }]
    };
    var wrapper = getWrapper(props);
    var instance = wrapper.instance();
    instance.setState = jest.fn();
    instance.onImageLoad();
    expect(instance.setState).not.toBeCalled();
    instance.onImageLoad();
    expect(instance.setState).toBeCalled();
  });
  test('should only remove the loading state if the correct number of images have loaded and the more tabs entry is present', function () {
    var props = {
      tabs: [{
        id: 200,
        title: 'Test title',
        iconUrl: 'https://foo.com/icon',
        callback: jest.fn(),
        status: 'ADDED'
      }, {
        id: 201,
        title: 'Test title2',
        iconUrl: 'https://foo.com/icon2',
        callback: jest.fn(),
        status: 'ADDED'
      }, {
        id: -1,
        title: 'More Apps',
        callback: jest.fn(),
        status: 'ADDED'
      }]
    };
    var wrapper = getWrapper(props);
    var instance = wrapper.instance();
    instance.setState = jest.fn();
    instance.onImageLoad();
    expect(instance.setState).not.toBeCalled();
    instance.onImageLoad();
    expect(instance.setState).toBeCalled();
  });
});