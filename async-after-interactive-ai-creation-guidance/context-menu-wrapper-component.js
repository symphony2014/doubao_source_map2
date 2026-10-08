// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'ContextMenuWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 579216
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      className: t,
      dataTestId: n,
      menus: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Menu, {
      className: i("context-menu-wrapper-WcDbIg", t),
      "data-testid": n,
      children: r.map((e, t) => {
        if (e.type === "divider") {
          return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Divider, {}, t);
        }
        let {
          key: n,
          disabled: r,
          disabledTip: l,
          type: c,
          onClick: d,
          icon: u,
          render: p,
          preventDefault: h = true
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
          "data-testid": `samantha_dropdown_item_${n}`,
          disabled: r,
          className: i("context-menu-item-KHPfat", {
            "danger-yxNlGk": c === "danger",
            "disabled-PsjaE7": r
          }),
          onClick: e => {
            if (h) {
              e.preventDefault();
              e.stopPropagation();
            }
            if (d != null) {
              d();
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: l,
            className: i({
              "!hidden": !r || !l
            }),
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "item-wrapper-f03V5H",
              children: [u, typeof p == "function" ? p() : p]
            })
          })
        }, n);
      })
    });
  };
  require.d(exports, {
    ContextMenuWrapper: function () {
      return l;
    }
  });
}