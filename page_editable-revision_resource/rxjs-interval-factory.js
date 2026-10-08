// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'createInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 54858
         */
module.exports = function (module, exports, require) {
  var rxjsAsyncScheduler = require("rxjs-async-scheduler") /*id: 648569*/;
  var observableIntervalFactory = require("observable-interval-factory") /*id: 98037*/;
  function l(e = 0, i = rxjsAsyncScheduler.asyncScheduler_1) {
    if (e < 0) {
      e = 0;
    }
    return observableIntervalFactory.createInterval(e, e, i);
  }
  require.d(exports, {
    createInterval: function () {
      return l;
    }
  });
}