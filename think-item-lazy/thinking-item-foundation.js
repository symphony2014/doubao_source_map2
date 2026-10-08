// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tooltipComponentExports'
// - Resolved require(341865) to 'tooltip-component-exports'
// - Renamed variable 'o' to 'dropdownMenuItemWithTooltipComponent'
// - Resolved require(25628) to 'dropdown-menu-item-with-tooltip-component'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property '$' to 'DropdownMenuItemWithTooltip' (module 25628)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: think-item-lazy.6aad259a.js
         * chunkId: 7521
         * moduleId: 946314
         */
module.exports = function (module, exports, require) {
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var dropdownMenuItemWithTooltipComponent = require("dropdown-menu-item-with-tooltip-component") /*id: 25628*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = i => {
    let {
      icon: e,
      active: d,
      modeItem: l,
      limitSubTitle: s = "",
      toolTips: r = "",
      disabled: a = false,
      tagNode: c = null,
      onClick: u
    } = i;
    let x = reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWithTooltipComponent.DropdownMenuItemWithTooltip, {
      "data-testid": `deep-thinking-action-item-${l.menu_type}`,
      icon: e,
      disabled: a,
      active: d,
      text: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center gap-2",
        children: [l.name ?? "", c]
      }),
      onClick: u,
      tip: s || l.sub_title_name || "",
      isOverflow: true,
      tipAsExtraInfo: true
    });
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        className: "ml-4",
        position: "right",
        content: r,
        children: x
      });
    } else {
      return x;
    }
  };
  require.r(exports);
  require.d(exports, {
    ThinkingItemFoundation: function () {
      return d;
    }
  });
}