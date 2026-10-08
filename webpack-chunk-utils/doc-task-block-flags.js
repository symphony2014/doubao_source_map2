// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pd' to 'isSubtaskEnabled'
// - Renamed export 'RM' to 'isFeishuTodoEnabled'
// - Renamed export 'UW' to 'isTaskInsertEnabled'
// - Renamed export 'Yl' to 'isTaskIndentEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 46259
         */
module.exports = function (module, exports, require) {
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  function a() {
    return (!browserEnvDetectionUtil.browserDetector.isOpendoc || /noNeedJsSDKSession=true/.test(location.search)) && boolDefaultUtil.getDefaultBool("ccm.docx.all.feishu_todo_block", false);
  }
  function u() {
    return boolDefaultUtil.getDefaultBool("ccm.docx.taskinsert", false);
  }
  function c() {
    return boolDefaultUtil.getDefaultBool("ccm.doc.taskblock.canindent", false);
  }
  function _() {
    return boolDefaultUtil.getDefaultBool("ccm.doc.taskblock.subtask", false);
  }
  require.d(exports, {
    isSubtaskEnabled: function () {
      return _;
    },
    isFeishuTodoEnabled: function () {
      return a;
    },
    isTaskInsertEnabled: function () {
      return u;
    },
    isTaskIndentEnabled: function () {
      return c;
    }
  });
}