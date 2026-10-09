// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initDocxSheetEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 884808
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxI18nLoaderUtils = require("docx-i18n-loader-utils") /*id: 619747*/;
  var staticPgFlag = require("static-pg-flag") /*id: 902976*/;
  var keyTimestampUtil = require("key-timestamp-util") /*id: 278453*/;
  var docxStageModTrigger = require("docx-stage-mod-trigger") /*id: 43684*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxFallbackConfigSet = require("docx-fallback-config-set") /*id: 865092*/;
  var docxSheetPasteCommentFetcher = require("docx-sheet-paste-comment-fetcher") /*id: 91861*/;
  var hostBusinessModuleDisabler = require("host-business-module-disabler") /*id: 62241*/;
  function f(e) {
    if (hostBusinessModuleDisabler.disableModuleByHostBusiness(e)) {
      docxFallbackConfigSet.setFallbackConfig(docBlockTypeConstants.blockTypeConstants.SHEET, {
        prefetchResource: e => docxSheetPasteCommentFetcher.fetchSheetComments(e)
      });
      docxEditorCore.registerFetcher(async () => {
        let e = null;
        if (docxFeatureFlags.isHqEnabled()) {
          e = async () => {
            keyTimestampUtil.setKeyTimestamp("i18n_start");
            await docxI18nLoaderUtils.loadI18nForApp(docxI18nLoaderUtils.defaultAppType);
            keyTimestampUtil.setKeyTimestamp("i18n_end");
          };
        }
        if (e && platformDocUtils.oML && docxI18nLoaderUtils.isSheetSupported[docxI18nLoaderUtils.AppType.SHEET]) {
          await Promise.all([e(), platformDocUtils.oML[docBlockTypeConstants.blockTypeConstants.SHEET]()]);
        } else if (e) {
          await e();
        }
        let i = platformDocUtils.Gjw;
        if (staticPgFlag.isPgFlag) {
          let {
            loadDocSheetBridge: e
          } = await platformDocUtils.edo();
          i = e;
        }
        await i();
      });
      docxStageModTrigger.triggerDocxStageMod(docBlockTypeConstants.blockTypeConstants.SHEET);
    }
  }
  require.d(exports, {
    initDocxSheetEditor: function () {
      return f;
    }
  });
}