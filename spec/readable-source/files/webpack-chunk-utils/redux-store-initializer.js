// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'xC' to 'registerStoreModule'
// - Renamed export 'ZP' to 'reduxStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 75100
         */
module.exports = function (module, exports, require) {
  let i;
  let o;
  var reduxStoreUtilsAggregator_1 = require("redux-store-utils-aggregator_1") /*id: 707812*/;
  function u(e, n) {
    let r = i == null ? undefined : i.addModule(n).remove;
    return {
      store: i,
      storeRemoveHandler: r
    };
  }
  new Promise(e => {
    o = e;
  });
  (function () {
    let e = reduxStoreUtilsAggregator_1.createStore({
      initialState: {},
      enhancers: []
    });
    if (typeof window != "undefined") {
      window.store = e;
    }
    i = e;
    if (o) {
      o();
    }
  })();
  exports.reduxStore = i;
  require.d(exports, {
    registerStoreModule: function () {
      return u;
    }
  });
}