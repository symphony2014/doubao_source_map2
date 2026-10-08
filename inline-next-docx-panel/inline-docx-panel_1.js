// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'InlineDocxPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 913362
         */
module.exports = function (module, exports, require) {
  var i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var docSkeletonPanel = require("doc-skeleton-panel") /*id: 779323*/;
  var timestampMarker = require("timestamp-marker") /*id: 77148*/;
  var emptyObjectFactory = require("empty-object-factory") /*id: 691771*/;
  var docxPanelUrlBuilder = require("docx-panel-url-builder") /*id: 202507*/;
  var useDocxPerformanceMonitor = require("use-docx-performance-monitor") /*id: 780079*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var docxPanelMethodRegistrar = require("docx-panel-method-registrar") /*id: 260726*/;
  var feishuDocxPanelConfigLoader = require("feishu-docx-panel-config-loader") /*id: 105384*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var appIdentityUtils = require("app-identity-utils") /*id: 604117*/;
  var feishuAccessTokenService = require("feishu-access-token-service") /*id: 578645*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var languageCodeNormalizer = require("language-code-normalizer") /*id: 12412*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  let O = false;
  let I = {
    register(e, t) {
      if (O) {
        return;
      }
      O = true;
      let {
        writeConfig: n
      } = t;
      e.registerMethod("writeConfig.isDocStreamingSmooth", () => n.isDocStreamingSmooth());
      e.registerMethod("writeConfig.isDirectAcceptRevisionDefault", () => n.isDirectAcceptRevisionDefault());
    }
  };
  var docxPanelUtils = require("docx-panel-utils") /*id: 678171*/;
  let N = false;
  let j = {
    register(e, t) {
      if (!N) {
        N = true;
        e.registerMethod("track.trackEvent", e => {
          t.trackEvent(e.event, e.params);
        });
      }
    }
  };
  var docxPanelEventConstKeys = require("docx-panel-event-const-keys") /*id: 212120*/;
  let Z = false;
  let D = {
    register(e, t) {
      if (!Z) {
        Z = true;
        e.registerMethod(docxPanelEventConstKeys.slardarGetContext, () => t.slardarInstance.getContext());
      }
    }
  };
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let F = false;
  let B = {
    register(e) {
      if (!F) {
        F = true;
        e.registerMethod("ai.chat.getMessageStreamingStatus", e => B.getStatus(e));
      }
    },
    getStatus(e) {
      let {
        chatId: t,
        messageId: n
      } = e;
      let i = chatMessageStoreFactory.createMessageStore.getState();
      if (n) {
        let e = conversationMessageUtils_1.getMessageById(i, t, n);
        if (e) {
          return {
            isStreaming: !chatMessageStatusCheck.isMessageFinished(e) && !messageContentTypeAndStatusChecker.vlk(e),
            messageId: n
          };
        } else {
          return null;
        }
      }
      {
        let e = conversationMessageUtils_1.getAvailableMessage(i, t);
        return {
          isStreaming: !!e,
          messageId: e == null ? undefined : e.message_id
        };
      }
    },
    emitStatusChange(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n && e) {
        n.emit(e, "ai.chat.messageStreamingStatusChanged", t);
      }
    }
  };
  var authTokenRegister = require("auth-token-register") /*id: 961261*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  let W = require("corpc-debug-loggers") /*id: 363765*/.getServiceDebug("ai");
  let G = false;
  let H = {
    register(e, t) {
      if (G) {
        return;
      }
      G = true;
      let {
        getChatSlice: n,
        getChatService: i,
        useWriteStore: r,
        useSuperTaskStore: o
      } = t;
      e.registerMethod("ai.getLocation", () => ({
        pathname: location.pathname,
        search: location.search,
        hash: location.hash
      }));
      e.registerMethod("ai.chat.getCanvasExpand", () => {
        var e;
        let t = n("chatViewCanvasStore");
        return (e = t == null ? undefined : t.isExpand) !== null && e !== undefined && e;
      });
      e.registerMethod("ai.chat.getCurrentChatId", () => {
        let t = n("chatViewCoreStore");
        if (t == null) {
          return undefined;
        } else {
          return t.currentChatViewConfig?.chatId;
        }
      });
      e.registerMethod("ai.chat.setRefContents", async e => {
        var t;
        let {
          chatId: n,
          ...r
        } = e;
        let o = await i("refContentStoreService");
        if (o != null && (t = o.setRefContents) !== null && t !== undefined) {
          t.call(o, r, n);
        }
      });
      e.registerMethod("ai.store.addSelection", e => {
        let {
          addSelection: t
        } = r.getState();
        t(e);
      });
      e.registerMethod("ai.store.removeSelection", e => {
        let {
          removeSelection: t
        } = r.getState();
        t(e);
      });
      e.registerMethod("ai.store.isSuperTaskEnabled", e => o.getState().isSuperTaskEnableByConvId(e));
      e.registerMethod("ai.store.getSidebarVisible", () => {
        let e = r.getState().docPageChatLayoutMode;
        return e === chatSkillInputConstants.SkillDisplayType.Sidebar || e === chatSkillInputConstants.SkillDisplayType.Popover;
      });
    },
    subscribeEvents(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        return emptyExportFunction.emptyFunction;
      }
      let i = [["onChatInputOpen", "ai.chatInput.open"], ["onChatInputUpdatePosition", "ai.chatInput.updatePosition"], ["onChatInputPageBlockResize", "ai.chatInput.pageBlockResize"], ["onChatInputForceClose", "ai.chatInput.forceClose"], ["onBehaviorOpenRewritePanel", "ai.behavior.openRewritePanel"], ["onBehaviorRewritePanelAction", "ai.behavior.rewritePanelAction"], ["onBehaviorClickCopy", "ai.behavior.clickCopy"]];
      let r = [];
      let o = () => {
        i.forEach(i => {
          let [o, a] = i;
          let s = t[o];
          if (s) {
            r.push(n.on(e, a, s));
          }
        });
      };
      let a = () => {
        r.forEach(e => e());
        r = [];
      };
      if (n.isClientConnected(e)) {
        o();
      }
      let s = n.onConnection(t => {
        if (t === e && r.length === 0) {
          o();
        }
      });
      let l = n.onDisconnection(t => {
        if (t === e) {
          a();
        }
      });
      return () => {
        s();
        l();
        a();
      };
    },
    async getEditingState(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (!t || !e) {
        return false;
      }
      try {
        return await t.call(e, "ai.getEditingState");
      } catch (e) {
        W("[debug] getEditingState failed:", e);
        return false;
      }
    },
    async getSelectionParams(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        return null;
      }
      try {
        return await n.call(e, "ai.getSelectionParams", t);
      } catch (e) {
        W("[debug] getSelectionParams failed:", e);
        return null;
      }
    },
    async getBlockWriteContext(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n || !e) {
        return null;
      }
      try {
        return await n.call(e, "ai.getBlockWriteContext", {
          blockId: t
        });
      } catch (e) {
        W("[debug] getBlockWriteContext failed:", e);
        return null;
      }
    },
    closeToolbox(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (t && e) {
        try {
          t.call(e, "toolbox.close").catch(e => {
            W("[debug] closeToolbox async failed:", e);
          });
        } catch (e) {
          W("[debug] closeToolbox failed:", e);
        }
      }
    },
    emitAfterSubmit(e, t, n) {
      let i = rpcHostManager.RpcHostManager.getInstance();
      if (i != null) {
        i.emit(e, "ai.chatInput.afterSubmit", {
          blockId: t,
          chatInputType: n
        });
      }
    },
    emitChangeVisible(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n != null) {
        n.emit(e, "ai.chatInput.changeVisible", t);
      }
    },
    emitRefContentChanged(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n != null) {
        n.emit(e, "ai.store.refContentChanged", t);
      }
    },
    emitSidebarVisibleChanged(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n != null) {
        n.emit(e, "ai.store.sidebarVisibleChanged", t);
      }
    },
    emitCanvasExpandChanged(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n != null) {
        n.emit(e, "ai.store.canvasExpandChanged", t);
      }
    }
  };
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var commentRpcServiceClient = require("comment-rpc-service-client") /*id: 433602*/;
  var asyncSkillMessageLifecycle_2 = require("async-skill-message-lifecycle_2") /*id: 288954*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatActionFormatter = require("chat-action-formatter") /*id: 848753*/;
  var pathArrayStartEndValidator = require("path-array-start-end-validator") /*id: 624893*/;
  var pathArrayValidator_1 = require("path-array-validator_1") /*id: 341924*/;
  var asyncWriteSkillMessageSender = require("async-write-skill-message-sender") /*id: 511261*/;
  var writingTaskConstants = require("writing-task-constants") /*id: 147584*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  (i = {}).AiRootWrite = "aiRootWrite";
  i.AiBlockWrite = "aiBlockWrite";
  i.AiRewrite = "aiReWrite";
  let es = i;
  var lifecycleEventManager = require("lifecycle-event-manager") /*id: 597916*/;
  let ec = e => {
    let {
      chatId: t,
      clientId: n,
      enabled: i = true,
      capture: r = false
    } = e;
    let a = reactCoreLibraryReexport.useRef(false);
    let s = reactCoreLibraryReexport.useRef(false);
    let l = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      let o = () => {
        if (n) {
          H.closeToolbox(n);
        }
      };
      let c = () => {
        let e = i && !!t && s.current && l.current;
        if (e && !a.current) {
          document.addEventListener("click", o, r);
          a.current = true;
          return;
        }
        if (!e && a.current) {
          document.removeEventListener("click", o, r);
          a.current = false;
        }
      };
      if (n) {
        e = lifecycleEventManager.lifecycleManager.subscribeEvents(n, {
          onEditorReady: () => {
            s.current = true;
            c();
          }
        });
      }
      l.current = !!t && !!writingSkillStore.writingSkillStore.getState().selectionMap[t];
      c();
      let d = writingSkillStore.writingSkillStore.subscribe(e => !!t && !!e.selectionMap[t], e => {
        l.current = e;
        c();
      });
      return () => {
        if (e != null) {
          e();
        }
        d();
        if (a.current) {
          document.removeEventListener("click", o, r);
          a.current = false;
        }
      };
    }, [t, n, i, r]);
  };
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  var businessSkillBarMenuWrapper = require("business-skill-bar-menu-wrapper") /*id: 126623*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var chatInputWithAttachmentsComponent = require("chat-input-with-attachments-component") /*id: 158372*/;
  var docxPanelBridge = require("docx-panel-bridge") /*id: 827167*/;
  var createNewFileEventTracker = require("create-new-file-event-tracker") /*id: 982650*/;
  var useDebouncedCallbackHook = require("use-debounced-callback-hook") /*id: 532201*/;
  var useDelayedState = require("use-delayed-state") /*id: 494579*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  let ex = e => !e.data.length || e.data.every(e => e.type === chatFieldTypes.getFieldTypes.Text && !e.text);
  var editRtlIconComponent = require("edit-rtl-icon-component") /*id: 412248*/;
  var businessSkillBarIcon_1 = require("business-skill-bar-icon_1") /*id: 353219*/;
  var rtlDocumentTextIcon = require("rtl-document-text-icon") /*id: 717314*/;
  var listIcon = require("list-icon") /*id: 351962*/;
  var inlineDocxPanelIcon = require("inline-docx-panel-icon") /*id: 832543*/;
  var rtlChevronLeftIcon = require("rtl-chevron-left-icon") /*id: 400992*/;
  var iconRightOutline = require("icon-right-outline") /*id: 649290*/;
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  var rtlSearchIcon = require("rtl-search-icon") /*id: 717963*/;
  var businessSkillBarIcon = require("business-skill-bar-icon") /*id: 282062*/;
  var rtlListIconComponent = require("rtl-list-icon-component") /*id: 48768*/;
  var skillBarIcon = require("skill-bar-icon") /*id: 384648*/;
  var eM = {
    container: "container-ghmcfj",
    input: "input-V0fI5b",
    "popover-reference": "popover-reference-gEa3H2",
    popover: "popover-XUMypi",
    "table-area": "table-area-PCmm8E",
    wrapper: "wrapper-lPxLwU",
    box: "box-bCc4bP",
    icon: "icon-ascBl4",
    info: "info-McTWMS",
    "create-area": "create-area-Mrpfnq",
    "option-title": "option-title-FL1Fh3"
  };
  var documentFeatureConstants = require("document-feature-constants") /*id: 813917*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let eL = function ({
    onClick: e
  } = {}) {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    return [{
      key: "suggest_title",
      label: "",
      wrapper: () => reactJsxRuntimeCoreReexport.jsx("div", {
        className: eM["option-title"],
        children: t("doc_canvas_addSection_menu_sug")
      })
    }, {
      key: writingTaskConstants.writingTasks.CONTINUE_WRITING,
      label: t("doc_copilot_section_continueWrite"),
      icon: reactJsxRuntimeCoreReexport.jsx(editRtlIconComponent.EditRtlIcon, {}),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.CONTINUE_WRITING,
            text: t("doc_copilot_section_continueWrite")
          });
        }
      }
    }, {
      key: writingTaskConstants.writingTasks.ADD_TRANSITION,
      label: t("doc_copilot_section_transitionPara"),
      icon: reactJsxRuntimeCoreReexport.jsx(businessSkillBarIcon_1.SkillBarIcon, {}),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.ADD_TRANSITION,
            text: t("doc_copilot_section_transitionPara")
          });
        }
      }
    }, {
      key: writingTaskConstants.writingTasks.ADD_EXAMPLE,
      label: t("doc_copilot_section_addExample"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlDocumentTextIcon.RtlDocumentTextIcon, {}),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.ADD_EXAMPLE,
            text: t("doc_copilot_section_addExample")
          });
        }
      }
    }, {
      key: writingTaskConstants.writingTasks.ADD_SUMMARY,
      label: t("doc_copilot_section_addSummary"),
      icon: reactJsxRuntimeCoreReexport.jsx(listIcon.ListIcon, {}),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.ADD_SUMMARY,
            text: t("doc_copilot_section_addSummary")
          });
        }
      }
    }, {
      key: writingTaskConstants.writingTasks.INSERT_TABLE,
      label: t("doc_copilot_section_genTable"),
      icon: reactJsxRuntimeCoreReexport.jsx(inlineDocxPanelIcon.InlineDocxPanelIcon, {}),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.INSERT_TABLE,
            text: t("doc_copilot_section_genTable"),
            prefix: e => t("doc_chat_prompt_genTable", {
              s_genTable: e
            }),
            placeholder: t("doc_chat_genTable_placeholder"),
            element: function ({
              onCloseTab: e
            } = {}) {
              return reactJsxRuntimeCoreReexport.jsx("div", {
                className: eM["table-area"],
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: eM.wrapper,
                  onClick: e,
                  children: reactJsxRuntimeCoreReexport.jsxs("div", {
                    className: eM.box,
                    children: [reactJsxRuntimeCoreReexport.jsx("div", {
                      className: eM.icon,
                      children: reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {})
                    }), reactJsxRuntimeCoreReexport.jsx("div", {
                      className: eM.info,
                      children: t("doc_copilot_section_genTable")
                    })]
                  })
                })
              });
            }
          });
        }
      }
    }];
  };
  let eF = function ({
    onClick: e,
    onReturn: t
  } = {}) {
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = e => {
      let {
        info: n
      } = e;
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: eM["create-area"],
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: eM.wrapper,
          children: [reactJsxRuntimeCoreReexport.jsx(iconRightOutline.RightIcon, {
            onClick: t
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: eM.info,
            children: n
          })]
        })
      });
    };
    return [{
      key: writingTaskConstants.writingTasks.WRITE_ARTICLE,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: n("doc_editor_AIWrite_genre_list_article"),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.WRITE_ARTICLE,
            text: n("doc_editor_AIWrite_genre_list_article"),
            placeholder: n("doc_canvas_writeArticle_placeholder"),
            element: () => reactJsxRuntimeCoreReexport.jsx(i, {
              info: n("doc_canvas_writeArticle_hint")
            })
          });
        }
      }
    }, {
      key: writingTaskConstants.writingTasks.WRITE_PAPER,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: n("doc_editor_AIWrite_genre_list_paper"),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.WRITE_PAPER,
            text: n("doc_editor_AIWrite_genre_list_paper"),
            placeholder: n("doc_canvas_writePaper_placeholder"),
            element: () => reactJsxRuntimeCoreReexport.jsx(i, {
              info: n("doc_canvas_writePaper_hint")
            })
          });
        }
      }
    }, {
      key: writingTaskConstants.writingTasks.WRITE_ESSAY,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: n("doc_editor_AIWrite_genre_list_composition"),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.WRITE_ESSAY,
            text: n("doc_editor_AIWrite_genre_list_composition"),
            placeholder: n("doc_canvas_writeEssay_placeholder"),
            element: () => reactJsxRuntimeCoreReexport.jsx(i, {
              info: n("doc_canvas_writeEssay_hint")
            })
          });
        }
      }
    }, {
      key: writingTaskConstants.writingTasks.WRITE_RESEARCH_REPORT,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: n("doc_editor_AIWrite_genre_list_reasearchReport"),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.WRITE_RESEARCH_REPORT,
            text: n("doc_editor_AIWrite_genre_list_reasearchReport"),
            placeholder: n("doc_canvas_writeReport_placeholder"),
            element: () => reactJsxRuntimeCoreReexport.jsx(i, {
              info: n("doc_canvas_writeReport_hint")
            })
          });
        }
      }
    }, {
      key: writingTaskConstants.writingTasks.WRITE_XIAOHONGSHU,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: n("doc_editor_AIWrite_genre_list_xiaohongshu"),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.WRITE_XIAOHONGSHU,
            text: n("doc_editor_AIWrite_genre_list_xiaohongshu"),
            placeholder: n("doc_canvas_writePost_placeholder"),
            element: () => reactJsxRuntimeCoreReexport.jsx(i, {
              info: n("doc_canvas_writePost_hint")
            })
          });
        }
      }
    }];
  };
  let eB = function ({
    onClick: e
  } = {}) {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    return [{
      key: documentFeatureConstants.featureConstants.Polish,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon.SearchRtlIcon, {}),
      label: t("doc_editor_ai_skill_polishing"),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.POLISH,
            text: t("doc_editor_ai_skill_polishing")
          });
        }
      }
    }, {
      key: documentFeatureConstants.featureConstants.Expansion,
      icon: reactJsxRuntimeCoreReexport.jsx(businessSkillBarIcon.SkillBarIcon, {}),
      label: t("doc_editor_ai_skill_expand_writing"),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.EXPAND,
            text: t("doc_editor_ai_skill_expand_writing")
          });
        }
      }
    }, {
      key: documentFeatureConstants.featureConstants.Abbreviation,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlListIconComponent.RtlListIcon, {}),
      label: t("doc_editor_ai_skill_short_writing"),
      onClick: () => {
        if (e != null) {
          e({
            action: writingTaskConstants.writingTasks.ABBREVIATE,
            text: t("doc_editor_ai_skill_short_writing")
          });
        }
      }
    }, {
      key: "modify",
      icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
      label: t("doc_copilot_option_tone"),
      children: [{
        key: documentFeatureConstants.featureConstants.InlineToneProfessional,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: t("doc_copilot_option_tone_professional"),
        onClick: () => {
          if (e != null) {
            e({
              action: writingTaskConstants.writingTasks.TONE_ADJUSTMENT_MORE_PROFESSIONAL,
              text: t("doc_copilot_option_tone_professional")
            });
          }
        }
      }, {
        key: documentFeatureConstants.featureConstants.InlineToneAcademic,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: t("doc_editor_ai_skill_change_tone_academic"),
        onClick: () => {
          if (e != null) {
            e({
              action: writingTaskConstants.writingTasks.TONE_ADJUSTMENT_MORE_ACADEMIC,
              text: t("doc_editor_ai_skill_change_tone_academic")
            });
          }
        }
      }, {
        key: documentFeatureConstants.featureConstants.InlineToneReadable,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: t("doc_copilot_option_tone_formal"),
        onClick: () => {
          if (e != null) {
            e({
              action: writingTaskConstants.writingTasks.TONE_ADJUSTMENT_MORE_FORMAL,
              text: t("doc_copilot_option_tone_formal")
            });
          }
        }
      }, {
        key: documentFeatureConstants.featureConstants.InlineToneSubtle,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: t("doc_copilot_option_tone_casual"),
        onClick: () => {
          if (e != null) {
            e({
              action: writingTaskConstants.writingTasks.TONE_ADJUSTMENT_MORE_EASY,
              text: t("doc_copilot_option_tone_casual")
            });
          }
        }
      }, {
        key: documentFeatureConstants.featureConstants.InlineToneElegant,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: t("doc_copilot_option_tone_literary"),
        onClick: () => {
          if (e != null) {
            e({
              action: writingTaskConstants.writingTasks.TONE_ADJUSTMENT_MORE_LITERARY,
              text: t("doc_copilot_option_tone_literary")
            });
          }
        }
      }, {
        key: documentFeatureConstants.featureConstants.InlineToneTrendy,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: t("doc_copilot_option_tone_internet"),
        onClick: () => {
          if (e != null) {
            e({
              action: writingTaskConstants.writingTasks.TONE_ADJUSTMENT_MORE_NET_SENSE,
              text: t("doc_copilot_option_tone_internet")
            });
          }
        }
      }]
    }];
  };
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var reactUseEventListener = require("react-use-event-listener") /*id: 55281*/;
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var exitOutlinedIcon = require("exit-outlined-icon") /*id: 379234*/;
  let eK = e => e.flatMap(e => e.children ? eK(e.children) : e);
  var eX = {
    wrapper: "wrapper-PiM3QY",
    container: "container-oAlxqo",
    "right-icon": "right-icon-JOBTjU"
  };
  let eq = e => {
    let {
      contentClassName: t,
      focus: n = false,
      rewriteActions: i = [],
      children: r,
      onClickItem: a,
      onArrowInput: s,
      visible: c,
      forceVisible: d,
      rePosKey: u,
      iconSize: h = "middle",
      fontSize: p = "large",
      ...f
    } = e;
    let [m, g] = reactCoreLibraryReexport.useState();
    let v = reactCoreLibraryReexport.useMemo(() => eK(i), [i]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(m)) {
        g(Math.min(v.length - 1, m));
      }
    }, [v.length]);
    reactCoreLibraryReexport.useEffect(() => {
      g(n ? 0 : undefined);
    }, [n]);
    reactUseEventListener.useEventListener("ArrowUp", e => {
      if (c) {
        if (s != null) {
          s();
        }
        if (!!n && !isUndefinedCheck.isUndefined(m)) {
          e.preventDefault();
          g(Math.max(0, m - 1));
        }
      }
    });
    reactUseEventListener.useEventListener("ArrowDown", e => {
      if (c) {
        if (s != null) {
          s();
        }
        if (!!n && !isUndefinedCheck.isUndefined(m)) {
          e.preventDefault();
          g(Math.min(v.length - 1, m + 1));
        }
      }
    });
    reactUseEventListener.useEventListener("Enter", e => {
      if (!c || !n || isUndefinedCheck.isUndefined(m)) {
        return;
      }
      e.preventDefault();
      let t = v[m];
      if (t) {
        b(t);
      }
    });
    let b = e => {
      let {
        onClick: t,
        key: n
      } = e;
      if (t) {
        t();
        return;
      }
      if (n) {
        if (a != null) {
          a(n);
        }
      }
    };
    let y = (e, t) => {
      let n = t.flatMap(e => {
        return e.children ?? e;
      });
      let i = arrayFirstElement.getFirstElement(n);
      let r = lastElementHelper.getLastElement(n);
      let o = i && v.indexOf(i);
      let a = r && v.indexOf(r);
      return !isUndefinedCheck.isUndefined(o) && !isUndefinedCheck.isUndefined(a) && e <= a && e >= o;
    };
    let _ = e => e.map(e => {
      let {
        key: t,
        label: n,
        icon: i,
        children: r
      } = e;
      let o = v.indexOf(e);
      return {
        value: t ?? "",
        icon: i,
        label: n,
        hovered: o === m || !!r && !isUndefinedCheck.isUndefined(m) && !!y(m, r),
        rightIcon: o === m ? reactJsxRuntimeCoreReexport.jsx(exitOutlinedIcon.ExitOutlined, {
          className: eX["right-icon"]
        }) : undefined,
        onClick: () => {
          b(e);
        },
        subOptions: r && _(r)
      };
    });
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      ...f,
      iconSize: h,
      fontSize: p,
      rePosKey: u,
      visible: c,
      className: eX.wrapper,
      contentClassName: l(eX.container, t),
      defaultValue: "",
      selectable: false,
      scrollable: false,
      newIcon: true,
      forceVisible: !!i.length && d,
      options: _(i),
      children: r
    });
  };
  let eY = e => {
    let {
      className: t,
      style: n,
      rpcClientId: i,
      onSubmit: r,
      chatInputType: s,
      rePostKey: c,
      onAISpaceModalVisibleChange: d
    } = e;
    let {
      showCopilotChat: u
    } = writingSkillStore.writingSkillStore.getState();
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let p = reactCoreLibraryReexport.useRef(null);
    let f = reactCoreLibraryReexport.useRef(null);
    let [m, g] = reactCoreLibraryReexport.useState(true);
    let [b, y] = reactCoreLibraryReexport.useState(true);
    let [_, E] = reactCoreLibraryReexport.useState([]);
    let [w, x] = reactCoreLibraryReexport.useState(null);
    let [C, S] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      docxPanelUtils.docPanelUtils.getIsFirstLineEmpty(i).then(e => S(!!e));
    }, [i]);
    let T = useDelayedState.useDelayedState(m && !w && isEmptyUtil.isEmpty(_), false);
    reactCoreLibraryReexport.useEffect(() => {
      if (m) {
        createNewFileEventTracker.trackAiWriteMenuShow();
      }
    }, [m]);
    let k = async () => {
      var e;
      await promiseAsyncUtilities.createDelayedPromise(200);
      if ((e = p.current) !== null && e !== undefined) {
        e.focus();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      k();
    }, []);
    let O = useDebouncedCallbackHook.useDebouncedFn(e => {
      let {
        action: t,
        text: n,
        element: i
      } = e;
      createNewFileEventTracker.trackAiWriteMenuClick(n);
      if (i) {
        x(e);
        return;
      }
      if (r != null) {
        r({
          action: t,
          text: n
        });
      }
    });
    let I = eL({
      onClick: O
    });
    let N = () => {
      x(null);
    };
    let j = eF({
      onClick: O,
      onReturn: N
    });
    let R = functionInvoker.invoke(() => C ? j : I);
    let Z = eB({
      onClick: O
    });
    let D = functionInvoker.invoke(() => (w == null ? undefined : w.element) ? w == null ? undefined : w.element({
      onCloseTab: N
    }) : null);
    let M = functionInvoker.invoke(() => (w == null ? undefined : w.placeholder) ? w.placeholder : C ? h("doc_copilot_writeAI_inputBox_placeholder") : h("doc_copilot_newPara_placeholder"));
    let A = reactJsxRuntimeCoreReexport.jsx(chatInputWithAttachmentsComponent.ChatInputWithAttachments, {
      ref: p,
      className: l(eM.input, false),
      editorProps: {
        placeholder: M,
        onChange: e => {
          g(ex(e));
        },
        onFocus: () => {
          y(false);
        }
      },
      customArea: D,
      onBeforeSendMessage: e => {
        u();
        let {
          prefix: n
        } = w ?? {};
        if (n && e) {
          e.sendMessageOptions = collectionMapMatcher.mapWithMatcher(e.sendMessageOptions, e => {
            if (pathArrayValidation.validatePathArray(e, "text")) {
              let t = objectPathGetDefault.getObjectPathDefault(e, "text", "");
              return {
                ...e,
                text: isFunctionUtil_1.isFunction(n) ? n(t) : n + t
              };
            }
            return e;
          });
        }
        if (r != null) {
          r({
            action: (w == null ? undefined : w.action) ?? writingTaskConstants.writingTasks.DIRECT_INPUT,
            options: e
          });
        }
        return Promise.resolve(false);
      },
      onAttachmentsChange: e => {
        E(e);
      },
      onAISpaceModalVisibleChange: d,
      behavior: {
        onlineSearch: {
          onInit: () => {
            var e;
            if ((e = docxPanelBridge.docxBridgeManager.get().docXPanelController) !== null && e !== undefined) {
              e.bizEvents.emit("behavior.rewrite-panel.input-action-browsing-switch-show");
            }
          },
          onClick: function () {
            var e;
            let {
              value: t
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if ((e = docxPanelBridge.docxBridgeManager.get().docXPanelController) !== null && e !== undefined) {
              e.bizEvents.emit("behavior.rewrite-panel.input-action-browsing-switch-click", {
                value: !!t
              });
            }
          }
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: f,
      className: l(eM.container, t),
      style: n,
      "data-testid": "doc_new_content_generator_panel",
      children: [A, s === es.AiRewrite ? reactJsxRuntimeCoreReexport.jsx(eq, {
        rePosKey: c,
        rewriteActions: Z,
        visible: T,
        forceVisible: T,
        mouseEnterDelay: 1000,
        mouseLeaveDelay: 1000,
        spacing: 4,
        position: "bottomLeft",
        focus: b,
        onArrowInput: () => {
          var e;
          if ((e = p.current) !== null && e !== undefined) {
            e.blur();
          }
          y(true);
        },
        onMouseDown: e => {
          e.stopPropagation();
        },
        getPopupContainer: () => f.current || document.body,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: eM["popover-reference"]
        })
      }) : reactJsxRuntimeCoreReexport.jsx(businessSkillBarMenuWrapper.BusinessSkillBarMenu, {
        actions: R,
        visible: T,
        forceVisible: T,
        mouseEnterDelay: 1000,
        mouseLeaveDelay: 1000,
        spacing: 4,
        position: "bottomLeft",
        focus: b,
        onArrowInput: () => {
          var e;
          if ((e = p.current) !== null && e !== undefined) {
            e.blur();
          }
          y(true);
        },
        onMouseDown: e => {
          e.stopPropagation();
        },
        getPopupContainer: () => f.current || document.body,
        contentClassName: eM.popover,
        margin: 70,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: eM["popover-reference"]
        })
      })]
    });
  };
  var eQ = {
    container: "container-JlNVph",
    iframe: "iframe-DbMiQI",
    overlay: "overlay-VrX0TK",
    fullScreen: "fullScreen-zIbnuc",
    "fullScreen-iframe": "fullScreen-iframe-iXisAA"
  };
  let eJ = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var i;
    let {
      docId: O,
      clientId: N,
      className: R,
      fullScreen: Z = false,
      isPreview: F = false,
      isHistory: W = false,
      isInline: G = false,
      isShareModal: el = false,
      version: ed,
      perfStartTime: eu,
      ...eh
    } = e;
    let ep = reactCoreLibraryReexport.useRef(null);
    let ef = reactCoreLibraryReexport.useMemo(() => new URLSearchParams(window.location.search).get("debug_revision"), []);
    let em = (n = location.pathname) === null || n === undefined ? undefined : n.startsWith("/chat/");
    let eg = (i = location.pathname) === null || i === undefined ? undefined : i.startsWith("/thread/");
    let ev = em ? "chat" : eg ? "thread" : undefined;
    let eb = reactCoreLibraryReexport.useMemo(() => docxPanelUrlBuilder.getDocxPanelUrl({
      docId: O,
      clientId: N,
      isPreview: F,
      isHistory: W,
      isInline: G,
      version: ed,
      debugRevision: ef,
      isChatPage: em,
      isThreadPage: eg
    }), [O, N, F, W, G, ed, ef]);
    (function () {
      let e = reactCoreLibraryReexport.useRef(false);
      reactCoreLibraryReexport.useEffect(() => {
        if (e.current) {
          return;
        }
        e.current = true;
        let t = rpcHostManager.RpcHostManager.getInstance();
        H.register(t, {
          getChatSlice: e => chatStoreManager.getStoreState(e),
          getChatService: e => chatIocServiceLoaderHook.loadServiceAsync(e),
          useWriteStore: writingSkillStore.writingSkillStore,
          useSuperTaskStore: superTaskStore.superTaskStore
        });
        B.register(t);
        I.register(t, {
          writeConfig: writeConfigManager.WriteConfigManager
        });
        j.register(t, {
          trackEvent: teaAnalyticsEventTracker.trackEvent
        });
        D.register(t, {
          slardarInstance: {
            getContext: () => {
              var e;
              var t;
              if ((t = window.inlineSlardarInstance) === null || t === undefined) {
                return undefined;
              } else if ((e = t.context) === null || e === undefined) {
                return undefined;
              } else {
                return e.toString();
              }
            }
          }
        });
        let n = appIdentityUtils.getAppIdentity();
        docxPanelUtils.docPanelUtils.register(t, {
          getLang: () => languageCodeNormalizer.normalizeLanguageCode(i18nLanguageStorageUtils.getUserLanguage()) || "zh",
          getPolicySdkEnv: () => n
        });
        let i = feishuAccessTokenService.getFeishuAccessTokenService();
        if (i) {
          authTokenRegister.authTokenManager.register(t, {
            feishuAccessTokenService: i
          });
        }
        docxPanelMethodRegistrar.registerTmplConfig(t, feishuDocxPanelConfigLoader.loadFeishuTempConfig);
      }, []);
    })();
    reactCoreLibraryReexport.useEffect(() => {
      if (!N || el) {
        return;
      }
      let e = e => e === chatSkillInputConstants.SkillDisplayType.Sidebar || e === chatSkillInputConstants.SkillDisplayType.Popover;
      let t = writingSkillStore.writingSkillStore.getState().docPageChatLayoutMode;
      H.emitSidebarVisibleChanged(N, e(t));
      return writingSkillStore.writingSkillStore.subscribe(e => e.docPageChatLayoutMode, t => {
        H.emitSidebarVisibleChanged(N, e(t));
      });
    }, [N, el]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!N || el) {
        return;
      }
      let e = chatStoreManager.getStore("chatViewCanvasStore");
      if (!e) {
        return;
      }
      let t = e.getState().isExpand;
      H.emitCanvasExpandChanged(N, t);
      return e.subscribe(e => e.isExpand, e => {
        H.emitCanvasExpandChanged(N, e);
      });
    }, [N, el]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if (N && !el) {
        if ((e = chatStoreManager.getStore("refContentStore")) === null || e === undefined) {
          return undefined;
        } else {
          return e.subscribe(e => e.refContentMap || {}, e => {
            var n;
            var r;
            let a = (n = chatStoreManager.getStoreState("chatViewCoreStore")) === null || n === undefined ? undefined : n.currentChatViewConfig?.chatId;
            if (a) {
              let t = (((r = e[a]) === null || r === undefined ? undefined : r.refContents?.length) ?? 0) === 0;
              H.emitRefContentChanged(N, {
                chatId: a,
                isEmpty: t
              });
            }
          });
        }
      }
    }, [N, el]);
    let ey = reactCoreLibraryReexport.useCallback(timestampMarker.getMark, []);
    let {
      isLoading: e_
    } = useDocxPerformanceMonitor.useDocxPerfMonitor(N, {
      perfStartTime: eu,
      openCanvasTime: ey()
    }, {
      docId: O,
      isPreview: F,
      isHistory: W,
      isInline: G,
      version: ed,
      enterFrom: ev
    });
    let {
      chatInputVisible: eE,
      realRect: ew,
      inputWidth: ex,
      popoverRef: eC,
      blockIdRef: eS,
      openChatInputParamsRef: eT,
      setAiSpaceModalVisible: ek,
      handleChangeChatInputVisible: eO
    } = function (e, t) {
      let [n, i] = reactCoreLibraryReexport.useState(false);
      let [r, a] = reactCoreLibraryReexport.useState();
      let [s, l] = reactCoreLibraryReexport.useState();
      let [c, d] = reactCoreLibraryReexport.useState(false);
      let u = reactCoreLibraryReexport.useRef(null);
      let h = reactCoreLibraryReexport.useRef(null);
      let p = reactCoreLibraryReexport.useRef();
      let f = useLatestRef_1.useLatestRef(n);
      let m = useLatestRef_1.useLatestRef(c);
      let g = useLatestRef_1.useLatestRef(s);
      let v = reactCoreLibraryReexport.useCallback(e => {
        a({
          top: e.top,
          left: e.left
        });
      }, []);
      let b = reactCoreLibraryReexport.useCallback(t => {
        if (f.current !== t && h.current !== null && p.current) {
          i(t);
          H.emitChangeVisible(e, {
            visible: t,
            blockId: h.current,
            chatInputType: p.current.chatInputType
          });
        }
        if (t === false) {
          a(undefined);
        }
      }, [e, f]);
      let y = reactCoreLibraryReexport.useCallback(e => {
        let {
          rect: t,
          blockId: n,
          chatInputType: i
        } = e;
        h.current = n;
        p.current = {
          blockId: n,
          chatInputType: i,
          rect: t
        };
        if (t) {
          v(t);
        }
        b(true);
      }, [v, b]);
      let _ = reactCoreLibraryReexport.useCallback(e => {
        if (g.current !== e.width) {
          l(e.width);
        }
      }, [g]);
      let E = reactCoreLibraryReexport.useCallback(() => {
        b(false);
      }, [b]);
      let w = reactCoreLibraryReexport.useCallback(t => {
        if (!f.current) {
          commentRpcServiceClient.commentRpcService.hideHistoryCommentBox(e).catch(emptyExportFunction.emptyFunction);
          return;
        }
        if (m.current || m.current === false && c) {
          return;
        }
        let n = t.composedPath();
        if (!u.current || !n.includes(u.current)) {
          for (let e of [...document.querySelectorAll(".semi-portal")]) {
            if (n.includes(e)) {
              return;
            }
          }
          b(false);
          commentRpcServiceClient.commentRpcService.hideHistoryCommentBox(e).catch(emptyExportFunction.emptyFunction);
        }
      }, [e, f, m, c, b]);
      reactCoreLibraryReexport.useEffect(() => {
        document.addEventListener("click", w);
        return () => {
          document.removeEventListener("click", w);
        };
      }, [w]);
      reactCoreLibraryReexport.useEffect(() => {
        if (e && !t) {
          return H.subscribeEvents(e, {
            onChatInputOpen: y,
            onChatInputUpdatePosition: v,
            onChatInputPageBlockResize: _,
            onChatInputForceClose: E,
            onBehaviorOpenRewritePanel: () => {
              asyncSkillMessageLifecycle_2.skillLifecycle.emit("behavior.open-rewrite-panel");
            },
            onBehaviorRewritePanelAction: e => {
              asyncSkillMessageLifecycle_2.skillLifecycle.emit("behavior.rewrite-panel-action", e);
            },
            onBehaviorClickCopy: e => {
              asyncSkillMessageLifecycle_2.skillLifecycle.emit("behavior.click-copy", e);
            }
          });
        }
      }, [e, t, y, v, _, E]);
      return {
        chatInputVisible: n,
        realRect: r,
        inputWidth: s,
        popoverRef: u,
        blockIdRef: h,
        openChatInputParamsRef: p,
        setAiSpaceModalVisible: d,
        handleChangeChatInputVisible: b
      };
    }(N, el);
    let {
      handleSubmit: eI
    } = function (e) {
      let {
        clientId: t,
        blockIdRef: n,
        openChatInputParamsRef: i,
        onAfterSubmit: r
      } = e;
      let {
        updateDocPageChatLayoutMode: a
      } = writingSkillStore.writingSkillStore.getState();
      let {
        sendMessage: s
      } = chatServiceContext.useChatService("chatMessageService");
      let {
        sendWritePayloadMessage: l
      } = asyncWriteSkillMessageSender.useWritePayload();
      let c = chatViewCoreSelectors.useChatId();
      ec({
        chatId: c,
        clientId: t
      });
      reactCoreLibraryReexport.useEffect(() => {
        if (!t || !c) {
          return;
        }
        let e = null;
        let n = null;
        return chatMessageStoreFactory.createMessageStore.subscribe(i => {
          let a = i.messageLinkMap[c] ?? [];
          let s = a[a.length - 1];
          if (!s) {
            return;
          }
          let l = conversationMessageUtils_1.getMessageFromLink(i, c, s);
          if (!l || !messageContentTypeAndStatusChecker.ssP(l)) {
            return;
          }
          let d = l.final_status?.message !== "Broken" && !chatMessageStatusCheck.isMessageFinished(l) && !messageContentTypeAndStatusChecker.vlk(l);
          if (d !== e || s.messageId !== n) {
            e = d;
            n = s.messageId;
            B.emitStatusChange(t, {
              chatId: c,
              messageId: s.messageId,
              isStreaming: d
            });
          }
        });
      }, [t, c]);
      return {
        handleSubmit: reactCoreLibraryReexport.useCallback(async e => {
          let {
            action: o,
            options: d,
            text: u
          } = e;
          let {
            sendMessageOptions: h
          } = d ?? {};
          if (n.current === null) {
            return;
          }
          let {
            chatInputType: p
          } = i.current || {};
          if (p === es.AiRewrite) {
            asyncSkillMessageLifecycle_2.skillLifecycle.emit("behavior.partial-writing.submit", o);
          } else {
            asyncSkillMessageLifecycle_2.skillLifecycle.emit("behavior.startup-writing.submit", o);
          }
          if (p === es.AiRewrite) {
            let e = await H.getSelectionParams(t, {
              action: o
            });
            if (e && pathArrayStartEndValidator.validatePathBounds(e.selectedContent)) {
              let {
                selectedContent: t,
                docStructureVersion: n,
                reference: i,
                rewritingType: r
              } = e;
              let a = chatActionFormatter.formatChatAction({
                options: h,
                ext: {
                  doc_action: o ?? writingTaskConstants.writingTasks.UNKNOWN,
                  text: u ?? "",
                  type: writingTaskConstants.inputModes.SELECTION,
                  selection: t,
                  docStructureVersion: String(n)
                },
                reference: i,
                reportParams: {
                  scene: "canvas_selection_bar",
                  canvas_bar_type: r,
                  rewrite_command: infraUtilFunctions.parseNumber(o)
                }
              });
              if (a) {
                await l({
                  payload: a[0],
                  rawSendMessage: s,
                  conversationId: c,
                  inputSkillObj: safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(a[0], "ext.input_skill"), undefined),
                  reportParams: a[0].reportParams
                });
              }
            }
          } else {
            let e = await H.getBlockWriteContext(t, n.current);
            if (!e) {
              if (r != null) {
                r();
              }
              throw Error(`No related context of block: ${n.current}`);
            }
            let i = {
              block_id: e.recordId,
              offset: 0
            };
            if (!pathArrayValidator_1.validatePathArray(i)) {
              if (r != null) {
                r();
              }
              throw Error("Bad cursor when submit");
            }
            let a = chatActionFormatter.formatChatAction({
              options: h,
              ext: {
                doc_action: o ?? writingTaskConstants.writingTasks.UNKNOWN,
                text: u ?? "",
                type: writingTaskConstants.inputModes.CURSOR,
                cursor: i,
                docStructureVersion: e.syncVersion
              },
              reportParams: {
                scene: "ai_write",
                rewrite_command: o
              }
            });
            await l({
              payload: a[0],
              rawSendMessage: s,
              conversationId: c,
              inputSkillObj: safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(a[0], "extraExt.input_skill"), undefined),
              reportParams: a[0].reportParams
            });
          }
          if (n.current !== null && i.current) {
            H.emitAfterSubmit(t, n.current, i.current.chatInputType);
          }
          a(chatSkillInputConstants.SkillDisplayType.Sidebar);
          if (r != null) {
            r();
          }
        }, [t, c, n, i, s, l, a, r])
      };
    }({
      clientId: N,
      blockIdRef: eS,
      openChatInputParamsRef: eT,
      onAfterSubmit: () => eO(false)
    });
    let eP = skillPinModalCallback.useSkillPinCallback(e => {
      if (isFunctionUtil_1.isFunction(t)) {
        t(e);
      } else if (t) {
        t.current = e;
      }
      ep.current = e;
    });
    let eN = reactCoreLibraryReexport.useMemo(() => ({
      position: "absolute",
      zIndex: 89,
      ...(ew ? {
        top: `${ew.top}px`,
        left: `${ew.left}px`
      } : {})
    }), [ew]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l(eQ.container, R, {
          [eQ.fullScreen]: Z
        }),
        children: [reactJsxRuntimeCoreReexport.jsx("iframe", {
          ref: eP,
          id: "flow-docx-iframe",
          className: l(eQ.iframe, N, {
            [eQ["fullScreen-iframe"]]: Z
          }),
          src: xssContentSanitizer.sanitizeUrl(eb, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmFSemxxWl$Ne*$scEhjM1Jh$jFKd1pF-z$l$XhZ$1hsT%1rc*9ZekpWZEZwWF$uQmtSemw1$ERK%2RsbD$N$3hh%jJ3d1lqTkpkR0Z-TkhSaF-xcD$X$mN4-k$3eWJI$mFSM$kw$Ec1%2$t$khSbmxhTTFaNg"
          }),
          frameBorder: 0,
          allow: "clipboard-read; clipboard-write",
          ...eh
        }, eb), e_ && reactJsxRuntimeCoreReexport.jsx("div", {
          className: eQ.overlay,
          children: reactJsxRuntimeCoreReexport.jsx(docSkeletonPanel.DocSkeletonPanel, {})
        })]
      }), eE && ew && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          ref: eC,
          style: eN,
          children: reactJsxRuntimeCoreReexport.jsx(eY, {
            style: {
              width: ex,
              ...emptyObjectFactory.createEmptyObject()
            },
            rpcClientId: N,
            onSubmit: eI,
            chatInputType: eT.current?.chatInputType,
            rePostKey: String(ex),
            onAISpaceModalVisibleChange: ek
          })
        })
      })]
    });
  });
  require.d(exports, {
    InlineDocxPanel: function () {
      return eJ;
    }
  });
}