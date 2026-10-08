// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gt' to 'getChatGenre'
// - Renamed export 'L$' to 'isCanvasModeEnabled'
// - Renamed export 'PK' to 'getInputSkillVariables'
// - Renamed export 'Uo' to 'getReplyChatGenre'
// - Renamed export 'g' to 'getDocPlaygroundWidth'
// - Renamed export 'q5' to 'hasLongContentReply'
// - Renamed export 'rA' to 'getChatMessageId'
// - Renamed export 'zM' to 'getChatAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 862269
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatInputSkillTypes = require("chat-input-skill-types") /*id: 878542*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var docPlaygroundCheck = require("doc-playground-check") /*id: 993680*/;
  let d = e => {
    if (e == null ? undefined : e.ext?.input_skill) {
      let {
        variables: t
      } = safeJsonUtils.safeParse(e == null ? undefined : e.ext?.input_skill, {});
      return t;
    }
  };
  let p = e => {
    if (e == null ? undefined : e.ext?.chat_ability) {
      let t = safeJsonUtils.safeParse(e == null ? undefined : e.ext?.chat_ability, {});
      if ((t == null ? undefined : t.ability_type) !== aiChatEnumConstants.skillTypes.SkillWrite || !isStringTypeCheck.isString(t == null ? undefined : t.ability_param)) {
        return;
      }
      return safeJsonUtils.safeParse(t.ability_param, {});
    }
  };
  let f = (e, t) => {
    let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, {
      isLocalMessage: false,
      messageId: t
    });
    let i = n == null ? undefined : n.reply_id;
    if (i) {
      let {
        is_long_content: t
      } = d(conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, {
        isLocalMessage: false,
        messageId: i
      })) ?? {};
      return t;
    }
  };
  let h = (e, t) => {
    let n;
    let o = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, {
      isLocalMessage: false,
      messageId: t
    });
    let a = p(o);
    let u = d(o);
    if (a) {
      n = objectPathGetDefault.getObjectPathDefault(a, "config.generate_config.message_id");
    } else if (u) {
      n = objectPathGetDefault.getObjectPathDefault(u, "message_id");
    }
    if (isStringTypeCheck.isString(n)) {
      return v(e, n);
    }
  };
  let m = (e, t) => {
    let n;
    let o = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, {
      isLocalMessage: false,
      messageId: t
    });
    let a = p(o);
    let u = d(o);
    if (a) {
      n = objectPathGetDefault.getObjectPathDefault(a, "config.genre");
    } else if (u) {
      n = objectPathGetDefault.getObjectPathDefault(u, "genre");
    }
    if (isStringTypeCheck.isString(n)) {
      return n;
    }
  };
  let v = (e, t) => {
    let n = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), e, {
      isLocalMessage: false,
      messageId: t
    });
    let i = n == null ? undefined : n.reply_id;
    return i && m(e, i);
  };
  let g = e => {
    let n = p(e);
    let i = d(e);
    if (n) {
      return n.action;
    } else if (e == null ? undefined : e.ext?.doc_action) {
      return e.ext.doc_action;
    } else if (i) {
      return i.action;
    } else {
      return undefined;
    }
  };
  let y = e => {
    let t = p(e);
    let n = d(e);
    if (t) {
      return t.config?.canvas_mode === chatInputSkillTypes.ChatInputMode.OPEN;
    }
    if (n) {
      let {
        enable_pages_canvas: e
      } = n;
      return e === "true" || e === true;
    }
    return false;
  };
  let _ = () => docPlaygroundCheck.isDocPlayground() && typeof window != "undefined" ? Math.floor(window.innerWidth / 2) : 1100;
  require.d(exports, {
    getChatGenre: function () {
      return m;
    },
    isCanvasModeEnabled: function () {
      return y;
    },
    getInputSkillVariables: function () {
      return d;
    },
    getReplyChatGenre: function () {
      return v;
    },
    getDocPlaygroundWidth: function () {
      return _;
    },
    hasLongContentReply: function () {
      return f;
    },
    getChatMessageId: function () {
      return h;
    },
    getChatAction: function () {
      return g;
    }
  });
}