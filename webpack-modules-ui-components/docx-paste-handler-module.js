// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocPasteHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 443803
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var docxBlockUtils = require("docx-block-utils") /*id: 4213*/;
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  var docClipboardPasteHandler = require("doc-clipboard-paste-handler") /*id: 998221*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var syncedBlockUtils = require("synced-block-utils") /*id: 622058*/;
  var docxRecordSnapshotTransformer = require("docx-record-snapshot-transformer") /*id: 634523*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var docxBlockTypeConstants = require("docx-block-type-constants") /*id: 49433*/;
  var pasteStateManager = require("paste-state-manager") /*id: 764327*/;
  function _(e, r, n) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = n;
    }
    return e;
  }
  class I {
    isPasteTextualFormat() {
      return [docxBlockTypeConstants.fileTypes.TEXT, docxBlockTypeConstants.fileTypes.DOCX_TEXT, docxBlockTypeConstants.fileTypes.URI_LIST].includes(this.format);
    }
    constructor(e, r, n, o, i) {
      this.editorContext = e;
      this.data = r;
      this.applyHook = n;
      this.hookParams = o;
      _(this, "selectionAPI", undefined);
      _(this, "blockManager", undefined);
      _(this, "format", undefined);
      _(this, "needAutoFocus", undefined);
      _(this, "setSelectionAfterPaste", undefined);
      _(this, "source", undefined);
      _(this, "isSingleTextSelection", e => {
        let r = e || this.hookParams.selectedBlocks;
        return editorSelectionUtilities.isSingleTextSelection(r);
      });
      _(this, "isTextSelectionAcrossBlocks", e => {
        let r = e || this.hookParams.selectedBlocks;
        return editorSelectionUtilities.hasTextSelection(r);
      });
      _(this, "isBlockSelection", e => {
        let r = e || this.hookParams.selectedBlocks;
        return editorSelectionUtilities.isBlockSelectionType(r);
      });
      _(this, "getHookParams", () => this.hookParams);
      _(this, "getCloneContext", e => ({
        op: e,
        format: this.hookParams.format,
        recordIds: this.data.recordIds,
        recordMap: this.data.recordMap,
        originalRecordMap: this.data.originalRecordMap,
        parentBlockStruct: this.hookParams.parentBlockStruct,
        tempIdToRecordIdMap: this.hookParams.tempIdToRecordIdMap,
        beforeOnlyMoveRecordPosition: this.beforeOnlyMoveRecordPosition,
        beforeCreateNewRecord: this.beforeCreateNewRecord,
        afterCreateNewRecord: this.afterCreateNewRecord
      }));
      _(this, "getTransactionOptions", () => {
        let {
          revisionInfo: e
        } = this.editorContext;
        let r = {};
        if (e) {
          r.extra = {
            revisionContext: e.context
          };
        }
        return r;
      });
      _(this, "getFirstSelectedBlockView", e => {
        let r = e || this.hookParams.selectedBlocks;
        return this.blockManager.getBlockViewByBlockId(r[0].id);
      });
      _(this, "getLastSelectedBlockView", e => {
        let r = e || this.hookParams.selectedBlocks;
        return this.blockManager.getBlockViewByBlockId(r[r.length - 1].id);
      });
      _(this, "getFirstSnapshot", () => {
        let e = this.data.recordIds[0];
        return this.data.recordMap[e].snapshot;
      });
      _(this, "beforeOnlyMoveRecordPosition", e => {
        let r = this.data.payloadMap[e];
        return docxBlockUtils.getOriginalSyncedSourceSnapshot(r);
      });
      _(this, "beforeCreateNewRecord", e => {
        let {
          from: r,
          pasteTimes: n
        } = pasteStateManager.getPasteState();
        return docxBlockUtils.applyBlockSnapshot({
          blockManager: this.blockManager,
          snapshot: e,
          applyFrom: r,
          applyTime: n
        });
      });
      _(this, "afterCreateNewRecord", (e, r) => {
        this.hookParams.applyRecordIds.push(r);
        this.hookParams.recordIdToTempIdMap.set(r, e);
        this.hookParams.tempIdToRecordIdMap.set(e, r);
      });
      _(this, "createAppliedHookParams", (e, r) => {
        e.range = r;
        return e;
      });
      _(this, "addApplyingHookParams", (e, r, n) => {
        e.op = r;
        e.createRecord = n;
        return e;
      });
      _(this, "removeApplyingHookParams", e => {
        delete e.op;
        delete e.createRecord;
        return e;
      });
      let {
        blockManager: a,
        selectionAPI: s
      } = e;
      let {
        format: c,
        needAutoFocus: d = true,
        setSelectionAfterPaste: u = true,
        source: h
      } = i;
      this.blockManager = a;
      this.selectionAPI = s;
      this.format = c;
      this.needAutoFocus = d;
      this.setSelectionAfterPaste = u;
      this.source = h;
    }
  }
  function E(e, r, n) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = n;
    }
    return e;
  }
  class S extends I {
    constructor(...e) {
      super(...e);
      E(this, "getNotNeedInheritKeys", e => {
        let r = [...editorModuleConstantsConfig.componentAttributes];
        if (e.ops.length && e.ops.find(e => e.attributes && e.attributes.link)) {
          return [...r, "link"];
        } else {
          return r;
        }
      });
      E(this, "handleApply", async () => {
        var e;
        var r;
        let n;
        let o = this.getFirstSelectedBlockView();
        let i = o.model.getSelection();
        if (!i) {
          return;
        }
        let l = i.toPosition();
        let s = 0;
        if (syncUrlBlockUtils.isSyncingActive() && o.model.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
          if ((r = o.model) !== null && r !== undefined) {
            r.addSnapshotTextIfNecessary();
          }
        }
        await this.blockManager.applyTransaction("applyPlainTextIntoTextualBlock", e => {
          let r = this.addApplyingHookParams(this.hookParams, e);
          this.applyHook.callHook(clipboardPasteDataHandlers.pasteLifecycleHooks.beforeBlockDataApply, r);
          if (!this.data.recordIds.length) {
            return;
          }
          let [n, f] = [this.data.recordIds[0], o.record.id];
          let g = o.model.isEmpty;
          let v = docxRecordSnapshotTransformer.deepCloneRecord(this.getCloneContext(e), n, f);
          this.beforeCreateNewRecord(v);
          let y = v.text;
          let b = deltaSetChangesetConverter_1.attributedTextToDeltaSet(y.initialAttributedTexts, y.apool).get("0");
          s = b.length();
          let _ = this.getNotNeedInheritKeys(b);
          let I = editorTextBlockUtilities.getInheritableAttributes(o.model, i, _);
          b = b.compose(new contentStructureDelta.ContentDelta().retain(b.length(), I));
          let E = new contentStructureDelta.ContentDelta({
            zoneId: l.zoneId
          }).retain(l.start).delete(l.len).concat(b);
          if (o.model.zoneState.applyDeltaWithClone(E).getModelText().length - 1 > docxEditorConstantsConfig.maxStreamLength) {
            docxErrorToastHandler.showErrorToast({
              content: t("CreationDoc_DocX_OverBlockLimit")
            });
            return;
          }
          if (g && o.type === docBlockTypeConstants.blockTypeConstants.TEXT && v.type !== docBlockTypeConstants.blockTypeConstants.TEXT) {
            e.replace(o.record.id, ["type"], v.type);
          }
          o.model.apply(E, {
            extra: {
              op: e
            },
            type: "pasteTextIntoTextualBlock"
          });
          syncedBlockUtils.hasExcludedDesc(this.format, o.model, v, e, g);
          this.afterCreateNewRecord(n, f);
          this.removeApplyingHookParams(r);
        }, {
          ...this.getTransactionOptions(),
          afterTransactionAccepted: () => {
            this.applyHook.callHook(clipboardPasteDataHandlers.pasteLifecycleHooks.onDataAccept, n);
          }
        });
        let g = ((e = o.model.getSelection()) === null || e === undefined ? undefined : e.toPosition()) || {};
        n = this.createAppliedHookParams(this.hookParams, {
          ...g,
          start: l.start,
          len: s
        });
        if (this.needAutoFocus) {
          o.focus();
        }
        this.applyHook.callHook(clipboardPasteDataHandlers.pasteLifecycleHooks.onDataApply, n);
        return {
          jointContext: {
            needJointStartText: true,
            needJointEndText: true,
            needJointAtSameText: true
          },
          applyRecordIds: this.hookParams.applyRecordIds,
          originalSelectedBlocks: this.hookParams.originalSelectedBlocks,
          data: this.hookParams.data
        };
      });
    }
  }
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var editorDataTextUtils = require("editor-data-text-utils") /*id: 606734*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var tempTransactionConst = require("temp-transaction-const") /*id: 825163*/;
  var docxOfflineStatusCheck = require("docx-offline-status-check") /*id: 691844*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var docQuoteContainerOps = require("doc-quote-container-ops") /*id: 780546*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var textBlockAttributeUtils = require("text-block-attribute-utils") /*id: 37833*/;
  var changeSourceConstants = require("change-source-constants") /*id: 363583*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var snapshotRevisionUtils = require("snapshot-revision-utils") /*id: 696424*/;
  function Q(e, r, n) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = n;
    }
    return e;
  }
  class Y extends I {
    get shouldOnlyRemovePosition() {
      let {
        pasteFlag: e
      } = pasteStateManager.getPasteState();
      return this.format === docxBlockTypeConstants.fileTypes.DOCX_RECORD && this.data.pasteFlag === e && this.isInnerFirstCut;
    }
    get isInnerFirstCut() {
      let {
        pasteTimes: e,
        from: r
      } = pasteStateManager.getPasteState();
      return r === docBlockTypeConstants.pasteOperationTypes.innerCutPaste && e === 0;
    }
    get shouldReplaceAuthor() {
      return !this.isInnerFirstCut;
    }
    getInParentPosition(e) {
      let n = this.getRecord(e.snapshot?.parent_id);
      if (n && n.snapshot.children) {
        return n.snapshot.children.indexOf(e.id);
      } else {
        return -1;
      }
    }
    getQuotePasteBlocksPosition(e, r) {
      let n = this.getFirstSelectedBlockView();
      let o = n.parentId || n.id;
      let {
        parentRecordId: i
      } = r;
      if (!docQuoteContainerOps.isInsideQuote(o, this.blockManager)) {
        let n = this.blockManager.createSnapshot(docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER);
        let [o] = documentBlockOperations.insertNewChildren(e, i, r.position, [n]);
        r.parentRecordId = o;
        r.position = 0;
        delete r.reservedStartText;
        delete r.reservedEndText;
      }
      return r;
    }
    createTextRecordByRange(e, r, n, o, i) {
      let [l, a] = n;
      let s = editorDataTextUtils.sliceEditorData(r.model.record.snapshot.text, [l, a]);
      let c = e.createChildren([{
        ...documentNodeUtils_2.createDocumentNode(i),
        children: [],
        text: s,
        parent_id: o
      }]);
      textBlockAttributeUtils.updateInlineMarks(e, s, c[0]);
      return c[0];
    }
    retainTextByRange(e, r, n) {
      let {
        zoneState: o,
        zoneId: i
      } = r.model;
      let [l, a] = n;
      let s = Math.max(l - 0, 0);
      let d = Math.max(a - l, 0);
      let u = Math.max(o.totalWidth() - 1 - a, 0);
      let h = new contentStructureDelta.ContentDelta({
        zoneId: i
      }).delete(s).retain(d).delete(u);
      r.model.apply(h, {
        extra: {
          op: e
        }
      });
    }
    pasteAtTextStart(e, r, n) {
      let o = r.model.position;
      let {
        start: i
      } = n;
      let a = i + n.len;
      let s = a === editorDataManagerClass.EditorDataManager.getPlainText(r.record.snapshot.text).length && i === 0;
      if (s) {
        docxBlockUtils.removeBlockAndMoveChildren(r.id, e, this.blockManager, o);
      } else if (!n.isCollapsed()) {
        editorTextBlockUtilities.deleteSelection(r, e);
      }
      let c = {
        position: o,
        parentRecordId: r.model.parent.recordId
      };
      if (!s) {
        c.reservedEndText = {
          recordId: r.record.id,
          offset: a
        };
      }
      return c;
    }
    pasteAtTextMiddle(e, r, n) {
      let {
        start: i
      } = n;
      let l = i + n.len;
      let a = r.model.position;
      let {
        zoneState: s
      } = r.model;
      let c = this.blockManager.getBlockModelByBlockId(r.parentId);
      let d = r.model.children?.length;
      let u = {
        parentRecordId: d ? r.model.recordId : c.recordId,
        position: d ? 0 : a + 1
      };
      let h = (r.snapshot.revisions || []).filter(e => editorRevisionUtilities.isParagraphDetail(e));
      h.forEach(n => snapshotRevisionUtils.removeRevision(e, r.record, n));
      let p = this.createTextRecordByRange(e, r, [l, s.totalWidth() - 1], u.parentRecordId, {
        revisions: h
      });
      e.insertChildren(u.parentRecordId, u.position, [p]);
      this.retainTextByRange(e, r, [0, i]);
      return {
        position: u.position,
        parentRecordId: u.parentRecordId,
        reservedStartText: {
          recordId: r.record.id,
          offset: i
        },
        reservedEndText: {
          recordId: p,
          offset: 0
        }
      };
    }
    pasteAtTextEnd(e, r, n) {
      let i = r.model.position;
      let {
        start: l
      } = n;
      let a = r.model.parent;
      let s = r.model.children?.length;
      let c = {
        parentRecordId: s ? r.model.recordId : a.recordId,
        position: s ? 0 : i + 1
      };
      if (!n.isCollapsed()) {
        editorTextBlockUtilities.deleteSelection(r, e);
      }
      return {
        position: c.position,
        parentRecordId: c.parentRecordId,
        reservedStartText: {
          recordId: r.record.id,
          offset: l
        }
      };
    }
    pasteAtRootTextStartOrMiddle(e, r, n) {
      let {
        start: o
      } = n;
      let i = o + n.len;
      let {
        zoneState: l
      } = r.model;
      let a = r.record.id;
      let s = this.createTextRecordByRange(e, r, [i, l.totalWidth() - 1], a);
      e.insertChildren(a, 0, [s]);
      this.retainTextByRange(e, r, [0, o]);
      return {
        position: 0,
        parentRecordId: a,
        reservedStartText: {
          recordId: a,
          offset: o
        },
        reservedEndText: {
          recordId: s,
          offset: 0
        }
      };
    }
    pasteAtRootTextEnd(e, r, n) {
      let {
        start: o
      } = n;
      if (!n.isCollapsed()) {
        editorTextBlockUtilities.deleteSelection(r, e);
      }
      return {
        position: 0,
        parentRecordId: r.model.recordId,
        reservedStartText: {
          recordId: r.record.id,
          offset: o
        }
      };
    }
    async ensureFoldHeadingRendered() {
      let {
        fold: e
      } = this.editorContext;
      let r = this.getFirstSelectedBlockView();
      if (this.isPasteIntoFoldHeading()) {
        let n = e.findFoldedBlocks(r.id).pop();
        await this.blockManager.layoutManager.renderNodeById(n);
      }
    }
    getPasteJointContext(e, r) {
      let {
        reservedStartText: d,
        reservedEndText: u
      } = r;
      let h = this.blockManager.getRecord(e[0])?.snapshot;
      let f = this.blockManager.getRecord(e[e.length - 1])?.snapshot;
      let g = (d == null ? undefined : d.offset) === 0;
      let k = this.hookParams.isSelectRoot && g && editorTextBlockUtilities.hasTextWithApoolSimple(h);
      let T = docxBlockUtils.isListBlockType(h.type) && !k;
      let v = this.pasteSingleTextual() && this.data.selection?.length === 0;
      let y = this.isPasteTextualFormat() || v;
      let b = arrayFirstElement.getFirstElement(this.data.selection)?.type === docxBlockSelectionHandler_1.blockTypes.TEXT && docBlockTypeConstants.quoteBlockTypes.includes(h == null ? undefined : h.type);
      let _ = lastElementHelper.getLastElement(this.data.selection)?.type === docxBlockSelectionHandler_1.blockTypes.TEXT && docBlockTypeConstants.quoteBlockTypes.includes(f == null ? undefined : f.type);
      let I = !T && !!d && (y || b || k);
      let E = !!u && (y || _);
      let S = I && E && e.length === 1 && !h.children?.length;
      return {
        needJointStartText: I,
        needJointEndText: E,
        needJointAtSameText: S
      };
    }
    jointStartText(e, r, n) {
      let l = r[0];
      let a = this.blockManager.getRecord(l)?.snapshot;
      if (a && editorTextBlockUtilities.hasTextWithApoolSimple(a)) {
        let r = this.blockManager.getBlockViewsByRecordId(n.recordId);
        let o = this.blockManager.getRecord(n.recordId);
        editorTextBlockUtilities.getInlineDisplayMarksFromText(a).forEach(r => this.blockManager.hasRecordByRecordId(r) && e.replace(r, ["parent_id"], n.recordId));
        let s = deltaSetChangesetConverter_1.attributedTextToDeltaSet(a.text.initialAttributedTexts, a.text.apool);
        if (r && r[0]) {
          let n = r[0];
          let {
            zoneId: o,
            zoneState: i
          } = n.model;
          let l = new contentStructureDelta.ContentDelta({
            zoneId: o
          }).retain(i.totalWidth() - 1).concat(s.get(zeroConstantModule_1.versionValue));
          n.model.apply(l, {
            extra: {
              op: e
            }
          });
        } else {
          let r = o.snapshot;
          let n = deltaSetChangesetConverter_1.attributedTextToDeltaSet(r.text.initialAttributedTexts, r.text.apool).concat(s);
          let i = editorDataTextUtils.getAttributedTexts(n);
          flowSyncDeltaOperations.editWithLineManager(e, o, i);
        }
        (a.revisions || []).filter(e => editorRevisionUtilities.isParagraphDetail(e)).forEach(r => snapshotRevisionUtils.upsertRevision(e, o, r));
        let u = n.recordId;
        if (a.children?.length) {
          documentBlockOperations.moveChildren(e, o.id, 0, a.children);
          u = this.getDeepestRecordId(a.children);
        }
        this.replaceApplyRecordId(l, n.recordId);
        this.updateJointStartInfo(u);
      }
    }
    removeReservedBlockIfEmpty(e, r) {
      let n = this.blockManager.getRecord(r.recordId);
      let o = n.snapshot;
      if (!!o && editorDataManagerClass.EditorDataManager.getPlainText(o.text).length === 0 && o.children.length === 0 && !(this.getInParentPosition(n) < 0)) {
        e.removeChildren(o.parent_id, [r.recordId]);
      }
    }
    deletePrefixEnterIfNecessary(e, r) {
      let n = this.blockManager.getRecord(r.recordId);
      let o = n.snapshot;
      let i = deltaSetChangesetConverter_1.attributedTextToDeltaSet(o.text.initialAttributedTexts, o.text.apool).get(zeroConstantModule_1.versionValue);
      let l = i.ops[0];
      if (deltaSetCore.isInsertString(l) && l.insert.startsWith("\n")) {
        let r = i.compose(new contentStructureDelta.ContentDelta().delete(1));
        let o = editorDataTextUtils.getAttributedTexts(new deltaSetCore.DeltaSet().add(zeroConstantModule_1.versionValue, r));
        e.replace(n.id, ["text"], o);
      }
    }
    replaceApplyRecordId(e, r) {
      let n = this.hookParams.applyRecordIds.indexOf(e);
      if (n > -1) {
        this.hookParams.applyRecordIds.splice(n, 1, r);
      }
    }
    updateJointStartInfo(e) {
      this.insertContext.selectRecordIdAfterJointStart = e;
    }
    updateJointEndInfo(e, r) {
      this.insertContext.selectRecordIdAfterJointEnd = e;
      this.insertContext.jointedEndTextOffset = r;
    }
    updateInsertPosition(e) {
      this.insertContext.insertPosition = e;
    }
    jointEndText(e, r, n) {
      let o = this.getDeepestRecordId(r);
      if (!o) {
        return;
      }
      let i = this.blockManager.getRecord(o);
      let l = i.snapshot;
      if (!l || !editorTextBlockUtilities.hasTextWithApoolSimple(l)) {
        return;
      }
      let a = this.blockManager.getRecord(n.recordId);
      let s = a.snapshot;
      let u = this.blockManager.getBlockViewsByRecordId(a.id);
      editorTextBlockUtilities.getInlineDisplayMarksFromText(l).forEach(r => this.blockManager.hasRecordByRecordId(r) && e.replace(r, ["parent_id"], a.id));
      if (u == null ? undefined : u[0]) {
        let r = u[0];
        let n = deltaSetChangesetConverter_1.attributedTextToDeltaSet(l.text.initialAttributedTexts, l.text.apool);
        let o = new contentStructureDelta.ContentDelta({
          zoneId: r.model.zoneId
        }).concat(n.get("0"));
        r.model.apply(o, {
          extra: {
            op: e
          }
        });
      } else {
        let r = deltaSetChangesetConverter_1.attributedTextToDeltaSet(s.text.initialAttributedTexts, s.text.apool);
        let n = deltaSetChangesetConverter_1.attributedTextToDeltaSet(l.text.initialAttributedTexts, l.text.apool).concat(r);
        let o = editorDataTextUtils.getAttributedTexts(n);
        flowSyncDeltaOperations.editWithLineManager(e, a, o);
      }
      if (s.type !== l.type) {
        e.replace(a.id, ["type"], l.type);
      }
      if (l.seq) {
        e.replace(a.id, ["seq"], "auto");
      }
      if (!s.text_indent && l.text_indent) {
        e.replace(a.id, ["text_indent"], l.text_indent);
      }
      if (lastElementHelper.getLastElement(r) !== i.id || r.length && this.isFirstPasteBlockBehindJointEnd(this.blockManager.getRecord(r[0]), a)) {
        let r = this.getInParentPosition(i);
        if (r >= 0) {
          e.removeChildren(s.parent_id, [a.id]);
          documentBlockOperations.moveChildren(e, l == null ? undefined : l.parent_id, r, [a.id]);
        }
      }
      e.removeChildren(l == null ? undefined : l.parent_id, [i.id]);
      this.replaceApplyRecordId(o, a.id);
      let h = l.text.initialAttributedTexts.text[0];
      this.updateJointEndInfo(a.id, h.length);
    }
    isFirstPasteBlockBehindJointEnd(e, r) {
      if (!e || !r) {
        return false;
      }
      let n = this.getInParentPosition(e);
      if (n < 0) {
        return false;
      }
      let o = r;
      while (o && o.snapshot.parent_id !== e.snapshot.parent_id) {
        o = this.getRecord(o.snapshot.parent_id);
      }
      if (!o) {
        return false;
      }
      let i = this.getInParentPosition(o);
      return !(i < 0) && i < n;
    }
    jointStartAndEndAtSameText(e, r, n, o) {
      let a = r[0];
      let s = this.blockManager.getRecord(a)?.snapshot;
      if (s) {
        let r = deltaSetChangesetConverter_1.attributedTextToDeltaSet(s.text.initialAttributedTexts, s.text.apool);
        let i = this.blockManager.getRecord(o.recordId).snapshot;
        let c = deltaSetChangesetConverter_1.attributedTextToDeltaSet(i.text.initialAttributedTexts, i.text.apool);
        let u = this.blockManager.getBlockViewsByRecordId(n.recordId)[0];
        let h = r.concat(c);
        let p = deltaSetChangesetConverter_1.extractAttributedTexts(h);
        let {
          zoneState: f
        } = u.model;
        let g = f.merge(p).getContent();
        u.model.updateContent(g, {
          extra: {
            op: e
          }
        });
        e.removeChildren(i.parent_id, [o.recordId]);
        if (i.children?.length) {
          documentBlockOperations.moveChildren(e, u.record.id, 0, i.children);
        }
        this.replaceApplyRecordId(a, n.recordId);
        let m = editorDataManagerClass.EditorDataManager.serialize(s.text).alltext.length;
        let k = n.offset + m;
        this.updateJointEndInfo(n.recordId, k);
      }
    }
    insertBlocks(e, r, n, o) {
      if (!n.length) {
        return;
      }
      let {
        reservedStartText: i,
        position: l
      } = o;
      let {
        needJointStartText: a
      } = this.getPasteJointContext(n, o);
      if (a && i) {
        let o = n.slice(1, n.length);
        let a = this.blockManager.getRecord(i.recordId);
        if (a.snapshot.children.length) {
          documentBlockOperations.moveChildren(e, a.id, 0, o);
        } else {
          e.insert(r, ["children", l], o);
        }
      } else {
        e.insert(r, ["children", l], n);
      }
    }
    pasteBlocks(e, r, n, o) {
      let {
        reservedStartText: i,
        reservedEndText: l
      } = o;
      let {
        needJointStartText: a,
        needJointEndText: s
      } = this.getPasteJointContext(n, o);
      this.insertBlocks(e, r, n, o);
      let c = () => {
        if (!a && i) {
          this.removeReservedBlockIfEmpty(e, i);
        }
      };
      if (a && i) {
        this.jointStartText(e, n, i);
      } else {
        c();
      }
      if (s && l) {
        this.jointEndText(e, n, l);
        c();
      } else {
        (() => {
          if (!s && l) {
            this.deletePrefixEnterIfNecessary(e, l);
            this.removeReservedBlockIfEmpty(e, l);
          }
        })();
      }
    }
    pasteSingleTextual() {
      let r = this.getFirstSnapshot();
      return this.data.recordIds.length === 1 && docBlockTypeConstants.quoteBlockTypes.includes(r.type) && !r.children?.length;
    }
    getBlockTypeFromPayloadMap(e) {
      return this.data.payloadMap[e]?.originalType;
    }
    callBeforeBlockDataApplyHooks(e) {
      let r = this.addApplyingHookParams(this.hookParams, e, this.createRecordCreator(e, {
        getIsOnlyRemovePosition: this.getIsOnlyRemovePosition,
        shouldReplaceAuthor: this.shouldReplaceAuthor
      }));
      this.applyHook.callHook(clipboardPasteDataHandlers.pasteLifecycleHooks.beforeBlockDataApply, r);
      return r;
    }
    getPasteNewRecordIds(e, r) {
      let {
        userId: n
      } = userEnvironmentUtils.getUserInfo();
      return this.data.recordIds.map(o => {
        let i = docxRecordSnapshotTransformer.transformRecord(this.getCloneContext(e), o, r, {
          getIsOnlyRemovePosition: this.getIsOnlyRemovePosition,
          recursive: true,
          shouldReplaceAuthor: this.shouldReplaceAuthor,
          userId: n
        });
        this.applyHook.callHook(clipboardPasteDataHandlers.pasteLifecycleHooks.afterRecordIdCreated, {
          oldRecordId: o,
          newRecordId: i
        });
        return i;
      });
    }
    recursiveRemoveSecondPartyBlockLI(e, r, n) {
      if (!e) {
        return;
      }
      let o = docTempTransactionManager.getRestrictedTypes();
      if (o.length) {
        try {
          e.forEach(e => {
            var a;
            var c;
            let d = r.get(e);
            if (d.snapshot.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
              return;
            }
            let u = [...(d.snapshot.children ?? [])];
            if (o.includes(d.snapshot.type)) {
              let o = r.get(d.snapshot.parent_id);
              if ((docBlockTypeConstants.gridQuoteTypes.includes(o.snapshot.type) || docBlockTypeConstants.tableCellTypes.includes(o.snapshot.type)) && o.snapshot.children?.length === 1) {
                let i = documentBlockOperations.createSingleBlock(r, o.id, documentNodeUtils_2.createDocumentNode());
                r.replaceChildren(o.id, [i]);
                n.unshift({
                  id: e,
                  mountType: "replace",
                  relatedRecordId: i
                });
              } else {
                let i = ((a = o.snapshot.children) === null || a === undefined ? undefined : a.findIndex(r => r === e)) ?? -1;
                if (i > -1) {
                  let l;
                  if (i > 0) {
                    l = (c = o.snapshot.children) === null || c === undefined ? undefined : c.find((e, r) => r === i - 1);
                  }
                  n.unshift({
                    id: e,
                    mountType: "append",
                    relatedRecordId: l
                  });
                  r.removeChildren(o.id, [e]);
                }
              }
            } else if (u.length > 0) {
              this.recursiveRemoveSecondPartyBlockLI(u, r, n);
            }
          });
        } catch (e) {
          docxEventCollector.wrappedCollector("doc_bug_track_dev", {
            action: "recursiveRemoveSecondPartyBlockLI",
            info: JSON.stringify(e)
          });
        }
      }
    }
    async forceShowFirstBlock() {
      let e;
      let {
        fold: r
      } = this.editorContext;
      let {
        data: n,
        blockManager: o,
        hookParams: i
      } = this;
      let l = n.recordIds;
      let a = l.map(e => i.tempIdToRecordIdMap.get(e));
      let {
        insertPosition: s
      } = this.insertContext;
      let {
        reservedStartText: c,
        reservedEndText: d
      } = s;
      let {
        needJointStartText: u,
        needJointAtSameText: h
      } = this.getPasteJointContext(a, s);
      e = (h || u) && c ? c.recordId : d && a.length === 1 ? d.recordId : i.tempIdToRecordIdMap.get(l[0]);
      let p = o.getBlockViewsByRecordId(e);
      if (p.length > 0) {
        let e = p[0].id;
        await r.forceShowFoldedBlock(e, o.editable);
      }
    }
    calculateLastPasteModel() {
      let e;
      let {
        fold: r
      } = this.editorContext;
      let {
        data: n,
        blockManager: o,
        hookParams: i
      } = this;
      let a = n.recordIds;
      let s = a.map(e => i.tempIdToRecordIdMap.get(e));
      let {
        selectRecordIdAfterJointStart: c,
        selectRecordIdAfterJointEnd: d,
        insertPosition: u
      } = this.insertContext;
      let {
        needJointStartText: h,
        needJointEndText: p,
        needJointAtSameText: f
      } = this.getPasteJointContext(s, u);
      let g = false;
      if (f && d) {
        e = d;
      } else if (p && d) {
        e = d;
      } else if (h && s.length === 1 && c) {
        e = c;
      } else {
        g = true;
        e = i.tempIdToRecordIdMap.get(a[a.length - 1]);
      }
      let m = o.getBlockModelsByRecordId(e)[0];
      if (!m) {
        return;
      }
      if (m.nextSibling) {
        r.handleBlockShow({
          btmAffectedSib: m.struct.nextSibling
        });
      }
      let k = r.findFoldedByBlock(m.id);
      if (k) {
        m = o.getBlockModelByBlockId(k);
      } else if (m.children.length && g && docxBlockValidatorUtils_1.isListBlockType(m.type)) {
        let e = docxBlockUtils.getLastChildBlock(m);
        if (r.isShow(e.id)) {
          m = e;
        }
      }
      return m;
    }
    async setSelectionToPastedEnd(e) {
      let r;
      let {
        viewport: n
      } = this.editorContext;
      let {
        blockManager: o,
        selectionAPI: i
      } = this;
      let {
        jointedEndTextOffset: l
      } = this.insertContext;
      if ([...docBlockTypeConstants.quoteBlockTypes, docBlockTypeConstants.blockTypeConstants.PAGE].includes(e.type)) {
        r = e.id;
        await n.scrollToBlock(r);
        let o = editorTextBlockUtilities.getModelTextWithoutTrailing(e.zoneState).length;
        i.setSelection([{
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          id: e.id,
          selection: {
            start: l || o,
            end: l || o
          }
        }]);
      } else {
        if (e.parent?.type === docBlockTypeConstants.blockTypeConstants.VIEW) {
          e = e.parent;
        }
        let l = e.next;
        let s = e.parent;
        if (docBlockTypeConstants.gridTableOkTypes.includes(e.type)) {
          l = e.nextSibling;
        } else if (e.type === docBlockTypeConstants.blockTypeConstants.VIEW) {
          l = e.nextSibling;
        }
        if (s && docBlockTypeConstants.gridTableOkTypes.includes(s.type) && lastElementHelper.getLastElement(s.children).id === e.id) {
          l = null;
        }
        if (l && docBlockTypeConstants.quoteBlockTypes.includes(l.type)) {
          r = l.id;
          await n.scrollToBlock(r);
          let e = o.getBlockViewByBlockIdNotCheck(l.id);
          if (e) {
            i.setSelection([{
              id: e.id,
              type: docxBlockSelectionHandler_1.blockTypes.TEXT,
              selection: {
                start: 0,
                end: 0
              }
            }]);
          }
        } else {
          let l = await docxBlockUtils_1.insertNewLine({
            blockManager: o,
            selectionAPI: i,
            viewport: n,
            blockId: e.id,
            isNextBlock: true,
            needFocus: true,
            skipUndoCompose: true
          });
          if (l) {
            r = l;
          }
        }
      }
    }
    async handleCursorAfterPaste() {
      await this.forceShowFirstBlock();
      let e = this.calculateLastPasteModel();
      if (e) {
        await this.setSelectionToPastedEnd(e);
      }
    }
    reset() {
      this.insertContext.insertPosition = null;
      this.insertContext.jointedEndTextOffset = null;
      this.insertContext.selectRecordIdAfterJointStart = undefined;
      this.insertContext.selectRecordIdAfterJointEnd = undefined;
    }
    constructor(...e) {
      super(...e);
      Q(this, "insertContext", {
        jointedEndTextOffset: null,
        insertPosition: null
      });
      Q(this, "isPasteIntoFoldHeading", () => {
        let e = this.getFirstSelectedBlockView();
        if (this.isSingleTextSelection() && e.type.startsWith("heading") && e.record.snapshot.folded) {
          let r = this.editorContext.fold.findFoldedBlocks(e.id);
          return !!(r == null ? undefined : r.length);
        }
        return false;
      });
      Q(this, "getDeepestRecordId", e => {
        let n = lastElementHelper.getLastElement(e);
        if (!n) {
          return;
        }
        let o = this.blockManager.getRecord(n);
        while (o && o.snapshot.children?.length) {
          o = (n = lastElementHelper.getLastElement(o.snapshot.children)) ? this.blockManager.getRecord(n) : undefined;
        }
        return n;
      });
      Q(this, "getRecord", e => {
        if (e) {
          return docxBlockUtils.getBlockRecordSafe(this.blockManager, e);
        }
      });
      Q(this, "deleteBlocksAndGetPosition", (e, r, n, o) => {
        let i = n.position;
        documentBlockOperations.removeBlockItems(e, r.map(e => e.id), this.blockManager);
        return {
          position: i,
          parentRecordId: o.recordId
        };
      });
      Q(this, "deleteAcrossBlocksAndGetPosition", (e, r, n, o) => {
        let {
          blockManager: l
        } = this;
        let a = [];
        let s = n.position;
        let c = arrayFirstElement.getFirstElement(r)?.type === docxBlockSelectionHandler_1.blockTypes.BLOCK;
        let d = r.reduce((n, o, i) => {
          let s = i === 0;
          let c = i === r.length - 1;
          let d = o.type === docxBlockSelectionHandler_1.blockTypes.BLOCK;
          let u = l.getBlockViewByBlockIdNotCheck(o.id);
          if (d || !s && !c) {
            a.push(o.id);
          } else if (s && !d && u) {
            editorTextBlockUtilities.deleteSelection(u, e);
            n.reservedStartText = {
              recordId: u.record.id,
              offset: o.selection.start
            };
          } else if (c && !d && u) {
            editorTextBlockUtilities.deleteSelection(u, e);
            n.reservedEndText = {
              recordId: u.record.id,
              offset: o.selection.end
            };
          }
          return n;
        }, {
          position: c ? s : s + 1,
          parentRecordId: o.recordId
        });
        documentBlockOperations.removeBlockItems(e, a, l);
        let u = this.getLastSelectedBlockView();
        let h = u.model.parent;
        let p = r.some(e => e.id === (h == null ? undefined : h.id) && a.includes(h == null ? undefined : h.id));
        let {
          reservedStartText: f,
          reservedEndText: g
        } = d;
        if (h && p && f && g) {
          let r = [g.recordId];
          let {
            children: n = []
          } = h.snapshot;
          let o = n.findIndex(e => u.record.id === e);
          if (o > -1 && o < n.length - 1) {
            r.push(...n.slice(o + 1));
          }
          documentBlockOperations.moveChildren(e, f.recordId, 0, r);
        }
        return d;
      });
      Q(this, "deleteTextsAndGetPosition", (e, r, n) => {
        var o;
        let l;
        let a = r.isRoot || syncUrlBlockUtils.isSyncingActive() && r.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
        try {
          if (editorTextBlockUtilities.isEditorInstance(r)) {
            l = (o = r.model.getSelection()) === null || o === undefined ? undefined : o.toPosition();
          }
        } catch (n) {
          let e = {
            viewType: r.type,
            modelType: r.model.type,
            recordId: docxUtilityHelpers.maskSensitiveData(r == null ? undefined : r.record?.id),
            selection: this.selectionAPI.getSelection(),
            hooksSelection: this.hookParams.selectedBlocks
          };
          docxEventCollector.wrappedCollector("doc_bug_track_dev", {
            action: "model.getSelection is not function",
            info: JSON.stringify(e)
          });
          throw n;
        }
        let s = r.model.position;
        if (!l) {
          return {
            position: s + 1,
            parentRecordId: n.recordId
          };
        }
        let {
          start: c
        } = l;
        let d = c + l.len;
        let u = editorTextBlockUtilities.getModelTextWithoutTrailing(r.model.zoneState).length;
        if (c === 0) {
          if (a) {
            return this.pasteAtRootTextStartOrMiddle(e, r, l);
          } else {
            return this.pasteAtTextStart(e, r, l);
          }
        } else if (d === u) {
          if (a) {
            return this.pasteAtRootTextEnd(e, r, l);
          } else {
            return this.pasteAtTextEnd(e, r, l);
          }
        } else if (c !== 0 && d !== u) {
          if (a) {
            return this.pasteAtRootTextStartOrMiddle(e, r, l);
          } else {
            return this.pasteAtTextMiddle(e, r, l);
          }
        } else {
          return null;
        }
      });
      Q(this, "deleteSelectedAndGetInsertPosition", e => {
        let {
          hookParams: r,
          editorContext: n
        } = this;
        let {
          fold: o
        } = n;
        let i = this.isSingleTextSelection();
        let l = this.getFirstSelectedBlockView();
        if (i && this.isPasteIntoFoldHeading()) {
          let e = o.findFoldedBlocks(l.id).pop();
          let r = this.blockManager.getBlockModelByBlockId(e);
          this.blockManager.layoutManager.getReconciler().debouncePaint();
          return {
            position: r.position + 1,
            parentRecordId: r.parent.recordId
          };
        }
        let {
          selectedBlocks: a
        } = r;
        let s = l.model;
        let c = s.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE && syncUrlBlockUtils.isSyncingActive();
        let d = s.parent && !c ? s.parent : s;
        let u = this.isTextSelectionAcrossBlocks();
        if (this.isBlockSelection()) {
          return this.deleteBlocksAndGetPosition(e, a, s, d);
        } else if (u) {
          return this.deleteAcrossBlocksAndGetPosition(e, a, s, d);
        } else if (i) {
          return this.deleteTextsAndGetPosition(e, l, d);
        } else {
          return null;
        }
      });
      Q(this, "transformInsertPosition", (e, r) => this.data.isKeepQuoteContainer ? this.getQuotePasteBlocksPosition(e, r) : (r.parentRecordId ||= this.blockManager.getRootRecordId(), r));
      Q(this, "createRecordCreator", (e, r) => (n, o) => docxRecordSnapshotTransformer.transformRecord(this.getCloneContext(e), n, o || this.hookParams.parentBlockStruct.record.id, r));
      Q(this, "getIsOnlyRemovePosition", e => {
        var n;
        if (this.blockManager.getBlockIdsByRecordId(e).length || !this.shouldOnlyRemovePosition) {
          return false;
        }
        let a = (n = this.data.recordMap[e]) === null || n === undefined ? undefined : n.snapshot?.parent_id;
        let s = this.getBlockTypeFromPayloadMap(e) || this.data.recordMap[e].snapshot.type;
        let c = a && this.blockManager.getBlockModelsByRecordId(a)[0];
        let d = this.insertContext.insertPosition?.parentRecordId && this.blockManager.getBlockModelsByRecordId(this.insertContext.insertPosition?.parentRecordId)?.[0];
        if (c && d && (c.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE ? c.id : docxSyncedBlockUtils.findSyncedSourceId(c, this.blockManager)) !== (d.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE ? d.id : docxSyncedBlockUtils.findSyncedSourceId(d, this.blockManager))) {
          return docBlockTypeConstants.syncedReferenceTypes.includes(s);
        } else {
          return docBlockTypeConstants.pollWhiteboardTypes.includes(s);
        }
      });
      Q(this, "applyPasteIntoBlockOperation", async e => {
        let r = {
          needJointStartText: false,
          needJointEndText: false,
          needJointAtSameText: false
        };
        let n = docxOfflineStatusCheck.isDocxOfflineEnabled();
        let o = this.blockManager.applyTransaction("pasteIntoBlock", o => {
          let i = this.callBeforeBlockDataApplyHooks(o);
          if (!this.data.recordIds.length) {
            return;
          }
          let l = this.deleteSelectedAndGetInsertPosition(o);
          if (!l) {
            return;
          }
          let a = this.transformInsertPosition(o, l);
          if (!a) {
            return;
          }
          let {
            reservedStartText: s,
            reservedEndText: c,
            parentRecordId: d
          } = a;
          this.updateInsertPosition(a);
          let u = this.getPasteNewRecordIds(o, d);
          let {
            needJointAtSameText: h
          } = r = this.getPasteJointContext(u, a);
          if (h && s && c) {
            this.jointStartAndEndAtSameText(o, u, s, c);
          } else {
            this.pasteBlocks(o, d, u, a);
          }
          if (n) {
            this.recursiveRemoveSecondPartyBlockLI(u, o, e.secondPartyBlockTempTransactionInfos);
          }
          this.removeApplyingHookParams(i);
        }, {
          ...this.getTransactionOptions(),
          afterTransactionAccepted: () => {
            this.applyHook.callHook(clipboardPasteDataHandlers.pasteLifecycleHooks.onDataAccept, e);
          },
          source: changeSourceConstants.changeSourceConstants.PASTE
        });
        if (n) {
          e.secondPartyBlockTempTransactionInfos.forEach(e => {
            let {
              id: r,
              mountType: n,
              relatedRecordId: o
            } = e;
            docTempTransactionManager.applyTempTx(this.blockManager, `${tempTransactionConst.tempTransaction}-${platformDocUtils.p5T(r)}`, e => {
              let i = e.get(r);
              if (i.snapshot.parent_id) {
                let s = e.get(i.snapshot.parent_id);
                switch (n) {
                  case "append":
                    {
                      let n = 0;
                      if (o) {
                        var l;
                        let e = ((l = s.snapshot.children) === null || l === undefined ? undefined : l.findIndex(e => e === o)) ?? -1;
                        if (e > -1) {
                          n = e + 1;
                        }
                      }
                      documentBlockOperations.moveChildren(e, i.snapshot.parent_id, n, [r]);
                    }
                    break;
                  case "replace":
                    e.replaceChildren(s.id, [r]);
                }
              }
            }, {
              mergeMode: collaborativeEditingFlowSyncModule.CollabMode.MERGE,
              ...this.getTransactionOptions()
            });
          });
        }
        await o;
        return r;
      });
      Q(this, "pasteIntoBlock", async () => {
        let e = this.createAppliedHookParams(this.hookParams);
        await this.ensureFoldHeadingRendered();
        let r = await this.applyPasteIntoBlockOperation(e);
        this.applyHook.callHook(clipboardPasteDataHandlers.pasteLifecycleHooks.onDataApply, e);
        return r;
      });
      Q(this, "handleApply", async () => {
        let e = {
          jointContext: await this.pasteIntoBlock(),
          applyRecordIds: this.hookParams.applyRecordIds,
          originalSelectedBlocks: this.hookParams.originalSelectedBlocks,
          data: this.hookParams.data
        };
        if (this.data.recordIds.length) {
          if (this.setSelectionAfterPaste) {
            await this.handleCursorAfterPaste();
          }
          this.reset();
        }
        return e;
      });
    }
  }
  var clipboardPasteProcessor = require("clipboard-paste-processor") /*id: 823676*/;
  function et(e, r, n) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = n;
    }
    return e;
  }
  class er {
    isPasteSingleDifferentList(e) {
      let {
        recordIds: n,
        recordMap: o
      } = this.data;
      let i = e || this.hookParams.selectedBlocks;
      if (!this.isSingleTextSelection(i) || n.length !== 1) {
        return false;
      }
      let {
        snapshot: a
      } = o[n[0]];
      if (a.children?.length) {
        return false;
      }
      let s = this.getFirstSelectedBlockView(e);
      return docxBlockUtils.isListBlockType(a.type) && docxBlockUtils.isListBlockType(s.type) && a.type !== s.type;
    }
    pasteSingleTextual() {
      let r = this.getFirstSnapshot();
      return this.data.recordIds.length === 1 && docBlockTypeConstants.quoteBlockTypes.includes(r.type) && !r.children?.length;
    }
    isLastApplyWaitingModuleLoad() {
      if (this.source !== "clipboard" || pasteStateManager.pasteStateMap.size === 0) {
        return false;
      }
      let e = this.hookParams.selectedBlocks;
      for (let r of pasteStateManager.pasteStateMap.values()) {
        if (deepEqualUtil_1.deepEqual(r, e)) {
          return true;
        }
      }
      return false;
    }
    constructor(e, r, n, i, c = true, d = "clipboard", u = true) {
      var h = this;
      this.editorContext = e;
      this.data = r;
      this.format = n;
      this.hooks = i;
      this.needAutoFocus = c;
      this.source = d;
      this.setSelectionAfterPaste = u;
      et(this, "hookParams", undefined);
      et(this, "applyHook", undefined);
      et(this, "blockManager", undefined);
      et(this, "selectionAPI", undefined);
      et(this, "id", uuidGeneratorUtil.generateUuid());
      et(this, "isSingleTextSelection", e => {
        let r = e || this.hookParams.selectedBlocks;
        return editorSelectionUtilities.isSingleTextSelection(r);
      });
      et(this, "getInitialHookParams", () => {
        let e = this.selectionAPI.getSelection();
        let r = this.blockManager.getBlockModelByBlockId(e[0].id);
        let n = r.parent || r;
        let o = this.isPasteIntoBlock(e);
        return {
          blockManager: this.blockManager,
          originalSelectedBlocks: e,
          selectedBlocks: e,
          data: this.data,
          editorContext: this.editorContext,
          format: this.format,
          isSelectRoot: r.parent === null,
          parentBlockStruct: n,
          isPasteIntoBlock: o,
          applyRecordIds: [],
          recordIdToTempIdMap: new Map(),
          tempIdToRecordIdMap: new Map(),
          secondPartyBlockTempTransactionInfos: [],
          isPreventApply: false,
          source: this.source
        };
      });
      et(this, "getFirstSelectedBlockView", e => {
        let r = e || this.hookParams.selectedBlocks;
        return this.blockManager.getBlockViewByBlockId(r[0].id);
      });
      et(this, "getFirstSnapshot", () => {
        let e = this.data.recordIds[0];
        return this.data.recordMap[e].snapshot;
      });
      et(this, "getApplicator", () => new (this.isPasteIntoBlock() ? S : Y)(this.editorContext, this.data, this.applyHook, this.hookParams, {
        format: this.format,
        needAutoFocus: this.needAutoFocus,
        source: this.source,
        setSelectionAfterPaste: this.setSelectionAfterPaste
      }));
      et(this, "isPasteIntoBlock", function (e = h.hookParams.selectedBlocks) {
        if (h.source === "translate-insert" || docxBlockUtils.shouldSkipInnerCutPaste(h.data)) {
          return false;
        }
        if (h.data.recordIds.length === 0) {
          return true;
        }
        if (!h.isSingleTextSelection(e)) {
          return false;
        }
        let r = h.getFirstSelectedBlockView(e);
        if (r.type === docBlockTypeConstants.blockTypeConstants.CODE) {
          return true;
        }
        let n = h.getFirstSnapshot();
        if (!h.pasteSingleTextual() || h.format === docxBlockTypeConstants.fileTypes.DOCX_RECORD && (h.format !== docxBlockTypeConstants.fileTypes.DOCX_RECORD || n.type !== docBlockTypeConstants.blockTypeConstants.TEXT) || h.source === "AI" && n.type !== docBlockTypeConstants.blockTypeConstants.TEXT) {
          return false;
        }
        let {
          children: o
        } = r.record.snapshot;
        let i = Array.isArray(o) && o.length > 0;
        return !!r.model.isEmpty && !i || !h.isPasteSingleDifferentList(e);
      });
      et(this, "apply", async () => {
        if (this.isLastApplyWaitingModuleLoad()) {
          docxEventCollector.docEventCollector("doc_bug_track_dev", {
            action: "last apply was waiting block module loaded",
            info: JSON.stringify({
              selectedBlocks: this.hookParams.selectedBlocks
            })
          });
          return;
        }
        let {
          editorContext: e,
          data: r
        } = this;
        try {
          pasteStateManager.pasteStateMap.set(this.id, this.hookParams.selectedBlocks);
          await Promise.all(Object.keys(r.recordMap).map(async n => {
            let i = r.recordMap[n];
            if (clipboardPasteProcessor.isSupportedBlock(i.snapshot.type, i.snapshot?.block_type_id || "")) {
              return e.blockManager.editorAPI.moduleService.loadBlockModule(docBlockTypeConstants.blockTypeConstants.MERMAID, {
                immediately: true
              });
            } else {
              return e.blockManager.editorAPI.moduleService.loadBlockModule(i.snapshot.type, {
                immediately: true
              });
            }
          }));
        } catch (e) {} finally {
          pasteStateManager.pasteStateMap.delete(this.id);
        }
        this.applyHook.callHook(clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData, this.hookParams);
        if (this.hookParams.isPreventApply || !this.data.recordIds.length) {
          return;
        }
        let n = this.getApplicator();
        return await n.handleApply();
      });
      let {
        blockManager: f,
        selectionAPI: g
      } = e;
      this.blockManager = f;
      this.selectionAPI = g;
      this.hookParams = this.getInitialHookParams();
      this.applyHook = new docClipboardPasteHandler.DocPasteHandler(f, r, this.hooks);
    }
  }
  require.d(exports, {
    DocPasteHandler: function () {
      return er;
    }
  });
}