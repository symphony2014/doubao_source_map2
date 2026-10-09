// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'tq' to 'createThemeAwareIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46126.e68e9438.js
         * chunkId: 46126
         * moduleId: 602057
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var themeDetectionContextProvider = require("theme-detection-context-provider") /*id: 464683*/;
  var themeProvider = require("theme-provider") /*id: 420169*/;
  function a(e, n) {
    return reactCoreLibraryReexport.forwardRef((t, a) => {
      let c = Object.assign((n == null ? undefined : n.size) ? {
        width: n.size,
        height: n.size
      } : {}, t.style);
      let s = (themeDetectionContextProvider.getCurrentTheme() || "").toLowerCase() || undefined;
      if (themeDetectionContextProvider.ThemeContext) {
        return reactCoreLibraryReexport.createElement(themeDetectionContextProvider.ThemeContext.Consumer, null, () => {
          let n = (themeDetectionContextProvider.getCurrentTheme() || "").toLowerCase() || undefined;
          return reactCoreLibraryReexport.createElement(themeProvider.ThemeProvider, {
            mode: n
          }, reactCoreLibraryReexport.createElement(e, Object.assign({
            ref: a
          }, t, {
            style: c
          })));
        });
      } else {
        return reactCoreLibraryReexport.createElement(themeProvider.ThemeProvider, {
          mode: s
        }, reactCoreLibraryReexport.createElement(e, Object.assign({
          ref: a
        }, t, {
          style: c
        })));
      }
    });
  }
  require("classnames-utils") /*id: 946565*/;
  (function (e) {
    if (e && typeof window != "undefined") {
      var n = document.createElement("style");
      n.setAttribute("media", "screen");
      n.innerHTML = e;
      document.head.appendChild(n);
    }
  })(".ud-illustration--wrapper {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.ud-illustration--icon {\n  margin-bottom: 16px;\n}\n.ud-illustration--title,\n.ud-illustration--desc {\n  max-width: 248px;\n}\n.ud-illustration--title {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--text-title);\n}\n.ud-illustration--desc {\n  font-size: 14px;\n  color: var(--text-caption);\n}\n");
  require.d(exports, {
    createThemeAwareIcon: function () {
      return a;
    }
  });
}