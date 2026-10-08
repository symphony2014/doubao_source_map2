// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'messageThinkingLoader'
// - Resolved require(358483) to 'message-thinking-loader'
// - Renamed variable 'o' to 'chatThinkingMessageSymbol'
// - Resolved require(625880) to 'chat-thinking-message-symbol'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'I' to 'ThinkingMessage' (module 358483)
// - Updated imported property 'E' to 'receiveThinkingKey' (module 625880)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 908997
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageThinkingLoader = require("message-thinking-loader") /*id: 358483*/;
  var chatThinkingMessageSymbol = require("chat-thinking-message-symbol") /*id: 625880*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function l(e, t, n) {
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
    if (messageContentTypeAndStatusChecker.FFC(t)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-full",
        children: reactJsxRuntimeCoreReexport.jsx(messageThinkingLoader.ThinkingMessage, {
          message: t
        })
      });
    }
  };
  class c {
    constructor() {
      l(this, "pluginIdentifier", chatThinkingMessageSymbol.receiveThinkingKey);
      l(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ThinkingReceiveMessageBoxPlugin: function () {
      return c;
    }
  });
}