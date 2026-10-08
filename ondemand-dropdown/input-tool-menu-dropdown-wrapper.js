// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'd' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'u' to 'dbxDropdownMenuComponents'
// - Resolved require(491728) to 'dbx-dropdown-menu-components'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Pe' to 'inputToolMenuHook' (module 232752)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-dropdown.6752b07d.js
         * chunkId: 65525
         * moduleId: 510298
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      pluginIdentifier: t,
      ...n
    } = e;
    let {
      plugin: r
    } = chatPluginIocManager.inputToolMenuHook(t);
    let o = r == null ? undefined : r.Content;
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(o, {
        ...n
      });
    } else {
      return null;
    }
  };
  let f = e => {
    let {
      children: t,
      list: n,
      defaultOpen: a,
      ...l
    } = e;
    let [f, p] = reactCoreLibraryReexport.useState(a != null && a);
    let x = reactCoreLibraryReexport.useRef(null);
    let v = reactCoreLibraryReexport.useRef(null);
    let [m, h] = reactCoreLibraryReexport.useState(null);
    let g = useLatestCallbackHook_1.useLatestCallback(e => m && reactDomEntryWrapper.createPortal(e, m));
    let w = {
      ...l,
      portalMenuOption: g,
      closeMenu: () => p(false),
      menuVisible: f
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex size-36 items-center justify-center",
      children: [reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
        open: f,
        onOpenChange: e => p(e),
        modal: false,
        children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            onClick: e => e.stopPropagation(),
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              ref: x,
              className: i("*:!z-[1200] h-0 w-0")
            }), t]
          })
        }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
          container: x.current,
          children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
            ref: h,
            side: "top",
            className: "min-h-84"
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
        open: true,
        modal: false,
        children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {}), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "pointer-events-none invisible absolute h-0 w-0",
          ref: v
        }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
          container: v.current,
          children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
            className: "pointer-events-none invisible",
            children: n.map(e => reactJsxRuntimeCoreReexport.jsx(c, {
              pluginIdentifier: e,
              ...w
            }, String(e)))
          })
        })]
      })]
    });
  };
  require.d(exports, {
    InputToolMenuDropdownWrapper: function () {
      return f;
    }
  });
}