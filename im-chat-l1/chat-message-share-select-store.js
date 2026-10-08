// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'chatMessageShareSelectStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 764401
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var throttledArrayDifference = require("throttled-array-difference") /*id: 90381*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var numberRangeCheckUtil = require("number-range-check-util") /*id: 341356*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageLinkRetriever = require("chat-message-link-retriever") /*id: 186068*/;
  let w = [chatMessageTypes.ContentType.Text, chatMessageTypes.ContentType.Music, chatMessageTypes.ContentType.Video, chatMessageTypes.ContentType.Image, chatMessageTypes.ContentType.File, chatMessageTypes.ContentType.PluginSearchResult, chatMessageTypes.ContentType.Composite, chatMessageTypes.ContentType.Nested, chatMessageTypes.ContentType.CopilotCard, chatMessageTypes.ContentType.LyricsToSongMusic, chatMessageTypes.ContentType.LyricsToSongLyric, chatMessageTypes.ContentType.LyricsToSongsMusic, chatMessageTypes.ContentType.PagesCard, chatMessageTypes.ContentType.Outline, aiAssistantSkillTypes.SamanthaTypes.SamanthaText, aiAssistantSkillTypes.SamanthaTypes.SamanthaMusic, aiAssistantSkillTypes.SamanthaTypes.SamanthaImageOutput, aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchCard, aiAssistantSkillTypes.SamanthaTypes.SamanthaMusicGenOutput, aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchText, aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantInput, aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantOutput, aiAssistantSkillTypes.SamanthaTypes.SamanthaVideoGenerationInput, aiAssistantSkillTypes.SamanthaTypes.SamanthaVideoGenerationOutput, aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteArtifactOutput, aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteOutlineOutput, aiAssistantSkillTypes.SamanthaTypes.SamanthaWritePagesCardOutput, aiAssistantSkillTypes.SamanthaTypes.SamanthaBlockSuperTask, aiAssistantSkillTypes.SamanthaTypes.SamanthaWritingGenerateInput];
  let A = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer((e, t) => ({
    scene: undefined,
    isSelectMode: false,
    messageIndexList: [],
    contentTypeWhiteListInitialized: false,
    contentTypeWhiteList: w,
    preShareId: "",
    shareToken: "",
    preMessageIndexList: [],
    preShareType: chatAiConstants.filterType.All,
    preShareVisibility: chatAiConstants.workspaceMode.Default,
    shareType: chatAiConstants.filterType.All,
    shareActionPosition: "dropdown",
    shareTitle: "",
    extraInfo: {},
    setContentTypeWhiteList: t => {
      e({
        contentTypeWhiteListInitialized: true,
        contentTypeWhiteList: t
      });
    },
    enterSelectMode: async n => {
      var i;
      var r;
      var o;
      var l;
      var v;
      let {
        scene: x,
        extraInfo: w = {},
        data: A,
        justUpdateInfo: _
      } = n;
      let {
        isSelectMode: k,
        scene: S
      } = t();
      if (k && x === S && !_) {
        return;
      }
      let C = await chatStoreManager.getAsyncStore("chatMessageBoxLayoutStore");
      C.getState().updateSendMessageBoxConfig({
        containerDataAttr: "select-mode"
      });
      C.getState().updateReceiveMessageBoxConfig({
        containerDataAttr: "select-mode"
      });
      if ((i = C.getState().getLayoutSetter()) !== null && i !== undefined) {
        i.setLayoutAreaInVisible("bottom");
      }
      if ((r = C.getState().getLayoutSetter()) !== null && r !== undefined) {
        r.setLayoutAreaInVisible("top");
      }
      if ((o = C.getState().getLayoutSetter()) !== null && o !== undefined) {
        o.setLayoutAreaInVisible("right");
      }
      if ((l = C.getState().getLayoutSetter()) !== null && l !== undefined) {
        l.setLayoutAreaVisible("left");
      }
      e({
        extraInfo: w,
        scene: x,
        isSelectMode: true,
        preShareId: (A == null ? undefined : A.pre_share_id) || (A == null ? undefined : A.share_info?.share_id) || "",
        shareToken: (A == null ? undefined : A.share_token) ?? "",
        preMessageIndexList: (A == null ? undefined : A.share_info?.share_status) === 2 && (v = A == null ? undefined : A.share_info?.message_index_list) !== null && v !== undefined ? v : [],
        preShareType: (A == null ? undefined : A.share_info?.share_type) || chatAiConstants.filterType.All,
        preShareVisibility: (A == null ? undefined : A.share_info?.share_visibility) ?? chatAiConstants.workspaceMode.Default,
        shareType: (A == null ? undefined : A.share_info?.share_type) || chatAiConstants.filterType.All,
        shareTitle: A == null ? undefined : A.share_info?.share_name
      });
      chatEventEmitter.chatEmitter.emit("chat.share.select", {
        scene: x,
        isSelectMode: true
      });
    },
    exitSelectMode: async () => {
      var n;
      var i;
      var r;
      var o;
      if (!t().isSelectMode) {
        return;
      }
      let l = await chatStoreManager.getAsyncStore("chatMessageBoxLayoutStore");
      l.getState().updateSendMessageBoxConfig({
        containerDataAttr: ""
      });
      l.getState().updateReceiveMessageBoxConfig({
        containerDataAttr: ""
      });
      if ((n = l.getState().getLayoutSetter()) !== null && n !== undefined) {
        n.setLayoutAreaVisible("bottom");
      }
      if ((i = l.getState().getLayoutSetter()) !== null && i !== undefined) {
        i.setLayoutAreaVisible("top");
      }
      if ((r = l.getState().getLayoutSetter()) !== null && r !== undefined) {
        r.setLayoutAreaInVisible("right");
      }
      if ((o = l.getState().getLayoutSetter()) !== null && o !== undefined) {
        o.setLayoutAreaInVisible("left");
      }
      e({
        scene: undefined,
        isSelectMode: false,
        messageIndexList: [],
        preShareId: "",
        shareToken: "",
        preMessageIndexList: [],
        extraInfo: {}
      });
      chatEventEmitter.chatEmitter.emit("chat.share.select", {
        scene: undefined,
        isSelectMode: false
      });
    },
    toggleMessage: n => {
      let {
        conversationId: r,
        messageIndex: a,
        state: s
      } = n;
      let {
        messageIndexList: c,
        getIsCheckboxDisabled: d,
        findMessageByIndex: p
      } = t();
      let h = c.includes(a);
      let m = p({
        conversationId: r,
        state: s,
        messageIndex: a
      });
      let f = t().findSendAndAllReplyMessageIndexList(s, r, (m == null ? undefined : m.message_id) ?? "");
      let [v, ...b] = f;
      let y = a === v;
      if (h) {
        let {
          scene: n
        } = t();
        if (n === skillMessageActions.messageActions.Delete || !y && b.filter(e => c.includes(e)).length > 1) {
          e({
            messageIndexList: throttledArrayDifference.throttledArrayDiff(c, a)
          });
        } else {
          e({
            messageIndexList: throttledArrayDifference.throttledArrayDiff(c, ...f)
          });
        }
        return t().messageIndexList;
      }
      if (d({
        conversationId: r,
        messageIndex: a,
        state: s
      })) {
        return t().messageIndexList;
      }
      let x = f.filter(e => !d({
        conversationId: r,
        messageIndex: e,
        state: s
      }));
      if (c.length + x.length > chatMessagingConstants.pollingInterval) {
        e({
          messageIndexList: [...c, a].sort((e, t) => e - t)
        });
      } else {
        e({
          messageIndexList: dataProcessor.processData([...c, ...x]).sort((e, t) => e - t)
        });
      }
      return t().messageIndexList;
    },
    selectAll: n => {
      let {
        _getSelectAllIndexList: i
      } = t();
      e({
        messageIndexList: i(n)
      });
      return t().messageIndexList;
    },
    deselectAll: () => {
      e({
        messageIndexList: []
      });
    },
    findMessageByIndex: e => {
      let {
        conversationId: t,
        state: n,
        messageIndex: i
      } = e;
      let r = n.messageMap[t];
      if (r) {
        for (let e of Object.values(r)) {
          if (String(e.index) === String(i)) {
            return e;
          }
          if (messageContentTypeAndStatusChecker.WK_(e)) {
            for (let t of e.sub_message_group?.messages || []) {
              if (String(t.index) === String(i)) {
                return t;
              }
            }
          }
        }
      }
    },
    findMessageByMessageId: e => {
      let {
        conversationId: t,
        state: n,
        messageId: i
      } = e;
      let r = n.messageMap[t];
      if (r) {
        for (let e of Object.values(r)) {
          if (e.message_id === i) {
            return e;
          }
          if (messageContentTypeAndStatusChecker.WK_(e)) {
            for (let t of e.sub_message_group?.messages || []) {
              if (t.message_id === i) {
                return t;
              }
            }
          }
        }
      }
    },
    findSendAndAllReplyMessageIndexList: (e, n, i) => {
      let r = e.messageMap[n];
      let o = t().findMessageByMessageId({
        conversationId: n,
        state: e,
        messageId: i
      });
      if (!o) {
        return [];
      }
      let l = o.reply_id && o.reply_id !== "0" ? o.reply_id : i;
      let a = r[l ?? ""];
      let s = [];
      for (let e of Object.values(r)) {
        if (e.reply_id === l) {
          s.push(Number(e.index));
        }
        if (messageContentTypeAndStatusChecker.WK_(e)) {
          var c;
          if ((c = e.sub_message_group) !== null && c !== undefined) {
            c.messages.map(e => {
              if (e.reply_id === l) {
                s.push(Number(e.index));
              }
            });
          }
        }
      }
      return [...(a ? [Number(a.index)] : []), ...s];
    },
    _getSelectAllIndexList: e => {
      var l;
      var d;
      var u;
      let {
        conversationId: m,
        state: f,
        lastMessageIndex: g
      } = e;
      let {
        getIsCheckboxDisabled: v
      } = t();
      let b = f.messageMap[m];
      let y = f.messageLinkMap[m];
      if (!b || !y) {
        return [];
      }
      let w = Number(b[y[0]?.messageId]?.index);
      let A = Number(b[y[y.length - 1]?.messageId]?.index);
      if (A < y.length) {
        A = arrayMaxByUtilWrapper.getMaxBy((u = function (e) {
          let t = chatMessageLinkRetriever.getRecentMessages(e, 10);
          for (let e = t.length - 1; e > 0; e--) {
            let n = t[e];
            if (messageContentTypeAndStatusChecker.WK_(n)) {
              return n;
            }
          }
        }(m)) === null || u === undefined ? undefined : (d = u.sub_message_group) === null || d === undefined ? undefined : (l = d.messages) === null || l === undefined ? undefined : l.map(e => Number(e.index))) ?? y.length;
      }
      return numericRangeUtil.createRange(1, g + 1).filter(e => !numberRangeCheckUtil.isInRange(e, w, A + 1) || !v({
        conversationId: m,
        messageIndex: e,
        state: f
      }));
    },
    getIsSelectAllChecked: e => {
      let {
        messageIndexList: n,
        _getSelectAllIndexList: i
      } = t();
      let r = i(e);
      return n.length > 0 && n.length >= r.length;
    },
    getIsCheckboxDisabled: e => {
      let {
        conversationId: n,
        state: i,
        messageIndex: r
      } = e;
      let {
        messageIndexList: o,
        findMessageByIndex: l,
        _isMessageDisableSelect: a,
        contentTypeWhiteList: s
      } = t();
      if (o.includes(r)) {
        return false;
      }
      let c = l({
        state: i,
        messageIndex: r,
        conversationId: n
      });
      let d = a(c, i.messageMap[n]);
      if (d) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "thread_share_checkbox_disabled",
          meta: {
            messageIndex: c == null ? undefined : c.index,
            messageId: c == null ? undefined : c.message_id,
            messageStatus: c == null ? undefined : c.status,
            messageContentType: c == null ? undefined : c.content_type,
            contentTypeWhiteList: s,
            isOnboarding: c == null ? undefined : c.ext?.onboarding,
            listLength: o.length
          }
        });
      }
      return d;
    },
    _isMessageDisableSelect: (e, n) => {
      let {
        messageIndexList: c,
        contentTypeWhiteList: d,
        contentTypeWhiteListInitialized: u
      } = t();
      if (!u) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "thread_share_checkbox_disabled",
          meta: {
            whiteListInit: "0"
          }
        });
      }
      if (!e || messageContentTypeAndStatusChecker.hxv(e) || messageContentTypeAndStatusChecker.DMj(e) || messageContentTypeAndStatusChecker.N0s(e) || messageContentTypeAndStatusChecker.IEy(e) || e.status === chatMessageTypes.PushMessageStatus.InVisible) {
        return true;
      }
      if (messageContentTypeAndStatusChecker.xdd(e) && n) {
        let t = n[(e == null ? undefined : e.ext?.refer_msg_id) ?? ""];
        return (e == null ? undefined : e.ext?.sub_msg_index) !== (t == null ? undefined : t.ext?.crowd_test_message_group_selected);
      }
      if (messageContentTypeAndStatusChecker.WK_(e)) {
        return !(e == null ? undefined : e.ext?.crowd_test_message_group_selected);
      } else {
        return e.ext?.onboarding === "1" || c.length >= chatMessagingConstants.pollingInterval || (aiPodcastContentUtils.isAiPodcastContent(e) ? !aiPodcastContentUtils.isPodcastValidProto(e) : !!e.content_type && !d.includes(e.content_type));
      }
    },
    updateMessageIndexList: n => {
      let {
        messageIndexList: i,
        _isMessageDisableSelect: r
      } = t();
      let o = [];
      for (let e of Object.values(n)) {
        if (i.indexOf(Number(e.index)) !== -1 && r(e, n)) {
          o.push(Number(e.index));
        }
      }
      e({
        messageIndexList: i.filter(e => !o.includes(e))
      });
    },
    setShareType: t => {
      e({
        shareType: t
      });
    }
  })));
  require.d(exports, {
    chatMessageShareSelectStore: function () {
      return A;
    }
  });
}