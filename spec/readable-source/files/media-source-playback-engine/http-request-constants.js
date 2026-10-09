// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'responseTypes'
// - Renamed export 't' to 'transportTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 679554
         */
module.exports = function (module, exports, require) {
  var r = {
    FETCH: "fetch",
    XHR: "xhr"
  };
  var i = {
    ARRAY_BUFFER: "arraybuffer",
    TEXT: "text",
    JSON: "json"
  };
  require.d(exports, {
    responseTypes: function () {
      return i;
    },
    transportTypes: function () {
      return r;
    }
  });
}