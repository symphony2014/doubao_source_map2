// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(610351) to 'abstract-wrapper-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 152956
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
  exports.CommonWrapperFactory = undefined;
  var n = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.jax = null;
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "Wrappers", {
      get: function () {
        return this.node;
      },
      enumerable: false,
      configurable: true
    });
    e.defaultNodes = {};
    return e;
  }(require("abstract-wrapper-factory") /*id: 610351*/.AbstractWrapperFactory);
  exports.CommonWrapperFactory = n;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}