// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 748283
         */
module.exports = function (module, exports, require) {
  var Q;
  var r = this && this.__extends || (Q = function (t, e) {
    return (Q = Object.setPrototypeOf || {
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
    function r() {
      this.constructor = t;
    }
    Q(t, e);
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
  });
  var T = this && this.__read || function (t, e) {
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
  var n = this && this.__spreadArray || function (t, e, Q) {
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
  exports.CommonMunderoverMixin = exports.CommonMoverMixin = exports.CommonMunderMixin = undefined;
  exports.CommonMunderMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, n([], T(e), false)) || this;
        r.stretchChildren();
        return r;
      }
      r(e, t);
      Object.defineProperty(e.prototype, "scriptChild", {
        get: function () {
          return this.childNodes[this.node.under];
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.computeBBox = function (e, Q = false) {
        if (this.hasMovableLimits()) {
          t.prototype.computeBBox.call(this, e, Q);
          return;
        }
        e.empty();
        var r = this.baseChild.getOuterBBox();
        var n = this.scriptChild.getOuterBBox();
        var o = this.getUnderKV(r, n)[1];
        var i = this.isLineBelow ? 0 : this.getDelta(true);
        var a = T(this.getDeltaW([r, n], [0, -i]), 2);
        var u = a[0];
        var s = a[1];
        e.combine(r, u, 0);
        e.combine(n, s, o);
        e.d += this.font.params.big_op_spacing5;
        e.clean();
        this.setChildPWidths(Q);
      };
      return e;
    }(t);
  };
  exports.CommonMoverMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, n([], T(e), false)) || this;
        r.stretchChildren();
        return r;
      }
      r(e, t);
      Object.defineProperty(e.prototype, "scriptChild", {
        get: function () {
          return this.childNodes[this.node.over];
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.computeBBox = function (e) {
        if (this.hasMovableLimits()) {
          t.prototype.computeBBox.call(this, e);
          return;
        }
        e.empty();
        var Q = this.baseChild.getOuterBBox();
        var r = this.scriptChild.getOuterBBox();
        if (this.node.attributes.get("accent")) {
          Q.h = Math.max(Q.h, this.font.params.x_height * Q.scale);
        }
        var n = this.getOverKU(Q, r)[1];
        var o = this.isLineAbove ? 0 : this.getDelta();
        var i = T(this.getDeltaW([Q, r], [0, o]), 2);
        var a = i[0];
        var u = i[1];
        e.combine(Q, a, 0);
        e.combine(r, u, n);
        e.h += this.font.params.big_op_spacing5;
        e.clean();
      };
      return e;
    }(t);
  };
  exports.CommonMunderoverMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, n([], T(e), false)) || this;
        r.stretchChildren();
        return r;
      }
      r(e, t);
      Object.defineProperty(e.prototype, "underChild", {
        get: function () {
          return this.childNodes[this.node.under];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "overChild", {
        get: function () {
          return this.childNodes[this.node.over];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "subChild", {
        get: function () {
          return this.underChild;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "supChild", {
        get: function () {
          return this.overChild;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.computeBBox = function (e) {
        if (this.hasMovableLimits()) {
          t.prototype.computeBBox.call(this, e);
          return;
        }
        e.empty();
        var Q = this.overChild.getOuterBBox();
        var r = this.baseChild.getOuterBBox();
        var n = this.underChild.getOuterBBox();
        if (this.node.attributes.get("accent")) {
          r.h = Math.max(r.h, this.font.params.x_height * r.scale);
        }
        var o = this.getOverKU(r, Q)[1];
        var i = this.getUnderKV(r, n)[1];
        var a = this.getDelta();
        var u = T(this.getDeltaW([r, n, Q], [0, this.isLineBelow ? 0 : -a, this.isLineAbove ? 0 : a]), 3);
        var s = u[0];
        var l = u[1];
        var c = u[2];
        e.combine(r, s, 0);
        e.combine(Q, c, o);
        e.combine(n, l, i);
        var p = this.font.params.big_op_spacing5;
        e.h += p;
        e.d += p;
        e.clean();
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}