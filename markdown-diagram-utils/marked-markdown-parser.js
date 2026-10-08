// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M2' to 'Marked'
// - Renamed export 'TU' to 'parse'
// - Renamed export 'Th' to 'Renderer'
// - Renamed export 'd2' to 'Tokenizer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 54999.77aad9ee.js
         * chunkId: 54999
         * moduleId: 483950
         */
module.exports = function (module, exports, require) {
  function r(e, t, n) {
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
  function i() {
    return {
      async: false,
      breaks: false,
      extensions: null,
      gfm: true,
      hooks: null,
      pedantic: false,
      renderer: null,
      silent: false,
      tokenizer: null,
      walkTokens: null
    };
  }
  let l = i();
  let s = {
    exec: () => null
  };
  function a(e, t = "") {
    let n = typeof e == "string" ? e : e.source;
    let r = {
      replace: (e, t) => {
        let i = typeof t == "string" ? t : t.source;
        i = i.replace(o.caret, "$1");
        n = n.replace(e, i);
        return r;
      },
      getRegex: () => new RegExp(n, t)
    };
    return r;
  }
  let o = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: e => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: e => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: e => RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: e => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: e => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
    htmlBeginRegex: e => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
  };
  let c = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
  let h = /(?:[*+-]|\d{1,9}[.)])/;
  let u = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
  let p = a(u).replace(/bull/g, h).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
  let g = a(u).replace(/bull/g, h).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
  let d = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
  let f = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  let k = a(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", f).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
  let x = a(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, h).getRegex();
  let m = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  let b = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
  let w = a("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))", "i").replace("comment", b).replace("tag", m).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  let y = a(d).replace("hr", c).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", m).getRegex();
  let v = {
    blockquote: a(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", y).getRegex(),
    code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    def: k,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    hr: c,
    html: w,
    lheading: p,
    list: x,
    newline: /^(?:[ \t]*(?:\n|$))+/,
    paragraph: y,
    table: s,
    text: /^[^\n]+/
  };
  let $ = a("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", c).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}\t)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", m).getRegex();
  let R = {
    ...v,
    lheading: g,
    table: $,
    paragraph: a(d).replace("hr", c).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", $).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", m).getRegex()
  };
  let S = {
    ...v,
    html: a("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", b).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: s,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: a(d).replace("hr", c).replace("heading", " *#{1,6} *[^\n]").replace("lheading", p).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  };
  let T = /^( {2,}|\\)\n(?!\s*$)/;
  let z = /[\p{P}\p{S}]/u;
  let A = /[\s\p{P}\p{S}]/u;
  let E = /[^\s\p{P}\p{S}]/u;
  let W = a(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, A).getRegex();
  let _ = /(?!~)[\p{P}\p{S}]/u;
  let M = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
  let C = a(M, "u").replace(/punct/g, z).getRegex();
  let L = a(M, "u").replace(/punct/g, _).getRegex();
  let B = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
  let I = a(B, "gu").replace(/notPunctSpace/g, E).replace(/punctSpace/g, A).replace(/punct/g, z).getRegex();
  let P = a(B, "gu").replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g, _).getRegex();
  let F = a("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, E).replace(/punctSpace/g, A).replace(/punct/g, z).getRegex();
  let j = a(/\\(punct)/, "gu").replace(/punct/g, z).getRegex();
  let O = a(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
  let Z = a(b).replace("(?:-->|$)", "-->").getRegex();
  let N = a("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Z).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
  let q = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  let D = a(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
  let H = a(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", f).getRegex();
  let U = a(/^!?\[(ref)\](?:\[\])?/).replace("ref", f).getRegex();
  let Q = a("reflink|nolink(?!\\()", "g").replace("reflink", H).replace("nolink", U).getRegex();
  let Y = {
    _backpedal: s,
    anyPunctuation: j,
    autolink: O,
    blockSkip: /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
    br: T,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    del: s,
    emStrongLDelim: C,
    emStrongRDelimAst: I,
    emStrongRDelimUnd: F,
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    link: D,
    nolink: U,
    punctuation: W,
    reflink: H,
    reflinkSearch: Q,
    tag: N,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    url: s
  };
  let X = {
    ...Y,
    link: a(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(),
    reflink: a(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex()
  };
  let G = {
    ...Y,
    emStrongRDelimAst: P,
    emStrongLDelim: L,
    url: a(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  };
  let J = {
    ...G,
    br: a(T).replace("{2,}", "*").getRegex(),
    text: a(G.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  };
  let K = {
    normal: v,
    gfm: R,
    pedantic: S
  };
  let V = {
    normal: Y,
    gfm: G,
    breaks: J,
    pedantic: X
  };
  let ee = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };
  let et = e => ee[e];
  function en(e, t) {
    if (t) {
      if (o.escapeTest.test(e)) {
        return e.replace(o.escapeReplace, et);
      }
    } else if (o.escapeTestNoEncode.test(e)) {
      return e.replace(o.escapeReplaceNoEncode, et);
    }
    return e;
  }
  function er(e) {
    try {
      e = encodeURI(e).replace(o.percentDecode, "%");
    } catch {
      return null;
    }
    return e;
  }
  function ei(e, t) {
    var n;
    let r = e.replace(o.findPipe, (e, t, n) => {
      let r = false;
      let i = t;
      while (--i >= 0 && n[i] === "\\") {
        r = !r;
      }
      if (r) {
        return "|";
      } else {
        return " |";
      }
    }).split(o.splitPipe);
    let i = 0;
    if (!r[0].trim()) {
      r.shift();
    }
    if (!!(r.length > 0) && !((n = r.at(-1)) === null || n === undefined ? undefined : n.trim())) {
      r.pop();
    }
    if (t) {
      if (r.length > t) {
        r.splice(t);
      } else {
        while (r.length < t) {
          r.push("");
        }
      }
    }
    for (; i < r.length; i++) {
      r[i] = r[i].trim().replace(o.slashPipe, "|");
    }
    return r;
  }
  function el(e, t, n) {
    let r = e.length;
    if (r === 0) {
      return "";
    }
    let i = 0;
    while (i < r) {
      if (e.charAt(r - i - 1) === t) {
        i++;
      } else {
        break;
      }
    }
    return e.slice(0, r - i);
  }
  function es(e, t, n, r, i) {
    let l = t.href;
    let s = t.title || null;
    let a = e[1].replace(i.other.outputLinkReplace, "$1");
    if (e[0].charAt(0) !== "!") {
      r.state.inLink = true;
      let e = {
        type: "link",
        raw: n,
        href: l,
        title: s,
        text: a,
        tokens: r.inlineTokens(a)
      };
      r.state.inLink = false;
      return e;
    }
    return {
      type: "image",
      raw: n,
      href: l,
      title: s,
      text: a
    };
  }
  class ea {
    space(e) {
      let t = this.rules.block.newline.exec(e);
      if (t && t[0].length > 0) {
        return {
          type: "space",
          raw: t[0]
        };
      }
    }
    code(e) {
      let t = this.rules.block.code.exec(e);
      if (t) {
        let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
        return {
          type: "code",
          raw: t[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? e : el(e, "\n")
        };
      }
    }
    fences(e) {
      let t = this.rules.block.fences.exec(e);
      if (t) {
        let e = t[0];
        let n = function (e, t, n) {
          let r = e.match(n.other.indentCodeCompensation);
          if (r === null) {
            return t;
          }
          let i = r[1];
          return t.split("\n").map(e => {
            let t = e.match(n.other.beginningSpace);
            if (t === null) {
              return e;
            }
            let [r] = t;
            if (r.length >= i.length) {
              return e.slice(i.length);
            } else {
              return e;
            }
          }).join("\n");
        }(e, t[3] || "", this.rules);
        return {
          type: "code",
          raw: e,
          lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
          text: n
        };
      }
    }
    heading(e) {
      let t = this.rules.block.heading.exec(e);
      if (t) {
        let e = t[2].trim();
        if (this.rules.other.endingHash.test(e)) {
          let t = el(e, "#");
          if (this.options.pedantic) {
            e = t.trim();
          } else if (!t || this.rules.other.endingSpaceChar.test(t)) {
            e = t.trim();
          }
        }
        return {
          type: "heading",
          raw: t[0],
          depth: t[1].length,
          text: e,
          tokens: this.lexer.inline(e)
        };
      }
    }
    hr(e) {
      let t = this.rules.block.hr.exec(e);
      if (t) {
        return {
          type: "hr",
          raw: el(t[0], "\n")
        };
      }
    }
    blockquote(e) {
      let t = this.rules.block.blockquote.exec(e);
      if (t) {
        let e = el(t[0], "\n").split("\n");
        let n = "";
        let r = "";
        let i = [];
        while (e.length > 0) {
          let t;
          let l = false;
          let s = [];
          for (t = 0; t < e.length; t++) {
            if (this.rules.other.blockquoteStart.test(e[t])) {
              s.push(e[t]);
              l = true;
            } else if (l) {
              break;
            } else {
              s.push(e[t]);
            }
          }
          e = e.slice(t);
          let a = s.join("\n");
          let o = a.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
          n = n ? `${n}
${a}` : a;
          r = r ? `${r}
${o}` : o;
          let c = this.lexer.state.top;
          this.lexer.state.top = true;
          this.lexer.blockTokens(o, i, true);
          this.lexer.state.top = c;
          if (e.length === 0) {
            break;
          }
          let h = i.at(-1);
          if ((h == null ? undefined : h.type) === "code") {
            break;
          }
          if ((h == null ? undefined : h.type) === "blockquote") {
            let t = h.raw + "\n" + e.join("\n");
            let l = this.blockquote(t);
            i[i.length - 1] = l;
            n = n.substring(0, n.length - h.raw.length) + l.raw;
            r = r.substring(0, r.length - h.text.length) + l.text;
            break;
          }
          if ((h == null ? undefined : h.type) === "list") {
            let t = h.raw + "\n" + e.join("\n");
            let l = this.list(t);
            i[i.length - 1] = l;
            n = n.substring(0, n.length - h.raw.length) + l.raw;
            r = r.substring(0, r.length - h.raw.length) + l.raw;
            e = t.substring(i.at(-1).raw.length).split("\n");
            continue;
          }
        }
        return {
          type: "blockquote",
          raw: n,
          tokens: i,
          text: r
        };
      }
    }
    list(e) {
      let t = this.rules.block.list.exec(e);
      if (t) {
        let n = t[1].trim();
        let r = n.length > 1;
        let i = {
          type: "list",
          raw: "",
          ordered: r,
          start: r ? +n.slice(0, -1) : "",
          loose: false,
          items: []
        };
        n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`;
        if (this.options.pedantic) {
          n = r ? n : "[*+-]";
        }
        let l = this.rules.other.listItemRegex(n);
        let s = false;
        while (e) {
          let n;
          let r = false;
          let a = "";
          let o = "";
          if (!(t = l.exec(e)) || this.rules.block.hr.test(e)) {
            break;
          }
          a = t[0];
          e = e.substring(a.length);
          let c = t[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, e => " ".repeat(e.length * 3));
          let h = e.split("\n", 1)[0];
          let u = !c.trim();
          let p = 0;
          if (this.options.pedantic) {
            p = 2;
            o = c.trimStart();
          } else if (u) {
            p = t[1].length + 1;
          } else {
            p = (p = t[2].search(this.rules.other.nonSpaceChar)) > 4 ? 1 : p;
            o = c.slice(p);
            p += t[1].length;
          }
          if (u && this.rules.other.blankLine.test(h)) {
            a += h + "\n";
            e = e.substring(h.length + 1);
            r = true;
          }
          if (!r) {
            let t = this.rules.other.nextBulletRegex(p);
            let n = this.rules.other.hrRegex(p);
            let r = this.rules.other.fencesBeginRegex(p);
            let i = this.rules.other.headingBeginRegex(p);
            let l = this.rules.other.htmlBeginRegex(p);
            while (e) {
              let s;
              let g = e.split("\n", 1)[0];
              h = g;
              s = this.options.pedantic ? h = h.replace(this.rules.other.listReplaceNesting, "  ") : h.replace(this.rules.other.tabCharGlobal, "    ");
              if (r.test(h) || i.test(h) || l.test(h) || t.test(h) || n.test(h)) {
                break;
              }
              if (s.search(this.rules.other.nonSpaceChar) >= p || !h.trim()) {
                o += "\n" + s.slice(p);
              } else {
                if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || r.test(c) || i.test(c) || n.test(c)) {
                  break;
                }
                o += "\n" + h;
              }
              if (!u && !h.trim()) {
                u = true;
              }
              a += g + "\n";
              e = e.substring(g.length + 1);
              c = s.slice(p);
            }
          }
          if (!i.loose) {
            if (s) {
              i.loose = true;
            } else if (this.rules.other.doubleBlankLine.test(a)) {
              s = true;
            }
          }
          let g = null;
          if (this.options.gfm && (g = this.rules.other.listIsTask.exec(o))) {
            n = g[0] !== "[ ] ";
            o = o.replace(this.rules.other.listReplaceTask, "");
          }
          i.items.push({
            type: "list_item",
            raw: a,
            task: !!g,
            checked: n,
            loose: false,
            text: o,
            tokens: []
          });
          i.raw += a;
        }
        let a = i.items.at(-1);
        if (!a) {
          return;
        }
        a.raw = a.raw.trimEnd();
        a.text = a.text.trimEnd();
        i.raw = i.raw.trimEnd();
        for (let e = 0; e < i.items.length; e++) {
          this.lexer.state.top = false;
          i.items[e].tokens = this.lexer.blockTokens(i.items[e].text, []);
          if (!i.loose) {
            let t = i.items[e].tokens.filter(e => e.type === "space");
            let n = t.length > 0 && t.some(e => this.rules.other.anyLine.test(e.raw));
            i.loose = n;
          }
        }
        if (i.loose) {
          for (let e = 0; e < i.items.length; e++) {
            i.items[e].loose = true;
          }
        }
        return i;
      }
    }
    html(e) {
      let t = this.rules.block.html.exec(e);
      if (t) {
        return {
          type: "html",
          block: true,
          raw: t[0],
          pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
          text: t[0]
        };
      }
    }
    def(e) {
      let t = this.rules.block.def.exec(e);
      if (t) {
        let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
        let n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
        let r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
        return {
          type: "def",
          tag: e,
          raw: t[0],
          href: n,
          title: r
        };
      }
    }
    table(e) {
      var t;
      let n = this.rules.block.table.exec(e);
      if (!n || !this.rules.other.tableDelimiter.test(n[2])) {
        return;
      }
      let r = ei(n[1]);
      let i = n[2].replace(this.rules.other.tableAlignChars, "").split("|");
      let l = ((t = n[3]) === null || t === undefined ? undefined : t.trim()) ? n[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
      let s = {
        type: "table",
        raw: n[0],
        header: [],
        align: [],
        rows: []
      };
      if (r.length === i.length) {
        for (let e of i) {
          if (this.rules.other.tableAlignRight.test(e)) {
            s.align.push("right");
          } else if (this.rules.other.tableAlignCenter.test(e)) {
            s.align.push("center");
          } else if (this.rules.other.tableAlignLeft.test(e)) {
            s.align.push("left");
          } else {
            s.align.push(null);
          }
        }
        for (let e = 0; e < r.length; e++) {
          s.header.push({
            text: r[e],
            tokens: this.lexer.inline(r[e]),
            header: true,
            align: s.align[e]
          });
        }
        for (let e of l) {
          s.rows.push(ei(e, s.header.length).map((e, t) => ({
            text: e,
            tokens: this.lexer.inline(e),
            header: false,
            align: s.align[t]
          })));
        }
        return s;
      }
    }
    lheading(e) {
      let t = this.rules.block.lheading.exec(e);
      if (t) {
        return {
          type: "heading",
          raw: t[0],
          depth: t[2].charAt(0) === "=" ? 1 : 2,
          text: t[1],
          tokens: this.lexer.inline(t[1])
        };
      }
    }
    paragraph(e) {
      let t = this.rules.block.paragraph.exec(e);
      if (t) {
        let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
        return {
          type: "paragraph",
          raw: t[0],
          text: e,
          tokens: this.lexer.inline(e)
        };
      }
    }
    text(e) {
      let t = this.rules.block.text.exec(e);
      if (t) {
        return {
          type: "text",
          raw: t[0],
          text: t[0],
          tokens: this.lexer.inline(t[0])
        };
      }
    }
    escape(e) {
      let t = this.rules.inline.escape.exec(e);
      if (t) {
        return {
          type: "escape",
          raw: t[0],
          text: t[1]
        };
      }
    }
    tag(e) {
      let t = this.rules.inline.tag.exec(e);
      if (t) {
        if (!this.lexer.state.inLink && this.rules.other.startATag.test(t[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && this.rules.other.endATag.test(t[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: "html",
          raw: t[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: false,
          text: t[0]
        };
      }
    }
    link(e) {
      let t = this.rules.inline.link.exec(e);
      if (t) {
        let e = t[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
          if (!this.rules.other.endAngleBracket.test(e)) {
            return;
          }
          let t = el(e.slice(0, -1), "\\");
          if ((e.length - t.length) % 2 == 0) {
            return;
          }
        } else {
          let e = function (e, t) {
            if (e.indexOf(")") === -1) {
              return -1;
            }
            let n = 0;
            for (let r = 0; r < e.length; r++) {
              if (e[r] === "\\") {
                r++;
              } else if (e[r] === "(") {
                n++;
              } else if (e[r] === t[1] && --n < 0) {
                return r;
              }
            }
            return -1;
          }(t[2], "()");
          if (e > -1) {
            let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
            t[2] = t[2].substring(0, e);
            t[0] = t[0].substring(0, n).trim();
            t[3] = "";
          }
        }
        let n = t[2];
        let r = "";
        if (this.options.pedantic) {
          let e = this.rules.other.pedanticHrefTitle.exec(n);
          if (e) {
            n = e[1];
            r = e[3];
          }
        } else {
          r = t[3] ? t[3].slice(1, -1) : "";
        }
        n = n.trim();
        if (this.rules.other.startAngleBracket.test(n)) {
          n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1);
        }
        return es(t, {
          href: n ? n.replace(this.rules.inline.anyPunctuation, "$1") : n,
          title: r ? r.replace(this.rules.inline.anyPunctuation, "$1") : r
        }, t[0], this.lexer, this.rules);
      }
    }
    reflink(e, t) {
      let n;
      if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
        let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
        if (!e) {
          let e = n[0].charAt(0);
          return {
            type: "text",
            raw: e,
            text: e
          };
        }
        return es(n, e, n[0], this.lexer, this.rules);
      }
    }
    emStrong(e, t, n = "") {
      let r = this.rules.inline.emStrongLDelim.exec(e);
      if (!!r && (!r[3] || !n.match(this.rules.other.unicodeAlphaNumeric)) && (!r[1] && !r[2] || !n || this.rules.inline.punctuation.exec(n))) {
        let n = [...r[0]].length - 1;
        let i;
        let l;
        let s = n;
        let a = 0;
        let o = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        o.lastIndex = 0;
        t = t.slice(e.length * -1 + n);
        while ((r = o.exec(t)) != null) {
          if (!(i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])) {
            continue;
          }
          l = [...i].length;
          if (r[3] || r[4]) {
            s += l;
            continue;
          }
          if ((r[5] || r[6]) && n % 3 && !((n + l) % 3)) {
            a += l;
            continue;
          }
          if ((s -= l) > 0) {
            continue;
          }
          l = Math.min(l, l + s + a);
          let t = [...r[0]][0].length;
          let o = e.slice(0, n + r.index + t + l);
          if (Math.min(n, l) % 2) {
            let e = o.slice(1, -1);
            return {
              type: "em",
              raw: o,
              text: e,
              tokens: this.lexer.inlineTokens(e)
            };
          }
          let c = o.slice(2, -2);
          return {
            type: "strong",
            raw: o,
            text: c,
            tokens: this.lexer.inlineTokens(c)
          };
        }
      }
    }
    codespan(e) {
      let t = this.rules.inline.code.exec(e);
      if (t) {
        let e = t[2].replace(this.rules.other.newLineCharGlobal, " ");
        let n = this.rules.other.nonSpaceChar.test(e);
        let r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
        if (n && r) {
          e = e.substring(1, e.length - 1);
        }
        return {
          type: "codespan",
          raw: t[0],
          text: e
        };
      }
    }
    br(e) {
      let t = this.rules.inline.br.exec(e);
      if (t) {
        return {
          type: "br",
          raw: t[0]
        };
      }
    }
    del(e) {
      let t = this.rules.inline.del.exec(e);
      if (t) {
        return {
          type: "del",
          raw: t[0],
          text: t[2],
          tokens: this.lexer.inlineTokens(t[2])
        };
      }
    }
    autolink(e) {
      let t = this.rules.inline.autolink.exec(e);
      if (t) {
        let e;
        let n;
        n = t[2] === "@" ? "mailto:" + (e = t[1]) : e = t[1];
        return {
          type: "link",
          raw: t[0],
          text: e,
          href: n,
          tokens: [{
            type: "text",
            raw: e,
            text: e
          }]
        };
      }
    }
    url(e) {
      let t;
      if (t = this.rules.inline.url.exec(e)) {
        let e;
        let i;
        if (t[2] === "@") {
          i = "mailto:" + (e = t[0]);
        } else {
          let l;
          do {
            l = t[0];
            t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
          } while (l !== t[0]);
          e = t[0];
          i = t[1] === "www." ? "http://" + t[0] : t[0];
        }
        return {
          type: "link",
          raw: t[0],
          text: e,
          href: i,
          tokens: [{
            type: "text",
            raw: e,
            text: e
          }]
        };
      }
    }
    inlineText(e) {
      let t = this.rules.inline.text.exec(e);
      if (t) {
        let e = this.lexer.state.inRawBlock;
        return {
          type: "text",
          raw: t[0],
          text: t[0],
          escaped: e
        };
      }
    }
    constructor(e) {
      r(this, "options", undefined);
      r(this, "rules", undefined);
      r(this, "lexer", undefined);
      this.options = e || l;
    }
  }
  class eo {
    static get rules() {
      return {
        block: K,
        inline: V
      };
    }
    static lex(e, t) {
      return new eo(t).lex(e);
    }
    static lexInline(e, t) {
      return new eo(t).inlineTokens(e);
    }
    lex(e) {
      e = e.replace(o.carriageReturn, "\n");
      this.blockTokens(e, this.tokens);
      for (let e = 0; e < this.inlineQueue.length; e++) {
        let t = this.inlineQueue[e];
        this.inlineTokens(t.src, t.tokens);
      }
      this.inlineQueue = [];
      return this.tokens;
    }
    blockTokens(e, t = [], n = false) {
      for (this.options.pedantic && (e = e.replace(o.tabCharGlobal, "    ").replace(o.spaceLine, "")); e;) {
        var r;
        var i;
        let s;
        if ((i = this.options.extensions) === null || i === undefined ? undefined : (r = i.block) === null || r === undefined ? undefined : r.some(n => !!(s = n.call({
          lexer: this
        }, e, t)) && (e = e.substring(s.raw.length), t.push(s), true))) {
          continue;
        }
        if (s = this.tokenizer.space(e)) {
          e = e.substring(s.raw.length);
          let n = t.at(-1);
          if (s.raw.length === 1 && n !== undefined) {
            n.raw += "\n";
          } else {
            t.push(s);
          }
          continue;
        }
        if (s = this.tokenizer.code(e)) {
          e = e.substring(s.raw.length);
          let n = t.at(-1);
          if ((n == null ? undefined : n.type) === "paragraph" || (n == null ? undefined : n.type) === "text") {
            n.raw += "\n" + s.raw;
            n.text += "\n" + s.text;
            this.inlineQueue.at(-1).src = n.text;
          } else {
            t.push(s);
          }
          continue;
        }
        if ((s = this.tokenizer.fences(e)) || (s = this.tokenizer.heading(e)) || (s = this.tokenizer.hr(e)) || (s = this.tokenizer.blockquote(e)) || (s = this.tokenizer.list(e)) || (s = this.tokenizer.html(e))) {
          e = e.substring(s.raw.length);
          t.push(s);
          continue;
        }
        if (s = this.tokenizer.def(e)) {
          e = e.substring(s.raw.length);
          let n = t.at(-1);
          if ((n == null ? undefined : n.type) === "paragraph" || (n == null ? undefined : n.type) === "text") {
            n.raw += "\n" + s.raw;
            n.text += "\n" + s.raw;
            this.inlineQueue.at(-1).src = n.text;
          } else {
            this.tokens.links[s.tag] ||= {
              href: s.href,
              title: s.title
            };
          }
          continue;
        }
        if ((s = this.tokenizer.table(e)) || (s = this.tokenizer.lheading(e))) {
          e = e.substring(s.raw.length);
          t.push(s);
          continue;
        }
        let a = e;
        if (this.options.extensions?.startBlock) {
          let t;
          let n = Infinity;
          let r = e.slice(1);
          this.options.extensions.startBlock.forEach(e => {
            if (typeof (t = e.call({
              lexer: this
            }, r)) == "number" && t >= 0) {
              n = Math.min(n, t);
            }
          });
          if (n < Infinity && n >= 0) {
            a = e.substring(0, n + 1);
          }
        }
        if (this.state.top && (s = this.tokenizer.paragraph(a))) {
          let r = t.at(-1);
          if (n && (r == null ? undefined : r.type) === "paragraph") {
            r.raw += "\n" + s.raw;
            r.text += "\n" + s.text;
            this.inlineQueue.pop();
            this.inlineQueue.at(-1).src = r.text;
          } else {
            t.push(s);
          }
          n = a.length !== e.length;
          e = e.substring(s.raw.length);
          continue;
        }
        if (s = this.tokenizer.text(e)) {
          e = e.substring(s.raw.length);
          let n = t.at(-1);
          if ((n == null ? undefined : n.type) === "text") {
            n.raw += "\n" + s.raw;
            n.text += "\n" + s.text;
            this.inlineQueue.pop();
            this.inlineQueue.at(-1).src = n.text;
          } else {
            t.push(s);
          }
          continue;
        }
        if (e) {
          let t = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            break;
          }
          throw Error(t);
        }
      }
      this.state.top = true;
      return t;
    }
    inline(e, t = []) {
      this.inlineQueue.push({
        src: e,
        tokens: t
      });
      return t;
    }
    inlineTokens(e, t = []) {
      let n = e;
      let r = null;
      if (this.tokens.links) {
        let e = Object.keys(this.tokens.links);
        if (e.length > 0) {
          while ((r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null) {
            if (e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1))) {
              n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      while ((r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null) {
        n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      while ((r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null) {
        n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      }
      let i = false;
      let l = "";
      while (e) {
        var s;
        var a;
        let r;
        if (!i) {
          l = "";
        }
        i = false;
        if ((a = this.options.extensions) === null || a === undefined ? undefined : (s = a.inline) === null || s === undefined ? undefined : s.some(n => !!(r = n.call({
          lexer: this
        }, e, t)) && (e = e.substring(r.raw.length), t.push(r), true))) {
          continue;
        }
        if ((r = this.tokenizer.escape(e)) || (r = this.tokenizer.tag(e)) || (r = this.tokenizer.link(e))) {
          e = e.substring(r.raw.length);
          t.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length);
          let n = t.at(-1);
          if (r.type === "text" && (n == null ? undefined : n.type) === "text") {
            n.raw += r.raw;
            n.text += r.text;
          } else {
            t.push(r);
          }
          continue;
        }
        if ((r = this.tokenizer.emStrong(e, n, l)) || (r = this.tokenizer.codespan(e)) || (r = this.tokenizer.br(e)) || (r = this.tokenizer.del(e)) || (r = this.tokenizer.autolink(e)) || !this.state.inLink && (r = this.tokenizer.url(e))) {
          e = e.substring(r.raw.length);
          t.push(r);
          continue;
        }
        let c = e;
        if (this.options.extensions?.startInline) {
          let t;
          let n = Infinity;
          let r = e.slice(1);
          this.options.extensions.startInline.forEach(e => {
            if (typeof (t = e.call({
              lexer: this
            }, r)) == "number" && t >= 0) {
              n = Math.min(n, t);
            }
          });
          if (n < Infinity && n >= 0) {
            c = e.substring(0, n + 1);
          }
        }
        if (r = this.tokenizer.inlineText(c)) {
          e = e.substring(r.raw.length);
          if (r.raw.slice(-1) !== "_") {
            l = r.raw.slice(-1);
          }
          i = true;
          let n = t.at(-1);
          if ((n == null ? undefined : n.type) === "text") {
            n.raw += r.raw;
            n.text += r.text;
          } else {
            t.push(r);
          }
          continue;
        }
        if (e) {
          let t = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            break;
          }
          throw Error(t);
        }
      }
      return t;
    }
    constructor(e) {
      r(this, "tokens", undefined);
      r(this, "options", undefined);
      r(this, "state", undefined);
      r(this, "tokenizer", undefined);
      r(this, "inlineQueue", undefined);
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = e || l;
      this.options.tokenizer = this.options.tokenizer || new ea();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      let t = {
        other: o,
        block: K.normal,
        inline: V.normal
      };
      if (this.options.pedantic) {
        t.block = K.pedantic;
        t.inline = V.pedantic;
      } else if (this.options.gfm) {
        t.block = K.gfm;
        if (this.options.breaks) {
          t.inline = V.breaks;
        } else {
          t.inline = V.gfm;
        }
      }
      this.tokenizer.rules = t;
    }
  }
  class ec {
    space(e) {
      return "";
    }
    code(e) {
      let {
        text: n,
        lang: r,
        escaped: i
      } = e;
      let l = (r || "").match(o.notSpaceStart)?.[0];
      let s = n.replace(o.endingNewline, "") + "\n";
      if (l) {
        return "<pre><code class=\"language-" + en(l) + "\">" + (i ? s : en(s, true)) + "</code></pre>\n";
      } else {
        return "<pre><code>" + (i ? s : en(s, true)) + "</code></pre>\n";
      }
    }
    blockquote(e) {
      let {
        tokens: t
      } = e;
      let n = this.parser.parse(t);
      return `<blockquote>
${n}</blockquote>
`;
    }
    html(e) {
      let {
        text: t
      } = e;
      return t;
    }
    heading(e) {
      let {
        tokens: t,
        depth: n
      } = e;
      return `<h${n}>${this.parser.parseInline(t)}</h${n}>
`;
    }
    hr(e) {
      return "<hr>\n";
    }
    list(e) {
      let t = e.ordered;
      let n = e.start;
      let r = "";
      for (let t = 0; t < e.items.length; t++) {
        let n = e.items[t];
        r += this.listitem(n);
      }
      let i = t ? "ol" : "ul";
      return "<" + i + (t && n !== 1 ? " start=\"" + n + "\"" : "") + ">\n" + r + "</" + i + ">\n";
    }
    listitem(e) {
      let t = "";
      if (e.task) {
        let r = this.checkbox({
          checked: !!e.checked
        });
        if (e.loose) {
          if (e.tokens[0]?.type === "paragraph") {
            e.tokens[0].text = r + " " + e.tokens[0].text;
            if (e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text") {
              e.tokens[0].tokens[0].text = r + " " + en(e.tokens[0].tokens[0].text);
              e.tokens[0].tokens[0].escaped = true;
            }
          } else {
            e.tokens.unshift({
              type: "text",
              raw: r + " ",
              text: r + " ",
              escaped: true
            });
          }
        } else {
          t += r + " ";
        }
      }
      t += this.parser.parse(e.tokens, !!e.loose);
      return `<li>${t}</li>
`;
    }
    checkbox(e) {
      let {
        checked: t
      } = e;
      return "<input " + (t ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\">";
    }
    paragraph(e) {
      let {
        tokens: t
      } = e;
      return `<p>${this.parser.parseInline(t)}</p>
`;
    }
    table(e) {
      let t = "";
      let n = "";
      for (let t = 0; t < e.header.length; t++) {
        n += this.tablecell(e.header[t]);
      }
      t += this.tablerow({
        text: n
      });
      let r = "";
      for (let t = 0; t < e.rows.length; t++) {
        let i = e.rows[t];
        n = "";
        for (let e = 0; e < i.length; e++) {
          n += this.tablecell(i[e]);
        }
        r += this.tablerow({
          text: n
        });
      }
      r &&= `<tbody>${r}</tbody>`;
      return "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
    }
    tablerow(e) {
      let {
        text: t
      } = e;
      return `<tr>
${t}</tr>
`;
    }
    tablecell(e) {
      let t = this.parser.parseInline(e.tokens);
      let n = e.header ? "th" : "td";
      return `${(e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t}</${n}>
`;
    }
    strong(e) {
      let {
        tokens: t
      } = e;
      return `<strong>${this.parser.parseInline(t)}</strong>`;
    }
    em(e) {
      let {
        tokens: t
      } = e;
      return `<em>${this.parser.parseInline(t)}</em>`;
    }
    codespan(e) {
      let {
        text: t
      } = e;
      return `<code>${en(t, true)}</code>`;
    }
    br(e) {
      return "<br>";
    }
    del(e) {
      let {
        tokens: t
      } = e;
      return `<del>${this.parser.parseInline(t)}</del>`;
    }
    link(e) {
      let {
        href: t,
        title: n,
        tokens: r
      } = e;
      let i = this.parser.parseInline(r);
      let l = er(t);
      if (l === null) {
        return i;
      }
      let s = "<a href=\"" + (t = l) + "\"";
      if (n) {
        s += " title=\"" + en(n) + "\"";
      }
      return s += ">" + i + "</a>";
    }
    image(e) {
      let {
        href: t,
        title: n,
        text: r
      } = e;
      let i = er(t);
      if (i === null) {
        return en(r);
      }
      t = i;
      let l = `<img src="${t}" alt="${r}"`;
      if (n) {
        l += ` title="${en(n)}"`;
      }
      return l += ">";
    }
    text(e) {
      if ("tokens" in e && e.tokens) {
        return this.parser.parseInline(e.tokens);
      } else if ("escaped" in e && e.escaped) {
        return e.text;
      } else {
        return en(e.text);
      }
    }
    constructor(e) {
      r(this, "options", undefined);
      r(this, "parser", undefined);
      this.options = e || l;
    }
  }
  class eh {
    strong(e) {
      let {
        text: t
      } = e;
      return t;
    }
    em(e) {
      let {
        text: t
      } = e;
      return t;
    }
    codespan(e) {
      let {
        text: t
      } = e;
      return t;
    }
    del(e) {
      let {
        text: t
      } = e;
      return t;
    }
    html(e) {
      let {
        text: t
      } = e;
      return t;
    }
    text(e) {
      let {
        text: t
      } = e;
      return t;
    }
    link(e) {
      let {
        text: t
      } = e;
      return "" + t;
    }
    image(e) {
      let {
        text: t
      } = e;
      return "" + t;
    }
    br() {
      return "";
    }
  }
  class eu {
    static parse(e, t) {
      return new eu(t).parse(e);
    }
    static parseInline(e, t) {
      return new eu(t).parseInline(e);
    }
    parse(e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let n = "";
      for (let l = 0; l < e.length; l++) {
        var i;
        let s = e[l];
        if ((i = this.options.extensions) === null || i === undefined ? undefined : i.renderers?.[s.type]) {
          let e = this.options.extensions.renderers[s.type].call({
            parser: this
          }, s);
          if (e !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(s.type)) {
            n += e || "";
            continue;
          }
        }
        switch (s.type) {
          case "space":
            n += this.renderer.space(s);
            continue;
          case "hr":
            n += this.renderer.hr(s);
            continue;
          case "heading":
            n += this.renderer.heading(s);
            continue;
          case "code":
            n += this.renderer.code(s);
            continue;
          case "table":
            n += this.renderer.table(s);
            continue;
          case "blockquote":
            n += this.renderer.blockquote(s);
            continue;
          case "list":
            n += this.renderer.list(s);
            continue;
          case "html":
            n += this.renderer.html(s);
            continue;
          case "paragraph":
            n += this.renderer.paragraph(s);
            continue;
          case "text":
            {
              let r = s;
              let i = this.renderer.text(r);
              while (l + 1 < e.length && e[l + 1].type === "text") {
                r = e[++l];
                i += "\n" + this.renderer.text(r);
              }
              if (t) {
                n += this.renderer.paragraph({
                  type: "paragraph",
                  raw: i,
                  text: i,
                  tokens: [{
                    type: "text",
                    raw: i,
                    text: i,
                    escaped: true
                  }]
                });
              } else {
                n += i;
              }
              continue;
            }
          default:
            {
              let e = "Token with \"" + s.type + "\" type was not found.";
              if (this.options.silent) {
                return "";
              }
              throw Error(e);
            }
        }
      }
      return n;
    }
    parseInline(e, t = this.renderer) {
      let n = "";
      for (let l = 0; l < e.length; l++) {
        var i;
        let s = e[l];
        if ((i = this.options.extensions) === null || i === undefined ? undefined : i.renderers?.[s.type]) {
          let e = this.options.extensions.renderers[s.type].call({
            parser: this
          }, s);
          if (e !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
            n += e || "";
            continue;
          }
        }
        switch (s.type) {
          case "escape":
          case "text":
            n += t.text(s);
            break;
          case "html":
            n += t.html(s);
            break;
          case "link":
            n += t.link(s);
            break;
          case "image":
            n += t.image(s);
            break;
          case "strong":
            n += t.strong(s);
            break;
          case "em":
            n += t.em(s);
            break;
          case "codespan":
            n += t.codespan(s);
            break;
          case "br":
            n += t.br(s);
            break;
          case "del":
            n += t.del(s);
            break;
          default:
            {
              let e = "Token with \"" + s.type + "\" type was not found.";
              if (this.options.silent) {
                return "";
              }
              throw Error(e);
            }
        }
      }
      return n;
    }
    constructor(e) {
      r(this, "options", undefined);
      r(this, "renderer", undefined);
      r(this, "textRenderer", undefined);
      this.options = e || l;
      this.options.renderer = this.options.renderer || new ec();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.renderer.parser = this;
      this.textRenderer = new eh();
    }
  }
  class ep {
    preprocess(e) {
      return e;
    }
    postprocess(e) {
      return e;
    }
    processAllTokens(e) {
      return e;
    }
    provideLexer() {
      if (this.block) {
        return eo.lex;
      } else {
        return eo.lexInline;
      }
    }
    provideParser() {
      if (this.block) {
        return eu.parse;
      } else {
        return eu.parseInline;
      }
    }
    constructor(e) {
      r(this, "options", undefined);
      r(this, "block", undefined);
      this.options = e || l;
    }
  }
  r(ep, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens"]));
  class eg {
    walkTokens(e, t) {
      let n = [];
      for (let l of e) {
        n = n.concat(t.call(this, l));
        switch (l.type) {
          case "table":
            for (let e of l.header) {
              n = n.concat(this.walkTokens(e.tokens, t));
            }
            for (let e of l.rows) {
              for (let r of e) {
                n = n.concat(this.walkTokens(r.tokens, t));
              }
            }
            break;
          case "list":
            n = n.concat(this.walkTokens(l.items, t));
            break;
          default:
            {
              var i;
              let e = l;
              if ((i = this.defaults.extensions) === null || i === undefined ? undefined : i.childTokens?.[e.type]) {
                this.defaults.extensions.childTokens[e.type].forEach(r => {
                  let i = e[r].flat(Infinity);
                  n = n.concat(this.walkTokens(i, t));
                });
              } else if (e.tokens) {
                n = n.concat(this.walkTokens(e.tokens, t));
              }
            }
        }
      }
      return n;
    }
    use() {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      let r = this.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
      t.forEach(e => {
        let t = {
          ...e
        };
        t.async = this.defaults.async || t.async || false;
        if (e.extensions) {
          e.extensions.forEach(e => {
            if (!e.name) {
              throw Error("extension name required");
            }
            if ("renderer" in e) {
              let t = r.renderers[e.name];
              if (t) {
                r.renderers[e.name] = function () {
                  var n = arguments.length;
                  var r = Array(n);
                  var i = 0;
                  for (; i < n; i++) {
                    r[i] = arguments[i];
                  }
                  let l = e.renderer.apply(this, r);
                  if (l === false) {
                    l = t.apply(this, r);
                  }
                  return l;
                };
              } else {
                r.renderers[e.name] = e.renderer;
              }
            }
            if ("tokenizer" in e) {
              if (!e.level || e.level !== "block" && e.level !== "inline") {
                throw Error("extension level must be 'block' or 'inline'");
              }
              let t = r[e.level];
              if (t) {
                t.unshift(e.tokenizer);
              } else {
                r[e.level] = [e.tokenizer];
              }
              if (e.start) {
                if (e.level === "block") {
                  if (r.startBlock) {
                    r.startBlock.push(e.start);
                  } else {
                    r.startBlock = [e.start];
                  }
                } else if (e.level === "inline") {
                  if (r.startInline) {
                    r.startInline.push(e.start);
                  } else {
                    r.startInline = [e.start];
                  }
                }
              }
            }
            if ("childTokens" in e && e.childTokens) {
              r.childTokens[e.name] = e.childTokens;
            }
          });
          t.extensions = r;
        }
        if (e.renderer) {
          let n = this.defaults.renderer || new ec(this.defaults);
          for (let t in e.renderer) {
            if (!(t in n)) {
              throw Error(`renderer '${t}' does not exist`);
            }
            if (["options", "parser"].includes(t)) {
              continue;
            }
            let r = e.renderer[t];
            let i = n[t];
            n[t] = function () {
              var e = arguments.length;
              var t = Array(e);
              var l = 0;
              for (; l < e; l++) {
                t[l] = arguments[l];
              }
              let s = r.apply(n, t);
              if (s === false) {
                s = i.apply(n, t);
              }
              return s || "";
            };
          }
          t.renderer = n;
        }
        if (e.tokenizer) {
          let n = this.defaults.tokenizer || new ea(this.defaults);
          for (let t in e.tokenizer) {
            if (!(t in n)) {
              throw Error(`tokenizer '${t}' does not exist`);
            }
            if (["options", "rules", "lexer"].includes(t)) {
              continue;
            }
            let r = e.tokenizer[t];
            let i = n[t];
            n[t] = function () {
              var e = arguments.length;
              var t = Array(e);
              var l = 0;
              for (; l < e; l++) {
                t[l] = arguments[l];
              }
              let s = r.apply(n, t);
              if (s === false) {
                s = i.apply(n, t);
              }
              return s;
            };
          }
          t.tokenizer = n;
        }
        if (e.hooks) {
          let n = this.defaults.hooks || new ep();
          for (let t in e.hooks) {
            if (!(t in n)) {
              throw Error(`hook '${t}' does not exist`);
            }
            if (["options", "block"].includes(t)) {
              continue;
            }
            let r = e.hooks[t];
            let i = n[t];
            if (ep.passThroughHooks.has(t)) {
              n[t] = e => {
                if (this.defaults.async) {
                  return Promise.resolve(r.call(n, e)).then(e => i.call(n, e));
                }
                let t = r.call(n, e);
                return i.call(n, t);
              };
            } else {
              n[t] = function () {
                var e = arguments.length;
                var t = Array(e);
                var l = 0;
                for (; l < e; l++) {
                  t[l] = arguments[l];
                }
                let s = r.apply(n, t);
                if (s === false) {
                  s = i.apply(n, t);
                }
                return s;
              };
            }
          }
          t.hooks = n;
        }
        if (e.walkTokens) {
          let n = this.defaults.walkTokens;
          let r = e.walkTokens;
          t.walkTokens = function (e) {
            let t = [];
            t.push(r.call(this, e));
            if (n) {
              t = t.concat(n.call(this, e));
            }
            return t;
          };
        }
        this.defaults = {
          ...this.defaults,
          ...t
        };
      });
      return this;
    }
    setOptions(e) {
      this.defaults = {
        ...this.defaults,
        ...e
      };
      return this;
    }
    lexer(e, t) {
      return eo.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
      return eu.parse(e, t ?? this.defaults);
    }
    parseMarkdown(e) {
      return (t, n) => {
        let r = {
          ...n
        };
        let i = {
          ...this.defaults,
          ...r
        };
        let l = this.onError(!!i.silent, !!i.async);
        if (this.defaults.async === true && r.async === false) {
          return l(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        }
        if (t == null) {
          return l(Error("marked(): input parameter is undefined or null"));
        }
        if (typeof t != "string") {
          return l(Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
        }
        if (i.hooks) {
          i.hooks.options = i;
          i.hooks.block = e;
        }
        let s = i.hooks ? i.hooks.provideLexer() : e ? eo.lex : eo.lexInline;
        let a = i.hooks ? i.hooks.provideParser() : e ? eu.parse : eu.parseInline;
        if (i.async) {
          return Promise.resolve(i.hooks ? i.hooks.preprocess(t) : t).then(e => s(e, i)).then(e => i.hooks ? i.hooks.processAllTokens(e) : e).then(e => i.walkTokens ? Promise.all(this.walkTokens(e, i.walkTokens)).then(() => e) : e).then(e => a(e, i)).then(e => i.hooks ? i.hooks.postprocess(e) : e).catch(l);
        }
        try {
          if (i.hooks) {
            t = i.hooks.preprocess(t);
          }
          let e = s(t, i);
          if (i.hooks) {
            e = i.hooks.processAllTokens(e);
          }
          if (i.walkTokens) {
            this.walkTokens(e, i.walkTokens);
          }
          let n = a(e, i);
          if (i.hooks) {
            n = i.hooks.postprocess(n);
          }
          return n;
        } catch (e) {
          return l(e);
        }
      };
    }
    onError(e, t) {
      return n => {
        n.message += "\nPlease report this to https://github.com/markedjs/marked.";
        if (e) {
          let e = "<p>An error occurred:</p><pre>" + en(n.message + "", true) + "</pre>";
          if (t) {
            return Promise.resolve(e);
          } else {
            return e;
          }
        }
        if (t) {
          return Promise.reject(n);
        }
        throw n;
      };
    }
    constructor(...e) {
      r(this, "defaults", i());
      r(this, "options", this.setOptions);
      r(this, "parse", this.parseMarkdown(true));
      r(this, "parseInline", this.parseMarkdown(false));
      r(this, "Parser", eu);
      r(this, "Renderer", ec);
      r(this, "TextRenderer", eh);
      r(this, "Lexer", eo);
      r(this, "Tokenizer", ea);
      r(this, "Hooks", ep);
      this.use(...e);
    }
  }
  let ed = new eg();
  function ef(e, t) {
    return ed.parse(e, t);
  }
  ef.options = ef.setOptions = function (e) {
    ed.setOptions(e);
    ef.defaults = ed.defaults;
    l = ef.defaults;
    return ef;
  };
  ef.getDefaults = i;
  ef.defaults = l;
  ef.use = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    ed.use(...t);
    ef.defaults = ed.defaults;
    l = ef.defaults;
    return ef;
  };
  ef.walkTokens = function (e, t) {
    return ed.walkTokens(e, t);
  };
  ef.parseInline = ed.parseInline;
  ef.Parser = eu;
  ef.parser = eu.parse;
  ef.Renderer = ec;
  ef.TextRenderer = eh;
  ef.Lexer = eo;
  ef.lexer = eo.lex;
  ef.Tokenizer = ea;
  ef.Hooks = ep;
  ef.parse = ef;
  ef.options;
  ef.setOptions;
  ef.use;
  ef.walkTokens;
  ef.parseInline;
  eu.parse;
  eo.lex;
  require.d(exports, {
    Marked: function () {
      return eg;
    },
    parse: function () {
      return ef;
    },
    Renderer: function () {
      return ec;
    },
    Tokenizer: function () {
      return ea;
    }
  });
}