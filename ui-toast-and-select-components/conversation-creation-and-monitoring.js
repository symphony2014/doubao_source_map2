// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useConversationMonitor'
// - Renamed export 's' to 'createConversationMessages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 71153.697927fe.js
         * chunkId: 71153
         * moduleId: 236233
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var ensureArrayUtil = require("ensure-array-util") /*id: 782739*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatStatusConstants_1 = require("chat-status-constants_1") /*id: 558074*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var updateConversationLocalState = require("update-conversation-local-state") /*id: 447623*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let h = e => {
    let {
      chatType: t
    } = e;
    let n = useLocationWrapper.useLocationWrapper();
    return (e, r) => {
      let o = chatConversationSelectors_2.getLocalConversation(chatFeedStoreFactory.useFeedStore.getState(), e);
      if (o) {
        updateConversationLocalState.updateConversationLocalState(e, {
          createStatus: chatStatusConstants_1.ChatStatus.Creating
        });
        let c = chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState());
        return ensureArrayUtil.ensureArray(r).map(r => {
          return {
            ...r,
            reportParams: {
              ...(r == null ? undefined : r.reportParams),
              from: (r == null ? undefined : r.reportParams?.from) || "",
              enter_from: n == null ? undefined : n.state?.enter_from,
              conversation_type: chatCoreConstants.BotTypes.CocoWebSub
            },
            localConversationId: e,
            conversationId: "0",
            botId: c,
            chatType: t ?? chatConversationTypes.ConversationTypes.NewThread,
            botType: "Main",
            extraExt: {
              ...(r == null ? undefined : r.extraExt),
              ...((o == null ? undefined : o.local?.relatedShareId) ? {
                related_share_id: o == null ? undefined : o.local?.relatedShareId
              } : {}),
              need_create_thread: "1"
            },
            reportEvents: {
              create_conversation_by_message: eventReportingService.createEventReporter({
                eventName: "create_conversation_by_message",
                meta: {
                  scene: "new_thread"
                }
              }),
              new_thread_message_full: eventReportingService.createEventReporter({
                eventName: "new_thread_message_full",
                meta: {
                  ...throttledPathFilterStringify.throttledPathStr(r, ["scene"]),
                  ...throttledPathFilterStringify.throttledPathStr(r == null ? undefined : r.reportParams, ["send_source"])
                }
              })
            }
          };
        });
      }
      return r;
    };
  };
  let y = e => {
    let t = chatConversationSelectors.selectConvDetail(e);
    reactCoreLibraryReexport.useEffect(() => {
      if (t && e) {
        return chatFeedStoreFactory.useFeedStore.subscribe(t => t.localConversationMap[e], t => {
          var l;
          var s;
          var d;
          var _;
          if (!isNullishCheck.isNil(t)) {
            if (t.local?.createStatus === chatStatusConstants_1.ChatStatus.Done && t.local?.newConversationId) {
              if ((s = t.local) !== null && s !== undefined && (l = s.reportEvent) !== null && l !== undefined) {
                l.success();
              }
              setTimeout(() => {
                chatStoreManager.getStore("chatViewCoreStore").setState({
                  needSkipChatKey: e
                });
                chatEventEmitter.chatEmitter.emit("chat.thread.created", {
                  localConversationId: e,
                  newConversationId: t.local?.newConversationId || ""
                });
              });
            } else if (t.local?.createStatus === chatStatusConstants_1.ChatStatus.Failed && t.local?.failReason === chatStatusConstants_1.ChatLimit.ReachLimit) {
              if (t != null && (_ = t.local) !== null && _ !== undefined && (d = _.reportEvent) !== null && d !== undefined) {
                d.error({
                  reason: "guest_reach_limit"
                });
              }
              setTimeout(() => chatEventEmitter.chatEmitter.emit("chat.guest.login", {
                backToRoot: true
              }));
            }
          }
        }, {
          fireImmediately: true
        });
      }
    }, [t, e]);
  };
  require.d(exports, {
    useConversationMonitor: function () {
      return y;
    },
    createConversationMessages: function () {
      return h;
    }
  });
}