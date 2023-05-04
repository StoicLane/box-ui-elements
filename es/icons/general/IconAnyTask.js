import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlGray65 } from '../../styles/variables';

var IconAnyTask = function IconAnyTask(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray65 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: className,
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, React.createElement("g", {
    fill: color,
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: "M28.7484364 16.4549424c0 1.0039348.7442362 1.8177849 1.6622981 1.8177849.9180618 0 1.662298-.8138501 1.662298-1.8177849V5.54823284c0-1.47292747-1.5180216-2.33430191-2.6193324-1.48629378L26.960253 5.9818905c-.7506441.57799516-.9306825 1.71198921-.402127 2.5328466.4995837.7758637 1.4533974.99427836 2.1903104.52782657v7.41237873zM13.1639416 17.5454545c4.0166164 0 7.2727273-3.2561109 7.2727273-7.2727272C20.4366689 6.25611091 17.180558 3 13.1639416 3c-4.01661637 0-7.27272728 3.25611091-7.27272728 7.2727273 0 4.0166163 3.25611091 7.2727272 7.27272728 7.2727272zm0-3.6363636c-2.0083082 0-3.63636365-1.6280554-3.63636365-3.6363636 0-2.00830821 1.62805545-3.63636366 3.63636365-3.63636366s3.6363636 1.62805545 3.6363636 3.63636366c0 2.0083082-1.6280554 3.6363636-3.6363636 3.6363636zM26.0799741 26.82097c-2.6627973-4.6162045-7.5876175-7.459488-12.9167671-7.4573363-5.33091328-.0023936-10.25839928 2.8441776-12.9201858 7.4647912-.50123987.8701058-.20221498 1.9818011.66789077 2.4830409.87010576.5012399 1.98180104.202215 2.48304091-.6678907 2.01238031-3.4933049 5.73768893-5.6453874 9.76917202-5.6435766 4.0305283-.0016279 7.7538215 2.147969 9.766966 5.6379405.5017421.8698163 1.6136099 1.1681993 2.4834261.6664571.8698162-.5017421 1.1681992-1.6136098.6664571-2.4834261z"
  })));
};

export default IconAnyTask;
//# sourceMappingURL=IconAnyTask.js.map