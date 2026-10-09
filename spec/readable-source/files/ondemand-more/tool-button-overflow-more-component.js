// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'u' to 'dbxDropdownMenuComponents'
// - Resolved require(491728) to 'dbx-dropdown-menu-components'
// - Renamed variable 'd' to 'asyncSkillChatInputBtn'
// - Resolved require(159621) to 'async-skill-chat-input-btn'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Vk' to 'useSkillToolLayout' (module 317711)
// - Updated imported property 'g' to 'SkillChatInputBtn' (module 159621)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-more.7a82db53.js
         * chunkId: 21867
         * moduleId: 409767
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.memo(function (e) {
    let {
      moreButtonPopoverProps: t,
      small: n,
      scene: o,
      children: a,
      content: s
    } = e;
    let {
      skillToolUIV2: f
    } = chatLauncherConfigHooks.useSkillToolLayout(o);
    let [p, v] = reactCoreLibraryReexport.useState(null);
    return reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
      children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          onClick: e => e.stopPropagation(),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            ref: v,
            className: i("*:!z-[1200] h-0 w-0")
          }), reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
            small: n,
            scene: o,
            className: i("flex items-center justify-center p-0", f ? "size-32" : n ? "size-28" : "size-36"),
            children: s
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
        container: p,
        children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
          className: t == null ? undefined : t.contentClassName,
          children: a
        })
      })]
    });
  }, deepEqualUtil_1.deepEqual);
  require.r(exports);
  require.d(exports, {
    ToolButtonOverflowMore: function () {
      return s;
    }
  });
}