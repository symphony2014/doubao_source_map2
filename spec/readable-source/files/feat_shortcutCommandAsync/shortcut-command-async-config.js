// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxShortcutCommandHandler'
// - Resolved require(202794) to 'docx-shortcut-command-handler'
// - Renamed variable 'o' to 'docEditorCommandConstants'
// - Resolved require(293676) to 'doc-editor-command-constants'
// - Renamed variable 'r' to 'selectionShortcutValidator'
// - Resolved require(338806) to 'selection-shortcut-validator'
// - Renamed variable 'd' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Renamed variable 'u' to 'shortcutCommandGuard'
// - Resolved require(11044) to 'shortcut-command-guard'
// - Renamed variable 'f' to 'docStructEnums'
// - Resolved require(577678) to 'doc-struct-enums'
// - Renamed variable 'g' to 'blockNavigationHandlers'
// - Resolved require(225248) to 'block-navigation-handlers'
// - Renamed variable 'y' to 'docBlockEditActions'
// - Resolved require(395667) to 'doc-block-edit-actions'
// - Renamed variable 'k' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'm' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'b' to 'docKeyboardEnterHandler'
// - Resolved require(96380) to 'doc-keyboard-enter-handler'
// - Renamed variable 'S' to 'shortcutCommandRangeAnalyzer'
// - Resolved require(401210) to 'shortcut-command-range-analyzer'
// - Renamed variable 'w' to 'editorRangeUtilities'
// - Resolved require(780600) to 'editor-range-utilities'
// - Renamed variable 'x' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'f' to 'createSelectionShortcutValidator' (module 338806)
// - Updated imported property 'zG' to 'shiftArrowDown' (module 293676)
// - Updated imported property 'TG' to 'shiftArrowUp' (module 293676)
// - Updated imported property 'Xz' to 'commandBackspace' (module 293676)
// - Updated imported property 'S$' to 'cursorUpCommand' (module 293676)
// - Updated imported property 'wE' to 'ctrlUp' (module 293676)
// - Updated imported property 'uF' to 'commandEnter' (module 293676)
// - Updated imported property 'YC' to 'shiftEnterCommand' (module 293676)
// - Updated imported property 'rJ' to 'locateToStartCommand' (module 293676)
// - Updated imported property 'OS' to 'locateToEndCommand' (module 293676)
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'Fs' to 'commandTypes' (module 801350)
// - Updated imported property 'r' to 'createCommandGuard' (module 11044)
// - Updated imported property 'ai' to 'handleUpArrow' (module 225248)
// - Updated imported property 'C0' to 'checkBlockAction' (module 395667)
// - Updated imported property 'M0' to 'resolveNavTarget' (module 395667)
// - Updated imported property 'u1' to 'DirectionType' (module 577678)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'I' to 'analyzeSelectionState' (module 401210)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'nq' to 'handleEnterStandard' (module 96380)
// - Updated imported property 'mL' to 'isAtZoneEnd' (module 780600)
// - Updated imported property 'F0' to 'isAtStart' (module 780600)
// - Updated imported property 'W' to 'mapCommandData' (module 202794)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 340063
         */
