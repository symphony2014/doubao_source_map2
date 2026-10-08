// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'useAiSlidesAttachment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 896036
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var attachmentToMessageBlockTransformer = require("attachment-to-message-block-transformer") /*id: 324654*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var fileExtensionUtility = require("file-extension-utility") /*id: 841327*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var fileUploadProcessor = require("file-upload-processor") /*id: 203782*/;
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
    let l = fileExtensionUtility.getSupportedExtensions();
    let f = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId ?? "";
    });
    let {
      getPreGeneratedLocalMessageId: v
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: f,
      skillType: chatAppEnums.SkillType.AIPPTSlides
    });
    return skillPinModalCallback.useSkillPinCallback(async (e, c) => {
      if (t < n + e.length) {
        samanthaToastFactory.defaultToast.error(a("skill_writing_input_reference_uploadDoc_limitation_toast", {
          postProcess: "sprintf",
          sprintf: [t]
        }));
        return;
      }
      let u = fileUploadProcessor.isValidUploadItem(e);
      if ((u = u.filter(e => l.includes(fileExtensionUtility.getFileExtension(e.name)))).length === 0) {
        samanthaToastFactory.defaultToast.error(a("aispace_file_type_not_supported"));
        return;
      }
      if (u.length !== e.length) {
        samanthaToastFactory.defaultToast.error(a("image_upload_toast_formatFiltered"));
      }
      u = fileUploadProcessor.filterFilesBySize({
        files: u,
        uploadFileMaxSize: o,
        onSizeError: () => {
          samanthaToastFactory.defaultToast.error(a("file_size_exceeds_limit"));
        }
      });
      let d = await v();
      let p = fileUploadProcessor.prepareUploadItems({
        files: u,
        uploadId: d,
        preCount: n,
        ctx: {
          from: c.from,
          uploadWay: c.uploadWay,
          uploadFrom: c.uploadFrom
        }
      });
      await Promise.all(p.map(async e => {
        if (fileUploadProcessor.convertToFileObjects(e)) {
          await i(e);
        }
      }));
      if (r != null) {
        r();
      }
    });
  };
  let _ = () => {
    let [e, t] = reactCoreLibraryReexport.useState(null);
    let n = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let r = reactCoreLibraryReexport.useCallback(e => {
      t(e || null);
    }, []);
    let a = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: n ?? "",
      skillType: chatAppEnums.SkillType.AIPPTSlides
    });
    let o = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: n ?? "",
      skillType: chatAppEnums.SkillType.AIPPTSlides
    });
    let l = attachmentUploadStoreHooks.mapLocalKeys({
      chatId: n ?? "",
      skillType: chatAppEnums.SkillType.AIPPTSlides
    });
    let {
      addAttachment: s,
      reuploadAttachment: d,
      deleteAttachment: h,
      clearAttachments: m,
      getPreGeneratedLocalMessageId: g,
      updatePreGeneratedLocalMessageId: _
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: n ?? "",
      skillType: chatAppEnums.SkillType.AIPPTSlides
    });
    useOnUnmountHook.useOnUnmount(async () => {
      await m({});
      await _();
    });
    let b = reactCoreLibraryReexport.useRef(null);
    let y = v({
      maxAllowCount: e == null ? undefined : e.maxAllowCount,
      hasReadyFileCount: o.length,
      addAttachment: s,
      onAddAttachmentSuccess: () => {
        new Promise(e => setTimeout(e, 50)).then(() => {
          var e;
          var t;
          if ((t = b.current) === null || t === undefined) {
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
      if (!e || (e.maxAllowCount ?? 0) < a.length) {
        m({});
      }
    }, [e]);
    return {
      attachments: a,
      attachmentStates: o,
      addNewAttachmentFiles: y,
      attachmentAreaRef: b,
      deleteAttachment: h,
      reuploadAttachment: d,
      attachmentKeys: l,
      getPreGeneratedLocalMessageId: g,
      setAttachmentConfig: r,
      clearAttachments: m,
      attachmentConfig: e
    };
  };
  function b(e) {
    let {
      maxUploadAllowCount: t = 10
    } = e;
    let {
      attachments: n,
      attachmentStates: c,
      addNewAttachmentFiles: u,
      reuploadAttachment: d,
      deleteAttachment: p,
      attachmentKeys: h,
      clearAttachments: f,
      setAttachmentConfig: m,
      attachmentAreaRef: g
    } = _();
    let v = !!t;
    let b = v && t > 1;
    let y = v && !isEmptyUtil.isEmpty(c);
    reactCoreLibraryReexport.useEffect(() => m({
      maxAllowCount: t
    }), []);
    let w = fileExtensionUtility.getSupportedExtensions();
    let x = reactCoreLibraryReexport.useMemo(() => ({
      onDrop: e => {
        let {
          files: t = []
        } = e.dataTransfer || {};
        if (t.length) {
          u([...t], {
            from: "ai_slides_skill",
            uploadFrom: "upload_pinbutton",
            uploadWay: "drag_drop"
          });
        }
      },
      maxFileCount: t,
      allowedExtensions: w
    }), [t, w, u]);
    let C = reactCoreLibraryReexport.useCallback(e => {
      var t;
      let {
        files: n
      } = e.clipboardData;
      let i = [...n];
      if (!isEmptyUtil.isEmpty(i)) {
        if (e != null && (t = e.preventDefault) !== null && t !== undefined) {
          t.call(e);
        }
        u(i, {
          from: "ai_slides_skill",
          uploadFrom: "upload_pinbutton",
          uploadWay: "paste"
        });
      }
    }, [u]);
    let {
      customTemplateUploadId: k
    } = aiPptTemplateStore_1.aiPptTemplateStore.getState();
    let S = n.findIndex(e => k === objectPathGetDefault.getObjectPathDefault(e, "localKey"));
    let E = {
      attachments: [...n],
      attachmentKeys: [...h],
      attachmentStates: [...c]
    };
    let T = [];
    if (S >= 0) {
      E.attachments.splice(S, 1);
      E.attachmentKeys.splice(S, 1);
      let e = E.attachmentStates.splice(S, 1);
      T = [{
        uri: e == null ? undefined : e[0].fileKey,
        name: e == null ? undefined : e[0].fileName
      }];
    }
    return {
      multiple: b,
      attachmentBlock: attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock(E),
      userTemplates: T,
      showAttachmentArea: y,
      attachmentStates: c,
      reuploadAttachment: d,
      attachmentAreaRef: g,
      deleteAttachment: p,
      dragUploadProps: x,
      onPasteHandler: C,
      clearAttachments: f,
      addNewAttachmentFiles: u
    };
  }
  require.d(exports, {
    useAiSlidesAttachment: function () {
      return b;
    }
  });
}