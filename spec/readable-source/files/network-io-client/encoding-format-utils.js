// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getEncodingFormat'
// - Renamed export 'S' to 'bytesToBase64'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 934354
         */
module.exports = function (module, exports, require) {
  var encodingConstants = require("encoding-constants") /*id: 328371*/;
  function i(e) {
    if (e === "pb") {
      return encodingConstants.encodingFormats.PB;
    } else {
      return encodingConstants.encodingFormats.JSON;
    }
  }
  function s(e) {
    let t = 32768;
    let r = [];
    for (var n = 0; n < e.length; n += t) {
      r.push(String.fromCharCode.apply(null, e.subarray(n, n + t)));
    }
    return btoa(r.join(""));
  }
  require.d(exports, {
    getEncodingFormat: function () {
      return i;
    },
    bytesToBase64: function () {
      return s;
    }
  });
}