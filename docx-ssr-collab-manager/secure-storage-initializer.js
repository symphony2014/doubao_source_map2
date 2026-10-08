// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'initializeSecureStorage'
// - Renamed export 'j' to 'getStorageDriver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 724501
         */
module.exports = function (module, exports, require) {
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  let n = null;
  let o = () => {
    return (n == null ? undefined : n.dirver) ?? "";
  };
  async function a() {
    var i;
    let o = (i = window) === null || i === undefined ? undefined : i.User?.id;
    if (!o) {
      throw Error("no user id when init store");
    }
    if (n) {
      return n;
    }
    try {
      return n = new (await docxTaskSchedulerUtilities.scheduleTaskWithConfig({
        action: () => Promise.all([require.e("secure-storage-utils") /*id: 55711*/, require.e("secure_storage") /*id: 8204*/]).then(require.bind(require, "secure-storage-wrapper") /*id: 331785*/),
        name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
      })).Storage(o);
    } catch (e) {
      throw e;
    }
  }
  require.d(exports, {
    initializeSecureStorage: function () {
      return a;
    },
    getStorageDriver: function () {
      return o;
    }
  });
}