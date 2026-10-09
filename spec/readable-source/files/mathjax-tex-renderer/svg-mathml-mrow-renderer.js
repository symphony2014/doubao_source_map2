// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'commonMrowMixins'
// - Resolved require(50783) to 'common-mrow-mixins'
// - Renamed variable 'i' to 'commonMrowMixins_1'
// - Resolved require(50783) to 'common-mrow-mixins'
// - Renamed variable 'a' to 'mathmlMrowClasses'
// - Resolved require(261473) to 'mathml-mrow-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 762264
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
  exports.SVGinferredMrow = exports.SVGmrow = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMrowMixins = require("common-mrow-mixins") /*id: 50783*/;
  var commonMrowMixins_1 = require("common-mrow-mixins") /*id: 50783*/;
  var mathmlMrowClasses = require("mathml-mrow-classes") /*id: 261473*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.node.isInferred ? this.element = t : this.standardSVGnode(t);
      this.addChildren(e);
    };
    e.kind = mathmlMrowClasses.MmlMrow.prototype.kind;
    return e;
  }(commonMrowMixins.CommonMrowMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmrow = u;
  var s = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.kind = mathmlMrowClasses.MmlInferredMrow.prototype.kind;
    return e;
  }(commonMrowMixins_1.CommonInferredMrowMixin(u));
  exports.SVGinferredMrow = s;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}