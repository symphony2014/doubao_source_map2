// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'unreadCountIdentifierSymbol'
// - Resolved require(132003) to 'unread-count-identifier-symbol'
// - Updated imported property 'I' to 'unreadCountIdSymbol' (module 132003)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75177.55b3d075.js
         * chunkId: 75177
         * moduleId: 609539
         */
module.exports = function (module, exports, require) {
  var unreadCountIdentifierSymbol = require("unread-count-identifier-symbol") /*id: 132003*/;
  let u = t => t ? unreadCountIdentifierSymbol.unreadCountIdSymbol : undefined;
  require.r(exports);
  require.d(exports, {
    unreadCountFeedListItemToolButtonMatcher: function () {
      return u;
    }
  });
}