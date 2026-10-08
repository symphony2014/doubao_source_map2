// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'trimRightIndex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 507739
         */
module.exports = function (module, exports, require) {
  var n = /\s/;
  exports.trimRightIndex = function (e) {
    for (var t = e.length; t-- && n.test(e.charAt(t)););
    return t;
  };
}