'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var styles$5 = {"btn":"Button-module_btn__tbKC3","primary":"Button-module_primary__ypFor","secondary":"Button-module_secondary__74qS3"};

const _excluded = ["variant"];
const Button = _ref => {
  let {
      variant = "primary"
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const className = "".concat(styles$5.btn, " ").concat(variant === "primary" ? styles$5.primary : styles$5.secondary);
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    className: className
  }, props));
};

var styles$4 = {"input":"Input-module_input__-GpUa"};

const Input = props => {
  return /*#__PURE__*/React__default["default"].createElement("input", _extends({
    className: styles$4.input
  }, props));
};

var styles$3 = {"overlay":"Modal-module_overlay__jQMv2","content":"Modal-module_content__6K7Qz","close":"Modal-module_close__ZaFno"};

const Modal = _ref => {
  let {
    open,
    onClose,
    children
  } = _ref;
  React.useEffect(() => {
    const handleEsc = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  if (!open) return null;
  return /*#__PURE__*/reactDom.createPortal(/*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$3.overlay,
    onClick: onClose
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$3.content,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: styles$3.close,
    onClick: onClose,
    "aria-label": "\u0110\xF3ng"
  }, "\xD7"), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      marginTop: "0.5rem"
    }
  }, children))), document.body);
};

var styles$2 = {"card":"Card-module_card__CTmXc"};

const Card = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$2.card
  }, children);
};

var styles$1 = {"container":"Cart-module_container__ipEtL","title":"Cart-module_title__IN8WK"};

var styles = {"item":"CartItem-module_item__i-dbA","name":"CartItem-module_name__533DH","price":"CartItem-module_price__x50Ad","actions":"CartItem-module_actions__-8CeX"};

const CartItem = ({
  id,
  name,
  price,
  quantity,
  onUpdate,
  onRemove
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.item
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: styles.name
  }, name), /*#__PURE__*/React__default["default"].createElement("span", {
    className: styles.price
  }, price, "\u20AB"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.actions
  }, /*#__PURE__*/React__default["default"].createElement(Input, {
    type: "number",
    value: quantity,
    min: 1,
    onChange: e => onUpdate(id, Number(e.target.value)),
    style: {
      width: "60px"
    }
  }), /*#__PURE__*/React__default["default"].createElement(Button, {
    variant: "secondary",
    onClick: () => onRemove(id)
  }, "X\xF3a")));
};

const Cart = _ref => {
  let {
    initialItems = []
  } = _ref;
  const [items, setItems] = React.useState(initialItems);
  const handleUpdate = (id, quantity) => {
    setItems(items.map(item => item.id === id ? _objectSpread2(_objectSpread2({}, item), {}, {
      quantity
    }) : item));
  };
  const handleRemove = id => {
    setItems(items.filter(item => item.id !== id));
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$1.container
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$1.title
  }, "Gi\u1ECF h\xE0ng"), items.map(item => /*#__PURE__*/React__default["default"].createElement(CartItem, _extends({
    key: item.id
  }, item, {
    onUpdate: handleUpdate,
    onRemove: handleRemove
  }))));
};

exports.Button = Button;
exports.Card = Card;
exports.Cart = Cart;
exports.Input = Input;
exports.Modal = Modal;
//# sourceMappingURL=index.cjs.js.map
