// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'ChatPageInteractive'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.0ec2b38c.js
         * chunkId: 58543
         * moduleId: 157105
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = t => n => {
    let {
      pageInteractive: r
    } = chatPageInteractiveTracker.useChatPageInitTracker();
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(t, {
        ...n
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    ChatPageInteractive: function () {
      return u;
    }
  });
}