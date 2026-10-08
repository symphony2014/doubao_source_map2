// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatTextContentSymbol'
// - Resolved require(369323) to 'chat-text-content-symbol'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'c' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'd' to 'tipContentRenderer'
// - Resolved require(579314) to 'tip-content-renderer'
// - Renamed variable 'u' to 'inlineDocArtifactRenderer'
// - Resolved require(690621) to 'inline-doc-artifact-renderer'
// - Renamed variable 'p' to 'asyncMessageThinkingNode'
// - Resolved require(889095) to 'async-message-thinking-node'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// - Updated imported property 'v' to 'ThinkingMessageNode' (module 889095)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'Ju' to 'renderInlineDocCard' (module 690621)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'j' to 'TipContentRenderer' (module 579314)
// - Updated imported property 'i' to 'receiveWriteTextKey' (module 369323)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 755830
         */
module.exports = function (module, exports, require) {
  var chatTextContentSymbol = require("chat-text-content-symbol") /*id: 369323*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var tipContentRenderer = require("tip-content-renderer") /*id: 579314*/;
  var inlineDocArtifactRenderer = require("inline-doc-artifact-renderer") /*id: 690621*/;
  var asyncMessageThinkingNode = require("async-message-thinking-node") /*id: 889095*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    var i;
    let {
      inView: l,
      message: v,
      theme: f = "samantha"
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(chatThemeStyleConfig.chatThemeConfig[f]?.receiveClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[f].cssVar,
      children: [reactJsxRuntimeCoreReexport.jsx(asyncMessageThinkingNode.ThinkingMessageNode, {
        isShare: true,
        message: v
      }), reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
        inView: l,
        message: v,
        theme: f,
        messageBlockText: undefined,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        customRenderOptions: {
          useCustomReplacementElements: () => inlineDocArtifactRenderer.renderInlineDocCard({
            message: v,
            options: {
              isShare: true
            }
          })
        }
      }), (chatMessageStatusCheck.isMessageFinished(v) || messageContentTypeAndStatusChecker.vlk(v)) && reactJsxRuntimeCoreReexport.jsx(tipContentRenderer.TipContentRenderer, {
        jsonString: (i = v.verbose) === null || i === undefined ? undefined : i.extra?.risk_tips
      })]
    });
  };
  function f(e, t, n) {
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
  class h {
    constructor() {
      f(this, "pluginIdentifier", chatTextContentSymbol.receiveWriteTextKey);
      f(this, "Content", v);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveWritingTextContentPlugin: function () {
      return h;
    }
  });
}