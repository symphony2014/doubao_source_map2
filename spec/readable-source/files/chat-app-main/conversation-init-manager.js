// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'noopHandler'
// - Renamed export 'N' to 'initConversations'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 399060
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var initConversationMessageList = require("init-conversation-message-list") /*id: 767528*/;
  let a = async e => {
    let {
      conversationPriorityList: t,
      reportEvent: n,
      queue: a
    } = e;
    a.on("error", e => {
      loggerServiceCore.defaultLogger.persist.error({
        message: "fetch queue error",
        error: e
      });
    });
    let l = [];
    t.forEach((e, t) => {
      let {
        conversation: {
          conversation_id: r,
          message_index: o,
          message_cursor: s
        } = {},
        priority: d
      } = e;
      if (r) {
        a.add(async () => {
          let e = 0;
          try {
            await initConversationMessageList.initMessageList({
              conversationId: r,
              messageIndex: Number(o),
              messageCursor: Number(s),
              range: {
                start: Number(s),
                end: Number(o)
              }
            });
            e = 1;
          } finally {
            if (t === 0) {
              if (n != null) {
                n.addDurationPoint("first_conversation");
              }
            }
            l.push({
              conversation_id: r,
              success: e
            });
          }
        }, {
          priority: d
        });
      }
    });
    await a.onIdle();
    if (n != null) {
      n.addDurationPoint("all_conversation");
    }
    let o = l.filter(e => e.success === 1).length;
    if (n != null) {
      n.success({
        meta: {
          init_conversation_success_count: o,
          init_conversation_count: l.length
        }
      });
    }
  };
  let l = async e => await Promise.resolve(undefined);
  require.d(exports, {
    noopHandler: function () {
      return l;
    },
    initConversations: function () {
      return a;
    }
  });
}