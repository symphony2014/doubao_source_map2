// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'processingEnums'
// - Resolved require(230994) to 'processing-enums'
// - Renamed variable 'l' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'r' to 'threadL21ArtifactStreamingUtils'
// - Resolved require(815426) to 'thread-l2-1-artifact-streaming-utils'
// - Renamed variable 'a' to 'blockCodeFileSymbol'
// - Resolved require(468071) to 'block-code-file-symbol'
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'N6' to 'extractTextFromBlocks' (module 815426)
// - Updated imported property 'VP' to 'AccessStatus' (module 230994)
// - Updated imported property 'S' to 'blockCodeFileSymbol' (module 468071)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 975727
         */
module.exports = function (module, exports, require) {
  var processingEnums = require("processing-enums") /*id: 230994*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var threadL21ArtifactStreamingUtils = require("thread-l2-1-artifact-streaming-utils") /*id: 815426*/;
  let o = e => {
    let {
      operation: t,
      contentBlockTree: n
    } = e;
    if (t === "update") {
      let {
        content_obj: e,
        children: t,
        id: a,
        parent_id: s
      } = n;
      let {
        blockArtifactMetaMap: c
      } = codingSkillStoreModule.codingSkillStore.getState();
      if (!s) {
        return;
      }
      let d = c[s];
      if (!d) {
        return;
      }
      let u = threadL21ArtifactStreamingUtils.extractTextFromBlocks(t);
      let p = !t.some(e => e.is_finish);
      let {
        codeFileBlockList: m
      } = d;
      let v = [...m];
      let f = m.findIndex(e => e.id === a);
      if (f === -1) {
        let t = m[0];
        v.push({
          id: a,
          pid: s,
          artifactMeta: {
            ...t.artifactMeta,
            isEntry: !!e.is_entry,
            isStreaming: p,
            code: {
              ...e,
              content: u
            }
          }
        });
      } else {
        v[f] = {
          ...v[f],
          artifactMeta: {
            ...v[f].artifactMeta,
            isStreaming: p,
            code: {
              ...e,
              content: u,
              review_status: e.review_status ?? processingEnums.AccessStatus.Access
            }
          }
        };
        if ("is_entry" in e) {
          v[f].artifactMeta.isEntry = e.is_entry;
        }
      }
      codingSkillStoreModule.codingSkillStore.getState().updateBlockArtifactMeta({
        blockId: s,
        activeCodeFileBlockId: a,
        isStreaming: p,
        codeFileBlockList: v
      });
    }
  };
  var blockCodeFileSymbol = require("block-code-file-symbol") /*id: 468071*/;
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
      s(this, "pluginIdentifier", blockCodeFileSymbol.blockCodeFileSymbol);
      s(this, "resolveContentBlock", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    BlockCodeFilePlugin: function () {
      return c;
    }
  });
}