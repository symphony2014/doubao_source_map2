// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sharkBlockErrorHandler'
// - Resolved require(523955) to 'shark-block-error-handler'
// - Resolved require(737752) to 'shark-error-symbol'
// - Updated imported property 'q' to 'SharkErrorSymbol' (module 737752)
// - Updated imported property 'jV' to 'sharkBlockErrorHandler' (module 523955)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 938967
         */
module.exports = function (module, exports, require) {
  var sharkBlockErrorHandler = require("shark-block-error-handler") /*id: 523955*/;
  let n = {
    pluginIdentifier: require("shark-error-symbol") /*id: 737752*/.SharkErrorSymbol,
    matchPlugin: e => sharkBlockErrorHandler.sharkBlockErrorHandler.matcher.matchError(e)
  };
  require.r(exports);
  require.d(exports, {
    sharkErrorPluginMatcher: function () {
      return n;
    }
  });
}