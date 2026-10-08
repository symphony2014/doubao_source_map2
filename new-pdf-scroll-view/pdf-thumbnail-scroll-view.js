// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'PdfThumbnailList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 125510
         */
module.exports = function (module, exports, require) {
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var skeletonLoadingComponent = require("skeleton-loading-component") /*id: 437338*/;
  var pdfScrollViewPageComponent = require("pdf-scroll-view-page-component") /*id: 506905*/;
  var pdfScrollView = require("pdf-scroll-view") /*id: 407457*/;
  var scrollBufferHook = require("scroll-buffer-hook") /*id: 746813*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      value: t,
      onChange: n,
      totalPage: c = 0,
      aspectRatio: u,
      pdfProxy: d
    } = e;
    let h = numericRangeUtil.createRange(1, c + 1);
    let {
      onEnter: p,
      renderKeys: f
    } = scrollBufferHook.useScrollBuffer({
      allKeys: h
    });
    return reactJsxRuntimeCoreReexport.jsx(pdfScrollView.PdfScrollView, {
      dataSource: h,
      defaultValue: 1,
      value: t,
      onChange: n,
      renderItem: e => d && reactJsxRuntimeCoreReexport.jsx(pdfScrollViewPageComponent.PdfScrollViewPage, {
        pageNumber: e,
        isThumbnail: true,
        pdf: d,
        aspectRatio: u,
        renderAnnotationLayer: false,
        onEnter: () => p(e),
        forceLoading: !f.includes(e),
        rounded: false,
        loading: reactJsxRuntimeCoreReexport.jsx(skeletonLoadingComponent.SkeletonLoading, {
          type: "loading"
        })
      }),
      renderText: e => e,
      itemKey: e => e
    });
  };
  require.d(exports, {
    PdfThumbnailList: function () {
      return c;
    }
  });
}