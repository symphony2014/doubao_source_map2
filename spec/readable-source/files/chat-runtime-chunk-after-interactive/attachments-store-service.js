// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'uuidV1Generator'
// - Resolved require(278878) to 'uuid-v1-generator'
// - Renamed variable 'r' to 'safeObjectSetWrapper'
// - Resolved require(784610) to 'safe-object-set-wrapper'
// - Renamed variable 'o' to 'isFunctionUtil_1'
// - Resolved require(699491) to 'is-function-util_1'
// - Renamed variable 's' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'l' to 'immerCoreImplementation'
// - Resolved require(828474) to 'immer-core-implementation'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'u' to 'messageBoxTypeCheckers'
// - Resolved require(117360) to 'message-box-type-checkers'
// - Renamed variable 'd' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'p' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable '_' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'v' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'h' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Uy' to 'produce' (module 828474)
// - Updated imported property 'Z' to 'safeObjectSet' (module 784610)
// - Updated imported property 'Z' to 'isFunction' (module 699491)
// - Updated imported property 'Z' to 'generateUuid' (module 278878)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Or' to 'isImageType' (module 117360)
// - Updated imported property 'zE' to 'isFileType' (module 117360)
// - Updated imported property 'u$' to 'isLinkType' (module 117360)
// - Updated imported property 'Q1' to 'isRemoteType' (module 117360)
// - Updated imported property 'zj' to 'isDirectoryType' (module 117360)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'SI' to 'ResourceApiService' (module 147875)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 381374
         */
