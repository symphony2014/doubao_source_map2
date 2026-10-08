// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'i' to 'commonMpaddedMixin'
// - Resolved require(308950) to 'common-mpadded-mixin'
// - Renamed variable 'a' to 'mathmlMpaddedNode'
// - Resolved require(689757) to 'mathml-mpadded-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 932317
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
  exports.SVGmpadded = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonMpaddedMixin = require("common-mpadded-mixin") /*id: 308950*/;
  var mathmlMpaddedNode = require("mathml-mpadded-node") /*id: 689757*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      var Q = n(this.getDimens(), 9);
      var r = Q[5];
      var T = Q[6];
      var o = Q[7];
      var i = Q[8];
      var a = this.node.attributes.get("data-align") || "left";
      var u = T + i - (r < 0 && a !== "left" ? a === "center" ? r / 2 : r : 0);
      if (u || o) {
        e = this.adaptor.append(e, this.svg("g"));
        this.place(u, o, e);
      }
      this.addChildren(e);
    };
    e.kind = mathmlMpaddedNode.MmlMpadded.prototype.kind;
    return e;
  }(commonMpaddedMixin.CommonMpaddedMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmpadded = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}