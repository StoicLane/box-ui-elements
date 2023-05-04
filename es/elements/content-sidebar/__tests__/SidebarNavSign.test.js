import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SidebarNavSign from '../SidebarNavSign'; // @ts-ignore Module is written in Flow

import FeatureProvider from '../../common/feature-checking/FeatureProvider';
describe('elements/content-sidebar/SidebarNavSign', function () {
  var onClickRequestSignature = jest.fn();
  var onClickSignMyself = jest.fn();

  var renderComponent = function renderComponent() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var features = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return render(React.createElement(FeatureProvider, {
      features: features
    }, React.createElement(SidebarNavSign, props)));
  };

  test.each([true, false])('should render sign button', function (isRemoveInterstitialEnabled) {
    var features = {
      boxSign: {
        isSignRemoveInterstitialEnabled: isRemoveInterstitialEnabled
      }
    };
    var wrapper = renderComponent({}, features);
    expect(wrapper.getByTestId('sign-button')).toBeVisible();
  });
  test('should call correct handler when sign button is clicked', function () {
    var features = {
      boxSign: {
        isSignRemoveInterstitialEnabled: false,
        onClick: onClickRequestSignature
      }
    };

    var _renderComponent = renderComponent({}, features),
        getByTestId = _renderComponent.getByTestId;

    fireEvent.click(getByTestId('sign-button'));
    expect(onClickRequestSignature).toBeCalled();
  });
  test('should open dropdown with 2 menu items when sign button is clicked', function () {
    var features = {
      boxSign: {
        isSignRemoveInterstitialEnabled: true
      }
    };

    var _renderComponent2 = renderComponent({}, features),
        getByTestId = _renderComponent2.getByTestId;

    fireEvent.click(getByTestId('sign-button'));
    expect(getByTestId('sign-request-signature-button')).toBeVisible();
    expect(getByTestId('sign-sign-myself-button')).toBeVisible();
  });
  test('should call correct handler when request signature option is clicked', function () {
    var features = {
      boxSign: {
        isSignRemoveInterstitialEnabled: true,
        onClick: onClickRequestSignature
      }
    };

    var _renderComponent3 = renderComponent({}, features),
        getByTestId = _renderComponent3.getByTestId;

    fireEvent.click(getByTestId('sign-button'));
    fireEvent.click(getByTestId('sign-request-signature-button'));
    expect(onClickRequestSignature).toBeCalled();
  });
  test('should call correct handler when sign myself option is clicked', function () {
    var features = {
      boxSign: {
        isSignRemoveInterstitialEnabled: true,
        onClickSignMyself: onClickSignMyself
      }
    };

    var _renderComponent4 = renderComponent({}, features),
        getByTestId = _renderComponent4.getByTestId;

    fireEvent.click(getByTestId('sign-button'));
    fireEvent.click(getByTestId('sign-sign-myself-button'));
    expect(onClickSignMyself).toBeCalled();
  });
});