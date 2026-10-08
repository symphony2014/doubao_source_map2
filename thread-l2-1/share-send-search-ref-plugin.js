// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sendSearchRefSymbol'
// - Resolved require(35160) to 'send-search-ref-symbol'
// - Renamed variable 'l' to 'chatMessageBubbleView'
// - Resolved require(351464) to 'chat-message-bubble-view'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'x' to 'ChatMessageRenderer' (module 351464)
// - Updated imported property 'G' to 'sendSearchRefSymbol' (module 35160)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 137970
         */
module.exports = function (module, exports, require) {
  var sendSearchRefSymbol = require("send-search-ref-symbol") /*id: 35160*/;
  var chatMessageBubbleView = require("chat-message-bubble-view") /*id: 351464*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e, t, n) {
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
  let a = e => {
    let {
      message: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(chatMessageBubbleView.ChatMessageRenderer, {
      message: t,
      ignoreTemplateKey: true
    });
  };
  class s {
    constructor() {
      o(this, "pluginIdentifier", sendSearchRefSymbol.sendSearchRefSymbol);
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendSearchRefContentPlugin: function () {
      return s;
    }
  });
}