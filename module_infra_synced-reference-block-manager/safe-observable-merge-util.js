// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'safeMergeObservable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 229102
         */
module.exports = function (module, exports, require) {
  var createSafeMergeMap = require("create-safe-merge-map") /*id: 47471*/;
  var arrayPopUtils = require("array-pop-utils") /*id: 451401*/;
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  function l() {
    var e = [];
    var i = 0;
    for (; i < arguments.length; i++) {
      e[i] = arguments[i];
    }
    return createSafeMergeMap.createSafeMergeMap()(observableFromSource.fromAnySource(e, arrayPopUtils.popSchedulable(e)));
  }
  require.d(exports, {
    safeMergeObservable: function () {
      return l;
    }
  });
}