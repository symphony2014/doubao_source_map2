// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'commonSemanticsMixin'
// - Resolved require(241422) to 'common-semantics-mixin'
// - Renamed variable 'i' to 'mathmlAnnotationNodeClasses'
// - Resolved require(585722) to 'mathml-annotation-node-classes'
// - Renamed variable 'a' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 341105
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
  exports.SVGxml = exports.SVGannotationXML = exports.SVGannotation = exports.SVGsemantics = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonSemanticsMixin = require("common-semantics-mixin") /*id: 241422*/;
  var mathmlAnnotationNodeClasses = require("mathml-annotation-node-classes") /*id: 585722*/;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      if (this.childNodes.length) {
        this.childNodes[0].toSVG(e);
      }
    };
    e.kind = mathmlAnnotationNodeClasses.MmlSemantics.prototype.kind;
    return e;
  }(commonSemanticsMixin.CommonSemanticsMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGsemantics = u;
  var s = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (e) {
      t.prototype.toSVG.call(this, e);
    };
    e.prototype.computeBBox = function () {
      return this.bbox;
    };
    e.kind = mathmlAnnotationNodeClasses.MmlAnnotation.prototype.kind;
    return e;
  }(mathjaxSvgWrapper.SVGWrapper);
  exports.SVGannotation = s;
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.kind = mathmlAnnotationNodeClasses.MmlAnnotationXML.prototype.kind;
    e.styles = {
      "foreignObject[data-mjx-xml]": {
        "font-family": "initial",
        "line-height": "normal",
        overflow: "visible"
      }
    };
    return e;
  }(mathjaxSvgWrapper.SVGWrapper);
  exports.SVGannotationXML = l;
  var c = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.adaptor.clone(this.node.getXML());
      var Q = this.jax.math.metrics.em * this.jax.math.metrics.scale;
      var r = this.fixed(1 / Q);
      var T = this.getBBox();
      var n = T.w;
      var o = T.h;
      var i = T.d;
      this.element = this.adaptor.append(t, this.svg("foreignObject", {
        "data-mjx-xml": true,
        y: this.jax.fixed(-o * Q) + "px",
        width: this.jax.fixed(n * Q) + "px",
        height: this.jax.fixed((o + i) * Q) + "px",
        transform: `scale(${r}) matrix(1 0 0 -1 0 0)`
      }, [e]));
    };
    e.prototype.computeBBox = function (t, e = false) {
      var Q = this.jax.measureXMLnode(this.node.getXML());
      var r = Q.w;
      var T = Q.h;
      var n = Q.d;
      t.w = r;
      t.h = T;
      t.d = n;
    };
    e.prototype.getStyles = function () {};
    e.prototype.getScale = function () {};
    e.prototype.getVariant = function () {};
    e.kind = mathmlAbstractNodeClasses.XMLNode.prototype.kind;
    e.autoStyle = false;
    return e;
  }(mathjaxSvgWrapper.SVGWrapper);
  exports.SVGxml = c;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}