// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useSkillGuidanceInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 78769
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var uploadAttachmentAnalytics = require("upload-attachment-analytics") /*id: 324806*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  let v = () => {
    let t = document?.activeElement;
    if (t && "blur" in t && isFunctionUtil_1.isFunction(t.blur)) {
      t.blur();
    }
  };
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  let g = e => {
    let {
      payload: t,
      skillId: n,
      skillType: i,
      refContents: l,
      uploadFrom: a,
      presetPromptType: o,
      reportParams: u
    } = e;
    let d = l ? messageBoxTypeCheckers.filterEnabledRefs(l) : l;
    return [{
      ...t,
      extraExt: {
        ...t.extraExt,
        input_skill: JSON.stringify({
          skill_id: n,
          skill_type: i
        }),
        ...(isEmptyUtil.isEmpty(d) ? {} : {
          reference_content: JSON.stringify(d)
        })
      },
      reportParams: {
        from: "",
        sec_scene: skillTypeMappings.getSkillActionClass(i),
        upload_from: a,
        scene: "chat_action_bar",
        preset_prompt_type: o,
        ...aiSpaceQuoteUtils.formatQuoteInfo(l == null ? undefined : l[0]),
        ...u
      }
    }];
  };
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  let k = (e, t, n) => {
    let {
      sendMessage: i
    } = chatServiceContext.useChatService("chatMessageService");
    return (r, l, o, u) => i(g({
      payload: {
        text: r,
        nestedItems: l.map(e => {
          if (e.type === "link" || e.type === "remote") {
            return;
          }
          let t = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[e.localKey];
          if (!t) {
            return;
          }
          let n = {
            type: contentTypeEnums.resourceType.File,
            fileKey: t.key || t.localKey,
            fileName: getObjectPathString.getObjectPathString("name")(t.file),
            size: t.file.size,
            identifier: t.localKey,
            parseState: t.parseState,
            reviewState: t.reviewState,
            md5: t.md5,
            localKey: e.localKey
          };
          if (messageBoxTypeCheckers.isImageType(e)) {
            return {
              ...n,
              type: contentTypeEnums.resourceType.File,
              fileType: contentTypeEnums.mediaType.OCRImage,
              image: {
                key: t.key || t.localKey
              }
            };
          } else {
            return {
              ...n,
              type: contentTypeEnums.resourceType.File,
              fileType: contentTypeEnums.mediaType.File
            };
          }
        }).filter(Boolean),
        preGeneratedLocalMessageId: o
      },
      presetPromptType: u,
      skillId: e,
      skillType: t,
      reportParams: n
    }));
  };
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  let b = (e, t, n) => {
    let {
      sendMessage: i
    } = chatServiceContext.useChatService("chatMessageService");
    return (r, l, a, o) => {
      if (l.type === "link") {
        return i(g({
          payload: {
            compositeContent: {
              text: r,
              links: [l.url]
            },
            preGeneratedLocalMessageId: a
          },
          reportParams: n,
          presetPromptType: o,
          uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE,
          skillId: e,
          skillType: t
        }));
      }
      if (l.type === "remote") {
        return i(g({
          payload: {
            compositeContent: {
              text: r,
              files: [{
                file_name: l.fileName,
                key: l.key,
                from: ""
              }]
            }
          },
          reportParams: n,
          presetPromptType: o,
          uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE,
          skillId: e,
          skillType: t
        }));
      }
      let u = {
        blob: l.file,
        local_key: l.localKey,
        from: l.from
      };
      let d = messageBoxTypeCheckers.isImageType(l) ? {
        images: [u]
      } : messageBoxTypeCheckers.isFileType(l) ? {
        files: [u]
      } : undefined;
      if (d) {
        return i(g({
          payload: {
            compositeContent: {
              text: r,
              ...d
            },
            preGeneratedLocalMessageId: a
          },
          reportParams: n,
          presetPromptType: o,
          uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_CI_UPLOAD,
          skillId: e,
          skillType: t
        }));
      }
    };
  };
  var asyncSkillChatInputStore = require("async-skill-chat-input-store") /*id: 727801*/;
  let S = e => {
    var t;
    let {
      value: n,
      skill: m,
      attachmentStates: h,
      attachments: _,
      attachmentCanSend: y,
      clearAttachments: w,
      getPreGeneratedLocalMessageId: S,
      updatePreGeneratedLocalMessageId: C,
      onBeforeSendMessage: E,
      onAfterSendMessage: T,
      trackParams: R,
      reportParams: P
    } = e;
    let N = ((t = m.skill_type) === null || t === undefined ? undefined : t.toString()) || "";
    let j = m.skill_type || 0;
    let {
      sendMessage: I
    } = chatServiceContext.useChatService("chatMessageService");
    let M = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let D = chatRefContentSelectors.useRefContent(M || "");
    let Z = (D == null ? undefined : D.channel) === `skill_${N}` ? D.refContents : [];
    let $ = !isEmptyUtil.isEmpty(h) && y;
    let O = !!n.trim() && isEmptyUtil.isEmpty(h);
    let A = b(N, j, P);
    let B = k(N, j, P);
    let F = () => {
      if (userAgentDeviceDetector.isMobileOrIOS()) {
        v();
      }
    };
    let W = async e => {
      await (C == null ? undefined : C());
      await (w == null ? undefined : w({}));
      await (C == null ? undefined : C());
      asyncSkillChatInputStore.chatInputStore.getState().updatePromptEditorValue("");
      if (e && !isEmptyUtil.isEmpty(e) && M) {
        let t = e.map(e => {
          if (messageBoxTypeCheckers.isImageType(e) || messageBoxTypeCheckers.isFileType(e)) {
            let n = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[e.localKey]?.key;
            let i = getObjectPathString.getObjectPathString("name")(e.file);
            if (n && M) {
              return {
                type: "attachment",
                fileKey: n,
                fileName: i
              };
            }
          }
        }).filter(Boolean);
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.setRefContents({
              refContents: t,
              channel: `skill_${N}`
            }, M);
          }
        });
      }
      let t = uploadAttachmentAnalytics.getUploadAnalytics({
        attachmentStates: h
      });
      teaAnalyticsEventTracker.trackEvent("skill_module_click_arrow", {
        ...R,
        ...t,
        upload_token_length: ""
      });
    };
    let L = reactCoreLibraryReexport.useCallback(() => {
      asyncSkillChatInputStore.chatInputStore.getState().updateGuidanceEditorValue({
        data: []
      });
    }, []);
    let V = async e => {
      F();
      if (await (E == null ? undefined : E())) {
        if (e.length === 1 && messageBoxTypeCheckers.isLinkType(e[0])) {
          A("", e[0], await S());
        } else {
          B("", e, await S());
        }
        W(e);
        if (T != null) {
          T({
            exitSkill: false
          });
        }
      }
    };
    let U = async (e, t) => {
      F();
      if (await (E == null ? undefined : E())) {
        if (t.length === 1 && messageBoxTypeCheckers.isLinkType(t[0])) {
          A(e, t[0], await S());
        } else {
          B(e, t, await S());
        }
        L();
        W(t);
        if (T != null) {
          T({
            exitSkill: false
          });
        }
      }
    };
    let z = async e => {
      F();
      if (await (E == null ? undefined : E())) {
        I(g({
          payload: {
            text: e,
            preGeneratedLocalMessageId: await S()
          },
          skillId: N,
          skillType: j,
          refContents: Z,
          reportParams: P
        }));
        L();
        W(undefined);
        if (T != null) {
          T({
            exitSkill: false
          });
        }
      }
    };
    return {
      trySubmit: e => $ ? e ? U(e, _) : V(_) : O ? z(e) : undefined,
      canSubmitWithAttachment: $,
      canSubmitOnlyPrompt: O
    };
  };
  require.d(exports, {
    useSkillGuidanceInput: function () {
      return S;
    }
  });
}