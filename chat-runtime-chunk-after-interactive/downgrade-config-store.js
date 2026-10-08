// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'setDowngradeConfig'
// - Renamed export 'Y' to 'getDowngradeConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 489677
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  let r = require("react-store-factory") /*id: 960791*/.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(() => ({
    downgradeConfigMap: {}
  })));
  let o = e => {
    let {
      downgradeConfigMap: n
    } = r.getState();
    return n[e] ?? {
      enable: false,
      toastContent: ""
    };
  };
  let s = e => {
    r.setState({
      downgradeConfigMap: e
    });
  };
  require.d(exports, {
    setDowngradeConfig: function () {
      return s;
    },
    getDowngradeConfig: function () {
      return o;
    }
  });
}