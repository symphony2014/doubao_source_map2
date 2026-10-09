// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 679038
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
  var o = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.MmlMfrac = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mfrac";
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
    Object.defineProperty(e.prototype, "linebreakContainer", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setTeXclass = function (t) {
      var e;
      var Q;
      this.getPrevClass(t);
      try {
        var r = o(this.childNodes);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          T.value.setTeXclass(null);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (T && !T.done && (Q = r.return)) {
            Q.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return this;
    };
    e.prototype.setChildInheritedAttributes = function (t, e, Q, r) {
      if (!e || Q > 0) {
        Q++;
      }
      this.childNodes[0].setInheritedAttributes(t, false, Q, r);
      this.childNodes[1].setInheritedAttributes(t, false, Q, true);
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlBaseNode.defaults), {
      linethickness: "medium",
      numalign: "center",
      denomalign: "center",
      bevelled: false
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlBaseNode);
  exports.MmlMfrac = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}