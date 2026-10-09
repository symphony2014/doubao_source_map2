// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'debounceUtilWrapper'
// - Resolved require(213804) to 'debounce-util-wrapper'
// - Renamed variable 'i' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'o' to 'artifactMetaProcessorUtils'
// - Resolved require(686064) to 'artifact-meta-processor-utils'
// - Renamed variable 'a' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'u' to 'blockFileOperationPluginSymbol'
// - Resolved require(146169) to 'block-file-operation-plugin-symbol'
// - Updated imported property 'Z' to 'createDebounce' (module 213804)
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'yk' to 'fileOperationType' (module 617019)
// - Updated imported property 'I5' to 'artifactMetaUtils' (module 686064)
// - Updated imported property 'M' to 'blockFilePlugin' (module 146169)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32158.585a3b11.js
         * chunkId: 32158
         * moduleId: 241008
         */
module.exports = function (module, exports, require) {
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var artifactMetaProcessorUtils = require("artifact-meta-processor-utils") /*id: 686064*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  let l = debounceUtilWrapper.createDebounce(e => {
    codingSkillStoreModule.codingSkillStore.getState().updateBlockArtifactMeta(e);
  }, 400);
  let c = e => {
    let {
      operation: t,
      contentBlockTree: n
    } = e;
    if (t === "update") {
      let {
        content_obj: e,
        id: t,
        parent_id: r
      } = n;
      let {
        blockArtifactMetaMap: c
      } = codingSkillStoreModule.codingSkillStore.getState();
      if (!r) {
        return;
      }
      let u = !n.is_finish;
      if ((e == null ? undefined : e.operation_type) === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create || (e == null ? undefined : e.operation_type) === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace) {
        let i = c[r];
        let a = (i == null ? undefined : i.codeFileBlockList) || [];
        let s = a.some(e => e.id === t);
        if (!(e == null ? undefined : e.content)) {
          return;
        }
        let _ = a;
        l({
          blockId: r,
          activeCodeFileBlockId: t,
          isStreaming: true,
          codeFileBlockList: s ? artifactMetaProcessorUtils.artifactMetaUtils.updateArtifactDataFromFileOperation(a, n, u) : artifactMetaProcessorUtils.artifactMetaUtils.addArtifactDataFromFileOperation(a, n, u)
        });
        return;
      }
    }
  };
  var blockFileOperationPluginSymbol = require("block-file-operation-plugin-symbol") /*id: 146169*/;
  function s(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  class _ {
    constructor() {
      s(this, "pluginIdentifier", blockFileOperationPluginSymbol.blockFilePlugin);
      s(this, "resolveContentBlock", c);
    }
  }
  require.r(exports);
  require.d(exports, {
    BlockFileOperationPlugin: function () {
      return _;
    }
  });
}