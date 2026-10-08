// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'getTaskListDefault'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 528264
         */
module.exports = function (module, exports, require) {
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  let i = () => boolDefaultUtil.getDefaultBool("ccm.docx.task_list_block", false);
  require.d(exports, {
    getTaskListDefault: function () {
      return i;
    }
  });
}