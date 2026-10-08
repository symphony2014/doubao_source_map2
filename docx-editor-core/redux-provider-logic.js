// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'contextProvider'
// - Renamed export 'd' to 'reduxProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 93342
         */
module.exports = function (module, exports, require) {
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      store: n,
      parentSub: i,
      children: r
    } = e;
    let s = reactCoreLibraryReexport.useMemo(() => {
      let e = new i.constructor(n, i);
      e.onStateChange = e.notifyNestedSubs;
      return {
        store: n,
        subscription: e
      };
    }, [n, i]);
    let c = reactCoreLibraryReexport.useMemo(() => n.getState(), [n]);
    reactCoreLibraryReexport.useEffect(() => {
      let {
        subscription: e,
        store: n
      } = s;
      if (c !== n.getState()) {
        e.notifyNestedSubs();
      }
      return () => {
        e.tryUnsubscribe();
        e.onStateChange = null;
      };
    }, [s, c]);
    return reactJsxRuntimeCoreReexport.jsx(reactReduxCore.ReactReduxContext.Provider, {
      value: s,
      children: r
    });
  };
  function c(e, n) {
    if (!e) {
      return reactJsxRuntimeCoreReexport.jsx(reactReduxCore.Provider, {
        store: reduxStoreInitializer.reduxStore,
        children: n
      });
    }
    {
      let {
        store: i,
        subscription: r
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(s, {
        store: i,
        parentSub: r,
        children: n
      });
    }
  }
  let u = e => {
    let {
      store: n,
      context: i,
      children: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactReduxCore.Provider, {
      store: n,
      context: i,
      children: reactJsxRuntimeCoreReexport.jsx(reactReduxCore.ReactReduxContext.Consumer, {
        children: e => r(e)
      })
    });
  };
  require.d(exports, {
    contextProvider: function () {
      return u;
    },
    reduxProvider: function () {
      return c;
    }
  });
}