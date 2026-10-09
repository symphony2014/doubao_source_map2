// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSendFileSymbol'
// - Resolved require(79109) to 'chat-send-file-symbol'
// - Renamed variable 'l' to 'threadAttachmentNodeView'
// - Resolved require(707219) to 'thread-attachment-node-view'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'U' to 'ChatAttachmentNode' (module 707219)
// - Updated imported property 's' to 'sendFileContent' (module 79109)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 335066
         */
module.exports = function (module, exports, require) {
  var chatSendFileSymbol = require("chat-send-file-symbol") /*id: 79109*/;
  var threadAttachmentNodeView = require("thread-attachment-node-view") /*id: 707219*/;
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
    return reactJsxRuntimeCoreReexport.jsx(threadAttachmentNodeView.ChatAttachmentNode, {
      message: n,
      viewOnly: !["collection", "share-all"].includes(t || ""),
      enableScaleUpAction: t === "collection" ? ["zoom"] : undefined
    });
  };
  class s {
    constructor() {
      o(this, "pluginIdentifier", chatSendFileSymbol.sendFileContent);
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendFileContentPlugin: function () {
      return s;
    }
  });
}