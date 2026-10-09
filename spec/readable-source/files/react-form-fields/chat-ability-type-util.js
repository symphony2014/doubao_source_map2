// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'getChatAbilityType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 964052
         */
module.exports = function (module, exports, require) {
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let o = e => {
    return (safeJsonUtils.safeParse(e == null ? undefined : e.ext?.chat_ability, {}) || {}).ability_type || undefined;
  };
  require.d(exports, {
    getChatAbilityType: function () {
      return o;
    }
  });
}