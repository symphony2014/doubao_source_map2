// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'abstractNodeFactory'
// - Resolved require(812435) to 'abstract-node-factory'
// - Renamed variable 'o' to 'mathmlNodeClassRegistry'
// - Resolved require(741362) to 'mathml-node-class-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 793218
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
  exports.MmlFactory = undefined;
  var abstractNodeFactory = require("abstract-node-factory") /*id: 812435*/;
  var mathmlNodeClassRegistry = require("mathml-node-class-registry") /*id: 741362*/;
  var i = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "MML", {
      get: function () {
        return this.node;
      },
      enumerable: false,
      configurable: true
    });
    e.defaultNodes = mathmlNodeClassRegistry.MML;
    return e;
  }(abstractNodeFactory.AbstractNodeFactory);
  exports.MmlFactory = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}