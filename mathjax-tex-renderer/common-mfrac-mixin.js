// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 45583
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
  exports.CommonMfracMixin = undefined;
  exports.CommonMfracMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, n([], T(e), false)) || this;
        r.bevel = null;
        r.pad = r.node.getProperty("withDelims") ? 0 : r.font.params.nulldelimiterspace;
        if (r.node.attributes.get("bevelled")) {
          var o = r.getBevelData(r.isDisplay()).H;
          var i = r.bevel = r.createMo("/");
          i.node.attributes.set("symmetric", true);
          i.canStretch(1);
          i.getStretchedVariant([o], true);
        }
        return r;
      }
      r(e, t);
      e.prototype.computeBBox = function (t, e = false) {
        t.empty();
        var Q = this.node.attributes.getList("linethickness", "bevelled");
        var r = Q.linethickness;
        var T = Q.bevelled;
        var n = this.isDisplay();
        var o = null;
        if (T) {
          this.getBevelledBBox(t, n);
        } else {
          var i = this.length2em(String(r), 0.06);
          o = this.pad * -2;
          if (i === 0) {
            this.getAtopBBox(t, n);
          } else {
            this.getFractionBBox(t, n, i);
            o -= 0.2;
          }
          o += t.w;
        }
        t.clean();
        this.setChildPWidths(e, o);
      };
      e.prototype.getFractionBBox = function (t, e, Q) {
        var r = this.childNodes[0].getOuterBBox();
        var T = this.childNodes[1].getOuterBBox();
        var n = this.font.params.axis_height;
        var o = this.getTUV(e, Q);
        var i = o.T;
        var a = o.u;
        var u = o.v;
        t.combine(r, 0, n + i + Math.max(r.d * r.rscale, a));
        t.combine(T, 0, n - i - Math.max(T.h * T.rscale, u));
        t.w += this.pad * 2 + 0.2;
      };
      e.prototype.getTUV = function (t, e) {
        var Q = this.font.params;
        var r = Q.axis_height;
        var T = (t ? 3.5 : 1.5) * e;
        return {
          T: (t ? 3.5 : 1.5) * e,
          u: (t ? Q.num1 : Q.num2) - r - T,
          v: (t ? Q.denom1 : Q.denom2) + r - T
        };
      };
      e.prototype.getAtopBBox = function (t, e) {
        var Q = this.getUVQ(e);
        var r = Q.u;
        var T = Q.v;
        var n = Q.nbox;
        var o = Q.dbox;
        t.combine(n, 0, r);
        t.combine(o, 0, -T);
        t.w += this.pad * 2;
      };
      e.prototype.getUVQ = function (t) {
        var e = this.childNodes[0].getOuterBBox();
        var Q = this.childNodes[1].getOuterBBox();
        var r = this.font.params;
        var n = T(t ? [r.num1, r.denom1] : [r.num3, r.denom2], 2);
        var o = n[0];
        var i = n[1];
        var a = (t ? 7 : 3) * r.rule_thickness;
        var u = o - e.d * e.scale - (Q.h * Q.scale - i);
        if (u < a) {
          o += (a - u) / 2;
          i += (a - u) / 2;
          u = a;
        }
        return {
          u: o,
          v: i,
          q: u,
          nbox: e,
          dbox: Q
        };
      };
      e.prototype.getBevelledBBox = function (t, e) {
        var Q = this.getBevelData(e);
        var r = Q.u;
        var T = Q.v;
        var n = Q.delta;
        var o = Q.nbox;
        var i = Q.dbox;
        var a = this.bevel.getOuterBBox();
        t.combine(o, 0, r);
        t.combine(a, t.w - n / 2, 0);
        t.combine(i, t.w - n / 2, T);
      };
      e.prototype.getBevelData = function (t) {
        var e = this.childNodes[0].getOuterBBox();
        var Q = this.childNodes[1].getOuterBBox();
        var r = t ? 0.4 : 0.15;
        var T = Math.max(e.scale * (e.h + e.d), Q.scale * (Q.h + Q.d)) + r * 2;
        var n = this.font.params.axis_height;
        var o = e.scale * (e.d - e.h) / 2 + n + r;
        var i = Q.scale * (Q.d - Q.h) / 2 + n - r;
        return {
          H: T,
          delta: r,
          u: o,
          v: i,
          nbox: e,
          dbox: Q
        };
      };
      e.prototype.canStretch = function (t) {
        return false;
      };
      e.prototype.isDisplay = function () {
        var t = this.node.attributes.getList("displaystyle", "scriptlevel");
        var e = t.displaystyle;
        var Q = t.scriptlevel;
        return e && Q === 0;
      };
      e.prototype.getWrapWidth = function (t) {
        var e = this.node.attributes;
        if (e.get("bevelled")) {
          return this.childNodes[t].getOuterBBox().w;
        } else {
          return this.getBBox().w - !!this.length2em(e.get("linethickness")) * 0.2 - this.pad * 2;
        }
      };
      e.prototype.getChildAlign = function (t) {
        var e = this.node.attributes;
        if (e.get("bevelled")) {
          return "left";
        } else {
          return e.get(["numalign", "denomalign"][t]);
        }
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}