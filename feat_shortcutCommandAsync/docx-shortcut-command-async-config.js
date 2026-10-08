// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxShortcutCommandHandler'
// - Resolved require(202794) to 'docx-shortcut-command-handler'
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'r' to 'docxBlockUtils_1'
// - Resolved require(138224) to 'docx-block-utils_1'
// - Renamed variable 'd' to 'documentBlockOperations'
// - Resolved require(139630) to 'document-block-operations'
// - Renamed variable 'c' to 'shortcutCommandAsyncHandlers'
// - Resolved require(347858) to 'shortcut-command-async-handlers'
// - Renamed variable 'a' to 'tableLayoutConstants_1'
// - Resolved require(673543) to 'table-layout-constants_1'
// - Renamed variable 'u' to 'tableActionHelper'
// - Resolved require(826304) to 'table-action-helper'
// - Renamed variable 's' to 'docEditorCommandConstants'
// - Resolved require(293676) to 'doc-editor-command-constants'
// - Renamed variable 'p' to 'docxShortcutCommandUtils'
// - Resolved require(804220) to 'docx-shortcut-command-utils'
// - Renamed variable 'f' to 'editorRevisionHandlers'
// - Resolved require(977441) to 'editor-revision-handlers'
// - Renamed variable 'y' to 'docxEditorSelectionUtils'
// - Resolved require(258370) to 'docx-editor-selection-utils'
// - Renamed variable 'T' to 'docxEditorConstantsConfig'
// - Resolved require(302915) to 'docx-editor-constants-config'
// - Renamed variable 'B' to 'applyDeleteRevisionTransaction'
// - Resolved require(904375) to 'apply-delete-revision-transaction'
// - Renamed variable 'k' to 'docxEditorEventConstantsAndManager'
// - Resolved require(267720) to 'docx-editor-event-constants-and-manager'
// - Renamed variable 'S' to 'tableBlockKeyEvents'
// - Resolved require(753891) to 'table-block-key-events'
// - Renamed variable 'E' to 'docxTableLayoutUtils'
// - Resolved require(163702) to 'docx-table-layout-utils'
// - Renamed variable 'I' to 'shortcutCommandGuard'
// - Resolved require(11044) to 'shortcut-command-guard'
// - Renamed variable 'O' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'A' to 'shortcutCommandRangeAnalyzer'
// - Resolved require(401210) to 'shortcut-command-range-analyzer'
// - Renamed variable 'x' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Renamed variable 'L' to 'docxEditorConstantsConfig_1'
// - Resolved require(914193) to 'docx-editor-constants-config_1'
// - Updated imported property 'vp' to 'addTableCommand' (module 293676)
// - Updated imported property 'zH' to 'textAlignLeft' (module 293676)
// - Updated imported property 'i9' to 'textAlignCenter' (module 293676)
// - Updated imported property 'Ou' to 'textAlignRight' (module 293676)
// - Updated imported property 'Xz' to 'commandBackspace' (module 293676)
// - Updated imported property 'xe' to 'commandDelete' (module 293676)
// - Updated imported property 'Pl' to 'boldCommand' (module 293676)
// - Updated imported property 'KW' to 'italicCommand' (module 293676)
// - Updated imported property '$5' to 'underlineCommand' (module 293676)
// - Updated imported property 'HJ' to 'strikethroughCommand' (module 293676)
// - Updated imported property 'uF' to 'commandEnter' (module 293676)
// - Updated imported property 'zF' to 'inlineCodeCommand' (module 293676)
// - Updated imported property 'g7' to 'commandTab' (module 293676)
// - Updated imported property 'wT' to 'unTabCommand' (module 293676)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Mx' to 'quoteBlockTypes' (module 433991)
// - Updated imported property 'J' to 'alignmentConstants' (module 433991)
// - Updated imported property 'Xg' to 'hasParentOfBlockType' (module 138224)
// - Updated imported property 'pt' to 'insertBlockChildren' (module 804220)
// - Updated imported property 'd7' to 'handleAddRevision' (module 977441)
// - Updated imported property 'bv' to 'headerPropertyObj' (module 673543)
// - Updated imported property 'Cl' to 'removeBlockItems' (module 139630)
// - Updated imported property 'Mw' to 'insertTable' (module 826304)
// - Updated imported property 'iD' to 'createTextBlockInCell' (module 826304)
// - Updated imported property 'cU' to 'shortcutCommandGuardInstance' (module 347858)
// - Updated imported property 'GV' to 'changeTextAlign' (module 258370)
// - Updated imported property 'W' to 'applyDeleteRevisionTransaction' (module 904375)
// - Updated imported property 'BX' to 'globalEventEmitter' (module 267720)
// - Updated imported property 'P1' to 'updateClearStatus' (module 302915)
// - Updated imported property 'r' to 'createCommandGuard' (module 11044)
// - Updated imported property 'ce' to 'findAgendaCodeTypes' (module 163702)
// - Updated imported property 'Rj' to 'checkBlockFormat' (module 753891)
// - Updated imported property 'i$' to 'handleTableKeyEvent' (module 753891)
// - Updated imported property '$G' to 'isTextEditable' (module 469443)
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'I' to 'analyzeSelectionState' (module 401210)
// - Updated imported property 'tM' to 'equationRendererKey' (module 914193)
// - Updated imported property 'W' to 'mapCommandData' (module 202794)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 655782
         */
