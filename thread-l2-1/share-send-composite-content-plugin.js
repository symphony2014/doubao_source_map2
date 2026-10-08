// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSendCompositeSymbol'
// - Resolved require(168939) to 'chat-send-composite-symbol'
// - Renamed variable 'l' to 'chatMessageContentRenderer'
// - Resolved require(633823) to 'chat-message-content-renderer'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'l' to 'ChatMessageContent' (module 633823)
// - Updated imported property 'e' to 'sendCompositeSymbol' (module 168939)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 723908
         */
module.exports = function (module, exports, require) {
  var chatSendCompositeSymbol = require("chat-send-composite-symbol") /*id: 168939*/;
  var chatMessageContentRenderer = require("chat-message-content-renderer") /*id: 633823*/;
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
      contextSceneType: t,
      message: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer.ChatMessageContent, {
      message: n,
      viewOnly: !["collection", "share-all"].includes(t || ""),
      enableScaleUpAction: t === "collection" ? ["zoom"] : undefined
    });
  };
  class s {
    constructor() {
      o(this, "pluginIdentifier", chatSendCompositeSymbol.sendCompositeSymbol);
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendCompositeContentPlugin: function () {
      return s;
    }
  });
}