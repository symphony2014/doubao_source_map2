// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botStoreManager'
// - Resolved require(359169) to 'bot-store-manager'
// - Updated imported property 'cj' to 'botStore' (module 359169)
// - Updated imported property 'Wp' to 'selectBotInfo' (module 359169)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78791.8aabecb5.js
         * chunkId: 78791
         * moduleId: 833555
         */
module.exports = function (module, exports, require) {
  var botStoreManager = require("bot-store-manager") /*id: 359169*/;
  function n(t, o, e) {
    var i;
    if ((o = typeof (i = function (t, o) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var e = t[Symbol.toPrimitive];
      if (e !== undefined) {
        var i = e.call(t, o || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(t);
    }(o, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, o, {
        value: e,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[o] = e;
    }
    return t;
  }
  class a {
    constructor() {
      n(this, "ctx", {});
      n(this, "updateBot", t => botStoreManager.botStore.getState().updateBot(t));
      n(this, "getBot", t => botStoreManager.botStore.getState().getBot(t));
      n(this, "getBotIdFromLocalConversation", t => botStoreManager.botStore.getState().getBotIdFromLocalConversation(t));
      n(this, "getBotIdToLocalConversationMap", () => botStoreManager.botStore.getState().getBotIdToLocalConversationMap());
      n(this, "getBotIdToRequestIdMap", () => botStoreManager.botStore.getState().getBotIdToRequestIdMap());
      n(this, "setLocalConversationIdForBot", t => botStoreManager.botStore.getState().setLocalConversationIdForBot(t));
      n(this, "initRecommendBotList", t => botStoreManager.botStore.getState().initRecommendBotList(t));
      n(this, "useBotInfoHook", botStoreManager.selectBotInfo);
    }
  }
  require.r(exports);
  require.d(exports, {
    ChatBotService: function () {
      return a;
    }
  });
}