// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(811233) to 'abstract-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 812435
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
  exports.AbstractNodeFactory = undefined;
  var n = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.create = function (t, e = {}, Q = []) {
      return this.node[t](e, Q);
    };
    return e;
  }(require("abstract-factory") /*id: 811233*/.AbstractFactory);
  exports.AbstractNodeFactory = n;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}