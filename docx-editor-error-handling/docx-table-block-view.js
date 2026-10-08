// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'registerTableBlock'
// - Renamed export 'c' to 'registerCellBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 541604
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
  var f;
  var g;
  var p;
  var m;
  var v;
  var b;
  var y;
  var S;
  var k;
  var E;
  var C;
  var _;
  var R;
  var I;
  var M;
  var T;
  var w;
  var B;
  var P;
  var L;
  var N;
  var A;
  var O;
  var D;
  var x;
  var F;
  var j;
  var $;
  var H;
  var U;
  var W;
  var V;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var layoutNodeBuilderProvider = require("layout-node-builder-provider") /*id: 163942*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  class Y extends docBlockModelClass.DocBlockModel {
    getText() {
      return `[${t("common.table")}]`;
    }
    onUpdate() {
      if (docxFeatureFlags.isY0Enabled()) {
        docxEventCollector.docEventCollector("doc_bug_track_dev", {
          action: "table_model_onupdate",
          info: {
            ts: Number(new Date()),
            id: docxUtilityHelpers.maskSensitiveData(this.recordId)
          }
        });
      }
    }
    constructor(e) {
      super(e);
    }
  }
  l = "type";
  s = docBlockTypeConstants.blockTypeConstants.TABLE;
  if ((l = typeof (n = function (e, i) {
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
  }(l, "string")) == "symbol" ? n : n + "") in Y) {
    Object.defineProperty(Y, l, {
      value: s,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    Y[l] = s;
  }
  var gridCellIdUtils = require("grid-cell-id-utils") /*id: 812767*/;
  class ee extends docBlockModelClass.DocBlockModel {
    get cellId() {
      return gridCellIdUtils.getCellId(this.struct);
    }
    constructor(e) {
      super(e);
    }
  }
  a = "type";
  c = docBlockTypeConstants.blockTypeConstants.CELL;
  if ((a = typeof (o = function (e, i) {
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
  }(a, "string")) == "symbol" ? o : o + "") in ee) {
    Object.defineProperty(ee, a, {
      value: c,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    ee[a] = c;
  }
  var objectFindKeyUtil = require("object-find-key-util") /*id: 284647*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var tableLayoutUtils = require("table-layout-utils") /*id: 991719*/;
  var zIndexConstants = require("z-index-constants") /*id: 470454*/;
  var numberStringUtils = require("number-string-utils") /*id: 762471*/;
  function ec(e, i, r) {
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
  let ed = new class {
    addRefCount() {
      ++this.refCount;
    }
    getBlockIdByRowId(e, i) {
      let r = this.rowToBlockIdMap.get(e);
      if (!r) {
        r = new Map();
        this.rowToBlockIdMap.set(e, r);
      }
      let n = r.get(i);
      if (!n) {
        n = numberStringUtils.concatToNumber(zIndexConstants.zIndexMin, this.globalRowToBlockId++);
        r.set(i, n);
      }
      return n;
    }
    getRowIdByBlockId(e, i) {
      return [...this.rowToBlockIdMap.get(e).entries()].find(e => {
        let [r, n] = e;
        return n === i;
      })[0];
    }
    destroy() {
      if (--this.refCount == 0) {
        this.rowToBlockIdMap.clear();
      }
    }
    constructor() {
      ec(this, "globalRowToBlockId", 1);
      ec(this, "refCount", 0);
      ec(this, "rowToBlockIdMap", new Map());
    }
  }();
  var docxVirtualLayoutConfig = require("docx-virtual-layout-config") /*id: 173628*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function ef(e, i, r) {
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
  class eg {
    getLayoutNodeConfig(e, i, r) {
      if (r) {
        this.initTableInfo(e);
      }
      let n = e.snapshot[tableLayoutConstants.blockPropertyKeys.HEADER_ROW];
      let o = i && !i.show ? {
        calculateModel: bearVirtualLayoutReconciler.CalculateModel.IGNORE
      } : {};
      let l = e.editorAPI.config.get("isSSR");
      return {
        ...this.config,
        calculateModel: bearVirtualLayoutReconciler.CalculateModel.VERTICAL,
        isAsync: true,
        ...o,
        sticky: n,
        onlyChildrenHeight: true,
        priority: bearVirtualLayoutReconciler.RenderPriority.SINGLE,
        childrenWithoutRenderUnit: true,
        viewport: docxVirtualLayoutConfig.isAnchorLockLong() && !l ? {
          direction: "horizontal",
          bufferPixel: browserEnvironmentDetectionUtils.browserEnv.isMobile ? window.innerWidth : window.innerWidth / 2,
          defaultSize: window.innerWidth
        } : undefined
      };
    }
    iterateLayoutNodeChildren(e, i, r) {
      let n = this.tableInfoMap.get(e.id);
      if (n != null) {
        n.rows.forEach(e => {
          let i = n.rowMap.get(e);
          r(i.rowBlockId, {
            ...tableLayoutUtils.getTableRowConfig(),
            childIds: i.cells
          });
        });
      }
    }
    initTableInfo(e) {
      let {
        rows_id: i,
        columns_id: r,
        cell_set: n
      } = e.snapshot;
      let o = [];
      let l = new Map();
      let s = new Map();
      this.tableInfoMap.set(e.id, {
        rows: o,
        rowMap: l,
        cellIdMap: s
      });
      let a = new Map();
      e.children.forEach(e => {
        a.set(e.recordId, e);
      });
      for (let d = 0, u = i.length; d < u; ++d) {
        let u = i[d];
        let h = [];
        let f = {
          rowId: u,
          rowBlockId: ed.getBlockIdByRowId(e.id, u),
          cells: h
        };
        o.push(u);
        l.set(u, f);
        for (let e = 0, i = r.length; e < i; ++e) {
          let i = r[e];
          let o = docxTableLayoutUtils.concatenateIds(u, i);
          let l = n[o]?.block_id;
          if (l) {
            let e = a.get(l);
            if (!e) {
              return;
            }
            h.push(e.id);
            s.set(l, o);
          }
        }
      }
    }
    update(e, i, r, n) {
      let o = i.editorAPI.viewService.getBlockViewByBlockId(i.id);
      if (o) {
        let e = this.tableStickyStatusMap.get(i.id);
        let r = o.isNeedSticky;
        if (e !== r || r !== i.snapshot.header_row) {
          n = true;
          this.tableStickyStatusMap.set(i.id, r);
        }
      }
      e.updateRaw(e.getChangeNode(i.id), n);
      if (n || !r || !r.ops) {
        return;
      }
      let {
        ops: l
      } = r;
      let s = new Set();
      l.forEach(e => {
        let {
          p: i
        } = e;
        if (collaborativeEditingFlowSyncModule.transformOperations(e) && i.length >= 2 && i[0] === "column_set") {
          s.add(i[1]);
        }
      });
      if (!s.size) {
        return;
      }
      let a = this.ensureTableInfo(i);
      i.children.forEach(i => {
        let r = a.cellIdMap.get(i.recordId);
        let [, n] = docxTableLayoutUtils.parseCellId(r);
        if (s.has(n)) {
          e.update(i, undefined, true);
        }
      });
    }
    insertChild(e, i, r) {
      let n = i.snapshot;
      let o = this.ensureTableInfo(i);
      let l = objectFindKeyUtil.findObjectKey(n.cell_set, e => e.block_id === r.recordId);
      let [s, a] = docxTableLayoutUtils.parseCellId(l);
      o.cellIdMap.set(r.recordId, l);
      let c = o.rowMap.get(s);
      if (!c) {
        c = {
          rowId: s,
          rowBlockId: ed.getBlockIdByRowId(i.id, s),
          cells: []
        };
        o.rowMap.set(s, c);
        let r = n.rows_id.indexOf(s);
        let l = n[tableLayoutConstants.blockPropertyKeys.HEADER_ROW];
        if (r === 0 && l) {
          e.updateRaw(e.getChangeNode(i.id), true);
        }
        o.rows.splice(r, 0, s);
        let a = e.getChangeNode(i.id);
        e.insertChildRaw(a, r, c.rowBlockId, tableLayoutUtils.getTableRowConfig());
      }
      let d = n.columns_id.indexOf(a);
      c.cells.splice(d, 0, r.id);
      let u = this.getRowChangeNode(e, c.rowBlockId);
      e.insertChildRaw(u, d, r.id);
    }
    removeChild(e, i, r) {
      let {
        snapshot: n
      } = i;
      let o = this.ensureTableInfo(i);
      let l = o.cellIdMap.get(r.recordId);
      let [s] = docxTableLayoutUtils.parseCellId(l);
      o.cellIdMap.delete(r.recordId);
      let a = o.rowMap.get(s);
      let c = a.cells.indexOf(r.id);
      a.cells.splice(c, 1);
      let d = this.getRowChangeNode(e, a.rowBlockId);
      e.removeChildRaw(d, c, r.id);
      if (!a.cells.length) {
        let r = o.rows.indexOf(s);
        o.rows.splice(r, 1);
        o.rowMap.delete(s);
        let l = e.getChangeNode(i.id);
        let c = n[tableLayoutConstants.blockPropertyKeys.HEADER_ROW];
        if (r === 0 && c) {
          e.updateRaw(e.getChangeNode(i.id), true);
        }
        e.removeChildRaw(l, r, a.rowBlockId);
      }
      if (!o.rows.length) {
        this.clearTableInfo(i);
      }
    }
    destroy() {
      ed.destroy();
      this.tableStickyStatusMap.clear();
    }
    ensureTableInfo(e) {
      let i = this.tableInfoMap.get(e.id);
      if (!i) {
        this.tableInfoMap.set(e.id, i = {
          rows: [],
          rowMap: new Map(),
          cellIdMap: new Map()
        });
      }
      return i;
    }
    clearTableInfo(e) {
      this.tableInfoMap.delete(e.id);
    }
    getRowChangeNode(e, i) {
      let r = e.getChangeNode(i);
      r.config ||= tableLayoutUtils.getTableRowConfig();
      return r;
    }
    constructor(e) {
      this.shouldDisableDescendantRender = e;
      ef(this, "type", docBlockTypeConstants.blockTypeConstants.TABLE);
      ef(this, "config", {
        defaultMarginTop: 24,
        defaultMarginBottom: 24
      });
      ef(this, "tableInfoMap", new Map());
      ef(this, "tableStickyStatusMap", new Map());
      ed.addRefCount();
    }
  }
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxTableLayoutHelper = require("docx-table-layout-helper") /*id: 382662*/;
  var snapshotColumnWidthUtil = require("snapshot-column-width-util") /*id: 729416*/;
  function eb(e, i, r) {
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
  let ey = dependencyInjectionContainer.Provide(layoutNodeBuilderProvider.layoutNodeBuilder)(R = class {
    getLayoutNodeConfig(e, i) {
      let r = {
        calculateModel: (i == null ? undefined : i.show) ? bearVirtualLayoutReconciler.CalculateModel.VERTICAL : bearVirtualLayoutReconciler.CalculateModel.IGNORE
      };
      let n = e.parent;
      if (n) {
        let i = n.record.snapshot;
        if (i.cell_set) {
          let o;
          if (this.cellSet.has(n.id)) {
            o = this.cellSet.get(n.id);
          } else {
            o = Object.values(i.cell_set);
            this.cellSet.set(n.id, o);
          }
          let l = o.find(i => i.block_id === e.record.id);
          let s = true;
          if (!this.inVisibleRecordIdMap.has(n.id)) {
            let e = docxTableLayoutHelper.getMergedCellIds(n.snapshot);
            this.inVisibleRecordIdMap.set(n.id, e);
          }
          if (this.inVisibleRecordIdMap.get(n.id).has(e.recordId)) {
            s = false;
          }
          Promise.resolve().then(() => {
            this.inVisibleRecordIdMap.delete(n.id);
            this.cellSet.delete(n.id);
            return null;
          }).catch(e => {
            throw e;
          });
          if (l) {
            r.rowSpan = l.merge_info.row_span;
            r.colSpan = l.merge_info.col_span;
            r.cellVisible = s;
            r.defaultWidth = snapshotColumnWidthUtil.getColumnWidth(n, e.position);
            r.onlyChildrenHeight = true;
          }
        }
      }
      return r;
    }
    constructor() {
      eb(this, "type", docBlockTypeConstants.blockTypeConstants.CELL);
      eb(this, "inVisibleRecordIdMap", new Map());
      eb(this, "cellSet", new Map());
    }
  }) || R;
  var diTableCellChildrenCompensation = require("di-table-cell-children-compensation") /*id: 832809*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  d = (I = class {
    onServiceInit() {
      this.sub = this.dataService.interceptChange$.subscribe(e => {
        let {
          options: i,
          recordOps: r,
          op: n
        } = e;
        if (i.from === collaborativeEditingFlowSyncModule.kq.LOCAL && !changeSourceValidators.isUndoRedoSource(i)) {
          r.forEach(e => {
            let {
              record: i
            } = e;
            if (i.snapshot.type !== docBlockTypeConstants.blockTypeConstants.CELL) {
              return;
            }
            let {
              children: r
            } = i.snapshot;
            if (r == null || !(r.length > 0)) {
              documentBlockOperations.insertNewChildren(n, i.id, 0, [documentNodeUtils_2.createDocumentNode()]);
            }
          });
        }
      });
    }
    onServiceDispose() {
      var e;
      if ((e = this.sub) !== null && e !== undefined) {
        e.unsubscribe();
      }
    }
    constructor() {
      var e;
      var i;
      var r;
      var n;
      var o;
      e = "dataService";
      if (i = M) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      n = undefined;
      if ((r = typeof (o = function (e, i) {
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
      }(r = "sub", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, r, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[r] = n;
      }
    }
  }).prototype;
  u = "dataService";
  h = [docxEditorCore.BLOCK_DATA_TOKEN];
  g = {};
  Object.keys(f = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    g[e] = f[e];
  });
  g.enumerable = !!g.enumerable;
  g.configurable = !!g.configurable;
  if ("value" in g || g.initializer) {
    g.writable = true;
  }
  M = (g = h.slice().reverse().reduce(function (e, i) {
    return i(d, u, e) || e;
  }, g)).initializer === undefined ? (Object.defineProperty(d, u, g), null) : g;
  let e_ = I;
  var cellMinWidthTableUiService = require("cell-min-width-table-ui-service") /*id: 992311*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var docxBlockViewConfig = require("docx-block-view-config") /*id: 727302*/;
  var docxEquationViewUtils = require("docx-equation-view-utils") /*id: 66547*/;
  function eL(e, i, r) {
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
  let eN = e => {
    let {
      recordId: i,
      extra: r
    } = e;
    return `${i}${(r == null ? undefined : r.uniqueId) ? `-${r.uniqueId}` : ""}`;
  };
  let eA = function (e, i, r = {}) {
    Object.keys(r).forEach(n => {
      if (n !== e && n.startsWith(e)) {
        i[n] = r[n];
      }
    });
  };
  let eO = function (e, i, r, n = {}) {
    let o = {};
    let l = {};
    let s = new Set();
    let a = 0;
    for (let h of Object.keys(e.cell_set)) {
      try {
        var c;
        var d;
        a = (c = i.getBlockStructByBlockId(r)) === null || c === undefined ? undefined : c.children.length;
        s.add(e.cell_set[h].block_id);
        let f = e.cell_set[h].block_id;
        let g = 0;
        o[f] = o[f] || {};
        o[f].initialWidth = 0;
        let {
          children: p
        } = i.getRecord(f).snapshot;
        while (p && p.length) {
          let e = [];
          for (let r of p) {
            let l = i.getRecord(r);
            let s = (d = i.getBlockStructsByRecordId(r)[0]) === null || d === undefined ? undefined : d.children[0];
            let a = s && s.type === docBlockTypeConstants.blockTypeConstants.FILE && docxEquationViewUtils.isPreviewViewBlock(l.snapshot, s.snapshot.file?.name) ? docxBlockViewConfig.docxConfig : docxEquationViewUtils.getBlockWidth(l) || n[r];
            o[f] = o[f] || {};
            eA(r, o[f], n);
            if (a) {
              o[f][r] = a;
              g = Math.max(g, a);
            }
            e.push(...(l.snapshot.children || []));
          }
          p = e;
        }
        l[f] = g;
      } catch (r) {
        i.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: "table_dirty_data",
          info: JSON.stringify({
            recordChildLen: Object.keys(e.cell_set).length,
            modelChildLen: a,
            recordColumnLen: e == null ? undefined : e.columns_id.length
          })
        });
      }
    }
    return {
      cellMinWidthMap: o,
      flattenCellMinWidthMap: l,
      cellRecordIdSet: s
    };
  };
  let eD = e => {
    let i = {};
    Object.keys(e).forEach(r => {
      let n = e[r];
      i[r] = Object.values(n).reduce((e, i) => Math.max(e, i), 0);
    });
    return i;
  };
  class ex {
    get tableId() {
      return this.struct.id;
    }
    get tableSnapshot() {
      return this.struct.snapshot;
    }
    didMount() {}
    destroy() {
      this.struct.removeChildrenListener(this.handleBlockStructUpdate);
      this.blockManager.eventEmitter.off(docxBlockViewConfig.notifyBlockWidth, this.collectCellBlockMinWidth);
      this.blockManager.eventEmitter.off(docxBlockViewConfig.clearCellMinWidth, this.removeCellBlockMinWidth);
    }
    constructor() {
      eL(this, "cellBlockMinWidthMap", undefined);
      eL(this, "cellBlockMinWidthMap$", undefined);
      eL(this, "cellMinWidthMap", undefined);
      eL(this, "cellRecordIdSet", undefined);
      eL(this, "collectPromise", null);
      eL(this, "minWidthCollection", {});
      eL(this, "struct", dependencyInjectionContainer.get(docxEditorCore.BlockStruct));
      eL(this, "modelService", dependencyInjectionContainer.get(docxEditorCore.MODEL_TOKEN));
      eL(this, "blockManager", dependencyInjectionContainer.get(blockManagerToken.blockManagerToken));
      eL(this, "setCellBlockMinWidth", () => {
        let e = this.cellBlockMinWidthMap;
        let i = eD(this.cellMinWidthMap);
        if (!deepEqualUtil_1.deepEqual(e, i)) {
          this.cellBlockMinWidthMap = i;
          this.cellBlockMinWidthMap$.next(i);
        }
      });
      eL(this, "collectCellBlockMinWidth", e => {
        let {
          cellId: i,
          recordId: r,
          minWidth: n,
          extra: o
        } = e;
        if (!this.cellRecordIdSet.has(i)) {
          return;
        }
        let l = eN({
          recordId: r,
          extra: o
        });
        let s = this.cellMinWidthMap;
        s[i] = s[i] || {};
        if (s[i][l] !== n) {
          this.minWidthCollection[l] = n;
          s[i][l] = n;
        }
        this.collectPromise ||= Promise.resolve().finally(() => {
          this.setCellBlockMinWidth();
          this.collectPromise = null;
        });
      });
      eL(this, "removeCellBlockMinWidth", e => {
        let {
          cellId: i,
          recordId: r,
          extra: n
        } = e;
        let o = this.cellMinWidthMap;
        let l = eN({
          recordId: r,
          extra: n
        });
        if (this.minWidthCollection[l]) {
          delete this.minWidthCollection[l];
        }
        if (o[i] && o[i][l]) {
          delete o[i][l];
          this.collectPromise ||= Promise.resolve().finally(() => {
            this.setCellBlockMinWidth();
            this.collectPromise = null;
          });
        }
      });
      eL(this, "handleBlockStructUpdate", () => {
        let {
          cellMinWidthMap: e,
          cellRecordIdSet: i
        } = eO(this.blockManager.getBlockModelByBlockIdNotCheck(this.tableId).record.snapshot, this.blockManager, this.tableId, this.minWidthCollection);
        this.cellMinWidthMap = e;
        this.cellRecordIdSet = i;
        this.setCellBlockMinWidth();
      });
      let {
        cellMinWidthMap: e,
        flattenCellMinWidthMap: i,
        cellRecordIdSet: r
      } = eO(this.tableSnapshot, this.blockManager, this.tableId, this.minWidthCollection);
      this.cellMinWidthMap = e;
      this.cellRecordIdSet = r;
      this.cellBlockMinWidthMap = i;
      this.cellBlockMinWidthMap$ = new behaviorSubjectClass.BehaviorSubject(i);
      this.struct.addChildrenListener(this.handleBlockStructUpdate);
      this.blockManager.eventEmitter.on(docxBlockViewConfig.notifyBlockWidth, this.collectCellBlockMinWidth);
      this.blockManager.eventEmitter.on(docxBlockViewConfig.clearCellMinWidth, this.removeCellBlockMinWidth);
    }
  }
  var cellSelectionTableService = require("cell-selection-table-service") /*id: 386469*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var selectionServiceProviderName = require("selection-service-provider-name") /*id: 572319*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var tableBasicTableUiToken = require("table-basic-table-ui-token") /*id: 470778*/;
  function eV(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function eZ(e, i, r) {
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
  function ez(e, i, r, n, o) {
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
  let eK = dependencyInjectionContainer.Provide(cellSelectionTableService.cellSelectionToken)((w = ez((T = class {
    updateSelection(e) {
      if (!deepEqualUtil_1.deepEqual(e, this.cellSelection)) {
        this.cellSelection = e;
        this.cellSelection$.next(e);
      }
    }
    didMount() {
      this.selectionAPI.onSelectionChange(this.handleSelectionChange);
      if (browserEnvironmentDetectionUtils.browserEnv.isMobile) {
        this.selectionAPI.onSelectionChanging(this.handleSelectionChange);
      }
      docxEditorEventConstantsAndManager.globalEventEmitter.on(docxEditorEventConstantsAndManager.eventConstants.TASK.SELECTION_CHANGE, this.handleTaskSelectionChange);
      this.subscriptionDestroy = () => {
        this.selectionAPI.offSelectionChange(this.handleSelectionChange);
        if (browserEnvironmentDetectionUtils.browserEnv.isMobile) {
          this.selectionAPI.offSelectionChanging(this.handleSelectionChange);
        }
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.TASK.SELECTION_CHANGE, this.handleTaskSelectionChange);
      };
      let e = this.selectionAPI.getSelection();
      if (e.length) {
        this.handleSelectionChange([], e);
      }
    }
    destroy() {
      this.cellSelection$.complete();
      this.subscriptionDestroy();
    }
    checkSelectedBlocksBelongCurrentTable(e) {
      let {
        tableId: i
      } = this.tableBasicUIService.tableInfo;
      return e.some(e => {
        let n = this.modelService.getBlockModelByBlockId(e.id);
        return (n == null ? undefined : n.type) === docBlockTypeConstants.blockTypeConstants.CELL && (n == null ? undefined : n.parent?.id) === i;
      });
    }
    getOnlyParentCellId(e) {
      let i;
      let {
        tableId: r
      } = this.tableBasicUIService.tableInfo;
      for (let o of e) {
        let e = this.getAncestorCell(o.id);
        if (!e || r !== e.parent?.id) {
          return [false];
        }
        let l = e.cellId;
        if (i && l !== i) {
          return [false];
        }
        i = l;
      }
      if (i) {
        return [true, i];
      } else {
        return [false];
      }
    }
    getAncestorCell(e) {
      let i = this.modelService.getBlockModelByBlockId(e);
      while (i && i.parent) {
        if (i.parent.type === docBlockTypeConstants.blockTypeConstants.CELL) {
          return i.parent;
        }
        i = i.parent;
      }
    }
    constructor() {
      eZ(this, "cellSelection$", new observableSubjectClass.Subject());
      eZ(this, "cellSelection", undefined);
      eV(this, "modelService", w, this);
      eV(this, "tableBasicUIService", B, this);
      eV(this, "selectionAPI", P, this);
      eZ(this, "innerFocusedTaskCellId", undefined);
      eZ(this, "handleSelectionChange", (e, i) => {
        var n;
        this.innerFocusedTaskCellId = undefined;
        if (!i.length && this.cellSelection?.hasCellSelected && ((n = document.activeElement) === null || n === undefined ? undefined : n.closest(".overlay-container"))) {
          return;
        }
        if (i.length) {
          let e = this.checkSelectedBlocksBelongCurrentTable(i);
          if (e) {
            this.updateSelection({
              hasCellSelected: e,
              source: this.selectionAPI.getContext()?.source
            });
            return;
          }
        }
        let [s, a] = this.getOnlyParentCellId(i);
        if (s) {
          this.updateSelection({
            focusedCellId: a,
            hasCellSelected: true,
            source: this.selectionAPI.getContext()?.source
          });
          return;
        }
        this.updateSelection();
      });
      eZ(this, "handleTaskSelectionChange", e => {
        let r = this.getAncestorCell(e);
        let n = r == null ? undefined : r.cellId;
        let {
          tableId: o
        } = this.tableBasicUIService.tableInfo;
        if ((r == null ? undefined : r.parent?.id) === o && n && n !== this.innerFocusedTaskCellId) {
          this.innerFocusedTaskCellId = n;
          this.updateSelection({
            focusedCellId: n,
            hasCellSelected: true
          });
        }
      });
      eZ(this, "subscriptionDestroy", emptyExportFunction.emptyFunction);
    }
  }).prototype, "modelService", [docxEditorCore.MODEL_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), B = ez(T.prototype, "tableBasicUIService", [tableBasicTableUiToken.tableBasicTableToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), P = ez(T.prototype, "selectionAPI", [selectionServiceProviderName.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), T)) || T;
  function eX(e, i, r) {
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
  L = dependencyInjectionContainer.Inject(docxEditorCore.BlockStruct);
  p = (N = class {
    get scrollableSlotElement() {
      return this.scrollableSlotRef?.current || null;
    }
    getTableInfo() {
      let e = docxTableLayoutHelper.createTableSnapshot(this.struct.id, this.struct.snapshot);
      return {
        ...e,
        colIds: [...e.colIds],
        rowIds: [...e.rowIds]
      };
    }
    get tableInfo() {
      this._tableInfo ||= this.getTableInfo();
      return this._tableInfo;
    }
    waitForTableNextRender() {
      return new Promise(e => {
        this.nextRenderResolves.push(e);
      });
    }
    init(e) {
      this.scrollableSlotRef = e;
    }
    didUpdate() {
      let e = this.nextRenderResolves;
      this.nextRenderResolves = [];
      e.forEach(e => e());
    }
    didMount() {
      this.struct.addDataListener(this.onTableBlockUpdate);
    }
    destroy() {
      this.tableInfoChange$.complete();
      this.struct.removeDataListener(this.onTableBlockUpdate);
    }
    getLineIds(e, i) {
      let {
        colIds: r,
        rowIds: n
      } = i || this.tableInfo;
      if (e === tableLayoutConstants.layoutDirection.COLUMN) {
        return r;
      } else {
        return n;
      }
    }
    constructor() {
      var e;
      var i;
      eX(this, "tableInfoChange$", new observableSubjectClass.Subject());
      eX(this, "scrollableSlotRef", undefined);
      e = "struct";
      if (i = A) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      eX(this, "_scrollableSlotElement", undefined);
      eX(this, "_tableInfo", undefined);
      eX(this, "nextRenderResolves", []);
      eX(this, "onTableBlockUpdate", () => {
        if (docxFeatureFlags.isY0Enabled()) {
          docxEventCollector.docEventCollector("doc_bug_track_dev", {
            action: "table_model_update$",
            info: {
              ts: Number(new Date()),
              id: docxUtilityHelpers.maskSensitiveData(this.struct.recordId)
            }
          });
        }
        try {
          let e = this.tableInfo;
          let i = this.getTableInfo();
          this._tableInfo = i;
          this.tableInfoChange$.next([e, i]);
        } catch (e) {
          docxEventCollector.docEventCollector("doc_bug_track_dev", {
            action: "table_model_update$",
            info: {
              msg: e.message,
              stack: JSON.stringify(e.stack)
            }
          });
        }
      });
    }
  }).prototype;
  m = "struct";
  v = [L];
  y = {};
  Object.keys(b = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    y[e] = b[e];
  });
  y.enumerable = !!y.enumerable;
  y.configurable = !!y.configurable;
  if ("value" in y || y.initializer) {
    y.writable = true;
  }
  A = (y = v.slice().reverse().reduce(function (e, i) {
    return i(p, m, e) || e;
  }, y)).initializer === undefined ? (Object.defineProperty(p, m, y), null) : y;
  let eG = N;
  var tableVisibleWidthProvider = require("table-visible-width-provider") /*id: 528584*/;
  function eJ(e, i, r) {
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
  class eY {
    onServiceDispose() {
      this.tableVisibleWidth$.complete();
    }
    constructor() {
      eJ(this, "tableVisibleWidth", 0);
      eJ(this, "tableVisibleWidth$", new behaviorSubjectClass.BehaviorSubject(0));
      eJ(this, "setTableVisibleWidth", e => {
        if (!deepEqualUtil_1.deepEqual(e, this.tableVisibleWidth)) {
          this.tableVisibleWidth = e;
          this.tableVisibleWidth$.next(e);
        }
      });
    }
  }
  var tableCellDeleteSignalModule = require("table-cell-delete-signal-module") /*id: 473863*/;
  var tableWillDeleteCellProvider = require("table-will-delete-cell-provider") /*id: 473045*/;
  let e1 = dependencyInjectionContainer.Provide(tableWillDeleteCellProvider.tableWillDelCellId)((S = (O = class {
    toggleDeleteCell(e) {
      this.willDeleteCell.next(e);
    }
    subDeleteCell(e) {
      return this.willDeleteCell.subscribe(e);
    }
    constructor() {
      var e;
      var i;
      e = "willDeleteCell";
      if (i = D) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
    }
  }).prototype, k = "willDeleteCell", E = [tableCellDeleteSignalModule.setTableWillDeleteCellSignal], _ = {}, Object.keys(C = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    _[e] = C[e];
  }), _.enumerable = !!_.enumerable, _.configurable = !!_.configurable, ("value" in _ || _.initializer) && (_.writable = true), D = (_ = E.slice().reverse().reduce(function (e, i) {
    return i(S, k, e) || e;
  }, _)).initializer === undefined ? (Object.defineProperty(S, k, _), null) : _, O)) || O;
  var tableHeaderClickSignalHandler = require("table-header-click-signal-handler") /*id: 114441*/;
  var tableHeaderSelectingSignal = require("table-header-selecting-signal") /*id: 361769*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var selectionRectangleUtility = require("selection-rectangle-utility") /*id: 91539*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var checkEditPermission = require("check-edit-permission") /*id: 849362*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var docxTableEventHandler = require("docx-table-event-handler") /*id: 780961*/;
  var tableActionHelper = require("table-action-helper") /*id: 826304*/;
  var tableLayoutConfiguration = require("table-layout-configuration") /*id: 647875*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var domRectBboxHelpers = require("dom-rect-bbox-helpers") /*id: 412452*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var headerSelectionTableUiProvider = require("header-selection-table-ui-provider") /*id: 777182*/;
  var tableStateTableUiServiceToken = require("table-state-table-ui-service-token") /*id: 506293*/;
  var tableBlockViewSnapshot = require("table-block-view-snapshot") /*id: 323205*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  let tv = reactLoadableComponent({
    loader: () => require.e("docx_table_placeholder") /*id: 34206*/.then(require.bind(require, "docx-table-deleted-placeholder") /*id: 725109*/),
    loading: () => null
  });
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var ty = classnamesUtils;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  let tE = styledComponentsCore.default.div`
  ${e => `
      padding-right: ${e.paddingRight}px;
      .table-content-padding > .block-flash-mask {
        right: ${e.paddingRight}px!important;
      }
    `}
`;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var useDebounceCallbackHook_1 = require("use-debounce-callback-hook_1") /*id: 682959*/;
  var useStableCallbackHook = require("use-stable-callback-hook") /*id: 600393*/;
  var useDebounceHook = require("use-debounce-hook") /*id: 469094*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var docxOverlayPositionSync = require("docx-overlay-position-sync") /*id: 662835*/;
  let tw = debugLoggerFactory.createEnabledLogger("table:useHoveringTable");
  var tB = (e, i) => {
    let [r, n] = reactCoreLibraryReexport.useState(false);
    let o = reactCoreLibraryReexport.useRef({
      isHovering: false,
      time: 0
    });
    let l = reactCoreLibraryReexport.useRef(null);
    let s = reactCoreLibraryReexport.useRef(null);
    let {
      blockManager: a,
      tableId: c,
      logId: d,
      hostElementRef: u
    } = e;
    let h = tableLayoutConfiguration.tableLayoutConfig.hoverTableSetThrottled;
    let f = browserEnvironmentDetectionUtils.browserEnv.isNonIPadMobile ? i : u.current;
    let g = (e, i, r) => {
      let n = docxOverlayPositionSync.calcElementRect(r);
      let o = docxOverlayPositionSync.calcElementRect(e);
      let {
        top: l,
        left: s,
        right: a,
        height: c
      } = docxOverlayPositionSync.calcElementRect(i);
      let d = Math.min(a, n.right);
      let u = Math.max(o.right, d) - s + docxEditorConstantsConfig.scrollOffset;
      return new DOMRect(s - docxEditorConstantsConfig.scrollOffset, l, u, c);
    };
    let p = useDebounceCallbackHook_1.useDebounceCallback(() => n(o.current.isHovering), 60);
    let m = function (e, i = Date.now()) {
      if (!h) {
        n(e);
        return;
      }
      if (!(i < o.current.time)) {
        o.current.time = i;
        if (o.current.isHovering !== e) {
          o.current.isHovering = e;
          p();
        }
      }
    };
    let v = () => {
      m(false);
    };
    let b = useStableCallbackHook.useStableCallback(function (e, i = 0) {
      tw(d, "handleMouseHover(%s)", e.type);
      if (f) {
        l.current = l.current || f.querySelector(`.${docxScrollableConstants.scrollableItem}`);
        s.current = s.current || f.querySelector(`.${docxScrollableConstants.scrollableContainer}`);
        if (l.current && s.current) {
          let {
            clientX: r
          } = e;
          let n = g(f, l.current, s.current);
          if (r < n.left || r > n.right) {
            m(false, i);
            return;
          }
        }
        m(true, i);
      }
    });
    let y = useDebounceHook.useDebounce(b, 50);
    let S = e => {
      if (h) {
        y(e, Date.now());
      }
      b(e);
    };
    reactCoreLibraryReexport.useEffect(() => {
      l.current = f ? f.querySelector(`.${docxScrollableConstants.scrollableItem}`) : null;
      s.current = f ? f.querySelector(`.${docxScrollableConstants.scrollableContainer}`) : null;
    }, [f]);
    reactCoreLibraryReexport.useEffect(() => {
      if (f) {
        f.addEventListener("mousemove", S, tableLayoutConstants_1.passiveEventOpts);
        f.addEventListener("mouseover", S, tableLayoutConstants_1.passiveEventOpts);
        f.addEventListener("mouseout", v, tableLayoutConstants_1.passiveEventOpts);
        return () => {
          f.removeEventListener("mousemove", S);
          f.removeEventListener("mouseover", S);
          f.removeEventListener("mouseout", v);
        };
      }
    }, [a, c, d, f]);
    return r;
  };
  var tableWillDeleteCellHook = require("table-will-delete-cell-hook") /*id: 175568*/;
  var useObservableState = require("use-observable-state") /*id: 150624*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  function tO(e) {
    return e.docx.appSettings.safeRightMargin;
  }
  var docScrollEventManager = require("doc-scroll-event-manager") /*id: 361839*/;
  var blockAuthorServiceProvider = require("block-author-service-provider") /*id: 302629*/;
  let tF = debugLoggerFactory.createEnabledLogger("table:useTableScroll");
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var t$ = debugBrowserConfig;
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  var tableResizeProviderName = require("table-resize-provider-name") /*id: 799973*/;
  var docxTableColumnWidthCalculator = require("docx-table-column-width-calculator") /*id: 985337*/;
  let tV = t$("table:useColumnWidth");
  let tZ = styledComponentsCore.default.div`
  top: 0px;
  position: absolute;
  bottom: 0;
  width: ${e => e.scrollLeft > 8 ? "8px" : `${e.scrollLeft}px`};
  left: 0;
  border-left: 1px solid var(--line-border-card);
  background: linear-gradient(to right, rgba(var(--N1000-BG-raw), 0.05) 0%, rgba(var(--bg-body-raw), 0) 96.62%);
  z-index: 2;
`;
  var editorBackgroundMaskManager = require("editor-background-mask-manager") /*id: 967604*/;
  var tK = reactCoreLibraryReexport.memo(function (e) {
    let {
      cellInfo: n,
      onCellClick: o,
      viewService: l,
      onCellMouseDown: s,
      recursionProps: a,
      tableId: c,
      editable: d,
      isStickyCell: u = false
    } = e;
    let {
      blockManager: h
    } = a;
    let f = function (e, i, r) {
      let n = r.getBlockStructsByRecordId(e);
      if (n.length === 1) {
        return n[0];
      } else {
        return n.find(e => e.parent.id === i);
      }
    }(n.cellRecordId, c, h);
    let g = h.layoutManager.getReconciler();
    let [, p] = reactCoreLibraryReexport.useState(f && !f.isDataPending());
    let m = reactCoreLibraryReexport.useCallback(() => {
      if (f && !f.isDataPending()) {
        f.removeChildrenListener(m);
        p(true);
      }
    }, [f]);
    reactCoreLibraryReexport.useEffect(() => {
      if (f && f.isDataPending()) {
        f.addDataListener(m);
        return () => {
          f.removeDataListener(m);
          g.removeVirtualCacheLine(f.id);
        };
      }
    }, [f, g, m]);
    let v = reactCoreLibraryReexport.useMemo(() => browserEnvironmentDetectionUtils.browserDetector.isMobile ? {} : {
      contentEditable: d,
      suppressContentEditableWarning: true
    }, [d]);
    if (!f || !f.active) {
      return null;
    }
    let b = f.id;
    let y = ty("table-cell-block", "table-cell-block-host", `cell-${b}`, "table-cell-content-wrapper", u && "sticky-cell-vertical-align-polyfill");
    return l.render(b, {
      tag: "td",
      className: y,
      recursionProps: a,
      tableId: c,
      cellInfo: n,
      isStickyCell: u,
      style: function (e, i, r = false) {
        return {
          ...function (e) {
            let i = e.snapshot[tableLayoutConstants.blockPropertyKeys.BACKGROUND_COLOR];
            let r = i ? editorBackgroundMaskManager.getThemeBackgroundColor(String(i)) : "";
            if (r) {
              return {
                backgroundColor: r
              };
            } else {
              return {};
            }
          }(e),
          ...function (e, i) {
            let r = e.snapshot[tableLayoutConstants.blockPropertyKeys.VERTICAL_ALIGN];
            if (r) {
              return docxTableLayoutUtils.getCellStyle(i, r);
            } else {
              return {};
            }
          }(e, r),
          ...(i.cellId !== i.sourceCellId ? {
            display: "none"
          } : {})
        };
      }(f, n, u),
      "data-block-id": b,
      "data-block-type": f.type,
      onHostRefCallback: e => {
        if (e) {
          g.registerVirtualCacheLine(b, e);
        }
        let i = h.getBlockViewByBlockIdNotCheck(b);
        if (i && i.type === docBlockTypeConstants.blockTypeConstants.CELL) {
          i.checkSelected();
        }
      },
      attribute: {
        key: b,
        rowSpan: (n.rowSpan ?? 1).toString(),
        colSpan: (n.colSpan ?? 1).toString(),
        onMouseDown: e => s(b, e),
        onClick: e => o(b, e),
        "data-cell-select": tableLayoutConfiguration.tableLayoutConfig.enableCellSelect,
        ...v
      }
    });
  }, (e, i) => {
    let {
      cellInfo: r,
      ...n
    } = e;
    let {
      cellInfo: o,
      ...l
    } = i;
    return reactReduxCore.shallowEqual(r, o) && reactReduxCore.shallowEqual(n, l);
  });
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let tq = e => {
    let {
      tableScroller: i,
      stickyHeight: r
    } = e;
    if (!i) {
      return null;
    }
    let n = i == null ? undefined : i.closest(".scrollable-container");
    if (n) {
      return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx("div", {
        className: "sticky-mask-container",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "sticky-mask",
          style: {
            marginBottom: r
          }
        })
      }), n);
    } else {
      return null;
    }
  };
  var blockFlashEnhancementManager = require("block-flash-enhancement-manager") /*id: 710621*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var useSelectingHook = require("use-selecting-hook") /*id: 277639*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var t1 = e => {
    let {
      callback: i,
      element: r
    } = e;
    let n = r && r.current;
    let o = reactCoreLibraryReexport.useRef();
    let [l, s] = reactCoreLibraryReexport.useState();
    if (l !== n) {
      s(n);
    }
    reactCoreLibraryReexport.useEffect(() => {
      if (o && o.current && l) {
        o.current.unobserve(l);
      }
      o.current = new resizeObserverPolyfill.ResizeObserver(i);
      if (l && o.current) {
        o.current.observe(l);
      }
      return () => {
        if (o && o.current && l) {
          o.current.unobserve(l);
        }
      };
    }, [l]);
  };
  var docxTableStickyUtils = require("docx-table-sticky-utils") /*id: 289191*/;
  var resizeObserverUtil = require("resize-observer-util") /*id: 976180*/;
  var docBlockTypeCheckers = require("doc-block-type-checkers") /*id: 391113*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  let t7 = (e, i) => {
    let [r, n] = reactCoreLibraryReexport.useState(false);
    let o = useStableCallbackHook.useStableCallback((r, o) => {
      n(e.isTextSelectionAcrossBlocks(o) && o.some(e => e.id === i));
    });
    reactCoreLibraryReexport.useEffect(() => {
      e.onSelectionChange(o);
      o([], e.getSelection());
      return () => e.offSelectionChange(o);
    }, [e, o]);
    return r;
  };
  let t4 = t$("table:useHoverCellBorder");
  var tableSlotProviders = require("table-slot-providers") /*id: 151739*/;
  var useScrollState = require("use-scroll-state") /*id: 432226*/;
  let ie = debugLoggerFactory.createEnabledLogger("table:view");
  let it = reactCoreLibraryReexport.memo(reactCoreLibraryReexport.forwardRef((e, i) => {
    let {
      ctx: r,
      tableData: n,
      viewService: o,
      recursionProps: l,
      tableId: s,
      selectionAPI: a,
      editable: c,
      scrollManage: d,
      scrollContainerWidth: u,
      isKeepBoundary: h,
      scrollItemMaxLeft: f,
      onCellClick: g,
      onCellMouseDown: p,
      isShowLoading: m,
      selected: v,
      setStickyHeightInBlockView: b,
      setIsNeedSticky: y,
      setColumnWidthsInBlockView: S,
      tableProfileRef: k,
      revisionHighlight: E
    } = e;
    let {
      blockManager: C,
      isMobileEditMode: _
    } = l;
    let {
      logId: R
    } = r;
    let {
      tableInfo: I
    } = docxEditorBlockRenderer.useInjector(tableBasicTableUiToken.tableBasicTableToken);
    let {
      rowIds: M,
      cellsLayout: T
    } = I;
    let w = function () {
      let e = docxEditorBlockRenderer.useInjector(tableVisibleWidthProvider.tableWidthProvider);
      return useObservableState.useObservableState(e.tableVisibleWidth$, () => e.tableVisibleWidth);
    }();
    let [B, P] = reactCoreLibraryReexport.useState(false);
    let L = reactCoreLibraryReexport.useRef(null);
    let N = reactCoreLibraryReexport.useRef(null);
    let A = reactCoreLibraryReexport.useRef(null);
    let O = reactCoreLibraryReexport.useRef(null);
    let D = tableWillDeleteCellHook.useWillDeleteCell(s);
    let x = tB(r, L.current);
    let F = useScrollState.useScrollState(C.layoutManager);
    let j = function (e) {
      let {
        blockManager: i
      } = e;
      let [r, n] = reactCoreLibraryReexport.useState(false);
      let o = docxEditorBlockRenderer.useInjector(tableStateTableUiServiceToken.tableStateTableUiId, {
        dynamic: true
      });
      reactCoreLibraryReexport.useEffect(() => {
        let e = checkEditPermission.checkEditPermission(i, () => {
          o.then(e => e.tableActive$.subscribe(n));
        });
        return () => {
          if (e != null) {
            e.unsubscribe();
          }
        };
      }, []);
      return r;
    }({
      blockManager: C
    }) || x || B;
    let $ = c || !!_;
    let H = tableLayoutConfiguration.tableLayoutConfig.disableOperationBarOnSelected && v || !tableLayoutConfiguration.tableLayoutConfig.enableOperation;
    let U = j && $ && !m && !H;
    let W = C.layoutManager.getReconciler();
    ie(R, "operationBarVisible=%s(isEditMode=%s||%s,disabled=%s), tableActive=%s(%s||%s)", U, c, _, H, j, x, B);
    let V = function (e) {
      let {
        blockManager: i,
        tableInfo: r,
        scrollManage: n,
        ctx: o
      } = e;
      let {
        tableSnapshot: l,
        tableId: s,
        cellsLayout: a
      } = r;
      let c = function () {
        let e = docxEditorBlockRenderer.useInjector(cellMinWidthTableUiService.cellMinWidthTableId);
        return useObservableState.useObservableState(e.cellBlockMinWidthMap$, () => e.cellBlockMinWidthMap);
      }();
      let d = reactCoreLibraryReexport.useRef(new Map());
      let u = i.getBlockModelByBlockIdNotCheck(s);
      let [h, f] = reactCoreLibraryReexport.useState(docxTableColumnWidthCalculator.calculateColumnWidths({
        tableSnapshot: l,
        cellBlockMinWidthMap: c,
        layoutInfo: a,
        mergeWidthMap: d.current,
        tableModel: u
      }));
      let g = useStableCallbackHook.useStableCallback((e, i) => {
        tV("%s.updateColumnWidths, col0=%s", i, e[0]);
        f(e);
      });
      let p = function (e) {
        let [i, r] = reactCoreLibraryReexport.useState(null);
        let n = docxEditorBlockRenderer.useInjector(tableResizeProviderName.tableResizeName, {
          dynamic: true
        });
        let o = reactCoreLibraryReexport.useRef(false);
        let l = reactCoreLibraryReexport.useRef(null);
        reactCoreLibraryReexport.useEffect(() => {
          let {
            blockManager: i
          } = e;
          let s = checkEditPermission.checkEditPermission(i, () => {
            n.onReady(i => {
              i.init(e);
              o.current = true;
              l.current = i.resizingInfo$.subscribe(r);
            });
          });
          return () => {
            var e;
            if (s != null) {
              s.unsubscribe();
            }
            if ((e = l.current) !== null && e !== undefined) {
              e.unsubscribe();
            }
          };
        }, []);
        return i;
      }({
        mergeWidthMapRef: d,
        scrollManage: n,
        scrollerContainerClass: o.scrollerContainerClass,
        updateColumnWidths: g,
        blockManager: i
      });
      (function (e) {
        let {
          tableInfo: i,
          cellBlockMinWidthMap: r,
          updateColumnWidths: n,
          mergeWidthMapRef: o,
          blockManager: l
        } = e;
        let {
          tableSnapshot: s,
          cellsLayout: a,
          colIds: c,
          tableId: d
        } = i;
        reactCoreLibraryReexport.useLayoutEffect(() => {
          n(docxTableColumnWidthCalculator.getColumnWidthsFromSnapshot(s));
        }, [c, s, n]);
        reactCoreLibraryReexport.useEffect(() => {
          o.current = new Map();
          let e = l.getBlockModelByBlockIdNotCheck(d);
          n(docxTableColumnWidthCalculator.calculateColumnWidths({
            tableSnapshot: s,
            cellBlockMinWidthMap: r,
            layoutInfo: a,
            mergeWidthMap: o.current,
            tableModel: e
          }));
        }, [s, r, n, a]);
      })({
        tableInfo: r,
        cellBlockMinWidthMap: c,
        updateColumnWidths: g,
        mergeWidthMapRef: d,
        blockManager: i
      });
      (function (e, i) {
        let {
          tableInfo: r,
          blockManager: n
        } = e;
        let {
          tableId: o,
          tableSnapshot: l
        } = r;
        let s = reactCoreLibraryReexport.useRef(i);
        reactCoreLibraryReexport.useEffect(() => {
          docxTableColumnWidthCalculator.findChangedColumnIndices(s.current, i, e => {
            docxTableColumnWidthCalculator.updateCellsInColumn(e, r, n);
            docxTableColumnWidthCalculator.updateCellChildrenOnResize(o, e, l, n);
          });
          s.current = i;
        }, [i]);
      })(e, h);
      return function (e, i) {
        let r = reactCoreLibraryReexport.useMemo(() => arraySumHelper.sumArray(e), [e]);
        let n = i && i.columnIndex;
        let o = i !== null;
        return reactCoreLibraryReexport.useMemo(() => ({
          resizingIndex: n,
          isResizing: o,
          columnWidths: e,
          tableContentWidth: r
        }), [n, o, e, r]);
      }(h, p);
    }({
      blockManager: C,
      selectionAPI: a,
      scrollManage: d,
      tableInfo: I,
      ctx: r
    });
    let {
      isResizing: Z,
      tableContentWidth: z,
      columnWidths: X
    } = V;
    let G = useSelectingHook.useSelecting(a);
    let {
      tableHeight: q,
      tableWidth: J,
      rowInfos: Y,
      updateTableHeight: Q
    } = function (e) {
      let {
        tableRef: i,
        tableScrollerRef: r,
        tableStickyLineRef: n,
        tableData: o,
        tableContentWidth: l,
        scrollContainerWidth: s,
        isScrolling: a,
        tableActive: c
      } = e;
      let {
        rows_id: d
      } = o;
      let [u, h] = reactCoreLibraryReexport.useState(() => d.map((e, i) => ({
        height: 0,
        index: i
      })));
      let [f, g] = reactCoreLibraryReexport.useState(0);
      let p = Math.min(s || Number.MAX_VALUE, l);
      let m = useDebounceCallbackHook_1.useDebounceCallback(() => {
        let e = i.current;
        let o = r.current;
        if (!e || !o) {
          return;
        }
        let l = Array.from(e.rows);
        let s = n.current;
        if (s && s.classList.contains("sticky-row")) {
          l.unshift(n.current);
        }
        let a = Array.from(l).map(e => {
          let i = e.dataset.index;
          return {
            height: e.getBoundingClientRect().height,
            index: i ? parseInt(i) : -1
          };
        });
        let c = o.clientHeight;
        if (!deepEqualUtil_1.deepEqual(u, a)) {
          h(a);
        }
        g(c);
      }, 0, {
        leading: true
      });
      reactCoreLibraryReexport.useEffect(() => {
        if (a && !c) {
          return;
        }
        let e = setTimeout(() => {
          m();
        }, 0);
        return () => {
          clearTimeout(e);
        };
      }, [d, a, c]);
      return {
        tableWidth: p,
        tableHeight: f,
        rowInfos: u,
        updateTableHeight: m
      };
    }({
      tableRef: L,
      tableScrollerRef: O,
      tableStickyLineRef: A,
      tableData: n,
      tableContentWidth: z,
      scrollContainerWidth: u,
      blockManager: C,
      tableId: s,
      isScrolling: F,
      tableActive: j
    });
    let {
      scrollerScrollLeft: ee,
      scrollerMaxWidth: et,
      tableLeftPadding: ei,
      tableRightPadding: er,
      handleScrollerScroll: en,
      handleScrollerWidthChange: el
    } = function (e) {
      let {
        ctx: i,
        scrollManage: r,
        tableId: n,
        scrollItemMaxLeft: o,
        tableContentWidth: l,
        scrollContainerWidth: s,
        isKeepBoundary: a,
        tableScrollerRef: c,
        tableRef: d,
        recursionProps: u,
        isShowLoading: h
      } = e;
      let {
        logId: f
      } = i;
      let {
        isHistory: g,
        blockManager: p
      } = u;
      let {
        tableLeftPadding: m,
        tableRightPadding: v
      } = function (e, i, r) {
        if (e) {
          return {
            tableLeftPadding: 0,
            tableRightPadding: 0
          };
        }
        let n = i ? tableLayoutConfiguration.tableLayoutConfig.minRightPadding : tableLayoutConfiguration.tableLayoutConfig.rightPadding + r;
        return {
          tableLeftPadding: tableLayoutConfiguration.tableLayoutConfig.leftPadding,
          tableRightPadding: n
        };
      }(g, a, reactReduxCore.useSelector(tO));
      let b = m + v;
      let [y, S] = reactCoreLibraryReexport.useState(l + b);
      let k = y - b;
      let E = s ? s + m : undefined;
      let C = function (e, i) {
        let {
          tableRef: r,
          tableScrollerRef: n
        } = e;
        return useStableCallbackHook.useStableCallback(() => {
          if (r.current) {
            r.current.style.width = "1px";
          }
          let o = n.current?.scrollWidth;
          if (o) {
            if (r.current) {
              r.current.style.width = "2px";
            }
            i(o);
          }
        });
      }({
        tableRef: d,
        tableScrollerRef: c
      }, S);
      let {
        updateScrollerScrollLeft: _,
        getScrollerScrollLeft: R
      } = function (e, i) {
        let {
          scrollerMaxWidth: r,
          scrollerScrollWidth: n
        } = i;
        let [, o] = reactCoreLibraryReexport.useState(null);
        let l = reactCoreLibraryReexport.useRef(null);
        let {
          scrollManage: s,
          scrollContainerWidth: a,
          ctx: c
        } = e;
        let {
          logId: d
        } = c;
        let u = useStableCallbackHook.useStableCallback((e, i) => {
          if (s && a && r) {
            s.emitSubScroll({
              scrollLeft: e,
              scrollWidth: n
            }, i);
          }
        });
        return {
          updateScrollerScrollLeft: useStableCallbackHook.useStableCallback((e, i) => {
            if (!a) {
              tF(d, "updateScrollerScrollLeft: uninitialized, skip");
              return;
            }
            let r = l.current !== e;
            if (r) {
              l.current = e;
              if (!tableLayoutConfiguration.tableLayoutConfig.isHeaderInScroller) {
                o(e);
              }
            }
            if (i === docScrollEventManager.ScrollEventTypes.COMMENT_SCROLL || r) {
              u(e, i);
            }
          }),
          getScrollerScrollLeft: function () {
            return l.current || 0;
          }
        };
      }({
        scrollManage: r,
        scrollContainerWidth: s,
        ctx: i
      }, {
        scrollerMaxWidth: E,
        scrollerScrollWidth: y
      });
      let I = function (e, i) {
        let {
          tableRef: r,
          tableScrollerRef: n,
          ctx: o
        } = e;
        let {
          logId: l
        } = o;
        return useStableCallbackHook.useStableCallback((e, o) => {
          let s;
          if (!n.current || !r.current) {
            return;
          }
          let a = n.current;
          let {
            scrollLeft: c
          } = a;
          s = isNumberUtil.isNumber(e) ? Math.max(0, c + e) : e.scrollLeft;
          a.scrollLeft = s;
          let d = a.scrollLeft;
          tF(l, "handleSubScroll: set scroller scrollLeft: %s => %s(real=%s), delta=%s", c, s, d, isNumberUtil.isNumber(e) ? e : "not-given");
          i(d, o);
        });
      }({
        tableRef: d,
        tableScrollerRef: c,
        ctx: i
      }, _);
      let M = function (e, i) {
        let {
          tableId: r,
          tableScrollerRef: n,
          scrollManage: o,
          blockManager: l
        } = e;
        let s = useStableCallbackHook.useStableCallback(() => {
          if (!n.current) {
            return;
          }
          let {
            scrollLeft: e
          } = n.current;
          i(e);
          if (!o) {
            l.eventEmitter.emit(docxScrollableConstants.scrollEvents.ON_SCROLL, undefined, r);
          }
        });
        return useStableCallbackHook.useStableCallback(e => {
          if (e.target === n.current) {
            return s();
          }
        });
      }({
        tableScrollerRef: c,
        tableId: n,
        scrollManage: r,
        blockManager: p
      }, _);
      let T = docxEditorBlockRenderer.useInjector(tableVisibleWidthProvider.tableWidthProvider);
      let w = reactCoreLibraryReexport.useCallback(e => {
        if (!s || o === undefined) {
          return;
        }
        let i = Math.min(s - (o - e), k);
        let r = u.blockManager.editorAPI.getService(blockAuthorServiceProvider.blockAuthorProvider, {
          dynamic: true
        }).get();
        if (r != null) {
          r.updateWhenHorizontalWidthChange({
            blockId: n,
            offset: e
          });
        }
        T.setTableVisibleWidth(i);
      }, [s, o, k, T, n]);
      let B = useStableCallbackHook.useStableCallback(e => {
        if (s) {
          w(e.scrollLeft);
        }
      });
      reactCoreLibraryReexport.useEffect(() => {
        let e = c.current;
        if (r && s && e && !h) {
          tF(f, "emitSubViewChange: scrollerScrollWidth=%s", y);
          r.emitSubViewChange({
            width: y
          });
        }
      }, [y, s, r, f, c, h]);
      reactCoreLibraryReexport.useEffect(() => {
        if (!r) {
          return;
        }
        let e = r.registerSubScroll(I);
        let i = r.onScroll(B);
        return () => {
          e();
          i();
        };
      }, [r, p, n]);
      reactCoreLibraryReexport.useEffect(() => {
        if (!r) {
          return;
        }
        let {
          scrollLeft: e
        } = r.getScrollStatus();
        w(e);
      }, [r, w]);
      reactCoreLibraryReexport.useEffect(() => {
        if (r != null) {
          r.setScrollerRightPadding(v);
        }
      }, [v, r]);
      return {
        handleScrollerScroll: M,
        handleScrollerWidthChange: C,
        scrollerScrollLeft: R(),
        scrollerMaxWidth: E,
        tableLeftPadding: m,
        tableRightPadding: v
      };
    }({
      ctx: r,
      scrollManage: d,
      tableId: s,
      scrollItemMaxLeft: f,
      tableContentWidth: z,
      scrollContainerWidth: u,
      isKeepBoundary: h,
      tableScrollerRef: O,
      tableRef: L,
      recursionProps: l,
      isShowLoading: m
    });
    t1({
      callback: e => {
        Q();
        let i = e[0].contentRect.width;
        if (i !== 0) {
          if (k.current) {
            k.current.table_content_width = i;
          }
          el();
        }
      },
      element: L
    });
    reactCoreLibraryReexport.useImperativeHandle(i, () => ({
      getScrollLeft: () => ee
    }), [ee]);
    let {
      ceilingTop: es,
      stickyLine: ea,
      isNeedSticky: ec,
      stickyHeight: eu,
      gridTemplateColumns: ef
    } = function (e) {
      let {
        tableRef: i,
        columnWidths: r,
        scrollerScrollLeft: n,
        tableScrollerRef: o,
        ctx: l,
        tableData: s,
        tableStickyLineRef: a,
        setStickyHeightInBlockView: c,
        scrollManage: d
      } = e;
      let {
        blockManager: u,
        scrollerContainerClass: h,
        tableId: f
      } = l;
      let [g, p] = reactCoreLibraryReexport.useState(0);
      let m = reactCoreLibraryReexport.useRef(0);
      let v = reactCoreLibraryReexport.useMemo(() => docxTableStickyUtils.isStickyHeaderRow(s), [s]);
      let b = function (e, i) {
        var n;
        if (browserEnvironmentDetectionUtils.browserEnv.isIPadBrowser || browserEnvironmentDetectionUtils.browserEnv.isMobile || syncedReferenceBlockUtils.isSyncedReferenceBlock(e.editorAPI)) {
          return false;
        }
        let o = (n = e.getBlockModelByBlockIdNotCheck(i)) === null || n === undefined ? undefined : n.parent?.type;
        return (syncUrlBlockUtils.isSyncingActive() ? o === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE : function () {
          let n = e.getBlockModelByBlockIdNotCheck(i)?.parent;
          while (n && docBlockTypeCheckers.isAllowedBlockType(n.type)) {
            n = n.parent;
          }
          return !!n && !!docBlockTypeCheckers.isPageOnlyType(n.type);
        }()) && ["isPDF", "isSSR", "isPresentationMode", "isShortcut"].every(i => !e.editorAPI.config.get(i));
      }(u, f);
      let [y, S] = reactCoreLibraryReexport.useState(b && v);
      let k = function (e) {
        let {
          isNeedSticky: i,
          tableStickyLineRef: r,
          columnWidths: n
        } = e;
        let [o, l] = reactCoreLibraryReexport.useState("");
        reactCoreLibraryReexport.useEffect(() => {
          if (!i) {
            return;
          }
          let e = r.current;
          if (!e) {
            return;
          }
          let o = n.slice(0);
          for (let i = 0; i < e.childElementCount; i++) {
            let r = e.childNodes[i];
            let l = Number(r.getAttribute("colSpan"));
            let s = r.style.display === "none";
            if (l > 1) {
              o[i] = n.slice(i, i + l).reduce((e, i) => e + i);
            }
            if (s) {
              o[i] = 0;
            }
          }
          l(`${o.map(e => e > 0 ? `${e}px` : "").join(" ")}`);
        }, [n, r, i]);
        return o;
      }({
        isNeedSticky: y,
        tableStickyLineRef: a,
        columnWidths: r
      });
      t1({
        element: a,
        callback: () => {
          if (!y) {
            return;
          }
          let e = a.current;
          if (!e) {
            return;
          }
          let {
            height: i
          } = e.getBoundingClientRect();
          m.current = i;
          p(i);
          if (c != null) {
            c(i);
          }
        }
      });
      (function (e) {
        let {
          tableRef: i,
          tableScrollerRef: r,
          tableStickyLineRef: n,
          isNeedSticky: o,
          stickyHeight: l
        } = e;
        reactCoreLibraryReexport.useEffect(() => {
          let e = i.current;
          let s = r.current;
          let a = n.current;
          if (e && a && s && o) {
            e.style.paddingTop = `${l}px`;
            s.style.marginTop = `${-l}px`;
          } else if (s && e) {
            e.style.paddingTop = "unset";
            s.style.marginTop = "unset";
          }
        }, [l, o]);
      })({
        tableRef: i,
        tableScrollerRef: o,
        tableStickyLineRef: a,
        isNeedSticky: y,
        stickyHeight: g
      });
      (function (e) {
        let {
          tableStickyLineRef: i,
          scrollerScrollLeft: r,
          isNeedSticky: n
        } = e;
        let o = reactCoreLibraryReexport.useRef(0);
        reactCoreLibraryReexport.useLayoutEffect(() => {
          o.current = r;
          let e = i.current;
          if (e) {
            if (n) {
              e.style.setProperty("--scroll-left", `-${r}px`);
            } else {
              e.style.setProperty("--scroll-left", "0");
            }
          }
        }, [i.current, r, n]);
      })({
        tableStickyLineRef: a,
        scrollerScrollLeft: n,
        isNeedSticky: y
      });
      reactCoreLibraryReexport.useEffect(() => {
        if (u.getBlockModelByBlockIdNotCheck(f)) {
          S(b && v);
        }
      }, [v, b]);
      let E = function (e, i) {
        let r = reactCoreLibraryReexport.useRef(null);
        let n = reactCoreLibraryReexport.useRef(0);
        reactCoreLibraryReexport.useEffect(() => {
          if (!i) {
            return;
          }
          let o = () => {
            if (!r.current) {
              let i = document.querySelector(`.${e}`);
              r.current = i;
            }
            return r.current;
          };
          let l = () => {
            let e = o();
            let i = e == null ? undefined : e.getBoundingClientRect().top;
            if (i) {
              n.current = i;
            }
          };
          resizeObserverUtil.getResizeObserver().onResize(l);
          return () => {
            resizeObserverUtil.getResizeObserver().offResize(l);
          };
        }, [i, e]);
        return n;
      }(h, y);
      (function (e) {
        let {
          scrollManage: i,
          isNeedSticky: r
        } = e;
        reactCoreLibraryReexport.useEffect(() => {
          if (!i || !r) {
            return;
          }
          let e = i.registerSubNativeScrollDelta((e, r) => {
            let n = e.path || e.composedPath && e.composedPath();
            if (n && n.find(e => e.classList && e.nodeName && (e.nodeName === "TR" && e.classList.contains("sticky-row") || e.classList.contains("resizer-line-hotzone") && e.classList.contains("visible")))) {
              e.preventDefault();
              i.executeSubScroll(r, "handleStickyLineWheel");
            }
          });
          return () => {
            e();
          };
        }, [i, r]);
      })({
        scrollManage: d,
        isNeedSticky: y
      });
      return {
        ceilingTop: E.current,
        stickyLine: a.current,
        isNeedSticky: y,
        stickyHeight: m.current,
        gridTemplateColumns: k
      };
    }({
      tableRef: L,
      tableStickyLineRef: A,
      columnWidths: X,
      scrollerScrollLeft: ee,
      tableScrollerRef: O,
      ctx: r,
      tableData: n,
      scrollManage: d,
      setStickyHeightInBlockView: b
    });
    let eg = !v && e.syncCursorSelected ? e.syncCursorBorderColor : undefined;
    let ep = reactCoreLibraryReexport.useMemo(() => {
      let e = X.map((e, i) => reactJsxRuntimeCoreReexport.jsx("col", {
        width: e
      }, i));
      return reactJsxRuntimeCoreReexport.jsx("colgroup", {
        children: e
      });
    }, [X]);
    let em = reactCoreLibraryReexport.useMemo(() => tableLayoutConfiguration.tableLayoutConfig.showShadow ? !!ee && reactJsxRuntimeCoreReexport.jsx(tZ, {
      className: "left-shadow",
      scrollLeft: ee
    }) : null, [ee, q]);
    let {
      isHoverCellBorder: ev
    } = function (e, i, r) {
      let [n, o] = reactCoreLibraryReexport.useState(false);
      let l = r => {
        let n = r.target.closest(".table-cell-block");
        if (!n) {
          return false;
        }
        let o = docxBlockUtils_2.getBlockIdFromElement(n);
        if (!o) {
          return false;
        }
        let l = i.getBlockViewByBlockIdNotCheck(o);
        if (!l || l.parentId !== e) {
          return false;
        }
        let s = l.getHostRect();
        let a = Math.abs(r.clientX - (s.x + s.width));
        let c = Math.abs(r.clientX - s.x) < tableLayoutConstants_1.tableConstant3b;
        let d = a < tableLayoutConstants_1.tableConstant5;
        return c || d;
      };
      let s = useDebounceHook.useDebounce(i => {
        let r = l(i);
        if (r !== n) {
          t4("table=%s hovering: %s", e, r);
          o(r);
        }
      }, 60);
      reactCoreLibraryReexport.useEffect(() => {
        if (r) {
          t4("add mousemove listener to document");
          document.addEventListener("mousemove", s, tableLayoutConstants_1.passiveEventOpts);
          return () => {
            t4("remove mousemove listener from document");
            document.removeEventListener("mousemove", s);
          };
        }
      }, [s, r]);
      return {
        isHoverCellBorder: n
      };
    }(s, C, U);
    let eb = c && tableLayoutConfiguration.tableLayoutConfig.enableResizerLine;
    let ey = reactCoreLibraryReexport.useMemo(() => eb && reactJsxRuntimeCoreReexport.jsx(tableSlotProviders.tableColumnResizerSlot, {
      columnWidthManager: V,
      isHoverCellBorder: ev,
      tableHeight: q,
      tableInfo: I,
      ref: N,
      left: ec ? ee : 0
    }), [V, ev, q, I, eb, ee, ec]);
    let eS = ty("table", {
      selected: v,
      "header-row": !!n[tableLayoutConstants.blockPropertyKeys.HEADER_ROW],
      "header-column": !!n[tableLayoutConstants.blockPropertyKeys.HEADER_COL],
      shortcut: docxShortcutFeatureDetection.isShortcutEnabled()
    });
    let ek = ty({
      [tableLayoutConstants_1.tableClassNames.TABLE_SELECTED_FROM_EQUAL]: B,
      [tableLayoutConstants_1.tableClassNames.TABLE_SELECTED]: v,
      [tableLayoutConstants_1.tableClassNames.TABLE_WILL_DELETE_CELL]: D,
      [tableLayoutConstants_1.tableClassNames.TABLE_RESIZING]: Z,
      [tableLayoutConstants_1.tableClassNames.TABLE_SELECTING]: G
    });
    let eE = useStableCallbackHook.useStableCallback(() => {
      var e;
      var i;
      var r;
      var o;
      let l = a.getSelection();
      let s = (e = window) === null || e === undefined ? undefined : e.getSelection();
      let c = s == null ? undefined : s.focusNode;
      if (browserEnvironmentDetectionUtils.browserDetector.isIPad && browserEnvironmentDetectionUtils.browserDetector.isSafari && (l == null ? undefined : l.length) === 0 && (c == null ? undefined : (i = c.classList) === null || i === undefined ? undefined : i.contains("table-content-padding"))) {
        if (s != null) {
          s.removeAllRanges();
        }
      }
      if ((s == null ? undefined : s.isCollapsed) && (c == null ? undefined : (r = c.classList) === null || r === undefined ? undefined : r.contains(tableLayoutConstants_1.tableClassNames.TABLE_INNER_WRAPPER))) {
        if (s != null) {
          s.removeAllRanges();
        }
      }
      if ((l == null ? undefined : l.length) !== 1 || !editorSelectionUtilities.isBlockSelectionType(l)) {
        return;
      }
      let d = C.getBlockModelByBlockIdNotCheck(l[0].id)?.type;
      if (d === docBlockTypeConstants.blockTypeConstants.CELL && (c == null ? undefined : (o = c.classList) === null || o === undefined ? undefined : o.contains("scrollable-slot")) && d === docBlockTypeConstants.blockTypeConstants.CELL) {
        if (s != null) {
          s.removeAllRanges();
        }
        a.setSelection(l);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      Q();
    }, [eu, Q]);
    reactCoreLibraryReexport.useEffect(() => {
      if (y) {
        y(ec);
      }
    }, [ec]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!Z && S) {
        S(X);
      }
    }, [Z, X]);
    reactCoreLibraryReexport.useEffect(() => {
      if (d != null) {
        d.emitSetWrapperClass(ek);
      }
    }, [ek, d]);
    reactCoreLibraryReexport.useEffect(() => {
      document.addEventListener("selectionchange", eE);
      return () => {
        document.removeEventListener("selectionchange", eE);
      };
    }, [eE]);
    let eC = t7(a, e.tableId);
    let {
      renderOperationBar: e_,
      renderHeaderBar: eM
    } = reactCoreLibraryReexport.useMemo(() => {
      if (!U || !l.blockManager.hasBlockViewByBlockId(s) || eC) {
        return {
          renderOperationBar: null,
          renderHeaderBar: null
        };
      }
      let e = {
        ctx: r,
        rowInfos: Y,
        tableInfo: I,
        recursionProps: l,
        scrollerScrollLeft: ee,
        tableHeight: q,
        tableWidth: J,
        tableVisibleWidth: w,
        isHighlightedHoverEqual: B,
        setIsHighlightedHoverEqual: P,
        columnWidthManager: V,
        updateTableHeight: Q,
        tableRef: L,
        tableScrollerRef: O,
        ceilingTop: es,
        stickyLine: ea,
        isScrolling: F,
        isNeedSticky: ec,
        stickyHeight: eu
      };
      let i = tableLayoutConfiguration.tableLayoutConfig.isHeaderInScroller && reactJsxRuntimeCoreReexport.jsx(tableSlotProviders.tableHeaderBarSlot, {
        ...e,
        scrollerScrollLeft: 0
      });
      return {
        renderOperationBar: reactJsxRuntimeCoreReexport.jsx(tableSlotProviders.tableOperationBarSlot, {
          ...e
        }),
        renderHeaderBar: i
      };
    }, [U, B, l, J, s, I, Y, ee, q, w, P, V, r, Q, L, O, es, ea, F, ec, eu, eC]);
    ie(R, "render, resizing=%s, selecting=%s, scrollerScrollLeft=%s, tableWidth=%s=min(content=%s, scrollContainer=%s), width(visible=%s, col0=%s), padding=%s/%s", Z, G, ee, J, z, u, w, X[0], ei, er);
    let eT = e => {
      let {
        target: i
      } = e.nativeEvent;
      if (i instanceof HTMLElement && i.classList.contains("left-shadow")) {
        e.preventDefault();
      }
    };
    let ew = reactCoreLibraryReexport.useMemo(() => {
      if (!ec) {
        return null;
      }
      let e = O.current;
      return reactJsxRuntimeCoreReexport.jsx(tq, {
        tableScroller: e,
        stickyHeight: eu
      });
    }, [eu, ec, O.current]);
    let eB = e.tableData.rows_id;
    let eP = (e, i) => {
      if (e) {
        if (e.dataset.index === "0") {
          A.current = e;
        }
        if (e) {
          W.registerVirtualCacheLine(i, e);
        }
      }
    };
    let eL = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx("tbody", {
      children: eB.map(e => {
        let i = ed.getBlockIdByRowId(s, e);
        let r = M.indexOf(e);
        if ((r !== 0 || !ec) && r !== -1) {
          return reactJsxRuntimeCoreReexport.jsx("tr", {
            className: ty(`row-${String(i)} docx-table-tr`, {
              "docx-table-polyfill": browserEnvironmentDetectionUtils.browserDetector.firefox,
              "first-row": r === 0,
              "should-hide-border-top": r === 1 && ec
            }),
            "data-index": r,
            ref: e => eP(e, i),
            children: T[r].map((e, n) => reactJsxRuntimeCoreReexport.jsx(tK, {
              tableId: s,
              blockId: i,
              cellInfo: {
                ...e,
                rowIndex: r,
                colIndex: n
              },
              editable: c,
              viewService: o,
              onCellClick: g,
              onCellMouseDown: p,
              recursionProps: l
            }, `${e.cellRecordId}`))
          }, i);
        }
      })
    }), [M, T, o, l, s, C.layoutManager, c, ec, g, p]);
    let eN = ty(`table-block ${tableLayoutConstants_1.tableClassNames.TABLE_INNER_WRAPPER}`, {
      [blockFlashEnhancementManager.flashBlockClassName]: ec,
      "sync-selected": !!e.syncCursorSelected,
      "revision-highlight": E
    });
    let eA = {
      "--sync-bgc": e.syncCursorBgColor,
      "--sync-border-color": eg
    };
    let eO = ed.getBlockIdByRowId(s, M[0]);
    let eD = reactCoreLibraryReexport.useMemo(() => ec ? reactJsxRuntimeCoreReexport.jsx("table", {
      className: ty("sticky-row-wrapper", {
        selected: v
      }),
      style: {
        borderSpacing: 0
      },
      children: reactJsxRuntimeCoreReexport.jsx("tr", {
        className: ty(`row-${String(eO)} sticky-row first-row`, {
          "docx-table-polyfill": browserEnvironmentDetectionUtils.browserDetector.firefox,
          "table-selected": v
        }),
        "data-index": 0,
        ref: e => eP(e, eO),
        style: {
          gridTemplateColumns: ef
        },
        children: T[0].map((e, i) => reactJsxRuntimeCoreReexport.jsx(tK, {
          tableId: s,
          blockId: eO,
          cellInfo: {
            ...e,
            rowIndex: 0,
            colIndex: i
          },
          editable: c,
          isStickyCell: true,
          viewService: o,
          onCellClick: g,
          onCellMouseDown: p,
          recursionProps: l
        }, `${e.cellRecordId}`))
      }, eO)
    }) : null, [eO, ec, T, c, l, v, s, o, ef, g, p]);
    return reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: eN,
      onMouseDown: eT,
      style: eA,
      children: [eD, reactJsxRuntimeCoreReexport.jsx("div", {
        className: tableLayoutConstants_1.tableClassNames.TABLE_SCROLLER_CLASS,
        ref: O,
        style: {
          maxWidth: et,
          paddingLeft: ei || undefined,
          transform: ei ? `translateX(-${ei}px)` : undefined,
          overflow: tableLayoutConfiguration.tableLayoutConfig.scrollableOptions.enableNativeSubScroll ? undefined : "hidden",
          overflowY: "hidden"
        },
        onScroll: en,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: tableLayoutConstants_1.tableClassNames.SCROLLABLE_CONTENT,
          children: [reactJsxRuntimeCoreReexport.jsx(tE, {
            className: `
                  table-content-padding
                  ${ec ? "" : blockFlashEnhancementManager.flashBlockClassName}
                `,
            paddingRight: er,
            children: reactJsxRuntimeCoreReexport.jsxs("table", {
              className: eS,
              ref: L,
              children: [ep, eL]
            })
          }), eM, !ec && ey]
        })
      }), ec && ey, em, e_, ew]
    }), [ei, er, et, eS, e.syncCursorSelected, e.syncCursorBgColor, eg, ep, e_, em, ey, eM, eD, ew, eL, eN, eT, eA, m, en, ec]);
  }));
  var commentActionTypes = require("comment-action-types") /*id: 20572*/;
  var flowRevisionServiceName = require("flow-revision-service-name") /*id: 934786*/;
  var waitForSyncedCommentServiceReady = require("wait-for-synced-comment-service-ready") /*id: 592697*/;
  function il(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function is(e, i, r) {
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
  function ia(e, i, r, n, o) {
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
  let ic = debugLoggerFactory.createEnabledLogger("table:TableBlockReactView");
  x = dependencyInjectionContainer.Dynamic();
  F = dependencyInjectionContainer.Dynamic();
  $ = ia((j = class extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    get contentElement() {
      return this.hostElement.querySelector(".table-block");
    }
    get tableContentWidth() {
      return this.columnWidths.reduce((e, i) => e + i, 0);
    }
    setSelected(e) {
      this.setState({
        selected: e
      });
    }
    traverse(e, i) {
      e.children.forEach(e => {
        i(e);
        this.traverse(e, i);
      });
    }
    getProfile() {
      let {
        struct: e
      } = this;
      let i = this.tableProfileRef.current;
      this.traverse(e, e => {
        i.table_total_block_count++;
        if (e.type === docBlockTypeConstants.blockTypeConstants.IMAGE) {
          i.table_imgae_block_count++;
        } else if (e.type === docBlockTypeConstants.blockTypeConstants.CELL) {
          i.table_cell_block_count++;
        }
      });
      return {
        id: e.id,
        profile: i
      };
    }
    beforeHideLoading() {
      blockLoadPerformanceTracker.BlockLoadPerformanceTracker.modifyBlockLoadRecord(this.getProfile());
    }
    onResize() {
      if (this.props.scrollManage) {
        this.props.scrollManage.emitGridChange();
      }
    }
    blockViewDidUpdate(e, i) {
      super.blockViewDidUpdate(e, i);
      this.tableBasic.didUpdate();
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      this.changeSub = this.blockManager.editorAPI.dataService.interceptChange$.subscribe(this.handleTransaction);
      this.didMountUIServices();
      if (this.props.recursionProps.isShortcut) {
        if (this.props.scrollManage) {
          this.props.scrollManage.setIsShowScrollBar(false);
        }
        window.dispatchEvent(docxShortcutFeatureDetection.createCustomEvent("tableBlockDidRender", {
          detail: {
            blockId: this.id
          }
        }));
      }
      this.activeCommentService.then(e => {
        e.on(commentActionTypes.CommentActionTypes.ACTIVATE_COMMENT, this.handleActivateComment);
      });
    }
    blockViewWillUnmount() {
      super.blockViewWillUnmount();
      this.changeSub.unsubscribe();
      this.destroyUIServices();
      this.activeCommentService.then(e => {
        e.off(commentActionTypes.CommentActionTypes.ACTIVATE_COMMENT, this.handleActivateComment);
      });
    }
    didMountUIServices() {
      this.tableBasic.init(this.props.scrollableSlotRef);
      this.tableBasic.didMount();
      this.cellMinWidth.didMount();
      this.cellSelection.didMount();
      this.editableChangeSub = checkEditPermission.checkEditPermission(this.blockManager, () => {
        this.loadEditableServices();
      });
    }
    loadEditableServices() {
      this.headerSelection.onReady(e => e.didMount());
      this.tableState.onReady(e => e.didMount());
    }
    destroyUIServices() {
      var e;
      var i;
      var r;
      this.tableBasic.destroy();
      this.cellMinWidth.destroy();
      this.cellSelection.destroy();
      if ((e = this.editableChangeSub) !== null && e !== undefined) {
        e.unsubscribe();
      }
      if (this.headerSelection.isReady()) {
        if ((i = this.headerSelection.get()) !== null && i !== undefined) {
          i.destroy();
        }
      }
      if (this.tableState.isReady()) {
        if ((r = this.tableState.get()) !== null && r !== undefined) {
          r.destroy();
        }
      }
    }
    clearScreenshot() {
      var e;
      let i = (e = this.scrollManage) === null || e === undefined ? undefined : e.getScrollContainer();
      if (i) {
        i.style.height = "";
      }
      let r = tableBlockViewSnapshot.getTableViewSnapshot({
        blockView: this
      });
      if (r) {
        r.style.transform = "translate3d(0,-1px,0)";
        r.style.setProperty("--table-block-border-width", null);
      }
    }
    takeScreenshot() {
      let {
        width: e
      } = this.getHostRect();
      let i = tableBlockViewSnapshot.getTableViewSnapshot({
        blockView: this
      });
      if (i) {
        let {
          width: s,
          height: a
        } = i.getBoundingClientRect();
        if (s > 0 && e < s) {
          var r;
          var n;
          var o;
          var l;
          if ((r = this.scrollManage) !== null && r !== undefined) {
            r.setAfterRender({
              key: "scrollHorizontal",
              value: emptyExportFunction.emptyFunction
            });
          }
          if ((n = this.scrollManage) !== null && n !== undefined) {
            n.executeScroll({
              scrollLeft: 0
            });
          }
          if ((o = this.scrollManage) !== null && o !== undefined) {
            o.executeSubScroll({
              scrollLeft: 0
            });
          }
          let c = e / s;
          i.style.transform = `scale(${c}) translate3d(${-((1 - c) / 2 * s / c)}px, ${-((1 - c) / 2 * a / c - 2)}px, 0)`;
          if (c < 0.5) {
            i.style.setProperty("--table-block-border-width", `${0.5 / c}px`);
          }
          let d = (l = this.scrollManage) === null || l === undefined ? undefined : l.getScrollContainer();
          if (d) {
            let {
              height: e
            } = d.getBoundingClientRect();
            d.style.height = `${a * c + (e - a) + 2}px`;
          }
        }
      }
      return {
        done: () => {
          this.clearScreenshot();
        }
      };
    }
    async handleCellClickBottom(e, i, r, n, o) {
      if (editorTextBlockUtilities.isTextEditable(e) && e.type === docBlockTypeConstants.blockTypeConstants.TEXT) {
        if (e.model.isEmpty && !e.model.children.length) {
          ic(this.logId, "focus at the last empty line");
          this.selectionAPI.setSelection([{
            id: e.id,
            type: docxBlockSelectionHandler_1.blockTypes.TEXT,
            selection: {
              start: 0,
              end: 0
            }
          }]);
          return;
        }
        let r = this.blockManager.getBlockViewByBlockId(n).getHostRect().bottom - i.bottom;
        if (r < tableLayoutConstants_1.tableConstant28b) {
          ic(this.logId, "not enough blank height(%s < %s), do not append, just focus at tail", r, tableLayoutConstants_1.tableConstant28b);
          return editorRangeUtilities.selectToEnd(e);
        }
      }
      let l = await tableActionHelper.createTextBlockInCellHelper({
        blockManager: this.blockManager,
        tableBlockId: this.id,
        cellRecordId: r,
        offset: o.length
      });
      ic(this.logId, "append empty line and focus, blockId=%s", l);
      await this.blockManager.layoutManager.renderNodeById(l);
      this.selectionAPI.setSelection([{
        id: l,
        type: docxBlockSelectionHandler_1.blockTypes.TEXT,
        selection: {
          start: 0,
          end: 0
        }
      }]);
    }
    get scrollManage() {
      return this.props.scrollManage;
    }
    get tableViewScrollLeft() {
      if (this.tableViewRef.current) {
        return this.tableViewRef.current.getScrollLeft();
      } else {
        return 0;
      }
    }
    get flowRevisionService() {
      return this.editorAPI.getService(flowRevisionServiceName.revisionServiceName);
    }
    get activeCommentService() {
      return waitForSyncedCommentServiceReady.waitForSyncedCommentServiceReady(this.blockManager);
    }
    render() {
      ic(this.logId, "render");
      let {
        recursionProps: e,
        record: i,
        blockId: r,
        canRenderChild: n
      } = this.props;
      if (n === false) {
        return null;
      }
      let o = throttledPathFilterStringify.throttledPathStr(this.props, ["isShowLoading", "syncCursorSelected", "syncCursorBorderColor", "syncCursorBgColor", "scrollManage", "scrollContainerWidth", "scrollItemMaxLeft", "isKeepBoundary", "scrollableSlotRef"]);
      this.isRenderPlaceholder = !i.snapshot.rows_id.length || !i.snapshot.columns_id.length;
      if (this.isRenderPlaceholder) {
        return reactJsxRuntimeCoreReexport.jsx(tv, {
          blockManager: this.blockManager,
          hostElement: this.hostElement
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(it, {
          ctx: this.ctx,
          tableData: i.snapshot,
          viewService: this.editorAPI.viewService,
          recursionProps: e,
          tableId: r,
          recordId: this.record.id,
          selectionAPI: this.selectionAPI,
          selected: this.state.selected,
          boundary: this.boundary,
          editable: this.editable,
          ref: this.tableViewRef,
          onCellClick: this.handleCellClick,
          onCellMouseDown: this.handleCellMouseDown,
          eventEmitter: this.eventEmitter,
          setStickyHeightInBlockView: this.setStickyHeightInBlockView,
          setIsNeedSticky: this.setIsNeedSticky,
          setColumnWidthsInBlockView: this.setColumnWidthsInBlockView,
          tableProfileRef: this.tableProfileRef,
          revisionHighlight: this.state.revisionHighlight,
          ...o
        });
      }
    }
    constructor(e) {
      super(e);
      is(this, "CONTAINER_CLASS", this.isShortcut ? "table-scrollable-content" : "table-block");
      is(this, "state", {
        selected: false,
        cellMouseDownBeginY: tableLayoutConstants_1.tableConstantNeg1,
        revisionHighlight: false
      });
      is(this, "tableViewRef", reactCoreLibraryReexport.createRef());
      is(this, "ctx", undefined);
      is(this, "stickyHeight", 0);
      is(this, "changeSub", undefined);
      is(this, "isNeedSticky", false);
      is(this, "isRenderPlaceholder", false);
      is(this, "columnWidths", []);
      il(this, "tableBasic", $, this);
      il(this, "cellMinWidth", H, this);
      il(this, "cellSelection", U, this);
      il(this, "headerSelection", W, this);
      il(this, "tableState", V, this);
      is(this, "editableChangeSub", undefined);
      is(this, "setColumnWidthsInBlockView", e => {
        this.columnWidths = e;
      });
      is(this, "setIsNeedSticky", e => {
        this.isNeedSticky = e;
      });
      is(this, "setStickyHeightInBlockView", e => {
        this.stickyHeight = e;
      });
      is(this, "tableProfileRef", {
        current: {
          table_total_block_count: 0,
          table_imgae_block_count: 0,
          table_cell_block_count: 0,
          table_content_width: 0,
          editor_width: this.blockManager.layoutManager.getEditorWidth()
        }
      });
      is(this, "handleActivateComment", e => {
        var i;
        let {
          activeCommentId: r
        } = e;
        let n = ((i = this.snapshot.revisions) === null || i === undefined ? undefined : i.map(e => e.revisionId)) || [];
        this.setState({
          revisionHighlight: !!r && n.includes(r)
        });
      });
      is(this, "handleTransaction", e => {
        let {
          options: i,
          op: r,
          recordOps: n
        } = e;
        let {
          from: o
        } = i;
        if (o !== collaborativeEditingFlowSyncModule.kq.REMOTE) {
          return;
        }
        let {
          recordId: l,
          snapshot: s
        } = this.model;
        if (!n.find(e => e.id === l)) {
          return;
        }
        let {
          rows_id: a,
          columns_id: c,
          cell_set: d
        } = s;
        a.forEach(e => {
          c.forEach(i => {
            let n = docxTableLayoutUtils.concatenateIds(e, i);
            if (!d[n]) {
              let e = tableActionHelper.createCellBlock(r, l, n);
              tableActionHelper.createTextBlockInCell(r, e);
            }
          });
        });
      });
      is(this, "selectSingleCell", e => {
        this.selectionAPI.setSelection([{
          type: docxBlockSelectionHandler_1.blockTypes.BLOCK,
          id: e
        }]);
        docxTableEventHandler.trackCellClick("hot_zone");
      });
      is(this, "debouncedSelectSingleCell", debounceUtil_1_1.debounce(e => {
        if (this.blockManager.getBlockViewByBlockIdNotCheck(e)) {
          this.selectSingleCell(e);
        }
      }, tableLayoutConstants_1.tableConstant200));
      is(this, "scrollIntoViewport", (e, i) => {
        let r;
        let {
          recursionProps: n
        } = this.props;
        let {
          selectionAPI: o,
          rect: l,
          blockManager: s
        } = n;
        let a = o.getSelection();
        let c = o.isTextSelectionAcrossBlocks(a);
        if (!docxTableLayoutUtils.isInTableCell(this.id, e, s) || c || [".gpf-at-user", ".docx-reminder-inline-component"].some(e => i.closest(e))) {
          return;
        }
        let d = o.getSelection();
        if (!d.length) {
          return;
        }
        let u = d[0];
        let h = s.getBlockViewByBlockIdNotCheck(u.id);
        let f = s.getBlockViewByBlockIdNotCheck(l.mainRootBlockId);
        if (d.length === 1 && u.type === docxBlockSelectionHandler_1.blockTypes.BLOCK && (h == null ? undefined : h.type) === docBlockTypeConstants.blockTypeConstants.IMAGE && (h == null ? undefined : h.contentElement) && f) {
          let e = h.contentElement.getBoundingClientRect();
          let i = f.getHostRect();
          r = domRectBboxHelpers.calcRelativeRect(e, i);
        } else {
          r = selectionRectangleUtility.getSelectionRectangle(o, l);
        }
        if (r) {
          if (syncedReferenceBlockUtils.isSyncedReferenceBlock(s.editorAPI)) {
            let e = l.getBlockRect(l.getRootBlockId());
            r = domRectBboxHelpers.calcRelativeRect(r, e);
          }
          docxTableLayoutUtils.scrollTableHorizontal(this.blockManager, e, r);
        }
      });
      is(this, "handleCellMouseDown", (e, i) => {
        var r;
        this.setState({
          cellMouseDownBeginY: i.clientY
        });
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isIPad && i.buttons === 1 && ((r = i.target) === null || r === undefined ? undefined : r.classList.contains("table-cell-block"))) {
          i.preventDefault();
          return;
        }
        let n = this.blockManager.getBlockViewByBlockIdNotCheck(e);
        if (n && tableLayoutConfiguration.tableLayoutConfig.enableCellSelect && docxTableLayoutUtils.checkHorizontalAlign(i.clientX, n)) {
          i.preventDefault();
        }
      });
      is(this, "handleCellClick", async (e, i) => {
        var r;
        let n = this.blockManager.getBlockViewByBlockIdNotCheck(e);
        if (!n) {
          return;
        }
        if (tableLayoutConfiguration.tableLayoutConfig.enableCellSelect && docxTableLayoutUtils.checkHorizontalAlign(i.clientX, n) && ((r = i.target) === null || r === undefined ? undefined : r.closest(".table-cell-block"))) {
          if (browserEnvironmentDetectionUtils.browserDetector.isIPadBrowser) {
            this.debouncedSelectSingleCell(e);
          } else {
            this.selectSingleCell(e);
          }
          return;
        }
        if (!this.editable || Math.abs(i.clientY - this.state.cellMouseDownBeginY) > tableLayoutConstants_1.tableConstant10) {
          return;
        }
        let o = e => {
          let i = this.blockManager.getBlockViewByBlockId(e);
          let r = i.getHostRect();
          return [i, r];
        };
        let l = i.target;
        let s = docxBlockUtils_2.getBlockIdFromNode(l) || docxEditorCore.ZERO_OFFSET;
        setTimeout(() => this.scrollIntoViewport(s, l));
        if (s !== e) {
          return;
        }
        let a = this.editorAPI.modelService.getBlockModelByBlockId(e);
        let c = a == null ? undefined : a.children;
        if (!a || !(c == null ? undefined : c.length)) {
          return;
        }
        let d = c[0].id;
        let u = function (e) {
          if (!e.children.length) {
            return null;
          }
          let i = e.children[e.children.length - 1];
          while (i.type === docBlockTypeConstants.blockTypeConstants.TEXT && i.children.length) {
            i = i.children[i.children.length - 1];
          }
          return i;
        }(a).id;
        let [h, f] = o(d);
        let [g, p] = o(u);
        let m = i.clientY <= f.top;
        if (i.clientY >= p.bottom && !i.shiftKey) {
          return this.handleCellClickBottom(g, p, a.recordId, e, c);
        } else if (m) {
          return (e => {
            if (editorTextBlockUtilities.isQuoteBlock(e)) {
              ic(this.logId, "handleCellClick: focus at first textual block");
              editorRangeUtilities.selectToStart(e);
            }
          })(h);
        } else {
          return undefined;
        }
      });
      let {
        hostElementRef: i
      } = e;
      let {
        id: r
      } = this.model;
      let {
        blockManager: n
      } = e.recursionProps;
      let {
        scrollerContainerClass: o
      } = e.options;
      this.ctx = {
        tableId: r,
        blockManager: n,
        logId: `table=${r}`,
        hostElementRef: i,
        scrollerContainerClass: o
      };
    }
  }).prototype, "tableBasic", [tableBasicTableUiToken.tableBasicTableToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  H = ia(j.prototype, "cellMinWidth", [cellMinWidthTableUiService.cellMinWidthTableId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  U = ia(j.prototype, "cellSelection", [cellSelectionTableService.cellSelectionToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  W = ia(j.prototype, "headerSelection", [x, headerSelectionTableUiProvider.headerTableUiService], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  V = ia(j.prototype, "tableState", [F, tableStateTableUiServiceToken.tableStateTableUiId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let id = j;
  var flowSyncBoundaryNodesExtractor = require("flow-sync-boundary-nodes-extractor") /*id: 502677*/;
  function ih(e, i, r) {
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
  class ig extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    get blockId() {
      return this.props.blockId;
    }
    get isStickyCell() {
      return this.props.isStickyCell;
    }
    get cellId() {
      return this.props.cellInfo.cellId;
    }
    get cellRecordId() {
      return this.props.cellInfo.cellRecordId;
    }
    get focusElement() {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        return null;
      } else {
        return this.hostElement;
      }
    }
    setSelected(e) {
      this.blockMaskManager.toggleMask("selected", e, {
        borderRadius: "0"
      });
    }
    setSyncSelected(e) {
      this.blockMaskManager.toggleMask("sync-selected", e, {
        borderRadius: "0"
      });
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      this.struct.addChildrenListener(this.handleFirstChildOrLastChildRecordChange);
      let {
        snapshot: e
      } = this.record;
      if (!(e.children || []).length) {
        let {
          isPDF: e,
          isSSR: i,
          isPresentationMode: r,
          isShortcut: n
        } = this.props.recursionProps;
        let o = this.config.get("isHistory");
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_mobile", {
          action: "empty_talecell_children",
          info: JSON.stringify({
            isPDF: e,
            isSSR: i,
            isPresentationMode: r,
            isShortcut: n,
            isHistory: o
          })
        });
      }
    }
    blockViewDidUpdate(e, i) {
      super.blockViewDidUpdate(e, i);
      this.updateBackgroundColor();
      this.updateVerticalAlign();
    }
    blockViewWillUnmount() {
      super.blockViewWillUnmount();
      this.struct.removeChildrenListener(this.handleFirstChildOrLastChildRecordChange);
    }
    render() {
      return this.renderChildren();
    }
    constructor(...e) {
      super(...e);
      ih(this, "handleFirstChildOrLastChildRecordChange", (e, i) => {
        flowSyncBoundaryNodesExtractor.getBoundaryNodes(i.recordOps, this.struct).forEach(e => e && this.blockManager.layoutManager.didUpdateNode(e.id, true));
      });
      ih(this, "checkSelected", () => {
        if (this.selectionAPI.getSelection().find(e => e.type === docxBlockSelectionHandler_1.blockTypes.BLOCK && e.id === this.id)) {
          this.setSelected(true);
        }
      });
      ih(this, "getSnapshotValue", e => {
        if (typeof e != "string") {
          return;
        }
        let i = this.record.snapshot[e];
        if (i) {
          return String(i);
        } else {
          return "";
        }
      });
      ih(this, "attachBlockView", () => {
        this.checkSelected();
      });
      ih(this, "updateBackgroundColor", () => {
        let e = this.getSnapshotValue(tableLayoutConstants.blockPropertyKeys.BACKGROUND_COLOR);
        let i = editorBackgroundMaskManager.getThemeBackgroundColor(e);
        if (this.hostElement && i !== this.hostElement.style.backgroundColor) {
          this.hostElement.style.backgroundColor = i ?? "";
        }
      });
      ih(this, "updateVerticalAlign", () => {
        let e = this.getSnapshotValue(tableLayoutConstants.blockPropertyKeys.VERTICAL_ALIGN);
        if (this.isStickyCell) {
          docxTableLayoutUtils.setCellJustifyContent(this.hostElement, e);
          return;
        }
        if (this.hostElement && this.hostElement.style["vertical-align"] !== e) {
          this.hostElement.style["vertical-align"] = e;
        }
      });
    }
  }
  function ip(e, i, r) {
    let n = {
      type: docxEditorCore.ScopeType.BLOCK_VIEW,
      blocks: [docBlockTypeConstants.blockTypeConstants.TABLE]
    };
    docxEditorCore.registerSignals([{
      provide: tableHeaderClickSignalHandler.tableHeaderClickSignalSetter,
      useClass: docxEditorCore.SubjectType
    }, {
      provide: tableHeaderSelectingSignal.tableHeaderSignal,
      useClass: docxEditorCore.SubjectType
    }, {
      provide: tableCellDeleteSignalModule.tableWillDeleteCellSignal,
      useClass: docxEditorCore.SubjectType
    }]);
    docxEditorCore.registerProviders([{
      provide: diTableCellChildrenCompensation.tableCellChildrenKey,
      useClass: e_,
      autoRun: true
    }, {
      provide: layoutNodeBuilderProvider.layoutNodeBuilder,
      useClass: eg,
      args: [!!r]
    }, ey, {
      provide: tableBasicTableUiToken.tableBasicTableToken,
      useClass: eG,
      scope: n
    }, {
      provide: cellMinWidthTableUiService.cellMinWidthTableId,
      useClass: ex,
      scope: n
    }, {
      provide: cellSelectionTableService.cellSelectionToken,
      useClass: eK,
      scope: n
    }, {
      provide: tableVisibleWidthProvider.tableWidthProvider,
      useClass: eY,
      scope: n
    }, {
      provide: tableWillDeleteCellProvider.tableWillDelCellId,
      useClass: e1
    }]);
    docxEditorCore.registerViewModel(Y, {
      viewCreator: id,
      options: i,
      extensions: e
    });
  }
  function im(e) {
    docxEditorCore.registerViewModel(ee, {
      viewCreator: ig,
      blockDeps: ["renderProps.cellInfo.rowSpan", "renderProps.cellInfo.colSpan", "renderProps.cellInfo.sourceCellId", "renderProps.cellInfo.cellId"],
      extensions: e
    });
  }
  require.d(exports, {
    registerTableBlock: function () {
      return ip;
    },
    registerCellBlock: function () {
      return im;
    }
  });
}