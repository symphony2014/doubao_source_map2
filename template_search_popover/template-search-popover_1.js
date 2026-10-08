// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'docxToolbarProviderHook'
// - Resolved require(270758) to 'docx-toolbar-provider-hook'
// - Renamed variable 'o' to 'templateSearchPopover'
// - Resolved require(523597) to 'template-search-popover'
// - Renamed variable 's' to 'overlayPositionCalcHook'
// - Resolved require(878464) to 'overlay-position-calc-hook'
// - Renamed variable 'a' to 'uiLayoutPositionEnums'
// - Resolved require(463752) to 'ui-layout-position-enums'
// - Renamed variable 'u' to 'docxOverlayPositionSync'
// - Resolved require(662835) to 'docx-overlay-position-sync'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Nm' to 'positionAlignTypes' (module 463752)
// - Updated imported property 'dz' to 'animationEffectTypes' (module 463752)
// - Updated imported property 'a' to 'useOverlayPosition' (module 662835)
// - Updated imported property 'Z' to 'useOverlayRect' (module 878464)
// - Updated imported property 'Z' to 'useToolbarProvider' (module 270758)
// - Updated imported property 'Z' to 'SearchPopover' (module 523597)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: template_search_popover.30dbc5de.js
         * chunkId: 75647
         * moduleId: 33384
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxToolbarProviderHook = require("docx-toolbar-provider-hook") /*id: 270758*/;
  var templateSearchPopover = require("template-search-popover") /*id: 523597*/;
  var overlayPositionCalcHook = require("overlay-position-calc-hook") /*id: 878464*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var docxOverlayPositionSync = require("docx-overlay-position-sync") /*id: 662835*/;
  var c = t => null;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = [uiLayoutPositionEnums.positionAlignTypes.BottomLeft, uiLayoutPositionEnums.positionAlignTypes.TopLeft];
  let f = uiLayoutPositionEnums.animationEffectTypes.None;
  var d = t => {
    let {
      blocks: e,
      target: n,
      boundary: d,
      blockManager: m,
      fold: v,
      isInlineInput: p,
      range: g,
      selectionAPI: b,
      onClose: _
    } = t;
    let y = docxOverlayPositionSync.useOverlayPosition(n, m, true, {
      scrollContainer: d
    });
    let w = overlayPositionCalcHook.useOverlayRect(d, m, true);
    let [E, N] = reactCoreLibraryReexport.useState(420);
    let O = function (t) {
      let {
        maxHeight: e,
        defaultPanelHeight: n,
        minHeight: r,
        thresholdHeight: o,
        setMaxHeight: s
      } = t;
      return reactCoreLibraryReexport.useCallback(t => {
        let {
          adaptiveSize: i
        } = t;
        let u = Math.max(Math.min(i[uiLayoutPositionEnums.positionAlignTypes.BottomLeft].height, e, n), r);
        if (i[uiLayoutPositionEnums.positionAlignTypes.BottomLeft].height < o && i[uiLayoutPositionEnums.positionAlignTypes.TopLeft].height > i[uiLayoutPositionEnums.positionAlignTypes.BottomLeft].height) {
          s(Math.max(Math.min(i[uiLayoutPositionEnums.positionAlignTypes.TopLeft].height, e ?? n, n), r));
          return uiLayoutPositionEnums.positionAlignTypes.TopLeft;
        } else {
          s(u);
          return uiLayoutPositionEnums.positionAlignTypes.BottomLeft;
        }
      }, [e, r, n, o, s]);
    }({
      minHeight: 160,
      maxHeight: 420,
      defaultPanelHeight: docxToolbarProviderHook.useToolbarProvider(true),
      thresholdHeight: 220,
      setMaxHeight: N
    });
    return reactJsxRuntimeCoreReexport.jsx(templateSearchPopover.SearchPopover, {
      visible: true,
      animation: f,
      targetRect: y,
      boundaryRect: w,
      allowDirections: h,
      calcDirection: O,
      mask: true,
      blockManager: m,
      selectionAPI: b,
      ignoreTriggerTargetClass: "template-period-dropdown",
      onClose: _,
      children: reactJsxRuntimeCoreReexport.jsx(c, {
        blocks: e,
        range: g,
        fold: v,
        isInlineInput: p,
        selectionAPI: b,
        blockManager: m,
        maxHeight: E,
        onClose: _
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return d;
    }
  });
}