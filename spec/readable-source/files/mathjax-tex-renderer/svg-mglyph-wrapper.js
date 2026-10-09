// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'commonMglyphMixin'
// - Resolved require(875807) to 'common-mglyph-mixin'
// - Renamed variable 'i' to 'mathmlMglyphNodeClass'
// - Resolved require(441680) to 'mathml-mglyph-node-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 869739
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
  exports.SVGmglyph = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMglyphMixin = require("common-mglyph-mixin") /*id: 875807*/;
  var mathmlMglyphNodeClass = require("mathml-mglyph-node-class") /*id: 441680*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      if (this.charWrapper) {
        this.charWrapper.toSVG(e);
        return;
      }
      var Q = this.node.attributes.getList("src", "alt");
      var r = Q.src;
      var T = Q.alt;
      var n = this.fixed(this.height);
      var o = this.fixed(this.width);
      var i = this.fixed(this.height + (this.valign || 0));
      var a = this.svg("image", {
        width: o,
        height: n,
        transform: "translate(0 " + i + ") matrix(1 0 0 -1 0 0)",
        preserveAspectRatio: "none",
        "aria-label": T,
        href: r
      });
      this.adaptor.append(e, a);
    };
    e.kind = mathmlMglyphNodeClass.MmlMglyph.prototype.kind;
    return e;
  }(commonMglyphMixin.CommonMglyphMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmglyph = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}