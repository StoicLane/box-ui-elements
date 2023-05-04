import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue } from '../../styles/variables';

var ErrorEmptyState = function ErrorEmptyState(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 126 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 130 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "error-empty-state ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 150 150",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, React.createElement("path", {
    className: "fill-color",
    d: "M75.5,6.1337822 L75.5,5.49178758 C75.5,5.2201808 75.7319336,5 76,5 C76.2761424,5 76.5,5.21505737 76.5,5.49047852 L76.5,6.1337822 C76.651814,6.22160185 76.7783981,6.348186 76.8662178,6.5 L77.5095215,6.5 C77.7804053,6.5 78,6.73193359 78,7 C78,7.27614237 77.7849426,7.5 77.5095215,7.5 L76.8662178,7.5 C76.7783981,7.651814 76.651814,7.77839815 76.5,7.8662178 L76.5,8.50952148 C76.5,8.78040529 76.2680664,9 76,9 C75.7238576,9 75.5,8.76897915 75.5,8.49525623 L75.5,7.8662178 C75.348186,7.77839815 75.2216019,7.651814 75.1337822,7.5 L74.4904785,7.5 C74.2195947,7.5 74,7.26806641 74,7 C74,6.72385763 74.2150574,6.5 74.4904785,6.5 L75.1337822,6.5 C75.2216019,6.348186 75.348186,6.22160185 75.5,6.1337822 Z M16,73.6337822 L16,72.9917876 C16,72.7201808 16.2319336,72.5 16.5,72.5 C16.7761424,72.5 17,72.7150574 17,72.9904785 L17,73.6337822 C17.151814,73.7216019 17.2783981,73.848186 17.3662178,74 L18.0095215,74 C18.2804053,74 18.5,74.2319336 18.5,74.5 C18.5,74.7761424 18.2849426,75 18.0095215,75 L17.3662178,75 C17.2783981,75.151814 17.151814,75.2783981 17,75.3662178 L17,76.0095215 C17,76.2804053 16.7680664,76.5 16.5,76.5 C16.2238576,76.5 16,76.2689791 16,75.9952562 L16,75.3662178 C15.848186,75.2783981 15.7216019,75.151814 15.6337822,75 L14.9904785,75 C14.7195947,75 14.5,74.7680664 14.5,74.5 C14.5,74.2238576 14.7150574,74 14.9904785,74 L15.6337822,74 C15.7216019,73.848186 15.848186,73.7216019 16,73.6337822 Z M132.5,81.6337822 L132.5,80.9917876 C132.5,80.7201808 132.731934,80.5 133,80.5 C133.276142,80.5 133.5,80.7150574 133.5,80.9904785 L133.5,81.6337822 C133.651814,81.7216019 133.778398,81.848186 133.866218,82 L134.509521,82 C134.780405,82 135,82.2319336 135,82.5 C135,82.7761424 134.784943,83 134.509521,83 L133.866218,83 C133.778398,83.151814 133.651814,83.2783981 133.5,83.3662178 L133.5,84.0095215 C133.5,84.2804053 133.268066,84.5 133,84.5 C132.723858,84.5 132.5,84.2689791 132.5,83.9952562 L132.5,83.3662178 C132.348186,83.2783981 132.221602,83.151814 132.133782,83 L131.490479,83 C131.219595,83 131,82.7680664 131,82.5 C131,82.2238576 131.215057,82 131.490479,82 L132.133782,82 C132.221602,81.848186 132.348186,81.7216019 132.5,81.6337822 Z M47,23.1337822 L47,22.4917876 C47,22.2201808 47.2319336,22 47.5,22 C47.7761424,22 48,22.2150574 48,22.4904785 L48,23.1337822 C48.151814,23.2216019 48.2783981,23.348186 48.3662178,23.5 L49.0095215,23.5 C49.2804053,23.5 49.5,23.7319336 49.5,24 C49.5,24.2761424 49.2849426,24.5 49.0095215,24.5 L48.3662178,24.5 C48.2783981,24.651814 48.151814,24.7783981 48,24.8662178 L48,25.5095215 C48,25.7804053 47.7680664,26 47.5,26 C47.2238576,26 47,25.7689791 47,25.4952562 L47,24.8662178 C46.848186,24.7783981 46.7216019,24.651814 46.6337822,24.5 L45.9904785,24.5 C45.7195947,24.5 45.5,24.2680664 45.5,24 C45.5,23.7238576 45.7150574,23.5 45.9904785,23.5 L46.6337822,23.5 C46.7216019,23.348186 46.848186,23.2216019 47,23.1337822 Z M107,24.6337822 L107,23.9917876 C107,23.7201808 107.231934,23.5 107.5,23.5 C107.776142,23.5 108,23.7150574 108,23.9904785 L108,24.6337822 C108.151814,24.7216019 108.278398,24.848186 108.366218,25 L109.009521,25 C109.280405,25 109.5,25.2319336 109.5,25.5 C109.5,25.7761424 109.284943,26 109.009521,26 L108.366218,26 C108.278398,26.151814 108.151814,26.2783981 108,26.3662178 L108,27.0095215 C108,27.2804053 107.768066,27.5 107.5,27.5 C107.223858,27.5 107,27.2689791 107,26.9952562 L107,26.3662178 C106.848186,26.2783981 106.721602,26.151814 106.633782,26 L105.990479,26 C105.719595,26 105.5,25.7680664 105.5,25.5 C105.5,25.2238576 105.715057,25 105.990479,25 L106.633782,25 C106.721602,24.848186 106.848186,24.7216019 107,24.6337822 Z M142.5,44.6337822 L142.5,43.9917876 C142.5,43.7201808 142.731934,43.5 143,43.5 C143.276142,43.5 143.5,43.7150574 143.5,43.9904785 L143.5,44.6337822 C143.651814,44.7216019 143.778398,44.848186 143.866218,45 L144.509521,45 C144.780405,45 145,45.2319336 145,45.5 C145,45.7761424 144.784943,46 144.509521,46 L143.866218,46 C143.778398,46.151814 143.651814,46.2783981 143.5,46.3662178 L143.5,47.0095215 C143.5,47.2804053 143.268066,47.5 143,47.5 C142.723858,47.5 142.5,47.2689791 142.5,46.9952562 L142.5,46.3662178 C142.348186,46.2783981 142.221602,46.151814 142.133782,46 L141.490479,46 C141.219595,46 141,45.7680664 141,45.5 C141,45.2238576 141.215057,45 141.490479,45 L142.133782,45 C142.221602,44.848186 142.348186,44.7216019 142.5,44.6337822 Z M26.4375,26.7086139 L26.4375,26.3073672 C26.4375,26.137613 26.5824585,26 26.75,26 C26.922589,26 27.0625,26.1344109 27.0625,26.3065491 L27.0625,26.7086139 C27.1573838,26.7635012 27.2364988,26.8426162 27.2913861,26.9375 L27.6934509,26.9375 C27.8627533,26.9375 28,27.0824585 28,27.25 C28,27.422589 27.8655891,27.5625 27.6934509,27.5625 L27.2913861,27.5625 C27.2364988,27.6573838 27.1573838,27.7364988 27.0625,27.7913861 L27.0625,28.1934509 C27.0625,28.3627533 26.9175415,28.5 26.75,28.5 C26.577411,28.5 26.4375,28.355612 26.4375,28.1974433 L26.4375,27.7913861 C26.3426162,27.7364988 26.2635012,27.6573838 26.2086139,27.5625 L25.8065491,27.5625 C25.6372467,27.5625 25.5,27.4175415 25.5,27.25 C25.5,27.077411 25.6344109,26.9375 25.8065491,26.9375 L26.2086139,26.9375 C26.2635012,26.8426162 26.3426162,26.7635012 26.4375,26.7086139 Z M5.9375,66.7086139 L5.9375,66.3073672 C5.9375,66.137613 6.0824585,66 6.25,66 C6.42258898,66 6.5625,66.1344109 6.5625,66.3065491 L6.5625,66.7086139 C6.65738375,66.7635012 6.73649884,66.8426162 6.79138613,66.9375 L7.19345093,66.9375 C7.36275331,66.9375 7.5,67.0824585 7.5,67.25 C7.5,67.422589 7.36558914,67.5625 7.19345093,67.5625 L6.79138613,67.5625 C6.73649884,67.6573838 6.65738375,67.7364988 6.5625,67.7913861 L6.5625,68.1934509 C6.5625,68.3627533 6.4175415,68.5 6.25,68.5 C6.07741102,68.5 5.9375,68.355612 5.9375,68.1974433 L5.9375,67.7913861 C5.84261625,67.7364988 5.76350116,67.6573838 5.70861387,67.5625 L5.30654907,67.5625 C5.13724669,67.5625 5,67.4175415 5,67.25 C5,67.077411 5.13441086,66.9375 5.30654907,66.9375 L5.70861387,66.9375 C5.76350116,66.8426162 5.84261625,66.7635012 5.9375,66.7086139 Z M128.4375,35.2086139 L128.4375,34.8073672 C128.4375,34.637613 128.582458,34.5 128.75,34.5 C128.922589,34.5 129.0625,34.6344109 129.0625,34.8065491 L129.0625,35.2086139 C129.157384,35.2635012 129.236499,35.3426162 129.291386,35.4375 L129.693451,35.4375 C129.862753,35.4375 130,35.5824585 130,35.75 C130,35.922589 129.865589,36.0625 129.693451,36.0625 L129.291386,36.0625 C129.236499,36.1573838 129.157384,36.2364988 129.0625,36.2913861 L129.0625,36.6934509 C129.0625,36.8627533 128.917542,37 128.75,37 C128.577411,37 128.4375,36.855612 128.4375,36.6974433 L128.4375,36.2913861 C128.342616,36.2364988 128.263501,36.1573838 128.208614,36.0625 L127.806549,36.0625 C127.637247,36.0625 127.5,35.9175415 127.5,35.75 C127.5,35.577411 127.634411,35.4375 127.806549,35.4375 L128.208614,35.4375 C128.263501,35.3426162 128.342616,35.2635012 128.4375,35.2086139 Z",
    fill: color
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M22.7914692,53.0566298 C22.7914692,44.2833882 29.9045187,37.1712707 38.67891,37.1712707 C45.7737865,37.1712707 51.7824509,41.8212886 53.8227562,48.239555 C55.2405695,47.3058073 56.9383368,46.7624309 58.7630332,46.7624309 C60.5666328,46.7624309 62.2462216,47.2933152 63.654021,48.2073246 L63.654021,48.2073246 C64.4190329,41.9873442 69.7216602,37.1712707 76.1492891,37.1712707 C83.1025803,37.1712707 88.7393365,42.8072884 88.7393365,49.7596685",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    transform: "translate(55.765403, 45.113950) rotate(-16.000000) translate(-55.765403, -45.113950) "
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M83.943128,54.2555249 C83.943128,45.4822833 91.0561775,38.3701657 99.8305687,38.3701657 C108.60496,38.3701657 115.718009,45.4822833 115.718009,54.2555249 C115.718009,54.3264389 115.717545,54.3972444 115.716618,54.4679385 C116.654607,54.136276 117.664045,53.9558011 118.71564,53.9558011 C123.682276,53.9558011 127.708531,57.981528 127.708531,62.9475138",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    transform: "translate(105.825829, 52.277119) rotate(12.000000) translate(-105.825829, -52.277119) "
  }), React.createElement("path", {
    className: "stroke-color fill-white",
    d: "M50.9395397,69.2196888 C50.9559175,68.4219236 51.610933,67.7752072 52.4046043,67.7752072 L97.4958697,67.7752072 C98.2886247,67.7752072 98.9444823,68.4183107 98.9609042,69.2182265 L99.4445195,92.7751921 L99.7620359,108.24146 C99.7783805,109.037607 99.1770355,109.912104 98.4076164,110.184881 C98.4076164,110.184881 87.4203791,114.5 74.950237,114.5 C62.4800948,114.5 51.4928575,110.184881 51.4928575,110.184881 C50.7283448,109.907706 50.1221794,109.033417 50.1385386,108.236558 L50.4774294,91.7291413 L50.9395397,69.2196888 Z",
    fill: "#FFFFFF",
    stroke: color,
    strokeWidth: "2"
  }), React.createElement("ellipse", {
    className: "fill-color fill-opacity",
    cx: "74.950237",
    cy: "78.3725829",
    fill: color,
    fillOpacity: "0.1",
    rx: "23.0218009",
    ry: "4.33529006"
  }), React.createElement("path", {
    className: "stroke-color fill-white",
    d: "M74.950237,79.8176796 C97.465656,79.8176796 115.718009,75.5044007 115.718009,70.1837017 C115.718009,64.8630026 97.465656,60.5497238 74.950237,60.5497238 C52.4348179,60.5497238 34.1824645,64.8630026 34.1824645,70.1837017 C34.1824645,75.5044007 52.4348179,79.8176796 74.950237,79.8176796 Z",
    fill: "#FFFFFF",
    stroke: color,
    strokeWidth: "2"
  }), React.createElement("ellipse", {
    className: "stroke-color fill-white",
    cx: "74.950237",
    cy: "68.4977555",
    fill: "#FFFFFF",
    rx: "24.4606635",
    ry: "4.09444061",
    stroke: color,
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "fill-color fill-opacity",
    d: "M75,145 C92.9492544,145 107.5,143.656854 107.5,142 C107.5,140.343146 92.9492544,139 75,139 C57.0507456,139 42.5,140.343146 42.5,142 C42.5,143.656854 57.0507456,145 75,145 Z M52.8509947,83.1913741 C52.8712542,82.3922739 53.1310662,82.3484877 53.4058629,83.0830098 C53.4058629,83.0830098 54.9449475,86.510498 55.7326913,92.6144423 C56.1527728,95.8695035 53.9282708,103.074457 55.7326913,105.159127 C57.3617489,107.041199 60.8117179,105.68032 64.1108787,107.455589 C67.4100395,109.230858 72.2793624,112.331621 70.2784638,112.127382 C61.553615,111.236802 53.5881693,108.414342 53.5881693,108.414342 C52.8342042,108.164383 52.2394252,107.313681 52.2596778,106.514853 L52.8509947,83.1913741 Z M74.950237,71.6141582 C83.2980852,71.6141582 97.0127962,70.1313923 97.0127962,68.8551108 C95.6484975,68.0340868 84.2687795,66.59622 74.9502365,66.59622 C65.6316935,66.59622 54.8064568,67.6979178 52.8876777,68.8551108 C52.8876777,70.1313923 66.6023888,71.6141582 74.950237,71.6141582 Z",
    fill: color,
    fillOpacity: "0.1"
  }), React.createElement("path", {
    className: "stroke-color fill-white",
    d: "M59.7884631,63.0000267 L152.135708,63.5798175 C153.123448,63.5860189 153.924171,64.4019833 153.924171,65.3977901 C153.924171,66.3956273 153.123712,67.2095597 152.135708,67.2157627 L59.7884631,67.7955534 C58.8007222,67.8017549 58,66.7255324 58,65.3977901 C58,64.0673406 58.8004581,62.9938237 59.7884631,63.0000267 Z",
    fill: "#FFFFFF",
    stroke: color,
    strokeWidth: "2",
    transform: "translate(105.962085, 65.397790) rotate(70.000000) translate(-105.962085, -65.397790) "
  }), React.createElement("path", {
    className: "stroke-color",
    d: "M96.0000002,31 L92.2294151,32.3351735",
    stroke: color,
    strokeLinecap: "square",
    strokeWidth: "2"
  })));
};

export default ErrorEmptyState;
//# sourceMappingURL=ErrorEmptyState.js.map