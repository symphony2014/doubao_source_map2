// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aS' to 'useScrollHandler'
// - Renamed export 'kv' to 'mergeOutlineData'
// - Renamed export '$' to 'useOutlineData'
// - Renamed export 'JA' to 'useUrlRefresh'
// - Renamed export 'uH' to 'runOnceEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 29056
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  let c = e => {
    let {
      dest: t
    } = e;
    if (arrayIsArrayUtil.isArray(t)) {
      return t.map(e => JSON.stringify(e)).join("-");
    } else {
      return t ?? "";
    }
  };
  let u = async (e, t) => {
    let {
      dest: n
    } = t;
    try {
      let t;
      if (Array.isArray(n)) {
        t = n[0];
      } else if (isStringTypeCheck.isString(n)) {
        let r = await e.getDestination(n);
        t = r == null ? undefined : r[0];
      }
      if (!t) {
        return;
      }
      return (await e.getPageIndex(t)) + 1;
    } catch (e) {}
  };
  let d = async (e, t) => Promise.all(t.map(async t => {
    let {
      title: n,
      items: r
    } = t;
    return {
      title: n,
      key: c(t),
      page: await u(e, t),
      children: await d(e, r)
    };
  }));
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  let p = e => {
    let [t, n] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        n(false);
      }
    }, [t]);
    return {
      url: t ? null : e,
      refresh: () => {
        n(true);
      }
    };
  };
  let f = e => {
    let {
      onScrollStart: t,
      onScrollStop: n
    } = e;
    let [i, o] = reactCoreLibraryReexport.useState(false);
    let s = reactCoreLibraryReexport.useRef(0);
    let c = reactCoreLibraryReexport.useRef();
    let u = reactContextProviderHook.useContextValue();
    let d = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e.target) {
        let n;
        let r = e.target;
        if (r.scrollTop !== s.current) {
          n = r.scrollTop > s.current ? "up" : "down";
          s.current = r.scrollTop;
        }
        if (n && n !== c.current) {
          var t;
          c.current = n;
          if ((t = u.onScrollPage) !== null && t !== undefined) {
            t.call(u, n);
          }
        }
      }
    });
    let p = reactFunctionMemoHook.useMemoizedCallback(e => {
      d(e);
      if (!i) {
        if (t != null) {
          t();
        }
        o(true);
      }
      f();
    });
    let {
      run: f
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      if (n != null) {
        n();
      }
      o(false);
      c.current = undefined;
    }, {
      wait: 100,
      leading: false,
      trailing: true
    });
    return {
      isScrolling: i,
      onScroll: p
    };
  };
  let g = e => {
    let t = reactCoreLibraryReexport.useRef(false);
    if (!t.current) {
      e();
      t.current = true;
    }
  };
  let m = e => {
    let {
      data: t,
      loading: n = false
    } = useRequestHook.useRequest(async () => {
      if (!e) {
        return;
      }
      let t = await e.getOutline();
      if (t) {
        return d(e, t);
      }
    }, {
      refreshDeps: [e]
    });
    return {
      data: t,
      loading: n
    };
  };
  let v = (e, t) => {
    let {
      data: n,
      loading: r = false
    } = m(e);
    if (r || n || !t) {
      return {
        data: n,
        loading: r
      };
    } else {
      return t;
    }
  };
  let x = (e, t) => {
    let {
      data: r,
      loading: a = false
    } = m(e);
    if (t == null ? undefined : t.data?.length) {
      return t;
    } else {
      return {
        data: r,
        loading: a
      };
    }
  };
  require.d(exports, {
    useScrollHandler: function () {
      return f;
    },
    mergeOutlineData: function () {
      return x;
    },
    useOutlineData: function () {
      return v;
    },
    useUrlRefresh: function () {
      return p;
    },
    runOnceEffect: function () {
      return g;
    }
  });
}