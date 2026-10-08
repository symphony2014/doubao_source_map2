// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M3' to 'useAttachmentManager'
// - Renamed export 'OA' to 'createDirectAdder'
// - Renamed export 'lh' to 'addAttachmentFiles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 224274
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var chatAttachmentProcessor_1 = require("chat-attachment-processor_1") /*id: 670926*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  let v = e => {
    let {
      maxAllowCount: t = 0,
      hasReadyFileCount: n = 0,
      addAttachment: i,
      onAddAttachmentSuccess: r
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let {
      uploadFileMaxSize: o
    } = attachmentUploadStoreHooks.getUploadConfig();
    let u = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId ?? "";
    });
    let {
      getPreGeneratedLocalMessageId: h
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: u,
      skillType: chatAppEnums.SkillType.WriteAssistant
    });
    return skillPinModalCallback.useSkillPinCallback(async (e, l) => {
      if (t < n + e.length) {
        samanthaToastFactory.defaultToast.error(a("skill_writing_input_reference_uploadDoc_limitation_toast", {
          postProcess: "sprintf",
          sprintf: [t]
        }));
        return;
      }
      let s = chatAttachmentProcessor_1.normalizeFileInputs(e);
      s = chatAttachmentProcessor_1.filterValidFiles({
        files: s,
        uploadFileMaxSize: o,
        onTypeError: () => {
          samanthaToastFactory.defaultToast.error(a("file_not_supported"));
        },
        onSizeError: () => {
          samanthaToastFactory.defaultToast.error(a("file_size_exceeds_limit"));
        }
      });
      let c = await h();
      let u = chatAttachmentProcessor_1.prepareFileUploadContext({
        files: s,
        uploadId: c,
        preCount: n,
        ctx: {
          from: l.from,
          uploadWay: l.uploadWay,
          uploadFrom: l.uploadFrom
        }
      });
      await Promise.all(u.map(async e => {
        if (chatAttachmentProcessor_1.isFileObject(e)) {
          await i(e);
        }
      }));
      if (r != null) {
        r();
      }
    });
  };
  let _ = e => {
    let {
      maxAllowCount: t = 0,
      hasReadyFileCount: n = 0,
      addAttachmentDirectly: i
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let d = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId ?? "";
    });
    return e => {
      if (t < n + e.length) {
        samanthaToastFactory.defaultToast.error(s("skill_writing_input_reference_uploadDoc_limitation_toast", {
          postProcess: "sprintf",
          sprintf: [t]
        }));
        return;
      }
      let l = {
        [businessLayoutConstants.ItemType.File]: "file",
        [businessLayoutConstants.ItemType.Image]: "image",
        [businessLayoutConstants.ItemType.Link]: "link",
        [businessLayoutConstants.ItemType.UnKnown]: ""
      };
      let c = collectionMapMatcher.mapWithMatcher(genericFilterUtil.genericFilter(e, e => {
        return !!e && !!objectPathGetDefault.getObjectPathDefault(l, (e == null ? undefined : e.nodeType) ?? businessLayoutConstants.ItemType.UnKnown, "");
      }), e => {
        return {
          type: objectPathGetDefault.getObjectPathDefault(l, (e == null ? undefined : e.nodeType) ?? businessLayoutConstants.ItemType.UnKnown, ""),
          ...e
        };
      });
      collectionMapMatcher.mapWithMatcher(c, e => {
        i({
          chatId: d,
          type: e == null ? undefined : e.type,
          fileName: e == null ? undefined : e.name,
          from: "ai-space",
          fileKey: e == null ? undefined : e.key,
          size: (e == null ? undefined : e.size) ? Number(e == null ? undefined : e.size) : 0,
          blobUrl: undefined,
          url: undefined
        });
      });
    };
  };
  let b = () => {
    let [t, n] = reactCoreLibraryReexport.useState(null);
    let r = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let a = writingSkillStore.writingSkillStore(e => {
      var n;
      let {
        isWriteConfigInitd: i,
        isWriteConfigLoading: r,
        writeConfig: a,
        fetchWriteConfig: o
      } = e;
      if (!i && !r) {
        o();
      }
      if (a == null) {
        return undefined;
      } else if ((n = a.meta) === null || n === undefined) {
        return undefined;
      } else {
        return n.base_config?.max_reference_count;
      }
    });
    let o = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: r ?? "",
      skillType: chatAppEnums.SkillType.WriteAssistant
    });
    let c = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: r ?? "",
      skillType: chatAppEnums.SkillType.WriteAssistant
    });
    let u = attachmentUploadStoreHooks.mapLocalKeys({
      chatId: r ?? "",
      skillType: chatAppEnums.SkillType.WriteAssistant
    });
    let {
      addAttachment: p,
      reuploadAttachment: f,
      deleteAttachment: m,
      clearAttachments: _,
      getPreGeneratedLocalMessageId: b,
      updatePreGeneratedLocalMessageId: y
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: r ?? "",
      skillType: chatAppEnums.SkillType.WriteAssistant
    });
    useOnUnmountHook.useOnUnmount(async () => {
      await _({});
      await y();
    });
    let w = reactCoreLibraryReexport.useRef(null);
    let x = v({
      maxAllowCount: (t == null ? undefined : t.maxAllowCount) ?? a,
      hasReadyFileCount: c.length,
      addAttachment: p,
      onAddAttachmentSuccess: () => {
        new Promise(e => setTimeout(e, 50)).then(() => {
          var e;
          var t;
          if ((t = w.current) === null || t === undefined) {
            return undefined;
          } else if ((e = t.scrollToBottom) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(t);
          }
        });
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!t || (t.maxAllowCount ?? 0) < o.length) {
        _({});
      }
    }, [t]);
    return {
      attachments: o,
      attachmentStates: c,
      addNewAttachmentFiles: x,
      attachmentAreaRef: w,
      deleteAttachment: m,
      reuploadAttachment: f,
      attachmentKeys: u,
      getPreGeneratedLocalMessageId: b,
      setAttachmentConfig: e => {
        n(e || null);
      },
      clearAttachments: _,
      attachmentConfig: t
    };
  };
  require.d(exports, {
    useAttachmentManager: function () {
      return b;
    },
    createDirectAdder: function () {
      return _;
    },
    addAttachmentFiles: function () {
      return v;
    }
  });
}