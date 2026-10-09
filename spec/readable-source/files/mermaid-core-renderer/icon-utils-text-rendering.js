// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cN' to 'iconDataPlaceholder'
// - Renamed export 'EY' to 'replaceIconSubstring'
// - Renamed export 'rw' to 'createText'
// - Renamed export 'QA' to 'computeDimensionOfText'
// - Renamed export 'ef' to 'registerIconPacks'
// - Renamed export 's4' to 'getIconSVG'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 990626
         */
module.exports = function (module, exports, require) {
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  let l = (t, e, r, i = "") => {
    let a = t.split(":");
    if (t.slice(0, 1) === "@") {
      if (a.length < 2 || a.length > 3) {
        return null;
      }
      i = a.shift().slice(1);
    }
    if (a.length > 3 || !a.length) {
      return null;
    }
    if (a.length > 1) {
      let t = a.pop();
      let r = a.pop();
      let o = {
        provider: a.length > 0 ? a[0] : i,
        prefix: r,
        name: t
      };
      if (e && !n(o)) {
        return null;
      } else {
        return o;
      }
    }
    let o = a[0];
    let l = o.split("-");
    if (l.length > 1) {
      let t = {
        provider: i,
        prefix: l.shift(),
        name: l.join("-")
      };
      if (e && !n(t)) {
        return null;
      } else {
        return t;
      }
    }
    if (r && i === "") {
      let t = {
        provider: i,
        prefix: "",
        name: o
      };
      if (e && !n(t, r)) {
        return null;
      } else {
        return t;
      }
    }
    return null;
  };
  let n = (t, e) => !!t && (!!e && t.prefix === "" || !!t.prefix) && !!t.name;
  let s = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
  });
  let h = Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
  });
  let c = Object.freeze({
    ...s,
    ...h
  });
  let d = Object.freeze({
    ...c,
    body: "",
    hidden: false
  });
  function u(t, e) {
    let r = function (t, e) {
      let r = {};
      if (!t.hFlip != !e.hFlip) {
        r.hFlip = true;
      }
      if (!t.vFlip != !e.vFlip) {
        r.vFlip = true;
      }
      let i = ((t.rotate || 0) + (e.rotate || 0)) % 4;
      if (i) {
        r.rotate = i;
      }
      return r;
    }(t, e);
    for (let i in d) {
      if (i in h) {
        if (i in t && !(i in r)) {
          r[i] = h[i];
        }
      } else if (i in e) {
        r[i] = e[i];
      } else if (i in t) {
        r[i] = t[i];
      }
    }
    return r;
  }
  function p(t, e, r) {
    let i = t.icons;
    let a = t.aliases || Object.create(null);
    let o = {};
    function l(t) {
      o = u(i[t] || a[t], o);
    }
    l(e);
    r.forEach(l);
    return u(t, o);
  }
  let g = Object.freeze({
    ...Object.freeze({
      width: null,
      height: null
    }),
    ...h
  });
  let f = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
  let m = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function y(t, e, r) {
    if (e === 1) {
      return t;
    }
    r = r || 100;
    if (typeof t == "number") {
      return Math.ceil(t * e * r) / r;
    }
    if (typeof t != "string") {
      return t;
    }
    let i = t.split(f);
    if (i === null || !i.length) {
      return t;
    }
    let a = [];
    let o = i.shift();
    let l = m.test(o);
    while (true) {
      if (l) {
        let t = parseFloat(o);
        if (isNaN(t)) {
          a.push(o);
        } else {
          a.push(Math.ceil(t * e * r) / r);
        }
      } else {
        a.push(o);
      }
      if ((o = i.shift()) === undefined) {
        return a.join("");
      }
      l = !l;
    }
  }
  let x = t => t === "unset" || t === "undefined" || t === "none";
  let b = /\sid="(\S+)"/g;
  let C = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
  let v = 0;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var markedMarkdownParser = require("marked-markdown-parser") /*id: 483950*/;
  var dedentTemplateString = require("dedent-template-string") /*id: 454132*/;
  var T = {
    body: "<g><rect width=\"80\" height=\"80\" style=\"fill: #087ebf; stroke-width: 0px;\"/><text transform=\"translate(21.16 64.67)\" style=\"fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;\"><tspan x=\"0\" y=\"0\">?</tspan></text></g>",
    height: 80,
    width: 80
  };
  var B = new Map();
  var M = new Map();
  var W = loggerLevelUtils.setFunctionName(t => {
    for (let e of t) {
      if (!e.name) {
        throw Error("Invalid icon loader. Must have a \"name\" property with non-empty string value.");
      }
      loggerLevelUtils.logger.debug("Registering icon pack:", e.name);
      if ("loader" in e) {
        M.set(e.name, e.loader);
      } else if ("icons" in e) {
        B.set(e.name, e.icons);
      } else {
        loggerLevelUtils.logger.error("Invalid icon loader:", e);
        throw Error("Invalid icon loader. Must have either \"icons\" or \"loader\" property.");
      }
    }
  }, "registerIconPacks");
  var L = loggerLevelUtils.setFunctionName(async (t, e) => {
    let r = l(t, true, e !== undefined);
    if (!r) {
      throw Error(`Invalid icon name: ${t}`);
    }
    let i = r.prefix || e;
    if (!i) {
      throw Error(`Icon name must contain a prefix: ${t}`);
    }
    let a = B.get(i);
    if (!a) {
      let t = M.get(i);
      if (!t) {
        throw Error(`Icon set not found: ${r.prefix}`);
      }
      try {
        a = {
          ...(await t()),
          prefix: i
        };
        B.set(i, a);
      } catch (t) {
        loggerLevelUtils.logger.error(t);
        throw Error(`Failed to load icon set: ${r.prefix}`);
      }
    }
    let n = function (t, e) {
      if (t.icons[e]) {
        return p(t, e, []);
      }
      let r = function (t, e) {
        let r = t.icons;
        let i = t.aliases || Object.create(null);
        let a = Object.create(null);
        (e || Object.keys(r).concat(Object.keys(i))).forEach(function t(e) {
          if (r[e]) {
            return a[e] = [];
          }
          if (!(e in a)) {
            a[e] = null;
            let r = i[e] && i[e].parent;
            let o = r && t(r);
            if (o) {
              a[e] = [r].concat(o);
            }
          }
          return a[e];
        });
        return a;
      }(t, [e])[e];
      if (r) {
        return p(t, e, r);
      } else {
        return null;
      }
    }(a, r.name);
    if (!n) {
      throw Error(`Icon not found: ${t}`);
    }
    return n;
  }, "getRegisteredIconData");
  var F = loggerLevelUtils.setFunctionName(async t => {
    try {
      await L(t);
      return true;
    } catch {
      return false;
    }
  }, "isIconAvailable");
  var _ = loggerLevelUtils.setFunctionName(async (t, e, r) => {
    let i;
    try {
      i = await L(t, e == null ? undefined : e.fallbackPrefix);
    } catch (t) {
      loggerLevelUtils.logger.error(t);
      i = T;
    }
    let l = function (t, e) {
      let r;
      let i;
      let a = {
        ...c,
        ...t
      };
      let o = {
        ...g,
        ...e
      };
      let l = {
        left: a.left,
        top: a.top,
        width: a.width,
        height: a.height
      };
      let n = a.body;
      [a, o].forEach(t => {
        let e;
        let r = [];
        let i = t.hFlip;
        let a = t.vFlip;
        let o = t.rotate;
        if (i) {
          if (a) {
            o += 2;
          } else {
            r.push("translate(" + (l.width + l.left).toString() + " " + (0 - l.top).toString() + ")");
            r.push("scale(-1 1)");
            l.top = l.left = 0;
          }
        } else if (a) {
          r.push("translate(" + (0 - l.left).toString() + " " + (l.height + l.top).toString() + ")");
          r.push("scale(1 -1)");
          l.top = l.left = 0;
        }
        if (o < 0) {
          o -= Math.floor(o / 4) * 4;
        }
        switch (o %= 4) {
          case 1:
            r.unshift("rotate(90 " + (e = l.height / 2 + l.top).toString() + " " + e.toString() + ")");
            break;
          case 2:
            r.unshift("rotate(180 " + (l.width / 2 + l.left).toString() + " " + (l.height / 2 + l.top).toString() + ")");
            break;
          case 3:
            r.unshift("rotate(-90 " + (e = l.width / 2 + l.left).toString() + " " + e.toString() + ")");
        }
        if (o % 2 == 1) {
          if (l.left !== l.top) {
            e = l.left;
            l.left = l.top;
            l.top = e;
          }
          if (l.width !== l.height) {
            e = l.width;
            l.width = l.height;
            l.height = e;
          }
        }
        if (r.length) {
          n = function (t, e, r) {
            var i;
            var a;
            let o = function (t, e = "defs") {
              let r = "";
              let i = t.indexOf("<" + e);
              while (i >= 0) {
                let a = t.indexOf(">", i);
                let o = t.indexOf("</" + e);
                if (a === -1 || o === -1) {
                  break;
                }
                let l = t.indexOf(">", o);
                if (l === -1) {
                  break;
                }
                r += t.slice(a + 1, o).trim();
                t = t.slice(0, i).trim() + t.slice(l + 1);
              }
              return {
                defs: r,
                content: t
              };
            }(t);
            i = o.defs;
            a = e + o.content + r;
            if (i) {
              return "<defs>" + i + "</defs>" + a;
            } else {
              return a;
            }
          }(n, "<g transform=\"" + r.join(" ") + "\">", "</g>");
        }
      });
      let s = o.width;
      let h = o.height;
      let d = l.width;
      let u = l.height;
      if (s === null) {
        r = y(i = h === null ? "1em" : h === "auto" ? u : h, d / u);
      } else {
        r = s === "auto" ? d : s;
        i = h === null ? y(r, u / d) : h === "auto" ? u : h;
      }
      let p = {};
      let f = (t, e) => {
        if (!x(e)) {
          p[t] = e.toString();
        }
      };
      f("width", r);
      f("height", i);
      let m = [l.left, l.top, d, u];
      p.viewBox = m.join(" ");
      return {
        attributes: p,
        viewBox: m,
        body: n
      };
    }(i, e);
    let n = function (t, e) {
      let r = t.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
      for (let t in e) {
        r += " " + t + "=\"" + e[t] + "\"";
      }
      return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + r + ">" + t + "</svg>";
    }(function (t, e = C) {
      let r;
      let i = [];
      while (r = b.exec(t)) {
        i.push(r[1]);
      }
      if (!i.length) {
        return t;
      }
      let a = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
      i.forEach(r => {
        let i = typeof e == "function" ? e(r) : e + (v++).toString();
        let o = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        t = t.replace(RegExp("([#;\"])(" + o + ")([\")]|\\.[a-z])", "g"), "$1" + i + a + "$3");
      });
      return t = t.replace(RegExp(a, "g"), "");
    }(l.body), {
      ...l.attributes,
      ...r
    });
    return mermaidConfigUtils_1.sanitizeText(n, mermaidConfigUtils_1.getConfig());
  }, "getIconSVG");
  function A(t, e) {
    let {
      markdownAutoWrap: r
    } = e;
    let i = t.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n");
    let a = dedentTemplateString.dedent(i);
    if (r === false) {
      return a.replace(/ /g, "&nbsp;");
    } else {
      return a;
    }
  }
  function $(t, e = {}) {
    let r = A(t, e);
    let i = markedMarkdownParser.parse.lexer(r);
    let a = [[]];
    let l = 0;
    function n(t, e = "normal") {
      if (t.type === "text") {
        t.text.split("\n").forEach((t, r) => {
          if (r !== 0) {
            l++;
            a.push([]);
          }
          t.split(" ").forEach(t => {
            if (t = t.replace(/&#39;/g, "'")) {
              a[l].push({
                content: t,
                type: e
              });
            }
          });
        });
      } else if (t.type === "strong" || t.type === "em") {
        t.tokens.forEach(e => {
          n(e, t.type);
        });
      } else if (t.type === "html") {
        a[l].push({
          content: t.text,
          type: "normal"
        });
      }
    }
    loggerLevelUtils.setFunctionName(n, "processNode");
    i.forEach(t => {
      if (t.type === "paragraph") {
        var e;
        if ((e = t.tokens) !== null && e !== undefined) {
          e.forEach(t => {
            n(t);
          });
        }
      } else if (t.type === "html") {
        a[l].push({
          content: t.text,
          type: "normal"
        });
      } else {
        a[l].push({
          content: t.raw,
          type: "normal"
        });
      }
    });
    return a;
  }
  function E(t, {
    markdownAutoWrap: e
  } = {}) {
    let r = markedMarkdownParser.parse.lexer(t);
    function i(t) {
      var r;
      var a;
      var l;
      if (t.type === "text") {
        if (e === false) {
          return t.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;");
        } else {
          return t.text.replace(/\n */g, "<br/>");
        }
      }
      if (t.type === "strong") {
        return `<strong>${(r = t.tokens) === null || r === undefined ? undefined : r.map(i).join("")}</strong>`;
      }
      if (t.type === "em") {
        return `<em>${(a = t.tokens) === null || a === undefined ? undefined : a.map(i).join("")}</em>`;
      }
      if (t.type === "paragraph") {
        return `<p>${(l = t.tokens) === null || l === undefined ? undefined : l.map(i).join("")}</p>`;
      }
      if (t.type === "space") {
        return "";
      } else if (t.type === "html") {
        return `${t.text}`;
      } else if (t.type === "escape") {
        return t.text;
      }
      loggerLevelUtils.logger.warn(`Unsupported markdown: ${t.type}`);
      return t.raw;
    }
    loggerLevelUtils.setFunctionName(i, "output");
    return r.map(i).join("");
  }
  function Z(t) {
    if (Intl.Segmenter) {
      return [...new Intl.Segmenter().segment(t)].map(t => t.segment);
    } else {
      return [...t];
    }
  }
  function O(t, e) {
    return D(t, [], Z(e.content), e.type);
  }
  function D(t, e, r, i) {
    if (r.length === 0) {
      return [{
        content: e.join(""),
        type: i
      }, {
        content: "",
        type: i
      }];
    }
    let [a, ...o] = r;
    let l = [...e, a];
    if (t([{
      content: l.join(""),
      type: i
    }])) {
      return D(t, l, o, i);
    } else {
      if (e.length === 0 && a) {
        e.push(a);
        r.shift();
      }
      return [{
        content: e.join(""),
        type: i
      }, {
        content: r.join(""),
        type: i
      }];
    }
  }
  function I(t, e) {
    if (t.some(t => {
      let {
        content: e
      } = t;
      return e.includes("\n");
    })) {
      throw Error("splitLineToFitWidth does not support newlines in the line");
    }
    return q(t, e);
  }
  function q(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    if (t.length === 0) {
      if (a.length > 0) {
        i.push(a);
      }
      if (i.length > 0) {
        return i;
      } else {
        return [];
      }
    }
    let o = "";
    if (t[0].content === " ") {
      o = " ";
      t.shift();
    }
    let l = t.shift() ?? {
      content: " ",
      type: "normal"
    };
    let n = [...a];
    if (o !== "") {
      n.push({
        content: o,
        type: "normal"
      });
    }
    n.push(l);
    if (e(n)) {
      return q(t, e, i, n);
    }
    if (a.length > 0) {
      i.push(a);
      t.unshift(l);
    } else if (l.content) {
      let [r, a] = O(e, l);
      i.push([r]);
      if (a.content) {
        t.unshift(a);
      }
    }
    return q(t, e, i);
  }
  function R(t, e) {
    if (e) {
      t.attr("style", e);
    }
  }
  async function N(t, e, r, i, o = false, l = mermaidConfigUtils_1.getConfig()) {
    let n = t.append("foreignObject");
    n.attr("width", `${r * 10}px`);
    n.attr("height", `${r * 10}px`);
    let s = n.append("xhtml:div");
    let h = mermaidConfigUtils_1.hasKatex(e.label) ? await mermaidConfigUtils_1.renderKatexSanitized(e.label.replace(mermaidConfigUtils_1.textUtilities.lineBreakRegex, "\n"), l) : mermaidConfigUtils_1.sanitizeText(e.label, l);
    let c = e.isNode ? "nodeLabel" : "edgeLabel";
    let d = s.append("span");
    d.html(h);
    R(d, e.labelStyle);
    d.attr("class", `${c} ${i}`);
    R(s, e.labelStyle);
    s.style("display", "table-cell");
    s.style("white-space", "nowrap");
    s.style("line-height", "1.5");
    s.style("max-width", r + "px");
    s.style("text-align", "center");
    s.attr("xmlns", "http://www.w3.org/1999/xhtml");
    if (o) {
      s.attr("class", "labelBkg");
    }
    let u = s.node().getBoundingClientRect();
    if (u.width === r) {
      s.style("display", "table");
      s.style("white-space", "break-spaces");
      s.style("width", r + "px");
      u = s.node().getBoundingClientRect();
    }
    return n.node();
  }
  function P(t, e, r) {
    return t.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", e * r - 0.1 + "em").attr("dy", r + "em");
  }
  function z(t, e, r) {
    let i = t.append("text");
    let a = P(i, 1, e);
    U(a, r);
    let o = a.node().getComputedTextLength();
    i.remove();
    return o;
  }
  function j(t, e, r) {
    var i;
    let a = t.append("text");
    let o = P(a, 1, e);
    U(o, [{
      content: r,
      type: "normal"
    }]);
    let l = (i = o.node()) === null || i === undefined ? undefined : i.getBoundingClientRect();
    if (l) {
      a.remove();
    }
    return l;
  }
  function H(t, e, r, i = false) {
    let a = e.append("g");
    let l = a.insert("rect").attr("class", "background").attr("style", "stroke: none");
    let n = a.append("text").attr("y", "-10.1");
    let s = 0;
    for (let e of r) {
      let r = loggerLevelUtils.setFunctionName(e => z(a, 1.1, e) <= t, "checkWidth");
      for (let t of r(e) ? [e] : I(e, r)) {
        U(P(n, s, 1.1), t);
        s++;
      }
    }
    if (!i) {
      return n.node();
    }
    {
      let t = n.node().getBBox();
      l.attr("x", t.x - 2).attr("y", t.y - 2).attr("width", t.width + 4).attr("height", t.height + 4);
      return a.node();
    }
  }
  function U(t, e) {
    t.text("");
    e.forEach((e, r) => {
      let i = t.append("tspan").attr("font-style", e.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", e.type === "strong" ? "bold" : "normal");
      if (r === 0) {
        i.text(e.content);
      } else {
        i.text(" " + e.content);
      }
    });
  }
  async function Y(t, e = {}) {
    let r = [];
    t.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (t, i, o) => {
      r.push((async () => {
        let r = `${i}:${o}`;
        if (await F(r)) {
          return await _(r, undefined, {
            class: "label-icon"
          });
        } else {
          return `<i class='${mermaidConfigUtils_1.sanitizeText(t, e).replace(":", " ")}'></i>`;
        }
      })());
      return t;
    });
    let i = await Promise.all(r);
    return t.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => {
      return i.shift() ?? "";
    });
  }
  loggerLevelUtils.setFunctionName(A, "preprocessMarkdown");
  loggerLevelUtils.setFunctionName($, "markdownToLines");
  loggerLevelUtils.setFunctionName(E, "markdownToHTML");
  loggerLevelUtils.setFunctionName(Z, "splitTextToChars");
  loggerLevelUtils.setFunctionName(O, "splitWordToFitWidth");
  loggerLevelUtils.setFunctionName(D, "splitWordToFitWidthRecursion");
  loggerLevelUtils.setFunctionName(I, "splitLineToFitWidth");
  loggerLevelUtils.setFunctionName(q, "splitLineToFitWidthRecursion");
  loggerLevelUtils.setFunctionName(R, "applyStyle");
  loggerLevelUtils.setFunctionName(N, "addHtmlSpan");
  loggerLevelUtils.setFunctionName(P, "createTspan");
  loggerLevelUtils.setFunctionName(z, "computeWidthOfText");
  loggerLevelUtils.setFunctionName(j, "computeDimensionOfText");
  loggerLevelUtils.setFunctionName(H, "createFormattedText");
  loggerLevelUtils.setFunctionName(U, "updateTextContentAndStyles");
  loggerLevelUtils.setFunctionName(Y, "replaceIconSubstring");
  var G = loggerLevelUtils.setFunctionName(async function (t, e = "", {
    style: r = "",
    isTitle: l = false,
    classes: n = "",
    useHtmlLabels: s = true,
    isNode: h = true,
    width: c = 200,
    addSvgBackground: d = false
  } = {}, u) {
    loggerLevelUtils.logger.debug("XYZ createText", e, r, l, n, s, h, "addSvgBackground: ", d);
    if (s) {
      let o = E(e, u);
      let l = await Y(mermaidDiagramUtils.decodeEntities(o), u);
      let s = e.replace(/\\\\/g, "\\");
      let p = {
        isNode: h,
        label: mermaidConfigUtils_1.hasKatex(e) ? s : l,
        labelStyle: r.replace("fill:", "color:")
      };
      return await N(t, p, c, n, d, u);
    }
    {
      let i = H(c, t, $(e.replace(/<br\s*\/?>/g, "<br/>").replace("<br>", "<br/>"), u), !!e && d);
      if (h) {
        if (/stroke:/.exec(r)) {
          r = r.replace("stroke:", "lineColor:");
        }
        let t = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
        axisAndZoomUtilities.select(i).attr("style", t);
      } else {
        let t = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
        axisAndZoomUtilities.select(i).select("rect").attr("style", t.replace(/background:/g, "fill:"));
        let e = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
        axisAndZoomUtilities.select(i).select("text").attr("style", e);
      }
      return i;
    }
  }, "createText");
  require.d(exports, {
    iconDataPlaceholder: function () {
      return T;
    },
    replaceIconSubstring: function () {
      return Y;
    },
    createText: function () {
      return G;
    },
    computeDimensionOfText: function () {
      return j;
    },
    registerIconPacks: function () {
      return W;
    },
    getIconSVG: function () {
      return _;
    }
  });
}