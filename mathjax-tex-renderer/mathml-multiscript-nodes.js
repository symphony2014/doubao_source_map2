// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'i' to 'mathmlScriptNodeClasses'
// - Resolved require(595554) to 'mathml-script-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 664693
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
  exports.MmlNone = exports.MmlMprescripts = exports.MmlMmultiscripts = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var mathmlScriptNodeClasses = require("mathml-script-node-classes") /*id: 595554*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mmultiscripts";
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
    e.prototype.setChildInheritedAttributes = function (t, e, Q, r) {
      this.childNodes[0].setInheritedAttributes(t, e, Q, r);
      var T = false;
      var n = 1;
      var o = 0;
      for (; n < this.childNodes.length; n++) {
        var i = this.childNodes[n];
        if (i.isKind("mprescripts")) {
          if (!T && (T = true, n % 2 == 0)) {
            var a = this.factory.create("mrow");
            this.childNodes.splice(n, 0, a);
            a.parent = this;
            n++;
          }
        } else {
          var u = r || o % 2 == 0;
          i.setInheritedAttributes(t, false, Q + 1, u);
          o++;
        }
      }
      if (this.childNodes.length % 2 == +!!T) {
        this.appendChild(this.factory.create("mrow"));
        this.childNodes[this.childNodes.length - 1].setInheritedAttributes(t, false, Q + 1, r);
      }
    };
    e.prototype.verifyChildren = function (e) {
      var Q = false;
      var r = e.fixMmultiscripts;
      var T = 0;
      for (; T < this.childNodes.length; T++) {
        var n = this.childNodes[T];
        if (n.isKind("mprescripts")) {
          if (Q) {
            n.mError(n.kind + " can only appear once in " + this.kind, e, true);
          } else {
            Q = true;
            if (T % 2 == 0 && !r) {
              this.mError("There must be an equal number of prescripts of each type", e);
            }
          }
        }
      }
      if (this.childNodes.length % 2 == +!!Q && !r) {
        this.mError("There must be an equal number of scripts of each type", e);
      }
      t.prototype.verifyChildren.call(this, e);
    };
    e.defaults = n({}, mathmlScriptNodeClasses.MmlMsubsup.defaults);
    return e;
  }(mathmlScriptNodeClasses.MmlMsubsup);
  exports.MmlMmultiscripts = a;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mprescripts";
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
    e.prototype.verifyTree = function (e) {
      t.prototype.verifyTree.call(this, e);
      if (this.parent && !this.parent.isKind("mmultiscripts")) {
        this.mError(this.kind + " must be a child of mmultiscripts", e, true);
      }
    };
    e.defaults = n({}, mathmlAbstractNodeClasses.AbstractMmlNode.defaults);
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlNode);
  exports.MmlMprescripts = u;
  var s = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "none";
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
    e.prototype.verifyTree = function (e) {
      t.prototype.verifyTree.call(this, e);
      if (this.parent && !this.parent.isKind("mmultiscripts")) {
        this.mError(this.kind + " must be a child of mmultiscripts", e, true);
      }
    };
    e.defaults = n({}, mathmlAbstractNodeClasses.AbstractMmlNode.defaults);
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlNode);
  exports.MmlNone = s;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}