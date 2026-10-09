// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'observableSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 991432
         */
module.exports = function (module, exports, require) {
  module = require.hmd(module);
  var r;
  var i;
  var o;
  if (typeof (i = (o = typeof self != "undefined" ? self : typeof window != "undefined" ? window : require.g !== undefined ? require.g : module).Symbol) == "function") {
    if (i.observable) {
      r = i.observable;
    } else {
      r = i("observable");
      i.observable = r;
    }
  } else {
    r = "@@observable";
  }
  var s = r;
  require.d(exports, {
    observableSymbol: function () {
      return s;
    }
  });
}