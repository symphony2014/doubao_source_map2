// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxClipboardHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 191387
         */
module.exports = function (module, exports, require) {
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var presentationModeDetectionUtils = require("presentation-mode-detection-utils") /*id: 659285*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docUiServiceSymbols = require("doc-ui-service-symbols") /*id: 452862*/;
  var registerClipboardPasteHooks = require("register-clipboard-paste-hooks") /*id: 924452*/;
  var docxClipboardCopySettings = require("docx-clipboard-copy-settings") /*id: 357081*/;
  var docxSelectionBlockUtils = require("docx-selection-block-utils") /*id: 43039*/;
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var pasteStateManager = require("paste-state-manager") /*id: 764327*/;
  var docxBlockTypeConstants = require("docx-block-type-constants") /*id: 49433*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var revisionChangeHandler = require("revision-change-handler") /*id: 420391*/;
  let E = e => {
    let o = {};
    let r = {};
    for (let o of getOwnKeys.getOwnKeys(e)) {
      let n = e[o].snapshot.parent_id;
      if (r[n]) {
        r[n].push(o);
      } else {
        r[n] = [o];
      }
    }
    for (let i of getOwnKeys.getOwnKeys(e)) {
      let a = {
        ...e[i].snapshot,
        children: r[i] ?? []
      };
      o[i] = {
        id: i,
        version: 0,
        data: a
      };
    }
    return o;
  };
  let T = function (e, o = {}) {
    let {
      clearRootChildren: r = true
    } = o;
    let n = {};
    for (let o of getOwnKeys.getOwnKeys(e)) {
      let i = e[o];
      let a = {
        ...i.data
      };
      if (collectionIncludesUtil.includes(["page"], i.data.type) && r) {
        a.children = [];
      }
      n[o] = {
        id: o,
        snapshot: a
      };
    }
    return n;
  };
  let I = e => {
    let {
      recordMap: o,
      clearRootChildren: r,
      ...n
    } = e;
    try {
      let {
        snapshot: e
      } = revisionChangeHandler.applyRevisionChanges({
        ...n,
        purify: false,
        snapshot: E(o)
      });
      return T(e, {
        clearRootChildren: r
      });
    } catch (e) {
      return o;
    }
  };
  let _ = e => {
    try {
      let o = revisionChangeHandler.revisionChangeHandler({
        text: e,
        type: "accept"
      });
      if (!o) {
        return e;
      }
      return e.compose(o);
    } catch (o) {
      return e;
    }
  };
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  var docxGridBlockSelectionManager = require("docx-grid-block-selection-manager") /*id: 967288*/;
  function C(e, o, r) {
    var n;
    if ((o = typeof (n = function (e, o) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, o || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(e);
    }(o, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, o, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[o] = r;
    }
    return e;
  }
  class N {
    get hookService() {
      return this.blockManager.editorAPI.getService(hookServiceDiConstants_1.$$);
    }
    getUnerasedBlocksOfRevision(e) {
      try {
        let o = dataProcessor.processData([...e.map(e => e.id), this.blockManager.rootBlockId]);
        let r = Object.fromEntries(o.map(e => [e, docxClipboardUtils.cloneRecord(this.blockManager, e)]));
        let n = new docxGridBlockSelectionManager.GridBlockSelectionManager(this.blockManager, e, r).getRecordMap();
        let i = I({
          recordMap: n,
          type: "accept",
          clearRootChildren: false
        });
        let a = objectValuesHelper.getObjectValues(i).filter(e => {
          var o;
          let r = objectPathGetDefault.getObjectPathDefault(e.snapshot, "parent_id");
          return !r || collectionIncludesUtil.includes((o = i[r]) === null || o === undefined ? undefined : o.snapshot.children, e.id);
        }).map(e => e.id);
        let l = a.flatMap(e => this.blockManager.getBlockIdsByRecordId(e));
        return {
          recordIds: a,
          blockIds: l
        };
      } catch (e) {
        return null;
      }
    }
    constructor(e) {
      C(this, "blockManager", undefined);
      C(this, "boundary", undefined);
      C(this, "selectionAPI", undefined);
      C(this, "headingModule", undefined);
      C(this, "options", undefined);
      C(this, "format", undefined);
      this.blockManager = e.blockManager;
      this.selectionAPI = e.selectionAPI;
      this.boundary = e.boundary;
      this.headingModule = e.headingModule;
      this.options = e;
    }
  }
  var pasteFormatConstants = require("paste-format-constants") /*id: 20626*/;
  var docxBlockToMarkdownConverter = require("docx-block-to-markdown-converter") /*id: 227231*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function O(e, o, r) {
    var n;
    if ((o = typeof (n = function (e, o) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, o || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(e);
    }(o, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, o, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[o] = r;
    }
    return e;
  }
  class $ extends N {
    shouldCopy() {
      return true;
    }
    shouldPaste(e, o) {
      return true;
    }
    onCopyBlock(e) {
      return e.id;
    }
    get rootBlockId() {
      return this.blockManager.rootBlockId;
    }
    onCopy(e, o, r) {
      if (arguments.length > 3 && arguments[3] !== undefined) {
        arguments[3];
      }
      let n = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
      let i = [...r];
      let a = {};
      let l = null;
      r = r.filter(e => e.id !== this.rootBlockId || (l = e, false));
      let s = "";
      if (l) {
        let e = this.blockManager.getBlockViewByBlockId(this.rootBlockId);
        let o = this.blockManager.getBlockModelByBlockId(this.rootBlockId);
        let r = e.model.getSelection();
        s = editorDeltaTextUtils.getNextDeltaText(o, this.blockManager.editorAPI.modelService, r ? editorRangeUtilities.getStartLenArray(r) : undefined, {
          processDelta: e => n ? _(e) : e
        });
      }
      if (this.selectionAPI.isTextSelectionAcrossBlocks(r)) {
        let {
          rangeMap: e,
          newSelectedBlockIds: o
        } = docxSelectionBlockUtils.createBlockSelectionMap(this.blockManager, r);
        a = e;
        r = r.reduce((e, r) => {
          if (o.includes(r.id)) {
            e.push({
              id: r.id,
              type: docxBlockSelectionHandler_1.blockTypes.BLOCK
            });
          }
          return e;
        }, []);
      }
      let c = n ? this.getUnerasedBlocksOfRevision(r) : null;
      let d = this.markdownParser.stringify({
        selectedBlocks: r,
        getTextSelectRange: docxSelectionBlockUtils.createActiveEditorRangeResolver(this.blockManager, this.selectionAPI, r, a),
        isInAcrossSelectRange: docxSelectionBlockUtils.createBlockSelectionFilter(this.blockManager, this.selectionAPI, i),
        processDelta: e => n ? _(e) : e,
        ignoreBlockItem: e => !!c && !c.blockIds.includes(e)
      });
      if (s) {
        d = s + (d ? `
${d}` : "");
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isAndroid && d === "") {
        d = " ";
      }
      return d;
    }
    async onPaste(e, o, r) {
      var n;
      if ((n = this.hookService) === null || n === undefined) {
        return undefined;
      } else {
        return n.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, pasteFormatConstants.pasteConstants.onPaste, {
          selectedBlockList: e,
          value: o,
          proxyClipboardData: r,
          formatInstance: this
        });
      }
    }
    constructor(...e) {
      super(...e);
      O(this, "format", docxBlockTypeConstants.fileTypes.TEXT);
      O(this, "markdownParser", new docxBlockToMarkdownConverter.DocxToMarkdownConverter(this.blockManager, this.headingModule));
    }
  }
  class L extends $ {
    shouldCopy() {
      return false;
    }
    constructor(...e) {
      var o;
      var r;
      var n;
      super(...e);
      o = "format";
      r = docxBlockTypeConstants.fileTypes.URI_LIST;
      if ((o = typeof (n = function (e, o) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, o || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(e);
      }(o, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, o, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[o] = r;
      }
    }
  }
  var editorPasteConstants = require("editor-paste-constants") /*id: 32743*/;
  var docxImageDomPurifyUtils = require("docx-image-dom-purify-utils") /*id: 520102*/;
  var docxBlockToHtmlConverter = require("docx-block-to-html-converter") /*id: 107524*/;
  var clipboardSecurityChecker = require("clipboard-security-checker") /*id: 991067*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var docBlockCellUtils = require("doc-block-cell-utils") /*id: 48515*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  class J {
    parse(e, o, r, n, a = {}) {
      let {
        processDelta: l,
        ignoreBlockItem: s
      } = a;
      let c = new docxGridBlockSelectionManager.GridBlockSelectionManager(this.blockManager, o, {});
      let d = c.getBlockIds();
      let u = editorSelectionUtilities.isSingleTextSelection(o);
      let p = !u || u && editorSelectionUtilities.isSelectionFullText(o, this.blockManager);
      let h = this.blockToNodes(d, {
        needInherit: p,
        partialContext: c,
        getTextSelectRange: r,
        singleTextSelection: u,
        isInAcrossSelectRange: n,
        processDelta: l,
        ignoreBlockItem: s
      });
      let g = document.createElement("div");
      let m = this.blockManager.getRootRecordId();
      g.setAttribute("data-page-id", m);
      g.setAttribute("data-lark-html-role", "root");
      let f = d.some(e => {
        let {
          type: o
        } = this.blockManager.getBlockModelByBlockId(e);
        return o !== docBlockTypeConstants.blockTypeConstants.DIVIDER && !docBlockTypeConstants.agendaCodeTypes.includes(o);
      }).toString();
      g.setAttribute("data-docx-has-block-data", f);
      g.innerHTML = this.toHTML(h);
      let b = syncedReferenceBlockUtils.getBlockTokenWithFallback(this.blockManager.editorAPI);
      if (!clipboardSecurityChecker.getClipboardEnable(b)) {
        platformDocUtils.Ax9(true);
      }
      return g;
    }
    blockToNodes(e, o, r) {
      let {
        needInherit: n,
        partialContext: i,
        getTextSelectRange: a,
        singleTextSelection: l,
        isInAcrossSelectRange: s,
        processDelta: c,
        ignoreBlockItem: d
      } = o;
      if (e.length === 0) {
        return [];
      }
      let u = e.length >= 1 && this.blockManager.getBlockModelByBlockId(e[0]);
      let p = this.blockManager.getBlockViewByBlockIdNotCheck(e[0]);
      let h = l && e.length === 1 && u && (syncUrlBlockUtils.isSyncingActive() ? [...docBlockTypeConstants.agendaCodeTypes, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE] : docBlockTypeConstants.agendaCodeTypes).includes(u.type) && (p == null ? undefined : p.isFocus());
      if (docBlockCellUtils.areAllCellsById(this.blockManager, e)) {
        return this.copyCellNodes(e, o);
      } else {
        return e.reduce((e, l) => {
          if (d == null ? undefined : d(l)) {
            return e;
          }
          let u = this.blockManager.getBlockModelByBlockId(l);
          if (u.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
            e.push(...this.handleCopyTable(u.id, o));
            return e;
          }
          if (!r && [docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT].includes(u.type)) {
            return docxBlockToHtmlConverter.convertBlockToHtml({
              nodes: e,
              model: u,
              children: [],
              blockManager: this.blockManager,
              headingModule: this.headingModule,
              needInherit: n,
              getTextSelectRange: a,
              parentModel: r,
              processDelta: c
            });
          }
          let p = u.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE && syncUrlBlockUtils.isSyncingActive();
          let g = h || p ? [] : this.blockToNodes(u.children.map(e => e.id).filter(e => !i.shouldSkip(e) && s(e) && !(d == null ? undefined : d(e))), o, u);
          return docxBlockToHtmlConverter.convertBlockToHtml({
            nodes: e,
            model: u,
            children: g,
            blockManager: this.blockManager,
            headingModule: this.headingModule,
            needInherit: n,
            getTextSelectRange: a,
            parentModel: r,
            processDelta: c
          });
        }, []);
      }
    }
    toHTML(e) {
      let o = "";
      for (let r of e) {
        o += docxImageDomPurifyUtils.createElementFromObject(r);
      }
      return o;
    }
    copyCellNodes(e, o) {
      let r;
      let n = this.blockManager.getBlockModelByBlockId(e[0]).parent;
      let i = n == null ? undefined : n.record.snapshot;
      let a = Object.entries(docxTableLayoutUtils.createBlockCellMap(i)).reduce((o, r) => {
        let [n, i] = r;
        this.blockManager.getBlockIdsByRecordId(n).forEach(r => {
          if (e.includes(r)) {
            o[i] = r;
          }
        });
        return o;
      }, {});
      let l = Object.keys(a);
      let s = docxTableLayoutUtils.getTableLayoutInfo(i);
      let {
        column_set: c,
        columns_id: d
      } = i;
      let {
        startRow: u,
        startCol: p,
        endRow: h,
        endCol: g
      } = docxTableLayoutUtils.getMergedCellRange({
        cellIds: l,
        layoutInfo: s,
        snapshot: i
      });
      let m = [];
      for (let e = u; e <= h; e++) {
        let r = i[tableLayoutConstants.blockPropertyKeys.HEADER_ROW] && e === 0;
        let n = {
          tagName: "tr",
          attrs: {
            style: "height:39px;"
          },
          children: []
        };
        for (let l = p; l <= g; l++) {
          var f;
          let c = s[e][l];
          if (c.cellId !== c.sourceCellId) {
            continue;
          }
          let d = i[tableLayoutConstants.blockPropertyKeys.HEADER_COL] && l === 0;
          let u = a[c.cellId];
          let p = u ? this.blockManager.getBlockModelByBlockIdNotCheck(u) : undefined;
          let h = p ? p.children.map(e => e.id) : [];
          let g = {
            tagName: r ? "th" : "td",
            attrs: {
              colspan: c.colSpan,
              rowspan: c.rowSpan,
              style: this.getCellStyles(!!r || !!d, p)
            },
            children: this.blockToNodes(h, {
              ...o,
              needInherit: true
            })
          };
          if ((f = n.children) !== null && f !== undefined) {
            f.push(g);
          }
        }
        m.push(n);
      }
      let b = [];
      let k = [];
      for (let e = p; e <= g; e++) {
        let o = d[e];
        let r = c[o].column_width;
        b.push(r);
        k.push({
          tagName: "col",
          attrs: {
            width: c[o].column_width
          }
        });
      }
      let y = {
        tagName: "colgroup",
        children: k
      };
      if (i[tableLayoutConstants.blockPropertyKeys.HEADER_ROW] && u === 0) {
        let e = m.shift();
        if (e) {
          r = [y, {
            tagName: "thead",
            children: [e]
          }, {
            tagName: "tbody",
            children: m
          }];
        }
      } else {
        r = [y, {
          tagName: "tbody",
          children: m
        }];
      }
      return [{
        tagName: "div",
        children: [{
          tagName: "table",
          attrs: {
            class: "ace-table",
            "data-ace-table-col-widths": b.join(";"),
            style: "border:none;border-collapse:collapse;table-layout:fixed;width:500px;"
          },
          children: r
        }]
      }];
    }
    handleCopyTable(e, o) {
      let r = this.blockManager.getBlockModelByBlockId(e).children.map(e => e.id);
      return this.copyCellNodes(r, o);
    }
    constructor(e, o) {
      var r;
      var n;
      var i;
      this.blockManager = e;
      this.headingModule = o;
      r = "getCellStyles";
      n = (e, o) => {
        let r = {
          border: "1px solid rgb(222, 224, 227)",
          fontSize: "10pt",
          padding: "8px",
          verticalAlign: "top"
        };
        if (e) {
          r.fontWeight = "500";
          r.backgroundColor = "rgb(242, 243, 245)";
          r.textAlign = "left";
        }
        if (o) {
          let e = o.snapshot[tableLayoutConstants.blockPropertyKeys.VERTICAL_ALIGN];
          let n = o.snapshot[tableLayoutConstants.blockPropertyKeys.BACKGROUND_COLOR];
          if (e) {
            r.verticalAlign = e;
          }
          if (n) {
            r.backgroundColor = n;
          }
        }
        return Object.keys(r).reduce((e, o) => {
          let n = o.split(/(?=[A-Z])/).join("-").toLowerCase();
          return `${e}${n}:${r[o]};`;
        }, "");
      };
      if ((r = typeof (i = function (e, o) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, o || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(e);
      }(r, "string")) == "symbol" ? i : i + "") in this) {
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
  }
  var docBlockDomParser = require("doc-block-dom-parser") /*id: 238292*/;
  function Q(e, o, r) {
    var n;
    if ((o = typeof (n = function (e, o) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, o || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(e);
    }(o, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, o, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[o] = r;
    }
    return e;
  }
  class K extends N {
    shouldCopy() {
      return true;
    }
    shouldPaste(e, o, r) {
      var n;
      return !!((n = this.hookService) === null || n === undefined ? undefined : n.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, editorPasteConstants.pasteConfig.shouldPaste, {
        selectedBlockList: e,
        value: o,
        e: r
      }));
    }
    onCopyBlock(e) {
      return e.id;
    }
    onCopy(e, o, r) {
      if (arguments.length > 3 && arguments[3] !== undefined) {
        arguments[3];
      }
      let n = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
      let i = {};
      let a = [...r];
      if (this.selectionAPI.isTextSelectionAcrossBlocks(r)) {
        let {
          rangeMap: e,
          newSelectedBlockIds: o
        } = docxSelectionBlockUtils.createBlockSelectionMap(this.blockManager, r, true, e => {
          let {
            parent: o
          } = this.blockManager.getBlockModelByBlockId(e);
          return !!o && (!![docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN].includes(o.type) || o.type === docBlockTypeConstants.blockTypeConstants.PAGE);
        });
        i = e;
        let n = docxSelectionBlockUtils.filterSelectedBlockIds(this.blockManager, o, true);
        r = r.reduce((e, o) => {
          if (n.includes(o.id)) {
            e.push({
              id: o.id,
              type: docxBlockSelectionHandler_1.blockTypes.BLOCK
            });
          }
          return e;
        }, []);
      }
      let l = n ? this.getUnerasedBlocksOfRevision(r) : null;
      let s = this.htmlBuilder.parse(r.map(e => e.id), r, docxSelectionBlockUtils.createActiveEditorRangeResolver(this.blockManager, this.selectionAPI, r, i), docxSelectionBlockUtils.createBlockSelectionFilter(this.blockManager, this.selectionAPI, a), {
        processDelta: e => n ? _(e) : e,
        ignoreBlockItem: e => !!l && !l.blockIds.includes(e)
      });
      return `<meta charset="utf-8">${s.outerHTML}`;
    }
    async onPaste(e, o, r) {
      var n;
      if ((n = this.hookService) === null || n === undefined) {
        return undefined;
      } else {
        return n.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, editorPasteConstants.pasteConfig.onPaste, {
          selectedBlockList: e,
          doc: o,
          proxyClipboardData: r,
          formatInstance: this
        });
      }
    }
    constructor(...e) {
      super(...e);
      Q(this, "format", docxBlockTypeConstants.fileTypes.HTML);
      Q(this, "blockBuilder", new docBlockDomParser.DocBlockParser());
      Q(this, "htmlBuilder", new J(this.blockManager, this.headingModule));
      Q(this, "key", "pasting");
    }
  }
  var filePasteConfig = require("file-paste-config") /*id: 883446*/;
  class ee extends N {
    shouldCopy(e) {
      return false;
    }
    shouldPaste(e, o, r) {
      var n;
      return !!((n = this.hookService) === null || n === undefined ? undefined : n.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, filePasteConfig.getPasteConfig.shouldPaste, {
        selectedBlockList: e,
        fileList: o,
        event: r
      }));
    }
    onCopyBlock(e) {}
    onCopy(e, o) {}
    async onPaste(e, o, r) {
      var n;
      if ((n = this.hookService) === null || n === undefined) {
        return undefined;
      } else {
        return n.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, filePasteConfig.getPasteConfig.onPaste, {
          selectedBlockList: e,
          value: o,
          proxyClipboardData: r,
          formatInstance: this
        });
      }
    }
    constructor(...e) {
      var o;
      var r;
      var n;
      super(...e);
      o = "format";
      r = docxBlockTypeConstants.fileTypes.FILES;
      if ((o = typeof (n = function (e, o) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, o || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(e);
      }(o, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, o, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[o] = r;
      }
    }
  }
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxTextFormatConstants = require("docx-text-format-constants") /*id: 150926*/;
  var docxUrlPreviewUtils_1 = require("docx-url-preview-utils_1") /*id: 293956*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  function ea(e, o, r = false) {
    return e.every(e => {
      let {
        type: n,
        id: i,
        selection: a
      } = e;
      if (n === docxBlockSelectionHandler_1.blockTypes.BLOCK) {
        return true;
      }
      {
        if (!a) {
          return false;
        }
        let {
          start: e,
          end: n
        } = a;
        if (e !== 0 || n === 0 && !r) {
          return false;
        }
        let l = o.getBlockModelByBlockIdNotCheck(i);
        return !!l && !!docBlockEditActions.isTextBlock(l) && n === l.zoneState.getModelText().length - 1;
      }
    });
  }
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var docQuoteContainerOps = require("doc-quote-container-ops") /*id: 780546*/;
  var editorContentFoldOperations = require("editor-content-fold-operations") /*id: 35914*/;
  class ed extends N {
    shouldCopy(e) {
      if (e.length === 1 && e[0].type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
        let o = this.blockManager.getBlockViewByBlockId(e[0].id);
        let r = e[0].selection && e[0].selection.start === e[0].selection.end;
        return editorTextBlockUtilities.isEditorInstance(o) && !r;
      }
      return false;
    }
    shouldPaste(e, o) {
      return true;
    }
    onCopyBlock(e) {
      let r = this.blockManager.getBlockViewByBlockId(e.id);
      if (!e.selection) {
        return;
      }
      let n = editorRangeUtilities.convertRangeWithZone(r, [e.selection.start, e.selection.end]);
      let i = {};
      let a = [docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE];
      if (syncUrlBlockUtils.isSyncingActive()) {
        a.push(docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE);
      }
      let l = a.includes(r.type);
      let s = docBlockTypeConstants.blockTypeConstants.TEXT;
      let c = false;
      let d = false;
      if (r.type === docBlockTypeConstants.blockTypeConstants.CODE) {
        d = true;
      }
      if (!l && editorSelectionUtilities.isSelectionFullText([e], this.blockManager)) {
        s = r.type;
        let e = this.blockManager.getRecordByBlockId(r.id);
        if (docQuoteContainerOps.isInsideQuote(r.id, this.blockManager)) {
          c = true;
        }
        if (e && docBlockTypeConstants.headingTypeArray.includes(s)) {
          i.seq = e.snapshot.seq;
        }
        if (e && s === docBlockTypeConstants.blockTypeConstants.TODO) {
          i.done = e.snapshot.done;
        }
      }
      let u = r.model.zoneState.slice(n.start, n.end);
      let h = {};
      let g = editorTextBlockUtilities.processDocMentionsInText(u.toAttributeText(), r.blockManager);
      g = docxUrlPreviewUtils_1.parseUrlPreview(g, r, h);
      if (editorContentFoldOperations.hasFoldedContent(g)) {
        g = editorContentFoldOperations.extractUnfoldedText(g);
      }
      g = editorTextBlockUtilities.stripAiExtraAttributes(g);
      let m = editorTextBlockUtilities.getInlineDisplayMarks(g);
      let f = {};
      m.forEach(e => Object.assign(f, docxClipboardUtils.cloneRecordWithChildren(this.blockManager, e)));
      let k = {
        channel: objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.channel") ?? "",
        isEqualBlockSelection: syncedBlockFeatureFlags.isMultiSelectPasteSyncEnabled() ? ea([e], this.blockManager) : undefined,
        pasteRandomId: uuidGeneratorUtil.generateUuid(),
        ...docxClipboardUtils.extractMentionTitlesAndUrls(g)
      };
      let y = this.selectionAPI.getSelection().map(e => {
        let o = this.blockManager.getRecordByBlockId(e.id);
        return {
          ...e,
          recordId: o.id
        };
      });
      return {
        rootId: this.blockManager.editorAPI.config.get("token"),
        text: g,
        type: s,
        referenceRecordMap: f,
        extra: k,
        isKeepQuoteContainer: c,
        isFromCode: d,
        selection: y,
        payloadMap: h,
        ...i
      };
    }
    onCopy(e, o) {
      return {
        ...Object.values(e)[0],
        isCut: o
      };
    }
    onDelete(e) {
      var o;
      if ((o = this.hookService) === null || o === undefined) {
        return undefined;
      } else {
        return o.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_CUT, docxTextFormatConstants.docxFormatEvents.onDelete, {
          selectedBlockList: e,
          blockManager: this.blockManager
        });
      }
    }
    async onPaste(e, o, r) {
      var n;
      if ((n = this.hookService) === null || n === undefined) {
        return undefined;
      } else {
        return n.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, docxTextFormatConstants.docxFormatEvents.onPaste, {
          selectedBlockList: e,
          value: o,
          proxyClipboardData: r,
          formatInstance: this
        });
      }
    }
    constructor(...e) {
      var o;
      var r;
      var n;
      super(...e);
      o = "format";
      r = docxBlockTypeConstants.fileTypes.DOCX_TEXT;
      if ((o = typeof (n = function (e, o) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, o || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(e);
      }(o, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, o, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[o] = r;
      }
    }
  }
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docxFlowbaseRecordTypes = require("docx-flowbase-record-types") /*id: 327504*/;
  var docTranslateBlockUtils = require("doc-translate-block-utils") /*id: 436987*/;
  var translatePropsCleanup = require("translate-props-cleanup") /*id: 839906*/;
  var orderedListSequenceHandler = require("ordered-list-sequence-handler") /*id: 130693*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxTableCellClipboardUtils = require("docx-table-cell-clipboard-utils") /*id: 597988*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var docBlockTypeLabels = require("doc-block-type-labels") /*id: 159823*/;
  var docxCodeBlockUtils = require("docx-code-block-utils") /*id: 352632*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var toastNotificationService = require("toast-notification-service") /*id: 420505*/;
  function eB(e, o, r) {
    var n;
    if ((o = typeof (n = function (e, o) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, o || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(e);
    }(o, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, o, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[o] = r;
    }
    return e;
  }
  let eC = [5000, 3];
  let eN = "COPY_NO_TOKEN_BLOCK_TIPS";
  let eM = "COPY_NO_TOKEN_BLOCK_TIPS";
  class ew extends N {
    eraseRevisionInCopyContext(e) {
      let o = I({
        recordMap: e.recordMap,
        type: "accept"
      });
      let r = e.recordIds.filter(e => getOwnKeys.getOwnKeys(o).includes(e));
      let n = r.flatMap(e => this.blockManager.getBlockIdsByRecordId(e));
      let i = e.blockIds.filter(e => n.includes(e));
      safePropertyAssignUtil.safePropertyAssign(e, {
        recordMap: o,
        recordIds: r,
        blockIds: i
      });
    }
    shouldPaste(e) {
      return true;
    }
    shouldCopy(e) {
      if (e.length === 0) {
        return false;
      }
      if (this.selectionAPI.isSingleTextSelection(e)) {
        let o = e[0];
        let r = this.blockManager.getBlockViewByBlockId(o.id);
        return !!editorTextBlockUtilities.isTextEditable(r) && !!this.selectionAPI.isCursor(e);
      }
      return !!this.selectionAPI.isBlockSelection(e) || !!this.selectionAPI.isTextSelectionAcrossBlocks(e);
    }
    onCopyBlock(e) {
      if (e.id === this.blockManager.rootBlockId) {
        let {
          snapshot: e
        } = this.blockManager.getRecord(this.blockManager.rootRecordId);
        return {
          [this.blockManager.rootRecordId]: {
            id: this.blockManager.rootRecordId,
            snapshot: {
              ...e,
              children: []
            }
          }
        };
      }
      return docxClipboardUtils.cloneRecord(this.blockManager, e.id);
    }
    async onDelete(e) {
      var o;
      if ((o = this.hookService) === null || o === undefined) {
        return undefined;
      } else {
        return o.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_CUT, docxFlowbaseRecordTypes.docxRecordFormats.onDelete, {
          selectedBlockList: e,
          formatInstance: this
        });
      }
    }
    onPaste(e, o, r, n) {
      var i;
      if ((i = this.hookService) === null || i === undefined) {
        return undefined;
      } else {
        return i.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, docxFlowbaseRecordTypes.docxRecordFormats.onPaste, {
          selectedBlockList: e,
          value: o,
          proxyClipboardData: r,
          parseValue: n,
          formatInstance: this
        });
      }
    }
    onCopy(e, o, r) {
      var n;
      var i;
      var l;
      var s;
      var c;
      let d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "copy";
      let u = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
      if ((n = this.blockManager.events) !== null && n !== undefined) {
        n.emit("tech.copy", {
          rootId: this.blockManager.rootRecordId,
          stage: "start",
          extra: {
            eraseRevision: u
          }
        });
      }
      let g = r.map(e => {
        let o = this.blockManager.getRecordByBlockId(e.id);
        return {
          ...e,
          recordId: o.id
        };
      });
      let m = new docxGridBlockSelectionManager.GridBlockSelectionManager(this.blockManager, r, e);
      let f = this.blockManager.editorAPI.config.get("token");
      let k = {
        blockIds: m.getBlockIds(),
        recordIds: m.getRecordIds(),
        recordMap: m.getRecordMap(),
        payloadMap: {},
        hasNoTokenBlock: false,
        lastNoTokenBlockType: "",
        hasTranslateIgnoredBlock: false,
        translateIgnoredBlockTypes: new Set(),
        parentId: null,
        rootId: f,
        extra: null,
        from: d
      };
      if (u) {
        this.eraseRevisionInCopyContext(k);
      }
      if (o) {
        docTranslateBlockUtils.updateTranslateIds(this.blockManager, k);
      }
      let y = [];
      docxClipboardUtils.traverseAndFilterRecords(k.recordIds, k.recordMap, e => {
        this.handleBlockNode(e, k);
        y.push(...this.blockManager.getBlockModelsByRecordId(e));
      });
      orderedListSequenceHandler.updateOrderedListSequence(this.blockManager, k.recordIds, k.recordMap);
      docxCodeBlockUtils.filterCodeBlocks(k.recordIds, k.recordMap);
      this.updateAncestorsContext(k);
      let v = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.channel") ?? "";
      k.extra = {
        channel: v,
        pasteRandomId: uuidGeneratorUtil.generateUuid(),
        ...docxClipboardUtils.extractMentionInfoFromRecords(k.recordMap)
      };
      docxTableCellClipboardUtils.processTableCellSelection(k.recordIds, k.recordMap, this.blockManager);
      let E = this.getIsKeepQuoteContainer(k, this.blockManager);
      this.showCopyTips(k);
      if (syncedBlockFeatureFlags.isMultiSelectPasteSyncEnabled()) {
        try {
          k.extra.isEqualBlockSelection = ea(r, this.blockManager, true) && (l = k.recordIds, s = k.recordMap, c = this.blockManager, l.every(e => function e(o, r, n) {
            let i = true;
            let a = n.getBlockModelsByRecordId(o)[0];
            if (!a) {
              return false;
            }
            if ([docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN].includes(a.type)) {
              if (!a.children || a.children.length === 0) {
                return true;
              }
              i = a.children.every(o => !!r[o.recordId] && e(o.recordId, r, n));
            }
            return i;
          }(e, s, c)));
        } catch (e) {}
      }
      if ((i = this.blockManager.events) !== null && i !== undefined) {
        i.emit("tech.copy", {
          rootId: this.blockManager.rootRecordId,
          stage: "finished",
          extra: {
            eraseRevision: u
          }
        });
      }
      return {
        isCut: o,
        rootId: f,
        parentId: k.parentId,
        blockIds: k.blockIds,
        recordIds: k.recordIds,
        recordMap: k.recordMap,
        payloadMap: k.payloadMap,
        extra: k.extra,
        isKeepQuoteContainer: E,
        selection: g,
        pasteFlag: pasteStateManager.getPasteFlag()
      };
    }
    showCopyTips(e) {
      if (e.hasNoTokenBlock) {
        let o = e.lastNoTokenBlockType === docBlockTypeConstants.blockTypeConstants.TASK ? t("LarkCCM_Tasks_TaskBeingCreatedTryAgainLater_Toast") : t("CreationDoc_Docs_Copy_FailedLoadingContent");
        toastNotificationService.showToast(o, {
          key: eN,
          durations: eC
        });
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: "no_token_toast",
          info: JSON.stringify({
            block_type: e.lastNoTokenBlockType
          })
        });
      } else {
        toastNotificationService.hideToast(eN);
      }
      if (e.hasTranslateIgnoredBlock && e.translateIgnoredBlockTypes.size > 0) {
        let o = Array.from(e.translateIgnoredBlockTypes).map(e => docBlockTypeLabels.blockTypeLabels[e]).filter(e => e !== undefined).join("、");
        toastNotificationService.showToast(t("LarkCCM_Docs_Translate_BlockCantCopy_Toast", {
          types: o
        }), {
          key: eM,
          durations: eC
        });
      } else {
        toastNotificationService.hideToast(eM);
      }
    }
    getIsKeepQuoteContainer(e, o) {
      if (!e.blockIds.length) {
        return false;
      }
      let r = e.blockIds.map(e => o.getBlockModelByBlockId(e));
      return !!r.every(e => docQuoteContainerOps.isInsideQuote(e.id, o)) && !!r.find(e => editorTextBlockUtilities.isTextBlock(e) && e.type !== docBlockTypeConstants.blockTypeConstants.CODE);
    }
    cropSnapshots(e, o) {
      let r = o[e];
      docxBlockTypeConstants.extraTypes.forEach(e => {
        delete r.snapshot[e];
      });
      let n = docxBlockTypeConstants.blockConfig[r == null ? undefined : r.snapshot.type];
      if (n != null) {
        n.forEach(e => {
          delete r.snapshot[e];
        });
      }
    }
    handleBlockNode(e, o) {
      try {
        var a;
        var l;
        let {
          recordMap: s,
          payloadMap: c
        } = o;
        let d = this.blockManager.getBlockModelsByRecordId(e)[0];
        let u = this.blockManager.getBlockViewByBlockIdNotCheck(d.id) ?? this.blockManager.getBlockViewsByRecordId(e)?.[0];
        if (u && docxBlockUtils_1.isTextBlock(u) && d.editorAPI.config.get("translated")) {
          let o = s[e]?.snapshot;
          orderedListSequenceHandler.resetCopySequence(o);
          translatePropsCleanup.cleanTranslateProps(o);
        }
        if (d.type === docBlockTypeConstants.blockTypeConstants.POLL) {
          let o = function (e, o, r, n) {
            if (!(n = n || e.getCacheData(o))) {
              return r;
            }
            let {
              isPublish: i
            } = n;
            let a = i ? n.pollData : undefined;
            if (!a) {
              return r;
            }
            let l = deepCloneWrapper_1.deepClone(r);
            l.is_anonymous = a.is_anonymous || l.is_anonymous;
            l.poll_type = a.poll_type || l.poll_type;
            if (l.disable_edit_after_published) {
              l.title = a.title && a.title.initialAttributedTexts.text ? a.title : r.title;
              l.option_ids = a.option_ids?.length ? a.option_ids : r.option_ids;
              l.option_map = isEmptyUtil.isEmpty(a.option_map) ? r.option_map : a.option_map;
            }
            return l;
          }(d.pollDataManager, e, deepCloneWrapper_1.deepClone(d.snapshot));
          o.enable_due_time = false;
          o.is_due_manually = false;
          delete o.due_time;
          delete o.creator_id;
          s[e].snapshot = o;
        }
        this.cropSnapshots(e, s);
        if (u) {
          this.getCopyPayload(c, d, u, s, o);
        }
        a = d;
        l = this.blockManager;
        if (a.type === docBlockTypeConstants.blockTypeConstants.VIEW) {
          a = a.children[0];
        }
        if (!function (e, o) {
          let {
            id: a,
            type: l,
            snapshot: s
          } = e;
          let c = o.getBlockViewByBlockIdNotCheck(a);
          switch (l) {
            case docBlockTypeConstants.blockTypeConstants.FILE:
              return !!s.file?.token;
            case docBlockTypeConstants.blockTypeConstants.IMAGE:
              return !!s.image?.token;
            case docBlockTypeConstants.blockTypeConstants.PENDING:
              return false;
            case docBlockTypeConstants.blockTypeConstants.TASK:
              return !e.taskModel?.isLocalCreating;
            case docBlockTypeConstants.blockTypeConstants.JIRA_FILTER:
              if (c == null) {
                return undefined;
              } else {
                return c.isRenderEnd();
              }
            default:
              if (!docBlockTypeConstants.bitableSheetTypes.includes(l)) {
                return true;
              }
              if (!c || !c.isBlockRendered) {
                return false;
              }
              return !!s.token;
          }
        }(a, l)) {
          o.hasNoTokenBlock = true;
          o.lastNoTokenBlockType = d.type;
          this.removeUnCopyableBlockContext(d, o);
        }
        if (docTranslateBlockUtils.isWhiteboardTrans(this.blockManager, d.type)) {
          o.hasTranslateIgnoredBlock = true;
          o.translateIgnoredBlockTypes.add(d.type);
          this.removeUnCopyableBlockContext(d, o);
        }
      } catch (n) {
        let {
          events: o,
          rootRecordId: r
        } = this.blockManager;
        if (o) {
          o.emit("tech.copy-error", {
            error: n,
            rootId: r,
            scene: "handle_block_node",
            extra: {
              recordId: e
            }
          });
          return;
        }
        docxUtilityHelpers.captureException(`copy block with error! block id: ${e}; ${n}`);
      }
    }
    removeUnCopyableBlockContext(e, o) {
      delete o.recordMap[e.recordId];
      let r = o.blockIds.indexOf(e.id);
      if (r > -1) {
        o.blockIds.splice(r, 1);
      }
      let n = o.recordIds.indexOf(e.recordId);
      if (n > -1) {
        o.recordIds.splice(n, 1);
      }
    }
    updateAncestorsContext(e) {
      let o = this.blockManager.getBlockModelByBlockIdNotCheck(e.blockIds[0]);
      if (!(o == null ? undefined : o.parent)) {
        return;
      }
      let {
        record: r
      } = o.parent;
      let n = deepCloneWrapper_1.deepClone({
        id: r.id,
        snapshot: r.snapshot
      });
      let i = n.id;
      e.parentId = n.id;
      Object.assign(e.recordMap, {
        [i]: n
      });
    }
    constructor(...e) {
      super(...e);
      eB(this, "format", docxBlockTypeConstants.fileTypes.DOCX_RECORD);
      eB(this, "getCopyPayload", (e, o, r, n, i) => {
        let {
          recordId: a
        } = o;
        let l = blockSettingResolver.getBlockSetting(o.type, this.blockManager, "onCopy");
        if (!l) {
          return;
        }
        let s = l({
          block: o,
          blockView: r,
          payloadMap: e,
          recordMap: n,
          context: i
        });
        if (typeof s != "object" || (s == null ? undefined : s.handleOnCopyBySelf) !== true) {
          e[a] = s;
        }
      });
    }
  }
  var docClipboardRecordConfig = require("doc-clipboard-record-config") /*id: 282146*/;
  var docxClipboardHandler = require("docx-clipboard-handler") /*id: 709733*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxHistoryUtilities = require("docx-history-utilities") /*id: 525555*/;
  var translationSelectionUtils = require("translation-selection-utils") /*id: 632706*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var isWhiteboardFullscreen = require("is-whiteboard-fullscreen") /*id: 465910*/;
  var domNodeTypesConstants = require("dom-node-types-constants") /*id: 196330*/;
  var arrayFlattenUtil_3 = require("array-flatten-util_3") /*id: 737816*/;
  let eH = (e, o) => {
    let r = o.getBlockModelByBlockId(e.id);
    return arrayFlattenUtil_3.flattenArray(r.children.map(e => e.children.map(e => o.getBlockViewByBlockId(e.id))));
  };
  let ej = (e, o, r) => {
    let {
      snapshot: {
        folded: n,
        type: i
      }
    } = e.record;
    if (n && i.includes("heading")) {
      return r.findFoldedBlocks(e.id).reduce((e, r) => {
        if (!o.hasBlockViewByBlockId(r)) {
          return e;
        }
        let n = o.getBlockViewByBlockId(r);
        if (docBlockTypeConstants.blockTypeConstants.GRID === n.type) {
          e.push(...eH(n, o));
        } else {
          e.push(n);
        }
        return e;
      }, [e]);
    } else {
      return [e];
    }
  };
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var embedObjectProviderName = require("embed-object-provider-name") /*id: 129397*/;
  var editableExtensionEventUtils = require("editable-extension-event-utils") /*id: 259936*/;
  var docPreEditChangeIntercept = require("doc-pre-edit-change-intercept") /*id: 98436*/;
  var preAllowEditControllerName = require("pre-allow-edit-controller-name") /*id: 957001*/;
  var taskListSidebarCheck = require("task-list-sidebar-check") /*id: 181884*/;
  var syncedBlockSelectionChecker = require("synced-block-selection-checker") /*id: 834094*/;
  var syncedReferenceBlockConstants = require("synced-reference-block-constants") /*id: 19241*/;
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var toastNotificationHandler = require("toast-notification-handler") /*id: 669090*/;
  var securityAuditOperationTracker = require("security-audit-operation-tracker") /*id: 938820*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var fileActionManagerUtils = require("file-action-manager-utils") /*id: 180452*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var docPreviewContainerIds = require("doc-preview-container-ids") /*id: 449485*/;
  function e7(e, o, r) {
    var n;
    if ((o = typeof (n = function (e, o) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, o || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(e);
    }(o, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, o, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[o] = r;
    }
    return e;
  }
  let e8 = [".edit-link-panel"];
  class te {
    compatibleFileBlock(e) {
      return e.map(e => {
        let o = this.options.blockManager.getBlockModelByBlockId(e.id).parent;
        if ((o == null ? undefined : o.type) === docBlockTypeConstants.blockTypeConstants.VIEW) {
          return {
            id: o.id,
            type: editorTypeConstants.blockTypes.BLOCK
          };
        } else {
          return e;
        }
      });
    }
    get blockManager() {
      return this.options.blockManager;
    }
    shouldHandleEvent(e) {
      return !!this.blockManager.config.get("container").contains(e == null ? undefined : e.target) || !!this.isInHistory || !!this.isInPreview || !!this.isInPresentationMode || !docxHistoryUtilities.getHistoryShowFlag() && !document.querySelector(`.${docPreviewContainerIds.docxWrapperClass}`) && !presentationModeDetectionUtils.isPresentationMode();
    }
    get rootBlockId() {
      return this.blockManager.getRootBlockId();
    }
    get copyable() {
      return this.options.copyable && this.getAuthorityCopyable();
    }
    initIframe() {
      if (this.iframe || this.isInHistory || this.isInPreview || this.isInPresentationMode) {
        return;
      }
      let o = document.createElement("iframe");
      o.setAttribute("sandbox", "allow-same-origin");
      o.className = "docx-paste-iframe";
      o.style.position = "fixed";
      o.style.display = "none";
      o.style.top = "99999px";
      o.style.left = "99999px";
      document.body.appendChild(o);
      let r = o.contentDocument || o.contentWindow?.document;
      if (!r) {
        return;
      }
      let n = document.createElement("meta");
      n.setAttribute("http-equiv", "Content-Security-Policy");
      n.setAttribute("content", "default-src 'none'; script-src 'none'; child-src 'none'; style-src 'self' 'unsafe-inline';");
      r.getElementsByTagName("head")[0].appendChild(n);
      r.body.style.font = "initial";
      this.iframe = o;
    }
    destroyIframe() {
      if (this.iframe) {
        var e;
        if ((e = this.iframe.parentNode) !== null && e !== undefined) {
          e.removeChild(this.iframe);
        }
      }
      this.iframe = null;
    }
    resetIframe() {
      if (!this.iframe) {
        return;
      }
      let o = this.iframe.contentDocument || this.iframe.contentWindow?.document;
      let r = o == null ? undefined : o.body;
      if (r) {
        r.innerHTML = "";
      }
    }
    getHTMLDocument(e) {
      if (docxFeatureFlags.isAlwaysTrue()) {
        this.initIframe();
      }
      if (this.iframe) {
        let r = this.iframe.contentDocument || this.iframe.contentWindow?.document;
        let n = r == null ? undefined : r.body;
        if (r && n) {
          n.innerHTML = `<div id="block-root">${e}</div>`;
          return r;
        }
      }
      return new DOMParser().parseFromString(`<div id="block-root">${e}</div>`, "text/html");
    }
    unmount() {
      pasteStateManager.pasteStateMap.clear();
      docxEditorEventConstantsAndManager.nativeEventDispatcher.off("copy", document, this.handleCopy);
      docxEditorEventConstantsAndManager.nativeEventDispatcher.off("cut", document, this.handleCut);
      docxEditorEventConstantsAndManager.nativeEventDispatcher.off("paste", document, this.handlePaste);
      this.destroyIframe();
    }
    toastAndRetryRegisterClipboardEditableHooks(e) {
      e.preventDefault();
      e.stopPropagation();
      docxAnalyticsEventTracker.trackDocxAnalyticsEvent("clipboard_editable_toast_and_retry");
      docxClipboardCopySettings.registerClipboardCopySettings(this.blockManager);
      registerClipboardPasteHooks.registerClipboardPasteHooks(this.blockManager);
      this.toastLoading();
    }
    toastAndRetryRegisterCopySetting(e) {
      e.preventDefault();
      e.stopPropagation();
      docxAnalyticsEventTracker.trackDocxAnalyticsEvent("clipboard_copy_toast_and_retry");
      docxClipboardCopySettings.registerClipboardCopySettings(this.blockManager);
      this.toastLoading();
    }
    toastLoading() {
      let e = browserEnvironmentDetectionUtils.browserDetector.isH5 || browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp ? 3 : 3000;
      toastNotificationHandler.showToast({
        key: "paste_loading",
        pcToastType: "loading",
        mobileToastType: "fail",
        duration: e,
        message: t("LarkCCM_Docs_PasteLoading_Toast")
      });
    }
    getTextIns(e) {
      let {
        children: o
      } = this.blockManager.getBlockModelByBlockId(e.id);
      if (o && o[0]) {
        e = this.blockManager.getBlockViewByBlockId(o[0].id);
        return this.getTextIns(e);
      } else {
        return e;
      }
    }
    replaceMediaSrc(e) {
      return e.replace(/<(?:img|iframe)[^>]*(data-no-request-)src=[^>]*>/g, (e, o) => e.replace(o, ""));
    }
    getCopyActionManager(e) {
      return {
        checkOptions: {
          action: {
            business: false
          }
        },
        actionManager: fileActionManagerUtils.getDefaultActionMgr(this.blockManager)
      };
    }
    shouldHandleCopy(e) {
      var o;
      let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      let i = docxEditorEventConstantsAndManager.globalEditorState.isTriggerredByClick ? docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks : this.options.selectionAPI.getSelection();
      if (!(i.length > 0) || !this.blockManager.hasBlockModelByBlockId(i[0].id)) {
        return false;
      }
      let a = e.target;
      let l = function (e, o) {
        var r;
        var n;
        let i = e == null ? undefined : (n = e.closest) === null || n === undefined ? undefined : (r = n.call(e, syncedReferenceBlockConstants.docxSyncedBlockSelector)) === null || r === undefined ? undefined : r.getAttribute("data-block-id");
        if (i) {
          return o.editorAPI.getService(syncedRefBlockToken.syncedRefBlockToken).getEditorAPIByBlockId(Number(i));
        } else {
          return null;
        }
      }(a, this.blockManager);
      let s = syncedBlockSelectionChecker.checkSyncedBlockSelection(this.blockManager) && (l == null ? undefined : (o = l.config) === null || o === undefined ? undefined : o.get("copyable")) === false;
      let c = this.shouldHandleEvent(e);
      if (!this.isCopyAll && (!c || this.checkIsSelfCopyPermission(e))) {
        this.collectDevCopyEvent(c ? "is self copy permission" : "should not handle event");
        return false;
      }
      let d = a.nodeType === domNodeTypesConstants.nodeTypes.ELEMENT ? a : a.parentElement;
      if (!e.target || !docClipboardRecordConfig.restrictSelectors.some(e => d && d.closest(e))) {
        let {
          actionManager: o,
          checkOptions: r
        } = this.getCopyActionManager(d);
        if (o && !o.checkAction(docActionManager.actionConstants.DOCCONTENTCOPY, r)) {
          e.preventDefault();
          e.stopPropagation();
          this.collectDevCopyEvent("dlp check failed");
          this.collectCopyEvent({
            CCM_op_status: "failure"
          });
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
            this.options.selectionAPI.removeAllSelection();
          }
          return false;
        }
      }
      if (r && !this.options.editable && this.options.selectionAPI.isFocus()) {
        this.collectDevCopyEvent("no permission to cut");
        this.collectCopyEvent({
          CCM_op_status: "failure"
        });
        e.preventDefault();
        return false;
      }
      if ((this.copyable === false || s) && (this.options.selectionAPI.isFocus() || e8.some(o => {
        var r;
        var n;
        if ((n = e.target) === null || n === undefined) {
          return undefined;
        } else if ((r = n.closest) === null || r === undefined) {
          return undefined;
        } else {
          return r.call(n, o);
        }
      }))) {
        this.collectCopyEvent({
          CCM_op_status: "failure"
        });
        if (browserEnvironmentDetectionUtils.browserDetector.isH5 && browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
          let e = document.getSelection();
          if (e != null) {
            e.removeAllRanges();
          }
        }
        docxClipboardUtils.copyTextToClipboard(s || syncUrlBlockUtils.isSyncingActive() ? syncedReferenceBlockUtils.getBlockTokenWithFallback(this.blockManager.editorAPI, true) : undefined);
        e.stopPropagation();
        e.preventDefault();
        return false;
      }
      return !this.checkIsIgnoreTarget(e) || (this.collectDevCopyEvent("ignore target dom"), false);
    }
    shouldHandleCopyWithSelection(e, o, r) {
      if (o.length !== 0 && this.options.selectionAPI.isFocus()) {
        if (r && !this.shouldHandleCut(e, o)) {
          this.collectDevCopyEvent("cant handle cut by selection");
          return false;
        } else {
          return !docxClipboardUtils.hasPendingBlocksInSelection(o.filter(e => {
            let {
              id: o
            } = e;
            return o !== this.rootBlockId;
          }), this.blockManager) || (docxErrorToastHandler.showErrorToast({
            type: "error",
            content: t("CreationDoc_UnableToCopy_Rendering_toast")
          }), this.collectDevCopyEvent("has pending block"), false);
        }
      } else {
        this.collectDevCopyEvent(o.length ? "nothing selected" : "not focus");
        return false;
      }
    }
    shouldHandleCut(e, o) {
      let r;
      let n = o.map(e => this.blockManager.getBlockViewByBlockId(e.id));
      if (n.find(e => e && [docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT].includes(e.type))) {
        return false;
      }
      let i = this.blockManager.editorAPI.getService(preAllowEditControllerName.preAllowEditProvider, {
        optional: true
      });
      return !i || !!n.every(e => {
        let {
          model: l
        } = e;
        r = l.parent?.record;
        return i.canBlockEditAndTryApply(l.parent?.record, l.parent?.type || "", {
          type: "DELETE_CHILD",
          index: l.position
        });
      }) || (e.preventDefault(), docPreEditChangeIntercept.reportUserOperation({
        op_source: "keyboard",
        op_type: "cut",
        edit_type: "DELETE_CHILD",
        interceptedRecord: r
      }, this.blockManager), false);
    }
    shouldHandlePasteWithSelection(e) {
      if (this.options.selectionAPI.isFocus() || docBlockCellUtils.areAllCellsById(this.blockManager, e.map(e => e.id))) {
        if (e.length !== 0 && this.options.selectionAPI.isFocus()) {
          return !translationSelectionUtils.hasTranslatedSelection(this.blockManager, e) || (this.collectDevPasteEvent("cant paste when only select translate block"), false);
        } else {
          this.collectDevPasteEvent(e.length ? "nothing selected" : "not focus");
          return false;
        }
      } else {
        this.collectDevPasteEvent("not focus and no cell selected");
        return false;
      }
    }
    calculateCopyInfo() {
      let e;
      if (this.selectedBlockSelection) {
        e = this.selectedBlockSelection;
        this.selectedBlockSelection = null;
      }
      let {
        isTriggerredByClick: o,
        isTriggerredByMobileSwipe: r
      } = docxEditorEventConstantsAndManager.globalEditorState;
      let n = (() => {
        if (o || r) {
          let e = [];
          if (o) {
            docxEditorEventConstantsAndManager.globalEditorState.isTriggerredByClick = false;
            e = docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks;
          }
          if (r) {
            docxEditorEventConstantsAndManager.globalEditorState.isTriggerredByMobileSwipe = false;
            e = this.options.selectionAPI.getSelection();
          }
          let n = this.blockManager.getBlockViewByBlockIdNotCheck(e[0].id);
          if (n) {
            if (e.length === 1) {
              return ej(n, this.blockManager, this.options.fold).map(e => ({
                id: e.id,
                type: editorTypeConstants.blockTypes.BLOCK
              }));
            } else {
              return e;
            }
          } else {
            return [];
          }
        }
        if (e) {
          return [e];
        } else {
          return this.getSelectedBlocksWithoutCursor();
        }
      })();
      let i = (n = docxSelectionBlockUtils.trimEmptyLastTextBlock(n)).map(e => e.id);
      let a = new Set(i);
      let l = [];
      i.forEach(e => {
        if (e === this.rootBlockId) {
          return;
        }
        let o = this.options.blockManager.getBlockModelByBlockId(e);
        let r = 0;
        o.struct.findAllDescendants(e => {
          if (!a.has(e.id)) {
            a.add(e.id);
            l[r++] = e.id;
          }
          return false;
        });
        i.push(...l);
        l.length = 0;
      });
      this.blockManager.layoutManager.renderNodeByIdSync(i);
      return {
        isTriggerredByClick: o,
        isTriggerredByMobileSwipe: r,
        selectedBlockList: this.compatibleFileBlock(n)
      };
    }
    tryNormalizeHTML(e) {
      try {
        return docxClipboardUtils.normalizeHtmlWhitespace(e);
      } catch (e) {
        if (e instanceof RangeError) {
          docxErrorToastHandler.showErrorToast({
            type: "error",
            content: t("LarkCCM_Clipboard_Error_DataTooLarge_Toast")
          });
        }
      }
      return null;
    }
    constructor(e) {
      var o = this;
      this.options = e;
      e7(this, "isInHistory", undefined);
      e7(this, "isInPreview", undefined);
      e7(this, "isInPresentationMode", undefined);
      e7(this, "formats", [new ee(this.options), new ew(this.options), new ed(this.options), new K(this.options), new $(this.options), new L(this.options)]);
      e7(this, "selectedBlockSelection", undefined);
      e7(this, "isCopyAll", false);
      e7(this, "eraseRevisionWhenCopyAll", false);
      e7(this, "iframe", null);
      e7(this, "getSelectedBlocks", () => this.options.selectionAPI.getSelection());
      e7(this, "getSelectedBlocksWithoutCursor", () => this.options.selectionAPI.getSelectionWithoutCursor());
      e7(this, "update", e => {
        let {
          copyable: o,
          editable: r
        } = e;
        this.options.copyable = o;
        this.options.editable = r;
      });
      e7(this, "getAuthorityCopyable", () => platformDocUtils.bU1(reduxStoreInitializer.reduxStore.getState())[docActionManager.actionConstants.DOCCONTENTCOPY]);
      e7(this, "collectDevEvent", (e, o, r) => {
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: `docx_clipboard_${e}`,
          info: JSON.stringify({
            copyable: this.options.copyable,
            editable: this.options.editable,
            msg: o,
            extra: r
          })
        });
      });
      e7(this, "collectDevCopyEvent", (e, o) => this.collectDevEvent("copy", e, o));
      e7(this, "collectDevPasteEvent", (e, o) => this.collectDevEvent("paste", e, o));
      e7(this, "collectCopyEvent", function (e = {
        CCM_op_status: "success"
      }) {
        let r = o.getSelectedBlocks().map(e => {
          let {
            id: r
          } = e;
          let n = o.blockManager.getBlockModelByBlockIdNotCheck(r);
          if (n == null) {
            return undefined;
          } else {
            return n.type;
          }
        });
        securityAuditOperationTracker.trackSecurityAuditOperation(securityAuditOperationTracker.OperationTypeEnum.COPY, {
          ccm_copy_type: JSON.stringify([...new Set(r)]),
          ...e
        });
      });
      e7(this, "collectDevPasteInfo", e => {
        let o = pasteStateManager.getPasteState();
        this.collectDevPasteEvent("will call onPaste", {
          applyFrom: o.from,
          times: o.pasteTimes,
          pasteFlag: o.pasteFlag,
          pasteInSamePage: e,
          editorId: this.blockManager.editorAPI.id,
          isDestroyed: this.blockManager.editorAPI.isDestroyed(),
          selectedBlocks: this.getSelectedBlocks().map(e => {
            let {
              id: o
            } = e;
            let r = this.blockManager.getBlockModelByBlockIdNotCheck(o);
            return docxUtilityHelpers.maskSensitiveData((r == null ? undefined : r.recordId) || "");
          }),
          timestamp: Date.now()
        });
      });
      e7(this, "handleCut", e => {
        this.handleCopy(e, true);
      });
      e7(this, "handleCopy", function (e, r = false) {
        if (!o.shouldHandleCopy(e, r)) {
          return;
        }
        if (!o.isCopyAll) {
          var n;
          if ((n = o.blockManager.events) !== null && n !== undefined) {
            n.emit("behavior.copy", {
              event: e
            });
          }
        }
        o.collectCopyEvent();
        if (isWhiteboardFullscreen.isWhiteboardFull(o.blockManager)) {
          return;
        }
        let {
          selectedBlockList: i,
          isTriggerredByClick: a
        } = o.calculateCopyInfo();
        if (o.shouldHandleCopyWithSelection(e, i, r)) {
          if (r && !registerClipboardPasteHooks.areClipboardPasteHooksRegistered(o.blockManager)) {
            o.toastAndRetryRegisterClipboardEditableHooks(e);
            return;
          }
          if (!docxClipboardCopySettings.isClipboardCopyLoaded(o.blockManager)) {
            o.toastAndRetryRegisterCopySetting(e);
            return;
          }
          try {
            let n = null;
            let l = new docxClipboardHandler.DocxClipboard(e.clipboardData);
            l.resetDataBeforeSetData();
            let s = editorSelectionUtilities.isSingleTextSelection(i);
            if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
              docEditorActionMap.collectBlockEvent({
                actionObject: s ? docBlockConstants.scopeTypes.TEXT : docBlockConstants.scopeTypes.BLOCK,
                source: a ? docEditorActionMap.uiComponentTypes.web_menu_panel : docEditorActionMap.uiComponentTypes.content_page,
                blockManager: o.blockManager,
                actionType: docEditorActionMap.actionConstants[r ? "cut" : "copy"],
                blocks: i,
                click: a ? docEditorActionMap.uiActionTypes.block_action : docEditorActionMap.uiActionTypes.hotkey_action
              });
            }
            let c = null;
            let d = null;
            pasteStateManager.clearPasteState();
            for (let a of o.formats) {
              if (a.shouldCopy(i)) {
                e.preventDefault();
                let s = {};
                for (let e of i) {
                  s[e.id] = a.onCopyBlock(e);
                }
                let u = a.onCopy ? a.onCopy(s, r, i, "copy", o.isCopyAll && o.eraseRevisionWhenCopyAll) : s;
                let p = o.replaceMediaSrc(typeof u == "object" ? JSON.stringify(u) : u);
                if (c && d && a instanceof K) {
                  let e = document.createElement("span");
                  e.setAttribute(docClipboardRecordConfig.recordDataAttr, c);
                  e.setAttribute(docClipboardRecordConfig.recordFormatAttr, d);
                  e.className = docClipboardRecordConfig.clipboardClass;
                  p += e.outerHTML;
                }
                l.setData(a.format, p);
                c = p;
                d = a.format;
                o.blockManager.editorAPI.getService(embedObjectProviderName.embedObjectName).fetchEmbedObjsAllembedPerm();
                if (r && a.onDelete) {
                  n ||= () => {
                    var e;
                    if ((e = a.onDelete) === null || e === undefined) {
                      return undefined;
                    } else {
                      return e.call(a, i);
                    }
                  };
                }
              }
            }
            e.stopPropagation();
            let {
              editorAPI: u
            } = o.blockManager;
            let p = syncedReferenceBlockUtils.getBlockTokenWithFallback(u, true);
            l.encodeClipboardData(p);
            if (n != null) {
              n();
            }
          } catch (e) {
            docxUtilityHelpers.captureException(`\u{590D}\u{5236}\u{5931}\u{8D25}\u{FF0C}\u{539F}\u{56E0}${e}`);
            o.collectDevCopyEvent(`copy error: ${e == null ? undefined : e.message}`);
            return;
          }
          o.isCopyAll = false;
          o.eraseRevisionWhenCopyAll = false;
          docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorConstantsConfig.toggleAttribute, {
            operation_method: docxEditorConstantsConfig.inputTypeConstants.KEYBOARD,
            source: "other",
            action: r ? "cut" : "copy",
            block_id: i[0].id,
            blockManager: o.blockManager
          });
        }
      });
      e7(this, "copyAllDoc", async function () {
        var e;
        let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        let {
          eraseRevision: n = false,
          withRoot: i
        } = r;
        o.isCopyAll = true;
        o.eraseRevisionWhenCopyAll = n;
        await o.blockManager.editorAPI.moduleService.loadAllBlockModules();
        o.options.selectionAPI.selectAll({
          source: docxBlockSelectionHandler_1.commandTypes.CopyAllDoc,
          withRoot: i
        });
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          let e = new ClipboardEvent("copy");
          Object.defineProperty(e, "target", {
            value: document.body,
            enumerable: true
          });
          o.handleCopy(e);
          docComponentStubConfig.toastStub.showToast({
            message: t("common.copied"),
            duration: 3,
            type: docComponentStubConfig.toastStub.DoubaoToastType.Success
          });
        } else {
          o.options.selectionAPI.copySelectedBlocks();
          diContainerInstance.diContainer.get(docUiServiceSymbols.DocToastService).success(t("common.copied"));
        }
        o.options.selectionAPI.removeAllSelection();
        if ((e = window.getSelection()) !== null && e !== undefined) {
          e.removeAllRanges();
        }
      });
      e7(this, "copyBlockText", e => {
        let o = this.blockManager.getBlockModelByBlockId(e);
        if (editorTextBlockUtilities.isTextBlock(o)) {
          let r = o.zoneState.totalWidth() - 1;
          this.options.selectionAPI.setSelection([{
            type: editorTypeConstants.blockTypes.TEXT,
            id: e,
            selection: {
              start: 0,
              end: r
            }
          }]);
          this.selectedBlockSelection = {
            type: editorTypeConstants.blockTypes.TEXT,
            id: e,
            selection: {
              start: 0,
              end: r
            }
          };
          this.options.selectionAPI.copySelectedBlocks();
        }
      });
      e7(this, "handlePaste", async e => {
        if (!e.clipboardData || !this.options.editable || !this.shouldHandleEvent(e) || this.checkIsSelfCopyPermission(e) || this.checkIsIgnoreTarget(e)) {
          this.collectDevPasteEvent("permission check error", [!e.clipboardData, !this.options.editable, !this.shouldHandleEvent(e), this.checkIsSelfCopyPermission(e), this.checkIsIgnoreTarget(e)]);
          return;
        }
        if (editableExtensionEventUtils.isFromEditableExtension(e) && editableExtensionEventUtils.isSelectionAcrossBlocks(this.options.selectionAPI, this.options.blockManager.editorAPI.viewService, this.options.blockManager)) {
          this.options.selectionAPI.emitSelectionChange({
            force: true
          });
        }
        let o = this.getSelectedBlocks();
        if (!this.shouldHandlePasteWithSelection(o)) {
          return;
        }
        if (!registerClipboardPasteHooks.areClipboardPasteHooksRegistered(this.blockManager)) {
          this.toastAndRetryRegisterClipboardEditableHooks(e);
          return;
        }
        if (isWhiteboardFullscreen.isWhiteboardFull(this.blockManager)) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        let r = new docxClipboardHandler.DocxClipboard(e.clipboardData);
        let n = syncedReferenceBlockUtils.getBlockTokenWithFallback(this.blockManager.editorAPI, true);
        r.decodeClipboardData(n);
        let {
          applyFrom: i,
          pasteInSamePage: a,
          parseData: l
        } = docxClipboardUtils.parseClipboardData(r, this.blockManager);
        pasteStateManager.setPasteSource(i);
        this.collectDevPasteInfo(a);
        for (let n of this.formats) {
          let i = n.format === docxBlockTypeConstants.fileTypes.FILES && e.clipboardData.files.length ? e.clipboardData.files : r.getData(n.format);
          if (i && n.shouldPaste(o, i, e)) {
            if (n instanceof K) {
              let e = this.tryNormalizeHTML(i);
              if (!e) {
                return;
              }
              let a = this.getHTMLDocument(e);
              let l = a.querySelector(`.${docClipboardRecordConfig.clipboardClass}`);
              let s = l == null ? undefined : l.getAttribute(docClipboardRecordConfig.recordDataAttr);
              let c = l == null ? undefined : l.getAttribute(docClipboardRecordConfig.recordFormatAttr);
              if (l && s && c) {
                for (let e of this.formats) {
                  if (e.format === c && s) {
                    await e.onPaste(o, s, r);
                    break;
                  }
                }
                break;
              }
              await n.onPaste(o, a, r);
              this.resetIframe();
              break;
            }
            if (n instanceof ew) {
              let e = r.getData(docxBlockTypeConstants.fileTypes.HTML);
              let o = this.extractImgExtrnalURLForCopy(e);
              Object.assign(te.LarkResourceExternalUrlForCopy, o);
            }
            await n.onPaste(o, i, r, l);
            break;
          }
        }
        if (a) {
          pasteStateManager.incrementPasteTimes();
        } else {
          pasteStateManager.resetPasteTimes();
        }
        docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorConstantsConfig.toggleAttribute, {
          operation_method: docxEditorConstantsConfig.inputTypeConstants.KEYBOARD,
          source: "other",
          action: "paste",
          block_id: o[0].id,
          blockManager: this.blockManager
        });
      });
      e7(this, "checkIsSelfCopyPermission", e => {
        let o = e.target;
        return !!o.closest(".isv-block-container") || taskListSidebarCheck.isTaskListSidebarElement(o);
      });
      e7(this, "checkIsIgnoreTarget", e => {
        var o;
        let r = e.target;
        return r.classList.contains("poll-input-textarea") || r.classList.contains("task-block-text-editor") || ((o = r.closest) === null || o === undefined ? undefined : o.call(r, ".meego-multi-text-editor-new"));
      });
      e7(this, "extractImgExtrnalURLForCopy", e => {
        let o = this.tryNormalizeHTML(e);
        if (!o) {
          return;
        }
        let r = {};
        for (let e of this.getHTMLDocument(o).querySelectorAll(`[${tt}]`)) {
          let o = e.getAttribute("src");
          let n = e.getAttribute(tt);
          let i = n == null ? undefined : n.match(/drivetoken:\/\/(.*)/);
          let a = i ? i[1] : "";
          if (a && function (e) {
            if (!e) {
              return false;
            }
            try {
              let o = new URL(e);
              return /http(s)?:/.test(o.protocol);
            } catch (e) {
              return false;
            }
          }(o)) {
            r[a] = o;
          }
        }
        return r;
      });
      this.isInHistory = !!e.isHistory;
      this.isInPreview = !!e.isPreview;
      this.isInPresentationMode = !!e.isPresentationMode;
      let r = {
        useCapture: true,
        priority: +!e.isSyncedReferenceBlock,
        onlyHandleSelfContainer: false
      };
      docxEditorEventConstantsAndManager.nativeEventDispatcher.on("copy", document, this.handleCopy, r);
      docxEditorEventConstantsAndManager.nativeEventDispatcher.on("cut", document, this.handleCut, r);
      docxEditorEventConstantsAndManager.nativeEventDispatcher.on("paste", document, this.handlePaste, r);
      if (!docxFeatureFlags.isAlwaysTrue()) {
        this.initIframe();
      }
    }
  }
  e7(te, "LarkResourceExternalUrlForCopy", {});
  let tt = "data-lark-image-uri";
  require.d(exports, {
    DocxClipboardHandler: function () {
      return te;
    }
  });
}