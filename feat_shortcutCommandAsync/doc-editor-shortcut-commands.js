// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxShortcutCommandHandler'
// - Resolved require(202794) to 'docx-shortcut-command-handler'
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'r' to 'docBlockEditActions'
// - Resolved require(395667) to 'doc-block-edit-actions'
// - Renamed variable 'd' to 'docEditorCommandConstants'
// - Resolved require(293676) to 'doc-editor-command-constants'
// - Renamed variable 'c' to 'selectionShortcutValidator'
// - Resolved require(338806) to 'selection-shortcut-validator'
// - Renamed variable 'u' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 's' to 'documentBlockOperations'
// - Resolved require(139630) to 'document-block-operations'
// - Renamed variable 'p' to 'documentNodeFoldUtils'
// - Resolved require(454245) to 'document-node-fold-utils'
// - Renamed variable 'f' to 'shortcutCommandHandler'
// - Resolved require(849511) to 'shortcut-command-handler'
// - Renamed variable 'g' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'y' to 'shortcutCommandGuard'
// - Resolved require(11044) to 'shortcut-command-guard'
// - Renamed variable 'v' to 'preAllowEditControllerName'
// - Resolved require(957001) to 'pre-allow-edit-controller-name'
// - Renamed variable 'T' to 'docPreEditChangeIntercept'
// - Resolved require(98436) to 'doc-pre-edit-change-intercept'
// - Renamed variable 'B' to 'bookmarkLinkMetadataProcessor_1'
// - Resolved require(339633) to 'bookmark-link-metadata-processor_1'
// - Renamed variable 'b' to 'docKeyboardEnterHandler'
// - Resolved require(96380) to 'doc-keyboard-enter-handler'
// - Renamed variable 'S' to 'editorRangeUtilities'
// - Resolved require(780600) to 'editor-range-utilities'
// - Renamed variable 'E' to 'shortcutCommandRangeAnalyzer'
// - Resolved require(401210) to 'shortcut-command-range-analyzer'
// - Renamed variable 'I' to 'editorRevisionUtilities'
// - Resolved require(80308) to 'editor-revision-utilities'
// - Renamed variable 'h' to 'editorRevisionUtils'
// - Resolved require(465369) to 'editor-revision-utils'
// - Updated imported property 'KC' to 'shiftArrowLeft' (module 293676)
// - Updated imported property 'tE' to 'shiftArrowRight' (module 293676)
// - Updated imported property 'Xz' to 'commandBackspace' (module 293676)
// - Updated imported property 'uF' to 'commandEnter' (module 293676)
// - Updated imported property 'H0' to 'handleNavSelection' (module 395667)
// - Updated imported property 'cr' to 'handleEnterInsert' (module 395667)
// - Updated imported property 'f' to 'createSelectionShortcutValidator' (module 338806)
// - Updated imported property 'r' to 'createCommandGuard' (module 11044)
// - Updated imported property 'e' to 'executeShortcut' (module 849511)
// - Updated imported property 'Nz' to 'isEditorInstance' (module 469443)
// - Updated imported property '$G' to 'isTextEditable' (module 469443)
// - Updated imported property 'HW' to 'insertBlockWithMarks' (module 469443)
// - Updated imported property '$Y' to 'textBlockTypes' (module 433991)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'v1' to 'headingTypeArray' (module 433991)
// - Updated imported property 'Cl' to 'removeBlockItems' (module 139630)
// - Updated imported property 'J' to 'unfoldBlocks' (module 454245)
// - Updated imported property 'po' to 'ZERO_OFFSET' (module 135760)
// - Updated imported property 'z' to 'preAllowEditProvider' (module 957001)
// - Updated imported property 'id' to 'reportUserOperation' (module 98436)
// - Updated imported property 'Ld' to 'triggerEnterEvent' (module 96380)
// - Updated imported property 'mI' to 'afterEnterHandler' (module 96380)
// - Updated imported property 'F0' to 'isAtStart' (module 780600)
// - Updated imported property 'mL' to 'isAtZoneEnd' (module 780600)
// - Updated imported property 'HF' to 'createRevisionInfo' (module 465369)
// - Updated imported property 'Cz' to 'upsertRevision' (module 465369)
// - Updated imported property 'GV' to 'addRevisionContext' (module 80308)
// - Updated imported property 'I' to 'analyzeSelectionState' (module 401210)
// - Updated imported property 'W' to 'mapCommandData' (module 202794)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 279085
         */
