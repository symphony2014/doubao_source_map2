// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dt' to 'isAndroid'
// - Renamed export 'G6' to 'isSafari'
// - Renamed export 'vU' to 'isFirefox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 93195
         */
module.exports = function (module, exports, require) {
  var r = typeof window != "undefined";
  var i = r && navigator.userAgent.toLocaleLowerCase();
  var o = r && /^((?!chrome|android).)*safari/.test(i);
  var a = r && i.includes("firefox");
  var s = r && i.includes("android");
  require.d(exports, {
    isAndroid: function () {
      return s;
    },
    isSafari: function () {
      return o;
    },
    isFirefox: function () {
      return a;
    }
  });
}