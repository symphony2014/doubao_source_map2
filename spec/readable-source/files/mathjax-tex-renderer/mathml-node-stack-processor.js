// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(352636) to 'mathml-abstract-node-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 384745
         */
module.exports = function (module, exports, require) {
  var r = this && this.__values || function (t) {
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
  var T = this && this.__read || function (t, e) {
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
  var n = this && this.__spreadArray || function (t, e, Q) {
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
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var i = o(require("mathml-abstract-node-util") /*id: 352636*/);
  var a = function () {
    function t(t, e, Q) {
      this._factory = t;
      this._env = e;
      this.global = {};
      this.stack = [];
      this.global = {
        isInner: Q
      };
      this.stack = [this._factory.create("start", this.global)];
      if (e) {
        this.stack[0].env = e;
      }
      this.env = this.stack[0].env;
    }
    Object.defineProperty(t.prototype, "env", {
      get: function () {
        return this._env;
      },
      set: function (t) {
        this._env = t;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.Push = function () {
      var t;
      var e;
      var Q = [];
      var o = 0;
      for (; o < arguments.length; o++) {
        Q[o] = arguments[o];
      }
      try {
        var a = r(Q);
        var u = a.next();
        for (; !u.done; u = a.next()) {
          var s = u.value;
          if (s) {
            var l = i.default.isNode(s) ? this._factory.create("mml", s) : s;
            l.global = this.global;
            var c = T(this.stack.length ? this.Top().checkItem(l) : [null, true], 2);
            var p = c[0];
            if (c[1]) {
              if (p) {
                this.Pop();
                this.Push.apply(this, n([], T(p), false));
                continue;
              }
              this.stack.push(l);
              if (l.env) {
                if (l.copyEnv) {
                  Object.assign(l.env, this.env);
                }
                this.env = l.env;
              } else {
                l.env = this.env;
              }
            }
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (u && !u.done && (e = a.return)) {
            e.call(a);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    t.prototype.Pop = function () {
      var t = this.stack.pop();
      if (!t.isOpen) {
        delete t.env;
      }
      this.env = this.stack.length ? this.Top().env : {};
      return t;
    };
    t.prototype.Top = function (t = 1) {
      if (this.stack.length < t) {
        return null;
      } else {
        return this.stack[this.stack.length - t];
      }
    };
    t.prototype.Prev = function (t) {
      var e = this.Top();
      if (t) {
        return e.First;
      } else {
        return e.Pop();
      }
    };
    t.prototype.toString = function () {
      return "stack[\n  " + this.stack.join("\n  ") + "\n]";
    };
    return t;
  }();
  exports.default = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}