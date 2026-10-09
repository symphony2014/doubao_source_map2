// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'PU' to 'handleBlockAction'
// - Renamed export 'dR' to 'setInitialSelection'
// - Renamed export 'qG' to 'updateTextSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 844209
         */
module.exports = function (module, exports, require) {
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  require("doc-block-type-constants") /*id: 433991*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  function d(e, i) {
    return n => {
      let r = e.every(e => e.type === n);
      if (i) {
        return r || e.every(e => i(e, n));
      } else {
        return r;
      }
    };
  }
  function u(e, i) {
    return n => e.every(e => {
      if (!i.hasBlockModelByBlockId(e.id)) {
        return false;
      }
      let r = i.getBlockModelByBlockId(e.id);
      while (r.parent) {
        if (r.type === n) {
          return true;
        }
        r = r.parent;
      }
      return false;
    });
  }
  async function h(e) {
    let {
      assignedSelection: i,
      turnIntoService: n,
      context: d = {},
      isToggle: u,
      triggerKey: h,
      source: g,
      blockManager: p,
      selectionAPI: f,
      blocks: v,
      category: m,
      notNeedUpdateSelectionAfterTurnInto: b
    } = e;
    if (i !== undefined) {
      if (function (e, i) {
        let n = i.getSelection();
        return n.length !== 0 && e.length !== 0 && i.isSingleTextSelection(n) && arrayFirstElement.getFirstElement(n).selection.start === arrayFirstElement.getFirstElement(n).selection.end && arrayFirstElement.getFirstElement(n).id === e[0].id;
      }(i, f)) {
        f.setSelection(docBlockEditActions.getDeleteTargets(f.getSelection(), p));
      } else {
        (function (e, i) {
          if (e && editorTextBlockUtilities.isTextBlock(e)) {
            let n = e.zoneState.totalWidth() - 1;
            i.setSelection([{
              id: e.id,
              type: docxBlockSelectionHandler_1.blockTypes.TEXT,
              selection: {
                start: n,
                end: n
              }
            }]);
          }
        })(arrayFirstElement.getFirstElement(v)?.model ?? null, f);
      }
    }
    let k = f.getSelection();
    let S = docEditorActionMap.blockTransformMap[h];
    docEditorActionMap.collectBlockEvent({
      actionType: S,
      blocks: v,
      blockManager: p,
      source: g,
      category: m,
      click: docEditorActionMap.uiActionTypes.block_action,
      actionObject: docBlockConstants.scopeTypes.BLOCK,
      actionValue: {
        value1: u ? "false" : "true"
      }
    });
    await n.handleTurnInto({
      triggerKey: h,
      knownContext: d,
      selObjects: i
    });
    if (b) {
      f.removeAllSelection();
    } else if (!d.updateSelection && !d.useModelSelection) {
      f.setSelection(k);
    }
  }
  require.d(exports, {
    handleBlockAction: function () {
      return h;
    },
    setInitialSelection: function () {
      return u;
    },
    updateTextSelection: function () {
      return d;
    }
  });
}