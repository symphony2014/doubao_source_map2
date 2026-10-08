// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 811233
         */
module.exports = function (module, exports, require) {
  var Q = this && this.__values || function (t) {
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
  var r = this && this.__read || function (t, e) {
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
  var T = this && this.__spreadArray || function (t, e, Q) {
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
  exports.AbstractFactory = undefined;
  var n = function () {
    function t(t) {
      var e;
      var r;
      if (t === undefined) {
        t = null;
      }
      this.defaultKind = "unknown";
      this.nodeMap = new Map();
      this.node = {};
      if (t === null) {
        t = this.constructor.defaultNodes;
      }
      try {
        var T = Q(Object.keys(t));
        var n = T.next();
        for (; !n.done; n = T.next()) {
          var o = n.value;
          this.setNodeClass(o, t[o]);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (n && !n.done && (r = T.return)) {
            r.call(T);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    }
    t.prototype.create = function (t) {
      var e = [];
      var Q = 1;
      for (; Q < arguments.length; Q++) {
        e[Q - 1] = arguments[Q];
      }
      return (this.node[t] || this.node[this.defaultKind]).apply(undefined, T([], r(e), false));
    };
    t.prototype.setNodeClass = function (t, e) {
      this.nodeMap.set(t, e);
      var Q = this;
      var n = this.nodeMap.get(t);
      this.node[t] = function () {
        var t = [];
        var e = 0;
        for (; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
        return new (n.bind.apply(n, T([undefined, Q], r(t), false)))();
      };
    };
    t.prototype.getNodeClass = function (t) {
      return this.nodeMap.get(t);
    };
    t.prototype.deleteNodeClass = function (t) {
      this.nodeMap.delete(t);
      delete this.node[t];
    };
    t.prototype.nodeIsKind = function (t, e) {
      return t instanceof this.getNodeClass(e);
    };
    t.prototype.getKinds = function () {
      return Array.from(this.nodeMap.keys());
    };
    t.defaultNodes = {};
    return t;
  }();
  exports.AbstractFactory = n;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}