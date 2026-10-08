// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cy' to 'getInjector'
// - Renamed export 'DF' to 'Provide'
// - Renamed export 'Fi' to 'Optional'
// - Renamed export 'HY' to 'setInjector'
// - Renamed export 'N$' to 'getDynamic'
// - Renamed export 'Pu' to 'Injector'
// - Renamed export 'U' to 'providerName'
// - Renamed export 'Wc' to 'getAsync'
// - Renamed export '_K' to 'instantiate'
// - Renamed export 'd1' to 'ProviderScope'
// - Renamed export 'e2' to 'Async'
// - Renamed export 'f3' to 'get'
// - Renamed export 'fe' to 'InjectionFlags'
// - Renamed export 'm5' to 'Dynamic'
// - Renamed export 'p3' to 'getProviderName'
// - Renamed export 'sj' to 'Many'
// - Renamed export 'tB' to 'Inject'
// - Renamed export 'zA' to 'ScopeManager'
// - Renamed export 'zs' to 'InjectorCore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 555385
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var s;
  var a;
  var u;
  var c;
  var l;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var pathArrayValidator = require("path-array-validator") /*id: 679313*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  function g(t, e) {
    return (g = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  }
  function _(t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function n() {
      this.constructor = t;
    }
    g(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function m(t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var n = e && t[e];
    var r = 0;
    if (n) {
      return n.call(t);
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
  }
  function b(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) {
      return t;
    }
    var r;
    var i;
    var o = n.call(t);
    var s = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = o.next()).done) {
        s.push(r.value);
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return s;
  }
  function E(t, e, n) {
    if (n || arguments.length == 2) {
      var r;
      var i = 0;
      var o = e.length;
      for (; i < o; i++) {
        if (!!r || !(i in e)) {
          r ||= Array.prototype.slice.call(e, 0, i);
          r[i] = e[i];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  }
  (r = a ||= {})[r.PARAMETER = 0] = "PARAMETER";
  r[r.PROPERTY = 1] = "PROPERTY";
  r[r.SETTER = 2] = "SETTER";
  (i = u ||= {})[i.OPTIONAL = 1] = "OPTIONAL";
  i[i.MANY = 4] = "MANY";
  i[i.DYNAMIC = 8] = "DYNAMIC";
  i[i.ASYNC = 16] = "ASYNC";
  var w = [];
  var S = {};
  (o = c ||= {})[o.OK = 0] = "OK";
  o[o.MAX_DEPENDENCY_DEPTH_REACHED = 1] = "MAX_DEPENDENCY_DEPTH_REACHED";
  o[o.DEPENDENCY_LOOP_DETECTED = 2] = "DEPENDENCY_LOOP_DETECTED";
  var T = null;
  function I() {
    return T;
  }
  function A(t) {
    T = t;
  }
  function C(t, e) {
    return T.get(t, e);
  }
  function M(t) {
    var e;
    var n = [];
    var r = 1;
    for (; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
    }
    return (e = T).instantiate.apply(e, E([t], b(n), false));
  }
  function k(t, e) {
    return C(t, safePropertyAssignUtil.safePropertyAssign({
      async: true
    }, e));
  }
  function O(t, e) {
    return C(t, safePropertyAssignUtil.safePropertyAssign({
      dynamic: true
    }, e));
  }
  (s = l ||= {})[s.CLASS = 0] = "CLASS";
  s[s.ASYNC = 1] = "ASYNC";
  s[s.EXISTING = 2] = "EXISTING";
  s[s.FACTORY = 3] = "FACTORY";
  s[s.VALUE = 4] = "VALUE";
  var R = function () {
    function t() {
      this.services = [];
    }
    t.prototype.onCache = function (t) {
      var e = t.target;
      var n = t.value;
      if (n != null && e.type !== l.EXISTING && e.type !== l.VALUE) {
        this._init(n);
        if (isFunctionUtil_1.isFunction(n.onServiceDispose)) {
          this.services.push(n);
        }
        return n;
      }
    };
    t.prototype.onDispose = function () {
      var t = this.services;
      var e = t.length - 1;
      for (; e >= 0; --e) {
        this._dispose(t[e]);
      }
    };
    t.prototype._init = function (t) {
      var e;
      try {
        if ((e = t.onServiceInit) !== null && e !== undefined) {
          e.call(t);
        }
      } catch (t) {}
    };
    t.prototype._dispose = function (t) {
      var e;
      try {
        if ((e = t.onServiceDispose) !== null && e !== undefined) {
          e.call(t);
        }
      } catch (t) {}
    };
    return t;
  }();
  function D(t, e, n) {
    var r = 0;
    var i = e.length;
    for (; r < i; ++r) {
      var o = e[r];
      var s = o.key;
      if (!n.has(s)) {
        n.add(s);
        t.push(o);
      }
    }
  }
  function N(t, e) {
    return {
      id: null,
      key: t,
      type: e,
      flags: 0
    };
  }
  var x = new (function () {
    function t() {
      this._paramDepsMap = new Map();
      this._propDepsMap = new Map();
      this._namedPropDepMap = new Map();
      this._fullPropDepsMap = new Map();
      this._provideMap = new Map();
    }
    t.prototype.ensureParamDepMetadata = function (t, e) {
      var n = this._ensureParamDeps(t);
      var r = n[e];
      if (!r) {
        r = N(e, a.PARAMETER);
        n[e] = r;
      }
      return r;
    };
    t.prototype.ensurePropDepMetadata = function (t, e, n) {
      var r = this._ensurePropDeps(t);
      var i = r.deps;
      var o = r.namedDeps;
      var s = o.get(e);
      if (!s) {
        s = N(e, n ? a.SETTER : a.PROPERTY);
        o.set(e, s);
        i.push(s);
      }
      return s;
    };
    t.prototype.getParamDeps = function (t) {
      var e = this._paramDepsMap.get(t);
      if (e != null && e.length > 0 && e[0] == null) {
        e = e.filter(Boolean);
        this._paramDepsMap.set(t, e);
      }
      return e;
    };
    t.prototype.getPropDeps = function (t) {
      return this._propDepsMap.get(t);
    };
    t.prototype.setProvideId = function (t, e) {
      this._provideMap.set(t, e);
    };
    t.prototype.getProvideId = function (t, e) {
      if (e === undefined) {
        e = t;
      }
      return this._provideMap.get(t) ?? e;
    };
    t.prototype.getFullPropDeps = function (t) {
      var e = this._fullPropDepsMap.get(t);
      return e || this._resolveFullPropDeps(t);
    };
    t.prototype._ensureParamDeps = function (t) {
      var e = this._paramDepsMap.get(t);
      if (!e) {
        this._paramDepsMap.set(t, e = []);
      }
      return e;
    };
    t.prototype._ensurePropDeps = function (t) {
      var e = this._propDepsMap.get(t);
      var n = this._namedPropDepMap.get(t);
      if (!e) {
        this._propDepsMap.set(t, e = []);
        this._namedPropDepMap.set(t, n = new Map());
      }
      return {
        deps: e,
        namedDeps: n
      };
    };
    t.prototype._resolveFullPropDeps = function (t) {
      var e = [];
      var n = new Set();
      var r = this.getPropDeps(t);
      if (r) {
        D(e, r, n);
      }
      this._fullPropDepsMap.set(t, e);
      var i = Reflect.getPrototypeOf(t.prototype).constructor;
      if (i !== Object) {
        D(e, this.getFullPropDeps(i), n);
      }
      return e;
    };
    return t;
  }())();
  function P(t) {
    return t.providerName || t.name || t.toString();
  }
  function B(t, e, n, r) {
    switch (r - n) {
      case 0:
        return new t();
      case 1:
        return new t(e[n]);
      case 2:
        return new t(e[n], e[n + 1]);
      case 3:
        return new t(e[n], e[n + 1], e[n + 2]);
      case 4:
        return new t(e[n], e[n + 1], e[n + 2], e[n + 3]);
      case 5:
        return new t(e[n], e[n + 1], e[n + 2], e[n + 3], e[n + 4]);
      default:
        return new (t.bind.apply(t, E([undefined], b(Array.prototype.slice.call(e, n, r)), false)))();
    }
  }
  function L(t, e) {
    switch (e.length) {
      case 0:
        return t();
      case 1:
        return t(e[0]);
      case 2:
        return t(e[0], e[1]);
      case 3:
        return t(e[0], e[1], e[2]);
      case 4:
        return t(e[0], e[1], e[2], e[3]);
      case 5:
        return t(e[0], e[1], e[2], e[3], e[4]);
      default:
        return t.apply(undefined, E([], b(e), false));
    }
  }
  function F(t) {
    var e = 0;
    if (t.optional) {
      e |= u.OPTIONAL;
    }
    if (t.many) {
      e |= u.MANY;
    }
    if (t.async) {
      e |= u.ASYNC;
    }
    if (t.dynamic) {
      e |= u.DYNAMIC;
    }
    return e;
  }
  function j(t, e, n, r, i) {
    var o = r;
    var s = n.length;
    for (; o < s; ++o) {
      var c = e[o + i];
      var l = n[o];
      if ((c.flags & u.OPTIONAL) == 0 || l !== undefined) {
        if (c.type === a.PROPERTY) {
          t[c.key] = l;
        } else {
          t[c.key](l);
        }
      }
    }
  }
  var U = function () {
    function t(t) {
      this.id = t;
    }
    Object.defineProperty(t.prototype, "isProvider", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.toString = function () {
      return P(this.id);
    };
    return t;
  }();
  var z = function (t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      i.clazz = n;
      i.args = r;
      i._propsOffset = 0;
      var o = x.getParamDeps(i.clazz) || [];
      var s = x.getFullPropDeps(i.clazz) || [];
      i.deps = o.concat(s);
      i._propsOffset = o.length;
      return i;
    }
    _(e, t);
    Object.defineProperty(e.prototype, "type", {
      get: function () {
        return l.CLASS;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.create = function (t) {
      var e = this.args;
      var n = this._propsOffset;
      if (e.length > 0) {
        t = e.concat(t);
        n += e.length;
      }
      var r = B(this.clazz, t, 0, n);
      if (t.length !== n) {
        j(r, this.deps, t, n, -e.length);
      }
      return r;
    };
    return e;
  }(U);
  var H = function (t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      r.existing = n;
      r.deps = [{
        id: n,
        flags: 0
      }];
      return r;
    }
    _(e, t);
    Object.defineProperty(e.prototype, "type", {
      get: function () {
        return l.EXISTING;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.create = function (t) {
      return b(t, 1)[0];
    };
    return e;
  }(U);
  var V = function (t) {
    function e(e, n, r, i) {
      var o = t.call(this, e) || this;
      o.factory = n;
      o.args = r;
      o.deps = i.map(function (t) {
        if (t.id != null) {
          return {
            id: t.id,
            flags: F(t)
          };
        } else {
          return {
            id: t,
            flags: 0
          };
        }
      });
      return o;
    }
    _(e, t);
    Object.defineProperty(e.prototype, "type", {
      get: function () {
        return l.FACTORY;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.create = function (t) {
      if (this.args.length > 0) {
        t = this.args.concat(t);
      }
      return L(this.factory, t);
    };
    return e;
  }(U);
  var Z = function (t) {
    function e(e, n) {
      var r = t.call(this, e) || this;
      r.value = n;
      r.deps = w;
      return r;
    }
    _(e, t);
    Object.defineProperty(e.prototype, "type", {
      get: function () {
        return l.VALUE;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.create = function () {
      return this.value;
    };
    return e;
  }(U);
  function q(t) {
    return t != null && t.isProvider === true;
  }
  var W = function (t) {
    function e(e, n, r) {
      var i = t.call(this, e) || this;
      i.loader = n;
      i.args = r;
      i.deps = w;
      return i;
    }
    _(e, t);
    Object.defineProperty(e.prototype, "type", {
      get: function () {
        return l.ASYNC;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.load = function () {
      return L(this.loader, this.args);
    };
    e.prototype.create = function () {
      throw Error("[injector] Cannot invoke \"create\" for async provider \"" + this.toString() + "\", perhaps you forget to use @Async()");
    };
    return e;
  }(U);
  function G(t) {
    if (isFunctionUtil_1.isFunction(t)) {
      return {
        provide: x.getProvideId(t),
        useClass: t
      };
    } else {
      return t;
    }
  }
  function Y(t, e) {
    if (e.useClass != null) {
      return new z(t, e.useClass, e.args || w);
    } else if (pathArrayValidator.validatePathArray(e, "useValue")) {
      return new Z(t, e.useValue);
    } else if (e.useFactory != null) {
      return new V(t, e.useFactory, e.args || w, e.deps || w);
    } else if (e.useExisting != null) {
      return new H(t, e.useExisting);
    } else if (e.useAsync != null) {
      return new W(t, e.useAsync, e.args || w);
    } else {
      return undefined;
    }
  }
  var K = function () {
    function t(t, e) {
      this.id = t;
      this.scope = e;
      this._cache = S;
      this._asyncCache = S;
      this._dynamics = null;
    }
    Object.defineProperty(t.prototype, "isDirty", {
      get: function () {
        var t = this.providers;
        var e = this._cache;
        return t == null || e === S || e.length !== t.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isAsyncDirty", {
      get: function () {
        var t = this.providers;
        var e = this._asyncCache;
        return t == null || e === S || e.length !== t.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "cache", {
      get: function () {
        if (this.isDirty) {
          return this._cache = S;
        } else {
          return this._cache;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "asyncCache", {
      get: function () {
        if (this.isAsyncDirty) {
          return this._asyncCache = S;
        } else {
          return this._asyncCache;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "providers", {
      get: function () {
        return this.scope.get(this.id);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "size", {
      get: function () {
        return this.providers?.length || 0;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.getDynamic = function (t) {
      if (this._dynamics != null) {
        return this._dynamics[t];
      }
    };
    t.prototype.setDynamic = function (t, e) {
      if (this._dynamics == null) {
        this._dynamics = Object.create(null);
      }
      this._dynamics[t] = e;
      return e;
    };
    t.prototype.setAsyncCache = function (t) {
      this._asyncCache = t;
    };
    t.prototype.setCache = function (t) {
      this._cache = t;
    };
    t.prototype.resolve = function (t) {
      var e;
      return ((e = this.providers) === null || e === undefined ? undefined : e.map(t)) || [];
    };
    t.prototype.watch = function (t) {
      return this.scope.watch(this.id, t);
    };
    return t;
  }();
  var $ = function () {
    function t(t) {
      this.name = t;
      this._providers = new Map();
      this._targetAddedCallbacks = new Map();
    }
    t.prototype.watch = function (t, e) {
      var n = this._targetAddedCallbacks.get(t);
      if (!n) {
        n = [];
        this._targetAddedCallbacks.set(t, n);
      }
      n.push(e);
      return this._makeUnwatch(t, e);
    };
    t.prototype.add = function (t) {
      if (q(t)) {
        e = t;
      } else {
        var e;
        var n = (t = G(t)).provide;
        if (!n) {
          throw Error("[injector] No ids found for provider");
        }
        e = Y(n, t);
      }
      var r = e.id;
      var i = this._providers.get(r);
      if (!i) {
        i = [];
        this._providers.set(r, i);
      }
      i.push(e);
      var o = {
        provider: e,
        providers: i,
        scope: this
      };
      var s = this._targetAddedCallbacks.get(r);
      if (!s) {
        return e;
      }
      if (s.length === 1) {
        s[0](o);
        return e;
      }
      var a = 0;
      var u = s.length;
      for (; a < u; ++a) {
        s[a](o);
      }
      return e;
    };
    t.prototype.has = function (t) {
      return this._providers.has(t);
    };
    t.prototype.get = function (t) {
      return this._providers.get(t);
    };
    t.prototype.dispose = function () {
      this._providers.clear();
      this._targetAddedCallbacks.clear();
    };
    t.prototype._makeUnwatch = function (t, e) {
      var n = this;
      function r() {
        r = null;
        var i = n._targetAddedCallbacks.get(t);
        if (i) {
          if ((i = i.filter(function (t) {
            return t !== e;
          })).length === 0) {
            n._targetAddedCallbacks.delete(t);
          } else {
            n._targetAddedCallbacks.set(t, i);
          }
        }
      }
      return function () {
        if (r != null) {
          r();
        }
      };
    };
    return t;
  }();
  var X = "__local__";
  var J = function () {
    function t(t) {
      this.local = new $(X);
      this._idToScopeMap = new Map();
      this.unwatchers = new Set();
      this._isDisposed = false;
      this.external = t;
      if (t) {
        this._idToScopeMap = new Map();
      }
    }
    Object.defineProperty(t.prototype, "isDisposed", {
      get: function () {
        return this._isDisposed;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.add = function (t) {
      var e = this.local.add(t);
      var n = this._idToScopeMap.get(e.id);
      if (n != null && n !== this.local) {
        throw Error("[injector] [unexpected] add local provider after reading existed from external");
      }
      return e;
    };
    t.prototype.has = function (t) {
      return this.get(t) != null;
    };
    t.prototype.get = function (t) {
      var e = this._idToScopeMap.get(t);
      if (e) {
        return e.get(t);
      }
      var n = this.local.get(t);
      if (n) {
        this._idToScopeMap.set(t, this.local);
      } else if (n = this.external.get(t)) {
        this._idToScopeMap.set(t, this.external);
      }
      return n;
    };
    t.prototype.watch = function (t, e) {
      var n;
      var r = this;
      if (this._isDisposed) {
        throw Error("[injector] Unable to watch \"" + P(t) + "\" after disposed");
      }
      var i = this._idToScopeMap.get(t);
      if (i) {
        return this.makeUnwatch(i.watch(t, e));
      }
      function o(i) {
        var o = r._idToScopeMap.get(t) || i.scope;
        r._idToScopeMap.set(t, o);
        if (n != null) {
          n();
        }
        n = o.watch(t, e);
        if (i.scope === o) {
          e(i);
        }
      }
      var s = this.local.watch(t, o);
      var a = this.external.watch(t, o);
      n = function () {
        n = null;
        s();
        if (a != null) {
          a();
        }
      };
      return this.makeUnwatch(function () {
        if (n != null) {
          n();
        }
      });
    };
    t.prototype.dispose = function () {
      this._isDisposed = true;
      this.unwatchers.forEach(function (t) {
        return t();
      });
      this.unwatchers.clear();
      this.local.dispose();
    };
    t.prototype.makeUnwatch = function (t) {
      var e = this;
      this.unwatchers.add(t);
      return function () {
        e.unwatchers.delete(t);
        t();
      };
    };
    return t;
  }();
  var Q = function () {
    function t() {
      this._scopes = new Map();
    }
    t.prototype.addProvider = function (t, e) {
      return this.ensureScope(e).add(t);
    };
    t.prototype.ensureScope = function (t) {
      var e = this._scopes.get(t);
      if (!e) {
        e = new $(t);
        this._scopes.set(t, e);
      }
      return e;
    };
    t.prototype.hasScope = function (t) {
      return this._scopes.has(t);
    };
    t.prototype.getScope = function (t) {
      return this._scopes.get(t);
    };
    t.prototype.setScope = function (t, e) {
      this._scopes.set(t, e);
      return e;
    };
    t.prototype.dispose = function () {
      var t = this._scopes;
      this._scopes = new Map();
      t.forEach(function (t) {
        t.dispose();
      });
    };
    return t;
  }();
  var tt = [];
  function te(t) {
    return tt.reduce(function (e, n, r, i) {
      var o = b(n, 2);
      var s = o[0];
      var a = o[1];
      e.push("{di: " + s.id + "} " + function (t, e) {
        var n;
        var r;
        var i = [];
        if (t) {
          try {
            var o = m(t);
            var s = o.next();
            for (; !s.done; s = o.next()) {
              var a = s.value;
              i.push(P(a));
            }
          } catch (t) {
            n = {
              error: t
            };
          } finally {
            try {
              if (s && !s.done && (r = o.return)) {
                r.call(o);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        }
        if (e) {
          i.push("<<" + P(e) + ">>");
        }
        return "[" + i.join(" -> ") + "]";
      }(a, r + 1 === i.length ? t : undefined));
      return e;
    }, []).join(" => ");
  }
  var tn = 0;
  var tr = function () {
    function t(t = null, e = null) {
      this.parent = t;
      this.id = ++tn;
      this._providersMap = new Map();
      this._instanceMap = new Map();
      this._loaderMap = new Map();
      this._hooks = [];
      this._isDisposed = false;
      this.scope = e || new $(X);
      this._hooks.push(new R());
    }
    Object.defineProperty(t.prototype, "isDisposed", {
      get: function () {
        return this._isDisposed;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.has = function (t) {
      var e;
      return this.hasOwn(t) || !!((e = this.parent) === null || e === undefined ? undefined : e.has(t));
    };
    t.prototype.hasOwn = function (t) {
      return this.scope.has(t);
    };
    t.prototype.findProvidersByName = function (t) {
      return safeArrayFlattenUtil.safeFlattenArray(E([], b(this._providersMap.entries()), false).filter(function (e) {
        return P(b(e, 1)[0]) === t;
      }).map(function (t) {
        var e = b(t, 2);
        e[0];
        return e[1].providers;
      }));
    };
    t.prototype.registerHook = function (t) {
      this._hooks.push(t);
    };
    t.prototype.bind = function (t) {
      var e;
      var n;
      if (this._isDisposed) {
        throw Error("[injector] Failed to bind after disposed");
      }
      try {
        var r = m(t);
        var i = r.next();
        for (; !i.done; i = r.next()) {
          var o = i.value;
          this.scope.add(o);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (n = r.return)) {
            n.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return this;
    };
    t.prototype.get = function (t, e) {
      var n = F(e || {});
      return this._resolve(t, n);
    };
    t.prototype.dispose = function () {
      this._isDisposed = true;
      this._hooks.forEach(function (t) {
        var e;
        if ((e = t.onDispose) !== null && e !== undefined) {
          e.call(t);
        }
      });
      this._hooks = [];
      this._instanceMap.clear();
      this._loaderMap.clear();
      this._providersMap.clear();
      this.scope.dispose();
    };
    t.prototype.createChild = function (e = null) {
      return new t(this, e);
    };
    t.prototype.instantiate = function (t) {
      var e = [];
      var n = 1;
      for (; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      var r = x.getParamDeps(t);
      if (r != null && r.length > 0) {
        e = e.concat(this._resolveDeps(r));
      }
      var i = T;
      T = this;
      try {
        var o = B(t, e, 0, e.length);
        return this.resolveInstanceInjectableProps(o, t);
      } finally {
        T = i;
      }
    };
    t.prototype.invoke = function (t) {
      return function (t, e) {
        var n = T;
        T = t;
        try {
          return e();
        } finally {
          T = n;
        }
      }(this, t);
    };
    t.prototype.resolveInstanceInjectableProps = function (t, e) {
      e ||= Reflect.getPrototypeOf(t).constructor;
      var n = x.getFullPropDeps(e);
      if (n != null && n.length > 0) {
        j(t, n, this._resolveDeps(n), 0, 0);
      }
      return t;
    };
    t.prototype._createContainer = function (t) {
      var e = new K(t, this.scope);
      this._providersMap.set(t, e);
      return e;
    };
    t.prototype._getContainer = function (t) {
      var e = this._providersMap.get(t);
      return e || (this.scope.has(t) ? this._createContainer(t) : null);
    };
    t.prototype._getNearestInjectorForId = function (t) {
      if (!this.parent) {
        return this;
      }
      var e = this;
      do {
        if (e._getContainer(t)) {
          return e;
        }
        e = e.parent;
      } while (e);
      return e || this;
    };
    t.prototype._resolveSimple = function (t) {
      var e = this;
      if (!t.isDirty) {
        return t.cache;
      }
      var n = t.resolve(function (t) {
        return e._resolveProvider(t, t);
      });
      t.setCache(n);
      return n;
    };
    t.prototype._resolveAsync = function (t) {
      var e = this;
      if (!t.isAsyncDirty) {
        return t.asyncCache;
      }
      var n = t.resolve(function (t) {
        return e._resolveAsyncProvider(t);
      });
      t.setAsyncCache(n);
      return n;
    };
    t.prototype._resolveAsyncProvider = function (t) {
      var e;
      var n;
      var r = this;
      if (!q(t) || t.type !== l.ASYNC) {
        return Promise.resolve(this._resolveProvider(t, t));
      }
      var i = this._loaderMap.get(t);
      if (!i) {
        i = this._createAsyncProviderResolver(t);
        this._loaderMap.set(t, i);
      }
      e = function () {
        return i().then(r._createSubProviderResolveCallback(t));
      };
      n = null;
      return {
        then: function (t, r) {
          if (n == null) {
            n = e();
          }
          return n.then(t, r);
        }
      };
    };
    t.prototype._createSubProviderResolveCallback = function (t) {
      var e = this;
      return function (n) {
        return new Promise(function (r, i) {
          if (!e._isDisposed) {
            try {
              r(e._resolveProvider(n, t));
            } catch (t) {
              i(t);
            }
          }
        });
      };
    };
    t.prototype._createAsyncProviderResolver = function (t) {
      var e;
      return function () {
        e ||= t.load().then(function (e) {
          var n = Y(t.id, G(e));
          n ||= Y(t.id, {
            useValue: e
          });
          return n;
        });
        return e;
      };
    };
    t.prototype._resolveDynamic = function (t, e) {
      if ((e & u.OPTIONAL) != 0) {
        e &= ~u.OPTIONAL;
      }
      var n;
      var r;
      var i;
      var o;
      var s = (e & u.MANY) == 0;
      var a = this._getContainer(t);
      if (a) {
        o = a.getDynamic(e);
      } else {
        a = this._createContainer(t);
      }
      o ||= s ? this._createDynamicOne(a, e) : this._createDynamicMany(a, e);
      a.setDynamic(e, o);
      try {
        var c = m(this._hooks);
        var l = c.next();
        for (; !l.done; l = c.next()) {
          var p = l.value;
          if ((i = p.onDynamicResolve) !== null && i !== undefined) {
            i.call(p, t, o, e);
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (l && !l.done && (r = c.return)) {
            r.call(c);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return o;
    };
    t.prototype._createDynamicOne = function (t, e) {
      var n = this;
      e = e & u.ASYNC | u.OPTIONAL;
      return function (t, e) {
        if (t.size > 1) {
          throw Error("[injector] dynamic value \"" + P(t.id) + "\" expects providers <= 1 when create");
        }
        function n(n) {
          if (t.size > 0) {
            n(e());
            return emptyExportFunction.emptyFunction;
          }
          var r = t.watch(function () {
            r();
            n(e());
          });
          return r;
        }
        return {
          get: e,
          isReady: function () {
            return t.size > 0;
          },
          onReady: n,
          then: function (t, e) {
            return new Promise(function (t) {
              n(t);
            }).then(t, e);
          }
        };
      }(t, function () {
        return n._resolve(t.id, e);
      });
    };
    t.prototype._createDynamicMany = function (t, e) {
      var n;
      var r = this;
      e = e & u.ASYNC | u.MANY;
      return n = {
        get: function () {
          return r._resolve(t.id, e);
        },
        watch: function (e) {
          return t.watch(function () {
            return e(n);
          });
        }
      };
    };
    t.prototype._resolveProvider = function (t, e) {
      var n = this._instanceMap;
      if (n.has(e)) {
        return n.get(e);
      } else {
        return this._createInstanceFromProvider(t, e);
      }
    };
    t.prototype._createInstanceFromProvider = function (t, e) {
      var n;
      var r;
      var i;
      var o;
      var s = t.id;
      if ((r = (n = tt.length) > 0 ? tt[n - 1] : null) == null || r[0] !== this) {
        r = [this, new Set()];
        tt.push(r);
      }
      var a = (i = r[1]).has(s) ? c.DEPENDENCY_LOOP_DETECTED : i.size + 1 >= 100 ? c.MAX_DEPENDENCY_DEPTH_REACHED : (i.add(s), c.OK);
      if (a === c.DEPENDENCY_LOOP_DETECTED) {
        throw Error("[injector] Dependency loop detected: " + te(s));
      }
      if (a === c.MAX_DEPENDENCY_DEPTH_REACHED) {
        throw Error("[injector] Max dependency depth reached: " + te(s));
      }
      try {
        o = t.deps.length === 0 ? t.create(w) : t.create(this._resolveDeps(t.deps));
      } finally {
        (function (t, e) {
          var n = tt.length;
          var r = tt[n - 1];
          if (t !== r[0]) {
            throw Error("[injector] unexpected error");
          }
          if (!r[1].delete(e)) {
            throw Error("[injector] unexpected resolving dependency error");
          }
          if (r[1].size === 0) {
            tt.pop();
          }
        })(this, s);
      }
      this._setCache(t, e, o);
      return o;
    };
    t.prototype._resolve = function (t, e) {
      var n = this._getNearestInjectorForId(t);
      var r = T;
      T = n;
      try {
        return n._doResolve(t, e);
      } finally {
        T = r;
      }
    };
    t.prototype._doResolve = function (t, e) {
      if ((e & u.DYNAMIC) != 0) {
        return this._resolveDynamic(t, e);
      }
      var n = this._getContainer(t);
      if (n == null || (e & u.MANY) == 0 && n.size === 0) {
        this._checkOptional(t, e);
        return;
      }
      this._checkQuantity(n, e);
      if ((e & u.ASYNC) != 0) {
        var r = this._resolveAsync(n);
        if ((e & u.MANY) == 0) {
          return r[0];
        } else {
          return r;
        }
      }
      var i = this._resolveSimple(n);
      if ((e & u.MANY) == 0) {
        return i[0];
      } else {
        return i;
      }
    };
    t.prototype._setCache = function (t, e, n) {
      this._instanceMap.set(e, n);
      var r;
      var i;
      var o;
      var s = {
        target: t,
        key: e,
        value: n
      };
      try {
        var a = m(this._hooks);
        var u = a.next();
        for (; !u.done; u = a.next()) {
          var c = u.value;
          if ((o = c.onCache) !== null && o !== undefined) {
            o.call(c, s);
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (i = a.return)) {
            i.call(a);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    };
    t.prototype._resolveDeps = function (t) {
      var e = this;
      return t.map(function (t) {
        var n = t.id;
        var r = t.flags;
        return e._resolve(n, r);
      });
    };
    t.prototype._checkOptional = function (t, e) {
      if ((e & u.OPTIONAL) == 0) {
        throw Error("[injector]" + (this._isDisposed ? "[disposed]" : "") + " No providers are found for \"" + P(t) + "\"\nDependency path: " + te(t) + " ");
      }
    };
    t.prototype._checkQuantity = function (t, e) {
      if ((e & u.MANY) == 0) {
        var n = t.id;
        if (t.size > 1) {
          throw Error("[injector] Cannot get only one instance for \"" + P(n) + "\", because multi instances are provided\nDependency path: " + te(n));
        }
        if ((e & u.DYNAMIC) == 0 && t.size === 0) {
          throw Error("[injector]" + (this._isDisposed ? "[disposed]" : "") + " No providers are found for \"" + P(n) + "\"\nDependency path: " + te(n) + " ");
        }
      }
    };
    return t;
  }();
  function ti(t) {
    return function (e, n, r) {
      if (isNumberUtil.isNumber(r)) {
        var i = x.ensureParamDepMetadata(e, r);
        t(i);
      } else {
        var o = r != null && isFunctionUtil_1.isFunction(r.value);
        var i = x.ensurePropDepMetadata(e.constructor, n, o);
        t(i);
      }
    };
  }
  function to(t) {
    return ti(function (e) {
      e.id = t;
    });
  }
  function ts() {
    return ti(function (t) {
      t.flags |= u.DYNAMIC;
    });
  }
  function ta() {
    return ti(function (t) {
      t.flags |= u.MANY;
    });
  }
  function tu() {
    return ti(function (t) {
      t.flags |= u.ASYNC;
    });
  }
  function tc() {
    return ti(function (t) {
      t.flags |= u.OPTIONAL;
    });
  }
  function tl(t) {
    return function (e) {
      x.setProvideId(e, t);
    };
  }
  function tp(t) {
    var e = ti(function (t) {
      t.id = e;
    });
    e.providerName = t;
    e.toString = function () {
      return t;
    };
    return e;
  }
  require.d(exports, {
    getInjector: function () {
      return I;
    },
    Provide: function () {
      return tl;
    },
    Optional: function () {
      return tc;
    },
    setInjector: function () {
      return A;
    },
    getDynamic: function () {
      return O;
    },
    Injector: function () {
      return J;
    },
    providerName: function () {
      return tp;
    },
    getAsync: function () {
      return k;
    },
    instantiate: function () {
      return M;
    },
    ProviderScope: function () {
      return $;
    },
    Async: function () {
      return tu;
    },
    get: function () {
      return C;
    },
    InjectionFlags: function () {
      return u;
    },
    Dynamic: function () {
      return ts;
    },
    getProviderName: function () {
      return P;
    },
    Many: function () {
      return ta;
    },
    Inject: function () {
      return to;
    },
    ScopeManager: function () {
      return Q;
    },
    InjectorCore: function () {
      return tr;
    }
  });
}