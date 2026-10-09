// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pb' to 'stubEventEmitter'
// - Renamed export 'aq' to 'muteStateSubject'
// - Renamed export 'ek' to 'alwaysFalse'
// - Renamed export 'nY' to 'landscapeCheckStub'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 862836
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  let l = e => false;
  let s = {
    on: emptyExportFunction.emptyFunction,
    off: emptyExportFunction.emptyFunction
  };
  let a = {
    getIsDocInLandscape: () => false
  };
  let c = {
    isMuted$: new behaviorSubjectClass.BehaviorSubject(false)
  };
  require.d(exports, {
    stubEventEmitter: function () {
      return s;
    },
    muteStateSubject: function () {
      return c;
    },
    alwaysFalse: function () {
      return l;
    },
    landscapeCheckStub: function () {
      return a;
    }
  });
}