// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'createMessageHopTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 764292
         */
module.exports = function (module, exports, require) {
  var messageAnalyticsEventHandlers = require("message-analytics-event-handlers") /*id: 189888*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let r = (e, t) => ({
    eventTrigger: messageAnalyticsEventHandlers.createMessageAnalyticsHandlers({
      message: t,
      messageTextContent: e
    }),
    onHop: e => {
      let {
        prevRenderedText: n,
        renderedText: l,
        prevEndNodeType: r,
        endNodeType: o
      } = e;
      teaAnalyticsEventTracker.trackEvent("rd_flow_message_hop", {
        message_id: t.message_id,
        end_syntax_type: o,
        prev_end_syntax_type: r,
        platform: "web",
        reduce_char_count: n.length - l.length
      });
    }
  });
  require.d(exports, {
    createMessageHopTracker: function () {
      return r;
    }
  });
}