// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'asyncSkillChatConstants'
// - Resolved require(699048) to 'async-skill-chat-constants'
// - Renamed variable 'i' to 'writingSkillStore'
// - Resolved require(704044) to 'writing-skill-store'
// - Renamed variable 'o' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 's' to 'docBlockChildrenSymbol'
// - Resolved require(392742) to 'doc-block-children-symbol'
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'i' to 'writingSkillStore' (module 704044)
// - Updated imported property 'P' to 'fieldNames' (module 699048)
// - Updated imported property 'd' to 'docBlockChildren' (module 392742)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-resolve.7d941906.js
         * chunkId: 68347
         * moduleId: 999806
         */
module.exports = function (module, exports, require) {
  var asyncSkillChatConstants = require("async-skill-chat-constants") /*id: 699048*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let a = e => {
    let t = "";
    let n = [];
    let r = [];
    let i = 0;
    for (let c of e) {
      if (c.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT) {
        let e = c.content_obj.text;
        t += e;
        let {
          meta_infos: r = []
        } = c;
        r.forEach(e => {
          let {
            info: t
          } = e;
          try {
            let e = JSON.parse(t);
            if (!isNaN(e.pos_rune?.[0])) {
              n.push({
                endIndex: e.pos_rune?.[0] + i,
                referenceId: e.insert_text
              });
            }
          } catch (e) {}
        });
        i += e.length;
      }
      if (c.block_type === chatConstantsEnum.messageContentType.BLOCK_IMAGE) {
        var l;
        var s;
        let e = `![](${c == null ? undefined : (s = c.content_obj) === null || s === undefined ? undefined : (l = s.images) === null || l === undefined ? undefined : l[0]?.thumb_url})`;
        t += e;
        i += e.length;
      }
      if (c.block_type === chatConstantsEnum.messageContentType.BLOCK_SEARCH_RESULT) {
        let {
          content_obj: e
        } = c || {};
        let {
          results: t = []
        } = e || {};
        t.map(e => {
          let {
            text_card: t
          } = e;
          if (t) {
            r.push({
              id: t.id,
              url: t.url,
              title: t.title,
              summary: t.summary,
              logoUrl: t.logo_url
            });
          }
        });
      }
    }
    return {
      resultText: t,
      referenceQuoteList: n,
      referenceList: r
    };
  };
  let l = e => {
    let {
      operation: t,
      contentBlockTree: n
    } = e;
    if (t === "update") {
      let {
        children: e,
        content_obj: t = {}
      } = n;
      let {
        artifact: o = {}
      } = t;
      let {
        resource_id: l,
        resource_version: s = 0
      } = o;
      let {
        id: c
      } = n ?? {};
      let u = a(e);
      writingSkillStore.writingSkillStore.getState().updateBlockArtifact({
        type: asyncSkillChatConstants.fieldNames.Artifact,
        blockId: c,
        value: u.resultText
      });
      writingSkillStore.writingSkillStore.getState().updateReferenceAndQuote(l, s, u.referenceList, u.referenceQuoteList);
    }
  };
  var docBlockChildrenSymbol = require("doc-block-children-symbol") /*id: 392742*/;
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
      c(this, "pluginIdentifier", docBlockChildrenSymbol.docBlockChildren);
      c(this, "resolveContentBlock", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    HandleDocBlockContentChildren: function () {
      return u;
    }
  });
}