// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'getAsrToolConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 591234
         */
module.exports = function (module, exports, require) {
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = () => ({
    key: "asr",
    sort: 0,
    element: e => () => reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.ToolButtonList, {
      list: [asrToolButtonSymbol.asrToolButtonSymbol],
      ...e
    })
  });
  require.d(exports, {
    getAsrToolConfig: function () {
      return a;
    }
  });
}