// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y2' to 'createActionType'
// - Renamed export 'jZ' to 'createReducerHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 655928
         */
module.exports = function (module, exports, require) {
  var invariantErrorUtil = require("invariant-error-util") /*id: 827168*/;
  var i = invariantErrorUtil;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  function v(t) {
    return isStringTypeCheck.isString(t) || isFunctionUtil_1.isFunction(t) || isSymbolUtil.isSymbol(t);
  }
  function y() {
    var t = arguments.length;
    var e = Array(t);
    var n = 0;
    for (; n < t; n++) {
      e[n] = arguments[n];
    }
    i(!isEmptyUtil.isEmpty(e) && e.every(v), "Expected action types to be strings, symbols, or action creators");
    var r = e.map(safeValueToStringUtil.safeToString).join("||");
    return {
      toString: function () {
        return r;
      }
    };
  }
  function g(t, e) {
    if (Array.isArray(t)) {
      return t;
    }
    if (Symbol.iterator in Object(t)) {
      return function (t, e) {
        var n = [];
        var r = true;
        var i = false;
        var o = undefined;
        try {
          var s;
          var a = t[Symbol.iterator]();
          for (; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = true);
        } catch (t) {
          i = true;
          o = t;
        } finally {
          try {
            if (!r && a.return) {
              a.return();
            }
          } finally {
            if (i) {
              throw o;
            }
          }
        }
        return n;
      }(t, e);
    }
    throw TypeError("Invalid attempt to destructure non-iterable instance");
  }
  var mapTypeCheckUtil = require("map-type-check-util") /*id: 329788*/;
  var functionComposer = require("function-composer") /*id: 623126*/;
  var b = functionComposer;
  function E(t) {
    if (mapTypeCheckUtil.isMap(t)) {
      return Array.from(t.keys());
    }
    if (typeof Reflect != "undefined" && typeof Reflect.ownKeys == "function") {
      return Reflect.ownKeys(t);
    }
    var e = Object.getOwnPropertyNames(t);
    if (typeof Object.getOwnPropertySymbols == "function") {
      e = e.concat(Object.getOwnPropertySymbols(t));
    }
    return e;
  }
  function w(t) {
    return function e(n, r = {}) {
      var i = r.namespace;
      var o = i === undefined ? "/" : i;
      var s = r.prefix;
      var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var u = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      E(n).forEach(function (r) {
        var i;
        i = u ? "" + u + o + r : r;
        var c = u || !s ? i : "" + s + o + i;
        var l = mapTypeCheckUtil.isMap(n) ? n.get(r) : n[r];
        if (t(l)) {
          e(l, {
            namespace: o,
            prefix: s
          }, a, c);
        } else {
          a[c] = l;
        }
      });
      return a;
    };
  }
  w(isPlainObjectUtil.isPlainObject);
  var S = w(function (t) {
    var e;
    var n;
    return (isPlainObjectUtil.isPlainObject(t) || mapTypeCheckUtil.isMap(t)) && (n = (e = E(t)).every(function (t) {
      return t === "next" || t === "throw";
    }), !e.length || !(e.length <= 2) || !n);
  });
  function T(t, e, n = {}) {
    i(isPlainObjectUtil.isPlainObject(t) || mapTypeCheckUtil.isMap(t), "Expected handlers to be a plain object.");
    var r = S(t, n);
    var p = E(r).map(function (t) {
      return function (t, e = identityFunctionUtil_1.identity) {
        var n = arguments[2];
        var r = t.toString().split("||");
        i(!isUndefinedCheck.isUndefined(n), "defaultState for reducer handling " + r.join(", ") + " should be defined");
        i(isFunctionUtil_1.isFunction(e) || isPlainObjectUtil.isPlainObject(e), "Expected reducer to be a function or object with next and throw reducers");
        var p = g(isFunctionUtil_1.isFunction(e) ? [e, e] : [e.next, e.throw].map(function (t) {
          if (isNullishCheck.isNil(t)) {
            return identityFunctionUtil_1.identity;
          } else {
            return t;
          }
        }), 2);
        var h = p[0];
        var f = p[1];
        return function (t = n) {
          var e = arguments[1];
          var i = e.type;
          if (i && collectionIncludesUtil.includes(r, i.toString())) {
            return (e.error === true ? f : h)(t, e);
          } else {
            return t;
          }
        };
      }(t, mapTypeCheckUtil.isMap(r) ? r.get(t) : r[t], e);
    });
    var h = b.apply(undefined, function (t) {
      if (!Array.isArray(t)) {
        return Array.from(t);
      }
      var e = 0;
      var n = Array(t.length);
      for (; e < t.length; e++) {
        n[e] = t[e];
      }
      return n;
    }(p));
    return function (t = e) {
      var n = arguments[1];
      return h(t, n);
    };
  }
  require.d(exports, {
    createActionType: function () {
      return y;
    },
    createReducerHandler: function () {
      return T;
    }
  });
}