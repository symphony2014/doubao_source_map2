// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'routeStoreHook'
// - Resolved require(795456) to 'route-store-hook'
// - Renamed variable 'i' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 's' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'l' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(71518) to 'ui-avatar-typography-tag'
// - Resolved require.e(80045) to 'form-validation-utils'
// - Resolved require.e(50072) to 'animation-date-ui-utilities'
// - Resolved require.e(33586) to 'ui-dropdown-toast'
// - Resolved require.e(27079) to 'dnd-kit-react-components'
// - Resolved require.e(59228) comment to 'css-unknown'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(79175) to 'samantha-message-utils'
// - Resolved require.e(75029) to 'bot-settings'
// - Resolved require.bind(692661) to 'bot-settings-side-sheet-component'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'R' to 'routeStore' (module 795456)
// - Updated imported property 'sX' to 'selectConversation' (module 783144)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 760762
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var routeStoreHook = require("route-store-hook") /*id: 795456*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("form-validation-utils") /*id: 80045*/, require.e("animation-date-ui-utilities") /*id: 50072*/, require.e("ui-dropdown-toast") /*id: 33586*/, require.e("dnd-kit-react-components") /*id: 27079*/, require.e("59228") /*id: css-unknown*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("bot-settings") /*id: 75029*/]).then(require.bind(require, "bot-settings-side-sheet-component") /*id: 692661*/)
  })));
  function u() {
    let e = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let {
      chatId: t
    } = e ?? {
      chatId: ""
    };
    let {
      activeKey: n,
      mode: r
    } = routeStoreHook.routeStore();
    let s = chatConversationSelectors.selectConversation(t);
    let l = (s == null ? undefined : s.bot_id) || t;
    let u = r === "setting" ? t === n : l !== undefined && l === n;
    if (e && u) {
      return reactJsxRuntimeCoreReexport.jsx(d, {
        ...e
      });
    } else {
      return null;
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return u;
    }
  });
}