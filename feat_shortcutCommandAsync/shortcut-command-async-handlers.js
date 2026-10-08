// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T_' to 'selectBlockOrBoundary'
// - Renamed export 'Un' to 'getAdjacentSiblingInPath'
// - Renamed export 'Vv' to 'applyTextAlignment'
// - Renamed export 'cU' to 'shortcutCommandGuardInstance'
// - Renamed export 'ci' to 'handleArrowDownInBlock'
// - Renamed export 'dJ' to 'selectionShortcutValidatorInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 347858
         */
module.exports = function (module, exports, require) {
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var editorSelectionTraversalUtils = require("editor-selection-traversal-utils") /*id: 71322*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockSelectionValidation = require("block-selection-validation") /*id: 72949*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var shortcutCommandGuard = require("shortcut-command-guard") /*id: 11044*/;
  var selectionShortcutValidator = require("selection-shortcut-validator") /*id: 338806*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var translationEnums = require("translation-enums") /*id: 421780*/;
  var docTranslationStateChecker = require("doc-translation-state-checker") /*id: 564082*/;
  let v = selectionShortcutValidator.createSelectionShortcutValidator();
  let T = shortcutCommandGuard.createCommandGuard();
  function B(e, i) {
    let l = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let n = i.getBlockViewByBlockId(e.id);
    if (n.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
      editorSelectionTraversalUtils.getTableSelection(n, i, true, l);
    } else {
      editorSelectionTraversalUtils.getBoundaryBlock(n, i, true, l);
    }
  }
  function k(e, i) {
    let l = i.getBlockModelByBlockId(e.id);
    let o = docTranslationStateChecker.isFullTranslation(i) ? syncedTranslationBlockUtils.getTranslationData(l.children[0], translationEnums.navigationDir.next) : l.children[0];
    if (o) {
      B(o, i, true);
    } else {
      let l = +!!docTranslationStateChecker.isFullTranslation(i);
      i.applyTransaction("keyevent:root:arrowdown", o => {
        documentBlockOperations.insertNewChildren(o, e.record.id, l, [i.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT)]);
      }).then(() => {
        let n = i.getBlockViewByBlockId(e.model.children[l].id);
        if (editorTextBlockUtilities.isTextEditable(n)) {
          n.model.setSelection({
            start: 0,
            len: 0
          }, true);
        }
      }).catch(e => {});
    }
  }
  function m(e) {
    let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let l = e.currentTarget[0];
    let n = e.target[i ? e.target.length - 1 : 0];
    let o = e.blockManager.getBlockPath(n.id);
    o.push(n.id);
    let r = o.indexOf(l.id);
    let d = o[r + 1];
    if (!d) {
      return null;
    }
    let c = e.blockManager.getBlockModelByBlockId(d);
    if (i) {
      return c.nextSibling;
    } else {
      return c.previousSibling;
    }
  }
  function b(e, i) {
    let {
      currentTargetViewFilterEmpty: l,
      preventDefault: n,
      blockManager: o,
      editorContextService: {
        fold: d
      }
    } = e;
    let a = l[0];
    n();
    let u = [blockSelectionValidation.excludeSpecialTypes({
      blocks: [o.getBlockModelByBlockId(a.id)],
      blockManager: o,
      recursive: true,
      fold: d
    })[0]];
    o.applyTransaction("blockTextAlign", e => {
      u.forEach(l => e.replace(l.record.id, ["align"], i));
    });
    docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorConstantsConfig_1.textToolbarConstants.TEXT_TOOLBAR);
  }
  require.d(exports, {
    selectBlockOrBoundary: function () {
      return B;
    },
    getAdjacentSiblingInPath: function () {
      return m;
    },
    applyTextAlignment: function () {
      return b;
    },
    shortcutCommandGuardInstance: function () {
      return T;
    },
    handleArrowDownInBlock: function () {
      return k;
    },
    selectionShortcutValidatorInstance: function () {
      return v;
    }
  });
}