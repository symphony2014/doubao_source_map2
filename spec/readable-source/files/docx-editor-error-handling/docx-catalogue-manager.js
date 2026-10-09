// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxCatalogueManager'
// - Renamed export 'W' to 'catalogueEventTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 895177
         */
module.exports = function (module, exports, require) {
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var clipboardLodashChainExport = require("clipboard-lodash-chain-export") /*id: 288816*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  function u(e) {
    let i = {
      orderMap: {}
    };
    let r = null;
    e.forEach(e => {
      let n = e.positionPath.length;
      e.positionPath.reduce((i, o, l) => {
        let [s, a] = o;
        if (a === null) {
          r = e;
          return i;
        } else {
          i[s] ||= {
            orderMap: {}
          };
          if (l === n - 1) {
            i[s].target = e;
          }
          return i[s].orderMap;
        }
      }, i.orderMap);
    });
    let n = [];
    (function e(i, r) {
      let {
        orderMap: n
      } = i;
      let o = Object.keys(n).sort((e, i) => Number(e) - Number(i));
      if (o.length) {
        o.forEach(i => {
          let o = n[i];
          if (o.target) {
            r.push(o.target);
          }
          e(o, r);
        });
      }
    })(i, n);
    if (r) {
      n.unshift(r);
    }
    return n;
  }
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  require("fullscreen-mode-detector") /*id: 71569*/;
  var docCatalogueConstants = require("doc-catalogue-constants") /*id: 512439*/;
  function g(e) {
    let i = new Set();
    e.forEach(e => e.sourceLevel !== 0 && i.add(e.sourceLevel));
    let r = [...i].sort();
    return e.map(e => ({
      ...e,
      level: e.sourceLevel === docCatalogueConstants.catalogueConfig0 ? 1 : r.indexOf(e.sourceLevel) + 1
    }));
  }
  function p(e, i) {
    for (let {
      data: {
        type: r
      },
      id: n
    } of Object.values(i)) {
      if (r === docBlockTypeConstants.blockTypeConstants.PAGE) {
        return e === n;
      }
    }
    return false;
  }
  var docxSignalSubjectRegistry = require("docx-signal-subject-registry") /*id: 272418*/;
  class v {
    updateCatalogueItems(e, i) {
      var r;
      let n = [];
      for (let i = 0; i < e.length; i++) {
        let r = e[i];
        n.push({
          recordId: r.recordId,
          level: r.level,
          sourceLevel: r.sourceLevel,
          text: r.text,
          collapsed: !!r.collapsed,
          collapsible: r.collapsible,
          visible: r.visible,
          translate: r.translate
        });
      }
      if ((r = this.docxSignal) !== null && r !== undefined) {
        r.catalogueUpdateSignal.next(n);
      }
    }
    updateActiveCatalogue(e) {
      var i;
      if ((i = this.docxSignal) !== null && i !== undefined) {
        i.catalogueActiveUpdateSignal.next(e);
      }
    }
    updateBoundaryIntersectionStatus(e) {
      var i;
      if ((i = this.docxSignal) !== null && i !== undefined) {
        i.catalogueBoundaryIntersectionSignal.next(e);
      }
    }
    constructor(e) {
      var i;
      var r;
      var n;
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
      }(i = "docxSignal", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
      this.docxSignal = e.editorAPI.getService(docxSignalSubjectRegistry.docxSignalService, {
        optional: true
      });
    }
  }
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var flowHeadingFoldUtils = require("flow-heading-fold-utils") /*id: 451530*/;
  var docEditorConstants_1 = require("doc-editor-constants_1") /*id: 2607*/;
  var foldStatusConstants = require("fold-status-constants") /*id: 275668*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var clipboardSecurityChecker = require("clipboard-security-checker") /*id: 991067*/;
  var booleanConstantUtils = require("boolean-constant-utils") /*id: 143711*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var domRectBboxHelpers = require("dom-rect-bbox-helpers") /*id: 412452*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var docxPerformanceStageCollector = require("docx-performance-stage-collector") /*id: 753948*/;
  var scrollMetricsUtils = require("scroll-metrics-utils") /*id: 884985*/;
  var pageElementUtils = require("page-element-utils") /*id: 117264*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  function x(e, i, r) {
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
  class F {
    get isTranslateMode() {
      return this.blockManager.editorAPI.config.get("translated");
    }
    get getCatalogueList() {
      return this.catalogueList;
    }
    isTranslateBlock(e) {
      var i;
      return !!((i = this.blockManager.getRecord(e)) === null || i === undefined ? undefined : i.snapshot.translate);
    }
    setInitialCatalogItemMap(e) {
      this.initialCatalogItemMap = new Map(e.map(e => {
        this.addHeadingInfoToSSRMap(e);
        return [e.recordId, e];
      }));
    }
    addHeadingInfoToSSRMap(e) {
      let {
        blockId: i,
        recordId: r,
        sourceLevel: n,
        text: o,
        folded: l,
        foldedBlocks: s,
        positionPath: a,
        columnInfo: c,
        collapsed: d,
        collapsible: u,
        visible: h
      } = e;
      this._ssrHeadingMap.set(r, {
        blockId: i,
        recordId: r,
        sourceLevel: n,
        text: o,
        folded: l,
        foldedBlocks: s,
        positionPath: a,
        columnInfo: c,
        collapsed: d,
        collapsible: u,
        visible: h
      });
    }
    addHeadingInfoToMap(e, i) {
      this._ssrHeadingMap.set(e, i);
      this._headingMap.set(e, i);
    }
    forceUpdateHeadingFoldStatus() {
      this._headingMap.forEach(e => {
        let {
          recordId: i,
          blockId: r
        } = e;
        if (!this.blockManager.hasRecordByRecordId(i)) {
          return;
        }
        let n = this.blockManager.getRecord(i);
        let o = r && this.fold ? this.fold.isFolded(r) : n.get(["folded"]);
        if (o === e.folded) {
          return;
        }
        let l = {
          ...e,
          folded: o
        };
        this.addHeadingInfoToMap(i, l);
      });
    }
    getHeadingInfoToMap() {
      var e;
      if (!this.isDataReady && ((e = this.lazyRecord) === null || e === undefined ? undefined : e.isPreEditableEnable())) {
        return this._ssrHeadingMap;
      } else {
        return this._headingMap;
      }
    }
    hasHeadingInfo(e) {
      return this.getHeadingInfoToMap().has(e);
    }
    removeHeadingInfo(e) {
      this._ssrHeadingMap.delete(e);
      this._headingMap.delete(e);
    }
    clearHeadingInfoMap() {
      this._headingMap.clear();
    }
    clearSSRHeadingInfoMap() {
      this._ssrHeadingMap.clear();
    }
    generateCatalogueDataForOpenDocx() {
      return this.generateCatalogueDataForOpenDocxByCatalogueItems(this.catalogueList || []);
    }
    generateCatalogueDataForOpenDocxByCatalogueItems(e) {
      return e.map(e => {
        let {
          text: i,
          recordId: r,
          level: n
        } = e;
        if (this.blockManager.getRecord(r).snapshot.type !== docBlockTypeConstants.blockTypeConstants.PAGE) {
          return {
            anchor: r,
            indentLevel: n,
            text: i
          };
        }
      }).filter(e => !!e);
    }
    init() {
      this.scroller.addEventListener("scroll", this.handleScroll);
      let {
        structService: i,
        lifecycle: r
      } = this.blockManager.editorAPI;
      this.subs = [r.editorReady$.subscribe(this.handleEditorReady), i.mutation$.subscribe(this.handleMutation)];
      this.blockManager.addListener(docEditorConstants_1.updateFlags.FORCE_UPDATE, this.handleUpdate);
      this.blockManager.addListener(editorUiConstants.editorResizeClass, this.handleResize);
      if (booleanConstantUtils.constantTrue()) {
        docxEditorEventConstantsAndManager.globalEventEmitter.on(docCatalogueConstants.catalogueEventTypes.CATALOGUE_COLLAPSE_CHANGE, this.handleCollapsedChange);
        docxEditorEventConstantsAndManager.globalEventEmitter.on(docCatalogueConstants.catalogueEventTypes.CATALOGUE_ITEM_CLICK, this.handleCatalogueItemClick);
        if (booleanConstantUtils.constantTrueAlt2()) {
          this.blockManager.addListener(foldStatusConstants.foldSetState, this.handleToggleFold);
          this.blockManager.addListener(docxEditorConstantsConfig.toggleFold, this.collectFold);
        }
      }
      this.scroller.addEventListener("click", this.handleClick);
      let n = this.docxSignal?.syncedReferenceBlockSelectionChangeSignal;
      if (n) {
        this.subs.push(n.subscribe(this.throttleHandleSyncedReferenceBlockSelectionChange));
      }
      this.selectionAPI.onSelectionChange(this.throttleUpdateActiveCatalogueBySelection);
      this.selectionAPI.onSelectionChanging(this.throttleUpdateActiveCatalogueBySelection);
      docxEditorEventConstantsAndManager.globalEventEmitter.addListener(editorCommands.editorCommands.LocateBlockWithRecordId, this.handleForceActive);
      if (this.lazyRecord) {
        let {
          applyCriticalDone$: e,
          applyAllDone$: i
        } = this.lazyRecord.status;
        this.subs.push(e == null ? undefined : e.subscribe(this.handleDataReady), i == null ? undefined : i.subscribe(this.handleDataReady));
      }
      this.cacheDebounceUpdateCatalogueItemsForPaint = this.debounceUpdateCatalogueItems;
      this.eventEmitter.on(renderEventConstants.paint, this.cacheDebounceUpdateCatalogueItemsForPaint);
      if (browserEnvironmentDetectionUtils.isOpendocOrDocComponent()) {
        platformDocUtils.Hft(platformDocUtils.aWg.GET_DIRECTORY_DATA, this.generateCatalogueDataForOpenDocx.bind(this));
      }
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docx_catalogue_dev", {
        action: "catalogue-module-init"
      });
    }
    destroy() {
      var e;
      var i;
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docx_catalogue_dev", {
        action: "catalogue-module-destroy"
      });
      this.catalogueList = null;
      this.clearHeadingInfoMap();
      this.clearSSRHeadingInfoMap();
      if ((e = this.initialCatalogueInjectionService) !== null && e !== undefined) {
        e.clear();
      }
      this.insertingRecordIdSet.clear();
      this.batchUpdate.cancel();
      this.cancelDebounceUpdateCatalogueItems();
      this.throttleUpdateActiveCatalogue.cancel();
      this.throttleUpdateActiveCatalogueBySelection.cancel();
      this.scroller.removeEventListener("scroll", this.handleScroll);
      if ((i = this.subs) !== null && i !== undefined) {
        i.forEach(e => e.unsubscribe());
      }
      this.subs = null;
      this.blockManager.removeListener(docEditorConstants_1.updateFlags.FORCE_UPDATE, this.handleUpdate);
      this.blockManager.removeListener(editorUiConstants.editorResizeClass, this.handleResize);
      if (booleanConstantUtils.constantTrue()) {
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docCatalogueConstants.catalogueEventTypes.CATALOGUE_COLLAPSE_CHANGE, this.handleCollapsedChange);
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docCatalogueConstants.catalogueEventTypes.CATALOGUE_ITEM_CLICK, this.handleCatalogueItemClick);
        if (booleanConstantUtils.constantTrueAlt2()) {
          this.blockManager.removeListener(foldStatusConstants.foldSetState, this.handleToggleFold);
          this.blockManager.removeListener(docxEditorConstantsConfig.toggleFold, this.collectFold);
        }
      }
      this.scroller.removeEventListener("click", this.handleClick);
      this.selectionAPI.offSelectionChange(this.throttleUpdateActiveCatalogueBySelection);
      this.selectionAPI.offSelectionChanging(this.throttleUpdateActiveCatalogueBySelection);
      docxEditorEventConstantsAndManager.globalEventEmitter.removeListener(editorCommands.editorCommands.LocateBlockWithRecordId, this.handleForceActive);
      this.ignoreUpdateActiveTimer = 0;
      this.eventEmitter.off(renderEventConstants.paint, this.cacheDebounceUpdateCatalogueItemsForPaint);
    }
    updateSibling(e) {
      if (e) {
        while (e) {
          this.handleUpdate(e.recordId);
          e = e.nextSibling;
        }
      }
    }
    getHeadingInfo(e) {
      let i = {
        isHeading: false,
        sourceLevel: 0
      };
      let r = e.get(["type"]) || "";
      let n = flowHeadingFoldUtils.parseHeadingLevel(r);
      if (n) {
        i.isHeading = true;
        i.sourceLevel = n;
      }
      if (r === "page" || syncUrlBlockUtils.isSyncingActive() && r === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
        i.isHeading = true;
        i.sourceLevel = docCatalogueConstants.catalogueConfig0;
      }
      return i;
    }
    getPositionInfo(e) {
      let i;
      let r = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let n = e;
      let o = e.get(["parent_id"]) ? this.getRecord(e.get(["parent_id"])) : null;
      let l = [];
      do {
        if (o === null) {
          l.unshift([0, null]);
        } else {
          let e = o.get(["type"]);
          if (r && docCatalogueConstants.supportedBlockTypes.includes(e)) {
            return null;
          }
          let s = o.get(["children"]);
          let a = s ? s.findIndex(e => e === n.id) : 0;
          l.unshift([a, o.id]);
          if (n.get(["type"]) === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
            i = {
              position: a,
              parentRecordId: o.id
            };
          }
          n = o;
          o = o.get(["parent_id"]) ? this.getRecord(o.get(["parent_id"])) : null;
        }
      } while (o !== null && o !== n);
      return {
        positionPath: l,
        columnInfo: i
      };
    }
    removeHeadingMapData(e) {
      var i;
      if (this.initRecordMap) {
        return;
      }
      let r = this.blockManager.getRecord(e).snapshot.type;
      if (!this.isDataReady && ((i = this.lazyRecord) === null || i === undefined ? undefined : i.isPreEditableEnable()) && this.initialCatalogItemMap.has(e) && r !== docBlockTypeConstants.blockTypeConstants.PENDING) {
        this.initialCatalogItemMap.delete(e);
      }
      if (this.hasHeadingInfo(e)) {
        this.removeHeadingInfo(e);
        this.debounceUpdateCatalogueItems();
      }
    }
    setHeadingMapData(e, i) {
      let r = this.headingModule.getHeadingText(e.id, false, e);
      this.isChangePageTitle = i === docCatalogueConstants.catalogueConfig0;
      if (!r) {
        this.removeHeadingMapData(e.id);
        return;
      }
      let n = r.split("\n");
      let o = (n = n.filter(e => e)).join(" ");
      if (!o) {
        this.removeHeadingMapData(e.id);
        return;
      }
      let l = this.blockManager.getBlockIdsByRecordId(e.id)[0];
      let s = l && this.fold ? this.fold.isFolded(l) : !!e.get(["folded"]);
      let a = this._headingMap.get(e.id);
      let c = !!booleanConstantUtils.constantTrueAlt2() && s;
      if (a) {
        if (a.sourceLevel !== i) {
          c = false;
        } else if (a.collapsed !== null) {
          c = a.collapsed;
        }
      }
      let d = {
        recordId: e.id,
        sourceLevel: i,
        text: o,
        folded: s,
        foldedBlocks: a ? a.foldedBlocks : new Set(),
        positionPath: [],
        collapsed: c,
        collapsible: false,
        visible: !a || a.visible,
        translate: !!e.snapshot.translate,
        blockId: l
      };
      let u = this.getPositionInfo(e);
      if (u) {
        d.positionPath = u.positionPath;
        d.columnInfo = u.columnInfo;
        this.addHeadingInfoToMap(e.id, d);
        this.debounceUpdateCatalogueItems();
      } else {
        this.removeHeadingMapData(e.id);
      }
    }
    initRecord(e) {
      let {
        isHeading: i,
        sourceLevel: r
      } = this.getHeadingInfo(e);
      if (i) {
        this.batchUpdate();
        this.setHeadingMapData(e, r);
      }
    }
    getRecord(e) {
      if (this.initRecordMap) {
        let i = this.initRecordMap[e];
        if (e && i) {
          return new collaborativeEditingFlowSyncModule.VisibilityState(e, i.data);
        } else {
          return null;
        }
      }
      if (this.blockManager.hasRecordByRecordId(e)) {
        return this.blockManager.editorAPI.modelService.getRecordByRecordId(e);
      } else {
        return null;
      }
    }
    notifyCatalogueUpdateAndUpdateActiveCatalogue(e) {
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile || !docHostTypeChecker.isSheetHost(this.blockManager.config)) {
        this.catalogueEvent.updateCatalogueItems(e, this.isDataReady);
      }
      this.blockManager.dispatch(docCatalogueConstants.catalogueEventTypes.CATALOGUE_UPDATE, false);
      this.throttleUpdateActiveCatalogue(e);
      if (!!browserEnvironmentDetectionUtils.isOpendocOrDocComponent() && !browserEnvironmentDetectionUtils.browserDetector.isMobile && !this.isChangePageTitle) {
        platformDocUtils.tI2(platformDocUtils.aWg.DIRECTORY_CHANGE, this.generateCatalogueDataForOpenDocxByCatalogueItems(e));
      }
    }
    updateCatalogueBaseonInitialCatalogue(e) {
      let i = Array.from(this.initialCatalogItemMap.values());
      let r = new Map();
      for (let e = 0, n = i.length; e < n; e++) {
        let n = i[e];
        r.set(n.recordId, e);
      }
      let n = e.length;
      let o = n - 1;
      while (o >= 0) {
        let l = e[o].recordId;
        let s = r.get(l);
        if (s !== undefined) {
          let r = e.slice(o, n);
          i.splice(s, 1, ...r);
          n = o;
        }
        o -= 1;
      }
      if (n !== 0) {
        let r = e.slice(o, n);
        i.unshift(...r);
      }
      this.initialCatalogItemMap = new Map(i.map(e => [e.recordId, e]));
      this.notifyCatalogueUpdateAndUpdateActiveCatalogue(i);
    }
    get debounceUpdateCatalogueItems() {
      if (this.isDataReady) {
        return this.debounceUpdateCatalogueItemsWithMaxWait;
      } else {
        return this.debounceUpdateCatalogueItemsDefault;
      }
    }
    cancelDebounceUpdateCatalogueItems() {
      this.debounceUpdateCatalogueItemsWithMaxWait.cancel();
      this.debounceUpdateCatalogueItemsDefault.cancel();
    }
    forceExpandHeading(e) {
      if (this._headingMap.get(e) && this.catalogueList) {
        let i = this.catalogueList.findIndex(i => i.recordId === e);
        let r = this.catalogueList[i];
        if (r.visible) {
          return;
        }
        let n = r.level;
        for (let e = i - 1; e > 0 && n !== 1; e--) {
          let i = this.catalogueList[e];
          if (i.level < r.level && i.level < n) {
            n = i.level;
            if (i.collapsed) {
              this._headingMap.get(i.recordId).collapsed = false;
            }
          }
        }
        this.debounceUpdateCatalogueItems();
      }
    }
    constructor({
      blockManager: e,
      selectionAPI: i,
      rect: r,
      scroller: c,
      eventEmitter: y,
      headingModule: S,
      lazyRecord: k,
      initialCatalogItems: E,
      initialHeadingRecords: C,
      initialCatalogueInjectionService: _,
      fold: B
    }) {
      var D = this;
      x(this, "blockManager", undefined);
      x(this, "selectionAPI", undefined);
      x(this, "rect", undefined);
      x(this, "scroller", undefined);
      x(this, "lazyRecord", undefined);
      x(this, "initialCatalogueInjectionService", undefined);
      x(this, "fold", undefined);
      x(this, "hasNoSSRCatalogItemData", undefined);
      x(this, "initialCatalogItemMap", new Map());
      x(this, "_headingMap", new Map());
      x(this, "_ssrHeadingMap", new Map());
      x(this, "catalogueList", null);
      x(this, "cacheDebounceUpdateCatalogueItemsForPaint", undefined);
      x(this, "catalogueEvent", undefined);
      x(this, "activeRecordId", "");
      x(this, "gridColumnIsDisplayBlock", false);
      x(this, "ignoreUpdateActiveTimer", 0);
      x(this, "isDataReady", false);
      x(this, "isScrolled", false);
      x(this, "eventEmitter", undefined);
      x(this, "initRecordMap", undefined);
      x(this, "willUpdateRecord", new Set());
      x(this, "headingModule", undefined);
      x(this, "subs", undefined);
      x(this, "insertingRecordIdSet", new Set());
      x(this, "isChangePageTitle", false);
      x(this, "selectionChangeTime", 0);
      x(this, "docxSignal", undefined);
      x(this, "handleEditorReady", () => {
        let e = this.blockManager.rootBlockModel;
        if (syncUrlBlockUtils.isSyncingActive()) {
          let i = syncUrlBlockUtils.getBlockByToken(this.blockManager);
          if (i) {
            e = i;
          }
        }
        e.struct.traverse(e => {
          this.handleInit(e.record);
        });
      });
      x(this, "handleMutation", e => {
        let {
          mutations: i
        } = e;
        for (let e of i.removed) {
          var r;
          let {
            block: i,
            nextSibling: n
          } = e;
          this.handleDestroyByRecordId(i.recordId);
          if (!this.isDataReady && ((r = this.lazyRecord) === null || r === undefined ? undefined : r.isPreEditableEnable())) {
            this.initialCatalogItemMap.delete(i.recordId);
          }
          this.updateSibling(n);
        }
        for (let e of i.added) {
          let {
            block: i
          } = e;
          if (!clipboardSecurityChecker.isSecuritySupported() || this.shouldCalculate(i)) {
            this.handleInit(i.record);
          }
          this.updateSibling(i.nextSibling);
        }
        for (let e of i.updated) {
          let {
            block: i
          } = e;
          this.handleUpdate(i.recordId);
        }
      });
      x(this, "initCatalogueCollapse", () => {
        if (booleanConstantUtils.constantTrueAlt2()) {
          this._headingMap.forEach(e => {
            var i;
            e.collapsed = !!e.folded;
            let r = (i = this.fold) === null || i === undefined ? undefined : i.getFoldStateById(e.blockId);
            if (r) {
              let {
                foldedBy: i,
                show: n
              } = r;
              e.visible = n;
              let o = this.getRecordIdByBlockId(i);
              if (o) {
                let i = this._headingMap.get(o);
                if (i) {
                  i.collapsed = true;
                  i.foldedBlocks.add(e.recordId);
                  if (i.sourceLevel > e.sourceLevel) {
                    i.collapsible = true;
                  }
                }
              }
            }
          });
        }
      });
      x(this, "handleCatalogueItemClick", e => {
        let {
          recordId: i
        } = e;
        let r = this._headingMap.get(i);
        if ((r == null ? undefined : r.collapsed) === true) {
          this.handleCollapsedChange({
            recordId: i,
            collapsed: false,
            from: "clickTitle"
          });
        }
      });
      x(this, "handleCollapsedChange", e => {
        let {
          recordId: i,
          collapsed: r,
          from: n = ""
        } = e;
        let o = this._headingMap.get(i);
        if (o) {
          o.collapsed = r;
          let e = o.foldedBlocks.size === 0;
          if (!r && o.foldedBlocks.size > 0) {
            o.foldedBlocks.forEach(e => {
              let i = this._headingMap.get(e);
              if (i) {
                let r = {
                  ...i,
                  visible: true
                };
                this.addHeadingInfoToMap(e, r);
              }
            });
            o.foldedBlocks.clear();
          }
          this._headingMap.set(i, o);
          this.updateCatalogueItems();
          if (n === "clickTitle") {
            if (e) {
              this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_content_page_click", {
                target: "none",
                click: "click_fold",
                sub_click: r ? "fold" : "unfold",
                fold_location: "text",
                is_have_child_node: "true"
              });
            }
          } else {
            this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_content_page_click", {
              target: "none",
              click: "click_fold",
              sub_click: r ? "fold" : "unfold",
              fold_location: "directory",
              is_have_child_node: "true"
            });
          }
        }
      });
      x(this, "collectFold", (e, i, r, n) => {
        var o;
        if (n !== true || !this.isDataReady || !booleanConstantUtils.constantTrue() || !booleanConstantUtils.constantTrueAlt2()) {
          return;
        }
        let l = this.blockManager.getRecordByBlockId(e);
        if (!l) {
          return;
        }
        let s = (o = this.catalogueList) === null || o === undefined ? undefined : o.find(e => e.recordId === l.id);
        if (s) {
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_content_page_click", {
            target: "none",
            click: "click_fold",
            sub_click: i ? "fold" : "unfold",
            fold_location: "text",
            is_have_child_node: String(s.collapsible)
          });
        }
      });
      x(this, "handleToggleFold", e => {
        if (!this.isDataReady || !booleanConstantUtils.constantTrue() || !booleanConstantUtils.constantTrueAlt2()) {
          return;
        }
        let {
          id: i,
          folded: r,
          foldedBy: n,
          show: o
        } = e;
        let l = this.blockManager.getRecordByBlockId(i);
        if (!l) {
          return;
        }
        let s = this._headingMap.get(l.id);
        if (!s) {
          return;
        }
        if (!r) {
          s.foldedBlocks.clear();
        }
        if (n) {
          let e = this.getRecordIdByBlockId(n);
          if (e) {
            let i = this._headingMap.get(e);
            if (i) {
              i.collapsed = true;
              i.collapsible = true;
              i.foldedBlocks.add(l.id);
            }
          }
        }
        let a = {
          ...s,
          visible: o,
          folded: !!r,
          collapsed: !!r
        };
        this.addHeadingInfoToMap(l.id, a);
        this.debounceUpdateCatalogueItemsByFold();
      });
      x(this, "shouldCalculate", e => {
        let {
          isHeading: i
        } = this.getHeadingInfo(e.record);
        let r = e.findDescendant(e => this.getHeadingInfo(e.record).isHeading);
        let n = e.type;
        return i || !!r || [docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.AI].includes(n);
      });
      x(this, "handleInit", e => this.initRecord(e));
      x(this, "handleDestroyByRecordId", e => {
        this.willUpdateRecord.delete(e);
        this.batchUpdate();
        this.removeHeadingMapData(e);
      });
      x(this, "handleUpdate", e => {
        this.willUpdateRecord.add(e);
        this.batchUpdate();
      });
      x(this, "syncUpdate", () => {
        let e = i => {
          let r = this.blockManager.getRecord(i);
          let {
            isHeading: n,
            sourceLevel: o
          } = this.getHeadingInfo(r);
          if (n) {
            this.setHeadingMapData(r, o);
            let {
              type: i,
              children: n
            } = r.snapshot;
            if (i !== docBlockTypeConstants.blockTypeConstants.PAGE && (n == null ? undefined : n.length) > 0) {
              n.forEach(e);
            }
          } else {
            this.removeHeadingMapData(i);
            let e = false;
            this.getHeadingInfoToMap().forEach(n => {
              let {
                positionPath: o,
                columnInfo: l
              } = n;
              let s = o.findIndex(e => {
                let [, r] = e;
                return r === i;
              });
              if (s > -1) {
                let i = this.getPositionInfo(r);
                if (i && i.positionPath.some((e, i) => {
                  let [r, n] = e;
                  return r !== o[i][0] || n !== o[i][1];
                })) {
                  n.positionPath = [...i.positionPath, ...o.slice(s)];
                  let r = l && this.blockManager.getBlockIdsByRecordId(l.parentRecordId)[0];
                  let a = r && s >= this.blockManager.getBlockModelByBlockId(r).depth;
                  if (!l || i.columnInfo || a) {
                    n.columnInfo = i.columnInfo;
                  }
                  e = true;
                }
              }
            });
            if (e) {
              this.debounceUpdateCatalogueItems();
            }
          }
        };
        this.willUpdateRecord.forEach(e);
        this.willUpdateRecord.clear();
      });
      x(this, "batchUpdate", debounceUtil_1_1.debounce(this.syncUpdate));
      x(this, "batchedGetBlockRects", e => {
        let i = new Map();
        let r = [];
        let n = {};
        if (this.isDataReady || this.isScrolled) {
          e.forEach(e => {
            let o = this.blockManager.getBlockIdsByRecordId(e)[0];
            if (this.blockManager.hasBlockModelByBlockId(o)) {
              r.push(o);
            } else {
              i.set(e, domRectBboxHelpers.createEmptyRect());
            }
            n[o] = e;
          });
          this.rect.batchedGetBlockRects(r).forEach((e, r) => {
            let o = n[r];
            i.set(o, e || domRectBboxHelpers.createEmptyRect());
          });
        }
        return i;
      });
      x(this, "getCalculateCatalogueItems", function (e = [], i) {
        if (i) {
          D.initRecordMap = i;
        }
        e.forEach(e => {
          try {
            let i = D.getRecord(e);
            if (i) {
              D.initRecord(i);
            }
          } catch (e) {}
        });
        D.initRecordMap = null;
        return D.calculateCatalogueItems();
      });
      x(this, "updateRect", e => {
        let i = e.map(e => e.recordId);
        let r = this.batchedGetBlockRects(i);
        return e = e.map(e => Object.assign({}, e, {
          rect: r.get(e.recordId) || domRectBboxHelpers.createEmptyRect()
        }));
      });
      x(this, "calculateCatalogueItems", () => {
        if (platformDocUtils.KNd()) {
          this.forceUpdateHeadingFoldStatus();
        }
        let e = new Map();
        return clipboardLodashChainExport.createLodashChain(u, g, this.updateRect, i => {
          let r = Infinity;
          return i.reduce((i, n, o) => {
            let {
              level: l,
              folded: s,
              sourceLevel: a
            } = n;
            let c = l > r;
            let d = {
              ...n,
              hidden: c
            };
            if (booleanConstantUtils.constantTrue()) {
              let r = null;
              for (let e = o - 1; e >= 0; e--) {
                let n = i[e];
                if ((!this.isTranslateMode || !this.isTranslateBlock(n.recordId)) && n.sourceLevel < a) {
                  r = n;
                  break;
                }
              }
              if (r && a > r.sourceLevel) {
                e.set(r.recordId, true);
                if (r.foldedBlocks.size > 0) {
                  d.visible = !r.foldedBlocks.has(d.recordId);
                } else if (r.collapsed || !r.visible) {
                  d.visible = false;
                }
              }
            }
            if (!c) {
              r = s ? l : Infinity;
            }
            i.push(d);
            return i;
          }, []);
        }, i => {
          let r;
          return i.map(i => {
            let {
              columnInfo: n
            } = i;
            i.hightlightable = true;
            if (!this.gridColumnIsDisplayBlock && r && n && r.parentRecordId === n.parentRecordId && n.position > r.position) {
              i.hightlightable = false;
            } else {
              r = n;
            }
            if (booleanConstantUtils.constantTrue()) {
              let r = !!e.get(i.recordId) || i.foldedBlocks.size > 0;
              i.collapsible = !!i.collapsible || r;
              if (this.isTranslateMode && this.blockManager.getRecord(i.recordId).snapshot.translate) {
                i.collapsible = false;
              }
              if (i.sourceLevel === 0) {
                i.collapsible = false;
              }
            }
            return i;
          });
        })(this.getHeadingInfoToMap());
      });
      x(this, "calculateActiveCatalogue", e => !e || e.length > 1 && e.every(e => !e.rect.top) ? null : e.filter(e => booleanConstantUtils.constantTrue() ? e.visible && e.hightlightable : e.hightlightable).find((e, i, r) => {
        let n = i + 1;
        if (n >= r.length) {
          return true;
        }
        let o = r[n];
        if (o) {
          let e = scrollMetricsUtils.getScrollTop(this.scroller) - pageElementUtils.getPageMainOffset();
          return Math.floor(o.rect.top - e) > docCatalogueConstants.catalogueConfig90;
        }
        return false;
      }));
      x(this, "updateActiveCatalogue", e => {
        if (this.activeRecordId !== e) {
          this.activeRecordId = e;
          this.catalogueEvent.updateActiveCatalogue(this.activeRecordId);
          if (browserEnvironmentDetectionUtils.isOpendocOrDocComponent()) {
            platformDocUtils.tI2(platformDocUtils.aWg.CURR_ANCHOR, this.activeRecordId);
          }
        }
      });
      x(this, "updateActiveCatalogueByScroll", function (e = D.catalogueList) {
        let i = new Date().valueOf();
        if (D.ignoreUpdateActiveTimer || i - D.selectionChangeTime < 1000) {
          return;
        }
        let r = D.calculateActiveCatalogue(e);
        if (r) {
          D.updateActiveCatalogue(r.recordId);
        }
      });
      x(this, "updateActiveCatalogueBySelectionChange", () => {
        let i = reduxStoreInitializer.reduxStore.getState().docx?.editable;
        if (i && !i.editing && !i.revising) {
          return;
        }
        this.throttleUpdateActiveCatalogue.cancel();
        this.updateCatalogueItems();
        this.selectionChangeTime = new Date().valueOf();
        let r = this.selectionAPI.getSelection();
        let n = r[0];
        let o = n && this.blockManager.getBlockModelByBlockIdNotCheck(n.id);
        let l = this.blockManager.getBlockModelByBlockId(this.blockManager.rootBlockId).children.length;
        if (r.length === l || !o) {
          return;
        }
        let s = this.calcActiveCatalogueByRecord(o.record);
        if (s) {
          this.updateActiveCatalogue(s.recordId);
        }
      });
      x(this, "calcActiveCatalogueByRecord", e => {
        let r = this.getPositionInfo(e, false);
        if (!r || !this.catalogueList?.length) {
          return null;
        }
        let n = function (e, i) {
          let r = i[0];
          for (let n of i) {
            if (n.visible) {
              if (deepEqualUtil_1.deepEqual(e, n.positionPath)) {
                r = n;
                break;
              }
              if (function (e, i) {
                let r = e.length;
                let n = i.length;
                let o = Math.min(r, n);
                for (let r = 0; r < o; r++) {
                  let n = i[r][0];
                  let o = e[r][0];
                  if (n > o) {
                    return true;
                  }
                  if (n < o) {
                    return false;
                  }
                }
                return n > r;
              }(e, n.positionPath)) {
                break;
              }
              r = n;
            }
          }
          return r;
        }(r.positionPath, this.catalogueList);
        return n || null;
      });
      x(this, "handleSyncedReferenceBlockSelectionChange", e => {
        let r = reduxStoreInitializer.reduxStore.getState().docx?.editable;
        if (r && !r.editing && !r.revising) {
          return;
        }
        let {
          syncedReferenceBlockId: n,
          current: o
        } = e.current;
        if (n && o.length) {
          this.selectionChangeTime = new Date().valueOf();
          let e = this.blockManager.getRecordByBlockId(n);
          let i = e && this.calcActiveCatalogueByRecord(e);
          if (i) {
            this.updateActiveCatalogue(i.recordId);
          }
        }
      });
      x(this, "throttleHandleSyncedReferenceBlockSelectionChange", debounceUtilWrapper.createDebounce(this.handleSyncedReferenceBlockSelectionChange, docCatalogueConstants.catalogueConfig500, {
        trailing: true,
        leading: true
      }));
      x(this, "throttleUpdateActiveCatalogueBySelection", debounceUtilWrapper.createDebounce(this.updateActiveCatalogueBySelectionChange, docCatalogueConstants.catalogueConfig500, {
        trailing: true,
        leading: true
      }));
      x(this, "throttleUpdateActiveCatalogue", debounceUtilWrapper.createDebounce(this.updateActiveCatalogueByScroll, docCatalogueConstants.catalogueConfig500, {
        trailing: true
      }));
      x(this, "throttleScrollUpdateActiveCatalogue", debounceUtilWrapper.createDebounce(() => {
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile && !docHostTypeChecker.isSheetHost(this.blockManager.config)) {
          this.updateCatalogueItems();
        } else {
          this.catalogueList &&= this.updateRect(this.catalogueList);
        }
        this.updateActiveCatalogueByScroll();
      }, docCatalogueConstants.catalogueConfig500, {
        leading: false,
        trailing: true
      }));
      x(this, "updateCatalogueItems", () => {
        var e;
        var r;
        var n;
        let {
          isDataReady: o
        } = this;
        let l = !!((e = this.lazyRecord) === null || e === undefined ? undefined : e.isPreEditableEnable());
        if (!o && l && this.hasNoSSRCatalogItemData) {
          return;
        }
        let a = this.calculateCatalogueItems();
        let c = reduxStoreInitializer.reduxStore.getState();
        if (c.appState.translate.status.translated) {
          a.forEach(e => {
            e.text = this.headingModule.getHeadingText(e.recordId, true);
          });
        }
        if (!o) {
          if (l && ((n = c.appState.opendoc) === null || n === undefined ? undefined : (r = n.config) === null || r === undefined ? undefined : r[platformDocUtils.D97.DIRECTORY]?.enable) !== false) {
            this.updateCatalogueBaseonInitialCatalogue(a);
            let e = Date.now();
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateLoadMainStageDurationList(platformDocUtils.Gkz.DOCX, platformDocUtils.Mbm.RENDER_FILE_CATALOGUE_SSR_SUCCESS, e);
            docxPerformanceStageCollector.DocxPerformanceStageCollector.setExtraData({
              catalogue_ssr_render_time: e - docxPerformanceStageCollector.DocxPerformanceStageCollector.getStartTime()
            });
          }
          return;
        }
        if (!deepEqualUtil_1.deepEqual(a, this.catalogueList)) {
          if (this.catalogueList === null) {
            docxPerformanceStageCollector.DocxPerformanceStageCollector.setExtraData({
              has_catalogue: ((a == null ? undefined : a.length) || 0) > 1
            });
          }
          this.catalogueList = a;
          this.notifyCatalogueUpdateAndUpdateActiveCatalogue(a);
        }
      });
      x(this, "debounceUpdateCatalogueItemsDefault", debounceUtil_1_1.debounce(this.updateCatalogueItems, docCatalogueConstants.catalogueConfig500, {
        trailing: true
      }));
      x(this, "debounceUpdateCatalogueItemsWithMaxWait", debounceUtil_1_1.debounce(this.updateCatalogueItems, docCatalogueConstants.catalogueConfig500, {
        trailing: true,
        maxWait: docCatalogueConstants.catalogueConfig1000
      }));
      x(this, "debounceUpdateCatalogueItemsByFold", debounceUtil_1_1.debounce(this.updateCatalogueItems, docCatalogueConstants.catalogueConfig100, {
        trailing: true,
        maxWait: docCatalogueConstants.catalogueConfig10
      }));
      x(this, "handleScroll", () => {
        this.isScrolled = true;
        this.throttleScrollUpdateActiveCatalogue();
      });
      x(this, "handleClick", e => {
        if (e.target instanceof HTMLElement && e.target.closest(".editor-container")) {
          this.throttleUpdateActiveCatalogueBySelection();
        }
      });
      x(this, "handleResize", e => {
        let {
          containerWidth: i,
          preContainerWidth: r
        } = e;
        if (i !== r) {
          if (i <= 600) {
            this.gridColumnIsDisplayBlock = true;
          } else {
            this.gridColumnIsDisplayBlock = false;
          }
          this.debounceUpdateCatalogueItems();
        }
      });
      x(this, "handleForceActive", e => {
        var i;
        if (this.activeRecordId !== e && !((i = this.catalogueList) === null || i === undefined ? undefined : i.every(i => i.recordId !== e))) {
          if (booleanConstantUtils.constantTrue()) {
            this.forceExpandHeading(e);
          }
          this.activeRecordId = e;
          this.catalogueEvent.updateActiveCatalogue(this.activeRecordId);
          if (this.ignoreUpdateActiveTimer) {
            window.clearTimeout(this.ignoreUpdateActiveTimer);
          }
          this.ignoreUpdateActiveTimer = window.setTimeout(() => {
            this.ignoreUpdateActiveTimer = 0;
          }, docCatalogueConstants.catalogueConfig1000);
        }
      });
      x(this, "handleDataReady", () => {
        var e;
        if (!this.isDataReady) {
          this.cancelDebounceUpdateCatalogueItems();
          this.isDataReady = true;
          this.initialCatalogItemMap.clear();
          this.clearSSRHeadingInfoMap();
          if ((e = this.initialCatalogueInjectionService) !== null && e !== undefined) {
            e.clear();
          }
          if (this.willUpdateRecord.size) {
            this.batchUpdate.cancel();
            this.syncUpdate();
          }
          this.initCatalogueCollapse();
          this.debounceUpdateCatalogueItems();
        }
      });
      x(this, "getRecordIdByBlockId", e => {
        if (e) {
          let i = this.blockManager.getRecordByBlockId(e);
          if (i) {
            return i.id;
          }
        }
        return null;
      });
      x(this, "handleInjectInitialCatalogueItems", () => {
        var e;
        var i;
        let r = (e = this.initialCatalogueInjectionService) === null || e === undefined ? undefined : e.getHeadingRecords();
        if (isUndefinedCheck.isUndefined(r) || this.isDataReady || !p(this.blockManager.rootRecordId, r)) {
          return;
        }
        let n = this.getCalculateCatalogueItems(Object.keys(r), r);
        this.setInitialCatalogItemMap(n);
        this.debounceUpdateCatalogueItems();
        if ((i = this.initialCatalogueInjectionService) !== null && i !== undefined) {
          i.clear();
        }
      });
      this.blockManager = e;
      this.selectionAPI = i;
      this.catalogueEvent = new v(e);
      this.scroller = c;
      this.rect = r;
      this.fold = B;
      this.eventEmitter = y;
      this.headingModule = S;
      this.lazyRecord = k;
      this.hasNoSSRCatalogItemData = isUndefinedCheck.isUndefined(E) && isUndefinedCheck.isUndefined(C);
      let F = [];
      this.docxSignal = e.editorAPI.getService(docxSignalSubjectRegistry.docxSignalService, {
        optional: true
      });
      if (!this.hasNoSSRCatalogItemData && !syncUrlBlockUtils.isSyncingActive()) {
        if (E == null ? undefined : E.length) {
          F = E;
        }
        if (C && p(this.blockManager.rootRecordId, C)) {
          F = this.getCalculateCatalogueItems(Object.keys(C), C);
        }
      }
      if (_ && isUndefinedCheck.isUndefined(C)) {
        this.initialCatalogueInjectionService = _;
        this.initialCatalogueInjectionService.onInjectInitialCatalogueItems(this.handleInjectInitialCatalogueItems);
      }
      this.setInitialCatalogItemMap(F);
      this.init();
    }
  }
  require.d(exports, {
    DocxCatalogueManager: function () {
      return F;
    },
    catalogueEventTypes: function () {
      return docCatalogueConstants.catalogueEventTypes;
    }
  });
}