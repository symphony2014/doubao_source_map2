// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$G' to 'useTranslation'
// - Renamed export '$v' to 'initializeI18n'
// - Renamed export 'nI' to 'getI18nInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 971318
         */
module.exports = function (module, exports, require) {
  let i;
  var reactI18nContextConfig = require("react-i18n-context-config") /*id: 913585*/;
  var reactI18nUseTranslation = require("react-i18n-use-translation") /*id: 716619*/;
  var sprintfPostProcessorWrapper = require("sprintf-post-processor-wrapper") /*id: 272988*/;
  var l = sprintfPostProcessorWrapper;
  var i18nextLanguageDetector = require("i18next-language-detector") /*id: 643576*/;
  var i18nextCoreModule = require("i18next-core-module") /*id: 667190*/;
  var i18nextIcuFormat = require("i18next-icu-format") /*id: 404395*/;
  let d = e => {
    h().use(reactI18nContextConfig.i18nPluginInit).use(l).use(i18nextIcuFormat.I18nIcuFormat).use(i18nextLanguageDetector.LanguageDetector).init(e);
  };
  let h = () => {
    i ||= i18nextCoreModule.i18nextInstance.createInstance();
    return i;
  };
  let m = reactI18nUseTranslation.useTranslation;
  require.d(exports, {
    useTranslation: function () {
      return m;
    },
    initializeI18n: function () {
      return d;
    },
    getI18nInstance: function () {
      return h;
    }
  });
}