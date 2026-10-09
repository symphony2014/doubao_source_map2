// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Sy' to 'BaseRenderer'
// - Renamed export 'rp' to 'editorEventTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 747278
         */
module.exports = function (module, exports, require) {
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  require("react-core-library-reexport") /*id: 634663*/;
  require.d(exports, {
    BaseRenderer: function () {
      return baseRendererClass.BaseRenderer;
    },
    editorEventTypes: function () {
      return editorEventConstants.editorEventTypes;
    }
  });
}