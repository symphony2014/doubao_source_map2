// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'getWatchdogConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 595315
         */
module.exports = function (module, exports, require) {
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  function n() {
    let e = {
      watchTimeout: 4000,
      backupValidDays: 15,
      maxBackupSize: 15,
      textLengthTrigger: 100,
      opSizeTrigger: 50,
      recordSizeTrigger: 20,
      watchMergeDuration: 30,
      watchSaveDuration: 15000,
      watchErrorNeedOopsMessage: [],
      watchErrorTimesNeedOops: 5
    };
    let i = boolDefaultUtil.getDefaultBool("ccm_docx_watchdog", e);
    return {
      ...e,
      ...i
    };
  }
  require.d(exports, {
    getWatchdogConfig: function () {
      return n;
    }
  });
}