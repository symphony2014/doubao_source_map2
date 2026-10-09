// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveReadTextContentSymbol'
// - Resolved require(851852) to 'receive-read-text-content-symbol'
// - Renamed variable 'l' to 'deepThinkingContainer'
// - Resolved require(210562) to 'deep-thinking-container'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'skillMessageProcessor'
// - Resolved require(397273) to 'skill-message-processor'
// - Renamed variable 's' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'c' to 'documentRefAnchorPointRenderer'
// - Resolved require(698453) to 'document-ref-anchor-point-renderer'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'wA' to 'thinkBrokenFlag' (module 397273)
// - Updated imported property 'c' to 'ThinkingContainer' (module 210562)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'T' to 'renderDocumentRefAnchors' (module 698453)
// - Updated imported property 'E' to 'receiveTextContent' (module 851852)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 186153
         */
module.exports = function (module, exports, require) {
  var receiveReadTextContentSymbol = require("receive-read-text-content-symbol") /*id: 851852*/;
  var deepThinkingContainer = require("deep-thinking-container") /*id: 210562*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var documentRefAnchorPointRenderer = require("document-ref-anchor-point-renderer") /*id: 698453*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      inView: f,
      theme: h,
      message: g
    } = e;
    let _ = messageContentTypeAndStatusChecker.f8g(g);
    let b = chatMessageStatusCheck.isMessageFinished(g);
    let k = !!(g == null ? undefined : g.content_obj?.text);
    let y = skillMessageProcessor.thinkBrokenFlag(g == null ? undefined : g.ext);
    let x = !!(g == null ? undefined : g.content_obj?.think) && !!(g == null ? undefined : g.content_obj?.text) && !y || b;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [_ && !(g == null ? undefined : g.think_reason_is_hide) && reactJsxRuntimeCoreReexport.jsx(deepThinkingContainer.ThinkingContainer, {
        meta: g == null ? undefined : g.meta_infos,
        isThinkingFinished: x,
        isThinkingBroken: y,
        thinkExpandStatus: true,
        isShare: true,
        content: (g == null ? undefined : g.content_obj?.think) || "",
        messageId: g == null ? undefined : g.message_id,
        botId: g == null ? undefined : g.bot_id,
        skillType: g == null ? undefined : g.skill?.skill_type_no_default,
        skillId: g == null ? undefined : g.skill?.skill_id_no_default,
        conversationId: g == null ? undefined : g.conversation_id,
        messageText: (g == null ? undefined : g.content_obj?.text) || ""
      }), k && reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
        inView: f,
        message: g,
        messageBlockText: undefined,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        theme: h,
        customRenderOptions: {
          useCustomReplacementElements: documentRefAnchorPointRenderer.renderDocumentRefAnchors
        }
      })]
    });
  };
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
  let m = e => reactJsxRuntimeCoreReexport.jsx(u, {
    ...e
  });
  class v {
    constructor() {
      p(this, "pluginIdentifier", receiveReadTextContentSymbol.receiveTextContent);
      p(this, "Content", m);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveReadTextContentPlugin: function () {
      return v;
    }
  });
}