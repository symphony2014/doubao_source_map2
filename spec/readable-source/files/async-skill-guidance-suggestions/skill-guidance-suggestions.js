// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'chatViewConstants'
// - Resolved require(528191) to 'chat-view-constants'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'chatPluginMatcherRegistry'
// - Resolved require(107672) to 'chat-plugin-matcher-registry'
// - Renamed variable 's' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'c' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 'd' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'p' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 'm' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable '_' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'g' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Updated imported property 'ai' to 'useSkillConfig' (module 441131)
// - Updated imported property 'U5' to 'useGuidanceSuggestionsMatcher' (module 107672)
// - Updated imported property 'Y6' to 'guidanceSuggestionsHook' (module 232752)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'IO' to 'getBotId' (module 390347)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'ci' to 'formatSkillId' (module 361602)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'M' to 'chatViewConstants' (module 528191)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 921470
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var chatViewConstants = require("chat-view-constants") /*id: 528191*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      className: i,
      chatId: r,
      chatType: n,
      activeSkillType: l,
      navigate: f,
      reportParams: g,
      onBeforeSendMessage: h,
      isSuperTaskSwitchEnabled: y,
      experimentParams: k,
      show_scene: w
    } = e;
    let b = chatGuidanceSelectors.useSkillConfig();
    let x = b == null ? undefined : b.find(e => e.skill_type === l);
    let {
      matcher: S
    } = chatPluginMatcherRegistry.useGuidanceSuggestionsMatcher();
    let C = (S ?? []).map(e => e({
      activeSkillType: l,
      isSuperTaskSwitchEnabled: y
    })).find(e => e !== undefined) ?? (l || "generic");
    let {
      plugin: P,
      loading: j
    } = chatPluginIocManager.guidanceSuggestionsHook(C);
    let T = chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getBotId);
    let R = {
      show_scene: w || "bottom_bar",
      skill_id: l == null ? undefined : l.toString(),
      skill_name: skillTypeMappings.getSkillName(l),
      conversation_id: r,
      bot_id: T
    };
    let N = {
      scene: "chat_action_bar",
      preset_prompt_type: "default_prompt",
      send_source: "guidance_page_click",
      skill_type: l,
      skill_type_str: skillTypeMappings.formatSkillId(l),
      skill_id: skillTypeMappings.formatSkillId(l),
      ...g
    };
    reactCoreLibraryReexport.useLayoutEffect(() => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "guidance_suggestions_start",
        meta: N
      });
    }, [l]);
    if (j || !P) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: i,
        children: reactJsxRuntimeCoreReexport.jsx(P.Content, {
          chatId: r,
          chatType: n,
          skillConfig: x,
          navigate: f,
          reportParams: N,
          trackParams: R,
          onBeforeSendMessage: h,
          onAfterSendMessage: function ({
            exitSkill: e = false
          } = {}) {
            if (e) {
              chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(r);
            }
          },
          experimentParams: k
        })
      });
    }
  };
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  let h = e => {
    let {
      chatId: t,
      activeSkillType: i,
      isSuperTaskSwitchEnabled: r,
      contentClassName: a,
      className: o
    } = e;
    let s = useNavigateRuntimeResolver.useNavigateResolver();
    if (i || r) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: n("relative w-full", "max-w-[var(--content-max-width)]", o),
        style: {
          height: "calc(100px + var(--skillbar-min-height))"
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: n("absolute bottom-0 left-0 h-fit w-full", a),
          children: reactJsxRuntimeCoreReexport.jsx(f, {
            className: "h-fit",
            chatId: t,
            activeSkillType: i,
            isSuperTaskSwitchEnabled: r,
            navigate: (e, t) => {
              if (s != null) {
                s(e, {
                  ...t,
                  state: {
                    from: chatViewConstants.chatViewConstants.GUIDANCE_SUGGESTIONS,
                    ...(t == null ? undefined : t.state)
                  }
                });
              }
            },
            experimentParams: {
              guidancePageLayoutMode: "1"
            },
            show_scene: "landing"
          })
        })
      });
    } else {
      return null;
    }
  };
  require.r(exports);
  require.d(exports, {
    GuidanceSuggestions: function () {
      return h;
    }
  });
}