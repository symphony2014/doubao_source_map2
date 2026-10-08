// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatGenericAskSymbol'
// - Resolved require(679974) to 'chat-generic-ask-symbol'
// - Renamed variable 'r' to 'chatMessageContentRenderer_1'
// - Resolved require(783136) to 'chat-message-content-renderer_1'
// - Renamed variable 'o' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'a' to 'chatEventEmitter'
// - Resolved require(740942) to 'chat-event-emitter'
// - Renamed variable 'l' to 'referenceHighlightRenderer'
// - Resolved require(256530) to 'reference-highlight-renderer'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'v' to 'chatEmitter' (module 740942)
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 'E' to 'generateReferenceHighlights' (module 256530)
// - Updated imported property 'w' to 'genericAskSymbol' (module 679974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 415258
         */
module.exports = function (module, exports, require) {
  var chatGenericAskSymbol = require("chat-generic-ask-symbol") /*id: 679974*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var referenceHighlightRenderer = require("reference-highlight-renderer") /*id: 256530*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      inView: t,
      message: n
    } = e;
    let i = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let c = (e, t, n) => {
      if (!n && e && t) {
        chatEventEmitter.chatEmitter.emit("chat.message.click-ask-page-ref", {
          url: e,
          highlightText: t,
          conversationId: i
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
      inView: t,
      message: n,
      messageBlockText: undefined,
      messageBlockTextFinish: undefined,
      messageBlockTextBroken: undefined,
      customRenderOptions: {
        useCustomReplacementElements: e => referenceHighlightRenderer.generateReferenceHighlights({
          ...e,
          onClickRef: c
        })
      }
    });
  };
  function d(e, t, n) {
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
  class u {
    constructor() {
      d(this, "pluginIdentifier", chatGenericAskSymbol.genericAskSymbol);
      d(this, "Content", c);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveGenericAskPageTextContent: function () {
      return u;
    }
  });
}