// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'instanceDecorator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 317038
         */
module.exports = function (module, exports, require) {
  var functionPlaceholderWrapper = require("function-placeholder-wrapper") /*id: 589315*/;
  var i = function () {
    function e(e, t, r = {}) {
      this.execute = e;
      this.applicator = t;
      this.options = r;
    }
    var t = e.prototype;
    Object.defineProperty(t, "bound", {
      get: function () {
        return this.options.bound != null && this.options.bound;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "setter", {
      get: function () {
        return this.options.setter != null && this.options.setter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "getter", {
      get: function () {
        return this.options.getter != null && this.options.getter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "property", {
      get: function () {
        return this.options.property != null && this.options.property;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "method", {
      get: function () {
        return this.options.method == null || this.options.method;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "optionalParams", {
      get: function () {
        return this.options.optionalParams != null && this.options.optionalParams;
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }();
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectPropertyGetter = require("object-property-getter") /*id: 570114*/;
  function l(e, t) {
    objectPropertyGetter.getProperty(t, function (t, r) {
      e[r] = t;
    });
    return e;
  }
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var c = function () {
    function e() {
      this._weakMap = new WeakMap();
    }
    var t = e.prototype;
    t.set = function (e, t) {
      var r = this._weakMap;
      var n = 0;
      var i = e.length - 1;
      for (; n < i; n++) {
        var o = e[n];
        var a = r.get(o);
        if (!a) {
          a = new Map();
          r.set(o, a);
        }
        r = a;
      }
      r.set(e[e.length - 1], t);
    };
    t.get = function (e) {
      var t = this._weakMap;
      var r = 0;
      var n = e.length;
      for (; r < n && (t = t.get(e[r]), !isUndefinedCheck.isUndefined(t)); r++);
      return t;
    };
    t.has = function (e) {
      return !isUndefinedCheck.isUndefined(this.get(e));
    };
    return e;
  }();
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  function f() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return e.length >= 2 && isObjectOrFunction_1_1.isObjectOrFunction(e[0]) && isStringTypeCheck.isString(e[1]) && isFunctionUtil_1.isFunction(e[0].constructor) && e[0].constructor.prototype === e[0];
  }
  var A = new (function () {
    function e() {}
    var t = e.prototype;
    t.createDecorator = function (e) {
      var t = this;
      var r = e.applicator;
      var n = e.optionalParams;
      return function () {
        var i = [];
        var s = 0;
        for (; s < arguments.length; s++) {
          i[s] = arguments[s];
        }
        var u = i;
        function c(n, i, o) {
          var s = t._resolveDescriptor(n, i, o);
          var c = s.value;
          var h = s.get;
          var d = s.set;
          if (!g.has([n, i])) {
            if (isFunctionUtil_1.isFunction(c)) {
              s.value = l(r.apply({
                config: e,
                target: n,
                value: c,
                args: u
              }), c);
            } else if (isFunctionUtil_1.isFunction(h) && e.getter) {
              s.get = l(r.apply({
                config: e,
                target: n,
                value: h,
                args: u
              }), h);
            } else if (isFunctionUtil_1.isFunction(d) && e.setter) {
              s.set = l(r.apply({
                config: e,
                target: n,
                value: d,
                args: u
              }), d);
            }
          }
          return s;
        }
        if (n && f.apply(undefined, typescriptHelpers_1.spreadArray(i))) {
          u = [];
          return c(i[0], i[1], i[2]);
        } else {
          return c;
        }
      };
    };
    t.createInstanceDecorator = function (e) {
      var t = this;
      var r = e.applicator;
      var n = e.bound;
      var i = e.optionalParams;
      return function () {
        var s = [];
        var u = 0;
        for (; u < arguments.length; u++) {
          s[u] = arguments[u];
        }
        var c = s;
        function h(i, o, s) {
          var u = t._resolveDescriptor(i, o, s);
          var h = u.value;
          var d = u.writable;
          var f = u.enumerable;
          var A = u.configurable;
          var p = u.get;
          var m = u.set;
          var y = !g.has([i, o]);
          var v = g.get([i, o]) || {
            fns: [],
            properties: []
          };
          var b = y && isFunctionUtil_1.isFunction(p);
          var w = y && isFunctionUtil_1.isFunction(m);
          var C = y && isFunctionUtil_1.isFunction(h);
          var E = y && !b && !w && !C;
          var I = b ? p : C ? h : undefined;
          v.properties.push(o);
          v.fns.push(function (o, a, s) {
            if (!t._isApplicable(s, e)) {
              return o;
            }
            if (n) {
              var u;
              o = l((u = o).bind(a), u);
            }
            return l(r.apply({
              args: c,
              target: i,
              instance: a,
              value: o,
              config: e
            }), o);
          });
          g.set([i, o], v);
          if (!y) {
            return u;
          }
          v.isSetter = w;
          v.isGetter = b;
          v.isMethod = C;
          v.isProperty = E;
          function B(e, t, r) {
            return v.fns.reduce(function (e, n) {
              return n(e, r, t);
            }, e);
          }
          function x(e) {
            var t = p || undefined;
            var r = m || undefined;
            if (b || w) {
              if (b) {
                t = B(p, {
                  value: p,
                  getter: true
                }, e);
              }
              if (w) {
                r = B(m, {
                  value: m,
                  setter: true
                }, e);
              }
              Object.defineProperty(e, o, {
                enumerable: f,
                configurable: A,
                get: t,
                set: r
              });
            } else if (C || E) {
              var n = C ? B(h, {
                value: h,
                method: true
              }, e) : B(h, {
                value: h,
                property: true
              }, e);
              Object.defineProperty(e, o, {
                writable: d,
                enumerable: f,
                configurable: A,
                value: n
              });
            }
          }
          if (C || E) {
            delete u.value;
            delete u.writable;
          }
          u.get = function () {
            if (this === i) {
              return I;
            }
            x(this);
            var e = Object.getOwnPropertyDescriptor(this, o);
            if (e.get) {
              return e.get.call(this);
            } else {
              return e.value;
            }
          };
          u.set = function (e) {
            x(this);
            var t = Object.getOwnPropertyDescriptor(this, o);
            if (t.set) {
              t.set.call(this, e);
            } else if (E || C) {
              this[o] = e;
            }
          };
          return u;
        }
        if (i && f.apply(undefined, typescriptHelpers_1.spreadArray(s))) {
          c = [];
          return h(s[0], s[1], s[2]);
        } else {
          return h;
        }
      };
    };
    t._isApplicable = function (e, t) {
      return (!e.getter || !!t.getter) && (!e.setter || !!t.setter) && (!e.method || !!t.method) && (!e.property || !!t.property);
    };
    t._resolveDescriptor = function (e, t, r) {
      return r || Object.getOwnPropertyDescriptor(e, t) || {};
    };
    return e;
  }())();
  var g = new c();
  var p = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptHelpers_1.inherits(t, e);
    t.prototype.apply = function (e) {
      var t = e.value;
      var r = e.config.execute;
      var n = e.args;
      var i = e.instance;
      if (i) {
        return r.apply(undefined, typescriptHelpers_1.spreadArray([t, i], n));
      } else {
        return t;
      }
    };
    return t;
  }(function () {});
  var m = A.createInstanceDecorator(new i(functionPlaceholderWrapper.createPlaceholder, new p(), {
    optionalParams: true
  }));
  require.d(exports, {
    instanceDecorator: function () {
      return m;
    }
  });
}