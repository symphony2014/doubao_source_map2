// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'uniqConversations'
// - Renamed export 'h' to 'generateLocalId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 502844
         */
module.exports = function (module, exports, require) {
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  let r = () => {
    let e = (() => {
      var e;
      var t;
      let n = String(Math.random() * 10000000000000000).slice(0, 16);
      if (typeof window == "undefined" || (t = window) === null || t === undefined || (e = t.crypto) === null || e === undefined || !e.getRandomValues) {
        return n;
      }
      try {
        return window.crypto.getRandomValues(new Uint8Array(16)).toString().replaceAll(",", "").slice(0, 16);
      } catch (e) {
        return n;
      }
    })();
    return `local_${e}`;
  };
  let o = e => arrayUniqByMatcher.uniqByMatcher(e, "conversationId");
  require.d(exports, {
    uniqConversations: function () {
      return o;
    },
    generateLocalId: function () {
      return r;
    }
  });
}