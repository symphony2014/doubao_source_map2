// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AP' to 'usePreGeneratedMessageId'
// - Renamed export 'Am' to 'useAttachmentService'
// - Renamed export 'Dc' to 'getAttachments'
// - Renamed export 'E5' to 'getUploadConfig'
// - Renamed export 'Ep' to 'mapAttachmentKeys'
// - Renamed export 'GJ' to 'getPreGeneratedId'
// - Renamed export 'LA' to 'subscribeUploadStore'
// - Renamed export 'ND' to 'mapLocalKeys'
// - Renamed export 'Rs' to 'subscribeAttachments'
// - Renamed export 'hx' to 'useAttachmentHook'
// - Renamed export 'r9' to 'processAttachment'
// - Renamed export 'rp' to 'processUploadAttachment'
// - Renamed export 'vQ' to 'getAttachmentKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 793484
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var gitRepoUrlValidator = require("git-repo-url-validator") /*id: 904797*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  let h = (e, t) => {
    var i;
    let {
      chatId: a,
      skillType: l = "default"
    } = t;
    return ((i = e.attachmentsMap) === null || i === undefined ? undefined : i[a]?.[`_${l}`]) ?? [];
  };
  let p = e => h(chatStoreManager.getStoreState("attachmentsStore"), e);
  let v = e => chatStoreManager.useStoreSelector("attachmentsStore", t => h(t, e));
  let m = (e, t) => e.map(e => {
    let h = messageBoxTypeCheckers.isLinkType(e) && gitRepoUrlValidator.isGithubUrl(e.url) && e.localKey;
    if (messageBoxTypeCheckers.isLinkType(e) && !h) {
      return {
        type: "link",
        fileName: e.url,
        fileKey: "",
        url: e.url,
        uploadPercent: 100,
        status: receiveMessageBoxStatus.messageBoxStatus.Normal
      };
    }
    if (messageBoxTypeCheckers.isRemoteType(e)) {
      return {
        type: "remote",
        fileName: e.fileName,
        fileKey: e.key,
        size: e.size,
        uploadPercent: 100,
        status: receiveMessageBoxStatus.messageBoxStatus.Normal
      };
    }
    let p = t.preprocessTaskMap[e.localKey] || t.preprocessDirTaskMap[e.localKey];
    if (!p) {
      return {
        type: "file",
        fileName: getObjectPathString.getObjectPathString("name")(e.file),
        fileKey: "",
        uploadPercent: 0,
        status: receiveMessageBoxStatus.messageBoxStatus.Retry
      };
    }
    let v = p.key || "";
    let m = [{
      key: v,
      image_thumb: {
        url: (p == null ? undefined : p.blobUrl) ?? "",
        width: 0,
        height: 0,
        format: "",
        url_formats: {}
      },
      image_ori: {
        url: (p == null ? undefined : p.blobUrl) ?? "",
        width: 0,
        height: 0,
        format: "",
        url_formats: {}
      },
      image_thumb_formats: {},
      image_thumb_ori_formats: {},
      feedback: "",
      request_id: "",
      description: ""
    }];
    let g = e.file?.size || (e == null ? undefined : e.size);
    let {
      fileName: _
    } = e || {};
    let {
      type: f
    } = e;
    return {
      type: f,
      fileName: typeof _ == "string" ? _ : f === "directory" ? e.dirName : h ? getObjectPathString.getObjectPathString("name")(p.repoInfo || {}) : getObjectPathString.getObjectPathString("name")(e.file),
      fileKey: v,
      isRepo: p.isRepo,
      repoInfo: p.repoInfo,
      size: g,
      imageList: m,
      uploadPercent: p.percent,
      status: p.failed ? receiveMessageBoxStatus.messageBoxStatus.Retry : p.loading ? receiveMessageBoxStatus.messageBoxStatus.Uploading : receiveMessageBoxStatus.messageBoxStatus.Normal,
      parseState: p.parseState,
      parsePercent: p.parsePercent,
      reviewState: p.reviewState,
      uploadWay: p.ctx?.uploadWay,
      localKey: p.localKey,
      md5: p.md5,
      imageWidth: p.uploadResult?.ImageWidth,
      imageHeight: p.uploadResult?.ImageHeight,
      parsedCharCount: p.parsedCharCount
    };
  });
  let g = e => m(p(e), chatStoreManager.getStoreState("attachmentUploadStore"));
  let _ = e => {
    let t = v(e);
    return chatStoreManager.useStoreSelector("attachmentUploadStore", e => m(t, e), deepEqualUtil_1.deepEqual);
  };
  let f = () => chatStoreManager.useStoreSelector("attachmentUploadStore", e => e.attachmentUploadConfig, deepEqualityUtil.deepEqual);
  let b = (e, t) => {
    if (messageBoxTypeCheckers.isLinkType(e)) {
      return;
    }
    if (messageBoxTypeCheckers.isRemoteType(e)) {
      return e.key;
    }
    let n = t[e.localKey];
    return (n == null ? undefined : n.key) || undefined;
  };
  let y = e => {
    let t = v(e);
    return chatStoreManager.useStoreSelector("attachmentUploadStore", e => t.map(t => b(t, e.preprocessTaskMap)), deepEqualityUtil.deepEqual);
  };
  let k = (e, t) => {
    if (messageBoxTypeCheckers.isLinkType(e)) {
      return;
    }
    if (messageBoxTypeCheckers.isRemoteType(e)) {
      return e.key;
    }
    let n = t[e.localKey];
    return (n == null ? undefined : n.key) || (n == null ? undefined : n.localKey) || undefined;
  };
  let w = e => {
    let t = v(e);
    return chatStoreManager.useStoreSelector("attachmentUploadStore", e => t.map(t => k(t, e.preprocessTaskMap)), deepEqualityUtil.deepEqual);
  };
  let x = e => {
    let t = p(e);
    let {
      preprocessTaskMap: n
    } = chatStoreManager.getStoreState("attachmentUploadStore");
    return t.map(e => k(e, n));
  };
  let C = e => {
    let {
      chatId: t,
      skillType: n = "default"
    } = e;
    return chatStoreManager.useStoreSelector("attachmentUploadStore", e => {
      return e.preGeneratedLocalMessageIdMap[t]?.[`_${n}`];
    }, deepEqualityUtil.deepEqual);
  };
  let E = e => {
    let {
      chatId: n,
      skillType: i = "default"
    } = e;
    return chatStoreManager.getStoreState("attachmentUploadStore").preGeneratedLocalMessageIdMap[n]?.[`_${i}`];
  };
  let I = async e => {
    if (!E(e)) {
      let t = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
      if (t != null) {
        t.updatePreGeneratedLocalMessageId(e);
      }
    }
    return E(e);
  };
  let S = e => {
    let t = t => async n => {
      var i;
      let o = await chatIocServiceLoaderHook.loadServiceAsync("attachmentsStoreService");
      if (o == null) {
        return undefined;
      } else if ((i = o[t]) === null || i === undefined) {
        return undefined;
      } else {
        return i.call(o, {
          ...e,
          ...n
        });
      }
    };
    return {
      clearAttachments: t("clearAttachments"),
      getAttachments: t("getAttachments"),
      addAttachment: t("addAttachment"),
      addDirAttachment: t("addDirAttachment"),
      addLink: t("addLink"),
      addGitHubLink: t("addGitHubLink"),
      addRemoteAttachment: t("addRemoteAttachment"),
      clearAllAttachments: t("clearAllAttachments"),
      clearChatAttachments: t("clearChatAttachments"),
      deleteAttachment: t("deleteAttachment"),
      replaceLink: t("replaceLink"),
      reuploadAttachment: t("reuploadAttachment"),
      getPreGeneratedLocalMessageId: () => I(e),
      updatePreGeneratedLocalMessageId: async () => {
        let t = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
        if (t != null) {
          t.updatePreGeneratedLocalMessageId(e);
        }
      },
      addAttachmentDirectly: t("addAttachmentDirectly"),
      addLarkDoc: t("addLarkDoc")
    };
  };
  let T = e => reactCoreLibraryReexport.useMemo(() => S(e), [e.chatId, e.skillType]);
  require.d(exports, {
    usePreGeneratedMessageId: function () {
      return I;
    },
    useAttachmentService: function () {
      return S;
    },
    getAttachments: function () {
      return p;
    },
    getUploadConfig: function () {
      return f;
    },
    mapAttachmentKeys: function () {
      return x;
    },
    getPreGeneratedId: function () {
      return C;
    },
    subscribeUploadStore: function () {
      return _;
    },
    mapLocalKeys: function () {
      return w;
    },
    subscribeAttachments: function () {
      return v;
    },
    useAttachmentHook: function () {
      return T;
    },
    processAttachment: function () {
      return m;
    },
    processUploadAttachment: function () {
      return g;
    },
    getAttachmentKeys: function () {
      return y;
    }
  });
}