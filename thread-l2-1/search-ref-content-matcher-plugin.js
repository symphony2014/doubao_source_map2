// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(35160) to 'send-search-ref-symbol'
// - Updated imported property 'G' to 'sendSearchRefSymbol' (module 35160)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 384091
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("send-search-ref-symbol") /*id: 35160*/.sendSearchRefSymbol,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && (messageContentTypeAndStatusChecker.fE5(e) || messageContentTypeAndStatusChecker.fTy(e) || messageContentTypeAndStatusChecker.exC(e) || messageContentTypeAndStatusChecker.oSo(e) || messageContentTypeAndStatusChecker.T0Z(e) || messageContentTypeAndStatusChecker.JGL(e) || messageContentTypeAndStatusChecker.sdK(e) || messageContentTypeAndStatusChecker.uPu(e)) && !messageContentTypeAndStatusChecker.PMd(e) && !messageContentTypeAndStatusChecker.k56(e) && !messageContentTypeAndStatusChecker.kwD(e) && !messageContentTypeAndStatusChecker.wum(e) && !messageContentTypeAndStatusChecker.Bmf(e) && !messageContentTypeAndStatusChecker.u_v(e) && !messageContentTypeAndStatusChecker.cLH(e) && !messageContentTypeAndStatusChecker.pEk(e) && !messageContentTypeAndStatusChecker.Fd2(e)
  };
  require.r(exports);
  require.d(exports, {
    sendSearchRefContentMatcher: function () {
      return o;
    }
  });
}