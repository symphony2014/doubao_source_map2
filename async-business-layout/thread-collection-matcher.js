// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'threadCollectionHeaderSymbol'
// - Resolved require(396126) to 'thread-collection-header-symbol'
// - Updated imported property 'U' to 'threadCollectionSym' (module 396126)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 398715
         */
module.exports = function (module, exports, require) {
  var threadCollectionHeaderSymbol = require("thread-collection-header-symbol") /*id: 396126*/;
  let r = e => {
    let {
      threadSelected: t,
      threadSelectModeScene: n
    } = e;
    if (t && n === "Collection") {
      return threadCollectionHeaderSymbol.threadCollectionSym;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return r;
    }
  });
}