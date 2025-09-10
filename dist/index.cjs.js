'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
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
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
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
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var _excluded = ["variant"];
var Button = function Button(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant,
    props = _objectWithoutProperties(_ref, _excluded);
  var className = variant === "primary" ? "bg-blue-500 text-white px-4 py-2 rounded" : "bg-gray-200 text-black px-4 py-2 rounded";
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    className: className
  }, props));
};

var Input = function Input(props) {
  return /*#__PURE__*/React__default["default"].createElement("input", _extends({
    className: "border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
  }, props));
};

// src/components/Modal.js
var Modal = function Modal(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    children = _ref.children;
  // Đóng khi nhấn phím ESC
  React.useEffect(function () {
    var handleEsc = function handleEsc(e) {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return function () {
      return document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);
  if (!open) return null;
  return /*#__PURE__*/reactDom.createPortal(/*#__PURE__*/React__default["default"].createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
    onClick: onClose // click ngoài modal để đóng
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "bg-white p-6 rounded-lg w-96 shadow-lg transform transition-all duration-300 scale-100",
    onClick: function onClick(e) {
      return e.stopPropagation();
    } // chặn click bên trong
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "text-gray-500 hover:text-gray-700 text-xl font-bold",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "mt-2"
  }, children))), document.body);
};

// src/components/Card.js
var Card = function Card(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "border rounded p-4 shadow"
  }, children);
};

// src/components/Cart/CartItem.js
var CartItem = function CartItem(_ref) {
  var id = _ref.id,
    name = _ref.name,
    price = _ref.price,
    quantity = _ref.quantity,
    onUpdate = _ref.onUpdate,
    onRemove = _ref.onRemove;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", null, name), /*#__PURE__*/React__default["default"].createElement("div", null, "$", price)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React__default["default"].createElement(Input, {
    type: "number",
    value: quantity,
    onChange: function onChange(e) {
      return onUpdate(id, Number(e.target.value));
    },
    className: "w-16 mr-2"
  }), /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: function onClick() {
      return onRemove(id);
    },
    variant: "secondary"
  }, "Remove")));
};

var Cart = function Cart(_ref) {
  var _ref$initialItems = _ref.initialItems,
    initialItems = _ref$initialItems === void 0 ? [] : _ref$initialItems;
  var _useState = React.useState(initialItems),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var handleUpdate = function handleUpdate(id, quantity) {
    setItems(items.map(function (item) {
      return item.id === id ? _objectSpread2(_objectSpread2({}, item), {}, {
        quantity: quantity
      }) : item;
    }));
  };
  var handleRemove = function handleRemove(id) {
    setItems(items.filter(function (item) {
      return item.id !== id;
    }));
  };
  return /*#__PURE__*/React__default["default"].createElement("div", null, items.map(function (item) {
    return /*#__PURE__*/React__default["default"].createElement(CartItem, _extends({
      key: item.id
    }, item, {
      onUpdate: handleUpdate,
      onRemove: handleRemove
    }));
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: function onClick() {
      return alert("Checkout!");
    }
  }, "Checkout")));
};

exports.Button = Button;
exports.Card = Card;
exports.Cart = Cart;
exports.Input = Input;
exports.Modal = Modal;
//# sourceMappingURL=index.cjs.js.map
