// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zQ' to 'FlowDocxEditorContainer'
// - Renamed export 'm$' to 'FlowDocxEditorProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 750836
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var queryStringUtils_2_1 = require("query-string-utils_2_1") /*id: 698435*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var docSkeletonPanel = require("doc-skeleton-panel") /*id: 779323*/;
  var docPlaygroundCheck = require("doc-playground-check") /*id: 993680*/;
  var asyncLayoutCanvas_1 = require("async-layout-canvas_1") /*id: 857808*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var docUpgradeStatusHook = require("doc-upgrade-status-hook") /*id: 439440*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var reactUseRunOnce = require("react-use-run-once") /*id: 561418*/;
  var useBooleanHook = require("use-boolean-hook") /*id: 240989*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var disableSelectBarConst = require("disable-select-bar-const") /*id: 554633*/;
  var imChatFlowSelectBar = require("im-chat-flow-select-bar") /*id: 808678*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var textFormatterComponent = require("text-formatter-component") /*id: 532796*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  var reactReduxExports = require("react-redux-exports") /*id: 426907*/;
  var flowPermissionHooks = require("flow-permission-hooks") /*id: 930373*/;
  var flowDocxEditorControllerModule = require("flow-docx-editor-controller-module") /*id: 544579*/;
  var asyncSkillMessageLifecycle_2 = require("async-skill-message-lifecycle_2") /*id: 288954*/;
  var otterDocDiContainerInitializer = require("otter-doc-di-container-initializer") /*id: 669008*/;
  var docxWidthModeHooks = require("docx-width-mode-hooks") /*id: 978094*/;
  var messageDocContextUtil = require("message-doc-context-util") /*id: 406671*/;
  var docStreamingStatus = require("doc-streaming-status") /*id: 840575*/;
  var docLauncherController = require("doc-launcher-controller") /*id: 227005*/;
  var docLauncherStatus = require("doc-launcher-status") /*id: 126777*/;
  let A = e => {
    let [n, o] = reactCoreLibraryReexport.useState(false);
    let i = e != null && !!e.blockManager && flowDocxEditorControllerModule.checkSingleEmptyTextBlock(e.blockManager);
    let {
      isMightStreaming: r,
      streamingSource: l
    } = docStreamingStatus.useStreamingStatus(e);
    reactCoreLibraryReexport.useEffect(() => {
      if (r && l && [docLauncherStatus.getLaunchStatus.Rewrite, docLauncherStatus.getLaunchStatus.Startup].includes(l)) {
        o(true);
      }
    }, [r, l]);
    return i && !n;
  };
  var routePathUtils = require("route-path-utils") /*id: 930304*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  (i = L || {}).CHAT = "chat";
  i.DOC = "ai_doc_detail";
  var L = i;
  let U = () => {
    let e = reactCoreLibraryReexport.useRef(0);
    let n = routePathUtils.isCurrentChatPath();
    let o = reactCoreLibraryReexport.useRef(false);
    let i = () => {
      if (o.current) {
        return;
      }
      o.current = true;
      let i = Date.now() - e.current;
      let r = docTokenHelperUtils.resolveDocToken();
      teaAnalyticsEventTracker.trackEvent("doc_close", {
        duration: i,
        artifact_type: "1",
        page_token: r,
        enter_from: routePathUtils.getEnterSource(),
        canvas_type: n ? "writing" : null,
        current_page: n ? L.CHAT : L.DOC
      });
    };
    let r = () => {
      if (document.visibilityState === "hidden") {
        i();
      } else {
        o.current = false;
        e.current = Date.now();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      e.current = Date.now();
      window.addEventListener("beforeunload", i);
      window.addEventListener("pagehide", i);
      document.addEventListener("visibilitychange", r);
      return () => {
        i();
        window.removeEventListener("beforeunload", i);
        window.removeEventListener("pagehide", i);
        document.removeEventListener("visibilitychange", r);
      };
    }, []);
  };
  var chatUserInfoStatus = require("chat-user-info-status") /*id: 607389*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var notificationServiceWrapper = require("notification-service-wrapper") /*id: 630603*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var wrenchToolIcon = require("wrench-tool-icon") /*id: 457145*/;
  var rtlListIconComponent = require("rtl-list-icon-component") /*id: 48768*/;
  var businessSkillBarIcon = require("business-skill-bar-icon") /*id: 282062*/;
  var skillBarIconComponent = require("skill-bar-icon-component") /*id: 278022*/;
  var returnOutlinedIcon = require("return-outlined-icon") /*id: 672563*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var docFlowTypes = require("doc-flow-types") /*id: 729799*/;
  var artifactLayoutConstants = require("artifact-layout-constants") /*id: 554108*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var flowDocumentManagementService = require("flow-document-management-service") /*id: 588256*/;
  let es = async e => {
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
  var ed = {
    container: "container-GJSLdA",
    avatar: "avatar-mrSKqk"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let em = e => {
    let {
      className: n,
      style: o,
      icon: i,
      avatar: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: d(ed.container, n),
      style: o,
      children: [i, r && reactJsxRuntimeCoreReexport.jsx("img", {
        className: ed.avatar,
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-Wlpi$$o2$2xNe*EySXl%alJN$0$Kb1ltM$djMHd5-%haa%1u%jZ%RE5XZWxw$E1XO$pWelZyWWtk$mRHRlhPSFJh$0Zwc1ltN$Nla3d5$*5aa$dFSjJZbTFXZFdSS$R-WmhWMD%yWW1reE0yRll$bTlN$jBZe$dWaFNhR05wT1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
        })
      })]
    });
  };
  var ep = {
    "folded-title": "folded-title-e9q8pd",
    text: "text-z0EQ4M"
  };
  let e_ = (e, n) => {
    let o = {
      [docFlowTypes.artifactActionType.ArtifactPolish]: {
        icon: reactJsxRuntimeCoreReexport.jsx(wrenchToolIcon.WrenchToolIcon, {}),
        title: i18nTranslationUtils.i18nextTranslate("canvas_writing_shortcuts_polish")
      },
      [docFlowTypes.artifactActionType.ArtifactAdjustShorter]: {
        icon: reactJsxRuntimeCoreReexport.jsx(rtlListIconComponent.RtlListIcon, {}),
        title: i18nTranslationUtils.i18nextTranslate("canvas_writing_shortcuts_adjust_length_shorter")
      },
      [docFlowTypes.artifactActionType.ArtifactAdjustLonger]: {
        icon: reactJsxRuntimeCoreReexport.jsx(businessSkillBarIcon.SkillBarIcon, {}),
        title: i18nTranslationUtils.i18nextTranslate("canvas_writing_shortcuts_adjust_length_longer")
      }
    };
    let i = {
      icon: reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {}),
      title: i18nTranslationUtils.i18nextTranslate("doc_full_page_rewriting")
    };
    if (e === docFlowTypes.flowTaskType.ChatRewrite) {
      return i;
    }
    if (!isUndefinedCheck.isUndefined(n)) {
      return o[n] ?? i;
    }
    return i;
  };
  let eh = e => {
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
        if (r === docFlowTypes.docStatus.Generating) {
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "doc_streaming_start",
            meta: {
              doc_id: n.docId,
              status: r
            }
          });
        }
        if (r !== docFlowTypes.docStatus.Generated || !collectionIncludesUtil.includes([docFlowTypes.flowTaskType.ChatRewrite, docFlowTypes.flowTaskType.InstructRewrite], a)) {
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
        } = e_(a, c);
        let f = a === docFlowTypes.flowTaskType.ChatRewrite ? s : undefined;
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
                es(d);
                notificationServiceWrapper.notificationService.close(e);
              },
              children: o("doc_streaming_finished_notice_revert")
            })
          });
        } else {
          notificationServiceWrapper.notificationService.open({
            icon: reactJsxRuntimeCoreReexport.jsx(em, {
              icon: reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {}),
              avatar: p
            }),
            title: reactJsxRuntimeCoreReexport.jsx(textFormatterComponent.textFormatter, {
              className: ep["folded-title"],
              textClassName: ep.text,
              replaceTextClassName: ep.text,
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
  let eb = e => {
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
  var ex = e => {
    let {
      dataTestId: n = "empty_doc_init_page"
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "empty-doc-init-page-Sk4On2",
      "data-testid": n,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "empty-doc-text-w6mDxg",
        children: "文档生成后会在此展示"
      })
    });
  };
  var docxCanvasAiStatusIndicator = require("docx-canvas-ai-status-indicator") /*id: 811271*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var measureTextWidth = require("measure-text-width") /*id: 853350*/;
  var layoutPositionOrders = require("layout-position-orders") /*id: 314031*/;
  var layoutSizeConstants = require("layout-size-constants") /*id: 416118*/;
  var responsiveControlBarHeaderWrapper = require("responsive-control-bar-header-wrapper") /*id: 550014*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var docxCommentUiSelectors = require("docx-comment-ui-selectors") /*id: 133504*/;
  var blockHeaderViewHook = require("block-header-view-hook") /*id: 558499*/;
  let eM = e => e.map(e => {
    let {
      member_id: n,
      cn_name: o,
      avatar_url: i,
      cursorColor: r
    } = e;
    return {
      id: n,
      name: o,
      avatar: i,
      color: r
    };
  });
  var chatActionLayoutConfig = require("chat-action-layout-config") /*id: 43144*/;
  var avatarPopoverMenuComponent = require("avatar-popover-menu-component") /*id: 655141*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var permissionRoleTypes = require("permission-role-types") /*id: 992343*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var accessPermissionEnum = require("access-permission-enum") /*id: 968819*/;
  var collaboratorTokenManagement = require("collaborator-token-management") /*id: 2348*/;
  var publicDocumentHooks = require("public-document-hooks") /*id: 345997*/;
  let eB = e => {
    let [n, o] = reactCoreLibraryReexport.useState(null);
    let {
      runAsync: i,
      data: r = {}
    } = publicDocumentHooks.usePublicPageData({
      token: e
    });
    let {
      is_open: l = false,
      content_security_meta: s,
      is_first_open: c = false
    } = r ?? {};
    let {
      disposal_strategy: d
    } = s ?? {};
    return {
      isShared: n ?? l,
      isBanned: !isNullishCheck.isNil(d) && !deepEqualUtil_1.deepEqual(d, accessPermissionEnum.AccessPermission.None),
      info: r,
      isFirstOpen: c && n === null,
      refreshInfo: i,
      changeInfo: async n => {
        let {
          open: r
        } = n;
        let a = await collaboratorTokenManagement.setInternetPublic({
          token: e,
          open: r
        });
        let {
          is_open: l
        } = (a == null ? undefined : a.data) ?? {};
        o(l ?? r);
      }
    };
  };
  let eL = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        DocxSharePopover: e
      } = await Promise.all([require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("changeset-easysync-modules") /*id: 5888*/, require.e("network-io-client") /*id: 45310*/, require.e("webpack-chunk-utils") /*id: 17934*/, require.e("docx-editor-collab-share") /*id: 70666*/, require.e("canvas-share-popover") /*id: 91643*/]).then(require.bind(require, "docx-share-popover") /*id: 634198*/);
      return {
        default: e
      };
    }
  })));
  let eU = e => {
    let {
      disabled: n
    } = e || {};
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let i = flowPermissionHooks.getDocToken();
    let r = eB(i);
    let {
      isShared: l,
      isBanned: s
    } = r;
    let {
      role: c
    } = flowPermissionHooks.useRoleStatus();
    let d = collectionIncludesUtil.includes([permissionRoleTypes.UserRoles.Owner, permissionRoleTypes.UserRoles.Manager], c);
    let u = reactCoreLibraryReexport.useMemo(() => measureTextWidth.measureTextWidth(o("writing_canvas_btn_share")), []);
    if (d || l && !s) {
      return {
        key: "transfer",
        zone: layoutPositionOrders.LayoutPositions.RightSecond,
        modifier: [{
          type: "custom",
          key: "share",
          element: reactJsxRuntimeCoreReexport.jsx(eL, {
            token: i,
            isAdmin: d,
            disabled: n,
            ...r
          })
        }],
        getWidth: e => {
          let {
            renderSize: n
          } = e;
          return 32 + (n !== layoutSizeConstants.LayoutSizes.Medium ? 0 : u + 6);
        }
      };
    } else {
      return null;
    }
  };
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var exportRtlIcon_1 = require("export-rtl-icon_1") /*id: 923151*/;
  let eY = {
    wait: 500,
    leading: true,
    trailing: false
  };
  var iconWarningTriangle = require("icon-warning-triangle") /*id: 507694*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let e0 = reactCoreLibraryReexport.createContext({
    reportModalVisible: false,
    setReportModalVisible: emptyExportFunction.emptyFunction,
    feedbackModalVisible: false,
    setFeedbackModalVisible: emptyExportFunction.emptyFunction
  });
  let e1 = e => {
    let {
      children: n
    } = e;
    let [o, i] = reactCoreLibraryReexport.useState(false);
    let [r, l] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx(e0.Provider, {
      value: {
        reportModalVisible: o,
        setReportModalVisible: i,
        feedbackModalVisible: r,
        setFeedbackModalVisible: l
      },
      children: n
    });
  };
  let e2 = () => reactCoreLibraryReexport.useContext(e0);
  var briefcaseRtlIcon = require("briefcase-rtl-icon") /*id: 829637*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var layoutRtlIcon = require("layout-rtl-icon") /*id: 440699*/;
  let e6 = e => reactJsxRuntimeCoreReexport.jsx("svg", {
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
  let e9 = "FlowDoc_SwitchModeWrapperId";
  var rtlDocumentChartIcon_1_1 = require("rtl-document-chart-icon_1_1") /*id: 460866*/;
  var addCircleOutlinedIcon = require("add-circle-outlined-icon") /*id: 595000*/;
  var bellNotificationRtlIcon = require("bell-notification-rtl-icon") /*id: 933197*/;
  var businessInputToolIcon_1 = require("business-input-tool-icon_1") /*id: 249465*/;
  var docExportPopover = require("doc-export-popover") /*id: 381123*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var docLauncherUtils = require("doc-launcher-utils") /*id: 325489*/;
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var calculatorIconComponent = require("calculator-icon-component") /*id: 461263*/;
  var artifactEnumConstants = require("artifact-enum-constants") /*id: 912769*/;
  function tc(e) {
    teaAnalyticsEventTracker.trackEvent("file_function_click", {
      show_from: "ai_doc_detail_upper_right",
      button_name: e,
      folder_type: "writing",
      if_multiple_choose: 0
    });
  }
  function td(e) {
    let {
      buttonName: n,
      success: o,
      errorCode: i
    } = e;
    teaAnalyticsEventTracker.trackEvent("file_function_status", {
      type: "file",
      show_from: "ai_doc_detail_upper_right",
      button_name: n,
      success: o,
      error_code: i
    });
  }
  var aiDocCreateTracking = require("ai-doc-create-tracking") /*id: 86772*/;
  var threadContentTypes = require("thread-content-types") /*id: 878038*/;
  var driveDocsUpgradeToast = require("drive-docs-upgrade-toast") /*id: 847503*/;
  var documentUpgradeAndCreationUtils = require("document-upgrade-and-creation-utils") /*id: 24188*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var secureLinkOpener = require("secure-link-opener") /*id: 357305*/;
  var rtlAddDocumentIcon = require("rtl-add-document-icon") /*id: 458522*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var tw = clipboardCopyHelper;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var documentIconComponent = require("document-icon-component") /*id: 886397*/;
  var docCommentShownStateUtil = require("doc-comment-shown-state-util") /*id: 814673*/;
  var customSwitchComponent = require("custom-switch-component") /*id: 753298*/;
  var userPreferenceStore = require("user-preference-store") /*id: 292003*/;
  var useFeatureFlagEffect = require("use-feature-flag-effect") /*id: 806314*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var checkCircleFilledIcon = require("check-circle-filled-icon") /*id: 259842*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  var aiContinueWritingStoreFactory = require("ai-continue-writing-store-factory") /*id: 809140*/;
  var docxShareClientService = require("docx-share-client-service") /*id: 88629*/;
  var lazyFeedbackModalBase = require("lazy-feedback-modal-base") /*id: 244987*/;
  var useShareReportReasons = require("use-share-report-reasons") /*id: 500217*/;
  let tF = () => {
    let {
      reportModalVisible: e,
      setReportModalVisible: n
    } = e2();
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let i = useShareReportReasons.useReportReasons();
    let r = async e => {
      let n = flowPermissionHooks.getDocToken();
      try {
        await docxShareClientService.reportShareError({
          page_token: n,
          reason_ids: [e.type],
          reason_detail: e.content
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
      presetOptions: i,
      maxTextCount: 500,
      okButtonDisable: true,
      onHide: () => n(false),
      onSubmit: e => {
        n(false);
        r(e);
      }
    });
  };
  var uiPositionWrappers = require("ui-position-wrappers") /*id: 711067*/;
  var docxFlowCommentStore = require("docx-flow-comment-store") /*id: 822624*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var userBriefStoreManager = require("user-brief-store-manager") /*id: 59679*/;
  var contentCommentTypes = require("content-comment-types") /*id: 900376*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var deltaSetChangesetConverter = require("delta-set-changeset-converter") /*id: 218394*/;
  var contentTypeConstants = require("content-type-constants") /*id: 937300*/;
  let tK = e => deltaSetChangesetConverter.convertDeltaSet(e.initialAttributedTexts, e.apool).get(zeroConstantModule_1.versionValue).ops.map(e => {
    let o = e.attributes?.["inline-component"];
    if (o) {
      let e = safeJsonUtils.safeParse(o, {});
      if ((e == null ? undefined : e.type) === "mention_doc") {
        return {
          type: contentTypeConstants.contentTypes.DocLink,
          url: e.data.raw_url,
          title: e.data.title,
          token: e.data.token
        };
      }
    }
    if (e.insert) {
      return {
        type: contentTypeConstants.contentTypes.Text,
        text: e.insert
      };
    }
  }).filter(Boolean);
  var docCommentThread = require("doc-comment-thread") /*id: 276299*/;
  var tq = {
    "history-comment-list-wrapper": "history-comment-list-wrapper-lDRCZ_",
    "history-comment-item-wrapper": "history-comment-item-wrapper-dkaUGB",
    "top-bar": "top-bar-FEWB1a",
    "solved-tip": "solved-tip-FeZbDK",
    "reopen-button": "reopen-button-SY6roB",
    divider: "divider-Cf2iI1",
    "delete-button": "delete-button-OmbsN_",
    "empty-tip": "empty-tip-gYz6wT",
    "empty-tip-icon": "empty-tip-icon-k0qMYS",
    "empty-tip-text": "empty-tip-text-_0V47P"
  };
  let tQ = {
    dark: {
      PicEmptyNoDocSVG: e => reactJsxRuntimeCoreReexport.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 100,
        height: 100,
        fill: "none",
        viewBox: "0 0 100 100",
        ...e,
        children: [reactJsxRuntimeCoreReexport.jsx("rect", {
          width: 33.5,
          height: 40.5,
          x: 8.25,
          y: 39.25,
          fill: "#2B343E",
          stroke: "url(#pic_empty_no_doc_dark_svg__a)",
          strokeWidth: 0.5,
          opacity: 0.6,
          rx: 7.75
        }), reactJsxRuntimeCoreReexport.jsx("rect", {
          width: 57.5,
          height: 67.5,
          x: 21.25,
          y: 12.25,
          fill: "url(#pic_empty_no_doc_dark_svg__b)",
          stroke: "url(#pic_empty_no_doc_dark_svg__c)",
          strokeWidth: 0.5,
          rx: 9.75
        }), reactJsxRuntimeCoreReexport.jsx("rect", {
          width: 40,
          height: 4,
          x: 30,
          y: 27,
          fill: "#414B55",
          rx: 2
        }), reactJsxRuntimeCoreReexport.jsx("rect", {
          width: 40,
          height: 4,
          x: 30,
          y: 38,
          fill: "#414B55",
          rx: 2
        }), reactJsxRuntimeCoreReexport.jsx("rect", {
          width: 15,
          height: 4,
          x: 30,
          y: 49,
          fill: "#414B55",
          rx: 2
        }), reactJsxRuntimeCoreReexport.jsx("rect", {
          width: 15,
          height: 5,
          x: 30,
          y: 60,
          fill: "#414B55",
          rx: 2.5
        }), reactJsxRuntimeCoreReexport.jsxs("g", {
          clipPath: "url(#pic_empty_no_doc_dark_svg__d)",
          children: [reactJsxRuntimeCoreReexport.jsx("rect", {
            width: 36,
            height: 36,
            x: 56,
            y: 53,
            fill: "url(#pic_empty_no_doc_dark_svg__e)",
            rx: 18
          }), reactJsxRuntimeCoreReexport.jsx("foreignObject", {
            width: 76,
            height: 76,
            x: 36,
            y: 33,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              xmlns: "http://www.w3.org/1999/xhtml",
              style: {
                backdropFilter: "blur(10px)",
                clipPath: "url(#pic_empty_no_doc_dark_svg__f)",
                height: "100%",
                width: "100%"
              }
            })
          }), reactJsxRuntimeCoreReexport.jsx("circle", {
            cx: 74,
            cy: 71,
            r: 18,
            fill: "url(#pic_empty_no_doc_dark_svg__g)",
            fillOpacity: 0.1,
            "data-figma-bg-blur-radius": 20
          }), reactJsxRuntimeCoreReexport.jsx("path", {
            fill: "url(#pic_empty_no_doc_dark_svg__h)",
            fillOpacity: 0.6,
            d: "M66.577 63.595a1.524 1.524 0 0 1 2.135 0L73.38 68.2a1 1 0 0 0 1.404 0l4.498-4.437.115-.103a1.525 1.525 0 0 1 2.02.103c.553.545.588 1.409.104 1.994l-.103.113-4.479 4.42a1 1 0 0 0 0 1.423l4.479 4.419.103.113a1.475 1.475 0 0 1-.103 1.993 1.525 1.525 0 0 1-2.02.103l-.116-.103-4.497-4.437a1 1 0 0 0-1.404 0l-4.67 4.607a1.524 1.524 0 0 1-2.134 0 1.476 1.476 0 0 1 0-2.107l4.649-4.59a1 1 0 0 0 0-1.423l-4.649-4.587a1.476 1.476 0 0 1 0-2.107"
          })]
        }), reactJsxRuntimeCoreReexport.jsx("rect", {
          width: 35.5,
          height: 35.5,
          x: 56.25,
          y: 53.25,
          stroke: "url(#pic_empty_no_doc_dark_svg__i)",
          strokeWidth: 0.5,
          rx: 17.75
        }), reactJsxRuntimeCoreReexport.jsxs("defs", {
          children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_dark_svg__a",
            x1: 25,
            x2: 25,
            y1: 39,
            y2: 80,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#2F363D"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#44505F"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_dark_svg__b",
            x1: 50,
            x2: 50,
            y1: 12,
            y2: 80,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#23282D"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#414D58"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_dark_svg__c",
            x1: 50,
            x2: 50,
            y1: 12,
            y2: 80,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#2D343A"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#59616D"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_dark_svg__e",
            x1: 74,
            x2: 74,
            y1: 53,
            y2: 89,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#23282D"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#414D58"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_dark_svg__g",
            x1: 74.064,
            x2: 74.064,
            y1: 55.231,
            y2: 80.669,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#777"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#747474"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_dark_svg__h",
            x1: 73.997,
            x2: 73.997,
            y1: 63.158,
            y2: 78.845,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#3761B0"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#3F7FF6"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_dark_svg__i",
            x1: 74,
            x2: 74,
            y1: 53,
            y2: 89,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#2D343A"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#59616D"
            })]
          }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
            id: "pic_empty_no_doc_dark_svg__f",
            transform: "translate(-36 -33)",
            children: reactJsxRuntimeCoreReexport.jsx("circle", {
              cx: 74,
              cy: 71,
              r: 18
            })
          }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
            id: "pic_empty_no_doc_dark_svg__d",
            children: reactJsxRuntimeCoreReexport.jsx("rect", {
              width: 36,
              height: 36,
              x: 56,
              y: 53,
              fill: "#fff",
              rx: 18
            })
          })]
        })]
      })
    },
    light: {
      PicEmptyNoDocSVG: e => reactJsxRuntimeCoreReexport.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 100,
        height: 100,
        fill: "none",
        viewBox: "0 0 100 100",
        ...e,
        children: [reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "url(#pic_empty_no_doc_svg__a)",
          fillOpacity: 0.6,
          stroke: "#F2F5FA",
          strokeWidth: 0.5,
          d: "M24 39.25h2c3.778 0 6.587 0 8.745.291 2.15.29 3.618.861 4.736 1.979 1.117 1.117 1.689 2.584 1.978 4.735.29 2.158.291 4.967.291 8.745v9c0 3.778 0 6.587-.291 8.745-.29 2.15-.861 3.618-1.979 4.736-1.117 1.117-2.584 1.689-4.735 1.978-2.158.29-4.967.291-8.745.291h-2c-3.778 0-6.587 0-8.745-.291-2.15-.29-3.618-.861-4.735-1.978-1.118-1.118-1.69-2.585-1.979-4.736-.29-2.158-.291-4.967-.291-8.745v-9c0-3.778 0-6.587.291-8.745.29-2.15.861-3.618 1.979-4.736 1.117-1.117 2.584-1.689 4.735-1.978 2.158-.29 4.967-.291 8.745-.291Z",
          opacity: 0.6
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "url(#pic_empty_no_doc_svg__b)",
          stroke: "#F8F8F9",
          strokeWidth: 0.5,
          d: "M31 12.25h38c5.385 0 9.75 4.365 9.75 9.75v48c0 5.385-4.365 9.75-9.75 9.75H31c-5.385 0-9.75-4.365-9.75-9.75V22c0-5.385 4.365-9.75 9.75-9.75Z"
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#F7FAFF",
          d: "M30 29a2 2 0 0 1 2-2h36a2 2 0 1 1 0 4H32a2 2 0 0 1-2-2M30 40a2 2 0 0 1 2-2h36a2 2 0 1 1 0 4H32a2 2 0 0 1-2-2M30 51a2 2 0 0 1 2-2h11a2 2 0 1 1 0 4H32a2 2 0 0 1-2-2M30 62.5a2.5 2.5 0 0 1 2.5-2.5h10a2.5 2.5 0 0 1 0 5h-10a2.5 2.5 0 0 1-2.5-2.5"
        }), reactJsxRuntimeCoreReexport.jsx("foreignObject", {
          width: 76,
          height: 76,
          x: 36,
          y: 33,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: {
              backdropFilter: "blur(10px)",
              clipPath: "url(#pic_empty_no_doc_svg__c)",
              height: "100%",
              width: "100%"
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "url(#pic_empty_no_doc_svg__d)",
          fillOpacity: 0.2,
          d: "M92 71c0 9.941-8.059 18-18 18s-18-8.059-18-18 8.059-18 18-18 18 8.059 18 18",
          "data-figma-bg-blur-radius": 20
        }), reactJsxRuntimeCoreReexport.jsx("foreignObject", {
          width: 76,
          height: 76,
          x: 36,
          y: 33,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: {
              backdropFilter: "blur(10px)",
              clipPath: "url(#pic_empty_no_doc_svg__e)",
              height: "100%",
              width: "100%"
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "url(#pic_empty_no_doc_svg__f)",
          d: "M91 71c0-9.389-7.611-17-17-17s-17 7.611-17 17 7.611 17 17 17v1c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18v-1c9.389 0 17-7.611 17-17",
          "data-figma-bg-blur-radius": 20
        }), reactJsxRuntimeCoreReexport.jsx("foreignObject", {
          width: 175.725,
          height: 175.687,
          x: -13.865,
          y: -16.842,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: {
              backdropFilter: "blur(40px)",
              clipPath: "url(#pic_empty_no_doc_svg__g)",
              height: "100%",
              width: "100%"
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx("g", {
          "data-figma-bg-blur-radius": 80,
          filter: "url(#pic_empty_no_doc_svg__h)",
          opacity: 0.8,
          children: reactJsxRuntimeCoreReexport.jsx("path", {
            fill: "#6B9FFF",
            d: "M66.577 63.595a1.524 1.524 0 0 1 2.135 0l5.37 5.3 5.2-5.131.115-.103a1.525 1.525 0 0 1 2.02.103c.553.545.588 1.409.104 1.994l-.103.113-5.2 5.131 5.2 5.13.103.114a1.475 1.475 0 0 1-.103 1.993 1.525 1.525 0 0 1-2.02.103l-.116-.103-5.2-5.13-5.37 5.3a1.524 1.524 0 0 1-2.135 0 1.476 1.476 0 0 1 0-2.107L71.947 71l-5.37-5.299a1.476 1.476 0 0 1 0-2.107"
          })
        }), reactJsxRuntimeCoreReexport.jsxs("defs", {
          children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_svg__a",
            x1: 25,
            x2: 25,
            y1: 39,
            y2: 80,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#E9EBF0"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#F7F8F8"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_svg__b",
            x1: 50,
            x2: 50,
            y1: 12,
            y2: 100.5,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#CDDDFF"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#FAFCFF"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_svg__d",
            x1: 74.064,
            x2: 74.064,
            y1: 55.231,
            y2: 80.669,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#D6D6D6"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#F9F9F9"
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
            id: "pic_empty_no_doc_svg__f",
            x1: 61.824,
            x2: 74,
            y1: 53,
            y2: 89,
            gradientUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("stop", {
              stopColor: "#FDFDFF"
            }), reactJsxRuntimeCoreReexport.jsx("stop", {
              offset: 1,
              stopColor: "#E9F1FF"
            })]
          }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
            id: "pic_empty_no_doc_svg__c",
            transform: "translate(-36 -33)",
            children: reactJsxRuntimeCoreReexport.jsx("path", {
              d: "M92 71c0 9.941-8.059 18-18 18s-18-8.059-18-18 8.059-18 18-18 18 8.059 18 18"
            })
          }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
            id: "pic_empty_no_doc_svg__e",
            transform: "translate(-36 -33)",
            children: reactJsxRuntimeCoreReexport.jsx("path", {
              d: "M91 71c0-9.389-7.611-17-17-17s-17 7.611-17 17 7.611 17 17 17v1c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18v-1c9.389 0 17-7.611 17-17"
            })
          }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
            id: "pic_empty_no_doc_svg__g",
            transform: "translate(13.865 16.842)",
            children: reactJsxRuntimeCoreReexport.jsx("path", {
              d: "M66.577 63.595a1.524 1.524 0 0 1 2.135 0l5.37 5.3 5.2-5.131.115-.103a1.525 1.525 0 0 1 2.02.103c.553.545.588 1.409.104 1.994l-.103.113-5.2 5.131 5.2 5.13.103.114a1.475 1.475 0 0 1-.103 1.993 1.525 1.525 0 0 1-2.02.103l-.116-.103-5.2-5.13-5.37 5.3a1.524 1.524 0 0 1-2.135 0 1.476 1.476 0 0 1 0-2.107L71.947 71l-5.37-5.299a1.476 1.476 0 0 1 0-2.107"
            })
          }), reactJsxRuntimeCoreReexport.jsxs("filter", {
            id: "pic_empty_no_doc_svg__h",
            width: 175.725,
            height: 175.687,
            x: -13.865,
            y: -16.842,
            colorInterpolationFilters: "sRGB",
            filterUnits: "userSpaceOnUse",
            children: [reactJsxRuntimeCoreReexport.jsx("feFlood", {
              floodOpacity: 0,
              result: "BackgroundImageFix"
            }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
              in: "SourceAlpha",
              result: "hardAlpha",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), reactJsxRuntimeCoreReexport.jsx("feOffset", {
              dx: 3,
              dy: 6
            }), reactJsxRuntimeCoreReexport.jsx("feGaussianBlur", {
              stdDeviation: 5
            }), reactJsxRuntimeCoreReexport.jsx("feComposite", {
              in2: "hardAlpha",
              operator: "out"
            }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
              values: "0 0 0 0 0.184314 0 0 0 0 0.207843 0 0 0 0 0.25098 0 0 0 0.05 0"
            }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
              in2: "BackgroundImageFix",
              result: "effect1_dropShadow_27019_35667"
            }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
              in: "SourceAlpha",
              result: "hardAlpha",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), reactJsxRuntimeCoreReexport.jsx("feOffset", {}), reactJsxRuntimeCoreReexport.jsx("feGaussianBlur", {
              stdDeviation: 2
            }), reactJsxRuntimeCoreReexport.jsx("feComposite", {
              in2: "hardAlpha",
              operator: "out"
            }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
              values: "0 0 0 0 0.184314 0 0 0 0 0.207843 0 0 0 0 0.25098 0 0 0 0.02 0"
            }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
              in2: "effect1_dropShadow_27019_35667",
              result: "effect2_dropShadow_27019_35667"
            }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
              in: "SourceGraphic",
              in2: "effect2_dropShadow_27019_35667",
              result: "shape"
            })]
          })]
        })]
      })
    }
  };
  let t0 = e => {
    let {
      onClosePanel: n
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let {
      PicEmptyNoDocSVG: i
    } = tQ[chatFgStoreHooks.getSourceValue(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage,
      defaultValue: false
    }) ? "dark" : "light"];
    let r = flowDocxEditorControllerModule.useFlowDocXEditorController();
    let {
      commentList: l
    } = docxFlowCommentStore.useDocxCommentStore(e => throttledPathFilterStringify.throttledPathStr(e, "commentList"));
    let {
      isOtherCommentDeletable: s
    } = flowPermissionHooks.usePermissions();
    let {
      commentReadonly: c
    } = flowPermissionHooks.useSettings();
    let d = userBriefStoreManager.useUserBriefStore(e => e.userBriefMap, deepEqualityUtil_1.isDeepEqual);
    let u = reactCoreLibraryReexport.useMemo(() => l.filter(e => e.status === contentCommentTypes.CommentStatus.solved && e.reply_list.length).sort((e, n) => e.reply_list[0].create_time - n.reply_list[0].create_time), [l]);
    let m = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (r != null) {
        r.reopenHistoryComment(e);
      }
      if (n != null) {
        n();
      }
    });
    let p = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (r != null) {
        r.deleteHistoryComment(e);
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: tq["history-comment-list-wrapper"],
      children: [u.length === 0 && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: tq["empty-tip"],
        children: [reactJsxRuntimeCoreReexport.jsx(i, {
          className: tq["empty-tip-icon"]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: tq["empty-tip-text"],
          children: o("doc_comment_history_empty")
        })]
      }), u.map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: tq["history-comment-item-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: tq["top-bar"],
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: tq["solved-tip"],
            children: o("doc_comment_history_card_solved")
          }), !c && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: tq["reopen-button"],
              onClick: () => m(e.id),
              children: o("doc_comment_history_card_reopen")
            }), s && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: tq.divider
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: tq["delete-button"],
                onClick: () => p(e.id),
                children: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {})
              })]
            })]
          })]
        }), reactJsxRuntimeCoreReexport.jsx(docCommentThread.DocCommentThread, {
          readonly: true,
          refText: e.ref_text || "",
          items: e.reply_list.map(e => {
            return {
              id: e.id,
              authorId: e.creator_id,
              avatar: d[e.creator_id]?.avatar_url,
              name: d[e.creator_id]?.nickname || "",
              time: e.create_time * 1000,
              content: tK(e.text),
              modified: e.is_modified
            };
          })
        })]
      }, e.id))]
    });
  };
  let t1 = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let {
      showHistoryCommentList: n
    } = docxFlowCommentStore.useDocxCommentStore(e => throttledPathFilterStringify.throttledPathStr(e, "showHistoryCommentList"));
    return reactJsxRuntimeCoreReexport.jsx(uiPositionWrappers.popoverWrapper, {
      trigger: "custom",
      position: "bottomRight",
      visible: n,
      content: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "panel-title-f15uPC",
          children: e("doc_comment_history")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: d("panel-content-px7gTl", "flow-scrollbar"),
          children: reactJsxRuntimeCoreReexport.jsx(t0, {
            onClosePanel: () => docxFlowCommentStore.setShowHistoryList(false)
          })
        })]
      }),
      onClickOutSide: () => docxFlowCommentStore.setShowHistoryList(false),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "container-gED_s7"
      })
    });
  };
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var componentLoginModalConst = require("component-login-modal-const") /*id: 848982*/;
  var debugTokenGenerator = require("debug-token-generator") /*id: 419751*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var feedbackModalComponent = require("feedback-modal-component") /*id: 640688*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  let ne = () => {
    let {
      feedbackModalVisible: n,
      setFeedbackModalVisible: o
    } = e2();
    let i = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId;
    let [r, l] = reactCoreLibraryReexport.useState("");
    let s = chatMessageStoreFactory.createMessageStore(e => {
      let a = i ? Object.values((e == null ? undefined : e.messageMap?.[i]) ?? {}) : [];
      return function (e) {
        let n = new Map();
        let o = [];
        for (let d = e.length - 1; d >= 0; d--) {
          let u = e[d];
          if (!n.has(u.ext?.inner_log_id ?? u.local_info?.log_id) && (n.set(u.ext?.inner_log_id ?? u.local_info?.log_id, u), o.push(u), o.length === 3)) {
            break;
          }
        }
        return o.reverse();
      }(throttledOrderByUtil.throttledOrderBy(a, e => Number(e.create_time))) ?? [];
    }, deepEqualityUtil_1.isDeepEqual);
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let d = {
      aid: uniParamsManager.uniParamsManager.getParam("aid"),
      appName: componentLoginModalConst.appId,
      appkey: componentLoginModalConst.platformId,
      channel: "DouBaoNewUserGuide",
      deviceId: uniParamsManager.uniParamsManager.getParam("device_id"),
      logger: loggerServiceCore.defaultLogger
    };
    let u = reactCoreLibraryReexport.useMemo(() => r.length > 300, [r]);
    let m = {
      placeholder: c("doc_feedback_window_placeholder"),
      value: r,
      onChange: l,
      className: "input-jsLFRg",
      rows: 6,
      maxCount: 300
    };
    let p = async () => {
      let e = flowPermissionHooks.getDocToken();
      let n = `\u{53CD}\u{9988}\u{6587}\u{6863}id: ${e}\u{FF0C}\u{53CD}\u{9988}\u{4F1A}\u{8BDD}id: ${i}`;
      tw(n);
      samanthaToastFactory.toastInstance.success(c("skill_copliotreading_copy_success"));
      try {
        await debugTokenGenerator.generateDebugTokens(s, debugTokenGenerator.DebugActionType.Submit);
      } catch (e) {}
    };
    let _ = async () => {
      let e = flowPermissionHooks.getDocToken();
      try {
        await debugTokenGenerator.generateDebugTokens(s, debugTokenGenerator.DebugActionType.Submit);
        await feedbackModalComponent.postFeedbackMessage({
          content: `[\u{8C46}\u{5305}\u{6587}\u{6863}]${r}`,
          extra_params: JSON.stringify({
            page_token: e,
            chat_id: i,
            log_ids: [...new Set(s.map(e => {
              return e.ext?.inner_log_id ?? e.local_info?.log_id;
            }))]
          })
        }, d);
        samanthaToastFactory.toastInstance.success({
          content: c("feedback_submit_success"),
          showClose: false
        });
        o(false);
      } catch (e) {
        samanthaToastFactory.toastInstance.error({
          content: c("feedback_submit_failed"),
          showClose: false
        });
        throw e;
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
      centered: true,
      className: "modal-P2Z9sJ",
      width: 440,
      title: c("doc_feedback_window_header"),
      visible: n,
      onCancel: () => {
        o(false);
      },
      footer: null,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "container-cRW0LH",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mt-4",
          children: c("doc_feedback_window_desc")
        }), reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
          ...m
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mt-10",
          children: c("doc_feedback_window_desc_copyInfo")
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "actions-F7hJTg",
          children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: "ml-10",
            type: "tertiary",
            onClick: p,
            children: c("doc_feedback_window_btn_copyInfo")
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            disabled: u,
            className: "ml-10",
            type: "primary",
            onClick: _,
            children: c("doc_feedback_window_btn_submit")
          })]
        })]
      })
    });
  };
  var nt = {
    container: "container-jos_1R",
    item: "item-_UZpmC",
    "more-icon-wrapper": "more-icon-wrapper-YQKhK_",
    moreIconWrapper: "more-icon-wrapper-YQKhK_",
    "icon-wrapper": "icon-wrapper-kr7U8p",
    iconWrapper: "icon-wrapper-kr7U8p",
    "more-icon-wrapper-active": "more-icon-wrapper-active-W2t_Pg",
    moreIconWrapperActive: "more-icon-wrapper-active-W2t_Pg",
    "more-icon": "more-icon-lraT38",
    moreIcon: "more-icon-lraT38",
    "popover-select-wrapper": "popover-select-wrapper-vxqdat",
    popoverSelectWrapper: "popover-select-wrapper-vxqdat"
  };
  let nn = e => {
    let {
      pageToken: n,
      className: o,
      style: i,
      disabled: r,
      renderSize: l,
      onClick: s,
      onItemClick: c,
      pageWidthModes: u
    } = e;
    let [m, p] = reactCoreLibraryReexport.useState(false);
    let _ = function (e) {
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
        isReportable: c
      } = flowPermissionHooks.usePermissions();
      let {
        disableWidthMode: d
      } = o ?? {};
      let u = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = reactReduxExports.useSelector(e => {
          var o;
          var i;
          return (i = e == null ? undefined : (o = e.docx) === null || o === undefined ? undefined : o.comment?.commentPanelShown) !== null && i !== undefined && i;
        });
        let o = docLauncherUtils.getDocLauncherOrThrow();
        let {
          run: i
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          let e = flowDocxEditorControllerModule.toggleCommentPanel();
          docCommentShownStateUtil.setDocCommentShown(e);
          if (o != null) {
            o.bizEvents.emit("behavior.toggle-comment", {
              visible: !n
            });
          }
        }, eY);
        return {
          label: e("doc_copilot_tooltip_comments"),
          icon: reactJsxRuntimeCoreReexport.jsx(documentIconComponent.DocumentIcon, {}),
          value: "comment",
          onClick: i
        };
      }();
      (function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = flowDocxEditorControllerModule.useFlowDocXEditorController();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
          if (n != null) {
            n.copyDoc({
              eraseRevision: true
            });
          }
        }, eY);
        e("doc_copy_full_text");
        noteOutlinedIcon.NoteOutlinedIcon;
      })();
      let m = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let {
          run: n
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          let n = flowPermissionHooks.getDocToken();
          let o = `https://${window.location.host}/doc/${n}`;
          tw(o);
          samanthaToastFactory.defaultToast.success({
            content: e("doc_editor_toolbar_copy_success"),
            showClose: false,
            theme: "light"
          });
          tc("copy_link");
          (function (e) {
            let {
              token: n
            } = e;
            teaAnalyticsEventTracker.trackEvent("doc_share_link_success_popup_show", {
              show_from: "ai_doc_detail_menu_copy_link",
              entrance_type: "canvas_top",
              canvas_type: "writing",
              current_page: "ai_doc_detail",
              page_token: n,
              artifact_type: artifactEnumConstants.ArtifactType.Page
            });
          })({
            token: n
          });
        }, eY);
        return {
          label: e("doc_copy_link"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {}),
          value: "copy_link",
          onClick: n,
          topDivider: !userAgentDeviceDetector.isMobile(),
          wrapper: e => reactJsxRuntimeCoreReexport.jsx("div", {
            "data-click-telemetry": "file_function_click",
            children: e
          })
        };
      }();
      let p = function () {
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
      let _ = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = flowDocxEditorControllerModule.useFlowDocXEditorController();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "create_docx",
            meta: {
              scene: threadContentTypes.ThreadTypes.Duplicate,
              url_path: location.pathname
            }
          });
          let o = flowPermissionHooks.getDocToken();
          tc("create_copy");
          let {
            title: i = ""
          } = (await (n == null ? undefined : n.getPageMeta())) || {};
          if (i.trim() === "") {
            i = e("doc_title_unnamed");
          }
          try {
            let {
              token: e
            } = await documentUpgradeAndCreationUtils.duplicateDocument({
              pageToken: o,
              title: i,
              parentNodeId: undefined
            });
            aiDocCreateTracking.trackDocCreate({
              clickFrom: aiDocCreateTracking.createEntryPoints.CopyDoc,
              createWay: aiDocCreateTracking.docCreateModes.CopyDoc,
              fromPageToken: o,
              pageToken: e
            });
            td({
              buttonName: "create_copy",
              success: "1"
            });
            let n = `https://${window.location.host}/doc/${e}`;
            secureLinkOpener.openSecureLink(n);
          } catch (e) {
            if (apiErrorChecker.isApiError(e) && [chatErrorCodes.chatErrorCodes.UPGRADED_FUSION_DOC, chatErrorCodes.chatErrorCodes.UPGRADING_FUSION_DOC].includes(Number(e == null ? undefined : e.errorOption?.code))) {
              dbxSonnerToasterWrapper.dbxToastAPI.info(reactJsxRuntimeCoreReexport.jsx(driveDocsUpgradeToast.DocsUpgradeToast, {}), {
                duration: 3000
              });
            }
          }
        }, eY);
        return {
          label: e("doc_create_duplicate"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlAddDocumentIcon.RtlAddDocumentIcon, {}),
          value: "create_copy",
          onClick: o,
          wrapper: e => reactJsxRuntimeCoreReexport.jsx("div", {
            "data-click-telemetry": "file_function_click",
            children: e
          })
        };
      }();
      let v = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let {
          run: n
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          tc("delete");
          modalConfirmDialogManager.ModalConfirmDialog.error({
            title: e("doc_delete_confirm"),
            content: e("doc_delete_tips"),
            okText: e("general_btn_delete"),
            cancelText: e("general_btn_cancel"),
            onOk: async () => {
              await flowDocumentManagementService.deleteDocumentNodes([flowPermissionHooks.getDocToken()]);
              let e = routePathUtils.isCurrentChatPath();
              td({
                buttonName: "delete",
                success: "1"
              });
              if (e) {
                window.location.reload();
              } else {
                documentNavigationAndCreationUtils.navigateToChat();
              }
            },
            onCancel: () => {
              td({
                buttonName: "delete",
                success: "0",
                errorCode: "cancel"
              });
            }
          });
        }, eY);
        return {
          label: e("general_btn_delete"),
          icon: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {}),
          value: "delete",
          topDivider: !userAgentDeviceDetector.isMobile(),
          onClick: n,
          wrapper: e => reactJsxRuntimeCoreReexport.jsx("div", {
            "data-click-telemetry": "file_function_click",
            children: e
          })
        };
      }();
      let f = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = flowDocxEditorControllerModule.useFlowDocXEditorController();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          if (n != null) {
            n.toggleFindReplaceBox(true);
          }
        }, eY);
        let {
          isEditable: i
        } = flowPermissionHooks.usePermissions();
        return {
          label: e(i ? "doc_base_search_and_replace" : "doc_base_search"),
          icon: reactJsxRuntimeCoreReexport.jsx(bellNotificationRtlIcon.BellNotificationIcon, {}),
          value: "search_and_replace",
          onClick: o
        };
      }();
      let w = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = flowDocxEditorControllerModule.useFlowDocXEditorController();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          if (n != null) {
            n.toggleHelpPanel(true);
          }
        }, eY);
        return {
          label: e("doc_base_keyboard_list"),
          icon: reactJsxRuntimeCoreReexport.jsx(exportRtlIcon_1.ExportRtlIcon, {}),
          value: "shortcut",
          onClick: o
        };
      }();
      let x = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = flowDocxEditorControllerModule.useFlowDocXEditorController();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          if (n != null) {
            n.toggleHistoryBox(true);
          }
        }, eY);
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
        let n = flowDocxEditorControllerModule.useFlowDocXEditorController();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          if (n != null) {
            n.toggleHistoryCommentBox(true);
          }
        }, eY);
        return {
          label: e("doc_comment_history"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlDocumentChartIcon_1_1.DocumentChartIcon, {}),
          value: "history_comment",
          onClick: o
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
          rightIcon: reactJsxRuntimeCoreReexport.jsx(e6, {}),
          value: "page_width",
          wrapper: e => reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
            content: reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.DocWidthModeSelector, {
              disableFullWidth: o
            }),
            position: "leftTop",
            spacing: 6,
            getPopupContainer: () => document.getElementById(e9) || document.body,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              id: e9,
              className: "relative",
              children: e
            })
          }),
          onClick: () => false
        };
      }(o);
      let S = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let n = flowDocxEditorControllerModule.useFlowDocXEditorController();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          if (n != null) {
            n.togglePrintBox(true);
          }
        }, eY);
        return {
          label: e("doc_base_print"),
          icon: reactJsxRuntimeCoreReexport.jsx(briefcaseRtlIcon.BriefcaseRtlIcon, {}),
          value: "print",
          onClick: o
        };
      }();
      let R = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let {
          setReportModalVisible: n
        } = e2();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          n(true);
        }, eY);
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
        let n = docLauncherUtils.getDocLauncherOrThrow();
        let {
          docId: o
        } = n;
        e("doc_editor_toolbar_download");
        rtlExpandArrowsIcon.ExpandArrowsIcon;
        () => false;
      })();
      let E = function () {
        let e = i18nTranslationUtils.useTranslationWithFallback();
        let {
          setFeedbackModalVisible: n
        } = e2();
        let {
          run: o
        } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
          n(true);
        }, eY);
        return {
          label: e("doc_menuOption_feedback"),
          icon: reactJsxRuntimeCoreReexport.jsx(businessInputToolIcon_1.BusinessInputIcon, {}),
          value: "feedback",
          onClick: o
        };
      }();
      let C = function () {
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
          let e = [m];
          if (c) {
            e.push(R);
          }
          if (l) {
            e.push(v);
          }
          return e;
        }
        let e = [n !== layoutSizeConstants.LayoutSizes.Medium ? u : undefined, d ? undefined : k, f, C || undefined, m, undefined, undefined, i ? _ : undefined, r ? S : undefined, s ? x : undefined, a ? y : undefined, w, E, p || undefined, c ? R : undefined, l ? v : undefined];
        return genericFilterUtil.genericFilter(e, e => !isNullishCheck.isNil(e));
      });
    }({
      renderSize: l,
      pageWidthModes: u
    });
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      contentProps: {
        "data-testid": "doc_more_menu_popover"
      },
      className: nt["popover-select-wrapper"],
      contentClassName: d(nt.container, o),
      itemClassName: nt.item,
      style: i,
      defaultValue: "",
      selectable: false,
      scrollable: false,
      visible: m,
      onVisibleChange: p,
      position: "bottomRight",
      newIcon: true,
      iconSize: "middler",
      spacing: 8,
      options: _,
      onItemClick: c,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: d(nt["more-icon-wrapper"], {
          [nt["more-icon-wrapper-active"]]: m
        }),
        children: [reactJsxRuntimeCoreReexport.jsxs(topBarActionItem.TopBarActionItem, {
          "data-testid": "doc_more_menu_button",
          newIcon: true,
          disabled: r,
          className: nt["icon-wrapper"],
          onClick: () => {
            if (!m) {
              teaAnalyticsEventTracker.trackEvent("file_function_show", {
                show_from: "hover_more",
                folder_type: "writing"
              });
            }
            p(!m);
            if (s != null) {
              s();
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {
            className: nt["more-icon"]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: nt["comment-history-trigger"]
          })]
        }), reactJsxRuntimeCoreReexport.jsx(t1, {})]
      })
    });
  };
  let no = e => reactJsxRuntimeCoreReexport.jsxs(e1, {
    children: [reactJsxRuntimeCoreReexport.jsx(nn, {
      ...e
    }), reactJsxRuntimeCoreReexport.jsx(tF, {}), reactJsxRuntimeCoreReexport.jsx(ne, {})]
  });
  function ni(e) {
    let {
      docId: n,
      disabled: o
    } = e;
    let i = docLauncherUtils.getDocLauncherOrThrow();
    let [r, l] = reactCoreLibraryReexport.useState({
      disableWidthMode: false,
      disableFullWidth: false
    });
    let s = reactCoreLibraryReexport.useCallback(e => {
      l(n => ({
        ...n,
        disableWidthMode: e
      }));
    }, []);
    let c = reactCoreLibraryReexport.useCallback(e => {
      l(n => ({
        ...n,
        disableFullWidth: e
      }));
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      i.bizEvents.on("behavior.disable-width-mode", s);
      i.bizEvents.on("behavior.disable-full-width", c);
      return () => {
        i.bizEvents.off("behavior.disable-width-mode", s);
        i.bizEvents.off("behavior.disable-full-width", c);
      };
    }, [s, c]);
    return {
      type: "custom",
      element: reactJsxRuntimeCoreReexport.jsx(no, {
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
  }
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  let ns = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        LogoTitle: e
      } = await require.e("write-doc-home_logo-title") /*id: 89190*/.then(require.bind(require, "logo-title-component") /*id: 234291*/);
      return {
        default: e
      };
    }
  })));
  var revisionPanelCloseButtonHandler = require("revision-panel-close-button-handler") /*id: 126233*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  (r = {})[r.AUTHORIZED = 1] = "AUTHORIZED";
  r[r.EXPIRED = 2] = "EXPIRED";
  r[r.UNAUTHORIZED = 3] = "UNAUTHORIZED";
  let nu = r;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let np = "lark_auth_callback";
  async function n_() {
    let e = `${window.location.origin}/doc-playground/lark-auth`;
    let {
      auth_url: n
    } = await nf({
      redirect_uri: e
    });
    if (!n) {
      throw Error("no lark auth url");
    }
    return new Promise((o, i) => {
      window.open(xssContentSanitizer.sanitizeUrl(n, null, {
        logType: "js.window.location",
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3e$JuZ*hXRTEyWWtkR2$XRj$N$3RpTWsxM$pFaE9hR050WkR*amR6MDk"
      }));
      let r = async n => {
        if (n.key === np && n.newValue) {
          try {
            let a = JSON.parse(n.newValue);
            let {
              code: l,
              state: s
            } = a || {};
            window.removeEventListener("storage", r);
            storageWrapperWithFallback.LocalStorageWrapper.removeItem(np);
            if (s && l) {
              await ng({
                code: l,
                state: s,
                redirect_uri: e
              });
            }
            if (s && l) {
              o(a);
            } else {
              i(a);
            }
          } catch (e) {
            i(e);
          }
        }
      };
      window.addEventListener("storage", r);
    });
  }
  async function nh() {
    try {
      let e = await apiServicesCollection.WritingFacadeApiService.AGWCheckAuthStatus({});
      if (e.code === 0 && e.data) {
        return e.data;
      }
      throw Error(`[resp_error]: ${JSON.stringify(e)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "check_auth_status",
        error: e
      });
      throw e;
    }
  }
  async function nv() {
    return nh().then(e => {
      if ((e == null ? undefined : e.auth_status) !== nu.AUTHORIZED) {
        return n_();
      }
    }).catch(async e => {
      if (apiErrorChecker.isApiError(e)) {
        var o;
        if ((e == null ? undefined : (o = e.errorOption) === null || o === undefined ? undefined : o.response?.code) === 710010101) {
          return n_();
        }
      }
      throw e;
    });
  }
  async function nf(e) {
    try {
      let n = await apiServicesCollection.WritingFacadeApiService.AGWGenAuthUrl(e);
      if (n.code === 0 && n.data) {
        return n.data;
      }
      throw Error(`[resp_error]: ${JSON.stringify(n)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "lark_gen_auth_url",
        error: e
      });
      throw e;
    }
  }
  async function ng(e) {
    try {
      await apiServicesCollection.WritingFacadeApiService.AGWAuthCallback(e);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "lark_auth_callback",
        error: e
      });
      throw e;
    }
  }
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var nx = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#336DF4",
      d: "M2.238 2.5a1 1 0 0 1 1-1h12.864a5.24 5.24 0 0 1 3.631 1.447 4.85 4.85 0 0 1 1.505 3.494V21.5a1 1 0 0 1-1 1H7.373a5.24 5.24 0 0 1-3.631-1.447 4.85 4.85 0 0 1-1.504-3.494z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M6.738 8.7a.7.7 0 0 1 .7-.7h8.6a.7.7 0 1 1 0 1.4h-8.6a.7.7 0 0 1-.7-.7M6.738 12.1a.7.7 0 0 1 .7-.7h8.6a.7.7 0 1 1 0 1.4h-8.6a.7.7 0 0 1-.7-.7M6.738 15.5a.7.7 0 0 1 .7-.7h4.6a.7.7 0 1 1 0 1.4h-4.6a.7.7 0 0 1-.7-.7"
    })]
  }), {}));
  var ny = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M14.172 1.5a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 21 8.328V12.5h-2V8.328h-3.5a1.5 1.5 0 0 1-1.5-1.5V3.5H5v17h6.5v2H5a2 2 0 0 1-2-2v-17a2 2 0 0 1 2-2z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M17.545 14.543a1 1 0 0 1 1.414 0l2.748 2.748a1 1 0 0 1 0 1.414l-2.75 2.75a1 1 0 1 1-1.414-1.414l1.043-1.043H13.5a1 1 0 1 1 0-2h5.086l-1.041-1.041a1 1 0 0 1 0-1.414"
    })]
  }), {}));
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  let nS = e => {
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
        key: "lark-export",
        element: reactJsxRuntimeCoreReexport.jsx(nR, {
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
  let nR = e => {
    let {
      disabled: n,
      renderSize: o
    } = e;
    let i = docLauncherUtils.getDocLauncherOrThrow();
    let r = async () => {
      let e = null;
      try {
        var n;
        await nv();
        e = samanthaToastFactory.toastInstance.info({
          icon: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
            size: "small"
          }),
          content: "正在导出文档",
          duration: 0
        });
        let r = i == null ? undefined : (n = i.blockManager) === null || n === undefined ? undefined : n.editorAPI.getService(collabTriggersProvider.collabProvider, {
          optional: true
        });
        let a = r == null ? undefined : r.getSyncVersion();
        if (isNullishCheck.isNil(a)) {
          throw Error("export to lark no version");
        }
        let l = await apiServicesCollection.WritingFacadeApiService.AGWDownloadAsDocx({
          page_token: i.docId,
          version: Number(a)
        });
        let {
          url: s
        } = (l == null ? undefined : l.data) ?? {};
        if (s) {
          if (e) {
            samanthaToastFactory.toastInstance.close(e);
          }
          window.open(xssContentSanitizer.sanitizeUrl(s, null, {
            logType: "js.window.location",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-Wlpi$$o2$2xNe*EySXl%alJN$0$Kb1ltM$djMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wlpi$$o2$2xNe*EySXl%alJN$jJoc1dWZFNiR05wT1dwa%1qRjNZakkx-kdKd$$ucE1NbmhvWTIxemR*cFlhS*RpTTBvd1RESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
          }));
        } else {
          throw Error("export to lark no url");
        }
      } catch (n) {
        if (e) {
          samanthaToastFactory.toastInstance.close(e);
        }
        samanthaToastFactory.toastInstance.error("导出失败");
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "export_to_lark_error",
          error: n
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(docExportPopover.DocXExportPopover, {
      pageToken: i.docId,
      reportParams: {
        show_from: "ai_doc_detail_upper_right",
        folder_type: "writing"
      },
      trigger: "click",
      position: "bottom",
      onBeforeExport: e => {
        i.bizEvents.emit("behavior.download", {
          type: e
        });
      },
      spacing: 8,
      options: e => [{
        label: "飞书文档",
        icon: reactJsxRuntimeCoreReexport.jsx(nx, {}),
        value: "lark",
        onClick: () => r()
      }, ...e],
      divider: true,
      children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        "data-testid": "container_inner_download_btn",
        disabled: n,
        size: "larger-icon",
        newIcon: true,
        title: o === layoutSizeConstants.LayoutSizes.Medium ? "导出" : undefined,
        children: reactJsxRuntimeCoreReexport.jsx(ny, {})
      })
    });
  };
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  var flowSyncCollabReexports = require("flow-sync-collab-reexports") /*id: 14778*/;
  var docMetaSelectors = require("doc-meta-selectors") /*id: 359612*/;
  var dateFormatHelper = require("date-format-helper") /*id: 701397*/;
  var nN = {
    Init: "Init",
    Saving: "Saving",
    Saved: "Saved",
    Offline: "Offline"
  };
  let nM = e => {
    let {
      status: n,
      editTime: o
    } = e;
    let i = n === nN.Init;
    let r = n === nN.Offline;
    let l = n === nN.Saving;
    return reactCoreLibraryReexport.useMemo(() => i ? o ? t("doc_modification_time", {
      date: dateFormatHelper.formatRelativeDate(o)
    }) : "" : r ? t("doc_offline") : l ? t("doc_being_saved") : t("doc_saved"), [i, r, l, o]);
  };
  let nT = () => {
    let e = flowDocxEditorControllerModule.useFlowDocXEditorController();
    let [n, o] = reactCoreLibraryReexport.useState(nN.Init);
    let [i, r] = reactCoreLibraryReexport.useState();
    let {
      run: l
    } = asyncSkillReceiveHook.useSkillReceive(e => {
      o(e);
    }, {
      wait: 700,
      leading: true
    });
    let s = reactReduxExports.useSelector(docMetaSelectors.selectEditTime);
    let c = s ? new Date(s).getTime() : undefined;
    reactCoreLibraryReexport.useEffect(() => {
      if (!e) {
        return;
      }
      let n = e => {
        let {
          type: n
        } = e;
        switch (n) {
          case flowSyncCollabReexports.SyncState.ACCEPT_COMMIT:
            l(nN.Saved);
            break;
          case flowSyncCollabReexports.SyncState.USER_CHANGES:
            l(nN.Saving);
            break;
          case flowSyncCollabReexports.SyncState.NEW_CHANGES:
            l(nN.Init);
            r(Date.now());
            break;
          case "CLEAR":
            l(nN.Init);
            break;
          case "OFFLINE":
            l(nN.Offline);
        }
      };
      e.eventEmitter.on("syncNoteMeta", n);
      return () => {
        e.eventEmitter.off("syncNoteMeta", n);
      };
    }, [e]);
    return {
      status: n,
      editTime: i || c
    };
  };
  var chatRtlIconComponent = require("chat-rtl-icon-component") /*id: 497004*/;
  var skillSendMessageIcon = require("skill-send-message-icon") /*id: 197921*/;
  var nD = {
    container: "container-Qd_OPe",
    disable: "disable-y_sLhm",
    text: "text-S57p_P"
  };
  function nZ(e) {
    let {
      status: n,
      editTime: o,
      onClick: i,
      hideText: r,
      disabled: a = false
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let s = n === nN.Offline;
    let c = n === nN.Saving;
    let u = s || c || a;
    let m = nM({
      status: n,
      editTime: o
    });
    return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      content: l("doc_view_history_version"),
      position: "bottom",
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: d(nD.container, {
          [nD.disable]: u
        }),
        onClick: () => {
          if (!u) {
            if (i != null) {
              i();
            }
          }
        },
        children: [{
          [nN.Init]: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
          [nN.Saving]: reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent.ChatRtlIcon, {}),
          [nN.Saved]: reactJsxRuntimeCoreReexport.jsx(skillSendMessageIcon.SendMsgActionIcon, {})
        }[n], r ? null : reactJsxRuntimeCoreReexport.jsx("span", {
          className: nD.text,
          children: m
        })]
      })
    });
  }
  let nF = e => {
    let {
      status: n,
      editTime: o,
      onClick: i,
      renderSize: r,
      isHideText: a
    } = e;
    let l = flowDocxEditorControllerModule.useFlowDocXEditorController();
    let {
      isEditable: s
    } = flowPermissionHooks.usePermissions();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "editor-time-wrapper-tbN69Q",
      "data-testid": "doc_edit_time_button",
      children: reactJsxRuntimeCoreReexport.jsx(nZ, {
        status: n,
        editTime: o,
        disabled: !s,
        hideText: r !== layoutSizeConstants.LayoutSizes.Medium || a,
        onClick: () => {
          if ([nN.Init, nN.Saved].includes(n)) {
            if (l != null) {
              l.toggleHistoryBox(true);
            }
          }
          if (i != null) {
            i();
          }
        }
      })
    });
  };
  let nP = e => {
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      i18nConfig: o
    } = e ?? {};
    let {
      preRole: i,
      role: r
    } = flowPermissionHooks.useRoleStatus();
    let {
      isEditable: l
    } = flowPermissionHooks.usePermissions();
    let s = () => {
      if (!i || collectionIncludesUtil.includes([i, r], permissionRoleTypes.UserRoles.None)) {
        return;
      }
      let e = [permissionRoleTypes.UserRoles.Editor, permissionRoleTypes.UserRoles.Manager, permissionRoleTypes.UserRoles.Owner];
      let a = collectionIncludesUtil.includes(e, i);
      let s = collectionIncludesUtil.includes(e, r);
      if (a && !s && !l) {
        samanthaToastFactory.defaultToast.info((o == null ? undefined : o.toReader) || n("doc_share_permission_change_readable"));
        return;
      }
      if (!a && s && l) {
        samanthaToastFactory.defaultToast.info((o == null ? undefined : o.toWriter) || n("doc_share_permission_change_editable"));
        return;
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      s();
    }, [r]);
  };
  var nA = {
    "docx-title": "docx-title-XrFv9Y",
    docxTitle: "docx-title-XrFv9Y"
  };
  let nz = e => {
    let {
      className: n,
      title: o
    } = e;
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: o,
        position: "bottom",
        className: d(nA.container),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          "data-testid": "doc_header_title",
          className: d(nA["docx-title"], n),
          children: o
        })
      });
    } else {
      return null;
    }
  };
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  let nB = e => {
    let {
      disabled: n
    } = e;
    return {
      type: "custom",
      element: reactJsxRuntimeCoreReexport.jsx(nL, {
        disabled: n
      })
    };
  };
  let nL = e => {
    let {
      disabled: n,
      renderSize: o
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let r = writeConfigManager.WriteConfigManager.useNeedRevisionGuidance();
    let a = docxFlowCommentStore.useDocxCommentStore(e => {
      let {
        revisionList: n
      } = e;
      return !isEmptyUtil.isEmpty(n);
    }) && r;
    let l = reactReduxExports.useSelector(e => {
      var o;
      var i;
      return (i = e == null ? undefined : (o = e.docx) === null || o === undefined ? undefined : o.comment?.commentPanelShown) !== null && i !== undefined && i;
    });
    let s = docLauncherUtils.getDocLauncherOrThrow();
    if (o !== layoutSizeConstants.LayoutSizes.Medium) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        "data-testid": "doc_comment_button",
        className: d("comment-crYNV4", {
          "active-sRAImc": l
        }),
        disabled: n,
        size: "larger-icon",
        newIcon: true,
        onClick: () => {
          let e = docxFlowCommentStore.toggleCommentPanel();
          docCommentShownStateUtil.setDocCommentShown(e);
          s.bizEvents.emit("behavior.toggle-comment", {
            visible: !l
          });
        },
        tooltip: i(a ? "doc_canvas_comments_tooltip" : "doc_copilot_tooltip_comments"),
        children: a ? reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}) : reactJsxRuntimeCoreReexport.jsx(documentIconComponent.DocumentIcon, {})
      });
    }
  };
  let nU = e => {
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
        element: reactJsxRuntimeCoreReexport.jsx(nH, {
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
  let nH = e => {
    let {
      disabled: n,
      renderSize: o
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let r = docLauncherUtils.getDocLauncherOrThrow();
    return reactJsxRuntimeCoreReexport.jsx(docExportPopover.DocXExportPopover, {
      pageToken: r.docId,
      reportParams: {
        show_from: "ai_doc_detail_upper_right",
        folder_type: "writing"
      },
      trigger: "click",
      position: "bottom",
      onBeforeExport: e => {
        r.bizEvents.emit("behavior.download", {
          type: e
        });
      },
      spacing: 8,
      children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        "data-testid": "container_inner_download_btn",
        disabled: n,
        size: "larger-icon",
        newIcon: true,
        title: o === layoutSizeConstants.LayoutSizes.Medium ? i("doc_editor_toolbar_download") : undefined,
        children: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {})
      })
    });
  };
  let nJ = e => {
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
        element: reactJsxRuntimeCoreReexport.jsx(nV, {
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
  let nV = e => {
    let {
      disabled: n,
      renderSize: o
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let r = docLauncherUtils.getDocLauncherOrThrow();
    return reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
      "data-testid": "container_inner_copy_btn",
      "data-click-telemetry": "copy",
      disabled: n,
      size: "larger-icon",
      newIcon: true,
      onClick: () => {
        if (r != null) {
          r.bizEvents.emit("behavior.click-copy", {
            from: docFlowTypes.canvasElementId.CanvasFunction,
            isCopyAll: true
          });
        }
        if (r != null) {
          r.copyDoc({
            eraseRevision: true
          });
        }
      },
      title: o === layoutSizeConstants.LayoutSizes.Medium ? i("message_long_press_copy") : undefined,
      children: reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {})
    });
  };
  var exitRtlIconComponent = require("exit-rtl-icon-component") /*id: 4976*/;
  var diProviderUndoManager = require("di-provider-undo-manager") /*id: 142010*/;
  let nK = e => {
    let {
      className: n,
      controller: o
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let [r, l] = reactCoreLibraryReexport.useState(false);
    let [s, c] = reactCoreLibraryReexport.useState(false);
    let u = () => {
      var e;
      let n = (e = o.blockManager) === null || e === undefined ? undefined : e.editorAPI.getService(diProviderUndoManager.undoManagerProvider);
      l(!!(n == null ? undefined : n.canUndo));
      c(!!(n == null ? undefined : n.canRedo));
    };
    reactCoreLibraryReexport.useEffect(() => {
      u();
      if (o != null) {
        o.bizEvents.on("io.new-changes", u);
      }
      return () => {
        if (o != null) {
          o.bizEvents.off("io.new-changes", u);
        }
      };
    }, []);
    return {
      key: "undo-redo",
      zone: layoutPositionOrders.LayoutPositions.RightForth,
      modifier: [{
        type: "custom",
        element: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: d("container-XMdOZU", n),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "left-Vtry1s",
            children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              "data-testid": "doc_header_undo_button",
              size: "larger-icon",
              tooltip: i("doc_canvas_tooltip_undo"),
              newIcon: true,
              disabled: !r,
              onClick: () => {
                var e;
                let n = (e = o.blockManager) === null || e === undefined ? undefined : e.editorAPI.getService(diProviderUndoManager.undoManagerProvider);
                if (n == null ? undefined : n.canUndo) {
                  if (n != null) {
                    n.checkAndUndo();
                  }
                }
                if (o != null) {
                  o.bizEvents.emit("behavior.click-undo-redo", {
                    key: "back_button"
                  });
                }
                u();
              },
              children: reactJsxRuntimeCoreReexport.jsx(returnOutlinedIcon.ReturnOutlinedIcon, {})
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "right-_6NuqP",
            children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              "data-testid": "doc_header_redo_button",
              size: "larger-icon",
              tooltip: i("doc_canvas_tooltip_redo"),
              newIcon: true,
              disabled: !s,
              onClick: () => {
                var e;
                let n = (e = o.blockManager) === null || e === undefined ? undefined : e.editorAPI.getService(diProviderUndoManager.undoManagerProvider);
                if (n == null ? undefined : n.canRedo) {
                  if (n != null) {
                    n.checkAndRedo();
                  }
                }
                if (o != null) {
                  o.bizEvents.emit("behavior.click-undo-redo", {
                    key: "forward_button"
                  });
                }
                u();
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
  let n0 = (() => {
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
  let n1 = e => {
    let [n, o] = reactCoreLibraryReexport.useState(false);
    let i = reactCoreLibraryReexport.useRef(null);
    let r = reactCoreLibraryReexport.useCallback(n => {
      i.current = n;
      if (n) {
        n0.textContent = e;
        let i = n.offsetWidth;
        o(n0.offsetWidth > i);
      }
    }, [e]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!i.current) {
        return;
      }
      n0.textContent = e;
      let n = i.current.offsetWidth;
      o(n0.offsetWidth > n);
    }, [e]);
    return {
      ref: r,
      isOverflow: n
    };
  };
  var n2 = {
    container: "container-ZMU5Ts",
    item: "item-e_T861",
    image: "image-Ao1xNl",
    text: "text-Sddq0b",
    badge: "badge-CWtsBW",
    "break-word": "break-word-mrUAWI",
    "member-popover": "member-popover-n1Ye2M",
    scrollbar: "scrollbar-jepUnO",
    box: "box-aixv5N",
    collaborator: "collaborator-Y8Z74B",
    content: "content-OQhWYq",
    wrapper: "wrapper-CqYNpb",
    avatar: "avatar-MI2d6q",
    name: "name-X6Rq_l"
  };
  let n5 = (e, n) => (n === layoutSizeConstants.LayoutSizes.Medium ? Math.min(4, e) : n === layoutSizeConstants.LayoutSizes.Small ? Math.min(3, e) : Math.min(2, e)) * 34 - 6;
  let n4 = e => {
    let {
      item: n
    } = e;
    let {
      ref: o,
      isOverflow: i
    } = n1(n.name);
    return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      style: {
        display: i ? "inline-block" : "none"
      },
      content: n.name,
      position: "right",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: n2.collaborator,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: n2.content,
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: n2.wrapper,
            children: [reactJsxRuntimeCoreReexport.jsx(avatarComponent.AvatarComponent, {
              className: n2.avatar,
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-Wlpi$$o2$2xNe*EySXl%alJN$0$Kb1ltM$djMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wlpi$$o2$2xNe*EySXl%alJN$jJoc1dWZFNiR05wT1dwa%1qRjNZakkx-kdKd$$ucE1NakZzWWxkS2JHTnBNWE5o$0%0d1RESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: n2.badge,
              style: {
                backgroundColor: n.color
              }
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: n2.name,
            ref: o,
            children: n.name
          })]
        })
      }, n.id)
    }, n.id);
  };
  let n3 = e => {
    let {
      items: n,
      renderSize: o
    } = e;
    let i = genericFilterUtil.genericFilter(n, e => !!e.avatar);
    let r = functionInvoker.invoke(() => o === layoutSizeConstants.LayoutSizes.Medium ? 3 : o === layoutSizeConstants.LayoutSizes.Small ? 2 : 1);
    let a = (e, n) => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "doc_header_member_image_error",
        meta: {
          id: e,
          avatar: n
        }
      });
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: n2.container,
      children: [i.slice(0, r).map(e => {
        let {
          id: n,
          avatar: o,
          name: i,
          color: r
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          className: n2["break-word"],
          content: i,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: n2.item,
            children: [reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
              className: n2.image,
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-Wlpi$$o2$2xNe*EySXl%alJN$0$Kb1ltM$djMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wlpi$$o2$2xNe*EySXl%alJN$jJoc1dWZFNiR05wT1dwa%1qRjNZakkx-kdKd$$ucE1NakZzWWxkS2JHTnBNWE5o$0%0d1RESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
              }),
              onError: () => {
                a(n, o);
              },
              fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNFMUYwRkYiLz4KPHBhdGggZD0iTTIwLjk5OTggMzguMDAwM0MyMC45OTk4IDMzLjU5MjEgMjUuNDA4MSAzMC40MTg2IDI5LjgxNjMgMzAuNDE4NkMzNC4yMjQ2IDMwLjQxODYgMzguNjMyOCAzMy41OTIxIDM4LjYzMjggMzguMDAwM0MzOC42MzI4IDQxLjI0NjQgMzUuMDkxMyA0MC45OTU1IDI5LjgxNjMgNDAuOTk1NUMyNC41NDEzIDQwLjk5NTUgMjAuOTk5OCA0MS4yNDY0IDIwLjk5OTggMzguMDAwM1oiIGZpbGw9IiM5OUFFQ0MiLz4KPGVsbGlwc2UgY3g9IjI5LjgxNjIiIGN5PSIyNC4xMzI3IiByeD0iMy44NTcyMiIgcnk9IjQuMTMyNzQiIGZpbGw9IiM5OUFFQ0MiLz4KPC9zdmc+Cg=="
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: n2.badge,
              style: {
                backgroundColor: r
              }
            })]
          })
        }, n);
      }), i.length > r && reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
        trigger: "click",
        position: "bottomLeft",
        className: n2["member-popover"],
        content: reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
          showScrollbar: true,
          scrollableClassName: n2.scrollbar,
          className: n2.box,
          children: i == null ? undefined : i.map(e => reactJsxRuntimeCoreReexport.jsx(n4, {
            item: e
          }, e.id))
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: n2.item,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: n2.text,
            children: reactJsxRuntimeCoreReexport.jsxs("span", {
              children: ["+", i.length - r]
            })
          })
        })
      })]
    });
  };
  var n6 = {
    "login-action": "login-action-nh43yV",
    "left-width-patch": "left-width-patch-yqeEHu",
    "docx-title": "docx-title-rCu6yA"
  };
  let n9 = e => {
    let {
      className: n,
      style: o,
      docId: i,
      docReady: r,
      actionPlugins: l = [],
      strategies: s = chatActionLayoutConfig.chatActionLayoutConfig
    } = e;
    let c = docLauncherUtils.getDocLauncherOrThrow();
    let {
      isMightStreaming: d
    } = docStreamingStatus.useStreamingStatus(c);
    let u = reactReduxExports.useSelector(docxCommentUiSelectors.isCommentPanelShown);
    let p = messageDocContextUtil.isDocMessageContext({
      docId: i
    });
    let _ = ni({
      docId: i,
      disabled: d
    });
    let h = function (e) {
      let {
        docId: n,
        streaming: o,
        loginActionClassName: i
      } = e;
      let r = userInfoStatusSelectors.selectUserInfoSuccess_1();
      let a = revisionPanelCloseButtonHandler.getCloseButtonConfig({
        docId: n
      });
      let l = eU();
      let s = {
        key: "logo",
        zone: layoutPositionOrders.LayoutPositions.LeftFirst,
        modifier: [{
          type: "custom",
          element: reactJsxRuntimeCoreReexport.jsx(ns, {
            onClick: () => {
              if (userAgentDeviceDetector.isMobile()) {
                location.href = xssContentSanitizer.sanitizeUrl(`${doubaoConfigConstants_1.trackingUrl}?scheme=${doubaoConfigConstants_1.productNameLower}%3A%2F%2Fflow%2Fchat`, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$c5a%1qbHlZM2s1-jFwWFJtd*FXRWww$1ZkT01HRlhPWFZqZ$RreFl6SlZkRnBIT1dwT$-zaDJXakk0ZEdSS*JEQmlSM$-w$1ZkT01HRlhPWFZN-mxKNlp$ZEdl$m96$m5vPQ"
                });
              }
            },
            showTooltip: false
          })
        }],
        getWidth: () => 120
      };
      let c = function (e) {
        let {
          onAfterLogin: n,
          className: o = "",
          source: i = trackingEventConstants.trackingEvents.DOC_OPEN_PAGE
        } = e;
        let r = i18nTranslationUtils.useTranslationWithFallback();
        let {
          openLoginModal: a
        } = chatLoginModalManager.loginModalManager();
        let l = () => new Promise(e => {
          a({
            trackInfo: {
              source: i
            },
            onSuccess: () => {
              e();
              return !n;
            }
          });
        });
        return {
          key: "Login",
          zone: layoutPositionOrders.LayoutPositions.RightFirst,
          modifier: [{
            type: "custom",
            element: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              type: "secondary",
              className: o,
              onClick: () => {
                l().then(() => {
                  if (n != null) {
                    n();
                  }
                });
              },
              children: r("login_button")
            })
          }],
          getWidth: () => 73
        };
      }({
        className: i,
        onAfterLogin: () => {
          window.location.reload();
        }
      });
      let d = ni({
        docId: n,
        disabled: o
      });
      return functionInvoker.invoke(() => {
        let e = [];
        let n = routePathUtils.isChatPath(location.pathname);
        if (r) {
          if (n) {
            e.push({
              key: "close",
              zone: layoutPositionOrders.LayoutPositions.RightFirst,
              modifier: [a],
              getWidth: () => layoutSizeConstants.layoutMaxSize
            });
          } else {
            e.push(s, {
              key: "user",
              zone: layoutPositionOrders.LayoutPositions.RightFirst,
              modifier: [{
                type: "custom",
                element: reactJsxRuntimeCoreReexport.jsx(avatarPopoverMenuComponent.AvatarPopoverMenu, {
                  avatarOnly: true
                })
              }],
              getWidth: () => 36
            });
          }
          if (l) {
            e.push(l);
          }
          e.push({
            key: "extra",
            zone: layoutPositionOrders.LayoutPositions.RightSecond,
            modifier: [d, {
              type: "divider"
            }],
            getWidth: () => layoutSizeConstants.layoutMaxSize + layoutSizeConstants.layoutMinSize
          });
        } else {
          e.push(s);
          if (!n) {
            e.push(c);
          }
        }
        return e;
      });
    }({
      docId: i,
      streaming: d,
      loginActionClassName: n6["login-action"]
    });
    let v = reactReduxExports.useSelector(docxCommentUiSelectors.isHelpPanelShown);
    let {
      inViewBlockHeader: f,
      docxTitle: w
    } = blockHeaderViewHook.useBlockHeaderView(c == null ? undefined : c.blockManager);
    nP();
    let {
      status: x,
      editTime: y
    } = nT();
    let k = nM({
      status: x,
      editTime: y
    });
    let S = reactCoreLibraryReexport.useMemo(() => measureTextWidth.measureTextWidth(k, {
      fontSize: 14
    }), [k]);
    let R = flowPermissionHooks.useCollaborators();
    let E = eU({
      disabled: d
    });
    let C = nB({
      disabled: d
    });
    let $ = nU({
      disabled: d
    });
    let T = nS({
      disabled: d
    });
    let W = nJ({
      disabled: d
    });
    let I = nK({
      controller: c
    });
    let {
      isExportable: F,
      isEditable: P
    } = flowPermissionHooks.usePermissions();
    (function (e) {
      let {
        hasInit: n,
        isOwner: o
      } = flowPermissionHooks.usePermissions();
      let i = flowDocxEditorControllerModule.useFlowDocXEditorController();
      let r = async () => await (i == null ? undefined : i.getPageMeta());
      let l = async () => {
        let e = await r();
        let n = flowPermissionHooks.getDocToken();
        teaAnalyticsEventTracker.trackEvent("file_function_show", {
          collection_name: e == null ? undefined : e.title,
          show_from: "ai_doc_detail_upper_right",
          folder_type: "writing",
          if_multiple_choose: 0,
          artifact_type: 1,
          folder_tab: o ? "my_file" : "share",
          page_token: n
        });
      };
      reactCoreLibraryReexport.useEffect(() => {
        if (e && n) {
          l();
        }
      }, [n, o, e]);
    })(!!E || F);
    let A = functionInvoker.invoke(() => {
      if (userAgentDeviceDetector.isMobile()) {
        return h;
      }
      let e = docPlaygroundCheck.isDocPlayground();
      let n = [];
      if (!f) {
        n.push({
          key: "docx-title",
          zone: layoutPositionOrders.LayoutPositions.LeftThird,
          modifier: [{
            type: "custom",
            element: reactJsxRuntimeCoreReexport.jsx(nz, {
              title: w,
              className: n6["docx-title"]
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
      if (f && (!r || !d && !p)) {
        n.push({
          key: "edit-time",
          zone: layoutPositionOrders.LayoutPositions.LeftThird,
          modifier: [{
            type: "custom",
            element: reactJsxRuntimeCoreReexport.jsx(nF, {
              status: x,
              editTime: y,
              isHideText: !f,
              onClick: () => {
                c.bizEvents.emit("behavior.click-edit-time");
              }
            })
          }],
          getWidth: e => {
            let {
              renderSize: n
            } = e;
            if (n === layoutSizeConstants.LayoutSizes.Medium && f) {
              return 37 + S;
            } else {
              return 34;
            }
          }
        });
      }
      if (!d && P) {
        n.unshift(I);
      }
      n.push({
        key: "extra",
        zone: layoutPositionOrders.LayoutPositions.RightSecond,
        modifier: [C, _, {
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
      if (E) {
        n.unshift(E);
      }
      if (F && e) {
        n.unshift(T);
      }
      if (F && !e) {
        n.unshift($);
      }
      n.unshift(W);
      if (R.length) {
        n.push({
          key: "collab",
          zone: layoutPositionOrders.LayoutPositions.RightForth,
          modifier: [{
            type: "custom",
            element: reactJsxRuntimeCoreReexport.jsx(n3, {
              items: eM(R)
            })
          }, {
            type: "divider"
          }],
          getWidth: e => {
            let {
              renderSize: n
            } = e;
            return n5(R.length, n) + layoutSizeConstants.layoutMinSize;
          }
        });
      }
      if (isFunctionUtil_1.isFunction(l)) {
        return l(n);
      } else {
        n.push(...l);
        return n;
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(responsiveControlBarHeaderWrapper.ResponsiveControlBarHeader, {
      className: n,
      leftClassName: n6["left-width-patch"],
      style: o,
      plugins: A,
      strategies: s,
      bottomBorder: u || v
    });
  };
  var n7 = {
    container: "container-n1b6Vn",
    header: "header-HLNqxa",
    content: "content-TjZd7S",
    "text-primary": "text-primary-MV2tMH"
  };
  let n8 = reactReduxExports.Provider;
  otterDocDiContainerInitializer.initializeOtterDocContainer();
  let oe = reactCoreLibraryReexport.forwardRef(function (e, n) {
    let {
      className: o,
      style: i,
      docId: r,
      actionPlugins: c,
      strategies: j,
      readonly: W,
      commentReadonly: P = false,
      showHeader: z = true,
      injectToWindow: O = true,
      logMeta: B
    } = e;
    let L = i18nTranslationUtils.useTranslationWithFallback();
    let J = useLatestRef_1.useLatestRef(B);
    let V = reactCoreLibraryReexport.useMemo(() => new docLauncherController.DocLauncher({
      docId: r,
      logMeta: () => {
        return J.current ?? {};
      }
    }), [r]);
    U();
    reactCoreLibraryReexport.useEffect(() => {
      if (O) {
        safePropertyAssignUtil.safePropertyAssign(window, {
          docController: V
        });
      }
    }, [V, O]);
    reactUseRunOnce.useRunOnce(() => {
      flowPermissionHooks.businessConstants.renderStart = asyncLayoutCanvas_1.LayoutCanvas.renderStart;
    });
    let {
      isEditableRole: X
    } = flowPermissionHooks.useRoleStatus();
    let G = writeConfigManager.WriteConfigManager.useDirectAcceptRevisionDefault();
    let K = queryStringUtils_2_1.queryStringUtils.parse(location.search);
    let Y = K.enter_from && K.enter_from === "ai_doc_list_create_button";
    let q = K.show_history === "true";
    let Q = reactCoreLibraryReexport.useRef(false);
    let {
      error: ee
    } = flowPermissionHooks.useClientError({
      token: r
    });
    let [et, {
      setTrue: en,
      setFalse: eo
    }] = useBooleanHook.useBoolean(false);
    let ei = !et && !ee;
    let er = reactCoreLibraryReexport.useContext(chatServiceContext.ChatServiceContext);
    let ea = reactCoreLibraryReexport.useMemo(() => e => {
      let {
        children: n
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.FlowDocXEditorProvider, {
        value: {
          flowDocXEditorController: V
        },
        children: reactJsxRuntimeCoreReexport.jsx(chatServiceContext.ChatServiceProvider, {
          value: er,
          children: n
        })
      });
    }, []);
    let el = chatUserInfoStatus.getUserInfoStatus();
    let {
      isMightStreaming: es,
      streamingSource: ec
    } = docStreamingStatus.useStreamingStatus(V);
    let {
      isUpdating: ed
    } = docUpgradeStatusHook.getDocUpgradeInfo({
      docId: r || ""
    });
    let em = W || es || ed;
    reactCoreLibraryReexport.useImperativeHandle(n, () => V, [V]);
    eh({
      controller: V
    });
    eb({
      controller: V
    });
    let ep = reactCoreLibraryReexport.useRef(null);
    let {
      disableWidthMode: e_,
      disableFullWidth: ev
    } = docxWidthModeHooks.useDocxWidthMode(ep);
    reactCoreLibraryReexport.useEffect(() => {
      V.bizEvents.emit("behavior.disable-width-mode", e_);
      V.bizEvents.emit("behavior.disable-full-width", ev);
    }, [e_, ev]);
    reactCoreLibraryReexport.useEffect(() => {
      if (ed) {
        dbxSonnerToasterWrapper.dbxToastAPI.info(reactJsxRuntimeCoreReexport.jsx(textFormatterComponent.textFormatter, {
          text: `${L("drive_toast_docs_upgrading_refresh")}`,
          replacingMap: {
            s_refresh: {
              text: L("drive_toast_docs_upgrading_refresh_linkText"),
              className: n7["text-primary"]
            }
          },
          onTextClick: () => location.reload()
        }), {
          duration: 3000
        });
      }
    }, [ed]);
    reactCoreLibraryReexport.useEffect(() => {
      if (V != null) {
        V.eventEmitter.on("loading.first-render", en);
      }
      asyncSkillMessageLifecycle_2.skillLifecycle.on("behavior.partial-writing.submit", eR);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("behavior.startup-writing.submit", eR);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("copilot.doc-generate.message-start", eE);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("copilot.doc-generate.artifact-receiving", en);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("copilot.doc-generate.message-end", en);
      return () => {
        V.bizEvents.removeAllListeners();
        V.eventEmitter.removeAllListeners();
        asyncSkillMessageLifecycle_2.skillLifecycle.off("behavior.partial-writing.submit", eR);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("behavior.startup-writing.submit", eR);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("copilot.doc-generate.message-start", eE);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("copilot.doc-generate.artifact-receiving", en);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("copilot.doc-generate.message-end", en);
      };
    }, [r]);
    let ef = A(V);
    let eg = docPlaygroundCheck.isDocPlayground();
    let ek = messageDocContextUtil.isDocMessageContext({
      docId: r
    });
    let eS = et && (es || ek);
    reactCoreLibraryReexport.useEffect(() => {
      let {
        setOpenedDocId: e
      } = writingSkillStore.writingSkillStore.getState();
      e(r);
    }, [r]);
    (function (e, n, o) {
      let i = reactCoreLibraryReexport.useCallback(() => {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputService").then(e => {
          var n;
          if (e != null && (n = e.focusOnEditor) !== null && n !== undefined) {
            n.call(e);
          }
        });
      }, []);
      reactCoreLibraryReexport.useEffect(() => {
        if (n && (e || o)) {
          setTimeout(() => {
            i();
          }, 100);
        }
      }, [e, i, n, o]);
    })(et, eg, ef);
    useEventListenerHook.useEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && V.blockManager) {
        V.blockManager.layoutManager.getReconciler().viewport.updateViewport();
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      let {
        updateDocMetaMap: e
      } = writingSkillStore.writingSkillStore.getState();
      e(r, {
        isEditRole: X
      });
    }, [X]);
    reactCoreLibraryReexport.useEffect(() => {
      if (q && !Q.current) {
        V.toggleHistoryBox();
        Q.current = true;
        urlParamUtils.removeUrlParam("show_history");
      }
    }, [q]);
    let eR = () => {
      V.status.streaming.setMockStreaming({});
    };
    let eE = () => {
      if (V != null && V.blockManager && flowDocxEditorControllerModule.checkSingleEmptyTextBlock(V.blockManager)) {
        eo();
      }
    };
    if (el !== chatUserInfoStatus.UserInfoStatus.Finished) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.FlowDocXEditorProvider, {
        value: {
          flowDocXEditorController: V
        },
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          "data-testid": "doc_docx_panel",
          className: d(n7.container, disableSelectBarConst.disableSelectBar, imChatFlowSelectBar.flowDisableClass, o, {
            "flow-revision-animation-enabled": G,
            "flow-revision-mac-type": userAgentDeviceDetector.isMac()
          }),
          ...imChatFlowSelectBar.editorAriaProps,
          style: i,
          ref: ep,
          children: [z && reactJsxRuntimeCoreReexport.jsx(n9, {
            className: n7.header,
            docId: r,
            actionPlugins: c,
            strategies: j,
            docReady: et
          }), ei && reactJsxRuntimeCoreReexport.jsx(docSkeletonPanel.DocSkeletonPanel, {
            newDoc: !!Y
          }), eS && reactJsxRuntimeCoreReexport.jsx(docxCanvasAiStatusIndicator.AiStatusIndicator, {
            streaming: es,
            source: ec
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            "data-testid": "doc_docx_content",
            "data-copy-telemetry": "right_click_copy",
            className: n7.content,
            children: reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.FlowDocXPreviewComponent, {
              docId: r,
              readonly: em,
              enableComment: !userAgentDeviceDetector.isMobile(),
              commentReadonly: P,
              BlockWrapper: ea
            }, r)
          }), ef && eg && reactJsxRuntimeCoreReexport.jsx(ex, {})]
        })
      });
    }
  });
  let ot = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactJsxRuntimeCoreReexport.jsx(n8, {
      store: flowPermissionHooks.reduxStore,
      children: reactJsxRuntimeCoreReexport.jsx(oe, {
        ref: n,
        ...e
      })
    });
  });
  require.d(exports, {
    FlowDocxEditorContainer: function () {
      return ot;
    },
    FlowDocxEditorProvider: function () {
      return n8;
    }
  });
}