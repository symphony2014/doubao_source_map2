// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IG' to 'isTranslated'
// - Renamed export 'Iv' to 'appendTranslation'
// - Renamed export 'XY' to 'removeTranslation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 203170
         */
module.exports = function (module, exports, require) {
  let o = "-translated";
  function i(e) {
    return e.endsWith(o);
  }
  function l(e) {
    return e.split(o)[0];
  }
  function c(e) {
    return `${e}${o}`;
  }
  require.d(exports, {
    isTranslated: function () {
      return i;
    },
    appendTranslation: function () {
      return c;
    },
    removeTranslation: function () {
      return l;
    }
  });
}