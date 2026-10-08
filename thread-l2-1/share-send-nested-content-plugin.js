// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sendNestedContentSymbol'
// - Resolved require(845036) to 'send-nested-content-symbol'
// - Renamed variable 'l' to 'chatMessageAttachmentRenderer'
// - Resolved require(704764) to 'chat-message-attachment-renderer'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'mO' to 'renderChatMessageAttachments' (module 704764)
// - Updated imported property 'c' to 'sendNestedContent' (module 845036)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 13654
         */
module.exports = function (module, exports, require) {
  var sendNestedContentSymbol = require("send-nested-content-symbol") /*id: 845036*/;
  var chatMessageAttachmentRenderer = require("chat-message-attachment-renderer") /*id: 704764*/;
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
      message: n,
      inView: i,
      mouseOver: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(chatMessageAttachmentRenderer.renderChatMessageAttachments, {
      inView: i,
      message: n,
      viewOnly: !["collection", "share-all"].includes(t || ""),
      enableScaleUpAction: t === "collection" ? ["zoom"] : undefined,
      contextSceneType: t,
      mouseOver: o
    });
  };
  class s {
    constructor() {
      o(this, "pluginIdentifier", sendNestedContentSymbol.sendNestedContent);
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendNestedContentPlugin: function () {
      return s;
    }
  });
}