// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(591133) to 'priority-list-structure'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 238191
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
  var n = this && this.__values || function (t) {
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
  var o = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var i = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.FunctionList = undefined;
  var a = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.execute = function () {
      var t;
      var e;
      var Q = [];
      var r = 0;
      for (; r < arguments.length; r++) {
        Q[r] = arguments[r];
      }
      try {
        var T = n(this);
        var a = T.next();
        for (; !a.done; a = T.next()) {
          var u = a.value;
          var s = u.item.apply(u, i([], o(Q), false));
          if (s === false) {
            return false;
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (a && !a.done && (e = T.return)) {
            e.call(T);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return true;
    };
    e.prototype.asyncExecute = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      var Q = -1;
      var r = this.items;
      return new Promise(function (e, T) {
        (function n() {
          var a;
          while (++Q < r.length) {
            var u = (a = r[Q]).item.apply(a, i([], o(t), false));
            if (u instanceof Promise) {
              u.then(n).catch(function (t) {
                return T(t);
              });
              return;
            }
            if (u === false) {
              e(false);
              return;
            }
          }
          e(true);
        })();
      });
    };
    return e;
  }(require("priority-list-structure") /*id: 591133*/.PrioritizedList);
  exports.FunctionList = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}