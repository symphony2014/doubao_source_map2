// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 731637
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
  exports.CommonTeXAtomMixin = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  exports.CommonTeXAtomMixin = function (t) {
    return function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      T(e, t);
      e.prototype.computeBBox = function (e, Q = false) {
        t.prototype.computeBBox.call(this, e, Q);
        if (this.childNodes[0] && this.childNodes[0].bbox.ic) {
          e.ic = this.childNodes[0].bbox.ic;
        }
        if (this.node.texClass === mathmlAbstractNodeClasses.TEXCLASS.VCENTER) {
          var r = e.h;
          var T = (r + e.d) / 2 + this.font.params.axis_height - r;
          e.h += T;
          e.d -= T;
        }
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}