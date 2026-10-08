// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'usePdfUploadValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 831011
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var pdfFileExtensionList = require("pdf-file-extension-list") /*id: 172686*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  function f() {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let t = chatToastFactoryHook.useToastFactory();
    let n = function () {
      let e = i18nTranslationUtils.useTranslationWithFallback();
      let t = chatToastFactoryHook.useToastFactory();
      return (n, i, a) => {
        let {
          maxFileCount: o,
          trackParams: l
        } = a;
        return !isEmptyUtil.isEmpty(n) && (!(n.length + i.length > o) || (t.warning(e("podcast_upload_toast_fileLimit")), n.forEach(e => {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ...l,
            status: "0",
            error_code: "over_file_numberlimit",
            collection_name: e.name,
            upload_type: "pdf",
            upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
            upload_file_size: String(e.size)
          });
        }), false));
      };
    }();
    let {
      uploadFileMaxSize: f
    } = attachmentUploadStoreHooks.getUploadConfig();
    let m = Number(f);
    let g = reactCoreLibraryReexport.useCallback(e => {
      let t = getFileExtension.getFileExtension(e.name);
      return pdfFileExtensionList.pdfFileExtensions.includes(t);
    }, []);
    return (i, r, a) => {
      let {
        trackParams: o
      } = a;
      if (!n(i, r, {
        maxFileCount: 1,
        trackParams: o
      })) {
        return [];
      }
      let l = i.filter(e => !g(e));
      let c = i.filter(e => !l.includes(e));
      let f = c.filter(e => e.size > m);
      let v = c.filter(e => !f.includes(e));
      l.forEach(n => {
        t.error(e("read_file_type_error", {
          postProcess: "sprintf",
          sprintf: [n.name]
        }));
      });
      f.forEach(n => {
        t.error(e("file_size_over_limit", {
          postProcess: "sprintf",
          sprintf: [n.name, infraUtilFunctions.formatBytesSize(m)]
        }));
      });
      f.forEach(e => {
        teaAnalyticsEventTracker.trackEvent("upload_status", {
          ...o,
          status: "0",
          error_code: "file_is_over_50mb",
          collection_name: e.name,
          upload_type: "pdf",
          upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(getObjectPathString.getObjectPathString("name")(e))),
          upload_file_size: String(e.size)
        });
      });
      return v;
    };
  }
  require.d(exports, {
    usePdfUploadValidator: function () {
      return f;
    }
  });
}