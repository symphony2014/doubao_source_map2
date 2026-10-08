// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageActions'
// - Resolved require(331991) to 'skill-message-actions'
// - Renamed variable 'r' to 'threadMultiSelectHeaderLoader'
// - Resolved require(723525) to 'thread-multi-select-header-loader'
// - Updated imported property 'e' to 'messageActions' (module 331991)
// - Updated imported property 'K' to 'threadHeaderSymbol' (module 723525)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 894354
         */
module.exports = function (module, exports, require) {
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var threadMultiSelectHeaderLoader = require("thread-multi-select-header-loader") /*id: 723525*/;
  let o = e => {
    let {
      threadSelected: t,
      threadSelectModeScene: n
    } = e;
    if (t && n === skillMessageActions.messageActions.Delete) {
      return threadMultiSelectHeaderLoader.threadHeaderSymbol;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return o;
    }
  });
}