// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'r' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'l' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'a' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'musicSkillGuidanceStore'
// - Resolved require(240022) to 'music-skill-guidance-store'
// - Renamed variable 'u' to 'musicGenerationTemplateParser'
// - Resolved require(802219) to 'music-generation-template-parser'
// - Updated imported property 'l_' to 'createTextData' (module 411117)
// - Updated imported property 't' to 'musicGuidanceStore' (module 240022)
// - Updated imported property 'YQ' to 'templateKeys' (module 802219)
// - Updated imported property 'Dt' to 'getGenerationResult' (module 802219)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'lx' to 'getSkillActionClass' (module 361602)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 674044
         */
module.exports = function (module, exports, require) {
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var musicSkillGuidanceStore = require("music-skill-guidance-store") /*id: 240022*/;
  var musicGenerationTemplateParser = require("music-generation-template-parser") /*id: 802219*/;
  let s = {
    id: "biz-music:input-submit-workflow",
    submitNodes: [{
      id: "music-creation:input-skill-node",
      execute: e => {
        var i;
        var s;
        let d = e.content.editorValue || chatInputStoreHelpers.createTextData();
        let p = ((i = musicSkillGuidanceStore.musicGuidanceStore.getState().packInputConfig) === null || i === undefined ? undefined : i.inputConfig?.input_options) ?? {};
        let _ = d == null ? undefined : d.data.filter(e => (e == null ? undefined : e.key) !== musicGenerationTemplateParser.templateKeys.customLyric && (e == null ? undefined : e.key) !== musicGenerationTemplateParser.templateKeys.theme);
        let f = inputToolConverter.extractText(_);
        let v = musicGenerationTemplateParser.getGenerationResult(d, p);
        let m = v.generation_type === "custome_lyric";
        let g = musicSkillGuidanceStore.musicGuidanceStore.getState().lyric || "";
        let y = {
          skill_type: e.content.abilityType || chatAppEnums.SkillType.MusicAssistant
        };
        let h = {
          lyric: m ? g : "",
          ...v
        };
        let S = {
          ...e.content.reportParams,
          skill_type: y.skill_type,
          skill_type_str: String(y.skill_type),
          scene: "chat_action_bar",
          sec_scene: e.content.reportParams.sec_scene ? String(e.content.reportParams.sec_scene) : skillTypeMappings.getSkillActionClass(y.skill_type),
          use_skill: 1,
          lyric_type: m ? "customize_lyric" : "ai_lyric",
          genre: v.genre || "",
          mood: v.mood || "",
          tone: v.gender || "",
          gender: v.gender || ""
        };
        let k = {
          input_skill: JSON.stringify({
            skill_id: (s = y.skill_type) === null || s === undefined ? undefined : s.toString(),
            skill_type: y.skill_type,
            variables: h
          })
        };
        e.payload = [{
          text: f,
          reportParams: S,
          extraExt: k
        }];
        return Promise.resolve(e);
      }
    }],
    afterSubmitNodes: []
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return s;
    }
  });
}