// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(342117) to 'message-format-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 174186
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
  var n = this && this.__read || function (t, e) {
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
  var o = this && this.__spreadArray || function (t, e, Q) {
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
  var i = this && this.__values || function (t) {
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
  var a = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.BaseItem = exports.MmlStack = undefined;
  var u = a(require("message-format-util") /*id: 342117*/);
  var s = function () {
    function t(t) {
      this._nodes = t;
    }
    Object.defineProperty(t.prototype, "nodes", {
      get: function () {
        return this._nodes;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.Push = function () {
      var t;
      var e = [];
      var Q = 0;
      for (; Q < arguments.length; Q++) {
        e[Q] = arguments[Q];
      }
      (t = this._nodes).push.apply(t, o([], n(e), false));
    };
    t.prototype.Pop = function () {
      return this._nodes.pop();
    };
    Object.defineProperty(t.prototype, "First", {
      get: function () {
        return this._nodes[this.Size() - 1];
      },
      set: function (t) {
        this._nodes[this.Size() - 1] = t;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "Last", {
      get: function () {
        return this._nodes[0];
      },
      set: function (t) {
        this._nodes[0] = t;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.Peek = function (t) {
      if (t == null) {
        t = 1;
      }
      return this._nodes.slice(this.Size() - t);
    };
    t.prototype.Size = function () {
      return this._nodes.length;
    };
    t.prototype.Clear = function () {
      this._nodes = [];
    };
    t.prototype.toMml = function (t = true, e) {
      if (this._nodes.length !== 1 || e) {
        return this.create("node", t ? "inferredMrow" : "mrow", this._nodes, {});
      } else {
        return this.First;
      }
    };
    t.prototype.create = function (t) {
      var e;
      var Q = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        Q[r - 1] = arguments[r];
      }
      return (e = this.factory.configuration.nodeFactory).create.apply(e, o([t], n(Q), false));
    };
    return t;
  }();
  exports.MmlStack = s;
  var l = function (t) {
    function e(e) {
      var Q = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        Q[r - 1] = arguments[r];
      }
      var T = t.call(this, Q) || this;
      T.factory = e;
      T.global = {};
      T._properties = {};
      if (T.isOpen) {
        T._env = {};
      }
      return T;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "base";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "env", {
      get: function () {
        return this._env;
      },
      set: function (t) {
        this._env = t;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "copyEnv", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.getProperty = function (t) {
      return this._properties[t];
    };
    e.prototype.setProperty = function (t, e) {
      this._properties[t] = e;
      return this;
    };
    Object.defineProperty(e.prototype, "isOpen", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isClose", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isFinal", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.isKind = function (t) {
      return t === this.kind;
    };
    e.prototype.checkItem = function (t) {
      if (t.isKind("over") && this.isOpen) {
        t.setProperty("num", this.toMml(false));
        this.Clear();
      }
      if (t.isKind("cell") && this.isOpen) {
        if (t.getProperty("linebreak")) {
          return e.fail;
        }
        throw new u.default("Misplaced", "Misplaced %1", t.getName());
      }
      if (t.isClose && this.getErrors(t.kind)) {
        var Q = n(this.getErrors(t.kind), 2);
        var r = Q[0];
        var T = Q[1];
        throw new u.default(r, T, t.getName());
      }
      if (t.isFinal) {
        this.Push(t.First);
        return e.fail;
      } else {
        return e.success;
      }
    };
    e.prototype.clearEnv = function () {
      var t;
      var e;
      try {
        var Q = i(Object.keys(this.env));
        var r = Q.next();
        for (; !r.done; r = Q.next()) {
          var T = r.value;
          delete this.env[T];
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
    };
    e.prototype.setProperties = function (t) {
      Object.assign(this._properties, t);
      return this;
    };
    e.prototype.getName = function () {
      return this.getProperty("name");
    };
    e.prototype.toString = function () {
      return this.kind + "[" + this.nodes.join("; ") + "]";
    };
    e.prototype.getErrors = function (t) {
      return (this.constructor.errors || {})[t] || e.errors[t];
    };
    e.fail = [null, false];
    e.success = [null, true];
    e.errors = {
      end: ["MissingBeginExtraEnd", "Missing \\begin{%1} or extra \\end{%1}"],
      close: ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"],
      right: ["MissingLeftExtraRight", "Missing \\left or extra \\right"],
      middle: ["ExtraMiddle", "Extra \\middle"]
    };
    return e;
  }(s);
  exports.BaseItem = l;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}