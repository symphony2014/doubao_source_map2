// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'chatMessageBlockSymbol'
// - Resolved require(778759) to 'chat-message-block-symbol'
// - Renamed variable 's' to 'codeInterpreterResourceUi'
// - Resolved require(36868) to 'code-interpreter-resource-ui'
// - Renamed variable 'l' to 'chatMessageRenderer'
// - Resolved require(277042) to 'chat-message-renderer'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'r' to 'useCiResourceUi' (module 36868)
// - Updated imported property 'W' to 'renderChatMessage' (module 277042)
// - Updated imported property 'Q' to 'legacyTextBlockKey' (module 778759)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 559443
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageBlockSymbol = require("chat-message-block-symbol") /*id: 778759*/;
  var codeInterpreterResourceUi = require("code-interpreter-resource-ui") /*id: 36868*/;
  var chatMessageRenderer = require("chat-message-renderer") /*id: 277042*/;
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
    var n;
    let {
      inView: c = false,
      contentBlock: u,
      message: d
    } = e;
    let p = u == null ? undefined : u.content_obj?.text;
    let f = ((n = d.content_blocks) === null || n === undefined ? undefined : n.findIndex(e => e.id === u.id)) === (d.content_blocks?.length || 0) - 1;
    let m = !f || chatMessageStatusCheck.isMessageFinished(d);
    let h = !!f && messageContentTypeAndStatusChecker.vlk(d);
    let v = codeInterpreterResourceUi.useCiResourceUi({
      bizMessage: d
    });
    if (p) {
      return reactJsxRuntimeCoreReexport.jsx(chatMessageRenderer.renderChatMessage, {
        inView: c,
        messageBlockText: p,
        messageBlockTextFinish: m,
        messageBlockTextBroken: h,
        message: d,
        customRenderOptions: {
          customSlots: v
        }
      });
    } else {
      return null;
    }
  };
  class d {
    constructor() {
      c(this, "pluginIdentifier", chatMessageBlockSymbol.legacyTextBlockKey);
      c(this, "type", "Content");
      c(this, "Content", u);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveTextMessageContentBlockPlugin: function () {
      return d;
    }
  });
}