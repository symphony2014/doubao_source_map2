// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'extractFramerAppearData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 812636
         */
module.exports = function (module, exports, require) {
  var dataFramerAppearId = require("data-framer-appear-id") /*id: 333675*/;
  function r(t) {
    return t.props[dataFramerAppearId.dataFramerAppearId];
  }
  require.d(exports, {
    extractFramerAppearData: function () {
      return r;
    }
  });
}