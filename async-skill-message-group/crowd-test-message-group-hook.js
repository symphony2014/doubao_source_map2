// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'useCrowdTestMessageGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-docx-panel.49543b02.js
         * chunkId: 74818
         * moduleId: 93246
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatMessageServiceModule = require("chat-message-service-module") /*id: 374681*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var threadCardEnums = require("thread-card-enums") /*id: 462913*/;
  var blockMapPersistStore = require("block-map-persist-store") /*id: 334702*/;
  let u = e => {
    var u;
    var _;
    let {
      conversationId: m,
      message: h
    } = e;
    let g = reactCoreLibraryReexport.useMemo(() => {
      var e;
      let t = [];
      if ((e = h.sub_message_group) !== null && e !== undefined) {
        e.messages.forEach(e => {
          var r;
          let a = Number(e == null ? undefined : e.stream_id) - 1;
          if (e.ext?.sub_msg_index) {
            a = Number(e.ext?.sub_msg_index);
          }
          t[a] = t[a] ?? [];
          if ((r = t[a]) !== null && r !== undefined) {
            r.push(e);
          }
        });
      }
      return t;
    }, [h.sub_message_group?.messages]);
    let b = ((u = g[0]) === null || u === undefined ? undefined : u[0]?.reply_id) || "";
    let y = reactCoreLibraryReexport.useMemo(() => g.length > 1 && g.every(e => e.every(chatMessageStatusCheck.isMessageFinished)), [g]);
    let w = reactCoreLibraryReexport.useMemo(() => {
      var e;
      return (e = g[0]) !== null && e !== undefined && !!e[0] && messageContentTypeAndStatusChecker.qqf(g[0]?.[0]);
    }, [g]);
    let k = reactCoreLibraryReexport.useMemo(() => {
      var e;
      return (e = g[0]) !== null && e !== undefined && !!e[0] && messageContentTypeAndStatusChecker.evp(g[0]?.[0]);
    }, [g]);
    let x = blockMapPersistStore.blockMapStore(e => e.blockMap[b]);
    let S = reactCoreLibraryReexport.useCallback(async function (e = 0) {
      try {
        await chatMessageStoreUpdater.updateChatMessages({
          conversationId: m,
          immerUpdate: t => {
            let {
              draftMessageMap: o,
              draftLocalMessageMap: a
            } = t;
            let s = g[e]?.[0];
            if (!s) {
              return;
            }
            let l = s.ext?.refer_msg_id;
            if (l) {
              let t = o[l] ?? a[l];
              if (t == null ? undefined : t.ext) {
                t.ext.crowd_test_message_group_selected = e.toString();
              }
            } else {
              g.forEach((t, i) => {
                t.forEach(t => {
                  let n = o[(t == null ? undefined : t.message_id) ?? ""];
                  if (n) {
                    n.status = i === e ? threadCardEnums.cardStatus.Available : threadCardEnums.cardStatus.InVisible;
                  }
                });
              });
            }
          }
        });
      } catch (e) {}
    }, [m, g]);
    let C = reactCoreLibraryReexport.useCallback(async e => {
      var t;
      let r;
      let {
        feedbackStreamIndex: n = (x == null ? undefined : x.feedbackStreamIndex) ?? (x == null ? undefined : x.displayStreamIndex) ?? 0,
        feedbackSource: a = messagingConstants.roleType.System,
        feedbackType: c = x == null ? undefined : x.feedbackType,
        mainReason: d = "",
        customReason: u
      } = e;
      let v = (t = g[n ?? 0]) === null || t === undefined ? undefined : t.find(e => e == null ? undefined : e.message_id);
      if (messageContentTypeAndStatusChecker.xdd(v)) {
        r = {
          conversation_id: m,
          message_id: v == null ? undefined : v.ext?.refer_msg_id,
          reply_id: b,
          feedbackSource: a,
          extra: JSON.stringify({
            crowd_test_message_group_selected: n,
            crowd_test_message_group_selected_reason_sys: d,
            crowd_test_message_group_selected_reason_user: u
          }),
          feedbackDetail: {
            feedback_type: c,
            feedback_detail_type: 0
          }
        };
      } else {
        let e = d ? `${d}||${u || ""}` : "";
        r = {
          conversation_id: m,
          message_id: v == null ? undefined : v.message_id,
          reply_id: b,
          feedbackSource: a,
          feedbackDetail: {
            feedback_type: c,
            feedback_detail_types: [100],
            feedback_detail_content: e
          }
        };
      }
      await (await chatMessageServiceModule.getChatMessageService()).feedback(r);
    }, [x, g]);
    reactCoreLibraryReexport.useEffect(() => {
      if (x) {
        blockMapPersistStore.blockMapStore.getState().updateBlockState(b, {
          messages: h.sub_message_group?.messages
        });
      } else {
        blockMapPersistStore.blockMapStore.getState().updateBlockState(b, {
          replyId: b,
          conversationId: m,
          messages: h.sub_message_group?.messages,
          displayStreamIndex: 0,
          feedbackDone: false
        });
      }
    }, [h.sub_message_group?.messages]);
    return {
      ...x,
      messageGroups: g,
      isCurrentStreamFinished: x == null || !x.displayStreamIndex || ((_ = g[x == null ? undefined : x.displayStreamIndex]) === null || _ === undefined ? undefined : _.every(chatMessageStatusCheck.isMessageFinished)),
      isAllFinished: y,
      isWriting: w,
      isBrowsing: k,
      updateBlockState: e => {
        blockMapPersistStore.blockMapStore.getState().updateBlockState(b, e);
      },
      updateMessageStatus: S,
      submitFeedback: C
    };
  };
  require.d(exports, {
    useCrowdTestMessageGroup: function () {
      return u;
    }
  });
}