// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'r' to 'dbxSonnerToasterWrapper'
// - Resolved require(682910) to 'dbx-sonner-toaster-wrapper'
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 241193
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  let o = null;
  let s = e => e.status === 429 ? (o !== null && dbxSonnerToasterWrapper.dbxToastAPI.dismiss(o), o = dbxSonnerToasterWrapper.dbxToastAPI.error(i18nTranslationUtils.i18nextTranslate("web_toast_sendMsg_fail_highDemand")), Promise.resolve({
    done: true,
    reason: "sse_open_error"
  })) : Promise.resolve({
    done: false
  });
  require.r(exports);
  require.d(exports, {
    tlb429ErrorInterceptor: function () {
      return s;
    }
  });
}