// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'foldSubjects'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 726089
         */
module.exports = function (module, exports, require) {
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  let i = {
    setFoldState$: new observableSubjectClass.Subject(),
    setFoldStatus$: new observableSubjectClass.Subject()
  };
  require.d(exports, {
    foldSubjects: function () {
      return i;
    }
  });
}