// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 167308
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
  var i = this && this.__values || function (t) {
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
  exports.CommonScriptbaseMixin = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  exports.CommonScriptbaseMixin = function (t) {
    var e;
    (e = function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, o([], n(e), false)) || this;
        r.baseScale = 1;
        r.baseIc = 0;
        r.baseRemoveIc = false;
        r.baseIsChar = false;
        r.baseHasAccentOver = null;
        r.baseHasAccentUnder = null;
        r.isLineAbove = false;
        r.isLineBelow = false;
        r.isMathAccent = false;
        var T = r.baseCore = r.getBaseCore();
        if (T) {
          r.setBaseAccentsFor(T);
          r.baseScale = r.getBaseScale();
          r.baseIc = r.getBaseIc();
          r.baseIsChar = r.isCharBase();
          r.isMathAccent = r.baseIsChar && r.scriptChild && !!r.scriptChild.coreMO().node.getProperty("mathaccent");
          r.checkLineAccents();
          r.baseRemoveIc = !r.isLineAbove && !r.isLineBelow && (!r.constructor.useIC || r.isMathAccent);
        }
        return r;
      }
      T(e, t);
      Object.defineProperty(e.prototype, "baseChild", {
        get: function () {
          return this.childNodes[this.node.base];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "scriptChild", {
        get: function () {
          return this.childNodes[1];
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.getBaseCore = function () {
        for (var t = this.getSemanticBase() || this.childNodes[0]; t && (t.childNodes.length === 1 && (t.node.isKind("mrow") || t.node.isKind("TeXAtom") && t.node.texClass !== mathmlAbstractNodeClasses.TEXCLASS.VCENTER || t.node.isKind("mstyle") || t.node.isKind("mpadded") || t.node.isKind("mphantom") || t.node.isKind("semantics")) || t.node.isKind("munderover") && t.isMathAccent);) {
          this.setBaseAccentsFor(t);
          t = t.childNodes[0];
        }
        if (!t) {
          this.baseHasAccentOver = this.baseHasAccentUnder = false;
        }
        return t || this.childNodes[0];
      };
      e.prototype.setBaseAccentsFor = function (t) {
        if (t.node.isKind("munderover")) {
          if (this.baseHasAccentOver === null) {
            this.baseHasAccentOver = !!t.node.attributes.get("accent");
          }
          if (this.baseHasAccentUnder === null) {
            this.baseHasAccentUnder = !!t.node.attributes.get("accentunder");
          }
        }
      };
      e.prototype.getSemanticBase = function () {
        var t = this.node.attributes.getExplicit("data-semantic-fencepointer");
        return this.getBaseFence(this.baseChild, t);
      };
      e.prototype.getBaseFence = function (t, e) {
        var Q;
        var r;
        if (!t || !t.node.attributes || !e) {
          return null;
        }
        if (t.node.attributes.getExplicit("data-semantic-id") === e) {
          return t;
        }
        try {
          var T = i(t.childNodes);
          var n = T.next();
          for (; !n.done; n = T.next()) {
            var o = n.value;
            var a = this.getBaseFence(o, e);
            if (a) {
              return a;
            }
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (n && !n.done && (r = T.return)) {
              r.call(T);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
        return null;
      };
      e.prototype.getBaseScale = function () {
        var t = this.baseCore;
        var e = 1;
        while (t && t !== this) {
          e *= t.getOuterBBox().rscale;
          t = t.parent;
        }
        return e;
      };
      e.prototype.getBaseIc = function () {
        return this.baseCore.getOuterBBox().ic * this.baseScale;
      };
      e.prototype.getAdjustedIc = function () {
        var t = this.baseCore.getOuterBBox();
        return (t.ic ? t.ic * 1.05 + 0.05 : 0) * this.baseScale;
      };
      e.prototype.isCharBase = function () {
        var t = this.baseCore;
        return (t.node.isKind("mo") && t.size === null || t.node.isKind("mi") || t.node.isKind("mn")) && t.bbox.rscale === 1 && Array.from(t.getText()).length === 1;
      };
      e.prototype.checkLineAccents = function () {
        if (this.node.isKind("munderover")) {
          if (this.node.isKind("mover")) {
            this.isLineAbove = this.isLineAccent(this.scriptChild);
          } else if (this.node.isKind("munder")) {
            this.isLineBelow = this.isLineAccent(this.scriptChild);
          } else {
            this.isLineAbove = this.isLineAccent(this.overChild);
            this.isLineBelow = this.isLineAccent(this.underChild);
          }
        }
      };
      e.prototype.isLineAccent = function (t) {
        var e = t.coreMO().node;
        return e.isToken && e.getText() === "―";
      };
      e.prototype.getBaseWidth = function () {
        var t = this.baseChild.getOuterBBox();
        return t.w * t.rscale - (this.baseRemoveIc ? this.baseIc : 0) + this.font.params.extra_ic;
      };
      e.prototype.computeBBox = function (t, e = false) {
        var Q = this.getBaseWidth();
        var r = n(this.getOffset(), 2);
        var T = r[0];
        var o = r[1];
        t.append(this.baseChild.getOuterBBox());
        t.combine(this.scriptChild.getOuterBBox(), Q + T, o);
        t.w += this.font.params.scriptspace;
        t.clean();
        this.setChildPWidths(e);
      };
      e.prototype.getOffset = function () {
        return [0, 0];
      };
      e.prototype.baseCharZero = function (t) {
        var e = !!this.baseCore.node.attributes.get("largeop");
        var Q = this.baseScale;
        if (this.baseIsChar && !e && Q === 1) {
          return 0;
        } else {
          return t;
        }
      };
      e.prototype.getV = function () {
        var t = this.baseCore.getOuterBBox();
        var e = this.scriptChild.getOuterBBox();
        var Q = this.font.params;
        var r = this.length2em(this.node.attributes.get("subscriptshift"), Q.sub1);
        return Math.max(this.baseCharZero(t.d * this.baseScale + Q.sub_drop * e.rscale), r, e.h * e.rscale - Q.x_height * 0.8);
      };
      e.prototype.getU = function () {
        var t = this.baseCore.getOuterBBox();
        var e = this.scriptChild.getOuterBBox();
        var Q = this.font.params;
        var r = this.node.attributes.getList("displaystyle", "superscriptshift");
        var T = this.node.getProperty("texprimestyle") ? Q.sup3 : r.displaystyle ? Q.sup1 : Q.sup2;
        var n = this.length2em(r.superscriptshift, T);
        return Math.max(this.baseCharZero(t.h * this.baseScale - Q.sup_drop * e.rscale), n, e.d * e.rscale + 1 / 4 * Q.x_height);
      };
      e.prototype.hasMovableLimits = function () {
        var t = this.node.attributes.get("displaystyle");
        var e = this.baseChild.coreMO().node;
        return !t && !!e.attributes.get("movablelimits");
      };
      e.prototype.getOverKU = function (t, e) {
        var Q = this.node.attributes.get("accent");
        var r = this.font.params;
        var T = e.d * e.rscale;
        var n = r.rule_thickness * r.separation_factor;
        var o = this.baseHasAccentOver ? n : 0;
        var i = this.isLineAbove ? r.rule_thickness * 3 : n;
        var a = (Q ? i : Math.max(r.big_op_spacing1, r.big_op_spacing3 - Math.max(0, T))) - o;
        return [a, t.h * t.rscale + a + T];
      };
      e.prototype.getUnderKV = function (t, e) {
        var Q = this.node.attributes.get("accentunder");
        var r = this.font.params;
        var T = e.h * e.rscale;
        var n = r.rule_thickness * r.separation_factor;
        var o = this.baseHasAccentUnder ? n : 0;
        var i = this.isLineBelow ? r.rule_thickness * 3 : n;
        var a = (Q ? i : Math.max(r.big_op_spacing2, r.big_op_spacing4 - T)) - o;
        return [a, -(t.d * t.rscale + a + T)];
      };
      e.prototype.getDeltaW = function (t, e = [0, 0, 0]) {
        var Q;
        var r;
        var T;
        var a;
        var u = this.node.attributes.get("align");
        var s = t.map(function (t) {
          return t.w * t.rscale;
        });
        s[0] -= this.baseRemoveIc && !this.baseCore.node.attributes.get("largeop") ? this.baseIc : 0;
        var l = Math.max.apply(Math, o([], n(s), false));
        var c = [];
        var p = 0;
        try {
          var h = i(s.keys());
          var f = h.next();
          for (; !f.done; f = h.next()) {
            var d = f.value;
            c[d] = (u === "center" ? (l - s[d]) / 2 : u === "right" ? l - s[d] : 0) + e[d];
            if (c[d] < p) {
              p = -c[d];
            }
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (f && !f.done && (r = h.return)) {
              r.call(h);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
        if (p) {
          try {
            var D = i(c.keys());
            var L = D.next();
            for (; !L.done; L = D.next()) {
              var d = L.value;
              c[d] += p;
            }
          } catch (t) {
            T = {
              error: t
            };
          } finally {
            try {
              if (L && !L.done && (a = D.return)) {
                a.call(D);
              }
            } finally {
              if (T) {
                throw T.error;
              }
            }
          }
        }
        [1, 2].map(function (e) {
          return c[e] += t[e] ? t[e].dx * t[0].scale : 0;
        });
        return c;
      };
      e.prototype.getDelta = function (t = false) {
        var e = this.node.attributes.get("accent");
        var Q = this.baseCore.getOuterBBox();
        var r = Q.sk;
        var T = Q.ic;
        return ((e && !t ? r : 0) + this.font.skewIcFactor * T) * this.baseScale;
      };
      e.prototype.stretchChildren = function () {
        var t;
        var e;
        var Q;
        var r;
        var T;
        var n;
        var o = [];
        try {
          var a = i(this.childNodes);
          var u = a.next();
          for (; !u.done; u = a.next()) {
            var s = u.value;
            if (s.canStretch(2)) {
              o.push(s);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (u && !u.done && (e = a.return)) {
              e.call(a);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        var l = o.length;
        var c = this.childNodes.length;
        if (l && c > 1) {
          var p = 0;
          var h = l > 1 && l === c;
          try {
            var f = i(this.childNodes);
            var d = f.next();
            for (; !d.done; d = f.next()) {
              var s = d.value;
              var D = s.stretch.dir === 0;
              if (h || D) {
                var L = s.getOuterBBox(D);
                var m = L.w;
                var y = L.rscale;
                if (m * y > p) {
                  p = m * y;
                }
              }
            }
          } catch (t) {
            Q = {
              error: t
            };
          } finally {
            try {
              if (d && !d.done && (r = f.return)) {
                r.call(f);
              }
            } finally {
              if (Q) {
                throw Q.error;
              }
            }
          }
          try {
            var H = i(o);
            var v = H.next();
            for (; !v.done; v = H.next()) {
              var s = v.value;
              s.coreMO().getStretchedVariant([p / s.bbox.rscale]);
            }
          } catch (t) {
            T = {
              error: t
            };
          } finally {
            try {
              if (v && !v.done && (n = H.return)) {
                n.call(H);
              }
            } finally {
              if (T) {
                throw T.error;
              }
            }
          }
        }
      };
      return e;
    }(t)).useIC = true;
    return e;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}