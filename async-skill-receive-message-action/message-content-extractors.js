// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FA' to 'extractMessageArtifactInfo'
// - Renamed export 'Qx' to 'extractMessageSearchResults'
// - Renamed export 'RR' to 'extractMessageTextContent'
// - Renamed export 'fB' to 'getReplyChainMessages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 356469
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  let p = e => {
    let {
      conversationId: i,
      messageId: r
    } = e;
    let o = chatMessageStoreFactory.createMessageStore.getState();
    let {
      reply_id: a
    } = conversationMessageUtils_1.getMessageById(o, i, r) ?? {};
    if (!a) {
      return;
    }
    let s = chatMessageUtils_2_1.getMessageGetter({
      messageMap: o.messageMap[i],
      localMessageMap: o.localMessageMap[i]
    });
    return (o.messageLinkMap[i] ?? []).filter(e => {
      return s(e)?.reply_id === a && localRegenCheck.shouldRegenerate(s(e));
    }).map(e => conversationMessageUtils_1.getMessageFromLink(o, i, e)).filter(e => !!e);
  };
  let m = e => {
    var n;
    var l;
    var d;
    var h;
    var f;
    let m;
    let {
      message: v
    } = e;
    if (!v) {
      return;
    }
    if (messageContentTypeAndStatusChecker.zL_(v)) {
      m = (v == null ? undefined : v.content_blocks_v2) ? v == null ? undefined : (d = v.content_blocks_v2) === null || d === undefined ? undefined : (l = d.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT)) === null || l === undefined ? undefined : (n = l.content) === null || n === undefined ? undefined : n.search_query_result_block?.results : v == null ? undefined : (f = v.content_blocks) === null || f === undefined ? undefined : (h = f.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT)) === null || h === undefined ? undefined : h.content_obj?.results;
    }
    let g = objectPathGetDefault.getObjectPathDefault(v, "content_obj.search_card.search_references");
    let _ = objectPathGetDefault.getObjectPathDefault(v, "content_obj.search_references");
    let b = m ?? g ?? _;
    if (b) {
      let e = collectionMapMatcher.mapWithMatcher(b, e => e.text_card);
      return genericFilterUtil.genericFilter(e, e => !isNullishCheck.isNil(e));
    }
  };
  let v = e => {
    let n = (e == null ? undefined : e.content_blocks) ? e == null ? undefined : e.content_blocks : undefined;
    let i = n == null ? undefined : n.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT)?.content_obj;
    let {
      resource_id: r,
      title: o,
      text: a,
      leading_msg: l,
      predicted_generate_duration: c,
      brief: d,
      samantha_code: u,
      generated_tips: h,
      generating_tips: p,
      async_generate: m
    } = i ?? {};
    return {
      docId: r,
      title: o,
      text: a,
      leadingText: l,
      remainTime: infraUtilFunctions.parseNumber(c),
      summary: d,
      samanthaCode: u,
      generatedTips: h,
      generatingTips: p,
      asyncGenerate: m
    };
  };
  let g = e => {
    var n;
    var i;
    let r = e == null ? undefined : (i = e.content_blocks_v2) === null || i === undefined ? undefined : (n = i.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT)) === null || n === undefined ? undefined : n.content?.artifact_block;
    let {
      resource_id: o,
      title: a,
      brief: l
    } = r ?? {};
    return {
      docId: o,
      title: a,
      summary: l
    };
  };
  let _ = e => {
    if (e == null ? undefined : e.content_blocks_v2?.length) {
      return g(e);
    }
    if (e == null ? undefined : e.content_blocks?.length) {
      return v(e);
    }
    let i = messageContentTypeAndStatusChecker.e0X(e) || messageContentTypeAndStatusChecker.zwb(e) ? e == null ? undefined : e.content_obj : undefined;
    let {
      pages_id: r,
      title: o,
      text: a,
      leading_msg: s,
      predicted_generate_duration: l,
      summary: d,
      samantha_code: u,
      generated_tips: h,
      generating_tips: p,
      async_generate: m
    } = i ?? {};
    return {
      docId: r,
      title: o,
      text: a,
      leadingText: s,
      remainTime: infraUtilFunctions.parseNumber(l),
      summary: d,
      samanthaCode: u,
      generatedTips: h,
      generatingTips: p,
      asyncGenerate: m
    };
  };
  let b = e => {
    var n;
    var i;
    var r;
    return e && (((r = e.content_blocks_v2) === null || r === undefined ? undefined : (i = r.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT)) === null || i === undefined ? undefined : (n = i.content) === null || n === undefined ? undefined : n.text_block?.text) || String(e.content_obj?.text)) || "";
  };
  require.d(exports, {
    extractMessageArtifactInfo: function () {
      return m;
    },
    extractMessageSearchResults: function () {
      return _;
    },
    extractMessageTextContent: function () {
      return b;
    },
    getReplyChainMessages: function () {
      return p;
    }
  });
}