// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'ChatPluginRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 797443
         */
module.exports = function (module, exports, require) {
  var tableScrollContainerHook = require("table-scroll-container-hook") /*id: 446359*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let r = e => {
    let {
      pluginConfig: n,
      ...r
    } = e;
    let {
      Content: o
    } = (n == null ? undefined : n.default) ?? {};
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(o, {
        ...r,
        pluginConfig: n
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(tableScrollContainerHook.TableScrollContainer, {
        ...r
      });
    }
  };
  require.d(exports, {
    ChatPluginRenderer: function () {
      return r;
    }
  });
}