// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gy' to 'fileLimit'
// - Renamed export '_H' to 'allowedImageTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 692098
         */
module.exports = function (module, exports, require) {
  require("xss-content-sanitizer") /*id: 508971*/;
  let i = ["jpg", "jpeg", "png"];
  let r = 10;
  require.d(exports, {
    fileLimit: function () {
      return r;
    },
    allowedImageTypes: function () {
      return i;
    }
  });
}