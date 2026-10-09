// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'commonMtdMixin'
// - Resolved require(965164) to 'common-mtd-mixin'
// - Renamed variable 'i' to 'mathmlMtdNode'
// - Resolved require(666106) to 'mathml-mtd-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 520491
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
  exports.SVGmtd = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMtdMixin = require("common-mtd-mixin") /*id: 965164*/;
  var mathmlMtdNode = require("mathml-mtd-node") /*id: 666106*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.placeCell = function (t, e, Q, r, T) {
      var n = this.getBBox();
      var o = Math.max(n.h, 0.75);
      var i = Math.max(n.d, 0.25);
      var a = this.node.attributes.get("columnalign");
      var u = this.node.attributes.get("rowalign");
      var s = this.getAlignX(Q, n, a);
      var l = this.getAlignY(r, T, o, i, u);
      this.place(t + s, e + l);
      return [s, l];
    };
    e.prototype.placeColor = function (t, e, Q, r) {
      var T = this.adaptor;
      var n = this.firstChild();
      if (n && T.kind(n) === "rect" && T.getAttribute(n, "data-bgcolor")) {
        T.setAttribute(n, "x", this.fixed(t));
        T.setAttribute(n, "y", this.fixed(e));
        T.setAttribute(n, "width", this.fixed(Q));
        T.setAttribute(n, "height", this.fixed(r));
      }
    };
    e.kind = mathmlMtdNode.MmlMtd.prototype.kind;
    return e;
  }(commonMtdMixin.CommonMtdMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmtd = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}