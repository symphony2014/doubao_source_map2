// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'toastService'
// - Renamed export 'y' to 'ToastProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 954740
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  var toastNotificationManager = require("toast-notification-manager") /*id: 116233*/;
  let l = styledComponentsCore.default(toastNotificationManager.ToastManager)`
  .ud__toast.ud__notice {
    max-width: ${e => e.$isMobile ? "320px" : "600px"};
  }
`;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = {
    open: emptyExportFunction.emptyFunction,
    info: emptyExportFunction.emptyFunction,
    success: emptyExportFunction.emptyFunction,
    warning: emptyExportFunction.emptyFunction,
    warn: emptyExportFunction.emptyFunction,
    error: emptyExportFunction.emptyFunction,
    loading: emptyExportFunction.emptyFunction,
    config: emptyExportFunction.emptyFunction,
    destroy: emptyExportFunction.emptyFunction
  };
  let d = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      getContainer: i,
      isMobile: n = false
    } = e;
    if (i()) {
      return reactJsxRuntimeCoreReexport.jsx(l, {
        ref: t,
        $isMobile: n,
        getContainer: i
      });
    } else {
      return null;
    }
  });
  require.d(exports, {
    toastService: function () {
      return u;
    },
    ToastProvider: function () {
      return d;
    }
  });
}