// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'useSearchParamsChange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 984541
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => function (t) {
    let n = useLocationWrapper.useLocationWrapper();
    let u = usePreviousHook.usePrevious(n, (e, t) => !e || !t || e.pathname !== t.pathname || !deepEqualUtil_1.deepEqual(e.state, t.state));
    let {
      exitSelectMode: h
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      exitSelectMode: e.exitSelectMode
    }), deepEqualityUtil.deepEqual);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (!collectionIncludesUtil.includes(["chat_item_menu_share", "chat_item_menu_collection"], n.state?.enter_from)) {
        h();
      }
    }, [u]);
    return reactJsxRuntimeCoreReexport.jsx(e, {
      ...(t || {})
    });
  };
  require.d(exports, {
    useSearchParamsChange: function () {
      return u;
    }
  });
}