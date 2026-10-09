// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'PdfDocumentRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 791284
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var inlineCodeRenderer_1 = require("inline-code-renderer_1") /*id: 919823*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var stringMatchAllPolyfillWrapper = require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var c = stringMatchAllPolyfillWrapper;
  var urlRegexConstants = require("url-regex-constants") /*id: 631514*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var highlightjsLanguageResolver = require("highlightjs-language-resolver") /*id: 553850*/;
  (o = {}).HEADING = "heading";
  o.ORDERED = "ordered";
  o.BULLET = "bullet";
  o.TODO = "todo";
  o.QUOTE_CONTAINER = "quote_container";
  o.CODE = "code";
  o.DIVIDER = "divider";
  o.BOLD = "bold";
  o.ITALIC = "italic";
  o.BOLDANDITALIC = "boldanditalic";
  o.BOLD2 = "bold2";
  o.ITALIC2 = "italic2";
  o.BOLDANDITALIC2 = "boldanditalic2";
  o.UNDERLINE = "underline";
  o.STRIKETHROUGH = "strikethrough";
  o.INLINECODE = "inlinecode";
  o.EQUATION = "equation";
  let g = o;
  (i = {}).PAIR = "pair";
  i.ALONE = "ALONE";
  let m = i;
  let k = /^([`]{3})(\S*)\s([\s\S]*)\s([`]{3})/;
  let T = /^([`]{3})(\S*)\s([\s\S]*)/;
  let v = /^((\[x?]\s)|(【x?】\s))([\s\S]*)/;
  let y = /^(-\s)(\[(x|\s)]\s)([\s\S]*)/;
  let b = [{
    name: g.HEADING,
    check: (e, r) => {
      let n = e.match(/^(#{1,9}\s)(\S*|\S+[\s\S]*)$/);
      if (!n || isUndefinedCheck.isUndefined(n.index)) {
        return null;
      }
      let o = n[1].length - 1;
      if (r && r.headingLevel && o === r.headingLevel) {
        return null;
      } else {
        return {
          blockType: `heading${o}`,
          delimiters: [{
            marker: n[1],
            start: n.index,
            end: n.index + n[1].length - 1,
            length: n[1].length,
            type: m.ALONE
          }]
        };
      }
    }
  }, {
    name: g.ORDERED,
    check: e => {
      let r = e.match(/^(\d+)([.。]\s)([\s\S]*)/);
      if (!r || isUndefinedCheck.isUndefined(r.index)) {
        return null;
      } else {
        return {
          blockType: docBlockTypeConstants.blockTypeConstants.ORDERED,
          seq: r[1],
          delimiters: [{
            marker: r[1] + r[2],
            start: r.index,
            end: r.index + (r[1] + r[2]).length - 1,
            length: (r[1] + r[2]).length,
            type: m.ALONE
          }]
        };
      }
    }
  }, {
    name: g.BULLET,
    check: e => {
      let r = e.match(/^([-*+]\s)([\s\S]*)/);
      if (!r || isUndefinedCheck.isUndefined(r.index) || e.match(y)) {
        return null;
      } else {
        return {
          blockType: docBlockTypeConstants.blockTypeConstants.BULLET,
          delimiters: [{
            marker: r[1],
            start: r.index,
            end: r.index + r[1].length - 1,
            length: r[1].length,
            type: m.ALONE
          }]
        };
      }
    }
  }, {
    name: g.TODO,
    check: e => {
      let r = e.match(v);
      if (!r || isUndefinedCheck.isUndefined(r.index)) {
        return null;
      } else {
        return {
          blockType: docBlockTypeConstants.blockTypeConstants.TODO,
          done: r[1][1] === "x",
          delimiters: [{
            marker: r[1],
            start: r.index,
            end: r.index + r[1].length - 1,
            length: r[1].length,
            type: m.ALONE
          }]
        };
      }
    }
  }, {
    name: g.TODO,
    check: e => {
      let r = e.match(y);
      if (!r || isUndefinedCheck.isUndefined(r.index)) {
        return null;
      } else {
        return {
          blockType: docBlockTypeConstants.blockTypeConstants.TODO,
          done: r[2][1] === "x",
          delimiters: [{
            marker: r[1] + r[2],
            start: r.index,
            end: r.index + (r[1] + r[2]).length - 1,
            length: (r[1] + r[2]).length,
            type: m.ALONE
          }]
        };
      }
    }
  }, {
    name: g.DIVIDER,
    check: e => {
      let r = e.match(/^([-]{3})(\s*)$/);
      if (!r || isUndefinedCheck.isUndefined(r.index)) {
        return null;
      } else {
        return {
          blockType: docBlockTypeConstants.blockTypeConstants.DIVIDER,
          delimiters: [{
            marker: r[1],
            start: r.index,
            end: r.index + r[1].length - 1,
            length: r[1].length,
            type: m.ALONE
          }]
        };
      }
    }
  }, {
    name: g.DIVIDER,
    check: e => {
      let r = e.match(/^([\*]{3})(\s)*$/);
      if (!r || isUndefinedCheck.isUndefined(r.index)) {
        return null;
      } else {
        return {
          blockType: docBlockTypeConstants.blockTypeConstants.DIVIDER,
          delimiters: [{
            marker: r[1],
            start: r.index,
            end: r.index + r[1].length,
            length: r[1].length,
            type: m.ALONE
          }]
        };
      }
    }
  }, {
    name: g.QUOTE_CONTAINER,
    check: e => {
      let r = e.match(/^([>|》]\s)([\s\S]*)$/);
      if (!r || isUndefinedCheck.isUndefined(r.index)) {
        return null;
      } else {
        return {
          usedToBeQuote: true,
          delimiters: [{
            marker: r[1],
            start: r.index,
            end: r.index + r[1].length - 1,
            length: r[1].length,
            type: m.ALONE
          }]
        };
      }
    }
  }, {
    name: g.CODE,
    check: e => {
      let r = e.match(k);
      if (!r || isUndefinedCheck.isUndefined(r.index)) {
        return null;
      }
      let n = r[2] || "";
      let o = highlightjsLanguageResolver.resolveLanguage(decodeURIComponent(n));
      return {
        blockType: docBlockTypeConstants.blockTypeConstants.CODE,
        language: o,
        delimiters: [{
          marker: r[1],
          start: r.index,
          end: r.index + r[0].length - 1,
          length: r[1].length + 1,
          type: m.PAIR
        }, {
          marker: n,
          start: r.index + r[1].length,
          end: r.index + (r[1] + r[2]).length - 1,
          length: r[2].length,
          type: m.ALONE
        }]
      };
    }
  }, {
    name: g.CODE,
    check: e => {
      let r = e.match(T);
      if (!r || isUndefinedCheck.isUndefined(r.index) || e.match(k)) {
        return null;
      }
      let n = r[2] || "";
      let o = highlightjsLanguageResolver.resolveLanguage(decodeURIComponent(n));
      return {
        blockType: docBlockTypeConstants.blockTypeConstants.CODE,
        language: o,
        delimiters: [{
          marker: r[1] + n,
          start: r.index,
          end: r.index + (r[1] + n).length,
          length: (r[1] + n).length + 1,
          type: m.ALONE
        }]
      };
    }
  }];
  var editorBoldRendererPlugin_1 = require("editor-bold-renderer-plugin_1") /*id: 128781*/;
  var editorItalicPluginExtension = require("editor-italic-plugin-extension") /*id: 913509*/;
  var strikethroughFormatPlugin = require("strikethrough-format-plugin") /*id: 849875*/;
  var underlineRendererExtension = require("underline-renderer-extension") /*id: 669460*/;
  let R = /\*\*(\S[\s\S]*?)\*\*/g;
  let B = /__(\S[\s\S]*?)__/g;
  let x = /\*([^\s*][\s\S]*?)\*/g;
  let A = /_([^\s_][\s\S]*?)_/g;
  let C = /\*\*\*(\S[\s\S]*?)\*\*\*/g;
  let O = /___(\S[\s\S]*?)___/g;
  let P = /~~([\s\S]+?)~~/g;
  let w = /~([^\s~][\s\S]*?)~/g;
  let L = /\$\$([\s\S]+?)\$\$/g;
  let M = /\$([^\s$][\s\S]*?)\$/g;
  function D(e, r) {
    let n = "";
    for (let e = 0; e < r; e++) {
      n += "X";
    }
    return n + e + n;
  }
  function N(e, r, n) {
    return !!e.length && (r === 0 || e[r - 1] === " ") && (n === e.length - 1 || e[n + 1] === " ");
  }
  let $ = [{
    name: g.BOLD,
    check: e => {
      let r = e.replace(C, (e, r) => /\S$/.test(r) ? D(r, 3) : e);
      let n = c(r, R);
      let o = {
        delimiters: []
      };
      for (let e of n) {
        if (!isUndefinedCheck.isUndefined(e.index)) {
          let r = e.index;
          let n = e.index + e[0].length - 1;
          o.delimiters.push(...F("**", r, n, {
            bold: "true"
          }, [editorBoldRendererPlugin_1.BoldRendererPlugin.KEY]));
        }
      }
      if (o.delimiters.length) {
        return o;
      } else {
        return null;
      }
    }
  }, {
    name: g.BOLD2,
    check: e => {
      let r = e.replace(O, (e, r) => /\S$/.test(r) ? D(r, 3) : e);
      let n = c(r, B);
      let o = {
        delimiters: []
      };
      for (let e of n) {
        if (!isUndefinedCheck.isUndefined(e.index)) {
          let n = e.index;
          let i = e.index + e[0].length - 1;
          if (!N(r, n, i)) {
            continue;
          }
          o.delimiters.push(...F("__", n, i, {
            bold: "true"
          }, [editorBoldRendererPlugin_1.BoldRendererPlugin.KEY]));
        }
      }
      if (o.delimiters.length) {
        return o;
      } else {
        return null;
      }
    }
  }, {
    name: g.ITALIC,
    check: e => {
      let r = e.replace(C, (e, r) => /\S$/.test(r) ? D(r, 3) : e).replace(R, (e, r) => /\S$/.test(r) ? D(r, 2) : e);
      let n = c(r, x);
      let o = {
        delimiters: []
      };
      for (let e of n) {
        if (!isUndefinedCheck.isUndefined(e.index)) {
          let n = e.index;
          let i = e.index + e[0].length - 1;
          if (!N(r, n, i)) {
            continue;
          }
          o.delimiters.push(...F("*", n, i, {
            italic: "true"
          }, [editorItalicPluginExtension.CustomItalicPlugin.KEY]));
        }
      }
      if (o.delimiters.length) {
        return o;
      } else {
        return null;
      }
    }
  }, {
    name: g.ITALIC2,
    check: e => {
      let r = e.replace(O, (e, r) => /\S$/.test(r) ? D(r, 3) : e).replace(B, (e, r) => /\S$/.test(r) ? D(r, 2) : e);
      let n = c(r, A);
      let o = {
        delimiters: []
      };
      for (let e of n) {
        if (!isUndefinedCheck.isUndefined(e.index)) {
          let n = e.index;
          let i = e.index + e[0].length - 1;
          if (!N(r, n, i)) {
            continue;
          }
          o.delimiters.push(...F("_", n, i, {
            italic: "true"
          }, [editorItalicPluginExtension.CustomItalicPlugin.KEY]));
        }
      }
      if (o.delimiters.length) {
        return o;
      } else {
        return null;
      }
    }
  }, {
    name: g.BOLDANDITALIC,
    check: e => {
      let r = c(e, C);
      let n = {
        delimiters: []
      };
      for (let e of r) {
        if (!isUndefinedCheck.isUndefined(e.index)) {
          n.delimiters.push(...F("***", e.index, e.index + e[0].length - 1, {
            bold: "true",
            italic: "true"
          }, [editorBoldRendererPlugin_1.BoldRendererPlugin.KEY, editorItalicPluginExtension.CustomItalicPlugin.KEY]));
        }
      }
      if (n.delimiters.length) {
        return n;
      } else {
        return null;
      }
    }
  }, {
    name: g.BOLDANDITALIC2,
    check: e => {
      let r = c(e, O);
      let n = {
        delimiters: []
      };
      for (let o of r) {
        if (!isUndefinedCheck.isUndefined(o.index)) {
          let r = o.index;
          let i = o.index + o[0].length - 1;
          if (!N(e, r, i)) {
            continue;
          }
          n.delimiters.push(...F("___", r, i, {
            bold: "true",
            italic: "true"
          }, [editorBoldRendererPlugin_1.BoldRendererPlugin.KEY, editorItalicPluginExtension.CustomItalicPlugin.KEY]));
        }
      }
      if (n.delimiters.length) {
        return n;
      } else {
        return null;
      }
    }
  }, {
    name: g.STRIKETHROUGH,
    check: e => {
      let r = c(e, P);
      let n = {
        delimiters: []
      };
      for (let o of r) {
        if (!isUndefinedCheck.isUndefined(o.index)) {
          let r = o.index;
          let i = o.index + o[0].length - 1;
          if (!N(e, r, i)) {
            continue;
          }
          n.delimiters.push(...F("~~", r, i, {
            strikethrough: "true"
          }, [strikethroughFormatPlugin.StrikethroughFormatPlugin.KEY]));
        }
      }
      if (n.delimiters.length) {
        return n;
      } else {
        return null;
      }
    }
  }, {
    name: g.UNDERLINE,
    check: e => {
      let r = e.replace(P, (e, r) => /\S$/.test(r) ? D(r, 2) : e);
      let n = c(r, w);
      let o = {
        delimiters: []
      };
      for (let r of n) {
        if (!isUndefinedCheck.isUndefined(r.index)) {
          let n = r.index;
          let i = r.index + r[0].length - 1;
          if (!N(e, n, i)) {
            continue;
          }
          o.delimiters.push(...F("~", n, i, {
            underline: "true"
          }, [underlineRendererExtension.UnderlineRendererExtension.KEY]));
        }
      }
      if (o.delimiters.length) {
        return o;
      } else {
        return null;
      }
    }
  }, {
    name: g.INLINECODE,
    check: e => {
      let r = c(e, /(`)([^`]+[\s\S]*?)(`)/g);
      let n = {
        delimiters: []
      };
      for (let e of r) {
        if (!isUndefinedCheck.isUndefined(e.index)) {
          n.delimiters.push(...F("`", e.index, e.index + e[0].length - 1, {
            inlineCode: "true"
          }, [inlineCodeRenderer_1.InlineCodeRenderer.KEY]));
        }
      }
      if (n.delimiters.length) {
        return n;
      } else {
        return null;
      }
    }
  }, {
    name: g.EQUATION,
    check: e => {
      let r = c(e, L);
      let n = {
        delimiters: []
      };
      for (let o of r) {
        if (!isUndefinedCheck.isUndefined(o.index)) {
          let r = o.index;
          let i = o.index + o[0].length - 1;
          if (!N(e, r, i)) {
            continue;
          }
          n.delimiters.push(...F("$$", r, i, {
            equation: o[1]
          }, [docxInlineBlockRenderers.EquationRendererClass.KEY]));
        }
      }
      if (n.delimiters.length) {
        return n;
      } else {
        return null;
      }
    }
  }, {
    name: g.EQUATION,
    check: e => {
      let r = c(e, M);
      let n = {
        delimiters: []
      };
      for (let c of r) {
        if (!isUndefinedCheck.isUndefined(c.index)) {
          var o;
          var i;
          var l;
          var s;
          let r = c.index;
          let a = c.index + c[0].length - 1;
          if (!N(e, r, a) || (o = e, i = r, l = a, s = "$", i !== 0 && l !== o.length - 1 && (o[i - 1] === "$" || o[l + 1] === s))) {
            continue;
          }
          n.delimiters.push(...F("$", r, a, {
            equation: c[1]
          }, [docxInlineBlockRenderers.EquationRendererClass.KEY]));
        }
      }
      if (n.delimiters.length) {
        return n;
      } else {
        return null;
      }
    }
  }];
  function F(e, r, n, o, i) {
    return [{
      marker: e,
      start: r,
      end: n,
      length: e.length,
      mark: o,
      type: m.PAIR,
      inlineTypes: i
    }];
  }
  function H(e, r, n) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = n;
    }
    return e;
  }
  class U {
    check(e, r) {
      let n = [];
      let o = [];
      if (!this.options.onlyInlineRule) {
        this.blockRules.forEach(o => {
          let i = o.check(e, r);
          if (i) {
            n.push(i);
          }
        });
      }
      if (!this.options.onlyBlockRule) {
        this.inlineRules.forEach(r => {
          let n = r.check(e);
          if (n) {
            o.push(n);
          }
        });
      }
      return {
        blockMatchResults: n,
        inlineMatchResults: o
      };
    }
    constructor(e) {
      H(this, "options", undefined);
      H(this, "blockRules", undefined);
      H(this, "inlineRules", undefined);
      this.options = e;
      this.blockRules = b.filter(r => !e.disableRules.includes(r.name));
      this.inlineRules = $.filter(r => !e.disableRules.includes(r.name));
    }
  }
  let Z = ["DIV", "H1", "H2", "H3", "H4", "H5", "H6", "P", "HR", "FORM", "UL", "DL", "OL", "LI"];
  let j = [g.HEADING, g.BULLET, g.ORDERED, g.CODE, g.DIVIDER, g.QUOTE_CONTAINER, g.BOLD2, g.ITALIC2, g.BOLDANDITALIC2];
  var contentFormatConstants = require("content-format-constants") /*id: 266577*/;
  class z {
    isBlockElement(e) {
      let r = getComputedStyle(e).display === "inline";
      let n = getComputedStyle(e).display === "block";
      return Z.includes(e.nodeName) && !r || n;
    }
    isTextNodeAtHead(e) {
      let r = e;
      if (r.nodeType === 3) {
        if (!r.parentElement) {
          return false;
        }
        r = r.parentElement;
      }
      if (this.isBlockElement(r)) {
        return true;
      }
      while (r.parentElement && !this.isBlockElement(r.parentElement)) {
        r = r.parentElement;
      }
      return !!r.parentElement && (r.parentElement.childNodes[0].nodeName === "META" ? r.parentElement.childNodes[1] : r.parentElement.childNodes[0]) === r;
    }
    isNodeSingleLine(e) {
      let r = e;
      let n = 0;
      while (r.parentElement && r.id !== "block-root") {
        r = r.parentElement;
      }
      for (let e of r.children) {
        if (this.isBlockElement(e)) {
          n += 1;
        }
      }
      return n <= 1;
    }
    getDisabledRulesByBlockType(e) {
      if (e.type === docBlockTypeConstants.blockTypeConstants.ORDERED) {
        return [g.ORDERED];
      }
      if (e.type === docBlockTypeConstants.blockTypeConstants.BULLET) {
        return [g.BULLET];
      }
      if (e.type === docBlockTypeConstants.blockTypeConstants.TODO) {
        return [g.TODO];
      }
      if (e.isInQuoteContainer) {
        return [g.QUOTE_CONTAINER];
      }
      if (e.isInCallout) {
        return [g.CODE, g.DIVIDER];
      } else {
        return [];
      }
    }
    getDisabledRulesByPastePos(e) {
      if (e.isPasteIntoStartPos) {
        return [];
      } else {
        return [g.BOLD2, g.ITALIC2, g.BOLDANDITALIC2];
      }
    }
    getDisabledRules(e) {
      let r = this.getDisabledRulesByBlockType(e);
      let n = this.getDisabledRulesByPastePos(e);
      return r.concat(n);
    }
    getParseOptions(e) {
      let r = {};
      if (docBlockTypeConstants.headingTypeArray.includes(e.type)) {
        let n = e.type.match(/heading([1-9])/);
        if (n) {
          Object.assign(r, {
            headingLevel: parseInt(n[1])
          });
        }
      }
      return r;
    }
    getProtectAreaPos(e) {
      let {
        text: r
      } = e;
      let n = [];
      let o = c(r, urlRegexConstants.commonTldRegex);
      if (o) {
        for (let e of o) {
          if (!isUndefinedCheck.isUndefined(e.index)) {
            n.push({
              start: e.index,
              end: e.index + e[0].length - 1
            });
          }
        }
      }
      if (e.type === contentFormatConstants.contentType.HTML) {
        let {
          nodes: r
        } = e.state.data;
        if (r && r.length) {
          let e = 0;
          r.forEach(r => {
            if (r.mark && r.mark.link && r.text.length >= 1) {
              n.push({
                start: e,
                end: e + r.text.length - 1
              });
            }
            if (r.mark && r.mark.inlineblock && r.inlineblock && r.text.length >= 1) {
              n.push({
                start: e,
                end: e + r.text.length - 1,
                protectedProperty: {
                  inlineblock: r.inlineblock
                }
              });
            }
            e += r.text.length;
          });
        }
      }
      return n;
    }
    parse(e) {
      let r = [];
      let n = false;
      if (e.blockContext.type === docBlockTypeConstants.blockTypeConstants.CODE) {
        return this.buildDataNodes({
          text: e.text,
          delimiters: [],
          blockType: undefined
        });
      }
      let o = this.getProtectAreaPos(e);
      r.push(...this.getDisabledRules(e.blockContext));
      let i = this.getParseOptions(e.blockContext);
      if (e.type === contentFormatConstants.contentType.HTML) {
        if (!this.isTextNodeAtHead(e.state.node)) {
          r.push(...j);
        }
        if (this.isNodeSingleLine(e.state.node) && !e.blockContext.isEmpty) {
          n = true;
        }
        let {
          blockMatchResults: l,
          inlineMatchResults: a
        } = new U({
          disableRules: r,
          onlyInlineRule: n
        }).check(e.text, i);
        return this.parseHTML(e, l, a, o);
      }
      if (e.type === contentFormatConstants.contentType.PLAINTEXT) {
        if (!/\n/.test(e.text) && !e.blockContext.isEmpty) {
          n = true;
        }
        let {
          blockMatchResults: l,
          inlineMatchResults: a
        } = new U({
          disableRules: r,
          onlyInlineRule: n
        }).check(e.text, i);
        return this.parsePlainText(e, l, a, o);
      }
    }
    parseHTML(e, r, n, o) {
      let i = [];
      let l = [];
      r.forEach(r => {
        if (r.blockType) {
          e.state.data.type = r.blockType;
        }
        if (r.usedToBeQuote) {
          e.state.context.usedToBeQuote = true;
        }
        if (r.seq) {
          e.state.context.orderedListNumber = r.seq;
        }
        e.state.data.done = r.done;
        if (r.language) {
          e.state.data.language = r.language;
        }
        i.push(...r.delimiters);
      });
      n.forEach(r => {
        let n = this.filterDelimitersByTargetBlockType(r.delimiters, e.state.context.textType);
        l.push(...n);
      });
      return this.buildDataNodes({
        text: e.text,
        delimiters: [...i, ...l],
        blockType: e.state.data.type,
        originalMarks: e.state.originalMarks,
        protectAreaPos: o
      });
    }
    parsePlainText(e, r, n, o) {
      let i = [];
      let l = [];
      r.forEach(r => {
        if (r.blockType) {
          e.state.blockType = r.blockType;
        }
        if (r.usedToBeQuote) {
          e.state.usedToBeQuote = true;
        }
        if (r.seq) {
          e.state.orderedListNumber = r.seq;
        }
        e.state.done = r.done;
        if (r.language) {
          e.state.language = r.language;
        }
        i.push(...r.delimiters);
      });
      n.forEach(r => {
        let n = this.filterDelimitersByTargetBlockType(r.delimiters, e.state.blockType);
        l.push(...n);
      });
      return this.buildDataNodes({
        text: e.text,
        delimiters: [...i, ...l],
        blockType: e.state.blockType,
        originalMarks: undefined,
        protectAreaPos: o
      });
    }
    filterDelimitersByTargetBlockType(e, r) {
      if (!r) {
        return e;
      }
      let n = [];
      if (r === docBlockTypeConstants.blockTypeConstants.CODE) {
        n.push(inlineCodeRenderer_1.InlineCodeRenderer.KEY);
      }
      return e.filter(e => {
        var r;
        return !((r = e.inlineTypes) === null || r === undefined ? undefined : r.find(e => n.includes(e)));
      });
    }
    transformInlineMarkText(e, r, n) {
      if (n === docBlockTypeConstants.blockTypeConstants.CODE && r[docxInlineBlockRenderers.EquationRendererClass.KEY]) {
        let n = r[docxInlineBlockRenderers.EquationRendererClass.KEY];
        let o = n.lastIndexOf("\n") === n.length - 1 ? n.slice(0, -1) : n;
        e = `$$${o}$$`;
        delete r[docxInlineBlockRenderers.EquationRendererClass.KEY];
      } else if (r[docxInlineBlockRenderers.EquationRendererClass.KEY]) {
        e = " ";
        r[docxInlineBlockRenderers.EquationRendererClass.KEY] += "\n";
      }
      return {
        text: e,
        mark: r
      };
    }
    buildDataNodes(e) {
      let {
        text: r,
        delimiters: n,
        originalMarks: o,
        protectAreaPos: i
      } = e;
      let l = [];
      if (!n.length && !(o == null ? undefined : o.length)) {
        return [{
          text: r,
          type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
        }];
      }
      let a = n;
      if (i && i.length) {
        a = a.filter(e => !i.find(r => e.start >= r.start && e.start <= r.end || e.end >= r.start && e.end <= r.end));
      }
      a.sort((e, r) => e.start - r.start);
      let s = [];
      a.forEach(e => {
        if (e.type === m.PAIR) {
          s.push({
            point: e.start,
            type: contentFormatConstants.insertPosition.START,
            length: e.length
          }, {
            point: e.end,
            type: contentFormatConstants.insertPosition.END,
            length: e.length
          });
        } else if (e.type === m.ALONE) {
          s.push({
            point: e.start,
            type: contentFormatConstants.insertPosition.OTHER,
            length: e.length
          });
        }
      });
      s.sort((e, r) => e.point - r.point);
      if (o && o.length) {
        o.forEach(e => {
          let r = Object.keys(e.mark);
          if (r.length && r.some(r => !!e.mark[r])) {
            if (!s.find(r => r.point === e.start && r.type === contentFormatConstants.insertPosition.START)) {
              s.push({
                point: e.start,
                type: contentFormatConstants.insertPosition.START,
                length: 0
              });
            }
            if (!s.find(r => r.point === e.end && r.type === contentFormatConstants.insertPosition.END)) {
              s.push({
                point: e.end,
                type: contentFormatConstants.insertPosition.END,
                length: 0
              });
            }
          }
        });
        s.sort((e, r) => e.point - r.point);
      }
      if (!s.length || s[0].point !== 0) {
        s.unshift({
          point: 0,
          type: contentFormatConstants.insertPosition.START,
          length: 0
        });
      }
      if (s[s.length - 1].point !== r.length - 1 || s[s.length - 1].point === 0 && s[s.length - 1].type === contentFormatConstants.insertPosition.START) {
        s.push({
          point: r.length - 1,
          type: contentFormatConstants.insertPosition.END,
          length: 0
        });
      }
      this.filterInvalidPoint(s);
      let c = this.cutIntervals(s);
      this.buildByIntervals(c, e, l);
      return l;
    }
    filterInvalidPoint(e) {
      e.forEach(r => {
        if (r.length <= 1) {
          return;
        }
        let n = [];
        if (r.type === contentFormatConstants.insertPosition.END) {
          n.push(r.point - r.length + 1, r.point - 1);
        } else {
          n.push(r.point + 1, r.point + r.length - 1);
        }
        let o = e.findIndex(e => e.point >= n[0] && e.point <= n[1]);
        if (o !== -1) {
          e.splice(o, 1);
        }
      });
    }
    cutIntervals(e) {
      let r = [];
      for (let n = 1; n < e.length; n++) {
        let o = e[n - 1].type !== contentFormatConstants.insertPosition.END ? e[n - 1].point + e[n - 1].length : e[n - 1].point + 1;
        let i = e[n].type !== contentFormatConstants.insertPosition.START ? e[n].point - e[n].length : e[n].point - 1;
        if (!(o > i)) {
          r.push([o, i]);
        }
      }
      return r;
    }
    buildByIntervals(e, r, n) {
      let {
        text: o,
        delimiters: i,
        originalMarks: l,
        blockType: a,
        protectAreaPos: s
      } = r;
      e.forEach(e => {
        let r = i.filter(r => e[0] > r.start && e[1] < r.end).map(e => e.mark).filter(e => !!e);
        let c = [];
        if (l && l.length) {
          c = l.filter(r => e[0] >= r.start && e[1] <= r.end).map(e => e.mark);
        }
        let d = {};
        c.forEach(e => Object.assign(d, e));
        r.forEach(e => Object.assign(d, e));
        let {
          text: u,
          mark: p
        } = this.transformInlineMarkText(o.slice(e[0], e[1] + 1), d, a);
        let f = {
          text: u,
          mark: p,
          type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
        };
        let g = [];
        if (s && s.length) {
          g = s.filter(r => r.start === e[0] && r.end === e[1]).filter(e => !!e).map(e => e.protectedProperty);
        }
        g.forEach(e => Object.assign(f, e));
        n.push(f);
      });
    }
  }
  require.d(exports, {
    PdfDocumentRenderer: function () {
      return z;
    }
  });
}