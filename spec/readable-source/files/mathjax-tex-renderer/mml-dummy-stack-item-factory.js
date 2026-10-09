// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mmlStackItemClasses'
// - Resolved require(174186) to 'mml-stack-item-classes'
// - Renamed variable 'i' to 'abstractFactory'
// - Resolved require(811233) to 'abstract-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 872683
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n = this && this.__extends || (r = function (t, e) {
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
  var mmlStackItemClasses = require("mml-stack-item-classes") /*id: 174186*/;
  var abstractFactory = require("abstract-factory") /*id: 811233*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    n(e, t);
    return e;
  }(mmlStackItemClasses.BaseItem);
  var u = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.defaultKind = "dummy";
      e.configuration = null;
      return e;
    }
    n(e, t);
    (T = {})[a.prototype.kind] = a;
    e.DefaultStackItems = T;
    return e;
  }(abstractFactory.AbstractFactory);
  exports.default = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}