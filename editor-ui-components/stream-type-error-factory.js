// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'createStreamTypeError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 842860
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  require.d(exports, {
    createStreamTypeError: function () {
      return r;
    }
  });
}