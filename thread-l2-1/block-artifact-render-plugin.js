// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'artifactCardRenderer'
// - Resolved require(255406) to 'artifact-card-renderer'
// - Updated imported property 'W' to 'ArtifactCardView' (module 255406)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 953606
         */
module.exports = function (module, exports, require) {
  var artifactCardRenderer = require("artifact-card-renderer") /*id: 255406*/;
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
  class r {
    constructor() {
      l(this, "nodeTypes", ["block_type:10030 | artifact_block.resource_type:5", "block_type:10030 | artifact_block.resource_type:8"]);
      l(this, "Content", artifactCardRenderer.ArtifactCardView);
      l(this, "usePropsSelector", (e, t) => {
        return {
          message: e,
          isAutoOpenInStreaming: true,
          contentBlock: {
            ...t,
            id: t.block_id,
            content_obj: t.content?.artifact_block
          }
        };
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    BlockArtifactNodeRenderPlugin: function () {
      return r;
    }
  });
}