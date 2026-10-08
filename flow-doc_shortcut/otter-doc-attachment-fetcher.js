// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EB' to 'fetchAttachmentInfo'
// - Renamed export 'h6' to 'fetchDownloadInfo'
// - Renamed export 'nB' to 'fetchSingleAttachment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 65767
         */
module.exports = function (module, exports, require) {
  var docLoggerSymbol = require("doc-logger-symbol") /*id: 192564*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  async function s(e) {
    let {
      pageToken: i,
      resourceKey: n,
      authToken: s
    } = e;
    try {
      let {
        data: e
      } = await otterDocApiServiceDi.getOtterDocService().AgwMGetAttachment({
        page_token: i,
        keys: [n],
        ...(s ? {
          auth_token: s,
          auth_type: otterDocApiServiceDi.getOtterDocService().otter_doc_common.AuthType.ResourceAuthToken
        } : {})
      });
      return e;
    } catch (e) {
      diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol).persist.error({
        eventName: "fetchAttachmentInfoApiError",
        error: e
      });
    }
  }
  async function a(e) {
    let {
      pageToken: i,
      resourceKeys: n,
      authToken: s
    } = e;
    try {
      let {
        data: e
      } = await otterDocApiServiceDi.getOtterDocService().AgwMGetAttachment({
        page_token: i,
        keys: n,
        ...(s ? {
          auth_token: s,
          auth_type: otterDocApiServiceDi.getOtterDocService().otter_doc_common.AuthType.ResourceAuthToken
        } : {})
      });
      return e;
    } catch (e) {
      diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol).persist.error({
        eventName: "fetchAttachmentInfoApiError",
        error: e
      });
    }
  }
  async function c(e) {
    let {
      pageToken: i,
      resourceKey: n
    } = e;
    try {
      let {
        data: e
      } = await otterDocApiServiceDi.getOtterDocService().AgwGetAttachmentDownloadInfo({
        page_token: i,
        key: n
      });
      return e;
    } catch (e) {
      diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol).persist.error({
        eventName: "fetchAttachmentDownloadInfoApiError",
        error: e
      });
    }
  }
  require.d(exports, {
    fetchAttachmentInfo: function () {
      return a;
    },
    fetchDownloadInfo: function () {
      return c;
    },
    fetchSingleAttachment: function () {
      return s;
    }
  });
}