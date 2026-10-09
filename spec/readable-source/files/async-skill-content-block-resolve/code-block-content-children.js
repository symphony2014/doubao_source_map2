// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'i' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'o' to 'skillActionConstants'
// - Resolved require(418389) to 'skill-action-constants'
// - Renamed variable 's' to 'codeBlockContentChildrenSymbol'
// - Resolved require(565052) to 'code-block-content-children-symbol'
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'P$' to 'ArtifactKeys' (module 418389)
// - Updated imported property 'T' to 'codeBlockChildren' (module 565052)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-resolve.7d941906.js
         * chunkId: 68347
         * moduleId: 502578
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var skillActionConstants = require("skill-action-constants") /*id: 418389*/;
  let a = e => {
    let t = "";
    for (let n of e) {
      if (n.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT) {
        t += n.content_obj.text;
      }
    }
    return t;
  };
  let l = e => {
    let {
      operation: t,
      contentBlockTree: n
    } = e;
    if (t === "update") {
      let {
        children: e
      } = n;
      let {
        id: t
      } = n ?? {};
      let r = a(e);
      codingSkillStoreModule.codingSkillStore.getState().updateBlockArtifact({
        type: skillActionConstants.ArtifactKeys.Artifact,
        blockId: t,
        value: r
      });
    }
  };
  var codeBlockContentChildrenSymbol = require("code-block-content-children-symbol") /*id: 565052*/;
  function c(e, t, n) {
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
  class u {
    constructor() {
      c(this, "pluginIdentifier", codeBlockContentChildrenSymbol.codeBlockChildren);
      c(this, "resolveContentBlock", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    HandleCodeBlockContentChildren: function () {
      return u;
    }
  });
}