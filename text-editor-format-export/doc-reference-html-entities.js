// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AY' to 'htmlEntityMap'
// - Renamed export 'Yr' to 'docReference'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 958118
         */
module.exports = function (module, exports, require) {
  let n = "doc-reference";
  let i = {
    "<": "&#x3C;",
    ">": "&#x3E;",
    "\"": "&#x22;"
  };
  require.d(exports, {
    htmlEntityMap: function () {
      return i;
    },
    docReference: function () {
      return n;
    }
  });
}