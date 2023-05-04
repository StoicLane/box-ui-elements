import React from 'react';
import Ghost from '../../components/ghost';
import './GraphGhostState.scss';
var GRAPH_BAR_HEIGHTS = [28, 36, 54, 80, 36, 48, 28];

var GraphGhostState = function GraphGhostState() {
  return React.createElement("div", {
    className: "GraphGhostState"
  }, GRAPH_BAR_HEIGHTS.map(function (height, index) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement(Ghost, {
        key: index,
        borderRadius: 4,
        height: height
      })
    );
  }));
};

export default GraphGhostState;
//# sourceMappingURL=GraphGhostState.js.map