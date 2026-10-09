// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'withThemeProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 805172
         */
module.exports = function (module, exports, require) {
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var themeProvider = require("theme-provider") /*id: 420169*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function a(e, i) {
    return reactCoreLibraryReexport.forwardRef((r, l) => {
      let a = Object.assign((i == null ? undefined : i.size) ? {
        width: i.size,
        height: i.size
      } : {}, r.style);
      let c = () => {
        let c = (i == null ? undefined : i.theme) || browserThemeManager.getThemeMode().toLowerCase();
        return reactJsxRuntimeCoreReexport.jsx(themeProvider.ThemeProvider, {
          mode: c,
          children: reactJsxRuntimeCoreReexport.jsx(e, {
            ref: l,
            ...r,
            style: a
          })
        });
      };
      if (!browserThemeManager.ThemeContext || (i == null ? undefined : i.theme)) {
        return c();
      } else {
        return reactJsxRuntimeCoreReexport.jsx(browserThemeManager.ThemeContext.Consumer, {
          children: c
        });
      }
    });
  }
  require.d(exports, {
    withThemeProvider: function () {
      return a;
    }
  });
}