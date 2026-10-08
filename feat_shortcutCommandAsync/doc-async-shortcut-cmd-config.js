// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxShortcutCommandHandler'
// - Resolved require(202794) to 'docx-shortcut-command-handler'
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'r' to 'docEnterKeyboardHandler'
// - Resolved require(519795) to 'doc-enter-keyboard-handler'
// - Renamed variable 'd' to 'docEditorCommandConstants'
// - Resolved require(293676) to 'doc-editor-command-constants'
// - Renamed variable 'c' to 'shortcutCommandGuard'
// - Resolved require(11044) to 'shortcut-command-guard'
// - Renamed variable 'a' to 'selectionShortcutValidator'
// - Resolved require(338806) to 'selection-shortcut-validator'
// - Renamed variable 'p' to 'shortcutCommandRangeAnalyzer'
// - Resolved require(401210) to 'shortcut-command-range-analyzer'
// - Renamed variable 'y' to 'editorRevisionUtilities'
// - Resolved require(80308) to 'editor-revision-utilities'
// - Renamed variable 'v' to 'editorFormatRevisionUtils_1'
// - Resolved require(638641) to 'editor-format-revision-utils_1'
// - Updated imported property 'r' to 'createCommandGuard' (module 11044)
// - Updated imported property 'Xz' to 'commandBackspace' (module 293676)
// - Updated imported property 'uF' to 'commandEnter' (module 293676)
// - Updated imported property 'PW' to 'toggleTaskCommand' (module 293676)
// - Updated imported property 'u' to 'handleShortcutEnter' (module 519795)
// - Updated imported property 'e' to 'handleEnterKey' (module 519795)
// - Updated imported property 'f' to 'createSelectionShortcutValidator' (module 338806)
// - Updated imported property 'I' to 'analyzeSelectionState' (module 401210)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Be' to 'getBlockFormatRev' (module 638641)
// - Updated imported property 'BY' to 'syncFormatRevision' (module 638641)
// - Updated imported property 'GV' to 'addRevisionContext' (module 80308)
// - Updated imported property 'W' to 'mapCommandData' (module 202794)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 51669
         */
module.exports = function (module, exports, require) {
  var docxShortcutCommandHandler = require("docx-shortcut-command-handler") /*id: 202794*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docEnterKeyboardHandler = require("doc-enter-keyboard-handler") /*id: 519795*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var shortcutCommandGuard = require("shortcut-command-guard") /*id: 11044*/;
  var selectionShortcutValidator = require("selection-shortcut-validator") /*id: 338806*/;
  let u = shortcutCommandGuard.createCommandGuard();
  let s = () => [[docEditorCommandConstants.commandBackspace, [docEnterKeyboardHandler.handleShortcutEnter, [selectionShortcutValidator.createSelectionShortcutValidator({
    selection: "start"
  }), u]]]];
  var shortcutCommandRangeAnalyzer = require("shortcut-command-range-analyzer") /*id: 401210*/;
  let f = shortcutCommandGuard.createCommandGuard();
  let g = () => [[docEditorCommandConstants.commandEnter, [docEnterKeyboardHandler.handleEnterKey, [shortcutCommandRangeAnalyzer.analyzeSelectionState, selectionShortcutValidator.createSelectionShortcutValidator(), f]]]];
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorFormatRevisionUtils_1 = require("editor-format-revision-utils_1") /*id: 638641*/;
  let T = shortcutCommandGuard.createCommandGuard();
  let B = () => [[docEditorCommandConstants.toggleTaskCommand, [async e => {
    let {
      preventDefaultAndStopEventImmediate: i,
      currentTargetViewFilterEmpty: l,
      blockManager: n
    } = e;
    let r = l.filter(e => e.type === docBlockTypeConstants.blockTypeConstants.TODO);
    if (!r.length) {
      return;
    }
    i();
    let d = Array.from(new Set(r.map(e => e.record.snapshot.done)));
    let c = {};
    let a = r.map(e => e.model);
    let u = d.length !== 1 || !d[0];
    let s = editorFormatRevisionUtils_1.getBlockFormatRev(n, a);
    if (s) {
      let {
        revisionId: e,
        type: i
      } = s;
      editorRevisionUtilities.addRevisionContext(c, {
        revisionId: e,
        type: i
      });
    }
    return n.applyTransaction("toggle", e => {
      r.forEach(i => {
        let {
          model: l
        } = i;
        editorFormatRevisionUtils_1.syncFormatRevision(n, e, l, s, [["done", `${u}`]], l.snapshot);
        e.replace(i.record.id, ["done"], u);
      });
    }, c);
  }, [T]]]];
  let k = () => [...docxShortcutCommandHandler.mapCommandData({
    selectionType: "singleText",
    blockTypes: [docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.TODO]
  }, [...s(), ...g()]), ...B()];
  var m = k();
  require.r(exports);
  require.d(exports, {
    default: function () {
      return m;
    },
    getAsyncCommandRegisterConfigs: function () {
      return k;
    }
  });
}