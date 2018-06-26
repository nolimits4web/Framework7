'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils/utils');

var _utils2 = _interopRequireDefault(_utils);

var _mixins = require('../utils/mixins');

var _mixins2 = _interopRequireDefault(_mixins);

var _reactComponentEl = require('../runtime-helpers/react-component-el.js');

var _reactComponentEl2 = _interopRequireDefault(_reactComponentEl);

var _reactComponentDispatchEvent = require('../runtime-helpers/react-component-dispatch-event.js');

var _reactComponentDispatchEvent2 = _interopRequireDefault(_reactComponentDispatchEvent);

var _reactComponentSlots = require('../runtime-helpers/react-component-slots.js');

var _reactComponentSlots2 = _interopRequireDefault(_reactComponentSlots);

var _reactComponentSetProps = require('../runtime-helpers/react-component-set-props.js');

var _reactComponentSetProps2 = _interopRequireDefault(_reactComponentSetProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F7Block = function (_React$Component) {
  _inherits(F7Block, _React$Component);

  function F7Block(props, context) {
    _classCallCheck(this, F7Block);

    return _possibleConstructorReturn(this, (F7Block.__proto__ || Object.getPrototypeOf(F7Block)).call(this, props, context));
  }

  _createClass(F7Block, [{
    key: 'onTabShow',
    value: function onTabShow(e) {
      this.dispatchEvent('tabShow tab:show', e);
    }
  }, {
    key: 'onTabHide',
    value: function onTabHide(e) {
      this.dispatchEvent('tabShow tab:hide', e);
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var props = self.props;
      var className = props.className,
          inset = props.inset,
          strong = props.strong,
          accordionList = props.accordionList,
          tabletInset = props.tabletInset,
          tabs = props.tabs,
          tab = props.tab,
          tabActive = props.tabActive,
          noHairlines = props.noHairlines,
          noHairlinesIos = props.noHairlinesIos,
          noHairlinesMd = props.noHairlinesMd,
          id = props.id,
          style = props.style;

      var classes = _utils2.default.classNames(className, 'block', {
        inset: inset,
        'block-strong': strong,
        'accordion-list': accordionList,
        'tablet-inset': tabletInset,
        tabs: tabs,
        tab: tab,
        'tab-active': tabActive,
        'no-hairlines': noHairlines,
        'no-hairlines-md': noHairlinesMd,
        'no-hairlines-ios': noHairlinesIos
      }, _mixins2.default.colorClasses(props));
      return _react2.default.createElement('div', {
        id: id,
        style: style,
        className: classes
      }, this.slots['default']);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var el = this.el;
      if (!el) return;
      el.removeEventListener('tab:show', this.onTabShowBound);
      el.removeEventListener('tab:hide', this.onTabHideBound);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var el = this.el;
      if (!el) return;
      this.onTabShowBound = this.onTabShow.bind(this);
      this.onTabHideBound = this.onTabHide.bind(this);
      el.addEventListener('tab:show', this.onTabShowBound);
      el.addEventListener('tab:hide', this.onTabHideBound);
    }
  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return _reactComponentDispatchEvent2.default.apply(undefined, [this, events].concat(args));
    }
  }, {
    key: 'slots',
    get: function get() {
      return (0, _reactComponentSlots2.default)(this.props);
    }
  }, {
    key: 'el',
    get: function get() {
      return (0, _reactComponentEl2.default)(this);
    }
  }]);

  return F7Block;
}(_react2.default.Component);

(0, _reactComponentSetProps2.default)(F7Block, Object.assign({
  id: [String, Number],
  inset: Boolean,
  tabletInset: Boolean,
  strong: Boolean,
  tabs: Boolean,
  tab: Boolean,
  tabActive: Boolean,
  accordionList: Boolean,
  noHairlines: Boolean,
  noHairlinesMd: Boolean,
  noHairlinesIos: Boolean
}, _mixins2.default.colorProps));

exports.default = F7Block;