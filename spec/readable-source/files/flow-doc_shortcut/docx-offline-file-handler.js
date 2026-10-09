// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IQ' to 'createOfflineFileHandler'
// - Renamed export 'rP' to 'getFileErrorCode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 308697
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var docxOfflineService = require("docx-offline-service") /*id: 170752*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var docxOfflineFeatureCheck = require("docx-offline-feature-check") /*id: 821237*/;
  var docxRustFileOperations = require("docx-rust-file-operations") /*id: 966944*/;
  let h = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"];
  let u = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"];
  let p = async e => {
    let n = await platformDocUtils.hMy({
      pageToken: docTokenManager.getDocToken(),
      fileToken: e
    });
    let o = n == null ? undefined : n.data?.fileInfo;
    return o || null;
  };
  let f = async e => {
    let {
      pageToken: i,
      fileToken: n,
      data: r
    } = e;
    try {
      if (docxOfflineFeatureCheck.isDocxOfflineFlag) {
        let e = window.User.id;
        let l = docxOfflineService.offlineService.getFileBlockCacheDataStore(e);
        await l.setItem(m(i, n, "fileInfo"), r);
      }
    } catch (e) {}
  };
  let v = async e => await docxRustFileOperations.isFileCacheExist(e, 1);
  function m(e, i, n) {
    return `${e}_${i}_${n}`;
  }
  let g = e => async i => {
    var n;
    n = (n = e) || "";
    if (!h.includes(n) && !u.includes(n) && n !== "application/pdf" && !n.includes("video") && !n.includes("audio")) {
      return 3;
    }
    if (i.startsWith("fake_file_") || (await v(i))) {
      return;
    }
    let r = docxOfflineService.offlineService.getFileDownloadStatus(window.User.id);
    let s = docTokenManager.getDocToken();
    let a = (await r.getItem(m(s, i, "status"))) || undefined;
    a ||= 1;
    return a;
  };
  let _ = (e, i, n) => {
    let r = docTokenManager.getDocToken();
    return {
      isOfflineEnv: () => offlineStatusSelectorsUtils.isDocxOfflineDisabled(),
      objectType: fileTypeConstants.BasicFileType.DOCX,
      objectToken: r,
      biz: "ccm",
      mimeType: e,
      size: n,
      fileName: i,
      isOfflineFileExist: v,
      getData: p,
      getErrorCode: g(e),
      setData: f
    };
  };
  let w = (e, i, n) => docxOfflineFeatureCheck.isDocxOfflineFlag ? _(e, i, n) : undefined;
  require.d(exports, {
    createOfflineFileHandler: function () {
      return w;
    },
    getFileErrorCode: function () {
      return g;
    }
  });
}