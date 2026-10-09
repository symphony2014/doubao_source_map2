// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'i' to 'attributeInheritanceManager'
// - Resolved require(497692) to 'attribute-inheritance-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 307617
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
  exports.MmlMaligngroup = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var attributeInheritanceManager = require("attribute-inheritance-manager") /*id: 497692*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "maligngroup";
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
    e.prototype.setChildInheritedAttributes = function (e, Q, r, T) {
      e = this.addInheritedAttributes(e, this.attributes.getAllAttributes());
      t.prototype.setChildInheritedAttributes.call(this, e, Q, r, T);
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlLayoutNode.defaults), {
      groupalign: attributeInheritanceManager.INHERIT
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlLayoutNode);
  exports.MmlMaligngroup = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}