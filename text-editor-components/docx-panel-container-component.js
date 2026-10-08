// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'DocxPanelContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 822327
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var a;
  var l;
  var s;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var randomNumberUtil = require("random-number-util") /*id: 636015*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var _ = classnamesUtils;
  var docPlaygroundCheck = require("doc-playground-check") /*id: 993680*/;
  var asyncLayoutCanvas_1 = require("async-layout-canvas_1") /*id: 857808*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var reactUseRunOnce = require("react-use-run-once") /*id: 561418*/;
  var useBooleanHook = require("use-boolean-hook") /*id: 240989*/;
  var disableSelectBarConst = require("disable-select-bar-const") /*id: 554633*/;
  var imChatFlowSelectBar = require("im-chat-flow-select-bar") /*id: 808678*/;
  var flowPermissionHooks = require("flow-permission-hooks") /*id: 930373*/;
  var docxPanelUtils = require("docx-panel-utils") /*id: 678171*/;
  var lifecycleEventManager = require("lifecycle-event-manager") /*id: 597916*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  let $ = (e, n) => {
    let o = rpcHostManager.RpcHostManager.getInstance();
    if (!o || !e) {
      return emptyExportFunction.emptyFunction;
    }
    let i = [["enterFullScreen", "domService.enterFullScreen"], ["exitFullScreen", "domService.exitFullScreen"]];
    let r = [];
    let a = () => {
      i.forEach(i => {
        let [a, l] = i;
        let s = n[a];
        if (s) {
          r.push(o.on(e, l, s));
        }
      });
    };
    let l = () => {
      r.forEach(e => e());
      r = [];
    };
    if (o.isClientConnected(e)) {
      a();
    }
    let s = o.onConnection(n => {
      if (n === e && r.length === 0) {
        a();
      }
    });
    let c = o.onDisconnection(n => {
      if (n === e) {
        l();
      }
    });
    return () => {
      s();
      c();
      l();
    };
  };
  var inlineDocxPanel_1 = require("inline-docx-panel_1") /*id: 913362*/;
  var docxCanvasAiStatusIndicator = require("docx-canvas-ai-status-indicator") /*id: 811271*/;
  var docxWidthModeHooks = require("docx-width-mode-hooks") /*id: 978094*/;
  var messageDocContextUtil = require("message-doc-context-util") /*id: 406671*/;
  var docStreamingStatus = require("doc-streaming-status") /*id: 840575*/;
  var flowDocxEditorContext = require("flow-docx-editor-context") /*id: 912706*/;
  var asyncSkillMessageLifecycle_2 = require("async-skill-message-lifecycle_2") /*id: 288954*/;
  var docxPanelControllerSdk = require("docx-panel-controller-sdk") /*id: 631134*/;
  var reduxCoreApi = require("redux-core-api") /*id: 76673*/;
  (i = {}).isDocEditableRole = "isDocEditableRole";
  i.isHistoryBoxReady = "isHistoryBoxReady";
  let P = i;
  let A = {
    isDocEditableRole: false,
    isHistoryBoxReady: false
  };
  let z = reduxCoreApi.createStore(function (e = A, n) {
    switch (n.type) {
      case P.isDocEditableRole:
        return {
          ...e,
          isDocEditableRole: n.payload
        };
      case P.isHistoryBoxReady:
        return {
          ...e,
          isHistoryBoxReady: n.payload
        };
      default:
        return e;
    }
  });
  function O(e) {
    return e.isDocEditableRole;
  }
  function B(e) {
    return e.isHistoryBoxReady;
  }
  var docLauncherStatus = require("doc-launcher-status") /*id: 126777*/;
  let U = (e, n) => {
    let [o, i] = reactCoreLibraryReexport.useState(false);
    let [r, a] = reactCoreLibraryReexport.useState(false);
    let {
      isMightStreaming: l,
      streamingSource: s
    } = docStreamingStatus.useStreamingStatus(e);
    reactCoreLibraryReexport.useEffect(() => {
      if (!n) {
        i(false);
        return;
      }
      docxPanelUtils.docPanelUtils.getIsFirstLineEmpty(n).then(e => {
        i(e || false);
      });
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l && s && [docLauncherStatus.getLaunchStatus.Rewrite, docLauncherStatus.getLaunchStatus.Startup].includes(s)) {
        a(true);
      }
    }, [l, s]);
    return o && !r;
  };
  var routePathUtils = require("route-path-utils") /*id: 930304*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var docxPanelControllerUtils = require("docx-panel-controller-utils") /*id: 635047*/;
  (r = X || {}).CHAT = "chat";
  r.DOC = "ai_doc_detail";
  var X = r;
  let G = () => {
    let e = reactCoreLibraryReexport.useRef(0);
    let n = routePathUtils.isCurrentChatPath();
    let o = docxPanelControllerUtils.getDocxPanelControllerIfExists();
    let i = reactCoreLibraryReexport.useRef(false);
    let r = () => {
      if (i.current) {
        return;
      }
      i.current = true;
      let r = Date.now() - e.current;
      let a = (o == null ? undefined : o.docId) || "";
      teaAnalyticsEventTracker.trackEvent("doc_close", {
        duration: r,
        artifact_type: "1",
        page_token: a,
        enter_from: routePathUtils.getEnterSource(),
        canvas_type: n ? "writing" : null,
        current_page: n ? X.CHAT : X.DOC
      });
    };
    let a = () => {
      if (document.visibilityState === "hidden") {
        r();
      } else {
        i.current = false;
        e.current = Date.now();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      e.current = Date.now();
      window.addEventListener("beforeunload", r);
      window.addEventListener("pagehide", r);
      document.addEventListener("visibilitychange", a);
      return () => {
        window.removeEventListener("beforeunload", r);
        window.removeEventListener("pagehide", r);
        document.removeEventListener("visibilitychange", a);
      };
    }, []);
  };
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  let Q = false;
  let ee = () => {
    if (Q) {
      return;
    }
    let n = chatUserInfoActions.getUserInfo()?.user_id_str;
    safeObjectSetWrapper.safeObjectSet(window, "User.id", n);
    Q = true;
  };
  (a = {})[a.NotFinished = 0] = "NotFinished";
  a[a.Finished = 1] = "Finished";
  let et = a;
  let en = () => userInfoStatusSelectors.selectUserInfoLoading() ? et.NotFinished : (ee(), et.Finished);
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var notificationServiceWrapper = require("notification-service-wrapper") /*id: 630603*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var textFormatterComponent = require("text-formatter-component") /*id: 532796*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var wrenchToolIcon = require("wrench-tool-icon") /*id: 457145*/;
  var rtlListIconComponent = require("rtl-list-icon-component") /*id: 48768*/;
  var businessSkillBarIcon = require("business-skill-bar-icon") /*id: 282062*/;
  var skillBarIconComponent = require("skill-bar-icon-component") /*id: 278022*/;
  var returnOutlinedIcon = require("return-outlined-icon") /*id: 672563*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var eh = {
    Generating: 1,
    Generated: 2
  };
  var ev = {
    InstructRewrite: 1,
    ChatRewrite: 2
  };
  (l = {})[l.ArtifactPolish = 1] = "ArtifactPolish";
  l[l.ArtifactAdjustLonger = 2] = "ArtifactAdjustLonger";
  l[l.ArtifactAdjustShorter = 3] = "ArtifactAdjustShorter";
  let ef = l;
  (s = {}).CanvasFunction = "canvas_function";
  s.CanvasSelectionBar = "canvas_selection_bar";
  let eg = s;
  var artifactLayoutConstants = require("artifact-layout-constants") /*id: 554108*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var flowDocumentManagementService = require("flow-document-management-service") /*id: 588256*/;
  let ek = async e => {
    let {
      fetchDocArtifactMeta: n
    } = writingSkillStore.writingSkillStore.getState();
    try {
      let {
        version_list: i = []
      } = await n({
        docId: e,
        cache: false
      });
      let r = i.find(e => e.resource_version === artifactLayoutConstants.subResourceIndex);
      let a = infraUtilFunctions.parseNumber(r == null ? undefined : r.ext?.base_page_minor_version);
      if (isUndefinedCheck.isUndefined(a)) {
        throw Error("Cannot get prev artifact minor version");
      }
      await flowDocumentManagementService.revertDocumentHistory({
        docId: e,
        minorVersion: a
      });
    } catch (e) {
      samanthaToastFactory.toastInstance.warning(i18nTranslationUtils.i18nextTranslate("doc_rewrite_revert_failed"));
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "revert_latest_rewrite_error",
        error: e
      });
    }
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var eR = {
    container: "container-ATiokB",
    avatar: "avatar-J0Lct5"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let eC = e => {
    let {
      className: n,
      style: o,
      icon: i,
      avatar: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: _(eR.container, n),
      style: o,
      children: [i, r && reactJsxRuntimeCoreReexport.jsx("img", {
        className: eR.avatar,
        src: xssContentSanitizer.sanitizeUrl(r, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-Wlpi$$o2$2xNe*EySXl%alJN$0$Kb1ltM$djMHhZ$1hsT%1taDJZakowZWt3elZuc*F$ekZ2$1ZjMWEySkhWWFJo$npoMFdsa*FiR0p1$W5wT%1rNTJZb*hDZ*1KdFZu$mtTRTEyW$ZkT2RtSnBN$E5o$0ZKdlR*ZEdNb*xZ$W1oamF%bHdZbTFT-kdWRE5%QmpNMmhvWTIxa01XTjNQ$DA9"
        })
      })]
    });
  };
  var e$ = {
    "folded-title": "folded-title-xPt4Do",
    text: "text-mJa1OP"
  };
  let ej = (e, n) => {
    let o = {
      [ef.ArtifactPolish]: {
        icon: reactJsxRuntimeCoreReexport.jsx(wrenchToolIcon.WrenchToolIcon, {}),
        title: i18nTranslationUtils.i18nextTranslate("canvas_writing_shortcuts_polish")
      },
      [ef.ArtifactAdjustShorter]: {
        icon: reactJsxRuntimeCoreReexport.jsx(rtlListIconComponent.RtlListIcon, {}),
        title: i18nTranslationUtils.i18nextTranslate("canvas_writing_shortcuts_adjust_length_shorter")
      },
      [ef.ArtifactAdjustLonger]: {
        icon: reactJsxRuntimeCoreReexport.jsx(businessSkillBarIcon.SkillBarIcon, {}),
        title: i18nTranslationUtils.i18nextTranslate("canvas_writing_shortcuts_adjust_length_longer")
      }
    };
    let i = {
      icon: reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {}),
      title: i18nTranslationUtils.i18nextTranslate("doc_full_page_rewriting")
    };
    if (e === ev.ChatRewrite) {
      return i;
    }
    if (!isUndefinedCheck.isUndefined(n)) {
      return o[n] ?? i;
    }
    return i;
  };
  let eN = e => {
    let {
      controller: n
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let i = e => {
      try {
        let {
          status: r,
          action: a,
          user_info: l,
          prompt: s,
          rewrite_key: c
        } = e;
        let {
          docId: d
        } = n;
        let u = chatUserInfoActions.getUserInfo()?.user_id_str;
        if (!u) {
          throw Error("Fail to get user id");
        }
        if (r === eh.Generating) {
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "doc_streaming_start",
            meta: {
              doc_id: n.docId,
              status: r
            }
          });
        }
        if (r !== eh.Generated || !collectionIncludesUtil.includes([ev.ChatRewrite, ev.InstructRewrite], a)) {
          return;
        }
        let {
          user_id: m,
          avatar_url: p,
          name: _
        } = l;
        let {
          title: h,
          icon: v
        } = ej(a, c);
        let f = a === ev.ChatRewrite ? s : undefined;
        if (m === u) {
          let e = notificationServiceWrapper.notificationService.open({
            icon: v,
            title: o("doc_streaming_finished_notice_title", {
              postProcess: "sprintf",
              sprintf: [h]
            }),
            desc: f,
            right: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              icon: reactJsxRuntimeCoreReexport.jsx(returnOutlinedIcon.ReturnOutlinedIcon, {}),
              type: "tertiary",
              size: "small",
              onClick: () => {
                ek(d);
                notificationServiceWrapper.notificationService.close(e);
              },
              children: o("doc_streaming_finished_notice_revert")
            })
          });
        } else {
          notificationServiceWrapper.notificationService.open({
            icon: reactJsxRuntimeCoreReexport.jsx(eC, {
              icon: reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {}),
              avatar: p
            }),
            title: reactJsxRuntimeCoreReexport.jsx(textFormatterComponent.textFormatter, {
              className: e$["folded-title"],
              textClassName: e$.text,
              replaceTextClassName: e$.text,
              text: o("doc_streaming_finished_notice_by_others_title", {
                postProcess: "sprintf",
                sprintf: ["{name}"]
              }),
              replacingMap: {
                name: _
              }
            }),
            desc: f
          });
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "handle_io_aigc_event_error",
          error: e
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      n.bizEvents.on("io.aigc", i);
      return () => {
        n.bizEvents.off("io.aigc", i);
      };
    }, []);
  };
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  let eI = e => {
    let {
      controller: n
    } = e;
    let o = skillPinModalCallback.useSkillPinCallback(e => {
      let {
        op_map: o
      } = e;
      for (let e of objectValuesHelper.getObjectValues(o).flat().map(e => e.ops).flat()) {
        if (deepEqualUtil_1.deepEqual(e.p, ["image"]) && e.action?.oi) {
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "doc_generate_image_success",
            meta: {
              doc_id: n.docId
            }
          });
        }
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      n.bizEvents.on("io.new-changes", o);
      return () => {
        n.bizEvents.off("io.new-changes", o);
      };
    }, []);
  };
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var aiDocCreateTracking = require("ai-doc-create-tracking") /*id: 86772*/;
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  var plusIcon = require("plus-icon") /*id: 578680*/;
  var ez = e => {
    let {
      dataTestId: n = "empty_doc_init_page"
    } = e;
    let [o, i] = reactCoreLibraryReexport.useState(false);
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let a = async () => {
      if (!o) {
        try {
          i(true);
          await documentNavigationAndCreationUtils.createDocumentWithToast({
            parentNodeId: undefined,
            onSuccess: e => {
              aiDocCreateTracking.trackDocCreate({
                clickFrom: aiDocCreateTracking.createEntryPoints.AiDocListCreateButton,
                createWay: aiDocCreateTracking.docCreateModes.BlankFile,
                pageToken: e
              });
            },
            enterFrom: aiDocCreateTracking.createEntryPoints.AiDocListCreateButton,
            isDocPlayground: true,
            layoutMode: chatSkillInputConstants.SkillDisplayType.Sidebar
          });
        } catch (e) {} finally {
          i(false);
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "empty-doc-init-page-IpCZVB",
      "data-testid": n,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "create-doc-button-jYXtRj",
        onClick: a,
        "aria-label": r("doc_canvas_btn_ariaLabel_createDoc"),
        "data-testid": "create_new_doc_button",
        children: reactJsxRuntimeCoreReexport.jsx(plusIcon.PlusIcon, {})
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "empty-doc-text-fHAdZA",
        children: r("doc_canvas_empty")
      })]
    });
  };
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var measureTextWidth = require("measure-text-width") /*id: 853350*/;
  var layoutPositionOrders = require("layout-position-orders") /*id: 314031*/;
  var layoutSizeConstants = require("layout-size-constants") /*id: 416118*/;
  var responsiveControlBarHeaderWrapper = require("responsive-control-bar-header-wrapper") /*id: 550014*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  function eV(e) {
    return {
      type: P.isHistoryBoxReady,
      payload: e
    };
  }
  var docxPermissionHook = require("docx-permission-hook") /*id: 42326*/;
  var collaborationEventSubscriber = require("collaboration-event-subscriber") /*id: 8519*/;
  let eK = e => e.map(e => ({
    id: e.member_id,
    name: e.cn_name,
    avatar: e.avatar_url,
    color: e.cursorColor
  }));
  let eY = [{
    key: "extra",
    priority: 1,
    keep: true
  }, {
    key: "streaming-loading",
    priority: 1,
    keep: true
  }, {
    key: "undo-redo",
    priority: 1,
    keep: true
  }, {
    key: "transfer",
    priority: 2,
    keep: true
  }, {
    key: "download",
    priority: 3,
    keep: true
  }, {
    key: "copy_all",
    priority: 4,
    keep: true
  }, {
    key: "copy_all",
    priority: 5,
    renderSize: layoutSizeConstants.LayoutSizes.Medium
  }, {
    key: "download",
    priority: 5,
    renderSize: layoutSizeConstants.LayoutSizes.Medium
  }, {
    key: "transfer",
    priority: 5,
    renderSize: layoutSizeConstants.LayoutSizes.Medium
  }, {
    key: "extra",
    renderSize: layoutSizeConstants.LayoutSizes.Medium,
    priority: 5
  }, {
    key: "collab",
    priority: 6
  }, {
    key: "edit-time",
    priority: 7
  }, {
    key: "edit-time",
    renderSize: layoutSizeConstants.LayoutSizes.Medium,
    priority: 8
  }, {
    key: "collab",
    renderSize: layoutSizeConstants.LayoutSizes.Small,
    priority: 9
  }, {
    key: "collab",
    renderSize: layoutSizeConstants.LayoutSizes.Medium,
    priority: 10
  }, {
    key: "docx-title",
    priority: 11
  }];
  var docxPanelEventSubscriber = require("docx-panel-event-subscriber") /*id: 521653*/;
  let eQ = (e, n) => {
    let [o, i] = reactCoreLibraryReexport.useState("");
    let [r, a] = reactCoreLibraryReexport.useState(true);
    reactCoreLibraryReexport.useEffect(() => {
      let o;
      if (!n) {
        return;
      }
      let r = lifecycleEventManager.lifecycleManager.subscribeEvents(n, {
        onEditorReady: () => {
          o = collaborationEventSubscriber.collaborationEventSubscriber.subscribeEvents(n, {
            onDocumentStateChanged: e => {
              if (e.documentTitle !== undefined) {
                i(e.documentTitle);
              }
            }
          });
        }
      });
      if (e != null) {
        e.eventEmitter.on("init", () => {
          docxPanelEventSubscriber.docxPanelSubscriber.subscribeTitleInViewChange(n, a);
        });
      }
      return () => {
        r();
        if (o != null) {
          o();
        }
      };
    }, [n]);
    return {
      inViewBlockHeader: r,
      docxTitle: o
    };
  };
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let e9 = (e, n, o) => {
    let {
      isMightStreaming: i,
      streamingSource: r
    } = docStreamingStatus.useStreamingStatus(e);
    let a = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        a.current = true;
      }
    }, [i]);
    let l = chatMessageStoreFactory.createMessageStore(e => {
      let r = chatViewCoreSelectors.getChatId();
      if (!r) {
        return false;
      }
      let a = e.messageLinkMap[r] ?? [];
      if (!a) {
        return false;
      }
      let l = conversationMessageUtils_1.getMessageFromLink(e, r, a[a.length - 1]);
      if (!l || !messageContentTypeAndStatusChecker.ssP(l)) {
        return false;
      }
      let {
        resource_id: s
      } = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(l, "content"), {});
      return l.final_status?.message !== "Broken" && !chatMessageStatusCheck.isMessageFinished(l) && !messageContentTypeAndStatusChecker.vlk(l) && (!s || s === n);
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!l) {
        a.current = false;
      }
    }, [l]);
    let s = !!o && (i || l && !a.current);
    return {
      streaming: i,
      source: r,
      showStreamingLoading: s
    };
  };
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  var dateFormatHelper = require("date-format-helper") /*id: 701397*/;
  var te = {
    Init: "Init",
    Saving: "Saving",
    Saved: "Saved",
    Offline: "Offline"
  };
  let tt = e => {
    let {
      status: n,
      editTime: o
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let r = n === te.Init;
    let a = n === te.Offline;
    let l = n === te.Saving;
    return reactCoreLibraryReexport.useMemo(() => r ? o ? i("doc_modification_time", {
      date: dateFormatHelper.formatRelativeDate(o)
    }) : "" : a ? i("doc_offline") : l ? i("doc_being_saved") : i("doc_saved"), [r, a, l, o]);
  };
  let tn = e => {
    let [n, o] = reactCoreLibraryReexport.useState(te.Init);
    let [i, r] = reactCoreLibraryReexport.useState();
    let {
      run: a
    } = asyncSkillReceiveHook.useSkillReceive(e => {
      o(e);
    }, {
      wait: 700,
      leading: true
    });
    let [l, s] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      let n;
      if (!e) {
        return;
      }
      let o = e => {
        if (e.editTime && l === undefined) {
          s(new Date(e.editTime).getTime());
        }
        if (e.saveState) {
          switch (e.saveState) {
            case "accept":
              a(te.Saved);
              break;
            case "sending":
              a(te.Saving);
              break;
            case "syncing":
              a(te.Init);
              r(Date.now());
              break;
            case "local_error":
              a(te.Init);
              break;
            case "offline":
              a(te.Offline);
          }
        }
      };
      let i = lifecycleEventManager.lifecycleManager.subscribeEvents(e, {
        onEditorReady: () => {
          n = collaborationEventSubscriber.collaborationEventSubscriber.subscribeEvents(e, {
            onDocumentStateChanged: o
          });
        }
      });
      return () => {
        i();
        if (n != null) {
          n();
        }
      };
    }, [e]);
    return {
      status: n,
      editTime: i || l
    };
  };
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  var chatRtlIconComponent = require("chat-rtl-icon-component") /*id: 497004*/;
  var skillSendMessageIcon = require("skill-send-message-icon") /*id: 197921*/;
  var tl = {
    container: "container-JHU1JK",
    disable: "disable-MlmseS",
    text: "text-BUQVIj"
  };
  function ts(e) {
    let {
      status: n,
      editTime: o,
      onClick: i,
      hideText: r,
      disabled: a = false
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let s = n === te.Offline;
    let c = n === te.Saving;
    let d = s || c || a;
    let u = tt({
      status: n,
      editTime: o
    });
    let m = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: _(tl.container, {
        [tl.disable]: d
      }),
      onClick: () => {
        if (!d) {
          if (i != null) {
            i();
          }
        }
      },
      children: [{
        [te.Init]: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
        [te.Saving]: reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent.ChatRtlIcon, {}),
        [te.Saved]: reactJsxRuntimeCoreReexport.jsx(skillSendMessageIcon.SendMsgActionIcon, {})
      }[n], r ? null : reactJsxRuntimeCoreReexport.jsx("span", {
        className: tl.text,
        children: u
      })]
    });
    if (d) {
      return m;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: l("doc_view_history_version"),
        position: "bottom",
        children: m
      });
    }
  }
  let tc = e => {
    let {
      status: n,
      editTime: o,
      onClick: i,
      renderSize: r,
      isHideText: a,
      disabled: l = false,
      rpcClientId: s
    } = e;
    let {
      isEditable: c
    } = docxPermissionHook.useDocxPermissions(s);
    let d = docxPanelControllerUtils.getDocxPanelControllerIfExists();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "editor-time-wrapper-S8lUbE",
      "data-testid": "doc_edit_time_button",
      children: reactJsxRuntimeCoreReexport.jsx(ts, {
        status: n,
        editTime: o,
        disabled: c !== true || l,
        hideText: r !== layoutSizeConstants.LayoutSizes.Medium || a,
        onClick: () => {
          if ([te.Init, te.Saved].includes(n)) {
            var e;
            if (d != null && (e = d.historyService) !== null && e !== undefined) {
              e.toggleHistoryBox();
            }
          }
          if (i != null) {
            i();
          }
        }
      })
    });
  };
  var td = {
    "docx-title": "docx-title-PpmfHz",
    docxTitle: "docx-title-PpmfHz"
  };
  let tu = e => {
    let {
      className: n,
      title: o
    } = e;
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: o,
        position: "bottom",
        className: _(td.container),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          "data-testid": "doc_header_title",
          className: _(td["docx-title"], n),
          children: o
        })
      });
    } else {
      return null;
    }
  };
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var filePermissionConstants = require("file-permission-constants") /*id: 890549*/;
  var fileSharePermissionHook = require("file-share-permission-hook") /*id: 577135*/;
  var filePermissionErrorMappings = require("file-permission-error-mappings") /*id: 120017*/;
  let tg = (e, n) => {
    let [o, i] = reactCoreLibraryReexport.useState(null);
    let r = reactCoreLibraryReexport.useRef(false);
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let l = fileSharePermissionHook.useFileShare(n);
    let {
      runAsync: s,
      data: c = {}
    } = useRequestHook.useRequest(async () => r.current && l ? await l.getInternetPublicMeta({
      token: e
    }) : {}, {
      refreshDeps: [e, l],
      ready: !!e && !!l
    });
    let u = () => {
      r.current = true;
      s();
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (n) {
        return lifecycleEventManager.lifecycleManager.subscribeEvents(n, {
          onEditorReady: u
        });
      }
    }, [n]);
    let {
      is_open: m = false,
      is_first_open: p = false,
      visibility_status: _
    } = c ?? {};
    return {
      isShared: o ?? m,
      isBanned: deepEqualUtil_1.deepEqual(_, filePermissionConstants.visibilityTypes.hidden),
      info: c,
      isFirstOpen: p && o === null,
      refreshInfo: s,
      changeInfo: async n => {
        let {
          open: o
        } = n;
        if (!l) {
          return false;
        }
        let r = await l.setInternetPublicMeta({
          token: e,
          open: o
        });
        if (r.success) {
          i(o);
          return true;
        } else {
          samanthaToastFactory.defaultToast.error(a(filePermissionErrorMappings.driveErrorCodes[`${r.code || ""}`], {
            brandName_feishu: a("brandName_feishu")
          }) || a("drive_larkCCM_errorCode_fallback"));
          return false;
        }
      }
    };
  };
  let tb = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        DocxSharePopover: e
      } = await Promise.all([require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("changeset-easysync-modules") /*id: 5888*/, require.e("network-io-client") /*id: 45310*/, require.e("webpack-chunk-utils") /*id: 17934*/, require.e("docx-editor-collab-share") /*id: 70666*/, require.e("canvas-share-popover") /*id: 91643*/]).then(require.bind(require, "docx-share-popover-component") /*id: 714365*/);
      return {
        default: e
      };
    }
  })));
  let tw = e => {
    let {
      docId: n,
      clientId: o,
      disabled: i
    } = e || {};
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let a = tg(n ?? "", o);
    let {
      isShared: l,
      isBanned: s
    } = a;
    let {
      isOwner: c,
      isManageable: u
    } = docxPermissionHook.useDocxPermissions(o);
    let m = c === true || u === true;
    let p = reactCoreLibraryReexport.useMemo(() => measureTextWidth.measureTextWidth(r("writing_canvas_btn_share")), []);
    if (m || l && !s) {
      return {
        key: "transfer",
        zone: layoutPositionOrders.LayoutPositions.RightSecond,
        modifier: [{
          type: "custom",
          key: "share",
          element: reactJsxRuntimeCoreReexport.jsx(tb, {
            token: n ?? "",
            clientId: o ?? "",
            isAdmin: m,
            disabled: i,
            ...a
          })
        }],
        getWidth: e => {
          let {
            renderSize: n
          } = e;
          return 32 + (n !== layoutSizeConstants.LayoutSizes.Medium ? 0 : p + 6);
        }
      };
    } else {
      return null;
    }
  };
  var rpcIframeClickHook = require("rpc-iframe-click-hook") /*id: 723840*/;
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var exportRtlIcon_1 = require("export-rtl-icon_1") /*id: 923151*/;
  let tN = {
    wait: 500,
    leading: true,
    trailing: false
  };
  var iconWarningTriangle = require("icon-warning-triangle") /*id: 507694*/;
  let tT = reactCoreLibraryReexport.createContext({
    reportModalVisible: false,
    setReportModalVisible: emptyExportFunction.emptyFunction,
    feedbackModalVisible: false,
    setFeedbackModalVisible: emptyExportFunction.emptyFunction,
    lastMoreIconClickPos: null,
    setLastMoreIconClickPos: emptyExportFunction.emptyFunction
  });
  let tW = e => {
    let {
      children: n
    } = e;
    let [o, i] = reactCoreLibraryReexport.useState(false);
    let [r, a] = reactCoreLibraryReexport.useState(false);
    let [l, s] = reactCoreLibraryReexport.useState(null);
    return reactJsxRuntimeCoreReexport.jsx(tT.Provider, {
      value: {
        reportModalVisible: o,
        setReportModalVisible: i,
        feedbackModalVisible: r,
        setFeedbackModalVisible: a,
        lastMoreIconClickPos: l,
        setLastMoreIconClickPos: s
      },
      children: n
    });
  };
  let tI = () => reactCoreLibraryReexport.useContext(tT);
  var briefcaseRtlIcon = require("briefcase-rtl-icon") /*id: 829637*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var layoutRtlIcon = require("layout-rtl-icon") /*id: 440699*/;
  let tP = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none",
    viewBox: "0 0 12 12",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#000",
      fillOpacity: 0.3,
      d: "m3.795 10.243.353.353a.5.5 0 0 0 .708 0l3.889-3.889a1 1 0 0 0 0-1.414l-3.89-3.889a.5.5 0 0 0-.707 0l-.353.354a.5.5 0 0 0 0 .707L7.33 6 3.795 9.536a.5.5 0 0 0 0 .707"
    })
  });
  var docTeaServiceSymbol = require("doc-tea-service-symbol") /*id: 151816*/;
  var docI18nServiceToken = require("doc-i18n-service-token") /*id: 900813*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var sizeConstants = require("size-constants") /*id: 786746*/;
  let tU = {
    [sizeConstants.sizeConstants.STANDARD]: "wide-mode-standard",
    [sizeConstants.sizeConstants.LARGE]: "wide-mode-large",
    [sizeConstants.sizeConstants.FULL]: "wide-mode-full"
  };
  let tH = {
    [sizeConstants.sizeConstants.FULL]: "full_width",
    [sizeConstants.sizeConstants.LARGE]: "wider_width",
    [sizeConstants.sizeConstants.STANDARD]: "standard_width"
  };
  function tJ(e) {
    let {
      disableFullWidth: n
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let i = flowDocxEditorContext.useRpcClientId();
    let r = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
    let a = [{
      key: sizeConstants.sizeConstants.STANDARD,
      text: o("DocX_WiderPage_PageWidth_Standard")
    }, {
      key: sizeConstants.sizeConstants.LARGE,
      text: o("DocX_WiderPage_PageWidth_Increased")
    }, {
      key: sizeConstants.sizeConstants.FULL,
      text: o("DocX_WiderPage_PageWidth_Full"),
      disabled: n
    }];
    let [l, s] = reactCoreLibraryReexport.useState(sizeConstants.sizeConstants.STANDARD);
    let c = () => {
      var e;
      let n = r == null ? undefined : (e = r.moreOptionsService) === null || e === undefined ? undefined : e.widthModeSubscribe(e => {
        s(e);
      });
      return () => {
        if (n != null) {
          n();
        }
      };
    };
    async function u() {
      var e;
      s((await (r == null ? undefined : (e = r.moreOptionsService) === null || e === undefined ? undefined : e.getWidthMode())) || sizeConstants.sizeConstants.STANDARD);
    }
    reactCoreLibraryReexport.useEffect(() => {
      if (!i) {
        return;
      }
      u();
      let e = [];
      let n = lifecycleEventManager.lifecycleManager.subscribeEvents(i, {
        onEditorReady: () => {
          e.push(c());
        }
      });
      return () => {
        if (n != null) {
          n();
        }
        e.forEach(e => e == null ? undefined : e());
        e = [];
      };
    }, [i]);
    let m = reactCoreLibraryReexport.useRef(null);
    let p = reactCoreLibraryReexport.useRef(null);
    let [h, v] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (p.current) {
        v(p.current.clientWidth);
      }
    }, [p]);
    let f = reactCoreLibraryReexport.useMemo(() => diContainerInstance.diContainer.get(docI18nServiceToken.DocI18nService), [docI18nServiceToken.DocI18nService]);
    let g = _("wide-mode-onboarding", f == null ? undefined : f.getUnreactiveLanguage());
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: m,
      className: g,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "wide-mode-tip-top",
        style: {
          maxWidth: h
        },
        children: o("DocX_WiderPage_Menu_Header")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "wide-mode-list-container",
        ref: p,
        children: a.map(e => {
          let n = _("wide-mode-item", tU[e.key], {
            "wide-mode-active": e.key === l,
            "wide-mode-disable": e.disabled === true
          });
          let i = reactJsxRuntimeCoreReexport.jsxs("div", {
            className: n,
            onClick: () => {
              if (!e.disabled && (diContainerInstance.diContainer.get(docTeaServiceSymbol.docTeaServiceSymbol).trackEvent("ccm_space_docs_more_menu_click", {
                click: "set_doc_screen_width",
                screen_width_type: tH[e.key],
                target: "none"
              }), e.key !== l)) {
                var n;
                if (r != null && (n = r.moreOptionsService) !== null && n !== undefined) {
                  n.toggleSwitchWidthMode(e.key);
                }
              }
            },
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "wide-mode-item-icon",
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: "wide-mode-item-icon-line"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: "wide-mode-item-icon-line"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: "wide-mode-item-icon-line"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: "wide-mode-item-icon-line"
              })]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "wide-mode-item-text",
              children: e.text
            })]
          }, e.key);
          if (e.disabled) {
            return reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
              position: "bottom",
              content: o("doc_tooltip_disable_sizeNSinWindow"),
              children: i
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
              children: i
            }, e.key);
          }
        })
      })]
    });
  }
  let tV = "FlowDoc_SwitchModeWrapperId";
  var rtlDocumentChartIcon_1_1 = require("rtl-document-chart-icon_1_1") /*id: 460866*/;
  var addCircleOutlinedIcon = require("add-circle-outlined-icon") /*id: 595000*/;
  var bellNotificationRtlIcon = require("bell-notification-rtl-icon") /*id: 933197*/;
  var businessInputToolIcon_1 = require("business-input-tool-icon_1") /*id: 249465*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var docxExportPopover = require("docx-export-popover") /*id: 15743*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var calculatorIconComponent = require("calculator-icon-component") /*id: 461263*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  var artifactEnumConstants = require("artifact-enum-constants") /*id: 912769*/;
  var docxSdkEventTracker = require("docx-sdk-event-tracker") /*id: 508502*/;
  function t3(e) {
    docxSdkEventTracker.trackDocxEvent("file_function_click", {
      show_from: "ai_doc_detail_upper_right",
      button_name: e,
      folder_type: "writing",
      if_multiple_choose: 0
    });
  }
  function t6(e) {
    let {
      buttonName: n,
      success: o,
      errorCode: i
    } = e;
    docxSdkEventTracker.trackDocxEvent("file_function_status", {
      type: "file",
      show_from: "ai_doc_detail_upper_right",
      button_name: n,
      success: o,
      error_code: i
    });
  }
  var chatMessageBlockUtils = require("chat-message-block-utils") /*id: 292414*/;
  var threadContentTypes = require("thread-content-types") /*id: 878038*/;
  var secureLinkOpener = require("secure-link-opener") /*id: 357305*/;
  var rtlAddDocumentIcon = require("rtl-add-document-icon") /*id: 458522*/;
  let nt = () => `https://${window.location.host}`;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var no = clipboardCopyHelper;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var documentIconComponent = require("document-icon-component") /*id: 886397*/;
  var customSwitchComponent = require("custom-switch-component") /*id: 753298*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var userPreferenceStore = require("user-preference-store") /*id: 292003*/;
  var useFeatureFlagEffect = require("use-feature-flag-effect") /*id: 806314*/;
  var checkCircleFilledIcon = require("check-circle-filled-icon") /*id: 259842*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var aiContinueWritingStoreFactory = require("ai-continue-writing-store-factory") /*id: 809140*/;
  var lazyFeedbackModalBase = require("lazy-feedback-modal-base") /*id: 244987*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var entityTypes = require("entity-types") /*id: 1744*/;
  var useShareReportReasons = require("use-share-report-reasons") /*id: 500217*/;
  let nb = () => {
    let {
      reportModalVisible: e,
      setReportModalVisible: n
    } = tI();
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let i = docxPanelControllerUtils.getDocxPanelControllerIfExists();
    let r = useShareReportReasons.useReportReasons();
    let a = async e => {
      let n = (i == null ? undefined : i.docId) || "";
      try {
        await apiServicesCollection.AliceApiService.Report({
          entity_id: n,
          reason_ids: [e.type],
          reason_detail: e.content,
          report_type: entityTypes.EntityTypes.DocX
        });
        samanthaToastFactory.toastInstance.success(o("aispace_report_success"));
      } catch (e) {
        samanthaToastFactory.toastInstance.error(o("aispace_report_failed"));
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "doc_header_report",
          error: e,
          meta: {
            type: "user_manual",
            scene: "docx"
          }
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(lazyFeedbackModalBase.FeedbackModalBase, {
      visible: e,
      title: o("message_report"),
      okText: o("dislike_feedback_submit"),
      cancelText: o("create_bot_cancel"),
      hasCancel: true,
      placeholder: o("report_reason_text_placeholder"),
      presetOptions: r,
      maxTextCount: 500,
      okButtonDisable: true,
      onHide: () => n(false),
      onSubmit: e => {
        n(false);
        a(e);
      }
    });
  };
  var componentLoginModalConst = require("component-login-modal-const") /*id: 848982*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var feedbackModalComponent = require("feedback-modal-component") /*id: 640688*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  let nR = () => {
    let {
      feedbackModalVisible: n,
      setFeedbackModalVisible: o
    } = tI();
    let i = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId;
    let [r, a] = reactCoreLibraryReexport.useState("");
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let s = docxPanelControllerUtils.getDocxPanelControllerIfExists();
    let c = {
      aid: uniParamsManager.uniParamsManager.getParam("aid"),
      appName: componentLoginModalConst.appId,
      appkey: componentLoginModalConst.platformId,
      channel: "DouBaoNewUserGuide",
      deviceId: uniParamsManager.uniParamsManager.getParam("device_id"),
      logger: loggerServiceCore.defaultLogger
    };
    let u = reactCoreLibraryReexport.useMemo(() => r.length > 300, [r]);
    let m = {
      placeholder: l("doc_feedback_window_placeholder"),
      value: r,
      onChange: a,
      className: "input-MMJIOO",
      rows: 6,
      maxCount: 300
    };
    let p = async () => {
      let e = (s == null ? undefined : s.docId) || "";
      try {
        await feedbackModalComponent.postFeedbackMessage({
          content: `[\u{8C46}\u{5305}\u{878D}\u{5408}\u{6587}\u{6863}]${r}`,
          extra_params: JSON.stringify({
            page_token: e,
            chat_id: i
          })
        }, c);
        samanthaToastFactory.toastInstance.success({
          content: l("feedback_submit_success"),
          showClose: false
        });
        o(false);
      } catch (e) {
        samanthaToastFactory.toastInstance.error({
          content: l("feedback_submit_failed"),
          showClose: false
        });
        throw e;
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
      centered: true,
      className: "modal-waR9bD",
      width: 440,
      title: l("doc_feedback_window_header"),
      visible: n,
      onCancel: () => {
        o(false);
      },
      footer: null,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "container-j8sTqG",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mt-4",
          children: l("doc_feedback_window_desc")
        }), reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
          ...m
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mt-10",
          children: l("doc_feedback_window_desc_copyInfo")
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "actions-UW5zpK",
          children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: "ml-10",
            type: "tertiary",
            onClick: () => {
              let e = (s == null ? undefined : s.docId) || "";
              let n = `\u{53CD}\u{9988}\u{6587}\u{6863}id: ${e}\u{FF0C}\u{53CD}\u{9988}\u{4F1A}\u{8BDD}id: ${i}`;
              no(n);
              samanthaToastFactory.toastInstance.success(l("skill_copliotreading_copy_success"));
            },
            children: l("doc_feedback_window_btn_copyInfo")
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            disabled: u,
            className: "ml-10",
            type: "primary",
            onClick: p,
            children: l("doc_feedback_window_btn_submit")
          })]
        })]
      })
    });
  };
  var docPageChatLayoutHook = require("doc-page-chat-layout-hook") /*id: 498456*/;
  var nC = {
    container: "container-TTewnq",
    item: "item-t78VDe",
    "more-icon-wrapper": "more-icon-wrapper-DTrvKJ",
    moreIconWrapper: "more-icon-wrapper-DTrvKJ",
    "icon-wrapper": "icon-wrapper-vDiBLA",
    iconWrapper: "icon-wrapper-vDiBLA",
    "more-icon-wrapper-active": "more-icon-wrapper-active-RA9a43",
    moreIconWrapperActive: "more-icon-wrapper-active-RA9a43",
    "more-icon": "more-icon-uJ_8_Y",
    moreIcon: "more-icon-uJ_8_Y",
    "popover-select-wrapper": "popover-select-wrapper-RwRU6J",
    popoverSelectWrapper: "popover-select-wrapper-RwRU6J"
  };
  let n$ = e => {
    var n;
    let {
      pageToken: i,
      className: r,
      style: a,
      disabled: l,
      renderSize: s,
      onClick: u,
      onItemClick: m,
      pageWidthModes: p
    } = e;
    let [h, v] = reactCoreLibraryReexport.useState(false);
    let f = function (e) {
      let {
        renderSize: n,
        pageWidthModes: o
      } = e;
      let {
        isDuplicateable: i,
        isExportable: r,
        isViewRecordable: a,
        isDeletable: l,
        isEditable: s,
        isReportable: u
      } = docxPermissionHook.useDocxPermissions();
      let m = reactReduxCore.useSelector(B);
      let {
        disableWidthMode: p
      } = o ?? {};
      let _ = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = flowDocxEditorContext.useRpcClientId();
        let o = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let [i, r] = reactCoreLibraryReexport.useState(false);
        let a = () => {
          var e;
          let n = o == null ? undefined : (e = o.commentService) === null || e === undefined ? undefined : e.commentViewVisibleSubscribe(e => r(!e.collapsed));
          return () => {
            if (n != null) {
              n();
            }
          };
        };
        reactCoreLibraryReexport.useEffect(() => {
          if (!n) {
            return;
          }
          let e = [];
          let o = lifecycleEventManager.lifecycleManager.subscribeEvents(n, {
            onEditorReady: () => {
              e.push(a());
            }
          });
          return () => {
            o();
            e.forEach(e => e == null ? undefined : e());
            e = [];
          };
        }, [n]);
        let {
          run: l
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          var e;
          if (o != null && (e = o.commentService) !== null && e !== undefined) {
            e.toggleCommentBox();
          }
          if (o != null) {
            o.bizEvents.emit("behavior.toggle-comment", {
              visible: !i
            });
          }
        }, tN);
        return {
          label: e("doc_copilot_tooltip_comments"),
          icon: reactJsxRuntimeCoreReexport.jsx(documentIconComponent.DocumentIcon, {}),
          value: "comment",
          onClick: l
        };
      }();
      (function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          var e;
          if (n != null && (e = n.moreOptionsService) !== null && e !== undefined) {
            e.copyDoc({});
          }
        }, tN);
        e("doc_copy_full_text");
        noteOutlinedIcon.NoteOutlinedIcon;
      })();
      let h = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          let o = (n == null ? undefined : n.docId) || "";
          let i = `${nt()}${documentNavigationAndCreationUtils.getDocBasePath(false)}/${o}`;
          no(i);
          samanthaToastFactory.defaultToast.success({
            content: e("doc_editor_toolbar_copy_success"),
            showClose: false,
            theme: "light"
          });
          t3("copy_link");
          (function (e) {
            let {
              token: n
            } = e;
            docxSdkEventTracker.trackDocxEvent("doc_share_link_success_popup_show", {
              show_from: "ai_doc_detail_menu_copy_link",
              entrance_type: "canvas_top",
              canvas_type: "writing",
              current_page: "ai_doc_detail",
              page_token: n,
              artifact_type: artifactEnumConstants.ArtifactType.Page
            });
          })({
            token: o
          });
        }, tN);
        return {
          label: e("doc_copy_link"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {}),
          value: "copy_link",
          onClick: o,
          topDivider: !userAgentDeviceDetector.isMobile()
        };
      }();
      let v = function () {
        let {
          editorEditable: e,
          globalEnabled: n,
          userEnabled: o
        } = aiContinueWritingStoreFactory.useAIContinueWritingStore(e => throttledPathFilterStringify.throttledPathStr(e, "editorEditable", "globalEnabled", "userEnabled"), deepEqualityUtil_1.isDeepEqual);
        if (e && n) {
          return {
            label: i18nTranslationUtils.i18nextTranslate("writing_canvas_autoGen_switchHeader"),
            icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
            value: "ai_continue_writing_switch",
            onClick: () => false,
            rightIcon: reactJsxRuntimeCoreReexport.jsx(customSwitchComponent.CustomSwitch, {
              size: "small",
              checked: o,
              onChange: e => {
                aiContinueWritingStoreFactory.createAIContinueWritingStore().getState().updateAIContinueWritingSupported({
                  userEnabled: e
                });
              }
            })
          };
        }
      }();
      let f = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
          var o;
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "create_docx",
            meta: {
              scene: threadContentTypes.ThreadTypes.Duplicate,
              url_path: location.pathname
            }
          });
          let i = (n == null ? undefined : n.docId) || "";
          t3("create_copy");
          let {
            title: r = ""
          } = (await (n == null ? undefined : n.getPageMeta())) || {};
          if (r.trim() === "") {
            r = e("doc_title_unnamed");
          }
          let a = chatMessageBlockUtils.getDocumentTitle(r);
          let l = await (n == null ? undefined : (o = n.moreOptionsService) === null || o === undefined ? undefined : o.createDocCopy(a));
          aiDocCreateTracking.trackDocCreate({
            clickFrom: aiDocCreateTracking.createEntryPoints.CopyDoc,
            createWay: aiDocCreateTracking.docCreateModes.CopyDoc,
            fromPageToken: i,
            pageToken: l
          });
          if (!l) {
            return;
          }
          t6({
            buttonName: "create_copy",
            success: "1"
          });
          let s = `${nt()}${documentNavigationAndCreationUtils.getDocBasePath(false)}/${l}`;
          secureLinkOpener.openSecureLink(s);
        }, tN);
        return {
          label: e("doc_create_duplicate"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlAddDocumentIcon.RtlAddDocumentIcon, {}),
          value: "create_copy",
          onClick: o
        };
      }();
      let g = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          t3("delete");
          modalConfirmDialogManager.ModalConfirmDialog.error({
            title: e("doc_delete_confirm"),
            content: e("doc_delete_tips"),
            okText: e("general_btn_delete"),
            cancelText: e("general_btn_cancel"),
            onOk: async () => {
              let o = objectPathGetDefault.getObjectPathDefault(n, "moreOptionsService");
              if (!(o == null ? undefined : o.deleteDoc)) {
                return;
              }
              try {
                let n = await (o == null ? undefined : o.deleteDoc());
                if ((n == null ? undefined : n.code) !== 0) {
                  if ((n == null ? undefined : n.code) === 900004230) {
                    dbxSonnerToasterWrapper.dbxToastAPI.error(e("drive_toast_drive_upgrading"));
                  }
                  return;
                }
              } catch (e) {
                loggerServiceCore.defaultLogger.persist.error({
                  eventName: "docx_delele_error",
                  error: e
                });
              }
              let i = routePathUtils.isCurrentChatPath();
              t6({
                buttonName: "delete",
                success: "1"
              });
              if (i) {
                window.location.reload();
              } else {
                documentNavigationAndCreationUtils.navigateToChat();
              }
            },
            onCancel: () => {
              t6({
                buttonName: "delete",
                success: "0",
                errorCode: "cancel"
              });
            }
          });
        }, tN);
        return {
          label: e("general_btn_delete"),
          icon: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {}),
          value: "delete",
          topDivider: !userAgentDeviceDetector.isMobile(),
          onClick: o
        };
      }();
      let b = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          var e;
          if (n != null && (e = n.moreOptionsService) !== null && e !== undefined) {
            e.openFindReplaceBox();
          }
        }, tN);
        let {
          isEditable: i
        } = docxPermissionHook.useDocxPermissions();
        return {
          label: e(i === true ? "doc_base_search_and_replace" : "doc_base_search"),
          icon: reactJsxRuntimeCoreReexport.jsx(bellNotificationRtlIcon.BellNotificationIcon, {}),
          value: "search_and_replace",
          onClick: o
        };
      }();
      let w = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          var e;
          if (n != null && (e = n.moreOptionsService) !== null && e !== undefined) {
            e.toggleHelpPanel();
          }
        }, tN);
        return {
          label: e("doc_base_keyboard_list"),
          icon: reactJsxRuntimeCoreReexport.jsx(exportRtlIcon_1.ExportRtlIcon, {}),
          value: "shortcut",
          onClick: o
        };
      }();
      let x = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerIfExists();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          var e;
          if (n != null && (e = n.historyService) !== null && e !== undefined) {
            e.toggleHistoryBox();
          }
        }, tN);
        return {
          label: e("doc_base_history_records"),
          icon: reactJsxRuntimeCoreReexport.jsx(addCircleOutlinedIcon.AddCircleOutlined, {}),
          value: "history",
          topDivider: true,
          onClick: o
        };
      }();
      let y = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let {
          lastMoreIconClickPos: o
        } = tI();
        let {
          run: i
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          var e;
          var r;
          if (o) {
            if (n != null && (e = n.commentService) !== null && e !== undefined) {
              e.toggleHistoryCommentBox({
                pos: {
                  x: o.x,
                  y: 0
                }
              });
            }
          } else if (n != null && (r = n.commentService) !== null && r !== undefined) {
            r.toggleHistoryCommentBox({
              pos: {
                x: window?.innerWidth || 0,
                y: 0
              }
            });
          }
        }, tN);
        return {
          label: e("doc_comment_history"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlDocumentChartIcon_1_1.DocumentChartIcon, {}),
          value: "history_comment",
          onClick: i
        };
      }();
      let k = function (e) {
        let n = i18nTranslationUtils.useTranslationWithFallback();
        let {
          disableFullWidth: o
        } = e ?? {};
        return {
          label: n("doc_base_page_width_setting"),
          icon: reactJsxRuntimeCoreReexport.jsx(layoutRtlIcon.LayoutRtlIcon, {}),
          rightIcon: reactJsxRuntimeCoreReexport.jsx(tP, {}),
          value: "page_width",
          wrapper: e => reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
            content: reactJsxRuntimeCoreReexport.jsx(tJ, {
              disableFullWidth: o
            }),
            position: "leftTop",
            spacing: 6,
            getPopupContainer: () => document.getElementById(tV) || document.body,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              id: tV,
              className: "relative",
              children: e
            })
          }),
          onClick: () => false
        };
      }(o);
      let S = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          var e;
          if (n != null && (e = n.moreOptionsService) !== null && e !== undefined) {
            e.togglePrintBox();
          }
        }, tN);
        return {
          label: e("doc_base_print"),
          icon: reactJsxRuntimeCoreReexport.jsx(briefcaseRtlIcon.BriefcaseRtlIcon, {}),
          value: "print",
          onClick: o
        };
      }();
      let E = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let {
          setReportModalVisible: n
        } = tI();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          n(true);
        }, tN);
        return {
          label: e("message_report"),
          icon: reactJsxRuntimeCoreReexport.jsx(iconWarningTriangle.WarningTriangle, {}),
          value: "report",
          onClick: o,
          topDivider: true
        };
      }();
      (function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
        let {
          docId: o,
          rpcClientId: i
        } = n;
        e("doc_editor_toolbar_download");
        rtlExpandArrowsIcon.ExpandArrowsIcon;
        () => false;
      })();
      let C = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let {
          setFeedbackModalVisible: n
        } = tI();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          n(true);
        }, tN);
        return {
          label: e("doc_menuOption_feedback"),
          icon: reactJsxRuntimeCoreReexport.jsx(businessInputToolIcon_1.BusinessInputIcon, {}),
          value: "feedback",
          onClick: o
        };
      }();
      let $ = function () {
        useFeatureFlagEffect.useFeatureFlagEffect(() => {
          let {
            refreshUserPreference: e,
            settings: n
          } = userPreferenceStore.userPreferenceStore.getState();
          if (!n) {
            e();
          }
        });
        let e = userPreferenceStore.userPreferenceStore(e => {
          return !!e.settings?.auto_accept_doc_revision;
        });
        let n = writeConfigManager.WriteConfigManager.useDirectAcceptRevisionSwitch() && false;
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(e => {
          if (e) {
            samanthaToastFactory.defaultToast.success(i18nTranslationUtils.i18nextTranslate("doc_canvas_autoAcceptChange_toast_enabled"));
          } else {
            samanthaToastFactory.defaultToast.success(i18nTranslationUtils.i18nextTranslate("doc_canvas_autoAcceptChange_toast_disabled"));
          }
        }, {
          trailing: false,
          leading: true,
          wait: 200
        });
        if (n) {
          return {
            label: i18nTranslationUtils.i18nextTranslate("doc_canvas_menuOption_autoAcceptChange"),
            icon: reactJsxRuntimeCoreReexport.jsx(checkCircleFilledIcon.CheckCircleFilledIcon, {}),
            value: "ai_auto_revision_switch",
            onClick: () => {
              o(!e);
              return false;
            },
            wrapper: e => reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: t("doc_canvas_menuOption_autoAcceptChange_tooltip"),
              position: "left",
              showArrow: false,
              trigger: "hover",
              zIndex: 2000,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                children: e
              })
            }),
            rightIcon: reactJsxRuntimeCoreReexport.jsx(customSwitchComponent.CustomSwitch, {
              size: "small",
              checked: e
            })
          };
        }
      }();
      return functionInvoker.invoke(() => {
        if (userAgentDeviceDetector.isMobile()) {
          let e = [h];
          if (u === true) {
            e.push(E);
          }
          if (l === true) {
            e.push(g);
          }
          return e;
        }
        let e = [n !== layoutSizeConstants.LayoutSizes.Medium ? _ : undefined, p ? undefined : k, b, $ || undefined, h, undefined, undefined, i === true ? f : undefined, r === true ? S : undefined, s === true && m ? x : undefined, a === true ? y : undefined, w, C, v || undefined, u === true ? E : undefined, l === true ? g : undefined];
        return genericFilterUtil.genericFilter(e, e => !isNullishCheck.isNil(e));
      });
    }({
      renderSize: s,
      pageWidthModes: p
    });
    let {
      setLastMoreIconClickPos: g
    } = tI();
    let b = docxPanelControllerUtils.getDocxPanelControllerIfExists();
    if (!b) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
    }
    rpcIframeClickHook.useRpcIframeClick(b.rpcClientId, () => {
      v(false);
    });
    let w = docPageChatLayoutHook.useDocPageChatLayout();
    let x = /^\/?chat(?=\/|$)/.test(window.location.pathname);
    let y = w === chatSkillInputConstants.SkillDisplayType.Sidebar || x;
    let k = (n = document.getElementById("flow-docx-iframe")) === null || n === undefined ? undefined : n.getBoundingClientRect();
    let S = (k == null ? undefined : k.left) ?? 0;
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      contentProps: {
        "data-testid": "doc_more_menu_popover"
      },
      className: nC["popover-select-wrapper"],
      contentClassName: _(nC.container, r),
      itemClassName: nC.item,
      style: a,
      defaultValue: "",
      selectable: false,
      scrollable: false,
      visible: h,
      onVisibleChange: v,
      position: "bottomRight",
      newIcon: true,
      iconSize: "middler",
      spacing: 8,
      options: f,
      onItemClick: m,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: _(nC["more-icon-wrapper"], {
          [nC["more-icon-wrapper-active"]]: h
        }),
        children: reactJsxRuntimeCoreReexport.jsxs(topBarActionItem.TopBarActionItem, {
          "data-testid": "doc_more_menu_button",
          newIcon: true,
          disabled: l,
          className: nC["icon-wrapper"],
          onClick: e => {
            if (!h) {
              docxSdkEventTracker.trackDocxEvent("file_function_show", {
                show_from: "hover_more",
                folder_type: "writing"
              });
            }
            g({
              x: y ? e.clientX - S : e.clientX,
              y: e.clientY
            });
            v(!h);
            if (u != null) {
              u();
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {
            className: nC["more-icon"]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: nC["comment-history-trigger"]
          })]
        })
      })
    });
  };
  let nj = e => reactJsxRuntimeCoreReexport.jsxs(tW, {
    children: [reactJsxRuntimeCoreReexport.jsx(n$, {
      ...e
    }), reactJsxRuntimeCoreReexport.jsx(nb, {}), reactJsxRuntimeCoreReexport.jsx(nR, {})]
  });
  let nN = e => {
    let {
      disabled: n
    } = e;
    return {
      type: "custom",
      element: reactJsxRuntimeCoreReexport.jsx(nM, {
        disabled: n
      })
    };
  };
  let nM = e => {
    let {
      disabled: n,
      renderSize: o
    } = e;
    let i = docxPanelControllerUtils.getDocxPanelControllerIfExists();
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let a = flowDocxEditorContext.useRpcClientId();
    let l = writeConfigManager.WriteConfigManager.useNeedRevisionGuidance();
    let [s, c] = reactCoreLibraryReexport.useState(false);
    let [u, m] = reactCoreLibraryReexport.useState(false);
    let p = () => {
      var e;
      var n;
      let o = i == null ? undefined : (e = i.commentService) === null || e === undefined ? undefined : e.commentCountSubscribe(e => {
        c(((e == null ? undefined : e[0]?.revisionNum) || 0) > 0 && l);
      });
      let r = i == null ? undefined : (n = i.commentService) === null || n === undefined ? undefined : n.commentViewVisibleSubscribe(e => m(!e.collapsed));
      return () => {
        if (o != null) {
          o();
        }
        if (r != null) {
          r();
        }
      };
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!a) {
        return;
      }
      let e = [];
      let n = lifecycleEventManager.lifecycleManager.subscribeEvents(a, {
        onEditorReady: () => {
          e.push(p());
        }
      });
      return () => {
        n();
        e.forEach(e => e == null ? undefined : e());
        e = [];
      };
    }, [a]);
    if (o !== layoutSizeConstants.LayoutSizes.Medium) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        "data-testid": "doc_comment_button",
        className: _("comment-rjhoqx", {
          "active-BqGked": u
        }),
        disabled: n,
        size: "larger-icon",
        newIcon: true,
        onClick: () => {
          var e;
          if (i != null && (e = i.commentService) !== null && e !== undefined) {
            e.toggleCommentBox();
          }
          if (i != null) {
            i.bizEvents.emit("behavior.toggle-comment", {
              visible: !u
            });
          }
        },
        tooltip: r(s ? "doc_canvas_comments_tooltip" : "doc_copilot_tooltip_comments"),
        children: s ? reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}) : reactJsxRuntimeCoreReexport.jsx(documentIconComponent.DocumentIcon, {})
      });
    }
  };
  let nT = e => {
    let {
      disabled: n
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let i = reactCoreLibraryReexport.useMemo(() => measureTextWidth.measureTextWidth(o("doc_editor_toolbar_download")), []);
    return {
      key: "download",
      zone: layoutPositionOrders.LayoutPositions.RightSecond,
      modifier: [{
        type: "custom",
        key: "download",
        element: reactJsxRuntimeCoreReexport.jsx(nW, {
          disabled: n
        })
      }],
      getWidth: e => {
        let {
          renderSize: n
        } = e;
        return 32 + (n !== layoutSizeConstants.LayoutSizes.Medium ? 0 : i + 6);
      }
    };
  };
  let nW = e => {
    let {
      disabled: n,
      renderSize: o
    } = e;
    let i = docxPanelControllerUtils.getDocxPanelControllerIfExists();
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx(docxExportPopover.DocXExportButton, {
        pageToken: i.docId,
        rpcClientId: i.rpcClientId,
        reportParams: {
          show_from: "ai_doc_detail_upper_right",
          folder_type: "writing"
        },
        disabled: n,
        hideText: o !== layoutSizeConstants.LayoutSizes.Medium,
        onBeforeExport: e => {
          i.bizEvents.emit("behavior.download", {
            type: e
          });
        }
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
    }
  };
  let nI = e => {
    let {
      disabled: n
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let i = reactCoreLibraryReexport.useMemo(() => measureTextWidth.measureTextWidth(o("message_long_press_copy")), []);
    return {
      key: "copy_all",
      zone: layoutPositionOrders.LayoutPositions.RightSecond,
      modifier: [{
        type: "custom",
        key: "copy_all",
        element: reactJsxRuntimeCoreReexport.jsx(nZ, {
          disabled: n
        })
      }],
      getWidth: e => {
        let {
          renderSize: n
        } = e;
        return 32 + (n !== layoutSizeConstants.LayoutSizes.Medium ? 0 : i + 6);
      }
    };
  };
  let nD = {
    start: false,
    content: undefined
  };
  let nZ = e => {
    let {
      disabled: n,
      renderSize: o
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let r = docxPanelControllerUtils.getDocxPanelControllerIfExists();
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (nD == null ? undefined : nD.start) {
          e.preventDefault();
          if (nD.content) {
            Object.keys(nD.content || {}).forEach(n => {
              var i;
              if ((i = e.clipboardData) !== null && i !== undefined) {
                i.setData(n, (nD == null ? undefined : nD.content?.[n]) || "");
              }
            });
          }
          nD = {
            start: false,
            content: undefined
          };
          samanthaToastFactory.defaultToast.success(i("doc_editor_toolbar_copy_success"));
        }
      };
      window.addEventListener("copy", e);
      return () => {
        window.removeEventListener("copy", e);
      };
    }, []);
    let a = async () => {
      var e;
      let n = await (r == null ? undefined : (e = r.moreOptionsService) === null || e === undefined ? undefined : e.copyDoc({}));
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "doc_copy_all",
        meta: {
          type: (n == null ? undefined : n.type) || ""
        }
      });
      if (r != null) {
        r.bizEvents.emit("behavior.click-copy", {
          from: eg.CanvasFunction,
          isCopyAll: true
        });
      }
      if ((n == null ? undefined : n.type) === "direct") {
        return;
      }
      nD = {
        start: true,
        content: n == null ? undefined : n.data
      };
      let o = document.createElement("textarea");
      o.value = "";
      o.style.position = "fixed";
      o.style.left = "-9999px";
      o.style.top = "0";
      document.body.appendChild(o);
      o.focus();
      o.select();
      try {
        document.execCommand("copy", false, "");
      } catch (e) {} finally {
        document.body.removeChild(o);
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
      "data-testid": "container_inner_copy_btn",
      disabled: n,
      size: "larger-icon",
      newIcon: true,
      onClick: a,
      title: o === layoutSizeConstants.LayoutSizes.Medium ? i("message_long_press_copy") : undefined,
      children: reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {})
    });
  };
  var exitRtlIconComponent = require("exit-rtl-icon-component") /*id: 4976*/;
  let nP = e => {
    let {
      className: n,
      controller: o,
      clientId: i
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let [a, l] = reactCoreLibraryReexport.useState(false);
    let [s, c] = reactCoreLibraryReexport.useState(false);
    let u = () => {
      var e;
      var n;
      var i;
      let r = o == null ? undefined : (e = o.undoService) === null || e === undefined ? undefined : e.getUndoRedoStatus();
      l((n = r == null ? undefined : r.canUndo) !== null && n !== undefined && n);
      c((i = r == null ? undefined : r.canRedo) !== null && i !== undefined && i);
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      let n;
      if (i) {
        n = lifecycleEventManager.lifecycleManager.subscribeEvents(i, {
          onEditorReady: () => {
            e = function () {
              var e;
              let n = o == null ? undefined : (e = o.undoService) === null || e === undefined ? undefined : e.onStatusChange(u);
              u();
              return () => {
                if (n != null) {
                  n.unsubscribe();
                }
              };
            }();
          }
        });
      }
      return () => {
        if (e != null) {
          e();
        }
        if (n != null) {
          n();
        }
      };
    }, [i]);
    return {
      key: "undo-redo",
      zone: layoutPositionOrders.LayoutPositions.RightForth,
      modifier: [{
        type: "custom",
        element: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: _("container-J1i7JR", n),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "left-HRclQl",
            children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              "data-testid": "doc_header_undo_button",
              size: "larger-icon",
              tooltip: r("doc_canvas_tooltip_undo"),
              newIcon: true,
              disabled: !a,
              onClick: () => {
                var e;
                var n;
                let i = o == null ? undefined : (e = o.undoService) === null || e === undefined ? undefined : e.getUndoRedoStatus();
                if (i == null ? undefined : i.canUndo) {
                  if (o != null && (n = o.undoService) !== null && n !== undefined) {
                    n.undo();
                  }
                }
                if (o != null) {
                  o.bizEvents.emit("behavior.click-undo-redo", {
                    key: "back_button"
                  });
                }
              },
              children: reactJsxRuntimeCoreReexport.jsx(returnOutlinedIcon.ReturnOutlinedIcon, {})
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "right-em4_Mm",
            children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              "data-testid": "doc_header_redo_button",
              size: "larger-icon",
              tooltip: r("doc_canvas_tooltip_redo"),
              newIcon: true,
              disabled: !s,
              onClick: () => {
                var e;
                var n;
                let i = o == null ? undefined : (e = o.undoService) === null || e === undefined ? undefined : e.getUndoRedoStatus();
                if (i == null ? undefined : i.canRedo) {
                  if (o != null && (n = o.undoService) !== null && n !== undefined) {
                    n.redo();
                  }
                }
                if (o != null) {
                  o.bizEvents.emit("behavior.click-undo-redo", {
                    key: "forward_button"
                  });
                }
              },
              children: reactJsxRuntimeCoreReexport.jsx(exitRtlIconComponent.ExitRtlIcon, {})
            })
          })]
        })
      }, {
        type: "divider"
      }],
      getWidth: () => 99
    };
  };
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var avatarComponent = require("avatar-component") /*id: 16165*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  let nB = (() => {
    let e = document.createElement("span");
    e.style.cssText = `
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
    font-size: inherit;
    font-family: inherit;
  `;
    document.body.appendChild(e);
    return e;
  })();
  let nL = e => {
    let [n, o] = reactCoreLibraryReexport.useState(false);
    let i = reactCoreLibraryReexport.useRef(null);
    let r = reactCoreLibraryReexport.useCallback(n => {
      i.current = n;
      if (n) {
        nB.textContent = e;
        let i = n.offsetWidth;
        o(nB.offsetWidth > i);
      }
    }, [e]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!i.current) {
        return;
      }
      nB.textContent = e;
      let n = i.current.offsetWidth;
      o(nB.offsetWidth > n);
    }, [e]);
    return {
      ref: r,
      isOverflow: n
    };
  };
  var nU = {
    container: "container-Pmo5F6",
    item: "item-S1Wpu_",
    image: "image-QvvPZQ",
    text: "text-vhkQFr",
    badge: "badge-vKnQ3G",
    "break-word": "break-word-mMzynx",
    "member-popover": "member-popover-juTgZx",
    scrollbar: "scrollbar-uarkuy",
    box: "box-z456EW",
    collaborator: "collaborator-XHhiNG",
    content: "content-UJ1F1L",
    wrapper: "wrapper-aFyvcF",
    avatar: "avatar-lucOgb",
    name: "name-n39N2r"
  };
  let nH = (e, n) => (n === layoutSizeConstants.LayoutSizes.Medium ? Math.min(4, e) : n === layoutSizeConstants.LayoutSizes.Small ? Math.min(3, e) : Math.min(2, e)) * 34 - 6;
  let nJ = e => {
    let {
      item: n
    } = e;
    let {
      ref: o,
      isOverflow: i
    } = nL(n.name);
    return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      style: {
        display: i ? "inline-block" : "none"
      },
      content: n.name,
      position: "right",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: nU.collaborator,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: nU.content,
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: nU.wrapper,
            children: [reactJsxRuntimeCoreReexport.jsx(avatarComponent.AvatarComponent, {
              className: nU.avatar,
              src: xssContentSanitizer.sanitizeUrl(n.avatar, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-Wlpi$$o2$2xNe*EySXl%alJN$0$Kb1ltM$djMHhZ$1hsT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1cxR2$scFRN$3RpTWs0MFR*Z*9iRmx-$W14amF%bHFZakl4ZDJJe%5Xe*libEo2$ERJe*JHSlhTbXhq-$R*ellWaE9NRXd5-khW-$IxWTB%Rz$TZW1WSFJub*FNM$o2"
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: nU.badge,
              style: {
                backgroundColor: n.color
              }
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: nU.name,
            ref: o,
            children: n.name
          })]
        })
      }, n.id)
    }, n.id);
  };
  let nV = e => {
    let {
      items: n,
      renderSize: o
    } = e;
    let i = genericFilterUtil.genericFilter(n, e => !!e.avatar);
    let r = functionInvoker.invoke(() => o === layoutSizeConstants.LayoutSizes.Medium ? 3 : o === layoutSizeConstants.LayoutSizes.Small ? 2 : 1);
    let [a, l] = reactCoreLibraryReexport.useState(i.length > r);
    let s = docxPanelControllerUtils.getDocxPanelControllerIfExists();
    rpcIframeClickHook.useRpcIframeClick(s == null ? undefined : s.rpcClientId, () => {
      l(false);
    });
    let c = (e, n) => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "doc_header_member_image_error",
        meta: {
          id: e,
          avatar: n
        }
      });
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: nU.container,
      children: [i.slice(0, r).map(e => {
        let {
          id: n,
          avatar: o,
          name: i,
          color: r
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          className: nU["break-word"],
          content: i,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: nU.item,
            children: [reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
              className: nU.image,
              preview: false,
              src: xssContentSanitizer.sanitizeUrl(o, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-Wlpi$$o2$2xNe*EySXl%alJN$0$Kb1ltM$djMHhZ$1hsT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1cxR2$scFRN$3RpTWs0MFR*Z*9iRmx-$W14amF%bHFZakl4ZDJJe%5Xe*libEo2$ERJe*JHSlhTbXhq-$R*ellWaE9NRXd5-khW-$IxWTB%Rz$TZW1WSFJub*FNM$o2"
              }),
              onError: () => {
                c(n, o);
              },
              fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNFMUYwRkYiLz4KPHBhdGggZD0iTTIwLjk5OTggMzguMDAwM0MyMC45OTk4IDMzLjU5MjEgMjUuNDA4MSAzMC40MTg2IDI5LjgxNjMgMzAuNDE4NkMzNC4yMjQ2IDMwLjQxODYgMzguNjMyOCAzMy41OTIxIDM4LjYzMjggMzguMDAwM0MzOC42MzI4IDQxLjI0NjQgMzUuMDkxMyA0MC45OTU1IDI5LjgxNjMgNDAuOTk1NUMyNC41NDEzIDQwLjk5NTUgMjAuOTk5OCA0MS4yNDY0IDIwLjk5OTggMzguMDAwM1oiIGZpbGw9IiM5OUFFQ0MiLz4KPGVsbGlwc2UgY3g9IjI5LjgxNjIiIGN5PSIyNC4xMzI3IiByeD0iMy44NTcyMiIgcnk9IjQuMTMyNzQiIGZpbGw9IiM5OUFFQ0MiLz4KPC9zdmc+Cg=="
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: nU.badge,
              style: {
                backgroundColor: r
              }
            })]
          })
        }, n);
      }), i.length > r && reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
        trigger: "click",
        position: "bottomLeft",
        className: nU["member-popover"],
        visible: a,
        onVisibleChange: l,
        content: reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
          showScrollbar: true,
          scrollableClassName: nU.scrollbar,
          className: nU.box,
          children: i == null ? undefined : i.map(e => reactJsxRuntimeCoreReexport.jsx(nJ, {
            item: e
          }, e.id))
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: nU.item,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: nU.text,
            children: reactJsxRuntimeCoreReexport.jsxs("span", {
              children: ["+", i.length - r]
            })
          })
        })
      })]
    });
  };
  var nX = {
    "left-width-patch": "left-width-patch-b0Mdrk",
    "docx-title": "docx-title-LaA9Ib"
  };
  let nG = e => {
    let {
      className: n,
      style: o,
      docId: i,
      docReady: r,
      actionPlugins: a = [],
      strategies: l = eY,
      forcePreview: s = false
    } = e;
    let u = reactReduxCore.useDispatch();
    let m = flowDocxEditorContext.useRpcClientId();
    let p = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
    let {
      streaming: _
    } = e9(p, i, r);
    let h = function (e) {
      let {
        docId: n,
        disabled: o
      } = e;
      let i = docxPanelControllerUtils.getDocxPanelControllerOrThrow();
      let [r, a] = reactCoreLibraryReexport.useState({
        disableWidthMode: false,
        disableFullWidth: false
      });
      let l = reactCoreLibraryReexport.useCallback(e => {
        a(n => ({
          ...n,
          disableWidthMode: e
        }));
      }, []);
      let s = reactCoreLibraryReexport.useCallback(e => {
        a(n => ({
          ...n,
          disableFullWidth: e
        }));
      }, []);
      reactCoreLibraryReexport.useEffect(() => {
        i.bizEvents.on("behavior.disable-width-mode", l);
        i.bizEvents.on("behavior.disable-full-width", s);
        return () => {
          i.bizEvents.off("behavior.disable-width-mode", l);
          i.bizEvents.off("behavior.disable-full-width", s);
        };
      }, [l, s]);
      return {
        type: "custom",
        element: reactJsxRuntimeCoreReexport.jsx(nj, {
          pageToken: n,
          disabled: o,
          onClick: () => {
            i.bizEvents.emit("behavior.click-more");
          },
          onItemClick: e => {
            let {
              current: n
            } = e;
            i.bizEvents.emit("behavior.click-more-item", {
              key: n.value
            });
          },
          pageWidthModes: r
        })
      };
    }({
      docId: i,
      disabled: _
    });
    let [v, f] = reactCoreLibraryReexport.useState(false);
    let [g, b] = reactCoreLibraryReexport.useState(false);
    let w = () => {
      var e;
      var n;
      var o;
      u({
        type: P.isDocEditableRole,
        payload: true
      });
      if (p != null && (e = p.commentService) !== null && e !== undefined) {
        e.isCommentViewVisible().then(e => {
          f(e);
        });
      }
      let i = p == null ? undefined : (n = p.commentService) === null || n === undefined ? undefined : n.commentViewVisibleSubscribe(e => f(!e.collapsed));
      let r = p == null ? undefined : (o = p.moreOptionsService) === null || o === undefined ? undefined : o.shortcutViewVisibleSubscribe(e => {
        let {
          state: n
        } = e;
        b(n);
      });
      return () => {
        if (i != null) {
          i();
        }
        if (r != null) {
          r();
        }
      };
    };
    let {
      inViewBlockHeader: x,
      docxTitle: y
    } = eQ(p, m);
    let {
      status: k,
      editTime: S
    } = tn(m);
    let E = tt({
      status: k,
      editTime: S
    });
    let C = reactCoreLibraryReexport.useMemo(() => measureTextWidth.measureTextWidth(E, {
      fontSize: 14
    }), [E]);
    let [$, j] = reactCoreLibraryReexport.useState([]);
    let N = tw({
      docId: i ?? "",
      clientId: m,
      disabled: _
    });
    let M = nN({
      disabled: _
    });
    let T = nT({
      disabled: _
    });
    let W = nI({
      disabled: _
    });
    let D = nP({
      controller: p,
      clientId: m
    });
    let {
      isExportable: Z,
      isEditable: F,
      isViewable: A,
      canShowCollaboratorInfo: z
    } = docxPermissionHook.useDocxPermissions(m);
    let O = reactReduxCore.useSelector(B);
    let L = () => {
      var e;
      if (p != null && (e = p.historyService) !== null && e !== undefined) {
        e.onHistoryBoxReady(() => {
          u(eV(true));
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!m) {
        return;
      }
      let e = [];
      let n = lifecycleEventManager.lifecycleManager.subscribeEvents(m, {
        onEditorReady: () => {
          e.push(w());
          L();
          e.push(collaborationEventSubscriber.collaborationEventSubscriber.subscribeEvents(m, {
            onMemberListChanged: j
          }));
        }
      });
      return () => {
        n();
        e.forEach(e => e == null ? undefined : e());
        e = [];
        u(eV(false));
      };
    }, [m]);
    (function (e) {
      let n = docxPanelControllerUtils.getDocxPanelControllerIfExists();
      let {
        hasInit: o,
        isOwner: i
      } = docxPermissionHook.useDocxPermissions();
      let r = async () => {
        var e;
        return await (n == null ? undefined : (e = n.getPageMeta) === null || e === undefined ? undefined : e.call(n));
      };
      let a = async () => {
        let e = await r();
        let o = (n == null ? undefined : n.docId) || "";
        teaAnalyticsEventTracker.trackEvent("file_function_show", {
          collection_name: e == null ? undefined : e.title,
          show_from: "ai_doc_detail_upper_right",
          folder_type: "writing",
          if_multiple_choose: 0,
          artifact_type: 1,
          folder_tab: i !== true ? "share" : "my_file",
          page_token: o
        });
      };
      reactCoreLibraryReexport.useEffect(() => {
        if (e && o) {
          a();
        }
      }, [o, i, e]);
    })(!!N || Z === true);
    let U = functionInvoker.invoke(() => {
      let e = [];
      if (A !== true || s) {
        if (isFunctionUtil_1.isFunction(a)) {
          return a(e);
        } else {
          e.push(...a);
          return e;
        }
      } else {
        if (!x) {
          e.push({
            key: "docx-title",
            zone: layoutPositionOrders.LayoutPositions.LeftThird,
            modifier: [{
              type: "custom",
              element: reactJsxRuntimeCoreReexport.jsx(tu, {
                title: y,
                className: nX["docx-title"]
              })
            }],
            getWidth: e => {
              let {
                restWidth: n
              } = e;
              if (n > 240) {
                return 240;
              } else {
                return n - 1;
              }
            }
          });
        }
        if (x && (!r || !_)) {
          e.push({
            key: "edit-time",
            zone: layoutPositionOrders.LayoutPositions.LeftThird,
            modifier: [{
              type: "custom",
              element: reactJsxRuntimeCoreReexport.jsx(tc, {
                status: k,
                rpcClientId: p.rpcClientId,
                editTime: S,
                isHideText: !x,
                disabled: !O,
                onClick: () => {
                  if (p != null) {
                    p.bizEvents.emit("behavior.click-edit-time");
                  }
                }
              })
            }],
            getWidth: e => {
              let {
                renderSize: n
              } = e;
              if (n === layoutSizeConstants.LayoutSizes.Medium && x) {
                return 37 + C;
              } else {
                return 34;
              }
            }
          });
        }
        if (!_ && F === true) {
          e.unshift(D);
        }
        e.push({
          key: "extra",
          zone: layoutPositionOrders.LayoutPositions.RightSecond,
          modifier: [M, h, {
            type: "divider"
          }],
          getWidth: e => {
            let {
              renderSize: n
            } = e;
            if (n === layoutSizeConstants.LayoutSizes.Medium) {
              return layoutSizeConstants.layoutMaxSize + layoutSizeConstants.layoutMaxSize + layoutSizeConstants.layoutMinSize;
            } else {
              return layoutSizeConstants.layoutMaxSize + layoutSizeConstants.layoutMinSize;
            }
          }
        });
        if (N) {
          e.unshift(N);
        }
        if (Z === true) {
          e.unshift(T);
        }
        e.unshift(W);
        if (z && $.length) {
          e.push({
            key: "collab",
            zone: layoutPositionOrders.LayoutPositions.RightForth,
            modifier: [{
              type: "custom",
              element: reactJsxRuntimeCoreReexport.jsx(nV, {
                items: eK($)
              })
            }, {
              type: "divider"
            }],
            getWidth: e => {
              let {
                renderSize: n
              } = e;
              return nH($.length, n) + layoutSizeConstants.layoutMinSize;
            }
          });
        }
        if (isFunctionUtil_1.isFunction(a)) {
          return a(e);
        } else {
          e.push(...a);
          return e;
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(responsiveControlBarHeaderWrapper.ResponsiveControlBarHeader, {
      className: n,
      leftClassName: nX["left-width-patch"],
      style: o,
      plugins: U,
      strategies: l,
      bottomBorder: v || g
    });
  };
  var docxPanelBridge = require("docx-panel-bridge") /*id: 827167*/;
  var nY = {
    container: "container-yH_70c",
    header: "header-Qyev29",
    hidden: "hidden-MVAX51",
    content: "content-hidsyR",
    "fullscreen-content": "fullscreen-content-syKr6j"
  };
  docxPanelBridge.docxBridgeManager.init();
  let nq = reactCoreLibraryReexport.forwardRef(function (e, n) {
    let {
      className: o,
      style: i,
      docId: r,
      rpcClientId: a,
      actionPlugins: l,
      strategies: s,
      readonly: p,
      commentReadonly: E = false,
      logMeta: C,
      isFullscreen: F = false
    } = e;
    let P = useLatestRef_1.useLatestRef(C);
    let A = new URLSearchParams(window.location.search).get("force_preview") === "true";
    let B = reactCoreLibraryReexport.useMemo(() => a ?? `doc-iframe-${r}-${randomNumberUtil.generateRandom(100000000, 999999999)}`, [r]);
    let L = reactCoreLibraryReexport.useMemo(() => Date.now(), [r]);
    let H = reactCoreLibraryReexport.useMemo(() => {
      let e = new docxPanelControllerSdk.DocxPanelControllerSdk({
        docId: r,
        rpcClientId: B,
        logMeta: () => {
          return P.current ?? {};
        }
      });
      docxPanelBridge.docxBridgeManager.setDocxPannelController(e);
      return e;
    }, [r, B]);
    G();
    reactCoreLibraryReexport.useEffect(() => {
      safePropertyAssignUtil.safePropertyAssign(window, {
        docController: H
      });
    }, [H]);
    reactUseRunOnce.useRunOnce(() => {
      flowPermissionHooks.businessConstants.renderStart = asyncLayoutCanvas_1.LayoutCanvas.renderStart;
    });
    let J = reactReduxCore.useSelector(O);
    let [V, {
      setTrue: X,
      setFalse: K
    }] = useBooleanHook.useBoolean(false);
    reactCoreLibraryReexport.useEffect(() => {
      let e = lifecycleEventManager.lifecycleManager.subscribeEvents(B, {
        onEditorReady: () => {
          X();
        }
      });
      return () => {
        e();
      };
    }, [H, B]);
    let Y = en();
    let {
      isMightStreaming: q,
      streamingSource: Q
    } = docStreamingStatus.useStreamingStatus(H);
    reactCoreLibraryReexport.useImperativeHandle(n, () => H, [H]);
    eN({
      controller: H
    });
    eI({
      controller: H
    });
    let ee = reactCoreLibraryReexport.useRef(null);
    let {
      disableWidthMode: eo,
      disableFullWidth: ei
    } = docxWidthModeHooks.useDocxLayoutConfig(ee, B, H);
    reactCoreLibraryReexport.useEffect(() => {
      H.bizEvents.emit("behavior.disable-width-mode", eo);
      H.bizEvents.emit("behavior.disable-full-width", ei);
    }, [eo, ei, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (H != null) {
        H.eventEmitter.on("loading.first-render", X);
      }
      asyncSkillMessageLifecycle_2.skillLifecycle.on("behavior.partial-writing.submit", ec);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("behavior.startup-writing.submit", ec);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("copilot.doc-generate.message-start", ed);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("copilot.doc-generate.artifact-receiving", X);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("copilot.doc-generate.message-end", X);
      return () => {
        H.bizEvents.removeAllListeners();
        H.eventEmitter.removeAllListeners();
        asyncSkillMessageLifecycle_2.skillLifecycle.off("behavior.partial-writing.submit", ec);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("behavior.startup-writing.submit", ec);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("copilot.doc-generate.message-start", ed);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("copilot.doc-generate.artifact-receiving", X);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("copilot.doc-generate.message-end", X);
      };
    }, [r]);
    let er = U(H, B);
    let ea = docPlaygroundCheck.isDocPlayground();
    let el = messageDocContextUtil.isDocMessageContext({
      docId: r
    });
    let es = V && (q || el);
    reactCoreLibraryReexport.useEffect(() => {
      let {
        setOpenedDocId: e
      } = writingSkillStore.writingSkillStore.getState();
      e(r);
    }, [r]);
    (function (e, n, o) {
      let i = () => {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputService").then(e => {
          var n;
          if (e != null && (n = e.focusOnEditor) !== null && n !== undefined) {
            n.call(e);
          }
        });
      };
      reactCoreLibraryReexport.useEffect(() => {
        if (n && (e || o)) {
          setTimeout(() => {
            i();
          }, 100);
        }
      }, [e, i, n, o]);
    })(V, ea, er);
    reactCoreLibraryReexport.useEffect(() => {
      let {
        updateDocMetaMap: e
      } = writingSkillStore.writingSkillStore.getState();
      e(r, {
        isEditRole: J
      });
    }, [J]);
    let ec = () => {};
    let ed = async () => {
      if (await docxPanelUtils.docPanelUtils.getIsFirstLineEmpty(B)) {
        K();
      }
    };
    let [eu, em] = reactCoreLibraryReexport.useState(true);
    let ep = () => {
      let e = $(B, {
        enterFullScreen: () => em(false),
        exitFullScreen: () => em(true)
      });
      return () => {
        if (e != null) {
          e();
        }
      };
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!B) {
        return;
      }
      let e = [];
      let n = lifecycleEventManager.lifecycleManager.subscribeEvents(B, {
        onEditorReady: () => {
          e.push(ep());
        }
      });
      return () => {
        n();
        e.forEach(e => e == null ? undefined : e());
        e = [];
      };
    }, [B]);
    if (Y !== et.Finished) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactReduxCore.Provider, {
        store: z,
        children: reactJsxRuntimeCoreReexport.jsx(flowDocxEditorContext.FlowDocXProvider, {
          value: {
            flowDocXEditorController: H,
            rpcClientId: B
          },
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            "data-testid": "doc_docx_panel",
            className: _(nY.container, disableSelectBarConst.disableSelectBar, imChatFlowSelectBar.flowDisableClass, o),
            ...imChatFlowSelectBar.editorAriaProps,
            style: i,
            ref: ee,
            children: [reactJsxRuntimeCoreReexport.jsx(nG, {
              className: _(nY.header, {
                [nY.hidden]: !eu
              }),
              docId: r,
              actionPlugins: l,
              strategies: s,
              docReady: V,
              forcePreview: A
            }), es && reactJsxRuntimeCoreReexport.jsx(docxCanvasAiStatusIndicator.AiStatusIndicator, {
              streaming: q,
              source: Q
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              "data-testid": "doc_docx_content",
              className: F ? nY["fullscreen-content"] : nY.content,
              children: reactJsxRuntimeCoreReexport.jsx(inlineDocxPanel_1.InlineDocxPanel, {
                docId: r,
                clientId: B,
                fullScreen: F,
                perfStartTime: L,
                isPreview: A
              })
            }), er && ea && reactJsxRuntimeCoreReexport.jsx(ez, {})]
          })
        })
      });
    }
  });
  require.d(exports, {
    DocxPanelContainer: function () {
      return nq;
    }
  });
}