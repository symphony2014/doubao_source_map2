// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createPlayButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 689622
         */
module.exports = function (module, exports, require) {
  function r() {
    return new DOMParser().parseFromString("<svg class=\"play\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"40\" viewBox=\"3 -4 28 40\">\n  <path fill=\"#fff\" transform=\"scale(0.0320625 0.0320625)\" d=\"M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  require.d(exports, {
    createPlayButton: function () {
      return r;
    }
  });
}