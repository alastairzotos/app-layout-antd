"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _text__toLocaleUpperCase, _object;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
    "../../node_modules/classnames/index.js": function(exports, module2) {
        (function() {
            "use strict";
            var hasOwn = {}.hasOwnProperty;
            var nativeCodeString = "[native code]";
            function classNames2() {
                var classes = [];
                for(var i = 0; i < arguments.length; i++){
                    var arg = arguments[i];
                    if (!arg) continue;
                    var argType = typeof arg === "undefined" ? "undefined" : _type_of(arg);
                    if (argType === "string" || argType === "number") {
                        classes.push(arg);
                    } else if (Array.isArray(arg)) {
                        if (arg.length) {
                            var inner = classNames2.apply(null, arg);
                            if (inner) {
                                classes.push(inner);
                            }
                        }
                    } else if (argType === "object") {
                        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                            classes.push(arg.toString());
                            continue;
                        }
                        for(var key in arg){
                            if (hasOwn.call(arg, key) && arg[key]) {
                                classes.push(key);
                            }
                        }
                    }
                }
                return classes.join(" ");
            }
            if (typeof module2 !== "undefined" && module2.exports) {
                classNames2.default = classNames2;
                module2.exports = classNames2;
            } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
                define("classnames", [], function() {
                    return classNames2;
                });
            } else {
                window.classNames = classNames2;
            }
        })();
    }
});
// src/index.ts
var src_exports = {};
__export(src_exports, {
    AppLayoutProvider: function() {
        return AppLayoutProvider;
    },
    createNavMenuItem: function() {
        return createNavMenuItem;
    },
    useAppLayout: function() {
        return useAppLayout;
    }
});
module.exports = __toCommonJS(src_exports);
// src/components/wrapper.tsx
var import_antd6 = require("antd");
var import_react7 = __toESM(require("react"));
var import_antd7 = require("antd");
var import_head = __toESM(require("next/head"));
// src/components/navigation.tsx
var import_react2 = __toESM(require("react"));
var import_antd2 = require("antd");
var import_antd3 = require("antd");
var import_router = require("next/router");
// src/components/sizes.ts
var NAVIGATION_WIDTH = 256;
var HEADER_HEIGHT = 64;
// src/components/logo.tsx
var import_antd = require("antd");
var import_image = __toESM(require("next/image"));
var import_link = __toESM(require("next/link"));
var import_react = __toESM(require("react"));
var Title = import_antd.Typography.Title;
var Logo = function() {
    var _useAppLayout = useAppLayout(), title = _useAppLayout.title, logo = _useAppLayout.logo, logoAlt = _useAppLayout.logoAlt, homeUrl = _useAppLayout.homeUrl;
    return /* @__PURE__ */ import_react.default.createElement(import_link.default, {
        href: homeUrl
    }, /* @__PURE__ */ import_react.default.createElement(import_antd.Space, {
        style: {
            display: "flex",
            justifyContent: "center",
            height: HEADER_HEIGHT - 1
        }
    }, /* @__PURE__ */ import_react.default.createElement(import_image.default, {
        src: logo,
        width: 50,
        height: 50,
        alt: logoAlt,
        style: {
            paddingTop: 7
        }
    }), /* @__PURE__ */ import_react.default.createElement(Title, {
        level: 4,
        style: {
            marginTop: 20,
            marginLeft: 4,
            fontSize: "1.4em"
        }
    }, title)));
};
// src/components/navigation.tsx
var Sider = import_antd2.Layout.Sider;
var createNavMenuItem = function(label, key, icon, children, type) {
    return {
        key: key,
        icon: icon,
        children: children,
        label: label,
        type: type
    };
};
var Navigation = function() {
    var _import_antd2_theme_useToken = import_antd2.theme.useToken(), _import_antd2_theme_useToken_token = _import_antd2_theme_useToken.token, colorBgContainer = _import_antd2_theme_useToken_token.colorBgContainer, colorBorderSecondary = _import_antd2_theme_useToken_token.colorBorderSecondary;
    var router = (0, import_router.useRouter)();
    var navItems = useAppLayout().navItems;
    var onClick = function(e) {
        return router.push(e.key);
    };
    return /* @__PURE__ */ import_react2.default.createElement(Sider, {
        width: NAVIGATION_WIDTH,
        style: {
            backgroundColor: colorBgContainer,
            borderRight: "1px solid ".concat(colorBorderSecondary)
        }
    }, /* @__PURE__ */ import_react2.default.createElement(Logo, null), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Divider, {
        style: {
            margin: 0
        }
    }), /* @__PURE__ */ import_react2.default.createElement(import_antd3.Menu, {
        onClick: onClick,
        style: {
            width: NAVIGATION_WIDTH,
            height: "calc(100vh - ".concat(HEADER_HEIGHT, "px)")
        },
        selectedKeys: [
            "/" + router.pathname.split("/")[1]
        ],
        mode: "inline",
        items: navItems
    }));
};
// src/components/app-bar.tsx
var import_antd4 = require("antd");
var import_react3 = __toESM(require("react"));
var Header = import_antd4.Layout.Header;
var headerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    height: HEADER_HEIGHT,
    paddingInline: 50,
    lineHeight: "64px",
    zIndex: 1e4
};
var AppBar = function() {
    var _import_antd4_theme_useToken = import_antd4.theme.useToken(), colorBorderSecondary = _import_antd4_theme_useToken.token.colorBorderSecondary;
    var _useAppLayout = useAppLayout(), appBar = _useAppLayout.appBar, _useAppLayout_appBarStyles = _useAppLayout.appBarStyles, appBarStyles = _useAppLayout_appBarStyles === void 0 ? {} : _useAppLayout_appBarStyles;
    return /* @__PURE__ */ import_react3.default.createElement(Header, {
        style: _object_spread_props(_object_spread({}, headerStyle, appBarStyles), {
            borderBottom: "1px solid ".concat(colorBorderSecondary)
        })
    }, appBar);
};
// src/components/auto-breadcrumbs.tsx
var import_antd5 = require("antd");
// ../../node_modules/@ant-design/icons/es/components/Context.js
var import_react4 = require("react");
var IconContext = /* @__PURE__ */ (0, import_react4.createContext)({});
var Context_default = IconContext;
// ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// ../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
// ../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = false;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true);
        } catch (err) {
            _d = true, _e = err;
        } finally{
            try {
                if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
// ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
// ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// ../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// ../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// ../../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj2) {
        return typeof obj2;
    } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
}
// ../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
// ../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
// ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
// ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
// ../../node_modules/@ant-design/icons/es/components/AntdIcon.js
var React6 = __toESM(require("react"));
var import_classnames = __toESM(require_classnames());
// ../../node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = "100%";
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    if (Math.abs(n - max) < 1e-6) {
        return 1;
    }
    if (max === 360) {
        n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
    } else {
        n = n % max / parseFloat(String(max));
    }
    return n;
}
function isOnePointZero(n) {
    return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
    return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
function pad2(c) {
    return c.length === 1 ? "0" + c : String(c);
}
// ../../node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        g = l;
        b = l;
        r = l;
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
        r: r * 255,
        g: g * 255,
        b: b * 255
    };
}
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0;
    } else {
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return {
        h: h,
        s: s,
        v: v
    };
}
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [
        v,
        q,
        p,
        p,
        t,
        v
    ][mod];
    var g = [
        t,
        v,
        v,
        q,
        p,
        p
    ][mod];
    var b = [
        p,
        p,
        t,
        v,
        v,
        q
    ][mod];
    return {
        r: r * 255,
        g: g * 255,
        b: b * 255
    };
}
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16))
    ];
    if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
}
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
// ../../node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
// ../../node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
    var rgb = {
        r: 0,
        g: 0,
        b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === "string") {
        color = stringInputToObject(color);
    }
    if (typeof color === "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }
        if (Object.prototype.hasOwnProperty.call(color, "a")) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a
    };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    } else if (color === "transparent") {
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
    }
    var match = matchers.rgb.exec(color);
    if (match) {
        return {
            r: match[1],
            g: match[2],
            b: match[3]
        };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return {
            r: match[1],
            g: match[2],
            b: match[3],
            a: match[4]
        };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return {
            h: match[1],
            s: match[2],
            l: match[3]
        };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return {
            h: match[1],
            s: match[2],
            l: match[3],
            a: match[4]
        };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return {
            h: match[1],
            s: match[2],
            v: match[3]
        };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return {
            h: match[1],
            s: match[2],
            v: match[3],
            a: match[4]
        };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? "name" : "hex"
        };
    }
    return false;
}
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
// ../../node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [
    {
        index: 7,
        opacity: 0.15
    },
    {
        index: 6,
        opacity: 0.25
    },
    {
        index: 5,
        opacity: 0.3
    },
    {
        index: 5,
        opacity: 0.45
    },
    {
        index: 5,
        opacity: 0.65
    },
    {
        index: 5,
        opacity: 0.85
    },
    {
        index: 4,
        opacity: 0.9
    },
    {
        index: 3,
        opacity: 0.95
    },
    {
        index: 2,
        opacity: 0.97
    },
    {
        index: 1,
        opacity: 0.98
    }
];
function toHsv(_ref) {
    var r = _ref.r, g = _ref.g, b = _ref.b;
    var hsv = rgbToHsv(r, g, b);
    return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v
    };
}
function toHex(_ref2) {
    var r = _ref2.r, g = _ref2.g, b = _ref2.b;
    return "#".concat(rgbToHex(r, g, b, false));
}
function mix(rgb1, rgb2, amount) {
    var p = amount / 100;
    var rgb = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b
    };
    return rgb;
}
function getHue(hsv, i, light) {
    var hue;
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
        hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    } else {
        hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }
    if (hue < 0) {
        hue += 360;
    } else if (hue >= 360) {
        hue -= 360;
    }
    return hue;
}
function getSaturation(hsv, i, light) {
    if (hsv.h === 0 && hsv.s === 0) {
        return hsv.s;
    }
    var saturation;
    if (light) {
        saturation = hsv.s - saturationStep * i;
    } else if (i === darkColorCount) {
        saturation = hsv.s + saturationStep;
    } else {
        saturation = hsv.s + saturationStep2 * i;
    }
    if (saturation > 1) {
        saturation = 1;
    }
    if (light && i === lightColorCount && saturation > 0.1) {
        saturation = 0.1;
    }
    if (saturation < 0.06) {
        saturation = 0.06;
    }
    return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
    var value;
    if (light) {
        value = hsv.v + brightnessStep1 * i;
    } else {
        value = hsv.v - brightnessStep2 * i;
    }
    if (value > 1) {
        value = 1;
    }
    return Number(value.toFixed(2));
}
function generate(color) {
    var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var patterns = [];
    var pColor = inputToRGB(color);
    for(var i = lightColorCount; i > 0; i -= 1){
        var hsv = toHsv(pColor);
        var colorString = toHex(inputToRGB({
            h: getHue(hsv, i, true),
            s: getSaturation(hsv, i, true),
            v: getValue(hsv, i, true)
        }));
        patterns.push(colorString);
    }
    patterns.push(toHex(pColor));
    for(var _i = 1; _i <= darkColorCount; _i += 1){
        var _hsv = toHsv(pColor);
        var _colorString = toHex(inputToRGB({
            h: getHue(_hsv, _i),
            s: getSaturation(_hsv, _i),
            v: getValue(_hsv, _i)
        }));
        patterns.push(_colorString);
    }
    if (opts.theme === "dark") {
        return darkColorMap.map(function(_ref3) {
            var index = _ref3.index, opacity = _ref3.opacity;
            var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
            return darkColorString;
        });
    }
    return patterns;
}
// ../../node_modules/@ant-design/colors/es/index.js
var presetPrimaryColors = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
    presetPalettes[key] = generate(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5];
    presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
        theme: "dark",
        backgroundColor: "#141414"
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;
// ../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys1(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
// ../../node_modules/@ant-design/icons/es/components/IconBase.js
var React5 = __toESM(require("react"));
// ../../node_modules/@ant-design/icons/es/utils.js
var import_react5 = __toESM(require("react"));
// ../../node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
    preWarningFns.push(fn);
};
function warning(valid, message) {
    if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
        var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
            return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
        }, message);
        if (finalMessage) {
            console.error("Warning: ".concat(finalMessage));
        }
    }
}
function note(valid, message) {
    if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
        var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
            return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
        }, message);
        if (finalMessage) {
            console.warn("Note: ".concat(finalMessage));
        }
    }
}
function resetWarned() {
    warned = {};
}
function call(method, valid, message) {
    if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
    }
}
function warningOnce(valid, message) {
    call(warning, valid, message);
}
function noteOnce(valid, message) {
    call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;
// ../../node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
// ../../node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
    if (!root) {
        return false;
    }
    if (root.contains) {
        return root.contains(n);
    }
    var node = n;
    while(node){
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
// ../../node_modules/rc-util/es/Dom/dynamicCSS.js
var APPEND_ORDER = "data-rc-order";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
    if (mark) {
        return mark.startsWith("data-") ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
}
function getContainer(option) {
    if (option.attachTo) {
        return option.attachTo;
    }
    var head = document.querySelector("head");
    return head || document.body;
}
function getOrder(prepend) {
    if (prepend === "queue") {
        return "prependQueue";
    }
    return prepend ? "prepend" : "append";
}
function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function(node) {
        return node.tagName === "STYLE";
    });
}
function injectCSS(css) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!canUseDom()) {
        return null;
    }
    var csp = option.csp, prepend = option.prepend;
    var styleNode = document.createElement("style");
    styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
    if (csp !== null && csp !== void 0 && csp.nonce) {
        styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
        if (prepend === "queue") {
            var existStyle = findStyles(container).filter(function(node) {
                return [
                    "prepend",
                    "prependQueue"
                ].includes(node.getAttribute(APPEND_ORDER));
            });
            if (existStyle.length) {
                container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
                return styleNode;
            }
        }
        container.insertBefore(styleNode, firstChild);
    } else {
        container.appendChild(styleNode);
    }
    return styleNode;
}
function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var container = getContainer(option);
    return findStyles(container).find(function(node) {
        return node.getAttribute(getMark(option)) === key;
    });
}
function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
        var placeholderStyle = injectCSS("", option);
        var parentNode = placeholderStyle.parentNode;
        containerCache.set(container, parentNode);
        container.removeChild(placeholderStyle);
    }
}
function updateCSS(css, key) {
    var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var container = getContainer(option);
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
        var _option$csp, _option$csp2;
        if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
            var _option$csp3;
            existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
        }
        if (existNode.innerHTML !== css) {
            existNode.innerHTML = css;
        }
        return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
}
// ../../node_modules/rc-util/es/Dom/shadow.js
function getRoot(ele) {
    var _ele$getRootNode;
    return ele === null || ele === void 0 ? void 0 : (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
    return getRoot(ele) !== (ele === null || ele === void 0 ? void 0 : ele.ownerDocument);
}
function getShadowRoot(ele) {
    return inShadow(ele) ? getRoot(ele) : null;
}
// ../../node_modules/@ant-design/icons/es/utils.js
function warning2(valid, message) {
    warning_default(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
    return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
        var val = attrs[key];
        switch(key){
            case "class":
                acc.className = val;
                delete acc.class;
                break;
            default:
                acc[key] = val;
        }
        return acc;
    }, {});
}
function generate2(node, key, rootProps) {
    if (!rootProps) {
        return /* @__PURE__ */ import_react5.default.createElement(node.tag, _objectSpread2({
            key: key
        }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
            return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
        }));
    }
    return /* @__PURE__ */ import_react5.default.createElement(node.tag, _objectSpread2(_objectSpread2({
        key: key
    }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index) {
        return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
}
function getSecondaryColor(primaryColor) {
    return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
        return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [
        twoToneColor
    ];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles2(eleRef) {
    var _useContext = (0, import_react5.useContext)(Context_default), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    (0, import_react5.useEffect)(function() {
        var ele = eleRef.current;
        var shadowRoot = getShadowRoot(ele);
        updateCSS(mergedStyleStr, "@ant-design-icons", {
            prepend: true,
            csp: csp,
            attachTo: shadowRoot
        });
    }, []);
};
// ../../node_modules/@ant-design/icons/es/components/IconBase.js
var _excluded = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor"
];
var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
};
function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
    return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded);
    var svgRef = React5.useRef();
    var colors = twoToneColorPalette;
    if (primaryColor) {
        colors = {
            primaryColor: primaryColor,
            secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
        };
    }
    useInsertStyles(svgRef);
    warning2(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) {
        return null;
    }
    var target = icon;
    if (target && typeof target.icon === "function") {
        target = _objectSpread2(_objectSpread2({}, target), {}, {
            icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
    }
    return generate2(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
        className: className,
        onClick: onClick,
        style: style,
        "data-icon": target.name,
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true"
    }, restProps), {}, {
        ref: svgRef
    }));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;
