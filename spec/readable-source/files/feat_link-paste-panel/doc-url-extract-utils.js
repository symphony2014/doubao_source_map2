// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B6' to 'checkUrlExtraction'
// - Renamed export 'GY' to 'defaultTimeout'
// - Renamed export 'pD' to 'extractUrlInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-paste-panel.dec4e4b1.js
         * chunkId: 42590
         * moduleId: 846285
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  let u = "/space";
  let d = 500;
  let m = (e, r) => ({
    obj_token: docTokenHelperUtils.resolveDocToken(),
    obj_type: docxConfigManager.docxConfigManager.isEmbedDocx ? platformDocUtils.kNj.DOCX : platformDocUtils.gGk(),
    url: e,
    scene: r
  });
  function _(e, r) {
    let o = m(e, r);
    return apiClientInstance.apiClient.get("/api/urlextract/extract/", {
      params: o,
      baseURL: u,
      timeout: 40000
    }).then(e => e.data).catch(e => null);
  }
  async function f(e, r) {
    if (!docUrlProcessingUtilities.isStrictUrl(e)) {
      return {
        isCanExtract: false,
        isCanIframeExtract: false
      };
    }
    let o = m(e);
    return apiClientInstance.apiClient.get("/api/urlextract/check/", {
      params: o,
      baseURL: u,
      timeout: r ? 2500 : undefined
    }).then(r => {
      var n;
      var l;
      let c = !!(r == null ? undefined : (n = r.data) === null || n === undefined ? undefined : n.can_extract_result?.iframe);
      let s = !!(r == null ? undefined : (l = r.data) === null || l === undefined ? undefined : l.can_extract_result?.bookmark);
      if (!c || !s) {
        flowDocEventCollector.collectEvent("docx_fetch_check_url_conversion_fail_dev", {
          url: new URL(e).origin,
          fail_type: "resultReturn",
          fail_details: `isCanIframeExtract:${c},isCanBookmark:${s}`
        });
      }
      return {
        isCanExtract: c || s,
        isCanIframeExtract: c
      };
    }).catch(r => {
      flowDocEventCollector.collectEvent("docx_fetch_check_url_conversion_fail_dev", {
        url: new URL(e).origin,
        fail_type: "resultError",
        fail_details: r.message
      });
      return {
        isCanExtract: false,
        isCanIframeExtract: false
      };
    });
  }
  require.d(exports, {
    checkUrlExtraction: function () {
      return f;
    },
    defaultTimeout: function () {
      return d;
    },
    extractUrlInfo: function () {
      return _;
    }
  });
}