// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'o' to 'requirementClarifyIdConst'
// - Resolved require(879221) to 'requirement-clarify-id-const'
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'o' to 'clarifyBlockId' (module 879221)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17638.a9e9106b.js
         * chunkId: 17638
         * moduleId: 861703
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
        id: e,
        content_obj: t
      } = r ?? {};
      codingSkillStoreModule.codingSkillStore.getState().addBlockIdMapForClarify(e, t);
    }
  };
  var requirementClarifyIdConst = require("requirement-clarify-id-const") /*id: 879221*/;
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
  class u {
    constructor() {
      a(this, "pluginIdentifier", requirementClarifyIdConst.clarifyBlockId);
      a(this, "resolveContentBlock", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    RequirementClarifyBlockResolvePluginResource: function () {
      return u;
    }
  });
}