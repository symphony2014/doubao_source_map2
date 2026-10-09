// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docxEditorConstantsConfig_1'
// - Resolved require(914193) to 'docx-editor-constants-config_1'
// - Renamed variable 'l' to 'docBlockMenuLayoutConstants'
// - Resolved require(166815) to 'doc-block-menu-layout-constants'
// - Renamed variable 'r' to 'docxToolboxConstants'
// - Resolved require(507565) to 'docx-toolbox-constants'
// - Renamed variable 'a' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'gB' to 'blockMenuEventConstants' (module 914193)
// - Updated imported property 'c0' to 'blockContextFlags' (module 914193)
// - Updated imported property 'zq' to 'agendaTaskTypes' (module 433991)
// - Updated imported property 'EN' to 'supportedBlockTypes' (module 166815)
// - Updated imported property 'CF' to 'blockDeltaTypes' (module 507565)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-block-icon-delta.82128a86.js
         * chunkId: 79281
         * moduleId: 125957
         */
module.exports = function (module, exports, require) {
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docBlockMenuLayoutConstants = require("doc-block-menu-layout-constants") /*id: 166815*/;
  var docxToolboxConstants = require("docx-toolbox-constants") /*id: 507565*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let u = [{
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onBlockIconDeltaCalculated,
    hookCallback: function (t) {
      let {
        delta: e,
        block: n
      } = t;
      if (docBlockTypeConstants.agendaTaskTypes.includes(n.type) && !docBlockMenuLayoutConstants.supportedBlockTypes.includes(n.type)) {
        e.xDelta += docxToolboxConstants.blockDeltaTypes.TextualBlockDelta;
      }
    },
    options: {
      priority: docxEditorConstantsConfig_1.blockContextFlags.textual
    }
  }];
  exports.default = u;
  require.r(exports);
}