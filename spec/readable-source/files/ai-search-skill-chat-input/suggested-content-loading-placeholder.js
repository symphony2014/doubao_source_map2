// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'suggestedContentLoadingPlaceholder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: deep-search-skill-chat-input.cf9a238f.js
         * chunkId: 20853
         * moduleId: 38443
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var suggestedContentSearchItem = require("suggested-content-search-item") /*id: 708810*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = () => {
    let e = [,,,].fill({});
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: e.map(e => reactJsxRuntimeCoreReexport.jsx(suggestedContentSearchItem.SuggestedSearchItem, {
        title: "",
        value: "",
        isInLoading: true,
        trackParams: {},
        onClick: emptyExportFunction.emptyFunction
      }, ""))
    });
  };
  require.d(exports, {
    suggestedContentLoadingPlaceholder: function () {
      return l;
    }
  });
}