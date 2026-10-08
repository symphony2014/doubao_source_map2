// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'commonWrapperFactory'
// - Resolved require(152956) to 'common-wrapper-factory'
// - Renamed variable 'o' to 'mathjaxSvgWrapperRegistry'
// - Resolved require(219810) to 'mathjax-svg-wrapper-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 320040
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
  exports.SVGWrapperFactory = undefined;
  var commonWrapperFactory = require("common-wrapper-factory") /*id: 152956*/;
  var mathjaxSvgWrapperRegistry = require("mathjax-svg-wrapper-registry") /*id: 219810*/;
  var i = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.jax = null;
      return e;
    }
    T(e, t);
    e.defaultNodes = mathjaxSvgWrapperRegistry.SVGWrappers;
    return e;
  }(commonWrapperFactory.CommonWrapperFactory);
  exports.SVGWrapperFactory = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}