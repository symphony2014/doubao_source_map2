// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(106910) to 'chat-search-result-symbol'
// - Updated imported property 'j' to 'searchResultBlock' (module 106910)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 964028
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("chat-search-result-symbol") /*id: 106910*/.searchResultBlock,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT
  };
  require.r(exports);
  require.d(exports, {
    ReceiveSearchQueryResultBlockMatcher: function () {
      return l;
    }
  });
}