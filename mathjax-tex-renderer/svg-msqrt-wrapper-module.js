// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'mathmlSqrtMixin'
// - Resolved require(645786) to 'mathml-sqrt-mixin'
// - Renamed variable 'i' to 'mathmlMsqrtNode'
// - Resolved require(106876) to 'mathml-msqrt-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 967871
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
  exports.SVGmsqrt = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var mathmlSqrtMixin = require("mathml-sqrt-mixin") /*id: 645786*/;
  var mathmlMsqrtNode = require("mathml-msqrt-node") /*id: 106876*/;
  var a = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.dx = 0;
      return e;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.childNodes[this.surd];
      var Q = this.childNodes[this.base];
      var r = this.root ? this.childNodes[this.root] : null;
      var T = e.getBBox();
      var n = Q.getOuterBBox();
      var o = this.getPQ(T)[1];
      var i = this.font.params.rule_thickness * this.bbox.scale;
      var a = n.h + o + i;
      var u = this.standardSVGnode(t);
      var s = this.adaptor.append(u, this.svg("g"));
      this.addRoot(u, r, T, a);
      e.toSVG(u);
      e.place(this.dx, a - T.h);
      Q.toSVG(s);
      Q.place(this.dx + T.w, 0);
      this.adaptor.append(u, this.svg("rect", {
        width: this.fixed(n.w),
        height: this.fixed(i),
        x: this.fixed(this.dx + T.w),
        y: this.fixed(a - i)
      }));
    };
    e.prototype.addRoot = function (t, e, Q, r) {};
    e.kind = mathmlMsqrtNode.MmlMsqrt.prototype.kind;
    return e;
  }(mathmlSqrtMixin.CommonMsqrtMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmsqrt = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}