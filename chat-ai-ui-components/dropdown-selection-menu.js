// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h_' to 'dropdownSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27860.52534198.js
         * chunkId: 27860
         * moduleId: 943067
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var dropdownComponent = require("dropdown-component") /*id: 748649*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var s = {
    selected: "selected-jNEHRv",
    "flow-dropdown-menu": "flow-dropdown-menu-FTK3Wg"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function u(e) {
    let {
      list: t,
      value: n,
      onChange: o,
      showTick: u,
      semiDropdownMenuProps: p,
      semiDropdownItemProps: m,
      itemRender: h = e => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: e
      })
    } = e;
    let f = t.map((e, t) => {
      let p = deepEqualUtil_1.deepEqual(n, e);
      return reactCoreLibraryReexport.createElement(dropdownComponent.Dropdown.Item, {
        ...m,
        "data-testid": "dropdown-menu-item",
        key: t,
        onClick: () => {
          if (o != null) {
            o(e, t);
          }
        },
        className: i(m == null ? undefined : m.className, {
          active: p
        })
      }, h(e, t), u && p && reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
        className: s.selected
      }));
    });
    return reactJsxRuntimeCoreReexport.jsx(dropdownComponent.Dropdown.Menu, {
      ...p,
      className: i(p == null ? undefined : p.className, "flow-dropdown-menu", s["flow-dropdown-menu"]),
      children: f
    });
  }
  require.d(exports, {
    dropdownSelection: function () {
      return u;
    }
  });
}