// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'useChatInputHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 398892
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var supportedFileExtensionsUtility = require("supported-file-extensions-utility") /*id: 79808*/;
  var chatFileUploadHook = require("chat-file-upload-hook") /*id: 541666*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var useCleanupOnUnmount = require("use-cleanup-on-unmount") /*id: 942235*/;
  var inputKeyCheckers = require("input-key-checkers") /*id: 415984*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var chatAttachmentUploadHook = require("chat-attachment-upload-hook") /*id: 357212*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatMessageBuilders = require("chat-message-builders") /*id: 502721*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let $ = e => {
    let {
      chatId: r,
      getPreGeneratedLocalMessageId: n,
      trackMeta: i,
      reportParams: l = {},
      sendReportParams: a,
      enableImageVlm: o,
      onResetValue: s,
      onAfterSubmit: u,
      attachmentKeys: c,
      attachments: d,
      attachmentStates: p
    } = e;
    let f = useLatestCallbackHook_1.useLatestCallback(n);
    let m = useLatestCallbackHook_1.useLatestCallback(s);
    let g = chatRefContentSelectors.useFilteredRefs(r);
    let {
      sendMessage: v
    } = chatServiceContext.useChatService("chatMessageService") ?? {};
    return {
      submit: async (e, t) => {
        var y;
        var w;
        if (m != null) {
          m();
        }
        let k = (l == null ? undefined : l.scene) ?? (g == null ? undefined : g.scene) ?? "keyboard";
        let x = (g == null ? undefined : g.refContents) ?? [];
        let C = chatCoreConstants.MessageActions.Original;
        let j = (await f()) ?? "";
        let $ = {
          ...l,
          scene: k,
          upload_collection_way: (p == null ? undefined : p.length) ? p.length > 1 ? "multi" : "single" : undefined,
          upload_file_type: (p == null ? undefined : p.length) > 0 ? fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(p[0].fileName)) : undefined,
          ...(g == null ? undefined : g.reportParams),
          ...a
        };
        let I = async e => {
          await v(e);
        };
        let D = chatConversationBotId.getConversationBotId(r);
        let Z = r;
        if (!D && chatSkillPinTypeDeterminer.getBotLocalConversation(r)) {
          D = r;
          Z = undefined;
        }
        let F = skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON;
        let z = {
          input_skill: JSON.stringify({
            skill_id: chatAppEnums.SkillType.DesExtSkillSuperTask.toString(),
            skill_type: chatAppEnums.SkillType.DesExtSkillSuperTask
          })
        };
        if (d.length === 0) {
          if (e) {
            let t = {
              ...z
            };
            safePropertyAssignUtil.safePropertyAssign(t, {
              reference_content: JSON.stringify(x)
            });
            let r = x == null ? undefined : (y = x.filter(e => e.type === "attachment")) === null || y === undefined ? undefined : y.map(e => e.fileKey);
            let n = x == null ? undefined : (w = x.filter(e => e.type === "attachment")) === null || w === undefined ? undefined : w.map(e => e.fileName || "");
            await I([{
              ...chatMessageBuilders.createTextMessage(e, {
                sec_scene: i == null ? undefined : i.sendMessageSecScene,
                content_source: C,
                ...((r == null ? undefined : r.length) > 0 && (n == null ? undefined : n.length) > 0 ? {
                  collection_id: (r == null ? undefined : r.length) === 1 ? r[0] : safeJsonUtils.safeStringify(r),
                  collection_name: (n == null ? undefined : n.length) === 1 ? n[0] : safeJsonUtils.safeStringify(n)
                } : {}),
                ...$
              }),
              conversationId: Z,
              extraExt: t
            }]);
          }
        } else {
          let t = chatMessageBuilders.processAttachments({
            text: e,
            attachments: d,
            attachmentKeys: c,
            attachmentStates: p,
            enableImageVlm: o
          }, {
            upload_from: F,
            ...$
          });
          if (t) {
            await I([{
              ...t,
              conversationId: Z,
              preGeneratedLocalMessageId: j,
              extraExt: {
                ...(await chatMessageBuilders.getPreGeneratedId(j)),
                ...z
              }
            }]);
          } else if (e) {
            await I([{
              ...chatMessageBuilders.createTextMessage(e, {
                sec_scene: i == null ? undefined : i.sendMessageSecScene,
                content_source: C,
                ...$
              }),
              conversationId: Z,
              extraExt: {
                ...z
              }
            }]);
          }
        }
        await (u == null ? undefined : u());
      }
    };
  };
  var useAttachmentHookUtils = require("use-attachment-hook-utils") /*id: 664800*/;
  let D = e => {
    let {
      chatId: S = "",
      chatType: T,
      reportParams: R = {},
      trackParams: C = {},
      withGenericAttachments: E,
      onAfterSendMessage: P
    } = e;
    let N = chatAppEnums.SkillType.DesExtSkillSuperTask;
    let A = reactCoreLibraryReexport.useRef(null);
    let [j, M] = reactCoreLibraryReexport.useState({
      data: []
    });
    let W = reactCoreLibraryReexport.useCallback(e => {
      M(isStringTypeCheck.isString(e) ? {
        data: [{
          type: chatFieldTypes.getFieldTypes.Text,
          text: e
        }]
      } : e);
    }, []);
    let D = () => W({
      data: []
    });
    let Z = inputToolConverter.extractText(j.data) || "";
    let {
      attachmentCanSend: F,
      attachmentStates: z,
      attachmentKeys: O,
      attachments: L,
      updatePreGeneratedLocalMessageId: B,
      deleteAttachment: H,
      clearAllAttachments: U,
      reuploadAttachment: V
    } = useAttachmentHookUtils.useAttachmentHookUtils(S, E);
    let {
      uploadMultiEntityConf: X,
      enableImageVlm: G
    } = attachmentUploadStoreHooks.getUploadConfig();
    let Q = async () => {
      await U({});
      await B();
    };
    reactCoreLibraryReexport.useEffect(() => {
      chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(S, N, chatStatusActionTypes.chatActionTypes.ClickSkill);
    }, [S]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      Q();
    }, [S]);
    let K = async () => {
      if (P != null) {
        P({
          exitSkill: false
        });
      }
      await B();
      await U({});
    };
    let J = () => {
      Q();
    };
    let Y = !isEmptyUtil.isEmpty(z);
    let q = z.some(e => e.uploadWay === "screenshot");
    let ee = reactCoreLibraryReexport.useRef(null);
    let et = () => {
      var e;
      var t;
      if ((t = ee.current) !== null && t !== undefined && (e = t.scrollToBottom) !== null && e !== undefined) {
        e.call(t);
      }
    };
    let er = supportedFileExtensionsUtility.getSupportedFileExtensions(true);
    let en = chatFileUploadHook.useFileExtensionCheck();
    let {
      submit: ei
    } = $({
      chatId: S ?? "",
      chatType: T,
      onResetValue: D,
      enableImageVlm: G,
      reportParams: R,
      sendReportParams: {
        is_long_file: 0,
        new_guidance: "1",
        _screen_shot: +!!q
      },
      onAfterSubmit: K,
      attachmentKeys: O,
      attachments: L,
      attachmentStates: z
    });
    let {
      uploadFiles: el
    } = chatAttachmentUploadHook.useChatAttachmentUpload({
      attachmentStates: z
    });
    let {
      chatInputRef: ea
    } = chatRefsContext.useChatRefs();
    reactCoreLibraryReexport.useImperativeHandle(ea, () => ({
      focus: () => {
        var e;
        if ((e = A.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.focus();
        }
      },
      blur: () => {
        var e;
        if ((e = A.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.blur();
        }
      },
      setSkillMoreVisible: emptyExportFunction.emptyFunction,
      getText: () => Z,
      setText: e => W(e),
      clear: () => {
        D();
        J();
      },
      attachmentAreaScrollToBottom: () => et == null ? undefined : et(),
      submit: (e, t) => t && ei(t)
    }));
    let eo = Z.trim() === "";
    let es = async (e, t) => {
      let {
        uploadWay: r
      } = t;
      await el(e, {
        from: "upload_pinbutton",
        uploadWay: r
      });
    };
    let eu = async () => {
      let e = Z.trim();
      if (e) {
        await ei(e);
      }
    };
    useCleanupOnUnmount.useCleanupOnUnmount({
      resetFn: D
    });
    let ec = chatRefContentSelectors.useRefContent(S || "")?.refContents || [];
    let ed = !Y && !isEmptyUtil.isEmpty(ec);
    return {
      editorRef: A,
      refContents: ec,
      enableRefContents: ed,
      attachmentStates: z,
      enableAttachmentArea: Y,
      attachmentAreaRef: ee,
      attachmentAreaScrollToBottom: et,
      attachmentCanSend: F,
      reuploadAttachment: V,
      deleteAttachment: H,
      maxFileCount: (X == null ? undefined : X.maxFileCount) ?? 1,
      uploadSupportedFileTypes: er,
      handleKeyDown: e => {
        if (inputKeyCheckers.isEnterKey(e)) {
          if (!userAgentDeviceDetector.isMobileOrIOS()) {
            e.preventDefault();
          }
          eu();
        }
      },
      handleInputChange: e => {
        W(e);
      },
      handlePaste: e => {
        var t;
        let {
          files: r
        } = e.clipboardData;
        let n = [...r].filter(e => en(e));
        if (!isEmptyUtil.isEmpty(n)) {
          teaAnalyticsEventTracker.trackEvent("pin_button_click", {
            ...C,
            upload_method: "paste",
            click_from: "super-task"
          });
          if (e != null && (t = e.preventDefault) !== null && t !== undefined) {
            t.call(e);
          }
          es(n, {
            uploadWay: "paste"
          });
        }
      },
      disableToSend: eo || !F,
      editorValue: j,
      editorValueStr: Z,
      handleSubmitFiles: es,
      handleSubmit: eu,
      setEditorValue: W,
      closeEvent: e => {
        D();
        chatSkillExitEventTracker.trackSkillExitEvent({
          exitScene: e,
          trackParams: C
        });
      }
    };
  };
  require.d(exports, {
    useChatInputHook: function () {
      return D;
    }
  });
}