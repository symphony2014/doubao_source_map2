// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'svgScriptbaseMixin'
// - Resolved require(510813) to 'svg-scriptbase-mixin'
// - Renamed variable 'i' to 'commonMathMixins'
// - Resolved require(316598) to 'common-math-mixins'
// - Renamed variable 'a' to 'commonMathMixins_1'
// - Resolved require(316598) to 'common-math-mixins'
// - Renamed variable 'u' to 'commonMathMixins_2'
// - Resolved require(316598) to 'common-math-mixins'
// - Renamed variable 's' to 'mathmlScriptNodeClasses'
// - Resolved require(595554) to 'mathml-script-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 80879
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
  exports.SVGmsubsup = exports.SVGmsup = exports.SVGmsub = undefined;
  var svgScriptbaseMixin = require("svg-scriptbase-mixin") /*id: 510813*/;
  var commonMathMixins = require("common-math-mixins") /*id: 316598*/;
  var commonMathMixins_1 = require("common-math-mixins") /*id: 316598*/;
  var commonMathMixins_2 = require("common-math-mixins") /*id: 316598*/;
  var mathmlScriptNodeClasses = require("mathml-script-node-classes") /*id: 595554*/;
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.kind = mathmlScriptNodeClasses.MmlMsub.prototype.kind;
    return e;
  }(commonMathMixins.CommonMsubMixin(svgScriptbaseMixin.SVGscriptbase));
  exports.SVGmsub = l;
  var c = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.kind = mathmlScriptNodeClasses.MmlMsup.prototype.kind;
    return e;
  }(commonMathMixins_1.CommonMsupMixin(svgScriptbaseMixin.SVGscriptbase));
  exports.SVGmsup = c;
  var p = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      var Q = n([this.baseChild, this.supChild, this.subChild], 3);
      var r = Q[0];
      var T = Q[1];
      var o = Q[2];
      var i = this.getBaseWidth();
      var a = this.getAdjustedIc();
      var u = n(this.getUVQ(), 2);
      var s = u[0];
      var l = u[1];
      r.toSVG(e);
      T.toSVG(e);
      o.toSVG(e);
      o.place(i, l);
      T.place(i + a, s);
    };
    e.kind = mathmlScriptNodeClasses.MmlMsubsup.prototype.kind;
    return e;
  }(commonMathMixins_2.CommonMsubsupMixin(svgScriptbaseMixin.SVGscriptbase));
  exports.SVGmsubsup = p;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}