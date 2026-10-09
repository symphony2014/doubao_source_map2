// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ax' to 'useAppInitEvent'
// - Renamed export 'IG' to 'useAppInitStore'
// - Renamed export 'j6' to 'setAppInitEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 328418
         */
module.exports = function (module, exports, require) {
  let r = require("react-store-hook-factory") /*id: 65636*/.createStoreHook(() => ({
    appInitEventEmitted: false
  }));
  let i = () => r(e => e.appInitEventEmitted);
  let a = e => {
    r.setState({
      appInitEventEmitted: e
    });
  };
  require.d(exports, {
    useAppInitEvent: function () {
      return i;
    },
    useAppInitStore: function () {
      return r;
    },
    setAppInitEvent: function () {
      return a;
    }
  });
}