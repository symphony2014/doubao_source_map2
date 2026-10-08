// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'useChatInputIsBusy'
// - Renamed export 'x' to 'useChatInputStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 740377
         */
module.exports = function (module, exports, require) {
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  let a = () => {
    let e = chatViewCoreSelectors.useChatId();
    return chatStoreManager.useStoreSelector("chatInputStore", t => e && t.sendMessageStatusMap[e] || chatStatusActionTypes.chatStatusTypes.Default);
  };
  let s = () => {
    let e = a();
    return e === chatStatusActionTypes.chatStatusTypes.Sending || e === chatStatusActionTypes.chatStatusTypes.Receiving;
  };
  require.d(exports, {
    useChatInputIsBusy: function () {
      return s;
    },
    useChatInputStatus: function () {
      return a;
    }
  });
}