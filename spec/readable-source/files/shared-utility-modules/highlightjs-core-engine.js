// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 58488
         */
module.exports = function (module, exports, require) {
  class a {
    constructor(e) {
      if (e.data === undefined) {
        e.data = {};
      }
      this.data = e.data;
      this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function t(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(e, ...a) {
    let t = Object.create(null);
    for (let a in e) {
      t[a] = e[a];
    }
    a.forEach(function (e) {
      for (let a in e) {
        t[a] = e[a];
      }
    });
    return t;
  }
  let n = e => !!e.scope;
  let o = (e, {
    prefix: a
  }) => {
    if (e.startsWith("language:")) {
      return e.replace("language:", "language-");
    }
    if (e.includes(".")) {
      let t = e.split(".");
      return [`${a}${t.shift()}`, ...t.map((e, a) => `${e}${"_".repeat(a + 1)}`)].join(" ");
    }
    return `${a}${e}`;
  };
  class i {
    constructor(e, a) {
      this.buffer = "";
      this.classPrefix = a.classPrefix;
      e.walk(this);
    }
    addText(e) {
      this.buffer += t(e);
    }
    openNode(e) {
      if (!n(e)) {
        return;
      }
      let a = o(e.scope, {
        prefix: this.classPrefix
      });
      this.span(a);
    }
    closeNode(e) {
      if (n(e)) {
        this.buffer += "</span>";
      }
    }
    value() {
      return this.buffer;
    }
    span(e) {
      this.buffer += `<span class="${e}">`;
    }
  }
  let s = (e = {}) => {
    let a = {
      children: []
    };
    Object.assign(a, e);
    return a;
  };
  class l {
    constructor() {
      this.rootNode = s();
      this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(e) {
      this.top.children.push(e);
    }
    openNode(e) {
      let a = s({
        scope: e
      });
      this.add(a);
      this.stack.push(a);
    }
    closeNode() {
      if (this.stack.length > 1) {
        return this.stack.pop();
      }
    }
    closeAllNodes() {
      while (this.closeNode());
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e) {
      return this.constructor._walk(e, this.rootNode);
    }
    static _walk(e, a) {
      if (typeof a == "string") {
        e.addText(a);
      } else if (a.children) {
        e.openNode(a);
        a.children.forEach(a => this._walk(e, a));
        e.closeNode(a);
      }
      return e;
    }
    static _collapse(e) {
      if (typeof e != "string" && e.children) {
        if (e.children.every(e => typeof e == "string")) {
          e.children = [e.children.join("")];
        } else {
          e.children.forEach(e => {
            l._collapse(e);
          });
        }
      }
    }
  }
  class c extends l {
    constructor(e) {
      super();
      this.options = e;
    }
    addText(e) {
      if (e !== "") {
        this.add(e);
      }
    }
    startScope(e) {
      this.openNode(e);
    }
    endScope() {
      this.closeNode();
    }
    __addSublanguage(e, a) {
      let t = e.root;
      if (a) {
        t.scope = `language:${a}`;
      }
      this.add(t);
    }
    toHTML() {
      return new i(this, this.options).value();
    }
    finalize() {
      this.closeAllNodes();
      return true;
    }
  }
  function u(e) {
    if (e) {
      if (typeof e == "string") {
        return e;
      } else {
        return e.source;
      }
    } else {
      return null;
    }
  }
  function d(e) {
    return g("(?=", e, ")");
  }
  function p(e) {
    return g("(?:", e, ")*");
  }
  function f(e) {
    return g("(?:", e, ")?");
  }
  function g(...e) {
    return e.map(e => u(e)).join("");
  }
  function y(...e) {
    return "(" + (function (e) {
      let a = e[e.length - 1];
      if (typeof a == "object" && a.constructor === Object) {
        e.splice(e.length - 1, 1);
        return a;
      } else {
        return {};
      }
    }(e).capture ? "" : "?:") + e.map(e => u(e)).join("|") + ")";
  }
  function h(e) {
    return RegExp(e.toString() + "|").exec("").length - 1;
  }
  let m = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function _(e, {
    joinWith: a
  }) {
    let t = 0;
    return e.map(e => {
      let a = t += 1;
      let r = u(e);
      let n = "";
      while (r.length > 0) {
        let e = m.exec(r);
        if (!e) {
          n += r;
          break;
        }
        n += r.substring(0, e.index);
        r = r.substring(e.index + e[0].length);
        if (e[0][0] === "\\" && e[1]) {
          n += "\\" + String(Number(e[1]) + a);
        } else {
          n += e[0];
          if (e[0] === "(") {
            t++;
          }
        }
      }
      return n;
    }).map(e => `(${e})`).join(a);
  }
  let k = "[a-zA-Z]\\w*";
  let b = "[a-zA-Z_]\\w*";
  let w = "\\b\\d+(\\.\\d+)?";
  let v = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  let z = "\\b(0b[01]+)";
  let E = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  };
  let D = function (e, a, t = {}) {
    let n = r({
      scope: "comment",
      begin: e,
      end: a,
      contains: []
    }, t);
    n.contains.push({
      scope: "doctag",
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    let o = y("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
    n.contains.push({
      begin: g(/[ ]+/, "(", o, /[.]?[:]?([.][ ]|[ ])/, "){3}")
    });
    return n;
  };
  let x = D("//", "$");
  let A = D("/\\*", "\\*/");
  let C = D("#", "$");
  var N = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [E]
    },
    BACKSLASH_ESCAPE: E,
    BINARY_NUMBER_MODE: {
      scope: "number",
      begin: z,
      relevance: 0
    },
    BINARY_NUMBER_RE: z,
    COMMENT: D,
    C_BLOCK_COMMENT_MODE: A,
    C_LINE_COMMENT_MODE: x,
    C_NUMBER_MODE: {
      scope: "number",
      begin: v,
      relevance: 0
    },
    C_NUMBER_RE: v,
    END_SAME_AS_BEGIN: function (e) {
      return Object.assign(e, {
        "on:begin": (e, a) => {
          a.data._beginMatch = e[1];
        },
        "on:end": (e, a) => {
          if (a.data._beginMatch !== e[1]) {
            a.ignoreMatch();
          }
        }
      });
    },
    HASH_COMMENT_MODE: C,
    IDENT_RE: k,
    MATCH_NOTHING_RE: /\b\B/,
    METHOD_GUARD: {
      begin: "\\.\\s*" + b,
      relevance: 0
    },
    NUMBER_MODE: {
      scope: "number",
      begin: w,
      relevance: 0
    },
    NUMBER_RE: w,
    PHRASAL_WORDS_MODE: {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    QUOTE_STRING_MODE: {
      scope: "string",
      begin: "\"",
      end: "\"",
      illegal: "\\n",
      contains: [E]
    },
    REGEXP_MODE: {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [E, {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [E]
      }]
    },
    RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e = {}) => {
      let a = /^#![ ]*\//;
      if (e.binary) {
        e.begin = g(a, /.*\b/, e.binary, /\b.*/);
      }
      return r({
        scope: "meta",
        begin: a,
        end: /$/,
        relevance: 0,
        "on:begin": (e, a) => {
          if (e.index !== 0) {
            a.ignoreMatch();
          }
        }
      }, e);
    },
    TITLE_MODE: {
      scope: "title",
      begin: k,
      relevance: 0
    },
    UNDERSCORE_IDENT_RE: b,
    UNDERSCORE_TITLE_MODE: {
      scope: "title",
      begin: b,
      relevance: 0
    }
  });
  function F(e, a) {
    if (e.input[e.index - 1] === ".") {
      a.ignoreMatch();
    }
  }
  function S(e, a) {
    if (e.className !== undefined) {
      e.scope = e.className;
      delete e.className;
    }
  }
  function O(e, a) {
    if (a && e.beginKeywords) {
      e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
      e.__beforeBegin = F;
      e.keywords = e.keywords || e.beginKeywords;
      delete e.beginKeywords;
      if (e.relevance === undefined) {
        e.relevance = 0;
      }
    }
  }
  function M(e, a) {
    if (Array.isArray(e.illegal)) {
      e.illegal = y(...e.illegal);
    }
  }
  function j(e, a) {
    if (e.match) {
      if (e.begin || e.end) {
        throw Error("begin & end are not supported with match");
      }
      e.begin = e.match;
      delete e.match;
    }
  }
  function T(e, a) {
    if (e.relevance === undefined) {
      e.relevance = 1;
    }
  }
  let B = (e, a) => {
    if (!e.beforeMatch) {
      return;
    }
    if (e.starts) {
      throw Error("beforeMatch cannot be used with starts");
    }
    let t = Object.assign({}, e);
    Object.keys(e).forEach(a => {
      delete e[a];
    });
    e.keywords = t.keywords;
    e.begin = g(t.beforeMatch, d(t.begin));
    e.starts = {
      relevance: 0,
      contains: [Object.assign(t, {
        endsParent: true
      })]
    };
    e.relevance = 0;
    delete t.beforeMatch;
  };
  let I = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
  let R = {};
  let L = e => {};
  let P = (e, ...a) => {};
  let q = (e, a) => {
    if (!R[`${e}/${a}`]) {
      R[`${e}/${a}`] = true;
    }
  };
  let U = Error();
  function $(e, a, {
    key: t
  }) {
    let r = 0;
    let n = e[t];
    let o = {};
    let i = {};
    for (let e = 1; e <= a.length; e++) {
      i[e + r] = n[e];
      o[e + r] = true;
      r += h(a[e - 1]);
    }
    e[t] = i;
    e[t]._emit = o;
    e[t]._multi = true;
  }
  function H(e) {
    if (e.scope && typeof e.scope == "object" && e.scope !== null) {
      e.beginScope = e.scope;
      delete e.scope;
    }
    if (typeof e.beginScope == "string") {
      e.beginScope = {
        _wrap: e.beginScope
      };
    }
    if (typeof e.endScope == "string") {
      e.endScope = {
        _wrap: e.endScope
      };
    }
    (function (e) {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) {
          L("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
          throw U;
        }
        if (typeof e.beginScope != "object" || e.beginScope === null) {
          L("beginScope must be object");
          throw U;
        }
        $(e, e.begin, {
          key: "beginScope"
        });
        e.begin = _(e.begin, {
          joinWith: ""
        });
      }
    })(e);
    (function (e) {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) {
          L("skip, excludeEnd, returnEnd not compatible with endScope: {}");
          throw U;
        }
        if (typeof e.endScope != "object" || e.endScope === null) {
          L("endScope must be object");
          throw U;
        }
        $(e, e.end, {
          key: "endScope"
        });
        e.end = _(e.end, {
          joinWith: ""
        });
      }
    })(e);
  }
  class K extends Error {
    constructor(e, a) {
      super(e);
      this.name = "HTMLInjectionError";
      this.html = a;
    }
  }
  let G = Symbol("nomatch");
  let Z = function (e) {
    let n = Object.create(null);
    let o = Object.create(null);
    let i = [];
    let s = true;
    let l = "Could not find the language '{}', did you forget to load/include a language module?";
    let m = {
      disableAutodetect: true,
      name: "Plain text",
      contains: []
    };
    let k = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      __emitter: c
    };
    function b(e) {
      return k.noHighlightRe.test(e);
    }
    function w(e, a, t) {
      let r = "";
      let n = "";
      if (typeof a == "object") {
        r = e;
        t = a.ignoreIllegals;
        n = a.language;
      } else {
        q("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
        q("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
        n = e;
        r = a;
      }
      if (t === undefined) {
        t = true;
      }
      let o = {
        code: r,
        language: n
      };
      R("before:highlight", o);
      let i = o.result ? o.result : v(o.language, o.code, t);
      i.code = o.code;
      R("after:highlight", i);
      return i;
    }
    function v(e, o, i, c) {
      let d = Object.create(null);
      function p() {
        if (!C.keywords) {
          F.addText(R);
          return;
        }
        let e = 0;
        C.keywordPatternRe.lastIndex = 0;
        let a = C.keywordPatternRe.exec(R);
        let t = "";
        while (a) {
          t += R.substring(e, a.index);
          let r = E.case_insensitive ? a[0].toLowerCase() : a[0];
          let n = C.keywords[r];
          if (n) {
            let [e, o] = n;
            F.addText(t);
            t = "";
            d[r] = (d[r] || 0) + 1;
            if (d[r] <= 7) {
              P += o;
            }
            if (e.startsWith("_")) {
              t += a[0];
            } else {
              let t = E.classNameAliases[e] || e;
              g(a[0], t);
            }
          } else {
            t += a[0];
          }
          e = C.keywordPatternRe.lastIndex;
          a = C.keywordPatternRe.exec(R);
        }
        t += R.substring(e);
        F.addText(t);
      }
      function f() {
        if (C.subLanguage != null) {
          (function () {
            if (R === "") {
              return;
            }
            let e = null;
            if (typeof C.subLanguage == "string") {
              if (!n[C.subLanguage]) {
                F.addText(R);
                return;
              }
              e = v(C.subLanguage, R, true, N[C.subLanguage]);
              N[C.subLanguage] = e._top;
            } else {
              e = z(R, C.subLanguage.length ? C.subLanguage : null);
            }
            if (C.relevance > 0) {
              P += e.relevance;
            }
            F.__addSublanguage(e._emitter, e.language);
          })();
        } else {
          p();
        }
        R = "";
      }
      function g(e, a) {
        if (e !== "") {
          F.startScope(a);
          F.addText(e);
          F.endScope();
        }
      }
      function y(e, a) {
        let t = 1;
        let r = a.length - 1;
        while (t <= r) {
          if (!e._emit[t]) {
            t++;
            continue;
          }
          let r = E.classNameAliases[e[t]] || e[t];
          let n = a[t];
          if (r) {
            g(n, r);
          } else {
            R = n;
            p();
            R = "";
          }
          t++;
        }
      }
      function m(e, a) {
        if (e.scope && typeof e.scope == "string") {
          F.openNode(E.classNameAliases[e.scope] || e.scope);
        }
        if (e.beginScope) {
          if (e.beginScope._wrap) {
            g(R, E.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap);
            R = "";
          } else if (e.beginScope._multi) {
            y(e.beginScope, a);
            R = "";
          }
        }
        return C = Object.create(e, {
          parent: {
            value: C
          }
        });
      }
      let b = {};
      function w(t, r) {
        let n = r && r[0];
        R += t;
        if (n == null) {
          f();
          return 0;
        }
        if (b.type === "begin" && r.type === "end" && b.index === r.index && n === "") {
          R += o.slice(r.index, r.index + 1);
          if (!s) {
            let a = Error(`0 width match regex (${e})`);
            a.languageName = e;
            a.badRule = b.rule;
            throw a;
          }
          return 1;
        }
        b = r;
        if (r.type === "begin") {
          return function (e) {
            let t = e[0];
            let r = e.rule;
            let n = new a(r);
            for (let a of [r.__beforeBegin, r["on:begin"]]) {
              if (a && (a(e, n), n.isMatchIgnored)) {
                if (C.matcher.regexIndex === 0) {
                  R += t[0];
                  return 1;
                } else {
                  $ = true;
                  return 0;
                }
              }
            }
            if (r.skip) {
              R += t;
            } else {
              if (r.excludeBegin) {
                R += t;
              }
              f();
              if (!r.returnBegin && !r.excludeBegin) {
                R = t;
              }
            }
            m(r, e);
            if (r.returnBegin) {
              return 0;
            } else {
              return t.length;
            }
          }(r);
        }
        if (r.type !== "illegal" || i) {
          if (r.type === "end") {
            let e = function (e) {
              let t = e[0];
              let r = o.substring(e.index);
              let n = function e(t, r, n) {
                let o = function (e, a) {
                  let t = e && e.exec(a);
                  return t && t.index === 0;
                }(t.endRe, n);
                if (o) {
                  if (t["on:end"]) {
                    let e = new a(t);
                    t["on:end"](r, e);
                    if (e.isMatchIgnored) {
                      o = false;
                    }
                  }
                  if (o) {
                    while (t.endsParent && t.parent) {
                      t = t.parent;
                    }
                    return t;
                  }
                }
                if (t.endsWithParent) {
                  return e(t.parent, r, n);
                }
              }(C, e, r);
              if (!n) {
                return G;
              }
              let i = C;
              if (C.endScope && C.endScope._wrap) {
                f();
                g(t, C.endScope._wrap);
              } else if (C.endScope && C.endScope._multi) {
                f();
                y(C.endScope, e);
              } else if (i.skip) {
                R += t;
              } else {
                if (!i.returnEnd && !i.excludeEnd) {
                  R += t;
                }
                f();
                if (i.excludeEnd) {
                  R = t;
                }
              }
              do {
                if (C.scope) {
                  F.closeNode();
                }
                if (!C.skip && !C.subLanguage) {
                  P += C.relevance;
                }
                C = C.parent;
              } while (C !== n.parent);
              if (n.starts) {
                m(n.starts, e);
              }
              if (i.returnEnd) {
                return 0;
              } else {
                return t.length;
              }
            }(r);
            if (e !== G) {
              return e;
            }
          }
        } else {
          let e = Error("Illegal lexeme \"" + n + "\" for mode \"" + (C.scope || "<unnamed>") + "\"");
          e.mode = C;
          throw e;
        }
        if (r.type === "illegal" && n === "") {
          R += "\n";
          return 1;
        }
        if (U > 100000 && U > r.index * 3) {
          throw Error("potential infinite loop, way more iterations than matches");
        }
        R += n;
        return n.length;
      }
      let E = A(e);
      if (!E) {
        L(l.replace("{}", e));
        throw Error("Unknown language: \"" + e + "\"");
      }
      let D = function (e) {
        function a(a, t) {
          return RegExp(u(a), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (t ? "g" : ""));
        }
        class t {
          constructor() {
            this.matchIndexes = {};
            this.regexes = [];
            this.matchAt = 1;
            this.position = 0;
          }
          addRule(e, a) {
            a.position = this.position++;
            this.matchIndexes[this.matchAt] = a;
            this.regexes.push([a, e]);
            this.matchAt += h(e) + 1;
          }
          compile() {
            if (this.regexes.length === 0) {
              this.exec = () => null;
            }
            let e = this.regexes.map(e => e[1]);
            this.matcherRe = a(_(e, {
              joinWith: "|"
            }), true);
            this.lastIndex = 0;
          }
          exec(e) {
            this.matcherRe.lastIndex = this.lastIndex;
            let a = this.matcherRe.exec(e);
            if (!a) {
              return null;
            }
            let t = a.findIndex((e, a) => a > 0 && e !== undefined);
            let r = this.matchIndexes[t];
            a.splice(0, t);
            return Object.assign(a, r);
          }
        }
        class n {
          constructor() {
            this.rules = [];
            this.multiRegexes = [];
            this.count = 0;
            this.lastIndex = 0;
            this.regexIndex = 0;
          }
          getMatcher(e) {
            if (this.multiRegexes[e]) {
              return this.multiRegexes[e];
            }
            let a = new t();
            this.rules.slice(e).forEach(([e, t]) => a.addRule(e, t));
            a.compile();
            this.multiRegexes[e] = a;
            return a;
          }
          resumingScanAtSamePosition() {
            return this.regexIndex !== 0;
          }
          considerAll() {
            this.regexIndex = 0;
          }
          addRule(e, a) {
            this.rules.push([e, a]);
            if (a.type === "begin") {
              this.count++;
            }
          }
          exec(e) {
            let a = this.getMatcher(this.regexIndex);
            a.lastIndex = this.lastIndex;
            let t = a.exec(e);
            if (this.resumingScanAtSamePosition()) {
              if (t && t.index === this.lastIndex) ;else {
                let a = this.getMatcher(0);
                a.lastIndex = this.lastIndex + 1;
                t = a.exec(e);
              }
            }
            if (t) {
              this.regexIndex += t.position + 1;
              if (this.regexIndex === this.count) {
                this.considerAll();
              }
            }
            return t;
          }
        }
        e.compilerExtensions ||= [];
        if (e.contains && e.contains.includes("self")) {
          throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
        }
        e.classNameAliases = r(e.classNameAliases || {});
        return function t(o, i) {
          if (o.isCompiled) {
            return o;
          }
          [S, j, H, B].forEach(e => e(o, i));
          e.compilerExtensions.forEach(e => e(o, i));
          o.__beforeBegin = null;
          [O, M, T].forEach(e => e(o, i));
          o.isCompiled = true;
          let s = null;
          if (typeof o.keywords == "object" && o.keywords.$pattern) {
            o.keywords = Object.assign({}, o.keywords);
            s = o.keywords.$pattern;
            delete o.keywords.$pattern;
          }
          s = s || /\w+/;
          o.keywords &&= function e(a, t, r = "keyword") {
            let n = Object.create(null);
            if (typeof a == "string") {
              o(r, a.split(" "));
            } else if (Array.isArray(a)) {
              o(r, a);
            } else {
              Object.keys(a).forEach(function (r) {
                Object.assign(n, e(a[r], t, r));
              });
            }
            return n;
            function o(e, a) {
              if (t) {
                a = a.map(e => e.toLowerCase());
              }
              a.forEach(function (a) {
                var t;
                var r;
                var o;
                let i = a.split("|");
                n[i[0]] = [e, (t = i[0], (r = i[1]) ? Number(r) : +(o = t, !I.includes(o.toLowerCase())))];
              });
            }
          }(o.keywords, e.case_insensitive);
          o.keywordPatternRe = a(s, true);
          if (i) {
            o.begin ||= /\B|\b/;
            o.beginRe = a(o.begin);
            if (!o.end && !o.endsWithParent) {
              o.end = /\B|\b/;
            }
            if (o.end) {
              o.endRe = a(o.end);
            }
            o.terminatorEnd = u(o.end) || "";
            if (o.endsWithParent && i.terminatorEnd) {
              o.terminatorEnd += (o.end ? "|" : "") + i.terminatorEnd;
            }
          }
          if (o.illegal) {
            o.illegalRe = a(o.illegal);
          }
          o.contains ||= [];
          o.contains = [].concat(...o.contains.map(function (e) {
            var a;
            if ((a = e === "self" ? o : e).variants && !a.cachedVariants) {
              a.cachedVariants = a.variants.map(function (e) {
                return r(a, {
                  variants: null
                }, e);
              });
            }
            if (a.cachedVariants) {
              return a.cachedVariants;
            } else if (!function e(a) {
              return !!a && (a.endsWithParent || e(a.starts));
            }(a)) {
              if (Object.isFrozen(a)) {
                return r(a);
              } else {
                return a;
              }
            } else {
              return r(a, {
                starts: a.starts ? r(a.starts) : null
              });
            }
          }));
          o.contains.forEach(function (e) {
            t(e, o);
          });
          if (o.starts) {
            t(o.starts, i);
          }
          o.matcher = function (e) {
            let a = new n();
            e.contains.forEach(e => a.addRule(e.begin, {
              rule: e,
              type: "begin"
            }));
            if (e.terminatorEnd) {
              a.addRule(e.terminatorEnd, {
                type: "end"
              });
            }
            if (e.illegal) {
              a.addRule(e.illegal, {
                type: "illegal"
              });
            }
            return a;
          }(o);
          return o;
        }(e);
      }(E);
      let x = "";
      let C = c || D;
      let N = {};
      let F = new k.__emitter(k);
      (function () {
        let e = [];
        for (let a = C; a !== E; a = a.parent) {
          if (a.scope) {
            e.unshift(a.scope);
          }
        }
        e.forEach(e => F.openNode(e));
      })();
      let R = "";
      let P = 0;
      let q = 0;
      let U = 0;
      let $ = false;
      try {
        if (E.__emitTokens) {
          E.__emitTokens(o, F);
        } else {
          for (C.matcher.considerAll();;) {
            U++;
            if ($) {
              $ = false;
            } else {
              C.matcher.considerAll();
            }
            C.matcher.lastIndex = q;
            let e = C.matcher.exec(o);
            if (!e) {
              break;
            }
            let a = o.substring(q, e.index);
            let t = w(a, e);
            q = e.index + t;
          }
          w(o.substring(q));
        }
        F.finalize();
        x = F.toHTML();
        return {
          language: e,
          value: x,
          relevance: P,
          illegal: false,
          _emitter: F,
          _top: C
        };
      } catch (a) {
        if (a.message && a.message.includes("Illegal")) {
          return {
            language: e,
            value: t(o),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: a.message,
              index: q,
              context: o.slice(q - 100, q + 100),
              mode: a.mode,
              resultSoFar: x
            },
            _emitter: F
          };
        }
        if (s) {
          return {
            language: e,
            value: t(o),
            illegal: false,
            relevance: 0,
            errorRaised: a,
            _emitter: F,
            _top: C
          };
        }
        throw a;
      }
    }
    function z(e, a) {
      a = a || k.languages || Object.keys(n);
      let r = function (e) {
        let a = {
          value: t(e),
          illegal: false,
          relevance: 0,
          _top: m,
          _emitter: new k.__emitter(k)
        };
        a._emitter.addText(e);
        return a;
      }(e);
      let o = a.filter(A).filter(F).map(a => v(a, e, false));
      o.unshift(r);
      let [i, s] = o.sort((e, a) => {
        if (e.relevance !== a.relevance) {
          return a.relevance - e.relevance;
        }
        if (e.language && a.language) {
          if (A(e.language).supersetOf === a.language) {
            return 1;
          }
          if (A(a.language).supersetOf === e.language) {
            return -1;
          }
        }
        return 0;
      });
      i.secondBest = s;
      return i;
    }
    function E(e) {
      let a = null;
      let t = function (e) {
        let a = e.className + " ";
        a += e.parentNode ? e.parentNode.className : "";
        let t = k.languageDetectRe.exec(a);
        if (t) {
          let a = A(t[1]);
          if (!a) {
            P(l.replace("{}", t[1]));
            P("Falling back to no-highlight mode for this block.", e);
          }
          if (a) {
            return t[1];
          } else {
            return "no-highlight";
          }
        }
        return a.split(/\s+/).find(e => b(e) || A(e));
      }(e);
      if (b(t) || (R("before:highlightElement", {
        el: e,
        language: t
      }), e.dataset.highlighted)) {
        return;
      }
      if (e.children.length > 0 && (k.ignoreUnescapedHTML, k.throwUnescapedHTML)) {
        throw new K("One of your code blocks includes unescaped HTML.", e.innerHTML);
      }
      let r = e.textContent;
      let n = t ? w(r, {
        language: t,
        ignoreIllegals: true
      }) : z(r);
      e.innerHTML = n.value;
      e.dataset.highlighted = "yes";
      (function (e, a, t) {
        let r = a && o[a] || t;
        e.classList.add("hljs");
        e.classList.add(`language-${r}`);
      })(e, t, n.language);
      e.result = {
        language: n.language,
        re: n.relevance,
        relevance: n.relevance
      };
      if (n.secondBest) {
        e.secondBest = {
          language: n.secondBest.language,
          relevance: n.secondBest.relevance
        };
      }
      R("after:highlightElement", {
        el: e,
        result: n,
        text: r
      });
    }
    let D = false;
    function x() {
      if (document.readyState === "loading") {
        if (!D) {
          window.addEventListener("DOMContentLoaded", function () {
            x();
          }, false);
        }
        D = true;
        return;
      }
      document.querySelectorAll(k.cssSelector).forEach(E);
    }
    function A(e) {
      return n[e = (e || "").toLowerCase()] || n[o[e]];
    }
    function C(e, {
      languageName: a
    }) {
      if (typeof e == "string") {
        e = [e];
      }
      e.forEach(e => {
        o[e.toLowerCase()] = a;
      });
    }
    function F(e) {
      let a = A(e);
      return a && !a.disableAutodetect;
    }
    function R(e, a) {
      i.forEach(function (t) {
        if (t[e]) {
          t[e](a);
        }
      });
    }
    Object.assign(e, {
      highlight: w,
      highlightAuto: z,
      highlightAll: x,
      highlightElement: E,
      highlightBlock: function (e) {
        q("10.7.0", "highlightBlock will be removed entirely in v12.0");
        q("10.7.0", "Please use highlightElement now.");
        return E(e);
      },
      configure: function (e) {
        k = r(k, e);
      },
      initHighlighting: () => {
        x();
        q("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      },
      initHighlightingOnLoad: function () {
        x();
        q("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      },
      registerLanguage: function (a, t) {
        let r = null;
        try {
          r = t(e);
        } catch (e) {
          L("Language definition for '{}' could not be registered.".replace("{}", a));
          if (s) {
            L(e);
          } else {
            throw e;
          }
          r = m;
        }
        r.name ||= a;
        n[a] = r;
        r.rawDefinition = t.bind(null, e);
        if (r.aliases) {
          C(r.aliases, {
            languageName: a
          });
        }
      },
      unregisterLanguage: function (e) {
        delete n[e];
        for (let a of Object.keys(o)) {
          if (o[a] === e) {
            delete o[a];
          }
        }
      },
      listLanguages: function () {
        return Object.keys(n);
      },
      getLanguage: A,
      registerAliases: C,
      autoDetection: F,
      inherit: r,
      addPlugin: function (e) {
        var a;
        if ((a = e)["before:highlightBlock"] && !a["before:highlightElement"]) {
          a["before:highlightElement"] = e => {
            a["before:highlightBlock"](Object.assign({
              block: e.el
            }, e));
          };
        }
        if (a["after:highlightBlock"] && !a["after:highlightElement"]) {
          a["after:highlightElement"] = e => {
            a["after:highlightBlock"](Object.assign({
              block: e.el
            }, e));
          };
        }
        i.push(e);
      },
      removePlugin: function (e) {
        let a = i.indexOf(e);
        if (a !== -1) {
          i.splice(a, 1);
        }
      }
    });
    e.debugMode = function () {
      s = false;
    };
    e.safeMode = function () {
      s = true;
    };
    e.versionString = "11.11.1";
    e.regex = {
      concat: g,
      lookahead: d,
      either: y,
      optional: f,
      anyNumberOfTimes: p
    };
    for (let a in N) {
      if (typeof N[a] == "object") {
        (function e(a) {
          if (a instanceof Map) {
            a.clear = a.delete = a.set = function () {
              throw Error("map is read-only");
            };
          } else if (a instanceof Set) {
            a.add = a.clear = a.delete = function () {
              throw Error("set is read-only");
            };
          }
          Object.freeze(a);
          Object.getOwnPropertyNames(a).forEach(t => {
            let r = a[t];
            let n = typeof r;
            if ((n === "object" || n === "function") && !Object.isFrozen(r)) {
              e(r);
            }
          });
          return a;
        })(N[a]);
      }
    }
    Object.assign(e, N);
    return e;
  };
  let W = Z({});
  W.newInstance = () => Z({});
  module.exports = W;
  W.HighlightJS = W;
  W.default = W;
}