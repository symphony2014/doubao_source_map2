// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'codemirrorStateCore'
// - Resolved require(980017) to 'codemirror-state-core'
// - Renamed variable 'l' to 'codemirrorEditorViewCore'
// - Resolved require(928053) to 'codemirror-editor-view-core'
// - Renamed variable 'i' to 'codemirrorLanguageSupport'
// - Resolved require(976653) to 'codemirror-language-support'
// - Renamed variable 'o' to 'syntaxTreeCore'
// - Resolved require(655745) to 'syntax-tree-core'
// - Renamed variable 'u' to 'syntaxHighlightTags'
// - Resolved require(852622) to 'syntax-highlight-tags'
// - Renamed variable 'eB' to 'codemirrorHtmlLanguageSupport'
// - Resolved require(850002) to 'codemirror-html-language-support'
// - Updated imported property 'md' to 'NodeTypeProp' (module 655745)
// - Updated imported property 'mp' to 'Tree' (module 655745)
// - Updated imported property 'Jq' to 'NodeType' (module 655745)
// - Updated imported property '_b' to 'Parser' (module 655745)
// - Updated imported property 'Lj' to 'NodeTypeSet' (module 655745)
// - Updated imported property 'FE' to 'createNestedParse' (module 655745)
// - Updated imported property 'Vp' to 'SyntaxTag' (module 852622)
// - Updated imported property 'Gv' to 'defineHighlighter' (module 852622)
// - Updated imported property 'pJ' to 'defaultTags' (module 852622)
// - Updated imported property 'kU' to 'languageSupportFacet' (module 976653)
// - Updated imported property 'x0' to 'foldState' (module 976653)
// - Updated imported property 'uj' to 'indentNodeProp' (module 976653)
// - Updated imported property 'pp' to 'languageTypeProp_1' (module 976653)
// - Updated imported property 'rs' to 'foldConfigFacet' (module 976653)
// - Updated imported property 'qz' to 'getTree' (module 976653)
// - Updated imported property 'SQ' to 'LanguageSupport' (module 976653)
// - Updated imported property 'ri' to 'Language' (module 976653)
// - Updated imported property 'c6' to 'LanguageDescription' (module 976653)
// - Updated imported property 'Be' to 'ParseContext' (module 976653)
// - Updated imported property 'jT' to 'EditorSelection' (module 980017)
// - Updated imported property 'Wl' to 'StateField' (module 980017)
// - Updated imported property '$f' to 'keymapFacet' (module 928053)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 61197.8f8f0cd3.js
         * chunkId: 61197
         * moduleId: 285295
         */
