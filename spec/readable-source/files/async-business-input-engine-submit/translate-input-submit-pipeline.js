// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'businessLangMapper'
// - Resolved require(122238) to 'business-lang-mapper'
// - Renamed variable 'r' to 'translateSkillLangUtils'
// - Resolved require(226897) to 'translate-skill-lang-utils'
// - Renamed variable 'l' to 'aiChatEnumConstants'
// - Resolved require(458113) to 'ai-chat-enum-constants'
// - Renamed variable 'a' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'cjkAwareConcat'
// - Resolved require(234823) to 'cjk-aware-concat'
// - Renamed variable 's' to 'chatInputGuidanceStore'
// - Resolved require(976175) to 'chat-input-guidance-store'
// - Updated imported property 'YC' to 'getActionValue' (module 411117)
// - Updated imported property 'jW' to 'chatInputStore' (module 976175)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'CE' to 'getLanguageLoc' (module 226897)
// - Updated imported property 'M9' to 'getLanguageValue' (module 226897)
// - Updated imported property 'zo' to 'skillTypes' (module 458113)
// - Updated imported property 'a' to 'smartConcat' (module 234823)
// - Updated imported property 'F' to 'mapLangInput' (module 122238)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 436173
         */
module.exports = function (module, exports, require) {
  var businessLangMapper = require("business-lang-mapper") /*id: 122238*/;
  var translateSkillLangUtils = require("translate-skill-lang-utils") /*id: 226897*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var cjkAwareConcat = require("cjk-aware-concat") /*id: 234823*/;
  var chatInputGuidanceStore = require("chat-input-guidance-store") /*id: 976175*/;
  let c = {
    id: "biz-translate:input-submit-workflow",
    submitNodes: [{
      id: "translate:input-skill-node",
      execute: e => {
        var i;
        let {
          content: f
        } = e;
        let v = chatInputStoreHelpers.getActionValue("translate_language");
        let m = chatInputGuidanceStore.chatInputStore.getState().guidanceConfig;
        let g = {
          language_loc: i18nTranslationUtils.i18nextTranslate("flow_web_ext_action_popup_autodetect"),
          language: "",
          value: "",
          language_code: "auto",
          is_default: true
        };
        let y = [...((m == null ? undefined : m.language) ?? []), g];
        let h = (m == null ? undefined : (i = m.language) === null || i === undefined ? undefined : i.find(e => e.language_code === v)?.language_loc) ?? "";
        let S = translateSkillLangUtils.getLanguageLoc(y, g.language_code);
        let k = translateSkillLangUtils.getLanguageLoc((m == null ? undefined : m.language) ?? [], v);
        let T = translateSkillLangUtils.getLanguageValue((m == null ? undefined : m.language) ?? [], v);
        let {
          abilityType: E = aiChatEnumConstants.skillTypes.SkillTranslate
        } = e.content;
        let b = {
          skill_id: E == null ? undefined : E.toString(),
          skill_type: E
        };
        let {
          text: R = ""
        } = e.content;
        let w = cjkAwareConcat.smartConcat(i18nTranslationUtils.i18nextTranslate("flow_web_ext_action_translate_to"), h);
        f.text = w;
        f.abilityParams = {
          ...businessLangMapper.mapLangInput({
            sourceLangValue: g.value,
            targetLangValue: T,
            sourceLangName: S,
            targetLangName: k
          })
        };
        e.content.extra = {
          ...e.content.extra,
          input_skill: JSON.stringify(b)
        };
        f.refContents = [{
          type: "text",
          text: R
        }];
        return Promise.resolve(e);
      }
    }],
    afterSubmitNodes: []
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return c;
    }
  });
}