module.exports = function (module, exports, require) {
  var docxShortcutCommandHandler = require("docx-shortcut-command-handler") /*id: 202794*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var selectionShortcutValidator = require("selection-shortcut-validator") /*id: 338806*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  let c = selectionShortcutValidator.createSelectionShortcutValidator();
  let a = () => [[docEditorCommandConstants.shiftArrowDown, [e => {
    let {
      currentTargetViewFilterEmpty: i,
      selectionAPI: l
    } = e;
    let n = i[0];
    let o = n.model.getSelection();
    if (!o) {
      return;
    }
    let {
      zoneState: r
    } = n.model;
    let {
      lines: c
    } = r;
    let {
      line: a
    } = o.end;
    if (a === c.length - 1) {
      l.setSelection([{
        id: n.id,
        type: docxBlockSelectionHandler_1.blockTypes.BLOCK
      }]);
    }
  }, [c]]], [docEditorCommandConstants.shiftArrowUp, [e => {
    let {
      currentTargetViewFilterEmpty: i,
      selectionAPI: l
    } = e;
    let n = i[0];
    let o = n.model.getSelection();
    if (!o) {
      return;
    }
    let {
      line: r
    } = o.start;
    if (r === 0) {
      l.setSelection([{
        id: n.id,
        type: docxBlockSelectionHandler_1.blockTypes.BLOCK
      }]);
    }
  }, [c]]]];
  var shortcutCommandGuard = require("shortcut-command-guard") /*id: 11044*/;
  let s = shortcutCommandGuard.createCommandGuard();
  let p = () => [[docEditorCommandConstants.commandBackspace, [async e => {
    var i;
    let {
      currentTargetViewFilterEmpty: l,
      selectionAPI: n
    } = e;
    let o = l[0];
    let r = o.model.getSelection();
    if (!r || ((i = o.editor) === null || i === undefined ? undefined : i.getStatus("isComposing"))) {
      return;
    }
    let {
      offset: c,
      line: a
    } = r.start;
    let {
      zoneState: u
    } = o.model;
    let s = u.getLine(0);
    if (a === 0 && c === 0 && s && r.isCollapsed()) {
      n.setSelection([{
        type: docxBlockSelectionHandler_1.blockTypes.BLOCK,
        id: o.id
      }], {
        source: docxBlockSelectionHandler_1.commandTypes.Backspace
      });
    }
  }, [s]]]];
  var docStructEnums = require("doc-struct-enums") /*id: 577678*/;
  var blockNavigationHandlers = require("block-navigation-handlers") /*id: 225248*/;
  var docBlockEditActions = require("doc-block-edit-actions") /*id: 395667*/;
  let v = selectionShortcutValidator.createSelectionShortcutValidator();
  async function T(e) {
    let {
      currentTargetViewFilterEmpty: i
    } = e;
    let l = i[0];
    let n = l.model.getSelection();
    if (!n) {
      return;
    }
    let {
      offset: o,
      line: r
    } = n.start;
    let {
      zoneState: d
    } = l.model;
    let c = d.getLine(0);
    if (r !== 0 || !c || !n.isCollapsed() || o !== c.length() - 1) {
      return blockNavigationHandlers.handleUpArrow(e);
    }
    {
      if (!docBlockEditActions.checkBlockAction(e, false)) {
        return e.shouldPropagation();
      }
      let i = e.currentTarget[0];
      docBlockEditActions.resolveNavTarget(e, i, docStructEnums.DirectionType.UP);
      e.preventDefault();
    }
  }
  let B = () => [[docEditorCommandConstants.cursorUpCommand, [T, [v]]], [docEditorCommandConstants.ctrlUp, [T, [v]]]];
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docKeyboardEnterHandler = require("doc-keyboard-enter-handler") /*id: 96380*/;
  var shortcutCommandRangeAnalyzer = require("shortcut-command-range-analyzer") /*id: 401210*/;
  let E = shortcutCommandGuard.createCommandGuard();
  let I = selectionShortcutValidator.createSelectionShortcutValidator();
  let h = () => [[docEditorCommandConstants.commandEnter, [emptyExportFunction.emptyFunction, [shortcutCommandRangeAnalyzer.analyzeSelectionState, E]]], [docEditorCommandConstants.shiftEnterCommand, [async e => {
    if (browserEnvironmentDetectionUtils.browserDetector.isIOS) {
      await docKeyboardEnterHandler.handleEnterStandard(e);
    }
  }, [I, E]]]];
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  let C = shortcutCommandGuard.createCommandGuard();
  function O(e, i) {
    let {
      preventDefault: l,
      shouldPropagation: n,
      selectionAPI: o,
      currentTargetModelFilterEmpty: r
    } = e;
    l();
    let c = r[0];
    let a = c.getSelection();
    let u = a && editorRangeUtilities.isAtZoneEnd(a);
    if (i) {
      u = a && editorRangeUtilities.isAtStart(a);
    }
    if (u) {
      return n();
    }
    let s = c.zoneState.totalWidth() - 1;
    if (i) {
      s = 0;
    }
    o.setSelection([{
      type: docxBlockSelectionHandler_1.blockTypes.TEXT,
      id: c.id,
      selection: {
        start: s,
        end: s
      }
    }]);
  }
  let A = () => [[docEditorCommandConstants.locateToStartCommand, [e => O(e, true), [C]]], [docEditorCommandConstants.locateToEndCommand, [e => O(e, false), [C]]]];
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let _ = () => [...docxShortcutCommandHandler.mapCommandData({
    selectionType: "singleText",
    blockType: docBlockTypeConstants.blockTypeConstants.CODE
  }, [...B(), ...p(), ...a(), ...A(), ...h()])];
  var L = _();
  require.r(exports);
  require.d(exports, {
    default: function () {
      return L;
    },
    getAsyncCommandRegisterConfigs: function () {
      return _;
    }
  });
}