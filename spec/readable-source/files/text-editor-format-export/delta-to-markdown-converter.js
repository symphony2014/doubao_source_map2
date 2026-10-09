// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'createPlainTextBlob'
// - Renamed export 'C' to 'convertDeltaToMarkdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 935302
         */
module.exports = function (module, exports, require) {
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var assertErrorHelper = require("assert-error-helper") /*id: 85083*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  let d = /(number|bullet)([0-9]+)/;
  let u = async e => {
    let {
      matchedOps: n,
      zone: i,
      convertToBlocks: l
    } = e;
    let {
      list: s
    } = n[0]?.attributes ?? {};
    let u = s == null ? undefined : s.match(d);
    let c = u == null ? undefined : u[1];
    let m = Number(u == null ? undefined : u[2]);
    let h = [];
    let f = n.reduce((e, t) => {
      let {
        list: l
      } = t.attributes ?? {};
      let s = Number(l == null ? undefined : l.match(`${c}([0-9]+)`)?.[1]);
      if (l && s === m) {
        e.push(new contentStructureDelta.ContentDelta({
          zoneId: i == null ? undefined : i.zoneId
        }));
      } else {
        let r = lastElementHelper.getLastElement(e);
        if (r != null) {
          r.push(t);
        }
      }
      return e;
    }, []);
    while (f.length) {
      let e = f.shift();
      if (e) {
        let t = await l({
          zone: e
        });
        h.push({
          type: "listItem",
          spread: false,
          children: t
        });
      }
    }
    return h;
  };
  let c = e => {
    let {
      zone: t,
      index: r,
      type: n,
      level: i
    } = e;
    let {
      ops: l
    } = t;
    let o = 0;
    while (r < l.length && l[r]) {
      let e = l[r];
      let {
        lmkr: t,
        list: u
      } = e.attributes ?? {};
      if (t) {
        if (!u) {
          break;
        }
        let e = u.startsWith(n);
        let t = Number(u == null ? undefined : u.match(`${n}([0-9]+)`)?.[1]);
        if (e && i > t || !e) {
          break;
        }
      }
      o += deltaSetCore.getOpLength(e);
      r++;
    }
    return o;
  };
  var deltaSetWalkerPlugin = require("delta-set-walker-plugin") /*id: 831379*/;
  var blockTypeEnum = require("block-type-enum") /*id: 678364*/;
  function f(e, t, r) {
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
  class p extends deltaSetWalkerPlugin.DeltaSetWalker {
    match(e) {
      let {
        curOp: r,
        zone: n,
        index: i
      } = e;
      let {
        list: l
      } = r.attributes ?? {};
      let o = !!l;
      let a = l == null ? undefined : l.match(d);
      let s = a == null ? undefined : a[1];
      return !!o && !!s && c({
        zone: n,
        index: i,
        type: s,
        level: Number(a == null ? undefined : a[2])
      });
    }
    async render(e) {
      let {
        matchedOps: n,
        zone: i,
        convertToBlocks: o
      } = e;
      let {
        list: a
      } = n[0]?.attributes ?? {};
      assertErrorHelper.assertThrow(a, "list attribute must not be empty");
      if (a.startsWith("bullet")) {
        return {
          type: "list",
          ordered: false,
          children: await u({
            matchedOps: n,
            zone: i,
            convertToBlocks: o
          })
        };
      } else if (a.startsWith("number")) {
        return {
          type: "list",
          ordered: true,
          start: 1,
          children: await u({
            matchedOps: n,
            zone: i,
            convertToBlocks: o
          })
        };
      } else if (a.startsWith("check")) {
        return undefined;
      } else if (a.startsWith("done")) {
        return undefined;
      } else {
        return undefined;
      }
    }
    constructor(...e) {
      super(...e);
      f(this, "name", "list");
      f(this, "type", blockTypeEnum.BlockTypes.EmbedBlock);
    }
  }
  var headingDeltaSetWalker = require("heading-delta-set-walker") /*id: 794538*/;
  let x = e => {
    if (e) {
      return Number(e.match(/h([0-9]+)/)?.[1]);
    }
  };
  class v extends headingDeltaSetWalker.HeadingDeltaSetWalker {
    render(e) {
      let {
        matchedOps: n
      } = e;
      let {
        heading: i
      } = n[0]?.attributes ?? {};
      assertErrorHelper.assertThrow(i, "Property \"heading\" must exists in attributes");
      return {
        type: "heading",
        depth: x(i),
        children: []
      };
    }
  }
  var blockquoteDeltaWalkerPlugin = require("blockquote-delta-walker-plugin") /*id: 521036*/;
  class $ extends blockquoteDeltaWalkerPlugin.BlockquoteWalker {
    render() {
      return {
        type: "blockquote",
        children: []
      };
    }
  }
  var paragraphBlockMatcher = require("paragraph-block-matcher") /*id: 976120*/;
  class w extends paragraphBlockMatcher.ParagraphBlockMatcher {
    render() {
      return {
        type: "paragraph",
        children: []
      };
    }
  }
  var tableBlockMatcher = require("table-block-matcher") /*id: 920866*/;
  class S extends tableBlockMatcher.TableBlockMatcher {
    async render(e) {
      let {
        matchedOps: l,
        deltaSet: o,
        convertToBlocks: a
      } = e;
      let {
        aceTable: s
      } = l[0]?.attributes ?? {};
      let [d, u] = s.split(" ");
      if (!d || !u) {
        return;
      }
      let c = o.get(d);
      let m = o.get(u);
      if (!c || !m) {
        return;
      }
      let h = [];
      for (let e of c.ops) {
        let t = e.insert?.id;
        let r = [];
        if (t) {
          for (let e of m.ops) {
            let n = e.insert?.id;
            if (!n) {
              continue;
            }
            let l = `x${t}x${n}`;
            let o = await a({
              zone: l
            });
            r.push({
              type: "tableCell",
              children: o
            });
          }
          h.push({
            type: "tableRow",
            children: r
          });
        }
      }
      return {
        type: "table",
        children: h
      };
    }
  }
  var codeBlockWalker = require("code-block-walker") /*id: 370915*/;
  class T extends codeBlockWalker.CodeBlockWalker {
    async render(e) {
      let {
        matchedOps: i,
        deltaSet: l,
        convertToBlocks: o
      } = e;
      let {
        zoneId: a
      } = i[0]?.attributes ?? {};
      if (!a || !l.get(a)) {
        return;
      }
      let s = await o({
        zone: a
      });
      return {
        type: "code",
        value: markdownParserSerializer.serializeMarkdown({
          type: "root",
          children: s
        }, true)
      };
    }
  }
  var imageBlockMatcher = require("image-block-matcher") /*id: 388003*/;
  var imageSourceResolver = require("image-source-resolver") /*id: 919160*/;
  class _ extends imageBlockMatcher.ImageBlockMatcher {
    async render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      let {
        alt: i
      } = n;
      let {
        docEditor: l
      } = this.config;
      let {
        enableLoadImageById: o = true
      } = this.pluginConfig;
      let a = o ? await imageSourceResolver.resolveImageSource({
        docEditor: l,
        attributes: n
      }) : n.src;
      if (a || i) {
        return {
          type: "paragraph",
          children: [{
            type: "image",
            url: a ?? "",
            alt: i ?? ""
          }]
        };
      }
    }
    constructor(e = {}) {
      super();
      this.pluginConfig = e;
    }
  }
  var thematicBreakWalkerPlugin = require("thematic-break-walker-plugin") /*id: 844530*/;
  class Z extends thematicBreakWalkerPlugin.ThematicBreakWalker {
    render() {
      return {
        type: "thematicBreak"
      };
    }
  }
  var mindmapDeltaWalkerPlugin = require("mindmap-delta-walker-plugin") /*id: 662997*/;
  class M extends mindmapDeltaWalkerPlugin.MindmapDeltaWalker {
    render(e) {
      let {
        matchedOps: n
      } = e;
      let {
        mindmap: i
      } = n[0]?.attributes ?? {};
      if (i) {
        return {
          type: "code",
          lang: "mindmap",
          value: i
        };
      }
    }
  }
  var mermaidBlockWalkerPlugin = require("mermaid-block-walker-plugin") /*id: 38305*/;
  class N extends mermaidBlockWalkerPlugin.MermaidBlockWalker {
    render(e) {
      let {
        matchedOps: n
      } = e;
      let {
        mermaid: i
      } = n[0]?.attributes ?? {};
      if (i) {
        return {
          type: "code",
          lang: "mermaid",
          value: i
        };
      }
    }
  }
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var hyperlinkDeltaWalker = require("hyperlink-delta-walker") /*id: 418741*/;
  var editorDeltaSetUtils = require("editor-delta-set-utils") /*id: 201746*/;
  class J extends hyperlinkDeltaWalker.HyperlinkDeltaWalker {
    render(e) {
      let {
        matchedOps: n
      } = e;
      let {
        hyperlink: i
      } = n[0]?.attributes ?? {};
      let {
        href: l
      } = safeJsonUtils.safeParse(i, {});
      if (l && isStringTypeCheck.isString(l)) {
        return {
          type: "link",
          url: l,
          children: [{
            type: "text",
            value: editorDeltaSetUtils.getInsertText(n)
          }]
        };
      } else {
        return {
          type: "text",
          value: editorDeltaSetUtils.getInsertText(n)
        };
      }
    }
  }
  var textBlockInlineMatcher = require("text-block-inline-matcher") /*id: 522467*/;
  class H extends textBlockInlineMatcher.InlineCodeMatcher {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return {
        type: "inlineCode",
        value: editorDeltaSetUtils.getInsertText(t)
      };
    }
  }
  var textBlockUnderlineWalker = require("text-block-underline-walker") /*id: 957081*/;
  class D extends textBlockUnderlineWalker.UnderlineWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return {
        type: "html",
        value: `<u>${editorDeltaSetUtils.getInsertText(t)}</u>`
      };
    }
    constructor(...e) {
      var t;
      var r;
      var n;
      super(...e);
      r = "underline";
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
      }(t = "name", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = r;
      }
    }
  }
  var strikethroughTextBlockDeltaWalker = require("strikethrough-text-block-delta-walker") /*id: 211574*/;
  class U extends strikethroughTextBlockDeltaWalker.StrikethroughTextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return {
        type: "delete",
        children: [{
          type: "text",
          value: editorDeltaSetUtils.getInsertText(t)
        }]
      };
    }
  }
  var italicTextBlockDeltaWalker = require("italic-text-block-delta-walker") /*id: 851317*/;
  class q extends italicTextBlockDeltaWalker.ItalicTextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return {
        type: "emphasis",
        children: [{
          type: "text",
          value: editorDeltaSetUtils.getInsertText(t)
        }]
      };
    }
  }
  var boldTextBlockWalker = require("bold-text-block-walker") /*id: 771978*/;
  class G extends boldTextBlockWalker.BoldTextBlockWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return {
        type: "strong",
        children: [{
          type: "text",
          value: editorDeltaSetUtils.getInsertText(t)
        }]
      };
    }
  }
  var equationTextBlockDeltaWalker = require("equation-text-block-delta-walker") /*id: 52187*/;
  class Q extends equationTextBlockDeltaWalker.EquationTextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: n
      } = e;
      let {
        equation: i
      } = n[0]?.attributes ?? {};
      if (i) {
        return {
          type: "inlineMath",
          value: i
        };
      }
    }
  }
  var docReferenceDeltaWalker = require("doc-reference-delta-walker") /*id: 184827*/;
  var docReferenceHtmlEntities = require("doc-reference-html-entities") /*id: 958118*/;
  class et extends docReferenceDeltaWalker.DocReferenceWalker {
    render(e) {
      var r;
      let {
        matchedOps: i
      } = e;
      let l = (r = i[0]) === null || r === undefined ? undefined : r.attributes?.[docReferenceHtmlEntities.docReference];
      let {
        referenceQuoteManager: o
      } = this.config;
      let a = o == null ? undefined : o.getReferenceDetail(l)?.url;
      if (this.enableReferenceQuote && l && isStringTypeCheck.isString(a)) {
        return {
          type: "link",
          url: a,
          children: [{
            type: "text",
            value: `(${o == null ? undefined : o.getReferenceIndex(l)})`
          }]
        };
      } else {
        return {
          type: "text",
          value: ""
        };
      }
    }
    constructor({
      enableReferenceQuote: e = true
    }) {
      var t;
      var r;
      super();
      if ((t = typeof (r = function (e, t) {
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
      }(t = "enableReferenceQuote", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, t, {
          value: true,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = true;
      }
      this.enableReferenceQuote = e;
    }
  }
  var textBlockDeltaSetWalker = require("text-block-delta-set-walker") /*id: 944196*/;
  class en extends textBlockDeltaSetWalker.TextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return {
        type: "text",
        value: editorDeltaSetUtils.getInsertText(t)
      };
    }
  }
  var deltaBlockRenderer = require("delta-block-renderer") /*id: 552713*/;
  let el = async e => {
    let {
      docEditor: t,
      title: r,
      deltaSet: l,
      zoneId: o = zeroConstantModule_1.versionValue,
      plugins: a,
      referenceQuoteManager: s
    } = e;
    return {
      type: "root",
      children: await deltaBlockRenderer.renderDeltaBlocks({
        docEditor: t,
        titleBlock: r ? {
          type: "heading",
          depth: 1,
          children: [{
            type: "text",
            value: r
          }]
        } : undefined,
        deltaSet: l,
        zone: o,
        plugins: a,
        addChildToBlock: (e, t) => {
          if (!markdownParserSerializer.isNodeType(e, "thematicBreak", "html", "code", "math")) {
            e.children.push(t);
          }
        },
        referenceQuoteManager: s
      })
    };
  };
  let eo = async e => {
    let {
      enableLoadImageById: t,
      enableReferenceQuote: r,
      ...i
    } = e;
    let l = await el({
      ...i,
      plugins: [new p(), new v(), new $(), new w(), new S(), new T(), new _({
        enableLoadImageById: t
      }), new Z(), new M(), new N(), new J(), new H(), new D(), new U(), new q(), new G(), new Q(), new et({
        enableReferenceQuote: r
      }), new en()]
    });
    return markdownParserSerializer.serializeMarkdown(l, true);
  };
  let ea = e => new Blob([e], {
    type: "text/plain"
  });
  require.d(exports, {
    createPlainTextBlob: function () {
      return ea;
    },
    convertDeltaToMarkdown: function () {
      return eo;
    }
  });
}