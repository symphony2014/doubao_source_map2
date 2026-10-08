// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'a' to 'isNullishCheck'
// - Resolved require(282109) to 'is-nullish-check'
// - Renamed variable 'l' to 'chatEditorGuidanceSkeleton'
// - Resolved require(583782) to 'chat-editor-guidance-skeleton'
// - Renamed variable 'o' to 'conversationRateLimit'
// - Resolved require(688086) to 'conversation-rate-limit'
// - Renamed variable 's' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'c' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'chatGuidanceConfig'
// - Resolved require(801476) to 'chat-guidance-config'
// - Renamed variable 'p' to 'responsiveToolButtonHook'
// - Resolved require(726818) to 'responsive-tool-button-hook'
// - Renamed variable 'h' to 'chatTrackingUtils'
// - Resolved require(665561) to 'chat-tracking-utils'
// - Renamed variable 'm' to 'skillChatInputLogger'
// - Resolved require(227185) to 'skill-chat-input-logger'
// - Renamed variable 'g' to 'chatInputSkillHook'
// - Resolved require(913093) to 'chat-input-skill-hook'
// - Renamed variable '_' to 'chatSkillChangeHandlers'
// - Resolved require(378957) to 'chat-skill-change-handlers'
// - Renamed variable 'f' to 'useChatInputInit'
// - Resolved require(569035) to 'use-chat-input-init'
// - Renamed variable 'v' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Z' to 'isNil' (module 282109)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'F' to 'getChatGuidance' (module 801476)
// - Updated imported property 'W' to 'useToolButtonSize' (module 726818)
// - Updated imported property 'i_' to 'buildReportParams' (module 665561)
// - Updated imported property 'mp' to 'buildTrackParamsFromChat' (module 665561)
// - Updated imported property 'U' to 'useChatInputStart' (module 227185)
// - Updated imported property 'V' to 'useConvDisabled' (module 688086)
// - Updated imported property 'cK' to 'guidanceInputPluginHook' (module 232752)
// - Updated imported property 'q' to 'useChatInputSkill' (module 913093)
// - Updated imported property 'f' to 'ChatGuidanceInput' (module 583782)
// - Updated imported property 'H' to 'useChatIdChangeHandler' (module 378957)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'vO' to 'clearTextValue' (module 411117)
// - Updated imported property 'J' to 'useChatInputInit' (module 569035)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 833873
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatEditorGuidanceSkeleton = require("chat-editor-guidance-skeleton") /*id: 583782*/;
  var conversationRateLimit = require("conversation-rate-limit") /*id: 688086*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatGuidanceConfig = require("chat-guidance-config") /*id: 801476*/;
  var responsiveToolButtonHook = require("responsive-tool-button-hook") /*id: 726818*/;
  var chatTrackingUtils = require("chat-tracking-utils") /*id: 665561*/;
  var skillChatInputLogger = require("skill-chat-input-logger") /*id: 227185*/;
  var chatInputSkillHook = require("chat-input-skill-hook") /*id: 913093*/;
  var chatSkillChangeHandlers = require("chat-skill-change-handlers") /*id: 378957*/;
  var useChatInputInit = require("use-chat-input-init") /*id: 569035*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = reactCoreLibraryReexport.memo(function (e) {
    let {
      reportParams: t,
      className: n,
      chatId: k,
      chatType: w,
      showExitSkillButton: b,
      specificSkillType: S,
      enableArouseMoreSkill: E = true,
      renderFallback: x,
      scene: C
    } = e;
    let {
      activeSkillType: I,
      activeSkill: T
    } = chatStoreManager.useStoreSelector("chatInputStore", e => {
      let i = isNullishCheck.isNil(S) ? k ? e.activeSkillTypeMap?.[k] : undefined : S === "generic" ? undefined : S;
      let r = i && k ? {
        ...e.skillMap?.[i],
        skill_type: i
      } : undefined;
      return {
        activeSkillType: i,
        activeSkill: r
      };
    }, deepEqualityUtil.deepEqual);
    let {
      isNewChatInputInChat: N
    } = chatGuidanceConfig.getChatGuidance({
      chatId: k,
      chatType: w
    });
    let {
      inputWidthDivRef: R,
      isToolButtonSmall: j
    } = responsiveToolButtonHook.useToolButtonSize();
    let {
      reportParams: A
    } = chatTrackingUtils.buildReportParams({
      chatId: k,
      chatType: w,
      activeSkill: T
    });
    let $ = skillChatInputLogger.useChatInputStart({
      activeSkillType: I,
      reportParams: {
        ...A,
        ...t
      }
    });
    let {
      trackParams: O
    } = chatTrackingUtils.buildTrackParamsFromChat({
      chatId: k,
      chatType: w,
      activeSkill: T
    });
    let {
      isDisabled: M
    } = conversationRateLimit.useConvDisabled();
    let {
      plugin: P,
      loading: L
    } = chatPluginIocManager.guidanceInputPluginHook(I || "generic");
    let Z = chatInputSkillHook.useChatInputSkill({
      chatId: k,
      chatType: w,
      scene: C,
      disabled: M,
      trackParams: O,
      skill: T ?? {},
      reportParams: {
        ...A,
        ...t
      },
      onBeforeSubmit: $,
      isToolButtonSmall: j
    });
    let D = reactCoreLibraryReexport.useCallback(() => L || !P ? (x == null ? undefined : x({
      small: j
    })) || reactJsxRuntimeCoreReexport.jsx(chatEditorGuidanceSkeleton.ChatGuidanceInput, {
      small: j
    }) : reactJsxRuntimeCoreReexport.jsx(P.Content, {
      ...Z,
      className: n,
      showExitSkillButton: b,
      exitSkillButtonTheme: N ? "borderless" : "default",
      enableArouseMoreSkill: E
    }), [T, P, L, Z, b, j, N]);
    chatSkillChangeHandlers.useChatIdChangeHandler(e => {
      chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(e);
      chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
        if (e != null) {
          e.resetSkillReportEvent();
        }
      });
      chatInputStoreHelpers.clearTextValue();
    });
    useChatInputInit.useChatInputInit(!P || L);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: R,
        className: "h-0 w-full"
      }), D()]
    });
  });
  require.r(exports);
  require.d(exports, {
    GuidanceInputFoundation: function () {
      return k;
    }
  });
}