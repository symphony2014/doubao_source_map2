// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CA' to 'whiteColor'
// - Renamed export 'EU' to 'transparentColor'
// - Renamed export 'N6' to 'apiBaseUrl'
// - Renamed export 'x2' to 'whiteColorAlt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13468.dccdd582.js
         * chunkId: 13468
         * moduleId: 937588
         */
module.exports = function (module, exports, require) {
  let i = "https://tsearch.toutiaoapi.com";
  let l = "#FFF";
  let r = "rgba(0,0,0,0.08)";
  let a = "#FFF";
  require.d(exports, {
    whiteColor: function () {
      return l;
    },
    transparentColor: function () {
      return r;
    },
    apiBaseUrl: function () {
      return i;
    },
    whiteColorAlt: function () {
      return a;
    }
  });
}