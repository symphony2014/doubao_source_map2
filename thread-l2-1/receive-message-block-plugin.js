// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'artifactCardRenderer'
// - Resolved require(255406) to 'artifact-card-renderer'
// - Renamed variable 'l' to 'chatArtifactTypes'
// - Resolved require(509530) to 'chat-artifact-types'
// - Updated imported property 'i' to 'receiveMessageBlock' (module 509530)
// - Updated imported property 'W' to 'ArtifactCardView' (module 255406)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 835665
         */
module.exports = function (module, exports, require) {
  var artifactCardRenderer = require("artifact-card-renderer") /*id: 255406*/;
  var chatArtifactTypes = require("chat-artifact-types") /*id: 509530*/;
  function r(e, t, n) {
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
  class o {
    constructor() {
      r(this, "pluginIdentifier", chatArtifactTypes.receiveMessageBlock);
      r(this, "type", "Container");
      r(this, "Content", artifactCardRenderer.ArtifactCardView);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveMessageBlockArtifactPlugin: function () {
      return o;
    }
  });
}