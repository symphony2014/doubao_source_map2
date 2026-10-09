// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'localRegenCheck'
// - Resolved require(965069) to 'local-regen-check'
// - Renamed variable 'o' to 'feedbackReportModalLoader'
// - Resolved require(25486) to 'feedback-report-modal-loader'
// - Renamed variable 'a' to 'checkLastSectionId'
// - Resolved require(320509) to 'check-last-section-id'
// - Renamed variable 'l' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'd' to 'chatContextUtil'
// - Resolved require(491849) to 'chat-context-util'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'infraMessageActionSymbol'
// - Resolved require(903424) to 'infra-message-action-symbol'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'R' to 'useChatContext' (module 491849)
// - Updated imported property 'v' to 'isLastSection' (module 320509)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'm' to 'FeedbackReportModal' (module 25486)
// - Updated imported property 'b' to 'shouldRegenerate' (module 965069)
// - Updated imported property 'h' to 'infraMessageAction' (module 903424)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 414311
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var feedbackReportModalLoader = require("feedback-report-modal-loader") /*id: 25486*/;
  var checkLastSectionId = require("check-last-section-id") /*id: 320509*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var infraMessageActionSymbol = require("infra-message-action-symbol") /*id: 903424*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function p(e, t, n) {
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
  let f = e => {
    let {
      message: t,
      onExitActionMode: n
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let p = t.message_id || "";
    let f = t.conversation_id || "";
    let m = t.bot_id || "";
    let {
      locationState: g
    } = chatContextUtil.useChatContext();
    let h = checkLastSectionId.isLastSection(t);
    let _ = messageContentTypeAndStatusChecker.C_i(t);
    let b = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), t.conversation_id || "", t.message_id || "");
    return reactJsxRuntimeCoreReexport.jsx(feedbackReportModalLoader.FeedbackReportModal, {
      entityId: p || m,
      messageId: p,
      conversationId: f,
      exts: {
        visible: true,
        click_from: b && h ? "answer" : "long_press_message",
        if_regenerated: Number(localRegenCheck.shouldRegenerate(t)),
        isLyricMusic: _
      },
      onHide: n,
      locationState: g,
      t: u
    });
  };
  class m {
    constructor() {
      p(this, "pluginIdentifier", infraMessageActionSymbol.infraMessageAction);
      p(this, "Content", f);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultReportReceiveMessageActionBottomPlugin: function () {
      return m;
    }
  });
}