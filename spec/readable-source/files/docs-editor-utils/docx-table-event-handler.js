// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xw' to 'trackTableResize'
// - Renamed export 'jk' to 'trackCellClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 780961
         */
module.exports = function (module, exports, require) {
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  require("docx-feature-flags") /*id: 939543*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  require("ui-event-tracking-constants") /*id: 28205*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var stringTitleCase = require("string-title-case") /*id: 444710*/;
  require("docx-edit-element-constants") /*id: 702540*/;
  stringTitleCase.toTitleCase(t("CreationMobile_Docs_InsertTable_InsertColumn_Right_Button"));
  stringTitleCase.toTitleCase(t("CreationMobile_Docs_InsertTable_InsertColumn_Left_Button"));
  stringTitleCase.toTitleCase(t("CreationMobile_Docs_InsertTable_InsertColumn_Button"));
  stringTitleCase.toTitleCase(t("CreationMobile_Docs_InsertTable_DeleteColumn_Button"));
  stringTitleCase.toTitleCase(t("CreationMobile_Docs_InsertTable_InsertRow_Down_Button"));
  stringTitleCase.toTitleCase(t("CreationMobile_Docs_InsertTable_InsertRow_Up_Button"));
  stringTitleCase.toTitleCase(t("CreationMobile_Docs_InsertTable_InsertRow_Button"));
  stringTitleCase.toTitleCase(t("CreationMobile_Docs_InsertTable_DeleteRow_Button"));
  debounceUtil_1_1.debounce((e, n, r, o) => {
    docxEventCollector.wrappedCollector("toggle_attribute", {
      action: e,
      eventType: r,
      object_id: `table_${n}`,
      rev: o && o.getRev()
    });
  }, 200);
  let a = (e, n) => {
    let r = docxEditorBlockMetadataUtils.getMultipleBlockInfo([e], n);
    let o = docxEditorBlockMetadataUtils.getThrottledBlockPath(e, n);
    n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", o, {
      click: "block_custom_action",
      action_type: "resize_table_column",
      object_block_data: r
    });
  };
  let s = e => {
    docxEventCollector.wrappedCollector("ccm_doc_select_cell_click", {
      click: "select",
      target: "ccm_doc_web_text_bubble_toolbar_view",
      cell_num: 1,
      click_type: e
    });
  };
  require.d(exports, {
    trackTableResize: function () {
      return a;
    },
    trackCellClick: function () {
      return s;
    }
  });
}