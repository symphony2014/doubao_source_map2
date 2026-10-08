// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'iT' to 'allowedEditorModes'
// - Renamed export 'wc' to 'allowedBlockTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 738890
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var featureConstantsTypes = require("feature-constants-types") /*id: 882886*/;
  let l = [docBlockTypeConstants.blockTypeConstants.DIAGRAM, docBlockTypeConstants.blockTypeConstants.CELL];
  featureConstantsTypes.UiSources.TOAST;
  featureConstantsTypes.UiSources.TOOLBAR;
  featureConstantsTypes.UiSources.MAGIC_SHARE;
  featureConstantsTypes.UiSources.DEFAULT_POLICY;
  let c = [featureConstantsTypes.EditorModes.EDITING, featureConstantsTypes.EditorModes.REVISING];
  require.d(exports, {
    allowedEditorModes: function () {
      return c;
    },
    allowedBlockTypes: function () {
      return l;
    }
  });
}