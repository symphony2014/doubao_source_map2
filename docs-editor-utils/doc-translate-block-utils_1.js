// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NR' to 'getTranslatableTypes'
// - Renamed export 'c3' to 'isDocTranslateEdit'
// - Renamed export 'o3' to 'isRecordTranslated'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 520675
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docTranslateEdit = require("doc-translate-edit") /*id: 543514*/;
  var docTranslationBlockConfig = require("doc-translation-block-config") /*id: 391959*/;
  var translationSuffixUtils = require("translation-suffix-utils") /*id: 203170*/;
  function a(e) {
    return e.config.get("translated") && e.config.get("translatedWithOriginal") && docTranslateEdit.isDocTranslateEdit();
  }
  function s(e) {
    return translationSuffixUtils.isTranslated(e.recordId);
  }
  let d = () => syncUrlBlockUtils.isSyncingActive() ? [...docTranslationBlockConfig.translatableBlockTypes, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE] : docTranslationBlockConfig.translatableBlockTypes;
  require.d(exports, {
    getTranslatableTypes: function () {
      return d;
    },
    isDocTranslateEdit: function () {
      return a;
    },
    isRecordTranslated: function () {
      return s;
    }
  });
}