// ../../node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return IconBase_default.setTwoToneColors({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    });
}
function getTwoToneColor() {
    var colors = IconBase_default.getTwoToneColors();
    if (!colors.calculated) {
        return colors.primaryColor;
    }
    return [
        colors.primaryColor,
        colors.secondaryColor
    ];
}
// ../../node_modules/@ant-design/icons/es/components/AntdIcon.js
var _excluded2 = [
    "className",
    "icon",
    "spin",
    "rotate",
    "tabIndex",
    "onClick",
    "twoToneColor"
];
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
    var _classNames;
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded2);
    var _React$useContext = React6.useContext(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
    var classString = (0, import_classnames.default)(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === void 0 && onClick) {
        iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
    } : void 0;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /* @__PURE__ */ React6.createElement("span", _extends({
        role: "img",
        "aria-label": icon.name
    }, restProps, {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString
    }), /* @__PURE__ */ React6.createElement(IconBase_default, {
        icon: icon,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        style: svgStyle
    }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;
// ../../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
var React7 = __toESM(require("react"));
// ../../node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
var LoadingOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                }
            }
        ]
    },
    "name": "loading",
    "theme": "outlined"
};
var LoadingOutlined_default = LoadingOutlined;
// ../../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
var LoadingOutlined2 = function LoadingOutlined3(props, ref) {
    return /* @__PURE__ */ React7.createElement(AntdIcon_default, _extends({}, props, {
        ref: ref,
        icon: LoadingOutlined_default
    }));
};
if (process.env.NODE_ENV !== "production") {
    LoadingOutlined2.displayName = "LoadingOutlined";
}
var LoadingOutlined_default2 = /* @__PURE__ */ React7.forwardRef(LoadingOutlined2);
// src/components/auto-breadcrumbs.tsx
var import_link2 = __toESM(require("next/link"));
var import_router2 = require("next/router");
var import_react6 = __toESM(require("react"));
var LOADING_BREADCRUMB = "{LOADING}";
var extractKey = function(key) {
    return key.substring(1, key.length - 1);
};
var removeHyphens = function() {
    var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return text.split("-").join(" ");
};
var capitalise = function() {
    var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return ((_object = text[0]) === null || _object === void 0 ? void 0 : (_text__toLocaleUpperCase = _object.toLocaleUpperCase) === null || _text__toLocaleUpperCase === void 0 ? void 0 : _text__toLocaleUpperCase.call(_object)) + text.substring(1);
};
var buildBreadcrumbsFromParts = function() {
    var _ref = _async_to_generator(function(parts, params, paramResolvers, resolveTitle) {
        var links, linkBuild, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, part, title, key, id, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    links = [];
                    linkBuild = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        8,
                        9,
                        10
                    ]);
                    _iterator = parts[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        7
                    ];
                    part = _step.value;
                    title = void 0;
                    if (!(part in paramResolvers)) return [
                        3,
                        4
                    ];
                    key = extractKey(part);
                    id = params[key];
                    linkBuild.push(id);
                    return [
                        4,
                        resolveTitle(part, id)
                    ];
                case 3:
                    title = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    linkBuild.push(part);
                    _state.label = 5;
                case 5:
                    links.push({
                        title: title || capitalise(removeHyphens(part)),
                        href: "/" + linkBuild.join("/")
                    });
                    _state.label = 6;
                case 6:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        10
                    ];
                case 9:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 10:
                    return [
                        2,
                        links
                    ];
            }
        });
    });
    return function buildBreadcrumbsFromParts(parts, params, paramResolvers, resolveTitle) {
        return _ref.apply(this, arguments);
    };
}();
var loadingIcon = /* @__PURE__ */ import_react6.default.createElement(LoadingOutlined_default2, {
    style: {
        fontSize: 16
    },
    spin: true
});
var AutoBreadcrumbs = function() {
    var router = (0, import_router2.useRouter)();
    var breadcrumbResolvers = useAppLayout().breadcrumbResolvers;
    var path = router.pathname.substring(1);
    var parts = path.split("/");
    var _ref = _sliced_to_array((0, import_react6.useState)([]), 2), crumbs = _ref[0], setCrumbs = _ref[1];
    (0, import_react6.useEffect)(function() {
        var params = router.query;
        buildBreadcrumbsFromParts(parts, params, breadcrumbResolvers, /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    LOADING_BREADCRUMB
                ];
            });
        })).then(setCrumbs).then(function() {
            return buildBreadcrumbsFromParts(parts, params, breadcrumbResolvers, function() {
                var _ref = _async_to_generator(function(part, id) {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            breadcrumbResolvers[part](id)
                        ];
                    });
                });
                return function(part, id) {
                    return _ref.apply(this, arguments);
                };
            }());
        }).then(setCrumbs);
    }, [
        router.asPath
    ]);
    if (!crumbs.length || router.pathname === "/") {
        return null;
    }
    return /* @__PURE__ */ import_react6.default.createElement(import_antd5.Breadcrumb, {
        items: crumbs.map(function(crumb, index) {
            return {
                title: index === crumbs.length - 1 ? crumb.title === LOADING_BREADCRUMB ? loadingIcon : crumb.title : /* @__PURE__ */ import_react6.default.createElement(import_link2.default, {
                    href: crumb.href
                }, crumb.title)
            };
        })
    });
};
// src/components/wrapper.tsx
var Content = import_antd6.Layout.Content;
var Wrapper = function(param) {
    var children = param.children;
    var title = useAppLayout().title;
    return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(import_head.default, null, /* @__PURE__ */ import_react7.default.createElement("title", null, "BitMetro | ", title)), /* @__PURE__ */ import_react7.default.createElement(import_antd6.Layout, null, /* @__PURE__ */ import_react7.default.createElement(Navigation, null), /* @__PURE__ */ import_react7.default.createElement(import_antd6.Layout, null, /* @__PURE__ */ import_react7.default.createElement(AppBar, null), /* @__PURE__ */ import_react7.default.createElement(Content, null, /* @__PURE__ */ import_react7.default.createElement(import_antd6.Space, {
        direction: "vertical",
        style: {
            width: "100%",
            padding: 12
        }
    }, /* @__PURE__ */ import_react7.default.createElement(AutoBreadcrumbs, null), /* @__PURE__ */ import_react7.default.createElement(import_antd7.Card, null, children))))));
};
// src/contexts/layout.context.tsx
var import_react8 = __toESM(require("react"));
var AppLayoutContext = import_react8.default.createContext({
    title: "",
    logo: "",
    logoAlt: "",
    homeUrl: "",
    navItems: [],
    breadcrumbResolvers: {},
    appBar: null
});
var AppLayoutProvider = function(_param) {
    var children = _param.children, props = _object_without_properties(_param, [
        "children"
    ]);
    return /* @__PURE__ */ import_react8.default.createElement("div", {
        style: {
            width: "100%"
        }
    }, /* @__PURE__ */ import_react8.default.createElement(AppLayoutContext.Provider, {
        value: props
    }, /* @__PURE__ */ import_react8.default.createElement(Wrapper, null, children)));
};
var useAppLayout = function() {
    return import_react8.default.useContext(AppLayoutContext);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AppLayoutProvider: AppLayoutProvider,
    createNavMenuItem: createNavMenuItem,
    useAppLayout: useAppLayout
}); /*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/ 
