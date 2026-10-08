// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'processSubmitData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 897086
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  let o = e => {
    let {
      payload: o,
      skillId: u,
      skillType: s,
      refContents: c,
      uploadFrom: d,
      presetPromptType: p,
      from: _,
      trackParams: f
    } = e;
    let v = c ? messageBoxTypeCheckers.filterEnabledRefs(c) : c;
    return [{
      ...o,
      extraExt: {
        ...o.extraExt,
        use_deep_think: o.extraExt?.use_deep_think ?? "0",
        input_skill: JSON.stringify({
          skill_id: u,
          skill_type: s
        }),
        ...(isEmptyUtil.isEmpty(v) ? {} : {
          reference_content: JSON.stringify(v)
        })
      },
      reportParams: {
        from: _,
        sec_scene: skillTypeMappings.getSkillActionClass(s),
        scene: "chat_action_bar",
        upload_from: d,
        preset_prompt_type: p,
        ...aiSpaceQuoteUtils.formatQuoteInfo(c == null ? undefined : c[0]),
        ...f
      }
    }];
  };
  require.d(exports, {
    processSubmitData: function () {
      return o;
    }
  });
}