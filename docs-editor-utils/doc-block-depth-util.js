// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'getBlockDepth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 511268
         */
module.exports = function (module, exports, require) {
  var docBlockTypeCheckers = require("doc-block-type-checkers") /*id: 391113*/;
  require.d(exports, {
    getBlockDepth: function () {
      return function e(n) {
        if (docBlockTypeCheckers.isGridTableOkType(n.type) || !n.parent) {
          return 0;
        } else {
          return e(n.parent) + 1;
        }
      };
    }
  });
}