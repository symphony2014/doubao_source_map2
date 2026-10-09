// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Resolved require(167308) to 'common-scriptbase-mixin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 510813
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
  exports.SVGscriptbase = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var i = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      var Q = this.getBaseWidth();
      var r = n(this.getOffset(), 2);
      var T = r[0];
      var o = r[1];
      this.baseChild.toSVG(e);
      this.scriptChild.toSVG(e);
      this.scriptChild.place(Q + T, o);
    };
    e.kind = "scriptbase";
    return e;
  }(require("common-scriptbase-mixin") /*id: 167308*/.CommonScriptbaseMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGscriptbase = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}