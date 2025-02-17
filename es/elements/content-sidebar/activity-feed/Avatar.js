function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file avatar component
 * @author Box
 */
import * as React from 'react';
import AvatarComponent from '../../../components/avatar';

var Avatar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Avatar, _React$PureComponent);

  function Avatar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Avatar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      avatarUrl: null
    });

    _defineProperty(_assertThisInitialized(_this), "isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "getAvatarUrlHandler", function (avatarUrl) {
      if (_this.isMounted) {
        _this.setState({
          avatarUrl: avatarUrl
        });
      }
    });

    return _this;
  }

  _createClass(Avatar, [{
    key: "getAvatarUrl",

    /**
     * Gets the avatar URL for the user from the getAvatarUrl prop
     *
     * @return {Promise<?string>} Promise which resolve with the avatar url string
     */
    value: function getAvatarUrl() {
      var _this$props = this.props,
          _this$props$user = _this$props.user,
          user = _this$props$user === void 0 ? {} : _this$props$user,
          getAvatarUrl = _this$props.getAvatarUrl;
      var _user$avatar_url = user.avatar_url,
          avatar_url = _user$avatar_url === void 0 ? null : _user$avatar_url,
          id = user.id;
      var avatarPromise = id && getAvatarUrl ? getAvatarUrl("".concat(id)) : Promise.resolve(avatar_url);
      return avatarPromise.then(this.getAvatarUrlHandler);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isMounted = true;
      this.getAvatarUrl();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          badgeIcon = _this$props2.badgeIcon,
          className = _this$props2.className,
          user = _this$props2.user;
      var avatarUrl = this.state.avatarUrl;
      var id = user.id,
          name = user.name;
      return React.createElement(AvatarComponent, {
        avatarUrl: avatarUrl,
        badgeIcon: badgeIcon,
        className: className,
        id: id,
        name: name
      });
    }
  }]);

  return Avatar;
}(React.PureComponent);

export default Avatar;
//# sourceMappingURL=Avatar.js.map