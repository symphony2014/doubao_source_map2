// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DropdownMenuItemWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 876844
         */
module.exports = function (module, exports, require) {
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let r = e => {
    let {
      prefix: t,
      disabled: n,
      onClick: r,
      children: o,
      type: a,
      ...s
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
      icon: t,
      themeType: a === "danger" || a === "warning" ? "danger" : "default",
      onClick: r,
      disabled: n,
      ...s,
      children: o
    });
  };
  require.d(exports, {
    DropdownMenuItemWrapper: function () {
      return r;
    }
  });
}