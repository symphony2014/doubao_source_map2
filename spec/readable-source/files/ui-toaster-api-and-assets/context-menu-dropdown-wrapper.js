// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'useContextMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 979062
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      referenceStyle: i,
      dropdownProps: t,
      appendTo: l
    } = e;
    let [c, d] = reactCoreLibraryReexport.useState([0, 0]);
    let [u, p] = reactCoreLibraryReexport.useState(false);
    let m = l == null ? undefined : l();
    let _ = reactFunctionMemoHook.useMemoizedCallback(e => {
      d(e);
      p(true);
    });
    let h = reactFunctionMemoHook.useMemoizedCallback(() => {
      p(false);
    });
    let f = reactJsxRuntimeCoreReexport.jsx("div", {
      style: {
        position: "fixed",
        left: c[0],
        top: c[1],
        width: 1,
        height: 1,
        ...i
      }
    });
    let v = reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
      trigger: "custom",
      position: "bottomLeft",
      visible: u,
      onVisibleChange: p,
      onClickOutSide: () => p(false),
      ...t,
      children: f
    });
    return {
      hideContextMenu: h,
      showContextMenu: _,
      dropdown: m ? reactDomEntryWrapper.createPortal(v, m) : v
    };
  };
  require.d(exports, {
    useContextMenu: function () {
      return l;
    }
  });
}