// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'of' to 'observableOf'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 972100
         */
module.exports = function (module, exports, require) {
  var arrayPopUtils = require("array-pop-utils") /*id: 451401*/;
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  function o() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var n = arrayPopUtils.popSchedulable(e);
    return observableFromSource.fromAnySource(e, n);
  }
  require.d(exports, {
    observableOf: function () {
      return o;
    }
  });
}