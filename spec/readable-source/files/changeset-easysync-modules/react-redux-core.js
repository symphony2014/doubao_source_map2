// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'd' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'b' to 'objectAssignUtil'
// - Resolved require(513453) to 'object-assign-util'
// - Renamed variable 'E' to 'objectOmitUtil_3'
// - Resolved require(435902) to 'object-omit-util_3'
// - Renamed variable 'w' to 'hoistNonReactStatics'
// - Resolved require(19165) to 'hoist-non-react-statics'
// - Renamed variable 'T' to 'reactIsTypeCheckersReexport'
// - Resolved require(547283) to 'react-is-type-checkers-reexport'
// - Renamed variable 'B' to 'reduxCoreApi'
// - Resolved require(76673) to 'redux-core-api'
// - Renamed variable 'te' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Updated imported property 'Z' to 'omitKeys' (module 435902)
// - Updated imported property 'Z' to 'objectAssign' (module 513453)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 509563
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
  var p;
  var h;
  var f;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var v = reactCoreLibraryReexport.createContext(null);
  function y(t) {
    t();
  }
  var g = {
    notify: function () {}
  };
  var _ = function () {
    function t(t, e) {
      this.store = t;
      this.parentSub = e;
      this.unsubscribe = null;
      this.listeners = g;
      this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
    }
    var e = t.prototype;
    e.addNestedSub = function (t) {
      this.trySubscribe();
      return this.listeners.subscribe(t);
    };
    e.notifyNestedSubs = function () {
      this.listeners.notify();
    };
    e.handleChangeWrapper = function () {
      if (this.onStateChange) {
        this.onStateChange();
      }
    };
    e.isSubscribed = function () {
      return !!this.unsubscribe;
    };
    e.trySubscribe = function () {
      if (!this.unsubscribe) {
        var t;
        var e;
        var n;
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
        this.listeners = (t = y, e = null, n = null, {
          clear: function () {
            e = null;
            n = null;
          },
          notify: function () {
            t(function () {
              for (var t = e; t;) {
                t.callback();
                t = t.next;
              }
            });
          },
          get: function () {
            var t = [];
            var n = e;
            while (n) {
              t.push(n);
              n = n.next;
            }
            return t;
          },
          subscribe: function (t) {
            var r = true;
            var i = n = {
              callback: t,
              next: null,
              prev: n
            };
            if (i.prev) {
              i.prev.next = i;
            } else {
              e = i;
            }
            return function () {
              if (r && e !== null) {
                r = false;
                if (i.next) {
                  i.next.prev = i.prev;
                } else {
                  n = i.prev;
                }
                if (i.prev) {
                  i.prev.next = i.next;
                } else {
                  e = i.next;
                }
              }
            };
          }
        });
      }
    };
    e.tryUnsubscribe = function () {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = g;
      }
    };
    return t;
  }();
  function m(t) {
    var e = t.store;
    var n = t.context;
    var r = t.children;
    var i = reactCoreLibraryReexport.useMemo(function () {
      var t = new _(e);
      t.onStateChange = t.notifyNestedSubs;
      return {
        store: e,
        subscription: t
      };
    }, [e]);
    var o = reactCoreLibraryReexport.useMemo(function () {
      return e.getState();
    }, [e]);
    reactCoreLibraryReexport.useEffect(function () {
      var t = i.subscription;
      t.trySubscribe();
      if (o !== e.getState()) {
        t.notifyNestedSubs();
      }
      return function () {
        t.tryUnsubscribe();
        t.onStateChange = null;
      };
    }, [i, o]);
    var s = n || v;
    return reactCoreLibraryReexport.createElement(s.Provider, {
      value: i
    }, r);
  }
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var hoistNonReactStatics = require("hoist-non-react-statics") /*id: 19165*/;
  var S = hoistNonReactStatics;
  var reactIsTypeCheckersReexport = require("react-is-type-checkers-reexport") /*id: 547283*/;
  var I = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  var A = [];
  var C = [null, null];
  function M(t, e) {
    var n = t[1];
    return [e.payload, n + 1];
  }
  function k(t, e, n) {
    I(function () {
      return t.apply(undefined, e);
    }, n);
  }
  function O(t, e, n, r, i, o, s) {
    t.current = r;
    e.current = i;
    n.current = false;
    if (o.current) {
      o.current = null;
      s();
    }
  }
  function R(t, e, n, r, i, o, s, a, u, c) {
    if (t) {
      var l = false;
      var p = null;
      function h() {
        if (!l) {
          var t;
          var n;
          var h = e.getState();
          try {
            t = r(h, i.current);
          } catch (t) {
            n = t;
            p = t;
          }
          if (!n) {
            p = null;
          }
          if (t === o.current) {
            if (!s.current) {
              u();
            }
          } else {
            o.current = t;
            a.current = t;
            s.current = true;
            c({
              type: "STORE_UPDATED",
              payload: {
                error: n
              }
            });
          }
        }
      }
      n.onStateChange = h;
      n.trySubscribe();
      h();
      return function () {
        l = true;
        n.tryUnsubscribe();
        n.onStateChange = null;
        if (p) {
          throw p;
        }
      };
    }
  }
  function D() {
    return [null, 0];
  }
  function N(t, e = {}) {
    var n = e;
    var r = n.getDisplayName;
    var i = r === undefined ? function (t) {
      return "ConnectAdvanced(" + t + ")";
    } : r;
    var o = n.methodName;
    var s = o === undefined ? "connectAdvanced" : o;
    var a = n.renderCountProp;
    var u = a === undefined ? undefined : a;
    var c = n.shouldHandleStateChanges;
    var l = c === undefined || c;
    var p = n.storeKey;
    var h = p === undefined ? "store" : p;
    n.withRef;
    var f = n.forwardRef;
    var y = f !== undefined && f;
    var g = n.context;
    var m = g === undefined ? v : g;
    var w = objectOmitUtil_3.omitKeys(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
    return function (e) {
      var n = e.displayName || e.name || "Component";
      var r = i(n);
      var o = objectAssignUtil.objectAssign({}, w, {
        getDisplayName: i,
        methodName: s,
        renderCountProp: u,
        shouldHandleStateChanges: l,
        storeKey: h,
        displayName: r,
        wrappedComponentName: n,
        WrappedComponent: e
      });
      var a = w.pure;
      var c = a ? reactCoreLibraryReexport.useMemo : function (t) {
        return t();
      };
      function p(n) {
        var r = reactCoreLibraryReexport.useMemo(function () {
          var t = n.forwardedRef;
          var e = objectOmitUtil_3.omitKeys(n, ["forwardedRef"]);
          return [n.context, t, e];
        }, [n]);
        var i = r[0];
        var s = r[1];
        var a = r[2];
        var u = reactCoreLibraryReexport.useMemo(function () {
          if (i && i.Consumer && reactIsTypeCheckersReexport.isContextConsumer(reactCoreLibraryReexport.createElement(i.Consumer, null))) {
            return i;
          } else {
            return m;
          }
        }, [i, m]);
        var p = reactCoreLibraryReexport.useContext(u);
        var h = !!n.store && !!n.store.getState && !!n.store.dispatch;
        if (p) {
          p.store;
        }
        var f = h ? n.store : p.store;
        var v = reactCoreLibraryReexport.useMemo(function () {
          return t(f.dispatch, o);
        }, [f]);
        var y = reactCoreLibraryReexport.useMemo(function () {
          if (!l) {
            return C;
          }
          var t = new _(f, h ? null : p.subscription);
          var e = t.notifyNestedSubs.bind(t);
          return [t, e];
        }, [f, h, p]);
        var g = y[0];
        var w = y[1];
        var S = reactCoreLibraryReexport.useMemo(function () {
          if (h) {
            return p;
          } else {
            return objectAssignUtil.objectAssign({}, p, {
              subscription: g
            });
          }
        }, [h, p, g]);
        var I = reactCoreLibraryReexport.useReducer(M, A, D);
        var N = I[0][0];
        var x = I[1];
        if (N && N.error) {
          throw N.error;
        }
        var P = reactCoreLibraryReexport.useRef();
        var B = reactCoreLibraryReexport.useRef(a);
        var L = reactCoreLibraryReexport.useRef();
        var F = reactCoreLibraryReexport.useRef(false);
        var j = c(function () {
          if (L.current && a === B.current) {
            return L.current;
          } else {
            return v(f.getState(), a);
          }
        }, [f, N, a]);
        k(O, [B, P, F, a, j, L, w]);
        k(R, [l, f, g, v, B, P, F, L, w, x], [f, g, v]);
        var U = reactCoreLibraryReexport.useMemo(function () {
          return reactCoreLibraryReexport.createElement(e, objectAssignUtil.objectAssign({}, j, {
            ref: s
          }));
        }, [s, e, j]);
        return reactCoreLibraryReexport.useMemo(function () {
          if (l) {
            return reactCoreLibraryReexport.createElement(u.Provider, {
              value: S
            }, U);
          } else {
            return U;
          }
        }, [u, U, S]);
      }
      var f = a ? reactCoreLibraryReexport.memo(p) : p;
      f.WrappedComponent = e;
      f.displayName = r;
      if (y) {
        var v = reactCoreLibraryReexport.forwardRef(function (t, e) {
          return reactCoreLibraryReexport.createElement(f, objectAssignUtil.objectAssign({}, t, {
            forwardedRef: e
          }));
        });
        v.displayName = r;
        v.WrappedComponent = e;
        return S(v, e);
      }
      return S(f, e);
    };
  }
  function x(t, e) {
    if (t === e) {
      return t !== 0 || e !== 0 || 1 / t == 1 / e;
    } else {
      return t != t && e != e;
    }
  }
  function P(t, e) {
    if (x(t, e)) {
      return true;
    }
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) {
      return false;
    }
    var n = Object.keys(t);
    var r = Object.keys(e);
    if (n.length !== r.length) {
      return false;
    }
    for (var i = 0; i < n.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(e, n[i]) || !x(t[n[i]], e[n[i]])) {
        return false;
      }
    }
    return true;
  }
  var reduxCoreApi = require("redux-core-api") /*id: 76673*/;
  function L(t) {
    return function (e, n) {
      var r = t(e, n);
      function i() {
        return r;
      }
      i.dependsOnOwnProps = false;
      return i;
    };
  }
  function F(t) {
    if (t.dependsOnOwnProps !== null && t.dependsOnOwnProps !== undefined) {
      return !!t.dependsOnOwnProps;
    } else {
      return t.length !== 1;
    }
  }
  function j(t, e) {
    return function (e, n) {
      n.displayName;
      function r(t, e) {
        if (r.dependsOnOwnProps) {
          return r.mapToProps(t, e);
        } else {
          return r.mapToProps(t);
        }
      }
      r.dependsOnOwnProps = true;
      r.mapToProps = function (e, n) {
        r.mapToProps = t;
        r.dependsOnOwnProps = F(t);
        var i = r(e, n);
        if (typeof i == "function") {
          r.mapToProps = i;
          r.dependsOnOwnProps = F(i);
          i = r(e, n);
        }
        return i;
      };
      return r;
    };
  }
  var U = [function (t) {
    if (typeof t == "function") {
      return j(t, "mapDispatchToProps");
    } else {
      return undefined;
    }
  }, function (t) {
    if (t) {
      return undefined;
    } else {
      return L(function (t) {
        return {
          dispatch: t
        };
      });
    }
  }, function (t) {
    if (t && typeof t == "object") {
      return L(function (e) {
        return reduxCoreApi.bindActionCreators(t, e);
      });
    } else {
      return undefined;
    }
  }];
  var z = [function (t) {
    if (typeof t == "function") {
      return j(t, "mapStateToProps");
    } else {
      return undefined;
    }
  }, function (t) {
    if (t) {
      return undefined;
    } else {
      return L(function () {
        return {};
      });
    }
  }];
  function H(t, e, n) {
    return objectAssignUtil.objectAssign({}, n, {}, t, {}, e);
  }
  var V = [function (t) {
    if (typeof t == "function") {
      return function (e, n) {
        n.displayName;
        var r;
        var i = n.pure;
        var o = n.areMergedPropsEqual;
        var s = false;
        return function (e, n, a) {
          var u = t(e, n, a);
          if (s) {
            if (!i || !o(u, r)) {
              r = u;
            }
          } else {
            s = true;
            r = u;
          }
          return r;
        };
      };
    } else {
      return undefined;
    }
  }, function (t) {
    if (t) {
      return undefined;
    } else {
      return function () {
        return H;
      };
    }
  }];
  function Z(t, e, n) {
    for (var r = e.length - 1; r >= 0; r--) {
      var i = e[r](t);
      if (i) {
        return i;
      }
    }
    return function (e, r) {
      throw Error("Invalid value of type " + typeof t + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".");
    };
  }
  function q(t, e) {
    return t === e;
  }
  o = (i = (r = {}).connectHOC) === undefined ? N : i;
  a = (s = r.mapStateToPropsFactories) === undefined ? z : s;
  c = (u = r.mapDispatchToPropsFactories) === undefined ? U : u;
  p = (l = r.mergePropsFactories) === undefined ? V : l;
  f = (h = r.selectorFactory) === undefined ? function (t, e) {
    var n = e.initMapStateToProps;
    var r = e.initMapDispatchToProps;
    var i = e.initMergeProps;
    var o = objectOmitUtil_3.omitKeys(e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
    var s = n(t, o);
    var a = r(t, o);
    var u = i(t, o);
    return (o.pure ? function (t, e, n, r, i) {
      var o;
      var s;
      var a;
      var u;
      var c;
      var l = i.areStatesEqual;
      var p = i.areOwnPropsEqual;
      var h = i.areStatePropsEqual;
      var f = false;
      return function (i, d) {
        var v;
        var y;
        var g;
        var _;
        var m;
        var b;
        if (f) {
          v = i;
          m = !p(y = d, s);
          b = !l(v, o);
          o = v;
          s = y;
          if (m && b) {
            a = t(o, s);
            if (e.dependsOnOwnProps) {
              u = e(r, s);
            }
            return c = n(a, u, s);
          } else if (m) {
            if (t.dependsOnOwnProps) {
              a = t(o, s);
            }
            if (e.dependsOnOwnProps) {
              u = e(r, s);
            }
            return c = n(a, u, s);
          } else if (b) {
            _ = !h(g = t(o, s), a);
            a = g;
            if (_) {
              c = n(a, u, s);
            }
            return c;
          } else {
            return c;
          }
        } else {
          a = t(o = i, s = d);
          u = e(r, s);
          c = n(a, u, s);
          f = true;
          return c;
        }
      };
    } : function (t, e, n, r) {
      return function (i, o) {
        return n(t(i, o), e(r, o), o);
      };
    })(s, a, u, t, o);
  } : h;
  function W(t, e, n, r = {}) {
    var i = r;
    var s = i.pure;
    var u = i.areStatesEqual;
    var l = i.areOwnPropsEqual;
    var h = l === undefined ? P : l;
    var d = i.areStatePropsEqual;
    var v = d === undefined ? P : d;
    var y = i.areMergedPropsEqual;
    var g = y === undefined ? P : y;
    var _ = objectOmitUtil_3.omitKeys(i, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
    var m = Z(t, a, "mapStateToProps");
    var w = Z(e, c, "mapDispatchToProps");
    var S = Z(n, p, "mergeProps");
    return o(f, objectAssignUtil.objectAssign({
      methodName: "connect",
      getDisplayName: function (t) {
        return "Connect(" + t + ")";
      },
      shouldHandleStateChanges: !!t,
      initMapStateToProps: m,
      initMapDispatchToProps: w,
      initMergeProps: S,
      pure: s === undefined || s,
      areStatesEqual: u === undefined ? q : u,
      areOwnPropsEqual: h,
      areStatePropsEqual: v,
      areMergedPropsEqual: g
    }, _));
  }
  function G() {
    return reactCoreLibraryReexport.useContext(v);
  }
  function Y(t = v) {
    var e = t === v ? G : function () {
      return reactCoreLibraryReexport.useContext(t);
    };
    return function () {
      return e().store;
    };
  }
  var K = Y();
  function $(t = v) {
    var e = t === v ? K : Y(t);
    return function () {
      return e().dispatch;
    };
  }
  var X = $();
  function J(t, e) {
    return t === e;
  }
  function Q(t = v) {
    var e = t === v ? G : function () {
      return reactCoreLibraryReexport.useContext(t);
    };
    return function (t, n = J) {
      var r = e();
      return function (t, e, n, r) {
        var i;
        var o = reactCoreLibraryReexport.useReducer(function (t) {
          return t + 1;
        }, 0)[1];
        var s = reactCoreLibraryReexport.useMemo(function () {
          return new _(n, r);
        }, [n, r]);
        var a = reactCoreLibraryReexport.useRef();
        var u = reactCoreLibraryReexport.useRef();
        var c = reactCoreLibraryReexport.useRef();
        try {
          i = t !== u.current || a.current ? t(n.getState()) : c.current;
        } catch (t) {
          if (a.current) {
            t.message += "\nThe error may be correlated with this previous error:\n" + a.current.stack + "\n\n";
          }
          throw t;
        }
        I(function () {
          u.current = t;
          c.current = i;
          a.current = undefined;
        });
        I(function () {
          function t() {
            try {
              var t = u.current(n.getState());
              if (e(t, c.current)) {
                return;
              }
              c.current = t;
            } catch (t) {
              a.current = t;
            }
            o({});
          }
          s.onStateChange = t;
          s.trySubscribe();
          t();
          return function () {
            return s.tryUnsubscribe();
          };
        }, [n, s]);
        return i;
      }(t, n, r.store, r.subscription);
    };
  }
  var tt = Q();
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  y = reactDomEntryWrapper.unstable_batchedUpdates;
  require.r(exports);
  require.d(exports, {
    connect: function () {
      return W;
    },
    connectAdvanced: function () {
      return N;
    },
    useDispatch: function () {
      return X;
    },
    useSelector: function () {
      return tt;
    },
    batch: function () {
      return reactDomEntryWrapper.unstable_batchedUpdates;
    },
    useStore: function () {
      return K;
    },
    shallowEqual: function () {
      return P;
    },
    ReactReduxContext: function () {
      return v;
    },
    createDispatchHook: function () {
      return $;
    },
    Provider: function () {
      return m;
    },
    createSelectorHook: function () {
      return Q;
    },
    createStoreHook: function () {
      return Y;
    }
  });
}