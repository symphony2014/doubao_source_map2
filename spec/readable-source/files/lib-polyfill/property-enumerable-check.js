// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'isEnumerable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 575817
         */
module.exports = function (module, exports, require) {
  var e = {}.propertyIsEnumerable;
  var n = Object.getOwnPropertyDescriptor;
  var o = n && !e.call({
    1: 2
  }, 1);
  exports.isEnumerable = o ? function (t) {
    var r = n(this, t);
    return !!r && r.enumerable;
  } : e;
}