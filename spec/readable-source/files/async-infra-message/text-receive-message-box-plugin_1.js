// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'infraMessageBoxSymbol'
// - Resolved require(658492) to 'infra-message-box-symbol'
// - Renamed variable 'r' to 'chatMessageRenderer'
// - Resolved require(277042) to 'chat-message-renderer'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'W' to 'renderChatMessage' (module 277042)
// - Updated imported property 'n' to 'infraMessageBoxKey' (module 658492)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 208615
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var infraMessageBoxSymbol = require("infra-message-box-symbol") /*id: 658492*/;
  var chatMessageRenderer = require("chat-message-renderer") /*id: 277042*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function s(e, t, n) {
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
      inView: t,
      message: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(chatMessageRenderer.renderChatMessage, {
      inView: t,
      message: n,
      messageBlockText: undefined,
      messageBlockTextFinish: undefined,
      messageBlockTextBroken: undefined
    });
  };
  class a {
    constructor() {
      s(this, "pluginIdentifier", infraMessageBoxSymbol.infraMessageBoxKey);
      s(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    TextReceiveMessageBoxPlugin: function () {
      return a;
    }
  });
}