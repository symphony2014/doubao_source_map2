// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xg' to 'isFullTranslation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 564082
         */
module.exports = function (module, exports, require) {
  require("docx-editor-core") /*id: 135760*/;
  require("browser-environment-detection-utils") /*id: 744607*/;
  require("doc-token-helper-utils") /*id: 740758*/;
  require("toggle-editing-revising-action") /*id: 678237*/;
  require("docx-api-constants-exports") /*id: 81404*/;
  require("inline-component-facade") /*id: 678614*/;
  require("api-client-instance") /*id: 22981*/;
  require("space-api-config") /*id: 11507*/;
  require("feature-constants-types") /*id: 882886*/;
  require("editor-revising-state-utils") /*id: 83085*/;
  require("editor-data-manager-class") /*id: 699568*/;
  require("doc-translation-block-config") /*id: 391959*/;
  require("knowledge-docx-translation-sharding-flags") /*id: 264348*/;
  var docTranslateEdit = require("doc-translate-edit") /*id: 543514*/;
  require("doc-translation-query-manager") /*id: 340349*/;
  require("doc-translate-block-utils_1") /*id: 520675*/;
  let i = e => {
    let n = e.config.get("translated");
    let r = e.config.get("translatedWithOriginal");
    return docTranslateEdit.isDocTranslateEdit() && n && r;
  };
  require.d(exports, {
    isFullTranslation: function () {
      return i;
    }
  });
}