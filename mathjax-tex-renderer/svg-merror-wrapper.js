// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'mathmlMerrorNode'
// - Resolved require(818262) to 'mathml-merror-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 182124
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
  exports.SVGmerror = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var mathmlMerrorNode = require("mathml-merror-node") /*id: 818262*/;
  var i = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      var Q = this.getBBox();
      var r = Q.h;
      var T = Q.d;
      var n = Q.w;
      this.adaptor.append(this.element, this.svg("rect", {
        "data-background": true,
        width: this.fixed(n),
        height: this.fixed(r + T),
        y: this.fixed(-T)
      }));
      var o = this.node.attributes.get("title");
      if (o) {
        this.adaptor.append(this.element, this.svg("title", {}, [this.adaptor.text(o)]));
      }
      this.addChildren(e);
    };
    e.kind = mathmlMerrorNode.MmlMerror.prototype.kind;
    e.styles = {
      "g[data-mml-node=\"merror\"] > g": {
        fill: "red",
        stroke: "red"
      },
      "g[data-mml-node=\"merror\"] > rect[data-background]": {
        fill: "yellow",
        stroke: "none"
      }
    };
    return e;
  }(mathjaxSvgWrapper.SVGWrapper);
  exports.SVGmerror = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}