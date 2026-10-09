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
         * moduleId: 491072
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
  exports.MmlMstyle = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var attributeInheritanceManager = require("attribute-inheritance-manager") /*id: 497692*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mstyle";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "notParent", {
      get: function () {
        return this.childNodes[0] && this.childNodes[0].childNodes.length === 1;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setChildInheritedAttributes = function (t, e, Q, r) {
      var T = this.attributes.getExplicit("scriptlevel");
      if (T != null) {
        if ((T = T.toString()).match(/^\s*[-+]/)) {
          Q += parseInt(T);
        } else {
          Q = parseInt(T);
        }
        r = false;
      }
      var n = this.attributes.getExplicit("displaystyle");
      if (n != null) {
        e = n === true;
        r = false;
      }
      var o = this.attributes.getExplicit("data-cramped");
      if (o != null) {
        r = o;
      }
      t = this.addInheritedAttributes(t, this.attributes.getAllAttributes());
      this.childNodes[0].setInheritedAttributes(t, e, Q, r);
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlLayoutNode.defaults), {
      scriptlevel: attributeInheritanceManager.INHERIT,
      displaystyle: attributeInheritanceManager.INHERIT,
      scriptsizemultiplier: 1 / Math.sqrt(2),
      scriptminsize: "8px",
      mathbackground: attributeInheritanceManager.INHERIT,
      mathcolor: attributeInheritanceManager.INHERIT,
      dir: attributeInheritanceManager.INHERIT,
      infixlinebreakstyle: "before"
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlLayoutNode);
  exports.MmlMstyle = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}