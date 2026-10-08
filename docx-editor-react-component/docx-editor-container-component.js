// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'DocxEditorContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 942070
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docComponentConfigUtils = require("doc-component-config-utils") /*id: 123085*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorFactory = require("docx-editor-factory") /*id: 450236*/;
  var docxSignalSubjectRegistry = require("docx-signal-subject-registry") /*id: 272418*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var v = reactLoadableComponent;
  let p = v({
    loader: () => require.e("docx_paid_subscription") /*id: 60668*/.then(require.bind(require, "docx-paid-subscription-component") /*id: 912206*/),
    loading: () => null
  });
  var ccmDocxPaywallWhitelist = require("ccm-docx-paywall-whitelist") /*id: 77728*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var observableSafeLiftUtil_1 = require("observable-safe-lift-util_1") /*id: 149656*/;
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  class M {
    takeUntil() {
      return observableSafeLiftUtil_1.createSafeOperator(this.destroy$);
    }
    from(e) {
      return observableFromSource.fromAnySource(e).pipe(this.takeUntil());
    }
    toPromise(e) {
      return new Promise((i, r) => {
        let n;
        let o = false;
        this.from(e).subscribe(e => {
          o = true;
          n = e;
        }, r, () => {
          if (o) {
            i(n);
          }
        });
      });
    }
    destroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    constructor() {
      var e;
      var i;
      var r;
      e = "destroy$";
      i = new observableSubjectClass.Subject();
      if ((e = typeof (r = function (e, i) {
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
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
    }
  }
  var replaySubjectStreamUtil = require("replay-subject-stream-util") /*id: 827606*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var userEditDetectionObservableSetup = require("user-edit-detection-observable-setup") /*id: 841747*/;
  function R(e, i, r) {
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
  class w {
    async loadLimiter() {
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        await platformDocUtils.mdI();
      }
      let e = (await this.rxOp.toPromise(docxTaskSchedulerUtilities.scheduleTaskWithConfig({
        action: () => require.e("limit-edit-mode-quantity-helper") /*id: 97207*/.then(require.bind(require, "limit-edit-mode-quantity-helper") /*id: 47415*/),
        name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
      }))).default;
      this.controller = new e(this.blockManager, this.selectionAPI);
      this.controller.start();
    }
    destroy() {
      this.changeSub.unsubscribe();
      this.rxOp.destroy();
      if (this.controller) {
        this.controller.stop();
        this.controller = null;
      }
    }
    fullscreenEntering() {
      if (this.controller) {
        this.controller.stop();
      }
    }
    fullscreenExited() {
      if (this.controller) {
        this.controller.start();
      }
    }
    handleRecordChange(e) {
      userEditDetectionObservableSetup.userEditSubject.next(e);
    }
    constructor(e, i) {
      this.blockManager = e;
      this.selectionAPI = i;
      R(this, "controller", undefined);
      R(this, "rxOp", new M());
      R(this, "changeSub", undefined);
      this.loadLimiter = this.loadLimiter.bind(this);
      this.changeSub = e.editorAPI.dataService.change$.subscribe(this.handleRecordChange);
      replaySubjectStreamUtil.onceObservable.pipe(this.rxOp.takeUntil()).subscribe(this.loadLimiter);
    }
  }
  var docMentionNotificationManager = require("doc-mention-notification-manager") /*id: 350832*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docxPerfMarkConstants = require("docx-perf-mark-constants") /*id: 895953*/;
  var docxPerformanceCollector = require("docx-performance-collector") /*id: 258745*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var docxEditorBugTracker = require("docx-editor-bug-tracker") /*id: 140860*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var selectionEventDriverAndManager = require("selection-event-driver-and-manager") /*id: 282246*/;
  var syncedRefBlockManagerToken = require("synced-ref-block-manager-token") /*id: 549332*/;
  let V = "selecting-frame";
  let J = "selecting-inline";
  let U = "selecting-inline-multiple";
  let X = e => {
    e.classList.remove(V);
  };
  let G = e => {
    e.classList.remove(J, U);
  };
  let K = e => {
    e.classList.remove(V, V, U);
  };
  let q = (e, i) => {
    X(e);
    if (!e.classList.contains(J)) {
      e.classList.add(J);
    }
    if (i) {
      if (!e.classList.contains(U)) {
        e.classList.add(U);
      }
    } else {
      e.classList.remove(U);
    }
  };
  let Q = e => {
    G(e);
    if (!e.classList.contains(V)) {
      e.classList.add(V);
    }
  };
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var docxSelectorsExport = require("docx-selectors-export") /*id: 254026*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var retryableModuleLoaderFactory = require("retryable-module-loader-factory") /*id: 99395*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let es = v({
    loader: () => require.e("docx_dynamic_bottom_template") /*id: 82770*/.then(require.bind(require, "docx-dynamic-bottom-template-connector") /*id: 504196*/),
    loading: () => null
  });
  let ea = retryableModuleLoaderFactory.getRetryableModuleInstance({
    loader: () => require.e("docx_vmok_bottom_template") /*id: 73514*/.then(require.bind(require, "docx-bottom-template") /*id: 839133*/),
    loading: () => null
  }, {
    moduleName: "docx_vmok_bottom_template",
    hasOfflineRetry: true
  });
  let ec = !location.search.includes("vmok=0") && (boolDefaultGetterUtil.getDefaultBool("ccm.docx.vmok_bottom_template", false) || location.search.includes("vmok=1")) ? ea : es;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let {
    MultiStageRenderContainer: eu,
    DocxStage: eh,
    Business: ef
  } = businessStageConstants.businessConstants;
  let em = docxFeatureFlags.isP7Enabled();
  class ev extends reactCoreLibraryReexport.Component {
    componentDidMount() {
      if (this.props.firstLineEmpty) {
        this.setState({
          keepBtmTplRender: true
        });
      }
    }
    componentDidUpdate() {
      if (this.props.firstLineEmpty && !this.state.keepBtmTplRender) {
        this.setState({
          keepBtmTplRender: true
        });
      }
    }
    shouldRenderBtmTpl() {
      let {
        firstLineEmpty: e
      } = this.props;
      return !em || e || this.state.keepBtmTplRender;
    }
    render() {
      let {
        blockManager: e,
        recordVersion: i,
        hasCover: r,
        renderBtmTpl: n
      } = this.props;
      if (n) {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: this.shouldRenderBtmTpl() && reactJsxRuntimeCoreReexport.jsx(eu, {
            renderOnTimeout: true,
            business: ef.Docx,
            renderWhen: eh.viewportAllUsable,
            children: reactJsxRuntimeCoreReexport.jsx(ec, {
              recordVersion: i,
              hasCover: r,
              blockManager: e
            })
          })
        });
      } else {
        return null;
      }
    }
    constructor(e) {
      super(e);
      this.state = {
        keepBtmTplRender: false
      };
    }
  }
  var ep = reactReduxCore.connect(e => ({
    firstLineEmpty: docxSelectorsExport.getIsFirstLineEmpty(e)
  }))(ev);
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var docMetaSelectors = require("doc-meta-selectors") /*id: 359612*/;
  function eS(e, i, r) {
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
  let e_ = docxFeatureFlags.isUpEnabled();
  class ek extends reactCoreLibraryReexport.PureComponent {
    render() {
      return this.props.renderRoot();
    }
  }
  class ey extends reactCoreLibraryReexport.PureComponent {
    get container() {
      return this.containerRef.current;
    }
    get blockManager() {
      var e;
      if ((e = this.editor) === null || e === undefined) {
        return undefined;
      } else {
        return e.api.getService(blockManagerToken.blockManagerToken);
      }
    }
    get selectionAPI() {
      var e;
      if ((e = this.editor) === null || e === undefined) {
        return undefined;
      } else {
        return e.api.getService(compatibleEditorContext_1.compatibleContext).selectionAPI;
      }
    }
    get syncedReferenceBlockManager() {
      var e;
      if ((e = this.editor) === null || e === undefined) {
        return undefined;
      } else {
        return e.api.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
          optional: true
        });
      }
    }
    componentDidMount() {
      this.init();
      docxPerformanceCollector.DocxPerformanceCollector.perfCollectTimeOnce(docxPerfMarkConstants.perfMarkConstants.EDITOR_DID_MOUNT);
    }
    componentDidUpdate(e) {
      if (!this.hasFirstCanEdit && this.editable) {
        this.hasFirstCanEdit = true;
        this.tryCallMountedAndEditableEvent();
      }
    }
    componentWillUnmount() {
      var e;
      var n;
      this.bindEvent(false);
      this.handleSelectionStop();
      this.bindSelectionEvents(false);
      docMentionNotificationManager.docMentionNotifier.destroy();
      if (this.isEditorMounted) {
        let {
          onUnmount: e
        } = this.props;
        if (e) {
          e(this);
        }
      }
      if ((e = this.limitEditModeQuantity) !== null && e !== undefined) {
        e.destroy();
      }
      this.limitEditModeQuantity = undefined;
      docxEditorBugTracker.trackDocxEditorBug({
        stage: "editor_destroy",
        editorId: this.editor?.id,
        b_token: docxUtilityHelpers.maskSensitiveData(this.blockManager?.rootRecordId || "")
      });
      if (this.editor) {
        this.editor.destroy();
      }
      this.props.rootType;
      platformDocUtils.MYL();
      platformDocUtils.FLH();
    }
    componentDidCatch(e) {
      throw e;
    }
    componentWillMount() {
      this.updateMinHeight();
    }
    componentWillUpdate() {
      firstScreenEventHandlerUtils.executeImmediatelyIfFirstScreen(() => {
        this.updateMinHeight();
      }, this.blockManager?.lazyRecordStatus);
    }
    getPageMeta() {
      var i;
      var r;
      let n = this.blockManager.getRecord(this.blockManager.rootRecordId);
      let o = editorDataManagerClass.EditorDataManager.serialize(n.snapshot.text).alltext;
      let l = !!n.snapshot.full_width;
      let c = docTokenManager.getDocToken();
      return {
        title: o,
        fullWidth: l,
        ownerId: (r = docMetaSelectors.getDocMeta(reduxStoreInitializer.reduxStore.getState())) === null || r === undefined ? undefined : (i = r.docMetaMap) === null || i === undefined ? undefined : i[c]?.owner_id
      };
    }
    init() {
      this.preContainerHeight = this.rootElement.current?.offsetHeight || 0;
      this.preContainerWidth = this.rootElement.current?.offsetWidth || 0;
      this.preEditorHeight = this.container?.offsetHeight || 0;
      this.preEditorWidth = this.container?.offsetWidth || 0;
      docxPerformanceCollector.DocxPerformanceCollector.perfCollectTimeOnce(docxPerfMarkConstants.perfMarkConstants.CREATE_DOCX_EDITOR_START);
      let s = docxEditorFactory.createDocxEditor(this.props.getDocxEditorOptions(this.container));
      docxPerformanceCollector.DocxPerformanceCollector.perfCollectTimeOnce(docxPerfMarkConstants.perfMarkConstants.CREATE_DOCX_EDITOR_END);
      this.editable = s.api.config.get("editable");
      this.editor = s;
      docxEditorBugTracker.trackDocxEditorBug({
        stage: "editor_create",
        editorId: this.editor?.id,
        b_token: docxUtilityHelpers.maskSensitiveData(this.blockManager?.rootRecordId || "")
      });
      s.api.viewService.didMount$.subscribe(this.editorMounted);
      s.api.config.change$.subscribe(() => {
        var e;
        let i = (e = this.editor) === null || e === undefined ? undefined : e.api.config.get("editable");
        if (i !== this.editable) {
          this.editable = i;
          docxEditorBugTracker.trackDocxEditorBug({
            stage: "editor_editable_change",
            editorId: s.id,
            editable: i
          });
          this.forceUpdate();
        }
      });
      let a = s.api.getService(lazyRecordStatusToken.lazyRecordStatus, {
        optional: true
      });
      if (a) {
        if (this.props.isSyncedReferenceBlock) {
          a.firstScreenReady$.subscribe(() => {
            this.bindEvent(true);
          });
        } else {
          firstScreenEventHandlerUtils.executeAfterFirstScreen(() => {
            this.bindEvent(true);
          }, a);
        }
      }
      let c = e => i => {
        docxEditorBugTracker.trackDocxEditorBug({
          stage: e,
          editorId: s.id,
          message: String((i == null ? undefined : i.message) || ""),
          stack: String((i == null ? undefined : i.stack) || "")
        });
      };
      s.api.lifecycle.editorReady$.subscribe(async () => {
        var e;
        var i;
        s.lifecycle.editorError$.subscribe(c("editor_error"));
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          await void this.props.rootType;
        }
        if ((e = this.editorRootRef.current) !== null && e !== undefined) {
          e.forceUpdate();
        }
      }, c("editor_ready_error"));
    }
    bindEvent(e) {
      if (e) {
        if (this.rootElement.current) {
          this.unboundEventFunc = platformDocUtils.Xp0(this.rootElement.current, {
            width: true,
            height: true
          }, this.handleResize);
          if (e_) {
            this.rootElement.current.addEventListener("transitionstart", this.handleTransitionStart);
          }
        }
      } else {
        var i;
        var r;
        if (e_) {
          if ((i = this.rootElement.current) !== null && i !== undefined) {
            i.removeEventListener("transitionstart", this.handleTransitionStart);
          }
        }
        if ((r = this.unboundEventFunc) !== null && r !== undefined) {
          r.call(this);
        }
      }
    }
    focusTitle() {
      var i;
      if (!((i = this.blockManager) === null || i === undefined ? undefined : i.hasBlockViewByBlockId(this.blockManager?.rootBlockId))) {
        return;
      }
      let r = this.blockManager.getBlockViewByBlockId(this.blockManager.rootBlockId);
      if (editorTextBlockUtilities.isTextEditable(r)) {
        let {
          length: e
        } = r.model.getText();
        let i = {
          zoneId: r.model.zoneId,
          start: e,
          len: 0
        };
        r.model.setSelection(i, true);
      }
    }
    bindSelectionEvents(e) {
      if (!this.selectionAPI) {
        return;
      }
      let i = e ? "on" : "off";
      this.selectionAPI[i](eventTypeConstants.selectionEvents.move, this.handleSelectionMove);
      this.selectionAPI[i](eventTypeConstants.selectionEvents.start, this.handleSelectionStart);
      this.selectionAPI[i](eventTypeConstants.selectionEvents.stop, this.handleSelectionStop);
    }
    get isRenderBottomTemplate() {
      var e;
      let i = docComponentConfigUtils.getDocComponentConfig("extensions.template.bottomTemplate.disable");
      let {
        offline: r
      } = this.props;
      return !i && this.editable && !platformDocUtils.ZdP() && !userEnvironmentUtils.isAnonymousAccess() && !docHostTypeChecker.isSheetHost((e = this.blockManager) === null || e === undefined ? undefined : e.editorAPI.config) && !this.props.isSyncedReferenceBlock && !browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms && !docComponentFeatureFlags.isSyncedBlockOpt() && !r;
    }
    get recordVersion() {
      let e = "-1";
      if (this.editor) {
        let i = this.editor.api.getService(collabTriggersProvider.collabProvider, {
          optional: true
        });
        let r = (i == null ? undefined : i.isInited) ? i.getVersion(this.blockManager.rootRecordId) : undefined;
        e = r ? `${r}` : e;
      }
      return e;
    }
    render() {
      docxPerformanceCollector.DocxPerformanceCollector.perfCollectCountWithEndStage(docxPerfMarkConstants.perfMarkConstants.EDITOR_RENDER_COUNT);
      let {
        className: e,
        hasCover: i
      } = this.props;
      let r = o(e, "editor");
      let n = {
        minHeight: this.minHeight,
        ...this.props.style
      };
      let l = o("editor-container", {
        "in-im": docComponentFeatureFlags.isImchatSyncedBlk() && syncUrlBlockUtils.isSyncingActive()
      });
      let s = {};
      if (browserEnvironmentDetectionUtils.browserDetector.isH5) {
        s = {
          width: (Number(n.marginRight) || 0) + (Number(n.width) || 0) - (Number(n.marginLeft) || 0),
          marginRight: n.marginLeft
        };
      }
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r,
        style: {
          ...n,
          ...s
        },
        ref: this.rootElement,
        onTransitionEnd: this.handleTransitionEnd,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "doc-cover-toolbar"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          ref: this.containerRef,
          className: l,
          children: reactJsxRuntimeCoreReexport.jsx(ek, {
            ref: this.editorRootRef,
            renderRoot: this.renderRoot
          })
        }), this.state.isMounted && ccmDocxPaywallWhitelist.isDocxWhitelisted() && !this.props.isSyncedReferenceBlock && !syncUrlBlockUtils.isSyncingActive() ? reactJsxRuntimeCoreReexport.jsx(p, {
          blockManager: this.blockManager
        }) : null, reactJsxRuntimeCoreReexport.jsx(ep, {
          recordVersion: this.recordVersion,
          hasCover: !!i,
          blockManager: this.blockManager,
          renderBtmTpl: !!this.isRenderBottomTemplate
        })]
      });
    }
    constructor(e) {
      super(e);
      eS(this, "containerRef", reactCoreLibraryReexport.createRef());
      eS(this, "editorRootRef", reactCoreLibraryReexport.createRef());
      eS(this, "preContainerWidth", 0);
      eS(this, "preContainerHeight", 0);
      eS(this, "preEditorWidth", 0);
      eS(this, "preEditorHeight", 0);
      eS(this, "preContainerMarginLeft", 0);
      eS(this, "preContainerMarginRight", 0);
      eS(this, "rootElement", reactCoreLibraryReexport.createRef());
      eS(this, "hasFirstCanEdit", false);
      eS(this, "isEditorMounted", false);
      eS(this, "limitEditModeQuantity", undefined);
      eS(this, "unboundEventFunc", undefined);
      eS(this, "minHeight", 0);
      eS(this, "editable", undefined);
      eS(this, "editor", undefined);
      eS(this, "updateMinHeight", () => {
        let e = objectPathGetDefault.getObjectPathDefault(window, "User.isPDF");
        let i = this.props.isSyncedReferenceBlock;
        this.minHeight = e || i || platformDocUtils.iN8() ? 0 : window.innerHeight - (browserEnvironmentDetectionUtils.browserDetector.isFeed ? 68 : 64);
      });
      eS(this, "handleResize", e => {
        var n;
        var o;
        var a;
        let c = (e == null ? undefined : e.width) || this.rootElement.current?.offsetWidth;
        let d = (e == null ? undefined : e.height) || this.rootElement.current?.offsetHeight;
        let u = this.rootElement.current ? parseInt((n = this.rootElement.current) === null || n === undefined ? undefined : n.style.marginLeft) : 0;
        let h = this.rootElement.current ? parseInt((o = this.rootElement.current) === null || o === undefined ? undefined : o.style.marginRight) : 0;
        if (!d || !c) {
          return;
        }
        let f = this.container?.offsetWidth || c;
        let m = this.container?.offsetHeight || d;
        let {
          preContainerHeight: v,
          preContainerWidth: p,
          preEditorHeight: g,
          preEditorWidth: b,
          preContainerMarginLeft: E,
          preContainerMarginRight: S
        } = this;
        if ((a = this.blockManager) !== null && a !== undefined) {
          a.dispatch(editorUiConstants.editorResizeClass, {
            containerWidth: c,
            containerHeight: d,
            editorWidth: f,
            editorHeight: m,
            preContainerHeight: v,
            preContainerWidth: p,
            preEditorHeight: g,
            preEditorWidth: b,
            containerMarginLeft: u,
            containerMarginRight: h,
            preContainerMarginLeft: E,
            preContainerMarginRight: S
          });
        }
        this.preContainerHeight = d;
        this.preContainerWidth = c;
        this.preEditorHeight = m;
        this.preEditorWidth = f;
        this.preContainerMarginLeft = u;
        this.preContainerMarginRight = h;
      });
      eS(this, "tryCallMountedAndEditableEvent", () => {
        if (this.isEditorMounted && this.hasFirstCanEdit) {
          this.limitEditModeQuantity = new w(this.blockManager, this.selectionAPI);
        }
      });
      eS(this, "handleSelectionMove", e => {
        let {
          renderMode: i,
          items: r
        } = e;
        if (this.container && i === selectionEventDriverAndManager.RectPainter.LAZY) {
          q(this.container, r.length > 1);
        }
      });
      eS(this, "handleSelectionStart", e => {
        let {
          renderMode: i
        } = e;
        if (this.container && i === selectionEventDriverAndManager.RectPainter.NORMAL) {
          Q(this.container);
        }
      });
      eS(this, "handleSelectionStop", () => {
        if (this.container) {
          K(this.container);
        }
      });
      eS(this, "editorMounted", () => {
        this.bindSelectionEvents(true);
        this.handleResize();
        if (this.props.focusTitleOnMount !== false) {
          this.focusTitle();
        }
        this.isEditorMounted = true;
        this.setState({
          isMounted: true
        });
        if (this.props.onMount) {
          this.props.onMount(this);
        }
        this.blockManager.dispatch(editorUiConstants.editorMountClass);
        this.tryCallMountedAndEditableEvent();
      });
      eS(this, "handleTransitionEnd", () => {
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.UPDATE_OVERLAY_POSITION);
        if (e_) {
          var e;
          let i = (e = this.blockManager) === null || e === undefined ? undefined : e.editorAPI.getService(docxSignalSubjectRegistry.docxSignalService, {
            optional: true
          });
          if (i != null) {
            i.editorAnimationEndSignal.next();
          }
        }
      });
      eS(this, "handleTransitionStart", () => {
        var e;
        let i = (e = this.blockManager) === null || e === undefined ? undefined : e.editorAPI.getService(docxSignalSubjectRegistry.docxSignalService, {
          optional: true
        });
        if (i != null) {
          i.editorAnimationStartSignal.next();
        }
      });
      eS(this, "renderRoot", () => {
        let {
          editor: e
        } = this;
        if (e && e.isReady()) {
          docxPerformanceCollector.DocxPerformanceCollector.perfCollectTimeOnce(docxPerfMarkConstants.perfMarkConstants.EDITOR_ROOT_RENDER_START);
          let i = e.renderRoot();
          docxPerformanceCollector.DocxPerformanceCollector.perfCollectTimeOnce(docxPerfMarkConstants.perfMarkConstants.EDITOR_ROOT_RENDER_END);
          return i;
        }
        return null;
      });
      docxPerformanceCollector.DocxPerformanceCollector.perfCollectTimeOnce(docxPerfMarkConstants.perfMarkConstants.EDITOR_RENDER);
      this.state = {
        isMounted: false
      };
    }
  }
  require.d(exports, {
    DocxEditorContainer: function () {
      return ey;
    }
  });
}