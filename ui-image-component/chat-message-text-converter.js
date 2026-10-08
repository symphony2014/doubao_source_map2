// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'l' to 'creationTypeConstants'
// - Resolved require(432580) to 'creation-type-constants'
// - Renamed variable 'v' to 'collectionArrayGrouper'
// - Resolved require(177883) to 'collection-array-grouper'
// - Renamed variable 'f' to 'toEntriesUtil'
// - Resolved require(537539) to 'to-entries-util'
// - Renamed variable 'h' to 'objectValuesHelper'
// - Resolved require(506581) to 'object-values-helper'
// - Renamed variable 'm' to 'arrayFirstElement'
// - Resolved require(255519) to 'array-first-element'
// - Renamed variable 'g' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'p' to 'collectionOrderByUtil_1'
// - Resolved require(848677) to 'collection-order-by-util_1'
// - Renamed variable 'w' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable '_' to 'markdownMetaRenderUtils'
// - Resolved require(80625) to 'markdown-meta-render-utils'
// - Renamed variable 'b' to 'chatMessageUtils'
// - Resolved require(898330) to 'chat-message-utils'
// - Renamed variable 'y' to 'chatMessageBlockParser'
// - Resolved require(452214) to 'chat-message-block-parser'
// - Renamed variable 'x' to 'contentGroupConstants'
// - Resolved require(844215) to 'content-group-constants'
// - Renamed variable 'C' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'S' to 'utf8EncodingUtils_1'
// - Resolved require(858081) to 'utf8-encoding-utils_1'
// - Renamed variable 'j' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'P' to 'lastElementHelper'
// - Resolved require(715951) to 'last-element-helper'
// - Renamed variable 'A' to 'moduleReExportWrapper'
// - Resolved require(71973) to 'module-re-export-wrapper'
// - Renamed variable 'B' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'L' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// - Updated imported property 'PO' to 'creationTypes' (module 432580)
// - Updated imported property 'wB' to 'isSpecialMessage' (module 898330)
// - Updated imported property 'K' to 'Utf8Utils' (module 858081)
// - Updated imported property 'u5' to 'mapSpecialIndices' (module 452214)
// - Updated imported property 'Z' to 'groupValuesToArray' (module 177883)
// - Updated imported property 'Z' to 'toEntries' (module 537539)
// - Updated imported property 'Z' to 'getObjectValues' (module 506581)
// - Updated imported property '_' to 'contentGroupTypes' (module 844215)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'Z' to 'getFirstElement' (module 255519)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'Vl' to 'extractMetaInfo' (module 80625)
// - Updated imported property 'Z' to 'orderBy' (module 848677)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'Z' to 'getLastElement' (module 715951)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'Z' to 'wrappedModule' (module 71973)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70682.938abe4a.js
         * chunkId: 70682
         * moduleId: 752075
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var creationTypeConstants = require("creation-type-constants") /*id: 432580*/;
  class o {
    match(e) {
      return !!e.content_blocks?.length;
    }
    converter(e) {
      if (!e.content_blocks) {
        return "";
      }
      let t = [u, a];
      return e.content_blocks.map(e => {
        for (let n of t) {
          if (n.match(e)) {
            return n.converter(e);
          }
        }
      }).filter(Boolean).join("\n\n");
    }
    constructor() {
      var e;
      var t;
      var n;
      t = "block";
      if ((e = typeof (n = function (e, t) {
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
      }(e = "key", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  let u = {
    match: e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT && (!e.parent_id || e.parent_id === "0"),
    converter(e) {
      return e.content_obj?.text || "";
    }
  };
  let a = {
    match(e) {
      var t;
      var n;
      return e.block_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaCreationOutput && ((n = e.content_obj) === null || n === undefined ? undefined : (t = n.creations) === null || t === undefined ? undefined : t.some(e => e.type === creationTypeConstants.creationTypes.CreationTypeImage));
    },
    converter(e) {
      var t;
      var n;
      var r;
      var i;
      if ((i = e.content_obj) === null || i === undefined) {
        return undefined;
      } else if ((r = i.creations) === null || r === undefined) {
        return undefined;
      } else if ((n = r.map(e => {
        var n;
        if (e.type !== creationTypeConstants.creationTypes.CreationTypeImage) {
          return;
        }
        let r = (n = e.image) === null || n === undefined ? undefined : n.image_ori?.url;
        if (r) {
          return `![image](${r})`;
        }
      })) === null || n === undefined) {
        return undefined;
      } else if ((t = n.filter(Boolean)) === null || t === undefined) {
        return undefined;
      } else {
        return t.join("\n\n");
      }
    }
  };
  class d {
    match(e) {
      return !!e.content_blocks_v2?.length;
    }
    converter(e) {
      if (!e.content_blocks_v2) {
        return "";
      }
      let t = [c, s];
      return e.content_blocks_v2.map(e => {
        for (let n of t) {
          if (n.match(e)) {
            return n.converter(e);
          }
        }
      }).filter(Boolean).join("\n\n");
    }
    constructor() {
      var e;
      var t;
      var n;
      t = "im-block";
      if ((e = typeof (n = function (e, t) {
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
      }(e = "key", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  let c = {
    match: e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT && (!e.parent_id || e.parent_id === "0"),
    converter(e) {
      var n;
      return ((n = e.content) === null || n === undefined ? undefined : n.text_block?.text) || "";
    }
  };
  let s = {
    match(e) {
      var t;
      var n;
      var i;
      return e.block_type === chatConstantsEnum.messageContentType.BLOCK_CREATION && ((i = e.content) === null || i === undefined ? undefined : (n = i.creation_block) === null || n === undefined ? undefined : (t = n.creations) === null || t === undefined ? undefined : t.some(e => e.type === creationTypeConstants.creationTypes.CreationTypeImage));
    },
    converter(e) {
      var t;
      var n;
      var r;
      var i;
      var o;
      if ((o = e.content) === null || o === undefined) {
        return undefined;
      } else if ((i = o.creation_block) === null || i === undefined) {
        return undefined;
      } else if ((r = i.creations) === null || r === undefined) {
        return undefined;
      } else if ((n = r.map(e => {
        var n;
        if (e.type !== creationTypeConstants.creationTypes.CreationTypeImage) {
          return;
        }
        let r = (n = e.image) === null || n === undefined ? undefined : n.image_ori?.url;
        if (r) {
          return `![image](${r})`;
        }
      })) === null || n === undefined) {
        return undefined;
      } else if ((t = n.filter(Boolean)) === null || t === undefined) {
        return undefined;
      } else {
        return t.join("\n\n");
      }
    }
  };
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var collectionOrderByUtil_1 = require("collection-order-by-util_1") /*id: 848677*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var chatMessageUtils = require("chat-message-utils") /*id: 898330*/;
  var chatMessageBlockParser = require("chat-message-block-parser") /*id: 452214*/;
  var contentGroupConstants = require("content-group-constants") /*id: 844215*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let k = (e, t) => {
    let n = t.filter(chatMessageUtils.isSpecialMessage);
    let r = n.map(e => [e.data.pos, e.data.pos]).flat(2).filter(e => e !== undefined && e !== -1).map(e => Number(e));
    let i = utf8EncodingUtils_1.Utf8Utils.posCalcRange(e, r);
    let l = chatMessageBlockParser.mapSpecialIndices(e, i, n);
    let o = collectionArrayGrouper.groupValuesToArray(l, e => e.data.index);
    let u = [];
    for (let [t, n] of toEntriesUtil.toEntries(o)) {
      let r = Number(t);
      if (r < 0) {
        r = e.length;
      }
      for (let t of objectValuesHelper.getObjectValues(n)) {
        let {
          data: {
            insert_text: e = ""
          }
        } = t;
        let n = new DOMParser().parseFromString(e, "text/html");
        let i = n.querySelector("data-block") || n.querySelector("data-inline");
        if ((i == null ? undefined : i.getAttribute("type")) === contentGroupConstants.contentGroupTypes.ImageGroup) {
          var d;
          let {
            images: e = [],
            is_placeholder: t
          } = safeJsonUtils.safeParse(i == null ? undefined : i.getAttribute("value"), {});
          let n = (d = arrayFirstElement.getFirstElement(e)) === null || d === undefined ? undefined : d.full_size_url?.[0];
          if (t || !n) {
            continue;
          }
          u.push({
            range: r,
            replaceTo: `
![image](${n})
`
          });
        }
      }
    }
    return u;
  };
  let Z = e => e.type === chatMessageTypes.MetaType.WebDocReference;
  let R = (e, t) => {
    let n = t.filter(Z);
    let r = collectionArrayGrouper.groupValuesToArray(n, e => {
      var n;
      if ((n = e.data) === null || n === undefined) {
        return undefined;
      } else {
        return n.pos?.[0];
      }
    });
    let i = [];
    let l = [];
    for (let [e, t] of toEntriesUtil.toEntries(r)) {
      t.sort((e, t) => {
        return Number(e.data?.insert_text) - Number(t.data?.insert_text);
      });
      let n = [];
      t.map(e => {
        if ((e == null ? undefined : e.data?.insert_text) && !l.find(t => {
          return Number(t == null ? undefined : t.data?.insert_text) === Number(e == null ? undefined : e.data?.insert_text);
        })) {
          n.push(e);
          l.push(e);
        }
      });
      if (n.length >= 3) {
        n = n.slice(0, 2);
      }
      if (n.length === 0) {
        n = (t == null ? undefined : t[0]) ? [t[0]] : [];
      }
      let r = arrayFirstElement.getFirstElement(n)?.data;
      if (!r) {
        continue;
      }
      let {
        url: u,
        website_name: a
      } = r;
      if (u && a) {
        i.push({
          range: Number(e),
          replaceTo: `\u{FF08}[${a}](${u})\u{FF09}`
        });
      }
    }
    return i;
  };
  let N = e => {
    let {
      meta_infos: t = [],
      content_obj: n
    } = e;
    let {
      text: r
    } = n ?? {};
    if (!isStringTypeCheck.isString(r)) {
      return [];
    }
    let i = t.map(markdownMetaRenderUtils.extractMetaInfo).filter(e => !!e);
    if (isStringTypeCheck.isString(r)) {
      return [...k(r, i), ...R(r, i)];
    } else {
      return [];
    }
  };
  let T = (e, t) => {
    let n = collectionOrderByUtil_1.orderBy(t, e => {
      let {
        range: t
      } = e;
      if (isNumberUtil.isNumber(t)) {
        return t;
      } else {
        return t[0];
      }
    }, "desc");
    let r = e;
    for (let {
      range: e,
      replaceTo: t
    } of n) {
      let [n, i] = isNumberUtil.isNumber(e) ? [e, e] : e;
      r = `${r.slice(0, n)}${t}${r.slice(i)}`;
    }
    return r;
  };
  class z {
    match() {
      return true;
    }
    converter(e) {
      let {
        text: n
      } = e.content_obj ?? {};
      if (isStringTypeCheck.isString(n)) {
        return T(n, N(e)).trim();
      } else {
        return null;
      }
    }
    constructor() {
      var e;
      var t;
      var n;
      t = "text";
      if ((e = typeof (n = function (e, t) {
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
      }(e = "key", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  let O = (e, t) => {
    let n = t.find(t => t.match(e));
    if (n) {
      return n.converter(e);
    } else {
      return null;
    }
  };
  let E = e => O(e, [new o(), new d(), new z()]);
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let I = e => {
    let {
      conversationId: t,
      matcher: n,
      timeout: r = 15000
    } = e;
    return new Promise((e, i) => {
      let u = chatMessageStoreFactory.createMessageStore.getState();
      let a = lastElementHelper.getLastElement(u.messageLinkMap[t] ?? [])?.messageId;
      let d = () => {
        s();
        clearTimeout(c);
      };
      let c = setTimeout(() => {
        d();
        i(Error(`Subscribe matching message timeout: ${r}`));
      }, r);
      let s = chatMessageStoreFactory.createMessageStore.subscribe(r => {
        let {
          messageLinkMap: o
        } = r;
        let u = o[t] ?? [];
        let c = u.findIndex(e => e.messageId === a);
        if (a && c === -1) {
          d();
          i(Error(`Cannot find messageId to anchor from: ${a}`));
          return;
        }
        let s = u.slice(a ? c + 1 : 0).map(e => conversationMessageUtils_1.getMessageFromLink(r, t, e));
        let v = moduleReExportWrapper.wrappedModule(s, e => !!e && !!n(e));
        if (v) {
          d();
          e(v);
        }
      });
    });
  };
  require.r(exports);
  require.d(exports, {
    subscribeNewReceiveMessage: function () {
      return I;
    },
    convertMessageToText: function () {
      return E;
    },
    convertMessageToTextByPlugins: function () {
      return O;
    }
  });
}