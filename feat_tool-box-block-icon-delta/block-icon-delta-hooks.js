// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docxEditorConstantsConfig_1'
// - Resolved require(914193) to 'docx-editor-constants-config_1'
// - Renamed variable 'l' to 'docxToolboxConstants'
// - Resolved require(507565) to 'docx-toolbox-constants'
// - Renamed variable 'r' to 'docxToolboxBlockHelpers'
// - Resolved require(675608) to 'docx-toolbox-block-helpers'
// - Updated imported property 'gB' to 'blockMenuEventConstants' (module 914193)
// - Updated imported property 'c0' to 'blockContextFlags' (module 914193)
// - Updated imported property 'BU' to 'isInQuoteContainer' (module 675608)
// - Updated imported property 'v6' to 'isInGridColumn' (module 675608)
// - Updated imported property 'CF' to 'blockDeltaTypes' (module 507565)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-block-icon-delta.82128a86.js
         * chunkId: 79281
         * moduleId: 492005
         */
module.exports = function (module, exports, require) {
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docxToolboxConstants = require("docx-toolbox-constants") /*id: 507565*/;
  var docxToolboxBlockHelpers = require("docx-toolbox-block-helpers") /*id: 675608*/;
  let a = [{
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onBlockIconDeltaCalculated,
    hookCallback: function (t) {
      let {
        delta: e,
        block: n
      } = t;
      if (docxToolboxBlockHelpers.isInQuoteContainer(n)) {
        e.xDelta += docxToolboxConstants.blockDeltaTypes.QuoteContainerDelta;
      }
    },
    options: {
      priority: docxEditorConstantsConfig_1.blockContextFlags.quote
    }
  }, {
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onBlockIconDeltaCalculated,
    hookCallback: function (t) {
      let {
        delta: e,
        block: n
      } = t;
      if (docxToolboxBlockHelpers.isInGridColumn(n)) {
        e.xDelta += docxToolboxConstants.blockDeltaTypes.QuoteContainerDelta;
      }
    },
    options: {
      priority: docxEditorConstantsConfig_1.blockContextFlags.childOfFirstColumnInQuote
    }
  }];
  exports.default = a;
  require.r(exports);
}