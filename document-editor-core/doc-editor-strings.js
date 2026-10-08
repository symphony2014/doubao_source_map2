// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'restoredApplyAction'
// - Renamed export 'j' to 'docEditorTexts'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38746.3a784493.js
         * chunkId: 38746
         * moduleId: 359052
         */
module.exports = function (module, exports, require) {
  let r = {
    doc_editor_conflict_alert_title: "当前文档非最新版",
    doc_editor_conflict_alert_description: "检测到当前文档非最新版，请更新文档至最新版本后，再继续编辑调整。若近期有未保存的内容，建议先复制全文后再刷新。",
    doc_editor_toolbar_copy: "复制",
    doc_editor_toolbar_copy_success: "复制成功",
    doc_editor_conflict_alert_primary_button_title: "更新文档",
    doc_editor_last_update_time: "编辑时间："
  };
  let i = "restored_apply";
  require.d(exports, {
    restoredApplyAction: function () {
      return i;
    },
    docEditorTexts: function () {
      return r;
    }
  });
}