// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'SamanthaContextMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 245967
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var contextMenuStyles = require("context-menu-styles") /*id: 63053*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      className: i,
      dataTestId: t,
      menus: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Menu, {
      className: a(contextMenuStyles.contextMenuStyles["context-menu-wrapper"], i),
      "data-testid": t,
      children: n.map((e, i) => {
        if (e.type === "divider") {
          return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Divider, {}, i);
        }
        let {
          key: t,
          disabled: n,
          disabledTip: c,
          type: d,
          onClick: u,
          icon: p,
          render: m,
          preventDefault: _ = true
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
          "data-testid": `samantha_dropdown_item_${t}`,
          disabled: n,
          className: a(contextMenuStyles.contextMenuStyles["context-menu-item"], {
            [contextMenuStyles.contextMenuStyles.danger]: d === "danger",
            [contextMenuStyles.contextMenuStyles.disabled]: n
          }),
          onClick: e => {
            if (_) {
              e.preventDefault();
              e.stopPropagation();
            }
            if (u != null) {
              u();
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: c,
            className: a({
              "!hidden": !n || !c
            }),
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: contextMenuStyles.contextMenuStyles["item-wrapper"],
              children: [p, typeof m == "function" ? m() : m]
            })
          })
        }, t);
      })
    });
  };
  require.d(exports, {
    SamanthaContextMenu: function () {
      return c;
    }
  });
}