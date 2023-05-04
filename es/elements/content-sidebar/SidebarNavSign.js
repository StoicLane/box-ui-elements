import React from 'react';
import { FormattedMessage } from 'react-intl'; // @ts-ignore Module is written in Flow

import { useFeatureConfig } from '../common/feature-checking'; // @ts-ignore Module is written in Flow

import { SIDEBAR_NAV_TARGETS } from '../common/interactionTargets'; // @ts-ignore Module is written in Flow

import DropdownMenu from '../../components/dropdown-menu';
import SidebarNavSignButton from './SidebarNavSignButton';
import SignMe32 from '../../icon/fill/SignMe32';
import SignMeOthers32 from '../../icon/fill/SignMeOthers32';
import { Menu, MenuItem } from '../../components/menu'; // @ts-ignore Module is written in Flow

import messages from './messages';
import './SidebarNavSign.scss';
export function SidebarNavSign() {
  var _useFeatureConfig = useFeatureConfig('boxSign'),
      boxSignBlockedReason = _useFeatureConfig.blockedReason,
      onBoxClickRequestSignature = _useFeatureConfig.onClick,
      onBoxClickSignMyself = _useFeatureConfig.onClickSignMyself,
      boxSignStatus = _useFeatureConfig.status,
      boxSignTargetingApi = _useFeatureConfig.targetingApi,
      isSignRemoveInterstitialEnabled = _useFeatureConfig.isSignRemoveInterstitialEnabled;

  return React.createElement(React.Fragment, null, isSignRemoveInterstitialEnabled ? React.createElement(DropdownMenu, {
    isResponsive: true,
    constrainToWindow: true,
    isRightAligned: true
  }, React.createElement(SidebarNavSignButton, {
    blockedReason: boxSignBlockedReason,
    status: boxSignStatus,
    targetingApi: boxSignTargetingApi,
    "data-resin-target": SIDEBAR_NAV_TARGETS.SIGN
  }), React.createElement(Menu, null, React.createElement(MenuItem, {
    "data-testid": "sign-request-signature-button",
    onClick: onBoxClickRequestSignature
  }, React.createElement(SignMeOthers32, {
    width: 16,
    height: 16,
    className: "bcs-SidebarNavSign-icon"
  }), React.createElement(FormattedMessage, messages.boxSignRequestSignature)), React.createElement(MenuItem, {
    "data-testid": "sign-sign-myself-button",
    onClick: onBoxClickSignMyself
  }, React.createElement(SignMe32, {
    width: 16,
    height: 16,
    className: "bcs-SidebarNavSign-icon"
  }), React.createElement(FormattedMessage, messages.boxSignSignMyself)))) : React.createElement(SidebarNavSignButton, {
    blockedReason: boxSignBlockedReason,
    "data-resin-target": SIDEBAR_NAV_TARGETS.SIGN,
    onClick: onBoxClickRequestSignature,
    status: boxSignStatus,
    targetingApi: boxSignTargetingApi
  }));
}
export default SidebarNavSign;
//# sourceMappingURL=SidebarNavSign.js.map