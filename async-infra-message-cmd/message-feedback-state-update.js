// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'setMessageFeedback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2177.a6419d1f.js
         * chunkId: 2177
         * moduleId: 194772
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  function o(e) {
    let {
      conversationId: t,
      messageId: n,
      detail: o
    } = e;
    chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(e => {
      let {
        messageFeedbackMap: a
      } = e;
      a[t] ||= {};
      a[t][n] ||= {};
      safePropertyAssignUtil.safePropertyAssign(a[t][n], o);
    }));
  }
  require.d(exports, {
    setMessageFeedback: function () {
      return o;
    }
  });
}