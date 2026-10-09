// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactHelmetWrapper'
// - Resolved require(941380) to 'react-helmet-wrapper'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'i' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'brandNameConstants'
// - Resolved require(63170) to 'brand-name-constants'
// - Renamed variable 'c' to 'userAgentPlatformUtils'
// - Resolved require(221233) to 'user-agent-platform-utils'
// - Renamed variable 'd' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// - Renamed variable 'f' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'm' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'v' to 'chatAbConfigSelectors'
// - Resolved require(561916) to 'chat-ab-config-selectors'
// - Renamed variable 'p' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'h' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 'g' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'b' to 'validateNumericString'
// - Resolved require(93601) to 'validate-numeric-string'
// - Renamed variable 'y' to 'useParamsResolver'
// - Resolved require(790576) to 'use-params-resolver'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'CU' to 'useActiveSkillId' (module 441131)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'fz' to 'getBrandName' (module 63170)
// - Updated imported property 'aB' to 'isSpecialBuild' (module 221233)
// - Updated imported property 'U' to 'useParamsResolver' (module 790576)
// - Updated imported property 'nu' to 'selectUserInfoSuccess_1' (module 480327)
// - Updated imported property 'tI' to 'useChatAbSelectors' (module 561916)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'k' to 'isValidNumber' (module 93601)
// - Updated imported property 'jo' to 'getConversation' (module 390347)
// - Updated imported property 'VI' to 'BotTypes' (module 746101)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'q' to 'createHelmetWrapper' (module 941380)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 86044
         */
module.exports = function (module, exports, require) {
  var reactHelmetWrapper = require("react-helmet-wrapper") /*id: 941380*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let s = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let t = chatGuidanceSelectors.useActiveSkillId();
    let {
      skillMap: n
    } = chatStoreManager.useStoreSelector("skillStore");
    let r = t ? n[t] : undefined;
    if (r == null ? undefined : r.helmetTitleI18nKey) {
      return e(r == null ? undefined : r.helmetTitleI18nKey);
    } else {
      return "";
    }
  };
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var userAgentPlatformUtils = require("user-agent-platform-utils") /*id: 221233*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  let u = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let t = brandNameConstants.getBrandName();
    let n = userAgentPlatformUtils.isSpecialBuild();
    return `${processBrowserShim.env.CLIENT_LOCAL_BUILD ? e("new_tab_title") : n ? t : e("web_seo_doubao_index")}`;
  };
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatAbConfigSelectors = require("chat-ab-config-selectors") /*id: 561916*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var validateNumericString = require("validate-numeric-string") /*id: 93601*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  let w = () => {
    let {
      id: e
    } = useParamsResolver.useParamsResolver();
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let n = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let {
      isLandingToMainCoco: r,
      excludeNewConversationButton: a
    } = chatAbConfigSelectors.useChatAbSelectors();
    let i = chatFeedStoreFactory.useFeedStore(i => {
      if (!e || !validateNumericString.isValidNumber(e)) {
        return "";
      }
      let o = chatConversationSelectors_2.getConversation(i, e);
      if ((o == null ? undefined : o.conversation_type) && [chatCoreConstants.BotTypes.Coco, chatCoreConstants.BotTypes.CocoWeb].includes(o == null ? undefined : o.conversation_type) && n) {
        if (r) {
          if (a) {
            return "";
          } else {
            return t("chat_main");
          }
        } else {
          return t("recent_chats_main_bot_doubao_title");
        }
      } else if (o == null) {
        return undefined;
      } else {
        return o.name;
      }
    }, deepEqualityUtil.deepEqual);
    let s = brandNameConstants.getBrandName();
    if (i) {
      return `
            ${i} - ${s}`;
    } else {
      return "";
    }
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = () => {
    let e = u();
    let t = w();
    let n = s();
    return reactJsxRuntimeCoreReexport.jsx(reactHelmetWrapper.createHelmetWrapper, {
      children: reactJsxRuntimeCoreReexport.jsx("title", {
        children: t || n || e
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    HelmetTitle: function () {
      return x;
    }
  });
}