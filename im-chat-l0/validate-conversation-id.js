// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'isValidConversation'
// - Renamed export 'i' to 'normalizeTimestamp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 913490
         */
module.exports = function (module, exports, require) {
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  function r(e) {
    let {
      conversation_id: t,
      local_conversation_id: n
    } = e;
    return !!n && !!t && !localRegenCheck.shouldRegenerate(e);
  }
  let o = e => {
    if (e !== undefined) {
      if (Number(e) > 10000000000) {
        return Math.floor(Number(e) / 1000);
      } else {
        return Number(e);
      }
    }
  };
  require.d(exports, {
    isValidConversation: function () {
      return r;
    },
    normalizeTimestamp: function () {
      return o;
    }
  });
}