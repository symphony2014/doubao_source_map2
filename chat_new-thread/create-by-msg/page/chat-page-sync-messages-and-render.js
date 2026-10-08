// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatPageInteractiveTracker'
// - Resolved require(798740) to 'chat-page-interactive-tracker'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'l' to 'chatInputLayoutContainer'
// - Resolved require(106065) to 'chat-input-layout-container'
// - Renamed variable 'd' to 'chatPageInitHooks'
// - Resolved require(915217) to 'chat-page-init-hooks'
// - Renamed variable 'u' to 'aliceChatService'
// - Resolved require(756668) to 'alice-chat-service'
// - Renamed variable 'c' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'v' to 'loadConversationList'
// - Resolved require(739168) to 'load-conversation-list'
// - Renamed variable '_' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'f' to 'edenxSearchParamsHook'
// - Resolved require(471794) to 'edenx-search-params-hook'
// - Renamed variable 'm' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'l' to 'resolveSearchParams' (module 471794)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'Q' to 'chatPageInitService' (module 915217)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'Wu' to 'SettingApiService' (module 147875)
// - Updated imported property 'EM' to 'AliceChatService' (module 756668)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// - Updated imported property 'F' to 'loadConversationList' (module 739168)
// - Updated imported property 'r' to 'ChatInputLayout' (module 106065)
// - Updated imported property 'O' to 'useChatPageInitTracker' (module 798740)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.2dd70858.js
         * chunkId: 51606
         * moduleId: 531921
         */
module.exports = function (module, exports, require) {
  var i;
  var a;
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatInputLayoutContainer = require("chat-input-layout-container") /*id: 106065*/;
  var chatPageInitHooks = require("chat-page-init-hooks") /*id: 915217*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var loadConversationList = require("load-conversation-list") /*id: 739168*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var edenxSearchParamsHook = require("edenx-search-params-hook") /*id: 471794*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  (i = {}).GlobalLauncher = "global_launcher";
  i.TextSelectionBar = "text_selection_bar";
  let h = i;
  (a = {}).SuggestedPrompt = "suggested_prompt";
  let g = a;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = () => {
    let [e] = edenxSearchParamsHook.resolveSearchParams();
    let t = e.get("msgIdList");
    let n = e.get("suggestText");
    let i = e.get("login_source");
    let a = useNavigateRuntimeResolver.useNavigateResolver();
    let {
      initLoadMessageInChatPage: r
    } = chatPageInitHooks.chatPageInitService();
    reactCoreLibraryReexport.useEffect(() => {
      l();
    }, []);
    let l = async () => {
      try {
        var o;
        var l;
        var m;
        var p;
        let y = (l = chatFeedStoreFactory.useFeedStore.getState()) === null || l === undefined ? undefined : (o = l.conversationLinks) === null || o === undefined ? undefined : o[0]?.conversationId;
        let S = t ? JSON.parse(decodeURIComponent(t)) : [];
        if (Array.isArray(S) && S.length) {
          let e = await apiServicesCollection.SettingApiService.Launch();
          let t = await (await aliceChatService.AliceChatService()).threadCreate({
            bot_id: e == null ? undefined : e.data?.assistant_bot_id,
            samantha_onboarding: {
              type: "tool_messages",
              value: JSON.stringify(S)
            }
          });
          let o = ((p = t.data) === null || p === undefined ? undefined : (m = p.thread_info) === null || m === undefined ? undefined : m.conversation?.conversation_id) || y;
          if (t.code === 0) {
            await r(o);
            a(`${chatRouteConstants.routeChatRoot}${o}`, {
              replace: true,
              state: n ? {
                message: JSON.parse(decodeURIComponent(n)),
                scene: i === h.GlobalLauncher ? h.GlobalLauncher : h.TextSelectionBar,
                sec_scene: g.SuggestedPrompt
              } : undefined
            });
            await loadConversationList.loadConversationList({
              isReload: false
            });
          } else {
            throw Error("同步消息失败");
          }
        } else {
          throw Error("不存在msgIdList");
        }
      } catch (e) {
        a(chatRouteConstants.routeChatRoot, {
          replace: true
        });
      }
    };
  };
  let S = () => {
    y();
    return reactJsxRuntimeCoreReexport.jsx(chatInputLayoutContainer.ChatInputLayout, {});
  };
  function b() {
    let {
      pageInteractive: e
    } = chatPageInteractiveTracker.useChatPageInitTracker();
    if (e) {
      return reactJsxRuntimeCoreReexport.jsx(S, {});
    } else {
      return null;
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return b;
    }
  });
}