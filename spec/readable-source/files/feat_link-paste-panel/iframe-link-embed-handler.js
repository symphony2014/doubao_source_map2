// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'createIframeSnapshot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-paste-panel.dec4e4b1.js
         * chunkId: 42590
         * moduleId: 14207
         */
module.exports = function (module, exports, require) {
  var axiosHttpClientLibrary = require("axios-http-client-library") /*id: 936615*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var apiEndpointConstants = require("api-endpoint-constants") /*id: 403286*/;
  var spaceApiConfig = require("space-api-config") /*id: 11507*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var docUrlExtractUtils = require("doc-url-extract-utils") /*id: 846285*/;
  var iframeLayoutConstants = require("iframe-layout-constants") /*id: 147199*/;
  let _ = async (e, r) => (await axiosHttpClientLibrary.axios.get(e, r)).data;
  async function f(e) {
    let r = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.channel", "");
    let o = `https://www.ixigua.com/api/public/iframe/convert?url=${e}`;
    if (!r) {
      o = `${apiEndpointConstants.apiEndpoints.getProxyVideoUrl}?url=${o}`;
    }
    try {
      let {
        message: e,
        data: r
      } = await _(o, {
        withCredentials: false,
        ignoreInterceptors: true,
        baseURL: spaceApiConfig.getSpaceApiFn()
      });
      if (!r || !/^http(s)?:\/\//.test(r)) {
        throw Error("fetch xigua iframe url has failed(null)");
      }
      if (e === "error") {
        docxErrorToastHandler.showErrorToast({
          content: t("airtable-link-not-exist", undefined, undefined, t("block.iframe_xigua"))
        });
      }
      return r;
    } catch (e) {
      docxErrorToastHandler.showErrorToast({
        content: t("LarkCCM_Docx_LinkToEmbeds_Failed")
      });
      throw Error(e);
    }
  }
  async function k(e) {
    let r = e;
    if (e.includes("vt.tiktok.com") || e.includes("vm.tiktok.com")) {
      let r = encodeURIComponent(e);
      let o = `https://www.tiktok.com/node/common/embed?url=${r}`;
      try {
        let r = await _(o, {
          withCredentials: false,
          ignoreInterceptors: true
        });
        if (r.errMsg !== null) {
          docxErrorToastHandler.showErrorWithDebug({
            content: t("airtable-link-not-exist", undefined, undefined, "TikTok"),
            errorContext: docxErrorDebugUtils.createErrorObject(r, Error("Fetching TikTok iframe url has failed"))
          });
        }
        e = r.body.url;
      } catch (e) {
        throw Error(e);
      }
    }
    let o = /https:\/\/www\.tiktok\.com\/@[^\s]+\/video\/(\d+)/i;
    let n = /https:\/\/www\.tiktok\.com\/embed\/([^\s]+\/)?(\d+)/i;
    let i = /https:\/\/m\.tiktok\.com\/v\/([0-9]+)/i;
    let l = o.test(r) ? o.exec(r)[1] : n.test(r) ? n.exec(r)[2] : i.test(e) ? i.exec(e)[1] : /https:\/\/t\.tiktok\.com\/i18n\/share\/video\/([0-9]+)/i.exec(e)[1];
    return `https://www.tiktok.com/embed/v2/${l}`;
  }
  async function p(e, r) {
    let o;
    r = docUrlProcessingUtilities.decodeUrlComponent(r);
    if (e === iframeLayoutConstants.IframeTypes.xigua) {
      o = await f(r);
    }
    if (e === iframeLayoutConstants.IframeTypes.tiktok) {
      o = await k(r);
    }
    return o;
  }
  async function h(e, r) {
    if (r) {
      let {
        isCanIframeExtract: r
      } = await docUrlExtractUtils.checkUrlExtraction(e, true);
      if (!r) {
        return;
      }
    }
    let n = (await Promise.all([require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("clipboard_module") /*id: 40603*/]).then(require.bind(require, "iframe-region-config-validator") /*id: 473081*/)).getIframeConfigType(e);
    if (!n) {
      return;
    }
    let i = await Promise.all([require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("clipboard_module") /*id: 40603*/]).then(require.bind(require, "iframe-snapshot-generator") /*id: 864303*/);
    let a = await p(n, e);
    return i.getIframeSnapshotWithUrl(e, {
      type: n,
      url: a
    });
  }
  require.d(exports, {
    createIframeSnapshot: function () {
      return h;
    }
  });
}