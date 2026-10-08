// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B0' to 'chatGuidanceCardPlugin'
// - Renamed export 'DU' to 'chatGuidanceSuggestionsPlugin'
// - Renamed export 'GH' to 'chatGuidancePlugin'
// - Renamed export 'Ij' to 'feedListItemToolButtonPlugin'
// - Renamed export 'Ki' to 'feedListItemMenuOptionPlugin'
// - Renamed export 'L7' to 'skillBarPlugin'
// - Renamed export 'Ms' to 'inputToolButtonPlugin'
// - Renamed export 'Nz' to 'inputEventsPlugin'
// - Renamed export 'Yz' to 'chatFooterPlugin'
// - Renamed export 'f0' to 'chatInputPlugin'
// - Renamed export 'lf' to 'skillBarPluginConfig'
// - Renamed export 'q4' to 'inputToolMenuOptionPlugin'
// - Renamed export 'ri' to 'chatLayoutPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 500651
         */
module.exports = function (module, exports, require) {
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var collectionOrderByUtil_1 = require("collection-order-by-util_1") /*id: 848677*/;
  var arrayPredicateSliceUtil_1 = require("array-predicate-slice-util_1") /*id: 550671*/;
  var arrayPredicateFilterUtil = require("array-predicate-filter-util") /*id: 664399*/;
  var safeArrayReverse = require("safe-array-reverse") /*id: 953816*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var artifactLayoutConstants = require("artifact-layout-constants") /*id: 554108*/;
  var messageContentExtractors = require("message-content-extractors") /*id: 356469*/;
  var chatMessageBlockUtils = require("chat-message-block-utils") /*id: 292414*/;
  let y = e => {
    let {
      conversationId: n,
      artifactKey: i
    } = e;
    let r = chatMessageStoreFactory.createMessageStore.getState();
    let {
      messageLinkMap: o
    } = r;
    return (o[n] ?? []).map(e => conversationMessageUtils_1.getMessageFromLink(r, n, e)).find(e => {
      var n;
      var a;
      return messageContentTypeAndStatusChecker.XD1(e) && (((n = e.content_obj) === null || n === undefined ? undefined : n.artifact_meta?.artifact_key) === i || safeJsonUtils.safeParse(e.ext?.samantha_artifact, {})?.artifact_key === i) || messageContentTypeAndStatusChecker.cnd(e) && ((a = chatMessageBlockUtils.getResearchBlocks(e)) === null || a === undefined ? undefined : a.find(e => {
        var n;
        return ((n = e.content_obj) === null || n === undefined ? undefined : n.artifact?.artifact_key) === i;
      })) || messageContentTypeAndStatusChecker.BUc(e) && chatMessageBlockUtils.getArtifactBlock(e)?.artifact_version_id === i;
    });
  };
  let w = e => {
    let {
      conversationId: n,
      docId: r,
      artifactKey: o
    } = e;
    let a = chatMessageStoreFactory.createMessageStore.getState();
    let {
      messageLinkMap: s
    } = a;
    let l = (s[n] ?? []).map(e => conversationMessageUtils_1.getMessageFromLink(a, n, e));
    return moduleReExportWrapper.wrappedModule(l, e => {
      var n;
      var a;
      var s;
      return !!messageContentTypeAndStatusChecker.XD1(e) && ((n = e.content_obj) === null || n === undefined ? undefined : n.artifact_meta?.resource_id) === r && (!o || ((a = e.content_obj) === null || a === undefined ? undefined : a.artifact_meta?.artifact_key) === o) || !!messageContentTypeAndStatusChecker.cnd(e) && !!((s = chatMessageBlockUtils.getResearchBlocks(e)) === null || s === undefined ? undefined : s.find(e => {
        var n;
        var a;
        var l;
        return ((n = e.content_obj) === null || n === undefined ? undefined : n.artifact?.resource_id) === r && (!o || ((a = e.content_obj) === null || a === undefined ? undefined : a.artifact?.artifact_key) === o || ((l = e.content_obj) === null || l === undefined ? undefined : l.artifact?.artifact_version_id) === o);
      })) || !!messageContentTypeAndStatusChecker.BUc(e) && chatMessageBlockUtils.getArtifactBlock(e)?.resource_id === r && (!o || chatMessageBlockUtils.getArtifactBlock(e)?.artifact_version_id === o) || !!messageContentTypeAndStatusChecker.zwb(e) && e.content_obj?.pages_id === r || !!messageContentTypeAndStatusChecker.e0X(e) && e.content_obj?.pages_id === r || !!messageContentTypeAndStatusChecker.fjb(e) && chatMessageBlockUtils.getArtifactOp(e)?.resource_id === r && (!o || chatMessageBlockUtils.getArtifactOp(e)?.artifact_version_id === o);
    });
  };
  let S = e => {
    let {
      conversationId: t,
      matcher: n,
      timeout: i = 15000
    } = e;
    return new Promise((e, o) => {
      let a = null;
      let s = setTimeout(() => {
        if (a != null) {
          a();
        }
        o(Error(`Subscribe matching message with artifact timeout: ${i}`));
      }, i);
      a = chatMessageStoreFactory.createMessageStore.subscribe(e => {
        let {
          messageLinkMap: i
        } = e;
        return (i[t] ?? []).map(n => conversationMessageUtils_1.getMessageFromLink(e, t, n));
      }, t => {
        if (isEmptyUtil.isEmpty(t)) {
          return;
        }
        let i = t.find(e => n(e));
        if (a != null) {
          a();
        }
        if (s) {
          clearTimeout(s);
        }
        e(i);
      }, {
        fireImmediately: true
      });
    });
  };
  let x = e => {
    let {
      artifacts: t,
      ...n
    } = e;
    let i = t.map(e => e.artifact_key);
    return S({
      ...n,
      matcher: e => {
        var r;
        if (!messageContentTypeAndStatusChecker.z_e(e)) {
          return false;
        }
        if (messageContentTypeAndStatusChecker.XD1(e)) {
          return i.includes(safeJsonUtils.safeParse(e.ext?.artifact_meta, {}).artifact_key);
        }
        if (messageContentTypeAndStatusChecker.cnd(e)) {
          for (let t of chatMessageBlockUtils.getResearchBlocks(e)) {
            if (collectionIncludesUtil.includes(i, t == null ? undefined : (r = t.content_obj) === null || r === undefined ? undefined : r.artifact?.artifact_key)) {
              return true;
            }
          }
        }
        return false;
      }
    });
  };
  let C = e => {
    let {
      conversationId: t,
      artifactKey: n
    } = e;
    let i = y({
      conversationId: t,
      artifactKey: n
    });
    return extractArtifactFromChatMessage.extractArtifactFromMessage(i);
  };
  let k = e => {
    let {
      conversationId: n,
      artifactId: r
    } = e;
    let o = chatMessageStoreFactory.createMessageStore.getState();
    let a = o.messageLinkMap[n];
    let s = moduleReExportWrapper.wrappedModule(a, e => {
      let s = conversationMessageUtils_1.getMessageFromLink(o, n, e);
      if (messageContentTypeAndStatusChecker.cnd(s)) {
        let {
          artifactId: e
        } = extractArtifactFromChatMessage.extractResearchFromMessage(s) ?? {};
        return r === e;
      }
      if (!s || !messageContentTypeAndStatusChecker.z_e(s) || !messageContentTypeAndStatusChecker.XD1(s)) {
        return false;
      }
      if (messageContentTypeAndStatusChecker.BUc(s)) {
        let {
          artifactId: e
        } = extractArtifactFromChatMessage.extractArtifactFromMessage(s) ?? {};
        return r === e;
      }
      let {
        artifact_id: l,
        offset: c
      } = safeJsonUtils.safeParse(s.ext?.samantha_artifact, {});
      return r === l && !!c;
    })?.messageId;
    if (!s) {
      return;
    }
    let l = messageContentExtractors.getReplyChainMessages({
      conversationId: n,
      messageId: s
    });
    if (!(l == null ? undefined : l.length)) {
      return s;
    }
    let c = l == null ? undefined : l.find(e => messageContentTypeAndStatusChecker.z_e(e));
    if (c == null) {
      return undefined;
    } else {
      return c.message_id;
    }
  };
  let T = (e, t, n) => !!n && !!t && k({
    conversationId: e,
    artifactId: n
  }) === t;
  let E = (e, t) => {
    let i = chatMessageStoreFactory.createMessageStore.getState();
    let r = (i.messageLinkMap[e] ?? []).find(t => {
      let n = conversationMessageUtils_1.getMessageFromLink(i, e, t);
      return n && messageContentTypeAndStatusChecker.z_e(n) && messageContentTypeAndStatusChecker.XD1(n);
    });
    return (r == null ? undefined : r.messageId) === t;
  };
  let I = e => {
    let r = moduleReExportWrapper.wrappedModule(e, e => !!messageContentTypeAndStatusChecker.cnd(e));
    let o = moduleReExportWrapper.wrappedModule(e, e => !!extractArtifactFromChatMessage.extractArtifactFromMessage(e));
    if (r) {
      return extractArtifactFromChatMessage.extractResearchFromMessage(o)?.artifactKey;
    } else {
      return extractArtifactFromChatMessage.extractArtifactFromMessage(o)?.artifactKey;
    }
  };
  let j = e => {
    let n = e == null ? undefined : e.find(e => !!extractArtifactFromChatMessage.extractArtifactFromMessage(e));
    return extractArtifactFromChatMessage.extractArtifactFromMessage(n)?.artifactKey;
  };
  let R = (e, t) => !!y({
    conversationId: e,
    artifactKey: t
  });
  let N = e => {
    let {
      conversationId: t,
      artifacts: n,
      artifactKey: i
    } = e;
    let r = y({
      conversationId: t,
      artifactKey: i
    });
    let o = n.find(e => e.artifact_key === i);
    let c = o == null ? undefined : o.artifact_id;
    let h = collectionOrderByUtil_1.orderBy(n, e => e.version, "desc").filter(e => !c || e.artifact_id === c);
    let f = e => {
      let i = arrayPredicateSliceUtil_1.arrayPredicateSlice(h, t => t.artifact_key !== e);
      let r = infraUtilFunctions.findMapResult(i, e => {
        var r;
        return (r = N({
          conversationId: t,
          artifacts: n,
          artifactKey: e.artifact_key ?? ""
        })) !== null && r !== undefined && r;
      });
      if (r) {
        return r[1];
      } else {
        return null;
      }
    };
    if (r) {
      let {
        message_id: e = ""
      } = r;
      let n = messageContentExtractors.getReplyChainMessages({
        conversationId: t,
        messageId: e
      });
      let o = I(n) ?? i;
      let a = arrayPredicateFilterUtil.arrayPredicateFilter(h, e => e.artifact_key !== o).find(e => {
        return !R(t, e.artifact_key ?? "");
      })?.artifact_key;
      let s = T(t, r == null ? undefined : r.message_id, c);
      let m = n == null ? undefined : n.find(e => messageContentTypeAndStatusChecker.z_e(e));
      if (!(n == null ? undefined : n.length)) {
        if (messageContentTypeAndStatusChecker.z_e(r)) {
          return {
            messageId: e,
            artifactKey: s && a ? a : i
          };
        } else {
          return f(i);
        }
      }
      if (!m) {
        return f(j(n) ?? i);
      }
      let b = extractArtifactFromChatMessage.extractArtifactFromMessage(m) || extractArtifactFromChatMessage.extractResearchFromMessage(m);
      if (b) {
        let {
          artifactKey: e = ""
        } = b;
        let {
          message_id: t = ""
        } = m;
        return {
          messageId: t,
          artifactKey: s && a ? a : e
        };
      }
      return null;
    }
    if (!o) {
      return null;
    }
    let b = f(i);
    if (b) {
      let {
        messageId: e
      } = b;
      return {
        artifactKey: i,
        messageId: e
      };
    }
    return null;
  };
  let $ = e => {
    let {
      conversationId: t,
      artifacts: n,
      artifactId: i,
      messageId: r
    } = e;
    let o = chatMessageStoreFactory.createMessageStore.getState();
    for (let e of safeArrayReverse.reverseArray(n.slice())) {
      if (e.artifact_id !== i) {
        continue;
      }
      let n = conversationMessageUtils_1.findReplyMessage(o, t, e.question_message_id ?? "");
      if (!n) {
        continue;
      }
      if (!r) {
        return {
          artifactKey: e.artifact_key ?? "",
          messageId: n.message_id ?? ""
        };
      }
      let c = messageContentExtractors.getReplyChainMessages({
        conversationId: t,
        messageId: n.message_id ?? ""
      });
      let h = ((c == null ? undefined : c.length) ? c : [n]).find(e => e.message_id === r);
      if (h) {
        return {
          artifactKey: e.artifact_key ?? "",
          messageId: h.message_id ?? ""
        };
      }
    }
    return null;
  };
  let M = e => {
    let {
      conversationId: t,
      artifacts: n,
      onlyLegacyDoc: i = false
    } = e;
    return n.filter(e => {
      let {
        resource_type: n,
        artifact_key: r
      } = e;
      if (!collectionIncludesUtil.includes([artifactResourceLayout.ArtifactResource.Pages, artifactResourceLayout.ArtifactResource.WriteDoc], n)) {
        return !i;
      }
      let a = y({
        conversationId: t,
        artifactKey: r ?? ""
      });
      if (!a) {
        return true;
      }
      let {
        message_id: s = ""
      } = a;
      let l = messageContentExtractors.getReplyChainMessages({
        conversationId: t,
        messageId: s
      });
      if (!(l == null ? undefined : l.length)) {
        return messageContentTypeAndStatusChecker.z_e(a);
      }
      let c = l == null ? undefined : l.find(e => messageContentTypeAndStatusChecker.z_e(e));
      let h = extractArtifactFromChatMessage.extractArtifactFromMessage(c) || extractArtifactFromChatMessage.extractResearchFromMessage(c);
      return !!c && !!h && h.artifactKey === r;
    });
  };
  let P = e => {
    var t;
    let n = extractArtifactFromChatMessage.extractArtifactFromMessage(e);
    return !!n && ((t = n.artifactId) === null || t === undefined ? undefined : t.startsWith("human-created"));
  };
  let L = e => {
    let n = extractArtifactFromChatMessage.extractArtifactFromMessage(e);
    return n != null && !!n.artifactId && (n.artifactId.startsWith("human-edit") || n.artifactId.startsWith("human-created") || n.artifactId.startsWith("user-edit") || (e == null ? undefined : e.ext?.page_create_from_message) === "true");
  };
  let D = e => {
    let {
      conversationId: n,
      artifactKey: i
    } = e;
    if (!i) {
      return false;
    }
    let r = chatMessageStoreFactory.createMessageStore.getState();
    let {
      messageLinkMap: o
    } = r;
    return j((o[n] ?? []).map(e => conversationMessageUtils_1.getMessageFromLink(r, n, e)).filter(e => !!e)) === i;
  };
  let O = e => {
    let {
      id: t,
      source_id: n,
      topic: i,
      title: r,
      version: o,
      status: a,
      resource_type: s,
      resource_id: l,
      resource_version: c,
      create_time: d,
      ext: u
    } = e;
    return {
      conversation_id: n,
      artifact_id: i,
      title: r,
      version: o,
      status: a,
      resource_type: s,
      resource_id: l,
      resource_version: infraUtilFunctions.parseNumber(c),
      create_time: d,
      artifact_key: t,
      id: t,
      ext: u
    };
  };
  let Z = e => {
    let {
      version_list: n = []
    } = e ?? {};
    return n.find(e => e.resource_version === artifactLayoutConstants.subResourceIndex) ?? {};
  };
  require.d(exports, {
    chatGuidanceCardPlugin: function () {
      return D;
    },
    chatGuidanceSuggestionsPlugin: function () {
      return M;
    },
    chatGuidancePlugin: function () {
      return C;
    },
    feedListItemToolButtonPlugin: function () {
      return E;
    },
    feedListItemMenuOptionPlugin: function () {
      return L;
    },
    skillBarPlugin: function () {
      return w;
    },
    inputToolButtonPlugin: function () {
      return x;
    },
    inputEventsPlugin: function () {
      return T;
    },
    chatFooterPlugin: function () {
      return $;
    },
    chatInputPlugin: function () {
      return P;
    },
    skillBarPluginConfig: function () {
      return N;
    },
    inputToolMenuOptionPlugin: function () {
      return Z;
    },
    chatLayoutPlugin: function () {
      return O;
    }
  });
}