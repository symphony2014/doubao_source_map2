// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatUnreadTipConstant'
// - Resolved require(31273) to 'chat-unread-tip-constant'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'chatMessageReadStatusUtil'
// - Resolved require(354997) to 'chat-message-read-status-util'
// - Renamed variable 'u' to 'attachmentProcessingUtils'
// - Resolved require(274055) to 'attachment-processing-utils'
// - Renamed variable 's' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'l' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'c' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 'd' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'f' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'v' to 'rtlDocumentTextIcon'
// - Resolved require(717314) to 'rtl-document-text-icon'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'Eq' to 'skillMessageMode' (module 617019)
// - Updated imported property 'wD' to 'getReadStatus' (module 354997)
// - Updated imported property 'PP' to 'findMessageById' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 'tK' to 'mapAttachments' (module 274055)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'RtlDocumentTextIcon' (module 717314)
// - Updated imported property 'q' to 'unreadTipSymbol' (module 31273)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-top.24d69ed3.js
         * chunkId: 57268
         * moduleId: 356142
         */
module.exports = function (module, exports, require) {
  var chatUnreadTipConstant = require("chat-unread-tip-constant") /*id: 31273*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatMessageReadStatusUtil = require("chat-message-read-status-util") /*id: 354997*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlDocumentTextIcon = require("rtl-document-text-icon") /*id: 717314*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    if (e.content_blocks_v2) {
      var n;
      let i = e.content_blocks_v2.find(e => {
        var n;
        return e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT && ((n = e.content) === null || n === undefined ? undefined : n.text_block?.text_block_scene) === skillMessageLifecycleTypes.skillMessageMode.LONG_FILE_PARSE_LIMIT_TIPS;
      });
      if (i == null) {
        return undefined;
      } else if ((n = i.content) === null || n === undefined) {
        return undefined;
      } else {
        return n.text_block?.text;
      }
    }
  };
  let _ = e => {
    let {
      className: n,
      message: i
    } = e;
    let r = chatMessageReadStatusUtil.getReadStatus({
      message: i
    });
    let s = conversationMessageUtils_1.findMessageById(chatMessageStoreFactory.createMessageStore.getState(), i.conversation_id || "", i.reply_id || "");
    let l = checkNestedContentType.isNestedContentType(s) && attachmentProcessingUtils.mapAttachments(s).length > 1;
    let _ = (r == null ? undefined : r.readRatio) ?? 0;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let S = m(i) || h(l ? "multi_files_exceed_limit" : "single_file_exceed_limit", {
      postProcess: "sprintf",
      sprintf: [h("brandName_doubao"), `${_}%`]
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a("bg-[var(--s-color-bg-trans)] text-s-color-text-secondary rounded-10 max-w-400", n, "pl-8 pr-12 py-12"),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a("flex gap-4 items-center"),
        children: [reactJsxRuntimeCoreReexport.jsx(rtlDocumentTextIcon.RtlDocumentTextIcon, {
          className: "p-3 text-16"
        }), reactJsxRuntimeCoreReexport.jsx("p", {
          className: "s-font-small",
          children: S
        })]
      })
    });
  };
  function h(e, t, n) {
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
  let S = e => {
    let {
      message: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(_, {
      message: t,
      className: "mb-20"
    });
  };
  class y {
    constructor() {
      h(this, "pluginIdentifier", chatUnreadTipConstant.unreadTipSymbol);
      h(this, "Content", S);
    }
  }
  require.r(exports);
  require.d(exports, {
    NotReadFinishTipReceiveMessageBoxTopPlugin: function () {
      return y;
    }
  });
}