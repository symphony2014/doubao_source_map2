// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'clipboardPasteProcessor'
// - Resolved require(823676) to 'clipboard-paste-processor'
// - Renamed variable 'a' to 'clipboardPasteDataHandlers'
// - Resolved require(324971) to 'clipboard-paste-data-handlers'
// - Updated imported property 'rd' to 'pasteLifecycleHooks' (module 324971)
// - Updated imported property 'vg' to 'pasteHandlerMap' (module 324971)
// - Updated imported property 'am' to 'processPasteRecords' (module 823676)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 659410
         */
module.exports = function (module, exports, require) {
  var clipboardPasteProcessor = require("clipboard-paste-processor") /*id: 823676*/;
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  let i = [{
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData,
    hookCallback: clipboardPasteProcessor.processPasteRecords,
    options: {
      priority: clipboardPasteDataHandlers.pasteHandlerMap[clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData].transformISVToMermaid
    }
  }];
  exports.default = [{
    hookConfigList: i
  }];
  require.r(exports);
}