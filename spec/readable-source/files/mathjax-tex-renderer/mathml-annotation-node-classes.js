// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 585722
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
  exports.MmlAnnotation = exports.MmlAnnotationXML = exports.MmlSemantics = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var i = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "semantics";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "arity", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "notParent", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlBaseNode.defaults), {
      definitionUrl: null,
      encoding: null
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlBaseNode);
  exports.MmlSemantics = i;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "annotation-xml";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setChildInheritedAttributes = function () {};
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlNode.defaults), {
      definitionUrl: null,
      encoding: null,
      cd: "mathmlkeys",
      name: "",
      src: null
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlNode);
  exports.MmlAnnotationXML = a;
  var u = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.properties = {
        isChars: true
      };
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "annotation";
      },
      enumerable: false,
      configurable: true
    });
    e.defaults = n({}, a.defaults);
    return e;
  }(a);
  exports.MmlAnnotation = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}