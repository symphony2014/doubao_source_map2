// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatArtifactContentKey'
// - Resolved require(541770) to 'chat-artifact-content-key'
// - Renamed variable 'r' to 'chatArtifactRenderer'
// - Resolved require(48256) to 'chat-artifact-renderer'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property '$' to 'ChatArtifactCard' (module 48256)
// - Updated imported property 'd' to 'artifactContentKey' (module 541770)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 832563
         */
module.exports = function (module, exports, require) {
  var chatArtifactContentKey = require("chat-artifact-content-key") /*id: 541770*/;
  var chatArtifactRenderer = require("chat-artifact-renderer") /*id: 48256*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let l = e => {
    let {
      contentBlock: t,
      message: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(chatArtifactRenderer.ChatArtifactCard, {
      isShare: true,
      message: i,
      contentBlock: t,
      showSimplifyCard: true
    });
  };
  class s {
    constructor() {
      o(this, "type", "Content");
      o(this, "pluginIdentifier", chatArtifactContentKey.artifactContentKey);
      o(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    ArtifactContentBlockPlugin: function () {
      return s;
    }
  });
}