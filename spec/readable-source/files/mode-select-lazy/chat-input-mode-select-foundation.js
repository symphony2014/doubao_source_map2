// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'd' to 'reactUseChangedRef'
// - Resolved require(284850) to 'react-use-changed-ref'
// - Renamed variable 'c' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'f' to 'dbxDropdownMenuComponents'
// - Resolved require(491728) to 'dbx-dropdown-menu-components'
// - Renamed variable 'p' to 'chatAiModeSelectButton'
// - Resolved require(373824) to 'chat-ai-mode-select-button'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'D' to 'useChangedRef' (module 284850)
// - Updated imported property 'O5' to 'inputModeSelectHook' (module 232752)
// - Updated imported property 'H' to 'AiModeSelectButton' (module 373824)
// - Updated imported property 'yQ' to 'LocalStorageWrapper' (module 319763)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: mode-select-lazy.30609f3f.js
         * chunkId: 57080
         * moduleId: 867884
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var chatAiModeSelectButton = require("chat-ai-mode-select-button") /*id: 373824*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      chatId: t = "",
      list: n = [],
      className: a,
      isOverflow: m,
      ...h
    } = e;
    let [x, g] = chatStoreManager.useStoreSelector("chatInputStore", e => {
      return [e.modeSelectValue ?? "0", e.modeSelectConfigs];
    }, deepEqualityUtil.deepEqual);
    let {
      menu_item_list: w = []
    } = g ?? {};
    let b = reactUseChangedRef.useChangedRef(n.map(e => e.pluginIdentifier), deepEqualityUtil.deepEqual);
    let y = reactCoreLibraryReexport.useRef(null);
    let {
      pluginList: M,
      loading: j
    } = chatPluginIocManager.inputModeSelectHook(b);
    let C = e => M.find(t => {
      return String(t == null ? undefined : t.params?.value) === e;
    });
    let E = reactCoreLibraryReexport.useMemo(() => j ? null : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: w.map(e => {
        let n = M.find(t => {
          return (t == null ? undefined : t.params?.value) === e.menu_type;
        });
        if (n == null ? undefined : n.Content) {
          return reactJsxRuntimeCoreReexport.jsx(n.Content, {
            ...h,
            chatId: t,
            modeItem: e,
            isToolButtonSmall: false,
            className: a
          });
        } else {
          return null;
        }
      })
    }), [j, M, b, w]);
    let R = reactCoreLibraryReexport.useMemo(() => {
      let e = C(x);
      let n = w.find(e => String(e.menu_type) === x);
      if (M.length === 0) {
        return reactJsxRuntimeCoreReexport.jsx(chatAiModeSelectButton.AiModeSelectButton, {});
      } else if ((e == null ? undefined : e.SelectedContent) && n) {
        return reactJsxRuntimeCoreReexport.jsx(e.SelectedContent, {
          ...h,
          chatId: t,
          modeItem: n,
          isToolButtonSmall: false,
          className: a
        });
      } else {
        return null;
      }
    }, [M, x, w]);
    reactCoreLibraryReexport.useEffect(() => {
      try {
        storageWrapperWithFallback.LocalStorageWrapper.setItem("mode_select_value", x);
      } catch (e) {}
      loggerServiceCore.defaultLogger.persist.success({
        eventName: `on_mode_select_value_${x}`
      });
    }, [x]);
    if (m) {
      return E;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
        onOpenChange: e => {},
        children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            "data-testid": "mode-select-action-button",
            className: "relative",
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              ref: y,
              className: i("*:!z-1 h-0 w-0")
            }), R]
          })
        }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
          container: y.current,
          children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
            side: "top",
            children: E
          })
        })]
      });
    }
  };
  require.r(exports);
  require.d(exports, {
    InputEngineModeSelectFoundation: function () {
      return m;
    }
  });
}