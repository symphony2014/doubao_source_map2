// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'createRtlIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 682145
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var baseIconClass = require("base-icon-class") /*id: 181746*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => reactCoreLibraryReexport.forwardRef(function (t, n) {
    let {
      className: i,
      autoFitRTL: l,
      ...s
    } = t;
    return reactJsxRuntimeCoreReexport.jsx(baseIconClass.ZPm, {
      svg: e,
      ...s,
      className: i,
      ref: n,
      style: l && localeDirectionCheck.isRtlLanguage() ? {
        transform: "scaleX(-1)"
      } : {}
    });
  });
  require.d(exports, {
    createRtlIcon: function () {
      return l;
    }
  });
}