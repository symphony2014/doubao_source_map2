// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'getGlobalBucketUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 594677
         */
module.exports = function (module, exports, require) {
  var configBucketUrlUtils = require("config-bucket-url-utils") /*id: 361194*/;
  function o() {
    return configBucketUrlUtils.getGlobalBucketUrl();
  }
  require.d(exports, {
    getGlobalBucketUrl: function () {
      return o;
    }
  });
}