'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollContainer = (_temp2 = _class = function (_React$Component) {
    _inherits(ScrollContainer, _React$Component);

    function ScrollContainer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ScrollContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollContainer.__proto__ || Object.getPrototypeOf(ScrollContainer)).call.apply(_ref, [this].concat(args))), _this), _this.elements = {}, _this.handleScroll = function () {
            // console.log('isScrolling', this.elements)
            // Object.keys(this.elements).map(key => {
            //     const node = document.getElementById(key)
            //     console.log(node, 'the full node')
            //
            //     if (node.offsetTop < 50) {
            //         console.log(key, ' is on top!')
            //     }
            // })
            // if (this.state.sectionRendered) {
            //     const n = findDOMNode(this)
            //     if (n.offsetTop < 50) {
            //         console.log(this.props.id, ' is on top!')
            //     }
            //     console.log(n.offsetTop, 'offset')
            // }
        }, _this.register = function (name, ref) {
            _this.elements[name] = ref;
        }, _this.unregister = function (name) {
            delete _this.elements[name];
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ScrollContainer, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                scroll: {
                    register: this.register,
                    unregister: this.unregister
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { onScroll: this.handleScroll },
                _react2.default.Children.only(this.props.children)
            );
        }
    }]);

    return ScrollContainer;
}(_react2.default.Component), _class.childContextTypes = {
    scroll: _propTypes2.default.object
}, _temp2);
exports.default = ScrollContainer;
module.exports = exports['default'];