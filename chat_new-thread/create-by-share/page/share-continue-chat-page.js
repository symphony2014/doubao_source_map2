// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'chatPageInteractiveTracker'
// - Resolved require(798740) to 'chat-page-interactive-tracker'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'n' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'd' to 'messageSkeletonLoader'
// - Resolved require(449904) to 'message-skeleton-loader'
// - Renamed variable 'i' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'c' to 'edenxSearchParamsHook'
// - Resolved require(471794) to 'edenx-search-params-hook'
// - Renamed variable 'u' to 'navigateComponentWrapper'
// - Resolved require(870881) to 'navigate-component-wrapper'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(52383) to 'toast-notification-utils'
// - Resolved require.bind(127600) to 'share-continue-chat-handler'
// - Updated imported property 'l' to 'resolveSearchParams' (module 471794)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'F' to 'createNavigateComponent' (module 870881)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'hf' to 'MessageSkeleton' (module 449904)
// - Updated imported property 'O' to 'useChatPageInitTracker' (module 798740)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.365f0f8b.js
         * chunkId: 92296
         * moduleId: 282466
         */
module.exports = function (module, exports, require) {
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var messageSkeletonLoader = require("message-skeleton-loader") /*id: 449904*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var edenxSearchParamsHook = require("edenx-search-params-hook") /*id: 471794*/;
  var navigateComponentWrapper = require("navigate-component-wrapper") /*id: 870881*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = () => {
    let [e] = edenxSearchParamsHook.resolveSearchParams();
    if (e.get("utm_medium") === "share_thread" && e.get("continue_chat") === "1" && e.get("utm_source")) {
      let s = e.get("utm_source");
      if (s) {
        return {
          chatId: s,
          chatType: chatConversationTypes.ConversationTypes.SharedThreadContinueChat
        };
      }
    }
  };
  let x = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("toast-notification-utils") /*id: 52383*/]).then(require.bind(require, "share-continue-chat-handler") /*id: 127600*/).then(e => ({
    default: e.ShareContinueChatComp
  })));
  function o() {
    let e = m();
    if (!e) {
      return reactJsxRuntimeCoreReexport.jsx(navigateComponentWrapper.createNavigateComponent, {
        to: chatRouteConstants.routeChatRoot
      });
    }
    let s = reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-full h-[var(--header-height)]"
      }), reactJsxRuntimeCoreReexport.jsx(messageSkeletonLoader.MessageSkeleton, {})]
    });
    return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: s,
      children: reactJsxRuntimeCoreReexport.jsx(x, {
        ...e,
        children: s
      })
    });
  }
  function j() {
    let {
      pageInteractive: e
    } = chatPageInteractiveTracker.useChatPageInitTracker();
    if (e) {
      return reactJsxRuntimeCoreReexport.jsx(o, {});
    } else {
      return null;
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return j;
    }
  });
}