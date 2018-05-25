'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollSection = (_temp = _class = function (_React$Component) {
    _inherits(ScrollSection, _React$Component);

    function ScrollSection() {
        _classCallCheck(this, ScrollSection);

        return _possibleConstructorReturn(this, (ScrollSection.__proto__ || Object.getPrototypeOf(ScrollSection)).apply(this, arguments));
    }

    _createClass(ScrollSection, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.context.scroll.register(this.props.sectionId, this._element);
            this.props.onMountHandler();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.context.scroll.unregister(this.props.sectionId);
            this.props.onUnmountHandler();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.props.onChangeHandler();
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            return _react2.default.Children.map(this.props.children, function (child) {
                return _react2.default.cloneElement(child, {
                    onChildHandler: _this2.props.onChildHandler,
                    ref: function ref(_ref) {
                        return _this2._element = _ref;
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderChildren();
        }
    }]);

    return ScrollSection;
}(_react2.default.Component), _class.contextTypes = {
    scroll: _propTypes2.default.object
}, _temp);


ScrollSection.defaultProps = {
    onMountHandler: function onMountHandler() {
        return null;
    },
    onUnmountHandler: function onUnmountHandler() {
        return null;
    },
    onChangeHandler: function onChangeHandler() {
        return null;
    },
    onChildHandler: function onChildHandler() {
        return null;
    }
};

ScrollSection.PropTypes = {
    onMountHandler: _propTypes2.default.func,
    onUnmountHandler: _propTypes2.default.func,
    onChangeHandler: _propTypes2.default.func,
    onChildHandler: _propTypes2.default.func,
    sectionId: _propTypes2.default.string.isRequired
};

exports.default = ScrollSection;