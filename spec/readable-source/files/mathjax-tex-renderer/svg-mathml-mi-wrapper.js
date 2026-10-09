// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'commonMiMixin'
// - Resolved require(418050) to 'common-mi-mixin'
// - Renamed variable 'i' to 'mathmlMiNode'
// - Resolved require(154314) to 'mathml-mi-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 739115
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
  exports.SVGmi = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMiMixin = require("common-mi-mixin") /*id: 418050*/;
  var mathmlMiNode = require("mathml-mi-node") /*id: 154314*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.kind = mathmlMiNode.MmlMi.prototype.kind;
    return e;
  }(commonMiMixin.CommonMiMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmi = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}