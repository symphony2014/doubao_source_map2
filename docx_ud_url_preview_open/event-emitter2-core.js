// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 944518
         */
module.exports = function (module, exports, require) {
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  (function (t) {
    var i = Object.hasOwnProperty;
    var r = Array.isArray ? Array.isArray : function (e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    };
    var o = typeof processBrowserShim == "object" && typeof processBrowserShim.nextTick == "function";
    var s = typeof Symbol == "function";
    var l = typeof Reflect == "object";
    var a = typeof setImmediate == "function" ? setImmediate : setTimeout;
    var c = s ? l && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function (e) {
      var t = Object.getOwnPropertyNames(e);
      t.push.apply(t, Object.getOwnPropertySymbols(e));
      return t;
    } : Object.keys;
    function u() {
      this._events = {};
      if (this._conf) {
        g.call(this, this._conf);
      }
    }
    function g(e) {
      if (e) {
        this._conf = e;
        if (e.delimiter) {
          this.delimiter = e.delimiter;
        }
        if (e.maxListeners !== t) {
          this._maxListeners = e.maxListeners;
        }
        if (e.wildcard) {
          this.wildcard = e.wildcard;
        }
        if (e.newListener) {
          this._newListener = e.newListener;
        }
        if (e.removeListener) {
          this._removeListener = e.removeListener;
        }
        if (e.verboseMemoryLeak) {
          this.verboseMemoryLeak = e.verboseMemoryLeak;
        }
        if (e.ignoreErrors) {
          this.ignoreErrors = e.ignoreErrors;
        }
        if (this.wildcard) {
          this.listenerTree = {};
        }
      }
    }
    function M(e, t) {
      var i = "(node) warning: possible EventEmitter memory leak detected. " + e + " listeners added. Use emitter.setMaxListeners() to increase limit.";
      if (this.verboseMemoryLeak) {
        i += " Event name: " + t + ".";
      }
      if (processBrowserShim !== undefined && processBrowserShim.emitWarning) {
        var r = Error(i);
        r.name = "MaxListenersExceededWarning";
        r.emitter = this;
        r.count = e;
        processBrowserShim.emitWarning(r);
      }
    }
    function d(e, t, i) {
      var n = arguments.length;
      switch (n) {
        case 0:
          return [];
        case 1:
          return [e];
        case 2:
          return [e, t];
        case 3:
          return [e, t, i];
        default:
          var r = Array(n);
          while (n--) {
            r[n] = arguments[n];
          }
          return r;
      }
    }
    function I(e, i) {
      var n = {};
      var r = e.length;
      var o = i ? i.length : 0;
      var s = 0;
      for (; s < r; s++) {
        n[e[s]] = s < o ? i[s] : t;
      }
      return n;
    }
    function p(e, t, i) {
      this._emitter = e;
      this._target = t;
      this._listeners = {};
      this._listenersCount = 0;
      if (i.on || i.off) {
        n = i.on;
        r = i.off;
      }
      if (t.addEventListener) {
        n = t.addEventListener;
        r = t.removeEventListener;
      } else if (t.addListener) {
        n = t.addListener;
        r = t.removeListener;
      } else if (t.on) {
        n = t.on;
        r = t.off;
      }
      if (!n && !r) {
        throw Error("target does not implement any known event API");
      }
      if (typeof n != "function") {
        throw TypeError("on method must be a function");
      }
      if (typeof r != "function") {
        throw TypeError("off method must be a function");
      }
      this._on = n;
      this._off = r;
      var n;
      var r;
      var o = e._observers;
      if (o) {
        o.push(this);
      } else {
        e._observers = [this];
      }
    }
    function y(e, n, r, o) {
      var s;
      var l;
      var a;
      var c = Object.assign({}, n);
      if (!e) {
        return c;
      }
      if (typeof e != "object") {
        throw TypeError("options must be an object");
      }
      var u = Object.keys(e);
      var g = u.length;
      function M(e) {
        throw Error("Invalid \"" + s + "\" option value" + (e ? ". Reason: " + e : ""));
      }
      for (var d = 0; d < g; d++) {
        s = u[d];
        if (!o && !i.call(n, s)) {
          throw Error("Unknown \"" + s + "\" option");
        }
        if (t !== (l = e[s])) {
          a = r[s];
          c[s] = a ? a(l, M) : l;
        }
      }
      return c;
    }
    function h(e, t) {
      if (typeof e != "function" || !e.hasOwnProperty("prototype")) {
        t("value must be a constructor");
      }
      return e;
    }
    function N(e) {
      var t = "value must be type of " + e.join("|");
      var i = e.length;
      var n = e[0];
      var r = e[1];
      if (i === 1) {
        return function (e, i) {
          if (typeof e === n) {
            return e;
          }
          i(t);
        };
      } else if (i === 2) {
        return function (e, i) {
          var o = typeof e;
          if (o === n || o === r) {
            return e;
          }
          i(t);
        };
      } else {
        return function (n, r) {
          var o = typeof n;
          var s = i;
          while (s-- > 0) {
            if (o === e[s]) {
              return n;
            }
          }
          r(t);
        };
      }
    }
    Object.assign(p.prototype, {
      subscribe: function (e, t, i) {
        var n = this;
        var r = this._target;
        var o = this._emitter;
        var s = this._listeners;
        function l() {
          var n = d.apply(null, arguments);
          var s = {
            data: n,
            name: t,
            original: e
          };
          if (i) {
            if (i.call(r, s) !== false) {
              o.emit.apply(o, [s.name].concat(n));
            }
            return;
          }
          o.emit.apply(o, [t].concat(n));
        }
        if (s[e]) {
          throw Error("Event '" + e + "' is already listening");
        }
        this._listenersCount++;
        if (o._newListener && o._removeListener && !n._onNewListener) {
          this._onNewListener = function (i) {
            if (i === t && s[e] === null) {
              s[e] = l;
              n._on.call(r, e, l);
            }
          };
          o.on("newListener", this._onNewListener);
          this._onRemoveListener = function (i) {
            if (i === t && !o.hasListeners(i) && s[e]) {
              s[e] = null;
              n._off.call(r, e, l);
            }
          };
          s[e] = null;
          o.on("removeListener", this._onRemoveListener);
        } else {
          s[e] = l;
          n._on.call(r, e, l);
        }
      },
      unsubscribe: function (e) {
        var t;
        var i;
        var n;
        var r = this;
        var o = this._listeners;
        var s = this._emitter;
        var l = this._off;
        var a = this._target;
        if (e && typeof e != "string") {
          throw TypeError("event must be a string");
        }
        function u() {
          if (r._onNewListener) {
            s.off("newListener", r._onNewListener);
            s.off("removeListener", r._onRemoveListener);
            r._onNewListener = null;
            r._onRemoveListener = null;
          }
          var e = f.call(s, r);
          s._observers.splice(e, 1);
        }
        if (e) {
          if (!(t = o[e])) {
            return;
          }
          l.call(a, e, t);
          delete o[e];
          if (! --this._listenersCount) {
            u();
          }
        } else {
          for (n = (i = c(o)).length; n-- > 0;) {
            e = i[n];
            l.call(a, e, o[e]);
          }
          this._listeners = {};
          this._listenersCount = 0;
          u();
        }
      }
    });
    var m = N(["function"]);
    var C = N(["object", "function"]);
    function A(e, t, i) {
      var n;
      var r;
      var o;
      var s = 0;
      var l = new e(function (a, c, u) {
        function g() {
          r &&= null;
          if (s) {
            clearTimeout(s);
            s = 0;
          }
        }
        n = !(i = y(i, {
          timeout: 0,
          overload: false
        }, {
          timeout: function (e, t) {
            if (typeof (e *= 1) != "number" || e < 0 || !Number.isFinite(e)) {
              t("timeout must be a positive number");
            }
            return e;
          }
        })).overload && typeof e.prototype.cancel == "function" && typeof u == "function";
        function M(e) {
          g();
          a(e);
        }
        function d(e) {
          g();
          c(e);
        }
        if (n) {
          t(M, d, u);
        } else {
          r = [function (e) {
            d(e || Error("canceled"));
          }];
          t(M, d, function (e) {
            if (o) {
              throw Error("Unable to subscribe on cancel event asynchronously");
            }
            if (typeof e != "function") {
              throw TypeError("onCancel callback must be a function");
            }
            r.push(e);
          });
          o = true;
        }
        if (i.timeout > 0) {
          s = setTimeout(function () {
            var e = Error("timeout");
            e.code = "ETIMEDOUT";
            s = 0;
            l.cancel(e);
            c(e);
          }, i.timeout);
        }
      });
      if (!n) {
        l.cancel = function (e) {
          if (r) {
            var t = r.length;
            var i = 1;
            for (; i < t; i++) {
              r[i](e);
            }
            r[0](e);
            r = null;
          }
        };
      }
      return l;
    }
    function f(e) {
      var t = this._observers;
      if (!t) {
        return -1;
      }
      var i = t.length;
      var n = 0;
      for (; n < i; n++) {
        if (t[n]._target === e) {
          return n;
        }
      }
      return -1;
    }
    function j(e, t, i, n, r) {
      if (!i) {
        return null;
      }
      if (n === 0) {
        var o = typeof t;
        if (o === "string") {
          var s;
          var l;
          var a = 0;
          var u = 0;
          var g = this.delimiter;
          var M = g.length;
          if ((l = t.indexOf(g)) !== -1) {
            s = [,,,,,];
            do {
              s[a++] = t.slice(u, l);
              u = l + M;
            } while ((l = t.indexOf(g, u)) !== -1);
            s[a++] = t.slice(u);
            t = s;
            r = a;
          } else {
            t = [t];
            r = 1;
          }
        } else if (o === "object") {
          r = t.length;
        } else {
          t = [t];
          r = 1;
        }
      }
      var d;
      var I;
      var p;
      var y;
      var h;
      var N;
      var m;
      var C = null;
      var A = t[n];
      var f = t[n + 1];
      if (n === r) {
        if (i._listeners) {
          if (typeof i._listeners == "function") {
            if (e) {
              e.push(i._listeners);
            }
          } else if (e) {
            e.push.apply(e, i._listeners);
          }
          C = [i];
        }
      } else {
        if (A === "*") {
          for (l = (N = c(i)).length; l-- > 0;) {
            if ((d = N[l]) !== "_listeners" && (m = j(e, t, i[d], n + 1, r))) {
              if (C) {
                C.push.apply(C, m);
              } else {
                C = m;
              }
            }
          }
          return C;
        }
        if (A === "**") {
          if ((h = n + 1 === r || n + 2 === r && f === "*") && i._listeners) {
            C = j(e, t, i, r, r);
          }
          l = (N = c(i)).length;
          while (l-- > 0) {
            if ((d = N[l]) !== "_listeners") {
              if (d === "*" || d === "**") {
                if (i[d]._listeners && !h && (m = j(e, t, i[d], r, r))) {
                  if (C) {
                    C.push.apply(C, m);
                  } else {
                    C = m;
                  }
                }
                m = j(e, t, i[d], n, r);
              } else {
                m = d === f ? j(e, t, i[d], n + 2, r) : j(e, t, i[d], n, r);
              }
              if (m) {
                if (C) {
                  C.push.apply(C, m);
                } else {
                  C = m;
                }
              }
            }
          }
          return C;
        }
        if (i[A]) {
          C = j(e, t, i[A], n + 1, r);
        }
      }
      if (I = i["*"]) {
        j(e, t, I, n + 1, r);
      }
      if (p = i["**"]) {
        if (n < r) {
          if (p._listeners) {
            j(e, t, p, r, r);
          }
          l = (N = c(p)).length;
          while (l-- > 0) {
            if ((d = N[l]) !== "_listeners") {
              if (d === f) {
                j(e, t, p[d], n + 2, r);
              } else if (d === A) {
                j(e, t, p[d], n + 1, r);
              } else {
                (y = {})[d] = p[d];
                j(e, t, {
                  "**": y
                }, n + 1, r);
              }
            }
          }
        } else if (p._listeners) {
          j(e, t, p, r, r);
        } else if (p["*"] && p["*"]._listeners) {
          j(e, t, p["*"], r, r);
        }
      }
      return C;
    }
    function v(e, t, i) {
      var n;
      var r;
      var o = 0;
      var s = 0;
      var l = this.delimiter;
      var a = l.length;
      if (typeof e == "string") {
        if ((n = e.indexOf(l)) !== -1) {
          r = [,,,,,];
          do {
            r[o++] = e.slice(s, n);
            s = n + a;
          } while ((n = e.indexOf(l, s)) !== -1);
          r[o++] = e.slice(s);
        } else {
          r = [e];
          o = 1;
        }
      } else {
        r = e;
        o = e.length;
      }
      if (o > 1) {
        for (n = 0; n + 1 < o; n++) {
          if (r[n] === "**" && r[n + 1] === "**") {
            return;
          }
        }
      }
      var c;
      var u = this.listenerTree;
      for (n = 0; n < o; n++) {
        u = u[c = r[n]] || (u[c] = {});
        if (n === o - 1) {
          if (u._listeners) {
            if (typeof u._listeners == "function") {
              u._listeners = [u._listeners];
            }
            if (i) {
              u._listeners.unshift(t);
            } else {
              u._listeners.push(t);
            }
            if (!u._listeners.warned && this._maxListeners > 0 && u._listeners.length > this._maxListeners) {
              u._listeners.warned = true;
              M.call(this, u._listeners.length, c);
            }
          } else {
            u._listeners = t;
          }
          break;
        }
      }
      return true;
    }
    function D(e, t, i, n) {
      var r;
      var o;
      var s;
      var l;
      var a = c(e);
      var u = a.length;
      var g = e._listeners;
      while (u-- > 0) {
        r = e[o = a[u]];
        s = o === "_listeners" ? i : i ? i.concat(o) : [o];
        l = n || typeof o == "symbol";
        if (g) {
          t.push(l ? s : s.join(this.delimiter));
        }
        if (typeof r == "object") {
          D.call(this, r, t, s, l);
        }
      }
      return t;
    }
    function w(e) {
      var t;
      var i;
      var n;
      var r = c(e);
      var o = r.length;
      while (o-- > 0) {
        if (t = e[i = r[o]]) {
          n = true;
          if (i !== "_listeners" && !w(t)) {
            delete e[i];
          }
        }
      }
      return n;
    }
    function T(e, t, i) {
      this.emitter = e;
      this.event = t;
      this.listener = i;
    }
    function E(e, i, r) {
      if (r === true) {
        l = true;
      } else if (r === false) {
        s = true;
      } else {
        if (!r || typeof r != "object") {
          throw TypeError("options should be an object or true");
        }
        var s = r.async;
        var l = r.promisify;
        var c = r.nextTick;
        var u = r.objectify;
      }
      if (s || c || l) {
        var g = i;
        var M = i._origin || i;
        if (c && !o) {
          throw Error("process.nextTick is not supported");
        }
        if (t === l) {
          l = i.constructor.name === "AsyncFunction";
        }
        (i = function () {
          var e = arguments;
          var t = this;
          var i = this.event;
          if (l) {
            if (c) {
              return Promise.resolve();
            } else {
              return new Promise(function (e) {
                a(e);
              }).then(function () {
                t.event = i;
                return g.apply(t, e);
              });
            }
          } else {
            return (c ? processBrowserShim.nextTick : a)(function () {
              t.event = i;
              g.apply(t, e);
            });
          }
        })._async = true;
        i._origin = M;
      }
      return [i, u ? new T(this, e, i) : this];
    }
    function z(e) {
      this._events = {};
      this._newListener = false;
      this._removeListener = false;
      this.verboseMemoryLeak = false;
      g.call(this, e);
    }
    T.prototype.off = function () {
      this.emitter.off(this.event, this.listener);
      return this;
    };
    z.EventEmitter2 = z;
    z.prototype.listenTo = function (e, i, n) {
      if (typeof e != "object") {
        throw TypeError("target musts be an object");
      }
      var o = this;
      n = y(n, {
        on: t,
        off: t,
        reducers: t
      }, {
        on: m,
        off: m,
        reducers: C
      });
      (function (t) {
        if (typeof t != "object") {
          throw TypeError("events must be an object");
        }
        var i;
        var r;
        var s = n.reducers;
        var l = f.call(o, e);
        i = l === -1 ? new p(o, e, n) : o._observers[l];
        var a = c(t);
        var u = a.length;
        var g = typeof s == "function";
        var M = 0;
        for (; M < u; M++) {
          r = a[M];
          i.subscribe(r, t[r] || r, g ? s : s && s[r]);
        }
      })(r(i) ? I(i) : typeof i == "string" ? I(i.split(/\s+/)) : i);
      return this;
    };
    z.prototype.stopListeningTo = function (e, t) {
      var i;
      var n = this._observers;
      if (!n) {
        return false;
      }
      var r = n.length;
      var o = false;
      if (e && typeof e != "object") {
        throw TypeError("target should be an object");
      }
      while (r-- > 0) {
        i = n[r];
        if (!e || i._target === e) {
          i.unsubscribe(t);
          o = true;
        }
      }
      return o;
    };
    z.prototype.delimiter = ".";
    z.prototype.setMaxListeners = function (e) {
      if (t !== e) {
        this._maxListeners = e;
        this._conf ||= {};
        this._conf.maxListeners = e;
      }
    };
    z.prototype.getMaxListeners = function () {
      return this._maxListeners;
    };
    z.prototype.event = "";
    z.prototype.once = function (e, t, i) {
      return this._once(e, t, false, i);
    };
    z.prototype.prependOnceListener = function (e, t, i) {
      return this._once(e, t, true, i);
    };
    z.prototype._once = function (e, t, i, n) {
      return this._many(e, 1, t, i, n);
    };
    z.prototype.many = function (e, t, i, n) {
      return this._many(e, t, i, false, n);
    };
    z.prototype.prependMany = function (e, t, i, n) {
      return this._many(e, t, i, true, n);
    };
    z.prototype._many = function (e, t, i, n, r) {
      var o = this;
      if (typeof i != "function") {
        throw Error("many only accepts instances of Function");
      }
      function s() {
        if (--t == 0) {
          o.off(e, s);
        }
        return i.apply(this, arguments);
      }
      s._origin = i;
      return this._on(e, s, n, r);
    };
    z.prototype.emit = function () {
      if (!this._events && !this._all) {
        return false;
      }
      if (!this._events) {
        u.call(this);
      }
      var e;
      var t;
      var i;
      var n;
      var r;
      var o;
      var l;
      var a = arguments[0];
      var c = this.wildcard;
      if (a === "newListener" && !this._newListener && !this._events.newListener) {
        return false;
      }
      if (c && (l = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        t = a.length;
        if (s) {
          for (i = 0; i < t; i++) {
            if (typeof a[i] == "symbol") {
              r = true;
              break;
            }
          }
        }
        if (!r) {
          a = a.join(this.delimiter);
        }
      }
      var g = arguments.length;
      if (this._all && this._all.length) {
        i = 0;
        t = (o = this._all.slice()).length;
        for (; i < t; i++) {
          this.event = a;
          switch (g) {
            case 1:
              o[i].call(this, a);
              break;
            case 2:
              o[i].call(this, a, arguments[1]);
              break;
            case 3:
              o[i].call(this, a, arguments[1], arguments[2]);
              break;
            default:
              o[i].apply(this, arguments);
          }
        }
      }
      if (c) {
        o = [];
        j.call(this, o, l, this.listenerTree, 0, t);
      } else {
        if (typeof (o = this._events[a]) == "function") {
          this.event = a;
          switch (g) {
            case 1:
              o.call(this);
              break;
            case 2:
              o.call(this, arguments[1]);
              break;
            case 3:
              o.call(this, arguments[1], arguments[2]);
              break;
            default:
              n = 1;
              e = Array(g - 1);
              for (; n < g; n++) {
                e[n - 1] = arguments[n];
              }
              o.apply(this, e);
          }
          return true;
        }
        o &&= o.slice();
      }
      if (o && o.length) {
        if (g > 3) {
          n = 1;
          e = Array(g - 1);
          for (; n < g; n++) {
            e[n - 1] = arguments[n];
          }
        }
        i = 0;
        t = o.length;
        for (; i < t; i++) {
          this.event = a;
          switch (g) {
            case 1:
              o[i].call(this);
              break;
            case 2:
              o[i].call(this, arguments[1]);
              break;
            case 3:
              o[i].call(this, arguments[1], arguments[2]);
              break;
            default:
              o[i].apply(this, e);
          }
        }
        return true;
      }
      if (!this.ignoreErrors && !this._all && a === "error") {
        if (arguments[1] instanceof Error) {
          throw arguments[1];
        }
        throw Error("Uncaught, unspecified 'error' event.");
      }
      return !!this._all;
    };
    z.prototype.emitAsync = function () {
      if (!this._events && !this._all) {
        return false;
      }
      if (!this._events) {
        u.call(this);
      }
      var e;
      var t;
      var i;
      var n;
      var r;
      var o;
      var l;
      var a = arguments[0];
      var c = this.wildcard;
      if (a === "newListener" && !this._newListener && !this._events.newListener) {
        return Promise.resolve([false]);
      }
      if (c && (o = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        t = a.length;
        if (s) {
          for (i = 0; i < t; i++) {
            if (typeof a[i] == "symbol") {
              l = true;
              break;
            }
          }
        }
        if (!l) {
          a = a.join(this.delimiter);
        }
      }
      var g = [];
      var M = arguments.length;
      if (this._all) {
        i = 0;
        t = this._all.length;
        for (; i < t; i++) {
          this.event = a;
          switch (M) {
            case 1:
              g.push(this._all[i].call(this, a));
              break;
            case 2:
              g.push(this._all[i].call(this, a, arguments[1]));
              break;
            case 3:
              g.push(this._all[i].call(this, a, arguments[1], arguments[2]));
              break;
            default:
              g.push(this._all[i].apply(this, arguments));
          }
        }
      }
      if (c) {
        r = [];
        j.call(this, r, o, this.listenerTree, 0);
      } else {
        r = this._events[a];
      }
      if (typeof r == "function") {
        this.event = a;
        switch (M) {
          case 1:
            g.push(r.call(this));
            break;
          case 2:
            g.push(r.call(this, arguments[1]));
            break;
          case 3:
            g.push(r.call(this, arguments[1], arguments[2]));
            break;
          default:
            n = 1;
            e = Array(M - 1);
            for (; n < M; n++) {
              e[n - 1] = arguments[n];
            }
            g.push(r.apply(this, e));
        }
      } else if (r && r.length) {
        r = r.slice();
        if (M > 3) {
          n = 1;
          e = Array(M - 1);
          for (; n < M; n++) {
            e[n - 1] = arguments[n];
          }
        }
        i = 0;
        t = r.length;
        for (; i < t; i++) {
          this.event = a;
          switch (M) {
            case 1:
              g.push(r[i].call(this));
              break;
            case 2:
              g.push(r[i].call(this, arguments[1]));
              break;
            case 3:
              g.push(r[i].call(this, arguments[1], arguments[2]));
              break;
            default:
              g.push(r[i].apply(this, e));
          }
        }
      } else if (!this.ignoreErrors && !this._all && a === "error") {
        if (arguments[1] instanceof Error) {
          return Promise.reject(arguments[1]);
        } else {
          return Promise.reject("Uncaught, unspecified 'error' event.");
        }
      }
      return Promise.all(g);
    };
    z.prototype.on = function (e, t, i) {
      return this._on(e, t, false, i);
    };
    z.prototype.prependListener = function (e, t, i) {
      return this._on(e, t, true, i);
    };
    z.prototype.onAny = function (e) {
      return this._onAny(e, false);
    };
    z.prototype.prependAny = function (e) {
      return this._onAny(e, true);
    };
    z.prototype.addListener = z.prototype.on;
    z.prototype._onAny = function (e, t) {
      if (typeof e != "function") {
        throw Error("onAny only accepts instances of Function");
      }
      this._all ||= [];
      if (t) {
        this._all.unshift(e);
      } else {
        this._all.push(e);
      }
      return this;
    };
    z.prototype._on = function (e, i, n, r) {
      if (typeof e == "function") {
        this._onAny(e, i);
        return this;
      }
      if (typeof i != "function") {
        throw Error("on only accepts instances of Function");
      }
      if (!this._events) {
        u.call(this);
      }
      var o;
      var s = this;
      if (t !== r) {
        i = (o = E.call(this, e, i, r))[0];
        s = o[1];
      }
      if (this._newListener) {
        this.emit("newListener", e, i);
      }
      if (this.wildcard) {
        v.call(this, e, i, n);
      } else if (this._events[e]) {
        if (typeof this._events[e] == "function") {
          this._events[e] = [this._events[e]];
        }
        if (n) {
          this._events[e].unshift(i);
        } else {
          this._events[e].push(i);
        }
        if (!this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners) {
          this._events[e].warned = true;
          M.call(this, this._events[e].length, e);
        }
      } else {
        this._events[e] = i;
      }
      return s;
    };
    z.prototype.off = function (e, t) {
      if (typeof t != "function") {
        throw Error("removeListener only takes instances of Function");
      }
      var i;
      var n = [];
      if (this.wildcard) {
        var o = typeof e == "string" ? e.split(this.delimiter) : e.slice();
        if (!(n = j.call(this, null, o, this.listenerTree, 0))) {
          return this;
        }
      } else {
        if (!this._events[e]) {
          return this;
        }
        i = this._events[e];
        n.push({
          _listeners: i
        });
      }
      for (var s = 0; s < n.length; s++) {
        var l = n[s];
        if (r(i = l._listeners)) {
          var a = -1;
          var c = 0;
          var u = i.length;
          for (; c < u; c++) {
            if (i[c] === t || i[c].listener && i[c].listener === t || i[c]._origin && i[c]._origin === t) {
              a = c;
              break;
            }
          }
          if (a < 0) {
            continue;
          }
          if (this.wildcard) {
            l._listeners.splice(a, 1);
          } else {
            this._events[e].splice(a, 1);
          }
          if (i.length === 0) {
            if (this.wildcard) {
              delete l._listeners;
            } else {
              delete this._events[e];
            }
          }
          if (this._removeListener) {
            this.emit("removeListener", e, t);
          }
          return this;
        }
        if (i === t || i.listener && i.listener === t || i._origin && i._origin === t) {
          if (this.wildcard) {
            delete l._listeners;
          } else {
            delete this._events[e];
          }
          if (this._removeListener) {
            this.emit("removeListener", e, t);
          }
        }
      }
      if (this.listenerTree) {
        w(this.listenerTree);
      }
      return this;
    };
    z.prototype.offAny = function (e) {
      var t;
      var i = 0;
      var n = 0;
      if (e && this._all && this._all.length > 0) {
        i = 0;
        n = (t = this._all).length;
        for (; i < n; i++) {
          if (e === t[i]) {
            t.splice(i, 1);
            if (this._removeListener) {
              this.emit("removeListenerAny", e);
            }
            break;
          }
        }
      } else {
        t = this._all;
        if (this._removeListener) {
          i = 0;
          n = t.length;
          for (; i < n; i++) {
            this.emit("removeListenerAny", t[i]);
          }
        }
        this._all = [];
      }
      return this;
    };
    z.prototype.removeListener = z.prototype.off;
    z.prototype.removeAllListeners = function (e) {
      if (t === e) {
        if (this._events) {
          u.call(this);
        }
        return this;
      }
      if (this.wildcard) {
        var i;
        var n = j.call(this, null, e, this.listenerTree, 0);
        if (!n) {
          return this;
        }
        for (i = 0; i < n.length; i++) {
          n[i]._listeners = null;
        }
        if (this.listenerTree) {
          w(this.listenerTree);
        }
      } else if (this._events) {
        this._events[e] = null;
      }
      return this;
    };
    z.prototype.listeners = function (e) {
      var i;
      var n;
      var r;
      var o;
      var s;
      var l = this._events;
      if (t === e) {
        if (this.wildcard) {
          throw Error("event name required for wildcard emitter");
        }
        if (!l) {
          return [];
        }
        o = (i = c(l)).length;
        r = [];
        while (o-- > 0) {
          if (typeof (n = l[i[o]]) == "function") {
            r.push(n);
          } else {
            r.push.apply(r, n);
          }
        }
        return r;
      }
      if (this.wildcard) {
        if (!(s = this.listenerTree)) {
          return [];
        }
        var a = [];
        var u = typeof e == "string" ? e.split(this.delimiter) : e.slice();
        j.call(this, a, u, s, 0);
        return a;
      }
      if (l && (n = l[e])) {
        if (typeof n == "function") {
          return [n];
        } else {
          return n;
        }
      } else {
        return [];
      }
    };
    z.prototype.eventNames = function (e) {
      var t = this._events;
      if (this.wildcard) {
        return D.call(this, this.listenerTree, [], null, e);
      } else if (t) {
        return c(t);
      } else {
        return [];
      }
    };
    z.prototype.listenerCount = function (e) {
      return this.listeners(e).length;
    };
    z.prototype.hasListeners = function (e) {
      if (this.wildcard) {
        var i = [];
        var n = typeof e == "string" ? e.split(this.delimiter) : e.slice();
        j.call(this, i, n, this.listenerTree, 0);
        return i.length > 0;
      }
      var r = this._events;
      var o = this._all;
      return !!o && !!o.length || !!r && !!(t === e ? c(r).length : r[e]);
    };
    z.prototype.listenersAny = function () {
      if (this._all) {
        return this._all;
      } else {
        return [];
      }
    };
    z.prototype.waitFor = function (e, i) {
      var n = this;
      var r = typeof i;
      if (r === "number") {
        i = {
          timeout: i
        };
      } else if (r === "function") {
        i = {
          filter: i
        };
      }
      return A((i = y(i, {
        timeout: 0,
        filter: t,
        handleError: false,
        Promise: Promise,
        overload: false
      }, {
        filter: m,
        Promise: h
      })).Promise, function (t, r, o) {
        function s() {
          var o = i.filter;
          if (!o || o.apply(n, arguments)) {
            n.off(e, s);
            if (i.handleError) {
              var l = arguments[0];
              if (l) {
                r(l);
              } else {
                t(d.apply(null, arguments).slice(1));
              }
            } else {
              t(d.apply(null, arguments));
            }
          }
        }
        o(function () {
          n.off(e, s);
        });
        n._on(e, s, false);
      }, {
        timeout: i.timeout,
        overload: i.overload
      });
    };
    var O = z.prototype;
    Object.defineProperties(z, {
      defaultMaxListeners: {
        get: function () {
          return O._maxListeners;
        },
        set: function (e) {
          if (typeof e != "number" || e < 0 || Number.isNaN(e)) {
            throw TypeError("n must be a non-negative number");
          }
          O._maxListeners = e;
        },
        enumerable: true
      },
      once: {
        value: function (e, t, i) {
          return A((i = y(i, {
            Promise: Promise,
            timeout: 0,
            overload: false
          }, {
            Promise: h
          })).Promise, function (i, n, r) {
            if (typeof e.addEventListener == "function") {
              o = function () {
                i(d.apply(null, arguments));
              };
              r(function () {
                e.removeEventListener(t, o);
              });
              e.addEventListener(t, o, {
                once: true
              });
              return;
            }
            var o;
            var s;
            function l() {
              if (s) {
                e.removeListener("error", s);
              }
              i(d.apply(null, arguments));
            }
            if (t !== "error") {
              s = function (i) {
                e.removeListener(t, l);
                n(i);
              };
              e.once("error", s);
            }
            r(function () {
              if (s) {
                e.removeListener("error", s);
              }
              e.removeListener(t, l);
            });
            e.once(t, l);
          }, {
            timeout: i.timeout,
            overload: i.overload
          });
        },
        writable: true,
        configurable: true
      }
    });
    Object.defineProperties(O, {
      _maxListeners: {
        value: 10,
        writable: true,
        configurable: true
      },
      _observers: {
        value: null,
        writable: true,
        configurable: true
      }
    });
    if (typeof define == "function" && define.amd) {
      define(function () {
        return z;
      });
    } else {
      module.exports = z;
    }
  })();
}