// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VE' to 'useConvDisabled'
// - Renamed export 'BR' to 'useClearConversation'
// - Renamed export 'BF' to 'useMessageMap'
// - Renamed export 'Yc' to 'useResolveConversationInfo'
// - Renamed export 'hf' to 'useGetMessagesByIds'
// - Renamed export 'rw' to 'useHandleBrokenMessage'
// - Renamed export 'ZK' to 'useRateLimit'
// - Renamed export 'HN' to 'useMessageListStatus'
// - Renamed export 'UD' to 'useGetMessageByLink'
// - Renamed export 'Sd' to 'useGetMessageLinks'
// - Renamed export 'kD' to 'useGetMessageContext'
// - Renamed export 'tC' to 'useLastMessageMap'
// - Renamed export 'qs' to 'useLastSectionId'
// - Renamed export 'Fe' to 'useMessageCursor'
// - Renamed export 'UQ' to 'useIsLastMessageIncomplete'
// - Renamed export 'rM' to 'useGetSuggestMessage'
// - Renamed export 'hU' to 'useGetLocalMessage'
// - Renamed export 'gr' to 'useIsLastMessageIncompleteFn'
// - Renamed export 'nZ' to 'useMessageBoxObserver'
// - Renamed export 'aZ' to 'useMessageFeedback'
// - Renamed export 'pF' to 'useGetLocalMessageFn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2177.a6419d1f.js
         * chunkId: 2177
         * moduleId: 149246
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var conversationSectionUpdater = require("conversation-section-updater") /*id: 494219*/;
  async function _(e) {
    let n = await (await aliceChatService.AliceChatService()).clearConversationContext({
      conversation_id: e
    });
    let i = n == null ? undefined : n.data?.section_id;
    if (i) {
      conversationSectionUpdater.updateConversationSection(e, i);
    }
  }
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  var messageFeedbackStateUpdate = require("message-feedback-state-update") /*id: 194772*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var fetchMergeMessageList = require("fetch-merge-message-list") /*id: 526849*/;
  async function k(e) {
    let t = chatMessageStoreFactory.createMessageStore.getState().messageListStatusMap[e];
    if (!t || t.lastCursor <= 0) {
      loggerServiceCore.defaultLogger.persist.warning("skip loadMoreMessageList: invalid status");
      return;
    }
    if (!t.hasMore) {
      return;
    }
    if (t.lastCursor - 1 <= 0) {
      chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(t => {
        let n = t.messageListStatusMap[e];
        if (n) {
          t.messageListStatusMap[e] = {
            ...n,
            hasMore: false,
            inLoadingMore: false
          };
        }
      }));
      return;
    }
    chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(t => {
      t.messageListStatusMap[e].inLoadingMore = true;
    }));
    let n = await fetchMergeMessageList.fetchMergeMessageList({
      conversationId: e,
      cursor: t.lastCursor - 1
    });
    chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(t => {
      t.messageListStatusMap[e].inLoadingMore = false;
    }));
    if (isNullishCheck.isNil(n)) {
      loggerServiceCore.defaultLogger.persist.warning({
        message: "skip loadMoreMessageList: invalid api response",
        meta: {}
      });
    }
    return n;
  }
  var messageBreakHandler = require("message-break-handler") /*id: 874388*/;
  var createWrappedFunction = require("create-wrapped-function") /*id: 343239*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var conversationRateLimit = require("conversation-rate-limit") /*id: 688086*/;
  let E = createWrappedFunction.createWrappedFunction(conversationMessageUtils_1.getMessageLinks);
  let N = createWrappedFunction.createWrappedFunction(conversationMessageUtils_1.getMessageListStatus);
  let x = createWrappedFunction.createWrappedFunction(conversationMessageUtils_1.resolveConversationInfo);
  let I = (e, t) => {
    let {
      liked: n,
      disliked: a,
      detail: l,
      remoteFeedbackType: u,
      localFeedbackType: c
    } = chatMessageStoreFactory.createMessageStore(n => {
      let {
        feedback: o
      } = conversationMessageUtils_1.getMessageFromLink(n, e, {
        isLocalMessage: false,
        messageId: t
      }) ?? {};
      let s = n.messageFeedbackMap[e]?.[t];
      let l = objectDefaultsUtil.defaults({
        ...s
      }, {
        feedback_type: o
      });
      return {
        liked: l.feedback_type === messagingConstants.feedbackType.Like,
        disliked: l.feedback_type === messagingConstants.feedbackType.Unlike,
        detail: l,
        remoteFeedbackType: o,
        localFeedbackType: s == null ? undefined : s.feedback_type
      };
    }, deepEqualUtil_1.deepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(u) && c !== u) {
        messageFeedbackStateUpdate.setMessageFeedback({
          conversationId: e,
          messageId: t,
          detail: {
            feedback_type: u
          }
        });
      }
    }, [u]);
    return {
      liked: n,
      disliked: a,
      detail: l
    };
  };
  let H = e => chatFeedStoreFactory.useFeedStore(t => {
    return Number(t.conversationMap[e]?.message_cursor) || 0;
  }, deepEqualityUtil_1.isDeepEqual);
  let R = createWrappedFunction.createWrappedFunction((e, t) => e.messageMap[t] || {});
  let G = createWrappedFunction.createWrappedFunction((e, t) => e.localMessageMap[t] || {});
  let K = createWrappedFunction.createWrappedFunction((e, t, n) => {
    if (n) {
      return (n.isLocalMessage ? e.localMessageMap : e.messageMap)[t]?.[n.messageId];
    }
  });
  let P = createWrappedFunction.createWrappedFunction((e, t, n) => {
    let i = chatMessageUtils_2_1.getMessageGetter(chatMessageUtils_2_1.getMessageListStatus(e, t));
    let a = [];
    for (let e of n) {
      let t = i(e);
      if (t) {
        a.push(t);
      }
    }
    return a;
  });
  let z = createWrappedFunction.createWrappedFunction((e, t, n) => {
    if (n) {
      return e.localMessageMap[t]?.[n];
    } else {
      return undefined;
    }
  });
  let B = createWrappedFunction.createWrappedFunction((e, t) => {
    let i = t.conversation_id || "";
    let {
      messageLinkMap: {
        [i]: a
      },
      messageMap: {
        [i]: r
      }
    } = e;
    let o = (() => {
      if (!(t == null ? undefined : t.reply_id) || !localRegenCheck.shouldRegenerate(t)) {
        return;
      }
      let n = chatMessageUtils_2_1.getMessageGetter({
        localMessageMap: e.localMessageMap[i],
        messageMap: e.messageMap[i]
      });
      if (a == null) {
        return undefined;
      } else {
        return a.filter(e => {
          let i = n(e);
          return (i == null ? undefined : i.reply_id) === t.reply_id && localRegenCheck.shouldRegenerate(i);
        });
      }
    })();
    let s = t == null ? undefined : t.reply_id;
    let u = t.message_id || "";
    return {
      activeRegenerateMessage: (o == null ? undefined : o.length) ? r[u] : undefined,
      regenerateActiveIndex: o == null ? undefined : o.findIndex(e => {
        let {
          messageId: n
        } = e;
        return n === t.message_id;
      }),
      isRegenerateTail: (o == null ? undefined : o[o.length - 1]?.messageId) === t.message_id,
      regenerateMessageLinks: o,
      replyFromMessage: s && (r == null ? undefined : r[s]) || undefined
    };
  });
  let U = createWrappedFunction.createWrappedFunction((e, t, n) => {
    let i = e.suggestMessageMap[t];
    if ((i == null ? undefined : i.replyId) === n) {
      return i;
    } else {
      return undefined;
    }
  });
  let D = e => chatFeedStoreFactory.useFeedStore(t => t.conversationMap[e].last_section_id, deepEqualityUtil_1.isDeepEqual);
  let V = () => chatFeedStoreFactory.useFeedStore(() => e => {
    messageBreakHandler.handleBrokenMessage(chatMessageStoreFactory.createMessageStore, e || "");
    _(e);
  }, deepEqualityUtil_1.isDeepEqual);
  let Z = createWrappedFunction.createWrappedFunction((e, t) => e.lastMessageMap[t]);
  let F = (e, t) => {
    try {
      let n = e.messageLinkMap[t];
      let i = n[n.length - 1];
      if (!i) {
        return true;
      }
      let a = e.messageMap[t][i.messageId];
      if (!a) {
        return true;
      }
      return !chatMessageStatusCheck.isMessageFinished(a);
    } catch (e) {
      return true;
    }
  };
  let q = createWrappedFunction.createWrappedFunction(F);
  let W = (e, t) => {
    let {
      isLoggedIn: n
    } = t;
    let a = reactCoreLibraryReexport.useCallback(() => {
      let t = chatMessageStoreFactory.createMessageStore.getState().messageListStatusMap[e] || {};
      let n = !!(t == null ? undefined : t.hasMore);
      let i = !!(t == null ? undefined : t.inLoadingMore);
      if (n && !i) {
        k(e);
      }
    }, [e, n]);
    let {
      run: r
    } = asyncSkillReceiveHook.useSkillReceive(a, {
      trailing: false,
      leading: true,
      wait: 200
    });
    return {
      loadMore: reactCoreLibraryReexport.useCallback(() => r(), [r])
    };
  };
  let X = (e, t) => {
    let a = reactCoreLibraryReexport.useRef(null);
    let r = reactCoreLibraryReexport.useRef(null);
    let {
      loadMore: o
    } = W(e, {
      isLoggedIn: userInfoStatusSelectors.selectUserInfoSuccess()
    });
    let {
      messageMap: s,
      localMessageMap: l,
      messageLinkMap: u
    } = chatMessageStoreFactory.createMessageStore.getState();
    let c = u[e] ?? [];
    let d = chatMessageUtils_2_1.getMessageGetter({
      messageMap: s[e],
      localMessageMap: l[e]
    });
    let _ = d(t);
    let v = c.map(e => d(e)).filter(e => e !== undefined && e.status !== chatMessageTypes.PushMessageStatus.InVisible);
    let m = v.findIndex(e => (e == null ? undefined : e.message_id) && e.message_id === (_ == null ? undefined : _.message_id) || (e == null ? undefined : e.local_message_id) && e.local_message_id === (_ == null ? undefined : _.local_message_id));
    let f = reactCoreLibraryReexport.useMemo(() => v.length >= 10 ? m === 10 : m === 0, [m, v.length]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = r.current) !== null && e !== undefined) {
        e.disconnect();
      }
      if (f) {
        r.current = new IntersectionObserver(e => {
          let t = e[0];
          if (t.time > 5000 && t.isIntersecting && t.intersectionRatio > 0) {
            o();
          }
        });
        if (a.current) {
          r.current.observe(a.current);
        }
        return () => {
          var e;
          if ((e = r.current) !== null && e !== undefined) {
            e.disconnect();
          }
        };
      }
    }, [f, o]);
    return {
      messageBoxRef: a
    };
  };
  require.d(exports, {
    useConvDisabled: function () {
      return conversationRateLimit.useConvDisabled;
    },
    useClearConversation: function () {
      return W;
    },
    useMessageMap: function () {
      return R;
    },
    useResolveConversationInfo: function () {
      return x;
    },
    useGetMessagesByIds: function () {
      return P;
    },
    useHandleBrokenMessage: function () {
      return V;
    },
    useRateLimit: function () {
      return conversationRateLimit.useRateLimit;
    },
    useMessageListStatus: function () {
      return N;
    },
    useGetMessageByLink: function () {
      return K;
    },
    useGetMessageLinks: function () {
      return E;
    },
    useGetMessageContext: function () {
      return B;
    },
    useLastMessageMap: function () {
      return Z;
    },
    useLastSectionId: function () {
      return D;
    },
    useMessageCursor: function () {
      return H;
    },
    useIsLastMessageIncomplete: function () {
      return q;
    },
    useGetSuggestMessage: function () {
      return U;
    },
    useGetLocalMessage: function () {
      return z;
    },
    useIsLastMessageIncompleteFn: function () {
      return F;
    },
    useMessageBoxObserver: function () {
      return X;
    },
    useMessageFeedback: function () {
      return I;
    },
    useGetLocalMessageFn: function () {
      return G;
    }
  });
}