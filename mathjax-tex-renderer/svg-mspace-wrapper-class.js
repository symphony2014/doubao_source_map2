// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'commonMspaceMixin'
// - Resolved require(988577) to 'common-mspace-mixin'
// - Renamed variable 'i' to 'mathmlMspaceTokenNode'
// - Resolved require(232955) to 'mathml-mspace-token-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 664959
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
  exports.SVGmspace = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMspaceMixin = require("common-mspace-mixin") /*id: 988577*/;
  var mathmlMspaceTokenNode = require("mathml-mspace-token-node") /*id: 232955*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.kind = mathmlMspaceTokenNode.MmlMspace.prototype.kind;
    return e;
  }(commonMspaceMixin.CommonMspaceMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmspace = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}