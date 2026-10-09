// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GA' to 'metricKeyMapping'
// - Renamed export 'rg' to 'docInfoContainerSlot'
// - Renamed export 'zQ' to 'maxInfoEntries'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 227478
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  var docEditorMetricKeys = require("doc-editor-metric-keys") /*id: 959101*/;
  var docxUpdateTimeSettings = require("docx-update-time-settings") /*id: 340835*/;
  docEditorMetricKeys.editorMetricKeys.editors;
  docEditorMetricKeys.editorMetricKeys.editTime;
  docEditorMetricKeys.editorMetricKeys.createTime;
  docEditorMetricKeys.editorMetricKeys.viewPersonNumbers;
  docEditorMetricKeys.editorMetricKeys.viewTimes;
  docEditorMetricKeys.editorMetricKeys.likeTimes;
  docEditorMetricKeys.editorMetricKeys.commentTimes;
  let a = 46;
  let c = {
    [docEditorMetricKeys.editorMetricKeys.editors]: "author",
    [docEditorMetricKeys.editorMetricKeys.createTime]: "create_time",
    [docEditorMetricKeys.editorMetricKeys.editTime]: "edit_time",
    [docEditorMetricKeys.editorMetricKeys.viewPersonNumbers]: "uv",
    [docEditorMetricKeys.editorMetricKeys.viewTimes]: "pv",
    [docEditorMetricKeys.editorMetricKeys.commentTimes]: "comment_num",
    [docEditorMetricKeys.editorMetricKeys.likeTimes]: "like_num"
  };
  let d = docxEditorCore.getProviderName("doc-info-entry");
  docxEditorBlockRenderer.createSlot(d);
  let u = docxEditorCore.getProviderName("doc-info-container");
  let h = docxEditorBlockRenderer.createSlot(u);
  let f = [{
    optionName: docEditorMetricKeys.editorMetricKeys.editors,
    textKey: t("LarkCCM_Docx_ShowInfo_Owner_Radio")
  }, {
    optionName: docEditorMetricKeys.editorMetricKeys.createTime,
    textKey: t("LarkCCM_Docx_ShowInfo_TimeCreated_Radio")
  }, {
    optionName: docEditorMetricKeys.editorMetricKeys.viewPersonNumbers,
    textKey: t("document_detail.uvs")
  }, {
    optionName: docEditorMetricKeys.editorMetricKeys.viewTimes,
    textKey: t("document_detail.pvs")
  }, {
    optionName: docEditorMetricKeys.editorMetricKeys.likeTimes,
    textKey: t("document_detail.likes")
  }, {
    optionName: docEditorMetricKeys.editorMetricKeys.commentTimes,
    textKey: t("CreationDoc_Stats_Basic_comments")
  }];
  if (docxUpdateTimeSettings.isUpdateTimeTitle()) {
    f.splice(2, 0, {
      optionName: docEditorMetricKeys.editorMetricKeys.editTime,
      textKey: t("LarkCCM_Docs_DocDetails_LastModifiedTime_Radio")
    });
  }
  require.d(exports, {
    metricKeyMapping: function () {
      return c;
    },
    docInfoContainerSlot: function () {
      return h;
    },
    maxInfoEntries: function () {
      return a;
    }
  });
}