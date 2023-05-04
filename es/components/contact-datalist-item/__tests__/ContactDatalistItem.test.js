function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from 'react';
import { shallow } from 'enzyme';
import ContactDatalistItem from '../ContactDatalistItem';
import DatalistItem from '../../datalist-item';
import Avatar from '../../avatar';
describe('components/contact-datalist-item/ContactDatalistItem', function () {
  test('should render a DatalistItem with name and subtitle', function () {
    var wrapper = shallow(React.createElement(ContactDatalistItem, {
      name: "name",
      subtitle: "subtitle"
    }));
    expect(wrapper.find(DatalistItem).length).toBe(1);
    expect(wrapper.find('.contact-name').text()).toEqual('name');
    expect(wrapper.find('.contact-sub-name').text()).toEqual('subtitle');
    expect(wrapper.find(Avatar).length).toBe(0);
  });
  test('should not render a subtitle when not provided', function () {
    var wrapper = shallow(React.createElement(ContactDatalistItem, {
      name: "name"
    }));
    expect(wrapper.find('.contact-sub-name').length).toBe(0);
    expect(wrapper.find(Avatar).length).toBe(0);
  });
  describe('avatars with or without image URLs', function () {
    test('should show avatar component when specified', function () {
      var wrapper = shallow(React.createElement(ContactDatalistItem, {
        name: "name",
        showAvatar: true
      }));
      expect(wrapper.find(Avatar).length).toBe(1);
    });
    test('should do nothing when getPillImageUrl returns a rejected Promise',
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _instance$componentDi;

      var wrapper, instance;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              wrapper = shallow(React.createElement(ContactDatalistItem, {
                name: "name",
                id: "123",
                showAvatar: true,
                getPillImageUrl: function getPillImageUrl() {
                  return Promise.reject(new Error());
                }
              }));
              _context.next = 3;
              return wrapper.instance();

            case 3:
              instance = _context.sent;
              (_instance$componentDi = instance.componentDidMount) === null || _instance$componentDi === void 0 ? void 0 : _instance$componentDi.call(instance);
              wrapper.update();
              expect(wrapper.find(Avatar).length).toBe(1);
              expect(wrapper.find(Avatar).props().avatarUrl).toBeUndefined();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    test.each([[function (contact) {
      return "/test?id=".concat(contact.id);
    }], [function (contact) {
      return Promise.resolve("/test?id=".concat(contact.id));
    }]])('should use the avatar URL when the prop (and show avatar) are provided',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(getContactAvatarUrl) {
        var _instance$componentDi2;

        var wrapper, instance;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wrapper = shallow(React.createElement(ContactDatalistItem, {
                  name: "name",
                  id: "123",
                  showAvatar: true,
                  getContactAvatarUrl: getContactAvatarUrl
                }));
                expect(wrapper.find(Avatar).length).toBe(1);
                expect(wrapper.find(Avatar).props().avatarUrl).toBeUndefined();
                _context2.next = 5;
                return wrapper.instance();

              case 5:
                instance = _context2.sent;
                (_instance$componentDi2 = instance.componentDidMount) === null || _instance$componentDi2 === void 0 ? void 0 : _instance$componentDi2.call(instance);
                wrapper.update();
                expect(wrapper.find(Avatar).length).toBe(1);
                expect(wrapper.find(Avatar).props().avatarUrl).toEqual('/test?id=123');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    test('should not have the avatar URL when the id prop is missing', function () {
      var wrapper = shallow(React.createElement(ContactDatalistItem, {
        name: "name",
        showAvatar: true,
        getContactAvatarUrl: function getContactAvatarUrl(contact) {
          return "/test?id=".concat(contact.id);
        }
      }));
      expect(wrapper.find(Avatar).length).toBe(1);
      expect(wrapper.find(Avatar).props().avatarUrl).toBeUndefined();
    });
  });
});