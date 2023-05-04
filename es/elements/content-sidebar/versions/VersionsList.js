function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions List component
 * @author Box
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import VersionsItem from './VersionsItem';
import './VersionsList.scss';

var VersionsList = function VersionsList(_ref) {
  var currentId = _ref.currentId,
      versions = _ref.versions,
      rest = _objectWithoutProperties(_ref, ["currentId", "versions"]);

  var params = useParams();
  var versionId = params.versionId;
  return React.createElement("ul", {
    className: "bcs-VersionsList"
  }, versions.map(function (version) {
    return React.createElement("li", {
      className: "bcs-VersionsList-item",
      key: version.id
    }, React.createElement(VersionsItem, _extends({
      isCurrent: currentId === version.id,
      isSelected: versionId === version.id,
      version: version
    }, rest)));
  }));
};

export default VersionsList;
//# sourceMappingURL=VersionsList.js.map