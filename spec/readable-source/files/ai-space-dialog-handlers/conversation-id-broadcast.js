// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'createConversation'
// - Renamed export 'l' to 'getConversationId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 522337
         */
module.exports = function (module, exports, require) {
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var docxGuidanceMessageSender = require("docx-guidance-message-sender") /*id: 859951*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatLocalConversationCreator = require("chat-local-conversation-creator") /*id: 549663*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let l = async (e, t, a, l, c) => {
    let d;
    if (c) {
      if (l) {
        let e = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
        let t = e == null ? undefined : e.sendMessage({
          message: {
            ...l.message,
            conversation_type: chatCoreConstants.BotTypes.CocoSub,
            local_conversation_id: chatLocalConversationCreator.createLocalConversation({
              reportEvent: eventReportingService.createEventReporter({
                eventName: "create_conversation",
                meta: {
                  from: "aispace"
                }
              }),
              conversation: {
                conversation_type: chatCoreConstants.BotTypes.CocoWebSub
              }
            }),
            ext: {
              ...l.message.ext,
              autoNavigate: "0"
            }
          },
          session: {
            reportParams: l.reportParams
          }
        });
        if (t) {
          for await (let e of t == null ? undefined : t.subscribe()) {
            if (e.conversation_id) {
              d = e.conversation_id;
              break;
            }
          }
        }
      }
    } else {
      let e = await docxGuidanceMessageSender.sendDocxMessage(t, a);
      d = e == null ? undefined : e.conversation_id;
    }
    if (d && typeof BroadcastChannel == "function") {
      let t = new BroadcastChannel(e);
      let a = 0;
      let i = setInterval(() => {
        t.postMessage({
          conversationId: d
        });
        if (++a > 60) {
          clearInterval(i);
          t.close();
        }
      }, 50);
      t.onmessage = a => {
        if ((a == null ? undefined : a.data?.receivedId) === e) {
          clearInterval(i);
          t.close();
        }
      };
    }
    return d;
  };
  let c = e => new Promise(t => {
    if (typeof BroadcastChannel == "function") {
      let a = new BroadcastChannel(e);
      a.onmessage = i => {
        let r = i == null ? undefined : i.data?.conversationId;
        if (r && r !== "undefined") {
          t({
            conversationId: i.data.conversationId
          });
        } else {
          t({});
        }
        a.postMessage({
          receivedId: e
        });
        a.close();
      };
      setTimeout(() => {
        a.close();
        t({});
      }, 3000);
    } else {
      t({});
    }
  });
  require.d(exports, {
    createConversation: function () {
      return l;
    },
    getConversationId: function () {
      return c;
    }
  });
}