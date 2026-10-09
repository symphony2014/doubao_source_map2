// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'formatSkillParams'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 819707
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  let a = (e, t) => {
    if (!e) {
      return {};
    }
    let l = e.skill?.skill_type;
    return {
      ...throttledPathFilterStringify.throttledPathStr(e, "bot_id", "conversation_id", "message_id", "section_id"),
      ...(t == null ? undefined : t.getCanvasTeaParams()),
      skill_id: e.skill?.skill_id,
      skill_name: isNullishCheck.isNil(l) ? undefined : skillTypeMappings.getSkillName(l)
    };
  };
  require.d(exports, {
    formatSkillParams: function () {
      return a;
    }
  });
}