// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'o' to 'commonTexAtomMixin'
// - Resolved require(731637) to 'common-tex-atom-mixin'
// - Renamed variable 'i' to 'mathmlTexAtomNode'
// - Resolved require(974043) to 'mathml-tex-atom-node'
// - Renamed variable 'a' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 489625
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
  exports.SVGTeXAtom = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var commonTexAtomMixin = require("common-tex-atom-mixin") /*id: 731637*/;
  var mathmlTexAtomNode = require("mathml-tex-atom-node") /*id: 974043*/;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (e) {
      t.prototype.toSVG.call(this, e);
      this.adaptor.setAttribute(this.element, "data-mjx-texclass", mathmlAbstractNodeClasses.TEXCLASSNAMES[this.node.texClass]);
      if (this.node.texClass === mathmlAbstractNodeClasses.TEXCLASS.VCENTER) {
        var Q = this.childNodes[0].getBBox();
        var r = Q.h;
        var T = Q.d;
        var n = this.font.params.axis_height;
        var o = "translate(0 " + this.fixed((r + T) / 2 + n - r) + ")";
        this.adaptor.setAttribute(this.element, "transform", o);
      }
    };
    e.kind = mathmlTexAtomNode.TeXAtom.prototype.kind;
    return e;
  }(commonTexAtomMixin.CommonTeXAtomMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGTeXAtom = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}