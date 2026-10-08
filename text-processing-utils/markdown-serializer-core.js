// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'serializeMarkdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 482428
         */
module.exports = function (module, exports, require) {
  var propertyHandlerDispatcher = require("property-handler-dispatcher") /*id: 719028*/;
  let i = {}.hasOwnProperty;
  var markdownSerializerHandlers = require("markdown-serializer-handlers") /*id: 109669*/;
  var markdownFenceUtil = require("markdown-fence-util") /*id: 125036*/;
  var eventTestValidator = require("event-test-validator") /*id: 120741*/;
  let c = [function (e, t, r, n) {
    if (t.type === "code" && markdownFenceUtil.validateFenceBlock(t, n) && (e.type === "list" || e.type === t.type && markdownFenceUtil.validateFenceBlock(e, n))) {
      return false;
    }
    if ("spread" in r && typeof r.spread == "boolean") {
      if (e.type === "paragraph" && (e.type === t.type || t.type === "definition" || t.type === "heading" && eventTestValidator.validateEventNode(t, n))) {
        return;
      }
      return +!!r.spread;
    }
  }];
  let l = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];
  let s = [{
    character: "\t",
    after: "[\\r\\n]",
    inConstruct: "phrasing"
  }, {
    character: "\t",
    before: "[\\r\\n]",
    inConstruct: "phrasing"
  }, {
    character: "\t",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
  }, {
    character: "\r",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx"]
  }, {
    character: "\n",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx"]
  }, {
    character: " ",
    after: "[\\r\\n]",
    inConstruct: "phrasing"
  }, {
    character: " ",
    before: "[\\r\\n]",
    inConstruct: "phrasing"
  }, {
    character: " ",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
  }, {
    character: "!",
    after: "\\[",
    inConstruct: "phrasing",
    notInConstruct: l
  }, {
    character: "\"",
    inConstruct: "titleQuote"
  }, {
    atBreak: true,
    character: "#"
  }, {
    character: "#",
    inConstruct: "headingAtx",
    after: "(?:[\r\n]|$)"
  }, {
    character: "&",
    after: "[#A-Za-z]",
    inConstruct: "phrasing"
  }, {
    character: "'",
    inConstruct: "titleApostrophe"
  }, {
    character: "(",
    inConstruct: "destinationRaw"
  }, {
    before: "\\]",
    character: "(",
    inConstruct: "phrasing",
    notInConstruct: l
  }, {
    atBreak: true,
    before: "\\d+",
    character: ")"
  }, {
    character: ")",
    inConstruct: "destinationRaw"
  }, {
    atBreak: true,
    character: "*",
    after: "(?:[ \t\r\n*])"
  }, {
    character: "*",
    inConstruct: "phrasing",
    notInConstruct: l
  }, {
    atBreak: true,
    character: "+",
    after: "(?:[ \t\r\n])"
  }, {
    atBreak: true,
    character: "-",
    after: "(?:[ \t\r\n-])"
  }, {
    atBreak: true,
    before: "\\d+",
    character: ".",
    after: "(?:[ \t\r\n]|$)"
  }, {
    atBreak: true,
    character: "<",
    after: "[!/?A-Za-z]"
  }, {
    character: "<",
    after: "[!/?A-Za-z]",
    inConstruct: "phrasing",
    notInConstruct: l
  }, {
    character: "<",
    inConstruct: "destinationLiteral"
  }, {
    atBreak: true,
    character: "="
  }, {
    atBreak: true,
    character: ">"
  }, {
    character: ">",
    inConstruct: "destinationLiteral"
  }, {
    atBreak: true,
    character: "["
  }, {
    character: "[",
    inConstruct: "phrasing",
    notInConstruct: l
  }, {
    character: "[",
    inConstruct: ["label", "reference"]
  }, {
    character: "\\",
    after: "[\\r\\n]",
    inConstruct: "phrasing"
  }, {
    character: "]",
    inConstruct: ["label", "reference"]
  }, {
    atBreak: true,
    character: "_"
  }, {
    character: "_",
    inConstruct: "phrasing",
    notInConstruct: l
  }, {
    atBreak: true,
    character: "`"
  }, {
    character: "`",
    inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
  }, {
    character: "`",
    inConstruct: "phrasing",
    notInConstruct: l
  }, {
    atBreak: true,
    character: "~"
  }];
  var htmlEntityDecoder = require("html-entity-decoder") /*id: 789710*/;
  function p(e) {
    if (e.label || !e.identifier) {
      return e.label || "";
    } else {
      return htmlEntityDecoder.decodeEscapeChars(e.identifier);
    }
  }
  function h(e) {
    if (!e._compiled) {
      let t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
      e._compiled = RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g");
    }
    return e._compiled;
  }
  var htmlHexEntityEncoder = require("html-hex-entity-encoder") /*id: 328506*/;
  let g = /\r?\n|\r/g;
  function m(e, t) {
    let r;
    let n = [];
    let i = 0;
    let o = 0;
    while (r = g.exec(e)) {
      u(e.slice(i, r.index));
      n.push(r[0]);
      i = r.index + r[0].length;
      o++;
    }
    u(e.slice(i));
    return n.join("");
    function u(e) {
      n.push(t(e, o, !e));
    }
  }
  var constructCheckUtil = require("construct-check-util") /*id: 56001*/;
  function D(e, t) {
    return e - t;
  }
  function y(e, t) {
    let r;
    let n = /\\(?=[!-/:-@[-`{-~])/g;
    let i = [];
    let o = [];
    let u = e + t;
    let a = -1;
    let c = 0;
    while (r = n.exec(u)) {
      i.push(r.index);
    }
    while (++a < i.length) {
      if (c !== i[a]) {
        o.push(e.slice(c, i[a]));
      }
      o.push("\\");
      c = i[a];
    }
    o.push(e.slice(c));
    return o.join("");
  }
  function v(e) {
    let t = e || {};
    let r = t.now || {};
    let n = t.lineShift || 0;
    let i = r.line || 1;
    let o = r.column || 1;
    return {
      move: function (e) {
        let t = e || "";
        let r = t.split(/\r?\n|\r/g);
        let u = r[r.length - 1];
        i += r.length - 1;
        o = r.length === 1 ? o + u.length : 1 + u.length + n;
        return t;
      },
      current: function () {
        return {
          now: {
            line: i,
            column: o
          },
          lineShift: n
        };
      },
      shift: function (e) {
        n += e;
      }
    };
  }
  function x(e, t) {
    let r = {
      associationId: p,
      containerPhrasing: E,
      containerFlow: A,
      createTracker: v,
      compilePattern: h,
      enter: function (e) {
        r.stack.push(e);
        return function () {
          r.stack.pop();
        };
      },
      handlers: {
        ...markdownSerializerHandlers.markdownHandlers
      },
      handle: undefined,
      indentLines: m,
      indexStack: [],
      join: [...c],
      options: {},
      safe: S,
      stack: [],
      unsafe: [...s]
    };
    (function e(t, r) {
      var n;
      var o;
      var u;
      var a;
      let c;
      let l = -1;
      if (r.extensions) {
        while (++l < r.extensions.length) {
          e(t, r.extensions[l]);
        }
      }
      for (c in r) {
        if (i.call(r, c)) {
          switch (c) {
            case "extensions":
              break;
            case "unsafe":
            case "join":
              n = t[c];
              if (o = r[c]) {
                n.push(...o);
              }
              break;
            case "handlers":
              u = t[c];
              if (a = r[c]) {
                Object.assign(u, a);
              }
              break;
            default:
              t.options[c] = r[c];
          }
        }
      }
      return t;
    })(r, t || {});
    if (r.options.tightDefinitions) {
      r.join.push(C);
    }
    r.handle = propertyHandlerDispatcher.createPropertyHandler("type", {
      invalid: k,
      unknown: w,
      handlers: r.handlers
    });
    let u = r.handle(e, undefined, r, {
      before: "\n",
      after: "\n",
      now: {
        line: 1,
        column: 1
      },
      lineShift: 0
    });
    if (u && u.charCodeAt(u.length - 1) !== 10 && u.charCodeAt(u.length - 1) !== 13) {
      u += "\n";
    }
    return u;
  }
  function k(e) {
    throw Error("Cannot handle value `" + e + "`, expected node");
  }
  function w(e) {
    throw Error("Cannot handle unknown node `" + e.type + "`");
  }
  function C(e, t) {
    if (e.type === "definition" && e.type === t.type) {
      return 0;
    }
  }
  function E(e, t) {
    return function (e, t, r) {
      let n;
      let i = t.indexStack;
      let o = e.children || [];
      let u = [];
      let a = -1;
      let c = r.before;
      i.push(-1);
      let l = t.createTracker(r);
      while (++a < o.length) {
        let s;
        let f = o[a];
        i[i.length - 1] = a;
        if (a + 1 < o.length) {
          let r = t.handle.handlers[o[a + 1].type];
          if (r && r.peek) {
            r = r.peek;
          }
          s = r ? r(o[a + 1], e, t, {
            before: "",
            after: "",
            ...l.current()
          }).charAt(0) : "";
        } else {
          s = r.after;
        }
        if (u.length > 0 && (c === "\r" || c === "\n") && f.type === "html") {
          u[u.length - 1] = u[u.length - 1].replace(/(\r?\n|\r)$/, " ");
          c = " ";
          (l = t.createTracker(r)).move(u.join(""));
        }
        let p = t.handle(f, e, t, {
          ...l.current(),
          after: s,
          before: c
        });
        if (n && n === p.slice(0, 1)) {
          p = htmlHexEntityEncoder.toHtmlHexEntity(n.charCodeAt(0)) + p.slice(1);
        }
        let h = t.attentionEncodeSurroundingInfo;
        t.attentionEncodeSurroundingInfo = undefined;
        n = undefined;
        if (h) {
          if (u.length > 0 && h.before && c === u[u.length - 1].slice(-1)) {
            u[u.length - 1] = u[u.length - 1].slice(0, -1) + htmlHexEntityEncoder.toHtmlHexEntity(c.charCodeAt(0));
          }
          if (h.after) {
            n = s;
          }
        }
        l.move(p);
        u.push(p);
        c = p.slice(-1);
      }
      i.pop();
      return u.join("");
    }(e, this, t);
  }
  function A(e, t) {
    return function (e, t, r) {
      let n = t.indexStack;
      let i = e.children || [];
      let o = t.createTracker(r);
      let u = [];
      let a = -1;
      for (n.push(-1); ++a < i.length;) {
        let r = i[a];
        n[n.length - 1] = a;
        u.push(o.move(t.handle(r, e, t, {
          before: "\n",
          after: "\n",
          ...o.current()
        })));
        if (r.type !== "list") {
          t.bulletLastUsed = undefined;
        }
        if (a < i.length - 1) {
          u.push(o.move(function (e, t, r, n) {
            let i = n.join.length;
            while (i--) {
              let o = n.join[i](e, t, r, n);
              if (o === true || o === 1) {
                break;
              }
              if (typeof o == "number") {
                return "\n".repeat(1 + o);
              }
              if (o === false) {
                return "\n\n<!---->\n\n";
              }
            }
            return "\n\n";
          }(r, i[a + 1], e, t)));
        }
      }
      n.pop();
      return u.join("");
    }(e, this, t);
  }
  function S(e, t) {
    return function (e, t, r) {
      let n = (r.before || "") + (t || "") + (r.after || "");
      let i = [];
      let o = [];
      let u = {};
      let a = -1;
      while (++a < e.unsafe.length) {
        let t;
        let r = e.unsafe[a];
        if (!constructCheckUtil.checkConstruct(e.stack, r)) {
          continue;
        }
        let o = e.compilePattern(r);
        while (t = o.exec(n)) {
          let e = "before" in r || !!r.atBreak;
          let n = "after" in r;
          let o = t.index + (e ? t[1].length : 0);
          if (i.includes(o)) {
            if (u[o].before && !e) {
              u[o].before = false;
            }
            if (u[o].after && !n) {
              u[o].after = false;
            }
          } else {
            i.push(o);
            u[o] = {
              before: e,
              after: n
            };
          }
        }
      }
      i.sort(D);
      let c = r.before ? r.before.length : 0;
      let l = n.length - (r.after ? r.after.length : 0);
      for (a = -1; ++a < i.length;) {
        let e = i[a];
        if (!(e < c) && !(e >= l) && (!(e + 1 < l) || i[a + 1] !== e + 1 || !u[e].after || u[e + 1].before || u[e + 1].after) && (i[a - 1] !== e - 1 || !u[e].before || u[e - 1].before || u[e - 1].after)) {
          if (c !== e) {
            o.push(y(n.slice(c, e), "\\"));
          }
          c = e;
          if (!/[!-/:-@[-`{-~]/.test(n.charAt(e)) || r.encode && r.encode.includes(n.charAt(e))) {
            o.push(htmlHexEntityEncoder.toHtmlHexEntity(n.charCodeAt(e)));
            c++;
          } else {
            o.push("\\");
          }
        }
      }
      o.push(y(n.slice(c, l), r.after));
      return o.join("");
    }(this, e, t);
  }
  require.d(exports, {
    serializeMarkdown: function () {
      return x;
    }
  });
}