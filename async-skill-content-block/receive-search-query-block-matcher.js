// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(563176) to 'receive-search-query-symbol'
// - Updated imported property 'S' to 'searchQueryBlockSymbol' (module 563176)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 184471
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("receive-search-query-symbol") /*id: 563176*/.searchQueryBlockSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY
  };
  require.r(exports);
  require.d(exports, {
    ReceiveSearchQueryBlockContentMatcher: function () {
      return l;
    }
  });
}