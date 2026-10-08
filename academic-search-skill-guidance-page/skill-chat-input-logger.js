// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'useChatInputStart'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 227185
         */
module.exports = function (module, exports, require) {
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let l = e => {
    let {
      activeSkillType: t,
      reportParams: n
    } = e;
    let l = reactFunctionMemoHook.useMemoizedCallback(function (e = n) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "chat_input_send_start",
        meta: {
          ...(t ? {
            skill_type: t,
            skill_type_str: skillTypeMappings.formatSkillId(t),
            skill_id: skillTypeMappings.formatSkillId(t)
          } : {
            skill_type_str: skillTypeMappings.formatSkillId(),
            skill_id: skillTypeMappings.formatSkillId()
          }),
          ...e
        }
      });
    });
    return function ({
      reportParams: e
    } = {}) {
      l(e);
      return Promise.resolve(true);
    };
  };
  require.d(exports, {
    useChatInputStart: function () {
      return l;
    }
  });
}