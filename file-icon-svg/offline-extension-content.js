// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'N' to 'themeSwitchDocIcon'
// - Resolved require(240268) to 'theme-switch-doc-icon'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'D' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'DocumentThemeIcon' (module 240268)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 66438.8c56d37b.js
         * chunkId: 66438
         * moduleId: 567477
         */
module.exports = function (module, exports, require) {
  var themeSwitchDocIcon = require("theme-switch-doc-icon") /*id: 240268*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function A() {
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "offline-extension-content",
      children: [reactJsxRuntimeCoreReexport.jsx(themeSwitchDocIcon.DocumentThemeIcon, {}), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "offline-extension-content-tip",
        children: t("LarkCCM_Docs_OfflineUse_UnableToViewOrEditDiffDocType_Desc")
      })]
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return A;
    }
  });
}