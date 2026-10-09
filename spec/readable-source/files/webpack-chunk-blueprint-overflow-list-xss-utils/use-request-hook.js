// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 870590
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  function a(e, t) {
    var n = t.manual;
    var a = t.ready;
    var s = a === undefined || a;
    var u = t.defaultParams;
    var c = u === undefined ? [] : u;
    var l = t.refreshDeps;
    var f = t.refreshDepsAction;
    var h = reactCoreLibraryReexport.useRef(false);
    h.current = false;
    reactUseUpdateEffect.useUpdateEffect(function () {
      if (!n && s) {
        h.current = true;
        e.run.apply(e, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(c), false));
      }
    }, [s]);
    reactUseUpdateEffect.useUpdateEffect(function () {
      if (!h.current) {
        if (!n) {
          h.current = true;
          if (f) {
            f();
          } else {
            e.refresh();
          }
        }
      }
    }, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(l === undefined ? [] : l), false));
    return {
      onBefore: function () {
        if (!s) {
          return {
            stopNow: true
          };
        }
      }
    };
  }
  a.onInit = function (e) {
    var t = e.ready;
    return {
      loading: !e.manual && (t === undefined || t)
    };
  };
  var arrayEqualsUtil_1 = require("array-equals-util_1") /*id: 788205*/;
  function u(e, t) {
    var n = reactCoreLibraryReexport.useRef({
      deps: t,
      obj: undefined,
      initialized: false
    }).current;
    if (n.initialized === false || !arrayEqualsUtil_1.areArraysEqual(n.deps, t)) {
      n.deps = t;
      n.obj = e();
      n.initialized = true;
    }
    return n.obj;
  }
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var l = new Map();
  function f(e, t, n) {
    var i = l.get(e);
    if (i == null ? undefined : i.timer) {
      clearTimeout(i.timer);
    }
    var o = undefined;
    if (t > -1) {
      o = setTimeout(function () {
        l.delete(e);
      }, t);
    }
    l.set(e, typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, n), {
      timer: o
    }));
  }
  var h = new Map();
  function d(e, t) {
    h.set(e, t);
    t.then(function (t) {
      h.delete(e);
      return t;
    }).catch(function () {
      h.delete(e);
    });
  }
  var p = {};
  function g(e, t) {
    if (p[e]) {
      p[e].forEach(function (e) {
        return e(t);
      });
    }
  }
  function v(e, t) {
    p[e] ||= [];
    p[e].push(t);
    return function () {
      var n = p[e].indexOf(t);
      p[e].splice(n, 1);
    };
  }
  function m(e, t) {
    var n = t.cacheKey;
    var o = t.cacheTime;
    var a = o === undefined ? 300000 : o;
    var s = t.staleTime;
    var p = s === undefined ? 0 : s;
    var m = t.setCache;
    var y = t.getCache;
    var b = reactCoreLibraryReexport.useRef();
    var _ = reactCoreLibraryReexport.useRef();
    function w(e, t) {
      if (m) {
        m(t);
      } else {
        f(e, a, t);
      }
      g(e, t.data);
    }
    function E(e, t = []) {
      if (y) {
        return y(t);
      } else {
        return l.get(e);
      }
    }
    u(function () {
      if (n) {
        var t = E(n);
        if (t && Object.hasOwnProperty.call(t, "data")) {
          e.state.data = t.data;
          e.state.params = t.params;
          if (p === -1 || new Date().getTime() - t.time <= p) {
            e.state.loading = false;
          }
        }
        b.current = v(n, function (t) {
          e.setState({
            data: t
          });
        });
      }
    }, []);
    useOnUnmountHook.useOnUnmount(function () {
      var e;
      if ((e = b.current) !== null && e !== undefined) {
        e.call(b);
      }
    });
    if (n) {
      return {
        onBefore: function (e) {
          var t = E(n, e);
          if (t && Object.hasOwnProperty.call(t, "data")) {
            if (p === -1 || new Date().getTime() - t.time <= p) {
              return {
                loading: false,
                data: t == null ? undefined : t.data,
                error: undefined,
                returnNow: true
              };
            } else {
              return {
                data: t == null ? undefined : t.data,
                error: undefined
              };
            }
          } else {
            return {};
          }
        },
        onRequest: function (e, t) {
          var i = h.get(n);
          if (!i || i === _.current) {
            i = e.apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(t), false));
            _.current = i;
            d(n, i);
          }
          return {
            servicePromise: i
          };
        },
        onSuccess: function (t, r) {
          var i;
          if (n) {
            if ((i = b.current) !== null && i !== undefined) {
              i.call(b);
            }
            w(n, {
              data: t,
              params: r,
              time: new Date().getTime()
            });
            b.current = v(n, function (t) {
              e.setState({
                data: t
              });
            });
          }
        },
        onMutate: function (t) {
          var r;
          if (n) {
            if ((r = b.current) !== null && r !== undefined) {
              r.call(b);
            }
            w(n, {
              data: t,
              params: e.state.params,
              time: new Date().getTime()
            });
            b.current = v(n, function (t) {
              e.setState({
                data: t
              });
            });
          }
        }
      };
    } else {
      return {};
    }
  }
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  function b(e, t) {
    var n = t.debounceWait;
    var o = t.debounceLeading;
    var a = t.debounceTrailing;
    var s = t.debounceMaxWait;
    var u = reactCoreLibraryReexport.useRef();
    var c = reactCoreLibraryReexport.useMemo(function () {
      var e = {};
      if (o !== undefined) {
        e.leading = o;
      }
      if (a !== undefined) {
        e.trailing = a;
      }
      if (s !== undefined) {
        e.maxWait = s;
      }
      return e;
    }, [o, a, s]);
    reactCoreLibraryReexport.useEffect(function () {
      if (n) {
        var t = e.runAsync.bind(e);
        u.current = debounceUtil_1_1.debounce(function (e) {
          e();
        }, n, c);
        e.runAsync = function () {
          var e = [];
          var n = 0;
          for (; n < arguments.length; n++) {
            e[n] = arguments[n];
          }
          return new Promise(function (n, i) {
            var o;
            if ((o = u.current) !== null && o !== undefined) {
              o.call(u, function () {
                t.apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(e), false)).then(n).catch(i);
              });
            }
          });
        };
        return function () {
          var n;
          if ((n = u.current) !== null && n !== undefined) {
            n.cancel();
          }
          e.runAsync = t;
        };
      }
    }, [n, c]);
    if (n) {
      return {
        onCancel: function () {
          var e;
          if ((e = u.current) !== null && e !== undefined) {
            e.cancel();
          }
        }
      };
    } else {
      return {};
    }
  }
  function _(e, t) {
    var n = t.loadingDelay;
    var r = t.ready;
    var o = reactCoreLibraryReexport.useRef();
    if (!n) {
      return {};
    }
    function a() {
      if (o.current) {
        clearTimeout(o.current);
      }
    }
    return {
      onBefore: function () {
        a();
        if (r !== false) {
          o.current = setTimeout(function () {
            e.setState({
              loading: true
            });
          }, n);
        }
        return {
          loading: false
        };
      },
      onFinally: function () {
        a();
      },
      onCancel: function () {
        a();
      }
    };
  }
  var browserDomCheck = require("browser-dom-check") /*id: 38090*/;
  function E() {
    return !browserDomCheck.isBrowserDom || document.visibilityState !== "hidden";
  }
  var S = [];
  if (browserDomCheck.isBrowserDom) {
    window.addEventListener("visibilitychange", function () {
      if (E()) {
        for (var e = 0; e < S.length; e++) {
          S[e]();
        }
      }
    }, false);
  }
  function x(e, t) {
    var n = t.pollingInterval;
    var r = t.pollingWhenHidden;
    var a = r === undefined || r;
    var s = t.pollingErrorRetryCount;
    var u = s === undefined ? -1 : s;
    var c = reactCoreLibraryReexport.useRef();
    var l = reactCoreLibraryReexport.useRef();
    var f = reactCoreLibraryReexport.useRef(0);
    function h() {
      var e;
      if (c.current) {
        clearTimeout(c.current);
      }
      if ((e = l.current) !== null && e !== undefined) {
        e.call(l);
      }
    }
    reactUseUpdateEffect.useUpdateEffect(function () {
      if (!n) {
        h();
      }
    }, [n]);
    if (n) {
      return {
        onBefore: function () {
          h();
        },
        onError: function () {
          f.current += 1;
        },
        onSuccess: function () {
          f.current = 0;
        },
        onFinally: function () {
          if (u === -1 || u !== -1 && f.current <= u) {
            c.current = setTimeout(function () {
              if (a || E()) {
                e.refresh();
              } else {
                var t;
                t = function () {
                  e.refresh();
                };
                S.push(t);
                l.current = function () {
                  var e = S.indexOf(t);
                  S.splice(e, 1);
                };
              }
            }, n);
          } else {
            f.current = 0;
          }
        },
        onCancel: function () {
          h();
        }
      };
    } else {
      return {};
    }
  }
  var k = [];
  if (browserDomCheck.isBrowserDom) {
    function O() {
      if (E() && (!browserDomCheck.isBrowserDom || navigator.onLine === undefined || navigator.onLine)) {
        for (var e = 0; e < k.length; e++) {
          k[e]();
        }
      }
    }
    window.addEventListener("visibilitychange", O, false);
    window.addEventListener("focus", O, false);
  }
  function A(e, t) {
    var n = t.refreshOnWindowFocus;
    var o = t.focusTimespan;
    var a = o === undefined ? 5000 : o;
    var s = reactCoreLibraryReexport.useRef();
    function u() {
      var e;
      if ((e = s.current) !== null && e !== undefined) {
        e.call(s);
      }
    }
    reactCoreLibraryReexport.useEffect(function () {
      if (n) {
        var t;
        var i;
        var o;
        t = e.refresh.bind(e);
        i = false;
        function c() {
          var e = [];
          var n = 0;
          for (; n < arguments.length; n++) {
            e[n] = arguments[n];
          }
          if (!i) {
            i = true;
            t.apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(e), false));
            setTimeout(function () {
              i = false;
            }, a);
          }
        }
        o = function () {
          c();
        };
        k.push(o);
        s.current = function () {
          var e = k.indexOf(o);
          if (e > -1) {
            k.splice(e, 1);
          }
        };
      }
      return function () {
        u();
      };
    }, [n, a]);
    useOnUnmountHook.useOnUnmount(function () {
      u();
    });
    return {};
  }
  function T(e, t) {
    var n = t.retryInterval;
    var r = t.retryCount;
    var o = reactCoreLibraryReexport.useRef();
    var a = reactCoreLibraryReexport.useRef(0);
    var s = reactCoreLibraryReexport.useRef(false);
    if (r) {
      return {
        onBefore: function () {
          if (!s.current) {
            a.current = 0;
          }
          s.current = false;
          if (o.current) {
            clearTimeout(o.current);
          }
        },
        onSuccess: function () {
          a.current = 0;
        },
        onError: function () {
          a.current += 1;
          if (r === -1 || a.current <= r) {
            var t = n ?? Math.min(Math.pow(2, a.current) * 1000, 30000);
            o.current = setTimeout(function () {
              s.current = true;
              e.refresh();
            }, t);
          } else {
            a.current = 0;
          }
        },
        onCancel: function () {
          a.current = 0;
          if (o.current) {
            clearTimeout(o.current);
          }
        }
      };
    } else {
      return {};
    }
  }
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  function C(e, t) {
    var n = t.throttleWait;
    var o = t.throttleLeading;
    var a = t.throttleTrailing;
    var s = reactCoreLibraryReexport.useRef();
    var u = {};
    if (o !== undefined) {
      u.leading = o;
    }
    if (a !== undefined) {
      u.trailing = a;
    }
    reactCoreLibraryReexport.useEffect(function () {
      if (n) {
        var t = e.runAsync.bind(e);
        s.current = debounceUtilWrapper.createDebounce(function (e) {
          e();
        }, n, u);
        e.runAsync = function () {
          var e = [];
          var n = 0;
          for (; n < arguments.length; n++) {
            e[n] = arguments[n];
          }
          return new Promise(function (n, i) {
            var o;
            if ((o = s.current) !== null && o !== undefined) {
              o.call(s, function () {
                t.apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(e), false)).then(n).catch(i);
              });
            }
          });
        };
        return function () {
          var n;
          e.runAsync = t;
          if ((n = s.current) !== null && n !== undefined) {
            n.cancel();
          }
        };
      }
    }, [n, o, a]);
    if (n) {
      return {
        onCancel: function () {
          var e;
          if ((e = s.current) !== null && e !== undefined) {
            e.cancel();
          }
        }
      };
    } else {
      return {};
    }
  }
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var useFeatureFlagEffect = require("use-feature-flag-effect") /*id: 806314*/;
  var useResetState = require("use-reset-state") /*id: 997624*/;
  var featureFlagConstant = require("feature-flag-constant") /*id: 523244*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  var L = function () {
    function e(e, t, n, i = {}) {
      this.serviceRef = e;
      this.options = t;
      this.subscribe = n;
      this.initState = i;
      this.count = 0;
      this.state = {
        loading: false,
        params: undefined,
        data: undefined,
        error: undefined
      };
      this.state = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, this.state), {
        loading: !t.manual
      }), i);
    }
    e.prototype.setState = function (e = {}) {
      this.state = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, this.state), e);
      this.subscribe();
    };
    e.prototype.runPluginHandler = function (e) {
      var t = [];
      var n = 1;
      for (; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
      var i = this.pluginImpls.map(function (n) {
        var i;
        if ((i = n[e]) === null || i === undefined) {
          return undefined;
        } else {
          return i.call.apply(i, typescriptRuntimeHelpers.arraySpread([n], typescriptRuntimeHelpers.spreadArray(t), false));
        }
      }).filter(Boolean);
      return Object.assign.apply(Object, typescriptRuntimeHelpers.arraySpread([{}], typescriptRuntimeHelpers.spreadArray(i), false));
    };
    e.prototype.runAsync = function () {
      var e;
      var t;
      var n;
      var i;
      var o;
      var a;
      var s;
      var u;
      var c;
      var l;
      var f = [];
      var h = 0;
      for (; h < arguments.length; h++) {
        f[h] = arguments[h];
      }
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var h;
        var d;
        var p;
        var g;
        var v;
        var m;
        var y;
        var b;
        var _;
        var w;
        var E;
        return typescriptRuntimeHelpers.generator(this, function (S) {
          switch (S.label) {
            case 0:
              this.count += 1;
              h = this.count;
              g = (p = (d = this.runPluginHandler("onBefore", f)).stopNow) !== undefined && p;
              m = (v = d.returnNow) !== undefined && v;
              y = typescriptRuntimeHelpers.objectRest(d, ["stopNow", "returnNow"]);
              if (g) {
                return [2, new Promise(function () {})];
              }
              this.setState(typescriptRuntimeHelpers.objectAssign({
                loading: true,
                params: f
              }, y));
              if (m) {
                return [2, Promise.resolve(y.data)];
              }
              if ((t = (e = this.options).onBefore) !== null && t !== undefined) {
                t.call(e, f);
              }
              S.label = 1;
            case 1:
              S.trys.push([1, 3,, 4]);
              if (!(b = this.runPluginHandler("onRequest", this.serviceRef.current, f).servicePromise)) {
                b = (E = this.serviceRef).current.apply(E, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(f), false));
              }
              return [4, b];
            case 2:
              _ = S.sent();
              if (h !== this.count) {
                return [2, new Promise(function () {})];
              }
              this.setState({
                data: _,
                error: undefined,
                loading: false
              });
              if ((i = (n = this.options).onSuccess) !== null && i !== undefined) {
                i.call(n, _, f);
              }
              this.runPluginHandler("onSuccess", _, f);
              if ((a = (o = this.options).onFinally) !== null && a !== undefined) {
                a.call(o, f, _, undefined);
              }
              if (h === this.count) {
                this.runPluginHandler("onFinally", f, _, undefined);
              }
              return [2, _];
            case 3:
              w = S.sent();
              if (h !== this.count) {
                return [2, new Promise(function () {})];
              }
              this.setState({
                error: w,
                loading: false
              });
              if ((u = (s = this.options).onError) !== null && u !== undefined) {
                u.call(s, w, f);
              }
              this.runPluginHandler("onError", w, f);
              if ((l = (c = this.options).onFinally) !== null && l !== undefined) {
                l.call(c, f, undefined, w);
              }
              if (h === this.count) {
                this.runPluginHandler("onFinally", f, undefined, w);
              }
              throw w;
            case 4:
              return [2];
          }
        });
      });
    };
    e.prototype.run = function () {
      var e = this;
      var t = [];
      var n = 0;
      for (; n < arguments.length; n++) {
        t[n] = arguments[n];
      }
      this.runAsync.apply(this, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(t), false)).catch(function (t) {
        e.options.onError;
      });
    };
    e.prototype.cancel = function () {
      this.count += 1;
      this.setState({
        loading: false
      });
      this.runPluginHandler("onCancel");
    };
    e.prototype.refresh = function () {
      this.run.apply(this, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(this.state.params || []), false));
    };
    e.prototype.refreshAsync = function () {
      return this.runAsync.apply(this, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(this.state.params || []), false));
    };
    e.prototype.mutate = function (e) {
      var t = typeCheckUtils.isFunction(e) ? e(this.state.data) : e;
      this.runPluginHandler("onMutate", t);
      this.setState({
        data: t
      });
    };
    return e;
  }();
  function B(e, t = {}, n = []) {
    var i = t.manual;
    var o = i !== undefined && i;
    var a = typescriptRuntimeHelpers.objectRest(t, ["manual"]);
    if (featureFlagConstant.isFeatureEnabled && t.defaultParams) {
      Array.isArray(t.defaultParams);
    }
    var s = typescriptRuntimeHelpers.objectAssign({
      manual: o
    }, a);
    var l = useLatestRef_1.useLatestRef(e);
    var f = useResetState.useResetState();
    var h = u(function () {
      var e = n.map(function (e) {
        var t;
        if ((t = e == null ? undefined : e.onInit) === null || t === undefined) {
          return undefined;
        } else {
          return t.call(e, s);
        }
      }).filter(Boolean);
      return new L(l, s, f, Object.assign.apply(Object, typescriptRuntimeHelpers.arraySpread([{}], typescriptRuntimeHelpers.spreadArray(e), false)));
    }, []);
    h.options = s;
    h.pluginImpls = n.map(function (e) {
      return e(h, s);
    });
    useFeatureFlagEffect.useFeatureFlagEffect(function () {
      if (!o) {
        var e = h.state.params || t.defaultParams || [];
        h.run.apply(h, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(e), false));
      }
    });
    useOnUnmountHook.useOnUnmount(function () {
      h.cancel();
    });
    return {
      loading: h.state.loading,
      data: h.state.data,
      error: h.state.error,
      params: h.state.params || [],
      cancel: reactFunctionMemoHook.useMemoizedCallback(h.cancel.bind(h)),
      refresh: reactFunctionMemoHook.useMemoizedCallback(h.refresh.bind(h)),
      refreshAsync: reactFunctionMemoHook.useMemoizedCallback(h.refreshAsync.bind(h)),
      run: reactFunctionMemoHook.useMemoizedCallback(h.run.bind(h)),
      runAsync: reactFunctionMemoHook.useMemoizedCallback(h.runAsync.bind(h)),
      mutate: reactFunctionMemoHook.useMemoizedCallback(h.mutate.bind(h))
    };
  }
  function Z(e, t, n) {
    return B(e, t, typescriptRuntimeHelpers.arraySpread(typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(n || []), false), [b, _, x, A, C, a, m, T], false));
  }
  require.d(exports, {
    useRequest: function () {
      return Z;
    }
  });
}