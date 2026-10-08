// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'o' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'conversationMessageValidator'
// - Resolved require(253313) to 'conversation-message-validator'
// - Renamed variable 'l' to 'writingSkillGenerateArticleButton'
// - Resolved require(973466) to 'writing-skill-generate-article-button'
// - Renamed variable 's' to 'outlineGenDocAction'
// - Resolved require(423798) to 'outline-gen-doc-action'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'M_' to 'getReplyMessage' (module 393180)
// - Updated imported property 'S' to 'checkMessageSection' (module 253313)
// - Updated imported property 'cR' to 'WritingGenerateArticleButton' (module 973466)
// - Updated imported property 'q' to 'outlineGenDocAction' (module 423798)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 88898
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var conversationMessageValidator = require("conversation-message-validator") /*id: 253313*/;
  var writingSkillGenerateArticleButton = require("writing-skill-generate-article-button") /*id: 973466*/;
  var outlineGenDocAction = require("outline-gen-doc-action") /*id: 423798*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
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
  let u = e => {
    let {
      message: t
    } = e;
    let {
      message_id: n = "",
      conversation_id: s = ""
    } = t || {};
    let c = chatMessageStoreFactory.createMessageStore(e => {
      let n = conversationMessageUtils_1.getReplyMessage(e, s);
      return !!t && !!n && n.message_id !== t.message_id && messageContentTypeAndStatusChecker.fdv(t) && conversationMessageValidator.checkMessageSection(s, t) && !messageContentTypeAndStatusChecker.F3w(t);
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: c && reactJsxRuntimeCoreReexport.jsx(writingSkillGenerateArticleButton.WritingGenerateArticleButton, {
        messageId: n,
        size: "small",
        "data-button-mode": "max"
      })
    });
  };
  class v {
    constructor() {
      c(this, "pluginIdentifier", outlineGenDocAction.outlineGenDocAction);
      c(this, "ButtonContentGroups", [u]);
    }
  }
  require.r(exports);
  require.d(exports, {
    OutlineGenDocReceiveMessageActionButtonPlugin: function () {
      return v;
    }
  });
}