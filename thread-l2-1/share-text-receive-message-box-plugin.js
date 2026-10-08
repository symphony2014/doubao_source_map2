// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'infraMessageBoxSymbol'
// - Resolved require(658492) to 'infra-message-box-symbol'
// - Renamed variable 'l' to 'chatMessageRenderer'
// - Resolved require(277042) to 'chat-message-renderer'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'd' to 'renderSharedChatMessage' (module 277042)
// - Updated imported property 'n' to 'infraMessageBoxKey' (module 658492)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 6877
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var infraMessageBoxSymbol = require("infra-message-box-symbol") /*id: 658492*/;
  var chatMessageRenderer = require("chat-message-renderer") /*id: 277042*/;
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(chatMessageRenderer.renderSharedChatMessage, {
    ...e,
    messageBlockText: undefined,
    messageBlockTextFinish: undefined,
    messageBlockTextBroken: undefined,
    showRiskTips: true
  });
  class s {
    constructor() {
      o(this, "pluginIdentifier", infraMessageBoxSymbol.infraMessageBoxKey);
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareTextReceiveMessageBoxPlugin: function () {
      return s;
    }
  });
}