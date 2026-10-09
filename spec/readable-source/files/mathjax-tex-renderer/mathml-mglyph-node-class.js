// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 441680
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
  exports.MmlMglyph = undefined;
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
        return "mglyph";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.verifyAttributes = function (e) {
      var Q = this.attributes.getList("src", "fontfamily", "index");
      var r = Q.src;
      var T = Q.fontfamily;
      var n = Q.index;
      if (r === "" && (T === "" || n === "")) {
        this.mError("mglyph must have either src or fontfamily and index attributes", e, true);
      } else {
        t.prototype.verifyAttributes.call(this, e);
      }
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlTokenNode.defaults), {
      alt: "",
      src: "",
      index: "",
      width: "auto",
      height: "auto",
      valign: "0em"
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlTokenNode);
  exports.MmlMglyph = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}