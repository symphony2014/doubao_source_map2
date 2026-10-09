// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 232955
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
  exports.MmlMspace = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var i = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.texclass = mathmlAbstractNodeClasses.TEXCLASS.NONE;
      return e;
    }
    T(e, t);
    e.prototype.setTeXclass = function (t) {
      return t;
    };
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mspace";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "arity", {
      get: function () {
        return 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isSpacelike", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "hasNewline", {
      get: function () {
        var t = this.attributes;
        return t.getExplicit("width") == null && t.getExplicit("height") == null && t.getExplicit("depth") == null && t.get("linebreak") === "newline";
      },
      enumerable: false,
      configurable: true
    });
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlTokenNode.defaults), {
      width: "0em",
      height: "0ex",
      depth: "0ex",
      linebreak: "auto"
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlTokenNode);
  exports.MmlMspace = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}