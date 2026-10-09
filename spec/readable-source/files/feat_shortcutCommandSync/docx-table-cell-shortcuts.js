// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'docxShortcutCommandHandler'
// - Resolved require(202794) to 'docx-shortcut-command-handler'
// - Renamed variable 'n' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'r' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'o' to 'tableBlockKeyEvents'
// - Resolved require(753891) to 'table-block-key-events'
// - Renamed variable 'd' to 'docEditorCommandConstants'
// - Resolved require(293676) to 'doc-editor-command-constants'
// - Resolved require(11044) to 'shortcut-command-guard'
// - Updated imported property 'r' to 'createCommandGuard' (module 11044)
// - Updated imported property 'i$' to 'handleTableKeyEvent' (module 753891)
// - Updated imported property 'W' to 'mapCommandData' (module 202794)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'S$' to 'cursorUpCommand' (module 293676)
// - Updated imported property 'H4' to 'cursorDownCommand' (module 293676)
// - Updated imported property 'yQ' to 'cursorLeftCommand' (module 293676)
// - Updated imported property 'EO' to 'cursorRightCommand' (module 293676)
// - Updated imported property 'YS' to 'shiftCmdUp' (module 293676)
// - Updated imported property 'zx' to 'shiftCmdDown' (module 293676)
// - Updated imported property 'g5' to 'shiftCtrlUp' (module 293676)
// - Updated imported property 'ot' to 'shiftCtrlDown' (module 293676)
// - Updated imported property 'wE' to 'ctrlUp' (module 293676)
// - Updated imported property '$$' to 'ctrlDown' (module 293676)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandSync.d2c4e24e.js
         * chunkId: 81326
         * moduleId: 996793
         */
module.exports = function (module, exports, require) {
  var docxShortcutCommandHandler = require("docx-shortcut-command-handler") /*id: 202794*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var tableBlockKeyEvents = require("table-block-key-events") /*id: 753891*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  let c = require("shortcut-command-guard") /*id: 11044*/.createCommandGuard();
  function a(e) {
    if (!e.currentTargetViewFilterEmpty) {
      e.preventDefault();
    }
    e.shouldPropagation();
  }
  function u(e) {
    e.shouldPropagation();
  }
  function s(e) {
    return tableBlockKeyEvents.handleTableKeyEvent({
      ctx: e,
      forward: false,
      isVertical: true
    });
  }
  function f(e) {
    return tableBlockKeyEvents.handleTableKeyEvent({
      ctx: e,
      forward: true,
      isVertical: true
    });
  }
  var p = [...docxShortcutCommandHandler.mapCommandData({
    selectionType: "block",
    blockType: docBlockTypeConstants.blockTypeConstants.CELL
  }, [[docEditorCommandConstants.cursorUpCommand, [s]], [docEditorCommandConstants.cursorDownCommand, [f]], [docEditorCommandConstants.cursorLeftCommand, [e => tableBlockKeyEvents.handleTableKeyEvent({
    ctx: e,
    forward: false,
    isVertical: false
  })]], [docEditorCommandConstants.cursorRightCommand, [e => tableBlockKeyEvents.handleTableKeyEvent({
    ctx: e,
    forward: true,
    isVertical: false
  })]], [docEditorCommandConstants.shiftCmdUp, [a, [c]]], [docEditorCommandConstants.shiftCmdDown, [a, [c]]], [docEditorCommandConstants.shiftCtrlUp, [u, [c]]], [docEditorCommandConstants.shiftCtrlDown, [u, [c]]], ...(browserEnvironmentDetectionUtils.browserDetector.isMac || browserEnvironmentDetectionUtils.browserDetector.isIPad ? [[docEditorCommandConstants.ctrlUp, [s]], [docEditorCommandConstants.ctrlDown, [f]]] : [])])];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return p;
    }
  });
}