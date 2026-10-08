// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'processMarkdown'
// - Renamed export 'A' to 'useMarkdownProcessor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 172658
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var safeTextInsertionUtil = require("safe-text-insertion-util") /*id: 348428*/;
  var pluginPipelineProcessor = require("plugin-pipeline-processor") /*id: 934336*/;
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  var markdownAstPluginEngine = require("markdown-ast-plugin-engine") /*id: 66280*/;
  function v(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class d extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      v(this, "name", "autofix_truncated_escape");
      v(this, "config", {
        isReverse: true,
        fixEndingOnly: true
      });
      v(this, "modifier", (e, t) => {
        let {
          insertAfter: n,
          stop: l
        } = t;
        if (markdownParserSerializer.hasNodeChildren(e) || e.type !== "text") {
          return;
        }
        l();
        let o = e.value.match(/^(?<text>[\s\S]*)\\$/);
        if (o) {
          n([{
            type: "text",
            value: o.groups?.text ?? ""
          }], true);
        }
      });
    }
  }
  function m(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class h extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      m(this, "name", "remove_last_empty_code_block");
      m(this, "config", {
        order: "in_order",
        isReverse: true,
        fixEndingOnly: true
      });
      m(this, "modifier", (e, t) => {
        let {
          insertAfter: r,
          stop: i
        } = t;
        if (!markdownParserSerializer.hasValue(e) || (i(), e.type !== "code")) {
          return;
        }
        let {
          value: n,
          lang: l,
          meta: o
        } = e;
        if (!n && !l && !o) {
          r([], true);
        }
      });
    }
  }
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  function g(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class b extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      g(this, "name", "autofix_last_code_block");
      g(this, "config", {
        order: "in_order",
        isReverse: true,
        fixEndingOnly: true
      });
      g(this, "modifier", (e, t) => {
        let {
          insertAfter: n,
          stop: l
        } = t;
        if (markdownParserSerializer.hasValue(e)) {
          l();
          if (e.type === "code") {
            let {
              content: t
            } = e.value.match(/^(?<content>[\S\s]*?)\n`+$/)?.groups || {};
            if (!isStringTypeCheck.isString(t)) {
              return;
            }
            n([{
              ...e,
              value: t
            }], true);
          } else if (e.type === "text") {
            let {
              prefix: t
            } = e.value.match(/^(?<prefix>[\s\S]*?)`{1,2}$/)?.groups || {};
            if (!isStringTypeCheck.isString(t)) {
              return;
            }
            n(t ? [{
              type: "text",
              value: t
            }] : [], true);
          }
        }
      });
    }
  }
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var assertErrorUtility = require("assert-error-utility") /*id: 27936*/;
  function w(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let $ = (e, t) => {
    let r = moduleReExportWrapper.wrappedModule(e.children, e => e.type === "text" && !!e.value.match(t));
    if (!r) {
      return;
    }
    assertErrorUtility.assert(r.type === "text", "lastUnPaired.type must be text");
    let i = e.children.findIndex(e => e === r);
    assertErrorUtility.assert(i >= 0, "lastUnPairedIndex must >= 0");
    return {
      target: r,
      index: i
    };
  };
  let j = /^(?<prefix>.*([^\\`]|^))`(?!`)(?<suffix>.*?)$/;
  class S extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      w(this, "name", "autofix_last_inline_code_block");
      w(this, "config", {
        order: "in_order",
        isReverse: true,
        fixEndingOnly: true
      });
      w(this, "modifier", (e, t) => {
        let {
          stop: i
        } = t;
        if (!markdownParserSerializer.hasNodeChildren(e)) {
          return;
        }
        i();
        let n = $(e, j);
        if (!n) {
          return;
        }
        let {
          target: l,
          index: o
        } = n;
        if (e.children.slice(o + 1).find(e => e.type === "inlineCode")) {
          return;
        }
        let {
          prefix: u,
          suffix: a
        } = l.value.match(j)?.groups || {};
        if (!isStringTypeCheck.isString(a) || !isStringTypeCheck.isString(u)) {
          return;
        }
        let s = [];
        if (u) {
          s.push({
            type: "text",
            value: u
          });
        }
        let f = `${a}${markdownParserSerializer.serializeAst(e.children.slice(o + 1), true)}`;
        if (f) {
          s.push({
            type: "inlineCode",
            value: f
          });
        }
        e.children.splice(o, e.children.length - o, ...s);
      });
    }
  }
  function P(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let E = e => e.replace(/\[(.*?)\]\(coco:\/\/.*?\)/g, "$1");
  class Z extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      P(this, "name", "remove_coco_link_in_codeblock");
      P(this, "config", {
        fixEndingOnly: true
      });
      P(this, "modifier", (e, t) => {
        let {
          insertAfter: r
        } = t;
        if (markdownParserSerializer.hasValue(e) && (e.type === "code" || e.type === "inlineCode")) {
          let t = E(e.value);
          r([{
            ...e,
            value: t
          }], true);
        }
      });
    }
  }
  var arrayConcatFlattenFunction = require("array-concat-flatten-function") /*id: 876471*/;
  function k(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class X extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      k(this, "name", "autofix_truncated_image");
      k(this, "config", {
        isReverse: true,
        fixEndingOnly: true
      });
      k(this, "modifier", (e, t) => {
        let {
          insertAfter: i,
          stop: n,
          removeTruncatedImage: l = false
        } = t;
        let o = [/!$/, /!\[$/, /!\[(?<text>[^\]]*)$/, /!\[(?<text>[^\]]*)\]$/, /!\[(?<text>[^\]]*)\]\([^\)]*$/];
        let u = l ? o : o.slice(0, 1);
        let a = l ? [] : o.slice(1);
        if (!markdownParserSerializer.hasValue(e) || (n(), e.type !== "text")) {
          return;
        }
        let s = a.find(t => t.exec(e.value));
        let f = u.find(t => t.exec(e.value));
        if (!f && !s) {
          return;
        }
        let p = f ?? s;
        if (!p) {
          return;
        }
        let v = p.exec(e.value);
        if (v) {
          i(arrayConcatFlattenFunction.concatAndFlatten({
            type: "text",
            value: e.value.slice(0, v.index)
          }, s ? {
            type: "image",
            url: "",
            alt: v.groups?.text || "image"
          } : []), true);
        }
      });
    }
  }
  var genericUtilFunctions = require("generic-util-functions") /*id: 165378*/;
  function N(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class T extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      N(this, "name", "autofix_truncated_link");
      N(this, "config", {
        isReverse: true,
        fixEndingOnly: true
      });
      N(this, "modifier", (e, t) => {
        let {
          insertAfter: i,
          stop: n
        } = t;
        if (markdownParserSerializer.isNodeType(e, "link")) {
          n();
          return;
        }
        if (markdownParserSerializer.hasNodeChildren(e) || e.type !== "text" && e.type !== "html") {
          return;
        }
        n();
        let l = genericUtilFunctions.findMapResult([/\[(?<text>\[[^\]\n]*)$/, /\[(?<text>\[[^\]\n]+\])$/, /\[(?<text>\[[^\]\n]+\])\]$/, /\[(?<text>\[[^\]\n]+\])\]\([^\)\n]*$/, /\[(?<text>[^\]\n]*)$/, /\[(?<text>[^\]\n]+)\]$/, /\[(?<text>[^\]\n]+)\]\([^\)\n]*$/], t => {
          var r;
          return (r = t.exec(e.value)) !== null && r !== undefined && r;
        });
        if (!l) {
          return;
        }
        let [o, u] = l;
        if (!u) {
          return;
        }
        let a = u.groups?.text;
        let s = u.index;
        if (a == null || !a.startsWith("^")) {
          i(a ? [{
            type: e.type,
            value: e.value.slice(0, s)
          }, {
            type: "link",
            title: null,
            url: "#",
            children: [{
              type: "text",
              value: a
            }]
          }] : [{
            type: e.type,
            value: e.value.slice(0, s)
          }], true);
        }
      });
    }
  }
  function z(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class R extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      z(this, "name", "autofix_heading");
      z(this, "config", {
        order: "pre_order",
        isReverse: true,
        fixEndingOnly: true
      });
      z(this, "modifier", (e, t) => {
        let {
          insertAfter: r,
          stop: i
        } = t;
        if (!markdownParserSerializer.hasNodeChildren(e)) {
          i();
          return;
        }
        if (markdownParserSerializer.isHeadingNode(e)) {
          if (e.depth === 1 && !markdownParserSerializer.serializeAst(e.children).trim()) {
            r([], true);
          }
          i();
        }
      });
    }
  }
  var jsUtilFunctions = require("js-util-functions") /*id: 266643*/;
  function U(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let I = [/<([a-zA-Z\-]+((\s+([a-zA-Z\-]+=(("[^"]*")|('[^']*'))))*(\s*\/?|(\s+[a-zA-Z\-]+(=(("[^"]*)|('[^']*))?)?)))?)?$/, /<\/([a-zA-Z\-]+)?$/];
  let M = [/<data-(inline|block)(\s.*)?$/];
  let Y = function (e, t = {}) {
    let {
      looseTruncateDataSlot: r = false
    } = t;
    let i = jsUtilFunctions.findTruthy(arrayConcatFlattenFunction.concatAndFlatten(I, r ? M : []), t => t.exec(e));
    if (i) {
      return e.slice(0, i.index);
    } else {
      return e;
    }
  };
  class L extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      U(this, "name", "autofix_truncated_html_tag");
      U(this, "config", {
        isReverse: true
      });
      U(this, "modifier", (e, t) => {
        let {
          insertAfter: r,
          stop: i,
          looseTruncateDataSlot: n = false
        } = t;
        if (!markdownParserSerializer.isNodeType(e, "text", "html")) {
          return;
        }
        i();
        let l = Y(e.value, {
          looseTruncateDataSlot: n
        });
        r(l ? [{
          type: e.type,
          value: l
        }] : [], true);
      });
    }
  }
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  function B(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class q extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      B(this, "name", "autofix_truncated_strong");
      B(this, "config", {
        order: "in_order",
        isReverse: true,
        fixEndingOnly: true
      });
      B(this, "modifier", [(e, t) => {
        let {
          insertAfter: i,
          stop: n,
          parent: l
        } = t;
        if (!markdownParserSerializer.isNodeType(e, "text") || !l || !markdownParserSerializer.isNodeType(l, "paragraph")) {
          n();
          return;
        }
        let o = e.value.match(/^(?<prefix>[\s\S]*?)(_{2}|\*{2})(?<suffix>[\s\S]*?)\*?$/)?.groups;
        if (!o) {
          return;
        }
        let {
          prefix: u,
          suffix: a
        } = o;
        let s = [];
        if (u) {
          s.push({
            type: "text",
            value: u
          });
        }
        if (a) {
          s.push({
            type: "strong",
            children: [{
              type: "text",
              value: a
            }]
          });
        }
        i(s, true);
      }, (e, t) => {
        let {
          stop: i,
          parent: n,
          index: l
        } = t;
        if (!markdownParserSerializer.hasChildren(e)) {
          return;
        }
        if (!markdownParserSerializer.isNodeType(e, "emphasis") || !n || isUndefinedCheck.isUndefined(l)) {
          i();
          return;
        }
        let o = n.children[l - 1];
        if (!o || !markdownParserSerializer.isNodeType(o, "text")) {
          i();
          return;
        }
        let u = /(?<prefix>(.*[^\*])|^)\*$/.exec(o.value);
        if (!u) {
          i();
          return;
        }
        let {
          prefix: a
        } = u.groups ?? {};
        let s = [];
        if (a) {
          s.push({
            type: "text",
            value: a
          });
        }
        s.push({
          type: "strong",
          children: e.children
        });
        n.children.splice(l - 1, 2, ...s);
      }, (e, t) => {
        let {
          stop: r,
          insertAfter: i
        } = t;
        if (markdownParserSerializer.hasChildren(e) && e.type !== "listItem") {
          if (e.type !== "list") {
            r();
            return;
          }
          if (!e.children.length || e.children.length === 1 && !e.children[0].children.length) {
            i([], true);
            r();
            return;
          }
        }
      }]);
    }
  }
  function Q(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let K = e => {
    if (e.includes("*")) {
      for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        let i = e[t - 1];
        let n = e[t + 1];
        if (r === "*" && i !== "*" && n !== "*") {
          return [e.slice(0, t), e.slice(t + 1)];
        }
      }
    }
  };
  class V extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      Q(this, "name", "autofix_truncated_emphasis");
      Q(this, "config", {
        order: "in_order",
        isReverse: true,
        fixEndingOnly: true
      });
      Q(this, "modifier", (e, t) => {
        let {
          insertAfter: r,
          stop: i,
          parent: n
        } = t;
        if (!markdownParserSerializer.hasValue(e) || !n || !markdownParserSerializer.isNodeType(n, "paragraph")) {
          i();
          return;
        }
        if (e.type === "text") {
          let t = K(e.value);
          if (!t) {
            return;
          }
          let [i, n] = t;
          let l = [];
          if (i) {
            l.push({
              type: "text",
              value: i
            });
          }
          if (n) {
            l.push({
              type: "emphasis",
              children: [{
                type: "text",
                value: n
              }]
            });
          }
          r(l, true);
        }
      });
    }
  }
  function G(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class H extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      G(this, "name", "autofix_truncated_list");
      G(this, "config", {
        isReverse: true,
        fixEndingOnly: true
      });
      G(this, "modifier", [(e, t) => {
        let {
          insertAfter: r,
          stop: i,
          index: n,
          parent: l
        } = t;
        if (markdownParserSerializer.hasNodeChildren(e)) {
          if (!markdownParserSerializer.isNodeType(e, "paragraph") && !markdownParserSerializer.isRootNode(e)) {
            i();
          }
          return;
        }
        if (!markdownParserSerializer.isNodeType(e, "text") || isUndefinedCheck.isUndefined(n) || n !== 0 || !l || l.children.length > 1) {
          i();
          return;
        }
        let o = /^(?<prefix>.*)\n\s*(?<value>([0-9]+?\.?)|(\-\s*))$/.exec(e.value);
        if (o) {
          let {
            prefix: e
          } = o.groups ?? {};
          r([{
            type: "text",
            value: e
          }], true);
        } else if (/^\s*[0-9]+$/.exec(e.value)) {
          r([], true);
        }
        i();
      }, (e, t) => {
        let {
          insertAfter: r,
          stop: i,
          index: n,
          parent: l,
          parents: o
        } = t;
        if (markdownParserSerializer.hasNodeChildren(e)) {
          if (!markdownParserSerializer.isNodeType(e, "list", "listItem", "paragraph") && !markdownParserSerializer.isRootNode(e)) {
            i();
          }
          return;
        }
        if (!markdownParserSerializer.isNodeType(e, "text") || !l || !markdownParserSerializer.isNodeType(o[0], "paragraph") || !markdownParserSerializer.isNodeType(o[1], "listItem") || !markdownParserSerializer.isNodeType(o[2], "list") || n !== l.children.length - 1) {
          i();
          return;
        }
        let u = /^(?<prefix>.*)\n\s*(?<value>[0-9]+?)$/.exec(e.value);
        if (u) {
          let {
            prefix: e
          } = u.groups ?? {};
          r([{
            type: "text",
            value: e
          }], true);
        }
        i();
      }]);
    }
  }
  var htmlTagEntityUtil = require("html-tag-entity-util") /*id: 966395*/;
  function J(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class W extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      J(this, "name", "disable_illegal_html");
      J(this, "config", {
        order: "pre_order",
        isReverse: true
      });
      J(this, "modifier", (e, t) => {
        let {
          insertAfter: r,
          enabledHtmlTags: i
        } = t;
        if (markdownParserSerializer.hasValue(e) && e.type === "html") {
          r([{
            type: "html",
            value: htmlTagEntityUtil.conditionalHtmlEncode(e.value, i)
          }], true);
        }
      });
    }
  }
  function ee(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class et extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      ee(this, "name", "remove_break_before_html");
      ee(this, "modifier", (e, t) => {
        let {
          parent: r,
          index: i
        } = t;
        if (!markdownParserSerializer.hasValue(e) || e.type !== "html" || !r || isUndefinedCheck.isUndefined(i)) {
          return;
        }
        let n = genericUtilFunctions.safeGetProperty(r == null ? undefined : r.children, i - 1);
        if (n && n.type === "break") {
          r.children.splice(i - 1, 1);
        }
      });
    }
  }
  function er(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class ei extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      er(this, "name", "transform_endline_before_html");
      er(this, "config", {
        order: "pre_order"
      });
      er(this, "modifier", (e, t) => {
        let {
          index: r,
          parent: i
        } = t;
        if (!markdownParserSerializer.hasValue(e) || e.type !== "html" || !i || !r) {
          return;
        }
        let n = i.children[r - 1];
        if (n.type !== "text") {
          return;
        }
        let l = /(\r?\n|\r)$/;
        if (l.test(n.value)) {
          i.children.splice(r - 1, 1, {
            type: "text",
            value: n.value.replace(l, "")
          }, {
            type: "html",
            value: "<br />"
          });
        }
      });
    }
  }
  var hookPhaseEnum = require("hook-phase-enum") /*id: 385853*/;
  function el(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let eo = e => {
    let {
      children: t
    } = e;
    let r = [];
    let i = "";
    for (let e = 0; e < t.length; e++) {
      let n = t[e];
      if (n.type === "text") {
        i += n.value;
      }
      if (n.type !== "text" || e === t.length - 1) {
        if (i) {
          r.push({
            type: "text",
            value: i
          });
        }
        i = "";
      }
      if (n.type !== "text") {
        r.push(n);
      }
    }
    e.children = r;
  };
  class eu extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      el(this, "name", "extract_custom_autolink");
      el(this, "config", {
        priority: hookPhaseEnum.HookPhase.AfterAll
      });
      el(this, "modifier", (e, t) => {
        let {
          skip: r,
          recursiveModifier: i
        } = t;
        if (markdownParserSerializer.hasChildren(e)) {
          eo(e);
          r();
          for (let t of e.children) {
            if (markdownParserSerializer.hasNodeChildren(t)) {
              i(t);
            }
          }
        }
      });
    }
  }
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  function es(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let ef = e => {
    let t = [];
    for (let [r, i] of e.entries()) {
      if (!markdownParserSerializer.isNodeType(i, "html")) {
        continue;
      }
      let e = htmlTagEntityUtil.extractTagName(i.value);
      if (isUndefinedCheck.isUndefined(e)) {
        continue;
      }
      if (!htmlTagEntityUtil.isClosingTag(i.value)) {
        t.push(e);
        continue;
      }
      let n = lastElementHelper.getLastElement(t);
      if (isUndefinedCheck.isUndefined(n)) {
        return r;
      }
      if (n === e) {
        t.pop();
        continue;
      }
      break;
    }
    return null;
  };
  class ec extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      es(this, "name", "add_unpaired_html_tag");
      es(this, "config", {
        order: "pre_order",
        isReverse: true,
        priority: hookPhaseEnum.HookPhase.After
      });
      es(this, "modifier", (e, t) => {
        let {
          index: r,
          parent: i,
          skip: n,
          insertAfter: l
        } = t;
        if (!markdownParserSerializer.isNodeType(e, "paragraph") || !i || (n(), r === i.children.length - 1)) {
          return;
        }
        let o = e.children.slice();
        let u = false;
        for (let e = o.length - 1; e >= 0; e--) {
          let t = o[e];
          if (!markdownParserSerializer.isNodeType(t, "html") || htmlTagEntityUtil.isClosingTag(t.value)) {
            continue;
          }
          let r = htmlTagEntityUtil.extractTagName(t.value);
          if (!r) {
            continue;
          }
          let i = ef(o.slice(e + 1));
          if (i !== null) {
            let t = o[i + e + 1];
            assertErrorUtility.assert(markdownParserSerializer.isNodeType(t, "html"));
            let n = htmlTagEntityUtil.extractTagName(t.value);
            if (htmlTagEntityUtil.isClosingTag(t.value) && n === r) {
              continue;
            }
          }
          let n = i === null ? o.length : i + e + 1;
          o.splice(n, 0, {
            type: "html",
            value: `</${r}>`
          });
          u = true;
        }
        if (u) {
          l([{
            type: "paragraph",
            children: o
          }], true);
        }
      });
    }
  }
  var katexMathParserUtils = require("katex-math-parser-utils") /*id: 109482*/;
  function ev(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let ed = e => {
    let r = e.match(/(?<prefix>[^\$\\]|^)(\$|\$\$)(?!\$)/);
    if (!r) {
      return -1;
    }
    let {
      index: i = 0
    } = r;
    let n = r == null ? undefined : r.groups?.prefix;
    if (isStringTypeCheck.isString(n)) {
      return i + n.length;
    } else {
      return -1;
    }
  };
  let em = e => {
    let t = e.match(/^\$*/);
    if (t) {
      return t[0].length;
    } else {
      return 0;
    }
  };
  let eh = e => {
    let t = ed(e);
    let r = 0;
    let i = true;
    while (t !== -1) {
      let n = katexMathParserUtils.parseMathDelimiters(e.slice(t));
      if (n) {
        let {
          endIndex: e
        } = n;
        t += e;
        i = false;
        r = t;
      } else {
        let r = ed(e.slice(t));
        if (r === -1) {
          break;
        }
        if (i) {
          t += Math.max(r, em(e.slice(t)));
        } else {
          t += r;
        }
        i = true;
      }
    }
    return r;
  };
  let ey = /^[0-9a-zA-Z\s"'\.,\-\(\)]$/;
  let eg = /^[0-9a-zA-Z\s"'\.,\-\(\)]{15}/;
  let eb = /^\s*(\\begin)/;
  let ex = (e, t) => {
    let r = e.trim();
    let i = r.slice(0, t);
    let n = r.length;
    return !eb.exec(r) && (!i || jsUtilFunctions.isValidNumber(i) ? n - t > 10 : !!ey.exec(i) && !!(n - t > 10) || !!eg.exec(i));
  };
  class e_ extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      ev(this, "name", "autofix_truncated_tex_math_dollar");
      ev(this, "config", {
        order: "in_order",
        isReverse: true,
        fixEndingOnly: true
      });
      ev(this, "modifier", (e, t) => {
        let {
          insertAfter: r,
          stop: i,
          katex: n
        } = t;
        if (!!n && !markdownParserSerializer.hasNodeChildren(e)) {
          if (markdownParserSerializer.hasValue(e)) {
            i();
          }
          if (e.type === "text") {
            let t = eh(e.value);
            let i = e.value.slice(t).match(/^(?<prefix>[\s\S]*?([^\$\\]|^))(?<inter>\$|\$\$)(?!\$)(?<value>[^\$]*?)(?<suffix>\$*)$/);
            let l = i == null ? undefined : i.groups;
            if (!l) {
              return;
            }
            let {
              prefix: o,
              value: u
            } = l;
            let a = katexMathParserUtils.getValidMathLength({
              src: u,
              katex: n
            });
            if (ex(u, a)) {
              return;
            }
            let s = u.slice(0, a).trim();
            let f = `${e.value.slice(0, t)}${o}`;
            r(arrayConcatFlattenFunction.concatAndFlatten(f ? {
              type: "text",
              value: f
            } : [], s ? {
              type: "inlineMath",
              value: s
            } : []), true);
          } else if (e.type === "inlineMath" || e.type === "math") {
            var l;
            let t = e.type === "math" && (l = e.meta) !== null && l !== undefined ? l : e.value;
            let i = katexMathParserUtils.getValidMathLength({
              src: t,
              katex: n
            });
            if (ex(t, i)) {
              r([e.type === "inlineMath" ? {
                type: "text",
                value: `$${t}$`
              } : {
                type: "paragraph",
                children: [{
                  type: "text",
                  value: `$$${t}$$`
                }]
              }], true);
              return;
            }
            let o = t.slice(0, i).trim();
            let u = e.type === "inlineMath" ? {
              type: "inlineMath",
              value: o
            } : {
              type: "paragraph",
              children: [{
                type: "inlineMath",
                value: o
              }]
            };
            r(o ? [u] : [], true);
          }
        }
      });
    }
  }
  var mathEncodingUtil = require("math-encoding-util") /*id: 833504*/;
  function e$(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class ej extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      e$(this, "name", "restore_math_pandoc_latex_in_content");
      e$(this, "config", {
        order: "pre_order"
      });
      e$(this, "modifier", (e, t) => {
        let {
          insertAfter: r
        } = t;
        if (markdownParserSerializer.hasValue(e) && markdownParserSerializer.isNodeType(e, "code", "inlineCode", "math", "inlineMath")) {
          r([{
            ...e,
            value: mathEncodingUtil.decodeMathSpans(e.value)
          }], true);
        }
      });
    }
  }
  var emailValidator = require("email-validator") /*id: 339725*/;
  let eP = "https?|s?ftp|ftps|nfs|ssh";
  let eE = "\\b([/#?][\\-A-Z0-9@:%_+.~#?&'/=;$,!\\*\\[\\]\\(\\){}^|<>]*[-A-Z0-9&@#/%=~\\(\\)_|]?)?";
  let eZ = RegExp(`((((${eP})://)?(${/localhost(:[0-9]{2,5})?/.source}))|(((${eP})://)(${/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])(:[0-9]{2,5})?/.source})))${eE}`, "gi");
  let eO = "([-A-Z0-9%_+~#@][\\-A-Z:0-9%_+~#@]{0,256}\\.){1,50}";
  let ek = "[a-z\\-]{2,15}";
  let eX = RegExp(`(((${eP}):\\/\\/${eO}${ek})|(${eO}(com|cn|tk|de|net|org|uk|info|nl|ru|hk)))(:[0-9]{2,5})?${eE}`, "gi");
  let eA = "[\\w.!#$%&'*+-/=?^_\\`{|}~]{1,2000}@[A-Za-z0-9_.-]+\\.";
  let eN = RegExp(`^(?!data:)((mailto:${eA}${ek})|(${eA}(com|org|net|int|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gp|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|site|top|wtf|xxx|xyz|cloud|engineering|help|one)))\\b`, "gi");
  let eT = RegExp(`(${eZ.source})|(${eX.source})|(${eN.source})`, "gi");
  (i = {})[i.text = 0] = "text";
  i[i.link = 1] = "link";
  let ez = i;
  let eR = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">"
  };
  let eC = Object.keys(eR);
  let eU = Object.values(eR);
  let eI = [".", ",", "!", "?", "'", ":", ";", "@", "#"];
  let eM = e => {
    let t = -1;
    let r = [];
    for (let i = 0; i < e.length; ++i) {
      let n = e[i];
      if (eC.includes(n)) {
        r.push({
          char: n,
          index: i
        });
      } else if (eU.includes(n)) {
        if (r.length) {
          let {
            char: i,
            index: l
          } = r[r.length - 1];
          let o = e.slice(l, t === -1 ? undefined : t + 1);
          if (n !== eR[i] || safeTextInsertionUtil.matchMarkerStart(o)) {
            ({
              index: t
            } = r[0]);
            break;
          }
          r.pop();
        } else {
          t = i;
          break;
        }
      }
    }
    if (r.length) {
      ({
        index: t
      } = r[0]);
    }
    if (t === -1) {
      t = e.length;
    }
    while (t > 1 && eI.includes(e[t - 1])) {
      t--;
    }
    return e.slice(0, t);
  };
  let eY = e => {
    let t = [];
    let r = 0;
    for (eT.lastIndex = 0;;) {
      let i = eT.exec(e);
      if (!i) {
        break;
      }
      let {
        index: n,
        0: l
      } = i;
      let o = e.slice(r, n);
      if (o) {
        t.push({
          type: ez.text,
          text: o
        });
      }
      if (l) {
        let e = /^(@|#|\+|-|%)+/.exec(l);
        if (e) {
          t.push({
            type: ez.text,
            text: e[0]
          });
          r = i.index + e[0].length;
          eT.lastIndex = r;
        } else {
          let e = eM(l);
          if (e) {
            if (emailValidator.validate(e)) {
              t.push({
                type: ez.text,
                text: e
              });
            } else {
              t.push({
                type: ez.link,
                url: e
              });
            }
            r = i.index + e.length;
            eT.lastIndex = r;
          } else {
            let e = l.slice(0, 1);
            t.push({
              type: ez.text,
              text: e
            });
            r = i.index + e.length;
            eT.lastIndex = r;
          }
        }
      }
    }
    if (r !== e.length) {
      t.push({
        type: ez.text,
        text: e.slice(r)
      });
    }
    return t;
  };
  let eL = e => e.match(/https?:\/\//) ? e : `https://${e}`;
  function eD(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class eB extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      eD(this, "name", "extract_custom_autolink");
      eD(this, "config", {
        priority: hookPhaseEnum.HookPhase.After
      });
      eD(this, "modifier", (e, t) => {
        let {
          insertAfter: r,
          skip: i
        } = t;
        if (markdownParserSerializer.hasNodeChildren(e)) {
          if (markdownParserSerializer.hasChildren(e) && e.type === "link") {
            i();
          }
          return;
        }
        if (e.type === "text") {
          r(eY(e.value).map(e => e.type === ez.link ? {
            type: "link",
            url: eL(e.url),
            title: "autolink",
            children: [{
              type: "text",
              value: e.url
            }]
          } : e.type === ez.text ? {
            type: "text",
            value: e.text
          } : null).filter(e => !!e), true);
        }
      });
    }
  }
  var panguTextSpacing = require("pangu-text-spacing") /*id: 211267*/;
  var eQ = panguTextSpacing;
  function eK(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let eV = [String.raw`\{${safeTextInsertionUtil.insertElementMarker}_[0-9]+_.*?\}`];
  class eG extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      eK(this, "name", "auto_spacing_all_text");
      eK(this, "config", {
        priority: hookPhaseEnum.HookPhase.AfterAll,
        order: "pre_order",
        isReverse: true
      });
      eK(this, "modifier", (e, t) => {
        let {
          insertAfter: r
        } = t;
        if (!markdownParserSerializer.isNodeType(e, "text")) {
          return;
        }
        let {
          value: i
        } = e;
        r([{
          type: "text",
          value: jsUtilFunctions.splitKeepMatches(i, RegExp(`(${eV.map(e => `(${e})`).join("|")})`, "g")).map(e => eQ.spacing(e)).join("")
        }], true);
      });
    }
  }
  function eH(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class eF extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      eH(this, "name", "set_emphasis_as_image_title");
      eH(this, "config", {
        order: "pre_order",
        isReverse: true
      });
      eH(this, "modifier", (e, t) => {
        let {
          parent: r,
          index: i
        } = t;
        if (!r || isUndefinedCheck.isUndefined(i) || !markdownParserSerializer.isImageNode(e)) {
          return;
        }
        let n = genericUtilFunctions.safeGetProperty(r.children, i + 1);
        let l = genericUtilFunctions.safeGetProperty(r.children, i + 2);
        if (!n || !l || !markdownParserSerializer.isNodeType(n, "text") || n.value !== "\n" || !markdownParserSerializer.isNodeType(l, "emphasis")) {
          return;
        }
        let {
          children: o
        } = l;
        let {
          url: u
        } = e;
        let a = markdownParserSerializer.serializeAst(o, true);
        r.children.splice(i, 3, {
          type: "image",
          url: u,
          alt: a
        });
      });
    }
  }
  function eJ(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let eW = e => {
    var t;
    var r;
    let i = e.match(/^(?<prefix>[\s]+)```/);
    if (i && (r = (t = i.groups) === null || t === undefined ? undefined : t.prefix.length) !== null && r !== undefined) {
      return r;
    } else {
      return null;
    }
  };
  class e0 extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      eJ(this, "name", "set_code_block_indent");
      eJ(this, "modifier", (e, t) => {
        let {
          source: i,
          parent: n,
          insertAfter: l,
          skip: o
        } = t;
        if (markdownParserSerializer.hasNodeChildren(e) && n) {
          o();
          return;
        }
        if (!markdownParserSerializer.hasValue(e) || e.type !== "code") {
          return;
        }
        let {
          start: u
        } = e.position ?? {};
        if (!u) {
          return;
        }
        let {
          line: a
        } = u;
        let s = genericUtilFunctions.safeGetProperty(i.split("\n"), a - 1);
        let {
          meta: f,
          lang: p
        } = e;
        if (isUndefinedCheck.isUndefined(s)) {
          return;
        }
        let v = eW(s);
        if (v === null) {
          return;
        }
        let d = `__indent=${v}`;
        let m = f ? `${d} ${f}` : d;
        l([{
          ...e,
          meta: m,
          lang: p ?? "plaintext"
        }], true);
      });
    }
  }
  function e1(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class e9 extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      e1(this, "name", "insert_ellipsis");
      e1(this, "config", {
        isReverse: true,
        priority: hookPhaseEnum.HookPhase.AfterAll
      });
      e1(this, "modifier", (e, t) => {
        let {
          insertAfter: r,
          stop: i
        } = t;
        if (!markdownParserSerializer.hasChildren(e) || markdownParserSerializer.isNodeType(e, "link")) {
          i();
          if (markdownParserSerializer.isNodeType(e, "text")) {
            r([{
              type: "text",
              value: `${e.value}...`
            }], true);
          }
          if (markdownParserSerializer.isNodeType(e, "link", "inlineCode")) {
            r([{
              type: "text",
              value: "..."
            }], false);
          }
        }
      });
    }
  }
  function e6(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let e2 = {
    type: "html",
    value: "<span class=\"indicator\" />"
  };
  class e3 extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      e6(this, "name", "insert_indicator");
      e6(this, "config", {
        isReverse: true,
        priority: hookPhaseEnum.HookPhase.AfterAll
      });
      e6(this, "modifier", (e, t) => {
        let {
          insertAfter: r,
          stop: i
        } = t;
        if (markdownParserSerializer.isImageNode(e)) {
          i();
          return;
        }
        if (markdownParserSerializer.hasChildren(e) && e.type === "listItem" && !markdownParserSerializer.serializeAst(e.children, true).trim()) {
          i();
          r([{
            ...e,
            children: [e2]
          }], true);
          return;
        }
        if (markdownParserSerializer.hasValue(e)) {
          i();
          if (e.type === "code") {
            return;
          }
          r([e2]);
        }
      });
    }
  }
  function e5(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let e8 = (e, t) => {
    let {
      insertAfter: i,
      stop: n
    } = t;
    if (markdownParserSerializer.isNodeType(e, "link")) {
      n();
      return;
    }
    if (markdownParserSerializer.hasNodeChildren(e) || (n(), !markdownParserSerializer.isNodeType(e, "text"))) {
      return;
    }
    let l = genericUtilFunctions.findMapResult([/(?<prefix>.*)\[$/, /(?<prefix>.*)\[\^[^\]\n\^]*$/], t => {
      var r;
      return (r = e.value.match(t)) !== null && r !== undefined && r;
    });
    if (!l) {
      return;
    }
    let [o, u] = l;
    if (!u) {
      return;
    }
    let a = u.groups?.prefix;
    i(a ? [{
      type: "text",
      value: a
    }] : [], true);
  };
  let e4 = (e, t) => {
    let {
      insertAfter: r,
      skip: i
    } = t;
    let n = /\[\^[^\]\n\^]+?\]/g;
    if (markdownParserSerializer.isNodeType(e, "link")) {
      i();
      return;
    }
    if (markdownParserSerializer.isNodeType(e, "text") && n.test(e.value)) {
      r([{
        type: "text",
        value: e.value.replace(n, "")
      }], true);
    }
  };
  class e7 extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      e5(this, "name", "autofix_truncated_footnote");
      e5(this, "config", {
        isReverse: true,
        fixEndingOnly: true,
        priority: hookPhaseEnum.HookPhase.After
      });
      e5(this, "modifier", [e8, e4]);
    }
  }
  function te(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class tt extends pluginPipelineProcessor.PluginBase {
    constructor(...e) {
      super(...e);
      te(this, "name", "remove_long_spaces");
      te(this, "modifier", e => {
        let {
          source: t
        } = e;
        return t.replace(/[ ]{500,}/g, e => e.slice(0, 500));
      });
    }
  }
  function tr(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class ti extends pluginPipelineProcessor.PluginBase {
    constructor(...e) {
      super(...e);
      tr(this, "name", "complete_unpaired_code_block");
      tr(this, "modifier", e => {
        let {
          source: t
        } = e;
        let r = t.split("\n").filter(e => /^[\s]*```[^`]*$/.test(e));
        if (r.length && r.length % 2 != 0) {
          return `${t.trimEnd()}
\`\`\``;
        } else {
          return t;
        }
      });
    }
  }
  function tn(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class tl extends pluginPipelineProcessor.PluginBase {
    constructor(...e) {
      super(...e);
      tn(this, "name", "complete_truncated_link");
      tn(this, "modifier", e => {
        let {
          source: t
        } = e;
        return t.replace(/(^|[^!])\[(?<text>[^\]\n]+)\]\([^\)\n]*$/, "$1[$2](#)");
      });
    }
  }
  function to(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class tu extends pluginPipelineProcessor.PluginBase {
    constructor(...e) {
      super(...e);
      to(this, "name", "convert_full_math_pandoc_latex");
      to(this, "modifier", e => {
        let {
          source: t
        } = e;
        return t.replace(/\\\(([\s\S]*?)\\\)/g, (e, t) => mathEncodingUtil.encodeInlineMath(t)).replace(/\\\[([\s\S]*?)\\\]/g, (e, t) => mathEncodingUtil.encodeBlockMath(t));
      });
    }
  }
  function ta(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class ts extends pluginPipelineProcessor.PluginBase {
    constructor(...e) {
      super(...e);
      ta(this, "name", "convert_ending_math_pandoc_latex");
      ta(this, "config", {
        fixEndingOnly: true
      });
      ta(this, "modifier", [e => {
        let {
          source: r,
          katex: i
        } = e;
        if (!i) {
          return r;
        }
        let n = r.match(/\\\((?<ending>[\s\S]*?)$/);
        if (!(n == null ? undefined : n.groups) || isUndefinedCheck.isUndefined(n.index)) {
          return r;
        }
        let l = n.groups.ending ?? "";
        if (l.match(/((\\\()|(\\\)))/)) {
          return r;
        }
        let o = l.slice(0, katexMathParserUtils.getValidMathLength({
          src: l,
          katex: i
        })).trim();
        let u = r.slice(0, n.index);
        if (o) {
          return `${u}${mathEncodingUtil.encodeInlineMath(o)}`;
        } else {
          return u;
        }
      }, e => {
        let {
          source: r,
          katex: i
        } = e;
        if (!i) {
          return r;
        }
        let n = r.match(/\\\[(?<ending>[\s\S]*?)$/);
        if (!(n == null ? undefined : n.groups) || isUndefinedCheck.isUndefined(n.index)) {
          return r;
        }
        let l = n.groups.ending ?? "";
        if (l.match(/((\\\[)|(\\\]))/)) {
          return r;
        }
        let o = l.slice(0, katexMathParserUtils.getValidMathLength({
          src: l,
          katex: i
        })).trim();
        let u = r.slice(0, n.index);
        if (o) {
          return `${u}${mathEncodingUtil.encodeBlockMath(o)}`;
        } else {
          return u;
        }
      }]);
    }
  }
  let tf = e => {
    let {
      astPlugins: t,
      autoSpacing: r = true,
      autolink: i = true,
      imageEmphasisTitle: n = false,
      indentFencedCode: u = true,
      showIndicator: a = false,
      showEllipsis: s = false,
      enableFootnote: f = false,
      dollarMath: c = true,
      latexMath: p = true
    } = e;
    let v = [new d(), new h(), new b(), new S(), new Z(), new X(), new T(), new R(), new L(), new q(), new V(), new H(), new W(), new et(), new ei(), new eu(), new ec()];
    if (c) {
      v.push(new e_());
    }
    if (p) {
      v.push(new ej());
    }
    if (i) {
      v.push(new eB());
    }
    if (r) {
      v.push(new eG());
    }
    if (n) {
      v.push(new eF());
    }
    if (u) {
      v.push(new e0());
    }
    if (s) {
      v.push(new e9());
    }
    if (a) {
      v.push(new e3());
    }
    if (f) {
      v.push(new e7());
    }
    if (arrayIsArrayUtil.isArray(t)) {
      v.push(...t);
    }
    if (isFunctionUtil_1.isFunction(t)) {
      v = t(v);
    }
    return v;
  };
  let tc = e => {
    let {
      sourcePlugins: t,
      latexMath: r = true
    } = e;
    let i = [new tt(), new ti(), new tl()];
    if (r) {
      i.push(new tu(), new ts());
    }
    if (arrayIsArrayUtil.isArray(t)) {
      i.push(...t);
    }
    if (isFunctionUtil_1.isFunction(t)) {
      i = t(i);
    }
    return i;
  };
  let tp = e => {
    let {
      source: t,
      astPlugins: r,
      sourcePlugins: i,
      parseAst: n = true,
      indentedCode: l = false,
      enableFootnote: o,
      insertedElements: u,
      fixEnding: a,
      enabledHtmlTags: v,
      looseTruncateDataSlot: d,
      removeTruncatedImage: m,
      enableDollarTex: h,
      katex: y
    } = e;
    try {
      let e;
      let g = t;
      if (u) {
        g = safeTextInsertionUtil.applyTextInsertions(g, u);
      }
      if (i) {
        g = pluginPipelineProcessor.runPlugins({
          source: g,
          plugins: i,
          fixEnding: a,
          katex: y
        });
      }
      if (n) {
        e = markdownParserSerializer.parseMarkdown(g, {
          enableIndentedCode: l,
          enableFootnote: o,
          enableDollarTex: h
        });
      }
      if (r && e) {
        e = markdownAstPluginEngine.processAst({
          ast: e,
          plugins: r,
          source: g,
          fixEnding: a,
          enabledHtmlTags: v,
          looseTruncateDataSlot: d,
          removeTruncatedImage: m,
          katex: y
        });
      }
      return {
        ast: e,
        source: e ? markdownParserSerializer.serializeMarkdown(e, {
          enableFootnote: o,
          enableDollarTex: h
        }) : g
      };
    } catch (e) {
      return {
        source: t
      };
    }
  };
  let tv = e => {
    let {
      source: t,
      processAst: r = true,
      processSource: i = true,
      showEllipsis: n,
      showIndicator: l,
      imageEmphasisTitle: o,
      indentFencedCode: u,
      indentedCode: a = false,
      insertedElements: s,
      enableFootnote: f,
      autolink: c,
      autoSpacing: p,
      astPlugins: v,
      sourcePlugins: d,
      fixEnding: m = false,
      enabledHtmlTags: h = false,
      looseTruncateDataSlot: y = false,
      removeTruncatedImage: g = false,
      latexMath: b,
      dollarMath: x,
      katex: _
    } = e;
    let w = tf({
      autolink: c,
      autoSpacing: p,
      imageEmphasisTitle: o,
      indentFencedCode: u,
      enableFootnote: f,
      showEllipsis: n,
      showIndicator: l,
      astPlugins: v,
      latexMath: b,
      dollarMath: x
    });
    let $ = tc({
      sourcePlugins: d,
      latexMath: b
    });
    return tp({
      source: t,
      astPlugins: r ? w : undefined,
      sourcePlugins: i ? $ : undefined,
      parseAst: r,
      indentedCode: a,
      insertedElements: s,
      fixEnding: m,
      enabledHtmlTags: h,
      looseTruncateDataSlot: y,
      removeTruncatedImage: g,
      enableFootnote: f,
      enableDollarTex: x,
      katex: _
    });
  };
  let td = e => {
    let {
      insertedElements: t
    } = e;
    let r = objectValuesHelper.getObjectValues(throttledOmitPathStringify.omitPathStringify(e, ["insertedElements", "astPlugins", "sourcePlugins"]));
    return reactCoreLibraryReexport.useMemo(() => tv(e), [...r, t == null ? undefined : t.length]);
  };
  require.d(exports, {
    processMarkdown: function () {
      return tv;
    },
    useMarkdownProcessor: function () {
      return td;
    }
  });
}