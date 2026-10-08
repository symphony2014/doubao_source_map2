// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'downloadDocAttachment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 214182
         */
module.exports = function (module, exports, require) {
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var securityAuditOperationTracker = require("security-audit-operation-tracker") /*id: 938820*/;
  var toastNotificationHandler = require("toast-notification-handler") /*id: 669090*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docFileUtilsSymbol = require("doc-file-utils-symbol") /*id: 696345*/;
  var otterDocAttachmentFetcher = require("otter-doc-attachment-fetcher") /*id: 65767*/;
  async function d(e, i) {
    if (i === 3) {
      toastNotificationHandler.showToast({
        pcToastType: "error",
        message: t("LarkCCM_Docs_DLP_FileNotFound_Toast"),
        duration: 3000,
        mobileToastType: "fail"
      });
      return;
    }
    let {
      snapshot: n
    } = e.record;
    let {
      file: d
    } = n;
    let {
      token: h,
      mimeType: u
    } = d;
    securityAuditOperationTracker.trackSecurityAuditOperation(securityAuditOperationTracker.OperationTypeEnum.DOWNLOAD, {
      ccm_download_type: u || "other"
    });
    let p = await otterDocAttachmentFetcher.fetchDownloadInfo({
      pageToken: docTokenManager.getDocToken(),
      resourceKey: h
    });
    let f = p == null ? undefined : p.main_url;
    if (f) {
      diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol).downloadFileByLink(f);
    }
  }
  require.d(exports, {
    downloadDocAttachment: function () {
      return d;
    }
  });
}