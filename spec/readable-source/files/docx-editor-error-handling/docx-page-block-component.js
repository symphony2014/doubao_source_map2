// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'initPageBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 181612
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var layoutNodeConfig = require("layout-node-config") /*id: 266509*/;
  var layoutNodeBuilderReexport = require("layout-node-builder-reexport") /*id: 893890*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var readPdfGuidanceFooter = require("read-pdf-guidance-footer") /*id: 446560*/;
  var pageBlockClass = require("page-block-class") /*id: 452801*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var editCheckerProvider = require("edit-checker-provider") /*id: 884051*/;
  var docBlockValidationUtils = require("doc-block-validation-utils") /*id: 906066*/;
  function v(e, i, r) {
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
  let b = dependencyInjectionContainer.Provide(editCheckerProvider.editCheckerProvider)(n = class {
    constructor() {
      v(this, "blockType", docBlockTypeConstants.blockTypeConstants.PAGE);
      v(this, "checkFunc", docBlockValidationUtils.validateDeleteChild);
    }
  }) || n;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var editorRootComponent = require("editor-root-component") /*id: 614300*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var C = classnamesUtils;
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var editorFocusFirstBlock = require("editor-focus-first-block") /*id: 970314*/;
  var docxMetadataSummaryConfig = require("docx-metadata-summary-config") /*id: 697646*/;
  var docAiSummaryEligibilityChecker = require("doc-ai-summary-eligibility-checker") /*id: 225028*/;
  var docxWidthControlModeSlot = require("docx-width-control-mode-slot") /*id: 804339*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var editorContainerUtils = require("editor-container-utils") /*id: 874690*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var urlQueryParameterManipulator = require("url-query-parameter-manipulator") /*id: 551064*/;
  var docxPerformanceStageCollector = require("docx-performance-stage-collector") /*id: 753948*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var urlParserUtil = require("url-parser-util") /*id: 14217*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var clientVarMetaManager = require("client-var-meta-manager") /*id: 865679*/;
  var docEditorConstants = require("doc-editor-constants") /*id: 260128*/;
  let q = "page-block-header";
  let J = {
    [docEditorConstants.docSectionTypes.COVER]: 100,
    [docEditorConstants.docSectionTypes.AI_SUMMARY]: 130,
    [docEditorConstants.docSectionTypes.ADD_CUSTOM_ICON]: 100,
    [docEditorConstants.docSectionTypes.DOC_INFO]: 200
  };
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docxTextBlockModelManager = require("docx-text-block-model-manager") /*id: 568038*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var docxCodeblockConfigConstants = require("docx-codeblock-config-constants") /*id: 587865*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var fullscreenModeDetector = require("fullscreen-mode-detector") /*id: 71569*/;
  var customIconLoaderUtils = require("custom-icon-loader-utils") /*id: 626616*/;
  var documentAiFeatureFlags = require("document-ai-feature-flags") /*id: 842304*/;
  var pageOopsServiceProvider = require("page-oops-service-provider") /*id: 695060*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var blockFlashEnhancementManager = require("block-flash-enhancement-manager") /*id: 710621*/;
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  var docxFindReplaceConfig = require("docx-find-replace-config") /*id: 106059*/;
  var checkSingleEmptyTextBlock = require("check-single-empty-text-block") /*id: 963907*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var docInfoMetricMapping = require("doc-info-metric-mapping") /*id: 227478*/;
  var isDesktopBrowserChecker = require("is-desktop-browser-checker") /*id: 493826*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  var docInfoMetricUtils = require("doc-info-metric-utils") /*id: 890839*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var schedulerProvidersAccessor = require("scheduler-providers-accessor") /*id: 102884*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let e_ = e => {
    let {
      html: i,
      from: r
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      e.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docx_web_ssr_dev", {
        action: "doc-info-ssr-reuse-render",
        info: JSON.stringify({
          from: r
        })
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: docInfoMetricUtils.getDocInfoId("transition-use-ssr"),
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWQxbFhaR3hNTWxwc1dWaFNN$050$lha-$J6bHF%RmRzZFZwdE9IWmti$3hzWkhrNW$WcFhSbXBr%XpscllqSk5kR0Z-TlcxaW$%RnFZakkxT%ZsW*JI$mFXRWwy$2tjNWFreFhiSFZh-lRoMFpFaEthR0p1$*5Ca1IyeDJZbWs1-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
        })
      }
    });
  };
  var eR = e => {
    let {
      blockManager: i,
      from: r
    } = e;
    let n = function (e) {
      let i = e.editorAPI.getService(schedulerProvidersAccessor.blockSchedulerProv);
      if (i) {
        return i.getDocInfoSSRContent(e.rootRecordId);
      } else {
        return "";
      }
    }(i);
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(e_, {
        html: n,
        from: r,
        blockManager: i
      });
    } else {
      return null;
    }
  };
  let eI = docInfoMetricMapping.maxInfoEntries + !!browserEnvironmentDetectionUtils.browserDetector.isMobile * 4;
  function eM(e) {
    let i = reactCoreLibraryReexport.useRef(null);
    let r = offlineStatusSelectorsUtils.useSelectDocxOfflineDisabled();
    let {
      model: n
    } = e;
    let {
      doc_info: o
    } = n.snapshot;
    let l = !docUrlResolver.isDocDomain(docTokenHelperUtils.resolveDocToken());
    let s = docInfoMetricUtils.shouldHideDocInfo(o) ? 0 : eI;
    if (docInfoMetricUtils.checkEditorState({
      editorAPI: n.blockManager.editorAPI
    })) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        contentEditable: false,
        suppressContentEditableWarning: true,
        style: {
          marginTop: l ? 0 : s,
          minHeight: l ? s : 0,
          userSelect: "none"
        },
        className: C({
          "doc-info-hidden": offlineStatusSelectorsUtils.isWindowOffline() && r
        }),
        ref: i,
        children: reactJsxRuntimeCoreReexport.jsx(eR, {
          blockManager: n.blockManager,
          from: "placeholder"
        })
      });
    } else {
      return null;
    }
  }
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var ew = debugBrowserConfig;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  let eL = ew("pageBlock:utils");
  function eN(e) {
    let i = docxErrorDebugUtils.getErrorStack();
    docxEventCollector.wrappedCollector("doc_js_trigger_scroll_dev", {
      action: e,
      stack_info: i
    });
    eL(`collect js trigger scroll event, action: ${e}, stack_info: `, i);
  }
  function eA(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function eO(e, i, r) {
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
  function eD(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  l = eD((o = class extends docxTextBlockModelManager.TextBlockManager {
    static getDerivedStateFromProps(e) {
      let {
        recursionProps: i,
        docComponentContentConfig: r
      } = e;
      let {
        isShortcut: n,
        isPDF: o
      } = i;
      let l = (r == null ? undefined : r.titleVisible) !== false;
      return {
        isShowTitle: (!n || o) && l && !docComponentFeatureFlags.isTitleDisabled()
      };
    }
    get placeholder() {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        return t("aiDoc_emptyDoc_title_placeholder", {}, "添加标题");
      } else {
        return this._placeHolder || t("doc.title_placeholder_default");
      }
    }
    set placeholder(e) {
      this._placeHolder = e;
    }
    get focusElement() {
      return this.focusElementRef;
    }
    get isTextEditable() {
      return this.editable;
    }
    get contentElement() {
      return this.contentRef.current;
    }
    get blockContentElement() {
      return this.pageBlockContentRef.current || undefined;
    }
    get isWithBoundary() {
      return true;
    }
    get pageBlockTitleStyle() {
      let {
        fontSize: e,
        lineHeight: i
      } = docComponentFeatureFlags.blockHeaderTitleCfg();
      let r = {};
      if (e) {
        r.fontSize = e;
        r.minHeight = i || `${e * 1.625}px`;
        r.lineHeight = i || 1.625;
      }
      return r;
    }
    get pageBlockStyle() {
      let e = docComponentFeatureFlags.blockHeaderMargin();
      let i = docComponentFeatureFlags.blockHeaderPadding();
      let r = {};
      if (e) {
        r.margin = e;
      }
      if (i) {
        r.padding = i;
      }
      return r;
    }
    get isDocTitleInViewport() {
      return this._isDocTitleInViewport;
    }
    blockViewDidMount() {
      var e;
      var r;
      var n;
      super.blockViewDidMount();
      let {
        pageBlockMounted: o
      } = this.props;
      if (o != null) {
        o();
      }
      this.selectionAPI.on(eventTypeConstants.selectionEvents.selectingTapMove, this.handleSelectingTapMove);
      this.selectionAPI.on(eventTypeConstants.selectionEvents.selectingTapStop, this.handleSelectingTapStop);
      if ((e = this.focusElement) !== null && e !== undefined) {
        e.addEventListener("blur", this.handlePageBlur);
      }
      let l = !!this.props.editorAPI.config.get("isMain");
      let s = browserEnvironmentDetectionUtils.browserDetector.isMobile ? document.scrollingElement : this.props.editorAPI.config.get("scroller");
      if (l && s) {
        r = s;
        n = eN;
        if (r instanceof Element) {
          (function (e, i, r) {
            let n = Object.getOwnPropertyDescriptor(Element.prototype, i);
            if (!n) {
              eL("can not get propertyDescriptor");
              return;
            }
            Object.defineProperty(e, i, {
              get: () => {
                eL(`js get scroller ${String(i)}`);
                if (n.get) {
                  return n.get.call(e);
                }
              },
              set: o => {
                eL(`js set scroller ${String(i)}`);
                if (n.set) {
                  n.set.call(e, o);
                }
                r(String(i));
                return o;
              },
              configurable: true
            });
          })(r, "scrollLeft", n);
          (function (e, i) {
            let r = Object.getOwnPropertyDescriptor(Element.prototype, "scrollTo");
            if (!r) {
              eL("can not get scrollToDescriptor");
              return;
            }
            Object.defineProperty(e, "scrollTo", {
              get: () => function () {
                var n = arguments.length;
                var o = Array(n);
                var l = 0;
                for (; l < n; l++) {
                  o[l] = arguments[l];
                }
                eL("js trigger scroller call scrollTo(), scrollTo args: ", o);
                i("scrollTo");
                return r.value.apply(e, [...o]);
              },
              configurable: true
            });
          })(r, n);
        }
      }
      this.titleObserver = new IntersectionObserver(e => {
        let [{
          intersectionRatio: i
        }] = e;
        this._isDocTitleInViewport = i > 0;
      });
      if (this.pageBlockContentRef.current) {
        this.titleObserver.observe(this.pageBlockContentRef.current);
      }
      this.blockManager.addListener(editorUiConstants.editorMountClass, this.handleEditorMount);
      window.addEventListener("resize", this.handleEditorResize);
      this.updateTransTitle();
      this.pageToken = urlParserUtil.parseUrl(window.location.href, true)?.token;
    }
    blockViewDidUpdate(e, i) {
      var r;
      super.blockViewDidUpdate(e, i);
      let n = !!this.props.editorAPI.config.get("isHistory");
      if (this.state.isShowTitle !== i.isShowTitle) {
        this.eventEmitter.emit(docxFindReplaceConfig.findReplaceEvents.THIRD_PARTY_CONTENT_CHANGE);
      }
      if (!!this.isRoot && !syncUrlBlockUtils.isSyncingActive() && !syncedReferenceBlockUtils.isSyncedReferenceBlock(this.blockManager.editorAPI) && !n) {
        this.updateTransTitle();
        if (this.maybeHeaderHeightChange(e)) {
          this.blockManager.layoutManager.notifyHeaderHeightChange();
        }
      }
      let o = !e.editable && this.props.editable;
      if (o) {
        this.focusTitleIfDocIsEmpty();
        this.focusDocIfOnlyDocContentisEmpty();
      }
      if (!this.config.get("isSyncedReferenceBlock") && !this.reported && !!o && ((r = this.focusElementRef) === null || r === undefined ? undefined : r.getAttribute("contenteditable")) === "true") {
        this.reported = true;
        firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
          docxPerformanceStageCollector.DocxPerformanceStageCollector.setExtraData({
            DOCX_RENDER_CARET_SHOW: Date.now() - docxPerformanceStageCollector.DocxPerformanceStageCollector.getStartTime()
          });
        });
      }
    }
    blockViewWillUnmount() {
      super.blockViewWillUnmount();
      this.selectionAPI.off(eventTypeConstants.selectionEvents.selectingTapMove, this.handleSelectingTapMove);
      this.selectionAPI.off(eventTypeConstants.selectionEvents.selectingTapStop, this.handleSelectingTapStop);
      if (this.focusElement) {
        this.focusElement.removeEventListener("blur", this.handlePageBlur);
      }
      if (this.pageBlockContentRef.current) {
        var e;
        if ((e = this.titleObserver) !== null && e !== undefined) {
          e.unobserve(this.pageBlockContentRef.current);
        }
      }
      if (this.titleObserver) {
        this.titleObserver.disconnect();
      }
      this.titleObserver = null;
      this.blockManager.removeListener(editorUiConstants.editorMountClass, this.handleEditorMount);
      window.removeEventListener("resize", this.handleEditorResize);
      this.blockManager.layoutManager.getReconciler().removeVirtualCacheLine(this.props.blockId);
    }
    focusTitleIfDocIsEmpty() {
      if (!browserEnvironmentDetectionUtils.browserDetector.isInVC && !browserEnvironmentDetectionUtils.browserDetector.isMobile && editorContainerUtils.checkEmptyEditor(this.blockManager)) {
        this.selectionAPI.setSelection([{
          id: this.model.id,
          type: editorTypeConstants.blockTypes.TEXT,
          selection: {
            start: 0,
            end: 0
          }
        }]);
      }
    }
    focusDocIfOnlyDocContentisEmpty() {
      let e = this.model;
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile && (document.hasFocus() && boolDefaultUtil.getDefaultBool("ccm.doc.vcnotes.autofocus", false) && docComponentFeatureFlags.isVcAgenda() || docComponentFeatureFlags.isCalendarAgenda()) && !urlQueryParameterManipulator.isAiShownInQuery() && !e.zoneState.isEmpty() && checkSingleEmptyTextBlock.checkSingleEmptyTextBlock(this.blockManager)) {
        editorFocusFirstBlock.focusFirstBlock(this.blockManager);
      }
    }
    checkIsMove() {
      let {
        beginX: e,
        beginY: i,
        endX: r,
        endY: n
      } = this.selectionAPI.getSelectionContext();
      let o = Math.abs(i - n);
      return Math.abs(e - r) > 10 || o > 10;
    }
    maybeHeaderHeightChange(e) {
      let i = false;
      try {
        let r = throttledPathFilterStringify.throttledPathStr(this.snapshot, ["text", "cover", "doc_info"]);
        let n = throttledPathFilterStringify.throttledPathStr(e.record.snapshot, ["text", "cover", "doc_info"]);
        if (!deepEqualUtil_1.deepEqual(r, n)) {
          i = true;
        }
        if (e.offline !== this.props.offline) {
          i = true;
        }
      } catch (e) {}
      return i;
    }
    setBlockFocus(e) {
      if (!this.isRoot) {
        super.setBlockFocus(e);
      }
    }
    getRootContentEditable() {
      var e;
      let {
        editable: i
      } = this.props;
      if (this.config.get("isSyncedReferenceBlock")) {
        return !!i;
      } else {
        return (e = i && !browserEnvironmentDetectionUtils.browserDetector.isMobile) !== null && e !== undefined && e;
      }
    }
    render() {
      let {
        recursionProps: e,
        offline: i
      } = this.props;
      let {
        isSSR: r,
        isPreview: n,
        isShortcut: o,
        hasCover: l,
        isPresentationMode: s,
        isMobileSSR: a
      } = e;
      let {
        isShowTitle: c,
        hidePageBlockHeaderBtnText: d
      } = this.state;
      let h = this.struct.children.length === 0;
      let f = this.editorAPI.config.get("isSyncedReferenceBlock");
      isDesktopBrowserChecker.isDesktopBrowser();
      if (!r && !n && !this.isHistory && !s && !platformDocUtils.KNd() && !o && !docHostTypeChecker.isSheetHost() && !this.editorAPI.config.get("translated")) {
        documentAiFeatureFlags.isDocumentAIEnabled();
      }
      let g = this.dependencyManager.getModules(docxEditorKitProviders.textualDepTypes.BLOCK_CONTENT);
      this.editable;
      docComponentFeatureFlags.isContentCoverOff();
      docComponentFeatureFlags.isContentCoverOff();
      let p = docxMetadataSummaryConfig.isNewSummaryUI() && docAiSummaryEligibilityChecker.checkDocAiSummaryEligibility({
        blockManager: this.blockManager,
        translated: this.translated,
        isDocxAtSheet: docHostTypeChecker.isSheetHost(),
        isSSR: !!r
      });
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: C("page-block root-block", {
          "page-block-offline": i
        }),
        "data-slate-editor": "true",
        ref: this.setFocusElementRef,
        contentEditable: this.getRootContentEditable(),
        spellCheck: "false",
        "data-content-editable-root": "true",
        suppressContentEditableWarning: true,
        children: [!browserEnvironmentDetectionUtils.browserDetector.isMobile && reactJsxRuntimeCoreReexport.jsx(docxWidthControlModeSlot.widthControlSlot, {
          editable: this.editable,
          blockManager: this.blockManager,
          pageToken: this.record.id,
          snapshot: this.model.snapshot
        }), reactJsxRuntimeCoreReexport.jsxs(editorRootComponent.EditorComponent, {
          editable: this.editable,
          ignoreContainerEditable: true,
          copyable: this.props.recursionProps.copyable,
          businessKey: "docx",
          contentState: this.contentState,
          debounceFlush: 0,
          modules: g,
          listenEvents: docxCodeblockConfigConstants.allowedEventNames,
          editor: this.editor,
          onError: this.handleError,
          scroller: false,
          isSSR: false,
          children: [c && !f && !syncUrlBlockUtils.isSyncingActive() && !docComponentFeatureFlags.isFromGroup() && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: C(q, customIconLoaderUtils.alwaysTrue() && `${q}__custom_icon`, {
              "hide-text": d
            }),
            style: this.pageBlockStyle,
            children: [reactJsxRuntimeCoreReexport.jsxs("h1", {
              className: C("page-block-content", this.snapshot.align || docBlockTypeConstants.alignmentConstants.LEFT, blockFlashEnhancementManager.flashBlockClassName, {
                "page-block-title-empty": this.model.isEmpty
              }),
              ref: this.pageBlockContentRef,
              style: this.pageBlockTitleStyle,
              children: [reactJsxRuntimeCoreReexport.jsx(customIconLoaderUtils.PageBlockCustomIcon, {
                blockManager: this.blockManager,
                editable: this.editable,
                customOnly: true,
                token: this.record.id,
                pageToken: this.pageToken,
                iconSize: "1em;",
                onMountAndUpdate: this.blockManager.layoutManager.notifyHeaderHeightChange
              }), r && !a && this.model.isEmpty ? reactJsxRuntimeCoreReexport.jsx("div", {
                className: "page-block-ssr-title-placeholder",
                style: this.pageBlockTitleStyle,
                children: this.placeholder
              }) : null, super.render()]
            }), isDesktopBrowserChecker.isDesktopBrowser() && !docComponentFeatureFlags.isDocInfoDisabled() && reactJsxRuntimeCoreReexport.jsx(docInfoMetricMapping.docInfoContainerSlot, {
              model: this.model,
              scroller: this.props.recursionProps.scroller,
              selectionAPI: this.selectionAPI,
              blockManager: this.blockManager,
              eventEmitter: this.eventEmitter,
              boundary: this.boundary,
              editable: this.editable,
              data: this.model.snapshot.doc_info,
              isAISummaryEnable: p,
              children: reactJsxRuntimeCoreReexport.jsx(eM, {
                model: this.model
              })
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: C("page-block-children", {
              "reference-page-block-childen": f,
              "synced-block-shortcut": docxShortcutFeatureDetection.isSyncedBlockToken(),
              "synced-block-im": docComponentFeatureFlags.isImchatSyncedBlk(),
              "synced-block-mode": docxShortcutFeatureDetection.isSyncedBlockToken() || docComponentFeatureFlags.isImchatSyncedBlk(),
              announcement: docComponentFeatureFlags.isFromGroup() && !f
            }),
            spellCheck: false,
            ref: this.contentRef,
            contentEditable: !h && undefined,
            suppressContentEditableWarning: true,
            children: this.editorAPI.viewService.renderChildren(this.id, {
              recursionProps: {
                ...this.props.recursionProps,
                level: 1
              }
            })
          })]
        })]
      });
    }
    constructor(...e) {
      super(...e);
      eO(this, "isSelecting", false);
      eO(this, "_placeHolder", undefined);
      eO(this, "contentRef", reactCoreLibraryReexport.createRef());
      eA(this, "contentState", l, this);
      eA(this, "dependencyManager", s, this);
      eO(this, "pageBlockContentRef", reactCoreLibraryReexport.createRef());
      eO(this, "focusElementRef", undefined);
      eO(this, "setFocusElementRef", e => {
        if (!e) {
          this.blockManager.layoutManager.getReconciler().removeVirtualCacheLine(this.model.id);
          return;
        }
        this.focusElementRef = e;
        let i = e.closest(`[data-block-id="${this.model.id}"]`);
        if (i) {
          this.blockManager.layoutManager.getReconciler().registerVirtualCacheLine(this.model.id, i);
        }
      });
      eO(this, "editorWidth", null);
      eO(this, "headerBtnVisibility", {
        [docEditorConstants.docSectionTypes.COVER]: false,
        [docEditorConstants.docSectionTypes.AI_SUMMARY]: false,
        [docEditorConstants.docSectionTypes.ADD_CUSTOM_ICON]: false,
        [docEditorConstants.docSectionTypes.DOC_INFO]: false
      });
      eO(this, "reported", false);
      eO(this, "pageToken", urlParserUtil.parseUrl(window.location.href, true)?.token);
      eO(this, "state", {
        remoteWidthMode: undefined,
        isShowTitle: !docComponentFeatureFlags.isTitleDisabled(),
        hidePageBlockHeaderBtnText: false
      });
      eO(this, "titleObserver", null);
      eO(this, "_isDocTitleInViewport", false);
      eO(this, "handleSelectingTapMove", () => {
        if (!this.isSelecting && this.checkIsMove()) {
          var e;
          this.isSelecting = true;
          if ((e = this.contentRef.current) !== null && e !== undefined) {
            e.classList.add("isSelecting");
          }
        }
      });
      eO(this, "handleSelectingTapStop", () => {
        if (this.isSelecting) {
          var e;
          this.isSelecting = false;
          if ((e = this.contentRef.current) !== null && e !== undefined) {
            e.classList.remove("isSelecting");
          }
        }
      });
      eO(this, "updateDocTitle", debounceUtil_1_1.debounce(() => {
        let {
          suite: {
            updateDocTitle: i
          }
        } = platformDocUtils.Nwg;
        let r = this.record.id;
        let n = fullscreenModeDetector.isFullscreenMode() ? clientVarMetaManager.ClientVarMetaManager.getMetaByToken(r || "")?.title || t("common.unnamed_document") : editorTextBlockUtilities.getModelTextWithoutTrailing(this.model.zoneState);
        reduxStoreInitializer.reduxStore.dispatch(i({
          token: browserEnvironmentDetectionUtils.browserDetector.isIPad && fileNodeSelectorUtils.getNodeSelector(reduxStoreInitializer.reduxStore.getState()) || r,
          type: docHostTypeChecker.isSheetHost(this.blockManager.config) ? platformDocUtils.kNj.DOCX : platformDocUtils.gGk(),
          title: n,
          isSyncedReferenceBlock: syncedReferenceBlockUtils.isSyncedReferenceBlock(this.blockManager.editorAPI)
        }));
      }, 200));
      eO(this, "updateTransTitle", () => {
        if (this.translated && !syncedReferenceBlockUtils.isSyncedReferenceBlock(this.blockManager.editorAPI)) {
          platformDocUtils.vpe.emit("UPDATE_TRANS_TITLE", [this.model.getText()]);
        }
      });
      eO(this, "handlePageBlur", () => {
        if (browserEnvironmentDetectionUtils.browserDetector.isInVC && !browserEnvironmentDetectionUtils.browserDetector.isMobile && this.focusElement?.contentEditable === "true" && document.activeElement === this.focusElement && this.focusElement) {
          this.focusElement.blur();
        }
      });
      eO(this, "handleError", e => {
        let {
          e: i,
          message: r,
          level: n,
          extra: o = ""
        } = e;
        docxUtilityHelpers.captureException(i, {
          extra: {
            customInfo: o
          }
        });
        if (n === errorHandlerUtil.ErrorLevel.FATAL) {
          if (e.affectingScope === "zone") {
            throw e.e.originalError ?? e.e;
          }
          this.props.editorAPI.getService(pageOopsServiceProvider.pageOopsProvider).showOopsModal({
            msg: r,
            code: collaborativeEditingFlowSyncModule.ErrorType.COLLECT_FAILED,
            type: "textInput"
          });
        }
      });
      eO(this, "handleBtnVisibilityChange", (e, i) => {
        this.headerBtnVisibility[e] = i;
        this.recalculateBtnTextStatus();
      });
      eO(this, "handleEditorMount", () => {
        let e = this.blockManager.layoutManager.getEditorWidth();
        this.editorWidth = e;
        this.recalculateBtnTextStatus();
      });
      eO(this, "handleEditorResize", debounceUtil_1_1.debounce(() => {
        let e = this.blockManager.layoutManager.getEditorWidth();
        if (this.editorWidth !== e) {
          this.editorWidth = e;
          this.recalculateBtnTextStatus();
        }
      }, 300));
      eO(this, "recalculateBtnTextStatus", () => {
        if (!this.editorWidth || browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          return;
        }
        let e = 0;
        let {
          hidePageBlockHeaderBtnText: i
        } = this.state;
        Object.keys(this.headerBtnVisibility).forEach(i => {
          e += this.headerBtnVisibility[i] ? J[i] : 0;
        });
        if (e > this.editorWidth) {
          if (!i) {
            this.setState({
              hidePageBlockHeaderBtnText: true
            });
          }
        } else if (i) {
          this.setState({
            hidePageBlockHeaderBtnText: false
          });
        }
      });
    }
  }).prototype, "contentState", [docxEditorKitProviders.contentStateService], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  s = eD(o.prototype, "dependencyManager", [docxEditorKitProviders.textualDepProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let ex = o;
  var eF = reactReduxCore.connect(e => ({
    docComponentContentConfig: flowPermissionSettingSelectors.flowSelectorsHub.docComponent.getDocComponentFeatureConfigSelector(`extensions.${platformDocUtils.XZv.CONTENT}`)(e),
    offline: offlineStatusSelectorsUtils.selectDocxOfflineDisabled(e)
  }))(ex);
  function ej(e, i) {
    docxEditorCore.registerProviders([b, {
      provide: layoutNodeBuilderReexport.layoutNodeBuilder,
      useClass: layoutNodeConfig.LayoutNodeConfig,
      args: [docBlockTypeConstants.blockTypeConstants.PAGE, {
        onlyChildrenHeight: true
      }]
    }]);
    readPdfGuidanceFooter.ReadPdfFooter(pageBlockClass.PageBlock, eF, e, i);
  }
  require.d(exports, {
    initPageBlock: function () {
      return ej;
    }
  });
}