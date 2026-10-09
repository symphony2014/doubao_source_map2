// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ue' to 'createStoreHook'
// - Renamed export 'oR' to 'useStoreSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 65636
         */
module.exports = function (module, exports, require) {
  var stateStoreFactory = require("state-store-factory") /*id: 142289*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let {
    useSyncExternalStoreWithSelector: o
  } = require("use-sync-external-store-selector_1") /*id: 837232*/;
  function a(e, t = e.getState, n) {
    let r = o(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
    reactCoreLibraryReexport.useDebugValue(r);
    return r;
  }
  let s = e => {
    let t = typeof e == "function" ? stateStoreFactory.createStore(e) : e;
    let n = (e, n) => a(t, e, n);
    Object.assign(n, t);
    return n;
  };
  let u = e => e ? s(e) : s;
  require.d(exports, {
    createStoreHook: function () {
      return u;
    },
    useStoreSelector: function () {
      return a;
    }
  });
}