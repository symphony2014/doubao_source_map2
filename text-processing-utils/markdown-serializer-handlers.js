// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'markdownHandlers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 109669
         */
module.exports = function (module, exports, require) {
  function n(e, t, r) {
    return ">" + (r ? "" : " ") + e;
  }
  var constructCheckUtil = require("construct-check-util") /*id: 56001*/;
  function o(e, t, r, n) {
    let o = -1;
    while (++o < r.unsafe.length) {
      if (r.unsafe[o].character === "\n" && constructCheckUtil.checkConstruct(r.stack, r.unsafe[o])) {
        if (/[ \t]/.test(n.before)) {
          return "";
        } else {
          return " ";
        }
      }
    }
    return "\\\n";
  }
  var stringConsecutiveUtil = require("string-consecutive-util") /*id: 879547*/;
  var markdownFenceUtil = require("markdown-fence-util") /*id: 125036*/;
  function c(e, t, r) {
    return (r ? "" : "    ") + e;
  }
  function l(e) {
    let t = e.options.quote || "\"";
    if (t !== "\"" && t !== "'") {
      throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
    }
    return t;
  }
  var htmlHexEntityEncoder = require("html-hex-entity-encoder") /*id: 328506*/;
  var charTokenTypeClassifier = require("char-token-type-classifier") /*id: 967710*/;
  function p(e, t, r) {
    let n = charTokenTypeClassifier.getCharTokenType(e);
    let i = charTokenTypeClassifier.getCharTokenType(t);
    if (n === undefined) {
      if (i === undefined) {
        if (r === "_") {
          return {
            inside: true,
            outside: true
          };
        } else {
          return {
            inside: false,
            outside: false
          };
        }
      } else if (i === 1) {
        return {
          inside: true,
          outside: true
        };
      } else {
        return {
          inside: false,
          outside: true
        };
      }
    } else if (n === 1) {
      if (i === undefined) {
        return {
          inside: false,
          outside: false
        };
      } else if (i === 1) {
        return {
          inside: true,
          outside: true
        };
      } else {
        return {
          inside: false,
          outside: false
        };
      }
    } else if (i === undefined) {
      return {
        inside: false,
        outside: false
      };
    } else if (i === 1) {
      return {
        inside: true,
        outside: false
      };
    } else {
      return {
        inside: false,
        outside: false
      };
    }
  }
  function h(e, t, r, n) {
    let i = function (e) {
      let t = e.options.emphasis || "*";
      if (t !== "*" && t !== "_") {
        throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
      }
      return t;
    }(r);
    let o = r.enter("emphasis");
    let u = r.createTracker(n);
    let a = u.move(i);
    let c = u.move(r.containerPhrasing(e, {
      after: i,
      before: a,
      ...u.current()
    }));
    let l = c.charCodeAt(0);
    let f = p(n.before.charCodeAt(n.before.length - 1), l, i);
    if (f.inside) {
      c = htmlHexEntityEncoder.toHtmlHexEntity(l) + c.slice(1);
    }
    let h = c.charCodeAt(c.length - 1);
    let d = p(n.after.charCodeAt(0), h, i);
    if (d.inside) {
      c = c.slice(0, -1) + htmlHexEntityEncoder.toHtmlHexEntity(h);
    }
    let g = u.move(i);
    o();
    r.attentionEncodeSurroundingInfo = {
      after: d.outside,
      before: f.outside
    };
    return a + c + g;
  }
  h.peek = function (e, t, r) {
    return r.options.emphasis || "*";
  };
  var eventTestValidator = require("event-test-validator") /*id: 120741*/;
  function g(e) {
    return e.value || "";
  }
  function m(e, t, r, n) {
    let i = l(r);
    let o = i === "\"" ? "Quote" : "Apostrophe";
    let u = r.enter("image");
    let a = r.enter("label");
    let c = r.createTracker(n);
    let s = c.move("![");
    s += c.move(r.safe(e.alt, {
      before: s,
      after: "]",
      ...c.current()
    }));
    s += c.move("](");
    a();
    if (!e.url && e.title || /[\0- \u007F]/.test(e.url)) {
      a = r.enter("destinationLiteral");
      s += c.move("<");
      s += c.move(r.safe(e.url, {
        before: s,
        after: ">",
        ...c.current()
      }));
      s += c.move(">");
    } else {
      a = r.enter("destinationRaw");
      s += c.move(r.safe(e.url, {
        before: s,
        after: e.title ? " " : ")",
        ...c.current()
      }));
    }
    a();
    if (e.title) {
      a = r.enter(`title${o}`);
      s += c.move(" " + i);
      s += c.move(r.safe(e.title, {
        before: s,
        after: i,
        ...c.current()
      }));
      s += c.move(i);
      a();
    }
    s += c.move(")");
    u();
    return s;
  }
  function b(e, t, r, n) {
    let i = e.referenceType;
    let o = r.enter("imageReference");
    let u = r.enter("label");
    let a = r.createTracker(n);
    let c = a.move("![");
    let l = r.safe(e.alt, {
      before: c,
      after: "]",
      ...a.current()
    });
    c += a.move(l + "][");
    u();
    let s = r.stack;
    r.stack = [];
    u = r.enter("reference");
    let f = r.safe(r.associationId(e), {
      before: c,
      after: "]",
      ...a.current()
    });
    u();
    r.stack = s;
    o();
    if (i !== "full" && l && l === f) {
      if (i === "shortcut") {
        c = c.slice(0, -1);
      } else {
        c += a.move("]");
      }
    } else {
      c += a.move(f + "]");
    }
    return c;
  }
  function D(e, t, r) {
    let n = e.value || "";
    let i = "`";
    let o = -1;
    while (RegExp("(^|[^`])" + i + "([^`]|$)").test(n)) {
      i += "`";
    }
    for (/[^ \r\n]/.test(n) && (/^[ \r\n]/.test(n) && /[ \r\n]$/.test(n) || /^`|`$/.test(n)) && (n = " " + n + " "); ++o < r.unsafe.length;) {
      let e;
      let t = r.unsafe[o];
      let i = r.compilePattern(t);
      if (t.atBreak) {
        while (e = i.exec(n)) {
          let t = e.index;
          if (n.charCodeAt(t) === 10 && n.charCodeAt(t - 1) === 13) {
            t--;
          }
          n = n.slice(0, t) + " " + n.slice(e.index + 1);
        }
      }
    }
    return i + n + i;
  }
  g.peek = function () {
    return "<";
  };
  m.peek = function () {
    return "!";
  };
  b.peek = function () {
    return "!";
  };
  D.peek = function () {
    return "`";
  };
  var textContentExtractor = require("text-content-extractor") /*id: 413007*/;
  function v(e, t) {
    let r = textContentExtractor.getTextContent(e);
    return !t.options.resourceLink && !!e.url && !e.title && !!e.children && e.children.length === 1 && e.children[0].type === "text" && (r === e.url || "mailto:" + r === e.url) && !!/^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url);
  }
  function x(e, t, r, n) {
    let i;
    let o;
    let u = l(r);
    let a = u === "\"" ? "Quote" : "Apostrophe";
    let c = r.createTracker(n);
    if (v(e, r)) {
      let t = r.stack;
      r.stack = [];
      i = r.enter("autolink");
      let n = c.move("<");
      n += c.move(r.containerPhrasing(e, {
        before: n,
        after: ">",
        ...c.current()
      }));
      n += c.move(">");
      i();
      r.stack = t;
      return n;
    }
    i = r.enter("link");
    o = r.enter("label");
    let s = c.move("[");
    s += c.move(r.containerPhrasing(e, {
      before: s,
      after: "](",
      ...c.current()
    }));
    s += c.move("](");
    o();
    if (!e.url && e.title || /[\0- \u007F]/.test(e.url)) {
      o = r.enter("destinationLiteral");
      s += c.move("<");
      s += c.move(r.safe(e.url, {
        before: s,
        after: ">",
        ...c.current()
      }));
      s += c.move(">");
    } else {
      o = r.enter("destinationRaw");
      s += c.move(r.safe(e.url, {
        before: s,
        after: e.title ? " " : ")",
        ...c.current()
      }));
    }
    o();
    if (e.title) {
      o = r.enter(`title${a}`);
      s += c.move(" " + u);
      s += c.move(r.safe(e.title, {
        before: s,
        after: u,
        ...c.current()
      }));
      s += c.move(u);
      o();
    }
    s += c.move(")");
    i();
    return s;
  }
  function k(e, t, r, n) {
    let i = e.referenceType;
    let o = r.enter("linkReference");
    let u = r.enter("label");
    let a = r.createTracker(n);
    let c = a.move("[");
    let l = r.containerPhrasing(e, {
      before: c,
      after: "]",
      ...a.current()
    });
    c += a.move(l + "][");
    u();
    let s = r.stack;
    r.stack = [];
    u = r.enter("reference");
    let f = r.safe(r.associationId(e), {
      before: c,
      after: "]",
      ...a.current()
    });
    u();
    r.stack = s;
    o();
    if (i !== "full" && l && l === f) {
      if (i === "shortcut") {
        c = c.slice(0, -1);
      } else {
        c += a.move("]");
      }
    } else {
      c += a.move(f + "]");
    }
    return c;
  }
  function w(e) {
    let t = e.options.bullet || "*";
    if (t !== "*" && t !== "+" && t !== "-") {
      throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
    }
    return t;
  }
  function C(e) {
    let t = e.options.rule || "*";
    if (t !== "*" && t !== "-" && t !== "_") {
      throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
    }
    return t;
  }
  x.peek = function (e, t, r) {
    if (v(e, r)) {
      return "<";
    } else {
      return "[";
    }
  };
  k.peek = function () {
    return "[";
  };
  let E = require("event-test-factory") /*id: 564106*/.createEventTest(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "inlineMath", "link", "linkReference", "mdxJsxTextElement", "mdxTextExpression", "strong", "text", "textDirective"]);
  function A(e, t, r, n) {
    let i = function (e) {
      let t = e.options.strong || "*";
      if (t !== "*" && t !== "_") {
        throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
      }
      return t;
    }(r);
    let o = r.enter("strong");
    let u = r.createTracker(n);
    let a = u.move(i + i);
    let c = u.move(r.containerPhrasing(e, {
      after: i,
      before: a,
      ...u.current()
    }));
    let l = c.charCodeAt(0);
    let f = p(n.before.charCodeAt(n.before.length - 1), l, i);
    if (f.inside) {
      c = htmlHexEntityEncoder.toHtmlHexEntity(l) + c.slice(1);
    }
    let h = c.charCodeAt(c.length - 1);
    let d = p(n.after.charCodeAt(0), h, i);
    if (d.inside) {
      c = c.slice(0, -1) + htmlHexEntityEncoder.toHtmlHexEntity(h);
    }
    let g = u.move(i + i);
    o();
    r.attentionEncodeSurroundingInfo = {
      after: d.outside,
      before: f.outside
    };
    return a + c + g;
  }
  A.peek = function (e, t, r) {
    return r.options.strong || "*";
  };
  let S = {
    blockquote: function (e, t, r, i) {
      let o = r.enter("blockquote");
      let u = r.createTracker(i);
      u.move("> ");
      u.shift(2);
      let a = r.indentLines(r.containerFlow(e, u.current()), n);
      o();
      return a;
    },
    break: o,
    code: function (e, t, r, n) {
      let i = function (e) {
        let t = e.options.fence || "`";
        if (t !== "`" && t !== "~") {
          throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
        }
        return t;
      }(r);
      let o = e.value || "";
      let l = i === "`" ? "GraveAccent" : "Tilde";
      if (markdownFenceUtil.validateFenceBlock(e, r)) {
        let e = r.enter("codeIndented");
        let t = r.indentLines(o, c);
        e();
        return t;
      }
      let s = r.createTracker(n);
      let f = i.repeat(Math.max(stringConsecutiveUtil.maxConsecutiveCount(o, i) + 1, 3));
      let p = r.enter("codeFenced");
      let h = s.move(f);
      if (e.lang) {
        let t = r.enter(`codeFencedLang${l}`);
        h += s.move(r.safe(e.lang, {
          before: h,
          after: " ",
          encode: ["`"],
          ...s.current()
        }));
        t();
      }
      if (e.lang && e.meta) {
        let t = r.enter(`codeFencedMeta${l}`);
        h += s.move(" ");
        h += s.move(r.safe(e.meta, {
          before: h,
          after: "\n",
          encode: ["`"],
          ...s.current()
        }));
        t();
      }
      h += s.move("\n");
      if (o) {
        h += s.move(o + "\n");
      }
      h += s.move(f);
      p();
      return h;
    },
    definition: function (e, t, r, n) {
      let i = l(r);
      let o = i === "\"" ? "Quote" : "Apostrophe";
      let u = r.enter("definition");
      let a = r.enter("label");
      let c = r.createTracker(n);
      let s = c.move("[");
      s += c.move(r.safe(r.associationId(e), {
        before: s,
        after: "]",
        ...c.current()
      }));
      s += c.move("]: ");
      a();
      if (!e.url || /[\0- \u007F]/.test(e.url)) {
        a = r.enter("destinationLiteral");
        s += c.move("<");
        s += c.move(r.safe(e.url, {
          before: s,
          after: ">",
          ...c.current()
        }));
        s += c.move(">");
      } else {
        a = r.enter("destinationRaw");
        s += c.move(r.safe(e.url, {
          before: s,
          after: e.title ? " " : "\n",
          ...c.current()
        }));
      }
      a();
      if (e.title) {
        a = r.enter(`title${o}`);
        s += c.move(" " + i);
        s += c.move(r.safe(e.title, {
          before: s,
          after: i,
          ...c.current()
        }));
        s += c.move(i);
        a();
      }
      u();
      return s;
    },
    emphasis: h,
    hardBreak: o,
    heading: function (e, t, r, n) {
      let i = Math.max(Math.min(6, e.depth || 1), 1);
      let o = r.createTracker(n);
      if (eventTestValidator.validateEventNode(e, r)) {
        let t = r.enter("headingSetext");
        let n = r.enter("phrasing");
        let u = r.containerPhrasing(e, {
          ...o.current(),
          before: "\n",
          after: "\n"
        });
        n();
        t();
        return u + "\n" + (i === 1 ? "=" : "-").repeat(u.length - (Math.max(u.lastIndexOf("\r"), u.lastIndexOf("\n")) + 1));
      }
      let u = "#".repeat(i);
      let a = r.enter("headingAtx");
      let c = r.enter("phrasing");
      o.move(u + " ");
      let l = r.containerPhrasing(e, {
        before: "# ",
        after: "\n",
        ...o.current()
      });
      if (/^[\t ]/.test(l)) {
        l = htmlHexEntityEncoder.toHtmlHexEntity(l.charCodeAt(0)) + l.slice(1);
      }
      l = l ? u + " " + l : u;
      if (r.options.closeAtx) {
        l += " " + u;
      }
      c();
      a();
      return l;
    },
    html: g,
    image: m,
    imageReference: b,
    inlineCode: D,
    link: x,
    linkReference: k,
    list: function (e, t, r, n) {
      let i = r.enter("list");
      let o = r.bulletCurrent;
      let u = e.ordered ? function (e) {
        let t = e.options.bulletOrdered || ".";
        if (t !== "." && t !== ")") {
          throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
        }
        return t;
      }(r) : w(r);
      let a = e.ordered ? u === "." ? ")" : "." : function (e) {
        let t = w(e);
        let r = e.options.bulletOther;
        if (!r) {
          if (t === "*") {
            return "-";
          } else {
            return "*";
          }
        }
        if (r !== "*" && r !== "+" && r !== "-") {
          throw Error("Cannot serialize items with `" + r + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
        }
        if (r === t) {
          throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + r + "`) to be different");
        }
        return r;
      }(r);
      let c = !!t && !!r.bulletLastUsed && u === r.bulletLastUsed;
      if (!e.ordered) {
        let t = e.children ? e.children[0] : undefined;
        if ((u === "*" || u === "-") && !!t && (!t.children || !t.children[0]) && r.stack[r.stack.length - 1] === "list" && r.stack[r.stack.length - 2] === "listItem" && r.stack[r.stack.length - 3] === "list" && r.stack[r.stack.length - 4] === "listItem" && r.indexStack[r.indexStack.length - 1] === 0 && r.indexStack[r.indexStack.length - 2] === 0 && r.indexStack[r.indexStack.length - 3] === 0) {
          c = true;
        }
        if (C(r) === u && t) {
          let t = -1;
          while (++t < e.children.length) {
            let r = e.children[t];
            if (r && r.type === "listItem" && r.children && r.children[0] && r.children[0].type === "thematicBreak") {
              c = true;
              break;
            }
          }
        }
      }
      if (c) {
        u = a;
      }
      r.bulletCurrent = u;
      let l = r.containerFlow(e, n);
      r.bulletLastUsed = u;
      r.bulletCurrent = o;
      i();
      return l;
    },
    listItem: function (e, t, r, n) {
      let i = function (e) {
        let t = e.options.listItemIndent || "one";
        if (t !== "tab" && t !== "one" && t !== "mixed") {
          throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
        }
        return t;
      }(r);
      let o = r.bulletCurrent || w(r);
      if (t && t.type === "list" && t.ordered) {
        o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (r.options.incrementListMarker === false ? 0 : t.children.indexOf(e)) + o;
      }
      let u = o.length + 1;
      if (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) {
        u = Math.ceil(u / 4) * 4;
      }
      let a = r.createTracker(n);
      a.move(o + " ".repeat(u - o.length));
      a.shift(u);
      let c = r.enter("listItem");
      let l = r.indentLines(r.containerFlow(e, a.current()), function (e, t, r) {
        if (t) {
          return (r ? "" : " ".repeat(u)) + e;
        } else {
          return (r ? o : o + " ".repeat(u - o.length)) + e;
        }
      });
      c();
      return l;
    },
    paragraph: function (e, t, r, n) {
      let i = r.enter("paragraph");
      let o = r.enter("phrasing");
      let u = r.containerPhrasing(e, n);
      o();
      i();
      return u;
    },
    root: function (e, t, r, n) {
      return (e.children.some(function (e) {
        return E(e);
      }) ? r.containerPhrasing : r.containerFlow).call(r, e, n);
    },
    strong: A,
    text: function (e, t, r, n) {
      return r.safe(e.value, n);
    },
    thematicBreak: function (e, t, r) {
      let n = (C(r) + (r.options.ruleSpaces ? " " : "")).repeat(function (e) {
        let t = e.options.ruleRepetition || 3;
        if (t < 3) {
          throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
        }
        return t;
      }(r));
      if (r.options.ruleSpaces) {
        return n.slice(0, -1);
      } else {
        return n;
      }
    }
  };
  require.d(exports, {
    markdownHandlers: function () {
      return S;
    }
  });
}