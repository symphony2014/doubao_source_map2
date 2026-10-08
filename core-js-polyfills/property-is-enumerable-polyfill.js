// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'isEnumerable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 25377
         */
module.exports = function (module, exports, require) {
  var n = {}.propertyIsEnumerable;
  var e = Object.getOwnPropertyDescriptor;
  var o = e && !n.call({
    1: 2
  }, 1);
  exports.isEnumerable = o ? function (t) {
    var r = e(this, t);
    return !!r && r.enumerable;
  } : n;
}