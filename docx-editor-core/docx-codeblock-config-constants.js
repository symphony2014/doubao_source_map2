// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'allowedEventNames'
// - Renamed export 'm' to 'codeblockTextLabels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 587865
         */
module.exports = function (module, exports, require) {
  let o = require("event-handler-config") /*id: 867160*/.eventNames.filter(e => ["copy", "cut", "paste", "resize"].includes(e) === false);
  let i = {
    "codeblock.cancel_auto_wrap": t("sheet.cancel_auto_wrap"),
    "codeblock.auto_wrap": t("sheet.auto_wrap"),
    "codeblock.copy": t("FeishuDocs_Admin_QuickInvite_ButtonText_Copy"),
    "common.copied": t("common.copied"),
    "codeblock.search": t("CreationDoc_Docs_Codeblock_Search_Placeholder"),
    "codeblock.search_placeholder": t("CreationDoc_Docs_Codeblock_SearchLanguage_Placeholder"),
    "codeblock.change_language": t("CreationDoc_Docs_Codeblock_ChangeLanguage_Tips")
  };
  require.d(exports, {
    allowedEventNames: function () {
      return o;
    },
    codeblockTextLabels: function () {
      return i;
    }
  });
}