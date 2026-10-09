// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'getAiCodingOptions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 241057
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var skillMessageTypes = require("skill-message-types") /*id: 824454*/;
  let o = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return [{
      label: e("cici_web_ai_coding_main_bot_file"),
      value: skillMessageTypes.resourceTypes.FILE,
      track_button_name: "code_file"
    }, {
      label: e("cici_web_ai_coding_main_bot_folder"),
      value: skillMessageTypes.resourceTypes.DIR,
      track_button_name: "code_folder"
    }, {
      label: e("web_ai_coding_repo_upload"),
      value: skillMessageTypes.resourceTypes.REPO,
      track_button_name: "code_github"
    }];
  };
  require.d(exports, {
    getAiCodingOptions: function () {
      return o;
    }
  });
}