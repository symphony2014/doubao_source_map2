// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'svgMsqrtWrapperModule'
// - Resolved require(967871) to 'svg-msqrt-wrapper-module'
// - Renamed variable 'i' to 'commonMrootMixin'
// - Resolved require(470335) to 'common-mroot-mixin'
// - Renamed variable 'a' to 'mathmlMrootNode'
// - Resolved require(191303) to 'mathml-mroot-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 751050
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
  exports.SVGmroot = undefined;
  var svgMsqrtWrapperModule = require("svg-msqrt-wrapper-module") /*id: 967871*/;
  var commonMrootMixin = require("common-mroot-mixin") /*id: 470335*/;
  var mathmlMrootNode = require("mathml-mroot-node") /*id: 191303*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.addRoot = function (t, e, Q, r) {
      e.toSVG(t);
      var T = n(this.getRootDimens(Q, r), 3);
      var o = T[0];
      var i = T[1];
      var a = T[2];
      var u = e.getOuterBBox();
      e.place(a * u.rscale, i);
      this.dx = o;
    };
    e.kind = mathmlMrootNode.MmlMroot.prototype.kind;
    return e;
  }(commonMrootMixin.CommonMrootMixin(svgMsqrtWrapperModule.SVGmsqrt));
  exports.SVGmroot = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}