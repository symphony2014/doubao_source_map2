// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'useContextMenuDropdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 737677
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      referenceStyle: t,
      dropdownProps: n,
      appendTo: s
    } = e;
    let [d, c] = reactCoreLibraryReexport.useState([0, 0]);
    let [u, h] = reactCoreLibraryReexport.useState(false);
    let p = s == null ? undefined : s();
    let v = reactFunctionMemoHook.useMemoizedCallback(e => {
      c(e);
      h(true);
    });
    let m = reactFunctionMemoHook.useMemoizedCallback(() => {
      h(false);
    });
    let g = reactJsxRuntimeCoreReexport.jsx("div", {
      style: {
        position: "fixed",
        left: d[0],
        top: d[1],
        width: 1,
        height: 1,
        ...t
      }
    });
    let _ = reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
      trigger: "custom",
      position: "bottomLeft",
      visible: u,
      onVisibleChange: h,
      onClickOutSide: () => h(false),
      ...n,
      children: g
    });
    return {
      hideContextMenu: m,
      showContextMenu: v,
      dropdown: p ? reactDomEntryWrapper.createPortal(_, p) : _
    };
  };
  require.d(exports, {
    useContextMenuDropdown: function () {
      return s;
    }
  });
}