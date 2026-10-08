// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'chatConversationUnreadBadge'
// - Resolved require(66044) to 'chat-conversation-unread-badge'
// - Renamed variable 's' to 'chatBotUnreadBadge'
// - Resolved require(370441) to 'chat-bot-unread-badge'
// - Renamed variable 'l' to 'chatLayoutResponsiveHooks'
// - Resolved require(833112) to 'chat-layout-responsive-hooks'
// - Renamed variable 'c' to 'sidebarChatNavLink'
// - Resolved require(581834) to 'sidebar-chat-nav-link'
// - Renamed variable 'd' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'h' to 'chatConversationCheckers'
// - Resolved require(104471) to 'chat-conversation-checkers'
// - Renamed variable 'p' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'f' to 'resolveRuntimeHook'
// - Resolved require(770715) to 'resolve-runtime-hook'
// - Renamed variable 'm' to 'useParamsResolver'
// - Resolved require(790576) to 'use-params-resolver'
// - Renamed variable 'g' to 'chatLayoutRouteMatchers'
// - Resolved require(391713) to 'chat-layout-route-matchers'
// - Renamed variable 'v' to 'chatAbConfigSelectorHook'
// - Resolved require(167077) to 'chat-ab-config-selector-hook'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 't' to 'useChatAbConfigSelector' (module 167077)
// - Updated imported property 'fT' to 'getConversationMeta' (module 783144)
// - Updated imported property 'Iy' to 'getConversationBase' (module 783144)
// - Updated imported property 'sX' to 'selectConversation' (module 783144)
// - Updated imported property 'S' to 'resolveUseMatches' (module 770715)
// - Updated imported property 'U' to 'useParamsResolver' (module 790576)
// - Updated imported property 'x9' to 'isCocoPlatform' (module 104471)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'p' to 'useChatMediaQuery' (module 833112)
// - Updated imported property 'X' to 'ChatGuidanceNavLink' (module 581834)
// - Updated imported property 'Zl' to 'isValidChatIdPage' (module 391713)
// - Updated imported property 'E' to 'ChatBotUnreadBadge' (module 370441)
// - Updated imported property 'N' to 'ConversationUnreadBadge' (module 66044)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-layout.adb7a8b6.js
         * chunkId: 36969
         * moduleId: 948972
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatConversationUnreadBadge = require("chat-conversation-unread-badge") /*id: 66044*/;
  var chatBotUnreadBadge = require("chat-bot-unread-badge") /*id: 370441*/;
  var chatLayoutResponsiveHooks = require("chat-layout-responsive-hooks") /*id: 833112*/;
  var sidebarChatNavLink = require("sidebar-chat-nav-link") /*id: 581834*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var resolveRuntimeHook = require("resolve-runtime-hook") /*id: 770715*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  var chatLayoutRouteMatchers = require("chat-layout-route-matchers") /*id: 391713*/;
  var chatAbConfigSelectorHook = require("chat-ab-config-selector-hook") /*id: 167077*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      title: n,
      v2: i
    } = e;
    let {
      excludeNewConversationButton: y
    } = chatAbConfigSelectorHook.useChatAbConfigSelector();
    let {
      conversationLinks: w
    } = chatConversationSelectors.getConversationMeta();
    let x = chatConversationSelectors.getConversationBase();
    let C = resolveRuntimeHook.resolveUseMatches();
    let {
      id: S
    } = useParamsResolver.useParamsResolver();
    let _ = y ? (x == null ? undefined : x.conversationId) || w.find(e => chatConversationCheckers.isCocoPlatform(e.conversationType))?.conversationId : undefined;
    let E = chatConversationSelectors.selectConversation(_ || "");
    let j = chatFeedStoreFactory.useFeedStore(e => e.lastMessageIndexMap[_ || ""], deepEqualityUtil.deepEqual);
    let R = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand);
    let k = chatLayoutResponsiveHooks.useChatMediaQuery(R);
    let $ = chatStoreManager.useStoreSelector("flowWebLayoutStore", e => e.sidebarStatus);
    let O = k ? $ === "mobile-suspense" : $ === "open";
    if (E) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "relative",
        children: [reactJsxRuntimeCoreReexport.jsx(sidebarChatNavLink.ChatGuidanceNavLink, {
          title: n,
          mainConversationId: _,
          v2: i
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: o("absolute inset-y-0 right-10 flex items-center", {
            hidden: S === _ && chatLayoutRouteMatchers.isValidChatIdPage(C)
          }),
          children: i ? reactJsxRuntimeCoreReexport.jsx(chatBotUnreadBadge.ChatBotUnreadBadge, {
            conversation: E,
            lastMessageIndex: j,
            inView: O
          }) : reactJsxRuntimeCoreReexport.jsx(chatConversationUnreadBadge.ConversationUnreadBadge, {
            conversation: E,
            lastMessageIndex: j,
            inView: O
          })
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(sidebarChatNavLink.ChatGuidanceNavLink, {
        title: n,
        v2: i
      });
    }
  };
  require.r(exports);
  require.d(exports, {
    MainConversationWithUrl: function () {
      return y;
    }
  });
}