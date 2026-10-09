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
// - Renamed variable 'p' to 'docKeyboardEnterHandler'
// - Resolved require(96380) to 'doc-keyboard-enter-handler'
// - Renamed variable 'f' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'g' to 'shortcutCommandRangeAnalyzer'
// - Resolved require(401210) to 'shortcut-command-range-analyzer'
// - Renamed variable 'y' to 'commandServiceProviderName'
// - Resolved require(745403) to 'command-service-provider-name'
// - Updated imported property 'r' to 'createCommandGuard' (module 11044)
// - Updated imported property 'Xz' to 'commandBackspace' (module 293676)
// - Updated imported property 'uF' to 'commandEnter' (module 293676)
// - Updated imported property 'XC' to 'modelsTurnIntoCommand' (module 293676)
// - Updated imported property 'u' to 'handleShortcutEnter' (module 519795)
// - Updated imported property 'f' to 'createSelectionShortcutValidator' (module 338806)
// - Updated imported property 'Ld' to 'triggerEnterEvent' (module 96380)
// - Updated imported property 'mI' to 'afterEnterHandler' (module 96380)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'V' to 'commandServiceName' (module 745403)
// - Updated imported property 'HW' to 'insertBlockWithMarks' (module 469443)
// - Updated imported property 'I' to 'analyzeSelectionState' (module 401210)
// - Updated imported property 'W' to 'mapCommandData' (module 202794)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 510731
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
  var docKeyboardEnterHandler = require("doc-keyboard-enter-handler") /*id: 96380*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var shortcutCommandRangeAnalyzer = require("shortcut-command-range-analyzer") /*id: 401210*/;
  var commandServiceProviderName = require("command-service-provider-name") /*id: 745403*/;
  let v = shortcutCommandGuard.createCommandGuard();
  let T = () => [[docEditorCommandConstants.commandEnter, [async e => {
    let {
      blockManager: i,
      shortcutContext: l,
      currentTargetViewFilterEmpty: n,
      preventDefault: r
    } = e;
    r();
    let c = n[0];
    let {
      parent: a
    } = c.model;
    if (!a || docKeyboardEnterHandler.triggerEnterEvent(c.editor, l)) {
      return;
    }
    let {
      isEmpty: u
    } = c.model;
    let s = c.id;
    if (u) {
      var g;
      let e = {
        models: [c.model],
        triggerKey: docBlockTypeConstants.blockTypeConstants.TEXT,
        knownContext: {
          toggle: false
        }
      };
      await ((g = i.editorAPI.getService(commandServiceProviderName.commandServiceName, {
        optional: true
      })) === null || g === undefined ? undefined : g.triggerCommand(docEditorCommandConstants.modelsTurnIntoCommand, {
        extraInfo: e
      }));
    } else {
      let e = c.model.getSelection();
      if (!e) {
        return;
      }
      let l = c.model.zoneState.split(e);
      let n = [l[0].toAttributeText(), l[1].toAttributeText()];
      let o = c.model.position + 1;
      await i.applyTransaction("keyevent:quote:enter", e => {
        let l = i.createSnapshot(c.type, {
          text: n[1]
        });
        e.replace(c.record.id, ["text"], n[0]);
        editorTextBlockUtilities.insertBlockWithMarks(e, a.record.id, o, l);
      });
      s = a.children[o].id;
    }
    docKeyboardEnterHandler.afterEnterHandler(e, s, true);
  }, [shortcutCommandRangeAnalyzer.analyzeSelectionState, selectionShortcutValidator.createSelectionShortcutValidator(), v]]]];
  let B = () => [...docxShortcutCommandHandler.mapCommandData({
    selectionType: "singleText",
    blockType: docBlockTypeConstants.blockTypeConstants.QUOTE
  }, [...T(), ...s()])];
  var k = B();
  require.r(exports);
  require.d(exports, {
    default: function () {
      return k;
    },
    getAsyncCommandRegisterConfigs: function () {
      return B;
    }
  });
}