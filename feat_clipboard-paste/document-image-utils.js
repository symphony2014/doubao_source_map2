// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DK' to 'fetchBlobUrl'
// - Renamed export 'I_' to 'fetchAttachments'
// - Renamed export 'Vw' to 'parseDecryptConfig'
// - Renamed export 'Xb' to 'fetchImageBuffer'
// - Renamed export 'pe' to 'prepareImageParams'
// - Renamed export 'qQ' to 'createBlobUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 606561
         */
module.exports = function (module, exports, require) {
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  var asyncRetryUtils_1 = require("async-retry-utils_1") /*id: 989891*/;
  var imageFetchSchedulerConfig = require("image-fetch-scheduler-config") /*id: 67275*/;
  require("api-endpoint-constants") /*id: 403286*/;
  require("url-query-parameter-manipulator") /*id: 551064*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var blobUrlUtils = require("blob-url-utils") /*id: 334362*/;
  async function u(e) {
    if (e.length <= 0) {
      return Promise.resolve([]);
    }
    let n = e.find(e => e.auth_token)?.auth_token;
    let a = dataProcessor.processData(e.map(e => e == null ? undefined : e.file_token));
    let c = otterDocApiServiceDi.getOtterDocService();
    let {
      data: d = {}
    } = await asyncRetryUtils_1.retryUntilSuccess({
      value: () => c.AgwMGetAttachment({
        page_token: docTokenHelperUtils.resolveDocToken(),
        keys: a,
        ...(n ? {
          auth_token: n,
          auth_type: c.otter_doc_common.AuthType.ResourceAuthToken
        } : {})
      }),
      ifRetry: e => {
        var n;
        return !((n = e.data) === null || n === undefined ? undefined : n.attachments?.length);
      },
      count: 3
    });
    let {
      attachments: u = []
    } = d;
    return e.map((e, r) => {
      let l = u == null ? undefined : u.find(r => (r == null ? undefined : r.key) === (e == null ? undefined : e.file_token));
      let a = JSON.parse((l == null ? undefined : l.extra) || "{}");
      return {
        index: r,
        url: (l == null ? undefined : l.url) ?? "",
        cipher_type: "0",
        secret: "",
        nonce: "",
        permitted: true,
        file_token: (l == null ? undefined : l.key) ?? "",
        generate_status: l == null ? undefined : l.generate_status,
        extra: a,
        uri: (l == null ? undefined : l.uri) ?? ""
      };
    });
  }
  function h(e) {
    return e.map(e => e.fuzzy ? {
      file_token: e.token,
      width: e.fuzzy.width,
      height: e.fuzzy.height,
      policy: "near"
    } : {
      file_token: e.token,
      platform: "pc",
      type: e.isHD ? "" : imageFetchSchedulerConfig.coverMode
    });
  }
  function p(e) {
    let r = new Blob([new DataView(e)], {
      type: docxImageUrlUtils.detectMimeTypeFromBytes(e)
    });
    return URL.createObjectURL(r);
  }
  function f(e) {
    return blobUrlUtils.fetchBlob(e).then(r => r ? URL.createObjectURL(r) : e).catch(r => e);
  }
  function g(e) {
    let {
      url: r,
      cipher_type: n,
      secret: o,
      nonce: i,
      extra: l,
      uri: s
    } = e;
    return {
      needDecrypt: n !== imageFetchSchedulerConfig.defaultZero,
      cdnUrl: r,
      key: o,
      iv: docxImageUrlUtils.base64ToUint8Array(i),
      extra: l,
      uri: s
    };
  }
  async function m(e, r) {
    let n = await fetch(e, {
      method: "get",
      ignoreInterceptors: true,
      responseType: "arraybuffer",
      withCredentials: false,
      ...r
    });
    return {
      imageArrayBuffer: await n.arrayBuffer(),
      originRes: n
    };
  }
  require.d(exports, {
    fetchBlobUrl: function () {
      return f;
    },
    fetchAttachments: function () {
      return u;
    },
    parseDecryptConfig: function () {
      return g;
    },
    fetchImageBuffer: function () {
      return m;
    },
    prepareImageParams: function () {
      return h;
    },
    createBlobUrl: function () {
      return p;
    }
  });
}