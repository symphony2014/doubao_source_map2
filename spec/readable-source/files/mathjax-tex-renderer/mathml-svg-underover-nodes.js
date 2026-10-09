// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlSvgScriptRenderers'
// - Resolved require(80879) to 'mathml-svg-script-renderers'
// - Renamed variable 'i' to 'mathmlCommonMixins'
// - Resolved require(748283) to 'mathml-common-mixins'
// - Renamed variable 'a' to 'mathmlCommonMixins_1'
// - Resolved require(748283) to 'mathml-common-mixins'
// - Renamed variable 'u' to 'mathmlCommonMixins_2'
// - Resolved require(748283) to 'mathml-common-mixins'
// - Renamed variable 's' to 'mathmlUnderoverNodeClasses'
// - Resolved require(595122) to 'mathml-underover-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 776579
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
  exports.SVGmunderover = exports.SVGmover = exports.SVGmunder = undefined;
  var mathmlSvgScriptRenderers = require("mathml-svg-script-renderers") /*id: 80879*/;
  var mathmlCommonMixins = require("mathml-common-mixins") /*id: 748283*/;
  var mathmlCommonMixins_1 = require("mathml-common-mixins") /*id: 748283*/;
  var mathmlCommonMixins_2 = require("mathml-common-mixins") /*id: 748283*/;
  var mathmlUnderoverNodeClasses = require("mathml-underover-node-classes") /*id: 595122*/;
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (e) {
      if (this.hasMovableLimits()) {
        t.prototype.toSVG.call(this, e);
        return;
      }
      var Q = this.standardSVGnode(e);
      var r = n([this.baseChild, this.scriptChild], 2);
      var T = r[0];
      var o = r[1];
      var i = n([T.getOuterBBox(), o.getOuterBBox()], 2);
      var a = i[0];
      var u = i[1];
      T.toSVG(Q);
      o.toSVG(Q);
      var s = this.isLineBelow ? 0 : this.getDelta(true);
      var l = this.getUnderKV(a, u)[1];
      var c = n(this.getDeltaW([a, u], [0, -s]), 2);
      var p = c[0];
      var h = c[1];
      T.place(p, 0);
      o.place(h, l);
    };
    e.kind = mathmlUnderoverNodeClasses.MmlMunder.prototype.kind;
    return e;
  }(mathmlCommonMixins.CommonMunderMixin(mathmlSvgScriptRenderers.SVGmsub));
  exports.SVGmunder = l;
  var c = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (e) {
      if (this.hasMovableLimits()) {
        t.prototype.toSVG.call(this, e);
        return;
      }
      var Q = this.standardSVGnode(e);
      var r = n([this.baseChild, this.scriptChild], 2);
      var T = r[0];
      var o = r[1];
      var i = n([T.getOuterBBox(), o.getOuterBBox()], 2);
      var a = i[0];
      var u = i[1];
      T.toSVG(Q);
      o.toSVG(Q);
      var s = this.isLineAbove ? 0 : this.getDelta();
      var l = this.getOverKU(a, u)[1];
      var c = n(this.getDeltaW([a, u], [0, s]), 2);
      var p = c[0];
      var h = c[1];
      T.place(p, 0);
      o.place(h, l);
    };
    e.kind = mathmlUnderoverNodeClasses.MmlMover.prototype.kind;
    return e;
  }(mathmlCommonMixins_1.CommonMoverMixin(mathmlSvgScriptRenderers.SVGmsup));
  exports.SVGmover = c;
  var p = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (e) {
      if (this.hasMovableLimits()) {
        t.prototype.toSVG.call(this, e);
        return;
      }
      var Q = this.standardSVGnode(e);
      var r = n([this.baseChild, this.overChild, this.underChild], 3);
      var T = r[0];
      var o = r[1];
      var i = r[2];
      var a = n([T.getOuterBBox(), o.getOuterBBox(), i.getOuterBBox()], 3);
      var u = a[0];
      var s = a[1];
      var l = a[2];
      T.toSVG(Q);
      i.toSVG(Q);
      o.toSVG(Q);
      var c = this.getDelta();
      var p = this.getOverKU(u, s)[1];
      var h = this.getUnderKV(u, l)[1];
      var f = n(this.getDeltaW([u, l, s], [0, this.isLineBelow ? 0 : -c, this.isLineAbove ? 0 : c]), 3);
      var d = f[0];
      var D = f[1];
      var L = f[2];
      T.place(d, 0);
      i.place(D, h);
      o.place(L, p);
    };
    e.kind = mathmlUnderoverNodeClasses.MmlMunderover.prototype.kind;
    return e;
  }(mathmlCommonMixins_2.CommonMunderoverMixin(mathmlSvgScriptRenderers.SVGmsubsup));
  exports.SVGmunderover = p;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}