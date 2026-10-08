// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'getCollectionConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-action.e6a2cf79.js
         * chunkId: 29547
         * moduleId: 583847
         */
module.exports = function (module, exports, require) {
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  let r = () => ({
    collectionEnable: !!userInfoStatusSelectors.selectUserInfoSuccess_1()
  });
  require.d(exports, {
    getCollectionConfig: function () {
      return r;
    }
  });
}