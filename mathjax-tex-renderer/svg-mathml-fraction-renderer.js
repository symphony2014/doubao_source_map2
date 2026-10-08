// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'i' to 'commonMfracMixin'
// - Resolved require(45583) to 'common-mfrac-mixin'
// - Renamed variable 'a' to 'mathmlMfracNode'
// - Resolved require(679038) to 'mathml-mfrac-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 460509
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
  exports.SVGmfrac = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMfracMixin = require("common-mfrac-mixin") /*id: 45583*/;
  var mathmlMfracNode = require("mathml-mfrac-node") /*id: 679038*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      this.standardSVGnode(t);
      var e = this.node.attributes.getList("linethickness", "bevelled");
      var Q = e.linethickness;
      var r = e.bevelled;
      var T = this.isDisplay();
      if (r) {
        this.makeBevelled(T);
      } else {
        var n = this.length2em(String(Q), 0.06);
        if (n === 0) {
          this.makeAtop(T);
        } else {
          this.makeFraction(T, n);
        }
      }
    };
    e.prototype.makeFraction = function (t, e) {
      var Q = this.element;
      var r = this.node.attributes.getList("numalign", "denomalign");
      var T = r.numalign;
      var o = r.denomalign;
      var i = n(this.childNodes, 2);
      var a = i[0];
      var u = i[1];
      var s = a.getOuterBBox();
      var l = u.getOuterBBox();
      var c = this.font.params;
      var p = c.axis_height;
      var h = this.node.getProperty("withDelims") ? 0 : c.nulldelimiterspace;
      var f = Math.max((s.L + s.w + s.R) * s.rscale, (l.L + l.w + l.R) * l.rscale);
      var d = this.getAlignX(f, s, T) + 0.1 + h;
      var D = this.getAlignX(f, l, o) + 0.1 + h;
      var L = this.getTUV(t, e);
      var m = L.T;
      var y = L.u;
      var H = L.v;
      a.toSVG(Q);
      a.place(d, p + m + Math.max(s.d * s.rscale, y));
      u.toSVG(Q);
      u.place(D, p - m - Math.max(l.h * l.rscale, H));
      this.adaptor.append(Q, this.svg("rect", {
        width: this.fixed(f + 0.2),
        height: this.fixed(e),
        x: this.fixed(h),
        y: this.fixed(p - e / 2)
      }));
    };
    e.prototype.makeAtop = function (t) {
      var e = this.element;
      var Q = this.node.attributes.getList("numalign", "denomalign");
      var r = Q.numalign;
      var T = Q.denomalign;
      var o = n(this.childNodes, 2);
      var i = o[0];
      var a = o[1];
      var u = i.getOuterBBox();
      var s = a.getOuterBBox();
      var l = this.font.params;
      var c = this.node.getProperty("withDelims") ? 0 : l.nulldelimiterspace;
      var p = Math.max((u.L + u.w + u.R) * u.rscale, (s.L + s.w + s.R) * s.rscale);
      var h = this.getAlignX(p, u, r) + c;
      var f = this.getAlignX(p, s, T) + c;
      var d = this.getUVQ(t);
      var D = d.u;
      var L = d.v;
      i.toSVG(e);
      i.place(h, D);
      a.toSVG(e);
      a.place(f, -L);
    };
    e.prototype.makeBevelled = function (t) {
      var e = this.element;
      var Q = n(this.childNodes, 2);
      var r = Q[0];
      var T = Q[1];
      var o = this.getBevelData(t);
      var i = o.u;
      var a = o.v;
      var u = o.delta;
      var s = o.nbox;
      var l = o.dbox;
      var c = (s.L + s.w + s.R) * s.rscale;
      r.toSVG(e);
      this.bevel.toSVG(e);
      T.toSVG(e);
      r.place(s.L * s.rscale, i);
      this.bevel.place(c - u / 2, 0);
      T.place(c + this.bevel.getOuterBBox().w + l.L * l.rscale - u, a);
    };
    e.kind = mathmlMfracNode.MmlMfrac.prototype.kind;
    return e;
  }(commonMfracMixin.CommonMfracMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmfrac = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}