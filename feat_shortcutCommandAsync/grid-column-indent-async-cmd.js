// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxShortcutCommandHandler'
// - Resolved require(202794) to 'docx-shortcut-command-handler'
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'r' to 'gridDocumentNodeUtils'
// - Resolved require(431709) to 'grid-document-node-utils'
// - Renamed variable 'd' to 'docEditorCommandConstants'
// - Resolved require(293676) to 'doc-editor-command-constants'
// - Updated imported property 'g7' to 'commandTab' (module 293676)
// - Updated imported property 'wT' to 'unTabCommand' (module 293676)
// - Updated imported property 'wD' to 'traverseSelection' (module 431709)
// - Updated imported property 'W' to 'mapCommandData' (module 202794)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 11330
         */
module.exports = function (module, exports, require) {
  var docxShortcutCommandHandler = require("docx-shortcut-command-handler") /*id: 202794*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var gridDocumentNodeUtils = require("grid-document-node-utils") /*id: 431709*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  let c = () => [[docEditorCommandConstants.commandTab, [e => gridDocumentNodeUtils.traverseSelection(e, true)]], [docEditorCommandConstants.unTabCommand, [e => gridDocumentNodeUtils.traverseSelection(e, false)]]];
  let a = () => [...docxShortcutCommandHandler.mapCommandData({
    selectionType: "block",
    blockType: docBlockTypeConstants.blockTypeConstants.GRID_COLUMN
  }, [...c()])];
  var u = a();
  require.r(exports);
  require.d(exports, {
    default: function () {
      return u;
    },
    getAsyncCommandRegisterConfigs: function () {
      return a;
    }
  });
}