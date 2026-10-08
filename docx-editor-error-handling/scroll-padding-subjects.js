// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'layoutSubjects'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 825748
         */
module.exports = function (module, exports, require) {
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  let o = {
    mainScroll$: new observableSubjectClass.Subject(),
    paddingChange$: new observableSubjectClass.Subject()
  };
  require.d(exports, {
    layoutSubjects: function () {
      return o;
    }
  });
}