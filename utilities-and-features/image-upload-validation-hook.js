// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'useImageUploadCheck'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 668174
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  function l() {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let t = chatToastFactoryHook.useToastFactory();
    return reactCoreLibraryReexport.useCallback(n => {
      if (n.length > 1) {
        t.error(e("image_upload_toast_maxNum", {
          s_number: 1
        }));
        return false;
      }
      let i = n[0];
      return !!i && (i.size > 20971520 ? (t.error(e("image_oversize")), false) : !!aiSpaceQuoteUtils.isImageBlob(i) || (t.error(e("file_not_supported")), false));
    }, [e, t]);
  }
  require.d(exports, {
    useImageUploadCheck: function () {
      return l;
    }
  });
}