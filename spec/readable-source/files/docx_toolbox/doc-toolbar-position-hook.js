// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useToolbarPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 568557
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxToolbarProviderHook = require("docx-toolbar-provider-hook") /*id: 270758*/;
  var overlayUiConstants = require("overlay-ui-constants") /*id: 645442*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  var useDocumentDimensions = require("use-document-dimensions") /*id: 692822*/;
  function d(e) {
    let {
      visible: n
    } = e;
    let r = docxToolbarProviderHook.useToolbarProvider(n);
    let [d, h] = reactCoreLibraryReexport.useState(r);
    let f = function (e) {
      let {
        height: n
      } = useDocumentDimensions.useDocumentDimensions(e);
      return reactCoreLibraryReexport.useMemo(() => n <= overlayUiConstants.layoutWidth ? overlayUiConstants.panelWidth : n >= overlayUiConstants.screenHeight ? overlayUiConstants.modalWidth : Math.round(overlayUiConstants.panelWidth + (n - overlayUiConstants.layoutWidth) * 0.31), [n]);
    }(n);
    return [reactCoreLibraryReexport.useCallback(e => {
      let {
        adaptiveSize: n,
        contentRect: o
      } = e;
      let i = n[uiLayoutPositionEnums.positionAlignTypes.LeftCenter].height;
      if (n[uiLayoutPositionEnums.positionAlignTypes.LeftCenter].width < o.width) {
        let e = n[uiLayoutPositionEnums.positionAlignTypes.TopLeft].height;
        let o = n[uiLayoutPositionEnums.positionAlignTypes.BottomLeft].height;
        if (o < overlayUiConstants.footerHeight && e < overlayUiConstants.footerHeight) {
          h(Math.min(r, i));
          return uiLayoutPositionEnums.positionAlignTypes.RightCenter;
        } else if (o < r && o < f && e > o) {
          h(Math.min(r, e));
          return uiLayoutPositionEnums.positionAlignTypes.TopLeft;
        } else {
          h(Math.min(r, o));
          return uiLayoutPositionEnums.positionAlignTypes.BottomLeft;
        }
      }
      h(Math.min(r, i));
      return uiLayoutPositionEnums.positionAlignTypes.LeftCenter;
    }, [r]), reactCoreLibraryReexport.useCallback(e => {
      let {
        contentRect: n,
        offsetInfo: r,
        viewportInfo: i,
        targetRect: l,
        direction: a,
        boundaryRect: c,
        bodyRect: s
      } = e;
      let d = uiLayoutPositionUtils.calcAlignPosition({
        contentRect: n,
        offsetInfo: r,
        viewportInfo: i,
        targetRect: l,
        direction: a,
        bodyRect: s
      });
      let h = uiLayoutPositionUtils.calcOverflowAdjustment({
        positionInfo: d,
        viewportInfo: i,
        boundaryRect: c,
        contentRect: n,
        bodyRect: s
      });
      if (["left", "right"].some(e => a.toLowerCase().startsWith(e))) {
        if (h.top > 0) {
          if (isUndefinedCheck.isUndefined(d.top)) {
            d.bottom -= h.top;
          } else {
            d.top += h.top;
          }
        }
        if (h.bottom > 0) {
          if (isUndefinedCheck.isUndefined(d.top)) {
            d.bottom += h.bottom;
          } else {
            d.top -= h.bottom;
          }
        }
      }
      return d;
    }, []), d];
  }
  require.d(exports, {
    useToolbarPosition: function () {
      return d;
    }
  });
}