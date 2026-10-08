// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getBlockModels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 796769
         */
module.exports = function (module, exports, require) {
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  function n(e, r) {
    let {
      selectionAPI: o,
      blockManager: n,
      blocks: a
    } = e;
    if (r === editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar || r === editorUiComponentConstants.uiComponentTypes.PopoverMenu) {
      return o.getSelection().map(e => n.getBlockModelByBlockId(e.id));
    } else {
      return a.reduce((e, r) => n.hasBlockModelByBlockId(r.id) ? e.concat(n.getBlockModelByBlockId(r.id)) : e, []);
    }
  }
  require.d(exports, {
    getBlockModels: function () {
      return n;
    }
  });
}