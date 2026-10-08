// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'docxImageBlockType'
// - Renamed export 'Z' to 'DocxImageBlockView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 600667
         */
module.exports = function (module, exports, require) {
  var n;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var themeAwareLogoComponent = require("theme-aware-logo-component") /*id: 384167*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var dlpAttachmentForbiddenPlaceholders = require("dlp-attachment-forbidden-placeholders") /*id: 586433*/;
  var docxEditorImageCropUtils = require("docx-editor-image-crop-utils") /*id: 304247*/;
  var docxEditorPaddingUtils = require("docx-editor-padding-utils") /*id: 656664*/;
  var docxEditorScaleUtil = require("docx-editor-scale-util") /*id: 431997*/;
  var docComponentConfigUtils = require("doc-component-config-utils") /*id: 123085*/;
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  let E = (e, i) => {
    let r = docComponentConfigUtils.getDocComponentConfig("extensions.image.maxWidth");
    if (r) {
      return Math.max(docxEditorConstants.editorMinSize, Math.min(i, e, r));
    } else {
      return Math.max(docxEditorConstants.editorMinSize, Math.min(i, e));
    }
  };
  var dimensionResizeUtil = require("dimension-resize-util") /*id: 338639*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let R = (e, i, r) => {
    let {
      image: n,
      align: o
    } = i;
    let l = E(docxEditorImageCropUtils.calculateCroppedWidth(function (e) {
      let {
        width: i,
        height: r,
        scale: n
      } = e.image;
      return {
        width: i * n,
        height: r * n
      };
    }(i).width, n.crop), r);
    let s = o && o !== docBlockTypeConstants.alignmentConstants.CENTER ? 1 : 2;
    return E(l + e.diffX * s, r) / docxEditorImageCropUtils.calculateCroppedWidth(n.width, n.crop);
  };
  var imageOperationServiceProvider = require("image-operation-service-provider") /*id: 713630*/;
  var docxOfflineImageFlags = require("docx-offline-image-flags") /*id: 332375*/;
  var imageCropControllerToken_1 = require("image-crop-controller-token_1") /*id: 673650*/;
  var docxImageUtils = require("docx-image-utils") /*id: 164286*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var P = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "var(--color-neutral-70)",
      d: "M6.848.543a.666.666 0 0 1 .835-.11l.108.083 3 2.833a.67.67 0 0 1 0 .97l-3 2.832-.108.083a.668.668 0 0 1-.896-.95l.088-.101 1.89-1.787a4.665 4.665 0 0 0-4.36 7.579 4.67 4.67 0 0 0 5.448 1.308 4.67 4.67 0 0 0 2.777-4.868l.662-.083.66-.084A6.001 6.001 0 1 1 2.008 9.283 6 6 0 0 1 8.5 3.021L6.875 1.485a.667.667 0 0 1-.027-.942m6.36 7.128a.667.667 0 0 1 .745.577l-1.323.167a.667.667 0 0 1 .578-.744"
    })
  });
  var L = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 60,
    height: 60,
    fill: "none",
    viewBox: "0 0 60 60",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsxs("g", {
      fill: "#fff",
      clipPath: "url(#gif_pre_loading_svg__a)",
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        fillRule: "evenodd",
        d: "M54.366 39.077a.59.59 0 0 1-.773.338l-.743-.295a.61.61 0 0 1-.343-.782 24.3 24.3 0 0 0 1.154-4.305.61.61 0 0 1 .687-.506l.792.116a.59.59 0 0 1 .5.68 26.3 26.3 0 0 1-1.274 4.754m1.624-10.018a.59.59 0 0 1-.586.607l-.8.01a.61.61 0 0 1-.615-.592 24 24 0 0 0-.581-4.408.61.61 0 0 1 .44-.731l.775-.198a.59.59 0 0 1 .723.435c.366 1.588.584 3.22.644 4.877m-2.344-9.87a.59.59 0 0 1-.307.785l-.735.316a.61.61 0 0 1-.795-.311 24 24 0 0 0-2.226-3.855.61.61 0 0 1 .128-.844l.641-.479a.59.59 0 0 1 .835.127 26 26 0 0 1 2.46 4.26m-5.934-8.23a.59.59 0 0 1 .015.843l-.56.573a.61.61 0 0 1-.853.015 24 24 0 0 0-3.526-2.707.61.61 0 0 1-.205-.83l.409-.687a.59.59 0 0 1 .818-.203 26 26 0 0 1 3.901 2.996m-8.635-5.325a.59.59 0 0 1 .338.773l-.295.743a.61.61 0 0 1-.782.343 24.3 24.3 0 0 0-4.305-1.154.61.61 0 0 1-.506-.687l.116-.792a.59.59 0 0 1 .68-.5 26.3 26.3 0 0 1 4.754 1.274M29.059 4.01a.59.59 0 0 1 .607.586l.01.8a.61.61 0 0 1-.592.615c-1.496.056-2.971.253-4.408.582a.61.61 0 0 1-.731-.44l-.198-.776a.59.59 0 0 1 .435-.723 26 26 0 0 1 4.877-.644m-9.085 2.651a.59.59 0 0 0-.786-.307 26 26 0 0 0-4.26 2.46.59.59 0 0 0-.127.834l.479.641c.198.266.573.32.844.128a24 24 0 0 1 3.855-2.226.61.61 0 0 0 .31-.795zm-9.015 5.628a.59.59 0 0 1 .843-.016l.573.56c.237.23.24.61.015.853a24 24 0 0 0-2.707 3.526.61.61 0 0 1-.83.205l-.687-.409a.59.59 0 0 1-.203-.818 26 26 0 0 1 2.996-3.902m-4.552 8.296a.59.59 0 0 0-.773.338 26.3 26.3 0 0 0-1.274 4.755.59.59 0 0 0 .5.68l.792.115a.61.61 0 0 0 .688-.506 24.3 24.3 0 0 1 1.153-4.305.61.61 0 0 0-.343-.782zM4.01 30.94a.59.59 0 0 1 .586-.607l.8-.01a.61.61 0 0 1 .615.592c.056 1.496.253 2.971.582 4.408a.61.61 0 0 1-.44.731l-.776.198a.59.59 0 0 1-.723-.435 26 26 0 0 1-.644-4.877m2.344 9.87a.59.59 0 0 1 .307-.785l.735-.316a.61.61 0 0 1 .795.311 24 24 0 0 0 2.226 3.855.61.61 0 0 1-.128.844l-.641.479a.59.59 0 0 1-.834-.127 26 26 0 0 1-2.46-4.26m5.935 8.23a.59.59 0 0 1-.016-.843l.56-.573a.61.61 0 0 1 .853-.015 24 24 0 0 0 3.526 2.707c.28.177.375.544.205.83l-.409.687a.59.59 0 0 1-.818.203 26 26 0 0 1-3.902-2.996m8.634 5.325a.59.59 0 0 1-.338-.773l.295-.743a.61.61 0 0 1 .782-.343 24.3 24.3 0 0 0 4.305 1.154c.327.056.554.36.506.687l-.116.792a.59.59 0 0 1-.68.5 26.3 26.3 0 0 1-4.754-1.274m10.018 1.624a.59.59 0 0 1-.607-.586l-.01-.8a.61.61 0 0 1 .592-.615 24 24 0 0 0 4.408-.582c.323-.073.65.12.731.44l.198.776a.59.59 0 0 1-.435.723c-1.588.366-3.22.584-4.877.644m9.87-2.344a.59.59 0 0 1-.785-.307l-.316-.735a.61.61 0 0 1 .311-.795 24 24 0 0 0 3.855-2.226.61.61 0 0 1 .844.128l.479.641a.59.59 0 0 1-.127.834 26 26 0 0 1-4.26 2.46m8.23-5.934a.59.59 0 0 1-.843.015l-.573-.56a.61.61 0 0 1-.015-.853 24 24 0 0 0 2.707-3.526.61.61 0 0 1 .83-.205l.687.409a.59.59 0 0 1 .203.818 26 26 0 0 1-2.996 3.901",
        clipRule: "evenodd"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        d: "M27.11 34.339q-.695.905-1.925 1.371t-2.795.466q-1.61 0-2.848-.73-1.24-.729-1.916-2.083-.668-1.361-.694-3.173V29.19q0-2.901 1.388-4.527 1.389-1.635 3.876-1.635 2.136 0 3.393 1.055t1.512 3.041h-2.18q-.37-2.312-2.68-2.312-1.495 0-2.277 1.082-.774 1.071-.8 3.155v.984q0 2.074.87 3.226.88 1.142 2.435 1.142 1.704 0 2.425-.773v-2.505h-2.636v-1.687h4.851zM31.9 36h-2.215V23.203h2.214zm10.107-5.423h-5.15V36h-2.224V23.203h8.13v1.793h-5.907v3.806h5.15z"
      })]
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "gif_pre_loading_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M0 0h60v60H0z"
        })
      })
    })]
  });
  var N = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 60,
    height: 60,
    fill: "none",
    viewBox: "0 0 60 60",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("circle", {
      cx: 30,
      cy: 30,
      r: 30,
      fill: "#000",
      opacity: 0.4
    })
  });
  let A = () => reactJsxRuntimeCoreReexport.jsx("svg", {
    className: "circular",
    viewBox: "25 25 50 50",
    children: reactJsxRuntimeCoreReexport.jsx("circle", {
      className: "path",
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none",
      strokeWidth: "4",
      strokeMiterlimit: "10"
    })
  });
  var loadingWrapperComponent = require("loading-wrapper-component") /*id: 376931*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var useDebounceCallbackHook_1 = require("use-debounce-callback-hook_1") /*id: 682959*/;
  let F = reactCoreLibraryReexport.memo(e => {
    let {
      progress: i,
      showProgress: r = true
    } = e;
    let n = d("image-uploading-hint", {
      "image-uploading-hint-without-progress": !r
    });
    let o = Math.max(Math.floor(i * 100), 0);
    let l = d("image-uploading-progress", {
      "image-uploading-progress-center": o < 10 && o >= 0
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: n,
      children: [reactJsxRuntimeCoreReexport.jsx(loadingWrapperComponent.LoadingWrapper, {
        size: "small",
        className: "image-uploading-circle"
      }), r && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l,
        children: [o, "%"]
      })]
    });
  });
  let j = reactCoreLibraryReexport.forwardRef((e, i) => {
    let {
      className: r,
      showHint: n = true,
      hintContainerClass: o,
      progress: l,
      showProgress: s
    } = e;
    let a = d("image-uploading-mask", r);
    let c = d("image-uploading-hint-container", o);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a,
      ref: i,
      children: n && reactJsxRuntimeCoreReexport.jsx("div", {
        className: c,
        children: reactJsxRuntimeCoreReexport.jsx(F, {
          progress: l,
          showProgress: s
        })
      })
    });
  });
  let $ = reactCoreLibraryReexport.memo(e => {
    let {
      progress: i,
      className: r,
      initialWidth: n,
      initialHeight: o
    } = e;
    let s = reactCoreLibraryReexport.useRef(null);
    let [a, c] = reactCoreLibraryReexport.useState(n || 0);
    let [d, u] = reactCoreLibraryReexport.useState(o || 0);
    let h = useDebounceCallbackHook_1.useDebounceCallback(() => {
      let e = s.current;
      if (e) {
        c(e.offsetWidth);
        u(e.offsetHeight);
      }
    }, undefined, {
      leading: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = s.current;
      if (!e) {
        return;
      }
      let i = new resizeObserverPolyfill.ResizeObserver(h);
      i.observe(e);
      return () => {
        i.disconnect();
      };
    }, [s.current]);
    let f = d >= 32;
    let g = reactCoreLibraryReexport.useMemo(() => f ? function (e, i) {
      let r = [];
      if (i >= 32) {
        if (e < 42) {
          r.push("image-uploading-hint-container-horizontal-center");
        }
        if (i >= 32 && i < 44) {
          r.push("image-uploading-hint-container-vertical-center");
        }
      } else {
        r.push("image-uploading-hint-container-hidden");
      }
      return r;
    }(a, d).join(" ") : "", [f, a, d]);
    let p = a >= 81;
    return reactJsxRuntimeCoreReexport.jsx(j, {
      ref: s,
      progress: i,
      className: r,
      showHint: f,
      hintContainerClass: g,
      showProgress: p
    });
  });
  function H(e) {
    let {
      width: i,
      height: r,
      src: n,
      onClick: l,
      progress: s,
      containerStyle: a,
      imageStyle: c
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "image-mask",
      style: {
        width: i,
        paddingTop: `calc(${r} / ${i} * 100%)`,
        ...a
      },
      onClick: l,
      children: [n && reactJsxRuntimeCoreReexport.jsx("img", {
        className: "image-mask--image",
        crossOrigin: "use-credentials",
        src: xssContentSanitizer.sanitizeUrl(n, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WekZvWXpKemRX%kl%alJa$0$wd$p*aE5Q%T09"
        }),
        width: i,
        height: r,
        style: {
          width: i,
          ...c
        }
      }), s !== undefined ? reactJsxRuntimeCoreReexport.jsx($, {
        progress: s,
        initialWidth: i,
        initialHeight: r
      }) : null]
    });
  }
  var useDiContainerHook = require("use-di-container-hook") /*id: 3542*/;
  var docUiServiceSymbols = require("doc-ui-service-symbols") /*id: 452862*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let Z = e => {
    var i;
    let {
      onMount: r,
      onUnmount: n,
      width: o,
      height: s
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (r != null) {
        r();
      }
      return () => {
        if (n != null) {
          n();
        }
      };
    }, []);
    let a = useDiContainerHook.useDiContainer(docUiServiceSymbols.DocImageLoading);
    let c = (i = document.querySelector("html")) === null || i === undefined ? undefined : i.dataset.theme;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: d("container-vYsgU1", {
        "mobile-HmWg1Q": browserEnvironmentDetectionUtils.browserDetector.isMobile
      }),
      children: browserEnvironmentDetectionUtils.browserDetector.isMobile ? null : reactJsxRuntimeCoreReexport.jsx(a, {
        mode: c,
        extraLottieStyle: {
          "--video-size": "max(980px, 100%)"
        },
        width: o,
        height: s
      })
    });
  };
  function z(e) {
    if (!this.config.editable) {
      this.showPreview();
      return;
    }
    if (this.props.isSelected || this.state.isSelected) {
      this.showPreview();
    }
  }
  var ssrImageLoadStateManager = require("ssr-image-load-state-manager") /*id: 181276*/;
  var imageDiagramConstants = require("image-diagram-constants") /*id: 465867*/;
  var flowRevisionServiceName = require("flow-revision-service-name") /*id: 934786*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var blockFlashEnhancementManager = require("block-flash-enhancement-manager") /*id: 710621*/;
  var docMultiGeoIdUtil = require("doc-multi-geo-id-util") /*id: 193223*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var presentationModeProvider = require("presentation-mode-provider") /*id: 712023*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var docxRustFileOperations = require("docx-rust-file-operations") /*id: 966944*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var schedulerProvidersAccessor = require("scheduler-providers-accessor") /*id: 102884*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var appTypeConstants = require("app-type-constants") /*id: 214968*/;
  var imageViewerManagerProvider = require("image-viewer-manager-provider") /*id: 347257*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  require("empty-module-export_2") /*id: 293222*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var attachmentPermissionService = require("attachment-permission-service") /*id: 275142*/;
  var waitForSyncedCommentServiceReady = require("wait-for-synced-comment-service-ready") /*id: 592697*/;
  var commentActionTypes = require("comment-action-types") /*id: 20572*/;
  var vcOrFeishuRoomsDetector = require("vc-or-feishu-rooms-detector") /*id: 484530*/;
  var blobUrlCacheManager = require("blob-url-cache-manager") /*id: 865553*/;
  var imageManagerProviderName = require("image-manager-provider-name") /*id: 852709*/;
  var imageDataCacheStorageToken = require("image-data-cache-storage-token") /*id: 328701*/;
  var docBlockZoomUtils = require("doc-block-zoom-utils") /*id: 735944*/;
  var docxImageCaptionBlock = require("docx-image-caption-block") /*id: 134800*/;
  var docxCaptionSlotDefinition = require("docx-caption-slot-definition") /*id: 591389*/;
  var roomEventStatusConstants = require("room-event-status-constants") /*id: 871566*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docBlockAnalyticsConstants = require("doc-block-analytics-constants") /*id: 337105*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var docMultiGeoConstants = require("doc-multi-geo-constants") /*id: 254280*/;
  var urlQueryParameterManipulator = require("url-query-parameter-manipulator") /*id: 551064*/;
  var reactThemeProviderWrapper = require("react-theme-provider-wrapper") /*id: 805172*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var blobUrlUtils = require("blob-url-utils") /*id: 334362*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var layoutConstants = require("layout-constants") /*id: 773631*/;
  var layoutResizableConstants = require("layout-resizable-constants") /*id: 216694*/;
  var resizableDraggableWrapper_1 = require("resizable-draggable-wrapper_1") /*id: 218659*/;
  var eF = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 40,
    height: 40,
    fill: "currentColor",
    viewBox: "0 0 40 40",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M23.586 35.833a1.72 1.72 0 0 1-1.175-.45q-.49-.45-.614-1.14-.473-2.663-.964-4.478-.49-1.797-1.21-2.939a5.45 5.45 0 0 0-1.841-1.832q-1.14-.692-2.911-1.107-1.755-.414-4.366-.795-.72-.104-1.193-.605a1.71 1.71 0 0 1-.456-1.193q0-.69.474-1.193a1.86 1.86 0 0 1 1.192-.605q2.613-.294 4.402-.691 1.788-.397 2.945-1.09a5.66 5.66 0 0 0 1.877-1.867q.735-1.175 1.192-2.99.456-1.833.86-4.495.105-.71.596-1.141.508-.45 1.192-.45t1.175.45q.509.432.631 1.14.473 2.663.947 4.478.49 1.799 1.21 2.94a5.6 5.6 0 0 0 1.859 1.832q1.14.691 2.893 1.106 1.77.415 4.366.778.737.12 1.193.623.474.501.473 1.175 0 .71-.473 1.228-.475.501-1.21.57-2.595.294-4.384.709-1.788.398-2.963 1.089a5.45 5.45 0 0 0-1.877 1.867q-.718 1.175-1.175 2.99-.455 1.833-.859 4.496-.105.69-.614 1.14-.49.45-1.192.45M10.611 15.131q-.877 0-.982-.9-.21-1.659-.421-2.61-.21-.95-.702-1.435-.49-.501-1.473-.743-.981-.243-2.735-.484-.965-.139-.965-.968 0-.83.86-.969 1.788-.31 2.805-.57t1.508-.726q.491-.485.702-1.4.21-.935.42-2.576.106-.917.982-.917.86 0 .982.882.21 1.73.421 2.697.228.968.72 1.452.49.467 1.49.692t2.77.466a.957.957 0 0 1 .877.968q0 .813-.841.969-1.807.294-2.824.57-1 .259-1.49.744-.491.465-.702 1.4t-.42 2.593a.97.97 0 0 1-.334.622.96.96 0 0 1-.649.242"
    })
  });
  var ej = require.p + "static/image/doc_summary_loading.9abf840f.webp";
  var e$ = {
    container: "container-DIMIce",
    "container-content": "container-content-MkvMYF",
    containerContent: "container-content-MkvMYF",
    "container-text": "container-text-MUNTVv",
    containerText: "container-text-MUNTVv"
  };
  function eH(e) {
    let {
      displayLoadingText: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: e$.container,
      children: [reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(ej, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9Xc*lNak-zWWpJMWJHSn$$bnBNTWtwellqSk9ja3hZ%W5OWl-wNXNZ$WM1-zFwSFZubE1Naz%yWWxoQ2RtSnRWblZr%XpscllqSk5kR016$m5Sa$-wWj$a$k14ZDJKSFJtc*FWMmgyWWtk%2JHTnBPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: e$["container-content"],
        children: [reactJsxRuntimeCoreReexport.jsx(eF, {
          className: e$["container-icon"]
        }), reactJsxRuntimeCoreReexport.jsx("p", {
          className: e$["container-text"],
          children: i || t("doc_canvas_status_overview_generatingTime")
        })]
      })]
    });
  }
  var docxBlockLoading = require("docx-block-loading") /*id: 973751*/;
  var docxSignalSubjectRegistry = require("docx-signal-subject-registry") /*id: 272418*/;
  function eV(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let eZ = reactThemeProviderWrapper.withThemeProvider(themeAwareLogoComponent.ThemeAwareLogo);
  (n = ez || {}).Initial = "Initial";
  n.GifLoading = "GifLoading";
  n.Finished = "Finished";
  var ez = n;
  let eK = "docx-image";
  class eX extends docxImageCaptionBlock.DocxImageCaptionBlock {
    async reLoadImageType() {
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        return;
      }
      let {
        loadImageType: e
      } = await require.e("utils-load-imagetype") /*id: 56434*/.then(require.bind(require, "load-image-type-utility") /*id: 485138*/);
      await e(this);
    }
    get currentImageSrc() {
      return this.state.src;
    }
    get ssrImagePlaceholder() {
      if (this.props.recursionProps.isSSR || !this.isHydrateUrl || this.state.loadEnd || this.state.isError) {
        return null;
      }
      if (!this._ssrImageComponent) {
        let e = this.blockManager.editorAPI.getService(schedulerProvidersAccessor.blockSchedulerProv);
        let i = e == null ? undefined : e.getSSRContent(this.struct);
        if (i == null ? undefined : i.ssrData) {
          try {
            let e = new DOMParser().parseFromString(i.ssrData, "text/html").querySelector(".img");
            if (e) {
              this._ssrImageComponent = reactJsxRuntimeCoreReexport.jsx("div", {
                className: e.classList.toString(),
                dangerouslySetInnerHTML: {
                  __html: xssContentSanitizer.sanitizeHtml(e.innerHTML, null, {
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
                  })
                }
              });
            }
          } catch (e) {}
        }
      }
      return this._ssrImageComponent;
    }
    get imageDataCacheStorage() {
      return this.editorAPI.getService(imageDataCacheStorageToken.imageDataCacheToken);
    }
    get attachmentPermissionService() {
      return this.editorAPI.getService(attachmentPermissionService.attachmentPermSvc);
    }
    get flowRevisionService() {
      return this.editorAPI.getService(flowRevisionServiceName.revisionServiceName);
    }
    get activeCommentService() {
      return waitForSyncedCommentServiceReady.waitForSyncedCommentServiceReady(this.blockManager);
    }
    get isHadPlayed() {
      return this.imageManager.isGifHadPlayed(this.record.id);
    }
    get contentElement() {
      return this.contentRef.current;
    }
    get isBlockRendered() {
      return this.state.isBlockReady || this.shouldForbidPreview || this.state.dlpErrorType;
    }
    get isCropped() {
      return docxEditorPaddingUtils.isPaddingPartial(this.snapshot.image.crop) && !this.state.cropping;
    }
    get isDocSummary() {
      return this.snapshot.image.imageType === "doc_summary";
    }
    onReceiveResourceUpdateEvent(e) {
      var i;
      let {
        token: r,
        resource_key: n,
        resource_status: o
      } = e;
      if (r === this.blockManager.editorAPI.config.get("token") && n === this.snapshot.image.token) {
        if (o === roomEventStatusConstants.generationStatus.SUCCESS) {
          this.loadImage(true);
        } else {
          this.handleImageError(Error("generate image failed"));
        }
        if ((i = this._resourceUpdateSubscription) !== null && i !== undefined) {
          i.unsubscribe();
        }
      }
    }
    subscribeResourceUpdateEvent() {
      if (this._resourceUpdateSubscription) {
        return;
      }
      let e = this.blockManager.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      });
      if (e) {
        this._resourceUpdateSubscription = e == null ? undefined : e.signalService.resourceUpdateSignal.subscribe(this.onReceiveResourceUpdateEvent.bind(this));
      }
    }
    unSubscribeResourceUpdateEvent() {
      var e;
      if ((e = this._resourceUpdateSubscription) !== null && e !== undefined) {
        e.unsubscribe();
      }
      this._resourceUpdateSubscription = null;
    }
    getContainerWidth() {
      if (this.hostElement) {
        return this.hostElement.clientWidth;
      } else {
        return docxEditorConstants.maxEditorWidth;
      }
    }
    isFirstScreenImage() {
      return !!this.ssrImageRecords.find(e => {
        let {
          recordId: i
        } = e;
        return this.record.id === i;
      });
    }
    setAuthReady() {
      if (!this.state.authReady) {
        this.setState({
          authReady: true
        });
      }
    }
    getImageProfile(e) {
      let {
        token: i,
        mimeType: r,
        size: n,
        width: o,
        height: l
      } = this.snapshot.image;
      let {
        src: a,
        containerWidth: c
      } = this.state;
      let {
        width: d,
        height: u
      } = dimensionResizeUtil.constrainWidth(this.getImageSize(), c);
      let {
        request_cdn_start: h,
        request_cdn_end: f,
        decrypt_cdn_start: p,
        decrypt_cdn_end: m
      } = this.collector.collectedInfo;
      let v = this.ssrImageRecords.find(e => {
        let {
          recordId: i
        } = e;
        return this.record.id === i;
      });
      return {
        image_token: platformDocUtils.p5T(i),
        image_type: r,
        image_size: n,
        image_origin_width: o,
        image_origin_height: l,
        image_show_width: d,
        image_show_length: u,
        image_in_same_viewport_cnt: v ? this.ssrImageRecords.length : this.getImageCountInSameViewport(),
        is_from_cache: +!!e,
        resource: blobUrlUtils.isBlobUrl(a) && !isUndefinedCheck.isUndefined(p) ? 1 : 0,
        request_cdn_start: h,
        request_cdn_end: f,
        decrypt_cdn_start: p,
        decrypt_cdn_end: m,
        is_in_ssr: +!!v,
        need_render_loading: +!!this.needRenderLoading,
        need_render_loading_in_node: +(v != null && !!v.needRenderLoading),
        fetcher: this.imageManager.profile()
      };
    }
    setContainerWidth() {
      let e = this.getContainerWidth();
      if (e !== this.state.containerWidth) {
        this.setState({
          containerWidth: e
        });
      }
    }
    initDataInOpendoc(e) {
      this.beginLoadImage = true;
      (window.opendocSSRImage && window.opendocSSRImage[e] ? window.opendocSSRImage[e] : this.getBloBSrc(e)).then(e => e && this.setState({
        src: xssContentSanitizer.sanitizeUrl(e, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
        }),
        isBlockReady: true
      })).catch(this.handleImageError);
    }
    async getBloBSrc(e) {
      if (!opendocImageViewerUtils.isOpendoc || blobUrlUtils.isBlobUrl(e)) {
        return e;
      } else {
        return await blobUrlUtils.getAbsoluteUrl(e);
      }
    }
    get borderColor() {
      let {
        syncCursorSelected: e,
        syncCursorBorderColor: i
      } = this.props;
      let {
        isSelected: r
      } = this.state;
      if (!r && e) {
        return i;
      } else {
        return undefined;
      }
    }
    get isGifMimeType() {
      return docxImageUrlUtils.isGifImage(this.snapshot.image.mimeType);
    }
    get isBigGif() {
      return docxImageUrlUtils.isLargeGif(this.snapshot.image);
    }
    isLoadSuccess() {
      let {
        loadEnd: e,
        isError: i
      } = this.state;
      return e && !i;
    }
    isVisible() {
      return !this.props.recursionProps.isSSR && (!this.isHydrateUrl || !this.hydrateUrl || !!this.isLoadSuccess() || (!this.isHydrateUrl || this.state.src !== this.hydrateUrl) && !this.needRenderLoading);
    }
    onOrientationChange() {
      this.forceUpdate();
    }
    get isUploading() {
      return this.state.progress >= 0 && this.state.progress < 1;
    }
    initBigGifLoadingStatus(e) {
      if (e && e.isHD) {
        this.loadOriginalBigGif();
      }
    }
    attachBlockView() {
      let {
        width: e,
        height: i,
        mimeType: r,
        size: n
      } = this.snapshot.image;
      let o = this.imageManager.add(this.record.id, {
        url: this.state.src,
        isHD: docxImageUrlUtils.shouldUseOriginalImage({
          width: e,
          height: i,
          mimeType: r,
          size: n
        })
      });
      if (this.uploadFromLocal) {
        let e = this.imageDataCacheStorage.getValueOfKey(this.record.id);
        if (e) {
          this.setUploadBackground(e);
        }
      }
      if (this.isBigGif) {
        this.initBigGifLoadingStatus(o);
      }
      Promise.resolve().then(() => {
        this.setContainerWidth();
        this.setState({
          isContainerRendered: true
        });
      });
      this.subs.push(this.blockManager.dataService.beforeChange$.subscribe(this.handleBeforeRecordChange));
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      this.attachBlockView();
      this.onCroppingChange();
      this.preloadImageViewer();
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        docxEditorEventConstantsAndManager.globalEventEmitter.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.START_TAKE_SCREENSHOT, this.handleStartTakeSnapshotInMobile);
        docxEditorEventConstantsAndManager.globalEventEmitter.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.FINISH_TAKE_SCREENSHOT, this.handleFinishTakeSnapshotInMobile);
      }
      let e = this.props.editorAPI.getService(lazyRecordStatusToken.lazyRecordStatus, {
        optional: true
      });
      if (e) {
        this.subs.push(e.allowEdit$.subscribe(this.handleCheckAttachmentPermission));
      } else {
        this.handleCheckAttachmentPermission();
      }
      this.reLoadImageType();
      if (!this.props.recursionProps.isSSR) {
        this.tokenCheckTimer = setTimeout(() => {
          if (this.snapshot.image.token === "") {
            this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
              action: "image_token_empty",
              info: JSON.stringify({
                id: docxUtilityHelpers.maskSensitiveData(this.record.id)
              })
            });
          }
        }, 5000);
      }
      this.activeCommentService.then(e => {
        e.on(commentActionTypes.CommentActionTypes.ACTIVATE_COMMENT, this.handleActivateComment);
      });
    }
    async detachBlockView() {
      if (this.isUpdateByRemote) {
        await this.exitImageCropIfNeeded();
      }
      this.imageManager.delete(this.getImageInfo(), this.record.id, this.id);
    }
    onFoldStateChange(e, i) {
      if (!e.show) {
        this.exitImageCropIfNeeded(!i);
      }
    }
    blockViewWillUnmount() {
      this._ssrImageComponent = null;
      if (this.props.recursionProps.isPresentationMode) {
        docxEditorCore.onServiceReady(this.blockManager.editorAPI, imageViewerManagerProvider.imageViewerManager, e => {
          e.closeImageViewer({
            from: imageDiagramConstants.imageEditModes.Unmount
          });
        });
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.START_TAKE_SCREENSHOT, this.handleStartTakeSnapshotInMobile);
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.FINISH_TAKE_SCREENSHOT, this.handleFinishTakeSnapshotInMobile);
      }
      this.subs.forEach(e => e.unsubscribe());
      clearTimeout(this.tokenCheckTimer);
      this.detachBlockView();
      this.unSubscribeResourceUpdateEvent();
      this.activeCommentService.then(e => {
        e.off(commentActionTypes.CommentActionTypes.ACTIVATE_COMMENT, this.handleActivateComment);
      });
      super.blockViewWillUnmount();
    }
    componentWillUpdate(e) {
      let i = e.record.snapshot.image.token;
      if (i !== this.token) {
        this.handleCheckAttachmentPermission();
        this.exitImageCropIfNeeded(true);
        if (this.state.maskSrc) {
          this.state.src = xssContentSanitizer.sanitizeUrl(this.state.maskSrc, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
          });
          this.state.srcType = 1;
          this.state.maskSrc = "";
          this.state.bigGifLoadingStatus = ez.Finished;
          this.updateImageCache({
            url: this.state.maskSrc,
            isHD: !docxImageUrlUtils.isImageStreamUrl(this.state.maskSrc)
          });
          return;
        }
        this.getDefaultUrl().then(e => {
          this.hasRetryOriginalImage = false;
          this.state.srcType = 1;
          this.markPlayed();
          this.state.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
          });
          this.reLoadImageType();
        });
      }
      if (docxFeatureFlags.isDsEnabled()) {
        if (e.previewable !== this.props.previewable || e.previewResultCode !== this.props.previewResultCode) {
          if (!e.previewable && e.previewResultCode === docMultiGeoConstants.multiGeoDocId && i) {
            this.attachmentPermissionService.setDLPUploadCheckCallback(i, this.handleDLPUploadCheckCallback);
            this.state.dlpErrorType = platformDocUtils.SVk.CHECKING;
            this.handleDeleteImageCache();
          } else if (!e.previewable && e.previewResultCode === docMultiGeoConstants.multiGeoModeId && i) {
            this.state.dlpErrorType = platformDocUtils.SVk.DELETED;
            this.handleDeleteImageCache();
          } else if (e.previewable && !this.props.previewable) {
            this.state.dlpErrorType = null;
            this.retryOriginalImage();
          }
        }
      } else if (docxFeatureFlags.isDlpUploadEnabled() && !this.state.dlpErrorType && this.state.maskSrc && i !== this.token) {
        this.handleDeleteImageCache();
        this.checkImageDlpPermission(i);
      }
      this.token = e.record.snapshot.image.token;
    }
    onBufferEnter() {
      if (!this.state.containerWidth) {
        this.setContainerWidth();
      }
    }
    blockViewDidUpdate(e, i) {
      super.blockViewDidUpdate(e, i);
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && !this.state.isBlockReady && this.snapshot.image.token) {
        let e = this.editorAPI.getService(docxSignalSubjectRegistry.docxSignalService, {
          optional: true
        });
        if (e != null) {
          e.mobileImageAddSignal.next();
        }
      }
      this.setContainerWidth();
    }
    async checkAndLoadCropController() {
      this.imageCropController ||= await this.blockManager.editorAPI.getService(imageCropControllerToken_1.imageCropCtrlToken, {
        async: true,
        dynamic: true
      });
    }
    async checkImageDlpPermission(e) {
      let {
        src: i
      } = await this.getOriginalImageInfo(false);
      let r = await this.attachmentPermissionService.fetchSrcCodeResult(i);
      if (r) {
        this.attachmentPermissionService.setDLPUploadCheckCallback(e, this.handleDLPUploadCheckCallback);
        if (r === platformDocUtils.SVk.CHECKING) {
          this.handleDeleteImageCache(i);
        }
        this.setState({
          dlpErrorType: r
        });
      }
    }
    async exitImageCropIfNeeded() {
      var e;
      let i = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      if (this.state.cropping) {
        await this.checkAndLoadCropController();
        if ((e = this.imageCropController) !== null && e !== undefined) {
          e.exitCrop();
        }
        if (i) {
          toastNotificationManager_1.toastManager.show({
            type: "info",
            content: t("LarkCCM_Docx_Image_CollabEdited_Toast"),
            closeable: false,
            duration: 2000
          });
        }
      }
    }
    async getOriginalImageInfo(e) {
      let i = this.getImageInfo();
      return await this.fetchImagePromise(i);
    }
    setSelected(e) {
      this.setState({
        isSelected: e
      });
    }
    markPlayed() {
      this.imageManager.addHadPlayedGif(this.record.id);
    }
    async setUploadBackground(e) {
      let i = await this.getBloBSrc(e);
      this.markPlayed();
      this.setState({
        maskSrc: i
      }, () => {
        this.reLoadImageType();
      });
    }
    updateOnlineStatus(e) {
      if (this.state.isOnline !== e) {
        this.setState({
          isOnline: e
        });
      }
    }
    showPreview() {
      docxEditorCore.onServiceReady(this.blockManager.editorAPI, imageViewerManagerProvider.imageViewerManager, e => {
        e.openImageViewer({
          type: appTypeConstants.getAppTypes.IMAGE,
          payload: {
            block: this
          }
        });
      });
    }
    async shouldReplaceImageBlobUrl() {
      let {
        mimeType: e,
        token: i
      } = this.snapshot.image;
      let r = blockSettingResolver.getBlockSetting(this.model.type, this.blockManager, "getViewSnapshot");
      if (blobUrlCacheManager.isCacheable({
        mimeType: e
      }) && !blobUrlCacheManager.BlobUrlCacheManager.getBlobURL(i) && (r == null ? undefined : r({
        blockView: this
      }))) {
        return await this.getDefaultUrl();
      }
    }
    setUploadProgress(e) {
      this.setState({
        progress: e
      });
    }
    changeAlign(e) {
      if (this.snapshot.align !== e) {
        this.model.applyTransaction("imageChangeAlign", i => {
          i.replace(this.record.id, ["align"], e);
        });
      }
    }
    getImageCountInSameViewport() {
      let {
        layoutManager: i
      } = this.blockManager;
      return [...(i == null ? undefined : i.getViewportBlocks()), ...(i == null ? undefined : i.getBufferBlocks())].filter(e => {
        return this.blockManager.getBlockModelByBlockId(e)?.type === docBlockTypeConstants.blockTypeConstants.IMAGE;
      })?.length || 0;
    }
    async reportImageErrorMessage() {
      let e = this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName);
      try {
        await apiClientInstance.apiClient({
          url: this.state.src
        });
        e.collectEvent("doc_bug_track_dev", {
          action: "image_load_failed",
          info: JSON.stringify({
            message: "",
            retrySuccessfully: 1
          })
        });
        return null;
      } catch (i) {
        e.collectEvent("doc_bug_track_dev", {
          action: "image_load_failed",
          info: JSON.stringify({
            message: i instanceof Error ? i.message : i
          })
        });
        return i;
      }
    }
    getImageSize() {
      let {
        tempImageInfo: e
      } = this.state;
      let {
        image: i
      } = this.snapshot;
      let {
        scale: r
      } = i;
      if (e) {
        return {
          width: e.width * r,
          height: e.height * r
        };
      }
      let {
        width: n,
        height: o
      } = i;
      let {
        loadingSize: l
      } = this.state;
      if (l && l.height && l.width) {
        n = l.width;
        o = l.height;
      }
      if (this.state.resize) {
        let e = this.state.resize.scale;
        return {
          width: n * e,
          height: o * e
        };
      }
      let s = docxEditorImageCropUtils.calculateCroppedWidth(n * r, i.crop);
      if (s === 0) {
        return {
          width: n,
          height: o
        };
      }
      let a = docxEditorConstants.editorMinSize / s;
      if (a > 1 && this.config.editable) {
        let e = r * a || docxEditorConstants.editorFlag;
        this.model.applyTransaction("smallImageInitSize", i => {
          i.replace(this.record.id, ["image", "scale"], e);
        });
        return {
          width: n * e,
          height: o * e
        };
      }
      return {
        width: n * r,
        height: o * r
      };
    }
    getImageInfo(e = false) {
      let {
        token: i,
        width: r,
        height: n,
        mimeType: o,
        scale: l,
        size: s
      } = this.snapshot.image;
      let {
        bigGifLoadingStatus: a
      } = this.state;
      let c = docxImageUrlUtils.shouldUseOriginalImage({
        width: r,
        height: n,
        mimeType: o,
        size: s
      }) || this.isBigGif && a === ez.Finished;
      let d = {
        uuid: this.record.id,
        token: i,
        isHD: c,
        width: r,
        height: n,
        scale: l,
        mimeType: o
      };
      if (e) {
        Object.assign(d, {
          fuzzy: {
            width: 360,
            height: 360
          }
        });
      }
      return d;
    }
    fetchImage(e, i, r = emptyExportFunction.emptyFunction) {
      this.collector.logLoadImageStart();
      blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.DATA_LOAD_START, {
        id: this.model.id,
        time: new Date().getTime()
      });
      this.imageManager.fetch(e, {}, n => {
        this.collector.logCdnFetchStatus(n.fetchCdnLogStatus);
        this.collector.logLoadImageEnd();
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.DATA_READY, {
          id: this.model.id,
          time: new Date().getTime()
        });
        this.isCollectDisplayEventNeedless = !!n.isFromCache;
        if (n.src && this.state.src !== n.src) {
          if (!this.isGifMimeType || e.isHD) {
            this.updateImageCache({
              url: n.src,
              isHD: e.isHD
            });
            this.markPlayed();
          }
          this.setState({
            src: xssContentSanitizer.sanitizeUrl(n.src, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
            }),
            originSrc: n.originSrc,
            srcType: +!!e.isHD
          }, r);
        } else {
          r();
        }
        if (i != null) {
          i(n);
        }
      });
    }
    fetchImagePromise(e, i, r = emptyExportFunction.emptyFunction) {
      return new Promise((n, o) => {
        this.fetchImage(e, e => {
          if (e.src) {
            n(e);
            if (i != null) {
              i(e);
            }
          } else {
            o(Error("load remote image Error"));
          }
        }, r);
      });
    }
    setExternalImageState(e, i) {
      this.setState({
        src: xssContentSanitizer.sanitizeUrl(i.isSuccess ? e : "", null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
        }),
        loadingSize: i.imageSize,
        showExternalMask: i.isSuccess
      });
    }
    loadImage(e = false) {
      return new Promise(i => {
        let {
          token: r
        } = this.snapshot.image;
        let {
          maskSrc: n,
          src: o
        } = this.state;
        let l = this.getImageInfo();
        let s = (!!this.isHydrateUrl || !blobUrlCacheManager.isCacheable(l) || !r || !!blobUrlCacheManager.BlobUrlCacheManager.getBlobURL(r)) && (!r || n && !e || o);
        if (s || this.beginLoadImage) {
          if (!s) {
            this.imageManager.buzz(l, 2);
          }
          return i();
        }
        this.beginLoadImage = true;
        this.collector.logDisplayImageStart();
        this.collector.logDisplayBase({
          mime_type: this.snapshot.image.mimeType,
          origin_size: this.snapshot.image.size,
          page_token: platformDocUtils.p5T(this.blockManager.rootRecordId)
        });
        let a = "";
        let c = 1;
        let d = () => {
          this.fetchImage(l, e => {
            a = e.src;
            if (this.isGifMimeType && e.extra?.cover) {
              this.imageManager.setGifCoverUrlCache(this.record.id, e.extra.cover);
            }
            if (a || c < 1) {
              if (!a) {
                this.beginLoadImage = false;
              }
              i();
              return;
            }
            setTimeout(() => {
              if (c > 0) {
                c--;
                d();
              }
            }, 1000);
          });
        };
        d();
      });
    }
    loadOriginalBigGif() {
      let e = this.getImageInfo();
      Object.assign(e, {
        isHD: true
      });
      this.collector.logPlayBigGif(this.snapshot.image.token, this.record.id);
      this.setState({
        bigGifLoadingStatus: ez.GifLoading
      });
      this.fetchImage(e, e => {
        this.updateImageCache({
          url: e.src,
          isHD: true
        });
        this.setState({
          bigGifLoadingStatus: ez.Finished
        });
      });
    }
    async showOriginalGif() {
      this.isCollectDisplayEventNeedless = true;
      let {
        bigGifLoadingStatus: e
      } = this.state;
      if (this.isBigGif && e !== ez.Finished) {
        return;
      }
      let i = this.imageManager.getImageInfo(this.record.id).url;
      if (i) {
        i = await this.getBloBSrc(i);
        this.gifCoverPending = false;
        this.setState({
          src: xssContentSanitizer.sanitizeUrl(i, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
          }),
          srcType: 1
        });
        this.markPlayed();
      }
    }
    showCoverGif() {
      this.isCollectDisplayEventNeedless = true;
      let {
        src: e,
        bigGifLoadingStatus: i
      } = this.state;
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp || !e || this.isBigGif && i !== ez.Finished || this.gifCoverLoadFailed) {
        return;
      }
      let r = this.imageManager.getGifCoverUrlCache(this.record.id);
      if (r) {
        this.setState({
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
          }),
          srcType: 0
        });
        return;
      }
      this.gifCoverPending = true;
      let n = this.getImageInfo();
      this.fetchImage(n, e => {
        (() => {
          if (!this.isGifMimeType) {
            return;
          }
          let r = e.extra?.cover;
          let n = e.src;
          if (!r) {
            this.gifCoverLoadFailed = true;
            return;
          }
          if (n) {
            this.updateImageCache({
              url: n,
              isHD: true
            });
            this.imageManager.setGifCoverUrlCache(this.record.id, r);
            if (this.gifCoverPending) {
              this.setState({
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
                }),
                srcType: 0
              });
            }
          }
        })();
        this.gifCoverPending = false;
      });
    }
    updateImageCache(e) {
      this.imageManager.update(this.record.id, e);
    }
    renderErrorPlaceholderText() {
      let {
        isOnline: e,
        fileNotFound: i
      } = this.state;
      if (i) {
        return reactJsxRuntimeCoreReexport.jsx("p", {
          children: t("LarkCCM_Docs_DLP_FileNotExist_Desc")
        });
      } else if (e) {
        return reactJsxRuntimeCoreReexport.jsxs("p", {
          children: [t("CreationDoc_DocX_Block_Load_Fail"), reactJsxRuntimeCoreReexport.jsx("button", {
            type: "button",
            onClick: e => {
              e.stopPropagation();
              this.handleClickErrorPlaceholder();
            },
            className: "retry-btn",
            children: t("CreationDoc_Docs_TwoWayLinks_LoadingError_Toast12")
          })]
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsxs("p", {
          children: [t("CreationDoc_DocX_Block_Load_Fail"), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "retry-btn",
            children: t("CreationDoc_Docs_TwoWayLinks_LoadingError_Toast12")
          })]
        });
      }
    }
    renderMobileErrorPlaceholderText() {
      let {
        fileNotFound: e
      } = this.state;
      if (e) {
        return reactJsxRuntimeCoreReexport.jsx("p", {
          children: t("LarkCCM_Docs_DLP_FileNotExist_Desc")
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("p", {
          onClick: e => {
            e.stopPropagation();
            this.handleClickErrorPlaceholder();
          },
          children: t("aiDoc_viewFailed_errorMsg")
        });
      }
    }
    renderErrorPlaceholder() {
      let {
        isSelected: e,
        isOnline: i,
        isError: r,
        cropping: n,
        fileNotFound: o
      } = this.state;
      let l = this.getErrorTextVisibility();
      let s = this.getErrorComponent();
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: d("image-block-error", {
            selected: e && !n
          }),
          style: {
            cursor: !l && i && r && !o ? "pointer" : "initial"
          },
          onClick: this.handleClickErrorPlaceholder,
          draggable: "false",
          contentEditable: false,
          children: s || reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "image-block-error-content docx-retry-content",
            children: [reactJsxRuntimeCoreReexport.jsx(P, {
              className: l ? "has-text" : ""
            }), l && this.renderMobileErrorPlaceholderText()]
          })
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: d("image-block-error", {
            selected: e && !n
          }),
          style: {
            cursor: !l && i && r && !o ? "pointer" : "initial"
          },
          onClick: this.handleClickErrorPlaceholder,
          draggable: "false",
          contentEditable: false,
          children: s || reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "image-block-error-content docx-retry-content",
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              children: reactJsxRuntimeCoreReexport.jsx(eZ, {
                style: {
                  maxHeight: "88px",
                  maxWidth: "88px"
                }
              })
            }), l && this.renderErrorPlaceholderText()]
          })
        });
      }
    }
    renderLoadingPlaceholder() {
      let {
        fuzzySrc: e,
        isFuzzyError: i
      } = this.state;
      this.needRenderLoading = true;
      let r = this.getImageSize();
      let n = 1;
      if (!this.snapshot.image.token) {
        let e = dimensionResizeUtil.constrainWidth(r, this.state.containerWidth);
        let i = this.props.recursionProps.isPresentationMode ? docBlockZoomUtils.getDefaultLineHeight() : 1;
        n = docxEditorScaleUtil.getEditorScale(e, i);
      }
      if (this.isDocSummary) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: "loading-placeholder-wrapper",
          children: reactJsxRuntimeCoreReexport.jsx(docxBlockLoading.DocxBlockLoading, {
            displayMode: docBlockTypeConstants.blockDisplayConstants.BLOCK,
            loadingIconScale: n,
            customPlaceholder: reactJsxRuntimeCoreReexport.jsx(eH, {
              displayLoadingText: this.snapshot.image.token ? t("doc_canvas_status_overview_loading") : t("doc_canvas_status_overview_generatingTime")
            })
          })
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: "loading-placeholder-wrapper",
          children: this.snapshot.image.token ? !e || i || this.shouldForbidPreview || this.shouldForbidExport ? null : reactJsxRuntimeCoreReexport.jsx("div", {
            className: `
                img
                ${this.isCropped ? "crop-container" : ""}
              `,
            children: reactJsxRuntimeCoreReexport.jsx("img", {
              alt: this.getAltText(),
              draggable: "false",
              src: xssContentSanitizer.sanitizeUrl(e, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
              }),
              crossOrigin: "use-credentials",
              style: docxEditorImageCropUtils.calculateCropTransformStyle(this.snapshot.image, this.state.cropping),
              width: r.width,
              height: r.height,
              onLoad: () => {
                blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.TTV, {
                  id: this.model.id,
                  time: new Date().getTime()
                });
              },
              onError: () => {
                this.setState({
                  isFuzzyError: true
                });
              }
            })
          }) : reactJsxRuntimeCoreReexport.jsx(docxBlockLoading.DocxBlockLoading, {
            displayMode: docBlockTypeConstants.blockDisplayConstants.BLOCK,
            loadingIconScale: n
          })
        });
      }
    }
    renderExternalMask() {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "external-placeholder-wrapper",
        children: reactJsxRuntimeCoreReexport.jsx(A, {})
      });
    }
    hideExternalMask() {
      this.setState({
        showExternalMask: false
      });
    }
    getImageLoadPerformance(e) {
      if (!this.imagePerformance) {
        let {
          token: e
        } = this.snapshot.image;
        this.imagePerformance = window.performance.getEntries().filter(i => (i == null ? undefined : i.initiatorType) === "img" && i.name.includes(e)).pop();
      }
      return Math.floor(this.imagePerformance?.[e] + window.performance.timeOrigin);
    }
    renderGifLoading() {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "gif-loading-wrapper",
        onClick: this.onClickLoading,
        children: [reactJsxRuntimeCoreReexport.jsx(N, {
          className: "gif-loading-bg"
        }), this.state.bigGifLoadingStatus === ez.GifLoading ? reactJsxRuntimeCoreReexport.jsx(A, {}) : reactJsxRuntimeCoreReexport.jsx(L, {})]
      });
    }
    toggleLoadingGradient(e) {
      this.setState({
        isAIGenerating: !!e
      });
    }
    getIsAIGenerating() {
      return this.state.isAIGenerating;
    }
    renderLoadingGradient() {
      var e;
      let i = (e = this.hostElement) === null || e === undefined ? undefined : e.querySelector(`.${this.CONTAINER_CLASS}`);
      if (i) {
        return reactJsxRuntimeCoreReexport.jsx(Z, {
          width: i.clientWidth,
          height: i.clientHeight,
          onMount: () => {
            var e;
            if ((e = this.blockManager.events) !== null && e !== undefined) {
              e.emit("behavior.image-loading-start");
            }
          },
          onUnmount: () => {
            var e;
            if ((e = this.blockManager.events) !== null && e !== undefined) {
              e.emit("behavior.image-loading-finished");
            }
          }
        });
      } else {
        return null;
      }
    }
    renderImage(e, i = this.getImageSize(), r = false) {
      let {
        recursionProps: n
      } = this.props;
      let {
        bigGifLoadingStatus: l,
        isSelected: s,
        cropping: a
      } = this.state;
      let {
        isGifMimeType: c
      } = this;
      let u = d(eK, docxDragDropConstants.dragClassName, {
        success: this.isLoadSuccess(),
        invisible: !this.isVisible(),
        is_h5: browserEnvironmentDetectionUtils.browserDetector.isH5
      });
      let h = (() => {
        let e = this.state.srcType === 0;
        return !!c && !!e && (vcOrFeishuRoomsDetector.isInVcOrFeishuRooms() ? !this.isHadPlayed : !!this.isBigGif && l !== ez.Finished);
      })();
      return reactJsxRuntimeCoreReexport.jsxs(resizableDraggableWrapper_1.ResizableDraggable, {
        type: layoutConstants.scaleModes.Proportional,
        sensitivity: 1,
        onResizeStart: this.handleResizeStart,
        onResizeUpdate: this.handleResizeUpdate,
        onResizeEnd: this.handleResizeEnd,
        editable: this.config.editable && !a,
        blockId: this.id,
        contentFirst: true,
        selectionAPI: this.selectionAPI,
        children: [h && this.renderGifLoading(), this.ssrImagePlaceholder, reactJsxRuntimeCoreReexport.jsxs("div", {
          className: d("img", {
            highlight: s && !a,
            loading: r,
            ssr: n.isSSR,
            "crop-container": this.isCropped
          }),
          style: {
            borderColor: this.borderColor
          },
          onClick: this.handleClickImage,
          children: [!this.props.export && browserEnvironmentDetectionUtils.browserDetector.isH5 && reactJsxRuntimeCoreReexport.jsx("canvas", {
            className: "mask-canvas",
            width: i.width,
            height: i.height
          }), reactJsxRuntimeCoreReexport.jsx("img", {
            alt: this.getAltText(),
            ref: this.contentRef,
            draggable: "false",
            src: xssContentSanitizer.sanitizeUrl(e, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
            }),
            style: docxEditorImageCropUtils.calculateCropTransformStyle(this.snapshot.image, a),
            className: u,
            width: i.width,
            height: i.height,
            onLoadStart: () => this.setState({
              loadEnd: false
            }),
            onLoad: () => {
              this.setState({
                loadEnd: true
              });
              this.notifyRenderFinish();
              window.URL.revokeObjectURL(this.state.fuzzySrc);
            },
            onError: this.handleImageError
          })]
        })]
      });
    }
    get uploadFromLocal() {
      return !this.props.recursionProps.isHistory && !this.snapshot.image.token && this.imageDataCacheStorage.hasKey(this.record.id);
    }
    get isAttachmentPermissionReady() {
      return this.attachmentPermissionService.getAttachmentPermissionReady(this.snapshot.image.token);
    }
    get shouldForbidPreview() {
      if (docxOfflineImageFlags.isImageShowEnabled && offlineStatusSelectorsUtils.isDocxOfflineDisabled() && !offlineStatusSelectorsUtils.isOfflineAuthEnabled()) {
        return false;
      }
      let {
        previewable: e
      } = this.props;
      return this.model.snapshot.image.token && this.isAttachmentPermissionReady && !e;
    }
    get shouldRetryByPermission() {
      let {
        retryable: e
      } = this.props;
      return this.model.snapshot.image.token && this.isAttachmentPermissionReady && e;
    }
    get shouldForbidPreviewByDLP() {
      let {
        previewResultCode: e
      } = this.props;
      return e === docMultiGeoConstants.multiGeoDocId;
    }
    get shouldForbidExport() {
      let {
        export: e,
        previewResultCode: i
      } = this.props;
      return this.model.snapshot.image.token && this.state.isMobileExporting && this.isAttachmentPermissionReady && e === undefined && i !== docMultiGeoConstants.multiGeoDocId && i !== docMultiGeoConstants.multiGeoModeId;
    }
    get maskImageStyle() {
      let {
        state: {
          cropping: e,
          tempImageInfo: i
        },
        snapshot: {
          image: r
        }
      } = this;
      if (i) {
        return docxEditorImageCropUtils.calculateCropTransformStyle({
          ...r,
          ...i
        }, false);
      } else {
        return docxEditorImageCropUtils.calculateCropTransformStyle(r, e);
      }
    }
    render() {
      let e;
      let i;
      let {
        displaymode: r,
        onBlockClick: n
      } = this.props;
      let {
        maskSrc: l,
        isSelected: s,
        cropping: a,
        loadEnd: c,
        progress: u,
        isError: h,
        src: f,
        isBlockReady: g,
        showExternalMask: p,
        isContainerRendered: v,
        dlpErrorType: b,
        isAIGenerating: y
      } = this.state;
      let {
        shouldForbidPreview: S,
        shouldForbidExport: k,
        shouldRetryByPermission: E
      } = this;
      if (r === docBlockTypeConstants.blockDisplayConstants.INLINE) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: "image-block inline",
          children: t("editorbar.image")
        });
      }
      let C = this.getImageSize();
      let R = this.getContainerStyle();
      let [I, T, P, L, N] = [false, false, false, false, false];
      if (h || S || k || b || E) {
        I = true;
      } else if (f) {
        T = true;
      } else if (!c) {
        L = !!l;
      }
      if (!g && !l) {
        P = true;
      }
      if (!L && (y || !f && this.snapshot.image.token)) {
        N = true;
      }
      let A = this.imageDataCacheStorage.hasKey(this.record.id);
      let O = v && P && !A;
      if (docxOfflineImageFlags.isImageShowEnabled && offlineStatusSelectorsUtils.isDocxOfflineDisabled() && !offlineStatusSelectorsUtils.isOfflineAuthEnabled()) {
        e = "undefined";
        i = "undefined";
      } else {
        e = String(this.props.export);
        i = String(this.props.copy);
      }
      if (!f && this.snapshot.image.token) {
        this.subscribeResourceUpdateEvent();
      } else {
        this.unSubscribeResourceUpdateEvent();
      }
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: d("image-block", `align-${this.snapshot.align || docBlockTypeConstants.alignmentConstants.CENTER}`, {
          active: s && !a,
          "revision-highlight": this.state.revisionHighlight,
          "with-caption": !this.isEmptyCaption || this.state.isCaptionActive,
          "is-doc-summary": this.isDocSummary
        }),
        contentEditable: false,
        "image-token": this.snapshot.image.token || "",
        "data-need-render-loading": O,
        children: [!this.props.print && this.props.previewResultCode !== docMultiGeoConstants.multiGeoDocId && this.props.previewResultCode !== docMultiGeoConstants.multiGeoModeId && reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.attachPrintForbidden, {}), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: d("image-block-width-wrapper", blockFlashEnhancementManager.flashBlockClassName),
          style: {
            width: R.width
          },
          onClick: e => {
            let {
              classList: i
            } = e.target;
            if (!i.contains(layoutResizableConstants.draggableBtn) && !i.contains(layoutResizableConstants.resizableWrapper) && !i.contains("caption-editor-area") && !a) {
              n(e);
            }
          },
          "data-printable": docMultiGeoIdUtil.resolveMultiGeoId(String(this.props.print), this.props.previewResultCode),
          "data-exportable": e,
          "data-copyable": i,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: this.CONTAINER_CLASS,
            style: {
              ...R,
              paddingTop: R.paddingTop,
              width: R.width
            },
            children: N && !this.isDocSummary ? this.renderLoadingGradient() : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [I && this.renderErrorPlaceholder(), T && this.renderImage(f, C, P), p && this.renderExternalMask(), O && this.renderLoadingPlaceholder(), L && reactJsxRuntimeCoreReexport.jsx(H, {
                src: xssContentSanitizer.sanitizeUrl(l, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
                }),
                width: C.width,
                height: C.height,
                progress: u,
                containerStyle: this.isCropped ? {
                  overflow: "hidden",
                  ...R
                } : {},
                imageStyle: this.maskImageStyle,
                onClick: this.handleClickImageMask
              })]
            })
          }), reactJsxRuntimeCoreReexport.jsx(docxCaptionSlotDefinition.getCaptionSlot, {
            blockManager: this.blockManager,
            selectionAPI: this.selectionAPI,
            refCallback: e => {
              this.captionInstance = e;
            },
            block: this.model,
            recordId: this.record.id,
            placeholder: t("LarkCCM_Docx_Image_AddDescrip_Placeholder"),
            snapshotPath: this.snapshotPath,
            caption: this.caption,
            onCaptionActiveChange: this.handleCaptionActiveChange,
            editable: this.blockManager.config.get("editable") && docxImageUtils.checkIsQqEnabled(),
            supportTranslate: true
          })]
        })]
      });
    }
    constructor(e) {
      super(e);
      eV(this, "CONTAINER_CLASS", "image-block-container");
      eV(this, "_resourceUpdateSubscription", null);
      eV(this, "ssrImageRecords", this.blockManager.editorAPI.getService(schedulerProvidersAccessor.blockSchedulerProv)?.ssrImageRecords || []);
      eV(this, "imagePerformance", null);
      eV(this, "beginLoadImage", false);
      eV(this, "token", this.snapshot.image.token);
      eV(this, "hasRetryOriginalImage", false);
      eV(this, "hasRetryByDlp", false);
      eV(this, "gifCoverPending", false);
      eV(this, "gifCoverLoadFailed", false);
      eV(this, "isHydrateUrl", false);
      eV(this, "hydrateUrl", "");
      eV(this, "isCollectDisplayEventNeedless", false);
      eV(this, "needRenderLoading", false);
      eV(this, "subs", []);
      eV(this, "isUpdateByRemote", false);
      eV(this, "snapshotPath", docxEditorConstants.mediaTypes);
      eV(this, "_ssrImageComponent", null);
      eV(this, "tokenCheckTimer", undefined);
      eV(this, "imageType", undefined);
      eV(this, "isAnimatedWebp", false);
      eV(this, "isInPaginationModelActive", false);
      eV(this, "imageManager", this.editorAPI.getService(imageManagerProviderName.imageManagerName));
      eV(this, "imageCropController", undefined);
      eV(this, "collector", this.imageManager.collectorManager.get(this.id));
      eV(this, "contentRef", reactCoreLibraryReexport.createRef());
      eV(this, "state", {
        resize: null,
        isSelected: !!this.selectionAPI.getSelection().find(e => {
          let {
            id: i
          } = e;
          return this.id === i;
        }),
        maskSrc: "",
        loadEnd: false,
        progress: -1,
        isError: false,
        isOnline: true,
        containerWidth: this.getContainerWidth(),
        src: xssContentSanitizer.sanitizeUrl("", null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
        }),
        originSrc: "",
        srcType: 0,
        isBlockReady: false,
        bigGifLoadingStatus: ez.Initial,
        loadingSize: null,
        showExternalMask: false,
        isContainerRendered: false,
        fuzzySrc: "",
        isFuzzyError: false,
        cropping: false,
        isMobileExporting: false,
        isCaptionActive: false,
        dlpErrorType: null,
        authReady: false,
        fileNotFound: false,
        isAIGenerating: false,
        revisionHighlight: false
      });
      eV(this, "onResize", () => {
        this.setContainerWidth();
        if (this.struct.active) {
          this.blockManager.layoutManager.notifyNodeHeightChange(this.id);
        }
      });
      eV(this, "handleCheckAttachmentPermission", () => {
        let {
          token: e
        } = this.snapshot.image;
        if (e) {
          this.attachmentPermissionService.init();
          this.attachmentPermissionService.fetchBlockAuthStatus(e, this.record.id);
        }
      });
      eV(this, "preloadImageViewer", () => {
        let {
          blockManager: e
        } = this;
        docxEditorCore.onServiceReady(e.editorAPI, imageViewerManagerProvider.imageViewerManager, e => {
          e.preload();
        });
      });
      eV(this, "handleDeleteImageCache", async e => {
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
          let i = e || (await this.getOriginalImageInfo(false)).src;
          window.lark.biz.util.deleteFileCache({
            token: this.blockManager.rootRecordId,
            file_token: this.snapshot.image.token,
            file_url: i
          });
        }
      });
      eV(this, "handleDLPUploadCheckCallback", e => {
        this.attachmentPermissionService.deleteDLPUploadCheckCallback(this.snapshot.image.token, this.handleDLPUploadCheckCallback);
        if (e.result === platformDocUtils.SVk.NOT_SENSITIVE) {
          if (this.state.dlpErrorType || this.state.isError) {
            this.retryOriginalImage();
            this.setState({
              dlpErrorType: null
            });
          }
        } else {
          this.setState({
            dlpErrorType: e.result
          });
          this.handleDeleteImageCache();
        }
      });
      eV(this, "handleBeforeRecordChange", e => {
        this.isUpdateByRemote = e.options.from === collaborativeEditingFlowSyncModule.kq.REMOTE;
      });
      eV(this, "handleActivateComment", e => {
        var i;
        let {
          activeCommentId: r
        } = e;
        let n = ((i = this.snapshot.revisions) === null || i === undefined ? undefined : i.map(e => e.revisionId)) || [];
        this.setState({
          revisionHighlight: !!r && n.includes(r)
        });
      });
      eV(this, "cleanImageInfo", () => {
        this.setState({
          maskSrc: "",
          src: xssContentSanitizer.sanitizeUrl("", null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
          }),
          loadEnd: false
        });
        this.beginLoadImage = false;
        this.imageManager.deleteGifCoverUrlCache(this.record.id);
        this.gifCoverLoadFailed = false;
      });
      eV(this, "setTempImageInfo", e => {
        this.setState({
          tempImageInfo: e
        });
      });
      eV(this, "setSrc", e => {
        this.setState({
          src: e
        });
      });
      eV(this, "onCroppingChange", () => {
        let e = this.editorAPI.getService(imageOperationServiceProvider.imageOpServiceName);
        this.subs.push(e.imageCropping$.subscribe(e => {
          if (e === this.model.recordId) {
            this.setState({
              cropping: true
            });
          } else if (this.state.cropping) {
            this.setState({
              cropping: false
            });
          }
        }));
      });
      eV(this, "handleClickImage", z.bind(this));
      eV(this, "handleClickImageMask", () => {
        if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          this.handleClickToSelect();
        }
      });
      eV(this, "handleClickToSelect", () => {
        if (!this.state.isSelected) {
          this.selectionAPI.setSelection([{
            id: this.id,
            type: docxBlockSelectionHandler_1.blockTypes.BLOCK
          }]);
        }
      });
      eV(this, "handleClickErrorPlaceholder", async () => {
        let {
          isOnline: e,
          fileNotFound: i
        } = this.state;
        if (!i && (this.getErrorTextVisibility() || this.handleClickToSelect(), e)) {
          this.collector.logRetry();
          let {
            src: e
          } = await this.getOriginalImageInfo(false);
          this.setState({
            isError: false,
            src: e
          });
        }
      });
      eV(this, "retryOriginalImage", async () => {
        this.hasRetryOriginalImage = true;
        if (this.isGifMimeType) {
          this.gifCoverLoadFailed = true;
        }
        let {
          originSrc: e,
          src: i
        } = await this.getOriginalImageInfo(true);
        if (i && i !== this.state.src) {
          this.setState({
            src: i,
            srcType: 1
          });
          return;
        }
        if (blobUrlUtils.isBlobUrl(i) && e) {
          this.setState({
            src: xssContentSanitizer.sanitizeUrl(e, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
            }),
            srcType: 1
          });
          return;
        }
        this.setState({
          src: xssContentSanitizer.sanitizeUrl(urlQueryParameterManipulator.setQueryParameter(i, "r", `${Math.random()}`), null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
          }),
          srcType: 1
        });
      });
      eV(this, "getErrorTextVisibility", () => {
        let e = dimensionResizeUtil.constrainWidth(this.getImageSize(), this.state.containerWidth);
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          return e.width > 300;
        } else {
          return e.width > 300 && e.height > 300;
        }
      });
      eV(this, "handleImageError", async e => {
        if (docxOfflineImageFlags.isImageShowEnabled && offlineStatusSelectorsUtils.isDocxOfflineDisabled()) {
          let e = await docxRustFileOperations.isImageExist(this.snapshot.image.token);
          docxImageUrlUtils.logOfflineEvent("load_image_error", this.record.id, e);
        }
        if (!this.hasRetryOriginalImage) {
          return this.retryOriginalImage();
        }
        let i = null;
        let r = false;
        if (docxFeatureFlags.isDlpUploadEnabled()) {
          let {
            src: e
          } = await this.getOriginalImageInfo(false);
          if (!(i = await this.attachmentPermissionService.fetchSrcCodeResult(e)) && !this.hasRetryByDlp) {
            this.hasRetryByDlp = true;
            return this.retryOriginalImage();
          }
          if (i === platformDocUtils.SVk.CHECKING) {
            this.handleDeleteImageCache(e);
          } else {
            this.reportImageErrorMessage();
          }
        } else {
          let e = await this.reportImageErrorMessage();
          r = (e == null ? undefined : e.response?.status) === 404;
        }
        this.setState({
          isError: !i,
          dlpErrorType: i,
          fileNotFound: r
        }, this.notifyRenderFinish);
        if (this.imageManager.getGifCoverUrlCache(this.record.id) === this.state.src) {
          this.imageManager.deleteGifCoverUrlCache(this.record.id);
        }
      });
      eV(this, "isElementInImageContainer", e => !!e.closest(".image-block-width-wrapper"));
      eV(this, "getImageContainer", () => {
        var e;
        if ((e = this.hostElement) === null || e === undefined) {
          return undefined;
        } else {
          return e.querySelector(".image-block-width-wrapper");
        }
      });
      eV(this, "handleResizeStart", () => {
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorConstantsConfig.openBlockMenu);
        this.setState({
          resize: {
            scale: this.snapshot.image.scale
          }
        });
      });
      eV(this, "handleResizeUpdate", e => {
        let i = R(e, this.snapshot, this.state.containerWidth);
        this.setState({
          resize: {
            scale: i
          }
        });
      });
      eV(this, "handleResizeEnd", e => {
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorConstantsConfig.hideBlockMenu);
        let {
          containerWidth: i
        } = this.state;
        let r = R(e, this.snapshot, i);
        let n = this.snapshot.image;
        let {
          width: o,
          scale: l,
          crop: s
        } = n;
        let a = E(docxEditorImageCropUtils.calculateCroppedWidth(o * l, s), i);
        let c = E(docxEditorImageCropUtils.calculateCroppedWidth(o * r, s), i);
        if (a !== c) {
          this.model.applyTransaction("handleImageResizeEnd", e => {
            e.replace(this.record.id, ["image", "scale"], r);
          });
        }
        this.setState({
          resize: null
        });
        let d = docxEditorBlockMetadataUtils.getThrottledBlockPath(this.id, this.blockManager);
        let u = docxEditorImageCropUtils.calculateCroppedDimensions(n);
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", docxEditorBlockMetadataUtils.getThrottledBlockPath(this.parentId, this.blockManager), {
          click: "block_resize",
          object_block_data: [{
            object_block_id: platformDocUtils.p5T(d.record_id),
            object_block_type: d.block_type,
            object_sub_block_type: d.sub_block_type
          }],
          before_size: `${Math.round(a)}x${Math.round(a / u.width * u.height)}`,
          after_size: `${Math.round(c)}x${Math.round(c / u.width * u.height)}`
        });
      });
      eV(this, "getDefaultUrl", async e => {
        let {
          token: r
        } = this.snapshot.image;
        let n = blobUrlCacheManager.BlobUrlCacheManager.getBlobURL(r);
        if ((!e || !this.isGifMimeType) && n) {
          return n;
        }
        let o = await this.getOriginalImageInfo(false);
        return e && o.extra?.cover || o.src;
      });
      eV(this, "handleStartTakeSnapshotInMobile", () => {
        this.setState({
          isMobileExporting: true
        });
      });
      eV(this, "handleFinishTakeSnapshotInMobile", () => {
        this.setState({
          isMobileExporting: false
        });
      });
      eV(this, "hostElementHeight", 0);
      eV(this, "notifyRenderFinish", () => {
        this.blockManager.layoutManager.notifyNodeHeightChange(this.id);
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          this.collector.logLoadImageEnd();
        }
        if (!this.state.maskSrc && !this.isCollectDisplayEventNeedless) {
          this.collector.logDisplayImageEnd({
            load_fail: this.state.isError,
            token: this.snapshot.image.token,
            origin_src: this.state.originSrc || this.state.src,
            state_src: this.state.src
          });
        }
        this.setState({
          isBlockReady: true
        });
        this._ssrImageComponent = null;
        let e = this.hostElementHeight !== this.hostElement.offsetHeight;
        if (this.props.recursionProps.isPresentationMode && e) {
          var i;
          this.hostElementHeight = this.hostElement.offsetHeight;
          if ((i = this.editorAPI.getService(presentationModeProvider.presentationMode, {
            optional: true
          })) !== null && i !== undefined) {
            i.forceUpdate();
          }
        }
        if (this.state.isError) {
          blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadError({
            id: this.model.id,
            type: this.model.type
          });
        } else {
          if (this.isFirstScreenImage()) {
            blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.DATA_LOAD_START, {
              id: this.model.id,
              time: this.getImageLoadPerformance("fetchStart")
            });
            blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.DATA_READY, {
              id: this.model.id,
              time: this.getImageLoadPerformance("responseEnd")
            });
          }
          Promise.resolve().then(() => {
            blockLoadPerformanceTracker.BlockLoadPerformanceTracker.modifyBlockLoadRecord({
              id: this.model.id,
              profile: this.getImageProfile(this.isCollectDisplayEventNeedless)
            });
            blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.TTU, {
              id: this.model.id,
              time: new Date().getTime(),
              isFromCache: this.isCollectDisplayEventNeedless
            });
          });
        }
      });
      eV(this, "getRenderSize", () => dimensionResizeUtil.constrainWidth(this.getImageSize(), this.state.containerWidth));
      eV(this, "getContainerStyle", () => {
        let e = {
          ...this.snapshot.image,
          ...this.state.tempImageInfo
        };
        let i = this.getImageSize();
        return docxEditorImageCropUtils.calculateImageContainerStyle(e, i, this.isCropped);
      });
      eV(this, "getErrorComponent", () => {
        let {
          dlpErrorType: e
        } = this.state;
        let {
          shouldForbidPreview: i,
          shouldForbidExport: r,
          shouldForbidPreviewByDLP: n,
          shouldRetryByPermission: o
        } = this;
        if (o) {
          return reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.attachPreviewBtnForbidden, {
            btnOnClick: () => {
              this.setState({
                authReady: false
              });
              this.attachmentPermissionService.forceFetchBlockAuthStatus(this.snapshot.image.token);
              this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
                action: "image_retry_by_permission",
                info: JSON.stringify({
                  id: docxUtilityHelpers.maskSensitiveData(this.record.id),
                  token: docxUtilityHelpers.maskSensitiveData(this.snapshot.image.token)
                })
              });
            }
          });
        }
        if (i) {
          if (n) {
            return reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.dlpPreviewForbidden, {});
          } else if (this.props.previewResultCode === docMultiGeoConstants.multiGeoModeId) {
            return reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.dlpDeleted, {});
          } else {
            return reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.attachPreviewForbidden, {});
          }
        }
        if (r) {
          return reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.attachExportForbidden, {});
        }
        if (e === platformDocUtils.SVk.CHECKING) {
          return reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.dlpPreviewForbidden, {});
        }
        if (e === platformDocUtils.SVk.DELETED) {
          return reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.dlpDeleted, {});
        }
      });
      eV(this, "onClickLoading", () => {
        if (this.state.bigGifLoadingStatus !== ez.GifLoading) {
          this.loadOriginalBigGif();
        }
      });
      eV(this, "handleCaptionActiveChange", e => {
        let {
          active: i,
          isEmpty: r
        } = e;
        this.setState({
          isCaptionActive: i
        });
        if (i) {
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_image_enter_caption_click", docxEditorBlockMetadataUtils.getThrottledBlockPath(this.parentId, this.blockManager), {
            click: "edit"
          });
        } else {
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_image_finish_caption_click", docxEditorBlockMetadataUtils.getThrottledBlockPath(this.parentId, this.blockManager), {
            click: "edit",
            is_empty: String(r)
          });
        }
      });
      blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.INIT, {
        id: this.model.id,
        type: this.model.type,
        time: new Date().getTime()
      });
      let r = this.record.id;
      let n = ssrImageLoadStateManager.getImageLoadState(r);
      let {
        url: s
      } = this.imageManager.getImageInfo(r);
      this.state.progress = this.uploadFromLocal ? 0 : -1;
      let {
        mimeType: a,
        width: c,
        height: d,
        token: u,
        size: p
      } = e.record.snapshot.image;
      let b = docxImageUrlUtils.shouldUseOriginalImage({
        mimeType: a,
        width: c,
        height: d,
        size: p
      });
      let y = +!!b;
      let S = this.imageDataCacheStorage.getValueOfKey(r);
      let _ = "";
      if (n == null ? undefined : n.src) {
        let {
          src: e
        } = n;
        if (!(e == null ? undefined : e.includes(u))) {
          return;
        }
        this.isHydrateUrl = true;
        this.hydrateUrl = e;
        this.state.bigGifLoadingStatus = b ? ez.Finished : ez.Initial;
        if (browserEnvironmentDetectionUtils.browserDetector.isOpendoc) {
          this.state.isBlockReady = false;
          this.initDataInOpendoc(e);
        } else {
          _ = e;
        }
      } else if (s) {
        if (blobUrlCacheManager.isCacheable({
          mimeType: a
        })) {
          if (blobUrlCacheManager.BlobUrlCacheManager.getBlobURL(u)) {
            _ = s;
          }
        } else {
          _ = s;
        }
      } else if (S && u) {
        _ = S;
        y = 1;
      }
      if (_) {
        this.state.isBlockReady = true;
        this.state.src = xssContentSanitizer.sanitizeUrl(_, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$Xpre$lWZFdNMHd6%214Wl-wNHd%REpzZEZsWFpHeE1WMHB6WWpKT2NreFlXbkJh$0dOM$pFaE9ORmxZ%201a1dFMDk"
        });
        this.state.srcType = y;
      }
    }
  }
  eV(eX, "type", docBlockTypeConstants.blockTypeConstants.IMAGE);
  var eG = eX;
  require.d(exports, {
    docxImageBlockType: function () {
      return eK;
    },
    DocxImageBlockView: function () {
      return eG;
    }
  });
}