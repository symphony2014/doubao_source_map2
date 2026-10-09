// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatWebappCollectionSymbols'
// - Resolved require(775228) to 'chat-webapp-collection-symbols'
// - Updated imported property 'T' to 'inWebAppSym' (module 775228)
// - Updated imported property 'f' to 'collectionSym' (module 775228)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 322150
         */
module.exports = function (module, exports, require) {
  var chatWebappCollectionSymbols = require("chat-webapp-collection-symbols") /*id: 775228*/;
  let r = {
    pluginIdentifier: chatWebappCollectionSymbols.inWebAppSym,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  let o = {
    pluginIdentifier: chatWebappCollectionSymbols.collectionSym,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    CollectionMessageLifeCyclePluginMatcher: function () {
      return o;
    },
    InWebAppMessageLifeCyclePluginMatcher: function () {
      return r;
    }
  });
}