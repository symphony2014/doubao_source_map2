// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatImageMessageRenderComponent'
// - Resolved require(94302) to 'chat-image-message-render-component'
// - Renamed variable 'r' to 'messageBoxImageThinkingSymbol'
// - Resolved require(617581) to 'message-box-image-thinking-symbol'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'M' to 'ChatImageMessageRender' (module 94302)
// - Updated imported property 'S' to 'imageThinkingSymbol' (module 617581)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 553046
         */
module.exports = function (module, exports, require) {
  var chatImageMessageRenderComponent = require("chat-image-message-render-component") /*id: 94302*/;
  var messageBoxImageThinkingSymbol = require("message-box-image-thinking-symbol") /*id: 617581*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function a(e, t, n) {
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
  let l = e => {
    let {
      message: t
    } = e;
    let {
      loading_height: n,
      loading_width: r,
      loading_count: a
    } = (t == null ? undefined : t.content_obj) || (t == null ? undefined : t.ext) || {};
    return reactJsxRuntimeCoreReexport.jsx(chatImageMessageRenderComponent.ChatImageMessageRender, {
      inView: false,
      thinkingConfig: {
        isThinking: true,
        imageHeight: Number(n ?? 580),
        imageWidth: Number(r ?? 580),
        imageCount: Number(a ?? 4)
      },
      message: t
    });
  };
  class s {
    constructor() {
      a(this, "pluginIdentifier", messageBoxImageThinkingSymbol.imageThinkingSymbol);
      a(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    ImageThinkingReceiveMessageBoxPlugin: function () {
      return s;
    }
  });
}