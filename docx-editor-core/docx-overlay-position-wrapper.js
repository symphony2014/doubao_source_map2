// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxOverlayWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: link-editor-wrapper-entry.1d20ed9b.js
         * chunkId: 63128
         * moduleId: 901027
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var templateSearchPopover = require("template-search-popover") /*id: 523597*/;
  var overlayPositionCalcHook = require("overlay-position-calc-hook") /*id: 878464*/;
  var docxOverlayPositionSync = require("docx-overlay-position-sync") /*id: 662835*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  exports.DocxOverlayWrapper = e => {
    let {
      visible: n,
      target: r,
      mask: h,
      direction: f,
      offset: m,
      reverse: p,
      sticky: v,
      hidden: g,
      once: w,
      onClose: Z,
      zIndex: y,
      className: _,
      boundary: C,
      scrollContainer: k,
      blockManager: b,
      selectionAPI: x,
      animation: E,
      transition: T,
      children: O,
      hideWhenOverflow: L,
      ignoreTriggerTargetClass: B,
      bubbleForbidden: A,
      getContainer: M,
      onlyCalcTargetVisibleAreaInSelector: K,
      getStickyPosInfo: I,
      listenEditorResize: P,
      hiddenOnDemand: S
    } = e;
    let R = docxOverlayPositionSync.useOverlayPosition(r, b, n, {
      scrollContainer: k ?? C,
      onlyCalcTargetVisibleAreaInSelector: K,
      listenEditorResize: P
    });
    let N = overlayPositionCalcHook.useOverlayRect(C, b, n);
    let H = reactCoreLibraryReexport.useMemo(() => p ? [f, uiLayoutPositionUtils.flipPositionAlign(f)] : [f], [p, f]);
    let j = reactCoreLibraryReexport.useCallback(e => {
      if (p) {
        let {
          adaptiveSize: n,
          contentRect: r,
          allowDirections: a
        } = e;
        let [i, l] = arrayIsArrayUtil.isArray(v) ? v : [v, v];
        let [c, u] = a;
        let d = ["left", "right"].some(e => c.toLowerCase().startsWith(e));
        if (d && r.width) {
          if (!i && r.width > n[c].width && n[c].width < n[u].width) {
            return u;
          } else {
            return c;
          }
        } else if (!d && r.height) {
          if (!l && r.height > n[c].height && n[c].height < n[u].height) {
            return u;
          } else {
            return c;
          }
        } else {
          return uiLayoutPositionEnums.positionAlignTypes.None;
        }
      }
      return H[0];
    }, [p, v]);
    return reactJsxRuntimeCoreReexport.jsx(templateSearchPopover.SearchPopover, {
      visible: n,
      mask: h,
      targetRect: R,
      boundaryRect: N,
      allowDirections: H,
      calcDirectionOnce: w,
      sticky: v,
      hidden: g,
      offset: m,
      className: _,
      calcDirection: j,
      blockManager: b,
      selectionAPI: x,
      zIndex: y,
      onClose: Z,
      animation: E,
      transition: T,
      hideWhenOverflow: L,
      ignoreTriggerTargetClass: B,
      bubbleForbidden: A,
      getContainer: M,
      getStickyPosInfo: I,
      hiddenOnDemand: S,
      children: O
    });
  };
}