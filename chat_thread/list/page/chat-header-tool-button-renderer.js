// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'HeaderToolButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 17734
         */
module.exports = function (module, exports, require) {
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      pluginIdentifer: t,
      ...n
    } = e;
    let {
      plugin: o
    } = chatPluginIocManager.headerToolBtnHook(t ?? "");
    if (!o) {
      return null;
    }
    let {
      Content: s
    } = o;
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
      errorBoundaryName: "chat-header-tool-button",
      logger: loggerServiceCore.defaultLogger,
      fallback: null,
      children: reactJsxRuntimeCoreReexport.jsx(s, {
        ...n
      })
    });
  };
  require.d(exports, {
    HeaderToolButton: function () {
      return o;
    }
  });
}