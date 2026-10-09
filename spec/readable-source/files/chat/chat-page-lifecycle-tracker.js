// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'trackConversationPageLifecycle'
// - Renamed export 'k' to 'trackRootPageLifecycle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 798679
         */
module.exports = function (module, exports, require) {
  var chatPerformanceTracker = require("chat-performance-tracker") /*id: 899320*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = e => {
    let {
      pageVisible: t,
      pageInteractive: n,
      pageFinish: o,
      rootPageStart: a
    } = chatStoreManager.getStoreState("flowWebLayoutStore");
    if (e === "start" && !a) {
      chatStoreManager.getStore("flowWebLayoutStore").setState({
        rootPageStart: true
      });
    }
    if (e === "visible" && !t) {
      chatPerformanceTracker.trackChatViewShow({
        first_visit_page: "home"
      });
      chatStoreManager.getStore("flowWebLayoutStore").setState({
        pageVisible: true
      });
    }
    if (e === "interactive" && !n) {
      chatPerformanceTracker.trackChatInteract({
        first_visit_page: "home"
      });
      chatStoreManager.getStore("flowWebLayoutStore").setState({
        pageInteractive: true
      });
    }
    if (e === "finish" && !o) {
      chatPerformanceTracker.trackChatFinish({
        first_visit_page: "home"
      });
      chatStoreManager.getStore("flowWebLayoutStore").setState({
        pageFinish: true
      });
    }
  };
  let a = e => {
    let {
      conversationPageStart: t,
      conversationPageVisible: n,
      conversationPageInteractive: o,
      conversationPageFinish: a
    } = chatStoreManager.getStoreState("flowWebLayoutStore");
    if (e === "start" && !t) {
      chatStoreManager.getStore("flowWebLayoutStore").setState({
        conversationPageStart: true
      });
    }
    if (e === "visible" && !n) {
      chatPerformanceTracker.trackChatViewShow({
        first_visit_page: "conversation"
      });
      chatStoreManager.getStore("flowWebLayoutStore").setState({
        conversationPageVisible: true
      });
    }
    if (e === "interactive" && !o) {
      chatPerformanceTracker.trackChatInteract({
        first_visit_page: "conversation"
      });
      chatStoreManager.getStore("flowWebLayoutStore").setState({
        conversationPageInteractive: true
      });
    }
    if (e === "finish" && !a) {
      chatPerformanceTracker.trackChatFinish({
        first_visit_page: "conversation"
      });
      chatStoreManager.getStore("flowWebLayoutStore").setState({
        conversationPageFinish: true
      });
    }
  };
  require.d(exports, {
    trackConversationPageLifecycle: function () {
      return a;
    },
    trackRootPageLifecycle: function () {
      return o;
    }
  });
}