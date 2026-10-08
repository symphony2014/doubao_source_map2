// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 790977
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
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  exports.MmlMenclose = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var i = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.texclass = mathmlAbstractNodeClasses.TEXCLASS.ORD;
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "menclose";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "arity", {
      get: function () {
        return -1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "linebreakContininer", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setTeXclass = function (t) {
      t = this.childNodes[0].setTeXclass(t);
      this.updateTeXclass(this.childNodes[0]);
      return t;
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlNode.defaults), {
      notation: "longdiv"
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlNode);
  exports.MmlMenclose = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}