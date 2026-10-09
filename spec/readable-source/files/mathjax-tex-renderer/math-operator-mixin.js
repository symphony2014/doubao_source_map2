// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'cssBoundingBoxClass'
// - Resolved require(761002) to 'css-bounding-box-class'
// - Renamed variable 'l' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// - Renamed variable 'c' to 'fontDataDirectionConstants'
// - Resolved require(385303) to 'font-data-direction-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 334260
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n = this && this.__extends || (r = function (t, e) {
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
  var o = this && this.__assign || function () {
    return (o = Object.assign || function (t) {
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
  var i = this && this.__read || function (t, e) {
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
  var a = this && this.__spreadArray || function (t, e, Q) {
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
  var u = this && this.__values || function (t) {
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
  exports.CommonMoMixin = exports.DirectionVH = undefined;
  var cssBoundingBoxClass = require("css-bounding-box-class") /*id: 761002*/;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  var fontDataDirectionConstants = require("font-data-direction-constants") /*id: 385303*/;
  (T = {})[1] = "v";
  T[2] = "h";
  exports.DirectionVH = T;
  exports.CommonMoMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, a([], i(e), false)) || this;
        r.size = null;
        r.isAccent = r.node.isAccent;
        return r;
      }
      n(e, t);
      e.prototype.computeBBox = function (t, e = false) {
        this.protoBBox(t);
        if (this.node.attributes.get("symmetric") && this.stretch.dir !== 2) {
          var Q = this.getCenterOffset(t);
          t.h += Q;
          t.d -= Q;
        }
        if (this.node.getProperty("mathaccent") && (this.stretch.dir === 0 || this.size >= 0)) {
          t.w = 0;
        }
      };
      e.prototype.protoBBox = function (e) {
        var Q = this.stretch.dir !== 0;
        if (Q && this.size === null) {
          this.getStretchedVariant([0]);
        }
        if (!Q || !(this.size < 0)) {
          t.prototype.computeBBox.call(this, e);
          this.copySkewIC(e);
        }
      };
      e.prototype.getAccentOffset = function () {
        var t = cssBoundingBoxClass.BBox.empty();
        this.protoBBox(t);
        return -t.w / 2;
      };
      e.prototype.getCenterOffset = function (e = null) {
        if (!e) {
          e = cssBoundingBoxClass.BBox.empty();
          t.prototype.computeBBox.call(this, e);
        }
        return (e.h + e.d) / 2 + this.font.params.axis_height - e.h;
      };
      e.prototype.getVariant = function () {
        if (this.node.attributes.get("largeop")) {
          this.variant = this.node.attributes.get("displaystyle") ? "-largeop" : "-smallop";
          return;
        }
        if (!this.node.attributes.getExplicit("mathvariant") && this.node.getProperty("pseudoscript") === false) {
          this.variant = "-tex-variant";
          return;
        }
        t.prototype.getVariant.call(this);
      };
      e.prototype.canStretch = function (t) {
        if (this.stretch.dir !== 0) {
          return this.stretch.dir === t;
        }
        if (!this.node.attributes.get("stretchy")) {
          return false;
        }
        var e = this.getText();
        if (Array.from(e).length !== 1) {
          return false;
        }
        var Q = this.font.getDelimiter(e.codePointAt(0));
        this.stretch = Q && Q.dir === t ? Q : fontDataDirectionConstants.NOSTRETCH;
        return this.stretch.dir !== 0;
      };
      e.prototype.getStretchedVariant = function (t, e) {
        var Q;
        var r;
        if (e === undefined) {
          e = false;
        }
        if (this.stretch.dir !== 0) {
          var T = this.getWH(t);
          var n = this.getSize("minsize", 0);
          var i = this.getSize("maxsize", Infinity);
          var a = this.node.getProperty("mathaccent");
          T = Math.max(n, Math.min(i, T));
          var s = this.font.params.delimiterfactor / 1000;
          var l = this.font.params.delimitershortfall;
          var c = n || e ? T : a ? Math.min(T / s, T + l) : Math.max(T * s, T - l);
          var p = this.stretch;
          var h = p.c || this.getText().codePointAt(0);
          var f = 0;
          if (p.sizes) {
            try {
              var d = u(p.sizes);
              var D = d.next();
              for (; !D.done; D = d.next()) {
                if (D.value >= c) {
                  if (a && f) {
                    f--;
                  }
                  this.variant = this.font.getSizeVariant(h, f);
                  this.size = f;
                  if (p.schar && p.schar[f]) {
                    this.stretch = o(o({}, this.stretch), {
                      c: p.schar[f]
                    });
                  }
                  return;
                }
                f++;
              }
            } catch (t) {
              Q = {
                error: t
              };
            } finally {
              try {
                if (D && !D.done && (r = d.return)) {
                  r.call(d);
                }
              } finally {
                if (Q) {
                  throw Q.error;
                }
              }
            }
          }
          if (p.stretch) {
            this.size = -1;
            this.invalidateBBox();
            this.getStretchBBox(t, this.checkExtendedHeight(T, p), p);
          } else {
            this.variant = this.font.getSizeVariant(h, f - 1);
            this.size = f - 1;
          }
        }
      };
      e.prototype.getSize = function (t, e) {
        var Q = this.node.attributes;
        if (Q.isSet(t)) {
          e = this.length2em(Q.get(t), 1, 1);
        }
        return e;
      };
      e.prototype.getWH = function (t) {
        if (t.length === 0) {
          return 0;
        }
        if (t.length === 1) {
          return t[0];
        }
        var e = i(t, 2);
        var Q = e[0];
        var r = e[1];
        var T = this.font.params.axis_height;
        if (this.node.attributes.get("symmetric")) {
          return Math.max(Q - T, r + T) * 2;
        } else {
          return Q + r;
        }
      };
      e.prototype.getStretchBBox = function (t, e, Q) {
        if (Q.hasOwnProperty("min") && Q.min > e) {
          e = Q.min;
        }
        var r;
        var T = i(Q.HDW, 3);
        var n = T[0];
        var o = T[1];
        var a = T[2];
        if (this.stretch.dir === 1) {
          n = (r = i(this.getBaseline(t, e, Q), 2))[0];
          o = r[1];
        } else {
          a = e;
        }
        this.bbox.h = n;
        this.bbox.d = o;
        this.bbox.w = a;
      };
      e.prototype.getBaseline = function (t, e, Q) {
        var r = t.length === 2 && t[0] + t[1] === e;
        var T = this.node.attributes.get("symmetric");
        var n = i(r ? t : [e, 0], 2);
        var o = n[0];
        var a = n[1];
        var u = i([o + a, 0], 2);
        var s = u[0];
        var l = u[1];
        if (T) {
          var c = this.font.params.axis_height;
          if (r) {
            s = Math.max(o - c, a + c) * 2;
          }
          l = s / 2 - c;
        } else if (r) {
          l = a;
        } else {
          var p = i(Q.HDW || [0.75, 0.25], 2);
          var h = p[0];
          var f = p[1];
          l = s / (h + f) * f;
        }
        return [s - l, l];
      };
      e.prototype.checkExtendedHeight = function (t, e) {
        if (e.fullExt) {
          var Q = i(e.fullExt, 2);
          var r = Q[0];
          var T = Q[1];
          var n = Math.ceil(Math.max(0, t - T) / r);
          t = T + n * r;
        }
        return t;
      };
      e.prototype.remapChars = function (t) {
        var e = this.node.getProperty("primes");
        if (e) {
          return stringUtils_1.unicodeChars(e);
        }
        if (t.length === 1) {
          var Q = this.node.coreParent().parent;
          var r = this.isAccent && !Q.isKind("mrow");
          var T = this.font.getRemappedChar(r ? "accent" : "mo", t[0]);
          if (T) {
            t = this.unicodeChars(T, this.variant);
          }
        }
        return t;
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}