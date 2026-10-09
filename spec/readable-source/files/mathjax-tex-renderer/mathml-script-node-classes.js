// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 595554
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
  exports.MmlMsup = exports.MmlMsub = exports.MmlMsubsup = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var i = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "msubsup";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "arity", {
      get: function () {
        return 3;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "base", {
      get: function () {
        return 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "sub", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "sup", {
      get: function () {
        return 2;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setChildInheritedAttributes = function (t, e, Q, r) {
      var T = this.childNodes;
      T[0].setInheritedAttributes(t, e, Q, r);
      T[1].setInheritedAttributes(t, false, Q + 1, r || this.sub === 1);
      if (T[2]) {
        T[2].setInheritedAttributes(t, false, Q + 1, r || this.sub === 2);
      }
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlBaseNode.defaults), {
      subscriptshift: "",
      superscriptshift: ""
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlBaseNode);
  exports.MmlMsubsup = i;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "msub";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "arity", {
      get: function () {
        return 2;
      },
      enumerable: false,
      configurable: true
    });
    e.defaults = n({}, i.defaults);
    return e;
  }(i);
  exports.MmlMsub = a;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "msup";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "arity", {
      get: function () {
        return 2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "sup", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "sub", {
      get: function () {
        return 2;
      },
      enumerable: false,
      configurable: true
    });
    e.defaults = n({}, i.defaults);
    return e;
  }(i);
  exports.MmlMsup = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}