module.exports = function (module, exports, require) {
  var docxShortcutCommandHandler = require("docx-shortcut-command-handler") /*id: 202794*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var shortcutCommandAsyncHandlers = require("shortcut-command-async-handlers") /*id: 347858*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var tableActionHelper = require("table-action-helper") /*id: 826304*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var docxShortcutCommandUtils = require("docx-shortcut-command-utils") /*id: 804220*/;
  var editorRevisionHandlers = require("editor-revision-handlers") /*id: 977441*/;
  let g = () => [[docEditorCommandConstants.addTableCommand, [async e => {
    let {
      blockManager: i,
      preventDefaultAndStopEventImmediate: l,
      currentTargetViewFilterEmpty: n
    } = e;
    l();
    let c = n[0];
    let s = [docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.AGENDA];
    if (docxBlockUtils_1.hasParentOfBlockType(n[0].id, i, s)) {
      return;
    }
    let g = await docxShortcutCommandUtils.insertBlockChildren("addTable", n, i.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT), e);
    if (!g) {
      return;
    }
    if (!i.hasBlockViewByBlockId(g)) {
      await i.layoutManager.renderNodeById(g);
    }
    let y = i.getBlockViewByBlockId(g);
    let v = {};
    let T = {};
    editorRevisionHandlers.handleAddRevision(i, v, T);
    let B = {
      blockManager: i,
      block: y,
      options: {
        column: 2,
        row: 2,
        ...tableLayoutConstants_1.headerPropertyObj
      },
      revisions: v.revisions,
      transactionOptions: T
    };
    Object.assign(B, {
      beforeInsert: (e, i) => {
        let {
          model: l
        } = i;
        documentBlockOperations.removeBlockItems(e, [l]);
      }
    });
    let {
      model: k
    } = c;
    let {
      isEmpty: m,
      type: b,
      children: S
    } = k;
    let E = !!S.length;
    if (m && !E && docBlockTypeConstants.quoteBlockTypes.includes(b)) {
      i.applyTransaction("removeEmptyLine", e => {
        documentBlockOperations.removeBlockItems(e, [c.model]);
      });
    }
    await tableActionHelper.insertTable(B);
  }, [shortcutCommandAsyncHandlers.shortcutCommandGuardInstance]]]];
  var docxEditorSelectionUtils = require("docx-editor-selection-utils") /*id: 258370*/;
  let v = () => [[docEditorCommandConstants.textAlignLeft, [e => {
    e.preventDefault();
    docxEditorSelectionUtils.changeTextAlign(e, docBlockTypeConstants.alignmentConstants.LEFT);
  }, [shortcutCommandAsyncHandlers.shortcutCommandGuardInstance]]], [docEditorCommandConstants.textAlignCenter, [e => {
    e.preventDefault();
    docxEditorSelectionUtils.changeTextAlign(e, docBlockTypeConstants.alignmentConstants.CENTER);
  }, [shortcutCommandAsyncHandlers.shortcutCommandGuardInstance]]], [docEditorCommandConstants.textAlignRight, [e => {
    e.preventDefault();
    docxEditorSelectionUtils.changeTextAlign(e, docBlockTypeConstants.alignmentConstants.RIGHT);
  }, [shortcutCommandAsyncHandlers.shortcutCommandGuardInstance]]]];
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var applyDeleteRevisionTransaction = require("apply-delete-revision-transaction") /*id: 904375*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  async function m(e) {
    let {
      currentTargetViewFilterEmpty: i,
      blockManager: l,
      preventDefault: n,
      selectionAPI: o
    } = e;
    let r = [];
    n();
    i.forEach(e => {
      r.push(...l.getBlockModelByBlockId(e.id).children.map(e => e.id));
    });
    let c = "keyevent:text:backspace";
    if (!(await applyDeleteRevisionTransaction.applyDeleteRevisionTransaction(l, o, [i[0]], c))) {
      l.applyTransaction(c, e => documentBlockOperations.removeBlockItems(e, r, l));
      docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorConstantsConfig.updateClearStatus);
    }
  }
  let b = () => [[docEditorCommandConstants.commandBackspace, [m, [shortcutCommandAsyncHandlers.shortcutCommandGuardInstance]]], [docEditorCommandConstants.commandDelete, [m, [shortcutCommandAsyncHandlers.shortcutCommandGuardInstance]]]];
  var tableBlockKeyEvents = require("table-block-key-events") /*id: 753891*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var shortcutCommandGuard = require("shortcut-command-guard") /*id: 11044*/;
  let h = shortcutCommandGuard.createCommandGuard();
  function w(e, i) {
    let {
      blockManager: l,
      currentTargetViewFilterEmpty: n
    } = e;
    let o = docxTableLayoutUtils.findAgendaCodeTypes(n, l);
    tableBlockKeyEvents.checkBlockFormat(e, o, i);
  }
  let C = () => [[docEditorCommandConstants.boldCommand, [e => {
    e.preventDefault();
    w(e, "bold");
  }, [h]]], [docEditorCommandConstants.italicCommand, [e => {
    e.preventDefault();
    w(e, "italic");
  }, [h]]], [docEditorCommandConstants.underlineCommand, [e => {
    e.preventDefault();
    w(e, "underline");
  }, [h]]], [docEditorCommandConstants.strikethroughCommand, [e => {
    w(e, "strikethrough");
  }, [h]]]];
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var shortcutCommandRangeAnalyzer = require("shortcut-command-range-analyzer") /*id: 401210*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  let _ = () => [[docEditorCommandConstants.commandEnter, [async e => {
    let i;
    let {
      currentTargetViewFilterEmpty: l,
      blockManager: n,
      selectionAPI: o,
      preventDefault: r
    } = e;
    r();
    let d = l[0];
    let c = n.getBlockModelByBlockId(d.id);
    let a = "keyevent:table:enter";
    if (!(await applyDeleteRevisionTransaction.applyDeleteRevisionTransaction(n, o, [d], a)) && (await n.applyTransaction(a, e => {
      i = tableActionHelper.createTextBlockInCell(e, c.record.id);
    }), i)) {
      let e = n.getBlockIdsByRecordId(i)[0];
      if (n.hasBlockViewByBlockId(e)) {
        let i = n.getBlockViewByBlockIdNotCheck(e);
        if (editorTextBlockUtilities.isTextEditable(i)) {
          o.setSelection([{
            type: docxBlockSelectionHandler_1.blockTypes.TEXT,
            id: i.id,
            selection: {
              start: 0,
              end: 0
            }
          }]);
        }
      }
    }
  }, [shortcutCommandRangeAnalyzer.analyzeSelectionState, shortcutCommandAsyncHandlers.shortcutCommandGuardInstance]]]];
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  let M = shortcutCommandGuard.createCommandGuard();
  let R = () => [[docEditorCommandConstants.inlineCodeCommand, [e => {
    let {
      blockManager: i,
      currentTargetViewFilterEmpty: l
    } = e;
    let n = docxTableLayoutUtils.findAgendaCodeTypes(l, i).filter(e => editorTextBlockUtilities.isTextEditable(e));
    tableBlockKeyEvents.checkBlockFormat(e, n, "inlineCode", "true", docxEditorConstantsConfig_1.equationRendererKey);
  }, [M]]]];
  let P = () => [[docEditorCommandConstants.commandTab, [async e => tableBlockKeyEvents.handleTableKeyEvent({
    ctx: e,
    forward: true,
    isVertical: false,
    canAppendRow: true
  })]], [docEditorCommandConstants.unTabCommand, [async e => tableBlockKeyEvents.handleTableKeyEvent({
    ctx: e,
    forward: false,
    isVertical: false
  })]]];
  let U = () => [...docxShortcutCommandHandler.mapCommandData({
    selectionType: "block",
    blockType: docBlockTypeConstants.blockTypeConstants.CELL
  }, [...v(), ...C(), ..._(), ...b(), ...R(), ...P()]), ...g()];
  var N = U();
  require.r(exports);
  require.d(exports, {
    default: function () {
      return N;
    },
    getAsyncCommandRegisterConfigs: function () {
      return U;
    }
  });
}