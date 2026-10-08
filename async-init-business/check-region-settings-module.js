// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-business.49e30a64.js
         * chunkId: 63216
         * moduleId: 628258
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let r = () => {
    apiServicesCollection.SamanthaApiService.GetSetting();
  };
  require.r(exports);
  require.d(exports, {
    checkRegion: function () {
      return r;
    }
  });
}