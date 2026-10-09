// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(216525) to 'abstract-math-document-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 593441
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
  exports.AbstractHandler = undefined;
  var n = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    return e;
  }(require("abstract-math-document-core") /*id: 216525*/.AbstractMathDocument);
  var o = function () {
    function t(t, e = 5) {
      this.documentClass = n;
      this.adaptor = t;
      this.priority = e;
    }
    Object.defineProperty(t.prototype, "name", {
      get: function () {
        return this.constructor.NAME;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.handlesDocument = function (t) {
      return false;
    };
    t.prototype.create = function (t, e) {
      return new this.documentClass(t, this.adaptor, e);
    };
    t.NAME = "generic";
    return t;
  }();
  exports.AbstractHandler = o;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}