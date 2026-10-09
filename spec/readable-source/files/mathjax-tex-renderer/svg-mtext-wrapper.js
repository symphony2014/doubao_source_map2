// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'commonMtextMixin'
// - Resolved require(258995) to 'common-mtext-mixin'
// - Renamed variable 'i' to 'mathmlMtextNode'
// - Resolved require(595465) to 'mathml-mtext-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 279692
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
  exports.SVGmtext = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMtextMixin = require("common-mtext-mixin") /*id: 258995*/;
  var mathmlMtextNode = require("mathml-mtext-node") /*id: 595465*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.kind = mathmlMtextNode.MmlMtext.prototype.kind;
    return e;
  }(commonMtextMixin.CommonMtextMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmtext = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}