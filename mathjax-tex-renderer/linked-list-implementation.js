// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 246004
         */
module.exports = function (module, exports, require) {
  var Q = this && this.__generator || function (t, e) {
    var Q;
    var r;
    var T;
    var n;
    var o = {
      label: 0,
      sent: function () {
        if (T[0] & 1) {
          throw T[1];
        }
        return T[1];
      },
      trys: [],
      ops: []
    };
    n = {
      next: i(0),
      throw: i(1),
      return: i(2)
    };
    if (typeof Symbol == "function") {
      n[Symbol.iterator] = function () {
        return this;
      };
    }
    return n;
    function i(n) {
      return function (i) {
        return function (n) {
          if (Q) {
            throw TypeError("Generator is already executing.");
          }
          while (o) {
            try {
              Q = 1;
              if (r && (T = n[0] & 2 ? r.return : n[0] ? r.throw || ((T = r.return) && T.call(r), 0) : r.next) && !(T = T.call(r, n[1])).done) {
                return T;
              }
              r = 0;
              if (T) {
                n = [n[0] & 2, T.value];
              }
              switch (n[0]) {
                case 0:
                case 1:
                  T = n;
                  break;
                case 4:
                  o.label++;
                  return {
                    value: n[1],
                    done: false
                  };
                case 5:
                  o.label++;
                  r = n[1];
                  n = [0];
                  continue;
                case 7:
                  n = o.ops.pop();
                  o.trys.pop();
                  continue;
                default:
                  if (!(T = (T = o.trys).length > 0 && T[T.length - 1]) && (n[0] === 6 || n[0] === 2)) {
                    o = 0;
                    continue;
                  }
                  if (n[0] === 3 && (!T || n[1] > T[0] && n[1] < T[3])) {
                    o.label = n[1];
                    break;
                  }
                  if (n[0] === 6 && o.label < T[1]) {
                    o.label = T[1];
                    T = n;
                    break;
                  }
                  if (T && o.label < T[2]) {
                    o.label = T[2];
                    o.ops.push(n);
                    break;
                  }
                  if (T[2]) {
                    o.ops.pop();
                  }
                  o.trys.pop();
                  continue;
              }
              n = e.call(t, o);
            } catch (t) {
              n = [6, t];
              r = 0;
            } finally {
              Q = T = 0;
            }
          }
          if (n[0] & 5) {
            throw n[1];
          }
          return {
            value: n[0] ? n[1] : undefined,
            done: true
          };
        }([n, i]);
      };
    }
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
  exports.LinkedList = exports.ListItem = exports.END = undefined;
  exports.END = Symbol();
  function o(t = null) {
    this.next = null;
    this.prev = null;
    this.data = t;
  }
  exports.ListItem = o;
  var i = function () {
    function t() {
      var t = [];
      var Q = 0;
      for (; Q < arguments.length; Q++) {
        t[Q] = arguments[Q];
      }
      this.list = new o(exports.END);
      this.list.next = this.list.prev = this.list;
      this.push.apply(this, T([], r(t), false));
    }
    t.prototype.isBefore = function (t, e) {
      return t < e;
    };
    t.prototype.push = function () {
      var t;
      var e;
      var Q = [];
      var r = 0;
      for (; r < arguments.length; r++) {
        Q[r] = arguments[r];
      }
      try {
        var T = n(Q);
        var i = T.next();
        for (; !i.done; i = T.next()) {
          var a = i.value;
          var u = new o(a);
          u.next = this.list;
          u.prev = this.list.prev;
          this.list.prev = u;
          u.prev.next = u;
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (i && !i.done && (e = T.return)) {
            e.call(T);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return this;
    };
    t.prototype.pop = function () {
      var t = this.list.prev;
      if (t.data === exports.END) {
        return null;
      } else {
        this.list.prev = t.prev;
        t.prev.next = this.list;
        t.next = t.prev = null;
        return t.data;
      }
    };
    t.prototype.unshift = function () {
      var t;
      var e;
      var Q = [];
      var r = 0;
      for (; r < arguments.length; r++) {
        Q[r] = arguments[r];
      }
      try {
        var T = n(Q.slice(0).reverse());
        var i = T.next();
        for (; !i.done; i = T.next()) {
          var a = i.value;
          var u = new o(a);
          u.next = this.list.next;
          u.prev = this.list;
          this.list.next = u;
          u.next.prev = u;
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (i && !i.done && (e = T.return)) {
            e.call(T);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return this;
    };
    t.prototype.shift = function () {
      var t = this.list.next;
      if (t.data === exports.END) {
        return null;
      } else {
        this.list.next = t.next;
        t.next.prev = this.list;
        t.next = t.prev = null;
        return t.data;
      }
    };
    t.prototype.remove = function () {
      var t;
      var Q;
      var r = [];
      var T = 0;
      for (; T < arguments.length; T++) {
        r[T] = arguments[T];
      }
      var o = new Map();
      try {
        var i = n(r);
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var u = a.value;
          o.set(u, true);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (a && !a.done && (Q = i.return)) {
            Q.call(i);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      for (var s = this.list.next; s.data !== exports.END;) {
        var l = s.next;
        if (o.has(s.data)) {
          s.prev.next = s.next;
          s.next.prev = s.prev;
          s.next = s.prev = null;
        }
        s = l;
      }
    };
    t.prototype.clear = function () {
      this.list.next.prev = this.list.prev.next = null;
      this.list.next = this.list.prev = this.list;
      return this;
    };
    t.prototype[Symbol.iterator] = function () {
      var t;
      return Q(this, function (Q) {
        switch (Q.label) {
          case 0:
            t = this.list.next;
            Q.label = 1;
          case 1:
            if (t.data === exports.END) {
              return [3, 3];
            }
            return [4, t.data];
          case 2:
            Q.sent();
            t = t.next;
            return [3, 1];
          case 3:
            return [2];
        }
      });
    };
    t.prototype.reversed = function () {
      var t;
      return Q(this, function (Q) {
        switch (Q.label) {
          case 0:
            t = this.list.prev;
            Q.label = 1;
          case 1:
            if (t.data === exports.END) {
              return [3, 3];
            }
            return [4, t.data];
          case 2:
            Q.sent();
            t = t.prev;
            return [3, 1];
          case 3:
            return [2];
        }
      });
    };
    t.prototype.insert = function (t, Q = null) {
      if (Q === null) {
        Q = this.isBefore.bind(this);
      }
      var r = new o(t);
      var T = this.list.next;
      while (T.data !== exports.END && Q(T.data, r.data)) {
        T = T.next;
      }
      r.prev = T.prev;
      r.next = T;
      T.prev.next = T.prev = r;
      return this;
    };
    t.prototype.sort = function (e = null) {
      if (e === null) {
        e = this.isBefore.bind(this);
      }
      var Q;
      var r;
      var T = [];
      try {
        var o = n(this);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          T.push(new t(a));
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (r = o.return)) {
            r.call(o);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      for (this.list.next = this.list.prev = this.list; T.length > 1;) {
        var u = T.shift();
        var s = T.shift();
        u.merge(s, e);
        T.push(u);
      }
      if (T.length) {
        this.list = T[0].list;
      }
      return this;
    };
    t.prototype.merge = function (t, Q = null) {
      if (Q === null) {
        Q = this.isBefore.bind(this);
      }
      var T;
      var n;
      var o;
      var i;
      var a;
      var u = this.list.next;
      var s = t.list.next;
      while (u.data !== exports.END && s.data !== exports.END) {
        if (Q(s.data, u.data)) {
          T = r([u, s], 2);
          s.prev.next = T[0];
          u.prev.next = T[1];
          n = r([u.prev, s.prev], 2);
          s.prev = n[0];
          u.prev = n[1];
          o = r([t.list, this.list], 2);
          this.list.prev.next = o[0];
          t.list.prev.next = o[1];
          i = r([t.list.prev, this.list.prev], 2);
          this.list.prev = i[0];
          t.list.prev = i[1];
          u = (a = r([s.next, u], 2))[0];
          s = a[1];
        } else {
          u = u.next;
        }
      }
      if (s.data !== exports.END) {
        this.list.prev.next = t.list.next;
        t.list.next.prev = this.list.prev;
        t.list.prev.next = this.list;
        this.list.prev = t.list.prev;
        t.list.next = t.list.prev = t.list;
      }
      return this;
    };
    return t;
  }();
  exports.LinkedList = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}