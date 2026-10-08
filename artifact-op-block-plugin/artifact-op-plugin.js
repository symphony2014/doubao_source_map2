// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'o' to 'resolveArtifactOpPluginId'
// - Resolved require(966614) to 'resolve-artifact-op-plugin-id'
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'J' to 'resolveArtifactOpId' (module 966614)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33403.3f07e754.js
         * chunkId: 33403
         * moduleId: 208432
         */
module.exports = function (module, exports, require) {
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  let i = e => {
    let {
      operation: t,
      contentBlockTree: r
    } = e;
    if (t === "update") {
      let {
        content_obj: e,
        parent_id: t
      } = r;
      let {
        updateProcessBlockMeta: i,
        processBlockMetaMap: o
      } = codingSkillStoreModule.codingSkillStore.getState();
      if (!t || !e) {
        return;
      }
      let a = {
        ...o[t]
      };
      if (a.artifactOPBlockList) {
        a.artifactOPBlockList = [...a.artifactOPBlockList, e];
      } else {
        a.artifactOPBlockList = [e];
      }
      i(t, a);
    }
  };
  var resolveArtifactOpPluginId = require("resolve-artifact-op-plugin-id") /*id: 966614*/;
  function a(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class c {
    constructor() {
      a(this, "pluginIdentifier", resolveArtifactOpPluginId.resolveArtifactOpId);
      a(this, "resolveContentBlock", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    ArtifactOpPlugin: function () {
      return c;
    }
  });
}