// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'blockRectGetterName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 346455
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("block-rect-getter");
  require.d(exports, {
    blockRectGetterName: function () {
      return n;
    }
  });
}