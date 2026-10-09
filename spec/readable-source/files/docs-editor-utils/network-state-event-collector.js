// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'collectNetworkState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 67722
         */
module.exports = function (module, exports, require) {
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var networkConnectionSelector = require("network-connection-selector") /*id: 788516*/;
  let c = () => {
    let e = reduxStoreInitializer.reduxStore === null || reduxStoreInitializer.reduxStore === undefined ? undefined : reduxStoreInitializer.reduxStore.getState();
    if (!window.__NETWORK_STATE__ || !reduxStoreInitializer.reduxStore || !reduxStoreInitializer.reduxStore.getState) {
      try {
        flowDocEventCollector.collectEvent("client_network_state_empty", {
          user_agent: window.navigator.userAgent,
          is_online: window.navigator.onLine
        });
      } catch (e) {}
      return window.navigator.onLine;
    }
    return networkConnectionSelector.selectConnected(e);
  };
  require.d(exports, {
    collectNetworkState: function () {
      return c;
    }
  });
}