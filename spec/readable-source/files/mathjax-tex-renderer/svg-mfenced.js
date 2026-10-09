// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'i' to 'commonMfencedMixin'
// - Resolved require(484096) to 'common-mfenced-mixin'
// - Renamed variable 'a' to 'mathmlMfencedNode'
// - Resolved require(506008) to 'mathml-mfenced-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 621972
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
  var n = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.SVGmfenced = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMfencedMixin = require("common-mfenced-mixin") /*id: 484096*/;
  var mathmlMfencedNode = require("mathml-mfenced-node") /*id: 506008*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      this.setChildrenParent(this.mrow);
      this.mrow.toSVG(e);
      this.setChildrenParent(this);
    };
    e.prototype.setChildrenParent = function (t) {
      var e;
      var Q;
      try {
        var r = n(this.childNodes);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          T.value.parent = t;
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (T && !T.done && (Q = r.return)) {
            Q.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    e.kind = mathmlMfencedNode.MmlMfenced.prototype.kind;
    return e;
  }(commonMfencedMixin.CommonMfencedMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmfenced = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}