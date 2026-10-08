// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'cloneTypedArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 201549
         */
module.exports = function (module, exports, require) {
  var globalUint8Array = require("global-uint8-array") /*id: 688406*/;
  exports.cloneTypedArray = function (e) {
    var t = new e.constructor(e.byteLength);
    new globalUint8Array.GlobalUint8Array(t).set(new globalUint8Array.GlobalUint8Array(e));
    return t;
  };
}