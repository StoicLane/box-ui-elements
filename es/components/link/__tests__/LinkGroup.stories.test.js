function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('components/link/LinkGroup', function () {
  var LINKGROUP_STORY = 'components-links-linkgroup--basic';
  test("looks visually correct when using story ".concat(LINKGROUP_STORY),
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var image;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return BoxVisualTestUtils.takeScreenshot(LINKGROUP_STORY);

          case 2:
            image = _context.sent;
            return _context.abrupt("return", expect(image).toMatchImageSnapshot());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});