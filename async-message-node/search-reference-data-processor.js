// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A6' to 'processSearchReferences'
// - Renamed export 'GD' to 'generateSearchReferenceData'
// - Renamed export 'WQ' to 'createEventTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 175385
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var objectMatchUtil = require("object-match-util") /*id: 941914*/;
  var collectionMatchUtil = require("collection-match-util") /*id: 394199*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var getBotChatIdOrSession = require("get-bot-chat-id-or-session") /*id: 429156*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let g = e => arrayIsArrayUtil.isArray(e) && objectMatchUtil.checkObjectMatch(e, e => e.video_card || e.text_card);
  let x = e => arrayIsArrayUtil.isArray(e) && collectionMatchUtil.checkCollectionMatch(e, e => isStringTypeCheck.isString(e));
  let b = e => arrayIsArrayUtil.isArray(e) && collectionMatchUtil.checkCollectionMatch(e, e => !isUndefinedCheck.isUndefined(e));
  let y = e => {
    let n = e == null ? undefined : e.content_obj?.search_references;
    let r = g(n) ? n : [];
    let i = genericFilterUtil.genericFilter(collectionMapMatcher.mapWithMatcher(r, e => e.text_card), e => !isUndefinedCheck.isUndefined(e));
    let l = b(i) ? i : [];
    let o = genericFilterUtil.genericFilter(collectionMapMatcher.mapWithMatcher(r, e => e.video_card), e => !isUndefinedCheck.isUndefined(e));
    return {
      searchReferenceData: {
        has_more: false,
        query_params: {},
        search_result: {
          text_card: {
            card_list: l
          },
          video_card: {
            card_list: b(o) ? o : []
          }
        },
        ext: {
          search_url_web: ""
        }
      },
      searchReferences: r
    };
  };
  let w = e => {
    let {
      message: t
    } = e;
    return chatMessageStoreFactory.createMessageStore(e => {
      let v = conversationMessageUtils_1.getMessageById(e, (t == null ? undefined : t.conversation_id) || "", (t == null ? undefined : t.reply_id) ?? "");
      let _ = objectPathGetDefault.getObjectPathDefault(t, "content_obj.search_card.search_references", []);
      let h = (t == null ? undefined : t.content_obj?.search_references) || _;
      let m = g(h) ? h : [];
      let y = isStringTypeCheck.isString(v == null ? undefined : v.content_obj?.text) ? v == null ? undefined : v.content_obj?.text : "";
      let w = x(t == null ? undefined : t.content_obj?.queries) ? t == null ? undefined : t.content_obj?.queries : [];
      let k = genericFilterUtil.genericFilter(collectionMapMatcher.mapWithMatcher(m, e => e.text_card), e => !isUndefinedCheck.isUndefined(e));
      let S = b(k) ? k : [];
      let j = genericFilterUtil.genericFilter(collectionMapMatcher.mapWithMatcher(m, e => e.video_card), e => !isUndefinedCheck.isUndefined(e));
      return {
        searchReferenceData: {
          has_more: false,
          query_params: {
            text_card: [{
              query: y,
              offset: 0,
              search_type: "text_card",
              search_id: "",
              has_more: true
            }]
          },
          queries: w,
          search_result: {
            text_card: {
              card_list: S
            },
            video_card: {
              card_list: b(j) ? j : []
            }
          },
          ext: {
            search_url_web: ""
          }
        }
      };
    });
  };
  let k = e => {
    let {
      message: t
    } = e;
    let n = getBotChatIdOrSession.getBotChatIdOrSession();
    return {
      trackEvent: (e, r) => {
        if (!t) {
          return;
        }
        let {
          conversation_id: o = "",
          reply_id: a = "",
          message_id: s = ""
        } = t;
        let c = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), o, {
          isLocalMessage: false,
          messageId: a
        });
        teaAnalyticsEventTracker.trackEvent(e, {
          bot_id: n,
          message_id: String(s),
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", o),
          conversation_id: o,
          conversation_type: chatConversationSelectorUtils.getConversationType(o),
          skill_id: c == null ? undefined : c.skill?.skill_id_no_default,
          skill_name: skillTypeMappings.getSkillName(c == null ? undefined : c.skill?.skill_type_no_default),
          ...r
        });
      }
    };
  };
  require.d(exports, {
    processSearchReferences: function () {
      return y;
    },
    generateSearchReferenceData: function () {
      return w;
    },
    createEventTracker: function () {
      return k;
    }
  });
}