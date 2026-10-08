// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'observableSymbolPolyfill'
// - Resolved require(991432) to 'observable-symbol-polyfill'
// - Updated imported property 'Z' to 'observableSymbol' (module 991432)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 76673
         */
module.exports = function (module, exports, require) {
  var observableSymbolPolyfill = require("observable-symbol-polyfill") /*id: 991432*/;
  var i = {
    INIT: "@@redux/INIT" + Math.random().toString(36).substring(7).split("").join("."),
    REPLACE: "@@redux/REPLACE" + Math.random().toString(36).substring(7).split("").join(".")
  };
  var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
    return typeof t;
  } : function (t) {
    if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof t;
    }
  };
  var s = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          t[r] = n[r];
        }
      }
    }
    return t;
  };
  function a(t, e, n) {
    if (typeof e == "function" && n === undefined) {
      n = e;
      e = undefined;
    }
    if (n !== undefined) {
      if (typeof n != "function") {
        throw Error("Expected the enhancer to be a function.");
      }
      return n(a)(t, e);
    }
    if (typeof t != "function") {
      throw Error("Expected the reducer to be a function.");
    }
    var s;
    var u = t;
    var c = e;
    var l = [];
    var p = l;
    var h = false;
    function f() {
      if (p === l) {
        p = l.slice();
      }
    }
    function d() {
      if (h) {
        throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
      }
      return c;
    }
    function v(t) {
      if (typeof t != "function") {
        throw Error("Expected the listener to be a function.");
      }
      if (h) {
        throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
      }
      var e = true;
      f();
      p.push(t);
      return function () {
        if (e) {
          if (h) {
            throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
          }
          e = false;
          f();
          var n = p.indexOf(t);
          p.splice(n, 1);
        }
      };
    }
    function y(t) {
      if (!function (t) {
        if ((t === undefined ? "undefined" : o(t)) !== "object" || t === null) {
          return false;
        }
        for (var e = t; Object.getPrototypeOf(e) !== null;) {
          e = Object.getPrototypeOf(e);
        }
        return Object.getPrototypeOf(t) === e;
      }(t)) {
        throw Error("Actions must be plain objects. Use custom middleware for async actions.");
      }
      if (t.type === undefined) {
        throw Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");
      }
      if (h) {
        throw Error("Reducers may not dispatch actions.");
      }
      try {
        h = true;
        c = u(c, t);
      } finally {
        h = false;
      }
      var e = l = p;
      var n = 0;
      for (; n < e.length; n++) {
        e[n]();
      }
      return t;
    }
    y({
      type: i.INIT
    });
    (s = {
      dispatch: y,
      subscribe: v,
      getState: d,
      replaceReducer: function (t) {
        if (typeof t != "function") {
          throw Error("Expected the nextReducer to be a function.");
        }
        u = t;
        y({
          type: i.REPLACE
        });
      }
    })[observableSymbolPolyfill.observableSymbol] = function () {
      var t;
      (t = {
        subscribe: function (t) {
          if ((t === undefined ? "undefined" : o(t)) !== "object" || t === null) {
            throw TypeError("Expected the observer to be an object.");
          }
          function e() {
            if (t.next) {
              t.next(d());
            }
          }
          e();
          return {
            unsubscribe: v(e)
          };
        }
      })[observableSymbolPolyfill.observableSymbol] = function () {
        return this;
      };
      return t;
    };
    return s;
  }
  function u(t) {
    var e = Object.keys(t);
    var n = {};
    var r = 0;
    for (; r < e.length; r++) {
      var o = e[r];
      if (typeof t[o] == "function") {
        n[o] = t[o];
      }
    }
    var s = Object.keys(n);
    var a = undefined;
    try {
      (function (t) {
        Object.keys(t).forEach(function (e) {
          var n = t[e];
          if (n(undefined, {
            type: i.INIT
          }) === undefined) {
            throw Error("Reducer \"" + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
          }
          if (n(undefined, {
            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
          }) === undefined) {
            throw Error("Reducer \"" + e + "\" returned undefined when probed with a random type. Don't try to handle " + i.INIT + " or other actions in \"redux/*\" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
          }
        });
      })(n);
    } catch (t) {
      a = t;
    }
    return function (t = {}) {
      var e = arguments[1];
      if (a) {
        throw a;
      }
      var r = false;
      var i = {};
      var o = 0;
      for (; o < s.length; o++) {
        var u = s[o];
        var c = n[u];
        var l = t[u];
        var p = c(l, e);
        if (p === undefined) {
          throw Error(function (t, e) {
            var n = e && e.type;
            return "Given " + (n && "action \"" + String(n) + "\"" || "an action") + ", reducer \"" + t + "\" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.";
          }(u, e));
        }
        i[u] = p;
        r = r || p !== l;
      }
      if (r) {
        return i;
      } else {
        return t;
      }
    };
  }
  function c(t, e) {
    return function () {
      return e(t.apply(this, arguments));
    };
  }
  function l(t, e) {
    if (typeof t == "function") {
      return c(t, e);
    }
    if ((t === undefined ? "undefined" : o(t)) !== "object" || t === null) {
      throw Error("bindActionCreators expected an object or a function, instead received " + (t === null ? "null" : t === undefined ? "undefined" : o(t)) + ". Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    }
    var n = Object.keys(t);
    var r = {};
    var i = 0;
    for (; i < n.length; i++) {
      var s = n[i];
      var a = t[s];
      if (typeof a == "function") {
        r[s] = c(a, e);
      }
    }
    return r;
  }
  function p() {
    var t = arguments.length;
    var e = Array(t);
    var n = 0;
    for (; n < t; n++) {
      e[n] = arguments[n];
    }
    if (e.length === 0) {
      return function (t) {
        return t;
      };
    } else if (e.length === 1) {
      return e[0];
    } else {
      return e.reduce(function (t, e) {
        return function () {
          return t(e.apply(undefined, arguments));
        };
      });
    }
  }
  function h() {
    var t = arguments.length;
    var e = Array(t);
    var n = 0;
    for (; n < t; n++) {
      e[n] = arguments[n];
    }
    return function (t) {
      return function () {
        var n = arguments.length;
        var r = Array(n);
        var i = 0;
        for (; i < n; i++) {
          r[i] = arguments[i];
        }
        var o = t.apply(undefined, r);
        function a() {
          throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
        }
        var u = {
          getState: o.getState,
          dispatch: function () {
            return a.apply(undefined, arguments);
          }
        };
        var c = e.map(function (t) {
          return t(u);
        });
        a = p.apply(undefined, c)(o.dispatch);
        return s({}, o, {
          dispatch: a
        });
      };
    };
  }
  require.r(exports);
  require.d(exports, {
    __DO_NOT_USE__ActionTypes: function () {
      return i;
    },
    applyMiddleware: function () {
      return h;
    },
    bindActionCreators: function () {
      return l;
    },
    combineReducers: function () {
      return u;
    },
    compose: function () {
      return p;
    },
    createStore: function () {
      return a;
    }
  });
}