// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'o' to 'initConversationMessageList'
// - Resolved require(767528) to 'init-conversation-message-list'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'l' to 'aiPptUpdateCmdPlugin'
// - Resolved require(1197) to 'ai-ppt-update-cmd-plugin'
// - Updated imported property 'g' to 'aiPptUpdatePlugin' (module 1197)
// - Updated imported property 'y_' to 'processMessageList' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property '$A' to 'artifactResourceType' (module 617019)
// - Updated imported property 'C' to 'initMessageList' (module 767528)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 373705
         */
module.exports = function (module, exports, require) {
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var initConversationMessageList = require("init-conversation-message-list") /*id: 767528*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var aiPptUpdateCmdPlugin = require("ai-ppt-update-cmd-plugin") /*id: 1197*/;
  function c(e, t, n) {
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
  class u {
    constructor() {
      c(this, "pluginIdentifier", aiPptUpdateCmdPlugin.aiPptUpdatePlugin);
      c(this, "handleCmd", e => {
        var l;
        var c;
        if ((e == null ? undefined : e.data?.version) !== "2.0") {
          return;
        }
        let {
          conversation_id: u,
          message_index: d,
          limit: p,
          ext: h
        } = (e == null ? undefined : (l = e.data) === null || l === undefined ? undefined : l.data?.pull_msg_notify) || {};
        if (!u) {
          return;
        }
        let {
          message: f
        } = conversationMessageUtils_1.processMessageList(chatMessageStoreFactory.createMessageStore.getState(), u ?? "", e => {
          let {
            getMessage: t
          } = e;
          let n = t();
          return n != null && !!n.message_id;
        });
        let {
          message: m
        } = conversationMessageUtils_1.processMessageList(chatMessageStoreFactory.createMessageStore.getState(), u ?? "", e => {
          let {
            getMessage: t
          } = e;
          let n = t();
          return n != null && !!n.message_id && `${n.index}` === d;
        });
        if ((m == null ? undefined : m.message_id) === (f == null ? undefined : f.message_id) || !(m == null ? undefined : (c = m.content_blocks_v2) === null || c === undefined ? undefined : c.find(e => {
          var n;
          return e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && (e == null ? undefined : (n = e.content) === null || n === undefined ? undefined : n.artifact_block?.resource_type) === skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Slides;
        }))) {
          return;
        }
        let g = {
          pull_single_chain_scene: (h == null ? undefined : h.pull_single_chain_scene) || ""
        };
        let _ = Number.MAX_SAFE_INTEGER;
        if (d) {
          try {
            _ = Number.parseInt(d);
          } catch (e) {}
        }
        initConversationMessageList.initMessageList({
          conversationId: u,
          messageIndex: _,
          size: p || 1,
          v2ApiExt: g
        });
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ProductUpdateMessageCmdPlugin: function () {
      return u;
    }
  });
}