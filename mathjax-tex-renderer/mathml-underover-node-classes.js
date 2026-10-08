// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 595122
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
  exports.MmlMover = exports.MmlMunder = exports.MmlMunderover = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var i = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "munderover";
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
    Object.defineProperty(e.prototype, "under", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "over", {
      get: function () {
        return 2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "linebreakContainer", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setChildInheritedAttributes = function (t, e, Q, r) {
      var T = this.childNodes;
      T[0].setInheritedAttributes(t, e, Q, r || !!T[this.over]);
      var n = !e && !!T[0].coreMO().attributes.get("movablelimits");
      var o = this.constructor.ACCENTS;
      T[1].setInheritedAttributes(t, false, this.getScriptlevel(o[1], n, Q), r || this.under === 1);
      this.setInheritedAccent(1, o[1], e, Q, r, n);
      if (T[2]) {
        T[2].setInheritedAttributes(t, false, this.getScriptlevel(o[2], n, Q), r || this.under === 2);
        this.setInheritedAccent(2, o[2], e, Q, r, n);
      }
    };
    e.prototype.getScriptlevel = function (t, e, Q) {
      if (e || !this.attributes.get(t)) {
        Q++;
      }
      return Q;
    };
    e.prototype.setInheritedAccent = function (t, e, Q, r, T, n) {
      var o = this.childNodes[t];
      if (this.attributes.getExplicit(e) == null && o.isEmbellished) {
        var i = o.coreMO().attributes.get("accent");
        this.attributes.setInherited(e, i);
        if (i !== this.attributes.getDefault(e)) {
          o.setInheritedAttributes({}, Q, this.getScriptlevel(e, n, r), T);
        }
      }
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlBaseNode.defaults), {
      accent: false,
      accentunder: false,
      align: "center"
    });
    e.ACCENTS = ["", "accentunder", "accent"];
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlBaseNode);
  exports.MmlMunderover = i;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "munder";
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
  exports.MmlMunder = a;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mover";
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
    Object.defineProperty(e.prototype, "over", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "under", {
      get: function () {
        return 2;
      },
      enumerable: false,
      configurable: true
    });
    e.defaults = n({}, i.defaults);
    e.ACCENTS = ["", "accent", "accentunder"];
    return e;
  }(i);
  exports.MmlMover = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}