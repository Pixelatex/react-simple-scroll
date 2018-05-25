'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScrollSection = exports.ScrollTo = exports.ScrollContainer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _scrollIntoView = require('scroll-into-view');

var _scrollIntoView2 = _interopRequireDefault(_scrollIntoView);

var _index = require('./components/ScrollSection/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./components/ScrollContainer/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollTo = function ScrollTo(sectionId) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

    var node = document.getElementById(sectionId);
    (0, _scrollIntoView2.default)(node, {
        time: speed,
        align: {
            top: offset
        }
    });
};

exports.ScrollContainer = _index4.default;
exports.ScrollTo = ScrollTo;
exports.ScrollSection = _index2.default;