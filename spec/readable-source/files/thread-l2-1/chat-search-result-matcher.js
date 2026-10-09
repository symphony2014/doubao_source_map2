// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(919392) to 'chat-search-result-symbol_1'
// - Updated imported property 'z' to 'searchResultSymbol' (module 919392)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 349740
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("chat-search-result-symbol_1") /*id: 919392*/.searchResultSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_SEARCH_RESULT
  };
  require.r(exports);
  require.d(exports, {
    ReceiveSearchResultBlockContentMatcher: function () {
      return l;
    }
  });
}