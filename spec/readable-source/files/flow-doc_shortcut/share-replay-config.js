// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'shareReplayConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_synced-reference-block-manager.b4c09d05.js
         * chunkId: 15277
         * moduleId: 335744
         */
module.exports = function (module, exports, require) {
  var replaySubject = require("replay-subject") /*id: 229131*/;
  var observableShareReplayOperator = require("observable-share-replay-operator") /*id: 669027*/;
  function o(e, i, n) {
    var o;
    var l;
    var a;
    var c;
    var u = false;
    if (e && typeof e == "object") {
      c = (o = e.bufferSize) === undefined ? Infinity : o;
      i = (l = e.windowTime) === undefined ? Infinity : l;
      u = (a = e.refCount) !== undefined && a;
      n = e.scheduler;
    } else {
      c = e ?? Infinity;
    }
    return observableShareReplayOperator.shareReplayWithConfig({
      connector: function () {
        return new replaySubject.ReplaySubject(c, i, n);
      },
      resetOnError: true,
      resetOnComplete: false,
      resetOnRefCountZero: u
    });
  }
  require.d(exports, {
    shareReplayConfig: function () {
      return o;
    }
  });
}