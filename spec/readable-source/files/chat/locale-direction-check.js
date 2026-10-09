// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'isRtlLanguage'
// - Renamed export 'l' to 'getBrowserLanguage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 255854
         */
module.exports = function (module, exports, require) {
  var localeDirectionUtils = require("locale-direction-utils") /*id: 789018*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  let o = () => typeof navigator == "undefined" ? "" : navigator.language;
  let a = e => {
    var a;
    return processBrowserShim !== undefined && !![processBrowserShim == null ? undefined : processBrowserShim.env?.DEPLOY_CDN_REGION, processBrowserShim == null ? undefined : processBrowserShim.env?.REGION].every(e => e !== "cn") && (a = localeDirectionUtils.isRtlLang(e ?? o())) !== null && a !== undefined && a;
  };
  require.d(exports, {
    isRtlLanguage: function () {
      return a;
    },
    getBrowserLanguage: function () {
      return o;
    }
  });
}