function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react'; // @ts-ignore: no ts definition

import messages from '../messages'; // @ts-ignore: no ts definition

import { withAPIContext } from '../api-context'; // @ts-ignore: no ts definition

import { getBadItemError } from '../../../utils/error'; // @ts-ignore: no ts definition
// eslint-disable-next-line import/named

export default function withCurrentUser(WrappedComponent) {
  var ComponentWithCurrentUser =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ComponentWithCurrentUser, _React$Component);

    function ComponentWithCurrentUser(props) {
      var _this;

      _classCallCheck(this, ComponentWithCurrentUser);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ComponentWithCurrentUser).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "errorCallback", function (error, code) {
        var contextInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        // eslint-disable-next-line no-console
        console.error(error);

        _this.props.onError(error, code, contextInfo);
      });

      _defineProperty(_assertThisInitialized(_this), "fetchCurrentUser", function (user) {
        var shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var _this$props = _this.props,
            api = _this$props.api,
            file = _this$props.file;

        if (!file) {
          throw getBadItemError();
        }

        if (typeof user === 'undefined') {
          api.getUsersAPI(shouldDestroy).getUser(file.id, _this.fetchCurrentUserSuccessCallback, _this.fetchCurrentUserErrorCallback);
        } else {
          _this.setState({
            currentUser: user,
            currentUserError: undefined
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "fetchCurrentUserSuccessCallback", function (currentUser) {
        _this.setState({
          currentUser: currentUser,
          currentUserError: undefined
        });
      });

      _defineProperty(_assertThisInitialized(_this), "fetchCurrentUserErrorCallback", function (e, code) {
        _this.setState({
          currentUser: undefined,
          currentUserError: {
            maskError: {
              errorHeader: messages.currentUserErrorHeaderMessage,
              errorSubHeader: messages.defaultErrorMaskSubHeaderMessage
            }
          }
        });

        _this.errorCallback(e, code, {
          error: e
        });
      });

      var _currentUser = props.currentUser;
      _this.state = {
        currentUser: _currentUser
      };
      return _this;
    }

    _createClass(ComponentWithCurrentUser, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var currentUser = this.state.currentUser;
        this.fetchCurrentUser(currentUser);
      }
      /**
       * Network error callback
       *
       * @private
       * @param {Error} error - Error object
       * @param {Error} code - the code for the error
       * @param {Object} contextInfo - the context info for the error
       * @return {void}
       */

    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            currentUser = _this$state.currentUser,
            currentUserError = _this$state.currentUserError;
        return React.createElement(WrappedComponent, _extends({}, this.props, {
          currentUser: currentUser,
          currentUserError: currentUserError
        }));
      }
    }]);

    return ComponentWithCurrentUser;
  }(React.Component);

  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  ComponentWithCurrentUser.displayName = "WithCurrentUser(".concat(displayName, ")");
  return withAPIContext(ComponentWithCurrentUser);
}
//# sourceMappingURL=withCurrentUser.js.map