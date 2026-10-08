// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatArtifactSymbol'
// - Resolved require(476196) to 'chat-artifact-symbol'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'deepThinkingContainer'
// - Resolved require(210562) to 'deep-thinking-container'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'c' to 'skillMessageProcessor'
// - Resolved require(397273) to 'skill-message-processor'
// - Renamed variable 'd' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'u' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'p' to 'tipContentRenderer'
// - Resolved require(579314) to 'tip-content-renderer'
// - Renamed variable 'm' to 'codeArtifactMessageRenderer'
// - Resolved require(570) to 'code-artifact-message-renderer'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'wA' to 'thinkBrokenFlag' (module 397273)
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// - Updated imported property 'c' to 'ThinkingContainer' (module 210562)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'J' to 'useMessageArtifactRenderers' (module 570)
// - Updated imported property 'j' to 'TipContentRenderer' (module 579314)
// - Updated imported property 'J' to 'chatArtifactSymbol' (module 476196)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 641430
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var chatArtifactSymbol = require("chat-artifact-symbol") /*id: 476196*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var deepThinkingContainer = require("deep-thinking-container") /*id: 210562*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var tipContentRenderer = require("tip-content-renderer") /*id: 579314*/;
  var codeArtifactMessageRenderer = require("code-artifact-message-renderer") /*id: 570*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    var b;
    let {
      inView: k,
      message: y,
      theme: x = "samantha"
    } = e;
    let w = messageContentTypeAndStatusChecker.f8g(y);
    let S = chatMessageStatusCheck.isMessageFinished(y);
    let R = skillMessageProcessor.thinkBrokenFlag(y == null ? undefined : y.ext);
    let $ = !!(y == null ? undefined : y.content_obj?.think) && !!(y == null ? undefined : y.content_obj?.text) && !R || S;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(chatThemeStyleConfig.chatThemeConfig[x]?.receiveClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[x].cssVar,
      children: [w && !(y == null ? undefined : y.think_reason_is_hide) && reactJsxRuntimeCoreReexport.jsx(deepThinkingContainer.ThinkingContainer, {
        isThinkingFinished: $,
        isThinkingBroken: R,
        thinkExpandStatus: true,
        content: (y == null ? undefined : y.content_obj?.think) || "",
        messageId: y == null ? undefined : y.message_id,
        botId: y == null ? undefined : y.bot_id,
        skillType: y == null ? undefined : y.skill?.skill_type_no_default,
        skillId: y == null ? undefined : y.skill?.skill_id_no_default,
        conversationId: y == null ? undefined : y.conversation_id,
        messageText: (y == null ? undefined : y.content_obj?.text) || ""
      }), reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
        inView: k,
        message: y,
        theme: x,
        messageBlockText: undefined,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        customRenderOptions: {
          useCustomReplacementElements: () => codeArtifactMessageRenderer.useMessageArtifactRenderers({
            message: y,
            isShareOrCollectionMessage: true
          })
        }
      }), (chatMessageStatusCheck.isMessageFinished(y) || messageContentTypeAndStatusChecker.vlk(y)) && reactJsxRuntimeCoreReexport.jsx(tipContentRenderer.TipContentRenderer, {
        jsonString: (b = y.verbose) === null || b === undefined ? undefined : b.extra?.risk_tips
      })]
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
  let g = e => {
    let {
      inView: t,
      message: n,
      theme: i
    } = e;
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(f, {
        inView: t,
        message: n,
        theme: i
      });
    } else {
      return null;
    }
  };
  class _ {
    constructor() {
      h(this, "pluginIdentifier", chatArtifactSymbol.chatArtifactSymbol);
      h(this, "Content", g);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveCodeArtifactContentPlugin: function () {
      return _;
    }
  });
}