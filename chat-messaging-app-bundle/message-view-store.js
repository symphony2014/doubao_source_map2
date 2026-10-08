// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'initialState'
// - Renamed export 's' to 'messageStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47840.01121ae4.js
         * chunkId: 47840
         * moduleId: 241059
         */
module.exports = function (module, exports, require) {
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  let r = {
    inViewMessageList: [],
    messageBoxElementsMap: {}
  };
  let a = reactStoreFactory.createStore(() => ({
    ...r
  }));
  require.d(exports, {
    initialState: function () {
      return r;
    },
    messageStore: function () {
      return a;
    }
  });
}