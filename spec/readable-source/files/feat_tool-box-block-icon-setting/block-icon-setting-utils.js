// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docBlockMenuLayoutConstants'
// - Resolved require(166815) to 'doc-block-menu-layout-constants'
// - Renamed variable 'u' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'o' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Updated imported property '$G' to 'isTextEditable' (module 469443)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'xy' to 'triggerWidth' (module 166815)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-block-icon-setting.2fba5dba.js
         * chunkId: 20343
         * moduleId: 391593
         */
module.exports = function (module, exports, require) {
  var docBlockMenuLayoutConstants = require("doc-block-menu-layout-constants") /*id: 166815*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  let i = [{
    isTargetBlock: t => !editorTextBlockUtilities.isTextEditable(t) || t.type === docBlockTypeConstants.blockTypeConstants.CODE,
    lineHeight: docBlockMenuLayoutConstants.triggerWidth
  }];
  exports.default = i;
  require.r(exports);
}