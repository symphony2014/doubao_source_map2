// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'ugcReceiveMessageBoxSymbol'
// - Resolved require(168719) to 'ugc-receive-message-box-symbol'
// - Renamed variable 'r' to 'chatMessageContentRenderer_1'
// - Resolved require(783136) to 'chat-message-content-renderer_1'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 'h' to 'ugcMsgBoxTextSymbol' (module 168719)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 204982
         */
module.exports = function (module, exports, require) {
  var ugcReceiveMessageBoxSymbol = require("ugc-receive-message-box-symbol") /*id: 168719*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      inView: t,
      message: n
    } = e;
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
        inView: t,
        message: n,
        messageBlockText: undefined,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        imageOptions: {
          objectFit: "contain"
        }
      });
    } else {
      return null;
    }
  };
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
  class s {
    constructor() {
      l(this, "pluginIdentifier", ugcReceiveMessageBoxSymbol.ugcMsgBoxTextSymbol);
      l(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    UgcReceiveTextMessageBoxPlugin: function () {
      return s;
    }
  });
}