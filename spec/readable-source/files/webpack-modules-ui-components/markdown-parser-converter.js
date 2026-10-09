// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aF' to 'parseMarkdownToDoc'
// - Renamed export 'eg' to 'transformMarkdownNodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 16814
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var a;
  var s;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var markdownParserCoreReexport = require("markdown-parser-core-reexport") /*id: 228526*/;
  var h = markdownParserCoreReexport;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  function T(e, r) {
    let {
      pos: n
    } = e;
    if (e.src.charCodeAt(n) !== 10) {
      return false;
    }
    let o = e.pending.length - 1;
    if (!r) {
      if (o >= 0 && e.pending.charCodeAt(o) === 32) {
        if (o >= 1 && e.pending.charCodeAt(o - 1) === 32) {
          let r = o - 1;
          while (r >= 1 && e.pending.charCodeAt(r - 1) === 32) {
            r--;
          }
          e.pending = e.pending.slice(0, r);
          e.push("hardbreak", "br", 0);
        } else {
          e.pending = e.pending.slice(0, -1);
          e.push("softbreak", "br", 0);
        }
      } else {
        e.push("softbreak", "br", 0);
      }
    }
    n++;
    e.pos = n;
    return true;
  }
  function v(e, r) {
    let n = r + 1;
    let o = e.md.block.ruler.getRules("paragraph");
    let i = e.lineMax;
    let l = false;
    let a = e.parentType;
    for (e.parentType = "paragraph"; n < i && !e.isEmpty(n) && e.sCount[n] !== 0; n++) {
      if (!(e.sCount[n] - e.blkIndent > 3) && !(e.sCount[n] < 0)) {
        l = false;
        for (let r = 0, a = o.length; r < a; r++) {
          if (o[r](e, n, i, true)) {
            l = true;
            break;
          }
        }
        if (l) {
          break;
        }
      }
    }
    let s = e.getLines(r, n, e.blkIndent, false);
    e.line = n;
    let c = e.push("paragraph_open", "p", 1);
    c.map = [r, e.line];
    (c = e.push("inline", "", 0)).content = s;
    c.map = [r, e.line];
    c.children = [];
    c = e.push("paragraph_close", "p", -1);
    e.parentType = a;
    return true;
  }
  let y = e => {
    e.inline.ruler.before("newline", "before_newline", T);
    e.block.ruler.before("paragraph", "before-paragraph", v);
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let _ = new h();
  function I(e, r, n, o) {
    let i = e.bMarks[r] + e.tShift[r];
    let l = e.eMarks[r];
    let a = e.src.slice(i, l);
    return !o && !!a.startsWith("》") && a.length > 1 && a[1] === " " && (e.src = xssContentSanitizer.sanitizeUrl(e.src.split("\n").map(e => e.replace(/^》/, ">")).join("\n"), null, {
      logType: "js.href/src",
      reportOnly: "false",
      blackConfig: "{}",
      configMode: "merge",
      isCloseSSRReport: false,
      bid: "flow_web",
      region: "cn",
      urlLimit: "-1",
      htmlLimit: "-1",
      isSaveValidUrl: false,
      isRuntimeLog: false,
      isDOMParser: true,
      escapeRule: "escape-report",
      reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
      scmBranch: "release_train_samantha_2026-03-09_1120843696898",
      scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
      scmVersion: "1.0.4.168",
      webpackPluginVersion: "3.4.5",
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpNbmh3WTBkS2RsbFlTbXRNTWp*b1kyMTBhMkl6WkhWT%1qRm9ZMjEw-TJJelpI$k1WMnd3$EZoQ2FHTn$%bXhNTTBKelp*Z*tjR0p1$Fhaa$-wWj$Z$EpTZ*1Re%5I%mhXRk-w$1cxN*Rsa3ljM1Jq$0ZaMlpFZFZkRnBZ-%RC-$Z6$jZZ$mM1ZF$4d$$ucFpXRXB1WkZoTlBRPT0"
    }), _.block.ruler.getRules("blockquote")[0](e, r, n, o));
  }
  function E(e, r, n, o) {
    let i = e.bMarks[r] + e.tShift[r];
    let l = e.eMarks[r];
    let a = e.src.slice(i, l);
    return (!a.startsWith(">") || !(a.length > 1) || a[1] === " ") && _.block.ruler.getRules("blockquote")[1](e, r, n, o);
  }
  let S = e => {
    e.block.ruler.at("blockquote", E);
    e.block.ruler.before("blockquote", "custom-blockquote", I);
  };
  function R(e, r) {
    let n = e.pos;
    let o = e.src;
    if (o !== "******" && o !== "______" || r) {
      return false;
    }
    e.pos = n + 6;
    let i = e.push("strong_open", "strong", 1);
    i.markup = o;
    (i = e.push("text", "", 0)).content = o === "******" ? "**" : "__";
    (i = e.push("strong_close", "strong", -1)).markup = o;
    return true;
  }
  let B = e => {
    e.inline.ruler.before("emphasis", "custom_bold", R);
  };
  function x(e) {
    return e === 9 || e === 32;
  }
  function A(e, r) {
    let n = e.bMarks[r] + e.tShift[r];
    let o = e.eMarks[r];
    let i = e.src.charCodeAt(n++);
    if (i !== 42 && i !== 45 && i !== 43 || n < o && !x(e.src.charCodeAt(n))) {
      return -1;
    } else {
      return n;
    }
  }
  function C(e, r) {
    let n;
    let o = e.bMarks[r] + e.tShift[r];
    let i = o;
    let l = e.eMarks[r];
    if (i + 1 >= l || (n = e.src.charCodeAt(i++)) < 48 || n > 57) {
      return -1;
    }
    while (true) {
      if (i >= l) {
        return -1;
      }
      if ((n = e.src.charCodeAt(i++)) >= 48 && n <= 57) {
        if (i - o >= 10) {
          return -1;
        }
        continue;
      }
      if (n === 41 || n === 46) {
        break;
      }
      return -1;
    }
    if (i < l && !x(n = e.src.charCodeAt(i))) {
      return -1;
    } else {
      return i;
    }
  }
  function O(e, r, n, o) {
    let i;
    let l;
    let a;
    let s;
    let c;
    let d;
    let u;
    let h;
    let p;
    let f;
    let g;
    let m;
    let k;
    let T;
    let v;
    let y;
    let b;
    let _;
    let I;
    let E;
    let S;
    let R;
    let B = false;
    let x = true;
    if (e.sCount[r] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[r] - e.listIndent >= 4 && e.sCount[r] < e.blkIndent) {
      return false;
    }
    if (o && e.parentType === "paragraph" && e.sCount[r] >= e.blkIndent) {
      B = true;
    }
    let O = C(e, r);
    let P = A(e, r);
    if (O >= 0) {
      _ = O;
      u = true;
      E = e.bMarks[r] + e.tShift[r];
      f = Number(e.src.slice(E, _ - 1));
      if (B && f !== 1 || _ === e.eMarks[r]) {
        return false;
      }
    } else if (!(P >= 0)) {
      return false;
    } else {
      u = false;
      if ((_ = P) === e.eMarks[r]) {
        return false;
      }
    }
    if (B && e.skipSpaces(_) >= e.eMarks[r]) {
      return false;
    }
    let w = e.src.charCodeAt(_ - 1);
    if (o) {
      return true;
    }
    let L = e.tokens.length;
    if (u) {
      R = e.push("ordered_list_open", "ol", 1);
      if (f !== 1) {
        R.attrs = [["start", f]];
      }
    } else {
      R = e.push("bullet_list_open", "ul", 1);
    }
    let M = [r, 0];
    R.map = M;
    R.markup = String.fromCharCode(w);
    m = r;
    I = false;
    let D = e.md.block.ruler.getRules("list");
    let N = e.parentType;
    for (e.parentType = "list"; m < n;) {
      b = _;
      g = e.eMarks[m];
      let o = e.sCount[m] + _ - (e.bMarks[r] + e.tShift[r]);
      for (d = o; b < g;) {
        if ((i = e.src.charCodeAt(b)) === 9) {
          o += 4 - (o + e.bsCount[m]) % 4;
        } else if (i === 32) {
          o++;
        } else {
          break;
        }
        b++;
      }
      if ((c = (l = b) >= g ? 1 : o - d) > 4) {
        c = 1;
      }
      s = d + c;
      (R = e.push("list_item_open", "li", 1)).markup = String.fromCharCode(w);
      h = [r, 0];
      R.map = [r, 0];
      if (u) {
        R.info = e.src.slice(E, _ - 1);
      }
      y = e.tight;
      v = e.tShift[r];
      T = e.sCount[r];
      k = e.listIndent;
      e.listIndent = e.blkIndent;
      e.blkIndent = s;
      e.tight = true;
      e.tShift[r] = l - e.bMarks[r];
      e.sCount[r] = o;
      e.md.block.tokenize(e, r, n);
      if (!e.tight || I) {
        x = false;
      }
      I = e.line - r > 1 && e.isEmpty(e.line - 1);
      e.blkIndent = e.listIndent;
      e.listIndent = k;
      e.tShift[r] = v;
      e.sCount[r] = T;
      e.tight = y;
      (R = e.push("list_item_close", "li", -1)).markup = String.fromCharCode(w);
      r = e.line;
      m = e.line;
      h[1] = m;
      l = e.bMarks[r];
      if (m >= n || e.sCount[m] < e.blkIndent || e.sCount[r] - e.blkIndent >= 4 || e.sCount[m] === 0) {
        break;
      }
      a = 0;
      S = false;
      p = D.length;
      for (; a < p; a++) {
        if (D[a](e, m, n, true)) {
          S = true;
          break;
        }
      }
      if (S) {
        break;
      }
      if (u) {
        if ((_ = C(e, m)) < 0) {
          break;
        }
        E = e.bMarks[m] + e.tShift[m];
      } else if ((_ = A(e, m)) < 0) {
        break;
      }
      if (w !== e.src.charCodeAt(_ - 1)) {
        break;
      }
    }
    (R = u ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(w);
    M[1] = m;
    e.line = m;
    e.parentType = N;
    if (x) {
      (function (e, r) {
        let n = e.level + 2;
        for (let o = r + 2, i = e.tokens.length - 2; o < i; o++) {
          if (e.tokens[o].level === n && e.tokens[o].type === "paragraph_open") {
            e.tokens[o + 2].hidden = true;
            e.tokens[o].hidden = true;
            o += 2;
          }
        }
      })(e, L);
    }
    return true;
  }
  let P = e => {
    e.block.ruler.at("list", O, {
      alt: ["paragraph", "reference", "blockquote"]
    });
  };
  let w = [{
    markup: "$",
    length: 1
  }, {
    markup: "$$",
    length: 2
  }];
  let L = "equation_inline";
  function M(e, r) {
    for (let {
      markup: n,
      length: o
    } of w) {
      let i;
      if (e.src.slice(e.pos, e.pos + o) !== n) {
        continue;
      }
      let l = e.pos + o;
      let a = e.src.indexOf(n, l);
      if (a !== -1 && l !== a) {
        if (!r) {
          (i = e.push(L, "equation", 0)).markup = ` ${n} `;
          i.content = e.src.slice(l, a);
        }
        e.pos = a + o;
        return true;
      }
    }
    return false;
  }
  function D(e, r, n, o) {
    let i;
    let l = e.bMarks[r] + e.tShift[r];
    let a = e.eMarks[r];
    let s = false;
    if (l + 2 > a || e.src.slice(l, l + 2) !== "$$") {
      return false;
    }
    l += 2;
    let c = e.src.slice(l, a);
    if (o) {
      return true;
    }
    if (c.trim().endsWith("$$")) {
      c = c.trim().slice(0, -2);
      s = true;
    }
    if (c.trim().indexOf("$$") >= 0) {
      return false;
    }
    let d = r;
    while (!s && !(++d >= n) && (!((l = e.bMarks[d] + e.tShift[d]) < (a = e.eMarks[d])) || !(e.tShift[d] < e.blkIndent))) {
      if (e.src.slice(l, a).trim().endsWith("$$")) {
        let r = e.src.slice(0, a).lastIndexOf("$$");
        i = e.src.slice(l, r);
        s = true;
      }
    }
    e.line = d + 1;
    let u = e.push("math_block", "equation", 0);
    u.block = true;
    u.content = ((c == null ? undefined : c.trim()) ? `${c}
` : "") + e.getLines(r + 1, d, e.tShift[r], true) + ((i == null ? undefined : i.trim()) ? i : "");
    u.map = [r, e.line];
    u.markup = "$$";
    return true;
  }
  function N(e, r) {
    let n = e.pos;
    let o = e.posMax;
    if (n + 2 >= o || e.src.slice(n, n + 2) !== "\\(") {
      return false;
    }
    if (r) {
      return true;
    }
    let i = n + 2;
    let l = false;
    let a = -1;
    while (i < o) {
      if (e.src.slice(i, i + 2) === "\\)") {
        a = i;
        l = true;
        break;
      }
      i++;
    }
    if (!l) {
      return false;
    }
    let s = e.src.slice(n + 2, a).trim().replace(/\\\\/g, "\\");
    let c = e.push(L, "equation", 0);
    c.markup = " $$ ";
    c.content = s;
    e.pos = a + 2;
    return true;
  }
  let $ = e => {
    e.inline.ruler.after("emphasis", "math_inline", M);
    e.block.ruler.after("blockquote", "math_block", D, {
      alt: ["paragraph", "reference", "blockquote", "list"]
    });
    e.inline.ruler.push("inline_latex_rule", N);
  };
  let F = [9, 32];
  function H(e, r, n, o) {
    let i;
    let l = e.bMarks[r] + e.tShift[r];
    let a = e.eMarks[r];
    if (e.sCount[r] - e.blkIndent >= 4 || (i = e.src.charCodeAt(l)) !== 35 || l >= a) {
      return false;
    }
    let s = 1;
    for (i = e.src.charCodeAt(++l); i === 35 && l < a && s <= 9;) {
      s++;
      i = e.src.charCodeAt(++l);
    }
    if (s > 9 || l < a && !F.includes(i)) {
      return false;
    }
    if (o) {
      return true;
    }
    a = e.skipSpacesBack(a, l);
    let c = e.skipCharsBack(a, 35, l);
    if (c > l && F.includes(e.src.charCodeAt(c - 1))) {
      a = c;
    }
    e.line = r + 1;
    let d = e.push("heading_open", `h${String(s)}`, 1);
    d.markup = "##########".slice(0, s);
    d.map = [r, e.line];
    (d = e.push("inline", "", 0)).content = e.src.slice(l, a).trim();
    d.map = [r, e.line];
    d.children = [];
    (d = e.push("heading_close", `h${String(s)}`, -1)).markup = "##########".slice(0, s);
    return true;
  }
  let U = e => {
    e.block.ruler.after("heading", "heading-extension", H, {
      alt: ["paragraph", "reference", "blockquote"]
    });
  };
  (o = Z || {})[o.TWO_LENGTH_RULE = 2] = "TWO_LENGTH_RULE";
  o[o.THREE_LENGTH_RULE = 3] = "THREE_LENGTH_RULE";
  o[o.FIVE_LENGTH_RULE = 5] = "FIVE_LENGTH_RULE";
  o[o.SEVEN_LENGTH_RULE = 7] = "SEVEN_LENGTH_RULE";
  var Z = o;
  (i = {}).isChecked = "1";
  i.willCheck = "2";
  let j = i;
  let V = {
    [j.isChecked]: true,
    [j.willCheck]: false
  };
  let z = [Z.TWO_LENGTH_RULE, Z.THREE_LENGTH_RULE, Z.FIVE_LENGTH_RULE, Z.SEVEN_LENGTH_RULE];
  let X = {
    [Z.TWO_LENGTH_RULE]: ["[]", "【】"],
    [Z.THREE_LENGTH_RULE]: ["[x]", "[X]", "【x】", "【X】"],
    [Z.FIVE_LENGTH_RULE]: ["- [ ]", "- [x]", "- [X]", "- 【 】", "- 【x】", "- 【X】", "* [ ]", "* [x]", "* [X]", "* 【 】", "* 【x】", "* 【X】"],
    [Z.SEVEN_LENGTH_RULE]: ["-   [ ]", "-   [x]", "-   [X]", "-   【 】", "-   【x】", "-   【X】", "*   [ ]", "*   [x]", "*   [X]", "*   【 】", "*   【x】", "*   【X】"]
  };
  let W = (e, r) => r.includes(e);
  let G = (e, r) => {
    if (r === Z.TWO_LENGTH_RULE) {
      return false;
    }
    let n = r === Z.THREE_LENGTH_RULE ? 1 : Z.THREE_LENGTH_RULE;
    return e.charCodeAt(n) !== 32;
  };
  let J = e => {
    let r = 0;
    for (let n of e) {
      if (n === " ") {
        r++;
      } else {
        break;
      }
    }
    return r;
  };
  let K = (e, r) => {
    let n = J(r);
    if (n >= 2 && n <= 4) {
      return e + n;
    } else {
      return e;
    }
  };
  let q = (e, r) => {
    for (let n of z) {
      let o = K(r, e.slice(r));
      let i = e.slice(o, o + n);
      if (W(i, X[n]) && e.charCodeAt(o + n) === 32) {
        let e = G(i, n);
        return {
          res: true,
          ruleLength: n,
          isChecked: e,
          startNum: o
        };
      }
    }
    return {
      res: false,
      ruleLength: 0,
      isChecked: false,
      startNum: r
    };
  };
  function Q(e, r, n, o) {
    let i = e.bMarks[r];
    let l = e.eMarks[r];
    let {
      res: a,
      ruleLength: s,
      isChecked: c,
      startNum: d
    } = q(e.src, i);
    if (s === Z.TWO_LENGTH_RULE && e.src.slice(e.bMarks[r], d).trim().length !== 0 || !a) {
      return false;
    }
    if (o) {
      return true;
    }
    let u = e.src.slice(d + s + 1, l);
    let h = e.push("todo_open", "todo_open", 1);
    h.markup = "[]";
    h.content = u;
    h.info = c ? j.isChecked : j.willCheck;
    h = e.push("paragraph_open", "p", 1);
    (h = e.push("inline", "", 0)).content = u;
    h.children = [];
    h = e.push("paragraph_close", "p", -1);
    (h = e.push("todo_open_close", "todo_open", -1)).markup = "[]";
    e.line = r + 1;
    return true;
  }
  let Y = e => {
    e.block.ruler.before("list", "todo", Q, {
      alt: ["paragraph", "list"]
    });
  };
  let ee = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  let et = [10, 32];
  let er = (e, r) => {
    let n;
    let o = e.posMax;
    let i = e.pos;
    if (e.src.charCodeAt(i) !== 126 || r || i + 2 >= o || e.src.charCodeAt(i + 1) === 32) {
      return false;
    }
    e.pos = i + 1;
    let l = false;
    while (e.pos < o) {
      if (e.src.charCodeAt(e.pos) === 126 && e.src.charCodeAt(e.pos - 1) !== 32) {
        l = true;
        break;
      }
      if (et.includes(e.src.charCodeAt(e.pos))) {
        break;
      }
      e.md.inline.skipToken(e);
    }
    if (!l || i + 1 === e.pos) {
      e.pos = i;
      return false;
    }
    let a = e.src.slice(i + 1, e.pos);
    e.posMax = e.pos;
    e.pos = i + 1;
    e.push("underline_open", "underline", 1).markup = "~";
    e.push("text", "", 0).content = a.replace(ee, "$1");
    e.push("underline_close", "underline", -1).markup = "~";
    e.pos = e.posMax + 1;
    e.posMax = o;
    return true;
  };
  function en(e, r) {
    let n = e.posMax;
    let o = e.pos;
    if (e.src.charCodeAt(o) !== 126 || o + 4 > n || e.src !== "~~~~" || r) {
      return false;
    }
    e.pos = o + 4;
    let i = e.push("underline_open", "underline", 1);
    i.markup = "~~~~";
    (i = e.push("text", "", 0)).content = "~~";
    (i = e.push("underline_close", "underline", -1)).markup = "~~~~";
    return true;
  }
  let eo = e => {
    e.inline.ruler.before("strikethrough", "custom_underline", en);
    e.inline.ruler.after("emphasis", "sub", er);
  };
  var markdownTokenClass = require("markdown-token-class") /*id: 687389*/;
  var el = markdownTokenClass;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var clipboardLodashChain = require("clipboard-lodash-chain") /*id: 484296*/;
  (l = {}).STRONG = "strong";
  l.EM = "em";
  l.S = "s";
  l.UNDERLINE = "underline";
  l.EQUATION = "equation";
  l.CODE = "code";
  let ed = l;
  (a = {}).BOLD = "bold";
  a.ITALIC = "italic";
  a.STRIKETHROUGH = "strikethrough";
  a.UNDERLINE = "underline";
  a.EQUATION = "equation";
  a.INLINECODE = "inlineCode";
  let eu = a;
  var urlEncodeDecodeUtil = require("url-encode-decode-util") /*id: 411352*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  let ef = e => {
    for (let r of e) {
      let e = r == null ? undefined : r.find(e => e[0] === "href");
      if (e && e[1]) {
        return e[1];
      }
    }
    return "";
  };
  let eg = e => !!e.includes("xn--");
  let em = e => {
    let r = urlEncodeDecodeUtil.parse(e, true);
    return urlEncodeDecodeUtil.decode(urlEncodeDecodeUtil.format(r));
  };
  let ek = (e, r, n) => {
    let o = ef(n);
    if (o) {
      if (docUrlProcessingUtilities.isStrictUrl(o) && !eg(o)) {
        o = docUrlProcessingUtilities.normalizeUrl(o);
        r.link = o;
      } else {
        o = em(o);
        e.text = `[${e.text}](${o})`;
      }
    }
    return r;
  };
  let eT = (e, r) => {
    let {
      content: n = ""
    } = r;
    e.equation = n;
    return e;
  };
  let ev = e => {
    e.text = " ";
    return e;
  };
  let ey = {
    [ed.STRONG]: eu.BOLD,
    [ed.EM]: eu.ITALIC,
    [ed.S]: eu.STRIKETHROUGH,
    [ed.UNDERLINE]: eu.UNDERLINE,
    [ed.EQUATION]: eu.EQUATION,
    [ed.CODE]: eu.INLINECODE
  };
  let eb = ["a"];
  let e_ = (e, r) => n => {
    n.text = r.content;
    if (e.includes(ed.EQUATION) || r.type === L) {
      ev(n);
    }
    if (r.type === "softbreak" && r.tag === "br") {
      n.text = "\n";
    }
    return n;
  };
  let eI = (e, r, n) => o => {
    let i = e.reduce((e, r) => {
      if (ey[r]) {
        e[ey[r]] = true;
      } else {
        docxEventCollector.wrappedCollector("doc_bug_track_dev", {
          action: "markdown_not_supported_inline",
          info: `not supported inline rule: ${r}`
        });
      }
      return e;
    }, {});
    if (r.tag !== "text") {
      let e = ey[r.tag];
      if (e) {
        if (e === eu.EQUATION) {
          eT(i, r);
        } else {
          i[e] = true;
        }
      }
    }
    ek(o, i, n);
    o.mark = i;
    return o;
  };
  let eE = (e, r, n) => {
    let o = e_(r, e);
    let i = eI(r, e, n);
    return clipboardLodashChain.lodashChain([i, o]);
  };
  let eS = (e, r, n) => {
    var o;
    var i;
    if (!e || n === r.length - 1) {
      return true;
    }
    let l = r.slice(n + 1);
    let a = l.find(e => e.nesting === 0);
    if (!a) {
      return true;
    }
    let s = a.content;
    if (!s) {
      let e = l.find(e => e.nesting === -1);
      if (!e || e.tag !== ed.STRONG || e.markup !== "__") {
        return true;
      }
    }
    if (e.endsWith(" ") && s.startsWith(" ")) {
      return true;
    }
    let c = r[n];
    return !!((o = c.markup) === null || o === undefined ? undefined : o.endsWith(" ")) && !!((i = c.markup) === null || i === undefined ? undefined : i.startsWith(" ")) || c.type === "text" && !c.content;
  };
  let eR = e => e.some(e => eb.includes(e));
  let eB = function (e, r, n, o, i, l, a = false) {
    let s = a || eS(r, e, n) || eR(i);
    let c = e[n];
    if (s) {
      return eE(c, i, l);
    } else {
      if (c.tag === eu.EQUATION) {
        c.content = `${o.join("")}${c.markup}${c.content}${c.markup}${o.join("")}`;
        c.tag = "";
        c.type = "text";
      } else {
        c.content = `${o.join("")}${c.content}${o.join("")}`;
      }
      return eE(c, [], []);
    }
  };
  let ex = function (e, r, n = false) {
    let o = "";
    let i = [];
    let l = [];
    let a = [];
    let s = [];
    for (let [r, c] of (e = e || []).entries()) {
      if (c.nesting === 1) {
        l.push(c.tag);
        i.push(c.markup);
        s.push(c.attrs);
      } else if (c.nesting === -1) {
        if (!l.length) {
          throw Error();
        }
        l.pop();
        i.pop();
        s.pop();
      } else if (c.nesting === 0) {
        if (c.block) {
          docxEventCollector.wrappedCollector("doc_bug_track_dev", {
            action: "markdown_inline_nest_block",
            info: `inline nest block content: ${c}`
          });
        } else {
          let d = eB(e, o, r, i, l, s, n);
          a.push(d({
            mark: {},
            text: "",
            type: "plaintext"
          }));
          o = c.content;
        }
      }
    }
    return {
      states: a,
      type: r || docBlockTypeConstants.blockTypeConstants.TEXT
    };
  };
  (s = {}).PARAGRAPH = "paragraph";
  s.HEADING = "heading";
  s.ORDERED_LIST = "ordered_list";
  s.LIST_ITEM = "list_item";
  s.BULLET_LIST = "bullet_list";
  s.BLOCKQUOTE = "blockquote";
  s.TABLE = "table";
  s.TR = "tr";
  s.TODO = "todo";
  let eA = s;
  var highlightjsLanguageResolver = require("highlightjs-language-resolver") /*id: 553850*/;
  let eO = e => ({
    states: [{
      mark: {},
      text: e,
      type: "plaintext"
    }],
    type: "code"
  });
  let eP = e => highlightjsLanguageResolver.resolveLanguage(e.trimStart());
  let ew = ["fence", "code_block"];
  let eL = e => ({
    states: [{
      mark: {
        equation: e
      },
      text: " ",
      type: "plaintext"
    }],
    type: "text"
  });
  let eM = "heading";
  let eD = e => e.replace("h", eM);
  let eN = (e, r) => {
    e.forEach(e => {
      if (e.nodeType === eA.TR) {
        r.push(e);
      } else if (e.children?.length) {
        eN(e.children, r);
      }
    });
  };
  let e$ = e => ({
    id: e,
    snapshot: {
      children: [],
      type: "table_cell",
      comments: [],
      align: docBlockTypeConstants.alignmentConstants.LEFT,
      author: ""
    }
  });
  let eF = e => {
    let n = e.node?.attrs;
    let o = n == null ? undefined : n.find(e => e[0] === "style" && e[1].includes("text-align"));
    if (o) {
      return o[1].split(":")[1];
    } else {
      return "left";
    }
  };
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  let eZ = function (e, r = {}) {
    let {
      type: n,
      states: o
    } = e;
    let i = {
      type: n,
      text: {}
    };
    let l = o.map(e => {
      e.text = docxClipboardUtils.removeInvisibleCharacters(e.text.replace(/[\t]+/g, " "));
      return e;
    });
    let a = l.reduce((e, r) => e + r.text, "").replace(/\n+$/g, "").normalize();
    if (a === "\n") {
      i.text = editorDataManagerClass.EditorDataManager.deserializePlainText("");
    } else {
      i.text = editorDataManagerClass.EditorDataManager.deserialize({
        nodes: l,
        alltext: a,
        size: a.length
      });
    }
    return Object.assign(i, r);
  };
  let ej = e => {
    let {
      children: r,
      nodeType: n
    } = e;
    let o = false;
    let i = r[0].nodeType || "";
    if (!i) {
      o = r.every(e => !e.nodeType);
    }
    return !(o = r.every(e => e.nodeType && e.nodeType === i)) && n === eA.BLOCKQUOTE && !!r.every(e => e.nodeType && e.nodeType !== eA.BLOCKQUOTE) || o;
  };
  let eV = (e, r, n, o, i) => {
    let {
      seq: l,
      flag: a
    } = i;
    if (l) {
      e.seq = l;
    }
    let s = uuidGeneratorUtil.generateUuid();
    r.push(s);
    n[s] = {
      snapshot: e,
      id: s
    };
    if (a) {
      o[s] = {
        [a]: true
      };
    }
  };
  let ez = function (e, r = [], n = {}, o = {}, i = [], l = {}, a = false) {
    if (e.children.length) {
      if (e.children.length > 1 && ej(e)) {
        eq(e.children, r, n, o, i, l, a);
      } else {
        eq([e.children[0]], r, n, o, i, l, a);
        if (e.children.length > 1) {
          let l = n[r[r.length - 1]];
          let s = i[i.length - 1];
          let c = [];
          let d = [];
          eq(e.children.slice(1, e.children.length), c, n, o, d, {}, a);
          l.snapshot.children = c;
          s.children = d;
        }
      }
    } else {
      let {
        blockType: e
      } = l;
      eV(eZ({
        states: [{
          mark: {},
          text: ""
        }],
        type: e || docBlockTypeConstants.blockTypeConstants.TEXT
      }), r, n, o, l);
    }
  };
  let eX = function (e, r, n, o = [], i = false) {
    let l = [];
    eN(e.children, l);
    let a = l.length;
    let s = l[0].children.length;
    let c = docxTableLayoutUtils.createColumnIds(s);
    let d = c.reduce((e, r) => {
      e[r] = {
        column_width: 200
      };
      return e;
    }, {});
    let u = {};
    let h = docxTableLayoutUtils.createRowIds(a);
    let p = {};
    for (let e = 0; e < s; e++) {
      for (let r = 0; r < a; r++) {
        let o = `${h[r]}${c[e]}`;
        let a = uuidGeneratorUtil.generateUuid();
        let s = e$(a);
        n[a] = s;
        u[o] = {
          block_id: a,
          merge_info: {
            row_span: 1,
            col_span: 1
          }
        };
        let d = l[r].children[e].children;
        let g = eF(l[r].children[e]);
        let m = [];
        let {
          stateInfo: k
        } = eq(d, m, n, {}, [], {
          attriMap: {
            align: g
          }
        }, i);
        s.snapshot.children = m;
        let T = k.reduce((e, r) => e = [...e, ...r.stateNodes], []);
        p[o] = {
          children: [{
            data: {
              align: g,
              nodes: T,
              type: docBlockTypeConstants.blockTypeConstants.TEXT
            }
          }],
          merge_info: {
            row_span: 1,
            col_span: 1
          }
        };
      }
    }
    let g = uuidGeneratorUtil.generateUuid();
    o.push({
      cell_set: p,
      column_set: d,
      columns_id: c,
      rows_id: h,
      type: "table"
    });
    n[g] = {
      id: g,
      snapshot: {
        cell_set: u,
        column_set: d,
        columns_id: c,
        rows_id: h,
        type: "table"
      }
    };
    r.push(g);
  };
  let eW = e => {
    let r = e.findIndex(e => e.text === "\n");
    if (r > -1) {
      return {
        currentStates: e.slice(0, r),
        afterBrStates: e.slice(r + 1)
      };
    } else {
      return {
        currentStates: e,
        afterBrStates: []
      };
    }
  };
  let eG = (e, r, n, o, i, l) => {
    let a = e => {
      let {
        attriMap: l
      } = i;
      eV(eZ({
        states: e,
        type: docBlockTypeConstants.blockTypeConstants.TEXT
      }, l), r, n, o, i);
    };
    let s = 0;
    for (let r = 0; r < e.length; r++) {
      if (e[r].text === "\n") {
        let n = e.slice(s, r);
        a(n);
        l.push({
          stateNodes: n,
          type: docBlockTypeConstants.blockTypeConstants.TEXT
        });
        s = r + 1;
      } else if (r === e.length - 1) {
        let r = e.slice(s);
        a(r);
        l.push({
          stateNodes: r,
          type: docBlockTypeConstants.blockTypeConstants.TEXT
        });
      }
    }
  };
  let eJ = function (e, r = [], n = {}, o = {}, i = [], l = {}, a = false) {
    if (e.type === "inline") {
      let {
        blockType: s,
        attriMap: c,
        seq: d,
        flag: u
      } = l;
      let h = ex(e.children, s, a);
      let {
        currentStates: p,
        afterBrStates: g
      } = eW(h.states);
      i.push({
        stateNodes: p,
        usedToBeQuote: u === "usedToBeQuote",
        type: s,
        orderedListNumber: d || null,
        done: c == null ? undefined : c.done
      });
      h.states = p;
      eV(eZ(h, c), r, n, o, l);
      if (g.length) {
        eG(g, r, n, o, l, i);
      }
      if (docBlockTypeConstants.blockTypeConstants.TODO === l.blockType) {
        delete l.blockType;
      }
    } else if (e.type === "hr") {
      let o = uuidGeneratorUtil.generateUuid();
      let l = ex(e.children, "divider", a);
      i.push({
        stateNodes: l.states,
        type: "divider"
      });
      let s = eZ(l);
      n[o] = {
        snapshot: s,
        id: o
      };
      r.push(o);
    } else if (ew.includes(e.type) && e.tag === "code") {
      let o = uuidGeneratorUtil.generateUuid();
      let l = eO(e.content);
      let a = eP(e.info);
      i.push({
        stateNodes: l.states,
        type: "code",
        language: a
      });
      let s = eZ(l, {
        language: a
      });
      n[o] = {
        snapshot: s,
        id: o
      };
      r.push(o);
    } else if (e.type === "math_block" && e.tag === "equation") {
      let o = uuidGeneratorUtil.generateUuid();
      let l = eL(e.content);
      i.push({
        stateNodes: l.states,
        type: docBlockTypeConstants.blockTypeConstants.TEXT
      });
      let a = eZ(l);
      n[o] = {
        snapshot: a,
        id: o
      };
      r.push(o);
    }
  };
  let eK = function (e) {
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    let c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    let d = arguments.length > 6 && arguments[6] !== undefined && arguments[6];
    if (e.nodeType === eA.PARAGRAPH) {
      if (e.node?.level === 0) {
        c.blockType = docBlockTypeConstants.blockTypeConstants.TEXT;
      }
      ez(e, i, l, a, s, c, d);
    } else if (e.nodeType === eA.HEADING) {
      let r = eD(e.tag || "");
      if (!r.startsWith(eM)) {
        docxEventCollector.wrappedCollector("doc_bug_track_dev", {
          action: "markdown_invalid_heading_tag",
          info: `treeNode content: ${e}`
        });
      }
      c.blockType = r;
      ez(e, i, l, a, s, c, d);
    } else if (e.nodeType === eA.ORDERED_LIST) {
      c.blockType = "ordered";
      ez(e, i, l, a, s, c, d);
    } else if (e.nodeType === eA.LIST_ITEM) {
      c.seq = e.node?.info;
      ez(e, i, l, a, s, c, d);
    } else if (e.nodeType === eA.BULLET_LIST) {
      c.blockType = "bullet";
      ez(e, i, l, a, s, c, d);
    } else if (e.nodeType === eA.BLOCKQUOTE) {
      c.blockType = docBlockTypeConstants.blockTypeConstants.TEXT;
      c.flag = "usedToBeQuote";
      ez(e, i, l, a, s, c, d);
    } else if (e.nodeType === eA.TABLE) {
      eX(e, i, l, s, d);
    } else if (e.nodeType === eA.TODO) {
      c.blockType = "todo";
      let r = e.node?.info;
      if (r) {
        if (c.attriMap) {
          c.attriMap.done = V[r];
        } else {
          c.attriMap = {
            done: V[r]
          };
        }
      }
      ez(e, i, l, a, s, c, d);
    }
  };
  function eq(e, r = [], n = {}, o = {}, i = [], l = {}, a = false) {
    e.forEach(e => {
      let s = Object.keys(l).length === 0 ? {} : l;
      if (e instanceof el) {
        eJ(e, r, n, o, i, s, a);
      } else if (e.nodeType) {
        eK(e, r, n, o, i, s, a);
      }
    });
    return {
      recordIds: r,
      recordMap: n,
      payloadMap: o,
      stateInfo: i
    };
  }
  class eQ extends Error {
    constructor(e, r) {
      var n;
      var o;
      var i;
      super(e);
      o = undefined;
      if ((n = typeof (i = function (e, r) {
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
      }(n = "reason", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, n, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = o;
      }
      this.reason = r;
    }
  }
  var markdownCommonUtils = require("markdown-common-utils") /*id: 708770*/;
  let e0 = /(((https?|s?ftp|ftps|nfs|ssh):\/\/)?((localhost(:[0-9]{2,5})?)|((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])(:[0-9]{2,5})?))\b([/?#][-a-zA-Z0-9@:%_+.~#?&/=;()$,!\*\[\]{}^|<>]*)?)|((((https?|s?ftp|ftps|nfs|ssh):\/\/([\-a-zA-Z0-9:%_+~#@]{1,256}\.){1,50}[a-z\-]{2,15})|(([\-a-zA-Z0-9:%_+~#@]{1,256}\.){1,50}(com|org|net|int|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gp|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|site|top|wtf|xxx|xyz|cloud|engineering|help|one)))(:[0-9]{2,5})?\b([/?#][-a-zA-Z0-9@:%_+.~#?&/=;()$,!\*\[\]{}^|<>]*)?)|(^(?!data:)((mailto:[\w.!#$%&'*+-/=?^_\`{|}~]{1,2000}@[A-Za-z0-9_.-]+\.[a-z\-]{2,15})|([\w.!#$%&'*+-/=?^_\`{|}~]{1,2000}@[A-Za-z0-9_.-]+\.(com|org|net|int|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gp|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|site|top|wtf|xxx|xyz|cloud|engineering|help|one)))\b)/gi;
  function e1(e) {
    let r = e.tokens;
    if (e.md.options.linkify) {
      for (let i = 0, l = r.length; i < l; i++) {
        if (r[i].type !== "inline" || !e.md.linkify.pretest(r[i].content)) {
          continue;
        }
        let l = r[i].children;
        let a = 0;
        for (let s = l.length - 1; s >= 0; s--) {
          let c = l[s];
          if (c.type === "link_close") {
            for (s--; l[s].level !== c.level && l[s].type !== "link_open";) {
              s--;
            }
            continue;
          }
          if (c.type === "html_inline") {
            var n;
            var o;
            n = c.content;
            if (/^<a[>\s]/i.test(n) && a > 0) {
              a--;
            }
            o = c.content;
            if (/^<\/a\s*>/i.test(o)) {
              a++;
            }
          }
          if (!(a > 0) && c.type === "text") {
            let n = c.content;
            let o = c.content.match(e0);
            let a = n;
            let d = 0;
            if (o && n) {
              let u;
              o = o.filter(e => !!e);
              let h = [];
              let {
                level: p
              } = c;
              let f = 0;
              for (let r = 0; r < o.length; r++) {
                let i = o[r];
                let l = e.md.normalizeLink(i);
                if (!e.md.validateLink(l)) {
                  continue;
                }
                let s = o[r];
                let c = a.indexOf(o[r]) + d;
                a = a.replace(o[r], "");
                d += o[r].length;
                if (c > f) {
                  (u = new e.Token("text", "", 0)).content = n.slice(f, c);
                  u.level = p;
                  h.push(u);
                }
                (u = new e.Token("link_open", "a", 1)).attrs = [["href", l]];
                u.level = p++;
                u.markup = "linkify";
                u.info = "auto";
                h.push(u);
                (u = new e.Token("text", "", 0)).content = s;
                u.level = p;
                h.push(u);
                (u = new e.Token("link_close", "a", -1)).level = --p;
                u.markup = "linkify";
                u.info = "auto";
                h.push(u);
                f = o[r].length + c;
              }
              if (f < n.length) {
                (u = new e.Token("text", "", 0)).content = n.slice(f);
                u.level = p;
                h.push(u);
              }
              l = markdownCommonUtils.arrayReplaceAt(l, s, h);
              r[i].children = l;
            }
          }
        }
      }
    }
  }
  let e2 = e => {
    if (e.options.linkify) {
      e.core.ruler.at("linkify", e1);
    }
  };
  let e3 = {
    mark: {},
    text: "\n",
    type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
  };
  let e4 = e => e === "******" || e === "______" || e === "****" || e === "____";
  let e6 = e => ({
    nodeType: (e == null ? undefined : e.type.replace("_open", "")) || null,
    tag: (e == null ? undefined : e.tag) || null,
    node: e,
    children: []
  });
  let e9 = function (e, r, n = [], o = [], i) {
    let {
      isPasteIntoStartPos: l,
      isInCallout: a,
      isEmpty: s,
      isInQuoteContainer: c
    } = e;
    if (l && s) {
      let e = new h({
        linkify: i
      }).use(eo).use($).use(Y).use(S).use(U).use(y).use(P).use(B).use(e2).disable(["link", "image", "escape", "code", "lheading", "reference", "autolink", ...n]).enable(o);
      if (a || e4(r)) {
        e.disable("hr");
      }
      if (c) {
        e.disable("blockquote");
        e.disable("custom-blockquote");
      }
      return e;
    }
    let d = ["emphasis"];
    let u = "link";
    if (o.includes(u)) {
      d.push(u);
    }
    return new h("zero").use($).use(y).enable(d);
  };
  let e5 = function (e, r, n = [], o = [], i = false) {
    let l = e9(r, e, n, o, i);
    l.block.tokenize = function (e, r, n) {
      let o = this.ruler.getRules("");
      let i = o.length;
      let l = r;
      let a = false;
      let {
        maxNesting: s
      } = e.md.options;
      while (l < n && !(l >= n) && !(e.sCount[l] < e.blkIndent)) {
        if (e.level >= s) {
          e.line = n;
          break;
        }
        for (let r = 0; r < i && !o[r](e, l, n, false); r++);
        e.tight = !a;
        if (e.isEmpty(e.line - 1)) {
          a = true;
        }
        l = e.line;
      }
    };
    return l.parse(e, {});
  };
  let e7 = e => {
    let r = e6(null);
    let n = r;
    let o = [];
    for (let r = 0; r < e.length; r++) {
      let i;
      let l = e[r];
      if (l.nesting === 1) {
        i = e6(l);
        n.children.push(i);
        o.push(n);
        n = i;
      } else if (l.nesting === -1) {
        if (!o.length) {
          let n = r + 1 === e.length ? l : e.slice(0, r + 1);
          throw new eQ(`AST stack underflow, index ${r}, content ${JSON.stringify(n)}.`, "markdown_stack_underflow");
        }
        n = i = o.pop();
      } else if (l.nesting === 0) {
        n.children.push(l);
      } else {
        throw new eQ(`Invalid nesting in ${JSON.stringify(l)}.`, "markdown_invalid_nesting");
      }
    }
    if (o.length) {
      throw new eQ(`Unbalanced block open/close tokens. content: ${JSON.stringify(e)}`, "markdown_unbalanced_tokens");
    }
    return r.children;
  };
  let e8 = function (e, r, n = [], o = [], i = false, l = false) {
    try {
      let a = e5(e, r, n, o, i);
      let s = e7(a);
      return eq(s, [], {}, {}, [], {}, l);
    } catch (e) {
      if (e instanceof eQ) {
        docxEventCollector.wrappedCollector("doc_bug_track_dev", {
          action: e.reason,
          info: e.message
        });
      }
      throw e;
    }
  };
  let te = (e, r) => {
    let n = [];
    if (e != null) {
      e.forEach(e => {
        let o = deepCloneWrapper_1.deepClone(r);
        let {
          stateNodes: i,
          usedToBeQuote: l,
          type: a,
          orderedListNumber: s,
          done: d,
          language: u,
          children: h
        } = e;
        if (a === "table") {
          o.data = e;
        } else {
          let e = o.context.mark || {};
          o.data.nodes = i.map(r => {
            r.mark = {
              ...e,
              ...r.mark
            };
            return r;
          });
          if (a !== docBlockTypeConstants.blockTypeConstants.TEXT) {
            o.data.type = a;
          }
          if (d) {
            o.data.done = d;
          }
          if (u) {
            o.data.language = u;
          }
          if (l) {
            o.context.usedToBeQuote = l;
          }
          if (s) {
            o.context.orderedListNumber = s;
          }
        }
        if (h && h.length) {
          o.children = te(h, r);
        }
        n.push(o);
      });
    }
    return n;
  };
  let tt = (e, r, n) => {
    let {
      isPasteIntoStartPos: o,
      isInCallout: i = false,
      isEmpty: l,
      isInQuoteContainer: a = false
    } = n;
    let {
      stateInfo: s
    } = e8(e, {
      isPasteIntoStartPos: o,
      isInCallout: i,
      isEmpty: l,
      isInQuoteContainer: a
    }, [], ["link"]);
    return te(s, r);
  };
  let tr = e => /^[\n\r\s]+$/.test(e.text) && e.type === "plaintext";
  let tn = e => {
    let {
      mark: r
    } = e;
    return !!r && (r[displayTypeConstants.displayInlineBlock] || r[inlineComponentConstants.componentType] || tr(e));
  };
  let to = (e, r) => {
    if (r > 0 && r + 1 < e.length) {
      var n;
      var o;
      return ((n = e[r - 1].text) === null || n === undefined ? undefined : n.endsWith("(")) && ((o = e[r + 1].text) === null || o === undefined ? undefined : o.startsWith(")"));
    }
    return false;
  };
  let ti = (e, r) => {
    let n = [{
      bold: false
    }, {}];
    return r.some((o, i) => o.mark && n.every(e => !deepEqualUtil_1.deepEqual(o.mark, e)) && !to(r, i) || e.context.usedToBeQuote || e.data && e.data.type !== docBlockTypeConstants.blockTypeConstants.TEXT);
  };
  let tl = (e, r) => {
    try {
      if (r.isCopyFromDoc) {
        return e;
      }
      let n = [];
      let o = "";
      let i = e[0];
      e.forEach((l, a) => {
        var d;
        var h;
        let {
          nodes: p
        } = l.data;
        if (!p || (l == null ? undefined : (d = l.context) === null || d === undefined ? undefined : d.mark?.link) || (l == null ? undefined : (h = l.context) === null || h === undefined ? undefined : h.blockContext?.type) === "code") {
          if (o && a > 0) {
            let i = tt(o, e[a - 1], r);
            n = [...n, ...i];
            o = "";
          }
          n.push(l);
          return;
        }
        let {
          isPasteIntoStartPos: g,
          isInCallout: m = false,
          isEmpty: k,
          isInQuoteContainer: T = false
        } = r;
        if (ti(l, p)) {
          if (o) {
            let i = a ? e[a - 1] : e[a];
            let l = tt(o, i, r);
            n = [...n, ...l];
            o = "";
          }
          let i = [];
          for (let e = 0; e < p.length; e++) {
            let r = p[e];
            if (tn(r)) {
              i.push(r);
              continue;
            }
            let {
              text: n
            } = r;
            let {
              stateInfo: o
            } = e8(n, {
              isPasteIntoStartPos: g && e === 0,
              isInCallout: m,
              isEmpty: k,
              isInQuoteContainer: T
            }, [], ["link"]);
            if (o.length === 1 && !(o[0].stateNodes || []).length) {
              i.push(r);
              continue;
            }
            if (n.length > 1 && n.startsWith("\n")) {
              i.push(e3);
            }
            if (o != null) {
              o.forEach((e, n) => {
                var a;
                let {
                  type: s,
                  done: d
                } = e;
                if (s !== docBlockTypeConstants.blockTypeConstants.TEXT) {
                  l.data.type = s;
                }
                if (d) {
                  l.data.done = d;
                }
                if ((a = e.stateNodes) !== null && a !== undefined) {
                  a.forEach(e => {
                    let l = deepCloneWrapper_1.deepClone(r);
                    l.mark = Object.assign(e.mark, r.mark);
                    l.text = e.text;
                    if (o.length > 1 && n !== o.length - 1) {
                      l.text += "\n";
                    }
                    i.push(l);
                  });
                }
              });
            }
            if (n.endsWith("\n")) {
              i.push(e3);
            }
          }
          l.data.nodes = i;
          n.push(l);
        } else {
          if (p != null) {
            p.forEach(e => {
              o += e.text;
            });
          }
          if (!o.endsWith("\n") && a !== e.length - 1) {
            o += "\n";
          }
          i = l;
        }
      });
      if (o) {
        let e = tt(o, i, r);
        n = [...n, ...e];
      }
      return n;
    } catch (e) {
      docxEventCollector.wrappedCollector("doc_bug_track_dev", {
        action: "parse-markdown-form-html",
        info: e.message
      });
      throw e;
    }
  };
  require.d(exports, {
    parseMarkdownToDoc: function () {
      return e8;
    },
    transformMarkdownNodes: function () {
      return tl;
    }
  });
}