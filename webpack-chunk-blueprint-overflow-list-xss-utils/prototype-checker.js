// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isPrototype'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 411247
         */
module.exports = function (module, exports, require) {
  var n = Object.prototype;
  exports.isPrototype = function (e) {
    var t = e && e.constructor;
    return e === (typeof t == "function" && t.prototype || n);
  };
}