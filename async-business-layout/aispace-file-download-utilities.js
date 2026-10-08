// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GG' to 'getAispaceDownloadUrls'
// - Renamed export 'RO' to 'checkConversationValid'
// - Renamed export 'bq' to 'isSupportedFileType'
// - Renamed export 'gQ' to 'isDocumentType'
// - Renamed export 'gV' to 'showReviewStatusWarning'
// - Renamed export 'mc' to 'getCachedFileUrls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 130148
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  async function p(e) {
    if (!e || e === "0") {
      return false;
    }
    try {
      let t = await (await aliceChatService.AliceChatService()).getConversationBasicInfo({
        conversation_id: e
      });
      return (t == null ? undefined : t.code) !== 710022001;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "myCreation_checkIsValidConversationApiError",
        error: e
      });
    }
    return false;
  }
  async function m(e) {
    if (!(e == null ? undefined : e.length) || !(e == null ? undefined : e.length)) {
      return;
    }
    let n = {};
    let i = e.map(e => {
      n[e.nodeId] = e;
      return e.nodeId;
    }).filter(Boolean).map(e => ({
      node_id: e
    }));
    let r = await apiServicesCollection.SamanthaApiService.AISpaceGetDownloadInfo({
      requests: i
    });
    let o = r == null ? undefined : r.data?.download_infos;
    if (o == null ? undefined : o.length) {
      o.forEach(e => {
        if (e.main_url) {
          fileDownloadUtilities.openUrlInHiddenIframe(e.main_url);
        }
      });
    }
  }
  async function v(e, t) {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_downloadfilestart"
    });
    if (chatFgStoreHooks.getSourceKeySync("ai_space_use_new_download", {
      source: chatStorageKeys.chatStorageKeys.tea,
      defaultValue: false
    })) {
      return m(e);
    }
    let n = e.filter(e => e.type === "file");
    let i = e.filter(e => e.type === "image");
    let r = e.filter(e => e.type === "audio" || e.type === "video");
    let o = {};
    let c = {};
    let h = {};
    async function p(e) {
      let t = await Promise.all(e.map(e => apiServicesCollection.SamanthaApiService.GetMediaPlayInfo({
        key: e.uri,
        node_id: e.nodeId
      })));
      e.forEach((e, n) => {
        var r;
        var o;
        c[e.uri] = ((o = t[n]) === null || o === undefined ? undefined : (r = o.data) === null || r === undefined ? undefined : r.original_media_info?.main_url) || "";
      });
    }
    async function v(e, t) {
      var n;
      if (!e.length) {
        return;
      }
      let {
        data: i
      } = await apiServicesCollection.ResourceApiService.GetFileURL({
        uris: e,
        type: t
      });
      if (i != null && (n = i.file_urls) !== null && n !== undefined) {
        n.forEach(e => {
          let {
            main_url: t,
            back_url: n,
            uri: i
          } = e;
          let r = t || n;
          if (i && r) {
            o[i] = r;
          }
        });
      }
    }
    async function g(e, t) {
      var n;
      if (!e.length) {
        return;
      }
      let {
        data: i
      } = await apiServicesCollection.SamanthaApiService.AISpaceGetFileUrl({
        node_id_str: e.map(e => String(e)),
        share_id: t
      });
      if (i != null && (n = i.file_urls) !== null && n !== undefined) {
        n.forEach(e => {
          let {
            main_url: t,
            backup_url: n,
            node_id: i
          } = e;
          let r = t || n;
          if (i && r) {
            h[i] = r;
          }
        });
      }
    }
    try {
      await Promise.all([v(n.map(e => e.uri), "file"), g(i.map(e => e.nodeId), t), p(r)]);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "GetFileURL api error",
        error: e
      });
      return Promise.reject(e);
    }
    let _ = e.map(async e => {
      let {
        uri: t,
        nodeId: n
      } = e;
      let i = "";
      if (e.type === "audio" || e.type === "video") {
        i = c[t];
      } else if (e.type === "image") {
        i = h[n];
      }
      if (i = o[t]) {
        if (getFileExtension.getFileExtension(e.name) === "zip") {
          fileDownloadUtilities.openUrlInHiddenIframe(i);
        } else {
          await fileDownloadUtilities.downloadFileViaBlob(i, e.name);
        }
      }
    });
    await Promise.all(_);
  }
  let g = {};
  async function _(e, t) {
    if (!e.length) {
      return;
    }
    let n = e.filter(e => !g[e.id || ""]);
    if (n == null ? undefined : n.length) {
      var r;
      let {
        data: e
      } = await apiServicesCollection.SamanthaApiService.AISpaceGetFileUrl({
        node_id_str: n.map(e => String(e.id || "")),
        share_id: t
      });
      if (e != null && (r = e.file_urls) !== null && r !== undefined) {
        r.forEach(e => {
          let {
            main_url: t,
            backup_url: n,
            node_id: i
          } = e;
          let r = t || n;
          if (i && r) {
            g[i] = r;
          }
        });
      }
    }
    return throttledPathFilterStringify.throttledPathStr(g, e.map(e => e.id || ""));
  }
  let b = e => [e == null ? undefined : e.name_review_status, e == null ? undefined : e.content_review_status, e == null ? undefined : e.risk_review_status].every(e => e === businessLayoutConstants.ReviewStatus.Pass);
  let y = e => [e == null ? undefined : e.name_review_status, e == null ? undefined : e.content_review_status, e == null ? undefined : e.risk_review_status].some(e => e && [businessLayoutConstants.ReviewStatus.Failed, businessLayoutConstants.ReviewStatus.Reject].includes(e));
  let w = e => b(e) ? undefined : y(e) ? i18nTranslationUtils.i18nextTranslate("aispace_image_tooltip_violate") : (e == null ? undefined : e.name_review_status) !== businessLayoutConstants.ReviewStatus.Pass ? i18nTranslationUtils.i18nextTranslate("aispace_under_review") : undefined;
  let S = e => {
    let t = w(e);
    return !!t && (samanthaToastFactory.toastInstance.warning(t), true);
  };
  let x = ["pdf", "docx", "doc", "jpg", "jpeg", "png", "csv", "xlsx", "xls", "txt", "pptx", "ppt", "md", "mobi", "epub"];
  let C = ["dng", "arw", "nef", "ar2", "ar3"];
  let k = function (e = "", t = "", n = "") {
    let i = n || getFileExtension.getFileExtension(e) || getFileExtension.getFileExtension(t || "");
    return x.includes(i);
  };
  let T = e => !C.includes(e == null ? undefined : e.toLowerCase());
  require.d(exports, {
    getAispaceDownloadUrls: function () {
      return v;
    },
    checkConversationValid: function () {
      return p;
    },
    isSupportedFileType: function () {
      return T;
    },
    isDocumentType: function () {
      return k;
    },
    showReviewStatusWarning: function () {
      return S;
    },
    getCachedFileUrls: function () {
      return _;
    }
  });
}