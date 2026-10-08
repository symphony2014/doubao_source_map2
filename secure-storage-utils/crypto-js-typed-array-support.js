// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 973892
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    (function () {
      if (typeof ArrayBuffer == "function") {
        var t = e.lib.WordArray;
        var r = t.init;
        (t.init = function (e) {
          if (e instanceof ArrayBuffer) {
            e = new Uint8Array(e);
          }
          if (e instanceof Int8Array || typeof Uint8ClampedArray != "undefined" && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) {
            e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          }
          if (e instanceof Uint8Array) {
            var t = e.byteLength;
            var n = [];
            var o = 0;
            for (; o < t; o++) {
              n[o >>> 2] |= e[o] << 24 - o % 4 * 8;
            }
            r.call(this, n, t);
          } else {
            r.apply(this, arguments);
          }
        }).prototype = t;
      }
    })();
    return e.lib.WordArray;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/);
}