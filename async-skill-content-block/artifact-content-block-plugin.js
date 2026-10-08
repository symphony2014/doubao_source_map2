// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatArtifactRenderer'
// - Resolved require(48256) to 'chat-artifact-renderer'
// - Renamed variable 'r' to 'chatArtifactContentKey'
// - Resolved require(541770) to 'chat-artifact-content-key'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property '$' to 'ChatArtifactCard' (module 48256)
// - Updated imported property 'd' to 'artifactContentKey' (module 541770)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 4725
         */
module.exports = function (module, exports, require) {
  var chatArtifactRenderer = require("chat-artifact-renderer") /*id: 48256*/;
  var chatArtifactContentKey = require("chat-artifact-content-key") /*id: 541770*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(chatArtifactRenderer.ChatArtifactCard, {
    ...e
  });
  class s {
    constructor() {
      l(this, "type", "Content");
      l(this, "pluginIdentifier", chatArtifactContentKey.artifactContentKey);
      l(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ArtifactContentBlockPlugin: function () {
      return s;
    }
  });
}