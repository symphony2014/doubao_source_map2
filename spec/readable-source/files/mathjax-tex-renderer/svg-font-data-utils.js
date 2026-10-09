// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'fontDataDirectionConstants'
// - Resolved require(385303) to 'font-data-direction-constants'
// - Resolved require(385303) to 'font-data-direction-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 821082
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
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  var o = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var i = this && this.__exportStar || function (t, e) {
    for (var Q in t) {
      if (Q !== "default" && !Object.prototype.hasOwnProperty.call(e, Q)) {
        o(e, t, Q);
      }
    }
  };
  var a = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.AddPaths = exports.SVGFontData = undefined;
  var fontDataDirectionConstants = require("font-data-direction-constants") /*id: 385303*/;
  i(require("font-data-direction-constants") /*id: 385303*/, exports);
  var s = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.charOptions = function (e, Q) {
      return t.charOptions.call(this, e, Q);
    };
    e.OPTIONS = n(n({}, fontDataDirectionConstants.FontData.OPTIONS), {
      dynamicPrefix: "./output/svg/fonts"
    });
    e.JAX = "SVG";
    return e;
  }(fontDataDirectionConstants.FontData);
  exports.SVGFontData = s;
  exports.AddPaths = function (t, e, Q) {
    var r;
    var T;
    var n;
    var o;
    try {
      var i = a(Object.keys(e));
      var u = i.next();
      for (; !u.done; u = i.next()) {
        var l = u.value;
        var c = parseInt(l);
        s.charOptions(t, c).p = e[c];
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        if (u && !u.done && (T = i.return)) {
          T.call(i);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    try {
      var p = a(Object.keys(Q));
      var h = p.next();
      for (; !h.done; h = p.next()) {
        var l = h.value;
        var c = parseInt(l);
        s.charOptions(t, c).c = Q[c];
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        if (h && !h.done && (o = p.return)) {
          o.call(p);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return t;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}