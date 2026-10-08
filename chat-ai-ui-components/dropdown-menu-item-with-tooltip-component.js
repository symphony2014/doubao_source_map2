// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'DropdownMenuItemWithTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27860.52534198.js
         * chunkId: 27860
         * moduleId: 25628
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      text: t,
      active: n,
      onClick: o,
      tip: d,
      icon: c,
      disabled: u,
      isOverflow: p,
      tipAsExtraInfo: m,
      ...h
    } = e;
    let f = p ? reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
      icon: c,
      disabled: u,
      active: n,
      onClick: o,
      extraInfo: m ? d : undefined,
      extraInfoDirection: "vertical",
      classNames: {
        content: "text-left",
        extraInfo: "text-left"
      },
      children: t
    }) : reactJsxRuntimeCoreReexport.jsx("div", {
      onClick: u ? undefined : o,
      className: i("px-10 text-14 leading-28 rounded-full cursor-pointer -ml-4", n ? "text-dbx-text-highlight bg-dbx-fill-highlight-trans-10 font-medium" : "text-dbx-text-primary hover:text-dbx-text-highlight", u && "opacity-30"),
      children: t
    });
    let _ = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ...h,
      ref: _,
      children: u || m ? f : reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        content: d,
        clickToHide: true,
        spacing: p ? undefined : 7,
        style: {
          lineHeight: "18px"
        },
        position: p ? "right" : "bottom",
        children: f
      })
    });
  };
  require.d(exports, {
    DropdownMenuItemWithTooltip: function () {
      return d;
    }
  });
}