// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createDeburrTransform'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 318449
         */
module.exports = function (module, exports, require) {
  var n = require("string-deburr-util") /*id: 789856*/.createDeburr(function (t, e, r) {
    return t + (r ? "_" : "") + e.toLowerCase();
  });
  exports.createDeburrTransform = n;
}