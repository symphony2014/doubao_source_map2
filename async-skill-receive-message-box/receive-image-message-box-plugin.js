// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveImageGenSymbol'
// - Resolved require(141934) to 'receive-image-gen-symbol'
// - Renamed variable 'r' to 'chatImageMessageRenderComponent'
// - Resolved require(94302) to 'chat-image-message-render-component'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'M' to 'ChatImageMessageRender' (module 94302)
// - Updated imported property 's' to 'receiveImageGen' (module 141934)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 477415
         */
module.exports = function (module, exports, require) {
  var receiveImageGenSymbol = require("receive-image-gen-symbol") /*id: 141934*/;
  var chatImageMessageRenderComponent = require("chat-image-message-render-component") /*id: 94302*/;
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
  let l = e => reactJsxRuntimeCoreReexport.jsx(chatImageMessageRenderComponent.ChatImageMessageRender, {
    ...e
  });
  class s {
    constructor() {
      a(this, "pluginIdentifier", receiveImageGenSymbol.receiveImageGen);
      a(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveImageMessageBoxPlugin: function () {
      return s;
    }
  });
}