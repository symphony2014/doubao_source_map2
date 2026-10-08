// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'usePdfScrollView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 940767
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let a = e => {
    let {
      totalPage: t,
      currentPage: n,
      handleScrollToPage: a,
      currentScale: l,
      setCurrentScale: i,
      currentOutlineType: o,
      setCurrentOutlineType: s,
      getDisabledOutlineOption: c,
      getLoadingOutlineOption: u,
      beforeTranslate: d,
      translateConfig: h,
      currentTranslateConfig: p,
      setCurrentTranslateConfig: f,
      translateLoading: g,
      pdfLanguageNativeName: m,
      translateConfigButtonRef: v,
      disableTranslateServiceSelect: x,
      assetList: b,
      activeAssetKey: w,
      currentSidebarType: y,
      handleSwitchAsset: S,
      setCurrentSidebarType: N,
      handleStartCropping: C,
      hideFullScreenButton: T,
      isCanvasFullScreen: _,
      openCanvasFullScreen: j,
      closeCanvasFullScreen: R
    } = e;
    let E = reactCoreLibraryReexport.useMemo(() => ({
      totalPage: t,
      value: n,
      onChange: a
    }), [t, n, a]);
    let $ = reactCoreLibraryReexport.useMemo(() => ({
      value: l,
      onChange: i
    }), [l, i]);
    let k = reactCoreLibraryReexport.useMemo(() => ({
      value: o,
      onChange: s,
      disabledOption: c(),
      loadingOption: u()
    }), [o, s, c]);
    let P = reactCoreLibraryReexport.useMemo(() => {
      if (h) {
        return {
          value: p,
          onChange: f,
          loading: g,
          disabled: h.disabled,
          pdfLanguage: h.pdfLanguage,
          pdfLanguageNativeName: m,
          beforeTranslate: d,
          translateConfigButtonRef: v,
          disableTranslateServiceSelect: x
        };
      }
    }, [p, f, g, h == null ? undefined : h.disabled, h == null ? undefined : h.pdfLanguage, m, d, v, x]);
    let Z = reactCoreLibraryReexport.useMemo(() => ({
      assetList: b,
      activeAssetKey: w,
      sidebarValue: y,
      onSwitchAsset: S,
      onChangeSidebar: N
    }), [b, w, y, S, N]);
    return {
      pageConfig: E,
      scaleConfig: $,
      outlineConfig: k,
      translateConfig: P,
      assetListConfig: Z,
      cropConfig: reactCoreLibraryReexport.useMemo(() => ({
        disable: p == null ? undefined : p.enabled,
        onStartCropping: C
      }), [p == null ? undefined : p.enabled, C]),
      canvasConfig: reactCoreLibraryReexport.useMemo(() => ({
        hideFullScreenButton: T,
        isCanvasFullScreen: _,
        openCanvasFullScreen: j,
        closeCanvasFullScreen: R
      }), [T, _, j, R])
    };
  };
  require.d(exports, {
    usePdfScrollView: function () {
      return a;
    }
  });
}