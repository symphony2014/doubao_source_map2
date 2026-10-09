// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'docxLoadingProgress'
// - Resolved require(389611) to 'docx-loading-progress'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'x' to 'LoadingProgress' (module 389611)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 977688
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var docxLoadingProgress = require("docx-loading-progress") /*id: 389611*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let n = e => t("LarkCCM_Docs_Cover_AIGC_Generating_Tooltip", {
    Percentage: e
  });
  var s = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "mock-progress-wrapper",
    children: reactJsxRuntimeCoreReexport.jsx(docxLoadingProgress.LoadingProgress, {
      generated: false,
      maxTimeCost: 10000,
      renderChild: n
    })
  });
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}