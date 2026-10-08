// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'initializeFilePreviews'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: aispace-input-filelist-modal.0d7d9a41.js
         * chunkId: 38418
         * moduleId: 234378
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var pdfPreviewStore = require("pdf-preview-store") /*id: 745227*/;
  var checkContentReviewStatus = require("check-content-review-status") /*id: 312453*/;
  var getFileUrlsCache = require("get-file-urls-cache") /*id: 109992*/;
  var resourceEnumTypes = require("resource-enum-types") /*id: 801204*/;
  function u(e) {
    let {
      store: t,
      supportedFileTypes: n,
      unsupportedNodeTypes: u
    } = e;
    let [p, h] = reactCoreLibraryReexport.useState(false);
    let {
      allValidNodes: f
    } = t(e => {
      let {
        nodeInfoMap: t
      } = e;
      return {
        allValidNodes: Object.keys(t).filter(e => {
          let r = t[e];
          return checkContentReviewStatus.checkReviewStatus(r, n, u);
        }).map(e => t[e])
      };
    });
    let {
      updatePdfPreview: m
    } = pdfPreviewStore.pdfPreviewStore(e => ({
      updatePdfPreview: e.updatePdfPreview
    }), deepEqualityUtil_1.isDeepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      if ((f == null ? undefined : f.length) && !p) {
        h(true);
        f.filter(e => e != null && !!e.nodeType && function (e, t) {
          let n = e === resourceEnumTypes.FileTypes.File;
          let r = e === resourceEnumTypes.FileTypes.Image;
          return n && fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(t)) === "PDF" || r;
        }(e == null ? undefined : e.nodeType, (e == null ? undefined : e.name) || "")).slice(0, 10).forEach(e => {
          if (e == null ? undefined : e.nodeType) {
            if ((e == null ? undefined : e.nodeType) === resourceEnumTypes.FileTypes.Image) {
              getFileUrlsCache.getFileUrls([e.key], "image");
            } else {
              var t;
              var n;
              m(e.key, {
                fileType: (t = e == null ? undefined : e.nodeType, n = (e == null ? undefined : e.name) || "", t === resourceEnumTypes.FileTypes.File && fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(n)) === "PDF") ? "PDF" : "Document"
              });
            }
          }
        });
      }
    }, [f, p]);
  }
  require.d(exports, {
    initializeFilePreviews: function () {
      return u;
    }
  });
}