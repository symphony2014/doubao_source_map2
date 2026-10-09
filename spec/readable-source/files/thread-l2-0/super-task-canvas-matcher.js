// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'taskStatusConstants_1'
// - Resolved require(324746) to 'task-status-constants_1'
// - Renamed variable 'r' to 'superTaskCanvasPreviewSymbol'
// - Resolved require(831333) to 'super-task-canvas-preview-symbol'
// - Updated imported property 'Qs' to 'taskTypes' (module 324746)
// - Updated imported property 'L' to 'superTaskCanvasKey' (module 831333)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 817344
         */
module.exports = function (module, exports, require) {
  var taskStatusConstants_1 = require("task-status-constants_1") /*id: 324746*/;
  var superTaskCanvasPreviewSymbol = require("super-task-canvas-preview-symbol") /*id: 831333*/;
  let a = e => e.type === taskStatusConstants_1.taskTypes.SuperTask ? superTaskCanvasPreviewSymbol.superTaskCanvasKey : undefined;
  require.r(exports);
  require.d(exports, {
    superTaskCanvasPluginMatcher: function () {
      return a;
    }
  });
}