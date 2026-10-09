// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 861629
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var o = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.CommonMactionMixin = exports.TooltipData = undefined;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  exports.TooltipData = {
    dx: ".2em",
    dy: ".1em",
    postDelay: 600,
    clearDelay: 100,
    hoverTimer: new Map(),
    clearTimer: new Map(),
    stopTimers: function (t, e) {
      if (e.clearTimer.has(t)) {
        clearTimeout(e.clearTimer.get(t));
        e.clearTimer.delete(t);
      }
      if (e.hoverTimer.has(t)) {
        clearTimeout(e.hoverTimer.get(t));
        e.hoverTimer.delete(t);
      }
    }
  };
  exports.CommonMactionMixin = function (t) {
    return function (t) {
      function Q() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, o([], n(e), false)) || this;
        var T = r.constructor.actions;
        var i = r.node.attributes.get("actiontype");
        var a = n(T.get(i) || [function (t, e) {}, {}], 2);
        var u = a[0];
        var s = a[1];
        r.action = u;
        r.data = s;
        r.getParameters();
        return r;
      }
      T(Q, t);
      Object.defineProperty(Q.prototype, "selected", {
        get: function () {
          var t = this.node.attributes.get("selection");
          var e = Math.max(1, Math.min(this.childNodes.length, t)) - 1;
          return this.childNodes[e] || this.wrap(this.node.selected);
        },
        enumerable: false,
        configurable: true
      });
      Q.prototype.getParameters = function () {
        var t = this.node.attributes.get("data-offsets");
        var Q = n(stringUtils_1.split(t || ""), 2);
        var r = Q[0];
        var T = Q[1];
        this.dx = this.length2em(r || exports.TooltipData.dx);
        this.dy = this.length2em(T || exports.TooltipData.dy);
      };
      Q.prototype.computeBBox = function (t, e = false) {
        t.updateFrom(this.selected.getOuterBBox());
        this.selected.setChildPWidths(e);
      };
      return Q;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}