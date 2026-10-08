// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'cloneTypedArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 989356
         */
module.exports = function (module, exports, require) {
  var uint8ArrayClone = require("uint8-array-clone") /*id: 201549*/;
  exports.cloneTypedArray = function (e, t) {
    var n = t ? uint8ArrayClone.cloneTypedArray(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
}