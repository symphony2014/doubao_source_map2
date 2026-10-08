// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'ControlBarActionList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23641.b9dc0072.js
         * chunkId: 23641
         * moduleId: 716645
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var tooltipWrapperComponent = require("tooltip-wrapper-component") /*id: 379673*/;
  var c = {
    container: "container-uyhc_R",
    divider: "divider-A05KIZ",
    large: "large-r1iiWM"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = {
    larger: 8,
    large: 4,
    small: 2
  };
  let p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: r,
      items: p = [],
      spacing: h = "large",
      iconSize: m,
      iconColor: f,
      newIcon: g,
      ...v
    } = e;
    if (p.length) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        "data-testid": "control_bar_action_list",
        ref: t,
        className: l(c.container, c[`spacing-${h}`], n),
        style: {
          ...r,
          "--control-bar-action-list-spacing": `${isStringTypeCheck.isString(h) ? u[h] : h}px`
        },
        ...v,
        children: p.map((e, t) => {
          let {
            key: n
          } = e;
          if (e.type === "icon") {
            let {
              icon: i,
              disabled: r,
              onClick: l,
              tooltip: a,
              title: c,
              checked: u,
              newIcon: p,
              extraProps: h,
              hideText: v
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
              children: i && reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
                "data-testid": "control_bar_action_item",
                ...h,
                disabled: r,
                checked: u,
                onClick: l,
                tooltip: a,
                title: v ? "" : c,
                size: m,
                color: f,
                newIcon: p ?? g,
                children: i
              })
            }, n ?? t);
          }
          if (e.type === "custom") {
            let {
              tooltip: i,
              element: r,
              hideText: l
            } = e;
            return r && reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent.TooltipWrapper, {
              content: i,
              children: l ? reactCoreLibraryReexport.cloneElement(r, {
                hideText: l != null && l
              }) : r
            }, n ?? t);
          }
          if (e.type === "divider") {
            return reactJsxRuntimeCoreReexport.jsx("div", {
              className: l(c.divider, m && c[m], e.className),
              style: e.style
            }, n ?? t);
          } else {
            return null;
          }
        })
      });
    } else {
      return null;
    }
  });
  require.d(exports, {
    ControlBarActionList: function () {
      return p;
    }
  });
}