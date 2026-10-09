// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'useCodingSkillChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 793978
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var initializeModuleInstance = require("initialize-module-instance") /*id: 233913*/;
  var chatInputConstants = require("chat-input-constants") /*id: 918547*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  let k = function (e, t = deepEqualityUtil.deepEqual) {
    let n = function () {
      var n = arguments.length;
      var i = Array(n);
      var a = 0;
      for (; a < n; a++) {
        i[a] = arguments[a];
      }
      return codingSkillStoreModule.codingSkillStore(t => e(t, ...i), t);
    };
    n.raw = e;
    return n;
  };
  let E = k(e => e.editorValue);
  k(e => e.focused);
  var codingSkillChatInput_3 = require("coding-skill-chat-input_3") /*id: 117608*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var attachmentToMessageBlockTransformer = require("attachment-to-message-block-transformer") /*id: 324654*/;
  var chatCanvasParamsHook = require("chat-canvas-params-hook") /*id: 818792*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var codingSkillChatInputPayloadFormatter = require("coding-skill-chat-input-payload-formatter") /*id: 485882*/;
  var artifactMetaProcessorUtils = require("artifact-meta-processor-utils") /*id: 686064*/;
  var codingSkillChatUtils_1 = require("coding-skill-chat-utils_1") /*id: 269786*/;
  var asyncSkillConstants = require("async-skill-constants") /*id: 292316*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  let J = (e, t, n) => {
    let {
      sendMessage: i
    } = chatServiceContext.useChatService("chatMessageService");
    return (a, o, r, l) => {
      let d = o.map(e => {
        let r;
        let l = e.type === "directory" ? chatStoreManager.getStore("attachmentUploadStore").getState().preprocessDirTaskMap[e.localKey] : chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap["localKey" in e && e.localKey || ""];
        if (!l) {
          return;
        }
        let d = "localKey" in e ? e.localKey : "";
        let c = {
          key: l.key,
          localKey: d
        };
        if ("isRepo" in l && l.isRepo) {
          let {
            id: i,
            source: a,
            language: o,
            ref: s,
            name: d
          } = l.repoInfo || {};
          r = {
            type: "link",
            identifier: l.repoInfo?.id,
            file_review_state: messagingConstants.reviewState.ReviewState_Access,
            name: l.repoInfo?.name,
            url: "url" in e && e.url || "",
            extra: {
              repo_id: i,
              repo_name: d,
              source: `${a}`,
              language: o,
              ref: s
            }
          };
        }
        if (e.type === "image") {
          r = {
            type: chatCoreConstants.ContentTypes.Image,
            file_parse_state: l.parseState || messagingConstants.parseState.ParseState_Processing,
            file_review_state: l.reviewState || messagingConstants.reviewState.ReviewState_Processing,
            identifier: d,
            key: l.key,
            name: l.file.name,
            option: {
              height: l.uploadResult?.ImageHeight,
              width: l.uploadResult?.ImageWidth
            },
            md5: l.md5,
            ...(e.extra ? {
              extra: e.extra
            } : {})
          };
        }
        if (e.type === "file" && "file" in l) {
          r = {
            type: "file",
            file_parse_state: l.parseState,
            file_review_state: l.reviewState,
            identifier: d,
            name: getObjectPathString.getObjectPathString("name")(l.file),
            url: l.blobUrl,
            size: l.file?.size,
            md5: l.md5
          };
        }
        if (e.type === "directory") {
          r = {
            type: "directory",
            file_parse_state: l.parseState,
            file_review_state: l.reviewState,
            identifier: l.key,
            name: e.dirName
          };
        }
        return {
          ...c,
          ...r
        };
      });
      return i(codingSkillChatInputPayloadFormatter.formatChatInputPayload({
        payload: {
          text: a,
          sendAttachments: d,
          preGeneratedLocalMessageId: l,
          extraExt: n
        },
        skillId: e,
        skillType: t,
        reportParams: r
      }));
    };
  };
  let X = e => {
    let {
      attachmentStates: t,
      attachmentKeys: n,
      attachmentCanSend: a,
      attachments: o,
      clearAttachments: r,
      skillId: l,
      skillType: c,
      chatId: u,
      conversationId: h,
      isNewThread: m,
      reportParams: f,
      extraContents: v,
      attachmentExtraContents: g,
      editorValue: b,
      setEditorValue: y,
      uploadedFileType: C,
      updatePreGeneratedLocalMessageId: k,
      getPreGeneratedLocalMessageId: E,
      refContents: K,
      promptTemplate: X,
      promptTemplateSource: q,
      onBeforeSendMessage: Y,
      onAfterSendMessage: Q
    } = e;
    let {
      sendMessage: ee
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      isDevMode: et
    } = codingSkillChatInput_3.useCodingChatInput();
    let en = reactCoreLibraryReexport.useMemo(() => t.length > 0 && t.every(e => e.type === "image"), [t]);
    let ei = reactCoreLibraryReexport.useMemo(() => t.length > 0 && t.every(e => {
      let {
        fileName: t
      } = e;
      return attachmentProcessingUtils.isSpreadsheetOrCsv(t);
    }), [t]);
    let ea = !isEmptyUtil.isEmpty(t) && a && (!!(t == null ? undefined : t.every(e => messageBoxTypeCheckers.isNormalStatus(e.status))) || en);
    let eo = isEmptyUtil.isEmpty(t) && inputToolConverter.extractText(b.data).trim() !== "";
    let er = chatCanvasParamsHook.useCanvasParams();
    let el = chatGuidanceSelectors.hasActiveSkill();
    let es = () => {
      if (X) {
        return {
          prompt_type: "default_prompt",
          default_prompt_type: "ai_code",
          use_prompt_template_method: q,
          ai_code_template_id: X.key,
          ai_code_template_name: X.name
        };
      }
    };
    let ed = J(l, c, ei ? {
      answer_with_suggest: "0"
    } : g);
    let ec = reactFunctionMemoHook.useMemoizedCallback(() => inputToolConverter.extractText(b.data, {
      stringifyItem: e => {
        if (e.type === chatFieldTypes.getFieldTypes.Select) {
          return "「" + e.value + "」";
        }
      }
    }));
    let eu = () => {
      if (((K == null ? undefined : K.length) || 0) > 0) {
        let e = [];
        let t = [];
        let n = {};
        if (K != null) {
          K.forEach(i => {
            if ("fileKey" in i) {
              e.push(i.fileKey || "");
              t.push(i.fileName || "");
            } else if ("identifier" in i) {
              e.push(i.identifier || "");
              t.push(i.fileName || "");
            }
            if (i.type === "text") {
              let e = (i == null ? undefined : i.extra?.context_variables) ?? "{}";
              try {
                let t = JSON.parse(e);
                Object.assign(n, t);
              } catch (e) {}
            }
          });
        }
        if ((e == null ? undefined : e.length) === 0) {
          return {};
        } else {
          return {
            collection_id: (e == null ? undefined : e.length) === 1 ? e[0] : safeJsonUtils.safeStringify(e),
            collection_name: (t == null ? undefined : t.length) === 1 ? t[0] : safeJsonUtils.safeStringify(t),
            select_range: JSON.stringify((n == null ? undefined : n.select_range) || {
              start_column: 0,
              end_column: 0
            }),
            select_content: (n == null ? undefined : n.select_content) || "",
            user_select_code: (n == null ? undefined : n.user_select_code) || ""
          };
        }
      }
      return {};
    };
    let ep = e => {
      let t = {
        from: "",
        sec_scene: skillTypeMappings.getSkillActionClass(c),
        scene: el ? "sidebar_skill_click" : "chat_action_bar",
        ...er,
        ...eu(),
        ...es(),
        ...f
      };
      if (C) {
        t.upload_from = C === asyncSkillConstants.resourceType.REPO ? skillConstantsEnum.UploadSource.UPLOAD_FROM_PULL_CODE : skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON;
      }
      if (e === "default_prompt") {
        t.preset_prompt_type = "default_prompt";
      }
      return t;
    };
    let eh = async (e, i) => {
      let a = attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
        attachments: o,
        attachmentKeys: n,
        attachmentStates: t
      });
      let r = ep(i);
      let l = [];
      if (e) {
        let t = chatTextBlockFactory.createTextBlock(e);
        l = conversationMessageUtils.assembleContentBlocks({
          attachmentBlock: a,
          textBlock: t,
          referenceBlocks: []
        });
      } else {
        l = conversationMessageUtils.assembleContentBlocks({
          attachmentBlock: a,
          referenceBlocks: []
        });
      }
      let s = conversationMessageUtils.createMessageObject({
        conversation: conversationMessageUtils.parseConversationId(h ?? ""),
        message: {
          content_blocks_v2: l,
          ext: {
            chat_ability: conversationMessageUtils.serializeAbilityData(c, "")
          }
        }
      });
      let u = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
      if (u != null) {
        u.sendMessage({
          message: s,
          session: {
            reportParams: r
          }
        });
      }
    };
    let em = async () => {
      let t = true;
      if (userAgentDeviceDetector.isMobileOrIOS()) {
        codingSkillChatUtils_1.blurActiveElement();
      }
      let n = Object.values(codingSkillStoreModule.codingSkillStore === null || codingSkillStoreModule.codingSkillStore === undefined ? undefined : codingSkillStoreModule.codingSkillStore.getState()?.clarifyDebounceSavePromiseMap).map(e => {
        e.flush();
        return e.promise;
      });
      await Promise.all(n).catch(() => {
        t = false;
      });
      return t;
    };
    let ef = async () => {
      await r({});
      y({
        data: []
      });
      k();
    };
    let e_ = async () => {
      let e = true;
      let n = "";
      if (o && !isEmptyUtil.isEmpty(o) && u) {
        let e = o.map(e => {
          if ("file" in e && e.file && "localKey" in e && e.localKey) {
            let n = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[e.localKey]?.key;
            let i = getObjectPathString.getObjectPathString("name")(e.file);
            if (n && u && attachmentProcessingUtils.isSpreadsheetOrCsv(i)) {
              return {
                type: "attachment",
                fileKey: n,
                fileName: i
              };
            }
          }
        }).filter(Boolean);
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(t => {
          if (t != null) {
            t.setRefContents({
              refContents: e,
              channel: `skill_${l}`
            }, u);
          }
        });
      }
      if (!en && !ei) {
        if (o.length === 1) {
          let i = t[0];
          n = (i == null ? undefined : i.fileKey) || "";
          e = (i == null ? undefined : i.reviewState) !== messagingConstants.reviewState.ReviewState_NotCompliant;
        }
        if (o.length > 1) {
          e = t.every(e => e.type === "file" && e.reviewState !== messagingConstants.reviewState.ReviewState_NotCompliant);
          n = t[0]?.fileKey || "";
        }
        if (e) {
          let e = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
          if (e != null) {
            e.openCanvasPanel({
              messageId: await E(),
              conversationId: h || u,
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
              fileKey: n,
              attachments: t,
              isCodeFile: true,
              chatId: m ? h : u
            });
          }
        }
      }
    };
    let ev = async (e, t, n) => {
      if ((await em()) !== false && (await (Y == null ? undefined : Y({
        clearRefContent: false,
        checkNewGuidanceAb: false
      }))) !== false) {
        if (!ei && (await artifactMetaProcessorUtils.shouldProcessArtifact())) {
          eh(e, n);
        } else {
          await ed(e, t, ep(n), await E());
        }
        await e_();
        await ef();
        if (Q != null) {
          Q({
            exitSkill: false
          });
        }
      }
    };
    let eg = () => (K == null ? undefined : K.length) !== 0 && (K == null ? undefined : K.every(e => "fileName" in e && (e == null ? undefined : e.fileName) && attachmentProcessingUtils.isSpreadsheetOrCsv(e.fileName)));
    let eb = async (e, i) => {
      if ((await em()) === false || (await (Y == null ? undefined : Y({
        clearRefContent: false,
        checkNewGuidanceAb: false
      }))) === false) {
        return;
      }
      let a = eg() || et ? {
        answer_with_suggest: "0"
      } : undefined;
      let r = ep(i);
      if (await artifactMetaProcessorUtils.shouldProcessArtifact()) {
        let i;
        let l = attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
          attachments: o,
          attachmentKeys: n,
          attachmentStates: t
        });
        let s = K || [];
        let {
          reference_content: u,
          ...p
        } = v || a ? {
          ...v,
          ...a
        } : {};
        let m = typeof u == "string" ? u : "";
        if (m) {
          let e = JSON.parse(m);
          i = [];
          e.forEach(e => {
            if ("extra" in e && e.extra?.context_variables) {
              if (i != null) {
                i.push(e.extra.context_variables);
              }
            }
            if (e.text) {
              s.push({
                type: "text",
                text: e.text
              });
            }
          });
        }
        let f = referenceBlockTransformer.transformReferences(s);
        let _ = chatTextBlockFactory.createTextBlock(e);
        let g = conversationMessageUtils.assembleContentBlocks({
          attachmentBlock: l,
          textBlock: _,
          referenceBlocks: f
        });
        let b = conversationMessageUtils.createMessageObject({
          conversation: conversationMessageUtils.parseConversationId(h ?? ""),
          message: {
            content_blocks_v2: g,
            ext: {
              ...p,
              chat_ability: conversationMessageUtils.serializeAbilityData(c, i && (i == null ? undefined : i.length) ? i[0] : "")
            }
          }
        });
        let y = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
        if (y != null) {
          y.sendMessage({
            message: b,
            session: {
              reportParams: r
            }
          });
        }
      } else {
        await ee(codingSkillChatInputPayloadFormatter.formatChatInputPayload({
          payload: {
            text: e,
            preGeneratedLocalMessageId: await E(),
            reportParams: {
              scene: ""
            },
            ...((v || a) && {
              extraExt: {
                ...v,
                ...a
              }
            })
          },
          skillId: l,
          skillType: c,
          refContents: K,
          reportParams: r
        }));
      }
      ef();
      if (Q != null) {
        Q({
          exitSkill: false
        });
      }
    };
    let ey = async e => {
      if ((await em()) !== false && (await (Y == null ? undefined : Y({
        clearRefContent: false,
        checkNewGuidanceAb: false
      }))) !== false) {
        if (!ei && (await artifactMetaProcessorUtils.shouldProcessArtifact())) {
          eh("", "");
        } else {
          await ed("", e, ep(), await E());
        }
        await e_();
        await ef();
        if (Q != null) {
          Q({
            exitSkill: false
          });
        }
      }
    };
    return {
      submit: function () {
        var e;
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (e = ec()) === null || e === undefined ? undefined : e.trim();
        let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "customized_prompt";
        if (ea) {
          if (t) {
            return ev(t, o, n);
          } else {
            return ey(o);
          }
        } else if (eo) {
          return eb(t, n);
        } else {
          return undefined;
        }
      },
      canSubmitOnlyPrompt: eo,
      canSubmitWithAttachment: ea
    };
  };
  var chatSkillRefContentHook = require("chat-skill-ref-content-hook") /*id: 395395*/;
  var codeAssistantFileUpload = require("code-assistant-file-upload") /*id: 155525*/;
  var chatFileUploadHandlers = require("chat-file-upload-handlers") /*id: 936472*/;
  let ee = e => {
    var n;
    var k;
    let {
      skill: N,
      trackParams: j,
      reportParams: T,
      extraContents: P,
      attachmentExtraContents: O,
      onBeforeSendMessage: I,
      onAfterSendMessage: R,
      promptTemplate: D,
      promptTemplateSource: A,
      referenceImageList: M
    } = e;
    let Z = E();
    let L = reactCoreLibraryReexport.useRef(null);
    let {
      chatId: F,
      chatType: $
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let B = reactCoreLibraryReexport.useRef(false);
    let z = reactCoreLibraryReexport.useRef(null);
    let W = reactCoreLibraryReexport.useCallback(() => {
      if (!B.current) {
        B.current = true;
        initializeModuleInstance.initializeInstance.emit(chatInputConstants.chatInputConstants.inputStart);
      }
      if (z.current) {
        clearTimeout(z.current);
      }
      z.current = setTimeout(() => {
        B.current = false;
        initializeModuleInstance.initializeInstance.emit(chatInputConstants.chatInputConstants.inputEnd);
      }, 1000);
    }, []);
    let {
      isDevMode: G
    } = codingSkillChatInput_3.useCodingChatInput();
    let [U, V] = reactCoreLibraryReexport.useState();
    let H = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: F ?? "",
      skillType: chatAppEnums.SkillType.CodeAssistant
    });
    let K = reactCoreLibraryReexport.useMemo(() => (M == null ? undefined : M.length) ? H.map(e => {
      var n;
      let i = M == null ? undefined : M.find(t => t.localKey === e.localKey);
      let a = Array.isArray(i == null ? undefined : i.types) && (i == null ? undefined : i.types?.length);
      return {
        ...e,
        ...(a ? {
          extra: {
            code_dev_mode_refer_image_types: i == null ? undefined : (n = i.types) === null || n === undefined ? undefined : n.join(",")
          }
        } : {})
      };
    }) : H, [H, M]);
    let J = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: F ?? "",
      skillType: chatAppEnums.SkillType.CodeAssistant
    });
    let ee = attachmentUploadStoreHooks.getAttachmentKeys({
      chatId: F ?? "",
      skillType: chatAppEnums.SkillType.CodeAssistant
    });
    let et = reactCoreLibraryReexport.useMemo(() => J == null ? undefined : J.every(e => e.type === "image"), [J]);
    let en = reactCoreLibraryReexport.useMemo(() => J == null ? undefined : J.some(e => e.type === "link"), [J]);
    let ei = reactCoreLibraryReexport.useMemo(() => J == null ? undefined : J.some(e => e.type === "file"), [J]);
    let ea = reactCoreLibraryReexport.useMemo(() => J == null ? undefined : J.some(e => {
      let {
        fileName: t
      } = e;
      let n = getFileExtension.getFileExtension(t);
      return fileTypeDetectionUtils.isSpreadsheetFile(n) || fileTypeDetectionUtils.isCsvFile(n);
    }), [J]);
    let eo = reactCoreLibraryReexport.useMemo(() => J == null ? undefined : J.some(e => e.type === "directory"), [J]);
    let er = reactCoreLibraryReexport.useMemo(() => J == null ? undefined : J.some(e => e.type === "image"), [J]);
    let {
      addAttachment: el,
      addDirAttachment: es,
      addGitHubLink: ed,
      reuploadAttachment: ec,
      clearAttachments: eu,
      deleteAttachment: ep,
      getPreGeneratedLocalMessageId: eh,
      updatePreGeneratedLocalMessageId: em
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: F ?? "",
      skillType: chatAppEnums.SkillType.CodeAssistant
    });
    let [ef] = codingSkillStoreModule.codingSkillStore(e => [e.updateEditorValue], deepEqualityUtil.deepEqual);
    let e_ = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (F) {
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.clearRefContents(F, {
              retainDisableRef: true
            });
          }
        });
      }
    });
    let ev = $ === chatConversationTypes.ConversationTypes.NewThread;
    let eg = ev && (k = chatConversationSelectors_2.getMainConversationLink(chatFeedStoreFactory.useFeedStore.getState())?.conversationId) !== null && k !== undefined ? k : F;
    let eb = (N == null ? undefined : (n = N.skill_type) === null || n === undefined ? undefined : n.toString()) || "";
    let ey = (N == null ? undefined : N.skill_type) || 0;
    let {
      success: ex,
      tips: eC
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: J,
      scene: "sendMessageButton"
    });
    let ew = reactCoreLibraryReexport.useCallback(e => {
      L.current = e;
      if (e != null) {
        e.focus();
      }
    }, []);
    let ek = reactCoreLibraryReexport.useCallback(e => {
      if (ei || eo || en) {
        eu({});
      }
      return true;
    }, [eo, ei, en]);
    let eE = {
      ...j,
      code_scene: G ? "build" : "chat",
      skill_id: eb || chatAppEnums.SkillType.CodeAssistant,
      skill_name: skillTypeMappings.getSkillName(ey || chatAppEnums.SkillType.CodeAssistant) || ""
    };
    let eS = reactFunctionMemoHook.useMemoizedCallback(function (e) {
      var t;
      var n;
      let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "pin_button_click";
      teaAnalyticsEventTracker.trackEvent(i, {
        button_name: e,
        skill_id: eb || chatAppEnums.SkillType.CodeAssistant,
        skill_name: skillTypeMappings.getSkillName(ey || chatAppEnums.SkillType.CodeAssistant) || "",
        click_from: "chat_enter_bar",
        code_scene: G ? "build" : "chat",
        current_page: ((n = location) === null || n === undefined ? undefined : (t = n.href) === null || t === undefined ? undefined : t.includes("coding")) ? "code_assistant_detail_page" : "chat"
      });
    });
    let eN = e => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: e,
        trackParams: j
      });
    };
    let ej = e => {
      ef({
        data: []
      });
      e_();
      chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(F || "");
      eN(e);
    };
    let [eT] = codingSkillStoreModule.codingSkillStore(e => [e.toggleGithubModalVisible]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (e.key === "Escape") {
          eT(false);
          ej(chatSkillExitEventTracker.EventInputTypes.Keyboard);
        }
      };
      document.addEventListener("keydown", e);
      return () => {
        document.removeEventListener("keydown", e);
        if (z.current) {
          clearTimeout(z.current);
        }
      };
    }, [eT]);
    reactCoreLibraryReexport.useEffect(() => {
      if (J.length === 0) {
        V(undefined);
      }
    }, [J]);
    let {
      handleAddCiFiles: eP
    } = codeAssistantFileUpload.createUploadHandler({
      chatId: F,
      addAttachment: el,
      attachmentStates: J,
      getPreGeneratedLocalMessageId: eh,
      codeScene: G ? "build" : "chat"
    });
    let {
      handleAddFiles: eO,
      handleAddDir: eI,
      handleAddGithubLink: eR,
      handleAddImages: eD
    } = chatFileUploadHandlers.useUploadHandlers({
      attachmentStates: J,
      addAttachment: el,
      addDirAttachment: es,
      addGitHubLink: ed,
      isNewThread: ev,
      chatId: F,
      conversationId: eg,
      skillType: ey,
      skillId: eb,
      getPreGeneratedLocalMessageId: eh,
      clearRefContent: e_,
      setUploadedFileType: V,
      trackExtraParams: {
        code_scene: G ? "build" : "chat"
      }
    });
    let eA = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (eo || en || er || ea) {
        eu({});
      }
      return eO(e);
    });
    let eM = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (ei || en || er || ea) {
        eu({});
      }
      return eI(e);
    });
    let eZ = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      if (ei || eo || er || ea) {
        eu({});
      }
      return eR(e, t);
    });
    let eL = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (ei || eo || en || ea) {
        eu({});
      }
      return eD(e);
    });
    let eF = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      if (ei && !ea || eo || en || er) {
        eu({});
      }
      return eP(e, t);
    });
    let {
      refContents: e$
    } = chatSkillRefContentHook.useSkillRefContent({
      chatId: F,
      skillId: eb
    });
    let eB = messageBoxTypeCheckers.filterEnabledRefs(e$);
    useOnUnmountHook.useOnUnmount(async () => {
      await eu({});
      await em();
      if (!eB.map(e => "fileName" in e ? e.fileName : "").filter(e => e).some(e => {
        let t = getFileExtension.getFileExtension(e);
        return fileTypeDetectionUtils.isSpreadsheetFile(t) || fileTypeDetectionUtils.isCsvFile(t);
      })) {
        e_();
      }
    });
    let {
      submit: ez,
      canSubmitOnlyPrompt: eW,
      canSubmitWithAttachment: eG
    } = X({
      attachmentStates: J,
      attachmentKeys: ee,
      attachmentCanSend: ex,
      attachments: K,
      clearAttachments: eu,
      skillId: eb,
      skillType: ey,
      chatId: F,
      conversationId: eg,
      isNewThread: ev,
      reportParams: T,
      extraContents: P,
      attachmentExtraContents: O,
      editorValue: Z,
      setEditorValue: ef,
      uploadedFileType: U,
      updatePreGeneratedLocalMessageId: em,
      getPreGeneratedLocalMessageId: eh,
      refContents: eB,
      promptTemplate: D,
      promptTemplateSource: A,
      onBeforeSendMessage: I,
      onAfterSendMessage: R
    });
    return {
      handleAddFiles: eA,
      handleAddDir: eM,
      handleAddGithubLink: eZ,
      handleAddImages: eL,
      handleAddDataAnalysisFiles: eF,
      refContents: e$,
      clearRefContent: e_,
      clearAttachments: eu,
      editorValue: Z,
      setEditorValue: ef,
      attachmentStates: J,
      uploadedFileType: U,
      submit: ez,
      uploadTeaReport: eS,
      trackMeta: eE,
      editorRefCallback: ew,
      reuploadAttachment: ec,
      deleteAttachment: ep,
      closeEvent: eN,
      handleCloseSkill: ej,
      canSubmitOnlyPrompt: eW,
      canSubmitWithAttachment: eG,
      attachmentSendTips: eC,
      isShowUploadImage: true,
      enableDeepThinkBtn: true,
      isAttachmentAllImages: et,
      beforeUploadImages: ek,
      handleBeforeInputChange: W
    };
  };
  require.d(exports, {
    useCodingSkillChatInput: function () {
      return ee;
    }
  });
}