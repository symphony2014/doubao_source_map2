// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'a' to 'mathOperatorMixin'
// - Resolved require(334260) to 'math-operator-mixin'
// - Renamed variable 'u' to 'mathmlOperatorNode'
// - Resolved require(903546) to 'mathml-operator-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 835786
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
  var n = this && this.__values || function (t) {
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
  var o = this && this.__read || function (t, e) {
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
  exports.SVGmo = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var mathOperatorMixin = require("math-operator-mixin") /*id: 334260*/;
  var mathmlOperatorNode = require("mathml-operator-node") /*id: 903546*/;
  var s = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.node.attributes;
      var Q = e.get("symmetric") && this.stretch.dir !== 2;
      var r = this.stretch.dir !== 0;
      if (r && this.size === null) {
        this.getStretchedVariant([]);
      }
      var T = this.standardSVGnode(t);
      if (r && this.size < 0) {
        this.stretchSVG();
      } else {
        var n = Q || e.get("largeop") ? this.fixed(this.getCenterOffset()) : "0";
        var o = this.node.getProperty("mathaccent") ? this.fixed(this.getAccentOffset()) : "0";
        if (n !== "0" || o !== "0") {
          this.adaptor.setAttribute(T, "transform", `translate(${o} ${n})`);
        }
        this.addChildren(T);
      }
    };
    e.prototype.stretchSVG = function () {
      var t = this.stretch.stretch;
      var e = this.getStretchVariants();
      var Q = this.getBBox();
      if (this.stretch.dir === 1) {
        this.stretchVertical(t, e, Q);
      } else {
        this.stretchHorizontal(t, e, Q);
      }
    };
    e.prototype.getStretchVariants = function () {
      var t;
      var e;
      var Q = this.stretch.c || this.getText().codePointAt(0);
      var r = [];
      try {
        var T = n(this.stretch.stretch.keys());
        var o = T.next();
        for (; !o.done; o = T.next()) {
          var i = o.value;
          r[i] = this.font.getStretchVariant(Q, i);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (o && !o.done && (e = T.return)) {
            e.call(T);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return r;
    };
    e.prototype.stretchVertical = function (t, e, Q) {
      var r = Q.h;
      var T = Q.d;
      var n = Q.w;
      var i = this.addTop(t[0], e[0], r, n);
      var a = this.addBot(t[2], e[2], T, n);
      if (t.length === 4) {
        var u = o(this.addMidV(t[3], e[3], n), 2);
        var s = u[0];
        var l = u[1];
        this.addExtV(t[1], e[1], r, 0, i, s, n);
        this.addExtV(t[1], e[1], 0, T, l, a, n);
      } else {
        this.addExtV(t[1], e[1], r, T, i, a, n);
      }
    };
    e.prototype.stretchHorizontal = function (t, e, Q) {
      var r = Q.w;
      var T = this.addLeft(t[0], e[0]);
      var n = this.addRight(t[2], e[2], r);
      if (t.length === 4) {
        var i = o(this.addMidH(t[3], e[3], r), 2);
        var a = i[0];
        var u = i[1];
        var s = r / 2;
        this.addExtH(t[1], e[1], s, T, s - a);
        this.addExtH(t[1], e[1], s, u - s, n, s);
      } else {
        this.addExtH(t[1], e[1], r, T, n);
      }
    };
    e.prototype.getChar = function (t, e) {
      var Q = this.font.getChar(e, t) || [0, 0, 0, null];
      return [Q[0], Q[1], Q[2], Q[3] || {}];
    };
    e.prototype.addGlyph = function (t, e, Q, r, T = null) {
      return this.placeChar(t, Q, r, T || this.element, e);
    };
    e.prototype.addTop = function (t, e, Q, r) {
      if (!t) {
        return 0;
      }
      var T = o(this.getChar(t, e), 3);
      var n = T[0];
      var i = T[1];
      var a = T[2];
      this.addGlyph(t, e, (r - a) / 2, Q - n);
      return n + i;
    };
    e.prototype.addExtV = function (t, e, Q, r, T, n, i) {
      var a = this;
      if (t) {
        T = Math.max(0, T - 0.1);
        n = Math.max(0, n - 0.1);
        var u = this.adaptor;
        var s = o(this.getChar(t, e), 3);
        var l = s[0];
        var c = s[1];
        var p = s[2];
        var h = Q + r - T - n;
        var f = h * 1.5 / (l + c);
        var d = (f * (l - c) - h) / 2;
        if (!(h <= 0)) {
          var D = this.svg("svg", {
            width: this.fixed(p),
            height: this.fixed(h),
            y: this.fixed(n - r),
            x: this.fixed((i - p) / 2),
            viewBox: [0, d, p, h].map(function (t) {
              return a.fixed(t);
            }).join(" ")
          });
          this.addGlyph(t, e, 0, 0, D);
          var L = u.lastChild(D);
          u.setAttribute(L, "transform", `scale(1,${this.jax.fixed(f)})`);
          u.append(this.element, D);
        }
      }
    };
    e.prototype.addBot = function (t, e, Q, r) {
      if (!t) {
        return 0;
      }
      var T = o(this.getChar(t, e), 3);
      var n = T[0];
      var i = T[1];
      var a = T[2];
      this.addGlyph(t, e, (r - a) / 2, i - Q);
      return n + i;
    };
    e.prototype.addMidV = function (t, e, Q) {
      if (!t) {
        return [0, 0];
      }
      var r = o(this.getChar(t, e), 3);
      var T = r[0];
      var n = r[1];
      var i = r[2];
      var a = (n - T) / 2 + this.font.params.axis_height;
      this.addGlyph(t, e, (Q - i) / 2, a);
      return [T + a, n - a];
    };
    e.prototype.addLeft = function (t, e) {
      if (t) {
        return this.addGlyph(t, e, 0, 0);
      } else {
        return 0;
      }
    };
    e.prototype.addExtH = function (t, e, Q, r, T, n) {
      var i = this;
      if (n === undefined) {
        n = 0;
      }
      if (t) {
        T = Math.max(0, T - 0.1);
        r = Math.max(0, r - 0.1);
        var a = this.adaptor;
        var u = o(this.getChar(t, e), 3);
        var s = u[0];
        var l = u[1];
        var c = u[2];
        var p = Q - r - T;
        var h = s + l + 0.2;
        var f = p / c * 1.5;
        var d = -(l + 0.1);
        if (!(p <= 0)) {
          var D = this.svg("svg", {
            width: this.fixed(p),
            height: this.fixed(h),
            x: this.fixed(n + r),
            y: this.fixed(d),
            viewBox: [(f * c - p) / 2, d, p, h].map(function (t) {
              return i.fixed(t);
            }).join(" ")
          });
          this.addGlyph(t, e, 0, 0, D);
          var L = a.lastChild(D);
          a.setAttribute(L, "transform", "scale(" + this.jax.fixed(f) + ",1)");
          a.append(this.element, D);
        }
      }
    };
    e.prototype.addRight = function (t, e, Q) {
      if (!t) {
        return 0;
      }
      var r = this.getChar(t, e)[2];
      return this.addGlyph(t, e, Q - r, 0);
    };
    e.prototype.addMidH = function (t, e, Q) {
      if (!t) {
        return [0, 0];
      }
      var r = this.getChar(t, e)[2];
      this.addGlyph(t, e, (Q - r) / 2, 0);
      return [(Q - r) / 2, (Q + r) / 2];
    };
    e.kind = mathmlOperatorNode.MmlMo.prototype.kind;
    return e;
  }(mathOperatorMixin.CommonMoMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmo = s;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}