module.exports = function (module, exports, require) {
  var docxShortcutCommandHandler = require("docx-shortcut-command-handler") /*id: 202794*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var selectionShortcutValidator = require("selection-shortcut-validator") /*id: 338806*/;
  let a = () => [[docEditorCommandConstants.shiftArrowLeft, [e => {
    docBlockEditActions.handleNavSelection(e, true);
  }, [selectionShortcutValidator.createSelectionShortcutValidator({
    selection: "cover-start"
  })]]], [docEditorCommandConstants.shiftArrowRight, [e => {
    docBlockEditActions.handleNavSelection(e, false);
  }, [selectionShortcutValidator.createSelectionShortcutValidator({
    selection: "cover-end"
  })]]]];
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var documentNodeFoldUtils = require("document-node-fold-utils") /*id: 454245*/;
  var shortcutCommandHandler = require("shortcut-command-handler") /*id: 849511*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var shortcutCommandGuard = require("shortcut-command-guard") /*id: 11044*/;
  var preAllowEditControllerName = require("pre-allow-edit-controller-name") /*id: 957001*/;
  var docPreEditChangeIntercept = require("doc-pre-edit-change-intercept") /*id: 98436*/;
  var bookmarkLinkMetadataProcessor_1 = require("bookmark-link-metadata-processor_1") /*id: 339633*/;
  let k = shortcutCommandGuard.createCommandGuard();
  let m = () => [[docEditorCommandConstants.commandBackspace, [async e => {
    var i;
    let {
      blockManager: l,
      editorContextService: {
        fold: n,
        viewport: r
      },
      currentTargetViewFilterEmpty: d,
      preventDefault: c
    } = e;
    c();
    let a = d[0];
    shortcutCommandHandler.executeShortcut(e);
    let y = a.record.snapshot.folded ? [a.id] : [];
    let k = l.getBlockModelByBlockId(a.id);
    let {
      previous: m,
      previousSibling: b
    } = k;
    let {
      seq: S,
      seq_level: E
    } = a.record.snapshot;
    if (S) {
      await l.applyTransaction("keyevent:heading:backspace", e => {
        e.remove(a.record.id, ["seq"]);
        if (E) {
          e.remove(a.record.id, ["seq_level"]);
        }
      });
      return;
    }
    if (b) {
      let e = l.getBlockViewByBlockId(b.id);
      if (!a.model.isEmpty && e && editorTextBlockUtilities.isEditorInstance(e) && docBlockTypeConstants.textBlockTypes.includes(e.type) && e.model.isEmpty && b.children.length === 0 && n.isShow(e.id)) {
        await l.applyTransaction("keyevent:heading:backspace", i => {
          documentBlockOperations.removeBlockItems(i, [e.model]);
        });
        return;
      }
    }
    documentNodeFoldUtils.unfoldBlocks((m == null ? undefined : m.id) || docxEditorCore.ZERO_OFFSET, l, y, n, "keyevent:heading:backspace");
    let I = l.editorAPI.getService(preAllowEditControllerName.preAllowEditProvider, {
      optional: true
    });
    let h = k.record;
    if (I && !I.canBlockEditAndTryApply(k.record, k.type, {
      type: "UPDATE_ATTRIBUTE",
      changedKey: "type",
      newValue: "text"
    })) {
      docPreEditChangeIntercept.reportUserOperation({
        op_source: "keyboard",
        op_type: "backspace",
        edit_type: "UPDATE_ATTRIBUTE",
        interceptedRecord: h
      }, l);
      return;
    }
    await ((i = l.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H, {
      optional: true
    })) === null || i === undefined ? undefined : i.handleModelsTurnInto({
      models: [a.model],
      triggerKey: docBlockTypeConstants.blockTypeConstants.TEXT,
      knownContext: {
        toggle: false
      }
    }));
    let w = l.getBlockViewByBlockId(a.id);
    if (!l.layoutManager.isBlockActive(w.id)) {
      await r.scrollToBlock(w.id);
    }
    if (editorTextBlockUtilities.isTextEditable(w)) {
      w.focus();
    }
  }, [selectionShortcutValidator.createSelectionShortcutValidator({
    selection: "start"
  }), k]]]];
  var docKeyboardEnterHandler = require("doc-keyboard-enter-handler") /*id: 96380*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var shortcutCommandRangeAnalyzer = require("shortcut-command-range-analyzer") /*id: 401210*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionUtils = require("editor-revision-utils") /*id: 465369*/;
  let w = shortcutCommandGuard.createCommandGuard();
  let C = () => [[docEditorCommandConstants.commandEnter, [async e => {
    let i = e.currentTargetViewFilterEmpty[0];
    let {
      model: l
    } = i;
    let {
      parent: n
    } = l;
    if (!n || docKeyboardEnterHandler.triggerEnterEvent(i.editor, e.shortcutContext)) {
      return;
    }
    let {
      blockManager: d,
      selectionAPI: c,
      editorContextService: {
        fold: a
      }
    } = e;
    let u = i.record.id;
    let s = a.getFoldStateById(i.id);
    let {
      seq: p,
      seq_level: f
    } = l.record.snapshot;
    let {
      isEmpty: y
    } = i.model;
    let v = i.model.getSelection();
    if (!v) {
      return;
    }
    let T = i.model.zoneState.split(v);
    let B = [T[0].toAttributeText(), T[1].toAttributeText()];
    let k = editorRangeUtilities.isAtStart(v);
    let m = editorRangeUtilities.isAtZoneEnd(v);
    let E = c.isCursor();
    let w = i.model.isSelectingAll() && !E;
    let C = {};
    let [O, A] = editorRevisionUtils.createRevisionInfo(d, c);
    if (O && A) {
      editorRevisionUtilities.addRevisionContext(C, A);
    }
    await d.applyTransaction("keyevent:heading:enter", e => {
      if (k && !w) {
        e.replace(i.record.id, ["text"], B[1]);
        if (y) {
          if (p) {
            e.remove(i.record.id, ["seq"]);
            if (f) {
              e.remove(i.record.id, ["seq_level"]);
            }
          } else {
            let i = {
              text: B[0]
            };
            ({
              newRecordId: u
            } = docBlockEditActions.handleEnterInsert({
              blockManager: d,
              model: l,
              op: e,
              fold: a,
              splitedData: B,
              insertBlockType: docBlockTypeConstants.blockTypeConstants.TEXT,
              args: i
            }));
            if (O) {
              editorRevisionUtils.upsertRevision(d, e, l.record, O);
            }
          }
        } else {
          let {
            type: r
          } = i;
          let c = {
            text: B[0]
          };
          if (p) {
            e.replace(l.recordId, ["seq"], "auto");
            if (f) {
              e.replace(l.recordId, ["seq_level"], "auto");
            }
            c.seq = p;
            c.seq_level = f || "auto";
          }
          let a = d.createSnapshot(p ? r : docBlockTypeConstants.blockTypeConstants.TEXT, c);
          if (O) {
            a.revisions = [O];
          }
          editorTextBlockUtilities.insertBlockWithMarks(e, n.recordId, l.position, a);
        }
      } else {
        let i = {
          text: B[1]
        };
        if (p && ((s == null ? undefined : s.folded) || !m)) {
          i.seq = "auto";
          i.seq_level = "auto";
        }
        ({
          newRecordId: u
        } = docBlockEditActions.handleEnterInsert({
          blockManager: d,
          model: l,
          op: e,
          fold: a,
          splitedData: B,
          insertBlockType: m ? docBlockTypeConstants.blockTypeConstants.TEXT : undefined,
          args: i
        }));
        if (O) {
          editorRevisionUtils.upsertRevision(d, e, l.record, O);
        }
      }
    }, {
      ...C
    });
    let x = d.getBlockViewsByRecordId(u)[0];
    docKeyboardEnterHandler.afterEnterHandler(e, x == null ? undefined : x.id);
  }, [shortcutCommandRangeAnalyzer.analyzeSelectionState, selectionShortcutValidator.createSelectionShortcutValidator(), w]]]];
  let O = () => [...docxShortcutCommandHandler.mapCommandData({
    selectionType: "singleText",
    blockTypes: docBlockTypeConstants.headingTypeArray
  }, [...C(), ...m(), ...a()])];
  var A = O();
  require.r(exports);
  require.d(exports, {
    default: function () {
      return A;
    },
    getAsyncCommandRegisterConfigs: function () {
      return O;
    }
  });
}