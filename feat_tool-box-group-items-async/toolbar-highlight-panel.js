// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'ColorHighlightPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 926192
         */
module.exports = function (module, exports, require) {
  var n;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  var uiThemeColorDefinitions = require("ui-theme-color-definitions") /*id: 434278*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var svgIconComponent_1 = require("svg-icon-component_1") /*id: 143316*/;
  var colorTooltipProvider = require("color-tooltip-provider") /*id: 32256*/;
  (n = {}).COLOR = "color";
  n.BACKGROUND_COLOR = "backgroundColor";
  let p = n;
  require("empty-module-placeholder_1") /*id: 573486*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var h = e => {
    let {
      colorType: l,
      type: o,
      valueColor: n,
      panelColor: r,
      onColorChange: i,
      selected: c
    } = e;
    let h = o === p.COLOR;
    let k = l === uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_BACKGROUND;
    let m = h ? {
      fill: r
    } : {
      backgroundColor: r
    };
    let v = u("toolbar-highlight-btn", {
      text: h,
      selected: c,
      default: k
    });
    return reactJsxRuntimeCoreReexport.jsx(colorTooltipProvider.ColorTooltipProvider, {
      type: o,
      colorType: l,
      children: reactJsxRuntimeCoreReexport.jsx("button", {
        className: v,
        onPointerDown: () => i(o, n),
        children: h ? reactJsxRuntimeCoreReexport.jsx(svgIconComponent_1.SvgIcon, {
          style: m
        }) : reactJsxRuntimeCoreReexport.jsx("div", {
          style: m,
          className: "highlight-bg"
        })
      })
    });
  };
  let k = e => {
    let {
      colorInfo: l,
      isSelectedDefaultColor: o,
      panelColorInfo: n,
      onColorChange: c,
      handleReset: u,
      onMouseLeave: d
    } = e;
    let s = (e, l) => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("p", {
        className: "group-title",
        children: e
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "highlight-menu-group",
        children: l
      })]
    });
    let k = (e, n, r) => {
      let c = l[r];
      if (c) {
        return colorRgbUtils.compareColors(c, e);
      } else {
        return !!o[p.COLOR] && n === uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_TEXT || !!o[p.BACKGROUND_COLOR] && n === uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_BACKGROUND;
      }
    };
    let m = (e, l, o) => {
      let n = [];
      e.forEach((e, r) => {
        let i = l.get(r);
        n.push(reactJsxRuntimeCoreReexport.jsx(h, {
          colorType: r,
          valueColor: e,
          panelColor: i,
          type: o,
          selected: k(e, r, o),
          onColorChange: c
        }, r));
      });
      return n;
    };
    let v = e => {
      let {
        title: l,
        type: o,
        panelColorMaps: n
      } = e;
      let {
        panelColors: r,
        valueColors: i
      } = n;
      return s(l, m(i, r, o));
    };
    let g = n.map(e => v(e));
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "toolbar-highlight-panel",
      onMouseLeave: d,
      children: [g, reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
        className: "clear-highlight-btn",
        size: "small",
        onPointerDown: u,
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          children: t("CreationDoc_Docs_CalloutBlock_Reset_Button")
        })
      })]
    });
  };
  require.d(exports, {
    ColorHighlightPanel: function () {
      return k;
    }
  });
}