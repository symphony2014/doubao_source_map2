// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'imageEditModes'
// - Renamed export 'U' to 'aspectRatios'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 18810
         */
module.exports = function (module, exports, require) {
  (o = {}).original = "original";
  o["1:1"] = "1:1";
  o["4:3"] = "4:3";
  o["16:9"] = "16:9";
  o["9:16"] = "9:16";
  let i = o;
  var o;
  var a = {
    enhanceResolution: "enhanceResolution",
    outPainting: "outPainting",
    inPainting: "inPainting",
    erase: "erase",
    operateBackground: "operateBackground",
    default: "default"
  };
  require.d(exports, {
    imageEditModes: function () {
      return a;
    },
    aspectRatios: function () {
      return i;
    }
  });
}