// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'wrapSkillChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 870474
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var asyncSkillChatInputStore = require("async-skill-chat-input-store") /*id: 727801*/;
  let l = function (e, t = deepEqualityUtil_1.isDeepEqual) {
    let n = function () {
      var n = arguments.length;
      var i = Array(n);
      var l = 0;
      for (; l < n; l++) {
        i[l] = arguments[l];
      }
      return asyncSkillChatInputStore.chatInputStore(t => e(t, ...i), t);
    };
    n.raw = e;
    return n;
  };
  require.d(exports, {
    wrapSkillChatInput: function () {
      return l;
    }
  });
}