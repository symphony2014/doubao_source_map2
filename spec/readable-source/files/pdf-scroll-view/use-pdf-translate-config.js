// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'useTranslateConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 330047
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var localStoragePersistedStateHook = require("local-storage-persisted-state-hook") /*id: 429278*/;
  var translateServiceSelector = require("translate-service-selector") /*id: 512967*/;
  let i = e => {
    let {
      key: t = "pdf_scroll_view_translate_config",
      defaultValue: n
    } = e;
    return localStoragePersistedStateHook.useLocalStorageState(t, {
      defaultValue: n,
      serializer: JSON.stringify,
      deserializer: e => {
        try {
          let t = JSON.parse(e);
          if (isUndefinedCheck.isUndefined(t.showTranslateImage)) {
            t.showTranslateImage = true;
          }
          t.translateService = translateServiceSelector.translateServiceEnum.LLM;
          t.enabled = false;
          return t;
        } catch (e) {
          return n;
        }
      }
    });
  };
  require.d(exports, {
    useTranslateConfig: function () {
      return i;
    }
  });
}