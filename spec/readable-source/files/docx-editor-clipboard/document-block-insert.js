// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'insertBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 297162
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var documentBlockInsertHandler = require("document-block-insert-handler") /*id: 285269*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var documentBlockInsertUtil = require("document-block-insert-util") /*id: 907868*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var editorBlockUtilities = require("editor-block-utilities") /*id: 321058*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  let k = async function (e) {
    let o = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let {
      block: r,
      blockManager: i,
      insertblockOptions: a,
      range: s = [0, 0],
      inlineBlockAttributes: c = {},
      transactionOptions: h = {},
      afterTransactionAccepted: g,
      mergeMode: f
    } = e;
    let b = "";
    await i.applyTransaction("insertInlineBlockInTextualBlock", e => {
      let [o, h] = a;
      let g = i.createSnapshot(o, h);
      b = e.create(g);
      let {
        zoneState: m,
        zoneId: f
      } = r.model;
      let k = editorRangeUtilities.createRangeWithZone(m, [s[0], s[1]]);
      let y = editorTextBlockUtilities.getInheritableAttributes(r.model, k);
      let v = new contentStructureDelta.ContentDelta({
        zoneId: f
      }).retain(s[0]).delete(s[1] - s[0]).insert(" ", {
        [displayTypeConstants.displayInlineBlock]: b,
        ...y,
        ...c
      });
      r.model.apply(v, {
        extra: {
          op: e
        }
      });
      flowSyncDeltaOperations.editWithLineManager(e, r.record, r.model.zoneState.toAttributeText());
    }, {
      ...h,
      afterTransactionAccepted: () => {
        if (b) {
          if (g != null) {
            g(b);
          }
        }
      },
      mergeMode: f
    });
    if (o) {
      let e = editorRangeUtilities.getStartLenArray(editorZoneRangeUtils.createEditorRange(r, {
        [displayTypeConstants.displayInlineBlock]: b
      }));
      r.model.setSelection({
        start: e[0] + 1,
        len: 0
      }, true);
    }
    return b;
  };
  async function y(e) {
    let {
      block: o,
      blockManager: r,
      mark: n,
      isAppend: i,
      insertblockOptions: l,
      range: d,
      afterTransactionAccepted: u,
      transactionName: p,
      transactionOptions: g,
      focusType: m,
      useTempTransaction: k
    } = e;
    let y = o.model.parent;
    if (!y) {
      editorBlockUtilities.logInsertBlockFailure(docxEditorConstantsConfig_1.noBlockConstants.NO_PARENT, r);
      return;
    }
    let v = editorBlockUtilities.getAdjustedMarkRange(o, undefined, d, n);
    let E = !i && editorBlockUtilities.shouldShowPlaceholder(o, v);
    let T = [];
    let I = k ? e => {
      let {
        op: o,
        blockOps: n
      } = e;
      let [i] = n;
      let [a, s, d] = l;
      let u = d || r.createSnapshot(a, s);
      let p = o.createChildren([u].map(e => Object.assign({
        parent_id: i
      }, e)));
      T = docTempTransactionManager.getSecPartyMounts({
        parentRecord: y.record,
        op: o,
        secondPartyRecordIds: p
      });
      return {
        createRecordIds: p,
        focusRecordId: p[0]
      };
    } : e => {
      let {
        op: o,
        blockOps: n
      } = e;
      let [i,, s] = n;
      let [c, d, u] = l;
      let p = u || r.createSnapshot(c, d);
      let h = documentBlockOperations.insertNewChildren(o, i, s, [p]);
      return {
        createRecordIds: h,
        focusRecordId: h[0]
      };
    };
    let _ = k ? e => {
      let {
        parentRecordId: o,
        position: n
      } = e;
      docTempTransactionManager.execSecondPartyTx({
        secondPartyBlockTempTransactionInfos: T,
        blockManager: r,
        parentRecordId: o,
        position: n
      });
    } : undefined;
    let [R] = await documentBlockInsertHandler.calculateFocusTarget({
      block: o,
      parentModel: y,
      eRange: v,
      isCurrentLine: E,
      isClearRange: true,
      focusType: m || blockFocusStates.focusStates.NEXT_LINE_FOCUS,
      createDataCallback: I,
      afterTransactionApplied: _,
      afterTransactionAccepted: u,
      transactionName: p,
      transactionOptions: g
    });
    return R;
  }
  async function v(e) {
    let {
      block: o,
      blockManager: r,
      insertblockOptions: n,
      afterTransactionAccepted: i,
      transactionName: a,
      transactionOptions: l,
      replaceSelection: s
    } = e;
    let [c, d, u] = n;
    let p = await documentBlockInsertUtil.insertBlocks({
      blocks: [o],
      blockManager: r,
      newBlockType: c,
      options: d,
      afterTransactionAccepted: i,
      blockData: u,
      replaceSelection: s,
      transactionName: a,
      transactionOptions: l
    });
    if (p == null) {
      return undefined;
    } else {
      return p.id;
    }
  }
  async function E(e) {
    if (!docxBlockUtils_1.isTextBlock(e.block) || e.replaceSelection) {
      return v(e);
    }
    if (e.isInlineBlock) {
      let o = await k(e);
      return e.blockManager.getBlockIdsByRecordId(o)[0];
    }
    return y(e);
  }
  require.d(exports, {
    insertBlock: function () {
      return E;
    }
  });
}