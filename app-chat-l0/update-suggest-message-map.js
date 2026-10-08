// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'setSuggestMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 338448
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  function r(e, t) {
    chatMessageStoreFactory.createMessageStore.setState(n => {
      let i = t(n.suggestMessageMap[e]);
      let r = {
        ...n.suggestMessageMap
      };
      if (i) {
        r[e] = i;
      } else {
        delete r[e];
      }
      return {
        suggestMessageMap: r
      };
    });
  }
  require.d(exports, {
    setSuggestMessage: function () {
      return r;
    }
  });
}