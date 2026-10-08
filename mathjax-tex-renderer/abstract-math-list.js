// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(246004) to 'linked-list-implementation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 893698
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
  exports.AbstractMathList = undefined;
  var n = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.isBefore = function (t, e) {
      return t.start.i < e.start.i || t.start.i === e.start.i && t.start.n < e.start.n;
    };
    return e;
  }(require("linked-list-implementation") /*id: 246004*/.LinkedList);
  exports.AbstractMathList = n;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}