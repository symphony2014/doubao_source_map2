// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 261473
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
  exports.MmlInferredMrow = exports.MmlMrow = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var a = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e._core = null;
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mrow";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isSpacelike", {
      get: function () {
        var t;
        var e;
        try {
          var Q = o(this.childNodes);
          var r = Q.next();
          for (; !r.done; r = Q.next()) {
            if (!r.value.isSpacelike) {
              return false;
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (r && !r.done && (e = Q.return)) {
              e.call(Q);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isEmbellished", {
      get: function () {
        var t;
        var e;
        var Q = false;
        var r = 0;
        try {
          var T = o(this.childNodes);
          var n = T.next();
          for (; !n.done; n = T.next()) {
            var i = n.value;
            if (i) {
              if (i.isEmbellished) {
                if (Q) {
                  return false;
                }
                Q = true;
                this._core = r;
              } else if (!i.isSpacelike) {
                return false;
              }
            }
            r++;
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (n && !n.done && (e = T.return)) {
              e.call(T);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return Q;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.core = function () {
      if (this.isEmbellished && this._core != null) {
        return this.childNodes[this._core];
      } else {
        return this;
      }
    };
    e.prototype.coreMO = function () {
      if (this.isEmbellished && this._core != null) {
        return this.childNodes[this._core].coreMO();
      } else {
        return this;
      }
    };
    e.prototype.nonSpaceLength = function () {
      var t;
      var e;
      var Q = 0;
      try {
        var r = o(this.childNodes);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value;
          if (n && !n.isSpacelike) {
            Q++;
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (T && !T.done && (e = r.return)) {
            e.call(r);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return Q;
    };
    e.prototype.firstNonSpace = function () {
      var t;
      var e;
      try {
        var Q = o(this.childNodes);
        var r = Q.next();
        for (; !r.done; r = Q.next()) {
          var T = r.value;
          if (T && !T.isSpacelike) {
            return T;
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (r && !r.done && (e = Q.return)) {
            e.call(Q);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return null;
    };
    e.prototype.lastNonSpace = function () {
      for (var t = this.childNodes.length; --t >= 0;) {
        var e = this.childNodes[t];
        if (e && !e.isSpacelike) {
          return e;
        }
      }
      return null;
    };
    e.prototype.setTeXclass = function (t) {
      var e;
      var Q;
      var r;
      var T;
      if (this.getProperty("open") != null || this.getProperty("close") != null) {
        this.getPrevClass(t);
        t = null;
        try {
          var n = o(this.childNodes);
          var a = n.next();
          for (; !a.done; a = n.next()) {
            var u = a.value;
            t = u.setTeXclass(t);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (a && !a.done && (Q = n.return)) {
              Q.call(n);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        if (this.texClass == null) {
          this.texClass = mathmlAbstractNodeClasses.TEXCLASS.INNER;
        }
      } else {
        try {
          var s = o(this.childNodes);
          var l = s.next();
          for (; !l.done; l = s.next()) {
            var u = l.value;
            t = u.setTeXclass(t);
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (l && !l.done && (T = s.return)) {
              T.call(s);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
        if (this.childNodes[0]) {
          this.updateTeXclass(this.childNodes[0]);
        }
      }
      return t;
    };
    e.defaults = n({}, mathmlAbstractNodeClasses.AbstractMmlNode.defaults);
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlNode);
  exports.MmlMrow = a;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "inferredMrow";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isInferred", {
      get: function () {
        return true;
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
    e.prototype.toString = function () {
      return "[" + this.childNodes.join(",") + "]";
    };
    e.defaults = a.defaults;
    return e;
  }(a);
  exports.MmlInferredMrow = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}