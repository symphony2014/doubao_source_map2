// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'docxHistoryTimelineComponent'
// - Resolved require(570214) to 'docx-history-timeline-component'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: history.95e09a2f.js
         * chunkId: 17374
         * moduleId: 607844
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var docxHistoryTimelineComponent = require("docx-history-timeline-component") /*id: 570214*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => reactJsxRuntimeCoreReexport.jsx(docxHistoryTimelineComponent.default, {
    ...e
  });
  require.r(exports);
  require.d(exports, {
    History: function () {
      return o;
    }
  });
}