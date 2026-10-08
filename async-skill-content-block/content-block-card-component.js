// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'renderContentBlockCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 611195
         */
module.exports = function (module, exports, require) {
  var searchOutlinedIconComponent_1 = require("search-outlined-icon-component_1") /*id: 772730*/;
  var cardWithSpinAndChevron = require("card-with-spin-and-chevron") /*id: 22941*/;
  var threadIconConfig = require("thread-icon-config") /*id: 928349*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      contentBlock: n
    } = e;
    let {
      is_finish: a
    } = n ?? {};
    let {
      summary: s = "",
      queries: c = []
    } = (n == null ? undefined : n.content_obj) ?? {};
    if (!s) {
      return null;
    }
    let [d] = s.split("“%s”");
    return reactJsxRuntimeCoreReexport.jsx(cardWithSpinAndChevron.CardComponent, {
      title: d,
      desc: c.join(" "),
      prefixIcon: reactJsxRuntimeCoreReexport.jsx(searchOutlinedIconComponent_1.SearchOutlinedIcon, {
        className: threadIconConfig.iconConfig.icon
      }),
      isLoading: !a,
      showSuffixIcon: false
    });
  };
  require.d(exports, {
    renderContentBlockCard: function () {
      return a;
    }
  });
}