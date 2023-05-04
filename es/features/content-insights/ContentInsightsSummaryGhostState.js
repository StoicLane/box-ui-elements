import * as React from 'react';
import Ghost from '../../components/ghost';
import GraphCardGhostState from './GraphCardGhostState';
import './ContentInsightsSummaryGhostState.scss';

var ContentInsightsSummaryGhostState = function ContentInsightsSummaryGhostState() {
  return React.createElement("div", {
    className: "ContentInsightsSummaryGhostState"
  }, React.createElement(GraphCardGhostState, null), React.createElement("div", {
    className: "ContentInsightsSummaryGhostState-cta"
  }, React.createElement(Ghost, {
    borderRadius: 6,
    className: "ContentInsightsSummaryGhostState-ctaButton",
    height: 32
  })));
};

export default ContentInsightsSummaryGhostState;
//# sourceMappingURL=ContentInsightsSummaryGhostState.js.map