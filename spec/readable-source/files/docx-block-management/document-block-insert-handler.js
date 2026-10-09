// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'calculateFocusTarget'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 285269
         */
module.exports = function (module, exports, require) {
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var changeSourceConstants = require("change-source-constants") /*id: 363583*/;
  var editorRevisionManager = require("editor-revision-manager") /*id: 835310*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var documentBlockInsertUtil = require("document-block-insert-util") /*id: 907868*/;
  var editorBlockUtilities = require("editor-block-utilities") /*id: 321058*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  let f = e => [docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN].includes(e);
  let v = async (e, n, i, o, l) => {
    let a = e === blockFocusStates.focusStates.CONTAINER_BLOCK_FOCUS;
    let d = e === blockFocusStates.focusStates.BLOCK_SELECTED;
    if ((a || d) && l) {
      return n.getBlockIdsByRecordId(l)[0];
    }
    let s = i.id;
    if (a) {
      var v;
      let e = n.getBlockModelByBlockIdNotCheck(s);
      if (e == null) {
        return undefined;
      } else if ((v = e.children[0]) === null || v === undefined) {
        return undefined;
      } else {
        return v.children[0]?.id;
      }
    }
    let p = i == null ? undefined : i.model.nextSibling;
    let g = p && n.getBlockViewByBlockIdNotCheck(p.id);
    let m = g && editorTextBlockUtilities.isTextEditable(g);
    let S = e === blockFocusStates.focusStates.NEXT_LINE_FOCUS;
    let y = !m && S || f(o.type) && o.children[o.children.length - 1].id === i.id ? await documentBlockInsertUtil.insertBlocks({
      blockManager: n,
      blocks: [i],
      newBlockType: "text",
      autoFocus: false
    }) : null;
    if (e === blockFocusStates.focusStates.NO_FOCUS) {
      return undefined;
    } else if (y && e === blockFocusStates.focusStates.NEXT_LINE_FOCUS) {
      return y.id;
    } else if (m && e === blockFocusStates.focusStates.NEXT_LINE_FOCUS && g) {
      return g.id;
    } else {
      return undefined;
    }
  };
  let p = async (e, n, i, o) => {
    let [l,, r, a] = e;
    if (!n.hasBlockViewByBlockId(l)) {
      n.eventEmitter.dispatch(renderEventConstants.activeNodeActions.ADD, l);
      await n.layoutManager.waitForNextPaint();
    }
    await n.layoutManager.scrollToSelection(l);
    let d = n.getBlockViewByBlockIdNotCheck(l);
    if (!d) {
      return;
    }
    let c = await v(r, n, d, i, o);
    let f = r !== blockFocusStates.focusStates.BLOCK_SELECTED;
    editorBlockUtilities.focusBlockOrSetSelection(n, r, c, f, a);
  };
  let g = async e => {
    let n;
    let {
      block: i,
      parentModel: l,
      isCurrentLine: s,
      isClearRange: c,
      eRange: u,
      focusType: h,
      childRecordIds: f,
      transactionOptions: v = {}
    } = e;
    let {
      blockManager: g,
      record: {
        id: m
      },
      id: S
    } = i;
    let y = [];
    let w = l.record.id;
    let I = "insertBlockAtRange";
    let B = e.transactionName || I;
    let k = (f || !s) && c && editorTextBlockUtilities.isTextEditable(i);
    if (k) {
      editorRevisionManager.getRevisionEntities(i, u, v);
    }
    let b = e.position || (s ? i.model.position : i.model.position + 1);
    let C = g.applyTransaction(B, l => {
      if (k) {
        let {
          zoneState: e
        } = i.model;
        let n = e.remove(u).toAttributeText();
        l.replace(i.record.id, ["text"], n);
      }
      if (f) {
        let e = f.map(e => g.getBlockIdsByRecordId(e)[0]);
        documentBlockOperations.removeBlockItems(l, e, g);
      }
      if (s && !f) {
        documentBlockOperations.removeBlockItems(l, [S], g);
      }
      let {
        createDataCallback: r,
        blockData: a
      } = e;
      if (a) {
        y = documentBlockOperations.insertNewChildren(l, w, b, [a]);
      } else if (r) {
        let {
          createRecordIds: e,
          focusRecordId: i
        } = r({
          op: l,
          blockOps: [w, m, b],
          childRecordIds: f
        });
        y = e;
        n = i;
      }
    }, {
      afterTransactionAccepted: () => {
        var n;
        if ((n = e.afterTransactionAccepted) !== null && n !== undefined) {
          n.call(e, y[0]);
        }
      },
      ...v,
      source: B === I ? changeSourceConstants.changeSourceConstants.LOCAL_INSERT : undefined
    });
    if (e.afterTransactionApplied) {
      e.afterTransactionApplied({
        parentRecordId: w,
        position: b,
        newRecordIds: y
      });
    }
    await C;
    let E = y[y.length - 1];
    let _ = g.getBlockIdsByRecordId(E)[0];
    await p([_, y, h, u], g, l, n);
    return [_, y];
  };
  require.d(exports, {
    calculateFocusTarget: function () {
      return g;
    }
  });
}