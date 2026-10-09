// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveImageGenSymbol'
// - Resolved require(141934) to 'receive-image-gen-symbol'
// - Renamed variable 'l' to 'chatMessageImageRenderer'
// - Resolved require(798915) to 'chat-message-image-renderer'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'c' to 'ChatImageListView' (module 798915)
// - Updated imported property 's' to 'receiveImageGen' (module 141934)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 923659
         */
module.exports = function (module, exports, require) {
  var receiveImageGenSymbol = require("receive-image-gen-symbol") /*id: 141934*/;
  var chatMessageImageRenderer = require("chat-message-image-renderer") /*id: 798915*/;
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(chatMessageImageRenderer.ChatImageListView, {
    showRiskTips: true,
    ...e
  });
  class s {
    constructor() {
      o(this, "pluginIdentifier", receiveImageGenSymbol.receiveImageGen);
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveImageShareMessageBoxPlugin: function () {
      return s;
    }
  });
}