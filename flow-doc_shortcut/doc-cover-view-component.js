// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocCoverView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 149090
         */
module.exports = function (module, exports, require) {
  var n;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var themeAwareLogoComponent = require("theme-aware-logo-component") /*id: 384167*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var networkConnectionSelector = require("network-connection-selector") /*id: 788516*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var dlpAttachmentForbiddenPlaceholders = require("dlp-attachment-forbidden-placeholders") /*id: 586433*/;
  var flowPermissionSelectors = require("flow-permission-selectors") /*id: 323771*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var reactThemeProviderWrapper = require("react-theme-provider-wrapper") /*id: 805172*/;
  var reactUseLatest = require("react-use-latest") /*id: 549846*/;
  var storeCoverActionsMap = require("store-cover-actions-map") /*id: 535604*/;
  var docxSelectorsExport = require("docx-selectors-export") /*id: 254026*/;
  var docxStateSelectors = require("docx-state-selectors") /*id: 977031*/;
  var docxSubscriptionVisibility = require("docx-subscription-visibility") /*id: 210843*/;
  var docxEventHelper = require("docx-event-helper") /*id: 997602*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var flowSourceUrlValidator = require("flow-source-url-validator") /*id: 352044*/;
  var attachmentPermissionService = require("attachment-permission-service") /*id: 275142*/;
  var documentAiFeatureFlags = require("document-ai-feature-flags") /*id: 842304*/;
  var schedulerProvidersAccessor = require("scheduler-providers-accessor") /*id: 102884*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var docMultiGeoIdUtil = require("doc-multi-geo-id-util") /*id: 193223*/;
  var docxCoverManager = require("docx-cover-manager") /*id: 347206*/;
  var docCoverEventTracker = require("doc-cover-event-tracker") /*id: 746198*/;
  var editorRevisingStateAccessor = require("editor-revising-state-accessor") /*id: 828858*/;
  var editorModesBlockTypes = require("editor-modes-block-types") /*id: 738890*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var layoutEventTypes = require("layout-event-types") /*id: 580889*/;
  var docxHistoryConstants = require("docx-history-constants") /*id: 995012*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var reactContextHookUtil = require("react-context-hook-util") /*id: 884866*/;
  var resizeObserverUtil = require("resize-observer-util") /*id: 976180*/;
  var wikiSidebarResizeContext = require("wiki-sidebar-resize-context") /*id: 419331*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxCaptionConfig = require("docx-caption-config") /*id: 338988*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var eo = reactLoadableComponent;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let es = eo({
    loader: () => Promise.all([require.e("lottie-web-player-core") /*id: 97546*/, require.e("docx_index_delay") /*id: 82165*/]).then(require.bind(require, "doc-cover-toolbar-component") /*id: 274480*/),
    loading: () => null
  });
  function ea(e) {
    let i = document.querySelector(".doc-cover-toolbar");
    if (i) {
      return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(es, {
        ...e
      }), i);
    } else {
      return null;
    }
  }
  var getRootBlockText = require("get-root-block-text") /*id: 196698*/;
  let ed = eo({
    loader: () => Promise.all([require.e("lottie-web-player-core") /*id: 97546*/, require.e("docx_index_delay") /*id: 82165*/]).then(require.bind(require, "docx-loading-progress-component") /*id: 977688*/),
    loading: () => null
  });
  var docCoverImageWrapper = require("doc-cover-image-wrapper") /*id: 756001*/;
  var docxCoverIntersectionHandler = require("docx-cover-intersection-handler") /*id: 584038*/;
  var statusModeTypes = require("status-mode-types") /*id: 811669*/;
  var docxCoverIntersectionHook = require("docx-cover-intersection-hook") /*id: 462592*/;
  var docxFileCoverUtils = require("docx-file-cover-utils") /*id: 326877*/;
  require("empty-webpack-chunk-74277") /*id: 246170*/;
  var flowDocShortcutUtils = require("flow-doc-shortcut-utils") /*id: 606621*/;
  let eg = 3;
  let eb = false;
  let eE = browserEnvironmentDetectionUtils.browserDetector.isFeed && platformDocUtils.Q67() ? 295 : 309;
  let eS = reactThemeProviderWrapper.withThemeProvider(themeAwareLogoComponent.ThemeAwareLogo);
  let e_ = browserEnvironmentDetectionUtils.browserDetector.isLarkFeed ? 295 : 309;
  (n = ek || {})[n.HIDDEN = 0] = "HIDDEN";
  n[n.VISIBLE = 1] = "VISIBLE";
  var ek = n;
  let ey = () => {
    let e = window.innerHeight || document.documentElement.clientHeight;
    if (browserEnvironmentDetectionUtils.browserDetector.isIOS) {
      e = document.documentElement.clientHeight;
    }
    if (!browserEnvironmentDetectionUtils.browserDetector.mobile) {
      e -= docxEditorConstantsConfig.borderRadiusBase;
    }
    if (docxShortcutFeatureDetection.isShortcutEnabled()) {
      let {
        height: i
      } = docxShortcutFeatureDetection.getContainerDimensions();
      e = i;
    }
    let i = e * docxCaptionConfig.maskOpacity;
    if (i < docxEditorConstantsConfig.borderRadiusBase * 2) {
      i = docxEditorConstantsConfig.borderRadiusBase * 2;
    }
    if (i > 400) {
      i = 400;
    }
    return i;
  };
  let eM = (e, i, r, n) => {
    var o;
    let l = (i == null ? undefined : i.clientWidth) || document.documentElement.clientWidth || window.innerWidth;
    let s = n && !(i == null ? undefined : i.clientWidth);
    if (browserEnvironmentDetectionUtils.browserDetector.isIOS && !browserEnvironmentDetectionUtils.browserDetector.isIPad) {
      l = (i == null ? undefined : i.clientWidth) || window.innerWidth || document.documentElement.clientWidth;
    }
    if (s && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      l -= e_;
    }
    if (s && browserEnvironmentDetectionUtils.browserDetector.isIPadApp && (o = l, (browserEnvironmentDetectionUtils.browserDetector.isIPad ? o <= docxHistoryConstants.historySidebarWidth ? docxHistoryConstants.HistoryViewMode.STACKED : docxHistoryConstants.HistoryViewMode.TILED : docxHistoryConstants.HistoryViewMode.STACKED) === docxHistoryConstants.HistoryViewMode.TILED)) {
      if (!docxSubscriptionVisibility.isSubscriptionShow(reduxStoreInitializer.reduxStore.getState())) {
        l -= 294;
      }
    }
    if (r && !browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isLarkFeed && !n) {
      let e = resizeObserverUtil.getResizeObserver().rect;
      if (e == null ? undefined : e.width) {
        l = e.width;
      }
    }
    if (e) {
      l -= eE;
    }
    return l;
  };
  let eT = e => {
    var r;
    return (e == null ? undefined : (r = e.layoutManager) === null || r === undefined ? undefined : r.getViewportData()?.top) ?? 0;
  };
  let eP = () => objectPathGetDefault.getObjectPathDefault(reduxStoreInitializer.reduxStore.getState(), "appState.system.orientation", "portrait");
  let eC = e => {
    var i;
    if (e == null) {
      return undefined;
    } else if ((i = e.token) === null || i === undefined) {
      return undefined;
    } else {
      return i.slice(0, 5);
    }
  };
  let {
    getBlobUrl: eR,
    isBlobUrl: ew
  } = platformDocUtils.kG0;
  var eI = reactReduxCore.connect((e, i) => {
    var o;
    let l = syncedReferenceBlockUtils.getBlockTokenWithFallback(i.blockManager?.editorAPI, false, true);
    let s = (o = e.docx.cover) === null || o === undefined ? undefined : o.coverInfo?.token;
    return {
      attachmentPermissions: flowPermissionSelectors.selectActionFlags(e, s, l)
    };
  })(e => {
    let {
      attachmentPermissions: r,
      hostBusiness: n,
      isHistory: l = false,
      coverInfo: s,
      scrollContainer: m,
      blockManager: v
    } = e;
    let k = l ? s : reactReduxCore.useSelector(docxSelectorsExport.getCoverInfo);
    let C = l ? null : reactUseLatest.useLatest(k);
    if (docxShortcutFeatureDetection.isShortcutEnabled()) {
      docxShortcutFeatureDetection.debugLogger("[cover-image]", k && platformDocUtils.p5T(k.src), k && platformDocUtils.p5T(k.lightSrc), platformDocUtils.p5T(docTokenManager.getDocToken()));
    }
    let N = !!l || reactReduxCore.useSelector(networkConnectionSelector.selectConnected);
    let A = !l && reactReduxCore.useSelector(docxSelectorsExport.getIsUploading);
    let K = reactReduxCore.useSelector(docxSelectorsExport.hasCoverType);
    let er = reactReduxCore.useSelector(docxSelectorsExport.getCoverSuperStatus);
    let en = reactReduxCore.useSelector(docxSelectorsExport.isCommentPanelShown) && !docHostTypeChecker.isSheetHost(n) && platformDocUtils.Q67() && browserEnvironmentDetectionUtils.browserDetector.isFeed;
    let eo = l ? statusModeTypes.StatusModes.HISTORY : statusModeTypes.StatusModes.NORMAL;
    let es = reactCoreLibraryReexport.useRef(null);
    let eE = reactCoreLibraryReexport.useRef(null);
    let e_ = reactCoreLibraryReexport.useRef(null);
    let [eI, ex] = reactCoreLibraryReexport.useState(false);
    let [eN, eD] = reactCoreLibraryReexport.useState(false);
    let [eO, eZ] = reactCoreLibraryReexport.useState(false);
    let [eL, eA] = reactCoreLibraryReexport.useState(false);
    let [e$, ej] = reactCoreLibraryReexport.useState(false);
    let [eW, eF] = reactCoreLibraryReexport.useState(false);
    let [eH, eB] = reactCoreLibraryReexport.useState(true);
    let ez = reactCoreLibraryReexport.useRef("");
    let [eV, eJ] = reactCoreLibraryReexport.useState({});
    let [eU, eX] = reactCoreLibraryReexport.useState({
      diffX: 0,
      diffY: 0
    });
    let [eG, eK] = reactCoreLibraryReexport.useState("");
    let [eq, eQ] = reactCoreLibraryReexport.useState("");
    let eY = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.share.selectCanEditInvolvingEditMode);
    let e0 = e.isEditable ?? eY;
    let e1 = editorModesBlockTypes.allowedEditorModes.includes(reactReduxCore.useSelector(docxStateSelectors.selectDocsMode));
    let e6 = reactContextHookUtil.useMyContext();
    let e2 = reactCoreLibraryReexport.useRef(eT(v));
    let e3 = reactCoreLibraryReexport.useRef(eP());
    let e5 = !l && (e0 && editorRevisingStateAccessor.canShowRevising() ? e1 : e0);
    let e7 = v == null ? undefined : v.editorAPI.config.get("isUneditedTranslationMode");
    let e4 = e5 && !e7;
    let [e9, e8] = reactCoreLibraryReexport.useState(!!en);
    let te = wikiSidebarResizeContext.useWikiContext();
    let tt = l ? null : reactReduxCore.useSelector(docxSelectorsExport.getDlpStatus);
    let [ti, tr] = reactCoreLibraryReexport.useState(null);
    let [tn, to] = reactCoreLibraryReexport.useState(false);
    docxCoverIntersectionHook.useCoverIntersection(es.current, k, eo);
    let tl = reactCoreLibraryReexport.useRef({
      width: eM(e9, m, te == null ? undefined : te.isInWiki, l),
      height: ey()
    });
    let [ts, ta] = reactCoreLibraryReexport.useState(false);
    let tc = reactCoreLibraryReexport.useRef(true);
    let td = reactCoreLibraryReexport.useRef(false);
    let tu = reactCoreLibraryReexport.useCallback(() => {
      if (!K || browserEnvironmentDetectionUtils.browserDetector.isIOS && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp && !tc.current) {
        return;
      }
      let e = {
        width: eM(e9, m, te == null ? undefined : te.isInWiki, l),
        height: ey()
      };
      let i = e.width !== tl.current.width || e.height !== tl.current.height;
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        let e = eT(v);
        let r = eP();
        if (r !== e3.current) {
          e3.current = r;
        } else if (e !== e2.current) {
          i = false;
          e2.current = e;
        }
      }
      if (i) {
        tl.current = e;
        docxCoverIntersectionHandler.updateCoverHeight({
          coverScene: eo
        }, e6);
        if (eE.current) {
          eJ(docxFileCoverUtils.getCoverLayout(k, eE.current, tl.current));
        } else {
          ta(!ts);
        }
        docxEditorEventConstantsAndManager.globalEventBus.emit(docxCoverManager.coverActionTypes.OPENDOC_COVER_RESIZE);
      }
    }, [ts, k, e9, m, eo, te == null ? undefined : te.isInWiki, K, v]);
    let th = e => {
      eX({
        diffX: e.diffX + (eU.diffX || 0),
        diffY: e.diffY + (eU.diffY || 0)
      });
    };
    let tf = e => {
      let i = {
        pic_show_size: `${Math.round(tl.current.width)}x${Math.round(tl.current.height)}`,
        load_status: e ? "success" : "load_fail"
      };
      if (e) {
        i.pic_original_size = `${eE.current?.naturalWidth}x${eE.current?.naturalHeight}`;
      }
      docCoverEventTracker.DocCoverEventTracker.loadCover(i);
    };
    let tm = e => {
      if (docxFeatureFlags.isDlpUploadEnabled()) {
        if (l) {
          tr(e);
        } else {
          reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setDlpStatus(e));
        }
      }
    };
    function tv(e, i, r = false, n) {
      if (!e) {
        ex(false);
        ej(true);
        docCoverEventTracker.trackCoverBug("no src", {
          token: eC(k)
        });
        return;
      }
      if (docxFileCoverUtils.isSameUrlOriginPath(e, eG)) {
        if (n) {
          reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setCoverSuperStatus(false));
        }
        let e = docxFileCoverUtils.getCoverLayout(k, eE.current, tl.current);
        if (!deepEqualUtil_1.deepEqual(eV, e) && !isEmptyUtil.isEmpty(e)) {
          eJ(e);
        }
      } else {
        eg = 3;
        eD(false);
        if (!r) {
          eZ(false);
        }
        eK(e);
        eQ(i || "");
        if (!r && !n) {
          ex(true);
        }
        ej(false);
        if (!r) {
          eF(false);
        }
        eA(false);
        tm(null);
      }
    }
    reactCoreLibraryReexport.useEffect(() => {
      let {
        width: e,
        height: i,
        marginLeft: r,
        marginTop: n
      } = eV;
      let {
        diffX: o = 0,
        diffY: l = 0
      } = eU || {};
      if (o === 0 && l === 0) {
        return;
      }
      let s = docxFileCoverUtils.clampOffsetValue(r + o, e, tl.current.width);
      let a = docxFileCoverUtils.clampOffsetValue(n + l, i, tl.current.height);
      eX({
        diffX: 0,
        diffY: 0
      });
      if (s !== r || a !== n) {
        eJ({
          width: e,
          height: i,
          marginLeft: s,
          marginTop: a
        });
      }
    }, [eU]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var i;
      let r = v == null ? undefined : (i = v.editorAPI) === null || i === undefined ? undefined : (e = i.getService) === null || e === undefined ? undefined : e.call(i, attachmentPermissionService.attachmentPermSvc);
      if (r && (k == null ? undefined : k.token)) {
        if (r != null) {
          r.fetchBlockAuthStatus(k.token);
        }
      }
    }, [k, v]);
    reactCoreLibraryReexport.useEffect(() => {
      if ((C == null ? undefined : C.token) && docxFeatureFlags.isDlpUploadEnabled()) {
        platformDocUtils.Vni.deleteAllFetchCallback(C.token);
      }
      if (k) {
        let i = k && k.src || "";
        let r = (C == null ? undefined : C.src) || "";
        let n = k && k.lightSrc || "";
        if (opendocImageViewerUtils.isOpendoc) {
          if (i && ew(i) && !n) {
            tv(i, n, true, k.isSuperImage);
            return;
          }
          if (!docxFileCoverUtils.isSameUrlOriginPath(r, i)) {
            (function (e, i) {
              let r = docxFileCoverUtils.resolveSsrImageUrl(e) || eR(e);
              if (typeof r == "string" || !r) {
                return;
              }
              let n = docxFileCoverUtils.resolveSsrImageUrl(i) || eR(i);
              let o = [r];
              if (typeof n != "string" && n) {
                o.push(n);
                n.then(e => {
                  if (e) {
                    eQ(e);
                    ex(false);
                  }
                }).catch(t_);
              }
              r.catch(tb);
              Promise.all(o).then(i => {
                if (ez.current === e) {
                  return;
                }
                let [r, n] = i;
                if (r && n) {
                  ez.current = e;
                  tv(r, n, true);
                }
              }).catch(e => undefined);
            })(i, n);
            return;
          }
          let o = (eE == null ? undefined : eE.current?.src) || "";
          if (o && !ew(i) && ew(o)) {
            tv(o, n, true, k.isSuperImage);
            return;
          }
          eb = false;
          return;
        }
        tv(i, n, false, k.isSuperImage);
      } else {
        eK("");
        ez.current = "";
        ex(false);
        ej(false);
        eA(false);
        tm(null);
        docxCoverIntersectionHandler.notifyHeightChange(0, eo);
        docxCoverIntersectionHandler.notifyHeightChange(0, eo, e6);
      }
      eb = false;
    }, [k]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = {
        trailing: true
      };
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        e.maxWait = 200;
        e.leading = true;
      }
      let i = debounceUtil_1_1.debounce(tu, 60, e);
      if (m) {
        let e = new resizeObserverPolyfill.ResizeObserver(i);
        e.observe(m);
        return () => {
          e.unobserve(m);
        };
      }
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        return resizeObserverUtil.getResizeObserver().onResize(tu);
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isIPad || runtimeEnvFlags.isFromVideoCall) {
        let e = e => {
          if (browserEnvironmentDetectionUtils.browserDetector.isIOS && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
            if ((e == null ? undefined : e.visible) === ek.HIDDEN) {
              tc.current = false;
            } else {
              tc.current = true;
              i();
            }
          }
        };
        let r = [];
        window.addEventListener("resize", i);
        window.addEventListener("orientationchange", i);
        if (browserEnvironmentDetectionUtils.browserDetector.isIOS) {
          r.push(e6.iosWebViewSizeChangeSignal.subscribe(function () {
            i();
          }));
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isIOS && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
          window.bridge.register("biz.util.updateWebviewVisibility", e);
        }
        return () => {
          window.removeEventListener("resize", i);
          window.removeEventListener("orientationchange", i);
          if (browserEnvironmentDetectionUtils.browserDetector.isIOS && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
            window.bridge.unregister("biz.util.updateWebviewVisibility", e);
          }
          r.forEach(e => e.unsubscribe());
        };
      }
      if (!runtimeEnvFlags.isFromVideoCall) {
        return;
      }
    }, [tu, m]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        e8(e);
      };
      if (browserEnvironmentDetectionUtils.browserDetector.isLarkFeed && !browserEnvironmentDetectionUtils.browserDetector.isLarkPureWebPage) {
        docxEditorEventConstantsAndManager.globalEventBus.on(layoutEventTypes.layoutEventTypes.DOC_COMMENT_SHOW_CHANGE, e);
      }
      return () => {
        if (browserEnvironmentDetectionUtils.browserDetector.isLarkFeed && !browserEnvironmentDetectionUtils.browserDetector.isLarkPureWebPage) {
          docxEditorEventConstantsAndManager.globalEventBus.off(layoutEventTypes.layoutEventTypes.DOC_COMMENT_SHOW_CHANGE, e);
        }
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      tu();
    }, [tu, e9]);
    reactCoreLibraryReexport.useEffect(() => {
      if (eE.current) {
        eE.current.addEventListener("dragstart", e => {
          e.preventDefault();
        });
      }
    }, []);
    let tp = e => {
      let i = k == null ? undefined : k.token;
      if (e.attachmentToken === i) {
        if (e.result === platformDocUtils.SVk.NOT_SENSITIVE) {
          reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setDlpStatus(null));
        } else {
          reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setDlpStatus(e.result));
        }
      }
    };
    let tg = () => {
      setTimeout(() => {
        docCoverEventTracker.trackCoverBug("cover hideSSR");
        eB(false);
      }, 300);
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = l ? ti : tt;
      if (e) {
        if (e === platformDocUtils.SVk.CHECKING) {
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
            window.flow.biz.util.deleteFileCache({
              token: v == null ? undefined : v.rootRecordId,
              file_token: k == null ? undefined : k.token,
              file_url: k == null ? undefined : k.src
            });
          }
          if (k == null ? undefined : k.token) {
            platformDocUtils.Vni.setFetchCallback(k.token, tp);
          }
        }
        ej(true);
        eF(true);
        ex(false);
        docCoverEventTracker.trackCoverBug("dlp load error", {
          lightImgLoaded: eO,
          token: eC(k)
        });
        tg();
      } else {
        ej(false);
        ex(true);
        eF(false);
        docCoverEventTracker.trackCoverBug("dlp load error no status", {
          token: eC(k)
        });
      }
    }, [tt, ti]);
    let tb = async () => {
      if (!eG) {
        if (docxShortcutFeatureDetection.isShortcutEnabled()) {
          docxShortcutFeatureDetection.debugLogger("[cover-image] handleImgError return, imageSrc not exist.");
        }
        return;
      }
      if (docxFeatureFlags.isDlpUploadEnabled() && !eb) {
        eb = true;
        let e = await flowSourceUrlValidator.validateSourceUrl(eG);
        if (e) {
          tm(e);
          ex(false);
          tf(false);
          if (docxShortcutFeatureDetection.isShortcutEnabled()) {
            docxShortcutFeatureDetection.debugLogger("[cover-image] handleImgError return, dlpResult.");
          }
          return;
        }
      }
      if (eg) {
        eg--;
        let e = new URL(eG);
        e.searchParams.append("t", `${Number(new Date())}`);
        eK(e.toString());
        if (!eI && !eO) {
          ex(true);
        }
        if (e$) {
          ej(false);
        }
        if (docxShortcutFeatureDetection.isShortcutEnabled()) {
          docxShortcutFeatureDetection.debugLogger(`[cover-image] handleImgError retry, retryTimes ${eg}`);
        }
      } else {
        ex(false);
        ej(true);
        tf(false);
        if (docxShortcutFeatureDetection.isShortcutEnabled()) {
          docxShortcutFeatureDetection.debugLogger("[cover-image] handleImgError end");
        }
      }
      docCoverEventTracker.trackCoverBug("cover handleImgError", {
        loading: eI,
        lightImgLoaded: eO,
        retryTimes: eg,
        token: eC(k)
      });
    };
    let tE = () => {
      eg = 3;
      tb();
    };
    let tS = () => {
      if (!eG) {
        if (docxShortcutFeatureDetection.isShortcutEnabled()) {
          docxShortcutFeatureDetection.debugLogger("[cover-image] handleImgLoad return, imageSrc not exist.");
        }
        return;
      }
      ex(false);
      let e = docxFileCoverUtils.getCoverLayout(k, eE.current, tl.current);
      eJ(e);
      docCoverEventTracker.trackCoverBug("cover handleImgLoad", {
        time: Date.now(),
        height: tl.current.height,
        imgStyle: JSON.stringify(e),
        token: eC(k)
      });
      eF(true);
      td.current ||= true;
      ej(false);
      tf(true);
      if (k == null ? undefined : k.isSuperImage) {
        reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setCoverSuperStatus(false));
      }
      if (docxShortcutFeatureDetection.isShortcutEnabled()) {
        docxShortcutFeatureDetection.debugLogger("[cover-image] cover load successfully");
      }
      tg();
    };
    let t_ = () => {
      ex(false);
      eZ(true);
      let e = docxFileCoverUtils.getCoverLayout(k, e_.current, tl.current);
      eJ(e);
      docCoverEventTracker.trackCoverBug("cover handlePreviewImgLoad", {
        time: Date.now(),
        height: tl.current.height,
        imgStyle: JSON.stringify(e),
        token: eC(k)
      });
    };
    let tk = () => {
      eD(true);
      eZ(true);
      docCoverEventTracker.trackCoverBug("handlePreviewImgError", {
        token: eC(k)
      });
      if (docxShortcutFeatureDetection.isShortcutEnabled()) {
        docxShortcutFeatureDetection.debugLogger("[cover-image] handlePreviewImgError");
      }
    };
    let ty = e => {
      docxEventHelper.collectEventWithTarget("ccm_doc_content_page_click", docxEditorBlockMetadataUtils.getPageBlockInfo(), {
        click: `click_${e ? "confirm" : "cancel"}_move_cover`
      });
      if (!e) {
        eJ(docxFileCoverUtils.getCoverLayout(k, eE.current, tl.current));
        return eA(false);
      }
      if (!k) {
        return;
      }
      let {
        marginLeft: i,
        marginTop: r,
        width: n,
        height: o
      } = eV;
      let l = docxFileCoverUtils.getOffsetRatio(i, n, tl.current.width);
      let s = docxFileCoverUtils.getOffsetRatio(r, o, tl.current.height);
      let {
        offset_ratio_x: a,
        offset_ratio_y: c
      } = k;
      if (l !== a || s !== c) {
        docxEditorEventConstantsAndManager.globalEventBus.trigger(docxCoverManager.coverActionTypes.UPDATE_COVER_POSITION, [{
          ...k,
          offset_ratio_x: l,
          offset_ratio_y: s
        }]);
      }
      eA(false);
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        window.flow.biz.title.adjustCoverPosition({
          setting: false
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!e5 && eL) {
        ty(false);
      }
    }, [e5, eL]);
    reactCoreLibraryReexport.useEffect(() => {
      if (e_.current?.complete && !eO && !eN) {
        t_();
      }
    }, [e_.current]);
    reactCoreLibraryReexport.useEffect(() => {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        let e = () => {
          to(true);
        };
        let i = () => {
          to(false);
        };
        docxEditorEventConstantsAndManager.globalEventBus.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.START_TAKE_SCREENSHOT, e);
        docxEditorEventConstantsAndManager.globalEventBus.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.FINISH_TAKE_SCREENSHOT, i);
        return () => {
          docxEditorEventConstantsAndManager.globalEventBus.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.START_TAKE_SCREENSHOT, e);
          docxEditorEventConstantsAndManager.globalEventBus.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.FINISH_TAKE_SCREENSHOT, i);
        };
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (eE.current?.complete && !eW && !e$) {
        tS();
      }
    }, [eE.current]);
    let tM = () => {
      eA(true);
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        window.flow.biz.title.adjustCoverPosition({
          setting: true
        });
      }
    };
    let tT = reactCoreLibraryReexport.useMemo(() => {
      if (!v || !eH) {
        docCoverEventTracker.trackCoverBug("SSRPlaceHolder null", {
          blockManager: !!v,
          SSRVisible: eH
        });
        return null;
      }
      let e = v.editorAPI.getService(schedulerProvidersAccessor.blockSchedulerProv);
      let i = e == null ? undefined : e.getCoverSSRContent();
      docCoverEventTracker.trackCoverBug("SSRPlaceHolder", {
        coverSSR: !!i
      });
      if (i) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: "ssr-cover-placeholder",
          dangerouslySetInnerHTML: {
            __html: xssContentSanitizer.sanitizeHtml(i, null, {
              logType: "react.dangerouslySetInnerHTML",
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1MlpHM$dl$Xd3$*5aa2JWWj$$MWN4-%Zve$Z-$mtTRTQw$1ZoS2Jt%ll%$DA9"
            })
          }
        });
      } else {
        return null;
      }
    }, [v, eH]);
    let tP = () => k ? reactJsxRuntimeCoreReexport.jsxs(docCoverImageWrapper.CoverImageWrapper, {
      isDragging: eL,
      style: eV,
      updatePosition: th,
      children: [eq && !eN && !eW && reactJsxRuntimeCoreReexport.jsx("img", {
        ref: e_,
        crossOrigin: "use-credentials",
        src: xssContentSanitizer.sanitizeUrl(eq, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1MlpHM$dl$Xd3$*5aa2JWWj$$MWN4-%Zve$Z-$mtTRTQw$1ZoS2Jt%ll%$DA9"
        }),
        onLoad: t_,
        onError: tk,
        style: {
          visibility: eO ? "visible" : "hidden"
        }
      }), reactJsxRuntimeCoreReexport.jsx("img", {
        ref: eE,
        crossOrigin: "use-credentials",
        src: xssContentSanitizer.sanitizeUrl(eG, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1MlpHM$dl$Xd3$*5aa2JWWj$$MWN4-%Zve$Z-$mtTRTQw$1ZoS2Jt%ll%$DA9"
        }),
        onLoad: tS,
        onError: tb,
        className: "doc-cover-image",
        style: {
          display: eW ? undefined : "none"
        }
      })]
    }) : null;
    let tC = e => {
      let i = k == null ? undefined : k.status;
      let r = reactJsxRuntimeCoreReexport.jsxs("span", {
        children: [t("CreationDoc_DocX_Block_Load_Fail"), reactJsxRuntimeCoreReexport.jsx("button", {
          type: "button",
          onClick: tE,
          style: {
            fontSize: 16
          },
          children: t("CreationDoc_Docs_TwoWayLinks_LoadingError_Toast12")
        })]
      });
      let n = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          onClick: e ? undefined : tE,
          children: reactJsxRuntimeCoreReexport.jsx(eS, {})
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "doc-cover-error-desc",
          style: {
            fontSize: 16
          },
          children: e && (i !== 10 || (k == null ? undefined : k.token) ? r : t("CreationDoc_DocX_Cover_failed_placeholder"))
        })]
      });
      let o = l ? ti : tt;
      if (o === platformDocUtils.SVk.CHECKING) {
        return reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.dlpPreviewForbidden, {});
      } else if (o === platformDocUtils.SVk.SENSITIVE || o === platformDocUtils.SVk.DELETED) {
        return reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.dlpDeleted, {});
      } else {
        return n;
      }
    };
    let tR = e => {
      tf(false);
      let i = tC(e);
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "doc-cover-error",
        children: i
      });
    };
    let tw = () => reactJsxRuntimeCoreReexport.jsx("div", {
      className: "doc-cover-error",
      children: reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.attachExportForbidden, {})
    });
    let tI = () => reactJsxRuntimeCoreReexport.jsx("div", {
      className: "doc-cover-offline",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "doc-cover-offline-content docx-retry-content",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "doc-cover-offline-desc",
          style: {
            fontSize: 16
          },
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: "retry-text",
            children: t("LarkCCM_Docs_OfflineUse_CoverUnavailableWhileOffline_Desc")
          })
        })
      })
    });
    let tx = e => {
      tf(false);
      let i = reactJsxRuntimeCoreReexport.jsx("div", {
        className: "doc-cover-offline-desc",
        style: {
          fontSize: 14
        },
        children: reactJsxRuntimeCoreReexport.jsxs("span", {
          className: "retry-text",
          children: [t("CreationDoc_DocX_Block_Load_Fail"), reactJsxRuntimeCoreReexport.jsx("button", {
            type: "button",
            onClick: tE,
            className: "retry-btn",
            children: t("CreationDoc_Docs_TwoWayLinks_LoadingError_Toast12")
          })]
        })
      });
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "doc-cover-offline",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "doc-cover-offline-content docx-retry-content",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: e ? undefined : tE,
            children: reactJsxRuntimeCoreReexport.jsx(eS, {
              style: {
                maxHeight: "96px",
                maxWidth: "96px"
              }
            })
          }), e && i]
        })
      });
    };
    if (flowDocShortcutUtils.isMobileBytedance || docComponentFeatureFlags.isContentCoverOff() || !k && !A) {
      return null;
    }
    let tN = a(docxCaptionConfig.wrapperClass, {
      "doc-cover-wrapper-loading": eI,
      "doc-cover-ai": documentAiFeatureFlags.isAICoverEnabled() && v && getRootBlockText.getRootBlockText(v)
    });
    let tD = {
      width: Math.min(eV.width || tl.current.width, tl.current.width),
      height: Math.floor(tl.current.height)
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: es,
      className: tN,
      style: tD,
      "data-printable": docMultiGeoIdUtil.resolveMultiGeoId(String(r == null ? undefined : r.print), r == null ? undefined : r.previewResultCode),
      "data-exportable": String(r == null ? undefined : r.export),
      "data-copyable": String(r == null ? undefined : r.copy),
      children: (() => {
        let e = Math.floor(tl.current.height) > 160;
        let i = r && r.export === undefined && tn;
        if (!eI || N) {
          return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [e$ ? tR(e) : i ? tw() : tP(), documentAiFeatureFlags.isImageSuperEnabled() && er ? reactJsxRuntimeCoreReexport.jsx(ed, {}) : (eI || A) && reactJsxRuntimeCoreReexport.jsx(platformDocUtils.bev, {
              size: browserEnvironmentDetectionUtils.browserDetector.isMobile ? docxCaptionConfig.subtitleFontSize : docxCaptionConfig.titleFontSize,
              color: "var(--text-disabled)"
            }), tT, e4 && reactJsxRuntimeCoreReexport.jsx(ea, {
              isDragging: eL,
              isOnline: N,
              hasError: e$,
              onDragEnd: ty,
              onDragStart: tM,
              coverInfo: k,
              blockManager: v
            })]
          });
        } else if (offlineStatusSelectorsUtils.isWindowOffline()) {
          return tI();
        } else {
          return tx(e);
        }
      })()
    });
  });
  require.d(exports, {
    DocCoverView: function () {
      return eI;
    }
  });
}