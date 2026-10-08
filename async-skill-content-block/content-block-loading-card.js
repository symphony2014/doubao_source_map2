// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'renderLoadingCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 119566
         */
module.exports = function (module, exports, require) {
  var cardWithSpinAndChevron = require("card-with-spin-and-chevron") /*id: 22941*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let r = e => {
    let {
      contentBlock: n
    } = e;
    let {
      is_finish: r
    } = n ?? {};
    let {
      text: o
    } = (n == null ? undefined : n.content_obj) ?? {};
    if (!o || r) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(cardWithSpinAndChevron.CardComponent, {
        title: o,
        isLoading: true,
        showSuffixIcon: false
      });
    }
  };
  require.d(exports, {
    renderLoadingCard: function () {
      return r;
    }
  });
}