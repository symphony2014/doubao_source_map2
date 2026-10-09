// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'l' to 'artifactMetaProcessorUtils'
// - Resolved require(686064) to 'artifact-meta-processor-utils'
// - Renamed variable 'r' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'a' to 'blockArtifactSymbol'
// - Resolved require(735847) to 'block-artifact-symbol'
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'OK' to 'artifactStatus' (module 617019)
// - Updated imported property 'rO' to 'createArtifactMetaFromMessage' (module 686064)
// - Updated imported property 'n' to 'blockArtifactSymbol' (module 735847)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 844437
         */
module.exports = function (module, exports, require) {
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var artifactMetaProcessorUtils = require("artifact-meta-processor-utils") /*id: 686064*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  let o = e => {
    let {
      operation: t,
      contentBlockTree: n
    } = e;
    if (t === "update") {
      let {
        content_obj: e,
        id: t,
        is_delta: o
      } = n;
      let {
        updateBlockArtifactMeta: a,
        blockArtifactMetaMap: s
      } = codingSkillStoreModule.codingSkillStore.getState();
      let {
        status: c
      } = e;
      let d = c === skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generating;
      let u = skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generated === c;
      if (s[t]) {
        if (!d && o || u) {
          let {
            codeFileBlockList: e
          } = s[t];
          let n = e.map(e => ({
            ...e,
            artifactMeta: {
              ...e.artifactMeta,
              isStreaming: false
            }
          }));
          a({
            ...s[t],
            blockId: t,
            isStreaming: d,
            codeFileBlockList: n
          });
        }
      } else {
        a({
          blockId: t,
          isStreaming: d,
          codeFileBlockList: [{
            id: t,
            artifactMeta: artifactMetaProcessorUtils.createArtifactMetaFromMessage(e)
          }]
        });
      }
    }
  };
  var blockArtifactSymbol = require("block-artifact-symbol") /*id: 735847*/;
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
  class c {
    constructor() {
      s(this, "pluginIdentifier", blockArtifactSymbol.blockArtifactSymbol);
      s(this, "resolveContentBlock", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    BlockArtifactPlugin: function () {
      return c;
    }
  });
}