module.exports = function (module, exports, require) {
  var n;
  var s;
  var codemirrorStateCore = require("codemirror-state-core") /*id: 980017*/;
  var codemirrorEditorViewCore = require("codemirror-editor-view-core") /*id: 928053*/;
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  var syntaxTreeCore = require("syntax-tree-core") /*id: 655745*/;
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  class h {
    static create(e, t, r, n, s) {
      return new h(e, t, r, n + (n << 8) + e + (t << 4) | 0, s, [], []);
    }
    constructor(e, t, r, n, s, a, l) {
      this.type = e;
      this.value = t;
      this.from = r;
      this.hash = n;
      this.end = s;
      this.children = a;
      this.positions = l;
      this.hashProp = [[syntaxTreeCore.NodeTypeProp.contextHash, n]];
    }
    addChild(e, t) {
      if (e.prop(syntaxTreeCore.NodeTypeProp.contextHash) != this.hash) {
        e = new syntaxTreeCore.Tree(e.type, e.children, e.positions, e.length, this.hashProp);
      }
      this.children.push(e);
      this.positions.push(t);
    }
    toTree(e, t = this.end) {
      let r = this.children.length - 1;
      if (r >= 0) {
        t = Math.max(t, this.positions[r] + this.children[r].length + this.from);
      }
      return new syntaxTreeCore.Tree(e.types[this.type], this.children, this.positions, t - this.from).balance({
        makeTree: (e, t, r) => new syntaxTreeCore.Tree(syntaxTreeCore.NodeType.none, e, t, r, this.hashProp)
      });
    }
  }
  (n = s ||= {})[n.Document = 1] = "Document";
  n[n.CodeBlock = 2] = "CodeBlock";
  n[n.FencedCode = 3] = "FencedCode";
  n[n.Blockquote = 4] = "Blockquote";
  n[n.HorizontalRule = 5] = "HorizontalRule";
  n[n.BulletList = 6] = "BulletList";
  n[n.OrderedList = 7] = "OrderedList";
  n[n.ListItem = 8] = "ListItem";
  n[n.ATXHeading1 = 9] = "ATXHeading1";
  n[n.ATXHeading2 = 10] = "ATXHeading2";
  n[n.ATXHeading3 = 11] = "ATXHeading3";
  n[n.ATXHeading4 = 12] = "ATXHeading4";
  n[n.ATXHeading5 = 13] = "ATXHeading5";
  n[n.ATXHeading6 = 14] = "ATXHeading6";
  n[n.SetextHeading1 = 15] = "SetextHeading1";
  n[n.SetextHeading2 = 16] = "SetextHeading2";
  n[n.HTMLBlock = 17] = "HTMLBlock";
  n[n.LinkReference = 18] = "LinkReference";
  n[n.Paragraph = 19] = "Paragraph";
  n[n.CommentBlock = 20] = "CommentBlock";
  n[n.ProcessingInstructionBlock = 21] = "ProcessingInstructionBlock";
  n[n.Escape = 22] = "Escape";
  n[n.Entity = 23] = "Entity";
  n[n.HardBreak = 24] = "HardBreak";
  n[n.Emphasis = 25] = "Emphasis";
  n[n.StrongEmphasis = 26] = "StrongEmphasis";
  n[n.Link = 27] = "Link";
  n[n.Image = 28] = "Image";
  n[n.InlineCode = 29] = "InlineCode";
  n[n.HTMLTag = 30] = "HTMLTag";
  n[n.Comment = 31] = "Comment";
  n[n.ProcessingInstruction = 32] = "ProcessingInstruction";
  n[n.Autolink = 33] = "Autolink";
  n[n.HeaderMark = 34] = "HeaderMark";
  n[n.QuoteMark = 35] = "QuoteMark";
  n[n.ListMark = 36] = "ListMark";
  n[n.LinkMark = 37] = "LinkMark";
  n[n.EmphasisMark = 38] = "EmphasisMark";
  n[n.CodeMark = 39] = "CodeMark";
  n[n.CodeText = 40] = "CodeText";
  n[n.CodeInfo = 41] = "CodeInfo";
  n[n.LinkTitle = 42] = "LinkTitle";
  n[n.LinkLabel = 43] = "LinkLabel";
  n[n.URL = 44] = "URL";
  class p {
    constructor(e, t) {
      this.start = e;
      this.content = t;
      this.marks = [];
      this.parsers = [];
    }
  }
  class c {
    constructor() {
      this.text = "";
      this.baseIndent = 0;
      this.basePos = 0;
      this.depth = 0;
      this.markers = [];
      this.pos = 0;
      this.indent = 0;
      this.next = -1;
    }
    forward() {
      if (this.basePos > this.pos) {
        this.forwardInner();
      }
    }
    forwardInner() {
      let e = this.skipSpace(this.basePos);
      this.indent = this.countIndent(e, this.pos, this.indent);
      this.pos = e;
      this.next = e == this.text.length ? -1 : this.text.charCodeAt(e);
    }
    skipSpace(e) {
      return g(this.text, e);
    }
    reset(e) {
      this.text = e;
      this.baseIndent = this.basePos = this.pos = this.indent = 0;
      this.forwardInner();
      this.depth = 1;
      while (this.markers.length) {
        this.markers.pop();
      }
    }
    moveBase(e) {
      this.basePos = e;
      this.baseIndent = this.countIndent(e, this.pos, this.indent);
    }
    moveBaseColumn(e) {
      this.baseIndent = e;
      this.basePos = this.findColumn(e);
    }
    addMarker(e) {
      this.markers.push(e);
    }
    countIndent(e, t = 0, r = 0) {
      for (let n = t; n < e; n++) {
        r += this.text.charCodeAt(n) == 9 ? 4 - r % 4 : 1;
      }
      return r;
    }
    findColumn(e) {
      let t = 0;
      for (let r = 0; t < this.text.length && r < e; t++) {
        r += this.text.charCodeAt(t) == 9 ? 4 - r % 4 : 1;
      }
      return t;
    }
    scrub() {
      if (!this.baseIndent) {
        return this.text;
      }
      let e = "";
      for (let t = 0; t < this.basePos; t++) {
        e += " ";
      }
      return e + this.text.slice(this.basePos);
    }
  }
  function f(e, t, r) {
    if (r.pos == r.text.length || e != t.block && r.indent >= t.stack[r.depth + 1].value + r.baseIndent) {
      return true;
    }
    if (r.indent >= r.baseIndent + 4) {
      return false;
    }
    let n = (e.type == s.OrderedList ? y : w)(r, t, false);
    return n > 0 && (e.type != s.BulletList || k(r, t, false) < 0) && r.text.charCodeAt(r.pos + n - 1) == e.value;
  }
  let d = {
    [s.Blockquote]: (e, t, r) => r.next == 62 && (r.markers.push(W(s.QuoteMark, t.lineStart + r.pos, t.lineStart + r.pos + 1)), r.moveBase(r.pos + (m(r.text.charCodeAt(r.pos + 1)) ? 2 : 1)), e.end = t.lineStart + r.text.length, true),
    [s.ListItem]: (e, t, r) => (!(r.indent < r.baseIndent + e.value) || !(r.next > -1)) && (r.moveBaseColumn(r.baseIndent + e.value), true),
    [s.OrderedList]: f,
    [s.BulletList]: f,
    [s.Document]: () => true
  };
  function m(e) {
    return e == 32 || e == 9 || e == 10 || e == 13;
  }
  function g(e, t = 0) {
    while (t < e.length && m(e.charCodeAt(t))) {
      t++;
    }
    return t;
  }
  function O(e, t, r) {
    while (t > r && m(e.charCodeAt(t - 1))) {
      t--;
    }
    return t;
  }
  function x(e) {
    if (e.next != 96 && e.next != 126) {
      return -1;
    }
    let t = e.pos + 1;
    while (t < e.text.length && e.text.charCodeAt(t) == e.next) {
      t++;
    }
    if (t < e.pos + 3) {
      return -1;
    }
    if (e.next == 96) {
      for (let r = t; r < e.text.length; r++) {
        if (e.text.charCodeAt(r) == 96) {
          return -1;
        }
      }
    }
    return t;
  }
  function S(e) {
    if (e.next != 62) {
      return -1;
    } else if (e.text.charCodeAt(e.pos + 1) == 32) {
      return 2;
    } else {
      return 1;
    }
  }
  function k(e, t, r) {
    if (e.next != 42 && e.next != 45 && e.next != 95) {
      return -1;
    }
    let n = 1;
    for (let t = e.pos + 1; t < e.text.length; t++) {
      let r = e.text.charCodeAt(t);
      if (r == e.next) {
        n++;
      } else if (!m(r)) {
        return -1;
      }
    }
    if (r && e.next == 45 && P(e) > -1 && e.depth == t.stack.length && t.parser.leafBlockParsers.indexOf(E.SetextHeading) > -1) {
      return -1;
    } else if (n < 3) {
      return -1;
    } else {
      return 1;
    }
  }
  function b(e, t) {
    for (let r = e.stack.length - 1; r >= 0; r--) {
      if (e.stack[r].type == t) {
        return true;
      }
    }
    return false;
  }
  function w(e, t, r) {
    if ((e.next == 45 || e.next == 43 || e.next == 42) && (e.pos == e.text.length - 1 || m(e.text.charCodeAt(e.pos + 1))) && (!r || b(t, s.BulletList) || e.skipSpace(e.pos + 2) < e.text.length)) {
      return 1;
    } else {
      return -1;
    }
  }
  function y(e, t, r) {
    let n = e.pos;
    let a = e.next;
    while (a >= 48 && a <= 57) {
      if (++n == e.text.length) {
        return -1;
      }
      a = e.text.charCodeAt(n);
    }
    if (n == e.pos || n > e.pos + 9 || a != 46 && a != 41 || n < e.text.length - 1 && !m(e.text.charCodeAt(n + 1)) || r && !b(t, s.OrderedList) && (e.skipSpace(n + 1) == e.text.length || n > e.pos + 1 || e.next != 49)) {
      return -1;
    } else {
      return n + 1 - e.pos;
    }
  }
  function T(e) {
    if (e.next != 35) {
      return -1;
    }
    let t = e.pos + 1;
    while (t < e.text.length && e.text.charCodeAt(t) == 35) {
      t++;
    }
    if (t < e.text.length && e.text.charCodeAt(t) != 32) {
      return -1;
    }
    let r = t - e.pos;
    if (r > 6) {
      return -1;
    } else {
      return r;
    }
  }
  function P(e) {
    if (e.next != 45 && e.next != 61 || e.indent >= e.baseIndent + 4) {
      return -1;
    }
    let t = e.pos + 1;
    while (t < e.text.length && e.text.charCodeAt(t) == e.next) {
      t++;
    }
    let r = t;
    while (t < e.text.length && m(e.text.charCodeAt(t))) {
      t++;
    }
    if (t == e.text.length) {
      return r;
    } else {
      return -1;
    }
  }
  let v = /^[ \t]*$/;
  let C = /-->/;
  let A = /\?>/;
  let V = [[/^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i], [/^\s*<!--/, C], [/^\s*<\?/, A], [/^\s*<![A-Z]/, />/], [/^\s*<!\[CDATA\[/, /\]\]>/], [/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i, v], [/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i, v]];
  function L(e, t, r) {
    if (e.next != 60) {
      return -1;
    }
    let n = e.text.slice(e.pos);
    for (let e = 0, t = V.length - +!!r; e < t; e++) {
      if (V[e][0].test(n)) {
        return e;
      }
    }
    return -1;
  }
  function X(e, t) {
    let r = e.countIndent(t, e.pos, e.indent);
    let n = e.countIndent(e.skipSpace(t), t, r);
    if (n >= r + 5) {
      return r + 1;
    } else {
      return n;
    }
  }
  function $(e, t, r) {
    let n = e.length - 1;
    if (n >= 0 && e[n].to == t && e[n].type == s.CodeText) {
      e[n].to = r;
    } else {
      e.push(W(s.CodeText, t, r));
    }
  }
  let q = {
    LinkReference: undefined,
    IndentedCode(e, t) {
      let r = t.baseIndent + 4;
      if (t.indent < r) {
        return false;
      }
      let n = t.findColumn(r);
      let a = e.lineStart + n;
      let l = e.lineStart + t.text.length;
      let i = [];
      let o = [];
      for ($(i, a, l); e.nextLine() && t.depth >= e.stack.length;) {
        if (t.pos == t.text.length) {
          $(o, e.lineStart - 1, e.lineStart);
          for (let r of t.markers) {
            o.push(r);
          }
        } else if (t.indent < r) {
          break;
        } else {
          if (o.length) {
            for (let e of o) {
              if (e.type == s.CodeText) {
                $(i, e.from, e.to);
              } else {
                i.push(e);
              }
            }
            o = [];
          }
          $(i, e.lineStart - 1, e.lineStart);
          for (let r of t.markers) {
            i.push(r);
          }
          l = e.lineStart + t.text.length;
          let r = e.lineStart + t.findColumn(t.baseIndent + 4);
          if (r < l) {
            $(i, r, l);
          }
        }
      }
      if (o.length && (o = o.filter(e => e.type != s.CodeText)).length) {
        t.markers = o.concat(t.markers);
      }
      e.addNode(e.buffer.writeElements(i, -a).finish(s.CodeBlock, l - a), a);
      return true;
    },
    FencedCode(e, t) {
      let r = x(t);
      if (r < 0) {
        return false;
      }
      let n = e.lineStart + t.pos;
      let a = t.next;
      let l = r - t.pos;
      let i = t.skipSpace(r);
      let o = O(t.text, t.text.length, i);
      let u = [W(s.CodeMark, n, n + l)];
      if (i < o) {
        u.push(W(s.CodeInfo, e.lineStart + i, e.lineStart + o));
      }
      for (let r = true; e.nextLine() && t.depth >= e.stack.length; r = false) {
        let n = t.pos;
        if (t.indent - t.baseIndent < 4) {
          while (n < t.text.length && t.text.charCodeAt(n) == a) {
            n++;
          }
        }
        if (n - t.pos >= l && t.skipSpace(n) == t.text.length) {
          for (let e of t.markers) {
            u.push(e);
          }
          u.push(W(s.CodeMark, e.lineStart + t.pos, e.lineStart + n));
          e.nextLine();
          break;
        }
        {
          if (!r) {
            $(u, e.lineStart - 1, e.lineStart);
          }
          for (let n of t.markers) {
            u.push(n);
          }
          let n = e.lineStart + t.basePos;
          let s = e.lineStart + t.text.length;
          if (n < s) {
            $(u, n, s);
          }
        }
      }
      e.addNode(e.buffer.writeElements(u, -n).finish(s.FencedCode, e.prevLineEnd() - n), n);
      return true;
    },
    Blockquote(e, t) {
      let r = S(t);
      return !(r < 0) && (e.startContext(s.Blockquote, t.pos), e.addNode(s.QuoteMark, e.lineStart + t.pos, e.lineStart + t.pos + 1), t.moveBase(t.pos + r), null);
    },
    HorizontalRule(e, t) {
      if (k(t, e, false) < 0) {
        return false;
      }
      let r = e.lineStart + t.pos;
      e.nextLine();
      e.addNode(s.HorizontalRule, r);
      return true;
    },
    BulletList(e, t) {
      let r = w(t, e, false);
      if (r < 0) {
        return false;
      }
      if (e.block.type != s.BulletList) {
        e.startContext(s.BulletList, t.basePos, t.next);
      }
      let n = X(t, t.pos + 1);
      e.startContext(s.ListItem, t.basePos, n - t.baseIndent);
      e.addNode(s.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + r);
      t.moveBaseColumn(n);
      return null;
    },
    OrderedList(e, t) {
      let r = y(t, e, false);
      if (r < 0) {
        return false;
      }
      if (e.block.type != s.OrderedList) {
        e.startContext(s.OrderedList, t.basePos, t.text.charCodeAt(t.pos + r - 1));
      }
      let n = X(t, t.pos + r);
      e.startContext(s.ListItem, t.basePos, n - t.baseIndent);
      e.addNode(s.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + r);
      t.moveBaseColumn(n);
      return null;
    },
    ATXHeading(e, t) {
      let r = T(t);
      if (r < 0) {
        return false;
      }
      let n = t.pos;
      let a = e.lineStart + n;
      let l = O(t.text, t.text.length, n);
      let i = l;
      while (i > n && t.text.charCodeAt(i - 1) == t.next) {
        i--;
      }
      if (i == l || i == n || !m(t.text.charCodeAt(i - 1))) {
        i = t.text.length;
      }
      let o = e.buffer.write(s.HeaderMark, 0, r).writeElements(e.parser.parseInline(t.text.slice(n + r + 1, i), a + r + 1), -a);
      if (i < t.text.length) {
        o.write(s.HeaderMark, i - n, l - n);
      }
      let u = o.finish(s.ATXHeading1 - 1 + r, t.text.length - n);
      e.nextLine();
      e.addNode(u, a);
      return true;
    },
    HTMLBlock(e, t) {
      let r = L(t, e, false);
      if (r < 0) {
        return false;
      }
      let n = e.lineStart + t.pos;
      let a = V[r][1];
      let l = [];
      let i = a != v;
      while (!a.test(t.text) && e.nextLine()) {
        if (t.depth < e.stack.length) {
          i = false;
          break;
        }
        for (let e of t.markers) {
          l.push(e);
        }
      }
      if (i) {
        e.nextLine();
      }
      let o = a == C ? s.CommentBlock : a == A ? s.ProcessingInstructionBlock : s.HTMLBlock;
      let u = e.prevLineEnd();
      e.addNode(e.buffer.writeElements(l, -n).finish(o, u - n), n);
      return true;
    },
    SetextHeading: undefined
  };
  class B {
    constructor(e) {
      this.stage = 0;
      this.elts = [];
      this.pos = 0;
      this.start = e.start;
      this.advance(e.content);
    }
    nextLine(e, t, r) {
      if (this.stage == -1) {
        return false;
      }
      let n = r.content + "\n" + t.scrub();
      let s = this.advance(n);
      return s > -1 && s < n.length && this.complete(e, r, s);
    }
    finish(e, t) {
      return (this.stage == 2 || this.stage == 3) && g(t.content, this.pos) == t.content.length && this.complete(e, t, t.content.length);
    }
    complete(e, t, r) {
      e.addLeafElement(t, W(s.LinkReference, this.start, this.start + r, this.elts));
      return true;
    }
    nextStage(e) {
      if (e) {
        this.pos = e.to - this.start;
        this.elts.push(e);
        this.stage++;
        return true;
      } else {
        if (e === false) {
          this.stage = -1;
        }
        return false;
      }
    }
    advance(e) {
      while (true) {
        if (this.stage == -1) {
          return -1;
        }
        if (this.stage == 0) {
          if (!this.nextStage(ea(e, this.pos, this.start, true))) {
            return -1;
          }
          if (e.charCodeAt(this.pos) != 58) {
            return this.stage = -1;
          }
          this.elts.push(W(s.LinkMark, this.pos + this.start, this.pos + this.start + 1));
          this.pos++;
        } else if (this.stage == 1) {
          if (!this.nextStage(en(e, g(e, this.pos), this.start))) {
            return -1;
          }
        } else {
          if (this.stage != 2) {
            return M(e, this.pos);
          }
          let t = g(e, this.pos);
          let r = 0;
          if (t > this.pos) {
            let n = es(e, t, this.start);
            if (n) {
              let t = M(e, n.to - this.start);
              if (t > 0) {
                this.nextStage(n);
                r = t;
              }
            }
          }
          r ||= M(e, this.pos);
          if (r > 0 && r < e.length) {
            return r;
          } else {
            return -1;
          }
        }
      }
    }
  }
  function M(e, t) {
    for (; t < e.length; t++) {
      let r = e.charCodeAt(t);
      if (r == 10) {
        break;
      }
      if (!m(r)) {
        return -1;
      }
    }
    return t;
  }
  class _ {
    nextLine(e, t, r) {
      let n = t.depth < e.stack.length ? -1 : P(t);
      let a = t.next;
      if (n < 0) {
        return false;
      }
      let l = W(s.HeaderMark, e.lineStart + t.pos, e.lineStart + n);
      e.nextLine();
      e.addLeafElement(r, W(a == 61 ? s.SetextHeading1 : s.SetextHeading2, r.start, e.prevLineEnd(), [...e.parser.parseInline(r.content, r.start), l]));
      return true;
    }
    finish() {
      return false;
    }
  }
  let E = {
    LinkReference: (e, t) => t.content.charCodeAt(0) == 91 ? new B(t) : null,
    SetextHeading: () => new _()
  };
  let I = {
    text: "",
    end: 0
  };
  class Q {
    constructor(e, t, r, n) {
      this.parser = e;
      this.input = t;
      this.ranges = n;
      this.line = new c();
      this.atEnd = false;
      this.reusePlaceholders = new Map();
      this.stoppedAt = null;
      this.rangeI = 0;
      this.to = n[n.length - 1].to;
      this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = n[0].from;
      this.block = h.create(s.Document, 0, this.lineStart, 0, 0);
      this.stack = [this.block];
      this.fragments = r.length ? new eu(r, t) : null;
      this.readLine();
    }
    get parsedPos() {
      return this.absoluteLineStart;
    }
    advance() {
      if (this.stoppedAt != null && this.absoluteLineStart > this.stoppedAt) {
        return this.finish();
      }
      let {
        line: e
      } = this;
      while (true) {
        for (let t = 0;;) {
          let r = e.depth < this.stack.length ? this.stack[this.stack.length - 1] : null;
          while (t < e.markers.length && (!r || e.markers[t].from < r.end)) {
            let r = e.markers[t++];
            this.addNode(r.type, r.from, r.to);
          }
          if (!r) {
            break;
          }
          this.finishContext();
        }
        if (e.pos < e.text.length) {
          break;
        }
        if (!this.nextLine()) {
          return this.finish();
        }
      }
      if (this.fragments && this.reuseFragment(e.basePos)) {
        return null;
      }
      e: while (true) {
        for (let t of this.parser.blockParsers) {
          if (t) {
            let r = t(this, e);
            if (r != false) {
              if (r == true) {
                return null;
              }
              e.forward();
              continue e;
            }
          }
        }
        break;
      }
      let t = new p(this.lineStart + e.pos, e.text.slice(e.pos));
      for (let e of this.parser.leafBlockParsers) {
        if (e) {
          let r = e(this, t);
          if (r) {
            t.parsers.push(r);
          }
        }
      }
      t: while (this.nextLine() && e.pos != e.text.length) {
        if (e.indent < e.baseIndent + 4) {
          for (let r of this.parser.endLeafBlock) {
            if (r(this, e, t)) {
              break t;
            }
          }
        }
        for (let r of t.parsers) {
          if (r.nextLine(this, e, t)) {
            return null;
          }
        }
        t.content += "\n" + e.scrub();
        for (let r of e.markers) {
          t.marks.push(r);
        }
      }
      this.finishLeaf(t);
      return null;
    }
    stopAt(e) {
      if (this.stoppedAt != null && this.stoppedAt < e) {
        throw RangeError("Can't move stoppedAt forward");
      }
      this.stoppedAt = e;
    }
    reuseFragment(e) {
      if (!this.fragments.moveTo(this.absoluteLineStart + e, this.absoluteLineStart) || !this.fragments.matches(this.block.hash)) {
        return false;
      }
      let t = this.fragments.takeNodes(this);
      return !!t && (this.absoluteLineStart += t, this.lineStart = eh(this.absoluteLineStart, this.ranges), this.moveRangeI(), this.absoluteLineStart < this.to ? (this.lineStart++, this.absoluteLineStart++) : this.atEnd = true, this.readLine(), true);
    }
    get depth() {
      return this.stack.length;
    }
    parentType(e = this.depth - 1) {
      return this.parser.nodeSet.types[this.stack[e].type];
    }
    nextLine() {
      this.lineStart += this.line.text.length;
      if (this.absoluteLineEnd >= this.to) {
        this.absoluteLineStart = this.absoluteLineEnd;
        this.atEnd = true;
        this.readLine();
        return false;
      } else {
        this.lineStart++;
        this.absoluteLineStart = this.absoluteLineEnd + 1;
        this.moveRangeI();
        this.readLine();
        return true;
      }
    }
    moveRangeI() {
      while (this.rangeI < this.ranges.length - 1 && this.absoluteLineStart >= this.ranges[this.rangeI].to) {
        this.rangeI++;
        this.absoluteLineStart = Math.max(this.absoluteLineStart, this.ranges[this.rangeI].from);
      }
    }
    scanLine(e) {
      I.end = e;
      if (e >= this.to) {
        I.text = "";
      } else {
        I.text = this.lineChunkAt(e);
        I.end += I.text.length;
        if (this.ranges.length > 1) {
          let e = this.absoluteLineStart;
          let t = this.rangeI;
          while (this.ranges[t].to < I.end) {
            t++;
            let r = this.ranges[t].from;
            let n = this.lineChunkAt(r);
            I.end = r + n.length;
            I.text = I.text.slice(0, this.ranges[t - 1].to - e) + n;
            e = I.end - I.text.length;
          }
        }
      }
      return I;
    }
    readLine() {
      let {
        line: e
      } = this;
      let {
        text: t,
        end: r
      } = this.scanLine(this.absoluteLineStart);
      this.absoluteLineEnd = r;
      e.reset(t);
      for (; e.depth < this.stack.length; e.depth++) {
        let t = this.stack[e.depth];
        let r = this.parser.skipContextMarkup[t.type];
        if (!r) {
          throw Error("Unhandled block context " + s[t.type]);
        }
        if (!r(t, this, e)) {
          break;
        }
        e.forward();
      }
    }
    lineChunkAt(e) {
      let t = this.input.chunk(e);
      let r;
      if (this.input.lineChunks) {
        r = t == "\n" ? "" : t;
      } else {
        let e = t.indexOf("\n");
        r = e < 0 ? t : t.slice(0, e);
      }
      if (e + r.length > this.to) {
        return r.slice(0, this.to - e);
      } else {
        return r;
      }
    }
    prevLineEnd() {
      if (this.atEnd) {
        return this.lineStart;
      } else {
        return this.lineStart - 1;
      }
    }
    startContext(e, t, r = 0) {
      this.block = h.create(e, r, this.lineStart + t, this.block.hash, this.lineStart + this.line.text.length);
      this.stack.push(this.block);
    }
    startComposite(e, t, r = 0) {
      this.startContext(this.parser.getNodeType(e), t, r);
    }
    addNode(e, t, r) {
      if (typeof e == "number") {
        e = new syntaxTreeCore.Tree(this.parser.nodeSet.types[e], Z, Z, (r ?? this.prevLineEnd()) - t);
      }
      this.block.addChild(e, t - this.block.from);
    }
    addElement(e) {
      this.block.addChild(e.toTree(this.parser.nodeSet), e.from - this.block.from);
    }
    addLeafElement(e, t) {
      this.addNode(this.buffer.writeElements(ei(t.children, e.marks), -t.from).finish(t.type, t.to - t.from), t.from);
    }
    finishContext() {
      let e = this.stack.pop();
      let t = this.stack[this.stack.length - 1];
      t.addChild(e.toTree(this.parser.nodeSet), e.from - t.from);
      this.block = t;
    }
    finish() {
      while (this.stack.length > 1) {
        this.finishContext();
      }
      return this.addGaps(this.block.toTree(this.parser.nodeSet, this.lineStart));
    }
    addGaps(e) {
      if (this.ranges.length > 1) {
        return function e(t, r, n, s, a) {
          let l = t[r].to;
          let i = [];
          let u = [];
          let h = n.from + s;
          function p(e, n) {
            while (n ? e >= l : e > l) {
              let n = t[r + 1].from - l;
              s += n;
              e += n;
              l = t[++r].to;
            }
          }
          for (let o = n.firstChild; o; o = o.nextSibling) {
            p(o.from + s, true);
            let n = o.from + s;
            let c;
            let f = a.get(o.tree);
            if (f) {
              c = f;
            } else if (o.to + s > l) {
              c = e(t, r, o, s, a);
              p(o.to + s, false);
            } else {
              c = o.toTree();
            }
            i.push(c);
            u.push(n - h);
          }
          p(n.to + s, false);
          return new syntaxTreeCore.Tree(n.type, i, u, n.to + s - h, n.tree ? n.tree.propValues : undefined);
        }(this.ranges, 0, e.topNode, this.ranges[0].from, this.reusePlaceholders);
      } else {
        return e;
      }
    }
    finishLeaf(e) {
      for (let t of e.parsers) {
        if (t.finish(this, e)) {
          return;
        }
      }
      let t = ei(this.parser.parseInline(e.content, e.start), e.marks);
      this.addNode(this.buffer.writeElements(t, -e.start).finish(s.Paragraph, e.content.length), e.start);
    }
    elt(e, t, r, n) {
      if (typeof e == "string") {
        return W(this.parser.getNodeType(e), t, r, n);
      } else {
        return new J(e, t);
      }
    }
    get buffer() {
      return new D(this.parser.nodeSet);
    }
  }
  class R extends syntaxTreeCore.Parser {
    constructor(e, t, r, n, s, a, l, i, o) {
      super();
      this.nodeSet = e;
      this.blockParsers = t;
      this.leafBlockParsers = r;
      this.blockNames = n;
      this.endLeafBlock = s;
      this.skipContextMarkup = a;
      this.inlineParsers = l;
      this.inlineNames = i;
      this.wrappers = o;
      this.nodeTypes = Object.create(null);
      for (let u of e.types) {
        this.nodeTypes[u.name] = u.id;
      }
    }
    createParse(e, t, r) {
      let n = new Q(this, e, t, r);
      for (let s of this.wrappers) {
        n = s(n, e, t, r);
      }
      return n;
    }
    configure(e) {
      let t = function e(t) {
        if (!Array.isArray(t)) {
          return t;
        }
        if (t.length == 0) {
          return null;
        }
        let r = e(t[0]);
        if (t.length == 1) {
          return r;
        }
        let n = e(t.slice(1));
        if (!n || !r) {
          return r || n;
        }
        let s = (e, t) => (e || Z).concat(t || Z);
        let a = r.wrap;
        let l = n.wrap;
        return {
          props: s(r.props, n.props),
          defineNodes: s(r.defineNodes, n.defineNodes),
          parseBlock: s(r.parseBlock, n.parseBlock),
          parseInline: s(r.parseInline, n.parseInline),
          remove: s(r.remove, n.remove),
          wrap: a ? l ? (e, t, r, n) => a(l(e, t, r, n), t, r, n) : a : l
        };
      }(e);
      if (!t) {
        return this;
      }
      let {
        nodeSet: r,
        skipContextMarkup: n
      } = this;
      let a = this.blockParsers.slice();
      let l = this.leafBlockParsers.slice();
      let i = this.blockNames.slice();
      let h = this.inlineParsers.slice();
      let p = this.inlineNames.slice();
      let c = this.endLeafBlock.slice();
      let f = this.wrappers;
      if (Y(t.defineNodes)) {
        n = Object.assign({}, n);
        let e = r.types.slice();
        let a;
        for (let r of t.defineNodes) {
          let {
            name: t,
            block: l,
            composite: i,
            style: h
          } = typeof r == "string" ? {
            name: r
          } : r;
          if (e.some(e => e.name == t)) {
            continue;
          }
          if (i) {
            n[e.length] = (e, t, r) => i(t, r, e.value);
          }
          let p = e.length;
          let c = i ? ["Block", "BlockContext"] : l ? p >= s.ATXHeading1 && p <= s.SetextHeading2 ? ["Block", "LeafBlock", "Heading"] : ["Block", "LeafBlock"] : undefined;
          e.push(syntaxTreeCore.NodeType.define({
            id: p,
            name: t,
            props: c && [[syntaxTreeCore.NodeTypeProp.group, c]]
          }));
          if (h) {
            a ||= {};
            if (Array.isArray(h) || h instanceof syntaxHighlightTags.SyntaxTag) {
              a[t] = h;
            } else {
              Object.assign(a, h);
            }
          }
        }
        r = new syntaxTreeCore.NodeTypeSet(e);
        if (a) {
          r = r.extend(syntaxHighlightTags.defineHighlighter(a));
        }
      }
      if (Y(t.props)) {
        r = r.extend(...t.props);
      }
      if (Y(t.remove)) {
        for (let e of t.remove) {
          let t = this.blockNames.indexOf(e);
          let r = this.inlineNames.indexOf(e);
          if (t > -1) {
            a[t] = l[t] = undefined;
          }
          if (r > -1) {
            h[r] = undefined;
          }
        }
      }
      if (Y(t.parseBlock)) {
        for (let e of t.parseBlock) {
          let t = i.indexOf(e.name);
          if (t > -1) {
            a[t] = e.parse;
            l[t] = e.leaf;
          } else {
            let t = e.before ? z(i, e.before) : e.after ? z(i, e.after) + 1 : i.length - 1;
            a.splice(t, 0, e.parse);
            l.splice(t, 0, e.leaf);
            i.splice(t, 0, e.name);
          }
          if (e.endLeaf) {
            c.push(e.endLeaf);
          }
        }
      }
      if (Y(t.parseInline)) {
        for (let e of t.parseInline) {
          let t = p.indexOf(e.name);
          if (t > -1) {
            h[t] = e.parse;
          } else {
            let t = e.before ? z(p, e.before) : e.after ? z(p, e.after) + 1 : p.length - 1;
            h.splice(t, 0, e.parse);
            p.splice(t, 0, e.name);
          }
        }
      }
      if (t.wrap) {
        f = f.concat(t.wrap);
      }
      return new R(r, a, l, i, c, n, h, p, f);
    }
    getNodeType(e) {
      let t = this.nodeTypes[e];
      if (t == null) {
        throw RangeError(`Unknown node type '${e}'`);
      }
      return t;
    }
    parseInline(e, t) {
      let r = new el(this, e, t);
      r: for (let e = t; e < r.end;) {
        let t = r.char(e);
        for (let n of this.inlineParsers) {
          if (n) {
            let s = n(r, t, e);
            if (s >= 0) {
              e = s;
              continue r;
            }
          }
        }
        e++;
      }
      return r.resolveMarkers(0);
    }
  }
  function Y(e) {
    return e != null && e.length > 0;
  }
  function z(e, t) {
    let r = e.indexOf(t);
    if (r < 0) {
      throw RangeError(`Position specified relative to unknown parser ${t}`);
    }
    return r;
  }
  let H = [syntaxTreeCore.NodeType.none];
  for (let e = 1, t; t = s[e]; e++) {
    H[e] = syntaxTreeCore.NodeType.define({
      id: e,
      name: t,
      props: e >= s.Escape ? [] : [[syntaxTreeCore.NodeTypeProp.group, e in d ? ["Block", "BlockContext"] : ["Block", "LeafBlock"]]],
      top: t == "Document"
    });
  }
  let Z = [];
  class D {
    constructor(e) {
      this.nodeSet = e;
      this.content = [];
      this.nodes = [];
    }
    write(e, t, r, n = 0) {
      this.content.push(e, t, r, 4 + n * 4);
      return this;
    }
    writeElements(e, t = 0) {
      for (let r of e) {
        r.writeTo(this, t);
      }
      return this;
    }
    finish(e, t) {
      return syntaxTreeCore.Tree.build({
        buffer: this.content,
        nodeSet: this.nodeSet,
        reused: this.nodes,
        topID: e,
        length: t
      });
    }
  }
  class N {
    constructor(e, t, r, n = Z) {
      this.type = e;
      this.from = t;
      this.to = r;
      this.children = n;
    }
    writeTo(e, t) {
      let r = e.content.length;
      e.writeElements(this.children, t);
      e.content.push(this.type, this.from + t, this.to + t, e.content.length + 4 - r);
    }
    toTree(e) {
      return new D(e).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
    }
  }
  class J {
    constructor(e, t) {
      this.tree = e;
      this.from = t;
    }
    get to() {
      return this.from + this.tree.length;
    }
    get type() {
      return this.tree.type.id;
    }
    get children() {
      return Z;
    }
    writeTo(e, t) {
      e.nodes.push(this.tree);
      e.content.push(e.nodes.length - 1, this.from + t, this.to + t, -1);
    }
    toTree() {
      return this.tree;
    }
  }
  function W(e, t, r, n) {
    return new N(e, t, r, n);
  }
  let j = {
    resolve: "Emphasis",
    mark: "EmphasisMark"
  };
  let G = {
    resolve: "Emphasis",
    mark: "EmphasisMark"
  };
  let U = {};
  let F = {};
  class K {
    constructor(e, t, r, n) {
      this.type = e;
      this.from = t;
      this.to = r;
      this.side = n;
    }
  }
  let ee = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let et = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
  try {
    et = RegExp("[\\p{S}|\\p{P}]", "u");
  } catch (e) {}
  let er = {
    Escape(e, t, r) {
      if (t != 92 || r == e.end - 1) {
        return -1;
      }
      let n = e.char(r + 1);
      for (let t = 0; t < ee.length; t++) {
        if (ee.charCodeAt(t) == n) {
          return e.append(W(s.Escape, r, r + 2));
        }
      }
      return -1;
    },
    Entity(e, t, r) {
      if (t != 38) {
        return -1;
      }
      let n = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(r + 1, r + 31));
      if (n) {
        return e.append(W(s.Entity, r, r + 1 + n[0].length));
      } else {
        return -1;
      }
    },
    InlineCode(e, t, r) {
      if (t != 96 || r && e.char(r - 1) == 96) {
        return -1;
      }
      let n = r + 1;
      while (n < e.end && e.char(n) == 96) {
        n++;
      }
      let a = n - r;
      let l = 0;
      for (; n < e.end; n++) {
        if (e.char(n) == 96) {
          if (++l == a && e.char(n + 1) != 96) {
            return e.append(W(s.InlineCode, r, n + 1, [W(s.CodeMark, r, r + a), W(s.CodeMark, n + 1 - a, n + 1)]));
          }
        } else {
          l = 0;
        }
      }
      return -1;
    },
    HTMLTag(e, t, r) {
      if (t != 60 || r == e.end - 1) {
        return -1;
      }
      let n = e.slice(r + 1, e.end);
      let a = /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(n);
      if (a) {
        return e.append(W(s.Autolink, r, r + 1 + a[0].length, [W(s.LinkMark, r, r + 1), W(s.URL, r + 1, r + a[0].length), W(s.LinkMark, r + a[0].length, r + 1 + a[0].length)]));
      }
      let l = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(n);
      if (l) {
        return e.append(W(s.Comment, r, r + 1 + l[0].length));
      }
      let i = /^\?[^]*?\?>/.exec(n);
      if (i) {
        return e.append(W(s.ProcessingInstruction, r, r + 1 + i[0].length));
      }
      let o = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(n);
      if (o) {
        return e.append(W(s.HTMLTag, r, r + 1 + o[0].length));
      } else {
        return -1;
      }
    },
    Emphasis(e, t, r) {
      if (t != 95 && t != 42) {
        return -1;
      }
      let n = r + 1;
      while (e.char(n) == t) {
        n++;
      }
      let s = e.slice(r - 1, r);
      let a = e.slice(n, n + 1);
      let l = et.test(s);
      let i = et.test(a);
      let o = /\s|^$/.test(s);
      let u = /\s|^$/.test(a);
      let h = !u && (!i || o || l);
      let p = !o && (!l || u || i);
      return e.append(new K(t == 95 ? j : G, r, n, +(!!h && (t == 42 || !p || !!l)) | (!!p && (t == 42 || !h || !!i)) * 2));
    },
    HardBreak(e, t, r) {
      if (t == 92 && e.char(r + 1) == 10) {
        return e.append(W(s.HardBreak, r, r + 2));
      }
      if (t == 32) {
        let t = r + 1;
        while (e.char(t) == 32) {
          t++;
        }
        if (e.char(t) == 10 && t >= r + 2) {
          return e.append(W(s.HardBreak, r, t + 1));
        }
      }
      return -1;
    },
    Link: (e, t, r) => t == 91 ? e.append(new K(U, r, r + 1, 1)) : -1,
    Image: (e, t, r) => t == 33 && e.char(r + 1) == 91 ? e.append(new K(F, r, r + 2, 1)) : -1,
    LinkEnd(e, t, r) {
      if (t != 93) {
        return -1;
      }
      for (let t = e.parts.length - 1; t >= 0; t--) {
        let n = e.parts[t];
        if (n instanceof K && (n.type == U || n.type == F)) {
          if (!n.side || e.skipSpace(n.to) == r && !/[(\[]/.test(e.slice(r + 1, r + 2))) {
            e.parts[t] = null;
            return -1;
          }
          let a = e.takeContent(t);
          let l = e.parts[t] = function (e, t, r, n, a) {
            let {
              text: l
            } = e;
            let i = e.char(a);
            let o = a;
            t.unshift(W(s.LinkMark, n, n + (r == s.Image ? 2 : 1)));
            t.push(W(s.LinkMark, a - 1, a));
            if (i == 40) {
              let r = e.skipSpace(a + 1);
              let n = en(l, r - e.offset, e.offset);
              let i;
              if (n && (r = e.skipSpace(n.to)) != n.to && (i = es(l, r - e.offset, e.offset))) {
                r = e.skipSpace(i.to);
              }
              if (e.char(r) == 41) {
                t.push(W(s.LinkMark, a, a + 1));
                o = r + 1;
                if (n) {
                  t.push(n);
                }
                if (i) {
                  t.push(i);
                }
                t.push(W(s.LinkMark, r, o));
              }
            } else if (i == 91) {
              let r = ea(l, a - e.offset, e.offset, false);
              if (r) {
                t.push(r);
                o = r.to;
              }
            }
            return W(r, n, o, t);
          }(e, a, n.type == U ? s.Link : s.Image, n.from, r + 1);
          if (n.type == U) {
            for (let r = 0; r < t; r++) {
              let t = e.parts[r];
              if (t instanceof K && t.type == U) {
                t.side = 0;
              }
            }
          }
          return l.to;
        }
      }
      return -1;
    }
  };
  function en(e, t, r) {
    if (e.charCodeAt(t) == 60) {
      for (let n = t + 1; n < e.length; n++) {
        let a = e.charCodeAt(n);
        if (a == 62) {
          return W(s.URL, t + r, n + 1 + r);
        }
        if (a == 60 || a == 10) {
          return false;
        }
      }
      return null;
    }
    {
      let n = 0;
      let a = t;
      for (let t = false; a < e.length; a++) {
        let r = e.charCodeAt(a);
        if (m(r)) {
          break;
        }
        if (t) {
          t = false;
        } else if (r == 40) {
          n++;
        } else if (r == 41) {
          if (!n) {
            break;
          }
          n--;
        } else if (r == 92) {
          t = true;
        }
      }
      if (a > t) {
        return W(s.URL, t + r, a + r);
      } else {
        return a == e.length && null;
      }
    }
  }
  function es(e, t, r) {
    let n = e.charCodeAt(t);
    if (n != 39 && n != 34 && n != 40) {
      return false;
    }
    let a = n == 40 ? 41 : n;
    for (let n = t + 1, l = false; n < e.length; n++) {
      let i = e.charCodeAt(n);
      if (l) {
        l = false;
      } else {
        if (i == a) {
          return W(s.LinkTitle, t + r, n + 1 + r);
        }
        if (i == 92) {
          l = true;
        }
      }
    }
    return null;
  }
  function ea(e, t, r, n) {
    for (let a = false, l = t + 1, i = Math.min(e.length, l + 999); l < i; l++) {
      let i = e.charCodeAt(l);
      if (a) {
        a = false;
      } else {
        if (i == 93) {
          return !n && W(s.LinkLabel, t + r, l + 1 + r);
        }
        if (n && !m(i)) {
          n = false;
        }
        if (i == 91) {
          return false;
        }
        if (i == 92) {
          a = true;
        }
      }
    }
    return null;
  }
  class el {
    constructor(e, t, r) {
      this.parser = e;
      this.text = t;
      this.offset = r;
      this.parts = [];
    }
    char(e) {
      if (e >= this.end) {
        return -1;
      } else {
        return this.text.charCodeAt(e - this.offset);
      }
    }
    get end() {
      return this.offset + this.text.length;
    }
    slice(e, t) {
      return this.text.slice(e - this.offset, t - this.offset);
    }
    append(e) {
      this.parts.push(e);
      return e.to;
    }
    addDelimiter(e, t, r, n, s) {
      return this.append(new K(e, t, r, +!!n | !!s * 2));
    }
    get hasOpenLink() {
      for (let e = this.parts.length - 1; e >= 0; e--) {
        let t = this.parts[e];
        if (t instanceof K && (t.type == U || t.type == F)) {
          return true;
        }
      }
      return false;
    }
    addElement(e) {
      return this.append(e);
    }
    resolveMarkers(e) {
      for (let t = e; t < this.parts.length; t++) {
        let r = this.parts[t];
        if (!(r instanceof K) || !r.type.resolve || !(r.side & 2)) {
          continue;
        }
        let n = r.type == j || r.type == G;
        let s = r.to - r.from;
        let a;
        let l = t - 1;
        for (; l >= e; l--) {
          let e = this.parts[l];
          if (e instanceof K && e.side & 1 && e.type == r.type && (!n || !(r.side & 1) && !(e.side & 2) || (e.to - e.from + s) % 3 != 0 || !((e.to - e.from) % 3) && !(s % 3))) {
            a = e;
            break;
          }
        }
        if (!a) {
          continue;
        }
        let i = r.type.resolve;
        let o = [];
        let u = a.from;
        let h = r.to;
        if (n) {
          let e = Math.min(2, a.to - a.from, s);
          u = a.to - e;
          h = r.from + e;
          i = e == 1 ? "Emphasis" : "StrongEmphasis";
        }
        if (a.type.mark) {
          o.push(this.elt(a.type.mark, u, a.to));
        }
        for (let e = l + 1; e < t; e++) {
          if (this.parts[e] instanceof N) {
            o.push(this.parts[e]);
          }
          this.parts[e] = null;
        }
        if (r.type.mark) {
          o.push(this.elt(r.type.mark, r.from, h));
        }
        let p = this.elt(i, u, h, o);
        this.parts[l] = n && a.from != u ? new K(a.type, a.from, u, a.side) : null;
        if (this.parts[t] = n && r.to != h ? new K(r.type, h, r.to, r.side) : null) {
          this.parts.splice(t, 0, p);
        } else {
          this.parts[t] = p;
        }
      }
      let t = [];
      for (let r = e; r < this.parts.length; r++) {
        let e = this.parts[r];
        if (e instanceof N) {
          t.push(e);
        }
      }
      return t;
    }
    findOpeningDelimiter(e) {
      for (let t = this.parts.length - 1; t >= 0; t--) {
        let r = this.parts[t];
        if (r instanceof K && r.type == e) {
          return t;
        }
      }
      return null;
    }
    takeContent(e) {
      let t = this.resolveMarkers(e);
      this.parts.length = e;
      return t;
    }
    skipSpace(e) {
      return g(this.text, e - this.offset) + this.offset;
    }
    elt(e, t, r, n) {
      if (typeof e == "string") {
        return W(this.parser.getNodeType(e), t, r, n);
      } else {
        return new J(e, t);
      }
    }
  }
  function ei(e, t) {
    if (!t.length) {
      return e;
    }
    if (!e.length) {
      return t;
    }
    let r = e.slice();
    let n = 0;
    for (let e of t) {
      while (n < r.length && r[n].to < e.to) {
        n++;
      }
      if (n < r.length && r[n].from < e.from) {
        let t = r[n];
        if (t instanceof N) {
          r[n] = new N(t.type, t.from, t.to, ei(t.children, [e]));
        }
      } else {
        r.splice(n++, 0, e);
      }
    }
    return r;
  }
  let eo = [s.CodeBlock, s.ListItem, s.OrderedList, s.BulletList];
  class eu {
    constructor(e, t) {
      this.fragments = e;
      this.input = t;
      this.i = 0;
      this.fragment = null;
      this.fragmentEnd = -1;
      this.cursor = null;
      if (e.length) {
        this.fragment = e[this.i++];
      }
    }
    nextFragment() {
      this.fragment = this.i < this.fragments.length ? this.fragments[this.i++] : null;
      this.cursor = null;
      this.fragmentEnd = -1;
    }
    moveTo(e, t) {
      while (this.fragment && this.fragment.to <= e) {
        this.nextFragment();
      }
      if (!this.fragment || this.fragment.from > (e ? e - 1 : 0)) {
        return false;
      }
      if (this.fragmentEnd < 0) {
        let e = this.fragment.to;
        while (e > 0 && this.input.read(e - 1, e) != "\n") {
          e--;
        }
        this.fragmentEnd = e ? e - 1 : 0;
      }
      let r = this.cursor;
      if (!r) {
        (r = this.cursor = this.fragment.tree.cursor()).firstChild();
      }
      let n = e + this.fragment.offset;
      while (r.to <= n) {
        if (!r.parent()) {
          return false;
        }
      }
      while (true) {
        if (r.from >= n) {
          return this.fragment.from <= t;
        }
        if (!r.childAfter(n)) {
          return false;
        }
      }
    }
    matches(e) {
      let t = this.cursor.tree;
      return t && t.prop(syntaxTreeCore.NodeTypeProp.contextHash) == e;
    }
    takeNodes(e) {
      let t = this.cursor;
      let r = this.fragment.offset;
      let n = this.fragmentEnd - +!!this.fragment.openEnd;
      let a = e.absoluteLineStart;
      let l = a;
      let i = e.block.children.length;
      let u = l;
      let h = i;
      while (true) {
        if (t.to - r > n) {
          if (t.type.isAnonymous && t.firstChild()) {
            continue;
          }
          break;
        }
        let a = eh(t.from - r, e.ranges);
        if (t.to - r <= e.ranges[e.rangeI].to) {
          e.addNode(t.tree, a);
        } else {
          let r = new syntaxTreeCore.Tree(e.parser.nodeSet.types[s.Paragraph], [], [], 0, e.block.hashProp);
          e.reusePlaceholders.set(r, t.tree);
          e.addNode(r, a);
        }
        if (t.type.is("Block")) {
          if (eo.indexOf(t.type.id) < 0) {
            l = t.to - r;
            i = e.block.children.length;
          } else {
            l = u;
            i = h;
            u = t.to - r;
            h = e.block.children.length;
          }
        }
        if (!t.nextSibling()) {
          break;
        }
      }
      while (e.block.children.length > i) {
        e.block.children.pop();
        e.block.positions.pop();
      }
      return l - a;
    }
  }
  function eh(e, t) {
    let r = e;
    for (let n = 1; n < t.length; n++) {
      let s = t[n - 1].to;
      let a = t[n].from;
      if (s < e) {
        r -= a - s;
      }
    }
    return r;
  }
  let ep = syntaxHighlightTags.defineHighlighter({
    "Blockquote/...": syntaxHighlightTags.defaultTags.quote,
    HorizontalRule: syntaxHighlightTags.defaultTags.contentSeparator,
    "ATXHeading1/... SetextHeading1/...": syntaxHighlightTags.defaultTags.heading1,
    "ATXHeading2/... SetextHeading2/...": syntaxHighlightTags.defaultTags.heading2,
    "ATXHeading3/...": syntaxHighlightTags.defaultTags.heading3,
    "ATXHeading4/...": syntaxHighlightTags.defaultTags.heading4,
    "ATXHeading5/...": syntaxHighlightTags.defaultTags.heading5,
    "ATXHeading6/...": syntaxHighlightTags.defaultTags.heading6,
    "Comment CommentBlock": syntaxHighlightTags.defaultTags.comment,
    Escape: syntaxHighlightTags.defaultTags.escape,
    Entity: syntaxHighlightTags.defaultTags.character,
    "Emphasis/...": syntaxHighlightTags.defaultTags.emphasis,
    "StrongEmphasis/...": syntaxHighlightTags.defaultTags.strong,
    "Link/... Image/...": syntaxHighlightTags.defaultTags.link,
    "OrderedList/... BulletList/...": syntaxHighlightTags.defaultTags.list,
    "BlockQuote/...": syntaxHighlightTags.defaultTags.quote,
    "InlineCode CodeText": syntaxHighlightTags.defaultTags.monospace,
    "URL Autolink": syntaxHighlightTags.defaultTags.url,
    "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark": syntaxHighlightTags.defaultTags.processingInstruction,
    "CodeInfo LinkLabel": syntaxHighlightTags.defaultTags.labelName,
    LinkTitle: syntaxHighlightTags.defaultTags.string,
    Paragraph: syntaxHighlightTags.defaultTags.content
  });
  let ec = new R(new syntaxTreeCore.NodeTypeSet(H).extend(ep), Object.keys(q).map(e => q[e]), Object.keys(q).map(e => E[e]), Object.keys(q), [(e, t) => T(t) >= 0, (e, t) => x(t) >= 0, (e, t) => S(t) >= 0, (e, t) => w(t, e, true) >= 0, (e, t) => y(t, e, true) >= 0, (e, t) => k(t, e, true) >= 0, (e, t) => L(t, e, true) >= 0], d, Object.keys(er).map(e => er[e]), Object.keys(er), []);
  let ef = {
    resolve: "Strikethrough",
    mark: "StrikethroughMark"
  };
  let ed = {
    defineNodes: [{
      name: "Strikethrough",
      style: {
        "Strikethrough/...": syntaxHighlightTags.defaultTags.strikethrough
      }
    }, {
      name: "StrikethroughMark",
      style: syntaxHighlightTags.defaultTags.processingInstruction
    }],
    parseInline: [{
      name: "Strikethrough",
      parse(e, t, r) {
        if (t != 126 || e.char(r + 1) != 126 || e.char(r + 2) == 126) {
          return -1;
        }
        let n = e.slice(r - 1, r);
        let s = e.slice(r + 2, r + 3);
        let a = /\s|^$/.test(n);
        let l = /\s|^$/.test(s);
        let i = et.test(n);
        let o = et.test(s);
        return e.addDelimiter(ef, r, r + 2, !l && (!o || a || i), !a && (!i || l || o));
      },
      after: "Emphasis"
    }]
  };
  function em(e, t, r = 0, n, s = 0) {
    let a = 0;
    let l = true;
    let i = -1;
    let o = -1;
    let u = false;
    let h = () => {
      n.push(e.elt("TableCell", s + i, s + o, e.parser.parseInline(t.slice(i, o), s + i)));
    };
    for (let p = r; p < t.length; p++) {
      let r = t.charCodeAt(p);
      if (r != 124 || u) {
        if (u || r != 32 && r != 9) {
          if (i < 0) {
            i = p;
          }
          o = p + 1;
        }
      } else {
        if (!l || i > -1) {
          a++;
        }
        l = false;
        if (n) {
          if (i > -1) {
            h();
          }
          n.push(e.elt("TableDelimiter", p + s, p + s + 1));
        }
        i = o = -1;
      }
      u = !u && r == 92;
    }
    if (i > -1) {
      a++;
      if (n) {
        h();
      }
    }
    return a;
  }
  function eg(e, t) {
    for (let r = t; r < e.length; r++) {
      let t = e.charCodeAt(r);
      if (t == 124) {
        return true;
      }
      if (t == 92) {
        r++;
      }
    }
    return false;
  }
  let eO = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;
  class ex {
    constructor() {
      this.rows = null;
    }
    nextLine(e, t, r) {
      if (this.rows == null) {
        let n;
        this.rows = false;
        if ((t.next == 45 || t.next == 58 || t.next == 124) && eO.test(n = t.text.slice(t.pos))) {
          let s = [];
          if (em(e, r.content, 0, s, r.start) == em(e, n, t.pos)) {
            this.rows = [e.elt("TableHeader", r.start, r.start + r.content.length, s), e.elt("TableDelimiter", e.lineStart + t.pos, e.lineStart + t.text.length)];
          }
        }
      } else if (this.rows) {
        let r = [];
        em(e, t.text, t.pos, r, e.lineStart);
        this.rows.push(e.elt("TableRow", e.lineStart + t.pos, e.lineStart + t.text.length, r));
      }
      return false;
    }
    finish(e, t) {
      return !!this.rows && (e.addLeafElement(t, e.elt("Table", t.start, t.start + t.content.length, this.rows)), true);
    }
  }
  let eS = {
    defineNodes: [{
      name: "Table",
      block: true
    }, {
      name: "TableHeader",
      style: {
        "TableHeader/...": syntaxHighlightTags.defaultTags.heading
      }
    }, "TableRow", {
      name: "TableCell",
      style: syntaxHighlightTags.defaultTags.content
    }, {
      name: "TableDelimiter",
      style: syntaxHighlightTags.defaultTags.processingInstruction
    }],
    parseBlock: [{
      name: "Table",
      leaf: (e, t) => eg(t.content, 0) ? new ex() : null,
      endLeaf(e, t, r) {
        if (r.parsers.some(e => e instanceof ex) || !eg(t.text, t.basePos)) {
          return false;
        }
        let n = e.scanLine(e.absoluteLineEnd + 1).text;
        return eO.test(n) && em(e, t.text, t.basePos) == em(e, n, t.basePos);
      },
      before: "SetextHeading"
    }]
  };
  class ek {
    nextLine() {
      return false;
    }
    finish(e, t) {
      e.addLeafElement(t, e.elt("Task", t.start, t.start + t.content.length, [e.elt("TaskMarker", t.start, t.start + 3), ...e.parser.parseInline(t.content.slice(3), t.start + 3)]));
      return true;
    }
  }
  let eb = {
    defineNodes: [{
      name: "Task",
      block: true,
      style: syntaxHighlightTags.defaultTags.list
    }, {
      name: "TaskMarker",
      style: syntaxHighlightTags.defaultTags.atom
    }],
    parseBlock: [{
      name: "TaskList",
      leaf: (e, t) => /^\[[ xX]\][ \t]/.test(t.content) && e.parentType().name == "ListItem" ? new ek() : null,
      after: "SetextHeading"
    }]
  };
  let ew = /(www\.)|(https?:\/\/)|([\w.+-]{,100}@)|(mailto:|xmpp:)/gy;
  let ey = /[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy;
  let eT = /[\w-]+\.[\w-]+($|\/)/;
  let eP = /[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy;
  let ev = /\/[a-zA-Z\d@.]+/gy;
  function eC(e, t, r, n) {
    let s = 0;
    for (let a = t; a < r; a++) {
      if (e[a] == n) {
        s++;
      }
    }
    return s;
  }
  function eA(e, t) {
    eP.lastIndex = t;
    let r = eP.exec(e);
    if (!r) {
      return -1;
    }
    let n = r[0][r[0].length - 1];
    if (n == "_" || n == "-") {
      return -1;
    } else {
      return t + r[0].length - +(n == ".");
    }
  }
  let eV = [eS, eb, ed, {
    parseInline: [{
      name: "Autolink",
      parse(e, t, r) {
        let n = r - e.offset;
        if (n && /\w/.test(e.text[n - 1])) {
          return -1;
        }
        ew.lastIndex = n;
        let s = ew.exec(e.text);
        let a = -1;
        if (!s) {
          return -1;
        }
        if (s[1] || s[2]) {
          if ((a = function (e, t) {
            ey.lastIndex = t;
            let r = ey.exec(e);
            if (!r || eT.exec(r[0])[0].indexOf("_") > -1) {
              return -1;
            }
            let n = t + r[0].length;
            while (true) {
              let r = e[n - 1];
              let s;
              if (/[?!.,:*_~]/.test(r) || r == ")" && eC(e, t, n, ")") > eC(e, t, n, "(")) {
                n--;
              } else if (r == ";" && (s = /&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(e.slice(t, n)))) {
                n = t + s.index;
              } else {
                break;
              }
            }
            return n;
          }(e.text, n + s[0].length)) > -1 && e.hasOpenLink) {
            let t = /([^\[\]]|\[[^\]]*\])*/.exec(e.text.slice(n, a));
            a = n + t[0].length;
          }
        } else if (s[3]) {
          a = eA(e.text, n);
        } else if ((a = eA(e.text, n + s[0].length)) > -1 && s[0] == "xmpp:") {
          ev.lastIndex = a;
          if (s = ev.exec(e.text)) {
            a = s.index + s[0].length;
          }
        }
        if (a < 0) {
          return -1;
        } else {
          e.addElement(e.elt("URL", r, a + e.offset));
          return a + e.offset;
        }
      }
    }]
  }];
  function eL(e, t, r) {
    return (n, s, a) => {
      if (s != e || n.char(a + 1) == e) {
        return -1;
      }
      let l = [n.elt(r, a, a + 1)];
      for (let s = a + 1; s < n.end; s++) {
        let i = n.char(s);
        if (i == e) {
          return n.addElement(n.elt(t, a, s + 1, l.concat(n.elt(r, s, s + 1))));
        }
        if (i == 92) {
          l.push(n.elt("Escape", s, s++ + 2));
        }
        if (m(i)) {
          break;
        }
      }
      return -1;
    };
  }
  let eX = {
    defineNodes: [{
      name: "Superscript",
      style: syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.content)
    }, {
      name: "SuperscriptMark",
      style: syntaxHighlightTags.defaultTags.processingInstruction
    }],
    parseInline: [{
      name: "Superscript",
      parse: eL(94, "Superscript", "SuperscriptMark")
    }]
  };
  let e$ = {
    defineNodes: [{
      name: "Subscript",
      style: syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.content)
    }, {
      name: "SubscriptMark",
      style: syntaxHighlightTags.defaultTags.processingInstruction
    }],
    parseInline: [{
      name: "Subscript",
      parse: eL(126, "Subscript", "SubscriptMark")
    }]
  };
  let eq = {
    defineNodes: [{
      name: "Emoji",
      style: syntaxHighlightTags.defaultTags.character
    }],
    parseInline: [{
      name: "Emoji",
      parse(e, t, r) {
        let n;
        if (t == 58 && (n = /^[a-zA-Z_0-9]+:/.exec(e.slice(r + 1, e.end)))) {
          return e.addElement(e.elt("Emoji", r, r + 1 + n[0].length));
        } else {
          return -1;
        }
      }
    }]
  };
  var codemirrorHtmlLanguageSupport = require("codemirror-html-language-support") /*id: 850002*/;
  let eM = codemirrorLanguageSupport.languageSupportFacet({
    block: {
      open: "<!--",
      close: "-->"
    }
  });
  let e_ = new syntaxTreeCore.NodeTypeProp();
  let eE = ec.configure({
    props: [codemirrorLanguageSupport.foldState.add(e => !e.is("Block") || e.is("Document") || eI(e) != null ? undefined : (e, t) => ({
      from: t.doc.lineAt(e.from).to,
      to: e.to
    })), e_.add(eI), codemirrorLanguageSupport.indentNodeProp.add({
      Document: () => null
    }), codemirrorLanguageSupport.languageTypeProp_1.add({
      Document: eM
    })]
  });
  function eI(e) {
    let t = /^(?:ATX|Setext)Heading(\d)$/.exec(e.name);
    if (t) {
      return +t[1];
    } else {
      return undefined;
    }
  }
  let eQ = codemirrorLanguageSupport.foldConfigFacet.of((e, t, r) => {
    for (let n = codemirrorLanguageSupport.getTree(e).resolveInner(r, -1); n && !(n.from < t); n = n.parent) {
      let e = n.type.prop(e_);
      if (e == null) {
        continue;
      }
      let t = function (e, t) {
        let r = e;
        while (true) {
          let e = r.nextSibling;
          let n;
          if (!e || (n = eI(e.type)) != null && n <= t) {
            break;
          }
          r = e;
        }
        return r.to;
      }(n, e);
      if (t > r) {
        return {
          from: r,
          to: t
        };
      }
    }
    return null;
  });
  function eR(e) {
    return new codemirrorLanguageSupport.LanguageSupport(eM, e, [eQ], "markdown");
  }
  let eY = eR(eE);
  let ez = eR(eE.configure([eV, e$, eX, eq]));
  class eH {
    constructor(e, t, r, n, s, a, l) {
      this.node = e;
      this.from = t;
      this.to = r;
      this.spaceBefore = n;
      this.spaceAfter = s;
      this.type = a;
      this.item = l;
    }
    blank(e, t = true) {
      let r = this.spaceBefore + (this.node.name == "Blockquote" ? ">" : "");
      if (e != null) {
        while (r.length < e) {
          r += " ";
        }
        return r;
      }
      for (let e = this.to - this.from - r.length - this.spaceAfter.length; e > 0; e--) {
        r += " ";
      }
      return r + (t ? this.spaceAfter : "");
    }
    marker(e, t) {
      let r = this.node.name == "OrderedList" ? String(+eD(this.item, e)[2] + t) : "";
      return this.spaceBefore + r + this.type + this.spaceAfter;
    }
  }
  function eZ(e, t) {
    let r = [];
    for (let t = e; t && t.name != "Document"; t = t.parent) {
      if (t.name == "ListItem" || t.name == "Blockquote" || t.name == "FencedCode") {
        r.push(t);
      }
    }
    let n = [];
    for (let e = r.length - 1; e >= 0; e--) {
      let s = r[e];
      let a;
      let l = t.lineAt(s.from);
      let i = s.from - l.from;
      if (s.name == "FencedCode") {
        n.push(new eH(s, i, i, "", "", "", null));
      } else if (s.name == "Blockquote" && (a = /^[ \t]*>( ?)/.exec(l.text.slice(i)))) {
        n.push(new eH(s, i, i + a[0].length, "", a[1], ">", null));
      } else if (s.name == "ListItem" && s.parent.name == "OrderedList" && (a = /^([ \t]*)\d+([.)])([ \t]*)/.exec(l.text.slice(i)))) {
        let e = a[3];
        let t = a[0].length;
        if (e.length >= 4) {
          e = e.slice(0, e.length - 4);
          t -= 4;
        }
        n.push(new eH(s.parent, i, i + t, a[1], e, a[2], s));
      } else if (s.name == "ListItem" && s.parent.name == "BulletList" && (a = /^([ \t]*)([-+*])([ \t]{1,4}\[[ xX]\])?([ \t]+)/.exec(l.text.slice(i)))) {
        let e = a[4];
        let t = a[0].length;
        if (e.length > 4) {
          e = e.slice(0, e.length - 4);
          t -= 4;
        }
        let r = a[2];
        if (a[3]) {
          r += a[3].replace(/[xX]/, " ");
        }
        n.push(new eH(s.parent, i, i + t, a[1], e, r, s));
      }
    }
    return n;
  }
  function eD(e, t) {
    return /^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from, e.from + 10));
  }
  function eN(e, t, r, n = 0) {
    for (let s = -1, a = e;;) {
      if (a.name == "ListItem") {
        let e = eD(a, t);
        let l = +e[2];
        if (s >= 0) {
          if (l != s + 1) {
            return;
          }
          r.push({
            from: a.from + e[1].length,
            to: a.from + e[0].length,
            insert: String(s + 2 + n)
          });
        }
        s = l;
      }
      let e = a.nextSibling;
      if (!e) {
        break;
      }
      a = e;
    }
  }
  let eJ = ({
    state: e,
    dispatch: t
  }) => {
    let r = codemirrorLanguageSupport.getTree(e);
    let {
      doc: n
    } = e;
    let s = null;
    let l = e.changeByRange(t => {
      if (!t.empty || !ez.isActiveAt(e, t.from)) {
        return s = {
          range: t
        };
      }
      let l = t.from;
      let i = n.lineAt(l);
      let o = eZ(r.resolveInner(l, -1), n);
      while (o.length && o[o.length - 1].from > l - i.from) {
        o.pop();
      }
      if (!o.length) {
        return s = {
          range: t
        };
      }
      let u = o[o.length - 1];
      if (u.to - u.spaceAfter.length > l - i.from) {
        return s = {
          range: t
        };
      }
      let h = l >= u.to - u.spaceAfter.length && !/\S/.test(i.text.slice(u.to));
      if (u.item && h) {
        if (u.node.firstChild.to >= l || i.from > 0 && !/[^\s>]/.test(n.lineAt(i.from - 1).text)) {
          let e = o.length > 1 ? o[o.length - 2] : null;
          let t;
          let r = "";
          if (e && e.item) {
            t = i.from + e.from;
            r = e.marker(n, 1);
          } else {
            t = i.from + (e ? e.to : 0);
          }
          let s = [{
            from: t,
            to: l,
            insert: r
          }];
          if (u.node.name == "OrderedList") {
            eN(u.item, n, s, -2);
          }
          if (e && e.node.name == "OrderedList") {
            eN(e.item, n, s);
          }
          return {
            range: codemirrorStateCore.EditorSelection.cursor(t + r.length),
            changes: s
          };
        }
        {
          let t = "";
          for (let e = 0, r = o.length - 2; e <= r; e++) {
            t += o[e].blank(e < r ? o[e + 1].from - t.length : null, e < r);
          }
          t += e.lineBreak;
          return {
            range: codemirrorStateCore.EditorSelection.cursor(l + t.length),
            changes: {
              from: i.from,
              insert: t
            }
          };
        }
      }
      if (u.node.name == "Blockquote" && h && i.from) {
        let r = n.lineAt(i.from - 1);
        let s = />\s*$/.exec(r.text);
        if (s && s.index == u.from) {
          let n = e.changes([{
            from: r.from + s.index,
            to: r.to
          }, {
            from: i.from + u.from,
            to: i.to
          }]);
          return {
            range: t.map(n),
            changes: n
          };
        }
      }
      let p = [];
      if (u.node.name == "OrderedList") {
        eN(u.item, n, p);
      }
      let c = u.item && u.item.from < i.from;
      let f = "";
      if (!c || /^[\s\d.)\-+*>]*/.exec(i.text)[0].length >= u.to) {
        for (let e = 0, t = o.length - 1; e <= t; e++) {
          f += e != t || c ? o[e].blank(e < t ? o[e + 1].from - f.length : null) : o[e].marker(n, 1);
        }
      }
      let d = l;
      while (d > i.from && /\s/.test(i.text.charAt(d - i.from - 1))) {
        d--;
      }
      f = e.lineBreak + f;
      p.push({
        from: d,
        to: l,
        insert: f
      });
      return {
        range: codemirrorStateCore.EditorSelection.cursor(d + f.length),
        changes: p
      };
    });
    return !s && (t(e.update(l, {
      scrollIntoView: true,
      userEvent: "input"
    })), true);
  };
  function eW(e) {
    return e.name == "QuoteMark" || e.name == "ListMark";
  }
  let ej = ({
    state: e,
    dispatch: t
  }) => {
    let r = codemirrorLanguageSupport.getTree(e);
    let n = null;
    let s = e.changeByRange(t => {
      let s = t.from;
      let {
        doc: l
      } = e;
      if (t.empty && ez.isActiveAt(e, t.from)) {
        let e = l.lineAt(s);
        let n = eZ(function (e, t) {
          let r = e.resolveInner(t, -1);
          let n = t;
          if (eW(r)) {
            n = r.from;
            r = r.parent;
          }
          for (let e; e = r.childBefore(n);) {
            if (eW(e)) {
              n = e.from;
            } else if (e.name == "OrderedList" || e.name == "BulletList") {
              n = (r = e.lastChild).to;
            } else {
              break;
            }
          }
          return r;
        }(r, s), l);
        if (n.length) {
          let r = n[n.length - 1];
          let l = r.to - r.spaceAfter.length + +!!r.spaceAfter;
          if (s - e.from > l && !/\S/.test(e.text.slice(l, s - e.from))) {
            return {
              range: codemirrorStateCore.EditorSelection.cursor(e.from + l),
              changes: {
                from: e.from + l,
                to: s
              }
            };
          }
          if (s - e.from == l) {
            let n = e.from + r.from;
            if (r.item && r.node.from < r.item.from && /\S/.test(e.text.slice(r.from, r.to))) {
              return {
                range: t,
                changes: {
                  from: n,
                  to: e.from + r.to,
                  insert: r.blank(r.to - r.from)
                }
              };
            }
            if (n < s) {
              return {
                range: codemirrorStateCore.EditorSelection.cursor(n),
                changes: {
                  from: n,
                  to: s
                }
              };
            }
          }
        }
      }
      return n = {
        range: t
      };
    });
    return !n && (t(e.update(s, {
      scrollIntoView: true,
      userEvent: "delete"
    })), true);
  };
  let eG = [{
    key: "Enter",
    run: eJ
  }, {
    key: "Backspace",
    run: ej
  }];
  let eU = codemirrorHtmlLanguageSupport.html({
    matchClosingTags: false
  });
  function eF(e = {}) {
    var t;
    let {
      codeLanguages: r,
      defaultCodeLanguage: n,
      addKeymap: u = true,
      base: {
        parser: h
      } = eY
    } = e;
    if (!(h instanceof R)) {
      throw RangeError("Base parser provided to `markdown` should be a Markdown parser");
    }
    let p = e.extensions ? [e.extensions] : [];
    let c = [eU.support];
    let f;
    if (n instanceof codemirrorLanguageSupport.Language) {
      c.push(n.support);
      f = n.language;
    } else if (n) {
      f = n;
    }
    let d = r || f ? (t = f, e => {
      if (e && r) {
        let t = null;
        e = /\S*/.exec(e)[0];
        if ((t = typeof r == "function" ? r(e) : codemirrorLanguageSupport.LanguageDescription.matchLanguageName(r, e, true)) instanceof codemirrorLanguageSupport.LanguageDescription) {
          if (t.support) {
            return t.support.language.parser;
          } else {
            return codemirrorLanguageSupport.ParseContext.getSkippingParser(t.load());
          }
        }
        if (t) {
          return t.parser;
        }
      }
      if (t) {
        return t.parser;
      } else {
        return null;
      }
    }) : undefined;
    p.push(function (e) {
      let {
        codeParser: t,
        htmlParser: r
      } = e;
      return {
        wrap: syntaxTreeCore.createNestedParse((e, n) => {
          let a = e.type.id;
          if (t && (a == s.CodeBlock || a == s.FencedCode)) {
            let r = "";
            if (a == s.FencedCode) {
              let t = e.node.getChild(s.CodeInfo);
              if (t) {
                r = n.read(t.from, t.to);
              }
            }
            let l = t(r);
            if (l) {
              return {
                parser: l,
                overlay: e => e.type.id == s.CodeText
              };
            }
          } else if (r && (a == s.HTMLBlock || a == s.HTMLTag)) {
            return {
              parser: r,
              overlay: function (e, t, r) {
                let n = [];
                for (let s = e.firstChild, a = t;; s = s.nextSibling) {
                  let e = s ? s.from : r;
                  if (e > a) {
                    n.push({
                      from: a,
                      to: e
                    });
                  }
                  if (!s) {
                    break;
                  }
                  a = s.to;
                }
                return n;
              }(e.node, e.from, e.to)
            };
          }
          return null;
        })
      };
    }({
      codeParser: d,
      htmlParser: eU.language.parser
    }));
    if (u) {
      c.push(codemirrorStateCore.StateField.high(codemirrorEditorViewCore.keymapFacet.of(eG)));
    }
    return new codemirrorLanguageSupport.Language(eR(h.configure(p)), c);
  }
  require.r(exports);
  require.d(exports, {
    commonmarkLanguage: function () {
      return eY;
    },
    markdown: function () {
      return eF;
    },
    markdownKeymap: function () {
      return eG;
    },
    deleteMarkupBackward: function () {
      return ej;
    },
    markdownLanguage: function () {
      return ez;
    },
    insertNewlineContinueMarkup: function () {
      return eJ;
    }
  });
}