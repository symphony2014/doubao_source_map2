// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'tg' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// - Renamed variable 'tb' to 'puppeteerCoreVersion'
// - Resolved require(119221) to 'puppeteer-core-version'
// - Resolved require(989572) to 'buffer-polyfill-impl'
// - Resolved require.e(9533) to 'debug-logger'
// - Resolved require(989572) to 'buffer-polyfill-impl'
// - Renamed variable 'ng' to 'browserWebsocketTransport'
// - Resolved require(119856) to 'browser-websocket-transport'
// - Resolved require.e(50164) to 'puppeteer-websocket-transport'
// - Resolved require.bind(612365) to 'node-websocket-transport'
// - Resolved require.bind(119856) to 'browser-websocket-transport'
// - Updated imported property 'b' to 'puppeteerVersion' (module 119221)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: puppeteer-core-browser.0fda468e.js
         * chunkId: 41616
         * moduleId: 241538
         */
module.exports = function (module, exports, require) {
  var r;
  var a;
  var n;
  var s;
  var o;
  var l;
  var c;
  var d;
  var u;
  var h;
  var p;
  var f;
  var m;
  var y;
  var g;
  var w;
  var v;
  var b;
  var k;
  var S;
  var T;
  var C;
  var M;
  var E;
  var P;
  var I;
  var x;
  var F;
  function A(e, t) {
    return (A = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var i in t) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          e[i] = t[i];
        }
      }
    })(e, t);
  }
  function L(e, t) {
    if (typeof t != "function" && t !== null) {
      throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
    }
    function i() {
      this.constructor = e;
    }
    A(e, t);
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
  }
  function O(e, t) {
    var i;
    var r;
    var a;
    var n = {
      label: 0,
      sent: function () {
        if (a[0] & 1) {
          throw a[1];
        }
        return a[1];
      },
      trys: [],
      ops: []
    };
    var s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    s.next = o(0);
    s.throw = o(1);
    s.return = o(2);
    if (typeof Symbol == "function") {
      s[Symbol.iterator] = function () {
        return this;
      };
    }
    return s;
    function o(o) {
      return function (l) {
        return function (o) {
          if (i) {
            throw TypeError("Generator is already executing.");
          }
          while (s && (s = 0, o[0] && (n = 0)), n) {
            try {
              i = 1;
              if (r && (a = o[0] & 2 ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) {
                return a;
              }
              r = 0;
              if (a) {
                o = [o[0] & 2, a.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  a = o;
                  break;
                case 4:
                  n.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  n.label++;
                  r = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = n.ops.pop();
                  n.trys.pop();
                  continue;
                default:
                  if (!(a = (a = n.trys).length > 0 && a[a.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    n = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
                    n.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && n.label < a[1]) {
                    n.label = a[1];
                    a = o;
                    break;
                  }
                  if (a && n.label < a[2]) {
                    n.label = a[2];
                    n.ops.push(o);
                    break;
                  }
                  if (a[2]) {
                    n.ops.pop();
                  }
                  n.trys.pop();
                  continue;
              }
              o = t.call(e, n);
            } catch (e) {
              o = [6, e];
              r = 0;
            } finally {
              i = a = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, l]);
      };
    }
  }
  function R(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var i = t && e[t];
    var r = 0;
    if (i) {
      return i.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function D(e, t) {
    var i = typeof Symbol == "function" && e[Symbol.iterator];
    if (!i) {
      return e;
    }
    var r;
    var a;
    var n = i.call(e);
    var s = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = n.next()).done) {
        s.push(r.value);
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (i = n.return)) {
          i.call(n);
        }
      } finally {
        if (a) {
          throw a.error;
        }
      }
    }
    return s;
  }
  function _(e, t, i) {
    if (i || arguments.length == 2) {
      var r;
      var a = 0;
      var n = t.length;
      for (; a < n; a++) {
        if (!!r || !(a in t)) {
          r ||= Array.prototype.slice.call(t, 0, a);
          r[a] = t[a];
        }
      }
    }
    return e.concat(r || Array.prototype.slice.call(t));
  }
  function N(e) {
    if (this instanceof N) {
      this.v = e;
      return this;
    } else {
      return new N(e);
    }
  }
  function K(e) {
    return typeof e == "function";
  }
  function q(e) {
    var t = e(function (e) {
      Error.call(e);
      e.stack = Error().stack;
    });
    t.prototype = Object.create(Error.prototype);
    t.prototype.constructor = t;
    return t;
  }
  var H = q(function (e) {
    return function (t) {
      e(this);
      this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (e, t) {
        return t + 1 + ") " + e.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = t;
    };
  });
  function B(e, t) {
    if (e) {
      var i = e.indexOf(t);
      if (i >= 0) {
        e.splice(i, 1);
      }
    }
  }
  var j = function () {
    var e;
    function t(e) {
      this.initialTeardown = e;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    t.prototype.unsubscribe = function () {
      if (!this.closed) {
        this.closed = true;
        var e;
        var t;
        var i;
        var r;
        var a;
        var n = this._parentage;
        if (n) {
          this._parentage = null;
          if (Array.isArray(n)) {
            try {
              var s = R(n);
              var o = s.next();
              for (; !o.done; o = s.next()) {
                o.value.remove(this);
              }
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                if (o && !o.done && (t = s.return)) {
                  t.call(s);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
          } else {
            n.remove(this);
          }
        }
        var l = this.initialTeardown;
        if (K(l)) {
          try {
            l();
          } catch (e) {
            a = e instanceof H ? e.errors : [e];
          }
        }
        var c = this._finalizers;
        if (c) {
          this._finalizers = null;
          try {
            var d = R(c);
            var u = d.next();
            for (; !u.done; u = d.next()) {
              var h = u.value;
              try {
                U(h);
              } catch (e) {
                a = a ?? [];
                if (e instanceof H) {
                  a = _(_([], D(a)), D(e.errors));
                } else {
                  a.push(e);
                }
              }
            }
          } catch (e) {
            i = {
              error: e
            };
          } finally {
            try {
              if (u && !u.done && (r = d.return)) {
                r.call(d);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
        }
        if (a) {
          throw new H(a);
        }
      }
    };
    t.prototype.add = function (e) {
      if (e && e !== this) {
        if (this.closed) {
          U(e);
        } else {
          if (e instanceof t) {
            if (e.closed || e._hasParent(this)) {
              return;
            }
            e._addParent(this);
          }
          (this._finalizers = this._finalizers ?? []).push(e);
        }
      }
    };
    t.prototype._hasParent = function (e) {
      var t = this._parentage;
      return t === e || Array.isArray(t) && t.includes(e);
    };
    t.prototype._addParent = function (e) {
      var t = this._parentage;
      this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
    };
    t.prototype._removeParent = function (e) {
      var t = this._parentage;
      if (t === e) {
        this._parentage = null;
      } else if (Array.isArray(t)) {
        B(t, e);
      }
    };
    t.prototype.remove = function (e) {
      var i = this._finalizers;
      if (i) {
        B(i, e);
      }
      if (e instanceof t) {
        e._removeParent(this);
      }
    };
    (e = new t()).closed = true;
    t.EMPTY = e;
    return t;
  }();
  var W = j.EMPTY;
  function z(e) {
    return e instanceof j || e && "closed" in e && K(e.remove) && K(e.add) && K(e.unsubscribe);
  }
  function U(e) {
    if (K(e)) {
      e();
    } else {
      e.unsubscribe();
    }
  }
  var V = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
  };
  var G = {
    setTimeout: function (e, t) {
      var i = [];
      var r = 2;
      for (; r < arguments.length; r++) {
        i[r - 2] = arguments[r];
      }
      var a = G.delegate;
      if (a == null ? undefined : a.setTimeout) {
        return a.setTimeout.apply(a, _([e, t], D(i)));
      } else {
        return setTimeout.apply(undefined, _([e, t], D(i)));
      }
    },
    clearTimeout: function (e) {
      var t = G.delegate;
      return ((t == null ? undefined : t.clearTimeout) || clearTimeout)(e);
    },
    delegate: undefined
  };
  function $(e) {
    G.setTimeout(function () {
      var t = V.onUnhandledError;
      if (t) {
        t(e);
      } else {
        throw e;
      }
    });
  }
  function X() {}
  var Q = J("C", undefined, undefined);
  function J(e, t, i) {
    return {
      kind: e,
      value: t,
      error: i
    };
  }
  var Y = null;
  function Z(e) {
    if (V.useDeprecatedSynchronousErrorHandling) {
      var t = !Y;
      if (t) {
        Y = {
          errorThrown: false,
          error: null
        };
      }
      e();
      if (t) {
        var i = Y;
        var r = i.errorThrown;
        var a = i.error;
        Y = null;
        if (r) {
          throw a;
        }
      }
    } else {
      e();
    }
  }
  var ee = function (e) {
    function t(t) {
      var i = e.call(this) || this;
      i.isStopped = false;
      if (t) {
        i.destination = t;
        if (z(t)) {
          t.add(i);
        }
      } else {
        i.destination = eo;
      }
      return i;
    }
    L(t, e);
    t.create = function (e, t, i) {
      return new ea(e, t, i);
    };
    t.prototype.next = function (e) {
      if (this.isStopped) {
        es(J("N", e, undefined), this);
      } else {
        this._next(e);
      }
    };
    t.prototype.error = function (e) {
      if (this.isStopped) {
        es(J("E", undefined, e), this);
      } else {
        this.isStopped = true;
        this._error(e);
      }
    };
    t.prototype.complete = function () {
      if (this.isStopped) {
        es(Q, this);
      } else {
        this.isStopped = true;
        this._complete();
      }
    };
    t.prototype.unsubscribe = function () {
      if (!this.closed) {
        this.isStopped = true;
        e.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    t.prototype._next = function (e) {
      this.destination.next(e);
    };
    t.prototype._error = function (e) {
      try {
        this.destination.error(e);
      } finally {
        this.unsubscribe();
      }
    };
    t.prototype._complete = function () {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return t;
  }(j);
  var et = Function.prototype.bind;
  function ei(e, t) {
    return et.call(e, t);
  }
  var er = function () {
    function e(e) {
      this.partialObserver = e;
    }
    e.prototype.next = function (e) {
      var t = this.partialObserver;
      if (t.next) {
        try {
          t.next(e);
        } catch (e) {
          en(e);
        }
      }
    };
    e.prototype.error = function (e) {
      var t = this.partialObserver;
      if (t.error) {
        try {
          t.error(e);
        } catch (e) {
          en(e);
        }
      } else {
        en(e);
      }
    };
    e.prototype.complete = function () {
      var e = this.partialObserver;
      if (e.complete) {
        try {
          e.complete();
        } catch (e) {
          en(e);
        }
      }
    };
    return e;
  }();
  var ea = function (e) {
    function t(t, i, r) {
      var a;
      var n;
      var s = e.call(this) || this;
      if (K(t) || !t) {
        a = {
          next: t ?? undefined,
          error: i ?? undefined,
          complete: r ?? undefined
        };
      } else if (s && V.useDeprecatedNextContext) {
        (n = Object.create(t)).unsubscribe = function () {
          return s.unsubscribe();
        };
        a = {
          next: t.next && ei(t.next, n),
          error: t.error && ei(t.error, n),
          complete: t.complete && ei(t.complete, n)
        };
      } else {
        a = t;
      }
      s.destination = new er(a);
      return s;
    }
    L(t, e);
    return t;
  }(ee);
  function en(e) {
    if (V.useDeprecatedSynchronousErrorHandling) {
      if (V.useDeprecatedSynchronousErrorHandling && Y) {
        Y.errorThrown = true;
        Y.error = e;
      }
    } else {
      $(e);
    }
  }
  function es(e, t) {
    var i = V.onStoppedNotification;
    if (i) {
      G.setTimeout(function () {
        return i(e, t);
      });
    }
  }
  var eo = {
    closed: true,
    next: X,
    error: function (e) {
      throw e;
    },
    complete: X
  };
  var el = typeof Symbol == "function" && Symbol.observable || "@@observable";
  function ec(e) {
    return e;
  }
  function ed(e) {
    if (e.length === 0) {
      return ec;
    } else if (e.length === 1) {
      return e[0];
    } else {
      return function (t) {
        return e.reduce(function (e, t) {
          return t(e);
        }, t);
      };
    }
  }
  var eu = function () {
    function e(e) {
      if (e) {
        this._subscribe = e;
      }
    }
    e.prototype.lift = function (t) {
      var i = new e();
      i.source = this;
      i.operator = t;
      return i;
    };
    e.prototype.subscribe = function (e, t, i) {
      var r = this;
      var a = !function (e) {
        return e && e instanceof ee || e && K(e.next) && K(e.error) && K(e.complete) && z(e);
      }(e) ? new ea(e, t, i) : e;
      Z(function () {
        var e = r.operator;
        var t = r.source;
        a.add(e ? e.call(a, t) : t ? r._subscribe(a) : r._trySubscribe(a));
      });
      return a;
    };
    e.prototype._trySubscribe = function (e) {
      try {
        return this._subscribe(e);
      } catch (t) {
        e.error(t);
      }
    };
    e.prototype.forEach = function (e, t) {
      var i = this;
      return new (t = eh(t))(function (t, r) {
        var a = new ea({
          next: function (t) {
            try {
              e(t);
            } catch (e) {
              r(e);
              a.unsubscribe();
            }
          },
          error: r,
          complete: t
        });
        i.subscribe(a);
      });
    };
    e.prototype._subscribe = function (e) {
      var t;
      if ((t = this.source) === null || t === undefined) {
        return undefined;
      } else {
        return t.subscribe(e);
      }
    };
    e.prototype[el] = function () {
      return this;
    };
    e.prototype.pipe = function () {
      var e = [];
      var t = 0;
      for (; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
      return ed(e)(this);
    };
    e.prototype.toPromise = function (e) {
      var t = this;
      return new (e = eh(e))(function (e, i) {
        var r;
        t.subscribe(function (e) {
          return r = e;
        }, function (e) {
          return i(e);
        }, function () {
          return e(r);
        });
      });
    };
    e.create = function (t) {
      return new e(t);
    };
    return e;
  }();
  function eh(e) {
    return e ?? V.Promise ?? Promise;
  }
  function ep(e) {
    return function (t) {
      if (K(t == null ? undefined : t.lift)) {
        return t.lift(function (t) {
          try {
            return e(t, this);
          } catch (e) {
            this.error(e);
          }
        });
      }
      throw TypeError("Unable to lift unknown Observable type");
    };
  }
  function ef(e, t, i, r, a) {
    return new em(e, t, i, r, a);
  }
  var em = function (e) {
    function t(t, i, r, a, n, s) {
      var o = e.call(this, t) || this;
      o.onFinalize = n;
      o.shouldUnsubscribe = s;
      o._next = i ? function (e) {
        try {
          i(e);
        } catch (e) {
          t.error(e);
        }
      } : e.prototype._next;
      o._error = a ? function (e) {
        try {
          a(e);
        } catch (e) {
          t.error(e);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._error;
      o._complete = r ? function () {
        try {
          r();
        } catch (e) {
          t.error(e);
        } finally {
          this.unsubscribe();
        }
      } : e.prototype._complete;
      return o;
    }
    L(t, e);
    t.prototype.unsubscribe = function () {
      var t;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var i = this.closed;
        e.prototype.unsubscribe.call(this);
        if (!i && (t = this.onFinalize) !== null && t !== undefined) {
          t.call(this);
        }
      }
    };
    return t;
  }(ee);
  var ey = q(function (e) {
    return function () {
      e(this);
      this.name = "ObjectUnsubscribedError";
      this.message = "object unsubscribed";
    };
  });
  var eg = function (e) {
    function t() {
      var t = e.call(this) || this;
      t.closed = false;
      t.currentObservers = null;
      t.observers = [];
      t.isStopped = false;
      t.hasError = false;
      t.thrownError = null;
      return t;
    }
    L(t, e);
    t.prototype.lift = function (e) {
      var t = new ew(this, this);
      t.operator = e;
      return t;
    };
    t.prototype._throwIfClosed = function () {
      if (this.closed) {
        throw new ey();
      }
    };
    t.prototype.next = function (e) {
      var t = this;
      Z(function () {
        var i;
        var r;
        t._throwIfClosed();
        if (!t.isStopped) {
          t.currentObservers ||= Array.from(t.observers);
          try {
            var a = R(t.currentObservers);
            var n = a.next();
            for (; !n.done; n = a.next()) {
              n.value.next(e);
            }
          } catch (e) {
            i = {
              error: e
            };
          } finally {
            try {
              if (n && !n.done && (r = a.return)) {
                r.call(a);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
        }
      });
    };
    t.prototype.error = function (e) {
      var t = this;
      Z(function () {
        t._throwIfClosed();
        if (!t.isStopped) {
          t.hasError = t.isStopped = true;
          t.thrownError = e;
          for (var i = t.observers; i.length;) {
            i.shift().error(e);
          }
        }
      });
    };
    t.prototype.complete = function () {
      var e = this;
      Z(function () {
        e._throwIfClosed();
        if (!e.isStopped) {
          e.isStopped = true;
          for (var t = e.observers; t.length;) {
            t.shift().complete();
          }
        }
      });
    };
    t.prototype.unsubscribe = function () {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    };
    Object.defineProperty(t.prototype, "observed", {
      get: function () {
        return this.observers?.length > 0;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype._trySubscribe = function (t) {
      this._throwIfClosed();
      return e.prototype._trySubscribe.call(this, t);
    };
    t.prototype._subscribe = function (e) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(e);
      return this._innerSubscribe(e);
    };
    t.prototype._innerSubscribe = function (e) {
      var t = this;
      var i = this.hasError;
      var r = this.isStopped;
      var a = this.observers;
      if (i || r) {
        return W;
      } else {
        this.currentObservers = null;
        a.push(e);
        return new j(function () {
          t.currentObservers = null;
          B(a, e);
        });
      }
    };
    t.prototype._checkFinalizedStatuses = function (e) {
      var t = this.hasError;
      var i = this.thrownError;
      var r = this.isStopped;
      if (t) {
        e.error(i);
      } else if (r) {
        e.complete();
      }
    };
    t.prototype.asObservable = function () {
      var e = new eu();
      e.source = this;
      return e;
    };
    t.create = function (e, t) {
      return new ew(e, t);
    };
    return t;
  }(eu);
  var ew = function (e) {
    function t(t, i) {
      var r = e.call(this) || this;
      r.destination = t;
      r.source = i;
      return r;
    }
    L(t, e);
    t.prototype.next = function (e) {
      var t;
      var i;
      if ((i = (t = this.destination) === null || t === undefined ? undefined : t.next) !== null && i !== undefined) {
        i.call(t, e);
      }
    };
    t.prototype.error = function (e) {
      var t;
      var i;
      if ((i = (t = this.destination) === null || t === undefined ? undefined : t.error) !== null && i !== undefined) {
        i.call(t, e);
      }
    };
    t.prototype.complete = function () {
      var e;
      var t;
      if ((t = (e = this.destination) === null || e === undefined ? undefined : e.complete) !== null && t !== undefined) {
        t.call(e);
      }
    };
    t.prototype._subscribe = function (e) {
      var t;
      return ((t = this.source) === null || t === undefined ? undefined : t.subscribe(e)) ?? W;
    };
    return t;
  }(eg);
  var ev = {
    now: function () {
      return (ev.delegate || Date).now();
    },
    delegate: undefined
  };
  var eb = function (e) {
    function t(t = Infinity, i = Infinity, r = ev) {
      var a = e.call(this) || this;
      a._bufferSize = t;
      a._windowTime = i;
      a._timestampProvider = r;
      a._buffer = [];
      a._infiniteTimeWindow = true;
      a._infiniteTimeWindow = i === Infinity;
      a._bufferSize = Math.max(1, t);
      a._windowTime = Math.max(1, i);
      return a;
    }
    L(t, e);
    t.prototype.next = function (t) {
      var i = this.isStopped;
      var r = this._buffer;
      var a = this._infiniteTimeWindow;
      var n = this._timestampProvider;
      var s = this._windowTime;
      if (!i) {
        r.push(t);
        if (!a) {
          r.push(n.now() + s);
        }
      }
      this._trimBuffer();
      e.prototype.next.call(this, t);
    };
    t.prototype._subscribe = function (e) {
      this._throwIfClosed();
      this._trimBuffer();
      var t = this._innerSubscribe(e);
      var i = this._infiniteTimeWindow;
      var r = this._buffer.slice();
      var a = 0;
      for (; a < r.length && !e.closed; a += i ? 1 : 2) {
        e.next(r[a]);
      }
      this._checkFinalizedStatuses(e);
      return t;
    };
    t.prototype._trimBuffer = function () {
      var e = this._bufferSize;
      var t = this._timestampProvider;
      var i = this._buffer;
      var r = this._infiniteTimeWindow;
      var a = (r ? 1 : 2) * e;
      if (e < Infinity && a < i.length) {
        i.splice(0, i.length - a);
      }
      if (!r) {
        var n = t.now();
        var s = 0;
        var o = 1;
        for (; o < i.length && i[o] <= n; o += 2) {
          s = o;
        }
        if (s) {
          i.splice(0, s + 1);
        }
      }
    };
    return t;
  }(eg);
  var ek = function (e) {
    function t(t, i) {
      return e.call(this) || this;
    }
    L(t, e);
    t.prototype.schedule = function (e, t = 0) {
      return this;
    };
    return t;
  }(j);
  var eS = {
    setInterval: function (e, t) {
      var i = [];
      var r = 2;
      for (; r < arguments.length; r++) {
        i[r - 2] = arguments[r];
      }
      var a = eS.delegate;
      if (a == null ? undefined : a.setInterval) {
        return a.setInterval.apply(a, _([e, t], D(i)));
      } else {
        return setInterval.apply(undefined, _([e, t], D(i)));
      }
    },
    clearInterval: function (e) {
      var t = eS.delegate;
      return ((t == null ? undefined : t.clearInterval) || clearInterval)(e);
    },
    delegate: undefined
  };
  var eT = function (e) {
    function t(t, i) {
      var r = e.call(this, t, i) || this;
      r.scheduler = t;
      r.work = i;
      r.pending = false;
      return r;
    }
    L(t, e);
    t.prototype.schedule = function (e, t = 0) {
      if (this.closed) {
        return this;
      }
      this.state = e;
      var r = this.id;
      var a = this.scheduler;
      if (r != null) {
        this.id = this.recycleAsyncId(a, r, t);
      }
      this.pending = true;
      this.delay = t;
      this.id = this.id ?? this.requestAsyncId(a, this.id, t);
      return this;
    };
    t.prototype.requestAsyncId = function (e, t, i = 0) {
      return eS.setInterval(e.flush.bind(e, this), i);
    };
    t.prototype.recycleAsyncId = function (e, t, i = 0) {
      if (i != null && this.delay === i && this.pending === false) {
        return t;
      }
      if (t != null) {
        eS.clearInterval(t);
      }
    };
    t.prototype.execute = function (e, t) {
      if (this.closed) {
        return Error("executing a cancelled action");
      }
      this.pending = false;
      var i = this._execute(e, t);
      if (i) {
        return i;
      }
      if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    t.prototype._execute = function (e, t) {
      var i;
      var r = false;
      try {
        this.work(e);
      } catch (e) {
        r = true;
        i = e || Error("Scheduled action threw falsy error");
      }
      if (r) {
        this.unsubscribe();
        return i;
      }
    };
    t.prototype.unsubscribe = function () {
      if (!this.closed) {
        var t = this.id;
        var i = this.scheduler;
        var r = i.actions;
        this.work = this.state = this.scheduler = null;
        this.pending = false;
        B(r, this);
        if (t != null) {
          this.id = this.recycleAsyncId(i, t, null);
        }
        this.delay = null;
        e.prototype.unsubscribe.call(this);
      }
    };
    return t;
  }(ek);
  var eC = function () {
    function e(t, i = e.now) {
      this.schedulerActionCtor = t;
      this.now = i;
    }
    e.prototype.schedule = function (e, t = 0, i) {
      return new this.schedulerActionCtor(this, e).schedule(i, t);
    };
    e.now = ev.now;
    return e;
  }();
  var eM = new (function (e) {
    function t(t, i = eC.now) {
      var r = e.call(this, t, i) || this;
      r.actions = [];
      r._active = false;
      return r;
    }
    L(t, e);
    t.prototype.flush = function (e) {
      var t;
      var i = this.actions;
      if (this._active) {
        i.push(e);
        return;
      }
      this._active = true;
      do {
        if (t = e.execute(e.state, e.delay)) {
          break;
        }
      } while (e = i.shift());
      this._active = false;
      if (t) {
        while (e = i.shift()) {
          e.unsubscribe();
        }
        throw t;
      }
    };
    return t;
  }(eC))(eT);
  var eE = new eu(function (e) {
    return e.complete();
  });
  function eP(e) {
    return e && K(e.schedule);
  }
  function eI(e) {
    return e[e.length - 1];
  }
  function ex(e) {
    if (eP(eI(e))) {
      return e.pop();
    } else {
      return undefined;
    }
  }
  function eF(e) {
    return e && typeof e.length == "number" && typeof e != "function";
  }
  function eA(e) {
    return K(e == null ? undefined : e.then);
  }
  function eL(e) {
    return Symbol.asyncIterator && K(e == null ? undefined : e[Symbol.asyncIterator]);
  }
  function eO(e) {
    return TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  var eR = typeof Symbol == "function" && Symbol.iterator ? Symbol.iterator : "@@iterator";
  function eD(e) {
    return K(e == null ? undefined : e[eR]);
  }
  function e_(e) {
    return function (e, t, i) {
      if (!Symbol.asyncIterator) {
        throw TypeError("Symbol.asyncIterator is not defined.");
      }
      var r;
      var a = i.apply(e, t || []);
      var n = [];
      r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype);
      s("next");
      s("throw");
      s("return", function (e) {
        return function (t) {
          return Promise.resolve(t).then(e, c);
        };
      });
      r[Symbol.asyncIterator] = function () {
        return this;
      };
      return r;
      function s(e, t) {
        if (a[e]) {
          r[e] = function (t) {
            return new Promise(function (i, r) {
              if (!(n.push([e, t, i, r]) > 1)) {
                o(e, t);
              }
            });
          };
          if (t) {
            r[e] = t(r[e]);
          }
        }
      }
      function o(e, t) {
        try {
          var i;
          if ((i = a[e](t)).value instanceof N) {
            Promise.resolve(i.value.v).then(l, c);
          } else {
            d(n[0][2], i);
          }
        } catch (e) {
          d(n[0][3], e);
        }
      }
      function l(e) {
        o("next", e);
      }
      function c(e) {
        o("throw", e);
      }
      function d(e, t) {
        e(t);
        n.shift();
        if (n.length) {
          o(n[0][0], n[0][1]);
        }
      }
    }(this, arguments, function () {
      var t;
      var i;
      var r;
      return O(this, function (a) {
        switch (a.label) {
          case 0:
            t = e.getReader();
            a.label = 1;
          case 1:
            a.trys.push([1,, 9, 10]);
            a.label = 2;
          case 2:
            return [4, N(t.read())];
          case 3:
            r = (i = a.sent()).value;
            if (!i.done) {
              return [3, 5];
            }
            return [4, N(undefined)];
          case 4:
            return [2, a.sent()];
          case 5:
            return [4, N(r)];
          case 6:
            return [4, a.sent()];
          case 7:
            a.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            t.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function eN(e) {
    return K(e == null ? undefined : e.getReader);
  }
  function eK(e) {
    if (e instanceof eu) {
      return e;
    }
    if (e != null) {
      var t;
      var i;
      var r;
      var a;
      if (K(e[el])) {
        t = e;
        return new eu(function (e) {
          var i = t[el]();
          if (K(i.subscribe)) {
            return i.subscribe(e);
          }
          throw TypeError("Provided object does not correctly implement Symbol.observable");
        });
      }
      if (eF(e)) {
        i = e;
        return new eu(function (e) {
          for (var t = 0; t < i.length && !e.closed; t++) {
            e.next(i[t]);
          }
          e.complete();
        });
      }
      if (eA(e)) {
        r = e;
        return new eu(function (e) {
          r.then(function (t) {
            if (!e.closed) {
              e.next(t);
              e.complete();
            }
          }, function (t) {
            return e.error(t);
          }).then(null, $);
        });
      }
      if (eL(e)) {
        return eq(e);
      }
      if (eD(e)) {
        a = e;
        return new eu(function (e) {
          var t;
          var i;
          try {
            var r = R(a);
            var n = r.next();
            for (; !n.done; n = r.next()) {
              var s = n.value;
              e.next(s);
              if (e.closed) {
                return;
              }
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              if (n && !n.done && (i = r.return)) {
                i.call(r);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
          e.complete();
        });
      }
      if (eN(e)) {
        return eq(e_(e));
      }
    }
    throw eO(e);
  }
  function eq(e) {
    return new eu(function (t) {
      (function (e, t) {
        var i;
        var r;
        var a;
        var n;
        var s;
        var o;
        var l;
        var c;
        s = this;
        o = undefined;
        l = undefined;
        c = function () {
          var s;
          return O(this, function (o) {
            switch (o.label) {
              case 0:
                o.trys.push([0, 5, 6, 11]);
                i = function (e) {
                  if (!Symbol.asyncIterator) {
                    throw TypeError("Symbol.asyncIterator is not defined.");
                  }
                  var t;
                  var i = e[Symbol.asyncIterator];
                  if (i) {
                    return i.call(e);
                  } else {
                    e = R(e);
                    t = {};
                    r("next");
                    r("throw");
                    r("return");
                    t[Symbol.asyncIterator] = function () {
                      return this;
                    };
                    return t;
                  }
                  function r(i) {
                    t[i] = e[i] && function (t) {
                      return new Promise(function (r, a) {
                        (function (e, t, i, r) {
                          Promise.resolve(r).then(function (t) {
                            e({
                              value: t,
                              done: i
                            });
                          }, t);
                        })(r, a, (t = e[i](t)).done, t.value);
                      });
                    };
                  }
                }(e);
                o.label = 1;
              case 1:
                return [4, i.next()];
              case 2:
                if ((r = o.sent()).done) {
                  return [3, 4];
                }
                s = r.value;
                t.next(s);
                if (t.closed) {
                  return [2];
                }
                o.label = 3;
              case 3:
                return [3, 1];
              case 4:
                return [3, 11];
              case 5:
                a = {
                  error: o.sent()
                };
                return [3, 11];
              case 6:
                o.trys.push([6,, 9, 10]);
                if (!r || !!r.done || !(n = i.return)) {
                  return [3, 8];
                }
                return [4, n.call(i)];
              case 7:
                o.sent();
                o.label = 8;
              case 8:
                return [3, 10];
              case 9:
                if (a) {
                  throw a.error;
                }
                return [7];
              case 10:
                return [7];
              case 11:
                t.complete();
                return [2];
            }
          });
        };
        return new (l ||= Promise)(function (e, t) {
          function i(e) {
            try {
              a(c.next(e));
            } catch (e) {
              t(e);
            }
          }
          function r(e) {
            try {
              a(c.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function a(t) {
            var a;
            if (t.done) {
              e(t.value);
            } else {
              ((a = t.value) instanceof l ? a : new l(function (e) {
                e(a);
              })).then(i, r);
            }
          }
          a((c = c.apply(s, o || [])).next());
        });
      })(e, t).catch(function (e) {
        return t.error(e);
      });
    });
  }
  function eH(e, t, i, r = 0, a = false) {
    var n = t.schedule(function () {
      i();
      if (a) {
        e.add(this.schedule(null, r));
      } else {
        this.unsubscribe();
      }
    }, r);
    e.add(n);
    if (!a) {
      return n;
    }
  }
  function eB(e, t = 0) {
    return ep(function (i, r) {
      i.subscribe(ef(r, function (i) {
        return eH(r, e, function () {
          return r.next(i);
        }, t);
      }, function () {
        return eH(r, e, function () {
          return r.complete();
        }, t);
      }, function (i) {
        return eH(r, e, function () {
          return r.error(i);
        }, t);
      }));
    });
  }
  function ej(e, t = 0) {
    return ep(function (i, r) {
      r.add(e.schedule(function () {
        return i.subscribe(r);
      }, t));
    });
  }
  function eW(e, t) {
    if (!e) {
      throw Error("Iterable cannot be null");
    }
    return new eu(function (i) {
      eH(i, t, function () {
        var r = e[Symbol.asyncIterator]();
        eH(i, t, function () {
          r.next().then(function (e) {
            if (e.done) {
              i.complete();
            } else {
              i.next(e.value);
            }
          });
        }, 0, true);
      });
    });
  }
  function ez(e, t) {
    if (t) {
      return function (e, t) {
        if (e != null) {
          if (K(e[el])) {
            return eK(e).pipe(ej(t), eB(t));
          }
          if (eF(e)) {
            return new eu(function (i) {
              var r = 0;
              return t.schedule(function () {
                if (r === e.length) {
                  i.complete();
                } else {
                  i.next(e[r++]);
                  if (!i.closed) {
                    this.schedule();
                  }
                }
              });
            });
          }
          if (eA(e)) {
            return eK(e).pipe(ej(t), eB(t));
          }
          if (eL(e)) {
            return eW(e, t);
          }
          if (eD(e)) {
            return new eu(function (i) {
              var r;
              eH(i, t, function () {
                r = e[eR]();
                eH(i, t, function () {
                  var e;
                  var t;
                  var a;
                  try {
                    t = (e = r.next()).value;
                    a = e.done;
                  } catch (e) {
                    i.error(e);
                    return;
                  }
                  if (a) {
                    i.complete();
                  } else {
                    i.next(t);
                  }
                }, 0, true);
              });
              return function () {
                return K(r == null ? undefined : r.return) && r.return();
              };
            });
          }
          if (eN(e)) {
            return eW(e_(e), t);
          }
        }
        throw eO(e);
      }(e, t);
    } else {
      return eK(e);
    }
  }
  function eU() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var i = ex(e);
    return ez(e, i);
  }
  var eV = q(function (e) {
    return function () {
      e(this);
      this.name = "EmptyError";
      this.message = "no elements in sequence";
    };
  });
  function eG(e, t) {
    var i = typeof t == "object";
    return new Promise(function (r, a) {
      var n = new ea({
        next: function (e) {
          r(e);
          n.unsubscribe();
        },
        error: a,
        complete: function () {
          if (i) {
            r(t.defaultValue);
          } else {
            a(new eV());
          }
        }
      });
      e.subscribe(n);
    });
  }
  function e$(e, t) {
    return ep(function (i, r) {
      var a = 0;
      i.subscribe(ef(r, function (i) {
        r.next(e.call(t, i, a++));
      }));
    });
  }
  var eX = Array.isArray;
  function eQ(e, t, i, r, a, n, s, o) {
    var l = [];
    var c = 0;
    var d = 0;
    var u = false;
    function h() {
      if (!!u && !l.length && !c) {
        t.complete();
      }
    }
    function p(e) {
      if (c < r) {
        return f(e);
      } else {
        return l.push(e);
      }
    }
    function f(e) {
      if (n) {
        t.next(e);
      }
      c++;
      var o = false;
      eK(i(e, d++)).subscribe(ef(t, function (e) {
        if (a != null) {
          a(e);
        }
        if (n) {
          p(e);
        } else {
          t.next(e);
        }
      }, function () {
        o = true;
      }, undefined, function () {
        if (o) {
          try {
            for (c--; l.length && c < r;) {
              (function () {
                var e = l.shift();
                if (s) {
                  eH(t, s, function () {
                    return f(e);
                  });
                } else {
                  f(e);
                }
              })();
            }
            h();
          } catch (e) {
            t.error(e);
          }
        }
      }));
    }
    e.subscribe(ef(t, p, function () {
      u = true;
      h();
    }));
    return function () {
      if (o != null) {
        o();
      }
    };
  }
  function eJ(e, t, i = Infinity) {
    if (K(t)) {
      return eJ(function (i, r) {
        return e$(function (e, a) {
          return t(i, e, r, a);
        })(eK(e(i, r)));
      }, i);
    } else {
      if (typeof t == "number") {
        i = t;
      }
      return ep(function (t, r) {
        return eQ(t, r, e, i);
      });
    }
  }
  function eY(e = Infinity) {
    return eJ(ec, e);
  }
  function eZ() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return eY(1)(ez(e, ex(e)));
  }
  function e0(e) {
    return new eu(function (t) {
      eK(e()).subscribe(t);
    });
  }
  var e1 = ["addListener", "removeListener"];
  var e5 = ["addEventListener", "removeEventListener"];
  var e3 = ["on", "off"];
  function e4(e, t) {
    return function (i) {
      return function (r) {
        return e[i](t, r);
      };
    };
  }
  function e6(e = 0, t, i = eM) {
    var r = -1;
    if (t != null) {
      if (eP(t)) {
        i = t;
      } else {
        r = t;
      }
    }
    return new eu(function (t) {
      var a;
      var n = (a = e) instanceof Date && !isNaN(a) ? +e - i.now() : e;
      if (n < 0) {
        n = 0;
      }
      var s = 0;
      return i.schedule(function () {
        if (!t.closed) {
          t.next(s++);
          if (r >= 0) {
            this.schedule(undefined, r);
          } else {
            t.complete();
          }
        }
      }, n);
    });
  }
  function e2() {
    var e;
    var t = [];
    var i = 0;
    for (; i < arguments.length; i++) {
      t[i] = arguments[i];
    }
    var r = ex(t);
    e = Infinity;
    var a = typeof eI(t) == "number" ? t.pop() : e;
    if (t.length) {
      if (t.length === 1) {
        return eK(t[0]);
      } else {
        return eY(a)(ez(t, r));
      }
    } else {
      return eE;
    }
  }
  var e7 = new eu(X);
  var e8 = Array.isArray;
  function e9(e, t) {
    return ep(function (i, r) {
      var a = 0;
      i.subscribe(ef(r, function (i) {
        return e.call(t, i, a++) && r.next(i);
      }));
    });
  }
  function te(e) {
    return function (t) {
      var i = [];
      function r(r) {
        i.push(eK(e[r]).subscribe(ef(t, function (e) {
          if (i) {
            for (var a = 0; a < i.length; a++) {
              if (a !== r) {
                i[a].unsubscribe();
              }
            }
            i = null;
          }
          t.next(e);
        })));
      }
      var a = 0;
      for (; i && !t.closed && a < e.length; a++) {
        r(a);
      }
    };
  }
  function tt(e) {
    return ep(function (t, i) {
      var r;
      var a = null;
      var n = false;
      a = t.subscribe(ef(i, undefined, undefined, function (s) {
        r = eK(e(s, tt(e)(t)));
        if (a) {
          a.unsubscribe();
          a = null;
          r.subscribe(i);
        } else {
          n = true;
        }
      }));
      if (n) {
        a.unsubscribe();
        a = null;
        r.subscribe(i);
      }
    });
  }
  function ti(e) {
    return ep(function (t, i) {
      var r = false;
      t.subscribe(ef(i, function (e) {
        r = true;
        i.next(e);
      }, function () {
        if (!r) {
          i.next(e);
        }
        i.complete();
      }));
    });
  }
  function tr(e) {
    if (e <= 0) {
      return function () {
        return eE;
      };
    } else {
      return ep(function (t, i) {
        var r = 0;
        t.subscribe(ef(i, function (t) {
          if (++r <= e) {
            i.next(t);
            if (e <= r) {
              i.complete();
            }
          }
        }));
      });
    }
  }
  function ta() {
    return ep(function (e, t) {
      e.subscribe(ef(t, X));
    });
  }
  function tn(e = ts) {
    return ep(function (t, i) {
      var r = false;
      t.subscribe(ef(i, function (e) {
        r = true;
        i.next(e);
      }, function () {
        if (r) {
          return i.complete();
        } else {
          return i.error(e());
        }
      }));
    });
  }
  function ts() {
    return new eV();
  }
  function to(e, t) {
    var i = arguments.length >= 2;
    return function (r) {
      return r.pipe(e ? e9(function (t, i) {
        return e(t, i, r);
      }) : ec, tr(1), i ? ti(t) : tn(function () {
        return new eV();
      }));
    };
  }
  function tl() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    if (e.length) {
      return ep(function (t, i) {
        te(_([t], D(e)))(i);
      });
    } else {
      return ec;
    }
  }
  function tc(e = Infinity) {
    var t;
    var i = (t = e && typeof e == "object" ? e : {
      count: e
    }).count;
    var r = i === undefined ? Infinity : i;
    var a = t.delay;
    var n = t.resetOnSuccess;
    var s = n !== undefined && n;
    if (r <= 0) {
      return ec;
    } else {
      return ep(function (e, t) {
        var i;
        var n = 0;
        function o() {
          var l = false;
          i = e.subscribe(ef(t, function (e) {
            if (s) {
              n = 0;
            }
            t.next(e);
          }, undefined, function (e) {
            if (n++ < r) {
              function s() {
                if (i) {
                  i.unsubscribe();
                  i = null;
                  o();
                } else {
                  l = true;
                }
              }
              if (a != null) {
                var c = typeof a == "number" ? e6(a) : eK(a(e, n));
                var d = ef(t, function () {
                  d.unsubscribe();
                  s();
                }, function () {
                  t.complete();
                });
                c.subscribe(d);
              } else {
                s();
              }
            } else {
              t.error(e);
            }
          }));
          if (l) {
            i.unsubscribe();
            i = null;
            o();
          }
        }
        o();
      });
    }
  }
  function td(e, t, i) {
    var r = K(e) || t || i ? {
      next: e,
      error: t,
      complete: i
    } : e;
    if (r) {
      return ep(function (e, t) {
        if ((i = r.subscribe) !== null && i !== undefined) {
          i.call(r);
        }
        var i;
        var a = true;
        e.subscribe(ef(t, function (e) {
          var i;
          if ((i = r.next) !== null && i !== undefined) {
            i.call(r, e);
          }
          t.next(e);
        }, function () {
          var e;
          a = false;
          if ((e = r.complete) !== null && e !== undefined) {
            e.call(r);
          }
          t.complete();
        }, function (e) {
          var i;
          a = false;
          if ((i = r.error) !== null && i !== undefined) {
            i.call(r, e);
          }
          t.error(e);
        }, function () {
          var e;
          var t;
          if (a) {
            if ((e = r.unsubscribe) !== null && e !== undefined) {
              e.call(r);
            }
          }
          if ((t = r.finalize) !== null && t !== undefined) {
            t.call(r);
          }
        }));
      });
    } else {
      return ec;
    }
  }
  Symbol.dispose ??= Symbol("dispose");
  Symbol.asyncDispose ??= Symbol("asyncDispose");
  let tu = Symbol.dispose;
  let th = Symbol.asyncDispose;
  class tp {
    #t = false;
    #i = [];
    get disposed() {
      return this.#t;
    }
    dispose() {
      this[tu]();
    }
    use(e) {
      if (e && typeof e[tu] == "function") {
        this.#i.push(e);
      }
      return e;
    }
    adopt(e, t) {
      this.#i.push({
        [tu]() {
          t(e);
        }
      });
      return e;
    }
    defer(e) {
      this.#i.push({
        [tu]() {
          e();
        }
      });
    }
    move() {
      if (this.#t) {
        throw ReferenceError("A disposed stack can not use anything new");
      }
      let e = new tp();
      e.#i = this.#i;
      this.#i = [];
      this.#t = true;
      return e;
    }
    [tu]() {
      if (this.#t) {
        return;
      }
      this.#t = true;
      let e = [];
      for (let t of this.#i.reverse()) {
        try {
          t[tu]();
        } catch (t) {
          e.push(t);
        }
      }
      if (e.length === 1) {
        throw e[0];
      }
      if (e.length > 1) {
        let t = null;
        for (let i of e.reverse()) {
          t = t === null ? i : new tm(i, t);
        }
        throw t;
      }
    }
    [Symbol.toStringTag] = "DisposableStack";
  }
  class tf {
    #t = false;
    #i = [];
    get disposed() {
      return this.#t;
    }
    async dispose() {
      await this[th]();
    }
    use(e) {
      if (e) {
        let t = e[th];
        let i = e[tu];
        if (typeof t == "function") {
          this.#i.push(e);
        } else if (typeof i == "function") {
          this.#i.push({
            [th]: async () => {
              e[tu]();
            }
          });
        }
      }
      return e;
    }
    adopt(e, t) {
      this.#i.push({
        [th]: () => t(e)
      });
      return e;
    }
    defer(e) {
      this.#i.push({
        [th]: () => e()
      });
    }
    move() {
      if (this.#t) {
        throw ReferenceError("A disposed stack can not use anything new");
      }
      let e = new tf();
      e.#i = this.#i;
      this.#i = [];
      this.#t = true;
      return e;
    }
    async [th]() {
      if (this.#t) {
        return;
      }
      this.#t = true;
      let e = [];
      for (let t of this.#i.reverse()) {
        try {
          await t[th]();
        } catch (t) {
          e.push(t);
        }
      }
      if (e.length === 1) {
        throw e[0];
      }
      if (e.length > 1) {
        let t = null;
        for (let i of e.reverse()) {
          t = t === null ? i : new tm(i, t);
        }
        throw t;
      }
    }
    [Symbol.toStringTag] = "AsyncDisposableStack";
  }
  class tm extends Error {
    #r;
    #a;
    constructor(e, t, i = "An error was suppressed during disposal") {
      super(i);
      this.name = "SuppressedError";
      this.#r = e;
      this.#a = t;
    }
    get error() {
      return this.#r;
    }
    get suppressed() {
      return this.#a;
    }
  }
  class ty {
    #n;
    #s = new Map();
    constructor(e = function (e) {
      return {
        all: e = e || new Map(),
        on: function (t, i) {
          var r = e.get(t);
          if (r) {
            r.push(i);
          } else {
            e.set(t, [i]);
          }
        },
        off: function (t, i) {
          var r = e.get(t);
          if (r) {
            if (i) {
              r.splice(r.indexOf(i) >>> 0, 1);
            } else {
              e.set(t, []);
            }
          }
        },
        emit: function (t, i) {
          var r = e.get(t);
          if (r) {
            r.slice().map(function (e) {
              e(i);
            });
          }
          if (r = e.get("*")) {
            r.slice().map(function (e) {
              e(t, i);
            });
          }
        }
      };
    }(new Map())) {
      this.#n = e;
    }
    on(e, t) {
      let i = this.#s.get(e);
      if (i === undefined) {
        this.#s.set(e, [t]);
      } else {
        i.push(t);
      }
      this.#n.on(e, t);
      return this;
    }
    off(e, t) {
      let i = this.#s.get(e) ?? [];
      if (t === undefined) {
        for (let t of i) {
          this.#n.off(e, t);
        }
        this.#s.delete(e);
        return this;
      }
      let r = i.lastIndexOf(t);
      if (r > -1) {
        this.#n.off(e, ...i.splice(r, 1));
      }
      return this;
    }
    emit(e, t) {
      this.#n.emit(e, t);
      return this.listenerCount(e) > 0;
    }
    once(e, t) {
      let i = r => {
        t(r);
        this.off(e, i);
      };
      return this.on(e, i);
    }
    listenerCount(e) {
      return this.#s.get(e)?.length || 0;
    }
    removeAllListeners(e) {
      if (e !== undefined) {
        return this.off(e);
      } else {
        this[tu]();
        return this;
      }
    }
    [tu]() {
      for (let [e, t] of this.#s) {
        for (let i of t) {
          this.#n.off(e, i);
        }
      }
      this.#s.clear();
    }
  }
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  let tw = processBrowserShim !== undefined && !!processBrowserShim.version;
  let tv = {
    value: {
      get fs() {
        throw Error("fs is not available in this environment");
      },
      get ScreenRecorder() {
        throw Error("ScreenRecorder is not available in this environment");
      }
    }
  };
  var puppeteerCoreVersion = require("puppeteer-core-version") /*id: 119221*/;
  let tk = (e, t) => {
    if (!e) {
      throw Error(t);
    }
  };
  var tS = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  function tT(e, t = false) {
    if (t) {
      if (typeof tS == "function") {
        return tS.from(e, "base64");
      } else {
        return Uint8Array.from(atob(e), e => e.codePointAt(0));
      }
    } else {
      return new TextEncoder().encode(e);
    }
  }
  function tC(e) {
    let t = [];
    for (let i = 0; i < e.length; i += 65534) {
      let r = e.subarray(i, i + 65534);
      t.push(String.fromCodePoint.apply(null, r));
    }
    return btoa(t.join(""));
  }
  let tM = null;
  async function tE() {
    tM ||= (await require.e("debug-logger") /*id: 9533*/.then(require.t.bind(require, 471456, 19))).default;
    return tM;
  }
  let tP = e => tw ? async (...t) => {
    if (tx) {
      tI.push(e + t);
    }
    (await tE())(e)(t);
  } : (...t) => {
    let i = globalThis.__PUPPETEER_DEBUG;
    if (!i || i !== "*" && !(i.endsWith("*") ? e.startsWith(i) : e === i)) {
      return;
    }
  };
  let tI = [];
  let tx = false;
  function tF(e) {
    tI = [];
    tx = e;
  }
  function tA() {
    return tI;
  }
  class tL extends Error {
    constructor(e, t) {
      super(e, t);
      this.name = this.constructor.name;
    }
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
  }
  class tO extends tL {}
  class tR extends tL {}
  class tD extends tL {
    #o;
    #l = "";
    set code(e) {
      this.#o = e;
    }
    get code() {
      return this.#o;
    }
    set originalMessage(e) {
      this.#l = e;
    }
    get originalMessage() {
      return this.#l;
    }
  }
  class t_ extends tL {}
  class tN extends tD {}
  let tK = {
    letter: {
      cm: {
        width: 21.59,
        height: 27.94
      },
      in: {
        width: 8.5,
        height: 11
      }
    },
    legal: {
      cm: {
        width: 21.59,
        height: 35.56
      },
      in: {
        width: 8.5,
        height: 14
      }
    },
    tabloid: {
      cm: {
        width: 27.94,
        height: 43.18
      },
      in: {
        width: 11,
        height: 17
      }
    },
    ledger: {
      cm: {
        width: 43.18,
        height: 27.94
      },
      in: {
        width: 17,
        height: 11
      }
    },
    a0: {
      cm: {
        width: 84.1,
        height: 118.9
      },
      in: {
        width: 33.1102,
        height: 46.811
      }
    },
    a1: {
      cm: {
        width: 59.4,
        height: 84.1
      },
      in: {
        width: 23.3858,
        height: 33.1102
      }
    },
    a2: {
      cm: {
        width: 42,
        height: 59.4
      },
      in: {
        width: 16.5354,
        height: 23.3858
      }
    },
    a3: {
      cm: {
        width: 29.7,
        height: 42
      },
      in: {
        width: 11.6929,
        height: 16.5354
      }
    },
    a4: {
      cm: {
        width: 21,
        height: 29.7
      },
      in: {
        width: 8.2677,
        height: 11.6929
      }
    },
    a5: {
      cm: {
        width: 14.8,
        height: 21
      },
      in: {
        width: 5.8268,
        height: 8.2677
      }
    },
    a6: {
      cm: {
        width: 10.5,
        height: 14.8
      },
      in: {
        width: 4.1339,
        height: 5.8268
      }
    }
  };
  let tq = tP("puppeteer:error");
  let tH = Object.freeze({
    width: 800,
    height: 600
  });
  let tB = Symbol("Source URL for Puppeteer evaluation scripts");
  class tj {
    static INTERNAL_URL = "pptr:internal";
    static fromCallSite(e, t) {
      let i = new tj();
      i.#c = e;
      i.#d = t.toString();
      return i;
    }
    static parse = e => {
      let [t = "", i = ""] = (e = e.slice(5)).split(";");
      let r = new tj();
      r.#c = t;
      r.#d = decodeURIComponent(i);
      return r;
    };
    static isPuppeteerURL = e => e.startsWith("pptr:");
    #c;
    #d;
    get functionName() {
      return this.#c;
    }
    get siteString() {
      return this.#d;
    }
    toString() {
      return `pptr:${[this.#c, encodeURIComponent(this.#d)].join(";")}`;
    }
  }
  let tW = (e, t) => {
    if (Object.prototype.hasOwnProperty.call(t, tB)) {
      return t;
    }
    let i = Error.prepareStackTrace;
    Error.prepareStackTrace = (e, t) => t[2];
    let r = Error().stack;
    Error.prepareStackTrace = i;
    return Object.assign(t, {
      [tB]: tj.fromCallSite(e, r)
    });
  };
  let tz = e => {
    if (Object.prototype.hasOwnProperty.call(e, tB)) {
      return e[tB];
    }
  };
  let tU = e => typeof e == "string" || e instanceof String;
  let tV = e => typeof e == "number" || e instanceof Number;
  let tG = e => typeof e == "object" && e?.constructor === Object;
  let t$ = e => typeof e == "object" && e?.constructor === RegExp;
  let tX = e => typeof e == "object" && e?.constructor === Date;
  function tQ(e, ...t) {
    if (tU(e)) {
      tk(t.length === 0, "Cannot evaluate a string with arguments");
      return e;
    } else {
      return `(${e})(${t.map(function (e) {
        if (Object.is(e, undefined)) {
          return "undefined";
        } else {
          return JSON.stringify(e);
        }
      }).join(",")})`;
    }
  }
  async function tJ(e, t) {
    let i = [];
    let r = e.getReader();
    if (t) {
      let e = await tv.value.fs.promises.open(t, "w+");
      try {
        while (true) {
          let {
            done: t,
            value: a
          } = await r.read();
          if (t) {
            break;
          }
          i.push(a);
          await e.writeFile(a);
        }
      } finally {
        await e.close();
      }
    } else {
      while (true) {
        let {
          done: e,
          value: t
        } = await r.read();
        if (e) {
          break;
        }
        i.push(t);
      }
    }
    try {
      let e = function (e) {
        let t = 0;
        for (let i of e) {
          t += i.length;
        }
        let i = new Uint8Array(t);
        let r = 0;
        for (let t of e) {
          i.set(t, r);
          r += t.length;
        }
        return i;
      }(i);
      if (e.length === 0) {
        return null;
      }
      return e;
    } catch (e) {
      tq(e);
      return null;
    }
  }
  async function tY(e, t) {
    return new ReadableStream({
      async pull(i) {
        let {
          data: r,
          base64Encoded: a,
          eof: n
        } = await e.send("IO.read", {
          handle: t
        });
        i.enqueue(tT(r, a ?? false));
        if (n) {
          await e.send("IO.close", {
            handle: t
          });
          i.close();
        }
      }
    });
  }
  function tZ(e) {
    let t = null;
    if (new Set(["alert", "confirm", "prompt", "beforeunload"]).has(e)) {
      t = e;
    }
    tk(t, `Unknown javascript dialog type: ${e}`);
    return t;
  }
  function t0(e, t) {
    if (e === 0) {
      return e7;
    } else {
      return e6(e).pipe(e$(() => {
        throw new tO(`Timed out after waiting ${e}ms`, {
          cause: t
        });
      }));
    }
  }
  let t1 = "__puppeteer_utility_world__" + puppeteerCoreVersion.puppeteerVersion;
  let t5 = /^[\x20\t]*\/\/[@#] sourceURL=\s{0,10}(\S*?)\s{0,10}$/m;
  function t3(e) {
    return `//# sourceURL=${e}`;
  }
  let t4 = 500;
  function t6(e = {}, t = "in") {
    let i = 8.5;
    let r = 11;
    if (e.format) {
      let a = tK[e.format.toLowerCase()][t];
      tk(a, "Unknown paper format: " + e.format);
      i = a.width;
      r = a.height;
    } else {
      i = t7(e.width, t) ?? i;
      r = t7(e.height, t) ?? r;
    }
    let a = {
      top: t7(e.margin?.top, t) || 0,
      left: t7(e.margin?.left, t) || 0,
      bottom: t7(e.margin?.bottom, t) || 0,
      right: t7(e.margin?.right, t) || 0
    };
    if (e.outline) {
      e.tagged = true;
    }
    return {
      scale: 1,
      displayHeaderFooter: false,
      headerTemplate: "",
      footerTemplate: "",
      printBackground: false,
      landscape: false,
      pageRanges: "",
      preferCSSPageSize: false,
      omitBackground: false,
      outline: false,
      tagged: true,
      waitForFonts: true,
      ...e,
      width: i,
      height: r,
      margin: a
    };
  }
  let t2 = {
    px: 1,
    in: 96,
    cm: 37.8,
    mm: 3.78
  };
  function t7(e, t = "in") {
    let i;
    if (e !== undefined) {
      if (tV(e)) {
        i = e;
      } else if (tU(e)) {
        let t = e.substring(e.length - 2).toLowerCase();
        let r = "";
        if (t in t2) {
          r = e.substring(0, e.length - 2);
        } else {
          t = "px";
          r = e;
        }
        let a = Number(r);
        tk(!isNaN(a), "Failed to parse parameter value: " + e);
        i = a * t2[t];
      } else {
        throw Error("page.pdf() Cannot handle parameter type: " + typeof e);
      }
      return i / t2[t];
    }
  }
  function t8(e, t) {
    return new eu(i => {
      let r = e => {
        i.next(e);
      };
      e.on(t, r);
      return () => {
        e.off(t, r);
      };
    });
  }
  function t9(e, t) {
    if (e) {
      return function e(t, i, r, a) {
        if (K(r)) {
          a = r;
          r = undefined;
        }
        if (a) {
          return e(t, i, r).pipe((n = a, e$(function (e) {
            if (eX(e)) {
              return n.apply(undefined, _([], D(e)));
            } else {
              return n(e);
            }
          })));
        }
        var n;
        var s;
        var o;
        var l;
        var c = D(K((s = t).addEventListener) && K(s.removeEventListener) ? e5.map(function (e) {
          return function (a) {
            return t[e](i, a, r);
          };
        }) : K((o = t).addListener) && K(o.removeListener) ? e1.map(e4(t, i)) : K((l = t).on) && K(l.off) ? e3.map(e4(t, i)) : [], 2);
        var d = c[0];
        var u = c[1];
        if (!d && eF(t)) {
          return eJ(function (t) {
            return e(t, i, r);
          })(eK(t));
        }
        if (!d) {
          throw TypeError("Invalid event target");
        }
        return new eu(function (e) {
          function t() {
            var t = [];
            var i = 0;
            for (; i < arguments.length; i++) {
              t[i] = arguments[i];
            }
            return e.next(t.length > 1 ? t : t[0]);
          }
          d(t);
          return function () {
            return u(t);
          };
        });
      }(e, "abort").pipe(e$(() => {
        if (e.reason instanceof Error) {
          e.reason.cause = t;
          throw e.reason;
        }
        throw Error(e.reason, {
          cause: t
        });
      }));
    } else {
      return e7;
    }
  }
  function ie(e) {
    return eJ(t => ez(Promise.resolve(e(t))).pipe(e9(e => e), e$(() => t)));
  }
  let it = new Map([["accelerometer", "sensors"], ["ambient-light-sensor", "sensors"], ["background-sync", "backgroundSync"], ["camera", "videoCapture"], ["clipboard-read", "clipboardReadWrite"], ["clipboard-sanitized-write", "clipboardSanitizedWrite"], ["clipboard-write", "clipboardReadWrite"], ["geolocation", "geolocation"], ["gyroscope", "sensors"], ["idle-detection", "idleDetection"], ["keyboard-lock", "keyboardLock"], ["magnetometer", "sensors"], ["microphone", "audioCapture"], ["midi", "midi"], ["notifications", "notifications"], ["payment-handler", "paymentHandler"], ["persistent-storage", "durableStorage"], ["pointer-lock", "pointerLock"], ["midi-sysex", "midiSysex"]]);
  class ii extends ty {
    constructor() {
      super();
    }
    async waitForTarget(e, t = {}) {
      let {
        timeout: i = 30000,
        signal: r
      } = t;
      return await eG(e2(t8(this, "targetcreated"), t8(this, "targetchanged"), ez(this.targets())).pipe(ie(e), tl(t9(r), t0(i))));
    }
    async pages() {
      return (await Promise.all(this.browserContexts().map(e => e.pages()))).reduce((e, t) => e.concat(t), []);
    }
    async cookies() {
      return await this.defaultBrowserContext().cookies();
    }
    async setCookie(...e) {
      return await this.defaultBrowserContext().setCookie(...e);
    }
    async deleteCookie(...e) {
      return await this.defaultBrowserContext().deleteCookie(...e);
    }
    isConnected() {
      return this.connected;
    }
    [tu]() {
      if (this.process()) {
        this.close().catch(tq);
        return;
      }
      this.disconnect().catch(tq);
    }
    [th]() {
      if (this.process()) {
        return this.close();
      } else {
        return this.disconnect();
      }
    }
  }
  class ir {
    static create(e) {
      return new ir(e);
    }
    static async race(e) {
      let t = new Set();
      try {
        let i = e.map(e => e instanceof ir ? (e.#u && t.add(e), e.valueOrThrow()) : e);
        return await Promise.race(i);
      } finally {
        for (let e of t) {
          e.reject(Error("Timeout cleared"));
        }
      }
    }
    #h = false;
    #p = false;
    #f;
    #m;
    #y = new Promise(e => {
      this.#m = e;
    });
    #u;
    #g;
    constructor(e) {
      if (e && e.timeout > 0) {
        this.#g = new tO(e.message);
        this.#u = setTimeout(() => {
          this.reject(this.#g);
        }, e.timeout);
      }
    }
    #w(e) {
      clearTimeout(this.#u);
      this.#f = e;
      this.#m();
    }
    resolve(e) {
      if (!this.#p && !this.#h) {
        this.#h = true;
        this.#w(e);
      }
    }
    reject(e) {
      if (!this.#p && !this.#h) {
        this.#p = true;
        this.#w(e);
      }
    }
    resolved() {
      return this.#h;
    }
    finished() {
      return this.#h || this.#p;
    }
    value() {
      return this.#f;
    }
    #v;
    valueOrThrow() {
      this.#v ||= (async () => {
        await this.#y;
        if (this.#p) {
          throw this.#f;
        }
        return this.#f;
      })();
      return this.#v;
    }
  }
  class ia {
    static Guard = class {
      #b;
      #k;
      constructor(e, t) {
        this.#b = e;
        this.#k = t;
      }
      [tu]() {
        this.#k?.();
        return this.#b.release();
      }
    };
    #S = false;
    #T = [];
    async acquire(e) {
      if (!this.#S) {
        this.#S = true;
        return new ia.Guard(this);
      }
      let t = ir.create();
      this.#T.push(t.resolve.bind(t));
      await t.valueOrThrow();
      return new ia.Guard(this, e);
    }
    release() {
      let e = this.#T.shift();
      if (!e) {
        this.#S = false;
        return;
      }
      e();
    }
  }
  class is extends ty {
    constructor() {
      super();
    }
    #C;
    #M = 0;
    startScreenshot() {
      let e = this.#C || new ia();
      this.#C = e;
      this.#M++;
      return e.acquire(() => {
        this.#M--;
        if (this.#M === 0) {
          this.#C = undefined;
        }
      });
    }
    waitForScreenshotOperations() {
      return this.#C?.acquire();
    }
    async waitForTarget(e, t = {}) {
      let {
        timeout: i = 30000
      } = t;
      return await eG(e2(t8(this, "targetcreated"), t8(this, "targetchanged"), ez(this.targets())).pipe(ie(e), tl(t0(i))));
    }
    async deleteCookie(...e) {
      return await this.setCookie(...e.map(e => ({
        ...e,
        expires: 1
      })));
    }
    get closed() {
      return !this.browser().browserContexts().includes(this);
    }
    get id() {}
    [tu]() {
      this.close().catch(tq);
    }
    [th]() {
      return this.close();
    }
  }
  (r = T ||= {}).Disconnected = Symbol("CDPSession.Disconnected");
  r.Swapped = Symbol("CDPSession.Swapped");
  r.Ready = Symbol("CDPSession.Ready");
  r.SessionAttached = "sessionattached";
  r.SessionDetached = "sessiondetached";
  class io extends ty {
    constructor() {
      super();
    }
    parentSession() {}
  }
  class il {
    #E;
    #P;
    #I;
    handled = false;
    constructor(e, t, i = "") {
      this.#E = e;
      this.#P = t;
      this.#I = i;
    }
    type() {
      return this.#E;
    }
    message() {
      return this.#P;
    }
    defaultValue() {
      return this.#I;
    }
    async accept(e) {
      tk(!this.handled, "Cannot accept dialog which is already handled!");
      this.handled = true;
      await this.handle({
        accept: true,
        text: e
      });
    }
    async dismiss() {
      tk(!this.handled, "Cannot dismiss dialog which is already handled!");
      this.handled = true;
      await this.handle({
        accept: false
      });
    }
  }
  let ic = Symbol("_isElementHandle");
  function id(e) {
    return typeof e == "object" && e !== null && "name" in e && "message" in e;
  }
  function iu(e) {
    return id(e) && ("errno" in e || "code" in e || "path" in e || "syscall" in e);
  }
  function ih(e, t, i) {
    e.message = t;
    e.originalMessage = i ?? e.originalMessage;
    return e;
  }
  function ip(e) {
    let t = e.error.message;
    if (e.error && typeof e.error == "object" && "data" in e.error) {
      t += ` ${e.error.data}`;
    }
    return t;
  }
  let im = new Map();
  let iy = e => {
    let t = im.get(e);
    if (!t) {
      t = Function(`return ${e}`)();
      im.set(e, t);
    }
    return t;
  };
  function ig(e) {
    let t = e.toString();
    try {
      Function(`(${t})`);
    } catch (i) {
      if (i.message.includes("Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive")) {
        return t;
      }
      let e = "function ";
      if (t.startsWith("async ")) {
        e = `async ${e}`;
        t = t.substring(6);
      }
      t = `${e}${t}`;
      try {
        Function(`(${t})`);
      } catch {
        throw Error("Passed function cannot be serialized!");
      }
    }
    return t;
  }
  let iw = (e, t) => {
    let i = ig(e);
    for (let [e, r] of Object.entries(t)) {
      i = i.replace(RegExp(`PLACEHOLDER\\(\\s*(?:'${e}'|"${e}")\\s*\\)`, "g"), `(${r})`);
    }
    return iy(i);
  };
  function iv(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  a = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function ib(e) {
    function t(t) {
      e.error = e.hasError ? new a(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  async function* ik(e, t) {
    let i = {
      stack: [],
      error: undefined,
      hasError: false
    };
    try {
      let r = iv(i, await e.evaluateHandle(async (e, t) => {
        let i = [];
        while (i.length < t) {
          let t = await e.next();
          if (t.done) {
            break;
          }
          i.push(t.value);
        }
        return i;
      }, t), false);
      let a = await r.getProperties();
      let n = a.values();
      iv(i, new tp(), false).defer(() => {
        for (let e of n) {
          let t = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            iv(t, e, false)[tu]();
          } catch (e) {
            t.error = e;
            t.hasError = true;
          } finally {
            ib(t);
          }
        }
      });
      yield* n;
      return a.size === 0;
    } catch (e) {
      i.error = e;
      i.hasError = true;
    } finally {
      ib(i);
    }
  }
  async function* iS(e) {
    let t = 20;
    while (!(yield* ik(e, t))) {
      t <<= 1;
    }
  }
  async function* iT(e) {
    let t = {
      stack: [],
      error: undefined,
      hasError: false
    };
    try {
      let i = iv(t, await e.evaluateHandle(e => async function* () {
        yield* e;
      }()), false);
      yield* iS(i);
    } catch (e) {
      t.error = e;
      t.hasError = true;
    } finally {
      ib(t);
    }
  }
  class iC {
    static create = e => new iC(e);
    #x;
    constructor(e) {
      this.#x = e;
    }
    async get(e) {
      return await this.#x(e);
    }
  }
  function iM(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  n = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function iE(e) {
    function t(t) {
      e.error = e.hasError ? new n(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  class iP {
    static querySelectorAll;
    static querySelector;
    static get _querySelector() {
      if (this.querySelector) {
        return this.querySelector;
      }
      if (!this.querySelectorAll) {
        throw Error("Cannot create default `querySelector`.");
      }
      return this.querySelector = iw(async (e, t, i) => {
        for await (let r of PLACEHOLDER("querySelectorAll")(e, t, i)) {
          return r;
        }
        return null;
      }, {
        querySelectorAll: ig(this.querySelectorAll)
      });
    }
    static get _querySelectorAll() {
      if (this.querySelectorAll) {
        return this.querySelectorAll;
      }
      if (!this.querySelector) {
        throw Error("Cannot create default `querySelectorAll`.");
      }
      return this.querySelectorAll = iw(async function* (e, t, i) {
        let r = PLACEHOLDER("querySelector");
        let a = await r(e, t, i);
        if (a) {
          yield a;
        }
      }, {
        querySelector: ig(this.querySelector)
      });
    }
    static async *queryAll(e, t) {
      let i = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        let r = iM(i, await e.evaluateHandle(this._querySelectorAll, t, iC.create(e => e.puppeteerUtil)), false);
        yield* iT(r);
      } catch (e) {
        i.error = e;
        i.hasError = true;
      } finally {
        iE(i);
      }
    }
    static async queryOne(e, t) {
      let i = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        let r = iM(i, await e.evaluateHandle(this._querySelector, t, iC.create(e => e.puppeteerUtil)), false);
        if (!(ic in r)) {
          return null;
        }
        return r.move();
      } catch (e) {
        i.error = e;
        i.hasError = true;
      } finally {
        iE(i);
      }
    }
    static async waitFor(e, t, i) {
      let r = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        let a;
        let n = iM(r, await (async () => {
          if (!(ic in e)) {
            a = e;
            return;
          }
          a = e.frame;
          return await a.isolatedRealm().adoptHandle(e);
        })(), false);
        let {
          visible: s = false,
          hidden: o = false,
          timeout: l,
          signal: c
        } = i;
        let d = s || o ? "raf" : i.polling;
        try {
          let e = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            c?.throwIfAborted();
            let i = iM(e, await a.isolatedRealm().waitForFunction(async (e, t, i, r, a) => {
              let n = e.createFunction(t);
              let s = await n(r ?? document, i, e);
              return e.checkVisibility(s, a);
            }, {
              polling: d,
              root: n,
              timeout: l,
              signal: c
            }, iC.create(e => e.puppeteerUtil), ig(this._querySelector), t, n, !!s || !o && undefined), false);
            if (c?.aborted) {
              throw c.reason;
            }
            if (!(ic in i)) {
              return null;
            }
            return await a.mainRealm().transferHandle(i);
          } catch (t) {
            e.error = t;
            e.hasError = true;
          } finally {
            iE(e);
          }
        } catch (e) {
          if (!id(e) || e.name === "AbortError") {
            throw e;
          }
          e.message = `Waiting for selector \`${t}\` failed: ${e.message}`;
          throw e;
        }
      } catch (e) {
        r.error = e;
        r.hasError = true;
      } finally {
        iE(r);
      }
    }
  }
  class iI {
    static async *map(e, t) {
      for await (let i of e) {
        yield await t(i);
      }
    }
    static async *flatMap(e, t) {
      for await (let i of e) {
        yield* t(i);
      }
    }
    static async collect(e) {
      let t = [];
      for await (let i of e) {
        t.push(i);
      }
      return t;
    }
    static async first(e) {
      for await (let t of e) {
        return t;
      }
    }
  }
  let ix = e => ["name", "role"].includes(e);
  let iF = /\[\s*(?<attribute>\w+)\s*=\s*(?<quote>"|')(?<value>\\.|.*?(?=\k<quote>))\k<quote>\s*\]/g;
  let iA = e => {
    if (e.length > 10000) {
      throw Error(`Selector ${e} is too long`);
    }
    let t = {};
    let i = e.replace(iF, (e, i, r, a) => {
      tk(ix(i), `Unknown aria attribute "${i}" in selector`);
      t[i] = a;
      return "";
    });
    if (i && !t.name) {
      t.name = i;
    }
    return t;
  };
  class iL extends iP {
    static querySelector = async (e, t, {
      ariaQuerySelector: i
    }) => await i(e, t);
    static async *queryAll(e, t) {
      let {
        name: i,
        role: r
      } = iA(t);
      yield* e.queryAXTree(i, r);
    }
    static queryOne = async (e, t) => (await iI.first(this.queryAll(e, t))) ?? null;
  }
  class iO extends iP {
    static querySelector = (e, t, {
      cssQuerySelector: i
    }) => i(e, t);
    static querySelectorAll = (e, t, {
      cssQuerySelectorAll: i
    }) => i(e, t);
  }
  class iR {
    #F = false;
    #A = new Set();
    append(e) {
      this.#L(() => {
        this.#A.add(e);
      });
    }
    pop(e) {
      this.#L(() => {
        this.#A.delete(e);
      });
    }
    inject(e, t = false) {
      if (this.#F || t) {
        e(this.#x());
      }
      this.#F = false;
    }
    #L(e) {
      e();
      this.#F = true;
    }
    #x() {
      return `(() => {
      const module = {};
      "use strict";var g=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var l=(t,e)=>{for(var r in e)g(t,r,{get:e[r],enumerable:!0})},J=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of B(e))!Y.call(t,n)&&n!==r&&g(t,n,{get:()=>e[n],enumerable:!(o=X(e,n))||o.enumerable});return t};var z=t=>J(g({},"__esModule",{value:!0}),t);var pe={};l(pe,{default:()=>he});module.exports=z(pe);var N=class extends Error{constructor(e,r){super(e,r),this.name=this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}},p=class extends N{};var c=class t{static create(e){return new t(e)}static async race(e){let r=new Set;try{let o=e.map(n=>n instanceof t?(n.#n&&r.add(n),n.valueOrThrow()):n);return await Promise.race(o)}finally{for(let o of r)o.reject(new Error("Timeout cleared"))}}#e=!1;#r=!1;#o;#t;#a=new Promise(e=>{this.#t=e});#n;#i;constructor(e){e&&e.timeout>0&&(this.#i=new p(e.message),this.#n=setTimeout(()=>{this.reject(this.#i)},e.timeout))}#l(e){clearTimeout(this.#n),this.#o=e,this.#t()}resolve(e){this.#r||this.#e||(this.#e=!0,this.#l(e))}reject(e){this.#r||this.#e||(this.#r=!0,this.#l(e))}resolved(){return this.#e}finished(){return this.#e||this.#r}value(){return this.#o}#s;valueOrThrow(){return this.#s||(this.#s=(async()=>{if(await this.#a,this.#r)throw this.#o;return this.#o})()),this.#s}};var L=new Map,F=t=>{let e=L.get(t);return e||(e=new Function(\`return \${t}\`)(),L.set(t,e),e)};var x={};l(x,{ariaQuerySelector:()=>G,ariaQuerySelectorAll:()=>b});var G=(t,e)=>globalThis.__ariaQuerySelector(t,e),b=async function*(t,e){yield*await globalThis.__ariaQuerySelectorAll(t,e)};var E={};l(E,{cssQuerySelector:()=>K,cssQuerySelectorAll:()=>Z});var K=(t,e)=>t.querySelector(e),Z=function(t,e){return t.querySelectorAll(e)};var A={};l(A,{customQuerySelectors:()=>P});var v=class{#e=new Map;register(e,r){if(!r.queryOne&&r.queryAll){let o=r.queryAll;r.queryOne=(n,i)=>{for(let s of o(n,i))return s;return null}}else if(r.queryOne&&!r.queryAll){let o=r.queryOne;r.queryAll=(n,i)=>{let s=o(n,i);return s?[s]:[]}}else if(!r.queryOne||!r.queryAll)throw new Error("At least one query method must be defined.");this.#e.set(e,{querySelector:r.queryOne,querySelectorAll:r.queryAll})}unregister(e){this.#e.delete(e)}get(e){return this.#e.get(e)}clear(){this.#e.clear()}},P=new v;var R={};l(R,{pierceQuerySelector:()=>ee,pierceQuerySelectorAll:()=>te});var ee=(t,e)=>{let r=null,o=n=>{let i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&o(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==n&&!r&&s.matches(e)&&(r=s)}while(!r&&i.nextNode())};return t instanceof Document&&(t=t.documentElement),o(t),r},te=(t,e)=>{let r=[],o=n=>{let i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&o(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==n&&s.matches(e)&&r.push(s)}while(i.nextNode())};return t instanceof Document&&(t=t.documentElement),o(t),r};var u=(t,e)=>{if(!t)throw new Error(e)};var y=class{#e;#r;#o;#t;constructor(e,r){this.#e=e,this.#r=r}async start(){let e=this.#t=c.create(),r=await this.#e();if(r){e.resolve(r);return}this.#o=new MutationObserver(async()=>{let o=await this.#e();o&&(e.resolve(o),await this.stop())}),this.#o.observe(this.#r,{childList:!0,subtree:!0,attributes:!0})}async stop(){u(this.#t,"Polling never started."),this.#t.finished()||this.#t.reject(new Error("Polling stopped")),this.#o&&(this.#o.disconnect(),this.#o=void 0)}result(){return u(this.#t,"Polling never started."),this.#t.valueOrThrow()}},w=class{#e;#r;constructor(e){this.#e=e}async start(){let e=this.#r=c.create(),r=await this.#e();if(r){e.resolve(r);return}let o=async()=>{if(e.finished())return;let n=await this.#e();if(!n){window.requestAnimationFrame(o);return}e.resolve(n),await this.stop()};window.requestAnimationFrame(o)}async stop(){u(this.#r,"Polling never started."),this.#r.finished()||this.#r.reject(new Error("Polling stopped"))}result(){return u(this.#r,"Polling never started."),this.#r.valueOrThrow()}},S=class{#e;#r;#o;#t;constructor(e,r){this.#e=e,this.#r=r}async start(){let e=this.#t=c.create(),r=await this.#e();if(r){e.resolve(r);return}this.#o=setInterval(async()=>{let o=await this.#e();o&&(e.resolve(o),await this.stop())},this.#r)}async stop(){u(this.#t,"Polling never started."),this.#t.finished()||this.#t.reject(new Error("Polling stopped")),this.#o&&(clearInterval(this.#o),this.#o=void 0)}result(){return u(this.#t,"Polling never started."),this.#t.valueOrThrow()}};var _={};l(_,{PCombinator:()=>H,pQuerySelector:()=>fe,pQuerySelectorAll:()=>$});var a=class{static async*map(e,r){for await(let o of e)yield await r(o)}static async*flatMap(e,r){for await(let o of e)yield*r(o)}static async collect(e){let r=[];for await(let o of e)r.push(o);return r}static async first(e){for await(let r of e)return r}};var C={};l(C,{textQuerySelectorAll:()=>m});var re=new Set(["checkbox","image","radio"]),oe=t=>t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&!re.has(t.type),ne=new Set(["SCRIPT","STYLE"]),f=t=>!ne.has(t.nodeName)&&!document.head?.contains(t),I=new WeakMap,j=t=>{for(;t;)I.delete(t),t instanceof ShadowRoot?t=t.host:t=t.parentNode},W=new WeakSet,se=new MutationObserver(t=>{for(let e of t)j(e.target)}),d=t=>{let e=I.get(t);if(e||(e={full:"",immediate:[]},!f(t)))return e;let r="";if(oe(t))e.full=t.value,e.immediate.push(t.value),t.addEventListener("input",o=>{j(o.target)},{once:!0,capture:!0});else{for(let o=t.firstChild;o;o=o.nextSibling){if(o.nodeType===Node.TEXT_NODE){e.full+=o.nodeValue??"",r+=o.nodeValue??"";continue}r&&e.immediate.push(r),r="",o.nodeType===Node.ELEMENT_NODE&&(e.full+=d(o).full)}r&&e.immediate.push(r),t instanceof Element&&t.shadowRoot&&(e.full+=d(t.shadowRoot).full),W.has(t)||(se.observe(t,{childList:!0,characterData:!0,subtree:!0}),W.add(t))}return I.set(t,e),e};var m=function*(t,e){let r=!1;for(let o of t.childNodes)if(o instanceof Element&&f(o)){let n;o.shadowRoot?n=m(o.shadowRoot,e):n=m(o,e);for(let i of n)yield i,r=!0}r||t instanceof Element&&f(t)&&d(t).full.includes(e)&&(yield t)};var k={};l(k,{checkVisibility:()=>le,pierce:()=>T,pierceAll:()=>O});var ie=["hidden","collapse"],le=(t,e)=>{if(!t)return e===!1;if(e===void 0)return t;let r=t.nodeType===Node.TEXT_NODE?t.parentElement:t,o=window.getComputedStyle(r),n=o&&!ie.includes(o.visibility)&&!ae(r);return e===n?t:!1};function ae(t){let e=t.getBoundingClientRect();return e.width===0||e.height===0}var ce=t=>"shadowRoot"in t&&t.shadowRoot instanceof ShadowRoot;function*T(t){ce(t)?yield t.shadowRoot:yield t}function*O(t){t=T(t).next().value,yield t;let e=[document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT)];for(let r of e){let o;for(;o=r.nextNode();)o.shadowRoot&&(yield o.shadowRoot,e.push(document.createTreeWalker(o.shadowRoot,NodeFilter.SHOW_ELEMENT)))}}var Q={};l(Q,{xpathQuerySelectorAll:()=>q});var q=function*(t,e,r=-1){let n=(t.ownerDocument||document).evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE),i=[],s;for(;(s=n.iterateNext())&&(i.push(s),!(r&&i.length===r)););for(let h=0;h<i.length;h++)s=i[h],yield s,delete i[h]};var ue=/[-\\w\\P{ASCII}*]/u,H=(r=>(r.Descendent=">>>",r.Child=">>>>",r))(H||{}),V=t=>"querySelectorAll"in t,M=class{#e;#r=[];#o=void 0;elements;constructor(e,r){this.elements=[e],this.#e=r,this.#t()}async run(){if(typeof this.#o=="string")switch(this.#o.trimStart()){case":scope":this.#t();break}for(;this.#o!==void 0;this.#t()){let e=this.#o;typeof e=="string"?e[0]&&ue.test(e[0])?this.elements=a.flatMap(this.elements,async function*(r){V(r)&&(yield*r.querySelectorAll(e))}):this.elements=a.flatMap(this.elements,async function*(r){if(!r.parentElement){if(!V(r))return;yield*r.querySelectorAll(e);return}let o=0;for(let n of r.parentElement.children)if(++o,n===r)break;yield*r.parentElement.querySelectorAll(\`:scope>:nth-child(\${o})\${e}\`)}):this.elements=a.flatMap(this.elements,async function*(r){switch(e.name){case"text":yield*m(r,e.value);break;case"xpath":yield*q(r,e.value);break;case"aria":yield*b(r,e.value);break;default:let o=P.get(e.name);if(!o)throw new Error(\`Unknown selector type: \${e.name}\`);yield*o.querySelectorAll(r,e.value)}})}}#t(){if(this.#r.length!==0){this.#o=this.#r.shift();return}if(this.#e.length===0){this.#o=void 0;return}let e=this.#e.shift();switch(e){case">>>>":{this.elements=a.flatMap(this.elements,T),this.#t();break}case">>>":{this.elements=a.flatMap(this.elements,O),this.#t();break}default:this.#r=e,this.#t();break}}},D=class{#e=new WeakMap;calculate(e,r=[]){if(e===null)return r;e instanceof ShadowRoot&&(e=e.host);let o=this.#e.get(e);if(o)return[...o,...r];let n=0;for(let s=e.previousSibling;s;s=s.previousSibling)++n;let i=this.calculate(e.parentNode,[n]);return this.#e.set(e,i),[...i,...r]}},U=(t,e)=>{if(t.length+e.length===0)return 0;let[r=-1,...o]=t,[n=-1,...i]=e;return r===n?U(o,i):r<n?-1:1},de=async function*(t){let e=new Set;for await(let o of t)e.add(o);let r=new D;yield*[...e.values()].map(o=>[o,r.calculate(o)]).sort(([,o],[,n])=>U(o,n)).map(([o])=>o)},$=function(t,e){let r=JSON.parse(e);if(r.some(o=>{let n=0;return o.some(i=>(typeof i=="string"?++n:n=0,n>1))}))throw new Error("Multiple deep combinators found in sequence.");return de(a.flatMap(r,o=>{let n=new M(t,o);return n.run(),n.elements}))},fe=async function(t,e){for await(let r of $(t,e))return r;return null};var me=Object.freeze({...x,...A,...R,..._,...C,...k,...Q,...E,Deferred:c,createFunction:F,createTextContent:d,IntervalPoller:S,isSuitableNodeForTextMatching:f,MutationPoller:y,RAFPoller:w}),he=me;

      ${[...this.#A].map(e => `(${e})(module.exports.default);`).join("")}
      return module.exports.default;
    })()`;
    }
  }
  let iD = new iR();
  class i_ {
    #s = new Map();
    get(e) {
      let t = this.#s.get(e);
      if (t) {
        return t[1];
      } else {
        return undefined;
      }
    }
    register(e, t) {
      tk(!this.#s.has(e), `Cannot register over existing handler: ${e}`);
      tk(/^[a-zA-Z]+$/.test(e), "Custom query handler names may only contain [a-zA-Z]");
      tk(t.queryAll || t.queryOne, "At least one query method must be implemented.");
      let i = class extends iP {
        static querySelectorAll = iw((e, t, i) => i.customQuerySelectors.get(PLACEHOLDER("name")).querySelectorAll(e, t), {
          name: JSON.stringify(e)
        });
        static querySelector = iw((e, t, i) => i.customQuerySelectors.get(PLACEHOLDER("name")).querySelector(e, t), {
          name: JSON.stringify(e)
        });
      };
      let r = iw(e => {
        e.customQuerySelectors.register(PLACEHOLDER("name"), {
          queryAll: PLACEHOLDER("queryAll"),
          queryOne: PLACEHOLDER("queryOne")
        });
      }, {
        name: JSON.stringify(e),
        queryAll: t.queryAll ? ig(t.queryAll) : String(undefined),
        queryOne: t.queryOne ? ig(t.queryOne) : String(undefined)
      }).toString();
      this.#s.set(e, [r, i]);
      iD.append(r);
    }
    unregister(e) {
      let t = this.#s.get(e);
      if (!t) {
        throw Error(`Cannot unregister unknown handler: ${e}`);
      }
      iD.pop(t[0]);
      this.#s.delete(e);
    }
    names() {
      return [...this.#s.keys()];
    }
    clear() {
      for (let [e] of this.#s) {
        iD.pop(e);
      }
      this.#s.clear();
    }
  }
  let iN = new i_();
  class iK extends iP {
    static querySelector = (e, t, {
      pierceQuerySelector: i
    }) => i(e, t);
    static querySelectorAll = (e, t, {
      pierceQuerySelectorAll: i
    }) => i(e, t);
  }
  class iq extends iP {
    static querySelectorAll = (e, t, {
      pQuerySelectorAll: i
    }) => i(e, t);
    static querySelector = (e, t, {
      pQuerySelector: i
    }) => i(e, t);
  }
  var iH = {
    attribute: /\[\s*(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)\s*(?:(?<operator>\W?=)\s*(?<value>.+?)\s*(\s(?<caseSensitive>[iIsS]))?\s*)?\]/gu,
    id: /#(?<name>[-\w\P{ASCII}]+)/gu,
    class: /\.(?<name>[-\w\P{ASCII}]+)/gu,
    comma: /\s*,\s*/g,
    combinator: /\s*[\s>+~]\s*/g,
    "pseudo-element": /::(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,
    "pseudo-class": /:(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,
    universal: /(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?\*/gu,
    type: /(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)/gu
  };
  var iB = new Set(["combinator", "comma"]);
  var ij = e => {
    switch (e) {
      case "pseudo-element":
      case "pseudo-class":
        return RegExp(iH[e].source.replace("(?<argument>¶*)", "(?<argument>.*)"), "gu");
      default:
        return iH[e];
    }
  };
  var iW = /(['"])([^\\\n]+?)\1/g;
  var iz = /\\./g;
  function iU(e) {
    if (Array.isArray(e)) {
      return e.map(e => e.content).join("");
    }
    switch (e.type) {
      case "list":
        return e.list.map(iU).join(",");
      case "relative":
        return e.combinator + iU(e.right);
      case "complex":
        return iU(e.left) + e.combinator + iU(e.right);
      case "compound":
        return e.list.map(iU).join("");
      default:
        return e.content;
    }
  }
  iH.nesting = /&/g;
  iH.combinator = /\s*(>>>>?|[\s>+~])\s*/g;
  let iV = /\\[\s\S]/g;
  let iG = e => e.length <= 1 ? e : ((e[0] === "\"" || e[0] === "'") && e.endsWith(e[0]) && (e = e.slice(1, -1)), e.replace(iV, e => e[1]));
  function i$(e) {
    let t = true;
    let i = false;
    let r = false;
    let a = function (e, t = iH) {
      if ((e = e.trim()) === "") {
        return [];
      }
      let i = [];
      e = (e = e.replace(iz, (e, t) => {
        i.push({
          value: e,
          offset: t
        });
        return "".repeat(e.length);
      })).replace(iW, (e, t, r, a) => {
        i.push({
          value: e,
          offset: a
        });
        return `${t}${"".repeat(r.length)}${t}`;
      });
      {
        let t;
        let r = 0;
        while ((t = e.indexOf("(", r)) > -1) {
          let a = function (e, t) {
            let i = 0;
            let r = "";
            for (; t < e.length; t++) {
              let a = e[t];
              switch (a) {
                case "(":
                  ++i;
                  break;
                case ")":
                  --i;
              }
              r += a;
              if (i === 0) {
                break;
              }
            }
            return r;
          }(e, t);
          i.push({
            value: a,
            offset: t
          });
          e = `${e.substring(0, t)}(${"¶".repeat(a.length - 2)})${e.substring(t + a.length)}`;
          r = t + a.length;
        }
      }
      let r = function (e, t = iH) {
        if (!e) {
          return [];
        }
        let i = [e];
        for (let [e, r] of Object.entries(t)) {
          for (let t = 0; t < i.length; t++) {
            let a = i[t];
            if (typeof a != "string") {
              continue;
            }
            r.lastIndex = 0;
            let n = r.exec(a);
            if (!n) {
              continue;
            }
            let s = n.index - 1;
            let o = [];
            let l = n[0];
            let c = a.slice(0, s + 1);
            if (c) {
              o.push(c);
            }
            o.push({
              ...n.groups,
              type: e,
              content: l
            });
            let d = a.slice(s + l.length + 1);
            if (d) {
              o.push(d);
            }
            i.splice(t, 1, ...o);
          }
        }
        let r = 0;
        for (let e of i) {
          switch (typeof e) {
            case "string":
              throw Error(`Unexpected sequence ${e} found at index ${r}`);
            case "object":
              r += e.content.length;
              e.pos = [r - e.content.length, r];
              if (iB.has(e.type)) {
                e.content = e.content.trim() || " ";
              }
          }
        }
        return i;
      }(e, t);
      let a = new Set();
      for (let e of i.reverse()) {
        for (let t of r) {
          let {
            offset: i,
            value: r
          } = e;
          if (!(t.pos[0] <= i) || !(i + r.length <= t.pos[1])) {
            continue;
          }
          let {
            content: n
          } = t;
          let s = i - t.pos[0];
          t.content = n.slice(0, s) + r + n.slice(s + r.length);
          if (t.content !== n) {
            a.add(t);
          }
        }
      }
      for (let e of a) {
        let t = ij(e.type);
        if (!t) {
          throw Error(`Unknown token type: ${e.type}`);
        }
        t.lastIndex = 0;
        let i = t.exec(e.content);
        if (!i) {
          throw Error(`Unable to parse content for ${e.type}: ${e.content}`);
        }
        Object.assign(e, i.groups);
      }
      return r;
    }(e);
    if (a.length === 0) {
      return [[], t, r, false];
    }
    let n = [];
    let s = [n];
    let o = [s];
    let l = [];
    for (let e of a) {
      switch (e.type) {
        case "combinator":
          switch (e.content) {
            case ">>>":
              t = false;
              if (l.length) {
                n.push(iU(l));
                l.splice(0);
              }
              n = [];
              s.push(">>>");
              s.push(n);
              continue;
            case ">>>>":
              t = false;
              if (l.length) {
                n.push(iU(l));
                l.splice(0);
              }
              n = [];
              s.push(">>>>");
              s.push(n);
              continue;
          }
          break;
        case "pseudo-element":
          if (!e.name.startsWith("-p-")) {
            break;
          }
          t = false;
          if (l.length) {
            n.push(iU(l));
            l.splice(0);
          }
          let a = e.name.slice(3);
          if (a === "aria") {
            i = true;
          }
          n.push({
            name: a,
            value: iG(e.argument ?? "")
          });
          continue;
        case "pseudo-class":
          r = true;
          break;
        case "comma":
          if (l.length) {
            n.push(iU(l));
            l.splice(0);
          }
          s = [n = []];
          o.push(s);
          continue;
      }
      l.push(e);
    }
    if (l.length) {
      n.push(iU(l));
    }
    return [o, t, r, i];
  }
  class iX extends iP {
    static querySelectorAll = (e, t, {
      textQuerySelectorAll: i
    }) => i(e, t);
  }
  class iQ extends iP {
    static querySelectorAll = (e, t, {
      xpathQuerySelectorAll: i
    }) => i(e, t);
    static querySelector = (e, t, {
      xpathQuerySelectorAll: i
    }) => {
      for (let r of i(e, t, 1)) {
        return r;
      }
      return null;
    };
  }
  let iJ = {
    aria: iL,
    pierce: iK,
    xpath: iQ,
    text: iX
  };
  let iY = ["=", "/"];
  function iZ(e) {
    for (let t of [iN.names().map(e => [e, iN.get(e)]), Object.entries(iJ)]) {
      for (let [i, r] of t) {
        for (let t of iY) {
          let a = `${i}${t}`;
          if (e.startsWith(a)) {
            return {
              updatedSelector: e = e.slice(a.length),
              polling: i === "aria" ? "raf" : "mutation",
              QueryHandler: r
            };
          }
        }
      }
    }
    try {
      let [t, i, r, a] = i$(e);
      if (i) {
        return {
          updatedSelector: e,
          polling: r ? "raf" : "mutation",
          QueryHandler: iO
        };
      }
      return {
        updatedSelector: JSON.stringify(t),
        polling: a ? "raf" : "mutation",
        QueryHandler: iq
      };
    } catch {
      return {
        updatedSelector: e,
        polling: "mutation",
        QueryHandler: iO
      };
    }
  }
  function i0(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  s = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function i1(e) {
    function t(t) {
      e.error = e.hasError ? new s(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  let i5 = new WeakSet();
  function i3(e, t) {
    let i = false;
    if (e.prototype[tu]) {
      let t = e.prototype[tu];
      e.prototype[tu] = function () {
        if (i5.has(this)) {
          i5.delete(this);
          return;
        }
        return t.call(this);
      };
      i = true;
    }
    if (e.prototype[th]) {
      let t = e.prototype[th];
      e.prototype[th] = function () {
        if (i5.has(this)) {
          i5.delete(this);
          return;
        }
        return t.call(this);
      };
      i = true;
    }
    if (i) {
      e.prototype.move = function () {
        i5.add(this);
        return this;
      };
    }
    return e;
  }
  function i4(e = e => `Attempted to use disposed ${e.constructor.name}.`) {
    return (t, i) => function (...i) {
      if (this.disposed) {
        throw Error(e(this));
      }
      return t.call(this, ...i);
    };
  }
  function i6(e, t) {
    let i = new WeakMap();
    let r = -1;
    return function (...t) {
      if (r === -1) {
        r = t.length;
      }
      if (r !== t.length) {
        throw Error("Memoized method was called with the wrong number of arguments");
      }
      let a = false;
      let n = i;
      for (let e of t) {
        if (!n.has(e)) {
          a = true;
          n.set(e, new WeakMap());
        }
        n = n.get(e);
      }
      if (a) {
        return e.call(this, ...t);
      }
    };
  }
  new WeakMap();
  function i2(e, t, i) {
    var r = arguments.length > 2;
    var a = 0;
    for (; a < t.length; a++) {
      i = r ? t[a].call(e, i) : t[a].call(e);
    }
    if (r) {
      return i;
    } else {
      return undefined;
    }
  }
  function i7(e, t, i, r, a, n) {
    function s(e) {
      if (e !== undefined && typeof e != "function") {
        throw TypeError("Function expected");
      }
      return e;
    }
    var o;
    var l = r.kind;
    var c = l === "getter" ? "get" : l === "setter" ? "set" : "value";
    var d = !t && e ? r.static ? e : e.prototype : null;
    var u = t || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {});
    var h = false;
    var p = i.length - 1;
    for (; p >= 0; p--) {
      var f = {};
      for (var m in r) {
        f[m] = m === "access" ? {} : r[m];
      }
      for (var m in r.access) {
        f.access[m] = r.access[m];
      }
      f.addInitializer = function (e) {
        if (h) {
          throw TypeError("Cannot add initializers after decoration has completed");
        }
        n.push(s(e || null));
      };
      var y = i[p](l === "accessor" ? {
        get: u.get,
        set: u.set
      } : u[c], f);
      if (l === "accessor") {
        if (y === undefined) {
          continue;
        }
        if (y === null || typeof y != "object") {
          throw TypeError("Object expected");
        }
        if (o = s(y.get)) {
          u.get = o;
        }
        if (o = s(y.set)) {
          u.set = o;
        }
        if (o = s(y.init)) {
          a.unshift(o);
        }
      } else if (o = s(y)) {
        if (l === "field") {
          a.unshift(o);
        } else {
          u[c] = o;
        }
      }
    }
    if (d) {
      Object.defineProperty(d, r.name, u);
    }
    h = true;
  }
  function i8(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  o = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function i9(e) {
    function t(t) {
      e.error = e.hasError ? new o(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  let re = (() => {
    let e;
    let t;
    let i;
    let r;
    let a = [i3];
    let n = [];
    let s = [];
    (class {
      static {
        t = this;
      }
      static {
        let o = typeof Symbol == "function" && Symbol.metadata ? Object.create(null) : undefined;
        i7(this, null, i, {
          kind: "method",
          name: "getProperty",
          static: false,
          private: false,
          access: {
            has: e => "getProperty" in e,
            get: e => e.getProperty
          },
          metadata: o
        }, null, s);
        i7(this, null, r, {
          kind: "method",
          name: "getProperties",
          static: false,
          private: false,
          access: {
            has: e => "getProperties" in e,
            get: e => e.getProperties
          },
          metadata: o
        }, null, s);
        i7(null, e = {
          value: t
        }, a, {
          kind: "class",
          name: t.name,
          metadata: o
        }, null, n);
        t = e.value;
        if (o) {
          Object.defineProperty(t, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: o
          });
        }
        i2(t, n);
      }
      constructor() {
        i2(this, s);
      }
      async evaluate(e, ...t) {
        e = tW(this.evaluate.name, e);
        return await this.realm.evaluate(e, this, ...t);
      }
      async evaluateHandle(e, ...t) {
        e = tW(this.evaluateHandle.name, e);
        return await this.realm.evaluateHandle(e, this, ...t);
      }
      async getProperty(e) {
        return await this.evaluateHandle((e, t) => e[t], e);
      }
      async getProperties() {
        let e = await this.evaluate(e => {
          let t = [];
          let i = Object.getOwnPropertyDescriptors(e);
          for (let e in i) {
            if (i[e]?.enumerable) {
              t.push(e);
            }
          }
          return t;
        });
        let t = new Map();
        let i = await Promise.all(e.map(e => this.getProperty(e)));
        for (let [r, a] of Object.entries(e)) {
          let e = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            let n = i8(e, i[r], false);
            if (n) {
              t.set(a, n.move());
            }
          } catch (t) {
            e.error = t;
            e.hasError = true;
          } finally {
            i9(e);
          }
        }
        return t;
      }
      [(i = [i4()], r = [i4()], tu)]() {
        this.dispose().catch(tq);
      }
      [th]() {
        return this.dispose();
      }
    });
    return t;
  })();
  function rt(e, t, i) {
    var r = arguments.length > 2;
    var a = 0;
    for (; a < t.length; a++) {
      i = r ? t[a].call(e, i) : t[a].call(e);
    }
    if (r) {
      return i;
    } else {
      return undefined;
    }
  }
  function ri(e, t, i, r, a, n) {
    function s(e) {
      if (e !== undefined && typeof e != "function") {
        throw TypeError("Function expected");
      }
      return e;
    }
    var o;
    var l = r.kind;
    var c = l === "getter" ? "get" : l === "setter" ? "set" : "value";
    var d = !t && e ? r.static ? e : e.prototype : null;
    var u = t || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {});
    var h = false;
    var p = i.length - 1;
    for (; p >= 0; p--) {
      var f = {};
      for (var m in r) {
        f[m] = m === "access" ? {} : r[m];
      }
      for (var m in r.access) {
        f.access[m] = r.access[m];
      }
      f.addInitializer = function (e) {
        if (h) {
          throw TypeError("Cannot add initializers after decoration has completed");
        }
        n.push(s(e || null));
      };
      var y = i[p](l === "accessor" ? {
        get: u.get,
        set: u.set
      } : u[c], f);
      if (l === "accessor") {
        if (y === undefined) {
          continue;
        }
        if (y === null || typeof y != "object") {
          throw TypeError("Object expected");
        }
        if (o = s(y.get)) {
          u.get = o;
        }
        if (o = s(y.set)) {
          u.set = o;
        }
        if (o = s(y.init)) {
          a.unshift(o);
        }
      } else if (o = s(y)) {
        if (l === "field") {
          a.unshift(o);
        } else {
          u[c] = o;
        }
      }
    }
    if (d) {
      Object.defineProperty(d, r.name, u);
    }
    h = true;
  }
  function rr(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  l = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function ra(e) {
    function t(t) {
      e.error = e.hasError ? new l(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  function rn(e, t) {
    return async function (...t) {
      let i;
      if (this.realm === this.frame.isolatedRealm()) {
        return await e.call(this, ...t);
      }
      if (this.isolatedHandle) {
        i = this.isolatedHandle;
      } else {
        this.isolatedHandle = i = await this.frame.isolatedRealm().adoptHandle(this);
      }
      let r = await e.call(i, ...t);
      if (r === i) {
        return this;
      } else if (r instanceof re) {
        return await this.realm.transferHandle(r);
      } else {
        if (Array.isArray(r)) {
          await Promise.all(r.map(async (e, t, i) => {
            if (e instanceof re) {
              i[t] = await this.realm.transferHandle(e);
            }
          }));
        }
        if (r instanceof Map) {
          await Promise.all([...r.entries()].map(async ([e, t]) => {
            if (t instanceof re) {
              r.set(e, await this.realm.transferHandle(t));
            }
          }));
        }
        return r;
      }
    };
  }
  let rs = (() => {
    let e;
    let t;
    let i;
    let r;
    let a;
    let n;
    let s;
    let o;
    let l;
    let c;
    let d;
    let u;
    let h;
    let p;
    let f;
    let m;
    let y;
    let g;
    let w;
    let v;
    let b;
    let k;
    let S;
    let T;
    let C;
    let M;
    let E;
    let P;
    let I;
    let x;
    let F;
    let A;
    let L = re;
    let O = [];
    return class R extends L {
      static {
        var R;
        var D;
        let _ = typeof Symbol == "function" && Symbol.metadata ? Object.create(L[Symbol.metadata] ?? null) : undefined;
        e = [i4(), rn];
        t = [i4(), rn];
        i = [i4(), rn];
        r = [i4(), rn];
        a = [i4()];
        n = [rn];
        o = [i4(), rn];
        l = [i4(), rn];
        c = [i4(), rn];
        d = [i4(), rn];
        u = [i4(), rn];
        h = [i4(), rn];
        p = [i4(), rn];
        f = [i4(), rn];
        m = [i4(), rn];
        y = [i4(), rn];
        g = [i4(), rn];
        w = [i4(), rn];
        v = [i4(), rn];
        b = [i4(), rn];
        k = [i4(), rn];
        S = [i4(), rn];
        T = [i4(), rn];
        C = [i4(), rn];
        M = [i4(), rn];
        E = [i4(), rn];
        P = [i4(), rn];
        I = [i4(), rn];
        x = [i4(), rn];
        F = [i4(), rn];
        A = [i4(), rn];
        ri(this, null, e, {
          kind: "method",
          name: "getProperty",
          static: false,
          private: false,
          access: {
            has: e => "getProperty" in e,
            get: e => e.getProperty
          },
          metadata: _
        }, null, O);
        ri(this, null, t, {
          kind: "method",
          name: "getProperties",
          static: false,
          private: false,
          access: {
            has: e => "getProperties" in e,
            get: e => e.getProperties
          },
          metadata: _
        }, null, O);
        ri(this, null, i, {
          kind: "method",
          name: "jsonValue",
          static: false,
          private: false,
          access: {
            has: e => "jsonValue" in e,
            get: e => e.jsonValue
          },
          metadata: _
        }, null, O);
        ri(this, null, r, {
          kind: "method",
          name: "$",
          static: false,
          private: false,
          access: {
            has: e => "$" in e,
            get: e => e.$
          },
          metadata: _
        }, null, O);
        ri(this, null, a, {
          kind: "method",
          name: "$$",
          static: false,
          private: false,
          access: {
            has: e => "$$" in e,
            get: e => e.$$
          },
          metadata: _
        }, null, O);
        ri(this, s = {
          value: (R = async function (e) {
            return await this.#O(e);
          }, typeof (D = "#$$") == "symbol" && (D = D.description ? `[${D.description}]` : ""), Object.defineProperty(R, "name", {
            configurable: true,
            value: D
          }))
        }, n, {
          kind: "method",
          name: "#$$",
          static: false,
          private: true,
          access: {
            has: e => #R in e,
            get: e => e.#R
          },
          metadata: _
        }, null, O);
        ri(this, null, o, {
          kind: "method",
          name: "waitForSelector",
          static: false,
          private: false,
          access: {
            has: e => "waitForSelector" in e,
            get: e => e.waitForSelector
          },
          metadata: _
        }, null, O);
        ri(this, null, l, {
          kind: "method",
          name: "isVisible",
          static: false,
          private: false,
          access: {
            has: e => "isVisible" in e,
            get: e => e.isVisible
          },
          metadata: _
        }, null, O);
        ri(this, null, c, {
          kind: "method",
          name: "isHidden",
          static: false,
          private: false,
          access: {
            has: e => "isHidden" in e,
            get: e => e.isHidden
          },
          metadata: _
        }, null, O);
        ri(this, null, d, {
          kind: "method",
          name: "toElement",
          static: false,
          private: false,
          access: {
            has: e => "toElement" in e,
            get: e => e.toElement
          },
          metadata: _
        }, null, O);
        ri(this, null, u, {
          kind: "method",
          name: "clickablePoint",
          static: false,
          private: false,
          access: {
            has: e => "clickablePoint" in e,
            get: e => e.clickablePoint
          },
          metadata: _
        }, null, O);
        ri(this, null, h, {
          kind: "method",
          name: "hover",
          static: false,
          private: false,
          access: {
            has: e => "hover" in e,
            get: e => e.hover
          },
          metadata: _
        }, null, O);
        ri(this, null, p, {
          kind: "method",
          name: "click",
          static: false,
          private: false,
          access: {
            has: e => "click" in e,
            get: e => e.click
          },
          metadata: _
        }, null, O);
        ri(this, null, f, {
          kind: "method",
          name: "drag",
          static: false,
          private: false,
          access: {
            has: e => "drag" in e,
            get: e => e.drag
          },
          metadata: _
        }, null, O);
        ri(this, null, m, {
          kind: "method",
          name: "dragEnter",
          static: false,
          private: false,
          access: {
            has: e => "dragEnter" in e,
            get: e => e.dragEnter
          },
          metadata: _
        }, null, O);
        ri(this, null, y, {
          kind: "method",
          name: "dragOver",
          static: false,
          private: false,
          access: {
            has: e => "dragOver" in e,
            get: e => e.dragOver
          },
          metadata: _
        }, null, O);
        ri(this, null, g, {
          kind: "method",
          name: "drop",
          static: false,
          private: false,
          access: {
            has: e => "drop" in e,
            get: e => e.drop
          },
          metadata: _
        }, null, O);
        ri(this, null, w, {
          kind: "method",
          name: "dragAndDrop",
          static: false,
          private: false,
          access: {
            has: e => "dragAndDrop" in e,
            get: e => e.dragAndDrop
          },
          metadata: _
        }, null, O);
        ri(this, null, v, {
          kind: "method",
          name: "select",
          static: false,
          private: false,
          access: {
            has: e => "select" in e,
            get: e => e.select
          },
          metadata: _
        }, null, O);
        ri(this, null, b, {
          kind: "method",
          name: "tap",
          static: false,
          private: false,
          access: {
            has: e => "tap" in e,
            get: e => e.tap
          },
          metadata: _
        }, null, O);
        ri(this, null, k, {
          kind: "method",
          name: "touchStart",
          static: false,
          private: false,
          access: {
            has: e => "touchStart" in e,
            get: e => e.touchStart
          },
          metadata: _
        }, null, O);
        ri(this, null, S, {
          kind: "method",
          name: "touchMove",
          static: false,
          private: false,
          access: {
            has: e => "touchMove" in e,
            get: e => e.touchMove
          },
          metadata: _
        }, null, O);
        ri(this, null, T, {
          kind: "method",
          name: "touchEnd",
          static: false,
          private: false,
          access: {
            has: e => "touchEnd" in e,
            get: e => e.touchEnd
          },
          metadata: _
        }, null, O);
        ri(this, null, C, {
          kind: "method",
          name: "focus",
          static: false,
          private: false,
          access: {
            has: e => "focus" in e,
            get: e => e.focus
          },
          metadata: _
        }, null, O);
        ri(this, null, M, {
          kind: "method",
          name: "type",
          static: false,
          private: false,
          access: {
            has: e => "type" in e,
            get: e => e.type
          },
          metadata: _
        }, null, O);
        ri(this, null, E, {
          kind: "method",
          name: "press",
          static: false,
          private: false,
          access: {
            has: e => "press" in e,
            get: e => e.press
          },
          metadata: _
        }, null, O);
        ri(this, null, P, {
          kind: "method",
          name: "boundingBox",
          static: false,
          private: false,
          access: {
            has: e => "boundingBox" in e,
            get: e => e.boundingBox
          },
          metadata: _
        }, null, O);
        ri(this, null, I, {
          kind: "method",
          name: "boxModel",
          static: false,
          private: false,
          access: {
            has: e => "boxModel" in e,
            get: e => e.boxModel
          },
          metadata: _
        }, null, O);
        ri(this, null, x, {
          kind: "method",
          name: "screenshot",
          static: false,
          private: false,
          access: {
            has: e => "screenshot" in e,
            get: e => e.screenshot
          },
          metadata: _
        }, null, O);
        ri(this, null, F, {
          kind: "method",
          name: "isIntersectingViewport",
          static: false,
          private: false,
          access: {
            has: e => "isIntersectingViewport" in e,
            get: e => e.isIntersectingViewport
          },
          metadata: _
        }, null, O);
        ri(this, null, A, {
          kind: "method",
          name: "scrollIntoView",
          static: false,
          private: false,
          access: {
            has: e => "scrollIntoView" in e,
            get: e => e.scrollIntoView
          },
          metadata: _
        }, null, O);
        if (_) {
          Object.defineProperty(this, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _
          });
        }
      }
      isolatedHandle = rt(this, O);
      handle;
      constructor(e) {
        super();
        this.handle = e;
        this[ic] = true;
      }
      get id() {
        return this.handle.id;
      }
      get disposed() {
        return this.handle.disposed;
      }
      async getProperty(e) {
        return await this.handle.getProperty(e);
      }
      async getProperties() {
        return await this.handle.getProperties();
      }
      async evaluate(e, ...t) {
        e = tW(this.evaluate.name, e);
        return await this.handle.evaluate(e, ...t);
      }
      async evaluateHandle(e, ...t) {
        e = tW(this.evaluateHandle.name, e);
        return await this.handle.evaluateHandle(e, ...t);
      }
      async jsonValue() {
        return await this.handle.jsonValue();
      }
      toString() {
        return this.handle.toString();
      }
      remoteObject() {
        return this.handle.remoteObject();
      }
      async dispose() {
        await Promise.all([this.handle.dispose(), this.isolatedHandle?.dispose()]);
      }
      asElement() {
        return this;
      }
      async $(e) {
        let {
          updatedSelector: t,
          QueryHandler: i
        } = iZ(e);
        return await i.queryOne(this, t);
      }
      async $$(e, t) {
        if (t?.isolate === false) {
          return await this.#O(e);
        } else {
          return await this.#R(e);
        }
      }
      get #R() {
        return s.value;
      }
      async #O(e) {
        let {
          updatedSelector: t,
          QueryHandler: i
        } = iZ(e);
        return await iI.collect(i.queryAll(this, t));
      }
      async $eval(e, t, ...i) {
        let r = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          t = tW(this.$eval.name, t);
          let a = rr(r, await this.$(e), false);
          if (!a) {
            throw Error(`Error: failed to find element matching selector "${e}"`);
          }
          return await a.evaluate(t, ...i);
        } catch (e) {
          r.error = e;
          r.hasError = true;
        } finally {
          ra(r);
        }
      }
      async $$eval(e, t, ...i) {
        let r = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          t = tW(this.$$eval.name, t);
          let a = await this.$$(e);
          let n = rr(r, await this.evaluateHandle((e, ...t) => t, ...a), false);
          let [s] = await Promise.all([n.evaluate(t, ...i), ...a.map(e => e.dispose())]);
          return s;
        } catch (e) {
          r.error = e;
          r.hasError = true;
        } finally {
          ra(r);
        }
      }
      async waitForSelector(e, t = {}) {
        let {
          updatedSelector: i,
          QueryHandler: r,
          polling: a
        } = iZ(e);
        return await r.waitFor(this, i, {
          polling: a,
          ...t
        });
      }
      async #D(e) {
        return await this.evaluate(async (e, t, i) => !!t.checkVisibility(e, i), iC.create(e => e.puppeteerUtil), e);
      }
      async isVisible() {
        return await this.#D(true);
      }
      async isHidden() {
        return await this.#D(false);
      }
      async toElement(e) {
        if (!(await this.evaluate((e, t) => e.nodeName === t.toUpperCase(), e))) {
          throw Error(`Element is not a(n) \`${e}\` element`);
        }
        return this;
      }
      async clickablePoint(e) {
        let t = await this.#_();
        if (!t) {
          throw Error("Node is either not clickable or not an Element");
        }
        if (e !== undefined) {
          return {
            x: t.x + e.x,
            y: t.y + e.y
          };
        } else {
          return {
            x: t.x + t.width / 2,
            y: t.y + t.height / 2
          };
        }
      }
      async hover() {
        await this.scrollIntoViewIfNeeded();
        let {
          x: e,
          y: t
        } = await this.clickablePoint();
        await this.frame.page().mouse.move(e, t);
      }
      async click(e = {}) {
        await this.scrollIntoViewIfNeeded();
        let {
          x: t,
          y: i
        } = await this.clickablePoint(e.offset);
        await this.frame.page().mouse.click(t, i, e);
      }
      async drag(e) {
        await this.scrollIntoViewIfNeeded();
        let t = this.frame.page();
        if (t.isDragInterceptionEnabled()) {
          let i = await this.clickablePoint();
          if (e instanceof R) {
            e = await e.clickablePoint();
          }
          return await t.mouse.drag(i, e);
        }
        try {
          if (!t._isDragging) {
            t._isDragging = true;
            await this.hover();
            await t.mouse.down();
          }
          if (e instanceof R) {
            await e.hover();
          } else {
            await t.mouse.move(e.x, e.y);
          }
        } catch (e) {
          t._isDragging = false;
          throw e;
        }
      }
      async dragEnter(e = {
        items: [],
        dragOperationsMask: 1
      }) {
        let t = this.frame.page();
        await this.scrollIntoViewIfNeeded();
        let i = await this.clickablePoint();
        await t.mouse.dragEnter(i, e);
      }
      async dragOver(e = {
        items: [],
        dragOperationsMask: 1
      }) {
        let t = this.frame.page();
        await this.scrollIntoViewIfNeeded();
        let i = await this.clickablePoint();
        await t.mouse.dragOver(i, e);
      }
      async drop(e = {
        items: [],
        dragOperationsMask: 1
      }) {
        let t = this.frame.page();
        if ("items" in e) {
          await this.scrollIntoViewIfNeeded();
          let i = await this.clickablePoint();
          await t.mouse.drop(i, e);
        } else {
          await e.drag(this);
          t._isDragging = false;
          await t.mouse.up();
        }
      }
      async dragAndDrop(e, t) {
        let i = this.frame.page();
        tk(i.isDragInterceptionEnabled(), "Drag Interception is not enabled!");
        await this.scrollIntoViewIfNeeded();
        let r = await this.clickablePoint();
        let a = await e.clickablePoint();
        await i.mouse.dragAndDrop(r, a, t);
      }
      async select(...e) {
        for (let t of e) {
          tk(tU(t), "Values must be strings. Found value \"" + t + "\" of type \"" + typeof t + "\"");
        }
        return await this.evaluate((e, t) => {
          let i = new Set(t);
          if (!(e instanceof HTMLSelectElement)) {
            throw Error("Element is not a <select> element.");
          }
          let r = new Set();
          if (e.multiple) {
            for (let t of e.options) {
              t.selected = i.has(t.value);
              if (t.selected) {
                r.add(t.value);
              }
            }
          } else {
            for (let t of e.options) {
              t.selected = false;
            }
            for (let t of e.options) {
              if (i.has(t.value)) {
                t.selected = true;
                r.add(t.value);
                break;
              }
            }
          }
          e.dispatchEvent(new Event("input", {
            bubbles: true
          }));
          e.dispatchEvent(new Event("change", {
            bubbles: true
          }));
          return [...r.values()];
        }, e);
      }
      async tap() {
        await this.scrollIntoViewIfNeeded();
        let {
          x: e,
          y: t
        } = await this.clickablePoint();
        await this.frame.page().touchscreen.tap(e, t);
      }
      async touchStart() {
        await this.scrollIntoViewIfNeeded();
        let {
          x: e,
          y: t
        } = await this.clickablePoint();
        return await this.frame.page().touchscreen.touchStart(e, t);
      }
      async touchMove(e) {
        await this.scrollIntoViewIfNeeded();
        let {
          x: t,
          y: i
        } = await this.clickablePoint();
        if (e) {
          return await e.move(t, i);
        }
        await this.frame.page().touchscreen.touchMove(t, i);
      }
      async touchEnd() {
        await this.scrollIntoViewIfNeeded();
        await this.frame.page().touchscreen.touchEnd();
      }
      async focus() {
        await this.evaluate(e => {
          if (!(e instanceof HTMLElement)) {
            throw Error("Cannot focus non-HTMLElement");
          }
          return e.focus();
        });
      }
      async type(e, t) {
        await this.focus();
        await this.frame.page().keyboard.type(e, t);
      }
      async press(e, t) {
        await this.focus();
        await this.frame.page().keyboard.press(e, t);
      }
      async #_() {
        let e;
        let t = await this.evaluate(e => e instanceof Element ? [...e.getClientRects()].map(e => ({
          x: e.x,
          y: e.y,
          width: e.width,
          height: e.height
        })) : null);
        if (!t?.length) {
          return null;
        }
        await this.#N(t);
        let i = this.frame;
        while (e = i?.parentFrame()) {
          let r = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            let a = rr(r, await i.frameElement(), false);
            if (!a) {
              throw Error("Unsupported frame type");
            }
            let n = await a.evaluate(e => {
              if (e.getClientRects().length === 0) {
                return null;
              }
              let t = e.getBoundingClientRect();
              let i = window.getComputedStyle(e);
              return {
                left: t.left + parseInt(i.paddingLeft, 10) + parseInt(i.borderLeftWidth, 10),
                top: t.top + parseInt(i.paddingTop, 10) + parseInt(i.borderTopWidth, 10)
              };
            });
            if (!n) {
              return null;
            }
            for (let e of t) {
              e.x += n.left;
              e.y += n.top;
            }
            await a.#N(t);
            i = e;
          } catch (e) {
            r.error = e;
            r.hasError = true;
          } finally {
            ra(r);
          }
        }
        let r = t.find(e => e.width >= 1 && e.height >= 1);
        if (r) {
          return {
            x: r.x,
            y: r.y,
            height: r.height,
            width: r.width
          };
        } else {
          return null;
        }
      }
      async #N(e) {
        let {
          documentWidth: t,
          documentHeight: i
        } = await this.frame.isolatedRealm().evaluate(() => ({
          documentWidth: document.documentElement.clientWidth,
          documentHeight: document.documentElement.clientHeight
        }));
        for (let s of e) {
          var r;
          var a;
          var n;
          r = s;
          a = t;
          n = i;
          r.width = Math.max(r.x >= 0 ? Math.min(a - r.x, r.width) : Math.min(a, r.width + r.x), 0);
          r.height = Math.max(r.y >= 0 ? Math.min(n - r.y, r.height) : Math.min(n, r.height + r.y), 0);
        }
      }
      async boundingBox() {
        let e = await this.evaluate(e => {
          if (!(e instanceof Element) || e.getClientRects().length === 0) {
            return null;
          }
          let t = e.getBoundingClientRect();
          return {
            x: t.x,
            y: t.y,
            width: t.width,
            height: t.height
          };
        });
        if (!e) {
          return null;
        }
        let t = await this.#K();
        if (t) {
          return {
            x: e.x + t.x,
            y: e.y + t.y,
            height: e.height,
            width: e.width
          };
        } else {
          return null;
        }
      }
      async boxModel() {
        let e = await this.evaluate(e => {
          if (!(e instanceof Element) || e.getClientRects().length === 0) {
            return null;
          }
          let t = e.getBoundingClientRect();
          let i = window.getComputedStyle(e);
          let r = {
            padding: {
              left: parseInt(i.paddingLeft, 10),
              top: parseInt(i.paddingTop, 10),
              right: parseInt(i.paddingRight, 10),
              bottom: parseInt(i.paddingBottom, 10)
            },
            margin: {
              left: -parseInt(i.marginLeft, 10),
              top: -parseInt(i.marginTop, 10),
              right: -parseInt(i.marginRight, 10),
              bottom: -parseInt(i.marginBottom, 10)
            },
            border: {
              left: parseInt(i.borderLeft, 10),
              top: parseInt(i.borderTop, 10),
              right: parseInt(i.borderRight, 10),
              bottom: parseInt(i.borderBottom, 10)
            }
          };
          let a = [{
            x: t.left,
            y: t.top
          }, {
            x: t.left + t.width,
            y: t.top
          }, {
            x: t.left + t.width,
            y: t.top + t.height
          }, {
            x: t.left,
            y: t.top + t.height
          }];
          let n = l(a, r.border);
          let s = l(n, r.padding);
          let o = l(a, r.margin);
          return {
            content: s,
            padding: n,
            border: a,
            margin: o,
            width: t.width,
            height: t.height
          };
          function l(e, t) {
            return [{
              x: e[0].x + t.left,
              y: e[0].y + t.top
            }, {
              x: e[1].x - t.right,
              y: e[1].y + t.top
            }, {
              x: e[2].x - t.right,
              y: e[2].y - t.bottom
            }, {
              x: e[3].x + t.left,
              y: e[3].y - t.bottom
            }];
          }
        });
        if (!e) {
          return null;
        }
        let t = await this.#K();
        if (!t) {
          return null;
        }
        for (let i of ["content", "padding", "border", "margin"]) {
          for (let r of e[i]) {
            r.x += t.x;
            r.y += t.y;
          }
        }
        return e;
      }
      async #K() {
        let e;
        let t = {
          x: 0,
          y: 0
        };
        let i = this.frame;
        while (e = i?.parentFrame()) {
          let r = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            let a = rr(r, await i.frameElement(), false);
            if (!a) {
              throw Error("Unsupported frame type");
            }
            let n = await a.evaluate(e => {
              if (e.getClientRects().length === 0) {
                return null;
              }
              let t = e.getBoundingClientRect();
              let i = window.getComputedStyle(e);
              return {
                left: t.left + parseInt(i.paddingLeft, 10) + parseInt(i.borderLeftWidth, 10),
                top: t.top + parseInt(i.paddingTop, 10) + parseInt(i.borderTopWidth, 10)
              };
            });
            if (!n) {
              return null;
            }
            t.x += n.left;
            t.y += n.top;
            i = e;
          } catch (e) {
            r.error = e;
            r.hasError = true;
          } finally {
            ra(r);
          }
        }
        return t;
      }
      async screenshot(e = {}) {
        let {
          scrollIntoView: t = true,
          clip: i
        } = e;
        let r = this.frame.page();
        if (t) {
          await this.scrollIntoViewIfNeeded();
        }
        let a = await this.#q();
        let [n, s] = await this.evaluate(() => {
          if (!window.visualViewport) {
            throw Error("window.visualViewport is not supported.");
          }
          return [window.visualViewport.pageLeft, window.visualViewport.pageTop];
        });
        a.x += n;
        a.y += s;
        if (i) {
          a.x += i.x;
          a.y += i.y;
          a.height = i.height;
          a.width = i.width;
        }
        return await r.screenshot({
          ...e,
          clip: a
        });
      }
      async #q() {
        let e = await this.boundingBox();
        tk(e, "Node is either not visible or not an HTMLElement");
        tk(e.width !== 0, "Node has 0 width.");
        tk(e.height !== 0, "Node has 0 height.");
        return e;
      }
      async assertConnectedElement() {
        let e = await this.evaluate(async e => e.isConnected ? e.nodeType !== Node.ELEMENT_NODE ? "Node is not of type HTMLElement" : undefined : "Node is detached from document");
        if (e) {
          throw Error(e);
        }
      }
      async scrollIntoViewIfNeeded() {
        if (!(await this.isIntersectingViewport({
          threshold: 1
        }))) {
          await this.scrollIntoView();
        }
      }
      async isIntersectingViewport(e = {}) {
        let t = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          await this.assertConnectedElement();
          let i = await this.#H();
          let r = rr(t, i && (await i.#B()), false);
          return await (r ?? this).evaluate(async (e, t) => {
            let i = await new Promise(t => {
              let i = new IntersectionObserver(e => {
                t(e[0].intersectionRatio);
                i.disconnect();
              });
              i.observe(e);
            });
            if (t === 1) {
              return i === 1;
            } else {
              return i > t;
            }
          }, e.threshold ?? 0);
        } catch (e) {
          t.error = e;
          t.hasError = true;
        } finally {
          ra(t);
        }
      }
      async scrollIntoView() {
        await this.assertConnectedElement();
        await this.evaluate(async e => {
          e.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "instant"
          });
        });
      }
      async #H() {
        if (await this.evaluate(e => e instanceof SVGElement)) {
          return this;
        } else {
          return null;
        }
      }
      async #B() {
        return await this.evaluateHandle(e => e instanceof SVGSVGElement ? e : e.ownerSVGElement);
      }
    };
  })();
  function ro(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  c = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function rl(e) {
    function t(t) {
      e.error = e.hasError ? new c(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  (C ||= {}).Action = "action";
  class rc extends ty {
    static race(e) {
      return rm.create(e);
    }
    visibility = null;
    _timeout = 30000;
    #j = true;
    #W = true;
    #z = true;
    operators = {
      conditions: (e, t) => eJ(i => e2(...e.map(e => e(i, t))).pipe(ti(i))),
      retryAndRaceWithSignalAndTimer: (e, t) => {
        let i = [];
        if (e) {
          i.push(t9(e, t));
        }
        i.push(t0(this._timeout, t));
        return function () {
          var e = [];
          var t = 0;
          for (; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          return ed(e);
        }(tc({
          delay: ry
        }), tl(...i));
      }
    };
    get timeout() {
      return this._timeout;
    }
    setTimeout(e) {
      let t = this._clone();
      t._timeout = e;
      return t;
    }
    setVisibility(e) {
      let t = this._clone();
      t.visibility = e;
      return t;
    }
    setWaitForEnabled(e) {
      let t = this._clone();
      t.#W = e;
      return t;
    }
    setEnsureElementIsInTheViewport(e) {
      let t = this._clone();
      t.#j = e;
      return t;
    }
    setWaitForStableBoundingBox(e) {
      let t = this._clone();
      t.#z = e;
      return t;
    }
    copyOptions(e) {
      this._timeout = e._timeout;
      this.visibility = e.visibility;
      this.#W = e.#W;
      this.#j = e.#j;
      this.#z = e.#z;
      return this;
    }
    #U = (e, t) => this.#W ? ez(e.frame.waitForFunction(e => !(e instanceof HTMLElement) || !["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTION", "OPTGROUP"].includes(e.nodeName) || !e.hasAttribute("disabled"), {
      timeout: this._timeout,
      signal: t
    }, e)).pipe(ta()) : eE;
    #V = e => this.#z ? e0(() => ez(e.evaluate(e => new Promise(t => {
      window.requestAnimationFrame(() => {
        let i = e.getBoundingClientRect();
        window.requestAnimationFrame(() => {
          let r = e.getBoundingClientRect();
          t([{
            x: i.x,
            y: i.y,
            width: i.width,
            height: i.height
          }, {
            x: r.x,
            y: r.y,
            width: r.width,
            height: r.height
          }]);
        });
      });
    })))).pipe(to(([e, t]) => e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height), tc({
      delay: ry
    }), ta()) : eE;
    #G = e => this.#j ? ez(e.isIntersectingViewport({
      threshold: 0
    })).pipe(e9(e => !e), eJ(() => ez(e.scrollIntoView())), eJ(() => e0(() => ez(e.isIntersectingViewport({
      threshold: 0
    }))).pipe(to(ec), tc({
      delay: ry
    }), ta()))) : eE;
    #$(e) {
      let t = e?.signal;
      let i = Error("Locator.click");
      return this._wait(e).pipe(this.operators.conditions([this.#G, this.#V, this.#U], t), td(() => this.emit(C.Action, undefined)), eJ(t => ez(t.click(e)).pipe(tt(e => {
        t.dispose().catch(tq);
        throw e;
      }))), this.operators.retryAndRaceWithSignalAndTimer(t, i));
    }
    #X(e, t) {
      let i = t?.signal;
      let r = Error("Locator.fill");
      return this._wait(t).pipe(this.operators.conditions([this.#G, this.#V, this.#U], i), td(() => this.emit(C.Action, undefined)), eJ(t => ez(t.evaluate(e => e instanceof HTMLSelectElement ? "select" : e instanceof HTMLTextAreaElement ? "typeable-input" : e instanceof HTMLInputElement ? new Set(["textarea", "text", "url", "tel", "search", "password", "number", "email"]).has(e.type) ? "typeable-input" : "other-input" : e.isContentEditable ? "contenteditable" : "unknown")).pipe(eJ(i => {
        switch (i) {
          case "select":
            return ez(t.select(e).then(X));
          case "contenteditable":
          case "typeable-input":
            return ez(t.evaluate((e, t) => {
              let i = e.isContentEditable ? e.innerText : e.value;
              if (t.length <= i.length || !t.startsWith(e.value)) {
                if (e.isContentEditable) {
                  e.innerText = "";
                } else {
                  e.value = "";
                }
                return t;
              }
              let r = e.isContentEditable ? e.innerText : e.value;
              if (e.isContentEditable) {
                e.innerText = "";
                e.innerText = r;
              } else {
                e.value = "";
                e.value = r;
              }
              return t.substring(r.length);
            }, e)).pipe(eJ(e => ez(t.type(e))));
          case "other-input":
            return ez(t.focus()).pipe(eJ(() => ez(t.evaluate((e, t) => {
              e.value = t;
              e.dispatchEvent(new Event("input", {
                bubbles: true
              }));
              e.dispatchEvent(new Event("change", {
                bubbles: true
              }));
            }, e))));
          case "unknown":
            throw Error("Element cannot be filled out.");
        }
      })).pipe(tt(e => {
        t.dispose().catch(tq);
        throw e;
      }))), this.operators.retryAndRaceWithSignalAndTimer(i, r));
    }
    #Q(e) {
      let t = e?.signal;
      let i = Error("Locator.hover");
      return this._wait(e).pipe(this.operators.conditions([this.#G, this.#V], t), td(() => this.emit(C.Action, undefined)), eJ(e => ez(e.hover()).pipe(tt(t => {
        e.dispose().catch(tq);
        throw t;
      }))), this.operators.retryAndRaceWithSignalAndTimer(t, i));
    }
    #J(e) {
      let t = e?.signal;
      let i = Error("Locator.scroll");
      return this._wait(e).pipe(this.operators.conditions([this.#G, this.#V], t), td(() => this.emit(C.Action, undefined)), eJ(t => ez(t.evaluate((e, t, i) => {
        if (t !== undefined) {
          e.scrollTop = t;
        }
        if (i !== undefined) {
          e.scrollLeft = i;
        }
      }, e?.scrollTop, e?.scrollLeft)).pipe(tt(e => {
        t.dispose().catch(tq);
        throw e;
      }))), this.operators.retryAndRaceWithSignalAndTimer(t, i));
    }
    clone() {
      return this._clone();
    }
    async waitHandle(e) {
      let t = Error("Locator.waitHandle");
      return await eG(this._wait(e).pipe(this.operators.retryAndRaceWithSignalAndTimer(e?.signal, t)));
    }
    async wait(e) {
      let t = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        let i = ro(t, await this.waitHandle(e), false);
        return await i.jsonValue();
      } catch (e) {
        t.error = e;
        t.hasError = true;
      } finally {
        rl(t);
      }
    }
    map(e) {
      return new rp(this._clone(), t => t.evaluateHandle(e));
    }
    filter(e) {
      return new rh(this._clone(), async (t, i) => {
        await t.frame.waitForFunction(e, {
          signal: i,
          timeout: this._timeout
        }, t);
        return true;
      });
    }
    filterHandle(e) {
      return new rh(this._clone(), e);
    }
    mapHandle(e) {
      return new rp(this._clone(), e);
    }
    click(e) {
      return eG(this.#$(e));
    }
    fill(e, t) {
      return eG(this.#X(e, t));
    }
    hover(e) {
      return eG(this.#Q(e));
    }
    scroll(e) {
      return eG(this.#J(e));
    }
  }
  class rd extends rc {
    static create(e, t) {
      return new rd(e, t).setTimeout("getDefaultTimeout" in e ? e.getDefaultTimeout() : e.page().getDefaultTimeout());
    }
    #Y;
    #Z;
    constructor(e, t) {
      super();
      this.#Y = e;
      this.#Z = t;
    }
    _clone() {
      return new rd(this.#Y, this.#Z);
    }
    _wait(e) {
      let t = e?.signal;
      return e0(() => ez(this.#Y.waitForFunction(this.#Z, {
        timeout: this.timeout,
        signal: t
      }))).pipe(tn());
    }
  }
  class ru extends rc {
    #ee;
    constructor(e) {
      super();
      this.#ee = e;
      this.copyOptions(this.#ee);
    }
    get delegate() {
      return this.#ee;
    }
    setTimeout(e) {
      let t = super.setTimeout(e);
      t.#ee = this.#ee.setTimeout(e);
      return t;
    }
    setVisibility(e) {
      let t = super.setVisibility(e);
      t.#ee = t.#ee.setVisibility(e);
      return t;
    }
    setWaitForEnabled(e) {
      let t = super.setWaitForEnabled(e);
      t.#ee = this.#ee.setWaitForEnabled(e);
      return t;
    }
    setEnsureElementIsInTheViewport(e) {
      let t = super.setEnsureElementIsInTheViewport(e);
      t.#ee = this.#ee.setEnsureElementIsInTheViewport(e);
      return t;
    }
    setWaitForStableBoundingBox(e) {
      let t = super.setWaitForStableBoundingBox(e);
      t.#ee = this.#ee.setWaitForStableBoundingBox(e);
      return t;
    }
  }
  class rh extends ru {
    #et;
    constructor(e, t) {
      super(e);
      this.#et = t;
    }
    _clone() {
      return new rh(this.delegate.clone(), this.#et).copyOptions(this);
    }
    _wait(e) {
      return this.delegate._wait(e).pipe(eJ(t => ez(Promise.resolve(this.#et(t, e?.signal))).pipe(e9(e => e), e$(() => t))), tn());
    }
  }
  class rp extends ru {
    #ei;
    constructor(e, t) {
      super(e);
      this.#ei = t;
    }
    _clone() {
      return new rp(this.delegate.clone(), this.#ei).copyOptions(this);
    }
    _wait(e) {
      return this.delegate._wait(e).pipe(eJ(t => ez(Promise.resolve(this.#ei(t, e?.signal)))));
    }
  }
  class rf extends rc {
    static create(e, t) {
      return new rf(e, t).setTimeout("getDefaultTimeout" in e ? e.getDefaultTimeout() : e.page().getDefaultTimeout());
    }
    #Y;
    #er;
    constructor(e, t) {
      super();
      this.#Y = e;
      this.#er = t;
    }
    #ea = e => this.visibility ? (() => {
      switch (this.visibility) {
        case "hidden":
          return e0(() => ez(e.isHidden()));
        case "visible":
          return e0(() => ez(e.isVisible()));
      }
    })().pipe(to(ec), tc({
      delay: ry
    }), ta()) : eE;
    _clone() {
      return new rf(this.#Y, this.#er).copyOptions(this);
    }
    _wait(e) {
      let t = e?.signal;
      return e0(() => ez(this.#Y.waitForSelector(this.#er, {
        visible: false,
        timeout: this._timeout,
        signal: t
      }))).pipe(e9(e => e !== null), tn(), this.operators.conditions([this.#ea], t));
    }
  }
  class rm extends rc {
    static create(e) {
      return new rm(function (e) {
        for (let t of e) {
          if (!(t instanceof rc)) {
            throw Error("Unknown locator for race candidate");
          }
        }
        return e;
      }(e));
    }
    #en;
    constructor(e) {
      super();
      this.#en = e;
    }
    _clone() {
      return new rm(this.#en.map(e => e.clone())).copyOptions(this);
    }
    _wait(e) {
      return function () {
        var e;
        var t = [];
        var i = 0;
        for (; i < arguments.length; i++) {
          t[i] = arguments[i];
        }
        if ((t = (e = t).length === 1 && e8(e[0]) ? e[0] : e).length === 1) {
          return eK(t[0]);
        } else {
          return new eu(te(t));
        }
      }(...this.#en.map(t => t._wait(e)));
    }
  }
  let ry = 100;
  function rg(e, t, i) {
    var r = arguments.length > 2;
    var a = 0;
    for (; a < t.length; a++) {
      i = r ? t[a].call(e, i) : t[a].call(e);
    }
    if (r) {
      return i;
    } else {
      return undefined;
    }
  }
  function rw(e, t, i, r, a, n) {
    function s(e) {
      if (e !== undefined && typeof e != "function") {
        throw TypeError("Function expected");
      }
      return e;
    }
    var o;
    var l = r.kind;
    var c = l === "getter" ? "get" : l === "setter" ? "set" : "value";
    var d = !t && e ? r.static ? e : e.prototype : null;
    var u = t || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {});
    var h = false;
    var p = i.length - 1;
    for (; p >= 0; p--) {
      var f = {};
      for (var m in r) {
        f[m] = m === "access" ? {} : r[m];
      }
      for (var m in r.access) {
        f.access[m] = r.access[m];
      }
      f.addInitializer = function (e) {
        if (h) {
          throw TypeError("Cannot add initializers after decoration has completed");
        }
        n.push(s(e || null));
      };
      var y = i[p](l === "accessor" ? {
        get: u.get,
        set: u.set
      } : u[c], f);
      if (l === "accessor") {
        if (y === undefined) {
          continue;
        }
        if (y === null || typeof y != "object") {
          throw TypeError("Object expected");
        }
        if (o = s(y.get)) {
          u.get = o;
        }
        if (o = s(y.set)) {
          u.set = o;
        }
        if (o = s(y.init)) {
          a.unshift(o);
        }
      } else if (o = s(y)) {
        if (l === "field") {
          a.unshift(o);
        } else {
          u[c] = o;
        }
      }
    }
    if (d) {
      Object.defineProperty(d, r.name, u);
    }
    h = true;
  }
  function rv(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  d = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function rb(e) {
    function t(t) {
      e.error = e.hasError ? new d(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  (u = M ||= {}).FrameNavigated = Symbol("Frame.FrameNavigated");
  u.FrameSwapped = Symbol("Frame.FrameSwapped");
  u.LifecycleEvent = Symbol("Frame.LifecycleEvent");
  u.FrameNavigatedWithinDocument = Symbol("Frame.FrameNavigatedWithinDocument");
  u.FrameDetached = Symbol("Frame.FrameDetached");
  u.FrameSwappedByActivation = Symbol("Frame.FrameSwappedByActivation");
  let rk = i4(e => `Attempted to use detached Frame '${e._id}'.`);
  let rS = (() => {
    let e;
    let t;
    let i;
    let r;
    let a;
    let n;
    let s;
    let o;
    let l;
    let c;
    let d;
    let u;
    let h;
    let p;
    let f;
    let m;
    let y;
    let g;
    let w;
    let v;
    let b = ty;
    let k = [];
    return class extends b {
      static {
        let S = typeof Symbol == "function" && Symbol.metadata ? Object.create(b[Symbol.metadata] ?? null) : undefined;
        e = [rk];
        t = [rk];
        i = [rk];
        r = [rk];
        a = [rk];
        n = [rk];
        s = [rk];
        o = [rk];
        l = [rk];
        c = [rk];
        d = [rk];
        u = [rk];
        h = [rk];
        p = [rk];
        f = [rk];
        m = [rk];
        y = [rk];
        g = [rk];
        w = [rk];
        v = [rk];
        rw(this, null, e, {
          kind: "method",
          name: "frameElement",
          static: false,
          private: false,
          access: {
            has: e => "frameElement" in e,
            get: e => e.frameElement
          },
          metadata: S
        }, null, k);
        rw(this, null, t, {
          kind: "method",
          name: "evaluateHandle",
          static: false,
          private: false,
          access: {
            has: e => "evaluateHandle" in e,
            get: e => e.evaluateHandle
          },
          metadata: S
        }, null, k);
        rw(this, null, i, {
          kind: "method",
          name: "evaluate",
          static: false,
          private: false,
          access: {
            has: e => "evaluate" in e,
            get: e => e.evaluate
          },
          metadata: S
        }, null, k);
        rw(this, null, r, {
          kind: "method",
          name: "locator",
          static: false,
          private: false,
          access: {
            has: e => "locator" in e,
            get: e => e.locator
          },
          metadata: S
        }, null, k);
        rw(this, null, a, {
          kind: "method",
          name: "$",
          static: false,
          private: false,
          access: {
            has: e => "$" in e,
            get: e => e.$
          },
          metadata: S
        }, null, k);
        rw(this, null, n, {
          kind: "method",
          name: "$$",
          static: false,
          private: false,
          access: {
            has: e => "$$" in e,
            get: e => e.$$
          },
          metadata: S
        }, null, k);
        rw(this, null, s, {
          kind: "method",
          name: "$eval",
          static: false,
          private: false,
          access: {
            has: e => "$eval" in e,
            get: e => e.$eval
          },
          metadata: S
        }, null, k);
        rw(this, null, o, {
          kind: "method",
          name: "$$eval",
          static: false,
          private: false,
          access: {
            has: e => "$$eval" in e,
            get: e => e.$$eval
          },
          metadata: S
        }, null, k);
        rw(this, null, l, {
          kind: "method",
          name: "waitForSelector",
          static: false,
          private: false,
          access: {
            has: e => "waitForSelector" in e,
            get: e => e.waitForSelector
          },
          metadata: S
        }, null, k);
        rw(this, null, c, {
          kind: "method",
          name: "waitForFunction",
          static: false,
          private: false,
          access: {
            has: e => "waitForFunction" in e,
            get: e => e.waitForFunction
          },
          metadata: S
        }, null, k);
        rw(this, null, d, {
          kind: "method",
          name: "content",
          static: false,
          private: false,
          access: {
            has: e => "content" in e,
            get: e => e.content
          },
          metadata: S
        }, null, k);
        rw(this, null, u, {
          kind: "method",
          name: "addScriptTag",
          static: false,
          private: false,
          access: {
            has: e => "addScriptTag" in e,
            get: e => e.addScriptTag
          },
          metadata: S
        }, null, k);
        rw(this, null, h, {
          kind: "method",
          name: "addStyleTag",
          static: false,
          private: false,
          access: {
            has: e => "addStyleTag" in e,
            get: e => e.addStyleTag
          },
          metadata: S
        }, null, k);
        rw(this, null, p, {
          kind: "method",
          name: "click",
          static: false,
          private: false,
          access: {
            has: e => "click" in e,
            get: e => e.click
          },
          metadata: S
        }, null, k);
        rw(this, null, f, {
          kind: "method",
          name: "focus",
          static: false,
          private: false,
          access: {
            has: e => "focus" in e,
            get: e => e.focus
          },
          metadata: S
        }, null, k);
        rw(this, null, m, {
          kind: "method",
          name: "hover",
          static: false,
          private: false,
          access: {
            has: e => "hover" in e,
            get: e => e.hover
          },
          metadata: S
        }, null, k);
        rw(this, null, y, {
          kind: "method",
          name: "select",
          static: false,
          private: false,
          access: {
            has: e => "select" in e,
            get: e => e.select
          },
          metadata: S
        }, null, k);
        rw(this, null, g, {
          kind: "method",
          name: "tap",
          static: false,
          private: false,
          access: {
            has: e => "tap" in e,
            get: e => e.tap
          },
          metadata: S
        }, null, k);
        rw(this, null, w, {
          kind: "method",
          name: "type",
          static: false,
          private: false,
          access: {
            has: e => "type" in e,
            get: e => e.type
          },
          metadata: S
        }, null, k);
        rw(this, null, v, {
          kind: "method",
          name: "title",
          static: false,
          private: false,
          access: {
            has: e => "title" in e,
            get: e => e.title
          },
          metadata: S
        }, null, k);
        if (S) {
          Object.defineProperty(this, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: S
          });
        }
      }
      _id = rg(this, k);
      _parentId;
      _name;
      _hasStartedLoading = false;
      constructor() {
        super();
      }
      #es;
      #eo() {
        this.#es ||= this.mainRealm().evaluateHandle(() => document);
        return this.#es;
      }
      clearDocumentHandle() {
        this.#es = undefined;
      }
      async frameElement() {
        let e = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          let t = this.parentFrame();
          if (!t) {
            return null;
          }
          let i = rv(e, await t.isolatedRealm().evaluateHandle(() => document.querySelectorAll("iframe,frame")), false);
          for await (let e of iT(i)) {
            let i = {
              stack: [],
              error: undefined,
              hasError: false
            };
            try {
              let r = rv(i, e, false);
              let a = await r.contentFrame();
              if (a?._id === this._id) {
                return await t.mainRealm().adoptHandle(r);
              }
            } catch (e) {
              i.error = e;
              i.hasError = true;
            } finally {
              rb(i);
            }
          }
          return null;
        } catch (t) {
          e.error = t;
          e.hasError = true;
        } finally {
          rb(e);
        }
      }
      async evaluateHandle(e, ...t) {
        e = tW(this.evaluateHandle.name, e);
        return await this.mainRealm().evaluateHandle(e, ...t);
      }
      async evaluate(e, ...t) {
        e = tW(this.evaluate.name, e);
        return await this.mainRealm().evaluate(e, ...t);
      }
      locator(e) {
        if (typeof e == "string") {
          return rf.create(this, e);
        } else {
          return rd.create(this, e);
        }
      }
      async $(e) {
        let t = await this.#eo();
        return await t.$(e);
      }
      async $$(e, t) {
        let i = await this.#eo();
        return await i.$$(e, t);
      }
      async $eval(e, t, ...i) {
        t = tW(this.$eval.name, t);
        let r = await this.#eo();
        return await r.$eval(e, t, ...i);
      }
      async $$eval(e, t, ...i) {
        t = tW(this.$$eval.name, t);
        let r = await this.#eo();
        return await r.$$eval(e, t, ...i);
      }
      async waitForSelector(e, t = {}) {
        let {
          updatedSelector: i,
          QueryHandler: r,
          polling: a
        } = iZ(e);
        return await r.waitFor(this, i, {
          polling: a,
          ...t
        });
      }
      async waitForFunction(e, t = {}, ...i) {
        return await this.mainRealm().waitForFunction(e, t, ...i);
      }
      async content() {
        return await this.evaluate(() => {
          let e = "";
          for (let t of document.childNodes) {
            if (t === document.documentElement) {
              e += document.documentElement.outerHTML;
            } else {
              e += new XMLSerializer().serializeToString(t);
            }
          }
          return e;
        });
      }
      async setFrameContent(e) {
        return await this.evaluate(e => {
          document.open();
          document.write(e);
          document.close();
        }, e);
      }
      name() {
        return this._name || "";
      }
      isDetached() {
        return this.detached;
      }
      get disposed() {
        return this.detached;
      }
      async addScriptTag(e) {
        let {
          content: t = "",
          type: i
        } = e;
        let {
          path: r
        } = e;
        if (+!!e.url + +!!r + +!!t != 1) {
          throw Error("Exactly one of `url`, `path`, or `content` must be specified.");
        }
        if (r) {
          t = `${await tv.value.fs.promises.readFile(r, "utf8")}//# sourceURL=${r.replace(/\n/g, "")}`;
        }
        i = i ?? "text/javascript";
        return await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({
          url: e,
          id: t,
          type: i,
          content: r
        }) => await new Promise((a, n) => {
          let s = document.createElement("script");
          s.type = i;
          s.text = r;
          s.addEventListener("error", e => {
            n(Error(e.message ?? "Could not load script"));
          }, {
            once: true
          });
          if (t) {
            s.id = t;
          }
          if (e) {
            s.src = e;
            s.addEventListener("load", () => {
              a(s);
            }, {
              once: true
            });
            document.head.appendChild(s);
          } else {
            document.head.appendChild(s);
            a(s);
          }
        }), {
          ...e,
          type: i,
          content: t
        }));
      }
      async addStyleTag(e) {
        let {
          content: t = ""
        } = e;
        let {
          path: i
        } = e;
        if (+!!e.url + +!!i + +!!t != 1) {
          throw Error("Exactly one of `url`, `path`, or `content` must be specified.");
        }
        if (i) {
          t = (await tv.value.fs.promises.readFile(i, "utf8")) + ("/*# sourceURL=" + i.replace(/\n/g, "")) + "*/";
          e.content = t;
        }
        return await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({
          url: e,
          content: t
        }) => await new Promise((i, r) => {
          let a;
          if (e) {
            let t = document.createElement("link");
            t.rel = "stylesheet";
            t.href = e;
            a = t;
          } else {
            (a = document.createElement("style")).appendChild(document.createTextNode(t));
          }
          a.addEventListener("load", () => {
            i(a);
          }, {
            once: true
          });
          a.addEventListener("error", e => {
            r(Error(e.message ?? "Could not load style"));
          }, {
            once: true
          });
          document.head.appendChild(a);
          return a;
        }), e));
      }
      async click(e, t = {}) {
        let i = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          let r = rv(i, await this.$(e), false);
          tk(r, `No element found for selector: ${e}`);
          await r.click(t);
          await r.dispose();
        } catch (e) {
          i.error = e;
          i.hasError = true;
        } finally {
          rb(i);
        }
      }
      async focus(e) {
        let t = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          let i = rv(t, await this.$(e), false);
          tk(i, `No element found for selector: ${e}`);
          await i.focus();
        } catch (e) {
          t.error = e;
          t.hasError = true;
        } finally {
          rb(t);
        }
      }
      async hover(e) {
        let t = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          let i = rv(t, await this.$(e), false);
          tk(i, `No element found for selector: ${e}`);
          await i.hover();
        } catch (e) {
          t.error = e;
          t.hasError = true;
        } finally {
          rb(t);
        }
      }
      async select(e, ...t) {
        let i = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          let r = rv(i, await this.$(e), false);
          tk(r, `No element found for selector: ${e}`);
          return await r.select(...t);
        } catch (e) {
          i.error = e;
          i.hasError = true;
        } finally {
          rb(i);
        }
      }
      async tap(e) {
        let t = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          let i = rv(t, await this.$(e), false);
          tk(i, `No element found for selector: ${e}`);
          await i.tap();
        } catch (e) {
          t.error = e;
          t.hasError = true;
        } finally {
          rb(t);
        }
      }
      async type(e, t, i) {
        let r = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          let a = rv(r, await this.$(e), false);
          tk(a, `No element found for selector: ${e}`);
          await a.type(t, i);
        } catch (e) {
          r.error = e;
          r.hasError = true;
        } finally {
          rb(r);
        }
      }
      async title() {
        return await this.isolatedRealm().evaluate(() => document.title);
      }
    };
  })();
  let rT = 0;
  class rC {
    _interceptionId;
    _failureText = null;
    _response = null;
    _fromMemoryCache = false;
    _redirectChain = [];
    interception = {
      enabled: false,
      handled: false,
      handlers: [],
      resolutionState: {
        action: E.None
      },
      requestOverrides: {},
      response: null,
      abortReason: null
    };
    constructor() {}
    continueRequestOverrides() {
      tk(this.interception.enabled, "Request Interception is not enabled!");
      return this.interception.requestOverrides;
    }
    responseForRequest() {
      tk(this.interception.enabled, "Request Interception is not enabled!");
      return this.interception.response;
    }
    abortErrorReason() {
      tk(this.interception.enabled, "Request Interception is not enabled!");
      return this.interception.abortReason;
    }
    interceptResolutionState() {
      if (this.interception.enabled) {
        if (this.interception.handled) {
          return {
            action: E.AlreadyHandled
          };
        } else {
          return {
            ...this.interception.resolutionState
          };
        }
      } else {
        return {
          action: E.Disabled
        };
      }
    }
    isInterceptResolutionHandled() {
      return this.interception.handled;
    }
    enqueueInterceptAction(e) {
      this.interception.handlers.push(e);
    }
    async finalizeInterceptions() {
      await this.interception.handlers.reduce((e, t) => e.then(t), Promise.resolve());
      this.interception.handlers = [];
      let {
        action: e
      } = this.interceptResolutionState();
      switch (e) {
        case "abort":
          return await this._abort(this.interception.abortReason);
        case "respond":
          if (this.interception.response === null) {
            throw Error("Response is missing for the interception");
          }
          return await this._respond(this.interception.response);
        case "continue":
          return await this._continue(this.interception.requestOverrides);
      }
    }
    #el() {
      return !this.url().startsWith("data:") && !this._fromMemoryCache;
    }
    async continue(e = {}, t) {
      if (this.#el()) {
        tk(this.interception.enabled, "Request Interception is not enabled!");
        tk(!this.interception.handled, "Request is already handled!");
        if (t === undefined) {
          return await this._continue(e);
        }
        this.interception.requestOverrides = e;
        if (this.interception.resolutionState.priority === undefined || t > this.interception.resolutionState.priority) {
          this.interception.resolutionState = {
            action: E.Continue,
            priority: t
          };
          return;
        }
        if (t === this.interception.resolutionState.priority) {
          if (this.interception.resolutionState.action === "abort" || this.interception.resolutionState.action === "respond") {
            return;
          }
          this.interception.resolutionState.action = E.Continue;
        }
      }
    }
    async respond(e, t) {
      if (this.#el()) {
        tk(this.interception.enabled, "Request Interception is not enabled!");
        tk(!this.interception.handled, "Request is already handled!");
        if (t === undefined) {
          return await this._respond(e);
        }
        this.interception.response = e;
        if (this.interception.resolutionState.priority === undefined || t > this.interception.resolutionState.priority) {
          this.interception.resolutionState = {
            action: E.Respond,
            priority: t
          };
          return;
        }
        if (t === this.interception.resolutionState.priority) {
          if (this.interception.resolutionState.action === "abort") {
            return;
          }
          this.interception.resolutionState.action = E.Respond;
        }
      }
    }
    async abort(e = "failed", t) {
      if (!this.#el()) {
        return;
      }
      let i = rP[e];
      tk(i, "Unknown error code: " + e);
      tk(this.interception.enabled, "Request Interception is not enabled!");
      tk(!this.interception.handled, "Request is already handled!");
      if (t === undefined) {
        return await this._abort(i);
      }
      this.interception.abortReason = i;
      if (this.interception.resolutionState.priority === undefined || t >= this.interception.resolutionState.priority) {
        this.interception.resolutionState = {
          action: E.Abort,
          priority: t
        };
        return;
      }
    }
    static getResponse(e) {
      let t = tU(e) ? new TextEncoder().encode(e) : e;
      return {
        contentLength: t.byteLength,
        base64: tC(t)
      };
    }
  }
  function rM(e) {
    let t = [];
    for (let i in e) {
      let r = e[i];
      if (!Object.is(r, undefined)) {
        let e = Array.isArray(r) ? r : [r];
        t.push(...e.map(e => ({
          name: i,
          value: e + ""
        })));
      }
    }
    return t;
  }
  (h = E ||= {}).Abort = "abort";
  h.Respond = "respond";
  h.Continue = "continue";
  h.Disabled = "disabled";
  h.None = "none";
  h.AlreadyHandled = "already-handled";
  let rE = {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    103: "Early Hints",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    226: "IM Used",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    306: "Switch Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required"
  };
  let rP = {
    aborted: "Aborted",
    accessdenied: "AccessDenied",
    addressunreachable: "AddressUnreachable",
    blockedbyclient: "BlockedByClient",
    blockedbyresponse: "BlockedByResponse",
    connectionaborted: "ConnectionAborted",
    connectionclosed: "ConnectionClosed",
    connectionfailed: "ConnectionFailed",
    connectionrefused: "ConnectionRefused",
    connectionreset: "ConnectionReset",
    internetdisconnected: "InternetDisconnected",
    namenotresolved: "NameNotResolved",
    timedout: "TimedOut",
    failed: "Failed"
  };
  function rI(e) {
    if (e.originalMessage.includes("Invalid header") || e.originalMessage.includes("Unsafe header") || e.originalMessage.includes("Expected \"header\"") || e.originalMessage.includes("invalid argument")) {
      throw e;
    }
    tq(e);
  }
  var rx = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  class rF {
    constructor() {}
    ok() {
      let e = this.status();
      return e === 0 || e >= 200 && e <= 299;
    }
    async buffer() {
      let e = await this.content();
      return rx.from(e);
    }
    async text() {
      let e = await this.content();
      return new TextDecoder().decode(e);
    }
    async json() {
      return JSON.parse(await this.text());
    }
  }
  function rA() {
    let e = 0;
    return () => ++e;
  }
  class rL {
    constructor() {}
  }
  let rO = Object.freeze({
    Left: "left",
    Right: "right",
    Middle: "middle",
    Back: "back",
    Forward: "forward"
  });
  class rR {
    constructor() {}
  }
  class rD {
    idGenerator = rA();
    touches = [];
    constructor() {}
    removeHandle(e) {
      let t = this.touches.indexOf(e);
      if (t !== -1) {
        this.touches.splice(t, 1);
      }
    }
    async tap(e, t) {
      let i = await this.touchStart(e, t);
      await i.end();
    }
    async touchMove(e, t) {
      let i = this.touches[0];
      if (!i) {
        throw new tR("Must start a new Touch first");
      }
      return await i.move(e, t);
    }
    async touchEnd() {
      let e = this.touches.shift();
      if (!e) {
        throw new tR("Must start a new Touch first");
      }
      await e.end();
    }
  }
  class r_ {
    #ec;
    #ed;
    constructor() {
      this.#ec = null;
      this.#ed = null;
    }
    setDefaultTimeout(e) {
      this.#ec = e;
    }
    setDefaultNavigationTimeout(e) {
      this.#ed = e;
    }
    navigationTimeout() {
      if (this.#ed !== null) {
        return this.#ed;
      } else if (this.#ec !== null) {
        return this.#ec;
      } else {
        return 30000;
      }
    }
    timeout() {
      if (this.#ec !== null) {
        return this.#ec;
      } else {
        return 30000;
      }
    }
  }
  function rN(e, t, i) {
    var r = arguments.length > 2;
    var a = 0;
    for (; a < t.length; a++) {
      i = r ? t[a].call(e, i) : t[a].call(e);
    }
    if (r) {
      return i;
    } else {
      return undefined;
    }
  }
  function rK(e, t, i, r, a, n) {
    function s(e) {
      if (e !== undefined && typeof e != "function") {
        throw TypeError("Function expected");
      }
      return e;
    }
    var o;
    var l = r.kind;
    var c = l === "getter" ? "get" : l === "setter" ? "set" : "value";
    var d = !t && e ? r.static ? e : e.prototype : null;
    var u = t || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {});
    var h = false;
    var p = i.length - 1;
    for (; p >= 0; p--) {
      var f = {};
      for (var m in r) {
        f[m] = m === "access" ? {} : r[m];
      }
      for (var m in r.access) {
        f.access[m] = r.access[m];
      }
      f.addInitializer = function (e) {
        if (h) {
          throw TypeError("Cannot add initializers after decoration has completed");
        }
        n.push(s(e || null));
      };
      var y = i[p](l === "accessor" ? {
        get: u.get,
        set: u.set
      } : u[c], f);
      if (l === "accessor") {
        if (y === undefined) {
          continue;
        }
        if (y === null || typeof y != "object") {
          throw TypeError("Object expected");
        }
        if (o = s(y.get)) {
          u.get = o;
        }
        if (o = s(y.set)) {
          u.set = o;
        }
        if (o = s(y.init)) {
          a.unshift(o);
        }
      } else if (o = s(y)) {
        if (l === "field") {
          a.unshift(o);
        } else {
          u[c] = o;
        }
      }
    }
    if (d) {
      Object.defineProperty(d, r.name, u);
    }
    h = true;
  }
  function rq(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  p = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function rH(e) {
    function t(t) {
      e.error = e.hasError ? new p(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  function rB(e) {
    e.optimizeForSpeed ??= false;
    e.type ??= "png";
    e.fromSurface ??= true;
    e.fullPage ??= false;
    e.omitBackground ??= false;
    e.encoding ??= "binary";
    e.captureBeyondViewport ??= true;
  }
  let rj = (() => {
    let e;
    let t = ty;
    let i = [];
    return class extends t {
      static {
        let r = typeof Symbol == "function" && Symbol.metadata ? Object.create(t[Symbol.metadata] ?? null) : undefined;
        rK(this, null, e, {
          kind: "method",
          name: "screenshot",
          static: false,
          private: false,
          access: {
            has: e => "screenshot" in e,
            get: e => e.screenshot
          },
          metadata: r
        }, null, i);
        if (r) {
          Object.defineProperty(this, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: r
          });
        }
      }
      _isDragging = (rN(this, i), false);
      _timeoutSettings = new r_();
      #eu = new WeakMap();
      #eh = new eb(1);
      constructor() {
        var e;
        var t;
        var i;
        super();
        t8(this, "request").pipe(eJ(e => eZ(eU(1), e2(t8(this, "requestfailed"), t8(this, "requestfinished"), t8(this, "response").pipe(e$(e => e.request()))).pipe(e9(t => t.id === e.id), tr(1), e$(() => -1)))), (e = (e, t) => eU(e + t), t === undefined && (t = Infinity), ep(function (i, r) {
          var a = 0;
          return eQ(i, r, function (t, i) {
            return e(a, t, i);
          }, t, function (e) {
            a = e;
          }, false, undefined, function () {
            return a = null;
          });
        })), (i = t8(this, "close"), ep(function (e, t) {
          eK(i).subscribe(ef(t, function () {
            return t.complete();
          }, X));
          if (!t.closed) {
            e.subscribe(t);
          }
        })), function () {
          var e = [];
          var t = 0;
          for (; t < arguments.length; t++) {
            e[t] = arguments[t];
          }
          var i = ex(e);
          return ep(function (t, r) {
            (i ? eZ(e, t, i) : eZ(e, t)).subscribe(r);
          });
        }(0)).subscribe(this.#eh);
      }
      on(e, t) {
        if (e !== "request") {
          return super.on(e, t);
        }
        let i = this.#eu.get(t);
        if (i === undefined) {
          i = e => {
            e.enqueueInterceptAction(() => t(e));
          };
          this.#eu.set(t, i);
        }
        return super.on(e, i);
      }
      off(e, t) {
        if (e === "request") {
          t = this.#eu.get(t) || t;
        }
        return super.off(e, t);
      }
      get accessibility() {
        return this.mainFrame().accessibility;
      }
      locator(e) {
        if (typeof e == "string") {
          return rf.create(this, e);
        } else {
          return rd.create(this, e);
        }
      }
      locatorRace(e) {
        return rc.race(e);
      }
      async $(e) {
        return await this.mainFrame().$(e);
      }
      async $$(e, t) {
        return await this.mainFrame().$$(e, t);
      }
      async evaluateHandle(e, ...t) {
        e = tW(this.evaluateHandle.name, e);
        return await this.mainFrame().evaluateHandle(e, ...t);
      }
      async $eval(e, t, ...i) {
        t = tW(this.$eval.name, t);
        return await this.mainFrame().$eval(e, t, ...i);
      }
      async $$eval(e, t, ...i) {
        t = tW(this.$$eval.name, t);
        return await this.mainFrame().$$eval(e, t, ...i);
      }
      async addScriptTag(e) {
        return await this.mainFrame().addScriptTag(e);
      }
      async addStyleTag(e) {
        return await this.mainFrame().addStyleTag(e);
      }
      url() {
        return this.mainFrame().url();
      }
      async content() {
        return await this.mainFrame().content();
      }
      async setContent(e, t) {
        await this.mainFrame().setContent(e, t);
      }
      async goto(e, t) {
        return await this.mainFrame().goto(e, t);
      }
      async waitForNavigation(e = {}) {
        return await this.mainFrame().waitForNavigation(e);
      }
      waitForRequest(e, t = {}) {
        let {
          timeout: i = this._timeoutSettings.timeout(),
          signal: r
        } = t;
        if (typeof e == "string") {
          let t = e;
          e = e => e.url() === t;
        }
        return eG(t8(this, "request").pipe(ie(e), tl(t0(i), t9(r), t8(this, "close").pipe(e$(() => {
          throw new tN("Page closed!");
        })))));
      }
      waitForResponse(e, t = {}) {
        let {
          timeout: i = this._timeoutSettings.timeout(),
          signal: r
        } = t;
        if (typeof e == "string") {
          let t = e;
          e = e => e.url() === t;
        }
        return eG(t8(this, "response").pipe(ie(e), tl(t0(i), t9(r), t8(this, "close").pipe(e$(() => {
          throw new tN("Page closed!");
        })))));
      }
      waitForNetworkIdle(e = {}) {
        return eG(this.waitForNetworkIdle$(e));
      }
      waitForNetworkIdle$(e = {}) {
        var t;
        let {
          timeout: i = this._timeoutSettings.timeout(),
          idleTime: r = t4,
          concurrency: a = 0,
          signal: n
        } = e;
        return this.#eh.pipe((t = e => e > a ? eE : e6(r), ep(function (e, i) {
          var r = null;
          var a = 0;
          var n = false;
          function s() {
            return n && !r && i.complete();
          }
          e.subscribe(ef(i, function (e) {
            if (r != null) {
              r.unsubscribe();
            }
            eK(t(e, a++)).subscribe(r = ef(i, function (e) {
              return i.next(e);
            }, function () {
              r = null;
              s();
            }));
          }, function () {
            n = true;
            s();
          }));
        })), e$(() => {}), tl(t0(i), t9(n), t8(this, "close").pipe(e$(() => {
          throw new tN("Page closed!");
        }))));
      }
      async waitForFrame(e, t = {}) {
        let {
          timeout: i = this.getDefaultTimeout(),
          signal: r
        } = t;
        let a = tU(e) ? t => e === t.url() : e;
        return await eG(e2(t8(this, "frameattached"), t8(this, "framenavigated"), ez(this.frames())).pipe(ie(a), to(), tl(t0(i), t9(r), t8(this, "close").pipe(e$(() => {
          throw new tN("Page closed.");
        })))));
      }
      async emulate(e) {
        await Promise.all([this.setUserAgent(e.userAgent), this.setViewport(e.viewport)]);
      }
      async evaluate(e, ...t) {
        e = tW(this.evaluate.name, e);
        return await this.mainFrame().evaluate(e, ...t);
      }
      async _maybeWriteTypedArrayToFile(e, t) {
        if (e) {
          await tv.value.fs.promises.writeFile(e, t);
        }
      }
      async screencast(e = {}) {
        let t;
        let i = tv.value.ScreenRecorder;
        let [r, a, n] = await this.#ep();
        if (e.crop) {
          let {
            x: i,
            y: s,
            width: o,
            height: l
          } = rU(rz(e.crop));
          if (i < 0 || s < 0) {
            throw Error("`crop.x` and `crop.y` must be greater than or equal to 0.");
          }
          if (o <= 0 || l <= 0) {
            throw Error("`crop.height` and `crop.width` must be greater than or equal to 0.");
          }
          let c = r / n;
          let d = a / n;
          if (i + o > c) {
            throw Error(`\`crop.width\` cannot be larger than the viewport width (${c}).`);
          }
          if (s + l > d) {
            throw Error(`\`crop.height\` cannot be larger than the viewport height (${d}).`);
          }
          t = {
            x: i * n,
            y: s * n,
            width: o * n,
            height: l * n
          };
        }
        if (e.speed !== undefined && e.speed <= 0) {
          throw Error("`speed` must be greater than 0.");
        }
        if (e.scale !== undefined && e.scale <= 0) {
          throw Error("`scale` must be greater than 0.");
        }
        let s = new i(this, r, a, {
          ...e,
          crop: t
        });
        try {
          await this._startScreencast();
        } catch (e) {
          s.stop();
          throw e;
        }
        if (e.path) {
          let {
            createWriteStream: t
          } = tv.value.fs;
          let i = t(e.path, "binary");
          s.pipe(i);
        }
        return s;
      }
      #ef = 0;
      #em;
      async _startScreencast() {
        ++this.#ef;
        this.#em ||= this.mainFrame().client.send("Page.startScreencast", {
          format: "png"
        }).then(() => new Promise(e => this.mainFrame().client.once("Page.screencastFrame", () => e())));
        await this.#em;
      }
      async _stopScreencast() {
        --this.#ef;
        if (this.#em) {
          this.#em = undefined;
          if (this.#ef === 0) {
            await this.mainFrame().client.send("Page.stopScreencast");
          }
        }
      }
      async #ep() {
        let e = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          let t = this.viewport();
          let i = rq(e, new tp(), false);
          if (t && t.deviceScaleFactor !== 0) {
            await this.setViewport({
              ...t,
              deviceScaleFactor: 0
            });
            i.defer(() => {
              this.setViewport(t).catch(tq);
            });
          }
          return await this.mainFrame().isolatedRealm().evaluate(() => [window.visualViewport.width * window.devicePixelRatio, window.visualViewport.height * window.devicePixelRatio, window.devicePixelRatio]);
        } catch (t) {
          e.error = t;
          e.hasError = true;
        } finally {
          rH(e);
        }
      }
      async screenshot(e = {}) {
        let t = {
          stack: [],
          error: undefined,
          hasError: false
        };
        try {
          rq(t, await this.browserContext().startScreenshot(), false);
          let i = {
            ...e,
            clip: e.clip ? {
              ...e.clip
            } : undefined
          };
          if (i.type === undefined && i.path !== undefined) {
            let e = i.path;
            switch (e.slice(e.lastIndexOf(".") + 1).toLowerCase()) {
              case "png":
                i.type = "png";
                break;
              case "jpeg":
              case "jpg":
                i.type = "jpeg";
                break;
              case "webp":
                i.type = "webp";
            }
          }
          if (i.quality !== undefined) {
            if (i.quality < 0 || i.quality > 100) {
              throw Error(`Expected 'quality' (${i.quality}) to be between 0 and 100, inclusive.`);
            }
            if (i.type === undefined || !["jpeg", "webp"].includes(i.type)) {
              throw Error(`${i.type ?? "png"} screenshots do not support 'quality'.`);
            }
          }
          if (i.clip) {
            if (i.clip.width <= 0) {
              throw Error("'width' in 'clip' must be positive.");
            }
            if (i.clip.height <= 0) {
              throw Error("'height' in 'clip' must be positive.");
            }
          }
          rB(i);
          let r = rq(t, new tf(), true);
          if (i.clip) {
            if (i.fullPage) {
              throw Error("'clip' and 'fullPage' are mutually exclusive");
            }
            i.clip = rU(rz(i.clip));
          } else if (i.fullPage) {
            if (!i.captureBeyondViewport) {
              let e = await this.mainFrame().isolatedRealm().evaluate(() => {
                let e = document.documentElement;
                return {
                  width: e.scrollWidth,
                  height: e.scrollHeight
                };
              });
              let t = this.viewport();
              await this.setViewport({
                ...t,
                ...e
              });
              r.defer(async () => {
                await this.setViewport(t).catch(tq);
              });
            }
          } else {
            i.captureBeyondViewport = false;
          }
          let a = await this._screenshot(i);
          if (i.encoding === "base64") {
            return a;
          }
          let n = tT(a, true);
          await this._maybeWriteTypedArrayToFile(i.path, n);
          return n;
        } catch (e) {
          t.error = e;
          t.hasError = true;
        } finally {
          let e = rH(t);
          if (e) {
            await e;
          }
        }
      }
      async title() {
        return await this.mainFrame().title();
      }
      click(e, t) {
        return this.mainFrame().click(e, t);
      }
      focus(e) {
        return this.mainFrame().focus(e);
      }
      hover(e) {
        return this.mainFrame().hover(e);
      }
      select(e, ...t) {
        return this.mainFrame().select(e, ...t);
      }
      tap(e) {
        return this.mainFrame().tap(e);
      }
      type(e, t, i) {
        return this.mainFrame().type(e, t, i);
      }
      async waitForSelector(e, t = {}) {
        return await this.mainFrame().waitForSelector(e, t);
      }
      waitForFunction(e, t, ...i) {
        return this.mainFrame().waitForFunction(e, t, ...i);
      }
      [(e = [function (e = function () {
        return this;
      }) {
        return (t, i) => {
          let r = new WeakMap();
          return async function (...i) {
            let a = {
              stack: [],
              error: undefined,
              hasError: false
            };
            try {
              let n = e.call(this);
              let s = r.get(n);
              if (!s) {
                s = new ia();
                r.set(n, s);
              }
              i0(a, await s.acquire(), true);
              return await t.call(this, ...i);
            } catch (e) {
              a.error = e;
              a.hasError = true;
            } finally {
              let e = i1(a);
              if (e) {
                await e;
              }
            }
          };
        };
      }(function () {
        return this.browser();
      })], tu)]() {
        this.close().catch(tq);
      }
      [th]() {
        return this.close();
      }
    };
  })();
  let rW = new Set(["Timestamp", "Documents", "Frames", "JSEventListeners", "Nodes", "LayoutCount", "RecalcStyleCount", "LayoutDuration", "RecalcStyleDuration", "ScriptDuration", "TaskDuration", "JSHeapUsedSize", "JSHeapTotalSize"]);
  function rz(e) {
    return {
      ...e,
      ...(e.width < 0 ? {
        x: e.x + e.width,
        width: -e.width
      } : {
        x: e.x,
        width: e.width
      }),
      ...(e.height < 0 ? {
        y: e.y + e.height,
        height: -e.height
      } : {
        y: e.y,
        height: e.height
      })
    };
  }
  function rU(e) {
    let t = Math.round(e.x);
    let i = Math.round(e.y);
    let r = Math.round(e.width + e.x - t);
    let a = Math.round(e.height + e.y - i);
    return {
      ...e,
      x: t,
      y: i,
      width: r,
      height: a
    };
  }
  class rV {
    #ey;
    #eg;
    #ew;
    #ev;
    #eb;
    #ek;
    #g;
    #eS = ir.create();
    #eT;
    #eC;
    #eM = [];
    constructor(e, t, i, ...r) {
      this.#ey = e;
      this.#eg = t.polling;
      this.#ew = t.root;
      this.#eC = t.signal;
      this.#eC?.addEventListener("abort", this.#eE, {
        once: true
      });
      if (typeof i == "string") {
        this.#ev = `() => {return (${i});}`;
      } else {
        this.#ev = ig(i);
      }
      this.#eb = r;
      this.#ey.taskManager.add(this);
      if (t.timeout) {
        this.#g = new tO(`Waiting failed: ${t.timeout}ms exceeded`);
        this.#ek = setTimeout(() => {
          this.terminate(this.#g);
        }, t.timeout);
      }
      this.rerun();
    }
    get result() {
      return this.#eS.valueOrThrow();
    }
    async rerun() {
      for (let e of this.#eM) {
        e.abort();
      }
      this.#eM.length = 0;
      let e = new AbortController();
      this.#eM.push(e);
      try {
        switch (this.#eg) {
          case "raf":
            this.#eT = await this.#ey.evaluateHandle(({
              RAFPoller: e,
              createFunction: t
            }, i, ...r) => {
              let a = t(i);
              return new e(() => a(...r));
            }, iC.create(e => e.puppeteerUtil), this.#ev, ...this.#eb);
            break;
          case "mutation":
            this.#eT = await this.#ey.evaluateHandle(({
              MutationPoller: e,
              createFunction: t
            }, i, r, ...a) => {
              let n = t(r);
              return new e(() => n(...a), i || document);
            }, iC.create(e => e.puppeteerUtil), this.#ew, this.#ev, ...this.#eb);
            break;
          default:
            this.#eT = await this.#ey.evaluateHandle(({
              IntervalPoller: e,
              createFunction: t
            }, i, r, ...a) => {
              let n = t(r);
              return new e(() => n(...a), i);
            }, iC.create(e => e.puppeteerUtil), this.#eg, this.#ev, ...this.#eb);
        }
        await this.#eT.evaluate(e => {
          e.start();
        });
        let e = await this.#eT.evaluateHandle(e => e.result());
        this.#eS.resolve(e);
        await this.terminate();
      } catch (i) {
        if (e.signal.aborted) {
          return;
        }
        let t = this.getBadError(i);
        if (t) {
          await this.terminate(t);
        }
      }
    }
    async terminate(e) {
      this.#ey.taskManager.delete(this);
      this.#eC?.removeEventListener("abort", this.#eE);
      clearTimeout(this.#ek);
      if (e && !this.#eS.finished()) {
        this.#eS.reject(e);
      }
      if (this.#eT) {
        try {
          await this.#eT.evaluate(async e => {
            await e.stop();
          });
          if (this.#eT) {
            await this.#eT.dispose();
            this.#eT = undefined;
          }
        } catch {}
      }
    }
    getBadError(e) {
      if (id(e)) {
        if (e.message.includes("Execution context is not available in detached frame")) {
          return Error("Waiting failed: Frame detached");
        }
        if (e.message.includes("Execution context was destroyed") || e.message.includes("Cannot find context with specified id") || e.message.includes("DiscardedBrowsingContextError")) {
          return;
        }
        return e;
      }
      return Error("WaitTask failed with an error", {
        cause: e
      });
    }
    #eE = () => {
      this.terminate(this.#eC?.reason);
    };
  }
  class rG {
    #eP = new Set();
    add(e) {
      this.#eP.add(e);
    }
    delete(e) {
      this.#eP.delete(e);
    }
    terminateAll(e) {
      for (let t of this.#eP) {
        t.terminate(e);
      }
      this.#eP.clear();
    }
    async rerunAll() {
      await Promise.all([...this.#eP].map(e => e.rerun()));
    }
  }
  class r$ {
    timeoutSettings;
    taskManager = new rG();
    constructor(e) {
      this.timeoutSettings = e;
    }
    async waitForFunction(e, t = {}, ...i) {
      let {
        polling: r = "raf",
        timeout: a = this.timeoutSettings.timeout(),
        root: n,
        signal: s
      } = t;
      if (typeof r == "number" && r < 0) {
        throw Error("Cannot poll with non-positive interval");
      }
      let o = new rV(this, {
        polling: r,
        root: n,
        timeout: a,
        signal: s
      }, e, ...i);
      return await o.result;
    }
    get disposed() {
      return this.#t;
    }
    #t = false;
    dispose() {
      this.#t = true;
      this.taskManager.terminateAll(Error("waitForFunction failed: frame got detached."));
    }
    [tu]() {
      this.dispose();
    }
  }
  (f = P ||= {}).PAGE = "page";
  f.BACKGROUND_PAGE = "background_page";
  f.SERVICE_WORKER = "service_worker";
  f.SHARED_WORKER = "shared_worker";
  f.BROWSER = "browser";
  f.WEBVIEW = "webview";
  f.OTHER = "other";
  f.TAB = "tab";
  class rX {
    constructor() {}
    async worker() {
      return null;
    }
    async page() {
      return null;
    }
  }
  class rQ extends ty {
    timeoutSettings = new r_();
    #eI;
    constructor(e) {
      super();
      this.#eI = e;
    }
    url() {
      return this.#eI;
    }
    async evaluate(e, ...t) {
      e = tW(this.evaluate.name, e);
      return await this.mainRealm().evaluate(e, ...t);
    }
    async evaluateHandle(e, ...t) {
      e = tW(this.evaluateHandle.name, e);
      return await this.mainRealm().evaluateHandle(e, ...t);
    }
    async close() {
      throw new t_("WebWorker.close() is not supported");
    }
  }
  function rJ(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  m = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function rY(e) {
    function t(t) {
      e.error = e.hasError ? new m(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  class rZ {
    #ex;
    #eF;
    constructor(e, t = "") {
      this.#ex = e;
      this.#eF = t;
    }
    async snapshot(e = {}) {
      let t;
      let {
        interestingOnly: i = true,
        root: r = null,
        includeIframes: a = false
      } = e;
      let {
        nodes: n
      } = await this.#ex.environment.client.send("Accessibility.getFullAXTree", {
        frameId: this.#eF
      });
      if (r) {
        let {
          node: e
        } = await this.#ex.environment.client.send("DOM.describeNode", {
          objectId: r.id
        });
        t = e.backendNodeId;
      }
      let s = r0.createTree(this.#ex, n);
      let o = async t => {
        if (t.payload.role?.value === "Iframe") {
          let i = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            if (!t.payload.backendDOMNodeId) {
              return;
            }
            let r = rJ(i, await this.#ex.adoptBackendNode(t.payload.backendDOMNodeId), false);
            if (!r || !("contentFrame" in r)) {
              return;
            }
            let a = await r.contentFrame();
            if (!a) {
              return;
            }
            let n = await a.accessibility.snapshot(e);
            t.iframeSnapshot = n ?? undefined;
          } catch (e) {
            i.error = e;
            i.hasError = true;
          } finally {
            rY(i);
          }
        }
        for (let e of t.children) {
          await o(e);
        }
      };
      let l = s;
      if (!s || (a && (await o(s)), t && (l = s.find(e => e.payload.backendDOMNodeId === t)), !l)) {
        return null;
      }
      if (!i) {
        return this.serializeTree(l)[0] ?? null;
      }
      let c = new Set();
      this.collectInterestingNodes(c, s, false);
      if (c.has(l)) {
        return this.serializeTree(l, c)[0] ?? null;
      } else {
        return null;
      }
    }
    serializeTree(e, t) {
      let i = [];
      for (let r of e.children) {
        i.push(...this.serializeTree(r, t));
      }
      if (t && !t.has(e)) {
        return i;
      }
      let r = e.serialize();
      if (i.length) {
        r.children = i;
      }
      if (e.iframeSnapshot) {
        r.children ||= [];
        r.children.push(e.iframeSnapshot);
      }
      return [r];
    }
    collectInterestingNodes(e, t, i) {
      if (t.isInteresting(i) || t.iframeSnapshot) {
        e.add(t);
      }
      if (!t.isLeafNode()) {
        i = i || t.isControl();
        for (let r of t.children) {
          this.collectInterestingNodes(e, r, i);
        }
      }
    }
  }
  class r0 {
    payload;
    children = [];
    iframeSnapshot;
    #eA = false;
    #eL = false;
    #eO = false;
    #eR = false;
    #eD;
    #e_;
    #eN;
    #eK;
    #ex;
    constructor(e, t) {
      this.payload = t;
      this.#eD = this.payload.name ? this.payload.name.value : "";
      this.#e_ = this.payload.role ? this.payload.role.value : "Unknown";
      this.#eN = this.payload.ignored;
      this.#ex = e;
      for (let i of this.payload.properties || []) {
        if (i.name === "editable") {
          this.#eA = i.value.value === "richtext";
          this.#eL = true;
        }
        if (i.name === "focusable") {
          this.#eO = i.value.value;
        }
        if (i.name === "hidden") {
          this.#eR = i.value.value;
        }
      }
    }
    #eq() {
      return !this.#eA && (!!this.#eL || this.#e_ === "textbox" || this.#e_ === "searchbox");
    }
    #eH() {
      let e = this.#e_;
      return e === "LineBreak" || e === "text" || e === "InlineTextBox" || e === "StaticText";
    }
    #eB() {
      if (this.#eK === undefined) {
        this.#eK = false;
        for (let e of this.children) {
          if (e.#eO || e.#eB()) {
            this.#eK = true;
            break;
          }
        }
      }
      return this.#eK;
    }
    find(e) {
      if (e(this)) {
        return this;
      }
      for (let t of this.children) {
        let i = t.find(e);
        if (i) {
          return i;
        }
      }
      return null;
    }
    isLeafNode() {
      if (!this.children.length || this.#eq() || this.#eH()) {
        return true;
      }
      switch (this.#e_) {
        case "doc-cover":
        case "graphics-symbol":
        case "img":
        case "image":
        case "Meter":
        case "scrollbar":
        case "slider":
        case "separator":
        case "progressbar":
          return true;
      }
      return !this.#eB() && (!!this.#eO && !!this.#eD || this.#e_ === "heading" && !!this.#eD);
    }
    isControl() {
      switch (this.#e_) {
        case "button":
        case "checkbox":
        case "ColorWell":
        case "combobox":
        case "DisclosureTriangle":
        case "listbox":
        case "menu":
        case "menubar":
        case "menuitem":
        case "menuitemcheckbox":
        case "menuitemradio":
        case "radio":
        case "scrollbar":
        case "searchbox":
        case "slider":
        case "spinbutton":
        case "switch":
        case "tab":
        case "textbox":
        case "tree":
        case "treeitem":
          return true;
        default:
          return false;
      }
    }
    isInteresting(e) {
      return this.#e_ !== "Ignored" && !this.#eR && !this.#eN && (!!this.#eO || !!this.#eA || !!this.isControl() || !e && this.isLeafNode() && !!this.#eD);
    }
    serialize() {
      let e = new Map();
      for (let t of this.payload.properties || []) {
        e.set(t.name.toLowerCase(), t.value.value);
      }
      if (this.payload.name) {
        e.set("name", this.payload.name.value);
      }
      if (this.payload.value) {
        e.set("value", this.payload.value.value);
      }
      if (this.payload.description) {
        e.set("description", this.payload.description.value);
      }
      let t = {
        role: this.#e_,
        elementHandle: async () => this.payload.backendDOMNodeId ? await this.#ex.adoptBackendNode(this.payload.backendDOMNodeId) : null
      };
      let i = t => e.get(t);
      for (let r of ["name", "value", "description", "keyshortcuts", "roledescription", "valuetext"]) {
        if (e.has(r)) {
          t[r] = i(r);
        }
      }
      let r = t => e.get(t);
      for (let e of ["disabled", "expanded", "focused", "modal", "multiline", "multiselectable", "readonly", "required", "selected"]) {
        if ((e !== "focused" || this.#e_ !== "RootWebArea") && r(e)) {
          t[e] = r(e);
        }
      }
      for (let i of ["checked", "pressed"]) {
        if (!e.has(i)) {
          continue;
        }
        let r = e.get(i);
        t[i] = r === "mixed" ? "mixed" : r === "true";
      }
      let a = t => e.get(t);
      for (let i of ["level", "valuemax", "valuemin"]) {
        if (e.has(i)) {
          t[i] = a(i);
        }
      }
      let n = t => e.get(t);
      for (let e of ["autocomplete", "haspopup", "invalid", "orientation"]) {
        let i = n(e);
        if (i && i !== "false") {
          t[e] = n(e);
        }
      }
      return t;
    }
    static createTree(e, t) {
      let i = new Map();
      for (let r of t) {
        i.set(r.nodeId, new r0(e, r));
      }
      for (let e of i.values()) {
        for (let t of e.payload.childIds || []) {
          let r = i.get(t);
          if (r) {
            e.children.push(r);
          }
        }
      }
      return i.values().next().value ?? null;
    }
  }
  function r1(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  y = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function r5(e) {
    function t(t) {
      e.error = e.hasError ? new y(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  class r3 {
    #eD;
    #ev;
    #ej;
    constructor(e, t, i) {
      this.#eD = e;
      this.#ev = t;
      this.#ej = i;
    }
    get name() {
      return this.#eD;
    }
    get initSource() {
      return this.#ej;
    }
    async run(e, t, i, r) {
      let a = new tp();
      try {
        if (!r) {
          let r = {
            stack: [],
            error: undefined,
            hasError: false
          };
          try {
            let n = r1(r, await e.evaluateHandle((e, t) => globalThis[e].args.get(t), this.#eD, t), false);
            for (let [e, t] of await n.getProperties()) {
              if (e in i && t.remoteObject().subtype === "node") {
                i[+e] = t;
              } else {
                a.use(t);
              }
            }
          } catch (e) {
            r.error = e;
            r.hasError = true;
          } finally {
            r5(r);
          }
        }
        await e.evaluate((e, t, i) => {
          let r = globalThis[e].callbacks;
          r.get(t).resolve(i);
          r.delete(t);
        }, this.#eD, t, await this.#ev(...i));
        for (let r of i) {
          if (r instanceof re) {
            a.use(r);
          }
        }
      } catch (i) {
        if (id(i)) {
          await e.evaluate((e, t, i, r) => {
            let a = Error(i);
            a.stack = r;
            let n = globalThis[e].callbacks;
            n.get(t).reject(a);
            n.delete(t);
          }, this.#eD, t, i.message, i.stack).catch(tq);
        } else {
          await e.evaluate((e, t, i) => {
            let r = globalThis[e].callbacks;
            r.get(t).reject(i);
            r.delete(t);
          }, this.#eD, t, i).catch(tq);
        }
      }
    }
  }
  class r4 {
    #E;
    #eW;
    #eb;
    #ez;
    #eU;
    constructor(e, t, i, r, a) {
      this.#E = e;
      this.#eW = t;
      this.#eb = i;
      this.#ez = r;
      this.#eU = a;
    }
    type() {
      return this.#E;
    }
    text() {
      return this.#eW;
    }
    args() {
      return this.#eb;
    }
    location() {
      return this.#ez[0] ?? (this.#eU ? {
        url: this.#eU.url()
      } : {});
    }
    stackTrace() {
      return this.#ez;
    }
  }
  class r6 {
    #eV;
    #eG;
    #e$ = false;
    constructor(e, t) {
      this.#eV = e;
      this.#eG = t;
    }
    isMultiple() {
      return this.#eG;
    }
    async accept(e) {
      tk(!this.#e$, "Cannot accept FileChooser which is already handled!");
      this.#e$ = true;
      await this.#eV.uploadFile(...e);
    }
    async cancel() {
      tk(!this.#e$, "Cannot cancel FileChooser which is already handled!");
      this.#e$ = true;
      await this.#eV.evaluate(e => {
        e.dispatchEvent(new Event("cancel", {
          bubbles: true
        }));
      });
    }
  }
  (g = I ||= {}).Request = Symbol("NetworkManager.Request");
  g.RequestServedFromCache = Symbol("NetworkManager.RequestServedFromCache");
  g.Response = Symbol("NetworkManager.Response");
  g.RequestFailed = Symbol("NetworkManager.RequestFailed");
  g.RequestFinished = Symbol("NetworkManager.RequestFinished");
  class r2 {
    #eX = new Map();
    #eQ = rA();
    create(e, t, i) {
      let r = new r7(this.#eQ(), e, t);
      this.#eX.set(r.id, r);
      try {
        i(r.id);
      } catch (e) {
        r.promise.catch(tq).finally(() => {
          this.#eX.delete(r.id);
        });
        r.reject(e);
        throw e;
      }
      return r.promise.finally(() => {
        this.#eX.delete(r.id);
      });
    }
    reject(e, t, i) {
      let r = this.#eX.get(e);
      if (r) {
        this._reject(r, t, i);
      }
    }
    rejectRaw(e, t) {
      let i = this.#eX.get(e);
      if (i) {
        i.reject(t);
      }
    }
    _reject(e, t, i) {
      let r;
      let a;
      if (t instanceof tD) {
        (r = t).cause = e.error;
        a = t.message;
      } else {
        r = e.error;
        a = t;
      }
      e.reject(ih(r, `Protocol error (${e.label}): ${a}`, i));
    }
    resolve(e, t) {
      let i = this.#eX.get(e);
      if (i) {
        i.resolve(t);
      }
    }
    clear() {
      for (let e of this.#eX.values()) {
        this._reject(e, new tN("Target closed"));
      }
      this.#eX.clear();
    }
    getPendingProtocolErrors() {
      let e = [];
      for (let t of this.#eX.values()) {
        e.push(Error(`${t.label} timed out. Trace: ${t.error.stack}`));
      }
      return e;
    }
  }
  class r7 {
    #eJ;
    #r = new tD();
    #eY = ir.create();
    #eZ;
    #e0;
    constructor(e, t, i) {
      this.#eJ = e;
      this.#e0 = t;
      if (i) {
        this.#eZ = setTimeout(() => {
          this.#eY.reject(ih(this.#r, `${t} timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.`));
        }, i);
      }
    }
    resolve(e) {
      clearTimeout(this.#eZ);
      this.#eY.resolve(e);
    }
    reject(e) {
      clearTimeout(this.#eZ);
      this.#eY.reject(e);
    }
    get id() {
      return this.#eJ;
    }
    get promise() {
      return this.#eY.valueOrThrow();
    }
    get error() {
      return this.#r;
    }
    get label() {
      return this.#e0;
    }
  }
  class r8 extends io {
    #e1;
    #e5;
    #eX = new r2();
    #e3;
    #e4;
    #e6;
    #e2 = false;
    #e7 = false;
    constructor(e, t, i, r, a) {
      super();
      this.#e3 = e;
      this.#e5 = t;
      this.#e1 = i;
      this.#e4 = r;
      this.#e2 = a;
    }
    setTarget(e) {
      this.#e6 = e;
    }
    target() {
      tk(this.#e6, "Target must exist");
      return this.#e6;
    }
    connection() {
      return this.#e3;
    }
    get detached() {
      return this.#e3._closed || this.#e7;
    }
    parentSession() {
      if (this.#e4) {
        return this.#e3?.session(this.#e4) ?? undefined;
      } else {
        return this;
      }
    }
    send(e, t, i) {
      if (this.detached) {
        return Promise.reject(new tN(`Protocol error (${e}): Session closed. Most likely the ${this.#e5} has been closed.`));
      } else {
        return this.#e3._rawSend(this.#eX, e, t, this.#e1, i);
      }
    }
    onMessage(e) {
      if (e.id) {
        if (e.error) {
          if (this.#e2) {
            this.#eX.rejectRaw(e.id, e.error);
          } else {
            this.#eX.reject(e.id, ip(e), e.error.message);
          }
        } else {
          this.#eX.resolve(e.id, e.result);
        }
      } else {
        tk(!e.id);
        this.emit(e.method, e.params);
      }
    }
    async detach() {
      if (this.detached) {
        throw Error(`Session already detached. Most likely the ${this.#e5} has been closed.`);
      }
      await this.#e3.send("Target.detachFromTarget", {
        sessionId: this.#e1
      });
      this.#e7 = true;
    }
    onClosed() {
      this.#eX.clear();
      this.#e7 = true;
      this.emit(T.Disconnected, undefined);
    }
    id() {
      return this.#e1;
    }
    getPendingProtocolErrors() {
      return this.#eX.getPendingProtocolErrors();
    }
  }
  let r9 = tP("puppeteer:protocol:SEND ►");
  let ae = tP("puppeteer:protocol:RECV ◀");
  class at extends ty {
    #eI;
    #e8;
    #e9;
    #ek;
    #te = new Map();
    #tt = false;
    #ti = new Set();
    #eX;
    #e2 = false;
    constructor(e, t, i = 0, r, a = false) {
      super();
      this.#e2 = a;
      this.#eX = new r2();
      this.#eI = e;
      this.#e9 = i;
      this.#ek = r ?? 180000;
      this.#e8 = t;
      this.#e8.onmessage = this.onMessage.bind(this);
      this.#e8.onclose = this.#tr.bind(this);
    }
    static fromSession(e) {
      return e.connection();
    }
    get delay() {
      return this.#e9;
    }
    get timeout() {
      return this.#ek;
    }
    get _closed() {
      return this.#tt;
    }
    get _sessions() {
      return this.#te;
    }
    _session(e) {
      return this.#te.get(e) || null;
    }
    session(e) {
      return this._session(e);
    }
    url() {
      return this.#eI;
    }
    send(e, t, i) {
      return this._rawSend(this.#eX, e, t, undefined, i);
    }
    _rawSend(e, t, i, r, a) {
      if (this.#tt) {
        return Promise.reject(Error("Protocol error: Connection closed."));
      } else {
        return e.create(t, a?.timeout ?? this.#ek, e => {
          let a = JSON.stringify({
            method: t,
            params: i,
            id: e,
            sessionId: r
          });
          r9(a);
          this.#e8.send(a);
        });
      }
    }
    async closeBrowser() {
      await this.send("Browser.close");
    }
    async onMessage(e) {
      if (this.#e9) {
        await new Promise(e => setTimeout(e, this.#e9));
      }
      ae(e);
      let t = JSON.parse(e);
      if (t.method === "Target.attachedToTarget") {
        let e = t.params.sessionId;
        let i = new r8(this, t.params.targetInfo.type, e, t.sessionId, this.#e2);
        this.#te.set(e, i);
        this.emit(T.SessionAttached, i);
        let r = this.#te.get(t.sessionId);
        if (r) {
          r.emit(T.SessionAttached, i);
        }
      } else if (t.method === "Target.detachedFromTarget") {
        let e = this.#te.get(t.params.sessionId);
        if (e) {
          e.onClosed();
          this.#te.delete(t.params.sessionId);
          this.emit(T.SessionDetached, e);
          let i = this.#te.get(t.sessionId);
          if (i) {
            i.emit(T.SessionDetached, e);
          }
        }
      }
      if (t.sessionId) {
        let e = this.#te.get(t.sessionId);
        if (e) {
          e.onMessage(t);
        }
      } else if (t.id) {
        if (t.error) {
          if (this.#e2) {
            this.#eX.rejectRaw(t.id, t.error);
          } else {
            this.#eX.reject(t.id, ip(t), t.error.message);
          }
        } else {
          this.#eX.resolve(t.id, t.result);
        }
      } else {
        this.emit(t.method, t.params);
      }
    }
    #tr() {
      if (!this.#tt) {
        this.#tt = true;
        this.#e8.onmessage = undefined;
        this.#e8.onclose = undefined;
        this.#eX.clear();
        for (let e of this.#te.values()) {
          e.onClosed();
        }
        this.#te.clear();
        this.emit(T.Disconnected, undefined);
      }
    }
    dispose() {
      this.#tr();
      this.#e8.close();
    }
    isAutoAttached(e) {
      return !this.#ti.has(e);
    }
    async _createSession(e, t = true) {
      if (!t) {
        this.#ti.add(e.targetId);
      }
      let {
        sessionId: i
      } = await this.send("Target.attachToTarget", {
        targetId: e.targetId,
        flatten: true
      });
      this.#ti.delete(e.targetId);
      let r = this.#te.get(i);
      if (!r) {
        throw Error("CDPSession creation failed.");
      }
      return r;
    }
    async createSession(e) {
      return await this._createSession(e, false);
    }
    getPendingProtocolErrors() {
      let e = [];
      e.push(...this.#eX.getPendingProtocolErrors());
      for (let t of this.#te.values()) {
        e.push(...t.getPendingProtocolErrors());
      }
      return e;
    }
  }
  function ai(e) {
    return e instanceof tN;
  }
  class ar {
    #ta;
    #tn;
    constructor(e) {
      this.#ta = new aa(e);
      this.#tn = new an(e);
    }
    updateClient(e) {
      this.#ta.updateClient(e);
      this.#tn.updateClient(e);
    }
    async startJSCoverage(e = {}) {
      return await this.#ta.start(e);
    }
    async stopJSCoverage() {
      return await this.#ta.stop();
    }
    async startCSSCoverage(e = {}) {
      return await this.#tn.start(e);
    }
    async stopCSSCoverage() {
      return await this.#tn.stop();
    }
  }
  class aa {
    #ts;
    #to = false;
    #tl = new Map();
    #tc = new Map();
    #td;
    #tu = false;
    #th = false;
    #tp = false;
    constructor(e) {
      this.#ts = e;
    }
    updateClient(e) {
      this.#ts = e;
    }
    async start(e = {}) {
      tk(!this.#to, "JSCoverage is already enabled");
      let {
        resetOnNavigation: t = true,
        reportAnonymousScripts: i = false,
        includeRawScriptCoverage: r = false,
        useBlockCoverage: a = true
      } = e;
      this.#tu = t;
      this.#th = i;
      this.#tp = r;
      this.#to = true;
      this.#tl.clear();
      this.#tc.clear();
      this.#td = new tp();
      let n = this.#td.use(new ty(this.#ts));
      n.on("Debugger.scriptParsed", this.#tf.bind(this));
      n.on("Runtime.executionContextsCleared", this.#tm.bind(this));
      await Promise.all([this.#ts.send("Profiler.enable"), this.#ts.send("Profiler.startPreciseCoverage", {
        callCount: this.#tp,
        detailed: a
      }), this.#ts.send("Debugger.enable"), this.#ts.send("Debugger.setSkipAllPauses", {
        skip: true
      })]);
    }
    #tm() {
      if (this.#tu) {
        this.#tl.clear();
        this.#tc.clear();
      }
    }
    async #tf(e) {
      if (!tj.isPuppeteerURL(e.url) && (e.url || this.#th)) {
        try {
          let t = await this.#ts.send("Debugger.getScriptSource", {
            scriptId: e.scriptId
          });
          this.#tl.set(e.scriptId, e.url);
          this.#tc.set(e.scriptId, t.scriptSource);
        } catch (e) {
          tq(e);
        }
      }
    }
    async stop() {
      tk(this.#to, "JSCoverage is not enabled");
      this.#to = false;
      let e = await Promise.all([this.#ts.send("Profiler.takePreciseCoverage"), this.#ts.send("Profiler.stopPreciseCoverage"), this.#ts.send("Profiler.disable"), this.#ts.send("Debugger.disable")]);
      this.#td?.dispose();
      let t = [];
      for (let i of e[0].result) {
        let e = this.#tl.get(i.scriptId);
        if (!e && this.#th) {
          e = "debugger://VM" + i.scriptId;
        }
        let r = this.#tc.get(i.scriptId);
        if (r === undefined || e === undefined) {
          continue;
        }
        let a = [];
        for (let e of i.functions) {
          a.push(...e.ranges);
        }
        let n = as(a);
        if (this.#tp) {
          t.push({
            url: e,
            ranges: n,
            text: r,
            rawScriptCoverage: i
          });
        } else {
          t.push({
            url: e,
            ranges: n,
            text: r
          });
        }
      }
      return t;
    }
  }
  class an {
    #ts;
    #to = false;
    #ty = new Map();
    #tg = new Map();
    #tw;
    #tu = false;
    constructor(e) {
      this.#ts = e;
    }
    updateClient(e) {
      this.#ts = e;
    }
    async start(e = {}) {
      tk(!this.#to, "CSSCoverage is already enabled");
      let {
        resetOnNavigation: t = true
      } = e;
      this.#tu = t;
      this.#to = true;
      this.#ty.clear();
      this.#tg.clear();
      this.#tw = new tp();
      let i = this.#tw.use(new ty(this.#ts));
      i.on("CSS.styleSheetAdded", this.#tv.bind(this));
      i.on("Runtime.executionContextsCleared", this.#tm.bind(this));
      await Promise.all([this.#ts.send("DOM.enable"), this.#ts.send("CSS.enable"), this.#ts.send("CSS.startRuleUsageTracking")]);
    }
    #tm() {
      if (this.#tu) {
        this.#ty.clear();
        this.#tg.clear();
      }
    }
    async #tv(e) {
      let t = e.header;
      if (t.sourceURL) {
        try {
          let e = await this.#ts.send("CSS.getStyleSheetText", {
            styleSheetId: t.styleSheetId
          });
          this.#ty.set(t.styleSheetId, t.sourceURL);
          this.#tg.set(t.styleSheetId, e.text);
        } catch (e) {
          tq(e);
        }
      }
    }
    async stop() {
      tk(this.#to, "CSSCoverage is not enabled");
      this.#to = false;
      let e = await this.#ts.send("CSS.stopRuleUsageTracking");
      await Promise.all([this.#ts.send("CSS.disable"), this.#ts.send("DOM.disable")]);
      this.#tw?.dispose();
      let t = new Map();
      for (let i of e.ruleUsage) {
        let e = t.get(i.styleSheetId);
        if (!e) {
          e = [];
          t.set(i.styleSheetId, e);
        }
        e.push({
          startOffset: i.startOffset,
          endOffset: i.endOffset,
          count: +!!i.used
        });
      }
      let i = [];
      for (let e of this.#ty.keys()) {
        let r = this.#ty.get(e);
        tk(r !== undefined, `Stylesheet URL is undefined (styleSheetId=${e})`);
        let a = this.#tg.get(e);
        tk(a !== undefined, `Stylesheet text is undefined (styleSheetId=${e})`);
        let n = as(t.get(e) || []);
        i.push({
          url: r,
          ranges: n,
          text: a
        });
      }
      return i;
    }
  }
  function as(e) {
    let t = [];
    for (let i of e) {
      t.push({
        offset: i.startOffset,
        type: 0,
        range: i
      });
      t.push({
        offset: i.endOffset,
        type: 1,
        range: i
      });
    }
    t.sort((e, t) => {
      if (e.offset !== t.offset) {
        return e.offset - t.offset;
      }
      if (e.type !== t.type) {
        return t.type - e.type;
      }
      let i = e.range.endOffset - e.range.startOffset;
      let r = t.range.endOffset - t.range.startOffset;
      if (e.type === 0) {
        return r - i;
      } else {
        return i - r;
      }
    });
    let i = [];
    let r = [];
    let a = 0;
    for (let e of t) {
      if (i.length && a < e.offset && i[i.length - 1] > 0) {
        let t = r[r.length - 1];
        if (t && t.end === a) {
          t.end = e.offset;
        } else {
          r.push({
            start: a,
            end: e.offset
          });
        }
      }
      a = e.offset;
      if (e.type === 0) {
        i.push(e.range.count);
      } else {
        i.pop();
      }
    }
    return r.filter(e => e.end - e.start > 0);
  }
  class ao extends il {
    #ts;
    constructor(e, t, i, r = "") {
      super(t, i, r);
      this.#ts = e;
    }
    async handle(e) {
      await this.#ts.send("Page.handleJavaScriptDialog", {
        accept: e.accept,
        promptText: e.text
      });
    }
  }
  function al(e, t, i) {
    var r = arguments.length > 2;
    var a = 0;
    for (; a < t.length; a++) {
      i = r ? t[a].call(e, i) : t[a].call(e);
    }
    if (r) {
      return i;
    } else {
      return undefined;
    }
  }
  function ac(e, t, i, r, a, n) {
    function s(e) {
      if (e !== undefined && typeof e != "function") {
        throw TypeError("Function expected");
      }
      return e;
    }
    var o;
    var l = r.kind;
    var c = l === "getter" ? "get" : l === "setter" ? "set" : "value";
    var d = !t && e ? r.static ? e : e.prototype : null;
    var u = t || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {});
    var h = false;
    var p = i.length - 1;
    for (; p >= 0; p--) {
      var f = {};
      for (var m in r) {
        f[m] = m === "access" ? {} : r[m];
      }
      for (var m in r.access) {
        f.access[m] = r.access[m];
      }
      f.addInitializer = function (e) {
        if (h) {
          throw TypeError("Cannot add initializers after decoration has completed");
        }
        n.push(s(e || null));
      };
      var y = i[p](l === "accessor" ? {
        get: u.get,
        set: u.set
      } : u[c], f);
      if (l === "accessor") {
        if (y === undefined) {
          continue;
        }
        if (y === null || typeof y != "object") {
          throw TypeError("Object expected");
        }
        if (o = s(y.get)) {
          u.get = o;
        }
        if (o = s(y.set)) {
          u.set = o;
        }
        if (o = s(y.init)) {
          a.unshift(o);
        }
      } else if (o = s(y)) {
        if (l === "field") {
          a.unshift(o);
        } else {
          u[c] = o;
        }
      }
    }
    if (d) {
      Object.defineProperty(d, r.name, u);
    }
    h = true;
  }
  function ad(e, t, i) {
    if (typeof t == "symbol") {
      t = t.description ? `[${t.description}]` : "";
    }
    return Object.defineProperty(e, "name", {
      configurable: true,
      value: i ? `${i} ${t}` : t
    });
  }
  class au {
    #tb;
    #tk;
    #tS;
    constructor(e, t, i) {
      this.#tb = e;
      this.#tk = t;
      this.#tS = i;
      this.#tk.registerState(this);
    }
    async setState(e) {
      this.#tb = e;
      await this.sync();
    }
    get state() {
      return this.#tb;
    }
    async sync() {
      await Promise.all(this.#tk.clients().map(e => this.#tS(e, this.#tb)));
    }
  }
  let ah = (() => {
    let e;
    let t;
    let i;
    let r;
    let a;
    let n;
    let s;
    let o;
    let l;
    let c;
    let d;
    let u;
    let h;
    let p;
    let f;
    let m;
    let y;
    let g;
    let w;
    let v;
    let b = [];
    return class {
      static {
        let k = typeof Symbol == "function" && Symbol.metadata ? Object.create(null) : undefined;
        e = [i6];
        i = [i6];
        a = [i6];
        s = [i6];
        l = [i6];
        d = [i6];
        h = [i6];
        f = [i6];
        y = [i6];
        w = [i6];
        ac(this, t = {
          value: ad(async function (e, t) {
            if (!t.viewport) {
              await Promise.all([e.send("Emulation.clearDeviceMetricsOverride"), e.send("Emulation.setTouchEmulationEnabled", {
                enabled: false
              })]).catch(tq);
              return;
            }
            let {
              viewport: i
            } = t;
            let r = i.isMobile || false;
            let a = i.width;
            let n = i.height;
            let s = i.deviceScaleFactor ?? 1;
            let o = i.isLandscape ? {
              angle: 90,
              type: "landscapePrimary"
            } : {
              angle: 0,
              type: "portraitPrimary"
            };
            let l = i.hasTouch || false;
            await Promise.all([e.send("Emulation.setDeviceMetricsOverride", {
              mobile: r,
              width: a,
              height: n,
              deviceScaleFactor: s,
              screenOrientation: o
            }).catch(e => {
              if (e.message.includes("Target does not support metrics override")) {
                tq(e);
                return;
              }
              throw e;
            }), e.send("Emulation.setTouchEmulationEnabled", {
              enabled: l
            })]);
          }, "#applyViewport")
        }, e, {
          kind: "method",
          name: "#applyViewport",
          static: false,
          private: true,
          access: {
            has: e => #tT in e,
            get: e => e.#tT
          },
          metadata: k
        }, null, b);
        ac(this, r = {
          value: ad(async function (e, t) {
            if (t.active) {
              if (t.overrides) {
                await e.send("Emulation.setIdleOverride", {
                  isUserActive: t.overrides.isUserActive,
                  isScreenUnlocked: t.overrides.isScreenUnlocked
                });
              } else {
                await e.send("Emulation.clearIdleOverride");
              }
            }
          }, "#emulateIdleState")
        }, i, {
          kind: "method",
          name: "#emulateIdleState",
          static: false,
          private: true,
          access: {
            has: e => #tC in e,
            get: e => e.#tC
          },
          metadata: k
        }, null, b);
        ac(this, n = {
          value: ad(async function (e, t) {
            if (t.active) {
              try {
                await e.send("Emulation.setTimezoneOverride", {
                  timezoneId: t.timezoneId || ""
                });
              } catch (e) {
                if (id(e) && e.message.includes("Invalid timezone")) {
                  throw Error(`Invalid timezone ID: ${t.timezoneId}`);
                }
                throw e;
              }
            }
          }, "#emulateTimezone")
        }, a, {
          kind: "method",
          name: "#emulateTimezone",
          static: false,
          private: true,
          access: {
            has: e => #tM in e,
            get: e => e.#tM
          },
          metadata: k
        }, null, b);
        ac(this, o = {
          value: ad(async function (e, t) {
            if (t.active) {
              await e.send("Emulation.setEmulatedVisionDeficiency", {
                type: t.visionDeficiency || "none"
              });
            }
          }, "#emulateVisionDeficiency")
        }, s, {
          kind: "method",
          name: "#emulateVisionDeficiency",
          static: false,
          private: true,
          access: {
            has: e => #tE in e,
            get: e => e.#tE
          },
          metadata: k
        }, null, b);
        ac(this, c = {
          value: ad(async function (e, t) {
            if (t.active) {
              await e.send("Emulation.setCPUThrottlingRate", {
                rate: t.factor ?? 1
              });
            }
          }, "#emulateCpuThrottling")
        }, l, {
          kind: "method",
          name: "#emulateCpuThrottling",
          static: false,
          private: true,
          access: {
            has: e => #tP in e,
            get: e => e.#tP
          },
          metadata: k
        }, null, b);
        ac(this, u = {
          value: ad(async function (e, t) {
            if (t.active) {
              await e.send("Emulation.setEmulatedMedia", {
                features: t.mediaFeatures
              });
            }
          }, "#emulateMediaFeatures")
        }, d, {
          kind: "method",
          name: "#emulateMediaFeatures",
          static: false,
          private: true,
          access: {
            has: e => #tI in e,
            get: e => e.#tI
          },
          metadata: k
        }, null, b);
        ac(this, p = {
          value: ad(async function (e, t) {
            if (t.active) {
              await e.send("Emulation.setEmulatedMedia", {
                media: t.type || ""
              });
            }
          }, "#emulateMediaType")
        }, h, {
          kind: "method",
          name: "#emulateMediaType",
          static: false,
          private: true,
          access: {
            has: e => #tx in e,
            get: e => e.#tx
          },
          metadata: k
        }, null, b);
        ac(this, m = {
          value: ad(async function (e, t) {
            if (t.active) {
              await e.send("Emulation.setGeolocationOverride", t.geoLocation ? {
                longitude: t.geoLocation.longitude,
                latitude: t.geoLocation.latitude,
                accuracy: t.geoLocation.accuracy
              } : undefined);
            }
          }, "#setGeolocation")
        }, f, {
          kind: "method",
          name: "#setGeolocation",
          static: false,
          private: true,
          access: {
            has: e => #tF in e,
            get: e => e.#tF
          },
          metadata: k
        }, null, b);
        ac(this, g = {
          value: ad(async function (e, t) {
            if (t.active) {
              await e.send("Emulation.setDefaultBackgroundColorOverride", {
                color: t.color
              });
            }
          }, "#setDefaultBackgroundColor")
        }, y, {
          kind: "method",
          name: "#setDefaultBackgroundColor",
          static: false,
          private: true,
          access: {
            has: e => #tA in e,
            get: e => e.#tA
          },
          metadata: k
        }, null, b);
        ac(this, v = {
          value: ad(async function (e, t) {
            if (t.active) {
              await e.send("Emulation.setScriptExecutionDisabled", {
                value: !t.javaScriptEnabled
              });
            }
          }, "#setJavaScriptEnabled")
        }, w, {
          kind: "method",
          name: "#setJavaScriptEnabled",
          static: false,
          private: true,
          access: {
            has: e => #tL in e,
            get: e => e.#tL
          },
          metadata: k
        }, null, b);
        if (k) {
          Object.defineProperty(this, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: k
          });
        }
      }
      #ts = al(this, b);
      #tO = false;
      #tR = false;
      #tD = [];
      #t_ = new au({
        active: false
      }, this, this.#tT);
      #tN = new au({
        active: false
      }, this, this.#tC);
      #tK = new au({
        active: false
      }, this, this.#tM);
      #tq = new au({
        active: false
      }, this, this.#tE);
      #tH = new au({
        active: false
      }, this, this.#tP);
      #tB = new au({
        active: false
      }, this, this.#tI);
      #tj = new au({
        active: false
      }, this, this.#tx);
      #tW = new au({
        active: false
      }, this, this.#tF);
      #tz = new au({
        active: false
      }, this, this.#tA);
      #tU = new au({
        javaScriptEnabled: true,
        active: false
      }, this, this.#tL);
      #tV = new Set();
      constructor(e) {
        this.#ts = e;
      }
      updateClient(e) {
        this.#ts = e;
        this.#tV.delete(e);
      }
      registerState(e) {
        this.#tD.push(e);
      }
      clients() {
        return [this.#ts, ...Array.from(this.#tV)];
      }
      async registerSpeculativeSession(e) {
        this.#tV.add(e);
        e.once(T.Disconnected, () => {
          this.#tV.delete(e);
        });
        Promise.all(this.#tD.map(e => e.sync().catch(tq)));
      }
      get javascriptEnabled() {
        return this.#tU.state.javaScriptEnabled;
      }
      async emulateViewport(e) {
        let t = this.#t_.state;
        if (!e && !t.active) {
          return false;
        }
        await this.#t_.setState(e ? {
          viewport: e,
          active: true
        } : {
          active: false
        });
        let i = e?.isMobile || false;
        let r = e?.hasTouch || false;
        let a = this.#tO !== i || this.#tR !== r;
        this.#tO = i;
        this.#tR = r;
        return a;
      }
      get #tT() {
        return t.value;
      }
      async emulateIdleState(e) {
        await this.#tN.setState({
          active: true,
          overrides: e
        });
      }
      get #tC() {
        return r.value;
      }
      get #tM() {
        return n.value;
      }
      async emulateTimezone(e) {
        await this.#tK.setState({
          timezoneId: e,
          active: true
        });
      }
      get #tE() {
        return o.value;
      }
      async emulateVisionDeficiency(e) {
        let t = new Set(["none", "achromatopsia", "blurredVision", "deuteranopia", "protanopia", "reducedContrast", "tritanopia"]);
        tk(!e || t.has(e), `Unsupported vision deficiency: ${e}`);
        await this.#tq.setState({
          active: true,
          visionDeficiency: e
        });
      }
      get #tP() {
        return c.value;
      }
      async emulateCPUThrottling(e) {
        tk(e === null || e >= 1, "Throttling rate should be greater or equal to 1");
        await this.#tH.setState({
          active: true,
          factor: e ?? undefined
        });
      }
      get #tI() {
        return u.value;
      }
      async emulateMediaFeatures(e) {
        if (Array.isArray(e)) {
          for (let t of e) {
            let e = t.name;
            tk(/^(?:prefers-(?:color-scheme|reduced-motion)|color-gamut)$/.test(e), "Unsupported media feature: " + e);
          }
        }
        await this.#tB.setState({
          active: true,
          mediaFeatures: e
        });
      }
      get #tx() {
        return p.value;
      }
      async emulateMediaType(e) {
        tk(e === "screen" || e === "print" || (e ?? undefined) === undefined, "Unsupported media type: " + e);
        await this.#tj.setState({
          type: e,
          active: true
        });
      }
      get #tF() {
        return m.value;
      }
      async setGeolocation(e) {
        let {
          longitude: t,
          latitude: i,
          accuracy: r = 0
        } = e;
        if (t < -180 || t > 180) {
          throw Error(`Invalid longitude "${t}": precondition -180 <= LONGITUDE <= 180 failed.`);
        }
        if (i < -90 || i > 90) {
          throw Error(`Invalid latitude "${i}": precondition -90 <= LATITUDE <= 90 failed.`);
        }
        if (r < 0) {
          throw Error(`Invalid accuracy "${r}": precondition 0 <= ACCURACY failed.`);
        }
        await this.#tW.setState({
          active: true,
          geoLocation: {
            longitude: t,
            latitude: i,
            accuracy: r
          }
        });
      }
      get #tA() {
        return g.value;
      }
      async resetDefaultBackgroundColor() {
        await this.#tz.setState({
          active: true,
          color: undefined
        });
      }
      async setTransparentBackgroundColor() {
        await this.#tz.setState({
          active: true,
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          }
        });
      }
      get #tL() {
        return v.value;
      }
      async setJavaScriptEnabled(e) {
        await this.#tU.setState({
          active: true,
          javaScriptEnabled: e
        });
      }
    };
  })();
  class ap {
    #eJ;
    #tG;
    #t$ = new WeakMap();
    constructor(e, t, i) {
      this.#eJ = t;
      this.#tG = i;
      this.#t$.set(e, t);
    }
    get id() {
      return this.#eJ;
    }
    get source() {
      return this.#tG;
    }
    getIdForFrame(e) {
      return this.#t$.get(e);
    }
    setIdForFrame(e, t) {
      this.#t$.set(e, t);
    }
  }
  class af {
    id;
    name;
    constructor(e, t) {
      this.id = e;
      this.name = t;
    }
  }
  class am {
    #ts;
    #tX;
    #eJ;
    #e$ = false;
    #tQ = this.#tJ.bind(this);
    #tY = new Set();
    devices = [];
    constructor(e, t, i) {
      this.#ts = e;
      this.#tX = t;
      this.#eJ = i.id;
      this.#ts.on("DeviceAccess.deviceRequestPrompted", this.#tQ);
      this.#ts.on("Target.detachedFromTarget", () => {
        this.#ts = null;
      });
      this.#tJ(i);
    }
    #tJ(e) {
      if (e.id === this.#eJ) {
        for (let t of e.devices) {
          if (this.devices.some(e => e.id === t.id)) {
            continue;
          }
          let e = new af(t.id, t.name);
          this.devices.push(e);
          for (let t of this.#tY) {
            if (t.filter(e)) {
              t.promise.resolve(e);
            }
          }
        }
      }
    }
    async waitForDevice(e, t = {}) {
      for (let t of this.devices) {
        if (e(t)) {
          return t;
        }
      }
      let {
        timeout: i = this.#tX.timeout()
      } = t;
      let r = ir.create({
        message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${i}ms exceeded`,
        timeout: i
      });
      if (t.signal) {
        t.signal.addEventListener("abort", () => {
          r.reject(t.signal?.reason);
        }, {
          once: true
        });
      }
      let a = {
        filter: e,
        promise: r
      };
      this.#tY.add(a);
      try {
        return await r.valueOrThrow();
      } finally {
        this.#tY.delete(a);
      }
    }
    async select(e) {
      tk(this.#ts !== null, "Cannot select device through detached session!");
      tk(this.devices.includes(e), "Cannot select unknown device!");
      tk(!this.#e$, "Cannot select DeviceRequestPrompt which is already handled!");
      this.#ts.off("DeviceAccess.deviceRequestPrompted", this.#tQ);
      this.#e$ = true;
      return await this.#ts.send("DeviceAccess.selectPrompt", {
        id: this.#eJ,
        deviceId: e.id
      });
    }
    async cancel() {
      tk(this.#ts !== null, "Cannot cancel prompt through detached session!");
      tk(!this.#e$, "Cannot cancel DeviceRequestPrompt which is already handled!");
      this.#ts.off("DeviceAccess.deviceRequestPrompted", this.#tQ);
      this.#e$ = true;
      return await this.#ts.send("DeviceAccess.cancelPrompt", {
        id: this.#eJ
      });
    }
  }
  class ay {
    #ts;
    #tX;
    #tZ = new Set();
    constructor(e, t) {
      this.#ts = e;
      this.#tX = t;
      this.#ts.on("DeviceAccess.deviceRequestPrompted", e => {
        this.#t0(e);
      });
      this.#ts.on("Target.detachedFromTarget", () => {
        this.#ts = null;
      });
    }
    async waitForDevicePrompt(e = {}) {
      let t;
      tk(this.#ts !== null, "Cannot wait for device prompt through detached session!");
      if (this.#tZ.size === 0) {
        t = this.#ts.send("DeviceAccess.enable");
      }
      let {
        timeout: i = this.#tX.timeout()
      } = e;
      let r = ir.create({
        message: `Waiting for \`DeviceRequestPrompt\` failed: ${i}ms exceeded`,
        timeout: i
      });
      if (e.signal) {
        e.signal.addEventListener("abort", () => {
          r.reject(e.signal?.reason);
        }, {
          once: true
        });
      }
      this.#tZ.add(r);
      try {
        let [e] = await Promise.all([r.valueOrThrow(), t]);
        return e;
      } finally {
        this.#tZ.delete(r);
      }
    }
    #t0(e) {
      if (!this.#tZ.size) {
        return;
      }
      tk(this.#ts !== null);
      let t = new am(this.#ts, this.#tX, e);
      for (let e of this.#tZ) {
        e.resolve(t);
      }
      this.#tZ.clear();
    }
  }
  function ag(e) {
    let t;
    let i;
    if (e.exception) {
      if ((e.exception.type !== "object" || e.exception.subtype !== "error") && !e.exception.objectId) {
        return ab(e.exception);
      }
      {
        let r = aw(e);
        t = r.name;
        i = r.message;
      }
    } else {
      t = "Error";
      i = e.text;
    }
    let r = i.split("\n").length;
    let a = Error(i);
    a.name = t;
    let n = a.stack.split("\n");
    let s = n.splice(0, r);
    n.shift();
    if (e.stackTrace && n.length < Error.stackTraceLimit) {
      for (let t of e.stackTrace.callFrames.reverse()) {
        if (tj.isPuppeteerURL(t.url) && t.url !== tj.INTERNAL_URL) {
          let e = tj.parse(t.url);
          n.unshift(`    at ${t.functionName || e.functionName} (${e.functionName} at ${e.siteString}, <anonymous>:${t.lineNumber}:${t.columnNumber})`);
        } else {
          n.push(`    at ${t.functionName || "<anonymous>"} (${t.url}:${t.lineNumber}:${t.columnNumber})`);
        }
        if (n.length >= Error.stackTraceLimit) {
          break;
        }
      }
    }
    a.stack = [...s, ...n].join("\n");
    return a;
  }
  let aw = e => {
    let t;
    let i = "";
    let r = e.exception?.description?.split("\n    at ") ?? [];
    let a = Math.min(e.stackTrace?.callFrames.length ?? 0, r.length - 1);
    r.splice(-a, a);
    if (e.exception?.className) {
      i = e.exception.className;
    }
    t = r.join("\n");
    if (i && t.startsWith(`${i}: `)) {
      t = t.slice(i.length + 2);
    }
    return {
      message: t,
      name: i
    };
  };
  function av(e) {
    let t;
    let i;
    if (e.exception) {
      if ((e.exception.type !== "object" || e.exception.subtype !== "error") && !e.exception.objectId) {
        return ab(e.exception);
      }
      {
        let r = aw(e);
        t = r.name;
        i = r.message;
      }
    } else {
      t = "Error";
      i = e.text;
    }
    let r = Error(i);
    r.name = t;
    let a = r.message.split("\n").length;
    let n = r.stack.split("\n").splice(0, a);
    let s = [];
    if (e.stackTrace) {
      for (let t of e.stackTrace.callFrames) {
        s.push(`    at ${t.functionName || "<anonymous>"} (${t.url}:${t.lineNumber + 1}:${t.columnNumber + 1})`);
        if (s.length >= Error.stackTraceLimit) {
          break;
        }
      }
    }
    r.stack = [...n, ...s].join("\n");
    return r;
  }
  function ab(e) {
    tk(!e.objectId, "Cannot extract value when objectId is given");
    if (e.unserializableValue) {
      if (e.type === "bigint") {
        return BigInt(e.unserializableValue.replace("n", ""));
      }
      switch (e.unserializableValue) {
        case "-0":
          return -0;
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        default:
          throw Error("Unsupported unserializable value: " + e.unserializableValue);
      }
    }
    return e.value;
  }
  function ak(e, t, i) {
    if (!globalThis[t]) {
      Object.assign(globalThis, {
        [t](...r) {
          let a = globalThis[t];
          a.args ??= new Map();
          a.callbacks ??= new Map();
          let n = (a.lastSeq ?? 0) + 1;
          a.lastSeq = n;
          a.args.set(n, r);
          globalThis[i + t](JSON.stringify({
            type: e,
            name: t,
            seq: n,
            args: r,
            isTrivial: !r.some(e => e instanceof Node)
          }));
          return new Promise((e, t) => {
            a.callbacks.set(n, {
              resolve(t) {
                a.args.delete(n);
                e(t);
              },
              reject(e) {
                a.args.delete(n);
                t(e);
              }
            });
          });
        }
      });
    }
  }
  let aS = "puppeteer_";
  function aT(e, t) {
    return tQ(ak, e, t, aS);
  }
  class aC extends re {
    #t = false;
    #t1;
    #ey;
    constructor(e, t) {
      super();
      this.#ey = e;
      this.#t1 = t;
    }
    get disposed() {
      return this.#t;
    }
    get realm() {
      return this.#ey;
    }
    get client() {
      return this.realm.environment.client;
    }
    async jsonValue() {
      if (!this.#t1.objectId) {
        return ab(this.#t1);
      }
      let e = await this.evaluate(e => e);
      if (e === undefined) {
        throw Error("Could not serialize referenced object");
      }
      return e;
    }
    asElement() {
      return null;
    }
    async dispose() {
      if (!this.#t) {
        this.#t = true;
        await aM(this.client, this.#t1);
      }
    }
    toString() {
      if (this.#t1.objectId) {
        return "JSHandle@" + (this.#t1.subtype || this.#t1.type);
      } else {
        return "JSHandle:" + ab(this.#t1);
      }
    }
    get id() {
      return this.#t1.objectId;
    }
    remoteObject() {
      return this.#t1;
    }
    async getProperties() {
      let e = await this.client.send("Runtime.getProperties", {
        objectId: this.#t1.objectId,
        ownProperties: true
      });
      let t = new Map();
      for (let i of e.result) {
        if (i.enumerable && i.value) {
          t.set(i.name, this.#ey.createCdpHandle(i.value));
        }
      }
      return t;
    }
  }
  async function aM(e, t) {
    if (t.objectId) {
      await e.send("Runtime.releaseObject", {
        objectId: t.objectId
      }).catch(e => {
        tq(e);
      });
    }
  }
  function aE(e, t, i) {
    var r = arguments.length > 2;
    var a = 0;
    for (; a < t.length; a++) {
      i = r ? t[a].call(e, i) : t[a].call(e);
    }
    if (r) {
      return i;
    } else {
      return undefined;
    }
  }
  function aP(e, t, i, r, a, n) {
    function s(e) {
      if (e !== undefined && typeof e != "function") {
        throw TypeError("Function expected");
      }
      return e;
    }
    var o;
    var l = r.kind;
    var c = l === "getter" ? "get" : l === "setter" ? "set" : "value";
    var d = !t && e ? r.static ? e : e.prototype : null;
    var u = t || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {});
    var h = false;
    var p = i.length - 1;
    for (; p >= 0; p--) {
      var f = {};
      for (var m in r) {
        f[m] = m === "access" ? {} : r[m];
      }
      for (var m in r.access) {
        f.access[m] = r.access[m];
      }
      f.addInitializer = function (e) {
        if (h) {
          throw TypeError("Cannot add initializers after decoration has completed");
        }
        n.push(s(e || null));
      };
      var y = i[p](l === "accessor" ? {
        get: u.get,
        set: u.set
      } : u[c], f);
      if (l === "accessor") {
        if (y === undefined) {
          continue;
        }
        if (y === null || typeof y != "object") {
          throw TypeError("Object expected");
        }
        if (o = s(y.get)) {
          u.get = o;
        }
        if (o = s(y.set)) {
          u.set = o;
        }
        if (o = s(y.init)) {
          a.unshift(o);
        }
      } else if (o = s(y)) {
        if (l === "field") {
          a.unshift(o);
        } else {
          u[c] = o;
        }
      }
    }
    if (d) {
      Object.defineProperty(d, r.name, u);
    }
    h = true;
  }
  let aI = new Set(["StaticText", "InlineTextBox"]);
  let ax = (() => {
    let e;
    let t;
    let i;
    let r;
    let a = rs;
    let n = [];
    return class extends a {
      static {
        let s = typeof Symbol == "function" && Symbol.metadata ? Object.create(a[Symbol.metadata] ?? null) : undefined;
        e = [i4()];
        t = [i4(), rn];
        i = [i4(), rn];
        r = [i4()];
        aP(this, null, e, {
          kind: "method",
          name: "contentFrame",
          static: false,
          private: false,
          access: {
            has: e => "contentFrame" in e,
            get: e => e.contentFrame
          },
          metadata: s
        }, null, n);
        aP(this, null, t, {
          kind: "method",
          name: "scrollIntoView",
          static: false,
          private: false,
          access: {
            has: e => "scrollIntoView" in e,
            get: e => e.scrollIntoView
          },
          metadata: s
        }, null, n);
        aP(this, null, i, {
          kind: "method",
          name: "uploadFile",
          static: false,
          private: false,
          access: {
            has: e => "uploadFile" in e,
            get: e => e.uploadFile
          },
          metadata: s
        }, null, n);
        aP(this, null, r, {
          kind: "method",
          name: "autofill",
          static: false,
          private: false,
          access: {
            has: e => "autofill" in e,
            get: e => e.autofill
          },
          metadata: s
        }, null, n);
        if (s) {
          Object.defineProperty(this, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: s
          });
        }
      }
      #t5 = aE(this, n);
      constructor(e, t) {
        super(new aC(e, t));
      }
      get realm() {
        return this.handle.realm;
      }
      get client() {
        return this.handle.client;
      }
      remoteObject() {
        return this.handle.remoteObject();
      }
      get #t3() {
        return this.frame._frameManager;
      }
      get frame() {
        return this.realm.environment;
      }
      async contentFrame() {
        let e = await this.client.send("DOM.describeNode", {
          objectId: this.id
        });
        if (typeof e.node.frameId != "string") {
          return null;
        } else {
          return this.#t3.frame(e.node.frameId);
        }
      }
      async scrollIntoView() {
        await this.assertConnectedElement();
        try {
          await this.client.send("DOM.scrollIntoViewIfNeeded", {
            objectId: this.id
          });
        } catch (e) {
          tq(e);
          await super.scrollIntoView();
        }
      }
      async uploadFile(...e) {
        let t = await this.evaluate(e => e.multiple);
        tk(e.length <= 1 || t, "Multiple file uploads only work with <input type=file multiple>");
        let i = tv.value.path;
        if (i) {
          e = e.map(e => i.win32.isAbsolute(e) || i.posix.isAbsolute(e) ? e : i.resolve(e));
        }
        if (e.length === 0) {
          await this.evaluate(e => {
            e.files = new DataTransfer().files;
            e.dispatchEvent(new Event("input", {
              bubbles: true,
              composed: true
            }));
            e.dispatchEvent(new Event("change", {
              bubbles: true
            }));
          });
          return;
        }
        let {
          node: {
            backendNodeId: r
          }
        } = await this.client.send("DOM.describeNode", {
          objectId: this.id
        });
        await this.client.send("DOM.setFileInputFiles", {
          objectId: this.id,
          files: e,
          backendNodeId: r
        });
      }
      async autofill(e) {
        let t = (await this.client.send("DOM.describeNode", {
          objectId: this.handle.id
        })).node.backendNodeId;
        let i = this.frame._id;
        await this.client.send("Autofill.trigger", {
          fieldId: t,
          frameId: i,
          card: e.creditCard
        });
      }
      async *queryAXTree(e, t) {
        let {
          nodes: i
        } = await this.client.send("Accessibility.queryAXTree", {
          objectId: this.id,
          accessibleName: e,
          role: t
        });
        let r = i.filter(e => !e.ignored && !!e.role && !aI.has(e.role.value));
        return yield* iI.map(r, e => this.realm.adoptBackendNode(e.backendDOMNodeId));
      }
      async backendNodeId() {
        if (this.#t5) {
          return this.#t5;
        }
        let {
          node: e
        } = await this.client.send("DOM.describeNode", {
          objectId: this.handle.id
        });
        this.#t5 = e.backendNodeId;
        return this.#t5;
      }
    };
  })();
  function aF(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  w = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function aA(e) {
    function t(t) {
      e.error = e.hasError ? new w(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  let aL = new r3("__ariaQuerySelector", iL.queryOne, "");
  let aO = new r3("__ariaQuerySelectorAll", async (e, t) => {
    let i = iL.queryAll(e, t);
    return await e.realm.evaluateHandle((...e) => e, ...(await iI.collect(i)));
  }, "");
  class aR extends ty {
    #ts;
    #ey;
    #eJ;
    #eD;
    #t4 = new tp();
    constructor(e, t, i) {
      super();
      this.#ts = e;
      this.#ey = i;
      this.#eJ = t.id;
      if (t.name) {
        this.#eD = t.name;
      }
      let r = this.#t4.use(new ty(this.#ts));
      r.on("Runtime.bindingCalled", this.#t6.bind(this));
      r.on("Runtime.executionContextDestroyed", async e => {
        if (e.executionContextId === this.#eJ) {
          this[tu]();
        }
      });
      r.on("Runtime.executionContextsCleared", async () => {
        this[tu]();
      });
      r.on("Runtime.consoleAPICalled", this.#t2.bind(this));
      r.on(T.Disconnected, () => {
        this[tu]();
      });
    }
    #t7 = new Map();
    #b = new ia();
    async #t8(e) {
      let t = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        if (this.#t7.has(e.name)) {
          return;
        }
        aF(t, await this.#b.acquire(), false);
        try {
          await this.#ts.send("Runtime.addBinding", this.#eD ? {
            name: aS + e.name,
            executionContextName: this.#eD
          } : {
            name: aS + e.name,
            executionContextId: this.#eJ
          });
          await this.evaluate(ak, "internal", e.name, aS);
          this.#t7.set(e.name, e);
        } catch (e) {
          if (e instanceof Error && (e.message.includes("Execution context was destroyed") || e.message.includes("Cannot find context with specified id"))) {
            return;
          }
          tq(e);
        }
      } catch (e) {
        t.error = e;
        t.hasError = true;
      } finally {
        aA(t);
      }
    }
    async #t6(e) {
      let t;
      if (e.executionContextId !== this.#eJ) {
        return;
      }
      try {
        t = JSON.parse(e.payload);
      } catch {
        return;
      }
      let {
        type: i,
        name: r,
        seq: a,
        args: n,
        isTrivial: s
      } = t;
      if (i !== "internal" || !this.#t7.has(r)) {
        this.emit("bindingcalled", e);
        return;
      }
      try {
        let e = this.#t7.get(r);
        await e?.run(this, a, n, s);
      } catch (e) {
        tq(e);
      }
    }
    get id() {
      return this.#eJ;
    }
    #t2(e) {
      if (e.executionContextId === this.#eJ) {
        this.emit("consoleapicalled", e);
      }
    }
    #t9 = false;
    #ie;
    get puppeteerUtil() {
      let e = Promise.resolve();
      if (!this.#t9) {
        e = Promise.all([this.#it(aL), this.#it(aO)]);
        this.#t9 = true;
      }
      iD.inject(t => {
        if (this.#ie) {
          this.#ie.then(e => {
            e.dispose();
          });
        }
        this.#ie = e.then(() => this.evaluateHandle(t));
      }, !this.#ie);
      return this.#ie;
    }
    async #it(e) {
      try {
        await this.#t8(e);
      } catch (e) {
        tq(e);
      }
    }
    async evaluate(e, ...t) {
      return await this.#ii(true, e, ...t);
    }
    async evaluateHandle(e, ...t) {
      return await this.#ii(false, e, ...t);
    }
    async #ii(e, t, ...i) {
      let r;
      let a = t3(tz(t)?.toString() ?? tj.INTERNAL_URL);
      if (tU(t)) {
        let i = this.#eJ;
        let r = t5.test(t) ? t : `${t}
${a}
`;
        let {
          exceptionDetails: n,
          result: s
        } = await this.#ts.send("Runtime.evaluate", {
          expression: r,
          contextId: i,
          returnByValue: e,
          awaitPromise: true,
          userGesture: true
        }).catch(aD);
        if (n) {
          throw ag(n);
        }
        if (e) {
          return ab(s);
        } else {
          return this.#ey.createCdpHandle(s);
        }
      }
      let n = ig(t);
      let s = t5.test(n) ? n : `${n}
${a}
`;
      try {
        r = this.#ts.send("Runtime.callFunctionOn", {
          functionDeclaration: s,
          executionContextId: this.#eJ,
          arguments: i.some(e => e instanceof iC) ? await Promise.all(i.map(e => c(this, e))) : i.map(e => d(this, e)),
          returnByValue: e,
          awaitPromise: true,
          userGesture: true
        });
      } catch (e) {
        if (e instanceof TypeError && e.message.startsWith("Converting circular structure to JSON")) {
          e.message += " Recursive objects are not allowed.";
        }
        throw e;
      }
      let {
        exceptionDetails: o,
        result: l
      } = await r.catch(aD);
      if (o) {
        throw ag(o);
      }
      if (e) {
        return ab(l);
      }
      return this.#ey.createCdpHandle(l);
      async function c(e, t) {
        if (t instanceof iC) {
          t = await t.get(e);
        }
        return d(e, t);
      }
      function d(e, t) {
        if (typeof t == "bigint") {
          return {
            unserializableValue: `${t.toString()}n`
          };
        }
        if (Object.is(t, -0)) {
          return {
            unserializableValue: "-0"
          };
        }
        if (Object.is(t, Infinity)) {
          return {
            unserializableValue: "Infinity"
          };
        }
        if (Object.is(t, -Infinity)) {
          return {
            unserializableValue: "-Infinity"
          };
        }
        if (Object.is(t, NaN)) {
          return {
            unserializableValue: "NaN"
          };
        }
        let i = t && (t instanceof aC || t instanceof ax) ? t : null;
        if (i) {
          if (i.realm !== e.#ey) {
            throw Error("JSHandles can be evaluated only in the context they were created!");
          }
          if (i.disposed) {
            throw Error("JSHandle is disposed!");
          }
          if (i.remoteObject().unserializableValue) {
            return {
              unserializableValue: i.remoteObject().unserializableValue
            };
          } else if (i.remoteObject().objectId) {
            return {
              objectId: i.remoteObject().objectId
            };
          } else {
            return {
              value: i.remoteObject().value
            };
          }
        }
        return {
          value: t
        };
      }
    }
    [tu]() {
      this.#t4.dispose();
      this.emit("disposed", undefined);
    }
  }
  let aD = e => {
    if (e.message.includes("Object reference chain is too long") || e.message.includes("Object couldn't be returned by value")) {
      return {
        result: {
          type: "undefined"
        }
      };
    }
    if (e.message.endsWith("Cannot find context with specified id") || e.message.endsWith("Inspected target navigated or closed")) {
      throw Error("Execution context was destroyed, most likely because of a navigation.");
    }
    throw e;
  };
  (v = x ||= {}).FrameAttached = Symbol("FrameManager.FrameAttached");
  v.FrameNavigated = Symbol("FrameManager.FrameNavigated");
  v.FrameDetached = Symbol("FrameManager.FrameDetached");
  v.FrameSwapped = Symbol("FrameManager.FrameSwapped");
  v.LifecycleEvent = Symbol("FrameManager.LifecycleEvent");
  v.FrameNavigatedWithinDocument = Symbol("FrameManager.FrameNavigatedWithinDocument");
  v.ConsoleApiCalled = Symbol("FrameManager.ConsoleApiCalled");
  v.BindingCalled = Symbol("FrameManager.BindingCalled");
  class a_ extends r$ {
    #ir;
    #n = new ty();
    #ia;
    constructor(e, t) {
      super(t);
      this.#ia = e;
    }
    get environment() {
      return this.#ia;
    }
    get client() {
      return this.#ia.client;
    }
    get emitter() {
      return this.#n;
    }
    setContext(e) {
      this.#ir?.[tu]();
      e.once("disposed", this.#is.bind(this));
      e.on("consoleapicalled", this.#io.bind(this));
      e.on("bindingcalled", this.#il.bind(this));
      this.#ir = e;
      this.#n.emit("context", e);
      this.taskManager.rerunAll();
    }
    #is() {
      this.#ir = undefined;
      if ("clearDocumentHandle" in this.#ia) {
        this.#ia.clearDocumentHandle();
      }
    }
    #io(e) {
      this.#n.emit("consoleapicalled", e);
    }
    #il(e) {
      this.#n.emit("bindingcalled", e);
    }
    hasContext() {
      return !!this.#ir;
    }
    get context() {
      return this.#ir;
    }
    #ic() {
      if (this.disposed) {
        throw Error(`Execution context is not available in detached frame or worker "${this.environment.url()}" (are you trying to evaluate?)`);
      }
      return this.#ir;
    }
    async #id() {
      let e = Error("Execution context was destroyed");
      return await eG(t8(this.#n, "context").pipe(tl(t8(this.#n, "disposed").pipe(e$(() => {
        throw e;
      })), t0(this.timeoutSettings.timeout()))));
    }
    async evaluateHandle(e, ...t) {
      e = tW(this.evaluateHandle.name, e);
      let i = this.#ic();
      i ||= await this.#id();
      return await i.evaluateHandle(e, ...t);
    }
    async evaluate(e, ...t) {
      e = tW(this.evaluate.name, e);
      let i = this.#ic();
      i ||= await this.#id();
      return await i.evaluate(e, ...t);
    }
    async adoptBackendNode(e) {
      let t = this.#ic();
      t ||= await this.#id();
      let {
        object: i
      } = await this.client.send("DOM.resolveNode", {
        backendNodeId: e,
        executionContextId: t.id
      });
      return this.createCdpHandle(i);
    }
    async adoptHandle(e) {
      if (e.realm === this) {
        return await e.evaluateHandle(e => e);
      }
      let t = await this.client.send("DOM.describeNode", {
        objectId: e.id
      });
      return await this.adoptBackendNode(t.node.backendNodeId);
    }
    async transferHandle(e) {
      if (e.realm === this || e.remoteObject().objectId === undefined) {
        return e;
      }
      let t = await this.client.send("DOM.describeNode", {
        objectId: e.remoteObject().objectId
      });
      let i = await this.adoptBackendNode(t.node.backendNodeId);
      await e.dispose();
      return i;
    }
    createCdpHandle(e) {
      if (e.subtype === "node") {
        return new ax(this, e);
      } else {
        return new aC(this, e);
      }
    }
    [tu]() {
      this.#ir?.[tu]();
      this.#n.emit("disposed", undefined);
      super[tu]();
      this.#n.removeAllListeners();
    }
  }
  let aN = Symbol("mainWorld");
  let aK = Symbol("puppeteerWorld");
  let aq = new Map([["load", "load"], ["domcontentloaded", "DOMContentLoaded"], ["networkidle0", "networkIdle"], ["networkidle2", "networkAlmostIdle"]]);
  class aH {
    #iu;
    #eU;
    #ek;
    #ih = null;
    #td = new tp();
    #ip;
    #im;
    #iy = ir.create();
    #ig = ir.create();
    #iw = ir.create();
    #iv;
    #ib;
    #ik;
    constructor(e, t, i, r, a) {
      if (Array.isArray(i)) {
        i = i.slice();
      } else if (typeof i == "string") {
        i = [i];
      }
      this.#ip = t._loaderId;
      this.#iu = i.map(e => {
        let t = aq.get(e);
        tk(t, "Unknown value for options.waitUntil: " + e);
        return t;
      });
      a?.addEventListener("abort", () => {
        this.#im.reject(a.reason);
      });
      this.#eU = t;
      this.#ek = r;
      this.#td.use(new ty(t._frameManager)).on(x.LifecycleEvent, this.#iS.bind(this));
      let n = this.#td.use(new ty(t));
      n.on(M.FrameNavigatedWithinDocument, this.#iT.bind(this));
      n.on(M.FrameNavigated, this.#iC.bind(this));
      n.on(M.FrameSwapped, this.#iM.bind(this));
      n.on(M.FrameSwappedByActivation, this.#iM.bind(this));
      n.on(M.FrameDetached, this.#iE.bind(this));
      let s = this.#td.use(new ty(e));
      s.on(I.Request, this.#iP.bind(this));
      s.on(I.Response, this.#iI.bind(this));
      s.on(I.RequestFailed, this.#ix.bind(this));
      this.#im = ir.create({
        timeout: this.#ek,
        message: `Navigation timeout of ${this.#ek} ms exceeded`
      });
      this.#iS();
    }
    #iP(e) {
      if (e.frame() === this.#eU && e.isNavigationRequest()) {
        this.#ih = e;
        this.#ik?.resolve();
        this.#ik = ir.create();
        if (e.response() !== null) {
          this.#ik?.resolve();
        }
      }
    }
    #ix(e) {
      if (this.#ih?.id === e.id) {
        this.#ik?.resolve();
      }
    }
    #iI(e) {
      if (this.#ih?.id === e.request().id) {
        this.#ik?.resolve();
      }
    }
    #iE(e) {
      if (this.#eU === e) {
        this.#im.resolve(Error("Navigating frame was detached"));
        return;
      }
      this.#iS();
    }
    async navigationResponse() {
      await this.#ik?.valueOrThrow();
      if (this.#ih) {
        return this.#ih.response();
      } else {
        return null;
      }
    }
    sameDocumentNavigationPromise() {
      return this.#iy.valueOrThrow();
    }
    newDocumentNavigationPromise() {
      return this.#iw.valueOrThrow();
    }
    lifecyclePromise() {
      return this.#ig.valueOrThrow();
    }
    terminationPromise() {
      return this.#im.valueOrThrow();
    }
    #iT() {
      this.#iv = true;
      this.#iS();
    }
    #iC(e) {
      if (e === "BackForwardCacheRestore") {
        return this.#iM();
      }
      this.#iS();
    }
    #iM() {
      this.#ib = true;
      this.#iS();
    }
    #iS() {
      if (function e(t, i) {
        for (let e of i) {
          if (!t._lifecycleEvents.has(e)) {
            return false;
          }
        }
        for (let r of t.childFrames()) {
          if (r._hasStartedLoading && !e(r, i)) {
            return false;
          }
        }
        return true;
      }(this.#eU, this.#iu)) {
        this.#ig.resolve();
        if (this.#iv) {
          this.#iy.resolve(undefined);
        }
        if (this.#ib || this.#eU._loaderId !== this.#ip) {
          this.#iw.resolve(undefined);
        }
      }
    }
    dispose() {
      this.#td.dispose();
      this.#im.resolve(Error("LifecycleWatcher disposed"));
    }
  }
  function aB(e, t, i) {
    var r = arguments.length > 2;
    var a = 0;
    for (; a < t.length; a++) {
      i = r ? t[a].call(e, i) : t[a].call(e);
    }
    if (r) {
      return i;
    } else {
      return undefined;
    }
  }
  function aj(e, t, i, r, a, n) {
    function s(e) {
      if (e !== undefined && typeof e != "function") {
        throw TypeError("Function expected");
      }
      return e;
    }
    var o;
    var l = r.kind;
    var c = l === "getter" ? "get" : l === "setter" ? "set" : "value";
    var d = !t && e ? r.static ? e : e.prototype : null;
    var u = t || (d ? Object.getOwnPropertyDescriptor(d, r.name) : {});
    var h = false;
    var p = i.length - 1;
    for (; p >= 0; p--) {
      var f = {};
      for (var m in r) {
        f[m] = m === "access" ? {} : r[m];
      }
      for (var m in r.access) {
        f.access[m] = r.access[m];
      }
      f.addInitializer = function (e) {
        if (h) {
          throw TypeError("Cannot add initializers after decoration has completed");
        }
        n.push(s(e || null));
      };
      var y = i[p](l === "accessor" ? {
        get: u.get,
        set: u.set
      } : u[c], f);
      if (l === "accessor") {
        if (y === undefined) {
          continue;
        }
        if (y === null || typeof y != "object") {
          throw TypeError("Object expected");
        }
        if (o = s(y.get)) {
          u.get = o;
        }
        if (o = s(y.set)) {
          u.set = o;
        }
        if (o = s(y.init)) {
          a.unshift(o);
        }
      } else if (o = s(y)) {
        if (l === "field") {
          a.unshift(o);
        } else {
          u[c] = o;
        }
      }
    }
    if (d) {
      Object.defineProperty(d, r.name, u);
    }
    h = true;
  }
  let aW = (() => {
    let e;
    let t;
    let i;
    let r;
    let a;
    let n;
    let s;
    let o = rS;
    let l = [];
    return class extends o {
      static {
        let c = typeof Symbol == "function" && Symbol.metadata ? Object.create(o[Symbol.metadata] ?? null) : undefined;
        aj(this, null, e, {
          kind: "method",
          name: "goto",
          static: false,
          private: false,
          access: {
            has: e => "goto" in e,
            get: e => e.goto
          },
          metadata: c
        }, null, l);
        aj(this, null, t, {
          kind: "method",
          name: "waitForNavigation",
          static: false,
          private: false,
          access: {
            has: e => "waitForNavigation" in e,
            get: e => e.waitForNavigation
          },
          metadata: c
        }, null, l);
        aj(this, null, i, {
          kind: "method",
          name: "setContent",
          static: false,
          private: false,
          access: {
            has: e => "setContent" in e,
            get: e => e.setContent
          },
          metadata: c
        }, null, l);
        aj(this, null, r, {
          kind: "method",
          name: "addPreloadScript",
          static: false,
          private: false,
          access: {
            has: e => "addPreloadScript" in e,
            get: e => e.addPreloadScript
          },
          metadata: c
        }, null, l);
        aj(this, null, a, {
          kind: "method",
          name: "addExposedFunctionBinding",
          static: false,
          private: false,
          access: {
            has: e => "addExposedFunctionBinding" in e,
            get: e => e.addExposedFunctionBinding
          },
          metadata: c
        }, null, l);
        aj(this, null, n, {
          kind: "method",
          name: "removeExposedFunctionBinding",
          static: false,
          private: false,
          access: {
            has: e => "removeExposedFunctionBinding" in e,
            get: e => e.removeExposedFunctionBinding
          },
          metadata: c
        }, null, l);
        aj(this, null, s, {
          kind: "method",
          name: "waitForDevicePrompt",
          static: false,
          private: false,
          access: {
            has: e => "waitForDevicePrompt" in e,
            get: e => e.waitForDevicePrompt
          },
          metadata: c
        }, null, l);
        if (c) {
          Object.defineProperty(this, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: c
          });
        }
      }
      #eI = (aB(this, l), "");
      #e7 = false;
      #ts;
      _frameManager;
      _loaderId = "";
      _lifecycleEvents = new Set();
      _id;
      _parentId;
      accessibility;
      worlds;
      constructor(e, t, i, r) {
        super();
        this._frameManager = e;
        this.#eI = "";
        this._id = t;
        this._parentId = i;
        this.#e7 = false;
        this.#ts = r;
        this._loaderId = "";
        this.worlds = {
          [aN]: new a_(this, this._frameManager.timeoutSettings),
          [aK]: new a_(this, this._frameManager.timeoutSettings)
        };
        this.accessibility = new rZ(this.worlds[aN], t);
        this.on(M.FrameSwappedByActivation, () => {
          this._onLoadingStarted();
          this._onLoadingStopped();
        });
        this.worlds[aN].emitter.on("consoleapicalled", this.#iF.bind(this));
        this.worlds[aN].emitter.on("bindingcalled", this.#iA.bind(this));
      }
      #iF(e) {
        this._frameManager.emit(x.ConsoleApiCalled, [this.worlds[aN], e]);
      }
      #iA(e) {
        this._frameManager.emit(x.BindingCalled, [this.worlds[aN], e]);
      }
      _client() {
        return this.#ts;
      }
      updateId(e) {
        this._id = e;
      }
      updateClient(e) {
        this.#ts = e;
      }
      page() {
        return this._frameManager.page();
      }
      async goto(e, t = {}) {
        let {
          referer: i = this._frameManager.networkManager.extraHTTPHeaders().referer,
          referrerPolicy: r = this._frameManager.networkManager.extraHTTPHeaders()["referer-policy"],
          waitUntil: a = ["load"],
          timeout: n = this._frameManager.timeoutSettings.navigationTimeout()
        } = t;
        let s = false;
        let o = new aH(this._frameManager.networkManager, this, a, n);
        let l = await ir.race([c(this.#ts, e, i, r, this._id), o.terminationPromise()]);
        l ||= await ir.race([o.terminationPromise(), s ? o.newDocumentNavigationPromise() : o.sameDocumentNavigationPromise()]);
        try {
          if (l) {
            throw l;
          }
          return await o.navigationResponse();
        } finally {
          o.dispose();
        }
        async function c(e, t, i, r, a) {
          try {
            let n = await e.send("Page.navigate", {
              url: t,
              referrer: i,
              frameId: a,
              referrerPolicy: r
            });
            s = !!n.loaderId;
            if (n.errorText === "net::ERR_HTTP_RESPONSE_CODE_FAILURE") {
              return null;
            }
            if (n.errorText) {
              return Error(`${n.errorText} at ${t}`);
            } else {
              return null;
            }
          } catch (e) {
            if (id(e)) {
              return e;
            }
            throw e;
          }
        }
      }
      async waitForNavigation(e = {}) {
        let {
          waitUntil: t = ["load"],
          timeout: i = this._frameManager.timeoutSettings.navigationTimeout(),
          signal: r
        } = e;
        let a = new aH(this._frameManager.networkManager, this, t, i, r);
        let n = await ir.race([a.terminationPromise(), ...(e.ignoreSameDocumentNavigation ? [] : [a.sameDocumentNavigationPromise()]), a.newDocumentNavigationPromise()]);
        try {
          if (n) {
            throw n;
          }
          let e = await ir.race([a.terminationPromise(), a.navigationResponse()]);
          if (e instanceof Error) {
            throw n;
          }
          return e || null;
        } finally {
          a.dispose();
        }
      }
      get client() {
        return this.#ts;
      }
      mainRealm() {
        return this.worlds[aN];
      }
      isolatedRealm() {
        return this.worlds[aK];
      }
      async setContent(e, t = {}) {
        let {
          waitUntil: i = ["load"],
          timeout: r = this._frameManager.timeoutSettings.navigationTimeout()
        } = t;
        await this.setFrameContent(e);
        let a = new aH(this._frameManager.networkManager, this, i, r);
        let n = await ir.race([a.terminationPromise(), a.lifecyclePromise()]);
        a.dispose();
        if (n) {
          throw n;
        }
      }
      url() {
        return this.#eI;
      }
      parentFrame() {
        return this._frameManager._frameTree.parentFrame(this._id) || null;
      }
      childFrames() {
        return this._frameManager._frameTree.childFrames(this._id);
      }
      #iL() {
        return this._frameManager._deviceRequestPromptManager(this.#ts);
      }
      async addPreloadScript(e) {
        let t = this.parentFrame();
        if (t && this.#ts === t.client || e.getIdForFrame(this)) {
          return;
        }
        let {
          identifier: i
        } = await this.#ts.send("Page.addScriptToEvaluateOnNewDocument", {
          source: e.source
        });
        e.setIdForFrame(this, i);
      }
      async addExposedFunctionBinding(e) {
        if (this === this._frameManager.mainFrame() || this._hasStartedLoading) {
          await Promise.all([this.#ts.send("Runtime.addBinding", {
            name: aS + e.name
          }), this.evaluate(e.initSource).catch(tq)]);
        }
      }
      async removeExposedFunctionBinding(e) {
        if (this === this._frameManager.mainFrame() || this._hasStartedLoading) {
          await Promise.all([this.#ts.send("Runtime.removeBinding", {
            name: aS + e.name
          }), this.evaluate(e => {
            globalThis[e] = undefined;
          }, e.name).catch(tq)]);
        }
      }
      async waitForDevicePrompt(e = {}) {
        return await this.#iL().waitForDevicePrompt(e);
      }
      _navigated(e) {
        this._name = e.name;
        this.#eI = `${e.url}${e.urlFragment || ""}`;
      }
      _navigatedWithinDocument(e) {
        this.#eI = e;
      }
      _onLifecycleEvent(e, t) {
        if (t === "init") {
          this._loaderId = e;
          this._lifecycleEvents.clear();
        }
        this._lifecycleEvents.add(t);
      }
      _onLoadingStopped() {
        this._lifecycleEvents.add("DOMContentLoaded");
        this._lifecycleEvents.add("load");
      }
      _onLoadingStarted() {
        this._hasStartedLoading = true;
      }
      get detached() {
        return this.#e7;
      }
      [(e = [rk], t = [rk], i = [rk], r = [rk], a = [rk], n = [rk], s = [rk], tu)]() {
        if (!this.#e7) {
          this.#e7 = true;
          this.worlds[aN][tu]();
          this.worlds[aK][tu]();
        }
      }
      exposeFunction() {
        throw new t_();
      }
      async frameElement() {
        let e = this.parentFrame();
        if (!e) {
          return null;
        }
        let {
          backendNodeId: t
        } = await e.client.send("DOM.getFrameOwner", {
          frameId: this._id
        });
        return await e.mainRealm().adoptBackendNode(t);
      }
    };
  })();
  class az {
    #iO = new Map();
    #iR = new Map();
    #iD = new Map();
    #i_;
    #iN = false;
    #iK = new Map();
    getMainFrame() {
      return this.#i_;
    }
    getById(e) {
      return this.#iO.get(e);
    }
    waitForFrame(e) {
      let t = this.getById(e);
      if (t) {
        return Promise.resolve(t);
      }
      let i = ir.create();
      (this.#iK.get(e) || new Set()).add(i);
      return i.valueOrThrow();
    }
    frames() {
      return Array.from(this.#iO.values());
    }
    addFrame(e) {
      this.#iO.set(e._id, e);
      if (e._parentId) {
        this.#iR.set(e._id, e._parentId);
        if (!this.#iD.has(e._parentId)) {
          this.#iD.set(e._parentId, new Set());
        }
        this.#iD.get(e._parentId).add(e._id);
      } else if (!this.#i_ || this.#iN) {
        this.#i_ = e;
        this.#iN = false;
      }
      this.#iK.get(e._id)?.forEach(t => t.resolve(e));
    }
    removeFrame(e) {
      this.#iO.delete(e._id);
      this.#iR.delete(e._id);
      if (e._parentId) {
        this.#iD.get(e._parentId)?.delete(e._id);
      } else {
        this.#iN = true;
      }
    }
    childFrames(e) {
      let t = this.#iD.get(e);
      if (t) {
        return Array.from(t).map(e => this.getById(e)).filter(e => e !== undefined);
      } else {
        return [];
      }
    }
    parentFrame(e) {
      let t = this.#iR.get(e);
      if (t) {
        return this.getById(t);
      } else {
        return undefined;
      }
    }
  }
  class aU extends rC {
    id;
    #ts;
    #iq;
    #eI;
    #iH;
    #iB;
    #ij = false;
    #iW;
    #iz = {};
    #eU;
    #iU;
    get client() {
      return this.#ts;
    }
    set client(e) {
      this.#ts = e;
    }
    constructor(e, t, i, r, a, n) {
      super();
      this.#ts = e;
      this.id = a.requestId;
      this.#iq = a.requestId === a.loaderId && a.type === "Document";
      this._interceptionId = i;
      this.#eI = a.request.url + (a.request.urlFragment ?? "");
      this.#iH = (a.type || "other").toLowerCase();
      this.#iB = a.request.method;
      this.#iW = a.request.postData;
      this.#ij = a.request.hasPostData ?? false;
      this.#eU = t;
      this._redirectChain = n;
      this.#iU = a.initiator;
      this.interception.enabled = r;
      for (let [s, o] of Object.entries(a.request.headers)) {
        this.#iz[s.toLowerCase()] = o;
      }
    }
    url() {
      return this.#eI;
    }
    resourceType() {
      return this.#iH;
    }
    method() {
      return this.#iB;
    }
    postData() {
      return this.#iW;
    }
    hasPostData() {
      return this.#ij;
    }
    async fetchPostData() {
      try {
        return (await this.#ts.send("Network.getRequestPostData", {
          requestId: this.id
        })).postData;
      } catch (e) {
        tq(e);
        return;
      }
    }
    headers() {
      return this.#iz;
    }
    response() {
      return this._response;
    }
    frame() {
      return this.#eU;
    }
    isNavigationRequest() {
      return this.#iq;
    }
    initiator() {
      return this.#iU;
    }
    redirectChain() {
      return this._redirectChain.slice();
    }
    failure() {
      if (this._failureText) {
        return {
          errorText: this._failureText
        };
      } else {
        return null;
      }
    }
    async _continue(e = {}) {
      let {
        url: t,
        method: i,
        postData: r,
        headers: a
      } = e;
      this.interception.handled = true;
      let n = r ? tC(new TextEncoder().encode(r)) : undefined;
      if (this._interceptionId === undefined) {
        throw Error("HTTPRequest is missing _interceptionId needed for Fetch.continueRequest");
      }
      await this.#ts.send("Fetch.continueRequest", {
        requestId: this._interceptionId,
        url: t,
        method: i,
        postData: n,
        headers: a ? rM(a) : undefined
      }).catch(e => {
        this.interception.handled = false;
        return rI(e);
      });
    }
    async _respond(e) {
      let t;
      this.interception.handled = true;
      if (e.body) {
        t = rC.getResponse(e.body);
      }
      let i = {};
      if (e.headers) {
        for (let t of Object.keys(e.headers)) {
          let r = e.headers[t];
          i[t.toLowerCase()] = Array.isArray(r) ? r.map(e => String(e)) : String(r);
        }
      }
      if (e.contentType) {
        i["content-type"] = e.contentType;
      }
      if (!!t?.contentLength && !("content-length" in i)) {
        i["content-length"] = String(t.contentLength);
      }
      let r = e.status || 200;
      if (this._interceptionId === undefined) {
        throw Error("HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest");
      }
      await this.#ts.send("Fetch.fulfillRequest", {
        requestId: this._interceptionId,
        responseCode: r,
        responsePhrase: rE[r],
        responseHeaders: rM(i),
        body: t?.base64
      }).catch(e => {
        this.interception.handled = false;
        return rI(e);
      });
    }
    async _abort(e) {
      this.interception.handled = true;
      if (this._interceptionId === undefined) {
        throw Error("HTTPRequest is missing _interceptionId needed for Fetch.failRequest");
      }
      await this.#ts.send("Fetch.failRequest", {
        requestId: this._interceptionId,
        errorReason: e || "Failed"
      }).catch(rI);
    }
  }
  class aV {
    #iV;
    #iG;
    #i$;
    #iX;
    #iQ;
    #iJ;
    constructor(e) {
      this.#iV = e.subjectName;
      this.#iG = e.issuer;
      this.#i$ = e.validFrom;
      this.#iX = e.validTo;
      this.#iQ = e.protocol;
      this.#iJ = e.sanList;
    }
    issuer() {
      return this.#iG;
    }
    validFrom() {
      return this.#i$;
    }
    validTo() {
      return this.#iX;
    }
    protocol() {
      return this.#iQ;
    }
    subjectName() {
      return this.#iV;
    }
    subjectAlternativeNames() {
      return this.#iJ;
    }
  }
  class aG extends rF {
    #iY;
    #iZ = null;
    #i0 = ir.create();
    #i1;
    #i5;
    #i3;
    #i4;
    #i6;
    #iz = {};
    #i2;
    #i7;
    constructor(e, t, i) {
      super();
      this.#iY = e;
      this.#i1 = {
        ip: t.remoteIPAddress,
        port: t.remotePort
      };
      this.#i3 = this.#i8(i) || t.statusText;
      this.#i4 = !!t.fromDiskCache;
      this.#i6 = !!t.fromServiceWorker;
      this.#i5 = i ? i.statusCode : t.status;
      for (let [r, a] of Object.entries(i ? i.headers : t.headers)) {
        this.#iz[r.toLowerCase()] = a;
      }
      this.#i2 = t.securityDetails ? new aV(t.securityDetails) : null;
      this.#i7 = t.timing || null;
    }
    #i8(e) {
      if (!e || !e.headersText) {
        return;
      }
      let t = e.headersText.split("\r", 1)[0];
      if (!t || t.length > 1000) {
        return;
      }
      let i = t.match(/[^ ]* [^ ]* (.*)/);
      if (!i) {
        return;
      }
      let r = i[1];
      if (r) {
        return r;
      }
    }
    _resolveBody(e) {
      if (e) {
        return this.#i0.reject(e);
      } else {
        return this.#i0.resolve();
      }
    }
    remoteAddress() {
      return this.#i1;
    }
    url() {
      return this.#iY.url();
    }
    status() {
      return this.#i5;
    }
    statusText() {
      return this.#i3;
    }
    headers() {
      return this.#iz;
    }
    securityDetails() {
      return this.#i2;
    }
    timing() {
      return this.#i7;
    }
    content() {
      this.#iZ ||= this.#i0.valueOrThrow().then(async () => {
        try {
          let e = await this.#iY.client.send("Network.getResponseBody", {
            requestId: this.#iY.id
          });
          return tT(e.body, e.base64Encoded);
        } catch (e) {
          if (e instanceof tD && e.originalMessage === "No resource with given identifier found") {
            throw new tD("Could not load body for this request. This might happen if the request is a preflight request.");
          }
          throw e;
        }
      });
      return this.#iZ;
    }
    request() {
      return this.#iY;
    }
    fromCache() {
      return this.#i4 || this.#iY._fromMemoryCache;
    }
    fromServiceWorker() {
      return this.#i6;
    }
    frame() {
      return this.#iY.frame();
    }
  }
  class a$ {
    #i9 = new Map();
    #re = new Map();
    #rt = new Map();
    #ri = new Map();
    #rr = new Map();
    #ra = new Map();
    forget(e) {
      this.#i9.delete(e);
      this.#re.delete(e);
      this.#ra.delete(e);
      this.#rr.delete(e);
      this.#ri.delete(e);
    }
    responseExtraInfo(e) {
      if (!this.#ri.has(e)) {
        this.#ri.set(e, []);
      }
      return this.#ri.get(e);
    }
    queuedRedirectInfo(e) {
      if (!this.#rr.has(e)) {
        this.#rr.set(e, []);
      }
      return this.#rr.get(e);
    }
    queueRedirectInfo(e, t) {
      this.queuedRedirectInfo(e).push(t);
    }
    takeQueuedRedirectInfo(e) {
      return this.queuedRedirectInfo(e).shift();
    }
    inFlightRequestsCount() {
      let e = 0;
      for (let t of this.#rt.values()) {
        if (!t.response()) {
          e++;
        }
      }
      return e;
    }
    storeRequestWillBeSent(e, t) {
      this.#i9.set(e, t);
    }
    getRequestWillBeSent(e) {
      return this.#i9.get(e);
    }
    forgetRequestWillBeSent(e) {
      this.#i9.delete(e);
    }
    getRequestPaused(e) {
      return this.#re.get(e);
    }
    forgetRequestPaused(e) {
      this.#re.delete(e);
    }
    storeRequestPaused(e, t) {
      this.#re.set(e, t);
    }
    getRequest(e) {
      return this.#rt.get(e);
    }
    storeRequest(e, t) {
      this.#rt.set(e, t);
    }
    forgetRequest(e) {
      this.#rt.delete(e);
    }
    getQueuedEventGroup(e) {
      return this.#ra.get(e);
    }
    queueEventGroup(e, t) {
      this.#ra.set(e, t);
    }
    forgetQueuedEventGroup(e) {
      this.#ra.delete(e);
    }
    printState() {}
  }
  class aX extends ty {
    #t3;
    #rn = new a$();
    #rs;
    #ro = null;
    #rl = new Set();
    #rc = false;
    #rd = false;
    #ru;
    #rh;
    #rp;
    #rf;
    #s = [["Fetch.requestPaused", this.#rm], ["Fetch.authRequired", this.#ry], ["Network.requestWillBeSent", this.#rg], ["Network.requestServedFromCache", this.#rw], ["Network.responseReceived", this.#rv], ["Network.loadingFinished", this.#rb], ["Network.loadingFailed", this.#rk], ["Network.responseReceivedExtraInfo", this.#rS], [T.Disconnected, this.#rT]];
    #rC = new Map();
    constructor(e) {
      super();
      this.#t3 = e;
    }
    async addClient(e) {
      if (this.#rC.has(e)) {
        return;
      }
      let t = new tp();
      this.#rC.set(e, t);
      let i = t.use(new ty(e));
      for (let [t, r] of this.#s) {
        i.on(t, t => r.bind(this)(e, t));
      }
      await Promise.all([e.send("Network.enable"), this.#rM(e), this.#rE(e), this.#rP(e), this.#rI(e), this.#rx(e)]);
    }
    async #rT(e) {
      this.#rC.get(e)?.dispose();
      this.#rC.delete(e);
    }
    async authenticate(e) {
      this.#ro = e;
      let t = this.#rc || !!this.#ro;
      if (t !== this.#rd) {
        this.#rd = t;
        await this.#rF(this.#rI.bind(this));
      }
    }
    async setExtraHTTPHeaders(e) {
      let t = {};
      for (let [i, r] of Object.entries(e)) {
        tk(tU(r), `Expected value of header "${i}" to be String, but "${typeof r}" is found.`);
        t[i.toLowerCase()] = r;
      }
      this.#rs = t;
      await this.#rF(this.#rM.bind(this));
    }
    async #rM(e) {
      if (this.#rs !== undefined) {
        await e.send("Network.setExtraHTTPHeaders", {
          headers: this.#rs
        });
      }
    }
    extraHTTPHeaders() {
      return Object.assign({}, this.#rs);
    }
    inFlightRequestsCount() {
      return this.#rn.inFlightRequestsCount();
    }
    async setOfflineMode(e) {
      this.#rh ||= {
        offline: false,
        upload: -1,
        download: -1,
        latency: 0
      };
      this.#rh.offline = e;
      await this.#rF(this.#rE.bind(this));
    }
    async emulateNetworkConditions(e) {
      this.#rh ||= {
        offline: false,
        upload: -1,
        download: -1,
        latency: 0
      };
      this.#rh.upload = e ? e.upload : -1;
      this.#rh.download = e ? e.download : -1;
      this.#rh.latency = e ? e.latency : 0;
      await this.#rF(this.#rE.bind(this));
    }
    async #rF(e) {
      await Promise.all(Array.from(this.#rC.keys()).map(t => e(t)));
    }
    async #rE(e) {
      if (this.#rh !== undefined) {
        await e.send("Network.emulateNetworkConditions", {
          offline: this.#rh.offline,
          latency: this.#rh.latency,
          uploadThroughput: this.#rh.upload,
          downloadThroughput: this.#rh.download
        });
      }
    }
    async setUserAgent(e, t) {
      this.#rp = e;
      this.#rf = t;
      await this.#rF(this.#rx.bind(this));
    }
    async #rx(e) {
      if (this.#rp !== undefined) {
        await e.send("Network.setUserAgentOverride", {
          userAgent: this.#rp,
          userAgentMetadata: this.#rf
        });
      }
    }
    async setCacheEnabled(e) {
      this.#ru = !e;
      await this.#rF(this.#rP.bind(this));
    }
    async setRequestInterception(e) {
      this.#rc = e;
      let t = this.#rc || !!this.#ro;
      if (t !== this.#rd) {
        this.#rd = t;
        await this.#rF(this.#rI.bind(this));
      }
    }
    async #rI(e) {
      if (this.#ru === undefined) {
        this.#ru = false;
      }
      if (this.#rd) {
        await Promise.all([this.#rP(e), e.send("Fetch.enable", {
          handleAuthRequests: true,
          patterns: [{
            urlPattern: "*"
          }]
        })]);
      } else {
        await Promise.all([this.#rP(e), e.send("Fetch.disable")]);
      }
    }
    async #rP(e) {
      if (this.#ru !== undefined) {
        await e.send("Network.setCacheDisabled", {
          cacheDisabled: this.#ru
        });
      }
    }
    #rg(e, t) {
      if (this.#rc && !t.request.url.startsWith("data:")) {
        let {
          requestId: i
        } = t;
        this.#rn.storeRequestWillBeSent(i, t);
        let r = this.#rn.getRequestPaused(i);
        if (r) {
          let {
            requestId: a
          } = r;
          this.#rA(t, r);
          this.#iP(e, t, a);
          this.#rn.forgetRequestPaused(i);
        }
        return;
      }
      this.#iP(e, t, undefined);
    }
    #ry(e, t) {
      let i = "Default";
      if (this.#rl.has(t.requestId)) {
        i = "CancelAuth";
      } else if (this.#ro) {
        i = "ProvideCredentials";
        this.#rl.add(t.requestId);
      }
      let {
        username: r,
        password: a
      } = this.#ro || {
        username: undefined,
        password: undefined
      };
      e.send("Fetch.continueWithAuth", {
        requestId: t.requestId,
        authChallengeResponse: {
          response: i,
          username: r,
          password: a
        }
      }).catch(tq);
    }
    #rm(e, t) {
      if (!this.#rc && this.#rd) {
        e.send("Fetch.continueRequest", {
          requestId: t.requestId
        }).catch(tq);
      }
      let {
        networkId: i,
        requestId: r
      } = t;
      if (!i) {
        this.#rL(e, t);
        return;
      }
      let a = (() => {
        let e = this.#rn.getRequestWillBeSent(i);
        if (e && (e.request.url !== t.request.url || e.request.method !== t.request.method)) {
          this.#rn.forgetRequestWillBeSent(i);
          return;
        }
        return e;
      })();
      if (a) {
        this.#rA(a, t);
        this.#iP(e, a, r);
      } else {
        this.#rn.storeRequestPaused(i, t);
      }
    }
    #rA(e, t) {
      e.request.headers = {
        ...e.request.headers,
        ...t.request.headers
      };
    }
    #rL(e, t) {
      let i = new aU(e, t.frameId ? this.#t3.frame(t.frameId) : null, t.requestId, this.#rc, t, []);
      this.emit(I.Request, i);
      i.finalizeInterceptions();
    }
    #iP(e, t, i, r = false) {
      let a = [];
      if (t.redirectResponse) {
        let r = null;
        if (t.redirectHasExtraInfo && !(r = this.#rn.responseExtraInfo(t.requestId).shift())) {
          this.#rn.queueRedirectInfo(t.requestId, {
            event: t,
            fetchRequestId: i
          });
          return;
        }
        let n = this.#rn.getRequest(t.requestId);
        if (n) {
          this.#rO(e, n, t.redirectResponse, r);
          a = n._redirectChain;
        }
      }
      let n = new aU(e, t.frameId ? this.#t3.frame(t.frameId) : null, i, this.#rc, t, a);
      n._fromMemoryCache = r;
      this.#rn.storeRequest(t.requestId, n);
      this.emit(I.Request, n);
      n.finalizeInterceptions();
    }
    #rw(e, t) {
      let i = this.#rn.getRequestWillBeSent(t.requestId);
      let r = this.#rn.getRequest(t.requestId);
      if (r) {
        r._fromMemoryCache = true;
      }
      if (!r && i) {
        this.#iP(e, i, undefined, true);
        r = this.#rn.getRequest(t.requestId);
      }
      if (!r) {
        tq(Error(`Request ${t.requestId} was served from cache but we could not find the corresponding request object`));
        return;
      }
      this.emit(I.RequestServedFromCache, r);
    }
    #rO(e, t, i, r) {
      let a = new aG(t, i, r);
      t._response = a;
      t._redirectChain.push(t);
      a._resolveBody(Error("Response body is unavailable for redirect responses"));
      this.#rR(t, false);
      this.emit(I.Response, a);
      this.emit(I.RequestFinished, t);
    }
    #rD(e, t, i) {
      let r = this.#rn.getRequest(t.requestId);
      if (!r) {
        return;
      }
      if (this.#rn.responseExtraInfo(t.requestId).length) {
        tq(Error("Unexpected extraInfo events for request " + t.requestId));
      }
      if (t.response.fromDiskCache) {
        i = null;
      }
      let a = new aG(r, t.response, i);
      r._response = a;
      this.emit(I.Response, a);
    }
    #rv(e, t) {
      let i = this.#rn.getRequest(t.requestId);
      let r = null;
      if (i && !i._fromMemoryCache && t.hasExtraInfo && !(r = this.#rn.responseExtraInfo(t.requestId).shift())) {
        this.#rn.queueEventGroup(t.requestId, {
          responseReceivedEvent: t
        });
        return;
      }
      this.#rD(e, t, r);
    }
    #rS(e, t) {
      let i = this.#rn.takeQueuedRedirectInfo(t.requestId);
      if (i) {
        this.#rn.responseExtraInfo(t.requestId).push(t);
        this.#iP(e, i.event, i.fetchRequestId);
        return;
      }
      let r = this.#rn.getQueuedEventGroup(t.requestId);
      if (r) {
        this.#rn.forgetQueuedEventGroup(t.requestId);
        this.#rD(e, r.responseReceivedEvent, t);
        if (r.loadingFinishedEvent) {
          this.#r_(e, r.loadingFinishedEvent);
        }
        if (r.loadingFailedEvent) {
          this.#rN(e, r.loadingFailedEvent);
        }
        return;
      }
      this.#rn.responseExtraInfo(t.requestId).push(t);
    }
    #rR(e, t) {
      let i = e.id;
      let r = e._interceptionId;
      this.#rn.forgetRequest(i);
      if (r !== undefined) {
        this.#rl.delete(r);
      }
      if (t) {
        this.#rn.forget(i);
      }
    }
    #rb(e, t) {
      let i = this.#rn.getQueuedEventGroup(t.requestId);
      if (i) {
        i.loadingFinishedEvent = t;
      } else {
        this.#r_(e, t);
      }
    }
    #r_(e, t) {
      let i = this.#rn.getRequest(t.requestId);
      if (i) {
        this.#rK(e, i);
        if (i.response()) {
          i.response()?._resolveBody();
        }
        this.#rR(i, true);
        this.emit(I.RequestFinished, i);
      }
    }
    #rk(e, t) {
      let i = this.#rn.getQueuedEventGroup(t.requestId);
      if (i) {
        i.loadingFailedEvent = t;
      } else {
        this.#rN(e, t);
      }
    }
    #rN(e, t) {
      let i = this.#rn.getRequest(t.requestId);
      if (!i) {
        return;
      }
      this.#rK(e, i);
      i._failureText = t.errorText;
      let r = i.response();
      if (r) {
        r._resolveBody();
      }
      this.#rR(i, true);
      this.emit(I.RequestFailed, i);
    }
    #rK(e, t) {
      if (e !== t.client) {
        t.client = e;
      }
    }
  }
  class aQ extends ty {
    #rq;
    #rH;
    #tX;
    #rB = new Set();
    #ts;
    #rj = new Map();
    #t7 = new Set();
    _frameTree = new az();
    #rW = new Set();
    #rz = new WeakMap();
    #rU;
    get timeoutSettings() {
      return this.#tX;
    }
    get networkManager() {
      return this.#rH;
    }
    get client() {
      return this.#ts;
    }
    constructor(e, t, i) {
      super();
      this.#ts = e;
      this.#rq = t;
      this.#rH = new aX(this);
      this.#tX = i;
      this.setupEventListeners(this.#ts);
      e.once(T.Disconnected, () => {
        this.#rV().catch(tq);
      });
    }
    async #rV() {
      let e = this._frameTree.getMainFrame();
      if (!e) {
        return;
      }
      if (!this.#rq.browser().connected) {
        this.#rG(e);
        return;
      }
      for (let t of e.childFrames()) {
        this.#rG(t);
      }
      let t = ir.create({
        timeout: 100,
        message: "Frame was not swapped"
      });
      e.once(M.FrameSwappedByActivation, () => {
        t.resolve();
      });
      try {
        await t.valueOrThrow();
      } catch {
        this.#rG(e);
      }
    }
    async swapFrameTree(e) {
      this.#ts = e;
      let t = this._frameTree.getMainFrame();
      if (t) {
        this.#rW.add(this.#ts.target()._targetId);
        this._frameTree.removeFrame(t);
        t.updateId(this.#ts.target()._targetId);
        this._frameTree.addFrame(t);
        t.updateClient(e);
      }
      this.setupEventListeners(e);
      e.once(T.Disconnected, () => {
        this.#rV().catch(tq);
      });
      await this.initialize(e, t);
      await this.#rH.addClient(e);
      if (t) {
        t.emit(M.FrameSwappedByActivation, undefined);
      }
    }
    async registerSpeculativeSession(e) {
      await this.#rH.addClient(e);
    }
    setupEventListeners(e) {
      e.on("Page.frameAttached", async t => {
        await this.#rU?.valueOrThrow();
        this.#r$(e, t.frameId, t.parentFrameId);
      });
      e.on("Page.frameNavigated", async e => {
        this.#rW.add(e.frame.id);
        await this.#rU?.valueOrThrow();
        this.#rX(e.frame, e.type);
      });
      e.on("Page.navigatedWithinDocument", async e => {
        await this.#rU?.valueOrThrow();
        this.#rQ(e.frameId, e.url);
      });
      e.on("Page.frameDetached", async e => {
        await this.#rU?.valueOrThrow();
        this.#iE(e.frameId, e.reason);
      });
      e.on("Page.frameStartedLoading", async e => {
        await this.#rU?.valueOrThrow();
        this.#rJ(e.frameId);
      });
      e.on("Page.frameStoppedLoading", async e => {
        await this.#rU?.valueOrThrow();
        this.#rY(e.frameId);
      });
      e.on("Runtime.executionContextCreated", async t => {
        await this.#rU?.valueOrThrow();
        this.#rZ(t.context, e);
      });
      e.on("Page.lifecycleEvent", async e => {
        await this.#rU?.valueOrThrow();
        this.#r0(e);
      });
    }
    async initialize(e, t) {
      try {
        this.#rU?.resolve();
        this.#rU = ir.create();
        await Promise.all([this.#rH.addClient(e), e.send("Page.enable"), e.send("Page.getFrameTree").then(({
          frameTree: t
        }) => {
          this.#r1(e, t);
          this.#rU?.resolve();
        }), e.send("Page.setLifecycleEventsEnabled", {
          enabled: true
        }), e.send("Runtime.enable").then(() => this.#r5(e, t1)), ...(t ? Array.from(this.#rj.values()) : []).map(e => t?.addPreloadScript(e)), ...(t ? Array.from(this.#t7.values()) : []).map(e => t?.addExposedFunctionBinding(e))]);
      } catch (e) {
        this.#rU?.resolve();
        if (id(e) && ai(e)) {
          return;
        }
        throw e;
      }
    }
    page() {
      return this.#rq;
    }
    mainFrame() {
      let e = this._frameTree.getMainFrame();
      tk(e, "Requesting main frame too early!");
      return e;
    }
    frames() {
      return Array.from(this._frameTree.frames());
    }
    frame(e) {
      return this._frameTree.getById(e) || null;
    }
    async addExposedFunctionBinding(e) {
      this.#t7.add(e);
      await Promise.all(this.frames().map(async t => await t.addExposedFunctionBinding(e)));
    }
    async removeExposedFunctionBinding(e) {
      this.#t7.delete(e);
      await Promise.all(this.frames().map(async t => await t.removeExposedFunctionBinding(e)));
    }
    async evaluateOnNewDocument(e) {
      let {
        identifier: t
      } = await this.mainFrame()._client().send("Page.addScriptToEvaluateOnNewDocument", {
        source: e
      });
      let i = new ap(this.mainFrame(), t, e);
      this.#rj.set(t, i);
      await Promise.all(this.frames().map(async e => await e.addPreloadScript(i)));
      return {
        identifier: t
      };
    }
    async removeScriptToEvaluateOnNewDocument(e) {
      let t = this.#rj.get(e);
      if (!t) {
        throw Error(`Script to evaluate on new document with id ${e} not found`);
      }
      this.#rj.delete(e);
      await Promise.all(this.frames().map(e => {
        let i = t.getIdForFrame(e);
        if (i) {
          return e._client().send("Page.removeScriptToEvaluateOnNewDocument", {
            identifier: i
          }).catch(tq);
        }
      }));
    }
    onAttachedToTarget(e) {
      if (e._getTargetInfo().type !== "iframe") {
        return;
      }
      let t = this.frame(e._getTargetInfo().targetId);
      if (t) {
        t.updateClient(e._session());
      }
      this.setupEventListeners(e._session());
      this.initialize(e._session(), t);
    }
    _deviceRequestPromptManager(e) {
      let t = this.#rz.get(e);
      if (t === undefined) {
        t = new ay(e, this.#tX);
        this.#rz.set(e, t);
      }
      return t;
    }
    #r0(e) {
      let t = this.frame(e.frameId);
      if (t) {
        t._onLifecycleEvent(e.loaderId, e.name);
        this.emit(x.LifecycleEvent, t);
        t.emit(M.LifecycleEvent, undefined);
      }
    }
    #rJ(e) {
      let t = this.frame(e);
      if (t) {
        t._onLoadingStarted();
      }
    }
    #rY(e) {
      let t = this.frame(e);
      if (t) {
        t._onLoadingStopped();
        this.emit(x.LifecycleEvent, t);
        t.emit(M.LifecycleEvent, undefined);
      }
    }
    #r1(e, t) {
      if (t.frame.parentId) {
        this.#r$(e, t.frame.id, t.frame.parentId);
      }
      if (this.#rW.has(t.frame.id)) {
        this.#rW.delete(t.frame.id);
      } else {
        this.#rX(t.frame, "Navigation");
      }
      if (t.childFrames) {
        for (let i of t.childFrames) {
          this.#r1(e, i);
        }
      }
    }
    #r$(e, t, i) {
      let r = this.frame(t);
      if (r) {
        let t = this.frame(i);
        if (e && t && r.client !== t?.client) {
          r.updateClient(e);
        }
        return;
      }
      r = new aW(this, t, i, e);
      this._frameTree.addFrame(r);
      this.emit(x.FrameAttached, r);
    }
    async #rX(e, t) {
      let i = e.id;
      let r = !e.parentId;
      let a = this._frameTree.getById(i);
      if (a) {
        for (let e of a.childFrames()) {
          this.#rG(e);
        }
      }
      if (r) {
        if (a) {
          this._frameTree.removeFrame(a);
          a._id = i;
        } else {
          a = new aW(this, i, undefined, this.#ts);
        }
        this._frameTree.addFrame(a);
      }
      (a = await this._frameTree.waitForFrame(i))._navigated(e);
      this.emit(x.FrameNavigated, a);
      a.emit(M.FrameNavigated, t);
    }
    async #r5(e, t) {
      let i = `${e.id()}:${t}`;
      if (!this.#rB.has(i)) {
        await e.send("Page.addScriptToEvaluateOnNewDocument", {
          source: `//# sourceURL=${tj.INTERNAL_URL}`,
          worldName: t
        });
        await Promise.all(this.frames().filter(t => t.client === e).map(i => e.send("Page.createIsolatedWorld", {
          frameId: i._id,
          worldName: t,
          grantUniveralAccess: true
        }).catch(tq)));
        this.#rB.add(i);
      }
    }
    #rQ(e, t) {
      let i = this.frame(e);
      if (i) {
        i._navigatedWithinDocument(t);
        this.emit(x.FrameNavigatedWithinDocument, i);
        i.emit(M.FrameNavigatedWithinDocument, undefined);
        this.emit(x.FrameNavigated, i);
        i.emit(M.FrameNavigated, "Navigation");
      }
    }
    #iE(e, t) {
      let i = this.frame(e);
      if (i) {
        switch (t) {
          case "remove":
            this.#rG(i);
            break;
          case "swap":
            this.emit(x.FrameSwapped, i);
            i.emit(M.FrameSwapped, undefined);
        }
      }
    }
    #rZ(e, t) {
      let i;
      let r = e.auxData;
      let a = r && r.frameId;
      let n = typeof a == "string" ? this.frame(a) : undefined;
      if (n) {
        if (n.client !== t) {
          return;
        }
        if (e.auxData && e.auxData.isDefault) {
          i = n.worlds[aN];
        } else if (e.name === t1) {
          i = n.worlds[aK];
        }
      }
      if (!i) {
        return;
      }
      let s = new aR(n?.client || this.#ts, e, i);
      i.setContext(s);
    }
    #rG(e) {
      for (let t of e.childFrames()) {
        this.#rG(t);
      }
      e[tu]();
      this._frameTree.removeFrame(e);
      this.emit(x.FrameDetached, e);
      e.emit(M.FrameDetached, e);
    }
  }
  let aJ = {
    0: {
      keyCode: 48,
      key: "0",
      code: "Digit0"
    },
    1: {
      keyCode: 49,
      key: "1",
      code: "Digit1"
    },
    2: {
      keyCode: 50,
      key: "2",
      code: "Digit2"
    },
    3: {
      keyCode: 51,
      key: "3",
      code: "Digit3"
    },
    4: {
      keyCode: 52,
      key: "4",
      code: "Digit4"
    },
    5: {
      keyCode: 53,
      key: "5",
      code: "Digit5"
    },
    6: {
      keyCode: 54,
      key: "6",
      code: "Digit6"
    },
    7: {
      keyCode: 55,
      key: "7",
      code: "Digit7"
    },
    8: {
      keyCode: 56,
      key: "8",
      code: "Digit8"
    },
    9: {
      keyCode: 57,
      key: "9",
      code: "Digit9"
    },
    Power: {
      key: "Power",
      code: "Power"
    },
    Eject: {
      key: "Eject",
      code: "Eject"
    },
    Abort: {
      keyCode: 3,
      code: "Abort",
      key: "Cancel"
    },
    Help: {
      keyCode: 6,
      code: "Help",
      key: "Help"
    },
    Backspace: {
      keyCode: 8,
      code: "Backspace",
      key: "Backspace"
    },
    Tab: {
      keyCode: 9,
      code: "Tab",
      key: "Tab"
    },
    Numpad5: {
      keyCode: 12,
      shiftKeyCode: 101,
      key: "Clear",
      code: "Numpad5",
      shiftKey: "5",
      location: 3
    },
    NumpadEnter: {
      keyCode: 13,
      code: "NumpadEnter",
      key: "Enter",
      text: "\r",
      location: 3
    },
    Enter: {
      keyCode: 13,
      code: "Enter",
      key: "Enter",
      text: "\r"
    },
    "\r": {
      keyCode: 13,
      code: "Enter",
      key: "Enter",
      text: "\r"
    },
    "\n": {
      keyCode: 13,
      code: "Enter",
      key: "Enter",
      text: "\r"
    },
    ShiftLeft: {
      keyCode: 16,
      code: "ShiftLeft",
      key: "Shift",
      location: 1
    },
    ShiftRight: {
      keyCode: 16,
      code: "ShiftRight",
      key: "Shift",
      location: 2
    },
    ControlLeft: {
      keyCode: 17,
      code: "ControlLeft",
      key: "Control",
      location: 1
    },
    ControlRight: {
      keyCode: 17,
      code: "ControlRight",
      key: "Control",
      location: 2
    },
    AltLeft: {
      keyCode: 18,
      code: "AltLeft",
      key: "Alt",
      location: 1
    },
    AltRight: {
      keyCode: 18,
      code: "AltRight",
      key: "Alt",
      location: 2
    },
    Pause: {
      keyCode: 19,
      code: "Pause",
      key: "Pause"
    },
    CapsLock: {
      keyCode: 20,
      code: "CapsLock",
      key: "CapsLock"
    },
    Escape: {
      keyCode: 27,
      code: "Escape",
      key: "Escape"
    },
    Convert: {
      keyCode: 28,
      code: "Convert",
      key: "Convert"
    },
    NonConvert: {
      keyCode: 29,
      code: "NonConvert",
      key: "NonConvert"
    },
    Space: {
      keyCode: 32,
      code: "Space",
      key: " "
    },
    Numpad9: {
      keyCode: 33,
      shiftKeyCode: 105,
      key: "PageUp",
      code: "Numpad9",
      shiftKey: "9",
      location: 3
    },
    PageUp: {
      keyCode: 33,
      code: "PageUp",
      key: "PageUp"
    },
    Numpad3: {
      keyCode: 34,
      shiftKeyCode: 99,
      key: "PageDown",
      code: "Numpad3",
      shiftKey: "3",
      location: 3
    },
    PageDown: {
      keyCode: 34,
      code: "PageDown",
      key: "PageDown"
    },
    End: {
      keyCode: 35,
      code: "End",
      key: "End"
    },
    Numpad1: {
      keyCode: 35,
      shiftKeyCode: 97,
      key: "End",
      code: "Numpad1",
      shiftKey: "1",
      location: 3
    },
    Home: {
      keyCode: 36,
      code: "Home",
      key: "Home"
    },
    Numpad7: {
      keyCode: 36,
      shiftKeyCode: 103,
      key: "Home",
      code: "Numpad7",
      shiftKey: "7",
      location: 3
    },
    ArrowLeft: {
      keyCode: 37,
      code: "ArrowLeft",
      key: "ArrowLeft"
    },
    Numpad4: {
      keyCode: 37,
      shiftKeyCode: 100,
      key: "ArrowLeft",
      code: "Numpad4",
      shiftKey: "4",
      location: 3
    },
    Numpad8: {
      keyCode: 38,
      shiftKeyCode: 104,
      key: "ArrowUp",
      code: "Numpad8",
      shiftKey: "8",
      location: 3
    },
    ArrowUp: {
      keyCode: 38,
      code: "ArrowUp",
      key: "ArrowUp"
    },
    ArrowRight: {
      keyCode: 39,
      code: "ArrowRight",
      key: "ArrowRight"
    },
    Numpad6: {
      keyCode: 39,
      shiftKeyCode: 102,
      key: "ArrowRight",
      code: "Numpad6",
      shiftKey: "6",
      location: 3
    },
    Numpad2: {
      keyCode: 40,
      shiftKeyCode: 98,
      key: "ArrowDown",
      code: "Numpad2",
      shiftKey: "2",
      location: 3
    },
    ArrowDown: {
      keyCode: 40,
      code: "ArrowDown",
      key: "ArrowDown"
    },
    Select: {
      keyCode: 41,
      code: "Select",
      key: "Select"
    },
    Open: {
      keyCode: 43,
      code: "Open",
      key: "Execute"
    },
    PrintScreen: {
      keyCode: 44,
      code: "PrintScreen",
      key: "PrintScreen"
    },
    Insert: {
      keyCode: 45,
      code: "Insert",
      key: "Insert"
    },
    Numpad0: {
      keyCode: 45,
      shiftKeyCode: 96,
      key: "Insert",
      code: "Numpad0",
      shiftKey: "0",
      location: 3
    },
    Delete: {
      keyCode: 46,
      code: "Delete",
      key: "Delete"
    },
    NumpadDecimal: {
      keyCode: 46,
      shiftKeyCode: 110,
      code: "NumpadDecimal",
      key: "\0",
      shiftKey: ".",
      location: 3
    },
    Digit0: {
      keyCode: 48,
      code: "Digit0",
      shiftKey: ")",
      key: "0"
    },
    Digit1: {
      keyCode: 49,
      code: "Digit1",
      shiftKey: "!",
      key: "1"
    },
    Digit2: {
      keyCode: 50,
      code: "Digit2",
      shiftKey: "@",
      key: "2"
    },
    Digit3: {
      keyCode: 51,
      code: "Digit3",
      shiftKey: "#",
      key: "3"
    },
    Digit4: {
      keyCode: 52,
      code: "Digit4",
      shiftKey: "$",
      key: "4"
    },
    Digit5: {
      keyCode: 53,
      code: "Digit5",
      shiftKey: "%",
      key: "5"
    },
    Digit6: {
      keyCode: 54,
      code: "Digit6",
      shiftKey: "^",
      key: "6"
    },
    Digit7: {
      keyCode: 55,
      code: "Digit7",
      shiftKey: "&",
      key: "7"
    },
    Digit8: {
      keyCode: 56,
      code: "Digit8",
      shiftKey: "*",
      key: "8"
    },
    Digit9: {
      keyCode: 57,
      code: "Digit9",
      shiftKey: "(",
      key: "9"
    },
    KeyA: {
      keyCode: 65,
      code: "KeyA",
      shiftKey: "A",
      key: "a"
    },
    KeyB: {
      keyCode: 66,
      code: "KeyB",
      shiftKey: "B",
      key: "b"
    },
    KeyC: {
      keyCode: 67,
      code: "KeyC",
      shiftKey: "C",
      key: "c"
    },
    KeyD: {
      keyCode: 68,
      code: "KeyD",
      shiftKey: "D",
      key: "d"
    },
    KeyE: {
      keyCode: 69,
      code: "KeyE",
      shiftKey: "E",
      key: "e"
    },
    KeyF: {
      keyCode: 70,
      code: "KeyF",
      shiftKey: "F",
      key: "f"
    },
    KeyG: {
      keyCode: 71,
      code: "KeyG",
      shiftKey: "G",
      key: "g"
    },
    KeyH: {
      keyCode: 72,
      code: "KeyH",
      shiftKey: "H",
      key: "h"
    },
    KeyI: {
      keyCode: 73,
      code: "KeyI",
      shiftKey: "I",
      key: "i"
    },
    KeyJ: {
      keyCode: 74,
      code: "KeyJ",
      shiftKey: "J",
      key: "j"
    },
    KeyK: {
      keyCode: 75,
      code: "KeyK",
      shiftKey: "K",
      key: "k"
    },
    KeyL: {
      keyCode: 76,
      code: "KeyL",
      shiftKey: "L",
      key: "l"
    },
    KeyM: {
      keyCode: 77,
      code: "KeyM",
      shiftKey: "M",
      key: "m"
    },
    KeyN: {
      keyCode: 78,
      code: "KeyN",
      shiftKey: "N",
      key: "n"
    },
    KeyO: {
      keyCode: 79,
      code: "KeyO",
      shiftKey: "O",
      key: "o"
    },
    KeyP: {
      keyCode: 80,
      code: "KeyP",
      shiftKey: "P",
      key: "p"
    },
    KeyQ: {
      keyCode: 81,
      code: "KeyQ",
      shiftKey: "Q",
      key: "q"
    },
    KeyR: {
      keyCode: 82,
      code: "KeyR",
      shiftKey: "R",
      key: "r"
    },
    KeyS: {
      keyCode: 83,
      code: "KeyS",
      shiftKey: "S",
      key: "s"
    },
    KeyT: {
      keyCode: 84,
      code: "KeyT",
      shiftKey: "T",
      key: "t"
    },
    KeyU: {
      keyCode: 85,
      code: "KeyU",
      shiftKey: "U",
      key: "u"
    },
    KeyV: {
      keyCode: 86,
      code: "KeyV",
      shiftKey: "V",
      key: "v"
    },
    KeyW: {
      keyCode: 87,
      code: "KeyW",
      shiftKey: "W",
      key: "w"
    },
    KeyX: {
      keyCode: 88,
      code: "KeyX",
      shiftKey: "X",
      key: "x"
    },
    KeyY: {
      keyCode: 89,
      code: "KeyY",
      shiftKey: "Y",
      key: "y"
    },
    KeyZ: {
      keyCode: 90,
      code: "KeyZ",
      shiftKey: "Z",
      key: "z"
    },
    MetaLeft: {
      keyCode: 91,
      code: "MetaLeft",
      key: "Meta",
      location: 1
    },
    MetaRight: {
      keyCode: 92,
      code: "MetaRight",
      key: "Meta",
      location: 2
    },
    ContextMenu: {
      keyCode: 93,
      code: "ContextMenu",
      key: "ContextMenu"
    },
    NumpadMultiply: {
      keyCode: 106,
      code: "NumpadMultiply",
      key: "*",
      location: 3
    },
    NumpadAdd: {
      keyCode: 107,
      code: "NumpadAdd",
      key: "+",
      location: 3
    },
    NumpadSubtract: {
      keyCode: 109,
      code: "NumpadSubtract",
      key: "-",
      location: 3
    },
    NumpadDivide: {
      keyCode: 111,
      code: "NumpadDivide",
      key: "/",
      location: 3
    },
    F1: {
      keyCode: 112,
      code: "F1",
      key: "F1"
    },
    F2: {
      keyCode: 113,
      code: "F2",
      key: "F2"
    },
    F3: {
      keyCode: 114,
      code: "F3",
      key: "F3"
    },
    F4: {
      keyCode: 115,
      code: "F4",
      key: "F4"
    },
    F5: {
      keyCode: 116,
      code: "F5",
      key: "F5"
    },
    F6: {
      keyCode: 117,
      code: "F6",
      key: "F6"
    },
    F7: {
      keyCode: 118,
      code: "F7",
      key: "F7"
    },
    F8: {
      keyCode: 119,
      code: "F8",
      key: "F8"
    },
    F9: {
      keyCode: 120,
      code: "F9",
      key: "F9"
    },
    F10: {
      keyCode: 121,
      code: "F10",
      key: "F10"
    },
    F11: {
      keyCode: 122,
      code: "F11",
      key: "F11"
    },
    F12: {
      keyCode: 123,
      code: "F12",
      key: "F12"
    },
    F13: {
      keyCode: 124,
      code: "F13",
      key: "F13"
    },
    F14: {
      keyCode: 125,
      code: "F14",
      key: "F14"
    },
    F15: {
      keyCode: 126,
      code: "F15",
      key: "F15"
    },
    F16: {
      keyCode: 127,
      code: "F16",
      key: "F16"
    },
    F17: {
      keyCode: 128,
      code: "F17",
      key: "F17"
    },
    F18: {
      keyCode: 129,
      code: "F18",
      key: "F18"
    },
    F19: {
      keyCode: 130,
      code: "F19",
      key: "F19"
    },
    F20: {
      keyCode: 131,
      code: "F20",
      key: "F20"
    },
    F21: {
      keyCode: 132,
      code: "F21",
      key: "F21"
    },
    F22: {
      keyCode: 133,
      code: "F22",
      key: "F22"
    },
    F23: {
      keyCode: 134,
      code: "F23",
      key: "F23"
    },
    F24: {
      keyCode: 135,
      code: "F24",
      key: "F24"
    },
    NumLock: {
      keyCode: 144,
      code: "NumLock",
      key: "NumLock"
    },
    ScrollLock: {
      keyCode: 145,
      code: "ScrollLock",
      key: "ScrollLock"
    },
    AudioVolumeMute: {
      keyCode: 173,
      code: "AudioVolumeMute",
      key: "AudioVolumeMute"
    },
    AudioVolumeDown: {
      keyCode: 174,
      code: "AudioVolumeDown",
      key: "AudioVolumeDown"
    },
    AudioVolumeUp: {
      keyCode: 175,
      code: "AudioVolumeUp",
      key: "AudioVolumeUp"
    },
    MediaTrackNext: {
      keyCode: 176,
      code: "MediaTrackNext",
      key: "MediaTrackNext"
    },
    MediaTrackPrevious: {
      keyCode: 177,
      code: "MediaTrackPrevious",
      key: "MediaTrackPrevious"
    },
    MediaStop: {
      keyCode: 178,
      code: "MediaStop",
      key: "MediaStop"
    },
    MediaPlayPause: {
      keyCode: 179,
      code: "MediaPlayPause",
      key: "MediaPlayPause"
    },
    Semicolon: {
      keyCode: 186,
      code: "Semicolon",
      shiftKey: ":",
      key: ";"
    },
    Equal: {
      keyCode: 187,
      code: "Equal",
      shiftKey: "+",
      key: "="
    },
    NumpadEqual: {
      keyCode: 187,
      code: "NumpadEqual",
      key: "=",
      location: 3
    },
    Comma: {
      keyCode: 188,
      code: "Comma",
      shiftKey: "<",
      key: ","
    },
    Minus: {
      keyCode: 189,
      code: "Minus",
      shiftKey: "_",
      key: "-"
    },
    Period: {
      keyCode: 190,
      code: "Period",
      shiftKey: ">",
      key: "."
    },
    Slash: {
      keyCode: 191,
      code: "Slash",
      shiftKey: "?",
      key: "/"
    },
    Backquote: {
      keyCode: 192,
      code: "Backquote",
      shiftKey: "~",
      key: "`"
    },
    BracketLeft: {
      keyCode: 219,
      code: "BracketLeft",
      shiftKey: "{",
      key: "["
    },
    Backslash: {
      keyCode: 220,
      code: "Backslash",
      shiftKey: "|",
      key: "\\"
    },
    BracketRight: {
      keyCode: 221,
      code: "BracketRight",
      shiftKey: "}",
      key: "]"
    },
    Quote: {
      keyCode: 222,
      code: "Quote",
      shiftKey: "\"",
      key: "'"
    },
    AltGraph: {
      keyCode: 225,
      code: "AltGraph",
      key: "AltGraph"
    },
    Props: {
      keyCode: 247,
      code: "Props",
      key: "CrSel"
    },
    Cancel: {
      keyCode: 3,
      key: "Cancel",
      code: "Abort"
    },
    Clear: {
      keyCode: 12,
      key: "Clear",
      code: "Numpad5",
      location: 3
    },
    Shift: {
      keyCode: 16,
      key: "Shift",
      code: "ShiftLeft",
      location: 1
    },
    Control: {
      keyCode: 17,
      key: "Control",
      code: "ControlLeft",
      location: 1
    },
    Alt: {
      keyCode: 18,
      key: "Alt",
      code: "AltLeft",
      location: 1
    },
    Accept: {
      keyCode: 30,
      key: "Accept"
    },
    ModeChange: {
      keyCode: 31,
      key: "ModeChange"
    },
    " ": {
      keyCode: 32,
      key: " ",
      code: "Space"
    },
    Print: {
      keyCode: 42,
      key: "Print"
    },
    Execute: {
      keyCode: 43,
      key: "Execute",
      code: "Open"
    },
    "\0": {
      keyCode: 46,
      key: "\0",
      code: "NumpadDecimal",
      location: 3
    },
    a: {
      keyCode: 65,
      key: "a",
      code: "KeyA"
    },
    b: {
      keyCode: 66,
      key: "b",
      code: "KeyB"
    },
    c: {
      keyCode: 67,
      key: "c",
      code: "KeyC"
    },
    d: {
      keyCode: 68,
      key: "d",
      code: "KeyD"
    },
    e: {
      keyCode: 69,
      key: "e",
      code: "KeyE"
    },
    f: {
      keyCode: 70,
      key: "f",
      code: "KeyF"
    },
    g: {
      keyCode: 71,
      key: "g",
      code: "KeyG"
    },
    h: {
      keyCode: 72,
      key: "h",
      code: "KeyH"
    },
    i: {
      keyCode: 73,
      key: "i",
      code: "KeyI"
    },
    j: {
      keyCode: 74,
      key: "j",
      code: "KeyJ"
    },
    k: {
      keyCode: 75,
      key: "k",
      code: "KeyK"
    },
    l: {
      keyCode: 76,
      key: "l",
      code: "KeyL"
    },
    m: {
      keyCode: 77,
      key: "m",
      code: "KeyM"
    },
    n: {
      keyCode: 78,
      key: "n",
      code: "KeyN"
    },
    o: {
      keyCode: 79,
      key: "o",
      code: "KeyO"
    },
    p: {
      keyCode: 80,
      key: "p",
      code: "KeyP"
    },
    q: {
      keyCode: 81,
      key: "q",
      code: "KeyQ"
    },
    r: {
      keyCode: 82,
      key: "r",
      code: "KeyR"
    },
    s: {
      keyCode: 83,
      key: "s",
      code: "KeyS"
    },
    t: {
      keyCode: 84,
      key: "t",
      code: "KeyT"
    },
    u: {
      keyCode: 85,
      key: "u",
      code: "KeyU"
    },
    v: {
      keyCode: 86,
      key: "v",
      code: "KeyV"
    },
    w: {
      keyCode: 87,
      key: "w",
      code: "KeyW"
    },
    x: {
      keyCode: 88,
      key: "x",
      code: "KeyX"
    },
    y: {
      keyCode: 89,
      key: "y",
      code: "KeyY"
    },
    z: {
      keyCode: 90,
      key: "z",
      code: "KeyZ"
    },
    Meta: {
      keyCode: 91,
      key: "Meta",
      code: "MetaLeft",
      location: 1
    },
    "*": {
      keyCode: 106,
      key: "*",
      code: "NumpadMultiply",
      location: 3
    },
    "+": {
      keyCode: 107,
      key: "+",
      code: "NumpadAdd",
      location: 3
    },
    "-": {
      keyCode: 109,
      key: "-",
      code: "NumpadSubtract",
      location: 3
    },
    "/": {
      keyCode: 111,
      key: "/",
      code: "NumpadDivide",
      location: 3
    },
    ";": {
      keyCode: 186,
      key: ";",
      code: "Semicolon"
    },
    "=": {
      keyCode: 187,
      key: "=",
      code: "Equal"
    },
    ",": {
      keyCode: 188,
      key: ",",
      code: "Comma"
    },
    ".": {
      keyCode: 190,
      key: ".",
      code: "Period"
    },
    "`": {
      keyCode: 192,
      key: "`",
      code: "Backquote"
    },
    "[": {
      keyCode: 219,
      key: "[",
      code: "BracketLeft"
    },
    "\\": {
      keyCode: 220,
      key: "\\",
      code: "Backslash"
    },
    "]": {
      keyCode: 221,
      key: "]",
      code: "BracketRight"
    },
    "'": {
      keyCode: 222,
      key: "'",
      code: "Quote"
    },
    Attn: {
      keyCode: 246,
      key: "Attn"
    },
    CrSel: {
      keyCode: 247,
      key: "CrSel",
      code: "Props"
    },
    ExSel: {
      keyCode: 248,
      key: "ExSel"
    },
    EraseEof: {
      keyCode: 249,
      key: "EraseEof"
    },
    Play: {
      keyCode: 250,
      key: "Play"
    },
    ZoomOut: {
      keyCode: 251,
      key: "ZoomOut"
    },
    ")": {
      keyCode: 48,
      key: ")",
      code: "Digit0"
    },
    "!": {
      keyCode: 49,
      key: "!",
      code: "Digit1"
    },
    "@": {
      keyCode: 50,
      key: "@",
      code: "Digit2"
    },
    "#": {
      keyCode: 51,
      key: "#",
      code: "Digit3"
    },
    $: {
      keyCode: 52,
      key: "$",
      code: "Digit4"
    },
    "%": {
      keyCode: 53,
      key: "%",
      code: "Digit5"
    },
    "^": {
      keyCode: 54,
      key: "^",
      code: "Digit6"
    },
    "&": {
      keyCode: 55,
      key: "&",
      code: "Digit7"
    },
    "(": {
      keyCode: 57,
      key: "(",
      code: "Digit9"
    },
    A: {
      keyCode: 65,
      key: "A",
      code: "KeyA"
    },
    B: {
      keyCode: 66,
      key: "B",
      code: "KeyB"
    },
    C: {
      keyCode: 67,
      key: "C",
      code: "KeyC"
    },
    D: {
      keyCode: 68,
      key: "D",
      code: "KeyD"
    },
    E: {
      keyCode: 69,
      key: "E",
      code: "KeyE"
    },
    F: {
      keyCode: 70,
      key: "F",
      code: "KeyF"
    },
    G: {
      keyCode: 71,
      key: "G",
      code: "KeyG"
    },
    H: {
      keyCode: 72,
      key: "H",
      code: "KeyH"
    },
    I: {
      keyCode: 73,
      key: "I",
      code: "KeyI"
    },
    J: {
      keyCode: 74,
      key: "J",
      code: "KeyJ"
    },
    K: {
      keyCode: 75,
      key: "K",
      code: "KeyK"
    },
    L: {
      keyCode: 76,
      key: "L",
      code: "KeyL"
    },
    M: {
      keyCode: 77,
      key: "M",
      code: "KeyM"
    },
    N: {
      keyCode: 78,
      key: "N",
      code: "KeyN"
    },
    O: {
      keyCode: 79,
      key: "O",
      code: "KeyO"
    },
    P: {
      keyCode: 80,
      key: "P",
      code: "KeyP"
    },
    Q: {
      keyCode: 81,
      key: "Q",
      code: "KeyQ"
    },
    R: {
      keyCode: 82,
      key: "R",
      code: "KeyR"
    },
    S: {
      keyCode: 83,
      key: "S",
      code: "KeyS"
    },
    T: {
      keyCode: 84,
      key: "T",
      code: "KeyT"
    },
    U: {
      keyCode: 85,
      key: "U",
      code: "KeyU"
    },
    V: {
      keyCode: 86,
      key: "V",
      code: "KeyV"
    },
    W: {
      keyCode: 87,
      key: "W",
      code: "KeyW"
    },
    X: {
      keyCode: 88,
      key: "X",
      code: "KeyX"
    },
    Y: {
      keyCode: 89,
      key: "Y",
      code: "KeyY"
    },
    Z: {
      keyCode: 90,
      key: "Z",
      code: "KeyZ"
    },
    ":": {
      keyCode: 186,
      key: ":",
      code: "Semicolon"
    },
    "<": {
      keyCode: 188,
      key: "<",
      code: "Comma"
    },
    _: {
      keyCode: 189,
      key: "_",
      code: "Minus"
    },
    ">": {
      keyCode: 190,
      key: ">",
      code: "Period"
    },
    "?": {
      keyCode: 191,
      key: "?",
      code: "Slash"
    },
    "~": {
      keyCode: 192,
      key: "~",
      code: "Backquote"
    },
    "{": {
      keyCode: 219,
      key: "{",
      code: "BracketLeft"
    },
    "|": {
      keyCode: 220,
      key: "|",
      code: "Backslash"
    },
    "}": {
      keyCode: 221,
      key: "}",
      code: "BracketRight"
    },
    "\"": {
      keyCode: 222,
      key: "\"",
      code: "Quote"
    },
    SoftLeft: {
      key: "SoftLeft",
      code: "SoftLeft",
      location: 4
    },
    SoftRight: {
      key: "SoftRight",
      code: "SoftRight",
      location: 4
    },
    Camera: {
      keyCode: 44,
      key: "Camera",
      code: "Camera",
      location: 4
    },
    Call: {
      key: "Call",
      code: "Call",
      location: 4
    },
    EndCall: {
      keyCode: 95,
      key: "EndCall",
      code: "EndCall",
      location: 4
    },
    VolumeDown: {
      keyCode: 182,
      key: "VolumeDown",
      code: "VolumeDown",
      location: 4
    },
    VolumeUp: {
      keyCode: 183,
      key: "VolumeUp",
      code: "VolumeUp",
      location: 4
    }
  };
  class aY extends rL {
    #ts;
    #r3 = new Set();
    _modifiers = 0;
    constructor(e) {
      super();
      this.#ts = e;
    }
    updateClient(e) {
      this.#ts = e;
    }
    async down(e, t = {
      text: undefined,
      commands: []
    }) {
      let i = this.#r4(e);
      let r = this.#r3.has(i.code);
      this.#r3.add(i.code);
      this._modifiers |= this.#r6(i.key);
      let a = t.text === undefined ? i.text : t.text;
      await this.#ts.send("Input.dispatchKeyEvent", {
        type: a ? "keyDown" : "rawKeyDown",
        modifiers: this._modifiers,
        windowsVirtualKeyCode: i.keyCode,
        code: i.code,
        key: i.key,
        text: a,
        unmodifiedText: a,
        autoRepeat: r,
        location: i.location,
        isKeypad: i.location === 3,
        commands: t.commands
      });
    }
    #r6(e) {
      if (e === "Alt") {
        return 1;
      } else if (e === "Control") {
        return 2;
      } else if (e === "Meta") {
        return 4;
      } else {
        return (e === "Shift") * 8;
      }
    }
    #r4(e) {
      let t = this._modifiers & 8;
      let i = {
        key: "",
        keyCode: 0,
        code: "",
        text: "",
        location: 0
      };
      let r = aJ[e];
      tk(r, `Unknown key: "${e}"`);
      if (r.key) {
        i.key = r.key;
      }
      if (t && r.shiftKey) {
        i.key = r.shiftKey;
      }
      if (r.keyCode) {
        i.keyCode = r.keyCode;
      }
      if (t && r.shiftKeyCode) {
        i.keyCode = r.shiftKeyCode;
      }
      if (r.code) {
        i.code = r.code;
      }
      if (r.location) {
        i.location = r.location;
      }
      if (i.key.length === 1) {
        i.text = i.key;
      }
      if (r.text) {
        i.text = r.text;
      }
      if (t && r.shiftText) {
        i.text = r.shiftText;
      }
      if (this._modifiers & -9) {
        i.text = "";
      }
      return i;
    }
    async up(e) {
      let t = this.#r4(e);
      this._modifiers &= ~this.#r6(t.key);
      this.#r3.delete(t.code);
      await this.#ts.send("Input.dispatchKeyEvent", {
        type: "keyUp",
        modifiers: this._modifiers,
        key: t.key,
        windowsVirtualKeyCode: t.keyCode,
        code: t.code,
        location: t.location
      });
    }
    async sendCharacter(e) {
      await this.#ts.send("Input.insertText", {
        text: e
      });
    }
    charIsKey(e) {
      return !!aJ[e];
    }
    async type(e, t = {}) {
      let i = t.delay || undefined;
      for (let t of e) {
        if (this.charIsKey(t)) {
          await this.press(t, {
            delay: i
          });
        } else {
          if (i) {
            await new Promise(e => setTimeout(e, i));
          }
          await this.sendCharacter(t);
        }
      }
    }
    async press(e, t = {}) {
      let {
        delay: i = null
      } = t;
      await this.down(e, t);
      if (i) {
        await new Promise(e => setTimeout(e, t.delay));
      }
      await this.up(e);
    }
  }
  let aZ = e => {
    switch (e) {
      case rO.Left:
        return 1;
      case rO.Right:
        return 2;
      case rO.Middle:
        return 4;
      case rO.Back:
        return 8;
      case rO.Forward:
        return 16;
    }
  };
  let a0 = e => {
    if (e & 1) {
      return rO.Left;
    }
    if (e & 2) {
      return rO.Right;
    }
    if (e & 4) {
      return rO.Middle;
    }
    if (e & 8) {
      return rO.Back;
    }
    if (e & 16) {
      return rO.Forward;
    }
    return "none";
  };
  class a1 extends rR {
    #ts;
    #r2;
    constructor(e, t) {
      super();
      this.#ts = e;
      this.#r2 = t;
    }
    updateClient(e) {
      this.#ts = e;
    }
    #r7 = {
      position: {
        x: 0,
        y: 0
      },
      buttons: 0
    };
    get #tb() {
      return Object.assign({
        ...this.#r7
      }, ...this.#r8);
    }
    #r8 = [];
    #r9() {
      let e = {};
      this.#r8.push(e);
      let t = () => {
        this.#r8.splice(this.#r8.indexOf(e), 1);
      };
      return {
        update: t => {
          Object.assign(e, t);
        },
        commit: () => {
          this.#r7 = {
            ...this.#r7,
            ...e
          };
          t();
        },
        rollback: t
      };
    }
    async #ae(e) {
      let {
        update: t,
        commit: i,
        rollback: r
      } = this.#r9();
      try {
        await e(t);
        i();
      } catch (e) {
        r();
        throw e;
      }
    }
    async reset() {
      let e = [];
      for (let [t, i] of [[1, rO.Left], [4, rO.Middle], [2, rO.Right], [16, rO.Forward], [8, rO.Back]]) {
        if (this.#tb.buttons & t) {
          e.push(this.up({
            button: i
          }));
        }
      }
      if (this.#tb.position.x !== 0 || this.#tb.position.y !== 0) {
        e.push(this.move(0, 0));
      }
      await Promise.all(e);
    }
    async move(e, t, i = {}) {
      let {
        steps: r = 1
      } = i;
      let a = this.#tb.position;
      let n = {
        x: e,
        y: t
      };
      for (let e = 1; e <= r; e++) {
        await this.#ae(t => {
          t({
            position: {
              x: a.x + (n.x - a.x) * (e / r),
              y: a.y + (n.y - a.y) * (e / r)
            }
          });
          let {
            buttons: i,
            position: s
          } = this.#tb;
          return this.#ts.send("Input.dispatchMouseEvent", {
            type: "mouseMoved",
            modifiers: this.#r2._modifiers,
            buttons: i,
            button: a0(i),
            ...s
          });
        });
      }
    }
    async down(e = {}) {
      let {
        button: t = rO.Left,
        clickCount: i = 1
      } = e;
      let r = aZ(t);
      if (!r) {
        throw Error(`Unsupported mouse button: ${t}`);
      }
      if (this.#tb.buttons & r) {
        throw Error(`'${t}' is already pressed.`);
      }
      await this.#ae(e => {
        e({
          buttons: this.#tb.buttons | r
        });
        let {
          buttons: a,
          position: n
        } = this.#tb;
        return this.#ts.send("Input.dispatchMouseEvent", {
          type: "mousePressed",
          modifiers: this.#r2._modifiers,
          clickCount: i,
          buttons: a,
          button: t,
          ...n
        });
      });
    }
    async up(e = {}) {
      let {
        button: t = rO.Left,
        clickCount: i = 1
      } = e;
      let r = aZ(t);
      if (!r) {
        throw Error(`Unsupported mouse button: ${t}`);
      }
      if (!(this.#tb.buttons & r)) {
        throw Error(`'${t}' is not pressed.`);
      }
      await this.#ae(e => {
        e({
          buttons: this.#tb.buttons & ~r
        });
        let {
          buttons: a,
          position: n
        } = this.#tb;
        return this.#ts.send("Input.dispatchMouseEvent", {
          type: "mouseReleased",
          modifiers: this.#r2._modifiers,
          clickCount: i,
          buttons: a,
          button: t,
          ...n
        });
      });
    }
    async click(e, t, i = {}) {
      let {
        delay: r,
        count: a = 1,
        clickCount: n = a
      } = i;
      if (a < 1) {
        throw Error("Click must occur a positive number of times.");
      }
      let s = [this.move(e, t)];
      if (n === a) {
        for (let e = 1; e < a; ++e) {
          s.push(this.down({
            ...i,
            clickCount: e
          }), this.up({
            ...i,
            clickCount: e
          }));
        }
      }
      s.push(this.down({
        ...i,
        clickCount: n
      }));
      if (typeof r == "number") {
        await Promise.all(s);
        s.length = 0;
        await new Promise(e => {
          setTimeout(e, r);
        });
      }
      s.push(this.up({
        ...i,
        clickCount: n
      }));
      await Promise.all(s);
    }
    async wheel(e = {}) {
      let {
        deltaX: t = 0,
        deltaY: i = 0
      } = e;
      let {
        position: r,
        buttons: a
      } = this.#tb;
      await this.#ts.send("Input.dispatchMouseEvent", {
        type: "mouseWheel",
        pointerType: "mouse",
        modifiers: this.#r2._modifiers,
        deltaY: i,
        deltaX: t,
        buttons: a,
        ...r
      });
    }
    async drag(e, t) {
      let i = new Promise(e => {
        this.#ts.once("Input.dragIntercepted", t => e(t.data));
      });
      await this.move(e.x, e.y);
      await this.down();
      await this.move(t.x, t.y);
      return await i;
    }
    async dragEnter(e, t) {
      await this.#ts.send("Input.dispatchDragEvent", {
        type: "dragEnter",
        x: e.x,
        y: e.y,
        modifiers: this.#r2._modifiers,
        data: t
      });
    }
    async dragOver(e, t) {
      await this.#ts.send("Input.dispatchDragEvent", {
        type: "dragOver",
        x: e.x,
        y: e.y,
        modifiers: this.#r2._modifiers,
        data: t
      });
    }
    async drop(e, t) {
      await this.#ts.send("Input.dispatchDragEvent", {
        type: "drop",
        x: e.x,
        y: e.y,
        modifiers: this.#r2._modifiers,
        data: t
      });
    }
    async dragAndDrop(e, t, i = {}) {
      let {
        delay: r = null
      } = i;
      let a = await this.drag(e, t);
      await this.dragEnter(t, a);
      await this.dragOver(t, a);
      if (r) {
        await new Promise(e => setTimeout(e, r));
      }
      await this.drop(t, a);
      await this.up();
    }
  }
  class a5 {
    #at = false;
    #ai;
    #ar;
    #ts;
    #r2;
    constructor(e, t, i, r) {
      this.#ts = e;
      this.#ai = t;
      this.#r2 = i;
      this.#ar = r;
    }
    updateClient(e) {
      this.#ts = e;
    }
    async start() {
      if (this.#at) {
        throw new tR("Touch has already started");
      }
      await this.#ts.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [this.#ar],
        modifiers: this.#r2._modifiers
      });
      this.#at = true;
    }
    move(e, t) {
      this.#ar.x = Math.round(e);
      this.#ar.y = Math.round(t);
      return this.#ts.send("Input.dispatchTouchEvent", {
        type: "touchMove",
        touchPoints: [this.#ar],
        modifiers: this.#r2._modifiers
      });
    }
    async end() {
      await this.#ts.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [this.#ar],
        modifiers: this.#r2._modifiers
      });
      this.#ai.removeHandle(this);
    }
  }
  class a3 extends rD {
    #ts;
    #r2;
    constructor(e, t) {
      super();
      this.#ts = e;
      this.#r2 = t;
    }
    updateClient(e) {
      this.#ts = e;
      this.touches.forEach(t => {
        t.updateClient(e);
      });
    }
    async touchStart(e, t) {
      let i = this.idGenerator();
      let r = new a5(this.#ts, this, this.#r2, {
        x: Math.round(e),
        y: Math.round(t),
        radiusX: 0.5,
        radiusY: 0.5,
        force: 0.5,
        id: i
      });
      await r.start();
      this.touches.push(r);
      return r;
    }
  }
  class a4 {
    #ts;
    #aa = false;
    #an;
    constructor(e) {
      this.#ts = e;
    }
    updateClient(e) {
      this.#ts = e;
    }
    async start(e = {}) {
      tk(!this.#aa, "Cannot start recording trace while already recording trace.");
      let {
        path: t,
        screenshots: i = false,
        categories: r = ["-*", "devtools.timeline", "v8.execute", "disabled-by-default-devtools.timeline", "disabled-by-default-devtools.timeline.frame", "toplevel", "blink.console", "blink.user_timing", "latencyInfo", "disabled-by-default-devtools.timeline.stack", "disabled-by-default-v8.cpu_profiler"]
      } = e;
      if (i) {
        r.push("disabled-by-default-devtools.screenshot");
      }
      let a = r.filter(e => e.startsWith("-")).map(e => e.slice(1));
      let n = r.filter(e => !e.startsWith("-"));
      this.#an = t;
      this.#aa = true;
      await this.#ts.send("Tracing.start", {
        transferMode: "ReturnAsStream",
        traceConfig: {
          excludedCategories: a,
          includedCategories: n
        }
      });
    }
    async stop() {
      let e = ir.create();
      this.#ts.once("Tracing.tracingComplete", async t => {
        try {
          tk(t.stream, "Missing \"stream\"");
          let i = await tY(this.#ts, t.stream);
          let r = await tJ(i, this.#an);
          e.resolve(r ?? undefined);
        } catch (t) {
          if (id(t)) {
            e.reject(t);
          } else {
            e.reject(Error(`Unknown error: ${t}`));
          }
        }
      });
      await this.#ts.send("Tracing.end");
      this.#aa = false;
      return await e.valueOrThrow();
    }
  }
  class a6 extends rQ {
    #ey;
    #ts;
    #eJ;
    #e5;
    constructor(e, t, i, r, a, n, s) {
      super(t);
      this.#eJ = i;
      this.#ts = e;
      this.#e5 = r;
      this.#ey = new a_(this, new r_());
      this.#ts.once("Runtime.executionContextCreated", async t => {
        this.#ey.setContext(new aR(e, t.context, this.#ey));
      });
      this.#ey.emitter.on("consoleapicalled", async e => {
        try {
          return a(e.type, e.args.map(e => new aC(this.#ey, e)), e.stackTrace);
        } catch (e) {
          tq(e);
        }
      });
      this.#ts.on("Runtime.exceptionThrown", n);
      this.#ts.once(T.Disconnected, () => {
        this.#ey.dispose();
      });
      s?.addClient(this.#ts).catch(tq);
      this.#ts.send("Runtime.enable").catch(tq);
    }
    mainRealm() {
      return this.#ey;
    }
    get client() {
      return this.#ts;
    }
    async close() {
      switch (this.#e5) {
        case P.SERVICE_WORKER:
        case P.SHARED_WORKER:
          await this.client.connection()?.send("Target.closeTarget", {
            targetId: this.#eJ
          });
          await this.client.connection()?.send("Target.detachFromTarget", {
            sessionId: this.client.id()
          });
          break;
        default:
          await this.evaluate(() => {
            self.close();
          });
      }
    }
  }
  function a2(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  b = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function a7(e) {
    function t(t) {
      e.error = e.hasError ? new b(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  function a8(e) {
    if (e === "warning") {
      return "warn";
    } else {
      return e;
    }
  }
  class a9 extends rj {
    static async _create(e, t, i) {
      let r = new a9(e, t);
      await r.#as();
      if (i) {
        try {
          await r.setViewport(i);
        } catch (e) {
          if (id(e) && ai(e)) {
            tq(e);
          } else {
            throw e;
          }
        }
      }
      return r;
    }
    #tt = false;
    #ao;
    #al;
    #ac;
    #ad;
    #au;
    #r2;
    #ah;
    #ap;
    #t3;
    #af;
    #am;
    #t7 = new Map();
    #ay = new Map();
    #ag;
    #aw;
    #av = new Map();
    #ab = new Set();
    #ak = ir.create();
    #aS = false;
    #aT = false;
    constructor(e, t) {
      super();
      this.#al = e;
      this.#ad = e.parentSession();
      tk(this.#ad, "Tab target session is not defined.");
      this.#au = this.#ad.target();
      tk(this.#au, "Tab target is not defined.");
      this.#ac = t;
      this.#ao = t._targetManager();
      this.#r2 = new aY(e);
      this.#ah = new a1(e, this.#r2);
      this.#ap = new a3(e, this.#r2);
      this.#t3 = new aQ(e, this, this._timeoutSettings);
      this.#af = new ah(e);
      this.#am = new a4(e);
      this.#ag = new ar(e);
      this.#aw = null;
      let i = new ty(this.#t3);
      i.on(x.FrameAttached, e => {
        this.emit("frameattached", e);
      });
      i.on(x.FrameDetached, e => {
        this.emit("framedetached", e);
      });
      i.on(x.FrameNavigated, e => {
        this.emit("framenavigated", e);
      });
      i.on(x.ConsoleApiCalled, ([e, t]) => {
        this.#t2(e, t);
      });
      i.on(x.BindingCalled, ([e, t]) => {
        this.#t6(e, t);
      });
      let r = new ty(this.#t3.networkManager);
      r.on(I.Request, e => {
        this.emit("request", e);
      });
      r.on(I.RequestServedFromCache, e => {
        this.emit("requestservedfromcache", e);
      });
      r.on(I.Response, e => {
        this.emit("response", e);
      });
      r.on(I.RequestFailed, e => {
        this.emit("requestfailed", e);
      });
      r.on(I.RequestFinished, e => {
        this.emit("requestfinished", e);
      });
      this.#ad.on(T.Swapped, this.#aC.bind(this));
      this.#ad.on(T.Ready, this.#aM.bind(this));
      this.#ao.on("targetGone", this.#aE);
      this.#au._isClosedDeferred.valueOrThrow().then(() => {
        this.#ao.off("targetGone", this.#aE);
        this.emit("close", undefined);
        this.#tt = true;
      }).catch(tq);
      this.#aP();
      this.#aI();
    }
    #aI() {
      let e = [];
      for (let t of this.#ao.getChildTargets(this.#ac)) {
        e.push(t);
      }
      let t = 0;
      while (t < e.length) {
        let i = e[t];
        t++;
        let r = i._session();
        if (r) {
          this.#ax(r);
        }
        for (let t of this.#ao.getChildTargets(i)) {
          e.push(t);
        }
      }
    }
    async #aC(e) {
      tk(e instanceof r8, "CDPSession is not instance of CdpCDPSession");
      this.#al = e;
      this.#ac = e.target();
      tk(this.#ac, "Missing target on swap");
      this.#r2.updateClient(e);
      this.#ah.updateClient(e);
      this.#ap.updateClient(e);
      this.#af.updateClient(e);
      this.#am.updateClient(e);
      this.#ag.updateClient(e);
      await this.#t3.swapFrameTree(e);
      this.#aP();
    }
    async #aM(e) {
      tk(e instanceof r8);
      if (e.target()._subtype() === "prerender") {
        this.#t3.registerSpeculativeSession(e).catch(tq);
        this.#af.registerSpeculativeSession(e).catch(tq);
      }
    }
    #aP() {
      let e = new ty(this.#al);
      e.on(T.Ready, this.#ax);
      e.on(T.Disconnected, () => {
        this.#ak.reject(new tN("Target closed"));
      });
      e.on("Page.domContentEventFired", () => {
        this.emit("domcontentloaded", undefined);
      });
      e.on("Page.loadEventFired", () => {
        this.emit("load", undefined);
      });
      e.on("Page.javascriptDialogOpening", this.#aF.bind(this));
      e.on("Runtime.exceptionThrown", this.#aA.bind(this));
      e.on("Inspector.targetCrashed", this.#aL.bind(this));
      e.on("Performance.metrics", this.#aO.bind(this));
      e.on("Log.entryAdded", this.#aR.bind(this));
      e.on("Page.fileChooserOpened", this.#aD.bind(this));
    }
    #aE = e => {
      let t = e._session()?.id();
      let i = this.#av.get(t);
      if (i) {
        this.#av.delete(t);
        this.emit("workerdestroyed", i);
      }
    };
    #ax = e => {
      tk(e instanceof r8);
      this.#t3.onAttachedToTarget(e.target());
      if (e.target()._getTargetInfo().type === "worker") {
        let t = new a6(e, e.target().url(), e.target()._targetId, e.target().type(), this.#a_.bind(this), this.#aA.bind(this), this.#t3.networkManager);
        this.#av.set(e.id(), t);
        this.emit("workercreated", t);
      }
      e.on(T.Ready, this.#ax);
    };
    async #as() {
      try {
        await Promise.all([this.#t3.initialize(this.#al), this.#al.send("Performance.enable"), this.#al.send("Log.enable")]);
      } catch (e) {
        if (id(e) && ai(e)) {
          tq(e);
        } else {
          throw e;
        }
      }
    }
    async #aD(e) {
      let t = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        if (!this.#ab.size) {
          return;
        }
        let i = this.#t3.frame(e.frameId);
        tk(i, "This should never happen.");
        let r = a2(t, await i.worlds[aN].adoptBackendNode(e.backendNodeId), false);
        let a = new r6(r.move(), e.mode !== "selectSingle");
        for (let e of this.#ab) {
          e.resolve(a);
        }
        this.#ab.clear();
      } catch (e) {
        t.error = e;
        t.hasError = true;
      } finally {
        a7(t);
      }
    }
    _client() {
      return this.#al;
    }
    isServiceWorkerBypassed() {
      return this.#aS;
    }
    isDragInterceptionEnabled() {
      return this.#aT;
    }
    isJavaScriptEnabled() {
      return this.#af.javascriptEnabled;
    }
    async waitForFileChooser(e = {}) {
      let t;
      let i = this.#ab.size === 0;
      let {
        timeout: r = this._timeoutSettings.timeout()
      } = e;
      let a = ir.create({
        message: `Waiting for \`FileChooser\` failed: ${r}ms exceeded`,
        timeout: r
      });
      if (e.signal) {
        e.signal.addEventListener("abort", () => {
          a.reject(e.signal?.reason);
        }, {
          once: true
        });
      }
      this.#ab.add(a);
      if (i) {
        t = this.#al.send("Page.setInterceptFileChooserDialog", {
          enabled: true
        });
      }
      try {
        let [e] = await Promise.all([a.valueOrThrow(), t]);
        return e;
      } catch (e) {
        this.#ab.delete(a);
        throw e;
      }
    }
    async setGeolocation(e) {
      return await this.#af.setGeolocation(e);
    }
    target() {
      return this.#ac;
    }
    browser() {
      return this.#ac.browser();
    }
    browserContext() {
      return this.#ac.browserContext();
    }
    #aL() {
      this.emit("error", Error("Page crashed!"));
    }
    #aR(e) {
      let {
        level: t,
        text: i,
        args: r,
        source: a,
        url: n,
        lineNumber: s
      } = e.entry;
      if (r) {
        r.map(e => {
          aM(this.#al, e);
        });
      }
      if (a !== "worker") {
        this.emit("console", new r4(a8(t), i, [], [{
          url: n,
          lineNumber: s
        }]));
      }
    }
    mainFrame() {
      return this.#t3.mainFrame();
    }
    get keyboard() {
      return this.#r2;
    }
    get touchscreen() {
      return this.#ap;
    }
    get coverage() {
      return this.#ag;
    }
    get tracing() {
      return this.#am;
    }
    frames() {
      return this.#t3.frames();
    }
    workers() {
      return Array.from(this.#av.values());
    }
    async setRequestInterception(e) {
      return await this.#t3.networkManager.setRequestInterception(e);
    }
    async setBypassServiceWorker(e) {
      this.#aS = e;
      return await this.#al.send("Network.setBypassServiceWorker", {
        bypass: e
      });
    }
    async setDragInterception(e) {
      this.#aT = e;
      return await this.#al.send("Input.setInterceptDrags", {
        enabled: e
      });
    }
    async setOfflineMode(e) {
      return await this.#t3.networkManager.setOfflineMode(e);
    }
    async emulateNetworkConditions(e) {
      return await this.#t3.networkManager.emulateNetworkConditions(e);
    }
    setDefaultNavigationTimeout(e) {
      this._timeoutSettings.setDefaultNavigationTimeout(e);
    }
    setDefaultTimeout(e) {
      this._timeoutSettings.setDefaultTimeout(e);
    }
    getDefaultTimeout() {
      return this._timeoutSettings.timeout();
    }
    getDefaultNavigationTimeout() {
      return this._timeoutSettings.navigationTimeout();
    }
    async queryObjects(e) {
      tk(!e.disposed, "Prototype JSHandle is disposed!");
      tk(e.id, "Prototype JSHandle must not be referencing primitive value");
      let t = await this.mainFrame().client.send("Runtime.queryObjects", {
        prototypeObjectId: e.id
      });
      return this.mainFrame().mainRealm().createCdpHandle(t.objects);
    }
    async cookies(...e) {
      let t = (await this.#al.send("Network.getCookies", {
        urls: e.length ? e : [this.url()]
      })).cookies;
      let i = ["sourcePort"];
      return t.map(e => {
        for (let t of i) {
          delete e[t];
        }
        return e;
      }).map(e => ({
        ...e,
        partitionKey: e.partitionKey ? e.partitionKey.topLevelSite : undefined
      }));
    }
    async deleteCookie(...e) {
      let t = this.url();
      for (let i of e) {
        let e = {
          ...i,
          partitionKey: nt(i.partitionKey)
        };
        if (!i.url && t.startsWith("http")) {
          e.url = t;
        }
        await this.#al.send("Network.deleteCookies", e);
        if (t.startsWith("http") && !e.partitionKey) {
          let i = new URL(t);
          await this.#al.send("Network.deleteCookies", {
            ...e,
            partitionKey: {
              topLevelSite: i.origin.replace(`:${i.port}`, ""),
              hasCrossSiteAncestor: false
            }
          });
        }
      }
    }
    async setCookie(...e) {
      let t = this.url();
      let i = t.startsWith("http");
      let r = e.map(e => {
        let r = Object.assign({}, e);
        if (!r.url && i) {
          r.url = t;
        }
        tk(r.url !== "about:blank", `Blank page can not have cookie "${r.name}"`);
        tk(!String.prototype.startsWith.call(r.url || "", "data:"), `Data URL page can not have cookie "${r.name}"`);
        return r;
      });
      await this.deleteCookie(...r);
      if (r.length) {
        await this.#al.send("Network.setCookies", {
          cookies: r.map(e => ({
            ...e,
            partitionKey: nt(e.partitionKey)
          }))
        });
      }
    }
    async exposeFunction(e, t) {
      let i;
      if (this.#t7.has(e)) {
        throw Error(`Failed to add page binding with name ${e}: window['${e}'] already exists!`);
      }
      let r = aT("exposedFun", e);
      i = typeof t == "function" ? new r3(e, t, r) : new r3(e, t.default, r);
      this.#t7.set(e, i);
      let [{
        identifier: a
      }] = await Promise.all([this.#t3.evaluateOnNewDocument(r), this.#t3.addExposedFunctionBinding(i)]);
      this.#ay.set(e, a);
    }
    async removeExposedFunction(e) {
      let t = this.#ay.get(e);
      if (!t) {
        throw Error(`Function with name "${e}" does not exist`);
      }
      let i = this.#t7.get(e);
      this.#ay.delete(e);
      this.#t7.delete(e);
      await Promise.all([this.#t3.removeScriptToEvaluateOnNewDocument(t), this.#t3.removeExposedFunctionBinding(i)]);
    }
    async authenticate(e) {
      return await this.#t3.networkManager.authenticate(e);
    }
    async setExtraHTTPHeaders(e) {
      return await this.#t3.networkManager.setExtraHTTPHeaders(e);
    }
    async setUserAgent(e, t) {
      return await this.#t3.networkManager.setUserAgent(e, t);
    }
    async metrics() {
      let e = await this.#al.send("Performance.getMetrics");
      return this.#aN(e.metrics);
    }
    #aO(e) {
      this.emit("metrics", {
        title: e.title,
        metrics: this.#aN(e.metrics)
      });
    }
    #aN(e) {
      let t = {};
      for (let i of e || []) {
        if (ne.has(i.name)) {
          t[i.name] = i.value;
        }
      }
      return t;
    }
    #aA(e) {
      this.emit("pageerror", av(e.exceptionDetails));
    }
    #t2(e, t) {
      let i = t.args.map(t => e.createCdpHandle(t));
      this.#a_(a8(t.type), i, t.stackTrace);
    }
    async #t6(e, t) {
      let i;
      try {
        i = JSON.parse(t.payload);
      } catch {
        return;
      }
      let {
        type: r,
        name: a,
        seq: n,
        args: s,
        isTrivial: o
      } = i;
      if (r !== "exposedFun") {
        return;
      }
      let l = e.context;
      if (!l) {
        return;
      }
      let c = this.#t7.get(a);
      await c?.run(l, n, s, o);
    }
    #a_(e, t, i) {
      if (!this.listenerCount("console")) {
        t.forEach(e => e.dispose());
        return;
      }
      let r = [];
      for (let e of t) {
        let t = e.remoteObject();
        if (t.objectId) {
          r.push(e.toString());
        } else {
          r.push(ab(t));
        }
      }
      let a = [];
      if (i) {
        for (let e of i.callFrames) {
          a.push({
            url: e.url,
            lineNumber: e.lineNumber,
            columnNumber: e.columnNumber
          });
        }
      }
      let n = new r4(a8(e), r.join(" "), t, a);
      this.emit("console", n);
    }
    #aF(e) {
      let t = tZ(e.type);
      let i = new ao(this.#al, t, e.message, e.defaultPrompt);
      this.emit("dialog", i);
    }
    async reload(e) {
      let [t] = await Promise.all([this.waitForNavigation({
        ...e,
        ignoreSameDocumentNavigation: true
      }), this.#al.send("Page.reload")]);
      return t;
    }
    async createCDPSession() {
      return await this.target().createCDPSession();
    }
    async goBack(e = {}) {
      return await this.#aK(-1, e);
    }
    async goForward(e = {}) {
      return await this.#aK(1, e);
    }
    async #aK(e, t) {
      let i = await this.#al.send("Page.getNavigationHistory");
      let r = i.entries[i.currentIndex + e];
      if (r) {
        return (await Promise.all([this.waitForNavigation(t), this.#al.send("Page.navigateToHistoryEntry", {
          entryId: r.id
        })]))[0];
      } else {
        return null;
      }
    }
    async bringToFront() {
      await this.#al.send("Page.bringToFront");
    }
    async setJavaScriptEnabled(e) {
      return await this.#af.setJavaScriptEnabled(e);
    }
    async setBypassCSP(e) {
      await this.#al.send("Page.setBypassCSP", {
        enabled: e
      });
    }
    async emulateMediaType(e) {
      return await this.#af.emulateMediaType(e);
    }
    async emulateCPUThrottling(e) {
      return await this.#af.emulateCPUThrottling(e);
    }
    async emulateMediaFeatures(e) {
      return await this.#af.emulateMediaFeatures(e);
    }
    async emulateTimezone(e) {
      return await this.#af.emulateTimezone(e);
    }
    async emulateIdleState(e) {
      return await this.#af.emulateIdleState(e);
    }
    async emulateVisionDeficiency(e) {
      return await this.#af.emulateVisionDeficiency(e);
    }
    async setViewport(e) {
      let t = await this.#af.emulateViewport(e);
      this.#aw = e;
      if (t) {
        await this.reload();
      }
    }
    viewport() {
      return this.#aw;
    }
    async evaluateOnNewDocument(e, ...t) {
      let i = tQ(e, ...t);
      return await this.#t3.evaluateOnNewDocument(i);
    }
    async removeScriptToEvaluateOnNewDocument(e) {
      return await this.#t3.removeScriptToEvaluateOnNewDocument(e);
    }
    async setCacheEnabled(e = true) {
      await this.#t3.networkManager.setCacheEnabled(e);
    }
    async _screenshot(e) {
      let t = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        let {
          fromSurface: i,
          omitBackground: r,
          optimizeForSpeed: a,
          quality: n,
          clip: s,
          type: o,
          captureBeyondViewport: l
        } = e;
        let c = a2(t, new tf(), true);
        if (r && (o === "png" || o === "webp")) {
          await this.#af.setTransparentBackgroundColor();
          c.defer(async () => {
            await this.#af.resetDefaultBackgroundColor().catch(tq);
          });
        }
        let d = s;
        if (d && !l) {
          let e = await this.mainFrame().isolatedRealm().evaluate(() => {
            let {
              height: e,
              pageLeft: t,
              pageTop: i,
              width: r
            } = window.visualViewport;
            return {
              x: t,
              y: i,
              height: e,
              width: r
            };
          });
          d = function (e, t) {
            let i = Math.max(e.x, t.x);
            let r = Math.max(e.y, t.y);
            return {
              x: i,
              y: r,
              width: Math.max(Math.min(e.x + e.width, t.x + t.width) - i, 0),
              height: Math.max(Math.min(e.y + e.height, t.y + t.height) - r, 0)
            };
          }(d, e);
        }
        let {
          data: u
        } = await this.#al.send("Page.captureScreenshot", {
          format: o,
          optimizeForSpeed: a,
          fromSurface: i,
          ...(n !== undefined ? {
            quality: Math.round(n)
          } : {}),
          ...(d ? {
            clip: {
              ...d,
              scale: d.scale ?? 1
            }
          } : {}),
          captureBeyondViewport: l
        });
        return u;
      } catch (e) {
        t.error = e;
        t.hasError = true;
      } finally {
        let e = a7(t);
        if (e) {
          await e;
        }
      }
    }
    async createPDFStream(e = {}) {
      let {
        timeout: t = this._timeoutSettings.timeout()
      } = e;
      let {
        landscape: i,
        displayHeaderFooter: r,
        headerTemplate: a,
        footerTemplate: n,
        printBackground: s,
        scale: o,
        width: l,
        height: c,
        margin: d,
        pageRanges: u,
        preferCSSPageSize: h,
        omitBackground: p,
        tagged: f,
        outline: m,
        waitForFonts: y
      } = t6(e);
      if (p) {
        await this.#af.setTransparentBackgroundColor();
      }
      if (y) {
        await eG(ez(this.mainFrame().isolatedRealm().evaluate(() => document.fonts.ready)).pipe(tl(t0(t))));
      }
      let g = this.#al.send("Page.printToPDF", {
        transferMode: "ReturnAsStream",
        landscape: i,
        displayHeaderFooter: r,
        headerTemplate: a,
        footerTemplate: n,
        printBackground: s,
        scale: o,
        paperWidth: l,
        paperHeight: c,
        marginTop: d.top,
        marginBottom: d.bottom,
        marginLeft: d.left,
        marginRight: d.right,
        pageRanges: u,
        preferCSSPageSize: h,
        generateTaggedPDF: f,
        generateDocumentOutline: m
      });
      let w = await eG(ez(g).pipe(tl(t0(t))));
      if (p) {
        await this.#af.resetDefaultBackgroundColor();
      }
      tk(w.stream, "`stream` is missing from `Page.printToPDF");
      return await tY(this.#al, w.stream);
    }
    async pdf(e = {}) {
      let {
        path: t
      } = e;
      let i = await this.createPDFStream(e);
      let r = await tJ(i, t);
      tk(r, "Could not create typed array");
      return r;
    }
    async close(e = {
      runBeforeUnload: undefined
    }) {
      let t = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        a2(t, await this.browserContext().waitForScreenshotOperations(), false);
        let i = this.#al.connection();
        tk(i, "Protocol error: Connection closed. Most likely the page has been closed.");
        if (e.runBeforeUnload) {
          await this.#al.send("Page.close");
        } else {
          await i.send("Target.closeTarget", {
            targetId: this.#ac._targetId
          });
          await this.#au._isClosedDeferred.valueOrThrow();
        }
      } catch (e) {
        t.error = e;
        t.hasError = true;
      } finally {
        a7(t);
      }
    }
    isClosed() {
      return this.#tt;
    }
    get mouse() {
      return this.#ah;
    }
    async waitForDevicePrompt(e = {}) {
      return await this.mainFrame().waitForDevicePrompt(e);
    }
  }
  let ne = new Set(["Timestamp", "Documents", "Frames", "JSEventListeners", "Nodes", "LayoutCount", "RecalcStyleCount", "LayoutDuration", "RecalcStyleDuration", "ScriptDuration", "TaskDuration", "JSHeapUsedSize", "JSHeapTotalSize"]);
  function nt(e) {
    if (e === undefined) {
      return undefined;
    } else if (typeof e == "string") {
      return {
        topLevelSite: e,
        hasCrossSiteAncestor: false
      };
    } else {
      return {
        topLevelSite: e.sourceOrigin,
        hasCrossSiteAncestor: e.hasCrossSiteAncestor ?? false
      };
    }
  }
  function ni(e, t, i) {
    if (t != null) {
      var r;
      var a;
      if (typeof t != "object" && typeof t != "function") {
        throw TypeError("Object expected.");
      }
      if (i) {
        if (!Symbol.asyncDispose) {
          throw TypeError("Symbol.asyncDispose is not defined.");
        }
        r = t[Symbol.asyncDispose];
      }
      if (r === undefined) {
        if (!Symbol.dispose) {
          throw TypeError("Symbol.dispose is not defined.");
        }
        r = t[Symbol.dispose];
        if (i) {
          a = r;
        }
      }
      if (typeof r != "function") {
        throw TypeError("Object not disposable.");
      }
      if (a) {
        r = function () {
          try {
            a.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }
      e.stack.push({
        value: t,
        dispose: r,
        async: i
      });
    } else if (i) {
      e.stack.push({
        async: true
      });
    }
    return t;
  }
  k = typeof SuppressedError == "function" ? SuppressedError : function (e, t, i) {
    var r = Error(i);
    r.name = "SuppressedError";
    r.error = e;
    r.suppressed = t;
    return r;
  };
  function nr(e) {
    function t(t) {
      e.error = e.hasError ? new k(t, e.error, "An error was suppressed during disposal.") : t;
      e.hasError = true;
    }
    var i;
    var r = 0;
    return function a() {
      while (i = e.stack.pop()) {
        try {
          if (!i.async && r === 1) {
            r = 0;
            e.stack.push(i);
            return Promise.resolve().then(a);
          }
          if (i.dispose) {
            var n = i.dispose.call(i.value);
            if (i.async) {
              r |= 2;
              return Promise.resolve(n).then(a, function (e) {
                t(e);
                return a();
              });
            }
          } else {
            r |= 1;
          }
        } catch (e) {
          t(e);
        }
      }
      if (r === 1) {
        if (e.hasError) {
          return Promise.reject(e.error);
        } else {
          return Promise.resolve();
        }
      }
      if (e.hasError) {
        throw e.error;
      }
    }();
  }
  class na extends is {
    #e3;
    #aq;
    #eJ;
    constructor(e, t, i) {
      super();
      this.#e3 = e;
      this.#aq = t;
      this.#eJ = i;
    }
    get id() {
      return this.#eJ;
    }
    targets() {
      return this.#aq.targets().filter(e => e.browserContext() === this);
    }
    async pages() {
      return (await Promise.all(this.targets().filter(e => e.type() === "page" || e.type() === "other" && this.#aq._getIsPageTargetCallback()?.(e)).map(e => e.page()))).filter(e => !!e);
    }
    async overridePermissions(e, t) {
      let i = t.map(e => {
        let t = it.get(e);
        if (!t) {
          throw Error("Unknown permission: " + e);
        }
        return t;
      });
      await this.#e3.send("Browser.grantPermissions", {
        origin: e,
        browserContextId: this.#eJ || undefined,
        permissions: i
      });
    }
    async clearPermissionOverrides() {
      await this.#e3.send("Browser.resetPermissions", {
        browserContextId: this.#eJ || undefined
      });
    }
    async newPage() {
      let e = {
        stack: [],
        error: undefined,
        hasError: false
      };
      try {
        ni(e, await this.waitForScreenshotOperations(), false);
        return await this.#aq._createPageInContext(this.#eJ);
      } catch (t) {
        e.error = t;
        e.hasError = true;
      } finally {
        nr(e);
      }
    }
    browser() {
      return this.#aq;
    }
    async close() {
      tk(this.#eJ, "Default BrowserContext cannot be closed!");
      await this.#aq._disposeContext(this.#eJ);
    }
    async cookies() {
      let {
        cookies: e
      } = await this.#e3.send("Storage.getCookies", {
        browserContextId: this.#eJ
      });
      return e.map(e => ({
        ...e,
        partitionKey: e.partitionKey ? {
          sourceOrigin: e.partitionKey.topLevelSite,
          hasCrossSiteAncestor: e.partitionKey.hasCrossSiteAncestor
        } : undefined
      }));
    }
    async setCookie(...e) {
      return await this.#e3.send("Storage.setCookies", {
        browserContextId: this.#eJ,
        cookies: e.map(e => ({
          ...e,
          partitionKey: nt(e.partitionKey)
        }))
      });
    }
    async setDownloadBehavior(e) {
      await this.#e3.send("Browser.setDownloadBehavior", {
        behavior: e.policy,
        downloadPath: e.downloadPath,
        browserContextId: this.#eJ
      });
    }
  }
  (S = F ||= {}).SUCCESS = "success";
  S.ABORTED = "aborted";
  class nn extends rX {
    #aH;
    #aB;
    #aj;
    #ao;
    #aW;
    #az = new Set();
    _initializedDeferred = ir.create();
    _isClosedDeferred = ir.create();
    _targetId;
    constructor(e, t, i, r, a) {
      super();
      this.#aB = t;
      this.#ao = r;
      this.#aj = e;
      this.#aH = i;
      this._targetId = e.targetId;
      this.#aW = a;
      if (this.#aB) {
        this.#aB.setTarget(this);
      }
    }
    async asPage() {
      let e = this._session();
      if (e) {
        return await a9._create(e, this, null);
      } else {
        return await this.createCDPSession().then(e => a9._create(e, this, null));
      }
    }
    _subtype() {
      return this.#aj.subtype;
    }
    _session() {
      return this.#aB;
    }
    _addChildTarget(e) {
      this.#az.add(e);
    }
    _removeChildTarget(e) {
      this.#az.delete(e);
    }
    _childTargets() {
      return this.#az;
    }
    _sessionFactory() {
      if (!this.#aW) {
        throw Error("sessionFactory is not initialized");
      }
      return this.#aW;
    }
    createCDPSession() {
      if (!this.#aW) {
        throw Error("sessionFactory is not initialized");
      }
      return this.#aW(false).then(e => {
        e.setTarget(this);
        return e;
      });
    }
    url() {
      return this.#aj.url;
    }
    type() {
      switch (this.#aj.type) {
        case "page":
          return P.PAGE;
        case "background_page":
          return P.BACKGROUND_PAGE;
        case "service_worker":
          return P.SERVICE_WORKER;
        case "shared_worker":
          return P.SHARED_WORKER;
        case "browser":
          return P.BROWSER;
        case "webview":
          return P.WEBVIEW;
        case "tab":
          return P.TAB;
        default:
          return P.OTHER;
      }
    }
    _targetManager() {
      if (!this.#ao) {
        throw Error("targetManager is not initialized");
      }
      return this.#ao;
    }
    _getTargetInfo() {
      return this.#aj;
    }
    browser() {
      if (!this.#aH) {
        throw Error("browserContext is not initialized");
      }
      return this.#aH.browser();
    }
    browserContext() {
      if (!this.#aH) {
        throw Error("browserContext is not initialized");
      }
      return this.#aH;
    }
    opener() {
      let {
        openerId: e
      } = this.#aj;
      if (e) {
        return this.browser().targets().find(t => t._targetId === e);
      }
    }
    _targetInfoChanged(e) {
      this.#aj = e;
      this._checkIfInitialized();
    }
    _initialize() {
      this._initializedDeferred.resolve(F.SUCCESS);
    }
    _isTargetExposed() {
      return this.type() !== P.TAB && !this._subtype();
    }
    _checkIfInitialized() {
      if (!this._initializedDeferred.resolved()) {
        this._initializedDeferred.resolve(F.SUCCESS);
      }
    }
  }
  class ns extends nn {
    #aU;
    pagePromise;
    constructor(e, t, i, r, a, n) {
      super(e, t, i, r, a);
      this.#aU = n ?? undefined;
    }
    _initialize() {
      this._initializedDeferred.valueOrThrow().then(async e => {
        if (e === F.ABORTED) {
          return;
        }
        let t = this.opener();
        if (!(t instanceof ns)) {
          return;
        }
        if (!t || !t.pagePromise || this.type() !== "page") {
          return true;
        }
        let i = await t.pagePromise;
        if (!i.listenerCount("popup")) {
          return true;
        }
        let r = await this.page();
        i.emit("popup", r);
        return true;
      }).catch(tq);
      this._checkIfInitialized();
    }
    async page() {
      if (!this.pagePromise) {
        let e = this._session();
        this.pagePromise = (e ? Promise.resolve(e) : this._sessionFactory()(false)).then(e => a9._create(e, this, this.#aU ?? null));
      }
      return (await this.pagePromise) ?? null;
    }
    _checkIfInitialized() {
      if (!this._initializedDeferred.resolved() && this._getTargetInfo().url !== "") {
        this._initializedDeferred.resolve(F.SUCCESS);
      }
    }
  }
  class no extends ns {}
  class nl extends nn {
    #aV;
    async worker() {
      if (!this.#aV) {
        let e = this._session();
        this.#aV = (e ? Promise.resolve(e) : this._sessionFactory()(false)).then(e => new a6(e, this._getTargetInfo().url, this._targetId, this.type(), () => {}, () => {}, undefined));
      }
      return await this.#aV;
    }
  }
  class nc extends nn {}
  class nd extends ty {
    #e3;
    #aG = new Map();
    #a$ = new Map();
    #aX = new Map();
    #aQ = new Set();
    #aJ;
    #aY;
    #aZ = new WeakMap();
    #a0 = new WeakMap();
    #a1 = ir.create();
    #a5 = new Set();
    #a3 = true;
    #a4 = [{}];
    constructor(e, t, i, r = true) {
      super();
      this.#e3 = e;
      this.#aJ = i;
      this.#aY = t;
      this.#a3 = r;
      this.#e3.on("Target.targetCreated", this.#a6);
      this.#e3.on("Target.targetDestroyed", this.#a2);
      this.#e3.on("Target.targetInfoChanged", this.#a7);
      this.#e3.on(T.SessionDetached, this.#a8);
      this.#a9(this.#e3);
    }
    #ne = () => {
      if (this.#a3) {
        for (let [e, t] of this.#aG.entries()) {
          let i = new nn(t, undefined, undefined, this, undefined);
          let r = t.type === "page" || t.type === "iframe";
          let a = t.url.startsWith("chrome-extension://");
          if ((!this.#aJ || this.#aJ(i)) && r && !a) {
            this.#a5.add(e);
          }
        }
      }
    };
    async initialize() {
      await this.#e3.send("Target.setDiscoverTargets", {
        discover: true,
        filter: this.#a4
      });
      this.#ne();
      await this.#e3.send("Target.setAutoAttach", {
        waitForDebuggerOnStart: true,
        flatten: true,
        autoAttach: true,
        filter: [{
          type: "page",
          exclude: true
        }, ...this.#a4]
      });
      this.#nt();
      await this.#a1.valueOrThrow();
    }
    getChildTargets(e) {
      return e._childTargets();
    }
    dispose() {
      this.#e3.off("Target.targetCreated", this.#a6);
      this.#e3.off("Target.targetDestroyed", this.#a2);
      this.#e3.off("Target.targetInfoChanged", this.#a7);
      this.#e3.off(T.SessionDetached, this.#a8);
      this.#ni(this.#e3);
    }
    getAvailableTargets() {
      return this.#a$;
    }
    #a9(e) {
      let t = t => {
        this.#ax(e, t);
      };
      tk(!this.#aZ.has(e));
      this.#aZ.set(e, t);
      e.on("Target.attachedToTarget", t);
      let i = t => this.#aE(e, t);
      tk(!this.#a0.has(e));
      this.#a0.set(e, i);
      e.on("Target.detachedFromTarget", i);
    }
    #ni(e) {
      let t = this.#aZ.get(e);
      if (t) {
        e.off("Target.attachedToTarget", t);
        this.#aZ.delete(e);
      }
      if (this.#a0.has(e)) {
        e.off("Target.detachedFromTarget", this.#a0.get(e));
        this.#a0.delete(e);
      }
    }
    #a8 = e => {
      this.#ni(e);
    };
    #a6 = async e => {
      this.#aG.set(e.targetInfo.targetId, e.targetInfo);
      this.emit("targetDiscovered", e.targetInfo);
      if (e.targetInfo.type === "browser" && e.targetInfo.attached) {
        if (this.#a$.has(e.targetInfo.targetId)) {
          return;
        }
        let t = this.#aY(e.targetInfo, undefined);
        t._initialize();
        this.#a$.set(e.targetInfo.targetId, t);
      }
    };
    #a2 = e => {
      let t = this.#aG.get(e.targetId);
      this.#aG.delete(e.targetId);
      this.#nt(e.targetId);
      if (t?.type === "service_worker" && this.#a$.has(e.targetId)) {
        let t = this.#a$.get(e.targetId);
        if (t) {
          this.emit("targetGone", t);
          this.#a$.delete(e.targetId);
        }
      }
    };
    #a7 = e => {
      var t;
      this.#aG.set(e.targetInfo.targetId, e.targetInfo);
      if (this.#aQ.has(e.targetInfo.targetId) || !this.#a$.has(e.targetInfo.targetId) || !e.targetInfo.attached) {
        return;
      }
      let i = this.#a$.get(e.targetInfo.targetId);
      if (!i) {
        return;
      }
      let r = i.url();
      let a = i._initializedDeferred.value() === F.SUCCESS;
      t = e.targetInfo;
      if (i._subtype() && !t.subtype) {
        let e = i?._session();
        tk(e, "Target that is being activated is missing a CDPSession.");
        e.parentSession()?.emit(T.Swapped, e);
      }
      i._targetInfoChanged(e.targetInfo);
      if (a && r !== i.url()) {
        this.emit("targetChanged", {
          target: i,
          wasInitialized: a,
          previousURL: r
        });
      }
    };
    #ax = async (e, t) => {
      let i = t.targetInfo;
      let r = this.#e3._session(t.sessionId);
      if (!r) {
        throw Error(`Session ${t.sessionId} was not created.`);
      }
      let a = async () => {
        await r.send("Runtime.runIfWaitingForDebugger").catch(tq);
        await e.send("Target.detachFromTarget", {
          sessionId: r.id()
        }).catch(tq);
      };
      if (!this.#e3.isAutoAttached(i.targetId)) {
        return;
      }
      if (i.type === "service_worker") {
        this.#nt(i.targetId);
        await a();
        if (this.#a$.has(i.targetId)) {
          return;
        }
        let e = this.#aY(i);
        e._initialize();
        this.#a$.set(i.targetId, e);
        this.emit("targetAvailable", e);
        return;
      }
      let n = this.#a$.has(i.targetId);
      let s = n ? this.#a$.get(i.targetId) : this.#aY(i, r, e instanceof r8 ? e : undefined);
      if (this.#aJ && !this.#aJ(s)) {
        this.#aQ.add(i.targetId);
        this.#nt(i.targetId);
        await a();
        return;
      }
      this.#a9(r);
      if (n) {
        r.setTarget(s);
        this.#aX.set(r.id(), this.#a$.get(i.targetId));
      } else {
        s._initialize();
        this.#a$.set(i.targetId, s);
        this.#aX.set(r.id(), s);
      }
      let o = e instanceof io ? e.target() : null;
      o?._addChildTarget(s);
      e.emit(T.Ready, r);
      this.#a5.delete(s._targetId);
      if (!n) {
        this.emit("targetAvailable", s);
      }
      this.#nt();
      await Promise.all([r.send("Target.setAutoAttach", {
        waitForDebuggerOnStart: true,
        flatten: true,
        autoAttach: true,
        filter: this.#a4
      }), r.send("Runtime.runIfWaitingForDebugger")]).catch(tq);
    };
    #nt(e) {
      if (e !== undefined) {
        this.#a5.delete(e);
      }
      if (this.#a5.size === 0) {
        this.#a1.resolve();
      }
    }
    #aE = (e, t) => {
      let i = this.#aX.get(t.sessionId);
      this.#aX.delete(t.sessionId);
      if (i) {
        if (e instanceof io) {
          e.target()._removeChildTarget(i);
        }
        this.#a$.delete(i._targetId);
        this.emit("targetGone", i);
      }
    };
  }
  class nu extends ii {
    protocol = "cdp";
    static async _create(e, t, i, r, a, n, s, o, l, c = true) {
      let d = new nu(e, t, r, n, s, o, l, c);
      if (i) {
        await e.send("Security.setIgnoreCertificateErrors", {
          ignore: true
        });
      }
      await d._attach(a);
      return d;
    }
    #aU;
    #nr;
    #e3;
    #na;
    #aJ;
    #nn;
    #ns;
    #no = new Map();
    #ao;
    constructor(e, t, i, r, a, n, s, o = true) {
      super();
      this.#aU = i;
      this.#nr = r;
      this.#e3 = e;
      this.#na = a || (() => {});
      this.#aJ = n || (() => true);
      this.#nl(s);
      this.#ao = new nd(e, this.#nc, this.#aJ, o);
      this.#ns = new na(this.#e3, this);
      for (let l of t) {
        this.#no.set(l, new na(this.#e3, this, l));
      }
    }
    #nd = () => {
      this.emit("disconnected", undefined);
    };
    async _attach(e) {
      this.#e3.on(T.Disconnected, this.#nd);
      if (e) {
        await this.#ns.setDownloadBehavior(e);
      }
      this.#ao.on("targetAvailable", this.#ax);
      this.#ao.on("targetGone", this.#aE);
      this.#ao.on("targetChanged", this.#nu);
      this.#ao.on("targetDiscovered", this.#nh);
      await this.#ao.initialize();
    }
    _detach() {
      this.#e3.off(T.Disconnected, this.#nd);
      this.#ao.off("targetAvailable", this.#ax);
      this.#ao.off("targetGone", this.#aE);
      this.#ao.off("targetChanged", this.#nu);
      this.#ao.off("targetDiscovered", this.#nh);
    }
    process() {
      return this.#nr ?? null;
    }
    _targetManager() {
      return this.#ao;
    }
    #nl(e) {
      this.#nn = e || (e => e.type() === "page" || e.type() === "background_page" || e.type() === "webview");
    }
    _getIsPageTargetCallback() {
      return this.#nn;
    }
    async createBrowserContext(e = {}) {
      let {
        proxyServer: t,
        proxyBypassList: i,
        downloadBehavior: r
      } = e;
      let {
        browserContextId: a
      } = await this.#e3.send("Target.createBrowserContext", {
        proxyServer: t,
        proxyBypassList: i && i.join(",")
      });
      let n = new na(this.#e3, this, a);
      if (r) {
        await n.setDownloadBehavior(r);
      }
      this.#no.set(a, n);
      return n;
    }
    browserContexts() {
      return [this.#ns, ...Array.from(this.#no.values())];
    }
    defaultBrowserContext() {
      return this.#ns;
    }
    async _disposeContext(e) {
      if (e) {
        await this.#e3.send("Target.disposeBrowserContext", {
          browserContextId: e
        });
        this.#no.delete(e);
      }
    }
    #nc = (e, t) => {
      let {
        browserContextId: i
      } = e;
      let r = i && this.#no.has(i) ? this.#no.get(i) : this.#ns;
      if (!r) {
        throw Error("Missing browser context");
      }
      let a = t => this.#e3._createSession(e, t);
      let n = new nc(e, t, r, this.#ao, a);
      if (e.url?.startsWith("devtools://")) {
        return new no(e, t, r, this.#ao, a, this.#aU ?? null);
      } else if (this.#nn(n)) {
        return new ns(e, t, r, this.#ao, a, this.#aU ?? null);
      } else if (e.type === "service_worker" || e.type === "shared_worker") {
        return new nl(e, t, r, this.#ao, a);
      } else {
        return n;
      }
    };
    #ax = async e => {
      if (e._isTargetExposed() && (await e._initializedDeferred.valueOrThrow()) === F.SUCCESS) {
        this.emit("targetcreated", e);
        e.browserContext().emit("targetcreated", e);
      }
    };
    #aE = async e => {
      e._initializedDeferred.resolve(F.ABORTED);
      e._isClosedDeferred.resolve();
      if (e._isTargetExposed() && (await e._initializedDeferred.valueOrThrow()) === F.SUCCESS) {
        this.emit("targetdestroyed", e);
        e.browserContext().emit("targetdestroyed", e);
      }
    };
    #nu = ({
      target: e
    }) => {
      this.emit("targetchanged", e);
      e.browserContext().emit("targetchanged", e);
    };
    #nh = e => {
      this.emit("targetdiscovered", e);
    };
    wsEndpoint() {
      return this.#e3.url();
    }
    async newPage() {
      return await this.#ns.newPage();
    }
    async _createPageInContext(e) {
      let {
        targetId: t
      } = await this.#e3.send("Target.createTarget", {
        url: "about:blank",
        browserContextId: e || undefined
      });
      let i = await this.waitForTarget(e => e._targetId === t);
      if (!i) {
        throw Error(`Missing target for page (id = ${t})`);
      }
      if ((await i._initializedDeferred.valueOrThrow()) !== F.SUCCESS) {
        throw Error(`Failed to create target for page (id = ${t})`);
      }
      let r = await i.page();
      if (!r) {
        throw Error(`Failed to create a page for context (id = ${e})`);
      }
      return r;
    }
    async installExtension(e) {
      let {
        id: t
      } = await this.#e3.send("Extensions.loadUnpacked", {
        path: e
      });
      return t;
    }
    uninstallExtension(e) {
      return this.#e3.send("Extensions.uninstall", {
        id: e
      });
    }
    targets() {
      return Array.from(this.#ao.getAvailableTargets().values()).filter(e => e._isTargetExposed() && e._initializedDeferred.value() === F.SUCCESS);
    }
    target() {
      let e = this.targets().find(e => e.type() === "browser");
      if (!e) {
        throw Error("Browser target is not found");
      }
      return e;
    }
    async version() {
      return (await this.#np()).product;
    }
    async userAgent() {
      return (await this.#np()).userAgent;
    }
    async close() {
      await this.#na.call(null);
      await this.disconnect();
    }
    disconnect() {
      this.#ao.dispose();
      this.#e3.dispose();
      this._detach();
      return Promise.resolve();
    }
    get connected() {
      return !this.#e3._closed;
    }
    #np() {
      return this.#e3.send("Browser.getVersion");
    }
    get debugInfo() {
      return {
        pendingProtocolErrors: this.#e3.getPendingProtocolErrors()
      };
    }
  }
  async function nh(e, t, i) {
    let {
      acceptInsecureCerts: r = false,
      defaultViewport: a = tH,
      downloadBehavior: n,
      targetFilter: s,
      _isPageTarget: o,
      slowMo: l = 0,
      protocolTimeout: c
    } = i;
    let d = new at(t, e, l, c);
    let {
      browserContextIds: u
    } = await d.send("Target.getBrowserContexts");
    return await nu._create(d, u, r, a, n, undefined, () => d.send("Browser.close").catch(tq), s, o);
  }
  let np = {
    targetId: "tabTargetId",
    type: "tab",
    title: "tab",
    url: "about:blank",
    attached: false,
    canAccessOpener: false
  };
  let nf = {
    targetId: "pageTargetId",
    type: "page",
    title: "page",
    url: "about:blank",
    attached: false,
    canAccessOpener: false
  };
  class nm {
    static async connectTab(e) {
      await chrome.debugger.attach({
        tabId: e
      }, "1.3");
      return new nm(e);
    }
    onmessage;
    onclose;
    #nf;
    constructor(e) {
      this.#nf = e;
      chrome.debugger.onEvent.addListener(this.#nm);
    }
    #nm = (e, t, i) => {
      if (e.tabId === this.#nf) {
        this.#ny({
          sessionId: e.sessionId ?? "pageTargetSessionId",
          method: t,
          params: i
        });
      }
    };
    #ny(e) {
      this.onmessage?.(JSON.stringify(e));
    }
    send(e) {
      let t = JSON.parse(e);
      switch (t.method) {
        case "Browser.getVersion":
          this.#ny({
            id: t.id,
            sessionId: t.sessionId,
            method: t.method,
            result: {
              protocolVersion: "1.3",
              product: "chrome",
              revision: "unknown",
              userAgent: "chrome",
              jsVersion: "unknown"
            }
          });
          return;
        case "Target.getBrowserContexts":
          this.#ny({
            id: t.id,
            sessionId: t.sessionId,
            method: t.method,
            result: {
              browserContextIds: []
            }
          });
          return;
        case "Target.setDiscoverTargets":
          this.#ny({
            method: "Target.targetCreated",
            params: {
              targetInfo: np
            }
          });
          this.#ny({
            method: "Target.targetCreated",
            params: {
              targetInfo: nf
            }
          });
          this.#ny({
            id: t.id,
            sessionId: t.sessionId,
            method: t.method,
            result: {}
          });
          return;
        case "Target.setAutoAttach":
          if (t.sessionId === "tabTargetSessionId") {
            this.#ny({
              method: "Target.attachedToTarget",
              params: {
                targetInfo: nf,
                sessionId: "pageTargetSessionId"
              }
            });
            this.#ny({
              id: t.id,
              sessionId: t.sessionId,
              method: t.method,
              result: {}
            });
            return;
          }
          if (!t.sessionId) {
            this.#ny({
              method: "Target.attachedToTarget",
              params: {
                targetInfo: np,
                sessionId: "tabTargetSessionId"
              }
            });
            this.#ny({
              id: t.id,
              sessionId: t.sessionId,
              method: t.method,
              result: {}
            });
            return;
          }
      }
      if (t.sessionId === "pageTargetSessionId") {
        delete t.sessionId;
      }
      chrome.debugger.sendCommand({
        tabId: this.#nf,
        sessionId: t.sessionId
      }, t.method, t.params).then(e => {
        this.#ny({
          id: t.id,
          sessionId: t.sessionId ?? "pageTargetSessionId",
          method: t.method,
          result: e
        });
      }).catch(e => {
        this.#ny({
          id: t.id,
          sessionId: t.sessionId ?? "pageTargetSessionId",
          method: t.method,
          error: {
            code: e?.code,
            data: e?.data,
            message: e?.message ?? "CDP error had no message"
          }
        });
      });
    }
    close() {
      chrome.debugger.onEvent.removeListener(this.#nm);
      chrome.debugger.detach({
        tabId: this.#nf
      });
    }
  }
  let ny = Object.freeze({
    "Slow 3G": {
      download: 50000,
      upload: 50000,
      latency: 2000
    },
    "Fast 3G": {
      download: 180000,
      upload: 84375,
      latency: 562.5
    },
    "Slow 4G": {
      download: 180000,
      upload: 84375,
      latency: 562.5
    },
    "Fast 4G": {
      download: 1012500,
      upload: 168750,
      latency: 165
    }
  });
  var browserWebsocketTransport = require("browser-websocket-transport") /*id: 119856*/;
  let nw = {};
  for (let e of [{
    name: "Blackberry PlayBook",
    userAgent: "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+",
    viewport: {
      width: 600,
      height: 1024,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Blackberry PlayBook landscape",
    userAgent: "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+",
    viewport: {
      width: 1024,
      height: 600,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "BlackBerry Z30",
    userAgent: "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "BlackBerry Z30 landscape",
    userAgent: "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Galaxy Note 3",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Galaxy Note 3 landscape",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Galaxy Note II",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Galaxy Note II landscape",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Galaxy S III",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Galaxy S III landscape",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Galaxy S5",
    userAgent: "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Galaxy S5 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Galaxy S8",
    userAgent: "Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36",
    viewport: {
      width: 360,
      height: 740,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Galaxy S8 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36",
    viewport: {
      width: 740,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Galaxy S9+",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36",
    viewport: {
      width: 320,
      height: 658,
      deviceScaleFactor: 4.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Galaxy S9+ landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36",
    viewport: {
      width: 658,
      height: 320,
      deviceScaleFactor: 4.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Galaxy Tab S4",
    userAgent: "Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36",
    viewport: {
      width: 712,
      height: 1138,
      deviceScaleFactor: 2.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Galaxy Tab S4 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36",
    viewport: {
      width: 1138,
      height: 712,
      deviceScaleFactor: 2.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPad",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPad landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPad (gen 6)",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPad (gen 6) landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPad (gen 7)",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 810,
      height: 1080,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPad (gen 7) landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 1080,
      height: 810,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPad Mini",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPad Mini landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPad Pro",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 1024,
      height: 1366,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPad Pro landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 1366,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPad Pro 11",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 834,
      height: 1194,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPad Pro 11 landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 1194,
      height: 834,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 4",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53",
    viewport: {
      width: 320,
      height: 480,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 4 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53",
    viewport: {
      width: 480,
      height: 320,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 5",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
    viewport: {
      width: 320,
      height: 568,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 5 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
    viewport: {
      width: 568,
      height: 320,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 6",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 6 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 667,
      height: 375,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 6 Plus",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 414,
      height: 736,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 6 Plus landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 736,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 7",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 7 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 667,
      height: 375,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 7 Plus",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 414,
      height: 736,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 7 Plus landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 736,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 8",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 8 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 667,
      height: 375,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 8 Plus",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 414,
      height: 736,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 8 Plus landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 736,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone SE",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
    viewport: {
      width: 320,
      height: 568,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone SE landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
    viewport: {
      width: 568,
      height: 320,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone X",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone X landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone XR",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 414,
      height: 896,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone XR landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 896,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 11",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 414,
      height: 828,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 11 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 828,
      height: 414,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 11 Pro",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 11 Pro landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 11 Pro Max",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 414,
      height: 896,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 11 Pro Max landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 896,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 12",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 12 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 12 Pro",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 12 Pro landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 12 Pro Max",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 428,
      height: 926,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 12 Pro Max landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 926,
      height: 428,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 12 Mini",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 12 Mini landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 13",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 13 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 13 Pro",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 13 Pro landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 13 Pro Max",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 428,
      height: 926,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 13 Pro Max landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 926,
      height: 428,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 13 Mini",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 13 Mini landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 14",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 663,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 14 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 750,
      height: 340,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 14 Plus",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 428,
      height: 745,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 14 Plus landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 832,
      height: 378,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 14 Pro",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 393,
      height: 659,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 14 Pro landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 734,
      height: 343,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 14 Pro Max",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 430,
      height: 739,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 14 Pro Max landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 814,
      height: 380,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 15",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 393,
      height: 659,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 15 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 734,
      height: 343,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 15 Plus",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 430,
      height: 739,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 15 Plus landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 814,
      height: 380,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 15 Pro",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 393,
      height: 659,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 15 Pro landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 734,
      height: 343,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "iPhone 15 Pro Max",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 430,
      height: 739,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "iPhone 15 Pro Max landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 814,
      height: 380,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "JioPhone 2",
    userAgent: "Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5",
    viewport: {
      width: 240,
      height: 320,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "JioPhone 2 landscape",
    userAgent: "Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5",
    viewport: {
      width: 320,
      height: 240,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Kindle Fire HDX",
    userAgent: "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true",
    viewport: {
      width: 800,
      height: 1280,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Kindle Fire HDX landscape",
    userAgent: "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true",
    viewport: {
      width: 1280,
      height: 800,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "LG Optimus L70",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 384,
      height: 640,
      deviceScaleFactor: 1.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "LG Optimus L70 landscape",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 384,
      deviceScaleFactor: 1.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Microsoft Lumia 550",
    userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Microsoft Lumia 950",
    userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 4,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Microsoft Lumia 950 landscape",
    userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 4,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Nexus 10",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36",
    viewport: {
      width: 800,
      height: 1280,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Nexus 10 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36",
    viewport: {
      width: 1280,
      height: 800,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Nexus 4",
    userAgent: "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 384,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Nexus 4 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 384,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Nexus 5",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Nexus 5 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Nexus 5X",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 412,
      height: 732,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Nexus 5X landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 732,
      height: 412,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Nexus 6",
    userAgent: "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 412,
      height: 732,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Nexus 6 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 732,
      height: 412,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Nexus 6P",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 412,
      height: 732,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Nexus 6P landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 732,
      height: 412,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Nexus 7",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36",
    viewport: {
      width: 600,
      height: 960,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Nexus 7 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36",
    viewport: {
      width: 960,
      height: 600,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Nokia Lumia 520",
    userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)",
    viewport: {
      width: 320,
      height: 533,
      deviceScaleFactor: 1.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Nokia Lumia 520 landscape",
    userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)",
    viewport: {
      width: 533,
      height: 320,
      deviceScaleFactor: 1.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Nokia N9",
    userAgent: "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13",
    viewport: {
      width: 480,
      height: 854,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Nokia N9 landscape",
    userAgent: "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13",
    viewport: {
      width: 854,
      height: 480,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Pixel 2",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 411,
      height: 731,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Pixel 2 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 731,
      height: 411,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Pixel 2 XL",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 411,
      height: 823,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Pixel 2 XL landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 823,
      height: 411,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Pixel 3",
    userAgent: "Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36",
    viewport: {
      width: 393,
      height: 786,
      deviceScaleFactor: 2.75,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Pixel 3 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36",
    viewport: {
      width: 786,
      height: 393,
      deviceScaleFactor: 2.75,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Pixel 4",
    userAgent: "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36",
    viewport: {
      width: 353,
      height: 745,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Pixel 4 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36",
    viewport: {
      width: 745,
      height: 353,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Pixel 4a (5G)",
    userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 353,
      height: 745,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Pixel 4a (5G) landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 745,
      height: 353,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Pixel 5",
    userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 393,
      height: 851,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Pixel 5 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 851,
      height: 393,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: "Moto G4",
    userAgent: "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: "Moto G4 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }]) {
    nw[e.name] = e;
  }
  let nv = Object.freeze(nw);
  async function nb(e, t, i) {
    let {
      acceptInsecureCerts: r = false,
      defaultViewport: a = tH
    } = i;
    let {
      bidiConnection: n,
      cdpConnection: s,
      closeCallback: o
    } = await nk(e, t, i);
    let l = await import("./bidi.js");
    return await l.BidiBrowser.create({
      connection: n,
      cdpConnection: s,
      closeCallback: o,
      process: undefined,
      defaultViewport: a,
      acceptInsecureCerts: r,
      capabilities: i.capabilities
    });
  }
  async function nk(e, t, i) {
    let r = await import("./bidi.js");
    let {
      slowMo: a = 0,
      protocolTimeout: n
    } = i;
    let s = new r.BidiConnection(t, e, a, n);
    try {
      let e = await s.send("session.status", {});
      if ("type" in e && e.type === "success") {
        return {
          bidiConnection: s,
          closeCallback: async () => {
            await s.send("browser.close", {}).catch(tq);
          }
        };
      }
    } catch (e) {
      if (!(e instanceof tD)) {
        throw e;
      }
    }
    s.unbind();
    let o = new at(t, e, a, n, true);
    if ((await o.send("Browser.getVersion")).product.toLowerCase().includes("firefox")) {
      throw new t_("Firefox is not supported in BiDi over CDP mode.");
    }
    let l = await r.connectBidiOverCdp(o);
    return {
      cdpConnection: o,
      bidiConnection: l,
      closeCallback: async () => {
        await o.send("Browser.close").catch(tq);
      }
    };
  }
  let nS = async () => tw ? (await require.e("puppeteer-websocket-transport") /*id: 50164*/.then(require.bind(require, "node-websocket-transport") /*id: 612365*/)).NodeWebSocketTransport : (await Promise.resolve().then(require.bind(require, "browser-websocket-transport") /*id: 119856*/)).BrowserWebSocketTransport;
  async function nT(e) {
    let {
      connectionTransport: t,
      endpointUrl: i
    } = await nC(e);
    if (e.protocol === "webDriverBiDi") {
      return await nb(t, i, e);
    } else {
      return await nh(t, i, e);
    }
  }
  async function nC(e) {
    let {
      browserWSEndpoint: t,
      browserURL: i,
      transport: r,
      headers: a = {}
    } = e;
    tk(Number(!!t) + Number(!!i) + Number(!!r) === 1, "Exactly one of browserWSEndpoint, browserURL or transport must be passed to puppeteer.connect");
    if (r) {
      return {
        connectionTransport: r,
        endpointUrl: ""
      };
    }
    if (t) {
      let e = await nS();
      return {
        connectionTransport: await e.create(t, a),
        endpointUrl: t
      };
    }
    if (i) {
      let e = await nM(i);
      let t = await nS();
      return {
        connectionTransport: await t.create(e),
        endpointUrl: e
      };
    }
    throw Error("Invalid connection options");
  }
  async function nM(e) {
    let t = new URL("/json/version", e);
    try {
      let e = await globalThis.fetch(t.toString(), {
        method: "GET"
      });
      if (!e.ok) {
        throw Error(`HTTP ${e.statusText}`);
      }
      return (await e.json()).webSocketDebuggerUrl;
    } catch (e) {
      if (id(e)) {
        e.message = `Failed to fetch browser webSocket URL from ${t}: ${e.message}`;
      }
      throw e;
    }
  }
  class nE {
    static customQueryHandlers = iN;
    static registerCustomQueryHandler(e, t) {
      return this.customQueryHandlers.register(e, t);
    }
    static unregisterCustomQueryHandler(e) {
      return this.customQueryHandlers.unregister(e);
    }
    static customQueryHandlerNames() {
      return this.customQueryHandlers.names();
    }
    static clearCustomQueryHandlers() {
      return this.customQueryHandlers.clear();
    }
    _isPuppeteerCore;
    _changedBrowsers = false;
    constructor(e) {
      this._isPuppeteerCore = e.isPuppeteerCore;
      this.connect = this.connect.bind(this);
    }
    connect(e) {
      return nT(e);
    }
  }
  class nP {
    #ng;
    constructor() {
      this.#ng = Promise.resolve();
    }
    postTask(e) {
      let t = this.#ng.then(e);
      this.#ng = t.then(() => {}, () => {});
      return t;
    }
  }
  let nI = Object.freeze({
    chrome: "136.0.7103.94",
    "chrome-headless-shell": "136.0.7103.94",
    firefox: "stable_138.0.4"
  });
  let nx = new nE({
    isPuppeteerCore: true
  });
  let {
    connect: nF
  } = nx;
  var nA = nx;
  require.r(exports);
  require.d(exports, {
    CdpTarget: function () {
      return nn;
    },
    Accessibility: function () {
      return rZ;
    },
    addPageBinding: function () {
      return ak;
    },
    DevToolsTarget: function () {
      return no;
    },
    Deferred: function () {
      return ir;
    },
    evaluationString: function () {
      return tQ;
    },
    getSourceUrlComment: function () {
      return t3;
    },
    headersArray: function () {
      return rM;
    },
    FrameManagerEvent: function () {
      return x;
    },
    XPathQueryHandler: function () {
      return iQ;
    },
    MappedLocator: function () {
      return rp;
    },
    Frame: function () {
      return rS;
    },
    throwIfDetached: function () {
      return rk;
    },
    CdpPage: function () {
      return a9;
    },
    SuppressedError: function () {
      return tm;
    },
    NetworkManager: function () {
      return aX;
    },
    STATUS_TEXTS: function () {
      return rE;
    },
    Mutex: function () {
      return ia;
    },
    TimeoutError: function () {
      return tO;
    },
    UTILITY_WORLD_NAME: function () {
      return t1;
    },
    parsePSelectors: function () {
      return i$;
    },
    importDebug: function () {
      return tE;
    },
    ConsoleMessage: function () {
      return r4;
    },
    fromEmitterEvent: function () {
      return t8;
    },
    FrameTree: function () {
      return az;
    },
    DisposableStack: function () {
      return tp;
    },
    OtherTarget: function () {
      return nc;
    },
    ScriptInjector: function () {
      return iR;
    },
    FileChooser: function () {
      return r6;
    },
    WaitTask: function () {
      return rV;
    },
    CDP_BINDING_PREFIX: function () {
      return aS;
    },
    WorkerTarget: function () {
      return nl;
    },
    TaskQueue: function () {
      return nP;
    },
    asyncDisposeSymbol: function () {
      return th;
    },
    bindIsolatedHandle: function () {
      return rn;
    },
    CdpWebWorker: function () {
      return a6;
    },
    transposeIterableHandle: function () {
      return iT;
    },
    rewriteError: function () {
      return ih;
    },
    ARIAQueryHandler: function () {
      return iL;
    },
    CdpFrame: function () {
      return aW;
    },
    LazyArg: function () {
      return iC;
    },
    CdpElementHandle: function () {
      return ax;
    },
    UnsupportedOperation: function () {
      return t_;
    },
    NodeLocator: function () {
      return rf;
    },
    createProtocolErrorMessage: function () {
      return ip;
    },
    InitializationStatus: function () {
      return F;
    },
    CdpCDPSession: function () {
      return r8;
    },
    DeviceRequestPromptManager: function () {
      return ay;
    },
    MAIN_WORLD: function () {
      return aN;
    },
    CdpKeyboard: function () {
      return aY;
    },
    TextQueryHandler: function () {
      return iX;
    },
    getQueryHandlerAndSelector: function () {
      return iZ;
    },
    IsolatedWorld: function () {
      return a_;
    },
    CdpHTTPRequest: function () {
      return aU;
    },
    EmulationManager: function () {
      return ah;
    },
    Callback: function () {
      return r7;
    },
    CdpBrowserContext: function () {
      return na;
    },
    CdpBrowser: function () {
      return nu;
    },
    isNumber: function () {
      return tV;
    },
    CustomQueryHandlerRegistry: function () {
      return i_;
    },
    PUPPETEER_WORLD: function () {
      return aK;
    },
    NETWORK_IDLE_TIME: function () {
      return t4;
    },
    createClientError: function () {
      return av;
    },
    JSCoverage: function () {
      return aa;
    },
    isTargetClosedError: function () {
      return ai;
    },
    isErrnoException: function () {
      return iu;
    },
    BrowserContext: function () {
      return is;
    },
    validateDialogType: function () {
      return tZ;
    },
    CdpTouchscreen: function () {
      return a3;
    },
    CSSCoverage: function () {
      return an;
    },
    DeviceRequestPromptDevice: function () {
      return af;
    },
    debugError: function () {
      return tq;
    },
    scriptInjector: function () {
      return iD;
    },
    releaseObject: function () {
      return aM;
    },
    getSourcePuppeteerURLIfAvailable: function () {
      return tz;
    },
    CdpPreloadScript: function () {
      return ap;
    },
    CdpHTTPResponse: function () {
      return aG;
    },
    RETRY_DELAY: function () {
      return ry;
    },
    setLogCapture: function () {
      return tF;
    },
    EmulatedState: function () {
      return au;
    },
    PuppeteerError: function () {
      return tL;
    },
    TargetType: function () {
      return P;
    },
    TouchError: function () {
      return tR;
    },
    Binding: function () {
      return r3;
    },
    LifecycleWatcher: function () {
      return aH;
    },
    isPlainObject: function () {
      return tG;
    },
    isErrorLike: function () {
      return id;
    },
    disposeSymbol: function () {
      return tu;
    },
    CdpJSHandle: function () {
      return aC;
    },
    PierceQueryHandler: function () {
      return iK;
    },
    getReadableFromProtocolStream: function () {
      return tY;
    },
    pageBindingInitString: function () {
      return aT;
    },
    Dialog: function () {
      return il;
    },
    FilteredLocator: function () {
      return rh;
    },
    EventEmitter: function () {
      return ty;
    },
    FrameEvent: function () {
      return M;
    },
    PUPPETEER_REVISIONS: function () {
      return nI;
    },
    TaskManager: function () {
      return rG;
    },
    MouseButton: function () {
      return rO;
    },
    parsePDFOptions: function () {
      return t6;
    },
    CdpMouse: function () {
      return a1;
    },
    CDPSession: function () {
      return io;
    },
    JSHandle: function () {
      return re;
    },
    BrowserWebSocketTransport: function () {
      return browserWebsocketTransport.BrowserWebSocketTransport;
    },
    SOURCE_URL_REGEX: function () {
      return t5;
    },
    TargetCloseError: function () {
      return tN;
    },
    DEFAULT_VIEWPORT: function () {
      return tH;
    },
    DeviceRequestPrompt: function () {
      return am;
    },
    CallbackRegistry: function () {
      return r2;
    },
    TimeoutSettings: function () {
      return r_;
    },
    DEFAULT_INTERCEPT_RESOLUTION_PRIORITY: function () {
      return rT;
    },
    _keyDefinitions: function () {
      return aJ;
    },
    assert: function () {
      return tk;
    },
    connect: function () {
      return nF;
    },
    PageTarget: function () {
      return ns;
    },
    Browser: function () {
      return ii;
    },
    createEvaluationError: function () {
      return ag;
    },
    filterAsync: function () {
      return ie;
    },
    getCapturedLogs: function () {
      return tA;
    },
    valueFromRemoteObject: function () {
      return ab;
    },
    Realm: function () {
      return r$;
    },
    _connectToCdpBrowser: function () {
      return nh;
    },
    QueryHandler: function () {
      return iP;
    },
    debug: function () {
      return tP;
    },
    AsyncDisposableStack: function () {
      return tf;
    },
    getReadableAsTypedArray: function () {
      return tJ;
    },
    isDate: function () {
      return tX;
    },
    isRegExp: function () {
      return t$;
    },
    setDefaultScreenshotOptions: function () {
      return rB;
    },
    KnownDevices: function () {
      return nv;
    },
    LocatorEvent: function () {
      return C;
    },
    convertCookiesPartitionKeyFromPuppeteerToCdp: function () {
      return nt;
    },
    NetworkManagerEvent: function () {
      return I;
    },
    handleError: function () {
      return rI;
    },
    supportedMetrics: function () {
      return rW;
    },
    withSourcePuppeteerURLIfNone: function () {
      return tW;
    },
    PQueryHandler: function () {
      return iq;
    },
    TargetManager: function () {
      return nd;
    },
    HTTPRequest: function () {
      return rC;
    },
    CdpDialog: function () {
      return ao;
    },
    Coverage: function () {
      return ar;
    },
    Target: function () {
      return rX;
    },
    FunctionLocator: function () {
      return rd;
    },
    Touchscreen: function () {
      return rD;
    },
    PredefinedNetworkConditions: function () {
      return ny;
    },
    Puppeteer: function () {
      return nE;
    },
    WebWorker: function () {
      return rQ;
    },
    ProtocolError: function () {
      return tD;
    },
    customQueryHandlers: function () {
      return iN;
    },
    isString: function () {
      return tU;
    },
    DelegatedLocator: function () {
      return ru;
    },
    ExtensionTransport: function () {
      return nm;
    },
    paperFormats: function () {
      return tK;
    },
    AsyncIterableUtil: function () {
      return iI;
    },
    ElementHandle: function () {
      return rs;
    },
    Mouse: function () {
      return rR;
    },
    default: function () {
      return nA;
    },
    Tracing: function () {
      return a4;
    },
    WEB_PERMISSION_TO_PROTOCOL_PERMISSION: function () {
      return it;
    },
    fromAbortSignal: function () {
      return t9;
    },
    timeout: function () {
      return t0;
    },
    unitToPixels: function () {
      return t2;
    },
    SecurityDetails: function () {
      return aV;
    },
    RaceLocator: function () {
      return rm;
    },
    Connection: function () {
      return at;
    },
    PuppeteerURL: function () {
      return tj;
    },
    InterceptResolutionAction: function () {
      return E;
    },
    Locator: function () {
      return rc;
    },
    NetworkEventManager: function () {
      return a$;
    },
    Page: function () {
      return rj;
    },
    CDPSessionEvent: function () {
      return T;
    },
    Keyboard: function () {
      return rL;
    },
    ExecutionContext: function () {
      return aR;
    },
    FrameManager: function () {
      return aQ;
    },
    HTTPResponse: function () {
      return rF;
    }
  });
}