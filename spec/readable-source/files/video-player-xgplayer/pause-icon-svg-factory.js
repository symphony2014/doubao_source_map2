// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createPauseIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 382284
         */
module.exports = function (module, exports, require) {
  function r() {
    return new DOMParser().parseFromString("<svg class=\"pause\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"40\" viewBox=\"3 -4 28 40\">\n  <path fill=\"#fff\" transform=\"scale(0.0320625 0.0320625)\" d=\"M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  require.d(exports, {
    createPauseIcon: function () {
      return r;
    }
  });
}