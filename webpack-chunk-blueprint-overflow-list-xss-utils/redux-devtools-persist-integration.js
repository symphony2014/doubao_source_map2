// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XR' to 'enhanceSubscribe'
// - Renamed export 'mW' to 'withDevTools'
// - Renamed export 'tJ' to 'persistMiddleware'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 383133
         */
module.exports = function (module, exports, require) {
  let r = new Map();
  let i = e => {
    let t = r.get(e);
    if (t) {
      return Object.fromEntries(Object.entries(t.stores).map(([e, t]) => [e, t.getState()]));
    } else {
      return {};
    }
  };
  let o = (e, t, n) => {
    if (e === undefined) {
      return {
        type: "untracked",
        connection: t.connect(n)
      };
    }
    let i = r.get(n.name);
    if (i) {
      return {
        type: "tracked",
        store: e,
        ...i
      };
    }
    let o = {
      connection: t.connect(n),
      stores: {}
    };
    r.set(n.name, o);
    return {
      type: "tracked",
      store: e,
      ...o
    };
  };
  let a = (e, t = {}) => (n, r, a) => {
    let u;
    let {
      enabled: c,
      anonymousActionType: l,
      store: f,
      ...h
    } = t;
    try {
      u = (c == null || c) && window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch (e) {}
    if (!u) {
      return e(n, r, a);
    }
    let {
      connection: d,
      ...p
    } = o(f, u, h);
    let g = true;
    a.setState = (e, t, o) => {
      let s = n(e, t);
      if (!g) {
        return s;
      }
      let u = o === undefined ? {
        type: l || "anonymous"
      } : typeof o == "string" ? {
        type: o
      } : o;
      if (f === undefined) {
        if (d != null) {
          d.send(u, r());
        }
      } else if (d != null) {
        d.send({
          ...u,
          type: `${f}/${u.type}`
        }, {
          ...i(h.name),
          [f]: a.getState()
        });
      }
      return s;
    };
    let v = (...e) => {
      let t = g;
      g = false;
      n(...e);
      g = t;
    };
    let m = e(a.setState, r, a);
    if (p.type === "untracked") {
      if (d != null) {
        d.init(m);
      }
    } else {
      p.stores[p.store] = a;
      if (d != null) {
        d.init(Object.fromEntries(Object.entries(p.stores).map(([e, t]) => [e, e === p.store ? m : t.getState()])));
      }
    }
    if (a.dispatchFromDevtools && typeof a.dispatch == "function") {
      let e = false;
      let t = a.dispatch;
      a.dispatch = (...n) => {
        if (n[0].type === "__setState" && !e) {
          e = true;
        }
        t(...n);
      };
    }
    d.subscribe(e => {
      var t;
      switch (e.type) {
        case "ACTION":
          if (typeof e.payload != "string") {
            return;
          }
          return s(e.payload, e => {
            if (e.type === "__setState") {
              if (f === undefined) {
                v(e.state);
                return;
              }
              Object.keys(e.state).length;
              let t = e.state[f];
              if (t == null) {
                return;
              }
              if (JSON.stringify(a.getState()) !== JSON.stringify(t)) {
                v(t);
              }
              return;
            }
            if (a.dispatchFromDevtools && typeof a.dispatch == "function") {
              a.dispatch(e);
            }
          });
        case "DISPATCH":
          switch (e.payload.type) {
            case "RESET":
              v(m);
              if (f === undefined) {
                if (d == null) {
                  return undefined;
                } else {
                  return d.init(a.getState());
                }
              }
              if (d == null) {
                return undefined;
              } else {
                return d.init(i(h.name));
              }
            case "COMMIT":
              if (f === undefined) {
                if (d != null) {
                  d.init(a.getState());
                }
                break;
              }
              if (d == null) {
                return undefined;
              } else {
                return d.init(i(h.name));
              }
            case "ROLLBACK":
              return s(e.state, e => {
                if (f === undefined) {
                  v(e);
                  if (d != null) {
                    d.init(a.getState());
                  }
                  return;
                }
                v(e[f]);
                if (d != null) {
                  d.init(i(h.name));
                }
              });
            case "JUMP_TO_STATE":
            case "JUMP_TO_ACTION":
              return s(e.state, e => {
                if (f === undefined) {
                  v(e);
                  return;
                }
                if (JSON.stringify(a.getState()) !== JSON.stringify(e[f])) {
                  v(e[f]);
                }
              });
            case "IMPORT_STATE":
              {
                let {
                  nextLiftedState: n
                } = e.payload;
                let r = (t = n.computedStates.slice(-1)[0]) == null ? undefined : t.state;
                if (!r) {
                  return;
                }
                if (f === undefined) {
                  v(r);
                } else {
                  v(r[f]);
                }
                if (d != null) {
                  d.send(null, n);
                }
                break;
              }
            case "PAUSE_RECORDING":
              return g = !g;
          }
          return;
      }
    });
    return m;
  };
  let s = (e, t) => {
    let n;
    try {
      n = JSON.parse(e);
    } catch (e) {}
    if (n !== undefined) {
      t(n);
    }
  };
  let u = e => (t, n, r) => {
    let i = r.subscribe;
    r.subscribe = (e, t, n) => {
      let o = e;
      if (t) {
        let i = (n == null ? undefined : n.equalityFn) || Object.is;
        let a = e(r.getState());
        o = n => {
          let r = e(n);
          if (!i(a, r)) {
            let e = a;
            t(a = r, e);
          }
        };
        if (n == null ? undefined : n.fireImmediately) {
          t(a, a);
        }
      }
      return i(o);
    };
    return e(t, n, r);
  };
  let c = e => t => {
    try {
      let n = e(t);
      if (n instanceof Promise) {
        return n;
      }
      return {
        then: e => c(e)(n),
        catch(e) {
          return this;
        }
      };
    } catch (e) {
      return {
        then(e) {
          return this;
        },
        catch: t => c(t)(e)
      };
    }
  };
  let l = (e, t) => (n, r, i) => {
    let o;
    let a;
    let s = {
      getStorage: () => localStorage,
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      partialize: e => e,
      version: 0,
      merge: (e, t) => ({
        ...t,
        ...e
      }),
      ...t
    };
    let u = false;
    let l = new Set();
    let f = new Set();
    try {
      o = s.getStorage();
    } catch (e) {}
    if (!o) {
      return e((...e) => {
        n(...e);
      }, r, i);
    }
    let h = c(s.serialize);
    let d = () => {
      let e;
      let t = h({
        state: s.partialize({
          ...r()
        }),
        version: s.version
      }).then(e => o.setItem(s.name, e)).catch(t => {
        e = t;
      });
      if (e) {
        throw e;
      }
      return t;
    };
    let p = i.setState;
    i.setState = (e, t) => {
      p(e, t);
      d();
    };
    let g = e((...e) => {
      n(...e);
      d();
    }, r, i);
    let v = () => {
      var e;
      if (!o) {
        return;
      }
      u = false;
      l.forEach(e => e(r()));
      let t = ((e = s.onRehydrateStorage) == null ? undefined : e.call(s, r())) || undefined;
      return c(o.getItem.bind(o))(s.name).then(e => {
        if (e) {
          return s.deserialize(e);
        }
      }).then(e => {
        if (e) {
          if (typeof e.version != "number" || e.version === s.version) {
            return e.state;
          }
          if (s.migrate) {
            return s.migrate(e.state, e.version);
          }
        }
      }).then(e => {
        n(a = s.merge(e, r() ?? g), true);
        return d();
      }).then(() => {
        if (t != null) {
          t(a, undefined);
        }
        u = true;
        f.forEach(e => e(a));
      }).catch(e => {
        if (t != null) {
          t(undefined, e);
        }
      });
    };
    i.persist = {
      setOptions: e => {
        s = {
          ...s,
          ...e
        };
        if (e.getStorage) {
          o = e.getStorage();
        }
      },
      clearStorage: () => {
        if (o != null) {
          o.removeItem(s.name);
        }
      },
      getOptions: () => s,
      rehydrate: () => v(),
      hasHydrated: () => u,
      onHydrate: e => {
        l.add(e);
        return () => {
          l.delete(e);
        };
      },
      onFinishHydration: e => {
        f.add(e);
        return () => {
          f.delete(e);
        };
      }
    };
    v();
    return a || g;
  };
  let f = (e, t) => (n, r, i) => {
    let o;
    let a = {
      storage: function (e, t) {
        let n;
        try {
          n = e();
        } catch (e) {
          return;
        }
        return {
          getItem: e => {
            let r = e => e === null ? null : JSON.parse(e, undefined);
            let i = n.getItem(e) ?? null;
            if (i instanceof Promise) {
              return i.then(r);
            } else {
              return r(i);
            }
          },
          setItem: (e, t) => n.setItem(e, JSON.stringify(t, undefined)),
          removeItem: e => n.removeItem(e)
        };
      }(() => localStorage),
      partialize: e => e,
      version: 0,
      merge: (e, t) => ({
        ...t,
        ...e
      }),
      ...t
    };
    let s = false;
    let u = new Set();
    let l = new Set();
    let f = a.storage;
    if (!f) {
      return e((...e) => {
        n(...e);
      }, r, i);
    }
    let h = () => {
      let e = a.partialize({
        ...r()
      });
      return f.setItem(a.name, {
        state: e,
        version: a.version
      });
    };
    let d = i.setState;
    i.setState = (e, t) => {
      d(e, t);
      h();
    };
    let p = e((...e) => {
      n(...e);
      h();
    }, r, i);
    let g = () => {
      var t;
      if (!f) {
        return;
      }
      s = false;
      u.forEach(e => {
        return e(r() ?? p);
      });
      let i = ((t = a.onRehydrateStorage) == null ? undefined : t.call(a, r() ?? p)) || undefined;
      return c(f.getItem.bind(f))(a.name).then(e => {
        if (e) {
          if (typeof e.version != "number" || e.version === a.version) {
            return e.state;
          }
          if (a.migrate) {
            return a.migrate(e.state, e.version);
          }
        }
      }).then(e => {
        n(o = a.merge(e, r() ?? p), true);
        return h();
      }).then(() => {
        if (i != null) {
          i(o, undefined);
        }
        o = r();
        s = true;
        l.forEach(e => e(o));
      }).catch(e => {
        if (i != null) {
          i(undefined, e);
        }
      });
    };
    i.persist = {
      setOptions: e => {
        a = {
          ...a,
          ...e
        };
        if (e.storage) {
          f = e.storage;
        }
      },
      clearStorage: () => {
        if (f != null) {
          f.removeItem(a.name);
        }
      },
      getOptions: () => a,
      rehydrate: () => g(),
      hasHydrated: () => s,
      onHydrate: e => {
        u.add(e);
        return () => {
          u.delete(e);
        };
      },
      onFinishHydration: e => {
        l.add(e);
        return () => {
          l.delete(e);
        };
      }
    };
    if (!a.skipHydration) {
      g();
    }
    return o || p;
  };
  let h = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? l(e, t) : f(e, t);
  require.d(exports, {
    enhanceSubscribe: function () {
      return u;
    },
    withDevTools: function () {
      return a;
    },
    persistMiddleware: function () {
      return h;
    }
  });
}