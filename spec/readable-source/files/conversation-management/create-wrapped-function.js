// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'createWrappedFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2177.a6419d1f.js
         * chunkId: 2177
         * moduleId: 343239
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let r = function (e, t = deepEqualityUtil_1.isDeepEqual) {
    let n = function () {
      var n = arguments.length;
      var i = Array(n);
      var r = 0;
      for (; r < n; r++) {
        i[r] = arguments[r];
      }
      return chatMessageStoreFactory.createMessageStore(t => e(t, ...i), t);
    };
    n.raw = e;
    return n;
  };
  require.d(exports, {
    createWrappedFunction: function () {
      return r;
    }
  });
}