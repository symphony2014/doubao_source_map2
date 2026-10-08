// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docxEditorConstantsConfig_1'
// - Resolved require(914193) to 'docx-editor-constants-config_1'
// - Renamed variable 'l' to 'docxToolboxConstants'
// - Resolved require(507565) to 'docx-toolbox-constants'
// - Renamed variable 'r' to 'docxToolboxBlockHelpers'
// - Resolved require(675608) to 'docx-toolbox-block-helpers'
// - Renamed variable 'a' to 'docComponentFeatureFlags'
// - Resolved require(475581) to 'doc-component-feature-flags'
// - Updated imported property 'gB' to 'blockMenuEventConstants' (module 914193)
// - Updated imported property 'c0' to 'blockContextFlags' (module 914193)
// - Updated imported property 'tl' to 'isContentMarginOn' (module 475581)
// - Updated imported property 'U3' to 'isContentFoldHidden' (module 475581)
// - Updated imported property 'JO' to 'layoutCellTypes' (module 507565)
// - Updated imported property 'Jd' to 'gridColumnClasses' (module 507565)
// - Updated imported property 'CF' to 'blockDeltaTypes' (module 507565)
// - Updated imported property 'wj' to 'isInTableCell' (module 675608)
// - Updated imported property 'kC' to 'getGridColumnClass' (module 675608)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-block-icon-delta.82128a86.js
         * chunkId: 79281
         * moduleId: 835585
         */
module.exports = function (module, exports, require) {
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docxToolboxConstants = require("docx-toolbox-constants") /*id: 507565*/;
  var docxToolboxBlockHelpers = require("docx-toolbox-block-helpers") /*id: 675608*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  let u = [{
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onBlockIconDeltaCalculated,
    hookCallback: function (t) {
      let {
        isChildOfTableCell: e,
        foldable: n,
        delta: o,
        block: u,
        blockManager: i
      } = t;
      if (e) {
        let t = docComponentFeatureFlags.isContentMarginOn() ? docxToolboxConstants.layoutCellTypes.NarrowScreenTableFirstColCell : docxToolboxConstants.layoutCellTypes.TableFirstColCell;
        o.xDelta = docxToolboxBlockHelpers.isInTableCell(u, i) ? t : docxToolboxConstants.layoutCellTypes.TableCell;
        let e = docxToolboxBlockHelpers.getGridColumnClass(u, i);
        if (e === docxToolboxConstants.gridColumnClasses.FirstGridColumn) {
          o.xDelta += docComponentFeatureFlags.isContentMarginOn() ? docxToolboxConstants.blockDeltaTypes.NarrowScreenFirstGridColumnDelta : docxToolboxConstants.blockDeltaTypes.FirstGridColumnDelta;
        } else if (e === docxToolboxConstants.gridColumnClasses.NormalGridColumn) {
          o.xDelta += docxToolboxConstants.blockDeltaTypes.GridColumnTableDelta;
        }
      } else if (!!n && !docComponentFeatureFlags.isContentFoldHidden() && !i.config.get("translated")) {
        o.xDelta = docxToolboxConstants.layoutCellTypes.Foldable;
      }
    },
    options: {
      priority: docxEditorConstantsConfig_1.blockContextFlags.table
    }
  }];
  exports.default = u;
  require.r(exports);
}