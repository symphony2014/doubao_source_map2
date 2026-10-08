// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useChatInputSubmit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 894787
         */
module.exports = function (module, exports, require) {
  var chatInputAiFeatureUtils = require("chat-input-ai-feature-utils") /*id: 458924*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatCanvasParamsHook = require("chat-canvas-params-hook") /*id: 818792*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var asyncInfraInputSubmit = require("async-infra-input-submit") /*id: 287774*/;
  var chatInputActionUtils = require("chat-input-action-utils") /*id: 678030*/;
  var asyncSkillChatInputCheck = require("async-skill-chat-input-check") /*id: 772791*/;
  var podcastGenerationTracker = require("podcast-generation-tracker") /*id: 749919*/;
  var checkPresetPromptIsAiFeature = require("check-preset-prompt-is-ai-feature") /*id: 806798*/;
  var skillChatInputStore = require("skill-chat-input-store") /*id: 355267*/;
  var chatInputModes = require("chat-input-modes") /*id: 141122*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var fileTypeCheckers = require("file-type-checkers") /*id: 412342*/;
  var asyncSkillChatInput_1_1 = require("async-skill-chat-input_1_1") /*id: 222126*/;
  var chatInputEventHandler = require("chat-input-event-handler") /*id: 144822*/;
  var chatMessageBuilders = require("chat-message-builders") /*id: 502721*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var attachmentToMessageBlockTransformer = require("attachment-to-message-block-transformer") /*id: 324654*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  var genericChatInputSubmitPipeline = require("generic-chat-input-submit-pipeline") /*id: 454419*/;
  let $ = async e => {
    var t;
    var s;
    var l;
    let {
      chatId: u,
      chatType: c,
      text: d,
      attachments: p,
      attachmentKeys: f,
      attachmentStates: h,
      source: $,
      templateSource: X = {
        prompt: "",
        templateId: "",
        source: chatCoreConstants.MessageActions.Original
      },
      activeSkill: Y,
      originalSendMessage: q,
      preGeneratedLocalMessageId: J,
      refContents: Q,
      refContentSource: ee,
      refContentInputSkill: et,
      trackMeta: en,
      presetPrompt: ei,
      presetPromptType: er,
      presetPromptExt: eo,
      reportParams: ea,
      enableSendOcrImage: es,
      enableImageVlm: el,
      openReadCanvas: eu,
      enableCodeSkillRelate: ec,
      chatNextEnablePipeline: ed
    } = e;
    let ep = async e => {
      await q(await chatInputEventHandler.onBeforeMessageSend(e));
    };
    let ef = chatConversationBotId.getConversationBotId(u);
    let eh = u;
    if (!ef) {
      let e = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
      if (e == null ? undefined : e.getBotIdToLocalConversationMap()?.[u]) {
        ef = u;
        eh = undefined;
      }
    }
    let em = Y == null ? undefined : (t = Y.skill_type) === null || t === undefined ? undefined : t.toString();
    let ev = await (async () => {
      var e;
      if (Y) {
        return {
          input_skill: JSON.stringify({
            skill_id: em,
            skill_type: Y.skill_type
          })
        };
      }
      if (et) {
        return {
          input_skill: et
        };
      }
      if (chatInputAiFeatureUtils.isValidAiFeature({
        presetPrompt: ei
      })) {
        return {
          input_skill: JSON.stringify({
            skill_id: chatAppEnums.SkillType.ReadPDF.toString(),
            skill_type: chatAppEnums.SkillType.ReadPDF
          })
        };
      }
      if (podcastGenerationTracker.shouldGeneratePodcast({
        presetPrompt: ei
      })) {
        return {
          input_skill: JSON.stringify({
            skill_id: chatAppEnums.SkillType.SkillAiPodcast.toString(),
            skill_type: chatAppEnums.SkillType.SkillAiPodcast
          })
        };
      }
      if (checkPresetPromptIsAiFeature.isPresetPromptAiFeature({
        presetPrompt: ei
      })) {
        return {
          input_skill: JSON.stringify({
            skill_id: chatAppEnums.SkillType.AIPPTSlides.toString(),
            skill_type: chatAppEnums.SkillType.AIPPTSlides
          })
        };
      } else if (asyncInfraInputSubmit.isDeepResearchPrompt({
        presetPrompt: ei
      })) {
        return {
          input_skill: JSON.stringify({
            skill_id: chatAppEnums.SkillType.SkillDeepResearch.toString(),
            skill_type: chatAppEnums.SkillType.SkillDeepResearch
          })
        };
      } else if (await ((e = skillChatInputStore.getChatInput()) === null || e === undefined ? undefined : e({
        refContents: Q
      }))) {
        return {
          input_skill: JSON.stringify({
            skill_id: chatAppEnums.SkillType.AIPPTSlides.toString(),
            skill_type: chatAppEnums.SkillType.AIPPTSlides
          })
        };
      }
    })();
    let eg = d.trim();
    let ey = !em && !podcastGenerationTracker.shouldGeneratePodcast({
      presetPrompt: ei
    }) || (Y == null ? undefined : Y.skill_type) === chatAppEnums.SkillType.ReadPDF;
    let e_ = !em || (Y == null ? undefined : Y.skill_type) === chatAppEnums.SkillType.CodeAssistant;
    let eb = (() => {
      let e = e_ && ec;
      if (p.length === 1) {
        return !!messageBoxTypeCheckers.isFileType(p[0]) && !!codeAssistantFileValidator.isAssistantFile(h[0].fileName) && !!e || !!messageBoxTypeCheckers.isLinkType(p[0]) && !!h.length && !!h[0].isRepo && !!e || !!messageBoxTypeCheckers.isDirectoryType(p[0]);
      }
      return !!h.length && !!h.every(e => e.type === "file" && codeAssistantFileValidator.isAssistantFile(e.fileName)) && !!e;
    })();
    let ew = (ev == null ? undefined : ev.input_skill) ? JSON.parse(ev == null ? undefined : ev.input_skill)?.skill_type : undefined;
    if (eb) {
      ew = aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant;
    }
    let eS = (() => {
      if (et && JSON.parse(et).template_key === "query_with_reference") {
        return {
          action: chatInputActionUtils.ChatInputActions.QueryWithReference
        };
      }
    })();
    let eE = (() => {
      if (!ei) {
        return;
      }
      let e = chatInputAiFeatureUtils.getFeatureCommand(ei);
      if (e) {
        return {
          action: chatInputActionUtils.ChatInputActions.Command,
          command: e.command
        };
      } else if (checkPresetPromptIsAiFeature.isPresetPromptAiFeature({
        presetPrompt: ei
      })) {
        return {
          action: chatInputModes.inputModes.Default
        };
      } else {
        return undefined;
      }
    })();
    let ex = await (async () => {
      var e;
      let t = await ((e = skillChatInputStore.getChatInput()) === null || e === undefined ? undefined : e({
        refContents: Q
      }));
      if (t) {
        return {
          action: chatInputModes.inputModes.Default,
          context: t
        };
      }
    })();
    let ek = skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON;
    if (await asyncSkillChatInputCheck.validateSkillInput(u, ew, c, p, Q)) {
      if (ed) {
        chatMessageBuilders.getPreGeneratedId(J);
        try {
          await asyncSkillChatInput_1_1.asyncSkillManager.run(genericChatInputSubmitPipeline.InputSubmitPipeline, {
            content: {
              chatId: u,
              localMessageId: J,
              presetPrompt: ei,
              extra: {
                ...eo
              },
              reportParams: {
                ...ea,
                new_guidance: "1",
                send_source: "guidance_page"
              }
            }
          });
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "submit_pipeline_error",
            error: e,
            meta: {
              scene: "generic_conversation_input_submit",
              chatId: u,
              localMessageId: J
            }
          });
          dbxSonnerToasterWrapper.dbxToastAPI.warning(i18nTranslationUtils.i18nextTranslate("system_error_toast"));
        }
        return;
      }
      let e = attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
        attachments: p,
        attachmentKeys: f,
        attachmentStates: h
      });
      let t = referenceBlockTransformer.transformReferences(Q);
      let n = chatTextBlockFactory.createTextBlock(eg);
      let i = conversationMessageUtils.assembleContentBlocks({
        attachmentBlock: e,
        textBlock: n,
        referenceBlocks: t
      });
      let r = {
        ...eS,
        ...eE,
        ...ex
      };
      let o = conversationMessageUtils.createMessageObject({
        conversation: conversationMessageUtils.parseConversationId(eh ?? ""),
        message: {
          content_blocks_v2: i,
          unique_id: J,
          ext: {
            ...eo,
            chat_ability: conversationMessageUtils.serializeAbilityData(ew, JSON.stringify(r))
          }
        }
      });
      chatMessageBuilders.getPreGeneratedId(J);
      let a = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
      if (a != null) {
        a.sendMessage({
          message: o,
          session: {
            reportParams: {
              ...ea,
              upload_from: (p ?? []).length > 0 ? ek : undefined,
              preset_prompt_type: er,
              skill_from: ew === aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant ? chatStatusActionTypes.chatActionTypes.FileUpload : undefined
            }
          }
        });
      }
      if (ey) {
        if (eu != null) {
          eu({
            skillType: Y == null ? undefined : Y.skill_type
          });
        }
      }
      return;
    }
    if (p.length === 1) {
      let e = p[0];
      if (messageBoxTypeCheckers.isImageType(e)) {
        let t = es ? chatMessageBuilders.processAttachments({
          text: eg,
          attachments: p,
          attachmentKeys: f,
          attachmentStates: h,
          enableImageVlm: el
        }, {
          preset_prompt_type: er,
          upload_from: ek,
          ...ea
        }) : chatMessageBuilders.createImageMessage(eg, e, {
          preset_prompt_type: er,
          upload_from: ek,
          ...ea
        });
        if (t) {
          await ep([{
            ...t,
            conversationId: t.conversationId ?? eh,
            preGeneratedLocalMessageId: J,
            extraExt: {
              ...(await chatMessageBuilders.getPreGeneratedId(J)),
              ...ev,
              ...eo
            }
          }]);
        }
      } else if (messageBoxTypeCheckers.isFileType(e) || messageBoxTypeCheckers.isRemoteType(e)) {
        if (messageBoxTypeCheckers.isFileType(e) && codeAssistantFileValidator.isAssistantFile(h[0].fileName) && e_ && ec) {
          let e = p.map((e, t) => {
            let n = h[t];
            let {
              file: i
            } = e;
            let {
              parseState: r,
              reviewState: o,
              fileName: a,
              md5: s,
              fileKey: l
            } = n;
            let u = f[t] || l;
            return {
              type: "file",
              key: u,
              localKey: "localKey" in e && e.localKey || "",
              file_parse_state: r,
              file_review_state: o,
              identifier: "localKey" in e ? e.localKey || "" : u,
              name: getObjectPathString.getObjectPathString("name")(i) || a,
              size: i == null ? undefined : i.size,
              md5: s
            };
          });
          await ep([{
            text: eg,
            sendAttachments: e,
            conversationId: eh,
            reportParams: {
              sec_scene: en == null ? undefined : en.sendMessageSecScene,
              preset_prompt_type: er,
              upload_from: ek,
              skill_from: chatStatusActionTypes.chatActionTypes.FileUpload,
              ...ea
            },
            extraExt: {
              useSamanthaChat: "true",
              input_skill: JSON.stringify({
                skill_id: aiChatEnumConstants.skillTypes.SkillCodeAssistant,
                skill_type: aiChatEnumConstants.skillTypes.SkillCodeAssistant
              }),
              ...eo
            }
          }]);
          return;
        }
        let t = chatMessageBuilders.processAttachments({
          text: eg,
          attachments: p,
          attachmentKeys: f,
          attachmentStates: h,
          enableImageVlm: el
        }, {
          preset_prompt_type: er,
          upload_from: ek,
          ...ea
        });
        if (t) {
          await ep([{
            ...t,
            conversationId: eh,
            preGeneratedLocalMessageId: J,
            extraExt: {
              ...(await chatMessageBuilders.getPreGeneratedId(J)),
              ...ev,
              ...eo
            }
          }]);
          if (ey) {
            if (eu != null) {
              eu({
                skillType: Y == null ? undefined : Y.skill_type
              });
            }
          }
        }
      } else if (messageBoxTypeCheckers.isLinkType(e)) {
        let t = h[0];
        if ((t == null ? undefined : t.isRepo) && e_ && ec) {
          let {
            id: n,
            source: i,
            language: r,
            ref: o,
            name: a
          } = t.repoInfo || {};
          let s = {
            key: n || e.localKey || "",
            localKey: "localKey" in e && e.localKey || "",
            type: "link",
            identifier: n,
            file_review_state: messagingConstants.reviewState.ReviewState_Access,
            name: a,
            url: "url" in e && e.url || "",
            extra: {
              repo_id: n,
              repo_name: a,
              source: `${i}`,
              language: r,
              ref: o
            }
          };
          await ep([{
            text: eg,
            sendAttachments: [s],
            conversationId: eh,
            reportParams: {
              sec_scene: en == null ? undefined : en.sendMessageSecScene,
              preset_prompt_type: er,
              upload_from: ek,
              skill_from: chatStatusActionTypes.chatActionTypes.FileUpload,
              ...ea
            },
            extraExt: {
              useSamanthaChat: "true",
              input_skill: JSON.stringify({
                skill_id: aiChatEnumConstants.skillTypes.SkillCodeAssistant,
                skill_type: aiChatEnumConstants.skillTypes.SkillCodeAssistant
              }),
              ...eo
            }
          }]);
        } else {
          await ep([{
            compositeContent: {
              text: eg,
              links: [e.url]
            },
            conversationId: eh,
            reportParams: {
              sec_scene: en == null ? undefined : en.sendMessageSecScene,
              preset_prompt_type: er,
              upload_from: ek,
              ...ea
            },
            extraExt: {
              ...ev,
              ...eo
            }
          }]);
          if (ey) {
            if (eu != null) {
              eu({
                skillType: Y == null ? undefined : Y.skill_type
              });
            }
          }
        }
      } else if (messageBoxTypeCheckers.isDirectoryType(e)) {
        let e = p.map((e, t) => {
          let {
            parseState: n,
            reviewState: i,
            fileKey: r
          } = h[t];
          let o = f[t] || r;
          return {
            type: "directory",
            key: o,
            localKey: "localKey" in e && e.localKey || "",
            file_parse_state: n,
            file_review_state: i,
            identifier: o,
            name: e.dirName
          };
        });
        await ep([{
          text: eg,
          sendAttachments: e,
          reportParams: {
            sec_scene: en == null ? undefined : en.sendMessageSecScene,
            preset_prompt_type: er,
            upload_from: ek,
            ...ea
          },
          extraExt: {
            useSamanthaChat: "true",
            input_skill: JSON.stringify({
              skill_id: aiChatEnumConstants.skillTypes.SkillCodeAssistant,
              skill_type: aiChatEnumConstants.skillTypes.SkillCodeAssistant
            }),
            ...eo
          }
        }]);
        return;
      } else if (eg) {
        await ep([{
          ...chatMessageBuilders.createTextMessage(eg, {
            content_source: $,
            content_source_template_id: X == null ? undefined : X.templateId,
            preset_prompt_type: er,
            ...ea
          }),
          conversationId: eh
        }]);
      }
    } else if (p.length === 0) {
      if (eg) {
        let e = {
          ...ev
        };
        let t = await chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService");
        if (Y) {
          if (t != null) {
            t.clearRefContents(u, {
              retainDisableRef: true
            });
          }
        }
        let n = ew === aiAssistantSkillTypes.SkillTypes.SkillDeepResearch;
        if (!Y && Q && fileTypeCheckers.isTextType(Q[0]) && ee !== chatAppEnums.SkillType.ReadPDF) {
          if (ee === chatAppEnums.SkillType.ReferenceAsk) {
            let n = Q[0].text;
            safePropertyAssignUtil.safePropertyAssign(e, {
              reference_content: JSON.stringify(Q),
              input_skill: JSON.stringify({
                skill_id: String(ee),
                skill_type: ee,
                template_key: "query_with_reference",
                variables: {
                  reference_text: n
                }
              })
            });
            if (t != null) {
              t.clearRefContents(u, {
                retainDisableRef: true
              });
            }
          } else if (n) {
            let n = Q[0].text;
            safePropertyAssignUtil.safePropertyAssign(e, {
              reference_content: JSON.stringify(Q),
              input_skill: JSON.stringify({
                skill_id: chatAppEnums.SkillType.SkillDeepResearch.toString(),
                skill_type: chatAppEnums.SkillType.SkillDeepResearch,
                template_key: "query_with_reference",
                variables: {
                  reference_text: n
                }
              })
            });
            if (t != null) {
              t.clearRefContents(u, {
                retainDisableRef: true
              });
            }
          }
        } else if (Q && !isEmptyUtil.isEmpty(Q)) {
          safePropertyAssignUtil.safePropertyAssign(e, {
            reference_content: JSON.stringify(Q)
          });
        }
        let i = Q == null ? undefined : (s = Q.filter(e => e.type === "attachment")) === null || s === undefined ? undefined : s.map(e => e.fileKey);
        let r = Q == null ? undefined : (l = Q.filter(e => e.type === "attachment")) === null || l === undefined ? undefined : l.map(e => e.fileName || "");
        let o = {
          sec_scene: en == null ? undefined : en.sendMessageSecScene,
          content_source: $,
          content_source_template_id: X == null ? undefined : X.templateId,
          preset_prompt_type: er,
          ...((i == null ? undefined : i.length) > 0 && (r == null ? undefined : r.length) > 0 ? {
            collection_id: (i == null ? undefined : i.length) === 1 ? i[0] : safeJsonUtils.safeStringify(i),
            collection_name: (r == null ? undefined : r.length) === 1 ? r[0] : safeJsonUtils.safeStringify(r)
          } : {}),
          ...ea
        };
        await ep([{
          ...(n ? asyncInfraInputSubmit.createResearchPayload(eg, o) : chatMessageBuilders.createTextMessage(eg, o)),
          conversationId: eh,
          extraExt: e
        }]);
      }
    } else {
      if (h.every(e => e.type === "file" && codeAssistantFileValidator.isAssistantFile(e.fileName)) && e_ && ec) {
        let e = p.map((e, t) => {
          let n = h[t];
          let {
            file: i
          } = e;
          let {
            parseState: r,
            reviewState: o,
            fileName: a,
            md5: s
          } = n;
          let l = f[t] || "";
          return {
            type: "file",
            key: l,
            localKey: "localKey" in e && e.localKey || "",
            file_parse_state: r,
            file_review_state: o,
            identifier: "localKey" in e ? e.localKey || "" : l,
            name: getObjectPathString.getObjectPathString("name")(i) || a,
            size: i == null ? undefined : i.size,
            md5: s
          };
        });
        await ep([{
          text: eg,
          sendAttachments: e,
          conversationId: eh,
          reportParams: {
            sec_scene: en == null ? undefined : en.sendMessageSecScene,
            preset_prompt_type: er,
            upload_from: ek,
            skill_from: chatStatusActionTypes.chatActionTypes.FileUpload,
            ...ea
          },
          extraExt: {
            useSamanthaChat: "true",
            input_skill: JSON.stringify({
              skill_id: aiChatEnumConstants.skillTypes.SkillCodeAssistant,
              skill_type: aiChatEnumConstants.skillTypes.SkillCodeAssistant
            }),
            ...eo
          }
        }]);
        return;
      }
      let e = chatMessageBuilders.processAttachments({
        text: eg,
        attachments: p,
        attachmentKeys: f,
        attachmentStates: h,
        enableImageVlm: el
      }, {
        preset_prompt_type: er,
        upload_from: ek,
        ...ea
      });
      if (e) {
        await ep([{
          ...e,
          conversationId: eh,
          preGeneratedLocalMessageId: J,
          extraExt: {
            ...(await chatMessageBuilders.getPreGeneratedId(J)),
            ...ev,
            ...eo
          }
        }]);
        if (ey) {
          if (eu != null) {
            eu({
              skillType: Y == null ? undefined : Y.skill_type
            });
          }
        }
      } else if (eg) {
        await ep([{
          ...chatMessageBuilders.createTextMessage(eg, {
            sec_scene: en == null ? undefined : en.sendMessageSecScene,
            content_source: $,
            content_source_template_id: X == null ? undefined : X.templateId,
            preset_prompt_type: er,
            ...ea
          }),
          conversationId: eh,
          extraExt: {
            ...ev
          }
        }]);
      }
    }
  };
  let X = e => {
    let {
      chatId: n,
      chatType: m,
      activeSkill: v,
      getTemplateSource: g,
      getPreGeneratedLocalMessageId: y,
      trackMeta: _,
      reportParams: b,
      sendReportParams: w,
      enableCodeSkillRelate: S,
      enableImageVlm: E,
      enableSendOcrImage: x,
      openReadCanvas: k,
      onResetValue: T,
      onAfterSubmit: P,
      onBeforeSubmit: C,
      chatNextEnablePipeline: O
    } = e;
    let N = useLatestCallbackHook_1.useLatestCallback(g);
    let I = useLatestCallbackHook_1.useLatestCallback(y);
    let A = useLatestCallbackHook_1.useLatestCallback(k);
    let R = useLatestCallbackHook_1.useLatestCallback(T);
    let j = useLatestCallbackHook_1.useLatestCallback(P);
    let M = useLatestCallbackHook_1.useLatestCallback(C);
    let L = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: n,
      skillType: v == null ? undefined : v.skill_type
    });
    let D = attachmentUploadStoreHooks.mapLocalKeys({
      chatId: n,
      skillType: v == null ? undefined : v.skill_type
    });
    let Z = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: n,
      skillType: v == null ? undefined : v.skill_type
    });
    let z = chatConversationSelectors.selectConvLink(n, m);
    let {
      sendMessage: U
    } = chatServiceContext.useChatService("chatMessageService") ?? {};
    let W = chatRefContentSelectors.useFilteredRefs(n);
    let F = chatCanvasParamsHook.useCanvasParams();
    let B = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e) {
        return {
          ...chatInputAiFeatureUtils.getFeatureCommand(e)
        };
      }
    });
    return {
      submit: async (e, t) => {
        if (!(await M())) {
          return;
        }
        let s = N == null ? undefined : N();
        let {
          source: l
        } = s ?? {
          source: chatCoreConstants.MessageActions.Original
        };
        if ((s == null ? undefined : s.source) === chatCoreConstants.MessageActions.UseTemplate && (s == null ? undefined : s.prompt) !== e) {
          l = chatCoreConstants.MessageActions.ChangeTemplate;
        }
        let u = t && B(t);
        let c = t && (chatInputAiFeatureConstants.featureActionNameMap[t] || e);
        await $({
          chatId: n,
          chatType: m,
          text: e,
          attachments: L,
          attachmentKeys: D,
          attachmentStates: Z,
          source: l,
          templateSource: s,
          activeSkill: v,
          originalSendMessage: U,
          isSamantha: z,
          preGeneratedLocalMessageId: (await (I == null ? undefined : I())) ?? "",
          refContents: (W == null ? undefined : W.refContents) ?? [],
          refContentSource: W == null ? undefined : W.source,
          refContentInputSkill: W == null ? undefined : W.inputSkill,
          trackMeta: _,
          presetPrompt: t,
          presetPromptType: c,
          presetPromptExt: u,
          reportParams: {
            ...b,
            scene: (b == null ? undefined : b.scene) ? b.scene : t && [chatInputAiFeatureConstants.AiFeatureType.ExpandAskSug, chatInputAiFeatureConstants.AiFeatureType.ExplainAskSug, chatInputAiFeatureConstants.AiFeatureType.DeepResearchAskSug].includes(t) ? "cite_suggest" : t ? "input_sug_prompts" : (W == null ? undefined : W.scene) ? W == null ? undefined : W.scene : "keyboard",
            upload_collection_way: (Z == null ? undefined : Z.length) ? Z.length > 1 ? "multi" : "single" : undefined,
            upload_file_type: (Z == null ? undefined : Z.length) > 0 ? fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(Z[0].fileName)) : undefined,
            ...(W == null ? undefined : W.reportParams),
            ...F,
            ...w
          },
          enableSendOcrImage: x,
          enableImageVlm: E,
          openReadCanvas: A,
          enableCodeSkillRelate: S,
          chatNextEnablePipeline: O
        });
        if (R != null) {
          R();
        }
        await (j == null ? undefined : j({
          presetPrompt: t,
          attachments: L
        }));
      }
    };
  };
  require.d(exports, {
    useChatInputSubmit: function () {
      return X;
    }
  });
}