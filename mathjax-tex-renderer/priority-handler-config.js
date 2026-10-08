// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'priorityListStructure'
// - Resolved require(591133) to 'priority-list-structure'
// - Renamed variable 'u' to 'priorityFunctionList'
// - Resolved require(238191) to 'priority-function-list'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 706684
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n;
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
  var i = this && this.__read || function (t, e) {
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
  exports.SubHandlers = exports.SubHandler = exports.MapHandler = undefined;
  var priorityListStructure = require("priority-list-structure") /*id: 591133*/;
  var priorityFunctionList = require("priority-function-list") /*id: 238191*/;
  r = n = exports.MapHandler ||= {};
  T = new Map();
  r.register = function (t) {
    T.set(t.name, t);
  };
  r.getMap = function (t) {
    return T.get(t);
  };
  var s = function () {
    function t() {
      this._configuration = new priorityListStructure.PrioritizedList();
      this._fallback = new priorityFunctionList.FunctionList();
    }
    t.prototype.add = function (t, e, Q) {
      var r;
      var T;
      if (Q === undefined) {
        Q = priorityListStructure.PrioritizedList.DEFAULTPRIORITY;
      }
      try {
        var i = o(t.slice().reverse());
        var u = i.next();
        for (; !u.done; u = i.next()) {
          var s = u.value;
          var l = n.getMap(s);
          if (!l) {
            this.warn("Configuration " + s + " not found! Omitted.");
            return;
          }
          this._configuration.add(l, Q);
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (T = i.return)) {
            T.call(i);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      if (e) {
        this._fallback.add(e, Q);
      }
    };
    t.prototype.parse = function (t) {
      try {
        var e;
        var Q;
        var r = o(this._configuration);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value.item.parse(t);
          if (n) {
            return n;
          }
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
      var a = i(t, 2);
      var u = a[0];
      var s = a[1];
      Array.from(this._fallback)[0].item(u, s);
    };
    t.prototype.lookup = function (t) {
      var e = this.applicable(t);
      if (e) {
        return e.lookup(t);
      } else {
        return null;
      }
    };
    t.prototype.contains = function (t) {
      return !!this.applicable(t);
    };
    t.prototype.toString = function () {
      var t;
      var e;
      var Q = [];
      try {
        var r = o(this._configuration);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value.item;
          Q.push(n.name);
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
      return Q.join(", ");
    };
    t.prototype.applicable = function (t) {
      var e;
      var Q;
      try {
        var r = o(this._configuration);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value.item;
          if (n.contains(t)) {
            return n;
          }
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
      return null;
    };
    t.prototype.retrieve = function (t) {
      var e;
      var Q;
      try {
        var r = o(this._configuration);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value.item;
          if (n.name === t) {
            return n;
          }
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
      return null;
    };
    t.prototype.warn = function (t) {};
    return t;
  }();
  exports.SubHandler = s;
  var l = function () {
    function t() {
      this.map = new Map();
    }
    t.prototype.add = function (t, e, Q) {
      var r;
      var T;
      if (Q === undefined) {
        Q = priorityListStructure.PrioritizedList.DEFAULTPRIORITY;
      }
      try {
        var n = o(Object.keys(t));
        var i = n.next();
        for (; !i.done; i = n.next()) {
          var u = i.value;
          var l = this.get(u);
          if (!l) {
            l = new s();
            this.set(u, l);
          }
          l.add(t[u], e[u], Q);
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (T = n.return)) {
            T.call(n);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    };
    t.prototype.set = function (t, e) {
      this.map.set(t, e);
    };
    t.prototype.get = function (t) {
      return this.map.get(t);
    };
    t.prototype.retrieve = function (t) {
      var e;
      var Q;
      try {
        var r = o(this.map.values());
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value.retrieve(t);
          if (n) {
            return n;
          }
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
      return null;
    };
    t.prototype.keys = function () {
      return this.map.keys();
    };
    return t;
  }();
  exports.SubHandlers = l;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}