// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cN' to 'iconData'
// - Renamed export 'EY' to 'createText'
// - Renamed export 'rw' to 'replaceIconSubstring'
// - Renamed export 'QA' to 'computeDimensionOfText'
// - Renamed export 'ef' to 'registerIconPacks'
// - Renamed export 's4' to 'getIconSVG'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 54999.77aad9ee.js
         * chunkId: 54999
         * moduleId: 5699
         */
module.exports = function (module, exports, require) {
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  let l = (e, t, n, r = "") => {
    let i = e.split(":");
    if (e.slice(0, 1) === "@") {
      if (i.length < 2 || i.length > 3) {
        return null;
      }
      r = i.shift().slice(1);
    }
    if (i.length > 3 || !i.length) {
      return null;
    }
    if (i.length > 1) {
      let e = i.pop();
      let n = i.pop();
      let l = {
        provider: i.length > 0 ? i[0] : r,
        prefix: n,
        name: e
      };
      if (t && !s(l)) {
        return null;
      } else {
        return l;
      }
    }
    let l = i[0];
    let a = l.split("-");
    if (a.length > 1) {
      let e = {
        provider: r,
        prefix: a.shift(),
        name: a.join("-")
      };
      if (t && !s(e)) {
        return null;
      } else {
        return e;
      }
    }
    if (n && r === "") {
      let e = {
        provider: r,
        prefix: "",
        name: l
      };
      if (t && !s(e, n)) {
        return null;
      } else {
        return e;
      }
    }
    return null;
  };
  let s = (e, t) => !!e && (!!t && e.prefix === "" || !!e.prefix) && !!e.name;
  let a = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
  });
  let o = Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
  });
  let c = Object.freeze({
    ...a,
    ...o
  });
  let h = Object.freeze({
    ...c,
    body: "",
    hidden: false
  });
  function u(e, t) {
    let n = function (e, t) {
      let n = {};
      if (!e.hFlip != !t.hFlip) {
        n.hFlip = true;
      }
      if (!e.vFlip != !t.vFlip) {
        n.vFlip = true;
      }
      let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
      if (r) {
        n.rotate = r;
      }
      return n;
    }(e, t);
    for (let r in h) {
      if (r in o) {
        if (r in e && !(r in n)) {
          n[r] = o[r];
        }
      } else if (r in t) {
        n[r] = t[r];
      } else if (r in e) {
        n[r] = e[r];
      }
    }
    return n;
  }
  function p(e, t, n) {
    let r = e.icons;
    let i = e.aliases || Object.create(null);
    let l = {};
    function s(e) {
      l = u(r[e] || i[e], l);
    }
    s(t);
    n.forEach(s);
    return u(e, l);
  }
  let g = Object.freeze({
    ...Object.freeze({
      width: null,
      height: null
    }),
    ...o
  });
  let d = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
  let f = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function k(e, t, n) {
    if (t === 1) {
      return e;
    }
    n = n || 100;
    if (typeof e == "number") {
      return Math.ceil(e * t * n) / n;
    }
    if (typeof e != "string") {
      return e;
    }
    let r = e.split(d);
    if (r === null || !r.length) {
      return e;
    }
    let i = [];
    let l = r.shift();
    let s = f.test(l);
    while (true) {
      if (s) {
        let e = parseFloat(l);
        if (isNaN(e)) {
          i.push(l);
        } else {
          i.push(Math.ceil(e * t * n) / n);
        }
      } else {
        i.push(l);
      }
      if ((l = r.shift()) === undefined) {
        return i.join("");
      }
      s = !s;
    }
  }
  let x = e => e === "unset" || e === "undefined" || e === "none";
  let m = /\sid="(\S+)"/g;
  let b = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
  let w = 0;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var markedMarkdownParser = require("marked-markdown-parser") /*id: 483950*/;
  var dedentTemplateString = require("dedent-template-string") /*id: 454132*/;
  var R = {
    body: "<g><rect width=\"80\" height=\"80\" style=\"fill: #087ebf; stroke-width: 0px;\"/><text transform=\"translate(21.16 64.67)\" style=\"fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;\"><tspan x=\"0\" y=\"0\">?</tspan></text></g>",
    height: 80,
    width: 80
  };
  var S = new Map();
  var T = new Map();
  var z = mermaidConfigUtils.setName(e => {
    for (let t of e) {
      if (!t.name) {
        throw Error("Invalid icon loader. Must have a \"name\" property with non-empty string value.");
      }
      mermaidConfigUtils.logger.debug("Registering icon pack:", t.name);
      if ("loader" in t) {
        T.set(t.name, t.loader);
      } else if ("icons" in t) {
        S.set(t.name, t.icons);
      } else {
        mermaidConfigUtils.logger.error("Invalid icon loader:", t);
        throw Error("Invalid icon loader. Must have either \"icons\" or \"loader\" property.");
      }
    }
  }, "registerIconPacks");
  var A = mermaidConfigUtils.setName(async (e, t) => {
    let n = l(e, true, t !== undefined);
    if (!n) {
      throw Error(`Invalid icon name: ${e}`);
    }
    let r = n.prefix || t;
    if (!r) {
      throw Error(`Icon name must contain a prefix: ${e}`);
    }
    let s = S.get(r);
    if (!s) {
      let e = T.get(r);
      if (!e) {
        throw Error(`Icon set not found: ${n.prefix}`);
      }
      try {
        s = {
          ...(await e()),
          prefix: r
        };
        S.set(r, s);
      } catch (e) {
        mermaidConfigUtils.logger.error(e);
        throw Error(`Failed to load icon set: ${n.prefix}`);
      }
    }
    let a = function (e, t) {
      if (e.icons[t]) {
        return p(e, t, []);
      }
      let n = function (e, t) {
        let n = e.icons;
        let r = e.aliases || Object.create(null);
        let i = Object.create(null);
        (t || Object.keys(n).concat(Object.keys(r))).forEach(function e(t) {
          if (n[t]) {
            return i[t] = [];
          }
          if (!(t in i)) {
            i[t] = null;
            let n = r[t] && r[t].parent;
            let l = n && e(n);
            if (l) {
              i[t] = [n].concat(l);
            }
          }
          return i[t];
        });
        return i;
      }(e, [t])[t];
      if (n) {
        return p(e, t, n);
      } else {
        return null;
      }
    }(s, n.name);
    if (!a) {
      throw Error(`Icon not found: ${e}`);
    }
    return a;
  }, "getRegisteredIconData");
  var E = mermaidConfigUtils.setName(async e => {
    try {
      await A(e);
      return true;
    } catch {
      return false;
    }
  }, "isIconAvailable");
  var W = mermaidConfigUtils.setName(async (e, t, n) => {
    let r;
    try {
      r = await A(e, t == null ? undefined : t.fallbackPrefix);
    } catch (e) {
      mermaidConfigUtils.logger.error(e);
      r = R;
    }
    let l = function (e, t) {
      let n;
      let r;
      let i = {
        ...c,
        ...e
      };
      let l = {
        ...g,
        ...t
      };
      let s = {
        left: i.left,
        top: i.top,
        width: i.width,
        height: i.height
      };
      let a = i.body;
      [i, l].forEach(e => {
        let t;
        let n = [];
        let r = e.hFlip;
        let i = e.vFlip;
        let l = e.rotate;
        if (r) {
          if (i) {
            l += 2;
          } else {
            n.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")");
            n.push("scale(-1 1)");
            s.top = s.left = 0;
          }
        } else if (i) {
          n.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")");
          n.push("scale(1 -1)");
          s.top = s.left = 0;
        }
        if (l < 0) {
          l -= Math.floor(l / 4) * 4;
        }
        switch (l %= 4) {
          case 1:
            n.unshift("rotate(90 " + (t = s.height / 2 + s.top).toString() + " " + t.toString() + ")");
            break;
          case 2:
            n.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
            break;
          case 3:
            n.unshift("rotate(-90 " + (t = s.width / 2 + s.left).toString() + " " + t.toString() + ")");
        }
        if (l % 2 == 1) {
          if (s.left !== s.top) {
            t = s.left;
            s.left = s.top;
            s.top = t;
          }
          if (s.width !== s.height) {
            t = s.width;
            s.width = s.height;
            s.height = t;
          }
        }
        if (n.length) {
          a = function (e, t, n) {
            var r;
            var i;
            let l = function (e, t = "defs") {
              let n = "";
              let r = e.indexOf("<" + t);
              while (r >= 0) {
                let i = e.indexOf(">", r);
                let l = e.indexOf("</" + t);
                if (i === -1 || l === -1) {
                  break;
                }
                let s = e.indexOf(">", l);
                if (s === -1) {
                  break;
                }
                n += e.slice(i + 1, l).trim();
                e = e.slice(0, r).trim() + e.slice(s + 1);
              }
              return {
                defs: n,
                content: e
              };
            }(e);
            r = l.defs;
            i = t + l.content + n;
            if (r) {
              return "<defs>" + r + "</defs>" + i;
            } else {
              return i;
            }
          }(a, "<g transform=\"" + n.join(" ") + "\">", "</g>");
        }
      });
      let o = l.width;
      let h = l.height;
      let u = s.width;
      let p = s.height;
      if (o === null) {
        n = k(r = h === null ? "1em" : h === "auto" ? p : h, u / p);
      } else {
        n = o === "auto" ? u : o;
        r = h === null ? k(n, p / u) : h === "auto" ? p : h;
      }
      let d = {};
      let f = (e, t) => {
        if (!x(t)) {
          d[e] = t.toString();
        }
      };
      f("width", n);
      f("height", r);
      let m = [s.left, s.top, u, p];
      d.viewBox = m.join(" ");
      return {
        attributes: d,
        viewBox: m,
        body: a
      };
    }(r, t);
    let s = function (e, t) {
      let n = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
      for (let e in t) {
        n += " " + e + "=\"" + t[e] + "\"";
      }
      return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + n + ">" + e + "</svg>";
    }(function (e, t = b) {
      let n;
      let r = [];
      while (n = m.exec(e)) {
        r.push(n[1]);
      }
      if (!r.length) {
        return e;
      }
      let i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
      r.forEach(n => {
        let r = typeof t == "function" ? t(n) : t + (w++).toString();
        let l = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(RegExp("([#;\"])(" + l + ")([\")]|\\.[a-z])", "g"), "$1" + r + i + "$3");
      });
      return e = e.replace(RegExp(i, "g"), "");
    }(l.body), {
      ...l.attributes,
      ...n
    });
    return mermaidConfigUtils.sanitizeText(s, mermaidConfigUtils.getConfig());
  }, "getIconSVG");
  function _(e, t) {
    let {
      markdownAutoWrap: n
    } = t;
    let r = e.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n");
    let i = dedentTemplateString.dedent(r);
    if (n === false) {
      return i.replace(/ /g, "&nbsp;");
    } else {
      return i;
    }
  }
  function M(e, t = {}) {
    let n = _(e, t);
    let r = markedMarkdownParser.parse.lexer(n);
    let l = [[]];
    let s = 0;
    function a(e, t = "normal") {
      if (e.type === "text") {
        e.text.split("\n").forEach((e, n) => {
          if (n !== 0) {
            s++;
            l.push([]);
          }
          e.split(" ").forEach(e => {
            if (e = e.replace(/&#39;/g, "'")) {
              l[s].push({
                content: e,
                type: t
              });
            }
          });
        });
      } else if (e.type === "strong" || e.type === "em") {
        e.tokens.forEach(t => {
          a(t, e.type);
        });
      } else if (e.type === "html") {
        l[s].push({
          content: e.text,
          type: "normal"
        });
      }
    }
    mermaidConfigUtils.setName(a, "processNode");
    r.forEach(e => {
      if (e.type === "paragraph") {
        var t;
        if ((t = e.tokens) !== null && t !== undefined) {
          t.forEach(e => {
            a(e);
          });
        }
      } else if (e.type === "html") {
        l[s].push({
          content: e.text,
          type: "normal"
        });
      } else {
        l[s].push({
          content: e.raw,
          type: "normal"
        });
      }
    });
    return l;
  }
  function C(e, {
    markdownAutoWrap: t
  } = {}) {
    let n = markedMarkdownParser.parse.lexer(e);
    function r(e) {
      var n;
      var l;
      var s;
      if (e.type === "text") {
        if (t === false) {
          return e.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;");
        } else {
          return e.text.replace(/\n */g, "<br/>");
        }
      }
      if (e.type === "strong") {
        return `<strong>${(n = e.tokens) === null || n === undefined ? undefined : n.map(r).join("")}</strong>`;
      }
      if (e.type === "em") {
        return `<em>${(l = e.tokens) === null || l === undefined ? undefined : l.map(r).join("")}</em>`;
      }
      if (e.type === "paragraph") {
        return `<p>${(s = e.tokens) === null || s === undefined ? undefined : s.map(r).join("")}</p>`;
      }
      if (e.type === "space") {
        return "";
      } else if (e.type === "html") {
        return `${e.text}`;
      } else if (e.type === "escape") {
        return e.text;
      }
      mermaidConfigUtils.logger.warn(`Unsupported markdown: ${e.type}`);
      return e.raw;
    }
    mermaidConfigUtils.setName(r, "output");
    return n.map(r).join("");
  }
  function L(e) {
    if (Intl.Segmenter) {
      return [...new Intl.Segmenter().segment(e)].map(e => e.segment);
    } else {
      return [...e];
    }
  }
  function B(e, t) {
    return I(e, [], L(t.content), t.type);
  }
  function I(e, t, n, r) {
    if (n.length === 0) {
      return [{
        content: t.join(""),
        type: r
      }, {
        content: "",
        type: r
      }];
    }
    let [i, ...l] = n;
    let s = [...t, i];
    if (e([{
      content: s.join(""),
      type: r
    }])) {
      return I(e, s, l, r);
    } else {
      if (t.length === 0 && i) {
        t.push(i);
        n.shift();
      }
      return [{
        content: t.join(""),
        type: r
      }, {
        content: n.join(""),
        type: r
      }];
    }
  }
  function P(e, t) {
    if (e.some(e => {
      let {
        content: t
      } = e;
      return t.includes("\n");
    })) {
      throw Error("splitLineToFitWidth does not support newlines in the line");
    }
    return F(e, t);
  }
  function F(e, t) {
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    if (e.length === 0) {
      if (i.length > 0) {
        r.push(i);
      }
      if (r.length > 0) {
        return r;
      } else {
        return [];
      }
    }
    let l = "";
    if (e[0].content === " ") {
      l = " ";
      e.shift();
    }
    let s = e.shift() ?? {
      content: " ",
      type: "normal"
    };
    let a = [...i];
    if (l !== "") {
      a.push({
        content: l,
        type: "normal"
      });
    }
    a.push(s);
    if (t(a)) {
      return F(e, t, r, a);
    }
    if (i.length > 0) {
      r.push(i);
      e.unshift(s);
    } else if (s.content) {
      let [n, i] = B(t, s);
      r.push([n]);
      if (i.content) {
        e.unshift(i);
      }
    }
    return F(e, t, r);
  }
  function j(e, t) {
    if (t) {
      e.attr("style", t);
    }
  }
  async function O(e, t, n, r, l = false, s = mermaidConfigUtils.getConfig()) {
    let a = e.append("foreignObject");
    a.attr("width", `${n * 10}px`);
    a.attr("height", `${n * 10}px`);
    let o = a.append("xhtml:div");
    let c = mermaidConfigUtils.hasKatex(t.label) ? await mermaidConfigUtils.renderKatex(t.label.replace(mermaidConfigUtils.textUtils.lineBreakRegex, "\n"), s) : mermaidConfigUtils.sanitizeText(t.label, s);
    let h = t.isNode ? "nodeLabel" : "edgeLabel";
    let u = o.append("span");
    u.html(c);
    j(u, t.labelStyle);
    u.attr("class", `${h} ${r}`);
    j(o, t.labelStyle);
    o.style("display", "table-cell");
    o.style("white-space", "nowrap");
    o.style("line-height", "1.5");
    o.style("max-width", n + "px");
    o.style("text-align", "center");
    o.attr("xmlns", "http://www.w3.org/1999/xhtml");
    if (l) {
      o.attr("class", "labelBkg");
    }
    let p = o.node().getBoundingClientRect();
    if (p.width === n) {
      o.style("display", "table");
      o.style("white-space", "break-spaces");
      o.style("width", n + "px");
      p = o.node().getBoundingClientRect();
    }
    return a.node();
  }
  function Z(e, t, n) {
    return e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * n - 0.1 + "em").attr("dy", n + "em");
  }
  function N(e, t, n) {
    let r = e.append("text");
    let i = Z(r, 1, t);
    H(i, n);
    let l = i.node().getComputedTextLength();
    r.remove();
    return l;
  }
  function q(e, t, n) {
    var r;
    let i = e.append("text");
    let l = Z(i, 1, t);
    H(l, [{
      content: n,
      type: "normal"
    }]);
    let s = (r = l.node()) === null || r === undefined ? undefined : r.getBoundingClientRect();
    if (s) {
      i.remove();
    }
    return s;
  }
  function D(e, t, n, r = false) {
    let l = t.append("g");
    let s = l.insert("rect").attr("class", "background").attr("style", "stroke: none");
    let a = l.append("text").attr("y", "-10.1");
    let o = 0;
    for (let t of n) {
      let n = mermaidConfigUtils.setName(t => N(l, 1.1, t) <= e, "checkWidth");
      for (let e of n(t) ? [t] : P(t, n)) {
        H(Z(a, o, 1.1), e);
        o++;
      }
    }
    if (!r) {
      return a.node();
    }
    {
      let e = a.node().getBBox();
      s.attr("x", e.x - 2).attr("y", e.y - 2).attr("width", e.width + 4).attr("height", e.height + 4);
      return l.node();
    }
  }
  function H(e, t) {
    e.text("");
    t.forEach((t, n) => {
      let r = e.append("tspan").attr("font-style", t.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", t.type === "strong" ? "bold" : "normal");
      if (n === 0) {
        r.text(t.content);
      } else {
        r.text(" " + t.content);
      }
    });
  }
  async function U(e, t = {}) {
    let n = [];
    e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (e, r, l) => {
      n.push((async () => {
        let n = `${r}:${l}`;
        if (await E(n)) {
          return await W(n, undefined, {
            class: "label-icon"
          });
        } else {
          return `<i class='${mermaidConfigUtils.sanitizeText(e, t).replace(":", " ")}'></i>`;
        }
      })());
      return e;
    });
    let r = await Promise.all(n);
    return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => {
      return r.shift() ?? "";
    });
  }
  mermaidConfigUtils.setName(_, "preprocessMarkdown");
  mermaidConfigUtils.setName(M, "markdownToLines");
  mermaidConfigUtils.setName(C, "markdownToHTML");
  mermaidConfigUtils.setName(L, "splitTextToChars");
  mermaidConfigUtils.setName(B, "splitWordToFitWidth");
  mermaidConfigUtils.setName(I, "splitWordToFitWidthRecursion");
  mermaidConfigUtils.setName(P, "splitLineToFitWidth");
  mermaidConfigUtils.setName(F, "splitLineToFitWidthRecursion");
  mermaidConfigUtils.setName(j, "applyStyle");
  mermaidConfigUtils.setName(O, "addHtmlSpan");
  mermaidConfigUtils.setName(Z, "createTspan");
  mermaidConfigUtils.setName(N, "computeWidthOfText");
  mermaidConfigUtils.setName(q, "computeDimensionOfText");
  mermaidConfigUtils.setName(D, "createFormattedText");
  mermaidConfigUtils.setName(H, "updateTextContentAndStyles");
  mermaidConfigUtils.setName(U, "replaceIconSubstring");
  var Q = mermaidConfigUtils.setName(async function (e, t = "", {
    style: n = "",
    isTitle: l = false,
    classes: s = "",
    useHtmlLabels: a = true,
    isNode: o = true,
    width: c = 200,
    addSvgBackground: h = false
  } = {}, u) {
    mermaidConfigUtils.logger.debug("XYZ createText", t, n, l, s, a, o, "addSvgBackground: ", h);
    if (a) {
      let l = C(t, u);
      let a = await U(mermaidTextLayoutUtils.decodeEntities(l), u);
      let p = t.replace(/\\\\/g, "\\");
      let g = {
        isNode: o,
        label: mermaidConfigUtils.hasKatex(t) ? p : a,
        labelStyle: n.replace("fill:", "color:")
      };
      return await O(e, g, c, s, h, u);
    }
    {
      let r = D(c, e, M(t.replace(/<br\s*\/?>/g, "<br/>").replace("<br>", "<br/>"), u), !!t && h);
      if (o) {
        if (/stroke:/.exec(n)) {
          n = n.replace("stroke:", "lineColor:");
        }
        let e = n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
        axisAndZoomUtilities.select(r).attr("style", e);
      } else {
        let e = n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
        axisAndZoomUtilities.select(r).select("rect").attr("style", e.replace(/background:/g, "fill:"));
        let t = n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
        axisAndZoomUtilities.select(r).select("text").attr("style", t);
      }
      return r;
    }
  }, "createText");
  require.d(exports, {
    iconData: function () {
      return R;
    },
    createText: function () {
      return U;
    },
    replaceIconSubstring: function () {
      return Q;
    },
    computeDimensionOfText: function () {
      return q;
    },
    registerIconPacks: function () {
      return z;
    },
    getIconSVG: function () {
      return W;
    }
  });
}