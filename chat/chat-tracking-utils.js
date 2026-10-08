// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SU' to 'buildTrackParams'
// - Renamed export 'i_' to 'buildReportParams'
// - Renamed export 'mp' to 'buildTrackParamsFromChat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 665561
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatViewConstants = require("chat-view-constants") /*id: 528191*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewConstantMappers = require("chat-view-constant-mappers") /*id: 556409*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var skillStatusMapper = require("skill-status-mapper") /*id: 808463*/;
  let _ = e => {
    var t;
    let {
      activeSkill: n,
      show_scene: r,
      conversation_id: o,
      bot_id: a,
      conversation_type: l,
      chat_type: s
    } = e;
    let u = chatGuidanceSelectors.hasActiveSkill();
    let c = reactCoreLibraryReexport.useMemo(() => {
      if (u) {
        return {
          sendMessageSecScene: "input"
        };
      }
    }, [u]);
    let h = {
      show_scene: r,
      conversation_id: o,
      bot_id: a,
      conversation_type: l,
      chat_type: s,
      skill_id: (n == null ? undefined : (t = n.skill_type) === null || t === undefined ? undefined : t.toString()) || null,
      skill_name: skillTypeMappings.getSkillName(n == null ? undefined : n.skill_type),
      is_deepsearch_show: 0,
      current_page: "chat",
      enter_method: "action_bar",
      ...c
    };
    return {
      trackMeta: c,
      trackParams: h
    };
  };
  let v = e => {
    let {
      chatId: t,
      chatType: n,
      activeSkill: i,
      show_scene: o
    } = e;
    let a = chatFeedStoreFactory.useFeedStore(e => {
      let i = chatConversationSelectors_2.getBotId(e);
      let r = chatConversationSelectors_2.getConversation(e, t);
      let o = chatConversationSelectors_2.getLocalConversation(e, t);
      return {
        conversation_id: t,
        bot_id: i,
        conversation_type: (r == null ? undefined : r.conversation_type) ?? (o == null ? undefined : o.conversation_type),
        chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", t)
      };
    }, deepEqualityUtil_1.isDeepEqual);
    return _({
      chatId: t,
      chatType: n,
      activeSkill: i,
      show_scene: o,
      ...a
    });
  };
  let b = e => {
    let {
      chatId: t,
      chatType: n,
      activeSkill: i
    } = e;
    let r = chatGuidanceSelectors.hasActiveSkill();
    let h = n === chatConversationTypes.ConversationTypes.NewThread && !r;
    let m = chatStoreManager.useStoreSelector("chatGuidanceStore", e => chatViewConstantMappers.mapViewToEvent(e.skillGuidancePageFrom || chatViewConstants.chatViewConstants.DEFAULT));
    let g = chatStoreManager.useStoreSelector("chatInputStore", e => e.selectedRecommendSkill);
    let f = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillFromMap[t]);
    return {
      reportParams: (() => {
        let e = objectExcludeFilterUtil.filterObjectExclude({
          action_bar_recommended: g && (i == null ? undefined : i.skill_type) === g.skill_type ? skillStatusMapper.getSkillType(g.tag) : undefined,
          skill_from: (i == null ? undefined : i.skill_type) === (f == null ? undefined : f.skillType) ? f == null ? undefined : f.skillFrom : undefined
        }, isUndefinedCheck.isUndefined);
        if (r) {
          Object.assign(e, {
            scene: m,
            send_source: "skill_guidance_page"
          });
        } else if (h) {
          Object.assign(e, {
            send_source: "guidance_page"
          });
        }
        return e;
      })()
    };
  };
  require.d(exports, {
    buildTrackParams: function () {
      return _;
    },
    buildReportParams: function () {
      return b;
    },
    buildTrackParamsFromChat: function () {
      return v;
    }
  });
}