// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSearchResultSymbol_2'
// - Resolved require(15246) to 'chat-search-result-symbol_2'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'o' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'c' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'd' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'u' to 'chatMessageShareSelectStore'
// - Resolved require(764401) to 'chat-message-share-select-store'
// - Renamed variable '_' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'm' to 'chatSkillPinTypeDeterminer'
// - Resolved require(926482) to 'chat-skill-pin-type-determiner'
// - Renamed variable 'v' to 'chatConversationSelectorUtils'
// - Resolved require(166172) to 'chat-conversation-selector-utils'
// - Renamed variable 'f' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'p' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'h' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'g' to 'searchSkillTypes'
// - Resolved require(248215) to 'search-skill-types'
// - Renamed variable 'b' to 'aiSearchResultDisplay'
// - Resolved require(32776) to 'ai-search-result-display'
// - Renamed variable 'y' to 'searchSkillMessageUtils'
// - Resolved require(67970) to 'search-skill-message-utils'
// - Renamed variable 'w' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'Rm' to 'filterReplyLinks' (module 393180)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'ge' to 'determineSearchSkillType' (module 67970)
// - Updated imported property 'yT' to 'determineSkillPinType' (module 926482)
// - Updated imported property 'n' to 'getConversationType' (module 166172)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'p' to 'chatMessageShareSelectStore' (module 764401)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'S' to 'searchSkillTypes' (module 248215)
// - Updated imported property 'z' to 'SearchResultDisplay' (module 32776)
// - Updated imported property 'd' to 'searchResultSymbol' (module 15246)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 290870
         */
module.exports = function (module, exports, require) {
  var chatSearchResultSymbol_2 = require("chat-search-result-symbol_2") /*id: 15246*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var searchSkillTypes = require("search-skill-types") /*id: 248215*/;
  var aiSearchResultDisplay = require("ai-search-result-display") /*id: 32776*/;
  var searchSkillMessageUtils = require("search-skill-message-utils") /*id: 67970*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = e => {
    var t;
    var i;
    var r;
    let {
      message: a
    } = e;
    let l = objectPathGetDefault.getObjectPathDefault(a, ["ext", "academic_card_list"]);
    let u = (i = chatFeedStoreFactory.useFeedStore.getState().chatCreateInFirstTime[a.conversation_id ?? ""]) !== null && i !== undefined && i;
    let g = (r = (t = conversationMessageUtils_1.filterReplyLinks(chatMessageStoreFactory.createMessageStore.getState(), a)) === null || t === undefined ? undefined : t.every(e => !messageContentTypeAndStatusChecker.vlk(e))) === null || r === undefined || r;
    return {
      academicCardList: l ? JSON.parse(l) : undefined,
      searchType: searchSkillMessageUtils.determineSearchSkillType(a, !!l),
      isFirstCreateConversation: u,
      isNotBrokenMessage: g,
      onClickSearchCard: e => {
        teaAnalyticsEventTracker.trackEvent("click_search_card", e);
      },
      onTrackEvent: (e, t) => {
        if (!a.conversation_id) {
          return;
        }
        let o = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), a.conversation_id, {
          isLocalMessage: false,
          messageId: (a == null ? undefined : a.reply_id) ?? ""
        });
        teaAnalyticsEventTracker.trackEvent(e, {
          bot_id: a.bot_id,
          message_id: String(a.message_id),
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", a.conversation_id),
          conversation_id: a.conversation_id,
          conversation_type: chatConversationSelectorUtils.getConversationType(a.conversation_id),
          skill_id: o == null ? undefined : o.skill?.skill_id_no_default,
          skill_name: skillTypeMappings.getSkillName(o == null ? undefined : o.skill?.skill_type_no_default),
          ...t
        });
      },
      onCreateReportEvent: eventReportingService.createEventReporter
    };
  };
  function x(e) {
    let {
      inView: t,
      message: n,
      viewOnly: i
    } = e;
    let o = chatMessageStoreFactory.createMessageStore(e => {
      var t;
      return (t = e.searchResultIsFinishedMap[(n == null ? undefined : n.reply_id) || ""]) === null || t === undefined || t;
    });
    let a = messageContentTypeAndStatusChecker.vlk(n);
    let {
      isSelectMode: c
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      isSelectMode: e.isSelectMode
    }), deepEqualityUtil_1.isDeepEqual);
    let {
      onClickSearchCard: _,
      onTrackEvent: m,
      searchType: v,
      academicCardList: f,
      isNotBrokenMessage: p,
      isFirstCreateConversation: y
    } = k({
      message: n
    });
    let x = [searchSkillTypes.searchSkillTypes.AISearch, searchSkillTypes.searchSkillTypes.ComplexSearch, searchSkillTypes.searchSkillTypes.AcademicSearch];
    let S = v !== searchSkillTypes.searchSkillTypes.AcademicSearch;
    if (!(n == null ? undefined : n.content_obj) || a || S || c && v && x.includes(v)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(aiSearchResultDisplay.SearchResultDisplay, {
        className: l({
          "!mb-28": c
        }),
        isInSearching: !o && !!p,
        isFirstCreateConversation: y,
        inView: t,
        data: n == null ? undefined : n.content_obj,
        viewOnly: i,
        onClickSearchCard: _,
        onTrackEvent: m,
        onCreateReportEvent: eventReportingService.createEventReporter,
        searchType: v,
        academicCardList: f,
        messageId: n == null ? undefined : n.message_id
      });
    }
  }
  function S(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class C {
    constructor() {
      S(this, "pluginIdentifier", chatSearchResultSymbol_2.searchResultSymbol);
      S(this, "Content", x);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSearchResultContentPlugin: function () {
      return C;
    }
  });
}