// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SheetBlockViewManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 137221
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var p;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var themeDesignTokensProvider = require("theme-design-tokens-provider") /*id: 408160*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var blockMacroUtils = require("block-macro-utils") /*id: 761509*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var docBlockAnalyticsConstants = require("doc-block-analytics-constants") /*id: 337105*/;
  var keyboardShortcutNormalizer = require("keyboard-shortcut-normalizer") /*id: 761*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var docScrollEventManager = require("doc-scroll-event-manager") /*id: 361839*/;
  var diProviderViewSignalAdapter = require("di-provider-view-signal-adapter") /*id: 309523*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  class A extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    get commentModule() {
      return this.model.commentModule;
    }
    get token() {
      return this.snapshot.token;
    }
    getBlockCurrentVersion() {}
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      r = undefined;
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
      }(i = "bridge", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
    }
  }
  var gridColumnLayoutUtils = require("grid-column-layout-utils") /*id: 139275*/;
  var docBlockPermissionUtils = require("doc-block-permission-utils") /*id: 954681*/;
  var mentionUserServiceProvider = require("mention-user-service-provider") /*id: 326879*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxBlockRenderer = require("docx-block-renderer") /*id: 984324*/;
  var loadableBlockFetcherProvider = require("loadable-block-fetcher-provider") /*id: 289910*/;
  let [Z, z, H] = docxEditorCore.createSignal("custom-menu-long-press-signal");
  var presentationModeProvider = require("presentation-mode-provider") /*id: 712023*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var diProviderUndoManager = require("di-provider-undo-manager") /*id: 142010*/;
  var blockAuthorServiceProvider = require("block-author-service-provider") /*id: 302629*/;
  var commentEventConstants = require("comment-event-constants") /*id: 616817*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var flowDocCloseIcon = require("flow-doc-close-icon") /*id: 863001*/;
  var docxPrintConstants = require("docx-print-constants") /*id: 909586*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var sheetErrorsAndConfig = require("sheet-errors-and-config") /*id: 89207*/;
  var keyTimestampUtil = require("key-timestamp-util") /*id: 278453*/;
  var sheetBlockdepLoaderProvider = require("sheet-blockdep-loader-provider") /*id: 16546*/;
  var docxSheetPasteUtils = require("docx-sheet-paste-utils") /*id: 88608*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function en(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function eo(e, i, r) {
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
  function el(e, i, r, n, o) {
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
  let es = "ccm_docx_loadable_block_component_dev";
  n = dependencyInjectionContainer.Optional();
  o = dependencyInjectionContainer.Dynamic();
  l = dependencyInjectionContainer.Optional();
  p = class e extends A {
    get containerElement() {
      var e;
      var i;
      if (this.isShortcut || browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
        return ((i = this.hostElement) === null || i === undefined ? undefined : i.querySelector(".faster-wrapper")) || this.hostElement;
      } else {
        return ((e = this.scrollContainer) === null || e === undefined ? undefined : e.querySelector(`.${docxScrollableConstants.scrollableItem}`)) || this.hostElement;
      }
    }
    initReadStatus(e) {
      var i;
      var r;
      if ((r = this.bridge) !== null && r !== undefined && (i = r.setReadState) !== null && i !== undefined) {
        i.call(r, !e);
      }
    }
    getLoadableBridge() {
      if (this.bridge) {
        return this.bridge;
      }
      let e = new Promise(e => {
        if (this.bridge) {
          e(this.bridge);
          return;
        }
        this.loadBridgeResolve = e;
      });
      this.loadableBridge = e;
      return this.loadableBridge;
    }
    get isBlockRendered() {
      return this.isRendered;
    }
    get contentElement() {
      return this.mountPoint;
    }
    get isBlockFetchFailed() {
      return this.isFetchFailed;
    }
    checkSheetBlockToolbarEnabled(e) {
      let {
        bridge: i
      } = this;
      if (!i || !this.token || !e) {
        return false;
      }
      let {
        id: r
      } = docxSheetPasteUtils.parseTokenId(this.token);
      return i.checkSheetBlockToolbarEnabled(this.model.recordId, r, e);
    }
    bindBlockEvent() {
      let e = this.blockManager.eventEmitter;
      docxEditorEventConstantsAndManager.globalEventBus.on(docxPrintConstants.beginPrintEvent, this.takeScreenshot);
      platformDocUtils.vpe.on("SHEET_ENTER_FULL_SCREEN_MODE", this.enterSheetFullScreenMode);
      platformDocUtils.vpe.on("SHEET_EXIT_FULL_SCREEN_MODE", this.exitSheetFullScreenMode);
      this.selectionAPI.onSelectionChange(this.handleSelectionChanged);
      e.on("VC_CONTROLLER_INIT", this.vcInit);
      e.on("VC_CONTROLLER_DESTROY", this.vcDes);
      this.subscriptions.push(this.mentionUserService.onMentionUserPanelVisibleChanged$.subscribe(this.handlePanelActiveChanged), this.blockManager.config.editableChange$.subscribe(this.handleEditableChange));
    }
    attachBlockView() {
      let {
        mountPoint: e
      } = this;
      this.bindBlockEvent();
      this.handleSheetDidRender();
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isIPad) {
        this.blockManager.addListener(editorUiConstants.editorResizeClass, this.handleEditorResize);
      }
      if (e) {
        e.addEventListener("touchstart", this.handleTouchStart);
        e.addEventListener("keydown", this.handleKeyDown);
      }
      this.handleCommentLoaded();
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      this.bindBlockEvent();
      if (this.shouldRenderPlainText) {
        window.addEventListener("resize", this.handleEditorResize);
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isInVC) {
        this.vcHover();
      }
    }
    blockViewDidUpdate(e, i) {
      super.blockViewDidUpdate(e, i);
      let {
        scrollContainerWidth: o
      } = e;
      let {
        scrollContainerWidth: l
      } = this.props;
      let {
        bridge: s
      } = this;
      if (o !== l) {
        this.onScrollContainerResize(l);
      }
      if (!e.syncCursorSelected && this.props.syncCursorSelected) {
        this.showSyncSelection();
        this.syncCursorWrapperChange();
      } else if (e.syncCursorSelected && !this.props.syncCursorSelected) {
        this.hideSyncCursorSelection();
      }
      if (e.zoom !== this.props.zoom && s) {
        s.setZoom(this.props.zoom ?? 1);
      }
      if (i.isHoverBlockIcon !== this.state.isHoverBlockIcon) {
        let {
          id: e
        } = docxSheetPasteUtils.parseTokenId(this.token);
        let i = s == null ? undefined : s.getSheetViewContent(e)?.sheetView;
        if (i && i.hideRowColHeader) {
          i.hideRowColHeader(!this.state.isHoverBlockIcon);
        }
      }
    }
    detachBlockView() {
      var e;
      var i;
      var r;
      var n;
      let {
        blockManager: o,
        mountPoint: l
      } = this;
      let s = o.eventEmitter;
      docxEditorEventConstantsAndManager.globalEventBus.off(docxPrintConstants.beginPrintEvent, this.takeScreenshot);
      platformDocUtils.vpe.off("SHEET_ENTER_FULL_SCREEN_MODE", this.enterSheetFullScreenMode);
      platformDocUtils.vpe.off("SHEET_EXIT_FULL_SCREEN_MODE", this.exitSheetFullScreenMode);
      if ((e = this.compatibleSignalAdapterService) !== null && e !== undefined) {
        e.toggleHideToolbar(this);
      }
      s.off("VC_CONTROLLER_INIT", this.vcInit);
      s.off("VC_CONTROLLER_DESTROY", this.vcDes);
      document.removeEventListener("click", this.handleDocumentClick, true);
      if (l) {
        l.removeEventListener("touchstart", this.handleTouchStart);
        l.removeEventListener("keydown", this.handleKeyDown);
      }
      this.selectionAPI.offSelectionChange(this.handleSelectionChanged);
      if ((i = this.vcFollowHelper) !== null && i !== undefined) {
        i.destroy();
      }
      this.onScrollContainerResize.cancel();
      if ((r = this.removeRowHeaderHiddenChangeHandler) !== null && r !== undefined) {
        r.call(this);
      }
      if ((n = this.obs) !== null && n !== undefined) {
        n.disconnect();
      }
      this.subs.forEach(e => e.unsubscribe());
      this.subscriptions.forEach(e => e.unsubscribe());
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isIPad) {
        o.removeListener(editorUiConstants.editorResizeClass, this.handleEditorResize);
      }
      if (this.isInFullScreen) {
        this.exitSheetFullScreenMode();
      }
    }
    clearMentionData() {
      if (docBlockPermissionUtils.isDesktopEnabled) {
        this.mentionUserService.handleThirdPartyMentionChanged(this.record.id, []);
      }
    }
    blockViewWillUnmount() {
      var e;
      super.blockViewWillUnmount();
      if (this.unSubscribeAfterApply) {
        this.unSubscribeAfterApply();
      }
      if (this.shouldRenderPlainText) {
        window.removeEventListener("resize", this.handleEditorResize);
      }
      this.detachBlockView();
      if ((e = this.removeViewFlushHandler) !== null && e !== undefined) {
        e.call(this);
      }
      if (this.blockManager.isDestroyed()) {
        return;
      }
      this.clearMentionData();
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (this.bridge) {
        this.bridge.delSheetBlock(this.id, i);
      }
      if (this.cancelCallbacks) {
        this.cancelCallbacks.forEach(e => e());
        this.cancelCallbacks = null;
      }
    }
    getActivatedCommentPos(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (i && this.bridge.getActivatedCommentPos) {
        return this.bridge.getActivatedCommentPos(i, e);
      }
    }
    calcScrollStateToVc(e) {
      var i;
      if ((i = this.vcFollowHelper) !== null && i !== undefined) {
        i.calcScrollStateToVc(e);
      }
    }
    getPreViewInfo() {
      return this.preViewInfo;
    }
    setSelected(e) {
      var i;
      var r;
      var n;
      var o;
      if (this.blockManager.isDestroyed() || !this.isRendered) {
        return;
      }
      let {
        id: l
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp || browserEnvironmentDetectionUtils.browserDetector.isH5) {
        let n = e ? docBlockTypeConstants.focusModeConstants.FOCUS_ON_BLOCK : docBlockTypeConstants.focusModeConstants.NONE;
        if ((r = this.bridge) !== null && r !== undefined && (i = r.updateSelectionState) !== null && i !== undefined) {
          i.call(r, l, n);
        }
      } else if ((o = this.bridge) !== null && o !== undefined && (n = o.updateSheetSelectionState) !== null && n !== undefined) {
        n.call(o, l, e);
      }
      this.setState({
        isSelected: e
      });
      return false;
    }
    setHovered(e) {
      var i;
      var r;
      if (this.blockManager.isDestroyed() || browserEnvironmentDetectionUtils.browserDetector.isMobile || (this.setState({
        isHoverBlockIcon: e
      }), browserEnvironmentDetectionUtils.browserDetector.isInVC)) {
        return;
      }
      let {
        id: n
      } = docxSheetPasteUtils.parseTokenId(this.token);
      let {
        bridge: o
      } = this;
      if (this.state.isSelected) {
        if (o != null && (r = o.updateSheetSelectionState) !== null && r !== undefined) {
          r.call(o, n, e);
        }
      } else if (o != null && (i = o.updateSheetSelectionState) !== null && i !== undefined) {
        i.call(o, n, e, {
          border: {
            color: "var(--primary-pri-200)",
            width: 2
          }
        });
      }
    }
    onFoldStateChange(e) {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        setTimeout(() => {
          if (e.show && this.blockManager.layoutManager.isBlockActive(this.id)) {
            this.onScrollContainerResize();
          }
        }, 0);
      }
    }
    onResize() {
      if (this.props.scrollManage) {
        this.props.scrollManage.emitGridChange();
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && !this.props.scrollManage && this.blockManager.layoutManager.isBlockActive(this.id)) {
        this.onScrollContainerResize();
      }
    }
    isLoaded() {
      return this.isBlockLoaded;
    }
    activateComment(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (!i) {
        return;
      }
      let r = this.getActivatedCommentPos(e);
      if (r) {
        let o = this.bridge.getSheetViewContent(i)?.colHeaderWidth;
        let l = this.bridge.bridge.sheetManager.imp.getSheetFromId(i);
        let s = l.getAllComments().find(i => !!i.comments.find(i => i.id === e));
        let a = l.getCellRect(s.row, s.col);
        if (a) {
          let {
            width: e
          } = a;
          docxSheetPasteUtils.scrollToMaxLeft(this.props.scrollManage, r, o, e);
        }
      }
      this.scrollFrom = docScrollEventManager.ScrollEventTypes.COMMENT_SCROLL;
      return this.bridge.activateComment(i, e);
    }
    deactivateComment(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (i) {
        return this.bridge.deactivateComment(i, e);
      }
    }
    addHoverHighlight(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (i) {
        return this.bridge.addHighlight(i, e);
      }
    }
    removeHoverHighlight(e) {
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (i) {
        return this.bridge.removeHighlight(i, e);
      }
    }
    async addCommentHighlight(e) {
      this.activatedCommentSet.add(e);
      super.addCommentHighlight(e);
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.token);
      await this.model.waitForCommentLoaded;
      this.bridge.updateHighlight(i, 2);
    }
    async removeCommentHighlight(e) {
      this.activatedCommentSet.delete(e);
      if (this.activatedCommentSet.size > 0) {
        return;
      }
      super.removeCommentHighlight(e);
      let {
        id: i
      } = docxSheetPasteUtils.parseTokenId(this.token);
      await this.model.waitForCommentLoaded;
      this.bridge.updateHighlight(i, 0);
    }
    onBufferEnter() {
      if (!this.bridge) {
        return;
      }
      let {
        id: e
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (e) {
        this.bridge.sheetBlockEnterBuffer(e);
      }
      if (!this.props.scrollManage) {
        this.onScrollContainerResize();
      }
    }
    onBufferLeave() {
      if (!this.bridge) {
        return;
      }
      let {
        id: e
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (e) {
        this.bridge.sheetBlockLeaveBuffer(e);
      }
    }
    onViewportEnter() {
      if (!this.bridge) {
        return;
      }
      let {
        id: e
      } = docxSheetPasteUtils.parseTokenId(this.token);
      if (e) {
        this.bridge.sheetBlockEnterBuffer(e);
      }
    }
    handleCommentLoaded() {
      let {
        onContentFlush: e
      } = this.props;
      if (!this.hasFlushContent) {
        if (e) {
          e();
        }
        this.hasFlushContent = true;
      }
      if (this.commentModule) {
        this.model.handleCommentLoaded(this.commentModule);
      }
    }
    collectDocBugTrackEvent(e) {
      let {
        token: i,
        id: r
      } = docxSheetPasteUtils.parseTokenId(this.token);
      this.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "setSheetError",
        info: JSON.stringify({
          hasToken: !!i,
          hasSheetId: !!r,
          hasMountPoint: !!this.mountPoint,
          sheetId: r,
          stage: e
        })
      });
    }
    reportSheetBlockLoadStage(e, i) {
      try {
        var r;
        var n;
        let l = ((r = (n = this.bridge.bridge).getPerformanceTimeRecord) === null || r === undefined ? undefined : r.call(n)) || {};
        let s = l.sheets?.[e] || {};
        let a = {
          i18n_start: keyTimestampUtil.timestampStore.i18n_start || 0,
          i18n_end: keyTimestampUtil.timestampStore.i18n_end || 0,
          external_start: objectPathGetDefault.getObjectPathDefault(platformDocUtils.O9Z, "sheet.importExternalStart", 0),
          external_exec_start: objectPathGetDefault.getObjectPathDefault(platformDocUtils.O9Z, "sheet.externalLoadStart", 0),
          external_exec_end: objectPathGetDefault.getObjectPathDefault(platformDocUtils.O9Z, "sheet.externalLoadSuccess", 0),
          module_start: objectPathGetDefault.getObjectPathDefault(platformDocUtils.O9Z, "sheet.garrIndexLoadStart", 0),
          module_end: objectPathGetDefault.getObjectPathDefault(platformDocUtils.O9Z, "sheet.garrIndexLoadSuccess", 0),
          mount_start: i,
          sheet_manager_init: l.sheet_manager_init || 0,
          sheet_create_token: l.sheet_create_token || 0,
          sheet_create_sdk: l.sheet_create_sdk || 0,
          sheet_fetch_client_vars_start: l.sheet_fetch_client_vars_start || 0,
          sheet_fetch_client_vars_end: l.sheet_fetch_client_vars_end || 0,
          sheet_to_usage: l.sheet_to_usage || 0,
          spread_loaded: l.spread_loaded || 0,
          sheet_mount_start: s.sheet_mount_start || 0,
          sheet_performance_embed_comp_render_start: s.sheet_performance_embed_comp_render_start || 0,
          sheet_performance_embed_comp_render_end: s.sheet_performance_embed_comp_render_end || 0,
          embed_sheet_comp_render_start: s.embed_sheet_comp_render_start || 0,
          embed_sheet_comp_mount: s.embed_sheet_comp_mount || 0,
          embed_sheet_comp_render_end: s.embed_sheet_comp_render_end || 0,
          sheet_biz_load_start: s.sheet_biz_load_start || 0,
          sheet_biz_load_end: s.sheet_biz_load_end || 0,
          sheet_mount_end: s.sheet_mount_end || 0,
          ...this.getSheetResourceTiming()
        };
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(a, this.id);
      } catch (e) {
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadError({
          id: this.id,
          type: this.type,
          errorMessage: e.message || "reportSheetBlockLoadStage",
          errorType: "reportSheetBlockLoadStage"
        });
      }
    }
    getSheetResourceTiming() {
      let e = {};
      if (!performance.getEntriesByType) {
        return e;
      }
      if (this.sheetResourceTiming) {
        return this.sheetResourceTiming;
      }
      this.sheetResourceTiming = e;
      let i = (e, i, r) => {
        e[`resource_${r}_start`] = i.requestStart + performance.timing.navigationStart;
        e[`resource_${r}_end`] = i.responseEnd + performance.timing.navigationStart;
        e[`resource_${r}_cached`] = Number(i.transferSize === 0);
      };
      return window.performance.getEntriesByType("resource").reduce((e, r) => {
        if (/PCDocSheetBridge\.\w*\.chunk\.js/.test(r.name)) {
          i(e, r, "embed");
        } else if (/sheet\/.*?\/index_merged\.js/.test(r.name)) {
          i(e, r, "module");
        } else if (/bear-sheet-external\..*?.js/.test(r.name)) {
          i(e, r, "external");
        }
        return e;
      }, this.sheetResourceTiming);
    }
    getSheetScrollWidth(e) {
      return (e + 2) * (this.props.zoom ?? 1);
    }
    get actualScrollLeft() {
      return this.scrollLeft + this.preViewInfo.scrollLeft;
    }
    get scrollLeft() {
      var e;
      let r = (e = this.props.scrollManage) === null || e === undefined ? undefined : e.getScrollStatus();
      return (r == null ? undefined : r.scrollLeft) || this.scrollContainer?.scrollLeft || 0;
    }
    get actualClientWidth() {
      var e;
      let r = (e = this.scrollContainer) === null || e === undefined ? undefined : e.querySelector(`.${docxScrollableConstants.scrollableItem}`);
      return (r ? r.clientWidth - 2 : this.scrollContainer?.clientWidth) || 0;
    }
    get scrollContainer() {
      let {
        scrollManage: e
      } = this.props;
      if (e) {
        return e.getScrollContainer();
      } else {
        return this.mountPoint;
      }
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsx(docxBlockRenderer.useBlockFetchStatus, {
        blockId: this.props.blockId,
        blockType: docBlockTypeConstants.blockTypeConstants.SHEET,
        fetcher: this.fetcher,
        onFetchFail: this.onBlockFetchFail,
        renderPlaceholder: this.renderComponent,
        renderErrorPlaceholder: () => null,
        renderComponent: () => this.renderComponent(() => {
          this.handleSheetDidRender();
        })
      });
    }
    constructor(i) {
      var r;
      var n;
      super(i);
      r = this;
      eo(this, "bridge", undefined);
      en(this, "mentionUserService", s, this);
      en(this, "fetcher", a, this);
      en(this, "longPressSignal", c, this);
      eo(this, "subs", []);
      eo(this, "screenShot", undefined);
      eo(this, "activatedCommentSet", new Set());
      eo(this, "isInFullScreen", false);
      eo(this, "preViewInfo", {
        scrollLeft: 0,
        scrollWidth: 0,
        clientWidth: 0,
        viewHeight: 0
      });
      eo(this, "vcFollowHelper", undefined);
      eo(this, "mountPoint", null);
      eo(this, "isBlockLoaded", false);
      eo(this, "isRendered", false);
      eo(this, "subscriptions", []);
      eo(this, "isRenderOutsideSlot", false);
      eo(this, "hasFlushContent", false);
      eo(this, "isFetchFailed", false);
      eo(this, "unSubscribeAfterApply", null);
      eo(this, "cancelCallbacks", null);
      eo(this, "removeRowHeaderHiddenChangeHandler", undefined);
      eo(this, "removeViewFlushHandler", undefined);
      eo(this, "obs", undefined);
      eo(this, "loadableBridge", undefined);
      eo(this, "loadBridgeResolve", undefined);
      eo(this, "sheetResourceTiming", null);
      en(this, "depLoader", d, this);
      en(this, "blockAuthorService", u, this);
      en(this, "compatibleSignalAdapterService", h, this);
      eo(this, "state", {
        isSelected: !!this.selectionAPI.getSelection().find(e => {
          let {
            id: i
          } = e;
          return this.id === i;
        }),
        isHoverBlockIcon: false
      });
      eo(this, "contextMenuLocked", false);
      eo(this, "scrollFrom", undefined);
      eo(this, "offUndoManagerReady", undefined);
      eo(this, "shouldRenderPlainText", false);
      eo(this, "handleContextMenuShowLock", e => {
        this.contextMenuLocked = e;
      });
      eo(this, "showMobileContextMenu", (e, i) => {
        let {
          id: r
        } = docxSheetPasteUtils.parseTokenId(this.token);
        if (this.bridge.showContextMenu) {
          this.bridge.showContextMenu(r, e, i);
        }
      });
      eo(this, "getContextMenus", () => {
        let {
          id: e
        } = docxSheetPasteUtils.parseTokenId(this.token);
        if (this.bridge.getContextMenus) {
          return this.bridge.getContextMenus(e);
        } else {
          return [];
        }
      });
      eo(this, "handleContextMenuClick", e => {
        let {
          id: i
        } = docxSheetPasteUtils.parseTokenId(this.token);
        if (this.bridge.handleContextMenuClick) {
          this.bridge.handleContextMenuClick(i, e);
        }
      });
      eo(this, "enterSheetFullScreenMode", () => {
        this.isInFullScreen = true;
        this.offUndoManagerReady = docxEditorCore.onServiceReady(this.editorAPI, diProviderUndoManager.undoManagerProvider, e => {
          e.setIsInBlockFullScreenMode(true);
        });
      });
      eo(this, "exitSheetFullScreenMode", () => {
        var e;
        var i;
        this.isInFullScreen = false;
        if ((e = this.offUndoManagerReady) !== null && e !== undefined) {
          e.call(this);
        }
        if ((i = this.getService(diProviderUndoManager.undoManagerProvider, {
          optional: true
        })) !== null && i !== undefined) {
          i.setIsInBlockFullScreenMode(false);
        }
      });
      eo(this, "handleDocumentClick", e => {
        var r;
        var n;
        var o;
        let {
          blockManager: l
        } = this;
        let s = e.target.closest(".sheet-block-container");
        if (s && s === this.mountPoint) {
          let {
            id: e
          } = docxSheetPasteUtils.parseTokenId(this.token);
          let o = (r = this.bridge) === null || r === undefined ? undefined : r.getSheetViewContent(e)?.sheetView;
          if (!o) {
            return;
          }
          let {
            isRowColHeaderHidden: s
          } = o;
          if (s && this.model.config.editable) {
            return;
          }
          if ((n = this.compatibleSignalAdapterService) !== null && n !== undefined) {
            n.toggleShowToolbar(this);
          }
          if (!this.state.isSelected) {
            this.selectionAPI.setSelection([]);
          }
          l.dispatch(renderEventConstants.activeNodeActions.ADD, this.id);
        } else if (!this.checkSheetBlockToolbarEnabled(e.composedPath()[1] || e.target)) {
          if ((o = this.compatibleSignalAdapterService) !== null && o !== undefined) {
            o.toggleHideToolbar(this);
          }
          l.dispatch(renderEventConstants.activeNodeActions.REMOVE, this.id);
        }
      });
      eo(this, "vcInit", () => {
        if (!this.obs) {
          this.vcHover();
        }
      });
      eo(this, "vcDes", () => {
        var e;
        if ((e = this.obs) !== null && e !== undefined) {
          e.disconnect();
        }
        this.obs = null;
      });
      eo(this, "handleEditableChange", async e => {
        let i = await this.getLoadableBridge();
        if (i) {
          i.setDocxEditable(e);
        }
      });
      eo(this, "getBlockCurrentVersion", () => this.bridge.getSheetBaseRev());
      eo(this, "handleSelectionChanged", (e, i) => {
        if (!this.model.config.editable) {
          return;
        }
        let r = i.some(e => e.id === this.id);
        if (this.state.isSelected !== r) {
          this.setState({
            isSelected: r
          });
        }
      });
      eo(this, "getScrollWidth", () => this.preViewInfo.scrollWidth);
      eo(this, "scrollToOffsetRatio", function () {
        var e;
        let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        let n = i * (r.getScrollWidth() - r.actualClientWidth);
        let {
          id: o
        } = docxSheetPasteUtils.parseTokenId(r.model.snapshot.token);
        if ((e = r.bridge) !== null && e !== undefined) {
          e.sheetViewScrollToPos(o, n);
        }
      });
      eo(this, "getOffsetRatio", () => {
        let e = this.getScrollWidth() - this.actualClientWidth;
        let i = this.actualScrollLeft / e;
        if (i !== undefined && (Number.isNaN(i) || !Number.isFinite(i))) {
          i = 0;
        }
        return i;
      });
      eo(this, "handlePanelActiveChanged", e => {
        if (e) {
          var i;
          var r;
          var n;
          if ((n = this.bridge) !== null && n !== undefined && (r = n.bridge) !== null && r !== undefined && (i = r.supplementMentionIdByTableId) !== null && i !== undefined) {
            i.call(r, docxSheetPasteUtils.parseTokenId(this.token).id);
          }
        }
      });
      eo(this, "vcHover", () => {
        if (this.hostElement) {
          this.obs = new MutationObserver(e => {
            let {
              bridge: i
            } = this;
            for (let o of e) {
              if (o.attributeName === "class") {
                var r;
                var n;
                let {
                  id: e
                } = docxSheetPasteUtils.parseTokenId(this.token);
                let l = o.target.classList.contains("vc-hover");
                if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp || browserEnvironmentDetectionUtils.browserDetector.isH5) {
                  let n = l ? docBlockTypeConstants.focusModeConstants.FOCUS_ON_BLOCK : docBlockTypeConstants.focusModeConstants.NONE;
                  if (i != null && (r = i.updateSelectionState) !== null && r !== undefined) {
                    r.call(i, e, n, {
                      border: {
                        color: themeDesignTokensProvider.getTokenValue("colorful-carmine"),
                        width: 1
                      }
                    });
                  }
                } else if (i != null && (n = i.updateSheetSelectionState) !== null && n !== undefined) {
                  n.call(i, e, l, {
                    border: {
                      color: themeDesignTokensProvider.getTokenValue("colorful-carmine"),
                      width: 1
                    }
                  });
                }
              }
            }
          });
          this.obs.observe(this.hostElement, {
            attributes: true,
            attributeFilter: ["class"],
            attributeOldValue: true
          });
        }
      });
      eo(this, "setRef", e => {
        let {
          mountPoint: i
        } = this;
        if (!e && i) {
          i.removeEventListener("touchstart", this.handleTouchStart);
          i.removeEventListener("keydown", this.handleKeyDown);
        }
        this.mountPoint = e;
        if (i = e) {
          i.addEventListener("touchstart", this.handleTouchStart);
          i.addEventListener("keydown", this.handleKeyDown);
        }
      });
      eo(this, "handleKeyDown", e => {
        let i = browserEnvironmentDetectionUtils.browserDetector.isMac || browserEnvironmentDetectionUtils.browserDetector.isIPad;
        if ([{
          metaCtrlKey: true,
          code: "KeyZ",
          shiftKey: false
        }, {
          metaCtrlKey: true,
          code: i ? "KeyZ" : "KeyY",
          shiftKey: i
        }].find(i => i.metaCtrlKey === e[keyboardShortcutNormalizer.metaCtrlKey] && i.code === e.code && i.shiftKey === e.shiftKey)) {
          e.stopPropagation();
        }
      });
      eo(this, "onScrollContainerResize", debounceUtilWrapper.createDebounce(e => {
        if (!this.token) {
          return;
        }
        let {
          id: l
        } = docxSheetPasteUtils.parseTokenId(this.token);
        let s = -2 + !!browserEnvironmentDetectionUtils.browserDetector.isMobile * 4;
        if (e) {
          let i = e + s;
          i += sheetErrorsAndConfig.layoutSize24Alt * (this.props.zoom ?? 1);
          if (this.bridge) {
            this.bridge.setWidth(i, 0, l);
          }
          return;
        }
        let a = this.mountPoint?.offsetWidth ? this.mountPoint?.offsetWidth + s : 0;
        if (a) {
          a += sheetErrorsAndConfig.layoutSize24Alt * (this.props.zoom ?? 1);
        }
        if (this.bridge) {
          this.bridge.setWidth(a, 0, l);
        }
      }, 100));
      eo(this, "setUpBridgeAndRenderSheet", async () => {
        var i;
        var r;
        var n;
        var o;
        var l;
        var s;
        var a;
        var c;
        var d;
        var u;
        var h;
        let {
          scrollManage: p,
          recursionProps: f,
          blockId: g,
          onBlockReady: m
        } = this.props;
        let b = this.model.getHistoryBlockVersionData();
        let {
          token: y,
          id: k
        } = docxSheetPasteUtils.parseTokenId(this.token);
        let S = {
          total_duration: 0,
          init_duration: 0,
          status: "success",
          info: ""
        };
        if (!y || !k || !this.mountPoint) {
          this.collectDocBugTrackEvent("beforeLoadBridge");
          return;
        }
        let {
          model: x
        } = this;
        let _ = Date.now();
        try {
          let e = `third_party_id:${k} recordid: ${platformDocUtils.p5T(this.model.record.id)}`;
          this.depLoader.reporter.report(es, {
            extra: [`${e}, action: load sheet bridge`]
          }, {
            mergeKey: "extra",
            delay: 5000
          });
          this.bridge = await x.loadBridge();
          if ((c = this.loadBridgeResolve) !== null && c !== undefined) {
            c.call(this, this.bridge);
          }
          this.loadBridgeResolve = null;
          S.init_duration = Date.now() - _;
          if (this.bridge.onAfterApply) {
            this.unSubscribeAfterApply = await ((u = (h = this.bridge).onAfterApply) === null || u === undefined ? undefined : u.call(h, k, e => {
              docxSheetPasteUtils.emitContentChange(this.props.recursionProps.eventEmitter);
              if (e.local) {
                this.model.notifyUserEdit();
              }
            }));
          }
          this.depLoader.reporter.report(es, {
            extra: [`${e}, action: mount sheet start`]
          }, {
            mergeKey: "extra",
            delay: 5000
          });
          if (!this.mountPoint) {
            this.collectDocBugTrackEvent("afterLoadBridge");
            return;
          }
          await this.bridge.mountSheetBlock(this.model.recordId, {
            token: y,
            sheetId: k,
            recordId: this.model.recordId,
            host: this.mountPoint,
            undoDispatcher: (d = f.undoModule) === null || d === undefined ? undefined : d.getUndoDispatcher(),
            deleteFn: emptyExportFunction.emptyFunction,
            isInHistory: x.config.get("isHistory"),
            historyBlockVersionData: b,
            onCutWholeSheet: () => {
              this.selectionAPI.setSelection([{
                id: this.id,
                type: docxBlockSelectionHandler_1.blockTypes.BLOCK
              }]);
              (function (e) {
                e.copyOrCutSelectedBlocks("cut");
              })(this.selectionAPI);
            },
            onClientvarFetchError: () => {
              this.onBlockFetchFail("sheet clientvar fetch error");
            },
            onHeightDidUpdate: () => {
              this.blockManager.layoutManager.notifyNodeHeightChange(this.id);
            },
            onContextMenuComment: () => {
              if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
                this.commentModule.startNewDocComment({
                  type: commentEventConstants.ContentType.ContentComment,
                  selectedBlocks: [{
                    id: this.id,
                    type: docxBlockSelectionHandler_1.blockTypes.BLOCK
                  }],
                  isThirdPartyComment: true,
                  callSource: "Sheet"
                });
              } else {
                this.commentModule.triggerStartNewDocComment({
                  type: commentEventConstants.ContentType.ContentComment,
                  selectedBlocks: [{
                    id: this.id,
                    type: docxBlockSelectionHandler_1.blockTypes.BLOCK
                  }],
                  isThirdPartyComment: true,
                  callSource: "Sheet"
                });
              }
            },
            onActiveCommentChange: () => {
              if ((!browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isIPad) && !this.contextMenuLocked && this.commentModule) {
                x.activeCommentChange(this.commentModule, this.selectionAPI);
              }
            },
            onCommentLoaded: () => {
              this.handleCommentLoaded();
            },
            scrollToSheetBlock: async e => {
              let i = docxSheetPasteUtils.findSheetBlockId(e, this.blockManager);
              if (i) {
                await this.viewport.scrollToRecord(i);
              }
            },
            onMentionChange: (e, i) => {
              if (docBlockPermissionUtils.isDesktopEnabled) {
                if (this.mentionUserService.getIsMentionPanelVisible()) {
                  var r;
                  var n;
                  var o;
                  if ((o = this.bridge) !== null && o !== undefined && (n = o.bridge) !== null && n !== undefined && (r = n.supplementMentionIdByTableId) !== null && r !== undefined) {
                    r.call(n, k);
                  }
                }
                this.mentionUserService.handleThirdPartyMentionChanged(this.record.id, e, i.forceUpdateView);
              }
            },
            reportSheetBlockLoadStage: () => {
              this.reportSheetBlockLoadStage(k, _);
              blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.TTU, {
                id: this.props.model.id,
                time: Date.now()
              });
            }
          });
          docxSheetPasteUtils.emitContentChange(this.props.recursionProps.eventEmitter);
          this.depLoader.reporter.report(es, {
            extra: [`${e}, hasMountPoint: ${!!this.mountPoint}, action: mount sheet end`]
          }, {
            mergeKey: "extra",
            delay: 5000
          });
          window.sheetRenderCostTime = Date.now() - window.sheetRenderStartTime;
          this.isBlockLoaded = true;
        } catch (e) {
          S.status = "fail";
          S.info = typeof e == "string" ? e : String(e);
          this.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("sheet_block_loaded_dev", S);
          throw e;
        }
        this.onScrollContainerResize(this.props.scrollContainerWidth);
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          this.blockManager.addListener(editorUiConstants.editorResizeClass, this.handleEditorResize);
        }
        if (this.isBufferEntered()) {
          this.onBufferEnter();
        }
        this.bridge.setOnCommentBatchUpdate(k, () => {
          if (this.commentModule) {
            x.handleCommentUpdated(this.commentModule);
          }
        });
        if (p) {
          this.cancelCallbacks = [p.registerSubScroll(this.handleBlockScroll), p.onScroll(this.handleScroll)];
        }
        if (this.props.zoom) {
          this.bridge.setZoom(this.props.zoom);
        }
        this.bridge.setDocxEditable(this.blockManager.config.editable);
        if ((r = (n = this.bridge).registerScrollContainerRef) !== null && r !== undefined) {
          r.call(n, k, (i = f.rectForFixed) === null || i === undefined ? undefined : i.scrollableBlockList.get(g)?.eleRef);
        }
        this.removeViewFlushHandler = (o = (l = this.bridge).registerViewFlushHandler) === null || o === undefined ? undefined : o.call(l, k, () => this.handleSheetViewFlush(k));
        this.removeRowHeaderHiddenChangeHandler = (s = (a = this.bridge).registerRowHeaderHiddenChangeHandler) === null || s === undefined ? undefined : s.call(a, k, this.handleRowHeaderHiddenChange);
        S.total_duration = Date.now() - _;
        this.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("sheet_block_loaded_dev", S);
        if (m) {
          m();
        }
      });
      eo(this, "handleEditorResize", e => {
        if (e && e.editorWidth) {
          let i = e.editorWidth;
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
            let e = gridColumnLayoutUtils.getGridColumnAncestry(this.id, this.blockManager);
            if (e && e.gridColumnBlock) {
              let r = this.blockManager.getBlockViewByBlockIdNotCheck(e.gridColumnBlock.id);
              i = Math.min((r == null ? undefined : r.hostElement.getBoundingClientRect().width) || Infinity, i);
            }
          }
          this.onScrollContainerResize(i);
        } else {
          this.onScrollContainerResize();
        }
      });
      eo(this, "takeScreenshot", async i => {
        var r;
        var n;
        var o;
        let {
          status: l,
          detail: s
        } = i;
        if (l === docBlockTypeConstants.positionConstants.start) {
          if (!e.startTakeScreenshot) {
            e.startTakeScreenshot = true;
            let i = (n = s == null ? undefined : s.isBlob) === null || n === undefined || n;
            this.screenShot = await ((r = this.bridge) === null || r === undefined ? undefined : r.takeScreenShot(i));
          }
        } else if (l === docBlockTypeConstants.positionConstants.end && e.startTakeScreenshot) {
          e.startTakeScreenshot = false;
          await ((o = this.screenShot) === null || o === undefined ? undefined : o.done());
        }
      });
      eo(this, "handleShadowChange", (e, i) => {
        var r;
        var n;
        var o;
        var l;
        var a;
        var c;
        var d;
        var u;
        var h;
        var p;
        let {
          scrollManage: b
        } = this.props;
        let y = (l = this.bridge.bridge) === null || l === undefined ? undefined : (o = l.sheetManager) === null || o === undefined ? undefined : (n = o.sheetComponents) === null || n === undefined ? undefined : (r = n.get(e)) === null || r === undefined ? undefined : r.getEmbedSheetRef().fasterStyle;
        let {
          sheetView: w
        } = this.bridge.getSheetViewContent(e);
        if (!w || !y || !b) {
          return;
        }
        let {
          isRowColHeaderHidden: k
        } = w;
        let S = w.tableContainer().height;
        let {
          position: M
        } = y;
        switch (M) {
          case "absolute":
            {
              let r = ((p = this.bridge) === null || p === undefined ? undefined : (h = p.bridge) === null || h === undefined ? undefined : (u = h.sheetManager) === null || u === undefined ? undefined : (d = u.embedShellManager) === null || d === undefined ? undefined : (c = d.getShellBySheetId) === null || c === undefined ? undefined : (a = c.call(d, e)) === null || a === undefined ? undefined : a._sheetView?._bottomMargin) || 5;
              let n = y.height.replace("px", "");
              if (n > i) {
                b.emitShadowStyleChange({
                  bottom: 3,
                  height: i - r
                });
                break;
              }
              n = S - r + 1;
              let o = w.getScrollPos().offsetY;
              if (k) {
                n -= 23;
                o += 23;
              }
              b.emitShadowStyleChange({
                height: n * (this.props.zoom ?? 1),
                top: o * (this.props.zoom ?? 1),
                bottom: "unset"
              });
              break;
            }
          case "fixed":
            {
              let {
                right: e
              } = b.getScrollContainer().getBoundingClientRect();
              let {
                height: i,
                top: r
              } = y;
              i = parseFloat(i.replace("px", "")) * (this.props.zoom ?? 1);
              r = parseFloat(r.replace("px", "")) * (this.props.zoom ?? 1);
              if (k) {
                i -= 23;
                r += 23;
              }
              b.emitShadowStyleChange({
                position: y.position,
                top: r,
                height: i,
                left: e - 10
              });
            }
        }
      });
      eo(this, "handleRowHeaderHiddenChange", e => !!this.editPermission && (this.setSyncCursorViewWrapperPosition(e), false));
      eo(this, "syncCursorWrapperChange", () => {
        var i;
        let {
          id: r
        } = docxSheetPasteUtils.parseTokenId(this.token);
        let n = (i = this.bridge) === null || i === undefined ? undefined : i.getSheetViewContent(r)?.sheetView;
        if (!n) {
          return;
        }
        let {
          isRowColHeaderHidden: o
        } = n;
        this.setSyncCursorViewWrapperPosition(o);
      });
      eo(this, "setSyncCursorViewWrapperPosition", e => {
        let i = this.hostElement.querySelector(".sync-cursor-view-wrap");
        if (i) {
          if (e) {
            i.style.height = "calc(100% - 18px)";
            i.style.top = "18px";
          } else {
            i.style.height = "unset";
            i.style.top = "0";
          }
        }
      });
      eo(this, "handleSheetViewFlush", e => {
        var i;
        let {
          scrollManage: n,
          scrollContainerWidth: o
        } = this.props;
        let l = this.bridge.getSheetViewContent(e);
        if (!l) {
          return;
        }
        let {
          trDocSize: s,
          tlDocSize: a,
          sheetView: c
        } = l;
        let d = false;
        let u = false;
        let h = false;
        let p = c.height;
        let f = c.brTable().contentDoc();
        let g = s.width + a.width;
        if (this.preViewInfo.clientWidth !== o) {
          this.preViewInfo.clientWidth = o;
          u = true;
        }
        if (this.preViewInfo.viewHeight !== p) {
          if (this.props.recursionProps.isPresentationMode && (!browserEnvironmentDetectionUtils.browserDetector.firefox || p > 0)) {
            if ((i = this.editorAPI.getService(presentationModeProvider.presentationMode, {
              optional: true
            })) !== null && i !== undefined) {
              i.forceUpdate();
            }
          }
          this.preViewInfo.viewHeight = p;
          h = true;
        }
        if (this.preViewInfo.scrollLeft !== f.posX) {
          this.preViewInfo.scrollLeft = f.posX;
          d = true;
        }
        if (this.preViewInfo.scrollWidth !== g) {
          this.preViewInfo.scrollWidth = g;
          u = true;
        }
        if (u && n) {
          requestAnimationFrame(() => {
            n.emitSubViewChange({
              width: this.getSheetScrollWidth(g)
            });
          });
        }
        if (h && n) {
          n.emitShadowStyleChange({
            height: p * (this.props.zoom ?? 1),
            bottom: 5
          });
        }
        if (d && n) {
          requestAnimationFrame(() => {
            n.emitSubScroll({
              scrollLeft: f.posX * (this.props.zoom ?? 1),
              scrollWidth: this.getSheetScrollWidth(g)
            }, this.scrollFrom);
          });
        }
        this.handleShadowChange(e, p);
        this.calcScrollStateToVc(this.scrollFrom);
        this.scrollFrom = undefined;
      });
      eo(this, "getCanvas", () => {
        if (!this.mountPoint) {
          return null;
        }
        let e = this.mountPoint.querySelector(".spreadsheet-canvas");
        return e ?? this.mountPoint;
      });
      eo(this, "getScrollStatus", () => {
        if (!this.bridge) {
          return;
        }
        let {
          id: e
        } = docxSheetPasteUtils.parseTokenId(this.token);
        if (e) {
          return this.bridge.getScrollStatus(e);
        }
      });
      eo(this, "getSheetActiveStatus", () => {
        var i;
        var n;
        if (!this.bridge) {
          return false;
        }
        let {
          id: o
        } = docxSheetPasteUtils.parseTokenId(this.token);
        if (!o) {
          return false;
        }
        let l = this.bridge.bridge?.sheetManager;
        let s = !!(l == null ? undefined : (i = l.checkSheetActiveElement) === null || i === undefined ? undefined : i.call(l, o));
        let a = (l == null ? undefined : (n = l.getSheetFromId(o)) === null || n === undefined ? undefined : n.getSelections()?.length) !== 0;
        return s && a;
      });
      eo(this, "handleBlockScroll", e => {
        if (!this.props.scrollManage) {
          return;
        }
        let {
          id: o
        } = docxSheetPasteUtils.parseTokenId(this.token);
        let {
          trDocSize: l,
          tlDocSize: s,
          sheetView: a
        } = this.bridge.getSheetViewContent(o);
        let c = l.width + s.width;
        let d = a.brTable().contentDoc();
        if (typeof e == "number") {
          this.bridge.scrollSheetViewPosX(o, e / (this.props.zoom ?? 1));
        } else {
          this.bridge.sheetViewScrollToPos(o, e.scrollLeft / (this.props.zoom ?? 1));
        }
        this.props.scrollManage.emitSubScroll({
          scrollLeft: d.posX * (this.props.zoom ?? 1),
          scrollWidth: this.getSheetScrollWidth(c)
        });
      });
      eo(this, "handleScroll", (e, i) => {
        var r;
        var n;
        let o = (r = this.props.scrollManage) === null || r === undefined ? undefined : r.getScrollStatus().scrollLeft;
        if ((n = this.blockAuthorService.get()) !== null && n !== undefined) {
          n.updateWhenHorizontalWidthChange({
            blockId: this.id,
            offset: o
          });
        }
        this.calcScrollStateToVc(i);
      });
      eo(this, "handleMouseDown", e => {
        if (e.target.nodeName.toLocaleLowerCase() === "canvas") {
          e.stopPropagation();
        }
      });
      eo(this, "showSyncSelection", () => {
        var e;
        var i;
        if (this.blockManager.isDestroyed() || !this.isRendered || !this.props.syncCursorBgColor) {
          return;
        }
        let {
          id: r
        } = docxSheetPasteUtils.parseTokenId(this.token);
        if ((i = this.bridge) !== null && i !== undefined && (e = i.highlightContentView) !== null && e !== undefined) {
          e.call(i, r, true, {
            background: this.props.syncCursorBorderColor,
            opacity: 0.2
          });
        }
      });
      eo(this, "getBlockWrapper", () => this.mountPoint ? this.mountPoint.querySelector(".faster-wrapper") : this.hostElement);
      eo(this, "hideSyncCursorSelection", () => {
        var e;
        var i;
        if (this.blockManager.isDestroyed() || !this.isRendered) {
          return;
        }
        let {
          id: r
        } = docxSheetPasteUtils.parseTokenId(this.token);
        if ((i = this.bridge) !== null && i !== undefined && (e = i.highlightContentView) !== null && e !== undefined) {
          e.call(i, r, false);
        }
      });
      eo(this, "handleTouchStart", () => {
        this.selectionAPI.removeAllSelection();
      });
      eo(this, "handleSheetDidRender", () => {
        this.isRendered = true;
        this.setSelected(this.state.isSelected);
        document.addEventListener("click", this.handleDocumentClick, true);
        if (this.longPressSignal && browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          this.subs = [this.longPressSignal.subscribe(this.handleContextMenuShowLock)];
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          this.initReadStatus(!!this.isMobileEditMode);
        }
        if (this.props.recursionProps.isPresentationMode && browserEnvironmentDetectionUtils.browserDetector.firefox) {
          var e;
          if ((e = this.editorAPI.getService(presentationModeProvider.presentationMode, {
            optional: true
          })) !== null && e !== undefined) {
            e.forceUpdate();
          }
        }
      });
      eo(this, "onBlockFetchFail", e => {
        var i;
        var r;
        this.isFetchFailed = true;
        if ((i = (r = this.props).updateOuterLoadingComponent) !== null && i !== undefined) {
          i.call(r, reactJsxRuntimeCoreReexport.jsx(docxBlockRenderer.DocxBlockRenderer, {
            onClickRetry: () => {
              var e;
              var i;
              if ((e = (i = this.props).updateOuterLoadingComponent) !== null && e !== undefined) {
                e.call(i, this.props.loadingComponent);
              }
              this.fetcher.retryFetchBlock(this.id);
            },
            blockError: {
              id: this.model.id,
              type: this.model.type,
              errorMessage: e
            }
          }));
        }
      });
      eo(this, "handleRenderFailed", e => {
        let i = [sheetErrorsAndConfig.SheetErrors.htmlParseError, sheetErrorsAndConfig.SheetErrors.htmlParseError2, sheetErrorsAndConfig.SheetErrors.sheetCreateFailedError, sheetErrorsAndConfig.SheetErrors.sheetMountError];
        if (e && i.includes(e.code)) {
          this.blockManager.applyTransaction("removeInvalidPlaceholder", e => {
            documentBlockOperations.removeBlockItems(e, [this.model]);
          }, {
            undoable: false
          });
        }
      });
      eo(this, "renderComponent", e => {
        let {
          isShowLoading: i,
          model: r,
          historyStyle: n,
          isDeleteHistory: o,
          style: l
        } = this.props;
        this.isFetchFailed = false;
        return reactJsxRuntimeCoreReexport.jsx(ec, {
          isShowLoading: i,
          isRenderOutsideSlot: this.isRenderOutsideSlot,
          recordId: r.recordId,
          setRef: this.setRef,
          token: this.token,
          bridge: this.bridge,
          setUpBridgeAndRenderSheet: this.setUpBridgeAndRenderSheet,
          renderFailedCb: this.handleRenderFailed,
          renderFinishCb: e,
          historyStyle: n,
          isDeleteHistory: o,
          historyMaskStyle: l,
          blockManager: this.blockManager
        });
      });
      let {
        model: o,
        editorAPI: l
      } = this.props;
      let p = l.config.get("outsideBlockTypes");
      this.shouldRenderPlainText = !!l.config.get("shouldRenderPlainText");
      this.isRenderOutsideSlot = (n = p == null ? undefined : p.has(o.type)) !== null && n !== undefined && n;
      window.sheetRenderStartTime = Date.now();
      this.props.model.loadBridge().then(async e => {
        await this.props.model.bridge.waitUntilBridgeReady();
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.JS_READY, {
          id: this.props.model.id,
          time: new Date().getTime()
        });
      }).catch(e => e);
    }
  };
  eo(p, "startTakeScreenshot", false);
  s = el(p.prototype, "mentionUserService", [mentionUserServiceProvider.mentionUserSvcKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  a = el(p.prototype, "fetcher", [loadableBlockFetcherProvider.loadableBlockToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  c = el(p.prototype, "longPressSignal", [n, z], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  d = el(p.prototype, "depLoader", [sheetBlockdepLoaderProvider.sheetBlockdepLoader], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  u = el(p.prototype, "blockAuthorService", [o, blockAuthorServiceProvider.blockAuthorProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  h = el(p.prototype, "compatibleSignalAdapterService", [l, diProviderViewSignalAdapter.viewSignalAdapter], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let ea = p;
  class ec extends reactCoreLibraryReexport.Component {
    async componentDidMount() {
      if (!this.props.renderFinishCb) {
        return;
      }
      let {
        token: e,
        bridge: i
      } = this.props;
      this.props.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "noRenderSheet",
        info: JSON.stringify({
          hasToken: !!e,
          hasBridge: !!i
        })
      });
      if (!i && e !== "") {
        this.didRenderContent = true;
        await this.props.setUpBridgeAndRenderSheet();
        this.props.renderFinishCb();
      }
    }
    async componentDidUpdate(e) {
      if (this.props.renderFinishCb && this.props.token !== "" && (!this.didRenderContent && !this.props.bridge || e.token && e.token !== this.props.token)) {
        this.didRenderContent = true;
        try {
          await this.props.setUpBridgeAndRenderSheet();
        } catch (e) {
          this.props.renderFailedCb(e);
        }
        this.props.renderFinishCb();
      }
    }
    render() {
      let {
        isShowLoading: e,
        isRenderOutsideSlot: i,
        recordId: r,
        historyStyle: n,
        historyMaskStyle: o,
        isDeleteHistory: l
      } = this.props;
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "sheet-block-container",
          ref: this.props.setRef,
          contentEditable: false,
          style: {
            minHeight: e ? "160px" : "",
            ...n
          },
          tabIndex: -1,
          children: i && blockMacroUtils.formatOutsideTag(r)
        }), l && reactJsxRuntimeCoreReexport.jsx("div", {
          className: "history-diff-delete-mask",
          style: {
            backgroundColor: o == null ? undefined : o.backgroundColor
          },
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: "history-diff-delete-mask-icon",
            children: reactJsxRuntimeCoreReexport.jsx(flowDocCloseIcon.CloseIcon, {
              style: {
                fill: o == null ? undefined : o.color
              }
            })
          })
        }, "delete-mask")]
      });
    }
    constructor(...e) {
      super(...e);
      eo(this, "didRenderContent", false);
    }
  }
  var ed = ea;
  require.d(exports, {
    SheetBlockViewManager: function () {
      return ed;
    }
  });
}