module.exports = function (module, exports, require) {
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let m = (e, t) => {
    let {
      chatId: n,
      skillType: i = "default"
    } = t;
    if (n) {
      chatStoreManager.getStore("attachmentsStore").setState(immerCoreImplementation.produce(t => safeObjectSetWrapper.safeObjectSet(t, ["attachmentsMap", n, `_${i}`], isFunctionUtil_1.isFunction(e) ? e(f({
        chatId: n,
        skillType: i
      })) : e)));
    }
  };
  let f = e => {
    var n;
    let {
      chatId: i,
      skillType: r = "default"
    } = e;
    if (i && (n = chatStoreManager.getStore("attachmentsStore").getState().attachmentsMap[i]?.[`_${r}`]) !== null && n !== undefined) {
      return n;
    } else {
      return [];
    }
  };
  let g = e => {
    let {
      type: t,
      fileName: n,
      from: r,
      fileKey: o,
      size: s,
      blobUrl: l,
      url: c
    } = e;
    let u = uuidV1Generator.generateUuid();
    let d = {
      type: t,
      fileName: n,
      localKey: u,
      from: r,
      size: s,
      url: c
    };
    m(e => [...e, d], e);
    let p = chatStoreManager.getStore("attachmentUploadStore");
    if (t !== "link") {
      p.setState(e => {
        let n = {
          ...e.preprocessTaskMap,
          [u]: {
            type: t,
            key: o,
            localKey: u,
            percent: 100,
            loading: false,
            failed: false,
            fileKey: o,
            parseState: 1,
            parsePercent: 100,
            size: s,
            blobUrl: l,
            from: r
          }
        };
        return {
          ...e,
          preprocessTaskMap: n
        };
      });
    }
  };
  let y = e => {
    var n;
    let {
      chatId: i,
      skillType: r
    } = e;
    if ((n = chatStoreManager.getStoreState("attachmentUploadStore").preGeneratedLocalMessageIdMap) === null || n === undefined) {
      return undefined;
    } else {
      return n[i]?.[`_${r}`];
    }
  };
  let b = e => {
    let {
      chatId: n,
      skillType: i = "default",
      disablePreprocess: r,
      file: o,
      type: s,
      ctx: l
    } = e;
    let u = chatFeedStoreFactory.useFeedStore.getState().conversationMap[n]?.last_section_id || "";
    chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(t => {
      let p = chatStoreManager.getStoreState("attachmentUploadStore");
      let _ = y({
        chatId: n,
        skillType: i
      });
      if (!_ && t != null) {
        t.updatePreGeneratedLocalMessageId(e);
      }
      _ = y({
        chatId: n,
        skillType: i
      });
      let {
        local_key: v
      } = (t == null ? undefined : t.preprocessFile(o, s, l, {
        preHandle: r ? undefined : {
          version: "pre_handle_v2",
          preGeneratedLocalMessageId: _ || "",
          sectionId: u,
          enableImageVlm: p.attachmentUploadConfig?.enableImageVlm
        }
      })) ?? {};
      if (v) {
        let t = {
          type: s,
          file: o,
          localKey: v,
          from: l.from
        };
        m(e => [...e, t], e);
      }
    });
  };
  let S = async e => {
    let {
      files: t,
      type: n,
      ctx: i
    } = e;
    let r = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
    if (!r) {
      return;
    }
    let {
      local_key: o
    } = await r.preprocessDir(t, n, i, {
      preHandle: {
        version: "pre_handle_code"
      }
    });
    let s = t[0].webkitRelativePath;
    let l = s == null ? undefined : s.split("/")[0];
    let a = {
      type: "directory",
      files: t,
      localKey: o,
      from: i.from,
      dirName: l
    };
    m(e => [...e, a], e);
  };
  let k = e => {
    let {
      url: t,
      name: n,
      token: r,
      type: o
    } = e;
    let s = uuidV1Generator.generateUuid();
    let l = {
      type: "lark_doc",
      localKey: s,
      key: r,
      url: t,
      name: n,
      token: r,
      fileName: n,
      from: ""
    };
    m(e => [...e, l], e);
    chatStoreManager.getStore("attachmentUploadStore").setState(e => {
      let i = {
        ...e.preprocessTaskMap,
        [s]: {
          type: o,
          localKey: s,
          key: r,
          larkDoc: {
            url: t,
            name: n,
            token: r
          },
          fileName: n,
          percent: 100,
          loading: false,
          failed: false,
          parseState: 1,
          parsePercent: 100
        }
      };
      return {
        ...e,
        preprocessTaskMap: i
      };
    });
  };
  let T = e => {
    let {
      url: t,
      fileType: n,
      ...i
    } = e;
    m(e => [...e, {
      type: "link",
      url: t,
      fileType: n
    }], i);
  };
  let w = async e => {
    let {
      url: t,
      ctx: n
    } = e;
    let i = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
    if (!i) {
      return;
    }
    let {
      local_key: r
    } = i.preprocessGithubLink(t, n);
    let o = {
      type: "link",
      url: t,
      localKey: r
    };
    m(e => [...e, o], e);
  };
  let E = e => {
    let {
      index: t,
      url: n,
      fileType: i,
      ...r
    } = e;
    m(e => {
      let r = e[t];
      if ((r == null ? undefined : r.type) === "link" && r.url === n) {
        return e;
      }
      let o = [...e];
      o.splice(t, 1, {
        type: "link",
        url: n,
        fileType: i
      });
      return o;
    }, r);
  };
  let C = e => {
    let {
      key: t,
      fileName: n,
      size: i,
      ...r
    } = e;
    m(e => [...e, {
      type: "remote",
      key: t,
      fileName: n,
      size: i,
      from: "remote"
    }], r);
  };
  let x = async e => {
    let t = e.filter(e => !("from" in e) || e.from !== "ai-space").map(e => {
      if (messageBoxTypeCheckers.isImageType(e) || messageBoxTypeCheckers.isFileType(e)) {
        let t = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[e.localKey];
        return {
          uri: t == null ? undefined : t.key,
          data_type: messageBoxTypeCheckers.isImageType(e) ? "image" : "file"
        };
      }
    }).filter(e => !!(e == null ? undefined : e.uri));
    let n = eventReportingService.createEventReporter({
      eventName: "delete_attachment_files",
      meta: {
        count: e.length,
        uri_count: t.length,
        types: e.map(e => e.type).join(",")
      }
    });
    if (isEmptyUtil.isEmpty(t)) {
      n.success({
        meta: {
          reason: "delete_attachment_files_empty"
        }
      });
      return;
    }
    try {
      await apiServicesCollection.ResourceApiService.DeleteFiles({
        uris: t
      });
      n.addDurationPoint("success");
      n.success();
    } catch (e) {
      n.error({
        reason: "delete_attachment_files_error",
        error: e instanceof Error ? e : Error(String(e))
      });
    }
  };
  let I = e => {
    let {
      options: t,
      index: n,
      ...i
    } = e;
    let {
      hardDelete: r = true
    } = t ?? {};
    let o = f(i);
    let l = o[n];
    if (!l) {
      return;
    }
    let d = o.filter(e => e !== l);
    if (messageBoxTypeCheckers.isImageType(l) || messageBoxTypeCheckers.isFileType(l)) {
      chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
        if (e != null) {
          e.cancel(l.localKey);
        }
      });
    }
    if (!messageBoxTypeCheckers.isLinkType(l) && !messageBoxTypeCheckers.isRemoteType(l) && !messageBoxTypeCheckers.isDirectoryType(l)) {
      let e = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[l.localKey];
      teaAnalyticsEventTracker.trackEvent("click_attachment_delete", {
        bot_id: chatConversationBotId.getConversationBotId(i.chatId),
        uri: e.key || "",
        success: e.percent === 100 ? "1" : "0"
      });
    }
    m(d, i);
    if (isEmptyUtil.isEmpty(d)) {
      chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
        if (e != null) {
          e.updatePreGeneratedLocalMessageId(i);
        }
      });
    }
    if (r) {
      x([l]);
    }
  };
  let R = e => {
    let {
      options: t,
      ...n
    } = e;
    let {
      hardDelete: i = false
    } = t ?? {};
    chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
      if (e != null) {
        e.updatePreGeneratedLocalMessageId(n);
      }
    });
    if (i) {
      x(f(n));
    }
    m([], n);
  };
  let P = e => {
    chatStoreManager.getStore("attachmentsStore").setState(immerCoreImplementation.produce(t => {
      t.attachmentsMap[e.chatId] = {};
    }));
  };
  let N = () => {
    chatStoreManager.getStore("attachmentsStore").setState(immerCoreImplementation.produce(e => {
      e.attachmentsMap = {};
    }));
  };
  let O = e => {
    let {
      index: t,
      ...n
    } = e;
    let i = f(n)[t];
    if (!!i && !messageBoxTypeCheckers.isLinkType(i) && !messageBoxTypeCheckers.isRemoteType(i)) {
      chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(e => {
        if (e != null) {
          e.reUpload(i.localKey ?? "", chatConversationBotId.getConversationBotId(n.chatId) ?? "");
        }
      });
    }
  };
  function A(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class M {
    constructor() {
      A(this, "getAttachments", f);
      A(this, "addAttachment", b);
      A(this, "addDirAttachment", S);
      A(this, "deleteAttachment", I);
      A(this, "clearAttachments", R);
      A(this, "clearChatAttachments", P);
      A(this, "clearAllAttachments", N);
      A(this, "reuploadAttachment", O);
      A(this, "addLink", T);
      A(this, "addGitHubLink", w);
      A(this, "replaceLink", E);
      A(this, "addRemoteAttachment", C);
      A(this, "addAttachmentDirectly", g);
      A(this, "addLarkDoc", k);
    }
  }
  require.r(exports);
  require.d(exports, {
    AttachmentsStoreService: function () {
      return M;
    }
  });
}