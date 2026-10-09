// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'onceObservable'
// - Renamed export 'p' to 'replaySubject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 827606
         */
module.exports = function (module, exports, require) {
  var replaySubject = require("replay-subject") /*id: 229131*/;
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  var observableTakeOperator = require("observable-take-operator") /*id: 731916*/;
  let s = new replaySubject.ReplaySubject();
  let a = s.pipe(observableSafeFilter.createSafeFilter(e => e), observableTakeOperator.takeOperator(1));
  require.d(exports, {
    onceObservable: function () {
      return a;
    },
    replaySubject: function () {
      return s;
    }
  });
}