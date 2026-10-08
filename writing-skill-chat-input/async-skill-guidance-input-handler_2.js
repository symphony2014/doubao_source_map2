// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'writingSendMsgButton'
// - Renamed export 'o' to 'useAsyncSkillGuidanceInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 343690
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatAttachmentProcessor_1 = require("chat-attachment-processor_1") /*id: 670926*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var chatPluginIdentifiers = require("chat-plugin-identifiers") /*id: 70617*/;
  var docUpgradeStatusHook = require("doc-upgrade-status-hook") /*id: 439440*/;
  var writingAttachmentManager = require("writing-attachment-manager") /*id: 224274*/;
  var artifactLayoutConstants = require("artifact-layout-constants") /*id: 554108*/;
  var chatSkillPluginSymbols = require("chat-skill-plugin-symbols") /*id: 886094*/;
  var chatDeepThinkingSwitch = require("chat-deep-thinking-switch") /*id: 458521*/;
  var deepThinkingControlHooks = require("deep-thinking-control-hooks") /*id: 180129*/;
  var writingTaskConstants = require("writing-task-constants") /*id: 147584*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var useCleanupOnUnmount = require("use-cleanup-on-unmount") /*id: 942235*/;
  var inputKeyCheckers = require("input-key-checkers") /*id: 415984*/;
  var useChatPopoverConfig = require("use-chat-popover-config") /*id: 82102*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var chatSkillChangeHandlers = require("chat-skill-change-handlers") /*id: 378957*/;
  var chatGuidanceConfig = require("chat-guidance-config") /*id: 801476*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatFeedConversationUtil = require("chat-feed-conversation-util") /*id: 891416*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var useLocalStorageHook = require("use-local-storage-hook") /*id: 296239*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var edenxSearchParamsHook = require("edenx-search-params-hook") /*id: 471794*/;
  var writingChatInputController = require("writing-chat-input-controller") /*id: 619607*/;
  var publicDocumentHooks = require("public-document-hooks") /*id: 345997*/;
  var writingSkillConfigHooks = require("writing-skill-config-hooks") /*id: 276565*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  let Y = function (e, t = deepEqualityUtil_1.isDeepEqual) {
    let n = function () {
      var n = arguments.length;
      var i = Array(n);
      var r = 0;
      for (; r < n; r++) {
        i[r] = arguments[r];
      }
      return writingSkillStore.writingSkillStore(t => e(t, ...i), t);
    };
    n.raw = e;
    return n;
  }(e => e.writingEditorValue);
  var asyncSkillGuidanceInputHandler_1 = require("async-skill-guidance-input-handler_1") /*id: 368246*/;
  var chatCanvasExpandChecker = require("chat-canvas-expand-checker") /*id: 823556*/;
  var asrChatToolPlugin = require("asr-chat-tool-plugin") /*id: 591234*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let er = e => {
    let {
      trackParams: t
    } = e;
    return {
      handleTrackSwitchButtonEvent: (e, n) => {
        teaAnalyticsEventTracker.trackEvent("input_bar_switch_click", {
          ...t,
          click_from: "chat_enter_bar",
          button_name: e,
          to_status: +!!n
        });
      },
      handleInputBarClickEvent: e => {
        let {
          clickType: n
        } = e;
        teaAnalyticsEventTracker.trackEvent("input_bar_click", {
          ...t,
          click_type: n
        });
      },
      handleSkillModuleClickArrowEvent: e => {
        let {
          genre: n,
          subStyle: i
        } = e;
        teaAnalyticsEventTracker.trackEvent("skill_module_click_arrow", {
          ...t,
          upload_collection_way: "",
          collection_name: "",
          upload_file_type: "",
          upload_token_length: "",
          writing_sub_style: i,
          writing_genre: n,
          click_scene: "writing_requirements"
        });
      },
      handleSkillModuleShowEvent: () => {
        teaAnalyticsEventTracker.trackEvent("skill_module_show", {
          ...t
        });
      },
      handleTrackShowButtonEvent: e => {
        teaAnalyticsEventTracker.trackEvent("input_bar_switch_show", {
          ...t,
          click_from: "chat_enter_bar",
          button_name: e
        });
      }
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let ea = "writing-send-msg-button";
  let eo = e => {
    let {
      currentTemplate: t,
      action: n
    } = e;
    if (t) {
      return {
        action: n,
        genre: t.genre,
        type: isUndefinedCheck.isUndefined(t.type) ? undefined : String(t.type)
      };
    } else {
      return {
        action: n
      };
    }
  };
  let es = (e, t) => {
    var n;
    var ei;
    var es;
    let {
      chatId: ec,
      chatType: ep,
      skill: ef,
      disabled: em,
      showHeader: ev,
      showBanner: eh,
      reportParams: e_,
      trackParams: eg,
      isToolButtonSmall: ey,
      sendMessageHoverText: ek,
      disableEditorModeSwitch: ew,
      disableAsr: eb,
      showExitSkillButton: ex,
      onKeyDown: eS,
      onAfterSendMessage: eC,
      onBeforeSendMessage: eE,
      skillVariables: eT = eo,
      isGuidanceInput: eR = false,
      showEditorModeSwitch: eP = true,
      exitSkillAfterSendMessage: eN = false,
      popoverRef: ej,
      onHidePopover: eI,
      showStep: eM = false,
      stepLabelText: eD,
      scene: eZ
    } = e;
    let e$ = i18nTranslationUtils.useTranslationWithFallback();
    let [eO] = edenxSearchParamsHook.resolveSearchParams();
    let eA = publicDocumentHooks.useIsNewDocRoute();
    let eB = writingSkillConfigHooks.useWritingToolList();
    let [eF, eW] = reactCoreLibraryReexport.useState();
    let [eL, eV] = reactCoreLibraryReexport.useState(false);
    let [eU, ez] = reactCoreLibraryReexport.useState(false);
    let [eK, eG] = reactCoreLibraryReexport.useState(false);
    let [eH, eJ] = useLocalStorageHook.useLocalStorage("flow_writing_genre_checked_map", {});
    let eX = {
      ...eg,
      skill_id: ef == null ? undefined : (n = ef.skill_type) === null || n === undefined ? undefined : n.toString(),
      skill_name: skillTypeMappings.getSkillName(ef == null ? undefined : ef.skill_type),
      show_scene: "bottom_bar",
      conversation_id: ec
    };
    let eq = writingSkillStore.writingSkillStore(e => {
      let {
        openedDocId: t
      } = e;
      return t;
    });
    let {
      isDoubaoDoc: eQ
    } = docUpgradeStatusHook.getDocUpgradeInfo({
      docId: eq || ""
    });
    let eY = chatCanvasExpandChecker.shouldExpandChatCanvas({
      isDoubaoDoc: eQ
    });
    let {
      max_reference_count: e0,
      max_reference_word_count: e1
    } = writingSkillConfigHooks.useWritingBaseConfig() ?? {};
    let e2 = writeConfigManager.WriteConfigManager.useIsNewDoc();
    let e6 = chatFgStoreHooks.getSourceValue("always_show_writing_upload_btn", {
      source: chatStorageKeys.chatStorageKeys.tea,
      defaultValue: false
    });
    let e4 = chatFgStoreHooks.getSourceValue("auto_set_ref_node", {
      source: chatStorageKeys.chatStorageKeys.serverAB,
      defaultValue: "1"
    }) === "0";
    let e3 = chatGuidanceSelectors.hasActiveSkill();
    let e9 = !e3 && ep === chatConversationTypes.ConversationTypes.NewThread;
    let e5 = eh ?? (!e3 && (!eR || !e9));
    let e7 = e$("chat_input_popover_toggle_button_templates");
    let e8 = ((es = writingSkillConfigHooks.useWritingLongArticleConfig()) === null || es === undefined ? undefined : (ei = es.config) === null || ei === undefined ? undefined : ei.template?.genre_category) ?? [];
    let [te, tt] = reactCoreLibraryReexport.useState();
    let tn = Y();
    let {
      attachments: ti,
      attachmentStates: tr,
      addNewAttachmentFiles: tl,
      reuploadAttachment: ta,
      deleteAttachment: to,
      attachmentKeys: ts,
      setAttachmentConfig: tu,
      attachmentConfig: td,
      clearAttachments: tc,
      attachmentAreaRef: tp
    } = writingAttachmentManager.useAttachmentManager();
    let tf = td == null ? undefined : td.maxAllowCount;
    let tm = !!tf;
    let tv = tm && tf > 1;
    let th = tm && !isEmptyUtil.isEmpty(tr);
    let t_ = isNumberUtil.isNumber(tf) && tf <= ti.length;
    let {
      handleTrackSwitchButtonEvent: tg,
      handleInputBarClickEvent: ty,
      handleSkillModuleClickArrowEvent: tk,
      handleSkillModuleShowEvent: tw,
      handleTrackShowButtonEvent: tb
    } = er({
      trackParams: eX
    });
    let {
      enableDeepThinkingSwitch: tx
    } = deepThinkingControlHooks.useDeepThinkEnabled();
    let [tS, tC] = reactCoreLibraryReexport.useState(false);
    let tE = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t,
        canvasContent: n
      } = e;
      return t && collectionIncludesUtil.includes(artifactLayoutConstants.supportedResources, n == null ? undefined : n.type);
    });
    let tT = functionInvoker.invoke(() => !ew && !tE && !tS && (typeof eP == "boolean" ? eP : !te || !eB.find(e => e.template === te)));
    let tR = reactCoreLibraryReexport.useRef(null);
    let tP = writingSkillConfigHooks.useWritingProfessionalGenres();
    let tN = eM && !tS || (te == null ? undefined : te.type) === chatAiConstants.serviceLevel.Professional;
    let tj = tN && eL;
    let tI = asrChatToolPlugin.getAsrToolConfig();
    let tM = infraUtilFunctions.ensureBoolean(tj);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      tc({});
      eV(tO());
      eG((e = te == null ? undefined : te.is_search_btn_enabled_by_default) !== null && e !== undefined && e);
    }, [te]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      let e = (te == null ? undefined : te.type) === chatAiConstants.serviceLevel.Professional;
      let t = (te == null ? undefined : te.max_reference_count) || e0;
      if ((e || tS || e6) && isNumberUtil.isNumber(t) && !tf) {
        tu({
          maxAllowCount: t
        });
      }
    }, [te, tS, e0, e6]);
    reactCoreLibraryReexport.useEffect(() => {
      if (tS) {
        let e = tn.data.find(e => e.type === chatFieldTypes.getFieldTypes.Select && e.key === "genre");
        if (e && "value" in e && (e == null ? undefined : e.value) && (e == null ? undefined : e.value) !== eF) {
          if (eF !== undefined) {
            ty({
              clickType: "write_style_alt"
            });
          }
          eW(e.value);
        }
      }
    }, [tn, eF]);
    let tD = {
      focus: () => {
        writingChatInputController.writingChatInputControllerInstance.focusOnWritingEditor();
      },
      setTemplate: e => {
        if (isUndefinedCheck.isUndefined(e)) {
          writingSkillStore.writingSkillStore.getState().clearWritingEditorValue();
        }
        tt(e);
      },
      setLongArticleWriting: tC,
      addNewAttachmentFiles: tl,
      setAttachmentConfig: tu
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => tD, []);
    let tZ = functionInvoker.invoke(() => {
      var e;
      return !tS && (!te || (e = te == null ? undefined : te.is_search_btn_visible) !== null && e !== undefined && e);
    });
    let t$ = functionInvoker.invoke(() => !!em || inputToolConverter.extractText(tn.data).trim() === "" || td != null && !!td.tool_name && !!tf && !tr.length || th && !e4 && tr.some(e => e.parseState !== messagingConstants.parseState.ParseState_Success));
    reactCoreLibraryReexport.useEffect(() => {
      if (tN) {
        tb("step_writing");
      }
    }, [te, tN]);
    reactCoreLibraryReexport.useEffect(() => {
      if (tT) {
        tb("open_canvas");
      }
    }, [te, tT]);
    reactCoreLibraryReexport.useEffect(() => {
      if (tZ) {
        tb("search");
      }
    }, [te, tZ]);
    let tO = () => {
      var e;
      let {
        genre: t,
        default_open: n = false
      } = te ?? {};
      if (t && (e = eH[t]) !== null && e !== undefined) {
        return e;
      } else {
        return n;
      }
    };
    let tA = () => {
      let e;
      let t = "";
      let n = "";
      if (tS) {
        let e = tn.data.find(e => e.type === chatFieldTypes.getFieldTypes.Select);
        if (e && "value" in e && (e == null ? undefined : e.value)) {
          let t = tP.findIndex(t => (t == null ? undefined : t.show_name) === (e == null ? undefined : e.value));
          n = tP[t]?.value ?? "";
        }
      }
      if (th) {
        t = JSON.stringify({
          attachments: tr.map(e => ({
            title: e.fileName,
            key: e.fileKey
          }))
        });
      }
      if (tS) {
        return {
          action: "gen_outline",
          genre: n,
          type: String(chatAiConstants.serviceLevel.Professional),
          ...(isEmptyUtil.isEmpty(t) ? {} : {
            attachments_context: t
          })
        };
      } else {
        e = isFunctionUtil_1.isFunction(eT) ? eT({
          currentTemplate: te,
          action: tj ? "gen_outline" : "",
          showStep: tN,
          stepChecked: eL
        }) : eT || {};
        if (!isEmptyUtil.isEmpty(t)) {
          e.attachments_context = t;
        }
        e.action ||= "artifact";
        if (tT && !tj) {
          e.enable_pages_canvas = eU;
        }
        if (tZ) {
          e.enable_search = tj || eK;
        }
        return e;
      }
    };
    let tB = () => {
      let e = infraUtilFunctions.parseNumber((te == null ? undefined : te.max_reference_word_count) || e1);
      return !th || !!e4 || !e || !(tr.reduce((e, t) => {
        return e + ((t == null ? undefined : t.parsedCharCount) ?? 0);
      }, 0) > e) || (semiToastNotification.toastInstance.error(e$("skill_writing_input_reference_uploadDoc_wordCount_limitation_toast", {
        postProcess: "sprintf",
        sprintf: [e]
      })), false);
    };
    let tF = () => {
      let {
        genre: e
      } = te ?? {};
      let t = e8.slice(1).find(t => {
        var n;
        return e && ((n = t.genre_list) === null || n === undefined ? undefined : n.includes(e));
      });
      tk({
        genre: e,
        subStyle: t == null ? undefined : t.show_name
      });
      if (eB.find(e => e.template === te)) {
        tt(undefined);
        tu(undefined);
      }
      tc({});
      eG(false);
    };
    let tW = e => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: e,
        trackParams: {
          ...eX,
          upload_collection_way: "",
          collection_name: "",
          upload_file_type: "",
          upload_token_length: ""
        }
      });
    };
    useCleanupOnUnmount.useCleanupOnUnmount({
      resetFn: () => {
        writingSkillStore.writingSkillStore.getState().clearWritingEditorValue();
      }
    });
    let tL = async () => {
      let e = await chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService");
      if (ec) {
        if (e != null) {
          e.clearRefContents(ec);
        }
      }
      writingSkillStore.writingSkillStore.getState().clearWritingEditorValue();
      writingChatInputController.writingChatInputControllerInstance.blurOnWritingEditor();
      if (eI != null) {
        eI({
          canExpandByFocus: false
        });
      }
    };
    let tV = asyncSkillGuidanceInputHandler_1.createAsyncSkillGuidanceInputHandler({
      skill: ef,
      reportParams: e_,
      exitSkillAfterSendMessage: eN,
      onBeforeSendMessage: eE,
      onAfterSendMessage: async e => {
        if (tW != null) {
          tW();
        }
        if (tL != null) {
          tL();
        }
        tF();
        await (eC == null ? undefined : eC(e));
      }
    });
    let tU = () => {
      var t;
      var n;
      var i;
      var r;
      if (!tB()) {
        return;
      }
      let o = {};
      let u = (t = chatStoreManager.getStoreState("chatViewCoreStore")) === null || t === undefined ? undefined : t.currentChatViewConfig?.chatId;
      if (eA && u && chatFeedConversationUtil.isLocalConversation(u)) {
        o.samantha_onboarding = JSON.stringify({
          type: "pages",
          value: JSON.stringify({
            Title: "",
            Content: "",
            SourceContent: "",
            SpaceNodeID: eO.get("node_id") || undefined,
            Summary: ""
          })
        });
      }
      let c = {
        skill_id: (n = ef.skill_type) === null || n === undefined ? undefined : n.toString(),
        skill_type: ef.skill_type,
        variables: tA(),
        is_long_content: tS ? "1" : "0"
      };
      let p = (i = tn.data) === null || i === undefined ? undefined : i.find(e => e.type === chatFieldTypes.getFieldTypes.Placeholder && e.key === "longForm_wordCount");
      let f = th ? chatAttachmentProcessor_1.processChatAttachments({
        attachments: ti,
        attachmentKeys: ts,
        attachmentStates: tr,
        text: inputToolConverter.extractText(tn.data),
        reportParams: e_ ?? {}
      }) : undefined;
      if (e2) {
        o.doc_action = writingTaskConstants.writingTasks.DIRECT_INPUT;
        o.enable_search = eK;
      }
      let m = {
        ...((f == null ? undefined : f.reportParams) ?? {}),
        sec_scene: ((r = eg.sendMessageSecScene) === null || r === undefined ? undefined : r.toString()) ?? skillTypeMappings.getSkillActionClass(ef == null ? undefined : ef.skill_type),
        writing_genre: tS && !tA().genre ? "no_selection" : te == null ? undefined : te.show_name,
        is_by_step_writing: tS || isFunctionUtil_1.isFunction(eT) && tj ? "step_by_sample" : "no_step",
        writing_word_count: p && "text" in p ? p.text : undefined,
        is_writing_search: eK ? "1" : undefined
      };
      tV({
        text: inputToolConverter.extractText(tn.data),
        skillObj: c,
        payload: f,
        reportParams: m,
        extraExt: o
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      writingChatInputController.writingChatInputControllerInstance.bindWritingChatInputController(tD);
      writingChatInputController.writingChatInputControllerInstance.emit("init");
      tw();
      return () => {
        writingChatInputController.writingChatInputControllerInstance.unbindWritingChatInputController();
      };
    }, []);
    chatSkillChangeHandlers.useChatIdChangeHandler(e => {
      writingSkillStore.writingSkillStore.getState().clearWritingEditorValue({
        skipOnceWhenKeep: !e
      });
    });
    let tz = reactCoreLibraryReexport.useCallback(e => {
      writingChatInputController.writingChatInputControllerInstance.bindWritingEditorRef(e);
      tR.current = e;
      if (!userAgentDeviceDetector.isAppleDevice() && e != null) {
        e.focus();
      }
    }, []);
    let tK = {
      disabled: em,
      value: tn,
      onChange: e => {
        writingChatInputController.writingChatInputControllerInstance.updateWritingRichEditorContent(e);
        writingChatInputController.writingChatInputControllerInstance.emit("contentChange", e);
      },
      onKeyDown: async e => {
        await (eS == null ? undefined : eS(e));
        if (inputKeyCheckers.isEnterKey(e)) {
          if (!userAgentDeviceDetector.isMobileOrIOS()) {
            e.preventDefault();
          }
          if (!t$) {
            tU();
          }
        }
      },
      placeholder: eY ? e$("skill_copliotreading_askDoubao") : e$("doc_mainPage_inputBox_placeholder"),
      autoComplete: "off"
    };
    let {
      defaultOpenPopover: tG,
      skillHeaderProps: tH
    } = useChatPopoverConfig.useChatPopoverConfig({});
    let {
      isNewChatInputInChat: tJ
    } = chatGuidanceConfig.getChatGuidance({
      chatId: ec,
      chatType: ep
    });
    let tX = {
      type: "editor",
      chatId: ec,
      chatType: ep,
      isToolButtonSmall: ey,
      activeSkillType: ef.skill_type,
      skill: ef,
      trackParams: eX,
      getValue: () => tn,
      onUpdateValue: e => {
        writingSkillStore.writingSkillStore.getState().updateWritingEditorValue(e);
      }
    };
    let tq = functionInvoker.invoke(() => {
      if (!eb) {
        return tI.element(tX)({});
      }
    });
    let tQ = {
      type: "textarea",
      chatId: ec,
      chatType: ep,
      scene: eZ,
      trackParams: eX,
      hasCheckStep: tj,
      skill: ef,
      activeSkillType: ef.skill_type
    };
    let {
      skillToolUIV2: tY,
      skillToolLayoutV2: t0
    } = chatLauncherConfigHooks.useSkillToolLayout(eZ);
    let t1 = reactCoreLibraryReexport.useMemo(() => {
      let e = [];
      if (ex && tY) {
        e.push(chatSkillPluginSymbols.exitSkillPluginSym);
      }
      if (tx) {
        e.push(chatDeepThinkingSwitch.deepThinkingSwitchKey);
      }
      if (tm) {
        e.push(chatPluginIdentifiers.uploadFilePluginId);
      }
      if (tJ) {
        e.push(selectSkillBtnPluginId.selectSkillBtnId);
      }
      return e;
    }, [tY, t0, tm, tx, tZ, tT, tN, ex, tJ]);
    let t2 = reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButtonList, {
      moreButtonPopoverProps: {
        clickToHide: false
      },
      toolButtonProps: {
        ...tQ,
        disabledUploadBtn: t_,
        multiple: tv,
        maxUploadAllowCount: tf,
        onFileUpload: tl,
        onlineSearch: eK || tj,
        setOnlineSearch: eG,
        onClickOnlineSearch: e => {
          tg("search", e);
        },
        editorMode: eU,
        setEditorMode: ez,
        editorModeDisabled: tM,
        editorModeSort: +!!tZ,
        onEditorModeClick: e => {
          tg("open_canvas", e);
        },
        expandPopoverRef: ej,
        stepLabelText: eD,
        stepChecked: eL,
        setStepChecked: e => {
          let t = e ?? !eL;
          eV(t);
          let {
            genre: n
          } = te ?? {};
          if (n) {
            eJ(immerCoreImplementation.produce(e => {
              if (e) {
                e[n] = t;
              }
            }));
          }
        },
        stepCheckSort: +!!tZ + +!!tT,
        onStepCheckedClick: e => {
          ty({
            clickType: e ? "write_by_step_on" : "write_by_step_off"
          });
        }
      },
      small: ey,
      list: t1
    });
    return {
      editorRefCallback: tz,
      showHeader: ev ?? !e3,
      showBanner: e5,
      expandBtnText: e7,
      popoverContainerProps: {
        keepDOMWhenPopoverHide: false,
        popoverVisible: !!e5 && undefined,
        defaultOpenPopover: tG
      },
      popoverProps: {
        visible: e5,
        trackParams: eX,
        selectedTemplate: te,
        onUpdateSelectedTemplate: tt,
        onUpdateLongArticleWriting: tC,
        onClearAttachment: () => {
          tu(undefined);
        }
      },
      skillHeaderProps: tH,
      closeEvent: tW,
      showAttachmentArea: th,
      attachmentStates: tr,
      deleteAttachment: to,
      reuploadAttachment: ta,
      editorProps: tK,
      sendBtnProps: {
        small: ey,
        sendMessageClassName: ea,
        disableToSend: t$,
        sendMessageHoverText: ek,
        onClickSendButton: () => {
          tU();
        }
      },
      leftTools: t2,
      rightActions: tq,
      attachmentAreaRef: tp,
      toolButtonProps: tX
    };
  };
  require.d(exports, {
    writingSendMsgButton: function () {
      return ea;
    },
    useAsyncSkillGuidanceInput: function () {
      return es;
    }
  });
}