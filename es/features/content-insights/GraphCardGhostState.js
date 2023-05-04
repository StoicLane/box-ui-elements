import React from 'react';
import Ghost from '../../components/ghost';
import GraphGhostState from './GraphGhostState';
import './GraphCardGhostState.scss';

var GraphCardGhostState = function GraphCardGhostState() {
  return React.createElement("div", {
    className: "GraphCardGhostState",
    "data-testid": "GraphCardGhostState"
  }, React.createElement("div", {
    className: "GraphCardGhostState-header"
  }, React.createElement(Ghost, {
    borderRadius: 4,
    height: 16,
    width: 56
  }), React.createElement(Ghost, {
    borderRadius: 4,
    className: "GraphCardGhostState-headlinePill",
    height: 20,
    width: 96
  })), React.createElement(GraphGhostState, null));
};

export default GraphCardGhostState;
//# sourceMappingURL=GraphCardGhostState.js.map