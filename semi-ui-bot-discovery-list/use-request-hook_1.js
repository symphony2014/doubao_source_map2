// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'useRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-feedback.2262a137.js
         * chunkId: 31747
         * moduleId: 458670
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var a = class {
    setTrue() {
      this.value = true;
    }
    setFalse() {
      this.value = false;
    }
    isFalse() {
      return !this.value;
    }
    isTrue() {
      return this.value;
    }
    constructor(e) {
      var t;
      var r;
      if ((t = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(t = "value", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, t, {
          value: false,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = false;
      }
      this.value = !!e;
    }
  };
  function l(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  var c = class {
    setState(e = {}) {
      this.state = {
        ...this.state,
        ...e
      };
      if (this.onChangeState) {
        this.onChangeState(this.state);
      }
    }
    cancelPolling() {
      if (this.pollingTimer !== undefined) {
        window.clearTimeout(this.pollingTimer);
        this.pollingTimer = undefined;
      }
    }
    dontPolling() {
      this.setState({
        isPolling: false
      });
    }
    _run() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      this.cancelPolling();
      this.count += 1;
      let n = this.count;
      this.setState({
        loading: true,
        params: t,
        isPolling: !!this.options.pollingInterval
      });
      return this.requestFn(...t).then(e => {
        if (this.unmountedFlag.isTrue() || n !== this.count) {
          return;
        }
        let r = this.options.formatResult ? this.options.formatResult(e) : e;
        this.setState({
          loading: false,
          error: undefined,
          data: r
        });
        if (this.options.onSuccess) {
          this.options.onSuccess(r, t, this.dontPolling.bind(this.that));
        }
        return r;
      }).catch(e => {
        if (!this.unmountedFlag.isTrue() && n === this.count) {
          this.setState({
            data: undefined,
            error: e,
            loading: false
          });
          if (this.options.onError) {
            this.options.onError(e, t, this.dontPolling.bind(this.that));
          }
          if (this.options.throwOnError) {
            throw e;
          }
          return e;
        }
      }).finally(() => {
        if (!this.unmountedFlag.isTrue() && n === this.count && this.options.pollingInterval && this.state.isPolling) {
          this.pollingTimer = window.setTimeout(() => {
            this._run(...t);
          }, this.options.pollingInterval);
        }
      });
    }
    run() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      let {
        debounceFn: n,
        throttleFn: i
      } = this;
      this.unmountedFlag.setFalse();
      if (n) {
        n(...t);
        return Promise.resolve(null);
      } else if (i) {
        i(...t);
        return Promise.resolve(null);
      } else {
        return this._run(...t);
      }
    }
    cancel() {
      let {
        debounceFn: e,
        throttleFn: t,
        pollingTimer: r
      } = this;
      if (e) {
        e.cancel();
      }
      if (t) {
        t.cancel();
      }
      if (r !== undefined) {
        this.cancelPolling();
      }
      this.count += 1;
      this.setState({
        loading: false,
        isPolling: false
      });
    }
    unmount() {
      this.unmountedFlag.setTrue();
      this.cancel();
    }
    refresh() {
      this.unmountedFlag.setFalse();
      return this.run(...this.state.params);
    }
    refreshOptions(e = {}) {
      this.options = {
        ...this.options,
        ...e
      };
      return this.run(...this.state.params);
    }
    changeData(e) {
      if (typeof e == "function") {
        this.setState({
          data: e(this.state.data) || {}
        });
      } else {
        this.setState({
          data: e
        });
      }
    }
    constructor(e, t, r, n) {
      l(this, "options", undefined);
      l(this, "requestFn", undefined);
      l(this, "debounceFn", undefined);
      l(this, "throttleFn", undefined);
      l(this, "pollingTimer", undefined);
      l(this, "count", 0);
      l(this, "unmountedFlag", new a());
      l(this, "that", this);
      l(this, "onChangeState", undefined);
      l(this, "state", {
        loading: false,
        run: this.run.bind(this.that),
        data: undefined,
        error: undefined,
        isPolling: false,
        unmountedFlag: this.unmountedFlag,
        cancel: this.cancel.bind(this.that),
        refresh: this.refresh.bind(this.that),
        refreshOptions: this.refreshOptions.bind(this.that),
        changeData: this.changeData.bind(this.that),
        unmount: this.unmount.bind(this.that),
        params: []
      });
      let {
        debounceThrottleOptions: i,
        initData: c,
        debounceInterval: u,
        throttleInterval: d
      } = t;
      this.requestFn = e;
      this.options = t;
      this.onChangeState = r;
      this.state.data = c;
      if (n) {
        this.state = {
          ...this.state,
          ...n
        };
      }
      this.pollingTimer = undefined;
      if (u !== undefined) {
        this.debounceFn = u ? debounceUtil_1_1.debounce(this._run.bind(this.that), u) : undefined;
      } else if (d !== undefined) {
        this.throttleFn = d ? debounceUtilWrapper.createDebounce(this._run.bind(this.that), d) : undefined;
      } else if (i !== undefined) {
        let {
          type: e,
          interval: t,
          leading: r = e !== "debounce",
          trailing: n = true
        } = i;
        if (e === "debounce") {
          this.debounceFn = debounceUtil_1_1.debounce(this._run.bind(this.that), t, {
            leading: r,
            trailing: n
          });
        } else if (e === "throttle") {
          this.throttleFn = debounceUtilWrapper.createDebounce(this._run.bind(this.that), t, {
            leading: r,
            trailing: n
          });
        }
      }
    }
  };
  var syncedReferenceBlockManager = require("synced-reference-block-manager") /*id: 750510*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  function h(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let p = "BYTED_HOOKS_REQUEST_CACHE_STORAGE";
  let m = new class {
    syncStorage(e, t, r = false) {
      try {
        e.setItem(p, JSON.stringify(t));
      } catch (n) {
        if (!r) {
          e.removeItem(p);
          this.syncStorage(e, this.compressStorage(t), true);
        }
      }
    }
    compressStorage(e) {
      let t = {};
      Object.entries(e).forEach(e => {
        let [r, n] = e;
        if (n.expireTime === -1 || n.expireTime > Date.now()) {
          t[r] = n;
        }
      });
      return t;
    }
    constructor() {
      h(this, "memoryValue", undefined);
      h(this, "localStorageValue", undefined);
      h(this, "sessionStorageValue", undefined);
      h(this, "getValue", (e, t) => {
        switch (t) {
          case "memory":
          default:
            return this.memoryValue.get(e);
          case "sessionStorage":
            return this.sessionStorageValue[e];
          case "localStorage":
            return this.localStorageValue[e];
        }
      });
      h(this, "setValue", (e, t, r) => {
        switch (r) {
          case "memory":
          default:
            this.memoryValue.set(e, t);
            break;
          case "sessionStorage":
            this.sessionStorageValue[e] = t;
            this.syncStorage(storageWrapperWithFallback.SessionStorageWrapper, this.sessionStorageValue);
            break;
          case "localStorage":
            this.localStorageValue[e] = t;
            this.syncStorage(storageWrapperWithFallback.LocalStorageWrapper, this.localStorageValue);
        }
      });
      h(this, "removeItem", (e, t) => {
        switch (t) {
          case "memory":
          default:
            this.memoryValue.delete(e);
            break;
          case "sessionStorage":
            delete this.sessionStorageValue[e];
            this.syncStorage(storageWrapperWithFallback.SessionStorageWrapper, this.sessionStorageValue);
            break;
          case "localStorage":
            delete this.localStorageValue[e];
            this.syncStorage(storageWrapperWithFallback.LocalStorageWrapper, this.localStorageValue);
        }
      });
      this.memoryValue = new Map();
      try {
        var e;
        var t;
        this.localStorageValue = this.compressStorage(JSON.parse(((e = window) === null || e === undefined ? undefined : e.localStorage.getItem(p)) ?? "{}"));
        this.sessionStorageValue = this.compressStorage(JSON.parse(((t = window) === null || t === undefined ? undefined : t.sessionStorage.getItem(p)) ?? "{}"));
      } catch (e) {
        this.localStorageValue = {};
        this.sessionStorageValue = {};
      }
    }
  }();
  let f = (e, t, r, n) => {
    let i = Date.now();
    m.setValue(e, {
      data: r,
      expireTime: t !== -1 ? i + t : t,
      startTime: i
    }, n);
  };
  let v = (e, t) => {
    let n = m.getValue(e, t);
    if (n && ((n == null ? undefined : n.expireTime) === -1 || ((n == null ? undefined : n.expireTime) ?? 0) > Date.now())) {
      return syncedReferenceBlockManager.syncReferenceBlock(n);
    }
    m.removeItem(e, t);
  };
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  let b = "_BYTED_HOOKS_DEFAULT_KEY_";
  function y(e) {
    let l;
    let u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let {
      staleTime: d = 300000
    } = u;
    let {
      auto: h = false,
      defaultParams: p = [],
      refreshDeps: m = [],
      initData: y,
      ready: A = true,
      cacheKey: w,
      cacheStoreType: _ = "memory",
      cacheTime: x = 300000,
      loadingCheck: S = false,
      errorCheck: k = false,
      formatResult: T,
      requestKey: E,
      onError: $,
      onSuccess: j
    } = u;
    let O = useLatestCallbackHook_1.useLatestCallback(e);
    let N = useLatestCallbackHook_1.useLatestCallback(j);
    let R = useLatestCallbackHook_1.useLatestCallback($);
    let I = T ? useLatestCallbackHook_1.useLatestCallback(T) : undefined;
    let M = useLatestCallbackHook_1.useLatestCallback(E);
    let F = reactCoreLibraryReexport.useCallback((e, t) => {
      z(r => ({
        ...r,
        [e]: t
      }));
    }, []);
    let C = reactCoreLibraryReexport.useRef(w);
    C.current = w;
    let P = reactCoreLibraryReexport.useRef(_);
    P.current = _;
    let Z = reactCoreLibraryReexport.useRef(A);
    Z.current = A;
    let D = reactCoreLibraryReexport.useRef(b);
    let W = () => {
      if (C.current) {
        let {
          data: e,
          startTime: t = 0
        } = v(C.current, P.current) || {};
        let r = d === -1 || new Date().getTime() - t <= d;
        if (e && r) {
          D.current = e.currentRequestKey;
          let t = {};
          Object.keys(e.requests).forEach(r => {
            let n = e.requests[r];
            let i = new c(O, {
              ...u,
              onSuccess: N,
              onError: R,
              formatResult: I
            }, F.bind(null, r), {
              loading: n.loading,
              params: n.params,
              data: n.data,
              error: n.error
            });
            t[r] = i.state;
          });
          return t;
        }
      }
      return {};
    };
    let [L, z] = reactCoreLibraryReexport.useState(() => W());
    let B = reactCoreLibraryReexport.useRef(L);
    B.current = L;
    let V = reactCoreLibraryReexport.useRef();
    let U = reactCoreLibraryReexport.useCallback(function () {
      let e;
      var t = arguments.length;
      var r = Array(t);
      var n = 0;
      for (; n < t; n++) {
        r[n] = arguments[n];
      }
      if (!A) {
        V.current = r;
        return;
      }
      if (E) {
        let t = M(...r);
        D.current = t;
        e = B.current[t];
      } else {
        e = B.current[D.current];
      }
      if (!e) {
        let e = new c(O, {
          ...u,
          onSuccess: N,
          onError: R,
          formatResult: I
        }, F.bind(null, D.current)).state;
        z(t => ({
          ...t,
          [D.current]: e
        }));
        return e.run(...r);
      }
      return e.run(...r);
    }, [E, A]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (C.current) {
        f(C.current, x, {
          requests: L,
          currentRequestKey: D.current
        }, P.current);
      }
    }, [L]);
    let H = reactCoreLibraryReexport.useCallback(() => {
      Object.values(B.current).forEach(e => {
        e.unmount();
      });
      D.current = b;
      z({});
      B.current = {};
    }, [z]);
    let X = reactCoreLibraryReexport.useRef(false);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (A) {
        if (!X.current && V.current) {
          U(...V.current);
        }
        X.current = true;
      }
    }, [A]);
    reactCoreLibraryReexport.useEffect(() => {
      if (A && h) {
        if (Object.keys(W()).length > 0) {
          Object.values(L).forEach(e => {
            e.refresh();
          });
        } else {
          U(...p);
        }
      }
      return () => {
        Object.values(B.current).forEach(e => {
          e.unmount();
        });
      };
    }, [A]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (Z.current && h) {
        let e = W();
        if (Object.keys(e).length === 0) {
          Object.values(L).forEach(e => {
            e.refresh();
          });
        } else {
          z(e);
        }
      }
    }, [...m]);
    let J = [u.debounceInterval, u.throttleInterval, u.debounceThrottleOptions?.type, u.debounceThrottleOptions?.interval, u.debounceThrottleOptions?.leading, u.debounceThrottleOptions?.trailing, u.pollingInterval];
    reactUseUpdateEffect.useUpdateEffect(() => {
      Object.values(L).forEach(e => {
        if (!e.unmountedFlag.isTrue()) {
          if (u.debounceInterval !== undefined) {
            e.refreshOptions({
              debounceInterval: u.debounceInterval,
              pollingInterval: u.pollingInterval
            });
          } else if (u.throttleInterval !== undefined) {
            e.refreshOptions({
              throttleInterval: u.throttleInterval,
              pollingInterval: u.pollingInterval
            });
          } else {
            e.refreshOptions({
              debounceThrottleOptions: u.debounceThrottleOptions,
              pollingInterval: u.pollingInterval
            });
          }
        }
      });
    }, [...J]);
    l = L[D.current] ? {
      ...L[D.current],
      run: U,
      reset: H,
      requests: L
    } : {
      loading: h && A,
      isPolling: false,
      data: y,
      error: undefined,
      unmountedFlag: new a(),
      params: [],
      cancel: () => {},
      unmount: () => {},
      reset: () => {},
      refresh: () => {},
      refreshOptions: () => {},
      changeData: () => {},
      run: U,
      requests: L
    };
    if (typeof Proxy != "undefined") {
      return new Proxy(l, {
        get: (e, t) => e[t]
      });
    } else {
      return l;
    }
  }
  function A(e, t = {}) {
    let {
      ready: r = true,
      resetDeps: s = [],
      refreshDeps: o = [],
      itemKey: a,
      initPageSize: l = 10,
      ref: c,
      threshold: u = 100,
      ...d
    } = t;
    let {
      hasMoreHanlder: h,
      isNoMore: p,
      hasMoreHandler: m
    } = t;
    let {
      noMoreHandler: f
    } = t;
    f = f || m || h || p;
    let v = t.incrementSize || l;
    let [g, b] = reactCoreLibraryReexport.useState(false);
    let [A, w] = reactCoreLibraryReexport.useState(1);
    let _ = reactCoreLibraryReexport.useRef(0);
    let x = reactCoreLibraryReexport.useRef(new Date().getTime());
    let S = {
      data: {
        list: []
      },
      current: 1,
      pageSize: l,
      offset: 0,
      startTime: x.current
    };
    let k = typeof d.auto != "boolean" || d.auto;
    let [T, E] = reactCoreLibraryReexport.useState();
    let $ = y(e, {
      ...d,
      ready: r,
      auto: k,
      defaultParams: [S],
      requestKey: e => {
        var r;
        return ((e == null ? undefined : (r = e.data) === null || r === undefined ? undefined : r.list?.length) || 0) + x.current;
      },
      onSuccess: function () {
        var r = arguments.length;
        var n = Array(r);
        var i = 0;
        for (; i < r; i++) {
          n[i] = arguments[i];
        }
        if ((T == null ? undefined : T.list?.length) && c && c.current) {
          c.current.scrollTop = 0;
        }
        E(undefined);
        b(false);
        w(e => e + 1);
        if (t.onSuccess) {
          t.onSuccess(...n);
        }
      },
      onError: function () {
        var e = arguments.length;
        var r = Array(e);
        var n = 0;
        for (; n < e; n++) {
          r[n] = arguments[n];
        }
        b(false);
        if (t.onError) {
          t.onError(...r);
        }
      }
    });
    let {
      data: j,
      run: O,
      error: N,
      reset: R,
      loading: I,
      requests: M
    } = $;
    let F = reactCoreLibraryReexport.useMemo(() => {
      let e = [];
      let t = j || {};
      Object.keys(M).sort((e, t) => Number(e) - Number(t)).forEach(r => {
        let s = M[r];
        if (s.data?.list) {
          e = e.concat(s.data?.list);
        }
        if (!s.loading) {
          t = s.data;
        }
      });
      return {
        ...t,
        list: e
      };
    }, [M, j]);
    let C = !I && !g && !!(f ? f(j, N, F) : !(j == null ? undefined : j.list.length) || j.total && F.list.length >= j.total);
    let P = reactCoreLibraryReexport.useCallback(() => {
      let {
        list: e
      } = F;
      return {
        data: F,
        current: A,
        pageSize: A === 1 ? l : v,
        offset: e.length,
        id: a && e.length > 0 ? ((e, t) => {
          let r = typeof a == "function" ? a(e, t) : e[a];
          if (r === undefined) {
            return t;
          } else {
            return r;
          }
        })(e[e.length - 1], e.length - 1) : undefined,
        startTime: x.current
      };
    }, [A, l, v, F]);
    let Z = reactCoreLibraryReexport.useCallback(function (e = false) {
      if (e) {
        E(F);
      }
      R();
      w(1);
      x.current = new Date().getTime();
      O(S);
    }, [O, R, F]);
    let D = reactCoreLibraryReexport.useRef(Z);
    D.current = Z;
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (r && k) {
        D.current();
      }
    }, [...s, ...o]);
    let W = reactCoreLibraryReexport.useCallback(function (e = {}) {
      E(undefined);
      if (!C && !I && !g) {
        b(true);
        O({
          ...P(),
          ...e
        });
      }
    }, [C, I, g, O, F, P]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!(c == null ? undefined : c.current)) {
        return () => {};
      }
      let e = () => {
        if (c == null ? undefined : c.current) {
          if (_.current < c.current.scrollTop && c.current.scrollHeight - c.current.scrollTop <= c.current.clientHeight + u) {
            W();
          }
          _.current = c.current.scrollTop;
        }
      };
      c.current.addEventListener("scroll", e);
      return () => {
        if (c == null ? undefined : c.current) {
          c.current.removeEventListener("scroll", e);
        }
      };
    }, [c == null ? undefined : c.current, W]);
    let L = reactCoreLibraryReexport.useMemo(() => {
      if (T == null ? undefined : T.list?.length) {
        return T;
      } else {
        return F;
      }
    }, [T, T, F]);
    return {
      ...$,
      reset: D.current,
      current: A,
      data: L,
      reload: Z,
      loading: I && !!(T == null ? undefined : T.list.length) || I && F.list.length === 0,
      loadMore: W,
      loadingMore: g,
      noMore: C,
      hasMore: C
    };
  }
  require.d(exports, {
    useRequest: function () {
      return A;
    }
  });
}