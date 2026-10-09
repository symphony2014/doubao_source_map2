// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatMessageBlockSymbol'
// - Resolved require(778759) to 'chat-message-block-symbol'
// - Renamed variable 'r' to 'chatMessageRenderer'
// - Resolved require(277042) to 'chat-message-renderer'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'd' to 'renderSharedChatMessage' (module 277042)
// - Updated imported property 'Q' to 'legacyTextBlockKey' (module 778759)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 473585
         */
module.exports = function (module, exports, require) {
  var chatMessageBlockSymbol = require("chat-message-block-symbol") /*id: 778759*/;
  var chatMessageRenderer = require("chat-message-renderer") /*id: 277042*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let l = e => {
    let {
      inView: i,
      contentBlock: n,
      message: o
    } = e;
    let l = n == null ? undefined : n.content_obj?.text;
    if (l) {
      return reactJsxRuntimeCoreReexport.jsx(chatMessageRenderer.renderSharedChatMessage, {
        inView: i != null && i,
        message: o,
        messageBlockText: l,
        messageBlockTextBroken: undefined,
        messageBlockTextFinish: undefined
      });
    } else {
      return null;
    }
  };
  class s {
    constructor() {
      o(this, "pluginIdentifier", chatMessageBlockSymbol.legacyTextBlockKey);
      o(this, "type", "Content");
      o(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveTextMessageContentBlockPlugin: function () {
      return s;
    }
  });
}