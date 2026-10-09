// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'useCodingChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 117608
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var skillActionConstants = require("skill-action-constants") /*id: 418389*/;
  let o = () => {
    let e = codeRouteUtils.isCodePage();
    let t = reactCoreLibraryReexport.useMemo(() => e, [e]);
    let n = reactCoreLibraryReexport.useMemo(() => t ? {
      code_assistant_source: skillActionConstants.ConfigKeys.DevMode
    } : null, [t]);
    return {
      isDevMode: t,
      contextVariables: n
    };
  };
  require.d(exports, {
    useCodingChatInput: function () {
      return o;
    }
  });
}