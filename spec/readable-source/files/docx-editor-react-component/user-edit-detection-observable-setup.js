// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R_' to 'isUserEditGetter'
// - Renamed export 'b9' to 'filteredUserEditObservable'
// - Renamed export 'vN' to 'userEditSubject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 841747
         */
module.exports = function (module, exports, require) {
  let n;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  let a = new observableSubjectClass.Subject();
  let c = a.pipe(observableSafeFilter.createSafeFilter(e => !!n && n(e)));
  docxTaskSchedulerUtilities.scheduleTaskWithConfig({
    action: () => require.e("limit-edit-mode-quantity-helper") /*id: 97207*/.then(require.bind(require, "user-edit-detection-helper") /*id: 395342*/).then(e => {
      let {
        getIsUserEdit: i
      } = e;
      return n = i;
    }),
    name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
  });
  require.d(exports, {
    isUserEditGetter: function () {
      return n;
    },
    filteredUserEditObservable: function () {
      return c;
    },
    userEditSubject: function () {
      return a;
    }
  });
}