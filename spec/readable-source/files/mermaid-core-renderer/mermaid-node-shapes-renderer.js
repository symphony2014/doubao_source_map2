// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C1' to 'labelHelper'
// - Renamed export 'Lf' to 'insertCluster'
// - Renamed export 'XO' to 'createLabel'
// - Renamed export 'Yn' to 'setNodeElem'
// - Renamed export 'ZH' to 'clearClusterCache'
// - Renamed export 'aH' to 'kanbanItem'
// - Renamed export 'dW' to 'isValidShape'
// - Renamed export 'gU' to 'clearNodeCache'
// - Renamed export 'jr' to 'updateNodeBounds'
// - Renamed export 'us' to 'insertNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 411411
         */
module.exports = function (module, exports, require) {
  var i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var subgraphTitleMarginsCalculator = require("subgraph-title-margins-calculator") /*id: 954180*/;
  var mermaidStyleUtils = require("mermaid-style-utils") /*id: 717687*/;
  var iconUtilsTextRendering = require("icon-utils-text-rendering") /*id: 990626*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var roughDrawingCore = require("rough-drawing-core") /*id: 157146*/;
  var p = loggerLevelUtils.setFunctionName(async (t, e, r) => {
    let l;
    let u;
    let p = e.useHtmlLabels || mermaidConfigUtils_1.evaluate(mermaidConfigUtils_1.getConfigAlias()?.htmlLabels);
    l = r || "node default";
    let g = t.insert("g").attr("class", l).attr("id", e.domId || e.id);
    let f = g.insert("g").attr("class", "label").attr("style", mermaidDiagramUtils.handleUndefinedAttr(e.labelStyle));
    u = e.label === undefined ? "" : typeof e.label == "string" ? e.label : e.label[0];
    let m = await iconUtilsTextRendering.createText(f, mermaidConfigUtils_1.sanitizeText(mermaidDiagramUtils.decodeEntities(u), mermaidConfigUtils_1.getConfigAlias()), {
      useHtmlLabels: p,
      width: e.width || mermaidConfigUtils_1.getConfigAlias().flowchart?.wrappingWidth,
      cssClasses: "markdown-node-label",
      style: e.labelStyle,
      addSvgBackground: !!e.icon || !!e.img
    });
    let y = m.getBBox();
    let x = ((e == null ? undefined : e.padding) ?? 0) / 2;
    if (p) {
      let t = m.children[0];
      let e = axisAndZoomUtilities.select(m);
      let r = t.getElementsByTagName("img");
      if (r) {
        let t = u.replace(/<img[^>]*>/g, "").trim() === "";
        await Promise.all([...r].map(e => new Promise(r => {
          function i() {
            e.style.display = "flex";
            e.style.flexDirection = "column";
            if (t) {
              let t = mermaidConfigUtils_1.getConfigAlias().fontSize ? mermaidConfigUtils_1.getConfigAlias().fontSize : window.getComputedStyle(document.body).fontSize;
              let [r = mermaidConfigUtils_1.defaultConfig.fontSize] = mermaidDiagramUtils.parseFontSize(t);
              let i = r * 5 + "px";
              e.style.minWidth = i;
              e.style.maxWidth = i;
            } else {
              e.style.width = "100%";
            }
            r(e);
          }
          loggerLevelUtils.setFunctionName(i, "setupImage");
          setTimeout(() => {
            if (e.complete) {
              i();
            }
          });
          e.addEventListener("error", i);
          e.addEventListener("load", i);
        })));
      }
      y = t.getBoundingClientRect();
      e.attr("width", y.width);
      e.attr("height", y.height);
    }
    if (p) {
      f.attr("transform", "translate(" + -y.width / 2 + ", " + -y.height / 2 + ")");
    } else {
      f.attr("transform", "translate(0, " + -y.height / 2 + ")");
    }
    if (e.centerLabel) {
      f.attr("transform", "translate(" + -y.width / 2 + ", " + -y.height / 2 + ")");
    }
    f.insert("rect", ":first-child");
    return {
      shapeSvg: g,
      bbox: y,
      halfPadding: x,
      label: f
    };
  }, "labelHelper");
  var g = loggerLevelUtils.setFunctionName(async (t, e, r) => {
    var a;
    var l;
    var u;
    let p = r.useHtmlLabels || mermaidConfigUtils_1.evaluate((a = mermaidConfigUtils_1.getConfigAlias()) === null || a === undefined ? undefined : a.flowchart?.htmlLabels);
    let g = t.insert("g").attr("class", "label").attr("style", r.labelStyle || "");
    let f = await iconUtilsTextRendering.createText(g, mermaidConfigUtils_1.sanitizeText(mermaidDiagramUtils.decodeEntities(e), mermaidConfigUtils_1.getConfigAlias()), {
      useHtmlLabels: p,
      width: r.width || ((l = mermaidConfigUtils_1.getConfigAlias()) === null || l === undefined ? undefined : l.flowchart?.wrappingWidth),
      style: r.labelStyle,
      addSvgBackground: !!r.icon || !!r.img
    });
    let m = f.getBBox();
    let y = r.padding / 2;
    if (mermaidConfigUtils_1.evaluate((u = mermaidConfigUtils_1.getConfigAlias()) === null || u === undefined ? undefined : u.flowchart?.htmlLabels)) {
      let t = f.children[0];
      let e = axisAndZoomUtilities.select(f);
      m = t.getBoundingClientRect();
      e.attr("width", m.width);
      e.attr("height", m.height);
    }
    if (p) {
      g.attr("transform", "translate(" + -m.width / 2 + ", " + -m.height / 2 + ")");
    } else {
      g.attr("transform", "translate(0, " + -m.height / 2 + ")");
    }
    if (r.centerLabel) {
      g.attr("transform", "translate(" + -m.width / 2 + ", " + -m.height / 2 + ")");
    }
    g.insert("rect", ":first-child");
    return {
      shapeSvg: t,
      bbox: m,
      halfPadding: y,
      label: g
    };
  }, "insertLabel");
  var f = loggerLevelUtils.setFunctionName((t, e) => {
    let r = e.node().getBBox();
    t.width = r.width;
    t.height = r.height;
  }, "updateNodeBounds");
  var m = loggerLevelUtils.setFunctionName((t, e) => (t.look === "handDrawn" ? "rough-node" : "node") + " " + t.cssClasses + " " + (e || ""), "getNodeClasses");
  function y(t) {
    let e = t.map((t, e) => `${e === 0 ? "M" : "L"}${t.x},${t.y}`);
    e.push("Z");
    return e.join(" ");
  }
  function x(t, e, r, i, a, o) {
    let l = [];
    let n = r - t;
    let s = Math.PI * 2 / (n / o);
    let h = e + (i - e) / 2;
    for (let e = 0; e <= 50; e++) {
      let r = t + e / 50 * n;
      let i = h + a * Math.sin(s * (r - t));
      l.push({
        x: r,
        y: i
      });
    }
    return l;
  }
  function b(t, e, r, i, a, o) {
    let l = [];
    let n = a * Math.PI / 180;
    let s = (o * Math.PI / 180 - n) / (i - 1);
    for (let a = 0; a < i; a++) {
      let i = n + a * s;
      let o = t + r * Math.cos(i);
      let h = e + r * Math.sin(i);
      l.push({
        x: -o,
        y: -h
      });
    }
    return l;
  }
  loggerLevelUtils.setFunctionName(y, "createPathFromPoints");
  loggerLevelUtils.setFunctionName(x, "generateFullSineWavePoints");
  loggerLevelUtils.setFunctionName(b, "generateCirclePoints");
  var C = loggerLevelUtils.setFunctionName((t, e) => {
    var r;
    var i;
    var a = t.x;
    var o = t.y;
    var l = e.x - a;
    var n = e.y - o;
    var s = t.width / 2;
    var h = t.height / 2;
    if (Math.abs(n) * s > Math.abs(l) * h) {
      if (n < 0) {
        h = -h;
      }
      r = n === 0 ? 0 : h * l / n;
      i = h;
    } else {
      if (l < 0) {
        s = -s;
      }
      r = s;
      i = l === 0 ? 0 : s * n / l;
    }
    return {
      x: a + r,
      y: o + i
    };
  }, "intersectRect");
  function v(t, e) {
    if (e) {
      t.attr("style", e);
    }
  }
  async function k(t) {
    let e = axisAndZoomUtilities.select(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
    let r = e.append("xhtml:div");
    let i = mermaidConfigUtils_1.getConfigAlias();
    let a = t.label;
    if (t.label && mermaidConfigUtils_1.hasKatex(t.label)) {
      a = await mermaidConfigUtils_1.renderKatexSanitized(t.label.replace(mermaidConfigUtils_1.textUtilities.lineBreakRegex, "\n"), i);
    }
    let o = "<span class=\"" + (t.isNode ? "nodeLabel" : "edgeLabel") + "\" " + (t.labelStyle ? "style=\"" + t.labelStyle + "\"" : "") + ">" + a + "</span>";
    r.html(mermaidConfigUtils_1.sanitizeText(o, i));
    v(r, t.labelStyle);
    r.style("display", "inline-block");
    r.style("padding-right", "1px");
    r.style("white-space", "nowrap");
    r.attr("xmlns", "http://www.w3.org/1999/xhtml");
    return e.node();
  }
  loggerLevelUtils.setFunctionName(v, "applyStyle");
  loggerLevelUtils.setFunctionName(k, "addHtmlLabel");
  var w = loggerLevelUtils.setFunctionName(async (t, e, r, i) => {
    let a = t || "";
    if (typeof a == "object") {
      a = a[0];
    }
    if (mermaidConfigUtils_1.evaluate(mermaidConfigUtils_1.getConfigAlias().flowchart.htmlLabels)) {
      a = a.replace(/\\n|\n/g, "<br />");
      loggerLevelUtils.logger.info("vertexText" + a);
      let t = {
        isNode: i,
        label: mermaidDiagramUtils.decodeEntities(a).replace(/fa[blrs]?:fa-[\w-]+/g, t => `<i class='${t.replace(":", " ")}'></i>`),
        labelStyle: e ? e.replace("fill:", "color:") : e
      };
      return await k(t);
    }
    {
      let t = document.createElementNS("http://www.w3.org/2000/svg", "text");
      t.setAttribute("style", e.replace("color:", "fill:"));
      let i = [];
      for (let e of typeof a == "string" ? a.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(a) ? a : []) {
        let i = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        i.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        i.setAttribute("dy", "1em");
        i.setAttribute("x", "0");
        if (r) {
          i.setAttribute("class", "title-row");
        } else {
          i.setAttribute("class", "row");
        }
        i.textContent = e.trim();
        t.appendChild(i);
      }
      return t;
    }
  }, "createLabel");
  var S = loggerLevelUtils.setFunctionName((t, e, r, i, a) => ["M", t + a, e, "H", t + r - a, "A", a, a, 0, 0, 1, t + r, e + a, "V", e + i - a, "A", a, a, 0, 0, 1, t + r - a, e + i, "H", t + a, "A", a, a, 0, 0, 1, t, e + i - a, "V", e + a, "A", a, a, 0, 0, 1, t + a, e, "Z"].join(" "), "createRoundedRectPathD");
  var T = loggerLevelUtils.setFunctionName(async (t, e) => {
    let r;
    loggerLevelUtils.logger.info("Creating subgraph rect for ", e.id, e);
    let i = mermaidConfigUtils_1.getConfigAlias();
    let {
      themeVariables: a,
      handDrawnSeed: s
    } = i;
    let {
      clusterBkg: p,
      clusterBorder: g
    } = a;
    let {
      labelStyles: f,
      nodeStyles: m,
      borderStyles: y,
      backgroundStyles: x
    } = mermaidStyleUtils.stylesToString(e);
    let b = t.insert("g").attr("class", "cluster " + e.cssClasses).attr("id", e.id).attr("data-look", e.look);
    let v = mermaidConfigUtils_1.evaluate(i.flowchart.htmlLabels);
    let k = b.insert("g").attr("class", "cluster-label ");
    let w = await iconUtilsTextRendering.createText(k, e.label, {
      style: e.labelStyle,
      useHtmlLabels: v,
      isNode: true
    });
    let T = w.getBBox();
    if (mermaidConfigUtils_1.evaluate(i.flowchart.htmlLabels)) {
      let t = w.children[0];
      let e = axisAndZoomUtilities.select(w);
      T = t.getBoundingClientRect();
      e.attr("width", T.width);
      e.attr("height", T.height);
    }
    let B = e.width <= T.width + e.padding ? T.width + e.padding : e.width;
    if (e.width <= T.width + e.padding) {
      e.diff = (B - e.width) / 2 - e.padding;
    } else {
      e.diff = -e.padding;
    }
    let M = e.height;
    let W = e.x - B / 2;
    let L = e.y - M / 2;
    loggerLevelUtils.logger.trace("Data ", e, JSON.stringify(e));
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(b);
      let i = mermaidStyleUtils.userNodeOverrides(e, {
        roughness: 0.7,
        fill: p,
        stroke: g,
        fillWeight: 3,
        seed: s
      });
      let a = t.path(S(W, L, B, M, 0), i);
      (r = b.insert(() => {
        loggerLevelUtils.logger.debug("Rough node insert CXC", a);
        return a;
      }, ":first-child")).select("path:nth-child(2)").attr("style", y.join(";"));
      r.select("path").attr("style", x.join(";").replace("fill", "stroke"));
    } else {
      (r = b.insert("rect", ":first-child")).attr("style", m).attr("rx", e.rx).attr("ry", e.ry).attr("x", W).attr("y", L).attr("width", B).attr("height", M);
    }
    let {
      subGraphTitleTopMargin: F
    } = subgraphTitleMarginsCalculator.getSubGraphTitleMargins(i);
    k.attr("transform", `translate(${e.x - T.width / 2}, ${e.y - e.height / 2 + F})`);
    if (f) {
      let t = k.select("span");
      if (t) {
        t.attr("style", f);
      }
    }
    let _ = r.node().getBBox();
    e.offsetX = 0;
    e.width = _.width;
    e.height = _.height;
    e.offsetY = T.height - e.padding / 2;
    e.intersect = function (t) {
      return C(e, t);
    };
    return {
      cluster: b,
      labelBBox: T
    };
  }, "rect");
  var B = loggerLevelUtils.setFunctionName((t, e) => {
    let r = t.insert("g").attr("class", "note-cluster").attr("id", e.id);
    let i = r.insert("rect", ":first-child");
    let a = e.padding * 0;
    let o = a / 2;
    i.attr("rx", e.rx).attr("ry", e.ry).attr("x", e.x - e.width / 2 - o).attr("y", e.y - e.height / 2 - o).attr("width", e.width + a).attr("height", e.height + a).attr("fill", "none");
    let l = i.node().getBBox();
    e.width = l.width;
    e.height = l.height;
    e.intersect = function (t) {
      return C(e, t);
    };
    return {
      cluster: r,
      labelBBox: {
        width: 0,
        height: 0
      }
    };
  }, "noteGroup");
  var M = loggerLevelUtils.setFunctionName(async (t, e) => {
    let r;
    let i = mermaidConfigUtils_1.getConfigAlias();
    let {
      themeVariables: a,
      handDrawnSeed: o
    } = i;
    let {
      altBackground: l,
      compositeBackground: n,
      compositeTitleBackground: s,
      nodeBorder: c
    } = a;
    let p = t.insert("g").attr("class", e.cssClasses).attr("id", e.id).attr("data-id", e.id).attr("data-look", e.look);
    let g = p.insert("g", ":first-child");
    let f = p.insert("g").attr("class", "cluster-label");
    let m = p.append("rect");
    let y = f.node().appendChild(await w(e.label, e.labelStyle, undefined, true));
    let x = y.getBBox();
    if (mermaidConfigUtils_1.evaluate(i.flowchart.htmlLabels)) {
      let t = y.children[0];
      let e = axisAndZoomUtilities.select(y);
      x = t.getBoundingClientRect();
      e.attr("width", x.width);
      e.attr("height", x.height);
    }
    let b = e.padding * 0;
    let v = (e.width <= x.width + e.padding ? x.width + e.padding : e.width) + b;
    if (e.width <= x.width + e.padding) {
      e.diff = (v - e.width) / 2 - e.padding;
    } else {
      e.diff = -e.padding;
    }
    let k = e.height + b;
    let T = e.height + b - x.height - 6;
    let B = e.x - v / 2;
    let M = e.y - k / 2;
    e.width = v;
    let W = e.y - e.height / 2 - b / 2 + x.height + 2;
    if (e.look === "handDrawn") {
      let t = e.cssClasses.includes("statediagram-cluster-alt");
      let i = roughDrawingCore.roughLibrary.svg(p);
      let a = e.rx || e.ry ? i.path(S(B, M, v, k, 10), {
        roughness: 0.7,
        fill: s,
        fillStyle: "solid",
        stroke: c,
        seed: o
      }) : i.rectangle(B, M, v, k, {
        seed: o
      });
      r = p.insert(() => a, ":first-child");
      let h = i.rectangle(B, W, v, T, {
        fill: t ? l : n,
        fillStyle: t ? "hachure" : "solid",
        stroke: c,
        seed: o
      });
      r = p.insert(() => a, ":first-child");
      m = p.insert(() => h);
    } else {
      (r = g.insert("rect", ":first-child")).attr("class", "outer").attr("x", B).attr("y", M).attr("width", v).attr("height", k).attr("data-look", e.look);
      m.attr("class", "inner").attr("x", B).attr("y", W).attr("width", v).attr("height", T);
    }
    f.attr("transform", `translate(${e.x - x.width / 2}, ${M + 1 - !mermaidConfigUtils_1.evaluate(i.flowchart.htmlLabels) * 3})`);
    let L = r.node().getBBox();
    e.height = L.height;
    e.offsetX = 0;
    e.offsetY = x.height - e.padding / 2;
    e.labelBBox = x;
    e.intersect = function (t) {
      return C(e, t);
    };
    return {
      cluster: p,
      labelBBox: x
    };
  }, "roundedWithTitle");
  var W = loggerLevelUtils.setFunctionName(async (t, e) => {
    let r;
    loggerLevelUtils.logger.info("Creating subgraph rect for ", e.id, e);
    let i = mermaidConfigUtils_1.getConfigAlias();
    let {
      themeVariables: a,
      handDrawnSeed: s
    } = i;
    let {
      clusterBkg: p,
      clusterBorder: g
    } = a;
    let {
      labelStyles: f,
      nodeStyles: m,
      borderStyles: y,
      backgroundStyles: x
    } = mermaidStyleUtils.stylesToString(e);
    let b = t.insert("g").attr("class", "cluster " + e.cssClasses).attr("id", e.id).attr("data-look", e.look);
    let v = mermaidConfigUtils_1.evaluate(i.flowchart.htmlLabels);
    let k = b.insert("g").attr("class", "cluster-label ");
    let w = await iconUtilsTextRendering.createText(k, e.label, {
      style: e.labelStyle,
      useHtmlLabels: v,
      isNode: true,
      width: e.width
    });
    let T = w.getBBox();
    if (mermaidConfigUtils_1.evaluate(i.flowchart.htmlLabels)) {
      let t = w.children[0];
      let e = axisAndZoomUtilities.select(w);
      T = t.getBoundingClientRect();
      e.attr("width", T.width);
      e.attr("height", T.height);
    }
    let B = e.width <= T.width + e.padding ? T.width + e.padding : e.width;
    if (e.width <= T.width + e.padding) {
      e.diff = (B - e.width) / 2 - e.padding;
    } else {
      e.diff = -e.padding;
    }
    let M = e.height;
    let W = e.x - B / 2;
    let L = e.y - M / 2;
    loggerLevelUtils.logger.trace("Data ", e, JSON.stringify(e));
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(b);
      let i = mermaidStyleUtils.userNodeOverrides(e, {
        roughness: 0.7,
        fill: p,
        stroke: g,
        fillWeight: 4,
        seed: s
      });
      let a = t.path(S(W, L, B, M, e.rx), i);
      (r = b.insert(() => {
        loggerLevelUtils.logger.debug("Rough node insert CXC", a);
        return a;
      }, ":first-child")).select("path:nth-child(2)").attr("style", y.join(";"));
      r.select("path").attr("style", x.join(";").replace("fill", "stroke"));
    } else {
      (r = b.insert("rect", ":first-child")).attr("style", m).attr("rx", e.rx).attr("ry", e.ry).attr("x", W).attr("y", L).attr("width", B).attr("height", M);
    }
    let {
      subGraphTitleTopMargin: F
    } = subgraphTitleMarginsCalculator.getSubGraphTitleMargins(i);
    k.attr("transform", `translate(${e.x - T.width / 2}, ${e.y - e.height / 2 + F})`);
    if (f) {
      let t = k.select("span");
      if (t) {
        t.attr("style", f);
      }
    }
    let _ = r.node().getBBox();
    e.offsetX = 0;
    e.width = _.width;
    e.height = _.height;
    e.offsetY = T.height - e.padding / 2;
    e.intersect = function (t) {
      return C(e, t);
    };
    return {
      cluster: b,
      labelBBox: T
    };
  }, "kanbanSection");
  var L = {
    rect: T,
    squareRect: T,
    roundedWithTitle: M,
    noteGroup: B,
    divider: loggerLevelUtils.setFunctionName((t, e) => {
      let r;
      let {
        themeVariables: i,
        handDrawnSeed: a
      } = mermaidConfigUtils_1.getConfigAlias();
      let {
        nodeBorder: o
      } = i;
      let l = t.insert("g").attr("class", e.cssClasses).attr("id", e.id).attr("data-look", e.look);
      let n = l.insert("g", ":first-child");
      let s = e.padding * 0;
      let c = e.width + s;
      e.diff = -e.padding;
      let d = e.height + s;
      let p = e.x - c / 2;
      let g = e.y - d / 2;
      e.width = c;
      if (e.look === "handDrawn") {
        let t = roughDrawingCore.roughLibrary.svg(l).rectangle(p, g, c, d, {
          fill: "lightgrey",
          roughness: 0.5,
          strokeLineDash: [5],
          stroke: o,
          seed: a
        });
        r = l.insert(() => t, ":first-child");
      } else {
        (r = n.insert("rect", ":first-child")).attr("class", "divider").attr("x", p).attr("y", g).attr("width", c).attr("height", d).attr("data-look", e.look);
      }
      let f = r.node().getBBox();
      e.height = f.height;
      e.offsetX = 0;
      e.offsetY = 0;
      e.intersect = function (t) {
        return C(e, t);
      };
      return {
        cluster: l,
        labelBBox: {}
      };
    }, "divider"),
    kanbanSection: W
  };
  var F = new Map();
  var _ = loggerLevelUtils.setFunctionName(async (t, e) => {
    let r = e.shape || "rect";
    let i = await L[r](t, e);
    F.set(e.id, i);
    return i;
  }, "insertCluster");
  var A = loggerLevelUtils.setFunctionName(() => {
    F = new Map();
  }, "clear");
  function $(t, e, r, i) {
    var a = t.x;
    var o = t.y;
    var l = a - i.x;
    var n = o - i.y;
    var s = Math.sqrt(e * e * n * n + r * r * l * l);
    var h = Math.abs(e * r * l / s);
    if (i.x < a) {
      h = -h;
    }
    var c = Math.abs(e * r * n / s);
    if (i.y < o) {
      c = -c;
    }
    return {
      x: a + h,
      y: o + c
    };
  }
  function E(t, e, r) {
    return $(t, e, e, r);
  }
  function Z(t, e, r, i) {
    {
      let a = e.y - t.y;
      let o = t.x - e.x;
      let l = e.x * t.y - t.x * e.y;
      let n = a * r.x + o * r.y + l;
      let s = a * i.x + o * i.y + l;
      if (n !== 0 && s !== 0 && O(n, s)) {
        return;
      }
      let h = i.y - r.y;
      let c = r.x - i.x;
      let d = i.x * r.y - r.x * i.y;
      let u = h * t.x + c * t.y + d;
      let p = h * e.x + c * e.y + d;
      if (Math.abs(u) < 0.000001 && Math.abs(p) < 0.000001 && O(u, p)) {
        return;
      }
      let g = a * c - h * o;
      if (g === 0) {
        return;
      }
      let f = Math.abs(g / 2);
      let m = o * d - c * l;
      return {
        x: m < 0 ? (m - f) / g : (m + f) / g,
        y: (m = h * l - a * d) < 0 ? (m - f) / g : (m + f) / g
      };
    }
  }
  function O(t, e) {
    return t * e > 0;
  }
  function D(t, e, r) {
    let i = t.x;
    let a = t.y;
    let o = [];
    let l = Number.POSITIVE_INFINITY;
    let n = Number.POSITIVE_INFINITY;
    if (typeof e.forEach == "function") {
      e.forEach(function (t) {
        l = Math.min(l, t.x);
        n = Math.min(n, t.y);
      });
    } else {
      l = Math.min(l, e.x);
      n = Math.min(n, e.y);
    }
    let s = i - t.width / 2 - l;
    let h = a - t.height / 2 - n;
    for (let i = 0; i < e.length; i++) {
      let a = e[i];
      let l = e[i < e.length - 1 ? i + 1 : 0];
      let n = Z(t, r, {
        x: s + a.x,
        y: h + a.y
      }, {
        x: s + l.x,
        y: h + l.y
      });
      if (n) {
        o.push(n);
      }
    }
    if (o.length) {
      if (o.length > 1) {
        o.sort(function (t, e) {
          let i = t.x - r.x;
          let a = t.y - r.y;
          let o = Math.sqrt(i * i + a * a);
          let l = e.x - r.x;
          let n = e.y - r.y;
          let s = Math.sqrt(l * l + n * n);
          if (o < s) {
            return -1;
          } else {
            return +(o !== s);
          }
        });
      }
      return o[0];
    } else {
      return t;
    }
  }
  loggerLevelUtils.setFunctionName(function (t, e) {
    return t.intersect(e);
  }, "intersectNode");
  loggerLevelUtils.setFunctionName($, "intersectEllipse");
  loggerLevelUtils.setFunctionName(E, "intersectCircle");
  loggerLevelUtils.setFunctionName(Z, "intersectLine");
  loggerLevelUtils.setFunctionName(O, "sameSign");
  loggerLevelUtils.setFunctionName(D, "intersectPolygon");
  var I = {
    circle: E,
    polygon: D,
    rect: C
  };
  function q(t, e) {
    let {
      labelStyles: r
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = r;
    let i = m(e);
    let a = i;
    if (!i) {
      a = "anchor";
    }
    let o = t.insert("g").attr("class", a).attr("id", e.domId || e.id);
    let {
      cssStyles: n
    } = e;
    let h = roughDrawingCore.roughLibrary.svg(o);
    let d = mermaidStyleUtils.userNodeOverrides(e, {
      fill: "black",
      stroke: "none",
      fillStyle: "solid"
    });
    if (e.look !== "handDrawn") {
      d.roughness = 0;
    }
    let p = h.circle(0, 0, 2, d);
    let g = o.insert(() => p, ":first-child");
    g.attr("class", "anchor").attr("style", mermaidDiagramUtils.handleUndefinedAttr(n));
    f(e, g);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("Circle intersect", e, 1, t);
      return I.circle(e, 1, t);
    };
    return o;
  }
  function R(t, e, r, i, a, o, l) {
    let n = Math.atan2(i - e, r - t);
    let s = Math.sqrt(((r - t) / 2 / a) ** 2 + ((i - e) / 2 / o) ** 2);
    if (s > 1) {
      throw Error("The given radii are too small to create an arc between the points.");
    }
    let h = Math.sqrt(1 - s ** 2);
    let c = (t + r) / 2 + h * o * Math.sin(n) * (l ? -1 : 1);
    let d = (e + i) / 2 - h * a * Math.cos(n) * (l ? -1 : 1);
    let u = Math.atan2((e - d) / o, (t - c) / a);
    let p = Math.atan2((i - d) / o, (r - c) / a) - u;
    if (l && p < 0) {
      p += Math.PI * 2;
    }
    if (!l && p > 0) {
      p -= Math.PI * 2;
    }
    let g = [];
    for (let t = 0; t < 20; t++) {
      let e = u + t / 19 * p;
      let r = c + a * Math.cos(e);
      let i = d + o * Math.sin(e);
      g.push({
        x: r,
        y: i
      });
    }
    return g;
  }
  async function N(t, e) {
    let {
      labelStyles: r,
      nodeStyles: i
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = r;
    let {
      shapeSvg: a,
      bbox: o
    } = await p(t, e, m(e));
    let n = o.width + e.padding + 20;
    let s = o.height + e.padding;
    let h = s / 2;
    let c = h / (2.5 + s / 50);
    let {
      cssStyles: d
    } = e;
    let g = [{
      x: n / 2,
      y: -s / 2
    }, {
      x: -n / 2,
      y: -s / 2
    }, ...R(-n / 2, -s / 2, -n / 2, s / 2, c, h, false), {
      x: n / 2,
      y: s / 2
    }, ...R(n / 2, s / 2, n / 2, -s / 2, c, h, true)];
    let x = roughDrawingCore.roughLibrary.svg(a);
    let b = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      b.roughness = 0;
      b.fillStyle = "solid";
    }
    let C = y(g);
    let v = x.path(C, b);
    let k = a.insert(() => v, ":first-child");
    k.attr("class", "basic label-container");
    if (d && e.look !== "handDrawn") {
      k.selectAll("path").attr("style", d);
    }
    if (i && e.look !== "handDrawn") {
      k.selectAll("path").attr("style", i);
    }
    k.attr("transform", `translate(${c / 2}, 0)`);
    f(e, k);
    e.intersect = function (t) {
      return I.polygon(e, g, t);
    };
    return a;
  }
  function P(t, e, r, i) {
    return t.insert("polygon", ":first-child").attr("points", i.map(function (t) {
      return t.x + "," + t.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -e / 2 + "," + r / 2 + ")");
  }
  async function z(t, e) {
    let r;
    let {
      labelStyles: i,
      nodeStyles: a
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = i;
    let {
      shapeSvg: o,
      bbox: n
    } = await p(t, e, m(e));
    let s = n.height + e.padding;
    let h = n.width + e.padding + 12;
    let c = -s;
    let d = [{
      x: 12,
      y: c
    }, {
      x: h,
      y: c
    }, {
      x: h,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: c + 12
    }, {
      x: 12,
      y: c
    }];
    let {
      cssStyles: g
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(o);
      let i = mermaidStyleUtils.userNodeOverrides(e, {});
      let a = y(d);
      let n = t.path(a, i);
      r = o.insert(() => n, ":first-child").attr("transform", `translate(${-h / 2}, ${s / 2})`);
      if (g) {
        r.attr("style", g);
      }
    } else {
      r = P(o, h, s, d);
    }
    if (a) {
      r.attr("style", a);
    }
    f(e, r);
    e.intersect = function (t) {
      return I.polygon(e, d, t);
    };
    return o;
  }
  function j(t, e) {
    let {
      nodeStyles: a
    } = mermaidStyleUtils.stylesToString(e);
    e.label = "";
    let o = t.insert("g").attr("class", m(e)).attr("id", e.domId ?? e.id);
    let {
      cssStyles: n
    } = e;
    let s = Math.max(28, e.width ?? 0);
    let h = [{
      x: 0,
      y: s / 2
    }, {
      x: s / 2,
      y: 0
    }, {
      x: 0,
      y: -s / 2
    }, {
      x: -s / 2,
      y: 0
    }];
    let c = roughDrawingCore.roughLibrary.svg(o);
    let d = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      d.roughness = 0;
      d.fillStyle = "solid";
    }
    let p = y(h);
    let g = c.path(p, d);
    let f = o.insert(() => g, ":first-child");
    if (n && e.look !== "handDrawn") {
      f.selectAll("path").attr("style", n);
    }
    if (a && e.look !== "handDrawn") {
      f.selectAll("path").attr("style", a);
    }
    e.width = 28;
    e.height = 28;
    e.intersect = function (t) {
      return I.polygon(e, h, t);
    };
    return o;
  }
  async function H(t, e, r) {
    let a;
    let {
      labelStyles: o,
      nodeStyles: n
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = o;
    let {
      shapeSvg: h,
      bbox: d,
      halfPadding: g
    } = await p(t, e, m(e));
    let y = (r == null ? undefined : r.padding) ?? g;
    let x = d.width / 2 + y;
    let {
      cssStyles: b
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(h);
      let r = mermaidStyleUtils.userNodeOverrides(e, {});
      let i = t.circle(0, 0, x * 2, r);
      (a = h.insert(() => i, ":first-child")).attr("class", "basic label-container").attr("style", mermaidDiagramUtils.handleUndefinedAttr(b));
    } else {
      a = h.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", n).attr("r", x).attr("cx", 0).attr("cy", 0);
    }
    f(e, a);
    e.calcIntersect = function (t, e) {
      let r = t.width / 2;
      return I.circle(t, r, e);
    };
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("Circle intersect", e, x, t);
      return I.circle(e, x, t);
    };
    return h;
  }
  function U(t) {
    let e = Math.cos(Math.PI / 4);
    let r = Math.sin(Math.PI / 4);
    let i = t * 2;
    let a = {
      x: i / 2 * e,
      y: i / 2 * r
    };
    let o = {
      x: -(i / 2) * e,
      y: i / 2 * r
    };
    let l = {
      x: -(i / 2) * e,
      y: -(i / 2) * r
    };
    let n = {
      x: i / 2 * e,
      y: -(i / 2) * r
    };
    return `M ${o.x},${o.y} L ${n.x},${n.y}
                   M ${a.x},${a.y} L ${l.x},${l.y}`;
  }
  function Y(t, e) {
    let {
      labelStyles: a,
      nodeStyles: o
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = a;
    e.label = "";
    let n = t.insert("g").attr("class", m(e)).attr("id", e.domId ?? e.id);
    let s = Math.max(30, (e == null ? undefined : e.width) ?? 0);
    let {
      cssStyles: h
    } = e;
    let d = roughDrawingCore.roughLibrary.svg(n);
    let p = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      p.roughness = 0;
      p.fillStyle = "solid";
    }
    let g = d.circle(0, 0, s * 2, p);
    let y = U(s);
    let x = d.path(y, p);
    let b = n.insert(() => g, ":first-child");
    b.insert(() => x);
    if (h && e.look !== "handDrawn") {
      b.selectAll("path").attr("style", h);
    }
    if (o && e.look !== "handDrawn") {
      b.selectAll("path").attr("style", o);
    }
    f(e, b);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("crossedCircle intersect", e, {
        radius: s,
        point: t
      });
      return I.circle(e, s, t);
    };
    return n;
  }
  function G(t, e, r, i = 100, a = 0, o = 180) {
    let l = [];
    let n = a * Math.PI / 180;
    let s = (o * Math.PI / 180 - n) / (i - 1);
    for (let a = 0; a < i; a++) {
      let i = n + a * s;
      let o = t + r * Math.cos(i);
      let h = e + r * Math.sin(i);
      l.push({
        x: -o,
        y: -h
      });
    }
    return l;
  }
  async function V(t, e) {
    let {
      labelStyles: s,
      nodeStyles: h
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = s;
    let {
      shapeSvg: c,
      bbox: d,
      label: g
    } = await p(t, e, m(e));
    let x = d.width + (e.padding ?? 0);
    let b = d.height + (e.padding ?? 0);
    let C = Math.max(5, b * 0.1);
    let {
      cssStyles: v
    } = e;
    let k = [...G(x / 2, -b / 2, C, 30, -90, 0), {
      x: -x / 2 - C,
      y: C
    }, ...G(x / 2 + C * 2, -C, C, 20, -180, -270), ...G(x / 2 + C * 2, C, C, 20, -90, -180), {
      x: -x / 2 - C,
      y: -b / 2
    }, ...G(x / 2, b / 2, C, 20, 0, 90)];
    let w = [{
      x: x / 2,
      y: -b / 2 - C
    }, {
      x: -x / 2,
      y: -b / 2 - C
    }, ...G(x / 2, -b / 2, C, 20, -90, 0), {
      x: -x / 2 - C,
      y: -C
    }, ...G(x / 2 + x * 0.1, -C, C, 20, -180, -270), ...G(x / 2 + x * 0.1, C, C, 20, -90, -180), {
      x: -x / 2 - C,
      y: b / 2
    }, ...G(x / 2, b / 2, C, 20, 0, 90), {
      x: -x / 2,
      y: b / 2 + C
    }, {
      x: x / 2,
      y: b / 2 + C
    }];
    let S = roughDrawingCore.roughLibrary.svg(c);
    let T = mermaidStyleUtils.userNodeOverrides(e, {
      fill: "none"
    });
    if (e.look !== "handDrawn") {
      T.roughness = 0;
      T.fillStyle = "solid";
    }
    let B = y(k).replace("Z", "");
    let M = S.path(B, T);
    let W = y(w);
    let L = S.path(W, {
      ...T
    });
    let F = c.insert("g", ":first-child");
    F.insert(() => L, ":first-child").attr("stroke-opacity", 0);
    F.insert(() => M, ":first-child");
    F.attr("class", "text");
    if (v && e.look !== "handDrawn") {
      F.selectAll("path").attr("style", v);
    }
    if (h && e.look !== "handDrawn") {
      F.selectAll("path").attr("style", h);
    }
    F.attr("transform", `translate(${C}, 0)`);
    g.attr("transform", `translate(${-x / 2 + C - (d.x - (d.left ?? 0))},${-b / 2 + (e.padding ?? 0) / 2 - (d.y - (d.top ?? 0))})`);
    f(e, F);
    e.intersect = function (t) {
      return I.polygon(e, w, t);
    };
    return c;
  }
  function X(t, e, r, i = 100, a = 0, o = 180) {
    let l = [];
    let n = a * Math.PI / 180;
    let s = (o * Math.PI / 180 - n) / (i - 1);
    for (let a = 0; a < i; a++) {
      let i = n + a * s;
      let o = t + r * Math.cos(i);
      let h = e + r * Math.sin(i);
      l.push({
        x: o,
        y: h
      });
    }
    return l;
  }
  async function Q(t, e) {
    let {
      labelStyles: h,
      nodeStyles: c
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = h;
    let {
      shapeSvg: d,
      bbox: g,
      label: x
    } = await p(t, e, m(e));
    let b = g.width + (e.padding ?? 0);
    let C = g.height + (e.padding ?? 0);
    let v = Math.max(5, C * 0.1);
    let {
      cssStyles: k
    } = e;
    let w = [...X(b / 2, -C / 2, v, 20, -90, 0), {
      x: b / 2 + v,
      y: -v
    }, ...X(b / 2 + v * 2, -v, v, 20, -180, -270), ...X(b / 2 + v * 2, v, v, 20, -90, -180), {
      x: b / 2 + v,
      y: C / 2
    }, ...X(b / 2, C / 2, v, 20, 0, 90)];
    let S = [{
      x: -b / 2,
      y: -C / 2 - v
    }, {
      x: b / 2,
      y: -C / 2 - v
    }, ...X(b / 2, -C / 2, v, 20, -90, 0), {
      x: b / 2 + v,
      y: -v
    }, ...X(b / 2 + v * 2, -v, v, 20, -180, -270), ...X(b / 2 + v * 2, v, v, 20, -90, -180), {
      x: b / 2 + v,
      y: C / 2
    }, ...X(b / 2, C / 2, v, 20, 0, 90), {
      x: b / 2,
      y: C / 2 + v
    }, {
      x: -b / 2,
      y: C / 2 + v
    }];
    let T = roughDrawingCore.roughLibrary.svg(d);
    let B = mermaidStyleUtils.userNodeOverrides(e, {
      fill: "none"
    });
    if (e.look !== "handDrawn") {
      B.roughness = 0;
      B.fillStyle = "solid";
    }
    let M = y(w).replace("Z", "");
    let W = T.path(M, B);
    let L = y(S);
    let F = T.path(L, {
      ...B
    });
    let _ = d.insert("g", ":first-child");
    _.insert(() => F, ":first-child").attr("stroke-opacity", 0);
    _.insert(() => W, ":first-child");
    _.attr("class", "text");
    if (k && e.look !== "handDrawn") {
      _.selectAll("path").attr("style", k);
    }
    if (c && e.look !== "handDrawn") {
      _.selectAll("path").attr("style", c);
    }
    _.attr("transform", `translate(${-v}, 0)`);
    x.attr("transform", `translate(${-b / 2 + (e.padding ?? 0) / 2 - (g.x - (g.left ?? 0))},${-C / 2 + (e.padding ?? 0) / 2 - (g.y - (g.top ?? 0))})`);
    f(e, _);
    e.intersect = function (t) {
      return I.polygon(e, S, t);
    };
    return d;
  }
  function J(t, e, r, i = 100, a = 0, o = 180) {
    let l = [];
    let n = a * Math.PI / 180;
    let s = (o * Math.PI / 180 - n) / (i - 1);
    for (let a = 0; a < i; a++) {
      let i = n + a * s;
      let o = t + r * Math.cos(i);
      let h = e + r * Math.sin(i);
      l.push({
        x: -o,
        y: -h
      });
    }
    return l;
  }
  async function K(t, e) {
    let {
      labelStyles: h,
      nodeStyles: c
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = h;
    let {
      shapeSvg: d,
      bbox: g,
      label: x
    } = await p(t, e, m(e));
    let b = g.width + (e.padding ?? 0);
    let C = g.height + (e.padding ?? 0);
    let v = Math.max(5, C * 0.1);
    let {
      cssStyles: k
    } = e;
    let w = [...J(b / 2, -C / 2, v, 30, -90, 0), {
      x: -b / 2 - v,
      y: v
    }, ...J(b / 2 + v * 2, -v, v, 20, -180, -270), ...J(b / 2 + v * 2, v, v, 20, -90, -180), {
      x: -b / 2 - v,
      y: -C / 2
    }, ...J(b / 2, C / 2, v, 20, 0, 90)];
    let S = [...J(-b / 2 + v + v / 2, -C / 2, v, 20, -90, -180), {
      x: b / 2 - v / 2,
      y: v
    }, ...J(-b / 2 - v / 2, -v, v, 20, 0, 90), ...J(-b / 2 - v / 2, v, v, 20, -90, 0), {
      x: b / 2 - v / 2,
      y: -v
    }, ...J(-b / 2 + v + v / 2, C / 2, v, 30, -180, -270)];
    let T = [{
      x: b / 2,
      y: -C / 2 - v
    }, {
      x: -b / 2,
      y: -C / 2 - v
    }, ...J(b / 2, -C / 2, v, 20, -90, 0), {
      x: -b / 2 - v,
      y: -v
    }, ...J(b / 2 + v * 2, -v, v, 20, -180, -270), ...J(b / 2 + v * 2, v, v, 20, -90, -180), {
      x: -b / 2 - v,
      y: C / 2
    }, ...J(b / 2, C / 2, v, 20, 0, 90), {
      x: -b / 2,
      y: C / 2 + v
    }, {
      x: b / 2 - v - v / 2,
      y: C / 2 + v
    }, ...J(-b / 2 + v + v / 2, -C / 2, v, 20, -90, -180), {
      x: b / 2 - v / 2,
      y: v
    }, ...J(-b / 2 - v / 2, -v, v, 20, 0, 90), ...J(-b / 2 - v / 2, v, v, 20, -90, 0), {
      x: b / 2 - v / 2,
      y: -v
    }, ...J(-b / 2 + v + v / 2, C / 2, v, 30, -180, -270)];
    let B = roughDrawingCore.roughLibrary.svg(d);
    let M = mermaidStyleUtils.userNodeOverrides(e, {
      fill: "none"
    });
    if (e.look !== "handDrawn") {
      M.roughness = 0;
      M.fillStyle = "solid";
    }
    let W = y(w).replace("Z", "");
    let L = B.path(W, M);
    let F = y(S).replace("Z", "");
    let _ = B.path(F, M);
    let A = y(T);
    let $ = B.path(A, {
      ...M
    });
    let E = d.insert("g", ":first-child");
    E.insert(() => $, ":first-child").attr("stroke-opacity", 0);
    E.insert(() => L, ":first-child");
    E.insert(() => _, ":first-child");
    E.attr("class", "text");
    if (k && e.look !== "handDrawn") {
      E.selectAll("path").attr("style", k);
    }
    if (c && e.look !== "handDrawn") {
      E.selectAll("path").attr("style", c);
    }
    E.attr("transform", `translate(${v - v / 4}, 0)`);
    x.attr("transform", `translate(${-b / 2 + (e.padding ?? 0) / 2 - (g.x - (g.left ?? 0))},${-C / 2 + (e.padding ?? 0) / 2 - (g.y - (g.top ?? 0))})`);
    f(e, E);
    e.intersect = function (t) {
      return I.polygon(e, T, t);
    };
    return d;
  }
  async function tt(t, e) {
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = n;
    let {
      shapeSvg: h,
      bbox: c
    } = await p(t, e, m(e));
    let d = Math.max(80, (c.width + (e.padding ?? 0) * 2) * 1.25, (e == null ? undefined : e.width) ?? 0);
    let g = Math.max(20, c.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let x = g / 2;
    let {
      cssStyles: C
    } = e;
    let v = roughDrawingCore.roughLibrary.svg(h);
    let k = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      k.roughness = 0;
      k.fillStyle = "solid";
    }
    let w = d - x;
    let S = g / 4;
    let T = [{
      x: w,
      y: 0
    }, {
      x: S,
      y: 0
    }, {
      x: 0,
      y: g / 2
    }, {
      x: S,
      y: g
    }, {
      x: w,
      y: g
    }, ...b(-w, -g / 2, x, 50, 270, 90)];
    let B = y(T);
    let M = v.path(B, k);
    let W = h.insert(() => M, ":first-child");
    W.attr("class", "basic label-container");
    if (C && e.look !== "handDrawn") {
      W.selectChildren("path").attr("style", C);
    }
    if (s && e.look !== "handDrawn") {
      W.selectChildren("path").attr("style", s);
    }
    W.attr("transform", `translate(${-d / 2}, ${-g / 2})`);
    f(e, W);
    e.intersect = function (t) {
      return I.polygon(e, T, t);
    };
    return h;
  }
  loggerLevelUtils.setFunctionName(q, "anchor");
  loggerLevelUtils.setFunctionName(R, "generateArcPoints");
  loggerLevelUtils.setFunctionName(N, "bowTieRect");
  loggerLevelUtils.setFunctionName(P, "insertPolygonShape");
  loggerLevelUtils.setFunctionName(z, "card");
  loggerLevelUtils.setFunctionName(j, "choice");
  loggerLevelUtils.setFunctionName(H, "circle");
  loggerLevelUtils.setFunctionName(U, "createLine");
  loggerLevelUtils.setFunctionName(Y, "crossedCircle");
  loggerLevelUtils.setFunctionName(G, "generateCirclePoints");
  loggerLevelUtils.setFunctionName(V, "curlyBraceLeft");
  loggerLevelUtils.setFunctionName(X, "generateCirclePoints");
  loggerLevelUtils.setFunctionName(Q, "curlyBraceRight");
  loggerLevelUtils.setFunctionName(J, "generateCirclePoints");
  loggerLevelUtils.setFunctionName(K, "curlyBraces");
  loggerLevelUtils.setFunctionName(tt, "curvedTrapezoid");
  var te = loggerLevelUtils.setFunctionName((t, e, r, i, a, o) => `M${t},${e + o} a${a},${o} 0,0,0 ${r},0 a${a},${o} 0,0,0 ${-r},0 l0,${i} a${a},${o} 0,0,0 ${r},0 l0,${-i}`, "createCylinderPathD");
  var tr = loggerLevelUtils.setFunctionName((t, e, r, i, a, o) => `M${t},${e + o} M${t + r},${e + o} a${a},${o} 0,0,0 ${-r},0 l0,${i} a${a},${o} 0,0,0 ${r},0 l0,${-i}`, "createOuterCylinderPathD");
  var ti = loggerLevelUtils.setFunctionName((t, e, r, i, a, o) => `M${t - r / 2},${-i / 2} a${a},${o} 0,0,0 ${r},0`, "createInnerCylinderPathD");
  async function ta(t, e) {
    let h;
    let {
      labelStyles: c,
      nodeStyles: d
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = c;
    let {
      shapeSvg: g,
      bbox: y,
      label: x
    } = await p(t, e, m(e));
    let b = Math.max(y.width + e.padding, e.width ?? 0);
    let C = b / 2;
    let v = C / (2.5 + b / 50);
    let k = Math.max(y.height + v + e.padding, e.height ?? 0);
    let {
      cssStyles: w
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(g);
      let r = tr(0, 0, b, k, C, v);
      let i = ti(0, v, b, k, C, v);
      let a = t.path(r, mermaidStyleUtils.userNodeOverrides(e, {}));
      let o = t.path(i, mermaidStyleUtils.userNodeOverrides(e, {
        fill: "none"
      }));
      h = g.insert(() => o, ":first-child");
      (h = g.insert(() => a, ":first-child")).attr("class", "basic label-container");
      if (w) {
        h.attr("style", w);
      }
    } else {
      let t = te(0, 0, b, k, C, v);
      h = g.insert("path", ":first-child").attr("d", t).attr("class", "basic label-container").attr("style", mermaidDiagramUtils.handleUndefinedAttr(w)).attr("style", d);
    }
    h.attr("label-offset-y", v);
    h.attr("transform", `translate(${-b / 2}, ${-(k / 2 + v)})`);
    f(e, h);
    x.attr("transform", `translate(${-(y.width / 2) - (y.x - (y.left ?? 0))}, ${-(y.height / 2) + (e.padding ?? 0) / 1.5 - (y.y - (y.top ?? 0))})`);
    e.intersect = function (t) {
      let s = I.rect(e, t);
      let h = s.x - (e.x ?? 0);
      if (C != 0 && (Math.abs(h) < (e.width ?? 0) / 2 || Math.abs(h) == (e.width ?? 0) / 2 && Math.abs(s.y - (e.y ?? 0)) > (e.height ?? 0) / 2 - v)) {
        let r = v * v * (1 - h * h / (C * C));
        if (r > 0) {
          r = Math.sqrt(r);
        }
        r = v - r;
        if (t.y - (e.y ?? 0) > 0) {
          r = -r;
        }
        s.y += r;
      }
      return s;
    };
    return g;
  }
  async function to(t, e) {
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = n;
    let {
      shapeSvg: h,
      bbox: c,
      label: d
    } = await p(t, e, m(e));
    let g = c.width + e.padding;
    let y = c.height + e.padding;
    let x = y * 0.2;
    let b = -g / 2;
    let C = -y / 2 - x / 2;
    let {
      cssStyles: v
    } = e;
    let k = roughDrawingCore.roughLibrary.svg(h);
    let w = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      w.roughness = 0;
      w.fillStyle = "solid";
    }
    let S = k.polygon([{
      x: b,
      y: C + x
    }, {
      x: -b,
      y: C + x
    }, {
      x: -b,
      y: -C
    }, {
      x: b,
      y: -C
    }, {
      x: b,
      y: C
    }, {
      x: -b,
      y: C
    }, {
      x: -b,
      y: C + x
    }].map(t => [t.x, t.y]), w);
    let T = h.insert(() => S, ":first-child");
    T.attr("class", "basic label-container");
    if (v && e.look !== "handDrawn") {
      T.selectAll("path").attr("style", v);
    }
    if (s && e.look !== "handDrawn") {
      T.selectAll("path").attr("style", s);
    }
    d.attr("transform", `translate(${b + (e.padding ?? 0) / 2 - (c.x - (c.left ?? 0))}, ${C + x + (e.padding ?? 0) / 2 - (c.y - (c.top ?? 0))})`);
    f(e, T);
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return h;
  }
  async function tl(t, e) {
    let r;
    let {
      labelStyles: i,
      nodeStyles: a
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = i;
    let {
      shapeSvg: o,
      bbox: n,
      halfPadding: h
    } = await p(t, e, m(e));
    let d = n.width / 2 + h + 5;
    let g = n.width / 2 + h;
    let {
      cssStyles: y
    } = e;
    if (e.look === "handDrawn") {
      var x;
      var b;
      let t = roughDrawingCore.roughLibrary.svg(o);
      let i = mermaidStyleUtils.userNodeOverrides(e, {
        roughness: 0.2,
        strokeWidth: 2.5
      });
      let a = mermaidStyleUtils.userNodeOverrides(e, {
        roughness: 0.2,
        strokeWidth: 1.5
      });
      let n = t.circle(0, 0, d * 2, i);
      let h = t.circle(0, 0, g * 2, a);
      (r = o.insert("g", ":first-child")).attr("class", mermaidDiagramUtils.handleUndefinedAttr(e.cssClasses)).attr("style", mermaidDiagramUtils.handleUndefinedAttr(y));
      if ((x = r.node()) !== null && x !== undefined) {
        x.appendChild(n);
      }
      if ((b = r.node()) !== null && b !== undefined) {
        b.appendChild(h);
      }
    } else {
      let t = (r = o.insert("g", ":first-child")).insert("circle", ":first-child");
      let e = r.insert("circle");
      r.attr("class", "basic label-container").attr("style", a);
      t.attr("class", "outer-circle").attr("style", a).attr("r", d).attr("cx", 0).attr("cy", 0);
      e.attr("class", "inner-circle").attr("style", a).attr("r", g).attr("cx", 0).attr("cy", 0);
    }
    f(e, r);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("DoubleCircle intersect", e, d, t);
      return I.circle(e, d, t);
    };
    return o;
  }
  function tn(t, e, r) {
    let {
      config: {
        themeVariables: a
      }
    } = r;
    let {
      labelStyles: o,
      nodeStyles: n
    } = mermaidStyleUtils.stylesToString(e);
    e.label = "";
    e.labelStyle = o;
    let s = t.insert("g").attr("class", m(e)).attr("id", e.domId ?? e.id);
    let {
      cssStyles: h
    } = e;
    let d = roughDrawingCore.roughLibrary.svg(s);
    let {
      nodeBorder: p
    } = a;
    let g = mermaidStyleUtils.userNodeOverrides(e, {
      fillStyle: "solid"
    });
    if (e.look !== "handDrawn") {
      g.roughness = 0;
    }
    let y = d.circle(0, 0, 14, g);
    let x = s.insert(() => y, ":first-child");
    x.selectAll("path").attr("style", `fill: ${p} !important;`);
    if (h && h.length > 0 && e.look !== "handDrawn") {
      x.selectAll("path").attr("style", h);
    }
    if (n && e.look !== "handDrawn") {
      x.selectAll("path").attr("style", n);
    }
    f(e, x);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("filledCircle intersect", e, {
        radius: 7,
        point: t
      });
      return I.circle(e, 7, t);
    };
    return s;
  }
  async function ts(t, e) {
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = n;
    let {
      shapeSvg: h,
      bbox: d,
      label: g
    } = await p(t, e, m(e));
    let x = d.width + (e.padding ?? 0);
    let b = x + d.height;
    let C = x + d.height;
    let v = [{
      x: 0,
      y: -b
    }, {
      x: C,
      y: -b
    }, {
      x: C / 2,
      y: 0
    }];
    let {
      cssStyles: k
    } = e;
    let w = roughDrawingCore.roughLibrary.svg(h);
    let S = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      S.roughness = 0;
      S.fillStyle = "solid";
    }
    let T = y(v);
    let B = w.path(T, S);
    let M = h.insert(() => B, ":first-child").attr("transform", `translate(${-b / 2}, ${b / 2})`);
    if (k && e.look !== "handDrawn") {
      M.selectChildren("path").attr("style", k);
    }
    if (s && e.look !== "handDrawn") {
      M.selectChildren("path").attr("style", s);
    }
    e.width = x;
    e.height = b;
    f(e, M);
    g.attr("transform", `translate(${-d.width / 2 - (d.x - (d.left ?? 0))}, ${-b / 2 + (e.padding ?? 0) / 2 + (d.y - (d.top ?? 0))})`);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("Triangle intersect", e, v, t);
      return I.polygon(e, v, t);
    };
    return h;
  }
  function th(t, e, r) {
    let {
      dir: c,
      config: {
        state: d,
        themeVariables: p
      }
    } = r;
    let {
      nodeStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.label = "";
    let y = t.insert("g").attr("class", m(e)).attr("id", e.domId ?? e.id);
    let {
      cssStyles: x
    } = e;
    let b = Math.max(70, (e == null ? undefined : e.width) ?? 0);
    let C = Math.max(10, (e == null ? undefined : e.height) ?? 0);
    if (c === "LR") {
      b = Math.max(10, (e == null ? undefined : e.width) ?? 0);
      C = Math.max(70, (e == null ? undefined : e.height) ?? 0);
    }
    let v = b * -1 / 2;
    let k = C * -1 / 2;
    let w = roughDrawingCore.roughLibrary.svg(y);
    let S = mermaidStyleUtils.userNodeOverrides(e, {
      stroke: p.lineColor,
      fill: p.lineColor
    });
    if (e.look !== "handDrawn") {
      S.roughness = 0;
      S.fillStyle = "solid";
    }
    let T = w.rectangle(v, k, b, C, S);
    let B = y.insert(() => T, ":first-child");
    if (x && e.look !== "handDrawn") {
      B.selectAll("path").attr("style", x);
    }
    if (g && e.look !== "handDrawn") {
      B.selectAll("path").attr("style", g);
    }
    f(e, B);
    let M = (d == null ? undefined : d.padding) ?? 0;
    if (e.width && e.height) {
      e.width += M / 2 || 0;
      e.height += M / 2 || 0;
    }
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return y;
  }
  async function tc(t, e) {
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = n;
    let {
      shapeSvg: h,
      bbox: d
    } = await p(t, e, m(e));
    let g = Math.max(80, d.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let x = Math.max(50, d.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let C = x / 2;
    let {
      cssStyles: v
    } = e;
    let k = roughDrawingCore.roughLibrary.svg(h);
    let w = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      w.roughness = 0;
      w.fillStyle = "solid";
    }
    let S = [{
      x: -g / 2,
      y: -x / 2
    }, {
      x: g / 2 - C,
      y: -x / 2
    }, ...b(-g / 2 + C, 0, C, 50, 90, 270), {
      x: g / 2 - C,
      y: x / 2
    }, {
      x: -g / 2,
      y: x / 2
    }];
    let T = y(S);
    let B = k.path(T, w);
    let M = h.insert(() => B, ":first-child");
    M.attr("class", "basic label-container");
    if (v && e.look !== "handDrawn") {
      M.selectChildren("path").attr("style", v);
    }
    if (s && e.look !== "handDrawn") {
      M.selectChildren("path").attr("style", s);
    }
    f(e, M);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("Pill intersect", e, {
        radius: C,
        point: t
      });
      return I.polygon(e, S, t);
    };
    return h;
  }
  async function td(t, e) {
    let {
      labelStyles: a,
      nodeStyles: o
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = a;
    let {
      shapeSvg: n,
      bbox: s
    } = await p(t, e, m(e));
    let h = s.height + (e.padding ?? 0);
    let c = s.width + (e.padding ?? 0) * 2.5;
    let {
      cssStyles: d
    } = e;
    let g = roughDrawingCore.roughLibrary.svg(n);
    let x = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      x.roughness = 0;
      x.fillStyle = "solid";
    }
    let b = c / 2;
    let C = b / 6;
    let v = h / 2;
    let k = (b += C) - v / 2;
    let w = [{
      x: -k,
      y: -v
    }, {
      x: 0,
      y: -v
    }, {
      x: k,
      y: -v
    }, {
      x: b,
      y: 0
    }, {
      x: k,
      y: v
    }, {
      x: 0,
      y: v
    }, {
      x: -k,
      y: v
    }, {
      x: -b,
      y: 0
    }];
    let S = y(w);
    let T = g.path(S, x);
    let B = n.insert(() => T, ":first-child");
    B.attr("class", "basic label-container");
    if (d && e.look !== "handDrawn") {
      B.selectChildren("path").attr("style", d);
    }
    if (o && e.look !== "handDrawn") {
      B.selectChildren("path").attr("style", o);
    }
    e.width = c;
    e.height = h;
    f(e, B);
    e.intersect = function (t) {
      return I.polygon(e, w, t);
    };
    return n;
  }
  async function tu(t, e) {
    let {
      labelStyles: a,
      nodeStyles: o
    } = mermaidStyleUtils.stylesToString(e);
    e.label = "";
    e.labelStyle = a;
    let {
      shapeSvg: n
    } = await p(t, e, m(e));
    let s = Math.max(30, (e == null ? undefined : e.width) ?? 0);
    let h = Math.max(30, (e == null ? undefined : e.height) ?? 0);
    let {
      cssStyles: d
    } = e;
    let g = roughDrawingCore.roughLibrary.svg(n);
    let x = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      x.roughness = 0;
      x.fillStyle = "solid";
    }
    let b = [{
      x: 0,
      y: 0
    }, {
      x: s,
      y: 0
    }, {
      x: 0,
      y: h
    }, {
      x: s,
      y: h
    }];
    let C = y(b);
    let v = g.path(C, x);
    let k = n.insert(() => v, ":first-child");
    k.attr("class", "basic label-container");
    if (d && e.look !== "handDrawn") {
      k.selectChildren("path").attr("style", d);
    }
    if (o && e.look !== "handDrawn") {
      k.selectChildren("path").attr("style", o);
    }
    k.attr("transform", `translate(${-s / 2}, ${-h / 2})`);
    f(e, k);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("Pill intersect", e, {
        points: b
      });
      return I.polygon(e, b, t);
    };
    return n;
  }
  async function tp(t, e, r) {
    let {
      config: {
        themeVariables: h,
        flowchart: d
      }
    } = r;
    let {
      labelStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = g;
    let m = Math.max(e.assetHeight ?? 48, e.assetWidth ?? 48);
    let y = d == null ? undefined : d.wrappingWidth;
    e.width = Math.max(m, y ?? 0);
    let {
      shapeSvg: x,
      bbox: b,
      label: C
    } = await p(t, e, "icon-shape default");
    let v = e.pos === "t";
    let {
      nodeBorder: k
    } = h;
    let {
      stylesMap: w
    } = mermaidStyleUtils.compileStyles(e);
    let S = -m / 2;
    let T = -m / 2;
    let B = !!e.label * 8;
    let M = roughDrawingCore.roughLibrary.svg(x);
    let W = mermaidStyleUtils.userNodeOverrides(e, {
      stroke: "none",
      fill: "none"
    });
    if (e.look !== "handDrawn") {
      W.roughness = 0;
      W.fillStyle = "solid";
    }
    let L = M.rectangle(S, T, m, m, W);
    let F = Math.max(m, b.width);
    let _ = m + b.height + B;
    let A = M.rectangle(-F / 2, -_ / 2, F, _, {
      ...W,
      fill: "transparent",
      stroke: "none"
    });
    let $ = x.insert(() => L, ":first-child");
    let E = x.insert(() => A);
    if (e.icon) {
      let t = x.append("g");
      t.html(`<g>${await iconUtilsTextRendering.getIconSVG(e.icon, {
        height: m,
        width: m,
        fallbackPrefix: ""
      })}</g>`);
      let r = t.node().getBBox();
      let i = r.width;
      let a = r.height;
      let l = r.x;
      let s = r.y;
      t.attr("transform", `translate(${-i / 2 - l},${v ? b.height / 2 + B / 2 - a / 2 - s : -b.height / 2 - B / 2 - a / 2 - s})`);
      t.attr("style", `color: ${w.get("stroke") ?? k};`);
    }
    C.attr("transform", `translate(${-b.width / 2 - (b.x - (b.left ?? 0))},${v ? -_ / 2 : _ / 2 - b.height})`);
    $.attr("transform", `translate(0,${v ? b.height / 2 + B / 2 : -b.height / 2 - B / 2})`);
    f(e, E);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("iconSquare intersect", e, t);
      if (!e.label) {
        return I.rect(e, t);
      }
      let o = e.x ?? 0;
      let l = e.y ?? 0;
      let n = e.height ?? 0;
      let s = [];
      s = v ? [{
        x: o - b.width / 2,
        y: l - n / 2
      }, {
        x: o + b.width / 2,
        y: l - n / 2
      }, {
        x: o + b.width / 2,
        y: l - n / 2 + b.height + B
      }, {
        x: o + m / 2,
        y: l - n / 2 + b.height + B
      }, {
        x: o + m / 2,
        y: l + n / 2
      }, {
        x: o - m / 2,
        y: l + n / 2
      }, {
        x: o - m / 2,
        y: l - n / 2 + b.height + B
      }, {
        x: o - b.width / 2,
        y: l - n / 2 + b.height + B
      }] : [{
        x: o - m / 2,
        y: l - n / 2
      }, {
        x: o + m / 2,
        y: l - n / 2
      }, {
        x: o + m / 2,
        y: l - n / 2 + m
      }, {
        x: o + b.width / 2,
        y: l - n / 2 + m
      }, {
        x: o + b.width / 2 / 2,
        y: l + n / 2
      }, {
        x: o - b.width / 2,
        y: l + n / 2
      }, {
        x: o - b.width / 2,
        y: l - n / 2 + m
      }, {
        x: o - m / 2,
        y: l - n / 2 + m
      }];
      return I.polygon(e, s, t);
    };
    return x;
  }
  async function tg(t, e, r) {
    let {
      config: {
        themeVariables: h,
        flowchart: d
      }
    } = r;
    let {
      labelStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = g;
    let m = Math.max(e.assetHeight ?? 48, e.assetWidth ?? 48);
    let y = d == null ? undefined : d.wrappingWidth;
    e.width = Math.max(m, y ?? 0);
    let {
      shapeSvg: x,
      bbox: b,
      label: C
    } = await p(t, e, "icon-shape default");
    let v = !!e.label * 8;
    let k = e.pos === "t";
    let {
      nodeBorder: w,
      mainBkg: S
    } = h;
    let {
      stylesMap: T
    } = mermaidStyleUtils.compileStyles(e);
    let B = roughDrawingCore.roughLibrary.svg(x);
    let M = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      M.roughness = 0;
      M.fillStyle = "solid";
    }
    let W = T.get("fill");
    M.stroke = W ?? S;
    let L = x.append("g");
    if (e.icon) {
      L.html(`<g>${await iconUtilsTextRendering.getIconSVG(e.icon, {
        height: m,
        width: m,
        fallbackPrefix: ""
      })}</g>`);
    }
    let F = L.node().getBBox();
    let _ = F.width;
    let A = F.height;
    let $ = F.x;
    let E = F.y;
    let Z = Math.max(_, A) * Math.SQRT2 + 40;
    let O = B.circle(0, 0, Z, M);
    let D = Math.max(Z, b.width);
    let q = Z + b.height + v;
    let R = B.rectangle(-D / 2, -q / 2, D, q, {
      ...M,
      fill: "transparent",
      stroke: "none"
    });
    let N = x.insert(() => O, ":first-child");
    let P = x.insert(() => R);
    L.attr("transform", `translate(${-_ / 2 - $},${k ? b.height / 2 + v / 2 - A / 2 - E : -b.height / 2 - v / 2 - A / 2 - E})`);
    L.attr("style", `color: ${T.get("stroke") ?? w};`);
    C.attr("transform", `translate(${-b.width / 2 - (b.x - (b.left ?? 0))},${k ? -q / 2 : q / 2 - b.height})`);
    N.attr("transform", `translate(0,${k ? b.height / 2 + v / 2 : -b.height / 2 - v / 2})`);
    f(e, P);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("iconSquare intersect", e, t);
      return I.rect(e, t);
    };
    return x;
  }
  async function tf(t, e, r) {
    let {
      config: {
        themeVariables: h,
        flowchart: d
      }
    } = r;
    let {
      labelStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = g;
    let m = Math.max(e.assetHeight ?? 48, e.assetWidth ?? 48);
    let y = d == null ? undefined : d.wrappingWidth;
    e.width = Math.max(m, y ?? 0);
    let {
      shapeSvg: x,
      bbox: b,
      halfPadding: C,
      label: v
    } = await p(t, e, "icon-shape default");
    let k = e.pos === "t";
    let w = m + C * 2;
    let T = m + C * 2;
    let {
      nodeBorder: B,
      mainBkg: M
    } = h;
    let {
      stylesMap: W
    } = mermaidStyleUtils.compileStyles(e);
    let L = !!e.label * 8;
    let F = roughDrawingCore.roughLibrary.svg(x);
    let _ = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      _.roughness = 0;
      _.fillStyle = "solid";
    }
    let A = W.get("fill");
    _.stroke = A ?? M;
    let $ = F.path(S(-T / 2, -w / 2, T, w, 5), _);
    let E = Math.max(T, b.width);
    let Z = w + b.height + L;
    let O = F.rectangle(-E / 2, -Z / 2, E, Z, {
      ..._,
      fill: "transparent",
      stroke: "none"
    });
    let D = x.insert(() => $, ":first-child").attr("class", "icon-shape2");
    let q = x.insert(() => O);
    if (e.icon) {
      let t = x.append("g");
      t.html(`<g>${await iconUtilsTextRendering.getIconSVG(e.icon, {
        height: m,
        width: m,
        fallbackPrefix: ""
      })}</g>`);
      let r = t.node().getBBox();
      let i = r.width;
      let a = r.height;
      let l = r.x;
      let s = r.y;
      t.attr("transform", `translate(${-i / 2 - l},${k ? b.height / 2 + L / 2 - a / 2 - s : -b.height / 2 - L / 2 - a / 2 - s})`);
      t.attr("style", `color: ${W.get("stroke") ?? B};`);
    }
    v.attr("transform", `translate(${-b.width / 2 - (b.x - (b.left ?? 0))},${k ? -Z / 2 : Z / 2 - b.height})`);
    D.attr("transform", `translate(0,${k ? b.height / 2 + L / 2 : -b.height / 2 - L / 2})`);
    f(e, q);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("iconSquare intersect", e, t);
      if (!e.label) {
        return I.rect(e, t);
      }
      let o = e.x ?? 0;
      let l = e.y ?? 0;
      let n = e.height ?? 0;
      let s = [];
      s = k ? [{
        x: o - b.width / 2,
        y: l - n / 2
      }, {
        x: o + b.width / 2,
        y: l - n / 2
      }, {
        x: o + b.width / 2,
        y: l - n / 2 + b.height + L
      }, {
        x: o + T / 2,
        y: l - n / 2 + b.height + L
      }, {
        x: o + T / 2,
        y: l + n / 2
      }, {
        x: o - T / 2,
        y: l + n / 2
      }, {
        x: o - T / 2,
        y: l - n / 2 + b.height + L
      }, {
        x: o - b.width / 2,
        y: l - n / 2 + b.height + L
      }] : [{
        x: o - T / 2,
        y: l - n / 2
      }, {
        x: o + T / 2,
        y: l - n / 2
      }, {
        x: o + T / 2,
        y: l - n / 2 + w
      }, {
        x: o + b.width / 2,
        y: l - n / 2 + w
      }, {
        x: o + b.width / 2 / 2,
        y: l + n / 2
      }, {
        x: o - b.width / 2,
        y: l + n / 2
      }, {
        x: o - b.width / 2,
        y: l - n / 2 + w
      }, {
        x: o - T / 2,
        y: l - n / 2 + w
      }];
      return I.polygon(e, s, t);
    };
    return x;
  }
  async function tm(t, e, r) {
    let {
      config: {
        themeVariables: h,
        flowchart: d
      }
    } = r;
    let {
      labelStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = g;
    let m = Math.max(e.assetHeight ?? 48, e.assetWidth ?? 48);
    let y = d == null ? undefined : d.wrappingWidth;
    e.width = Math.max(m, y ?? 0);
    let {
      shapeSvg: x,
      bbox: b,
      halfPadding: C,
      label: v
    } = await p(t, e, "icon-shape default");
    let k = e.pos === "t";
    let w = m + C * 2;
    let T = m + C * 2;
    let {
      nodeBorder: B,
      mainBkg: M
    } = h;
    let {
      stylesMap: W
    } = mermaidStyleUtils.compileStyles(e);
    let L = !!e.label * 8;
    let F = roughDrawingCore.roughLibrary.svg(x);
    let _ = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      _.roughness = 0;
      _.fillStyle = "solid";
    }
    let A = W.get("fill");
    _.stroke = A ?? M;
    let $ = F.path(S(-T / 2, -w / 2, T, w, 0.1), _);
    let E = Math.max(T, b.width);
    let Z = w + b.height + L;
    let O = F.rectangle(-E / 2, -Z / 2, E, Z, {
      ..._,
      fill: "transparent",
      stroke: "none"
    });
    let D = x.insert(() => $, ":first-child");
    let q = x.insert(() => O);
    if (e.icon) {
      let t = x.append("g");
      t.html(`<g>${await iconUtilsTextRendering.getIconSVG(e.icon, {
        height: m,
        width: m,
        fallbackPrefix: ""
      })}</g>`);
      let r = t.node().getBBox();
      let i = r.width;
      let a = r.height;
      let l = r.x;
      let s = r.y;
      t.attr("transform", `translate(${-i / 2 - l},${k ? b.height / 2 + L / 2 - a / 2 - s : -b.height / 2 - L / 2 - a / 2 - s})`);
      t.attr("style", `color: ${W.get("stroke") ?? B};`);
    }
    v.attr("transform", `translate(${-b.width / 2 - (b.x - (b.left ?? 0))},${k ? -Z / 2 : Z / 2 - b.height})`);
    D.attr("transform", `translate(0,${k ? b.height / 2 + L / 2 : -b.height / 2 - L / 2})`);
    f(e, q);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("iconSquare intersect", e, t);
      if (!e.label) {
        return I.rect(e, t);
      }
      let o = e.x ?? 0;
      let l = e.y ?? 0;
      let n = e.height ?? 0;
      let s = [];
      s = k ? [{
        x: o - b.width / 2,
        y: l - n / 2
      }, {
        x: o + b.width / 2,
        y: l - n / 2
      }, {
        x: o + b.width / 2,
        y: l - n / 2 + b.height + L
      }, {
        x: o + T / 2,
        y: l - n / 2 + b.height + L
      }, {
        x: o + T / 2,
        y: l + n / 2
      }, {
        x: o - T / 2,
        y: l + n / 2
      }, {
        x: o - T / 2,
        y: l - n / 2 + b.height + L
      }, {
        x: o - b.width / 2,
        y: l - n / 2 + b.height + L
      }] : [{
        x: o - T / 2,
        y: l - n / 2
      }, {
        x: o + T / 2,
        y: l - n / 2
      }, {
        x: o + T / 2,
        y: l - n / 2 + w
      }, {
        x: o + b.width / 2,
        y: l - n / 2 + w
      }, {
        x: o + b.width / 2 / 2,
        y: l + n / 2
      }, {
        x: o - b.width / 2,
        y: l + n / 2
      }, {
        x: o - b.width / 2,
        y: l - n / 2 + w
      }, {
        x: o - T / 2,
        y: l - n / 2 + w
      }];
      return I.polygon(e, s, t);
    };
    return x;
  }
  async function ty(t, e, r) {
    let {
      config: {
        flowchart: h
      }
    } = r;
    let d = new Image();
    d.src = xssContentSanitizer.sanitizeUrl((e == null ? undefined : e.img) ?? "", null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*t5-%R*aWJ-TjB$Mnh3$FZFd2FFO$hW$$-xWWxkd2$sbFlTbT$r$0%wOQ"
    });
    await d.decode();
    let g = Number(d.naturalWidth.toString().replace("px", ""));
    let m = Number(d.naturalHeight.toString().replace("px", ""));
    e.imageAspectRatio = g / m;
    let {
      labelStyles: y
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = y;
    let x = h == null ? undefined : h.wrappingWidth;
    e.defaultWidth = h == null ? undefined : h.wrappingWidth;
    let b = Math.max(e.label && x != null ? x : 0, (e == null ? undefined : e.assetWidth) ?? g);
    let C = e.constraint === "on" && (e == null ? undefined : e.assetHeight) ? e.assetHeight * e.imageAspectRatio : b;
    let v = e.constraint === "on" ? C / e.imageAspectRatio : (e == null ? undefined : e.assetHeight) ?? m;
    e.width = Math.max(C, x ?? 0);
    let {
      shapeSvg: k,
      bbox: w,
      label: S
    } = await p(t, e, "image-shape default");
    let T = e.pos === "t";
    let B = -C / 2;
    let M = !!e.label * 8;
    let W = roughDrawingCore.roughLibrary.svg(k);
    let L = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      L.roughness = 0;
      L.fillStyle = "solid";
    }
    let F = W.rectangle(B, -v / 2, C, v, L);
    let _ = Math.max(C, w.width);
    let A = v + w.height + M;
    let $ = W.rectangle(-_ / 2, -A / 2, _, A, {
      ...L,
      fill: "none",
      stroke: "none"
    });
    let E = k.insert(() => F, ":first-child");
    let Z = k.insert(() => $);
    if (e.img) {
      let t = k.append("image");
      t.attr("href", e.img);
      t.attr("width", C);
      t.attr("height", v);
      t.attr("preserveAspectRatio", "none");
      t.attr("transform", `translate(${-C / 2},${T ? A / 2 - v : -A / 2})`);
    }
    S.attr("transform", `translate(${-w.width / 2 - (w.x - (w.left ?? 0))},${T ? -v / 2 - w.height / 2 - M / 2 : v / 2 - w.height / 2 + M / 2})`);
    E.attr("transform", `translate(0,${T ? w.height / 2 + M / 2 : -w.height / 2 - M / 2})`);
    f(e, Z);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("iconSquare intersect", e, t);
      if (!e.label) {
        return I.rect(e, t);
      }
      let o = e.x ?? 0;
      let l = e.y ?? 0;
      let n = e.height ?? 0;
      let s = [];
      s = T ? [{
        x: o - w.width / 2,
        y: l - n / 2
      }, {
        x: o + w.width / 2,
        y: l - n / 2
      }, {
        x: o + w.width / 2,
        y: l - n / 2 + w.height + M
      }, {
        x: o + C / 2,
        y: l - n / 2 + w.height + M
      }, {
        x: o + C / 2,
        y: l + n / 2
      }, {
        x: o - C / 2,
        y: l + n / 2
      }, {
        x: o - C / 2,
        y: l - n / 2 + w.height + M
      }, {
        x: o - w.width / 2,
        y: l - n / 2 + w.height + M
      }] : [{
        x: o - C / 2,
        y: l - n / 2
      }, {
        x: o + C / 2,
        y: l - n / 2
      }, {
        x: o + C / 2,
        y: l - n / 2 + v
      }, {
        x: o + w.width / 2,
        y: l - n / 2 + v
      }, {
        x: o + w.width / 2 / 2,
        y: l + n / 2
      }, {
        x: o - w.width / 2,
        y: l + n / 2
      }, {
        x: o - w.width / 2,
        y: l - n / 2 + v
      }, {
        x: o - C / 2,
        y: l - n / 2 + v
      }];
      return I.polygon(e, s, t);
    };
    return k;
  }
  async function tx(t, e) {
    let n;
    let {
      labelStyles: s,
      nodeStyles: h
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = s;
    let {
      shapeSvg: c,
      bbox: d
    } = await p(t, e, m(e));
    let g = Math.max(d.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let x = Math.max(d.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let b = [{
      x: 0,
      y: 0
    }, {
      x: g,
      y: 0
    }, {
      x: g + x * 3 / 6,
      y: -x
    }, {
      x: x * -3 / 6,
      y: -x
    }];
    let {
      cssStyles: C
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(c);
      let r = mermaidStyleUtils.userNodeOverrides(e, {});
      let i = y(b);
      let a = t.path(i, r);
      n = c.insert(() => a, ":first-child").attr("transform", `translate(${-g / 2}, ${x / 2})`);
      if (C) {
        n.attr("style", C);
      }
    } else {
      n = P(c, g, x, b);
    }
    if (h) {
      n.attr("style", h);
    }
    e.width = g;
    e.height = x;
    f(e, n);
    e.intersect = function (t) {
      return I.polygon(e, b, t);
    };
    return c;
  }
  async function tb(t, e, r) {
    let i;
    let {
      labelStyles: a,
      nodeStyles: o
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = a;
    let {
      shapeSvg: n,
      bbox: h
    } = await p(t, e, m(e));
    let c = Math.max(h.width + r.labelPaddingX * 2, (e == null ? undefined : e.width) || 0);
    let d = Math.max(h.height + r.labelPaddingY * 2, (e == null ? undefined : e.height) || 0);
    let g = -c / 2;
    let y = -d / 2;
    let {
      rx: x,
      ry: b
    } = e;
    let {
      cssStyles: C
    } = e;
    if ((r == null ? undefined : r.rx) && r.ry) {
      x = r.rx;
      b = r.ry;
    }
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(n);
      let r = mermaidStyleUtils.userNodeOverrides(e, {});
      let a = x || b ? t.path(S(g, y, c, d, x || 0), r) : t.rectangle(g, y, c, d, r);
      (i = n.insert(() => a, ":first-child")).attr("class", "basic label-container").attr("style", mermaidDiagramUtils.handleUndefinedAttr(C));
    } else {
      (i = n.insert("rect", ":first-child")).attr("class", "basic label-container").attr("style", o).attr("rx", mermaidDiagramUtils.handleUndefinedAttr(x)).attr("ry", mermaidDiagramUtils.handleUndefinedAttr(b)).attr("x", g).attr("y", y).attr("width", c).attr("height", d);
    }
    f(e, i);
    e.calcIntersect = function (t, e) {
      return I.rect(t, e);
    };
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return n;
  }
  async function tC(t, e) {
    let {
      shapeSvg: a,
      bbox: o,
      label: l
    } = await p(t, e, "label");
    let n = a.insert("rect", ":first-child");
    n.attr("width", 0.1).attr("height", 0.1);
    a.attr("class", "label edgeLabel");
    l.attr("transform", `translate(${-(o.width / 2) - (o.x - (o.left ?? 0))}, ${-(o.height / 2) - (o.y - (o.top ?? 0))})`);
    f(e, n);
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return a;
  }
  async function tv(t, e) {
    let n;
    let {
      labelStyles: s,
      nodeStyles: h
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = s;
    let {
      shapeSvg: c,
      bbox: d
    } = await p(t, e, m(e));
    let g = Math.max(d.width + (e.padding ?? 0), (e == null ? undefined : e.width) ?? 0);
    let x = Math.max(d.height + (e.padding ?? 0), (e == null ? undefined : e.height) ?? 0);
    let b = [{
      x: 0,
      y: 0
    }, {
      x: g + x * 3 / 6,
      y: 0
    }, {
      x: g,
      y: -x
    }, {
      x: -(x * 3) / 6,
      y: -x
    }];
    let {
      cssStyles: C
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(c);
      let r = mermaidStyleUtils.userNodeOverrides(e, {});
      let i = y(b);
      let a = t.path(i, r);
      n = c.insert(() => a, ":first-child").attr("transform", `translate(${-g / 2}, ${x / 2})`);
      if (C) {
        n.attr("style", C);
      }
    } else {
      n = P(c, g, x, b);
    }
    if (h) {
      n.attr("style", h);
    }
    e.width = g;
    e.height = x;
    f(e, n);
    e.intersect = function (t) {
      return I.polygon(e, b, t);
    };
    return c;
  }
  async function tk(t, e) {
    let n;
    let {
      labelStyles: s,
      nodeStyles: h
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = s;
    let {
      shapeSvg: c,
      bbox: d
    } = await p(t, e, m(e));
    let g = Math.max(d.width + (e.padding ?? 0), (e == null ? undefined : e.width) ?? 0);
    let x = Math.max(d.height + (e.padding ?? 0), (e == null ? undefined : e.height) ?? 0);
    let b = [{
      x: x * -3 / 6,
      y: 0
    }, {
      x: g,
      y: 0
    }, {
      x: g + x * 3 / 6,
      y: -x
    }, {
      x: 0,
      y: -x
    }];
    let {
      cssStyles: C
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(c);
      let r = mermaidStyleUtils.userNodeOverrides(e, {});
      let i = y(b);
      let a = t.path(i, r);
      n = c.insert(() => a, ":first-child").attr("transform", `translate(${-g / 2}, ${x / 2})`);
      if (C) {
        n.attr("style", C);
      }
    } else {
      n = P(c, g, x, b);
    }
    if (h) {
      n.attr("style", h);
    }
    e.width = g;
    e.height = x;
    f(e, n);
    e.intersect = function (t) {
      return I.polygon(e, b, t);
    };
    return c;
  }
  function tw(t, e) {
    let {
      labelStyles: o,
      nodeStyles: n
    } = mermaidStyleUtils.stylesToString(e);
    e.label = "";
    e.labelStyle = o;
    let s = t.insert("g").attr("class", m(e)).attr("id", e.domId ?? e.id);
    let {
      cssStyles: h
    } = e;
    let d = Math.max(35, (e == null ? undefined : e.width) ?? 0);
    let p = Math.max(35, (e == null ? undefined : e.height) ?? 0);
    let g = [{
      x: d,
      y: 0
    }, {
      x: 0,
      y: p + 3.5
    }, {
      x: d - 14,
      y: p + 3.5
    }, {
      x: 0,
      y: p * 2
    }, {
      x: d,
      y: p - 3.5
    }, {
      x: 14,
      y: p - 3.5
    }];
    let x = roughDrawingCore.roughLibrary.svg(s);
    let b = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      b.roughness = 0;
      b.fillStyle = "solid";
    }
    let C = y(g);
    let v = x.path(C, b);
    let k = s.insert(() => v, ":first-child");
    if (h && e.look !== "handDrawn") {
      k.selectAll("path").attr("style", h);
    }
    if (n && e.look !== "handDrawn") {
      k.selectAll("path").attr("style", n);
    }
    k.attr("transform", `translate(-${d / 2},${-p})`);
    f(e, k);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("lightningBolt intersect", e, t);
      return I.polygon(e, g, t);
    };
    return s;
  }
  loggerLevelUtils.setFunctionName(ta, "cylinder");
  loggerLevelUtils.setFunctionName(to, "dividedRectangle");
  loggerLevelUtils.setFunctionName(tl, "doublecircle");
  loggerLevelUtils.setFunctionName(tn, "filledCircle");
  loggerLevelUtils.setFunctionName(ts, "flippedTriangle");
  loggerLevelUtils.setFunctionName(th, "forkJoin");
  loggerLevelUtils.setFunctionName(tc, "halfRoundedRectangle");
  loggerLevelUtils.setFunctionName(td, "hexagon");
  loggerLevelUtils.setFunctionName(tu, "hourglass");
  loggerLevelUtils.setFunctionName(tp, "icon");
  loggerLevelUtils.setFunctionName(tg, "iconCircle");
  loggerLevelUtils.setFunctionName(tf, "iconRounded");
  loggerLevelUtils.setFunctionName(tm, "iconSquare");
  loggerLevelUtils.setFunctionName(ty, "imageSquare");
  loggerLevelUtils.setFunctionName(tx, "inv_trapezoid");
  loggerLevelUtils.setFunctionName(tb, "drawRect");
  loggerLevelUtils.setFunctionName(tC, "labelRect");
  loggerLevelUtils.setFunctionName(tv, "lean_left");
  loggerLevelUtils.setFunctionName(tk, "lean_right");
  loggerLevelUtils.setFunctionName(tw, "lightningBolt");
  var tS = loggerLevelUtils.setFunctionName((t, e, r, i, a, o, l) => `M${t},${e + o} a${a},${o} 0,0,0 ${r},0 a${a},${o} 0,0,0 ${-r},0 l0,${i} a${a},${o} 0,0,0 ${r},0 l0,${-i} M${t},${e + o + l} a${a},${o} 0,0,0 ${r},0`, "createCylinderPathD");
  var tT = loggerLevelUtils.setFunctionName((t, e, r, i, a, o, l) => `M${t},${e + o} M${t + r},${e + o} a${a},${o} 0,0,0 ${-r},0 l0,${i} a${a},${o} 0,0,0 ${r},0 l0,${-i} M${t},${e + o + l} a${a},${o} 0,0,0 ${r},0`, "createOuterCylinderPathD");
  var tB = loggerLevelUtils.setFunctionName((t, e, r, i, a, o) => `M${t - r / 2},${-i / 2} a${a},${o} 0,0,0 ${r},0`, "createInnerCylinderPathD");
  async function tM(t, e) {
    let c;
    let {
      labelStyles: d,
      nodeStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = d;
    let {
      shapeSvg: y,
      bbox: x,
      label: b
    } = await p(t, e, m(e));
    let C = Math.max(x.width + (e.padding ?? 0), e.width ?? 0);
    let v = C / 2;
    let k = v / (2.5 + C / 50);
    let w = Math.max(x.height + k + (e.padding ?? 0), e.height ?? 0);
    let S = w * 0.1;
    let {
      cssStyles: T
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(y);
      let r = tT(0, 0, C, w, v, k, S);
      let i = tB(0, k, C, w, v, k);
      let a = mermaidStyleUtils.userNodeOverrides(e, {});
      let o = t.path(r, a);
      let n = t.path(i, a);
      y.insert(() => n, ":first-child").attr("class", "line");
      (c = y.insert(() => o, ":first-child")).attr("class", "basic label-container");
      if (T) {
        c.attr("style", T);
      }
    } else {
      let t = tS(0, 0, C, w, v, k, S);
      c = y.insert("path", ":first-child").attr("d", t).attr("class", "basic label-container").attr("style", mermaidDiagramUtils.handleUndefinedAttr(T)).attr("style", g);
    }
    c.attr("label-offset-y", k);
    c.attr("transform", `translate(${-C / 2}, ${-(w / 2 + k)})`);
    f(e, c);
    b.attr("transform", `translate(${-(x.width / 2) - (x.x - (x.left ?? 0))}, ${-(x.height / 2) + k - (x.y - (x.top ?? 0))})`);
    e.intersect = function (t) {
      let s = I.rect(e, t);
      let h = s.x - (e.x ?? 0);
      if (v != 0 && (Math.abs(h) < (e.width ?? 0) / 2 || Math.abs(h) == (e.width ?? 0) / 2 && Math.abs(s.y - (e.y ?? 0)) > (e.height ?? 0) / 2 - k)) {
        let r = k * k * (1 - h * h / (v * v));
        if (r > 0) {
          r = Math.sqrt(r);
        }
        r = k - r;
        if (t.y - (e.y ?? 0) > 0) {
          r = -r;
        }
        s.y += r;
      }
      return s;
    };
    return y;
  }
  async function tW(t, e) {
    let {
      labelStyles: d,
      nodeStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = d;
    let {
      shapeSvg: y,
      bbox: b,
      label: C
    } = await p(t, e, m(e));
    let v = Math.max(b.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let k = Math.max(b.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let w = k / 4;
    let S = k + w;
    let {
      cssStyles: T
    } = e;
    let B = roughDrawingCore.roughLibrary.svg(y);
    let M = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      M.roughness = 0;
      M.fillStyle = "solid";
    }
    let W = [{
      x: -v / 2 - v / 2 * 0.1,
      y: -S / 2
    }, {
      x: -v / 2 - v / 2 * 0.1,
      y: S / 2
    }, ...x(-v / 2 - v / 2 * 0.1, S / 2, v / 2 + v / 2 * 0.1, S / 2, w, 0.8), {
      x: v / 2 + v / 2 * 0.1,
      y: -S / 2
    }, {
      x: -v / 2 - v / 2 * 0.1,
      y: -S / 2
    }, {
      x: -v / 2,
      y: -S / 2
    }, {
      x: -v / 2,
      y: S / 2 * 1.1
    }, {
      x: -v / 2,
      y: -S / 2
    }];
    let L = B.polygon(W.map(t => [t.x, t.y]), M);
    let F = y.insert(() => L, ":first-child");
    F.attr("class", "basic label-container");
    if (T && e.look !== "handDrawn") {
      F.selectAll("path").attr("style", T);
    }
    if (g && e.look !== "handDrawn") {
      F.selectAll("path").attr("style", g);
    }
    F.attr("transform", `translate(0,${-w / 2})`);
    C.attr("transform", `translate(${-v / 2 + (e.padding ?? 0) + v / 2 * 0.1 / 2 - (b.x - (b.left ?? 0))},${-k / 2 + (e.padding ?? 0) - w / 2 - (b.y - (b.top ?? 0))})`);
    f(e, F);
    e.intersect = function (t) {
      return I.polygon(e, W, t);
    };
    return y;
  }
  async function tL(t, e) {
    let {
      labelStyles: h,
      nodeStyles: c
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = h;
    let {
      shapeSvg: d,
      bbox: g,
      label: x
    } = await p(t, e, m(e));
    let b = Math.max(g.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let C = Math.max(g.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let v = -b / 2;
    let k = -C / 2;
    let {
      cssStyles: w
    } = e;
    let S = roughDrawingCore.roughLibrary.svg(d);
    let T = mermaidStyleUtils.userNodeOverrides(e, {});
    let B = [{
      x: v - 5,
      y: k + 5
    }, {
      x: v - 5,
      y: k + C + 5
    }, {
      x: v + b - 5,
      y: k + C + 5
    }, {
      x: v + b - 5,
      y: k + C
    }, {
      x: v + b,
      y: k + C
    }, {
      x: v + b,
      y: k + C - 5
    }, {
      x: v + b + 5,
      y: k + C - 5
    }, {
      x: v + b + 5,
      y: k - 5
    }, {
      x: v + 5,
      y: k - 5
    }, {
      x: v + 5,
      y: k
    }, {
      x: v,
      y: k
    }, {
      x: v,
      y: k + 5
    }];
    if (e.look !== "handDrawn") {
      T.roughness = 0;
      T.fillStyle = "solid";
    }
    let M = y(B);
    let W = S.path(M, T);
    let L = y([{
      x: v,
      y: k + 5
    }, {
      x: v + b - 5,
      y: k + 5
    }, {
      x: v + b - 5,
      y: k + C
    }, {
      x: v + b,
      y: k + C
    }, {
      x: v + b,
      y: k
    }, {
      x: v,
      y: k
    }]);
    let F = S.path(L, {
      ...T,
      fill: "none"
    });
    let _ = d.insert(() => F, ":first-child");
    _.insert(() => W, ":first-child");
    _.attr("class", "basic label-container");
    if (w && e.look !== "handDrawn") {
      _.selectAll("path").attr("style", w);
    }
    if (c && e.look !== "handDrawn") {
      _.selectAll("path").attr("style", c);
    }
    x.attr("transform", `translate(${-(g.width / 2) - 5 - (g.x - (g.left ?? 0))}, ${-(g.height / 2) + 5 - (g.y - (g.top ?? 0))})`);
    f(e, _);
    e.intersect = function (t) {
      return I.polygon(e, B, t);
    };
    return d;
  }
  async function tF(t, e) {
    let {
      labelStyles: h,
      nodeStyles: c
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = h;
    let {
      shapeSvg: d,
      bbox: g,
      label: b
    } = await p(t, e, m(e));
    let C = Math.max(g.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let v = Math.max(g.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let k = v / 4;
    let w = v + k;
    let S = -C / 2;
    let T = -w / 2;
    let {
      cssStyles: B
    } = e;
    let M = x(S - 5, T + w + 5, S + C - 5, T + w + 5, k, 0.8);
    let W = M == null ? undefined : M[M.length - 1];
    let L = [{
      x: S - 5,
      y: T + 5
    }, {
      x: S - 5,
      y: T + w + 5
    }, ...M, {
      x: S + C - 5,
      y: W.y - 5
    }, {
      x: S + C,
      y: W.y - 5
    }, {
      x: S + C,
      y: W.y - 10
    }, {
      x: S + C + 5,
      y: W.y - 10
    }, {
      x: S + C + 5,
      y: T - 5
    }, {
      x: S + 5,
      y: T - 5
    }, {
      x: S + 5,
      y: T
    }, {
      x: S,
      y: T
    }, {
      x: S,
      y: T + 5
    }];
    let F = [{
      x: S,
      y: T + 5
    }, {
      x: S + C - 5,
      y: T + 5
    }, {
      x: S + C - 5,
      y: W.y - 5
    }, {
      x: S + C,
      y: W.y - 5
    }, {
      x: S + C,
      y: T
    }, {
      x: S,
      y: T
    }];
    let _ = roughDrawingCore.roughLibrary.svg(d);
    let A = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      A.roughness = 0;
      A.fillStyle = "solid";
    }
    let $ = y(L);
    let E = _.path($, A);
    let Z = y(F);
    let O = _.path(Z, A);
    let D = d.insert(() => E, ":first-child");
    D.insert(() => O);
    D.attr("class", "basic label-container");
    if (B && e.look !== "handDrawn") {
      D.selectAll("path").attr("style", B);
    }
    if (c && e.look !== "handDrawn") {
      D.selectAll("path").attr("style", c);
    }
    D.attr("transform", `translate(0,${-k / 2})`);
    b.attr("transform", `translate(${-(g.width / 2) - 5 - (g.x - (g.left ?? 0))}, ${-(g.height / 2) + 5 - k / 2 - (g.y - (g.top ?? 0))})`);
    f(e, D);
    e.intersect = function (t) {
      return I.polygon(e, L, t);
    };
    return d;
  }
  async function t_(t, e, r) {
    let {
      config: {
        themeVariables: g
      }
    } = r;
    let {
      labelStyles: y,
      nodeStyles: x
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = y;
    if (!e.useHtmlLabels && mermaidConfigUtils_1.getConfig().flowchart?.htmlLabels === false) {
      e.centerLabel = true;
    }
    let {
      shapeSvg: b,
      bbox: C,
      label: v
    } = await p(t, e, m(e));
    let k = Math.max(C.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let w = Math.max(C.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let {
      cssStyles: S
    } = e;
    let T = roughDrawingCore.roughLibrary.svg(b);
    let B = mermaidStyleUtils.userNodeOverrides(e, {
      fill: g.noteBkgColor,
      stroke: g.noteBorderColor
    });
    if (e.look !== "handDrawn") {
      B.roughness = 0;
      B.fillStyle = "solid";
    }
    let M = T.rectangle(-k / 2, -w / 2, k, w, B);
    let W = b.insert(() => M, ":first-child");
    W.attr("class", "basic label-container");
    if (S && e.look !== "handDrawn") {
      W.selectAll("path").attr("style", S);
    }
    if (x && e.look !== "handDrawn") {
      W.selectAll("path").attr("style", x);
    }
    v.attr("transform", `translate(${-C.width / 2 - (C.x - (C.left ?? 0))}, ${-(C.height / 2) - (C.y - (C.top ?? 0))})`);
    f(e, W);
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return b;
  }
  loggerLevelUtils.setFunctionName(tM, "linedCylinder");
  loggerLevelUtils.setFunctionName(tW, "linedWaveEdgedRect");
  loggerLevelUtils.setFunctionName(tL, "multiRect");
  loggerLevelUtils.setFunctionName(tF, "multiWaveEdgedRectangle");
  loggerLevelUtils.setFunctionName(t_, "note");
  var tA = loggerLevelUtils.setFunctionName((t, e, r) => `M${t + r / 2},${e} L${t + r},${e - r / 2} L${t + r / 2},${e - r} L${t},${e - r / 2} Z`, "createDecisionBoxPathD");
  async function t$(t, e) {
    let r;
    let {
      labelStyles: i,
      nodeStyles: a
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = i;
    let {
      shapeSvg: o,
      bbox: n
    } = await p(t, e, m(e));
    let s = n.width + e.padding + (n.height + e.padding);
    let h = [{
      x: s / 2,
      y: 0
    }, {
      x: s,
      y: -s / 2
    }, {
      x: s / 2,
      y: -s
    }, {
      x: 0,
      y: -s / 2
    }];
    let {
      cssStyles: c
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(o);
      let i = mermaidStyleUtils.userNodeOverrides(e, {});
      let a = tA(0, 0, s);
      let n = t.path(a, i);
      r = o.insert(() => n, ":first-child").attr("transform", `translate(${-s / 2 + 0.5}, ${s / 2})`);
      if (c) {
        r.attr("style", c);
      }
    } else {
      (r = P(o, s, s, h)).attr("transform", `translate(${-s / 2 + 0.5}, ${s / 2})`);
    }
    if (a) {
      r.attr("style", a);
    }
    f(e, r);
    e.calcIntersect = function (t, e) {
      let r = t.width;
      let i = I.polygon(t, [{
        x: r / 2,
        y: 0
      }, {
        x: r,
        y: -r / 2
      }, {
        x: r / 2,
        y: -r
      }, {
        x: 0,
        y: -r / 2
      }], e);
      return {
        x: i.x - 0.5,
        y: i.y - 0.5
      };
    };
    e.intersect = function (t) {
      return this.calcIntersect(e, t);
    };
    return o;
  }
  async function tE(t, e) {
    let {
      labelStyles: h,
      nodeStyles: c
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = h;
    let {
      shapeSvg: d,
      bbox: g,
      label: x
    } = await p(t, e, m(e));
    let b = Math.max(g.width + (e.padding ?? 0), (e == null ? undefined : e.width) ?? 0);
    let C = Math.max(g.height + (e.padding ?? 0), (e == null ? undefined : e.height) ?? 0);
    let v = -b / 2;
    let k = -C / 2;
    let w = k / 2;
    let S = [{
      x: v + w,
      y: k
    }, {
      x: v,
      y: 0
    }, {
      x: v + w,
      y: -k
    }, {
      x: -v,
      y: -k
    }, {
      x: -v,
      y: k
    }];
    let {
      cssStyles: T
    } = e;
    let B = roughDrawingCore.roughLibrary.svg(d);
    let M = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      M.roughness = 0;
      M.fillStyle = "solid";
    }
    let W = y(S);
    let L = B.path(W, M);
    let F = d.insert(() => L, ":first-child");
    F.attr("class", "basic label-container");
    if (T && e.look !== "handDrawn") {
      F.selectAll("path").attr("style", T);
    }
    if (c && e.look !== "handDrawn") {
      F.selectAll("path").attr("style", c);
    }
    F.attr("transform", `translate(${-w / 2},0)`);
    x.attr("transform", `translate(${-w / 2 - g.width / 2 - (g.x - (g.left ?? 0))}, ${-(g.height / 2) - (g.y - (g.top ?? 0))})`);
    f(e, F);
    e.intersect = function (t) {
      return I.polygon(e, S, t);
    };
    return d;
  }
  async function tZ(t, e) {
    var i;
    let a;
    let o;
    let n;
    let {
      labelStyles: s,
      nodeStyles: p
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = s;
    a = e.cssClasses ? "node " + e.cssClasses : "node default";
    let g = t.insert("g").attr("class", a).attr("id", e.domId || e.id);
    let m = g.insert("g");
    let y = g.insert("g").attr("class", "label").attr("style", p);
    let x = e.description;
    let b = e.label;
    let C = y.node().appendChild(await w(b, e.labelStyle, true, true));
    let v = {
      width: 0,
      height: 0
    };
    if (mermaidConfigUtils_1.evaluate((i = mermaidConfigUtils_1.getConfigAlias()) === null || i === undefined ? undefined : i.flowchart?.htmlLabels)) {
      let t = C.children[0];
      let e = axisAndZoomUtilities.select(C);
      v = t.getBoundingClientRect();
      e.attr("width", v.width);
      e.attr("height", v.height);
    }
    loggerLevelUtils.logger.info("Text 2", x);
    let k = x || [];
    let T = C.getBBox();
    let B = y.node().appendChild(await w(k.join ? k.join("<br/>") : k, e.labelStyle, true, true));
    let M = B.children[0];
    let W = axisAndZoomUtilities.select(B);
    v = M.getBoundingClientRect();
    W.attr("width", v.width);
    W.attr("height", v.height);
    let L = (e.padding || 0) / 2;
    axisAndZoomUtilities.select(B).attr("transform", "translate( " + (v.width > T.width ? 0 : (T.width - v.width) / 2) + ", " + (T.height + L + 5) + ")");
    axisAndZoomUtilities.select(C).attr("transform", "translate( " + (v.width < T.width ? 0 : -(T.width - v.width) / 2) + ", 0)");
    v = y.node().getBBox();
    y.attr("transform", "translate(" + -v.width / 2 + ", " + (-v.height / 2 - L + 3) + ")");
    let F = v.width + (e.padding || 0);
    let _ = v.height + (e.padding || 0);
    let A = -v.width / 2 - L;
    let $ = -v.height / 2 - L;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(g);
      let r = mermaidStyleUtils.userNodeOverrides(e, {});
      let i = t.path(S(A, $, F, _, e.rx || 0), r);
      let a = t.line(-v.width / 2 - L, -v.height / 2 - L + T.height + L, v.width / 2 + L, -v.height / 2 - L + T.height + L, r);
      n = g.insert(() => {
        loggerLevelUtils.logger.debug("Rough node insert CXC", i);
        return a;
      }, ":first-child");
      o = g.insert(() => {
        loggerLevelUtils.logger.debug("Rough node insert CXC", i);
        return i;
      }, ":first-child");
    } else {
      o = m.insert("rect", ":first-child");
      n = m.insert("line");
      o.attr("class", "outer title-state").attr("style", p).attr("x", -v.width / 2 - L).attr("y", -v.height / 2 - L).attr("width", v.width + (e.padding || 0)).attr("height", v.height + (e.padding || 0));
      n.attr("class", "divider").attr("x1", -v.width / 2 - L).attr("x2", v.width / 2 + L).attr("y1", -v.height / 2 - L + T.height + L).attr("y2", -v.height / 2 - L + T.height + L);
    }
    f(e, o);
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return g;
  }
  function tO(t, e, r, i, a, o, l) {
    let n = Math.atan2(i - e, r - t);
    let s = Math.sqrt(((r - t) / 2 / a) ** 2 + ((i - e) / 2 / o) ** 2);
    if (s > 1) {
      throw Error("The given radii are too small to create an arc between the points.");
    }
    let h = Math.sqrt(1 - s ** 2);
    let c = (t + r) / 2 + h * o * Math.sin(n) * (l ? -1 : 1);
    let d = (e + i) / 2 - h * a * Math.cos(n) * (l ? -1 : 1);
    let u = Math.atan2((e - d) / o, (t - c) / a);
    let p = Math.atan2((i - d) / o, (r - c) / a) - u;
    if (l && p < 0) {
      p += Math.PI * 2;
    }
    if (!l && p > 0) {
      p -= Math.PI * 2;
    }
    let g = [];
    for (let t = 0; t < 20; t++) {
      let e = u + t / 19 * p;
      let r = c + a * Math.cos(e);
      let i = d + o * Math.sin(e);
      g.push({
        x: r,
        y: i
      });
    }
    return g;
  }
  async function tD(t, e) {
    let {
      labelStyles: a,
      nodeStyles: o
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = a;
    let {
      shapeSvg: n,
      bbox: s
    } = await p(t, e, m(e));
    let h = (e == null ? undefined : e.padding) ?? 0;
    let c = (e == null ? undefined : e.padding) ?? 0;
    let d = ((e == null ? undefined : e.width) ? e == null ? undefined : e.width : s.width) + h * 2;
    let g = ((e == null ? undefined : e.height) ? e == null ? undefined : e.height : s.height) + c * 2;
    let x = e.radius || 5;
    let b = e.taper || 5;
    let {
      cssStyles: C
    } = e;
    let v = roughDrawingCore.roughLibrary.svg(n);
    let k = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.stroke) {
      k.stroke = e.stroke;
    }
    if (e.look !== "handDrawn") {
      k.roughness = 0;
      k.fillStyle = "solid";
    }
    let w = [{
      x: -d / 2 + b,
      y: -g / 2
    }, {
      x: d / 2 - b,
      y: -g / 2
    }, ...tO(d / 2 - b, -g / 2, d / 2, -g / 2 + b, x, x, true), {
      x: d / 2,
      y: -g / 2 + b
    }, {
      x: d / 2,
      y: g / 2 - b
    }, ...tO(d / 2, g / 2 - b, d / 2 - b, g / 2, x, x, true), {
      x: d / 2 - b,
      y: g / 2
    }, {
      x: -d / 2 + b,
      y: g / 2
    }, ...tO(-d / 2 + b, g / 2, -d / 2, g / 2 - b, x, x, true), {
      x: -d / 2,
      y: g / 2 - b
    }, {
      x: -d / 2,
      y: -g / 2 + b
    }, ...tO(-d / 2, -g / 2 + b, -d / 2 + b, -g / 2, x, x, true)];
    let S = y(w);
    let T = v.path(S, k);
    let B = n.insert(() => T, ":first-child");
    B.attr("class", "basic label-container outer-path");
    if (C && e.look !== "handDrawn") {
      B.selectChildren("path").attr("style", C);
    }
    if (o && e.look !== "handDrawn") {
      B.selectChildren("path").attr("style", o);
    }
    f(e, B);
    e.intersect = function (t) {
      return I.polygon(e, w, t);
    };
    return n;
  }
  async function tI(t, e) {
    let {
      labelStyles: y,
      nodeStyles: x
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = y;
    let {
      shapeSvg: b,
      bbox: C,
      label: v
    } = await p(t, e, m(e));
    let k = (e == null ? undefined : e.padding) ?? 0;
    let w = Math.max(C.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let S = Math.max(C.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let T = -C.width / 2 - k;
    let B = -C.height / 2 - k;
    let {
      cssStyles: M
    } = e;
    let W = roughDrawingCore.roughLibrary.svg(b);
    let L = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      L.roughness = 0;
      L.fillStyle = "solid";
    }
    let F = W.polygon([{
      x: T,
      y: B
    }, {
      x: T + w + 8,
      y: B
    }, {
      x: T + w + 8,
      y: B + S
    }, {
      x: T - 8,
      y: B + S
    }, {
      x: T - 8,
      y: B
    }, {
      x: T,
      y: B
    }, {
      x: T,
      y: B + S
    }].map(t => [t.x, t.y]), L);
    let _ = b.insert(() => F, ":first-child");
    _.attr("class", "basic label-container").attr("style", mermaidDiagramUtils.handleUndefinedAttr(M));
    if (x && e.look !== "handDrawn") {
      _.selectAll("path").attr("style", x);
    }
    if (M && e.look !== "handDrawn") {
      _.selectAll("path").attr("style", x);
    }
    v.attr("transform", `translate(${-w / 2 + 4 + (e.padding ?? 0) - (C.x - (C.left ?? 0))},${-S / 2 + (e.padding ?? 0) - (C.y - (C.top ?? 0))})`);
    f(e, _);
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return b;
  }
  async function tq(t, e) {
    let {
      labelStyles: d,
      nodeStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = d;
    let {
      shapeSvg: x,
      bbox: b,
      label: C
    } = await p(t, e, m(e));
    let v = Math.max(b.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let k = Math.max(b.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let w = -v / 2;
    let S = -k / 2;
    let {
      cssStyles: T
    } = e;
    let B = roughDrawingCore.roughLibrary.svg(x);
    let M = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      M.roughness = 0;
      M.fillStyle = "solid";
    }
    let W = [{
      x: w,
      y: S
    }, {
      x: w,
      y: S + k
    }, {
      x: w + v,
      y: S + k
    }, {
      x: w + v,
      y: S - k / 2
    }];
    let L = y(W);
    let F = B.path(L, M);
    let _ = x.insert(() => F, ":first-child");
    _.attr("class", "basic label-container");
    if (T && e.look !== "handDrawn") {
      _.selectChildren("path").attr("style", T);
    }
    if (g && e.look !== "handDrawn") {
      _.selectChildren("path").attr("style", g);
    }
    _.attr("transform", `translate(0, ${k / 4})`);
    C.attr("transform", `translate(${-v / 2 + (e.padding ?? 0) - (b.x - (b.left ?? 0))}, ${-k / 4 + (e.padding ?? 0) - (b.y - (b.top ?? 0))})`);
    f(e, _);
    e.intersect = function (t) {
      return I.polygon(e, W, t);
    };
    return x;
  }
  async function tR(t, e) {
    let i = {
      rx: 0,
      ry: 0,
      classes: "",
      labelPaddingX: e.labelPaddingX ?? ((e == null ? undefined : e.padding) || 0) * 2,
      labelPaddingY: +((e == null ? undefined : e.padding) || 0)
    };
    return tb(t, e, i);
  }
  async function tN(t, e) {
    let {
      labelStyles: r,
      nodeStyles: i
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = r;
    let {
      shapeSvg: a,
      bbox: o
    } = await p(t, e, m(e));
    let n = o.height + e.padding;
    let s = o.width + n / 4 + e.padding;
    let h = n / 2;
    let {
      cssStyles: c
    } = e;
    let d = roughDrawingCore.roughLibrary.svg(a);
    let g = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      g.roughness = 0;
      g.fillStyle = "solid";
    }
    let x = [{
      x: -s / 2 + h,
      y: -n / 2
    }, {
      x: s / 2 - h,
      y: -n / 2
    }, ...b(-s / 2 + h, 0, h, 50, 90, 270), {
      x: s / 2 - h,
      y: n / 2
    }, ...b(s / 2 - h, 0, h, 50, 270, 450)];
    let C = y(x);
    let v = d.path(C, g);
    let k = a.insert(() => v, ":first-child");
    k.attr("class", "basic label-container outer-path");
    if (c && e.look !== "handDrawn") {
      k.selectChildren("path").attr("style", c);
    }
    if (i && e.look !== "handDrawn") {
      k.selectChildren("path").attr("style", i);
    }
    f(e, k);
    e.intersect = function (t) {
      return I.polygon(e, x, t);
    };
    return a;
  }
  async function tP(t, e) {
    return tb(t, e, {
      rx: 5,
      ry: 5,
      classes: "flowchart-node"
    });
  }
  function tz(t, e, r) {
    let {
      config: {
        themeVariables: i
      }
    } = r;
    let {
      labelStyles: a,
      nodeStyles: o
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = a;
    let {
      cssStyles: n
    } = e;
    let {
      lineColor: s,
      stateBorder: h,
      nodeBorder: c
    } = i;
    let d = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id);
    let p = roughDrawingCore.roughLibrary.svg(d);
    let g = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      g.roughness = 0;
      g.fillStyle = "solid";
    }
    let m = p.circle(0, 0, 14, {
      ...g,
      stroke: s,
      strokeWidth: 2
    });
    let y = h ?? c;
    let x = p.circle(0, 0, 5, {
      ...g,
      fill: y,
      stroke: y,
      strokeWidth: 2,
      fillStyle: "solid"
    });
    let b = d.insert(() => m, ":first-child");
    b.insert(() => x);
    if (n) {
      b.selectAll("path").attr("style", n);
    }
    if (o) {
      b.selectAll("path").attr("style", o);
    }
    f(e, b);
    e.intersect = function (t) {
      return I.circle(e, 7, t);
    };
    return d;
  }
  function tj(t, e, r) {
    let i;
    let {
      config: {
        themeVariables: a
      }
    } = r;
    let {
      lineColor: o
    } = a;
    let n = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id);
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(n).circle(0, 0, 14, mermaidStyleUtils.solidStateFill(o));
      (i = n.insert(() => t)).attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    } else {
      (i = n.insert("circle", ":first-child")).attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    }
    f(e, i);
    e.intersect = function (t) {
      return I.circle(e, 7, t);
    };
    return n;
  }
  async function tH(t, e) {
    let {
      labelStyles: r,
      nodeStyles: i
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = r;
    let {
      shapeSvg: a,
      bbox: o
    } = await p(t, e, m(e));
    let n = ((e == null ? undefined : e.padding) || 0) / 2;
    let h = o.width + e.padding;
    let c = o.height + e.padding;
    let d = -o.width / 2 - n;
    let g = -o.height / 2 - n;
    let y = [{
      x: 0,
      y: 0
    }, {
      x: h,
      y: 0
    }, {
      x: h,
      y: -c
    }, {
      x: 0,
      y: -c
    }, {
      x: 0,
      y: 0
    }, {
      x: -8,
      y: 0
    }, {
      x: h + 8,
      y: 0
    }, {
      x: h + 8,
      y: -c
    }, {
      x: -8,
      y: -c
    }, {
      x: -8,
      y: 0
    }];
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(a);
      let r = mermaidStyleUtils.userNodeOverrides(e, {});
      let i = t.rectangle(d - 8, g, h + 16, c, r);
      let o = t.line(d, g, d, g + c, r);
      let n = t.line(d + h, g, d + h, g + c, r);
      a.insert(() => o, ":first-child");
      a.insert(() => n, ":first-child");
      let p = a.insert(() => i, ":first-child");
      let {
        cssStyles: m
      } = e;
      p.attr("class", "basic label-container").attr("style", mermaidDiagramUtils.handleUndefinedAttr(m));
      f(e, p);
    } else {
      let t = P(a, h, c, y);
      if (i) {
        t.attr("style", i);
      }
      f(e, t);
    }
    e.intersect = function (t) {
      return I.polygon(e, y, t);
    };
    return a;
  }
  async function tU(t, e) {
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = n;
    let {
      shapeSvg: h,
      bbox: c
    } = await p(t, e, m(e));
    let d = Math.max(c.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let g = Math.max(c.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let x = -d / 2;
    let b = -g / 2;
    let C = g * 0.2;
    let {
      cssStyles: v
    } = e;
    let k = roughDrawingCore.roughLibrary.svg(h);
    let w = mermaidStyleUtils.userNodeOverrides(e, {});
    let S = [{
      x: x - C / 2,
      y: b
    }, {
      x: x + d + C / 2,
      y: b
    }, {
      x: x + d + C / 2,
      y: b + g
    }, {
      x: x - C / 2,
      y: b + g
    }];
    if (e.look !== "handDrawn") {
      w.roughness = 0;
      w.fillStyle = "solid";
    }
    let T = y(S);
    let B = k.path(T, w);
    let M = y([{
      x: x + d - C / 2,
      y: b + g
    }, {
      x: x + d + C / 2,
      y: b + g
    }, {
      x: x + d + C / 2,
      y: b + g - g * 0.2
    }]);
    let W = k.path(M, {
      ...w,
      fillStyle: "solid"
    });
    let L = h.insert(() => W, ":first-child");
    L.insert(() => B, ":first-child");
    L.attr("class", "basic label-container");
    if (v && e.look !== "handDrawn") {
      L.selectAll("path").attr("style", v);
    }
    if (s && e.look !== "handDrawn") {
      L.selectAll("path").attr("style", s);
    }
    f(e, L);
    e.intersect = function (t) {
      return I.polygon(e, S, t);
    };
    return h;
  }
  async function tY(t, e) {
    let {
      labelStyles: d,
      nodeStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = d;
    let {
      shapeSvg: b,
      bbox: C,
      label: v
    } = await p(t, e, m(e));
    let k = Math.max(C.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let w = Math.max(C.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let S = w / 4;
    let T = k * 0.2;
    let B = w * 0.2;
    let M = w + S;
    let {
      cssStyles: W
    } = e;
    let L = roughDrawingCore.roughLibrary.svg(b);
    let F = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      F.roughness = 0;
      F.fillStyle = "solid";
    }
    let _ = [{
      x: -k / 2 - k / 2 * 0.1,
      y: M / 2
    }, ...x(-k / 2 - k / 2 * 0.1, M / 2, k / 2 + k / 2 * 0.1, M / 2, S, 0.8), {
      x: k / 2 + k / 2 * 0.1,
      y: -M / 2
    }, {
      x: -k / 2 - k / 2 * 0.1,
      y: -M / 2
    }];
    let A = -k / 2 + k / 2 * 0.1;
    let $ = -M / 2 - B * 0.4;
    let E = [{
      x: A + k - T,
      y: ($ + w) * 1.4
    }, {
      x: A + k,
      y: $ + w - B
    }, {
      x: A + k,
      y: ($ + w) * 0.9
    }, ...x(A + k, ($ + w) * 1.3, A + k - T, ($ + w) * 1.5, -(w * 0.03), 0.5)];
    let Z = y(_);
    let O = L.path(Z, F);
    let D = y(E);
    let q = L.path(D, {
      ...F,
      fillStyle: "solid"
    });
    let R = b.insert(() => q, ":first-child");
    R.insert(() => O, ":first-child");
    R.attr("class", "basic label-container");
    if (W && e.look !== "handDrawn") {
      R.selectAll("path").attr("style", W);
    }
    if (g && e.look !== "handDrawn") {
      R.selectAll("path").attr("style", g);
    }
    R.attr("transform", `translate(0,${-S / 2})`);
    v.attr("transform", `translate(${-k / 2 + (e.padding ?? 0) - (C.x - (C.left ?? 0))},${-w / 2 + (e.padding ?? 0) - S / 2 - (C.y - (C.top ?? 0))})`);
    f(e, R);
    e.intersect = function (t) {
      return I.polygon(e, _, t);
    };
    return b;
  }
  async function tG(t, e) {
    let {
      labelStyles: r,
      nodeStyles: i
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = r;
    let {
      shapeSvg: a,
      bbox: o
    } = await p(t, e, m(e));
    let n = Math.max(o.width + e.padding, (e == null ? undefined : e.width) || 0);
    let s = Math.max(o.height + e.padding, (e == null ? undefined : e.height) || 0);
    let h = a.insert("rect", ":first-child");
    h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", -n / 2).attr("y", -s / 2).attr("width", n).attr("height", s);
    f(e, h);
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return a;
  }
  loggerLevelUtils.setFunctionName(t$, "question");
  loggerLevelUtils.setFunctionName(tE, "rect_left_inv_arrow");
  loggerLevelUtils.setFunctionName(tZ, "rectWithTitle");
  loggerLevelUtils.setFunctionName(tO, "generateArcPoints");
  loggerLevelUtils.setFunctionName(tD, "roundedRect");
  loggerLevelUtils.setFunctionName(tI, "shadedProcess");
  loggerLevelUtils.setFunctionName(tq, "slopedRect");
  loggerLevelUtils.setFunctionName(tR, "squareRect");
  loggerLevelUtils.setFunctionName(tN, "stadium");
  loggerLevelUtils.setFunctionName(tP, "state");
  loggerLevelUtils.setFunctionName(tz, "stateEnd");
  loggerLevelUtils.setFunctionName(tj, "stateStart");
  loggerLevelUtils.setFunctionName(tH, "subroutine");
  loggerLevelUtils.setFunctionName(tU, "taggedRect");
  loggerLevelUtils.setFunctionName(tY, "taggedWaveEdgedRectangle");
  loggerLevelUtils.setFunctionName(tG, "text");
  var tV = loggerLevelUtils.setFunctionName((t, e, r, i, a, o) => `M${t},${e}
    a${a},${o} 0,0,1 0,${-i}
    l${r},0
    a${a},${o} 0,0,1 0,${i}
    M${r},${-i}
    a${a},${o} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD");
  var tX = loggerLevelUtils.setFunctionName((t, e, r, i, a, o) => `M${t},${e} M${t + r},${e} a${a},${o} 0,0,0 0,${-i} l${-r},0 a${a},${o} 0,0,0 0,${i} l${r},0`, "createOuterCylinderPathD");
  var tQ = loggerLevelUtils.setFunctionName((t, e, r, i, a, o) => `M${t + r / 2},${-i / 2} a${a},${o} 0,0,0 0,${i}`, "createInnerCylinderPathD");
  async function tJ(t, e) {
    let a;
    let {
      labelStyles: o,
      nodeStyles: n
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = o;
    let {
      shapeSvg: h,
      bbox: c,
      label: d,
      halfPadding: g
    } = await p(t, e, m(e));
    let y = e.look === "neo" ? g * 2 : g;
    let x = c.height + y;
    let b = x / 2;
    let C = b / (2.5 + x / 50);
    let v = c.width + C + y;
    let {
      cssStyles: k
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(h);
      let r = tX(0, 0, v, x, C, b);
      let i = tQ(0, 0, v, x, C, b);
      let o = t.path(r, mermaidStyleUtils.userNodeOverrides(e, {}));
      let n = t.path(i, mermaidStyleUtils.userNodeOverrides(e, {
        fill: "none"
      }));
      a = h.insert(() => n, ":first-child");
      (a = h.insert(() => o, ":first-child")).attr("class", "basic label-container");
      if (k) {
        a.attr("style", k);
      }
    } else {
      let t = tV(0, 0, v, x, C, b);
      (a = h.insert("path", ":first-child").attr("d", t).attr("class", "basic label-container").attr("style", mermaidDiagramUtils.handleUndefinedAttr(k)).attr("style", n)).attr("class", "basic label-container");
      if (k) {
        a.selectAll("path").attr("style", k);
      }
      if (n) {
        a.selectAll("path").attr("style", n);
      }
    }
    a.attr("label-offset-x", C);
    a.attr("transform", `translate(${-v / 2}, ${x / 2} )`);
    d.attr("transform", `translate(${-(c.width / 2) - C - (c.x - (c.left ?? 0))}, ${-(c.height / 2) - (c.y - (c.top ?? 0))})`);
    f(e, a);
    e.intersect = function (t) {
      let s = I.rect(e, t);
      let h = s.y - (e.y ?? 0);
      if (b != 0 && (Math.abs(h) < (e.height ?? 0) / 2 || Math.abs(h) == (e.height ?? 0) / 2 && Math.abs(s.x - (e.x ?? 0)) > (e.width ?? 0) / 2 - C)) {
        let r = C * C * (1 - h * h / (b * b));
        if (r != 0) {
          r = Math.sqrt(Math.abs(r));
        }
        r = C - r;
        if (t.x - (e.x ?? 0) > 0) {
          r = -r;
        }
        s.x += r;
      }
      return s;
    };
    return h;
  }
  async function tK(t, e) {
    let r;
    let {
      labelStyles: i,
      nodeStyles: a
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = i;
    let {
      shapeSvg: o,
      bbox: n
    } = await p(t, e, m(e));
    let s = n.width + e.padding;
    let h = n.height + e.padding;
    let c = [{
      x: h * -3 / 6,
      y: 0
    }, {
      x: s + h * 3 / 6,
      y: 0
    }, {
      x: s,
      y: -h
    }, {
      x: 0,
      y: -h
    }];
    let {
      cssStyles: d
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(o);
      let i = mermaidStyleUtils.userNodeOverrides(e, {});
      let a = y(c);
      let n = t.path(a, i);
      r = o.insert(() => n, ":first-child").attr("transform", `translate(${-s / 2}, ${h / 2})`);
      if (d) {
        r.attr("style", d);
      }
    } else {
      r = P(o, s, h, c);
    }
    if (a) {
      r.attr("style", a);
    }
    e.width = s;
    e.height = h;
    f(e, r);
    e.intersect = function (t) {
      return I.polygon(e, c, t);
    };
    return o;
  }
  async function t0(t, e) {
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = n;
    let {
      shapeSvg: h,
      bbox: c
    } = await p(t, e, m(e));
    let d = Math.max(60, c.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let g = Math.max(20, c.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let {
      cssStyles: x
    } = e;
    let b = roughDrawingCore.roughLibrary.svg(h);
    let C = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      C.roughness = 0;
      C.fillStyle = "solid";
    }
    let v = [{
      x: -d / 2 * 0.8,
      y: -g / 2
    }, {
      x: d / 2 * 0.8,
      y: -g / 2
    }, {
      x: d / 2,
      y: -g / 2 * 0.6
    }, {
      x: d / 2,
      y: g / 2
    }, {
      x: -d / 2,
      y: g / 2
    }, {
      x: -d / 2,
      y: -g / 2 * 0.6
    }];
    let k = y(v);
    let w = b.path(k, C);
    let S = h.insert(() => w, ":first-child");
    S.attr("class", "basic label-container");
    if (x && e.look !== "handDrawn") {
      S.selectChildren("path").attr("style", x);
    }
    if (s && e.look !== "handDrawn") {
      S.selectChildren("path").attr("style", s);
    }
    f(e, S);
    e.intersect = function (t) {
      return I.polygon(e, v, t);
    };
    return h;
  }
  async function t1(t, e) {
    let {
      labelStyles: s,
      nodeStyles: d
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = s;
    let {
      shapeSvg: g,
      bbox: x,
      label: b
    } = await p(t, e, m(e));
    let C = mermaidConfigUtils_1.evaluate(mermaidConfigUtils_1.getConfigAlias().flowchart?.htmlLabels);
    let v = x.width + (e.padding ?? 0);
    let k = v + x.height;
    let w = v + x.height;
    let S = [{
      x: 0,
      y: 0
    }, {
      x: w,
      y: 0
    }, {
      x: w / 2,
      y: -k
    }];
    let {
      cssStyles: T
    } = e;
    let B = roughDrawingCore.roughLibrary.svg(g);
    let M = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      M.roughness = 0;
      M.fillStyle = "solid";
    }
    let W = y(S);
    let L = B.path(W, M);
    let F = g.insert(() => L, ":first-child").attr("transform", `translate(${-k / 2}, ${k / 2})`);
    if (T && e.look !== "handDrawn") {
      F.selectChildren("path").attr("style", T);
    }
    if (d && e.look !== "handDrawn") {
      F.selectChildren("path").attr("style", d);
    }
    e.width = v;
    e.height = k;
    f(e, F);
    b.attr("transform", `translate(${-x.width / 2 - (x.x - (x.left ?? 0))}, ${k / 2 - (x.height + (e.padding ?? 0) / (C ? 2 : 1) - (x.y - (x.top ?? 0)))})`);
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("Triangle intersect", e, S, t);
      return I.polygon(e, S, t);
    };
    return g;
  }
  async function t2(t, e) {
    let {
      labelStyles: d,
      nodeStyles: g
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = d;
    let {
      shapeSvg: b,
      bbox: C,
      label: v
    } = await p(t, e, m(e));
    let k = Math.max(C.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let w = Math.max(C.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let S = w / 8;
    let T = w + S;
    let {
      cssStyles: B
    } = e;
    let M = 70 - k;
    let W = M > 0 ? M / 2 : 0;
    let L = roughDrawingCore.roughLibrary.svg(b);
    let F = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      F.roughness = 0;
      F.fillStyle = "solid";
    }
    let _ = [{
      x: -k / 2 - W,
      y: T / 2
    }, ...x(-k / 2 - W, T / 2, k / 2 + W, T / 2, S, 0.8), {
      x: k / 2 + W,
      y: -T / 2
    }, {
      x: -k / 2 - W,
      y: -T / 2
    }];
    let A = y(_);
    let $ = L.path(A, F);
    let E = b.insert(() => $, ":first-child");
    E.attr("class", "basic label-container");
    if (B && e.look !== "handDrawn") {
      E.selectAll("path").attr("style", B);
    }
    if (g && e.look !== "handDrawn") {
      E.selectAll("path").attr("style", g);
    }
    E.attr("transform", `translate(0,${-S / 2})`);
    v.attr("transform", `translate(${-k / 2 + (e.padding ?? 0) - (C.x - (C.left ?? 0))},${-w / 2 + (e.padding ?? 0) - S - (C.y - (C.top ?? 0))})`);
    f(e, E);
    e.intersect = function (t) {
      return I.polygon(e, _, t);
    };
    return b;
  }
  async function t5(t, e) {
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = n;
    let {
      shapeSvg: h,
      bbox: c
    } = await p(t, e, m(e));
    let d = Math.max(c.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let g = Math.max(c.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let b = d / g;
    let C = d;
    let v = g;
    if (C > v * b) {
      v = C / b;
    } else {
      C = v * b;
    }
    C = Math.max(C, 100);
    let k = Math.min((v = Math.max(v, 50)) * 0.2, v / 4);
    let w = v + k * 2;
    let {
      cssStyles: S
    } = e;
    let T = roughDrawingCore.roughLibrary.svg(h);
    let B = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      B.roughness = 0;
      B.fillStyle = "solid";
    }
    let M = [{
      x: -C / 2,
      y: w / 2
    }, ...x(-C / 2, w / 2, C / 2, w / 2, k, 1), {
      x: C / 2,
      y: -w / 2
    }, ...x(C / 2, -w / 2, -C / 2, -w / 2, k, -1)];
    let W = y(M);
    let L = T.path(W, B);
    let F = h.insert(() => L, ":first-child");
    F.attr("class", "basic label-container");
    if (S && e.look !== "handDrawn") {
      F.selectAll("path").attr("style", S);
    }
    if (s && e.look !== "handDrawn") {
      F.selectAll("path").attr("style", s);
    }
    f(e, F);
    e.intersect = function (t) {
      return I.polygon(e, M, t);
    };
    return h;
  }
  async function t3(t, e) {
    let {
      labelStyles: h,
      nodeStyles: c
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = h;
    let {
      shapeSvg: d,
      bbox: g,
      label: y
    } = await p(t, e, m(e));
    let x = Math.max(g.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let b = Math.max(g.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let C = -x / 2;
    let v = -b / 2;
    let {
      cssStyles: k
    } = e;
    let w = roughDrawingCore.roughLibrary.svg(d);
    let S = mermaidStyleUtils.userNodeOverrides(e, {});
    let T = [{
      x: C - 5,
      y: v - 5
    }, {
      x: C - 5,
      y: v + b
    }, {
      x: C + x,
      y: v + b
    }, {
      x: C + x,
      y: v - 5
    }];
    let B = `M${C - 5},${v - 5} L${C + x},${v - 5} L${C + x},${v + b} L${C - 5},${v + b} L${C - 5},${v - 5}
                M${C - 5},${v} L${C + x},${v}
                M${C},${v - 5} L${C},${v + b}`;
    if (e.look !== "handDrawn") {
      S.roughness = 0;
      S.fillStyle = "solid";
    }
    let M = w.path(B, S);
    let W = d.insert(() => M, ":first-child");
    W.attr("transform", "translate(2.5, 2.5)");
    W.attr("class", "basic label-container");
    if (k && e.look !== "handDrawn") {
      W.selectAll("path").attr("style", k);
    }
    if (c && e.look !== "handDrawn") {
      W.selectAll("path").attr("style", c);
    }
    y.attr("transform", `translate(${-(g.width / 2) + 2.5 - (g.x - (g.left ?? 0))}, ${-(g.height / 2) + 2.5 - (g.y - (g.top ?? 0))})`);
    f(e, W);
    e.intersect = function (t) {
      return I.polygon(e, T, t);
    };
    return d;
  }
  async function t6(t, e) {
    var n;
    var p;
    if (e.alias) {
      e.label = e.alias;
    }
    if (e.look === "handDrawn") {
      let {
        themeVariables: r
      } = mermaidConfigUtils_1.getConfig();
      let {
        background: i
      } = r;
      let a = {
        ...e,
        id: e.id + "-background",
        look: "default",
        cssStyles: ["stroke: none", `fill: ${i}`]
      };
      await t6(t, a);
    }
    let g = mermaidConfigUtils_1.getConfig();
    e.useHtmlLabels = g.htmlLabels;
    let y = g.er?.diagramPadding ?? 10;
    let x = g.er?.entityPadding ?? 6;
    let {
      cssStyles: b
    } = e;
    let {
      labelStyles: C,
      nodeStyles: v
    } = mermaidStyleUtils.stylesToString(e);
    if (e.attributes.length === 0 && e.label) {
      let r = {
        rx: 0,
        ry: 0,
        labelPaddingX: y,
        labelPaddingY: y * 1.5,
        classes: ""
      };
      if (mermaidDiagramUtils.calcTextWidth(e.label, g) + r.labelPaddingX * 2 < g.er.minEntityWidth) {
        e.width = g.er.minEntityWidth;
      }
      let i = await tb(t, e, r);
      if (!mermaidConfigUtils_1.evaluate(g.htmlLabels)) {
        let t = i.select("text");
        let e = (n = t.node()) === null || n === undefined ? undefined : n.getBBox();
        t.attr("transform", `translate(${-e.width / 2}, 0)`);
      }
      return i;
    }
    if (!g.htmlLabels) {
      y *= 1.25;
      x *= 1.25;
    }
    let k = m(e);
    k ||= "node default";
    let w = t.insert("g").attr("class", k).attr("id", e.domId || e.id);
    let S = await t4(w, e.label ?? "", g, 0, 0, ["name"], C);
    S.height += x;
    let T = 0;
    let B = [];
    let M = [];
    let W = 0;
    let L = 0;
    let F = 0;
    let _ = 0;
    let A = true;
    let $ = true;
    for (let t of e.attributes) {
      let e = await t4(w, t.type, g, 0, T, ["attribute-type"], C);
      W = Math.max(W, e.width + y);
      let r = await t4(w, t.name, g, 0, T, ["attribute-name"], C);
      L = Math.max(L, r.width + y);
      let i = await t4(w, t.keys.join(), g, 0, T, ["attribute-keys"], C);
      F = Math.max(F, i.width + y);
      let a = await t4(w, t.comment, g, 0, T, ["attribute-comment"], C);
      _ = Math.max(_, a.width + y);
      let o = Math.max(e.height, r.height, i.height, a.height) + x;
      M.push({
        yOffset: T,
        rowHeight: o
      });
      T += o;
    }
    let E = 4;
    if (F <= y) {
      A = false;
      F = 0;
      E--;
    }
    if (_ <= y) {
      $ = false;
      _ = 0;
      E--;
    }
    let Z = w.node().getBBox();
    if (S.width + y * 2 - (W + L + F + _) > 0) {
      let t = S.width + y * 2 - (W + L + F + _);
      W += t / E;
      L += t / E;
      if (F > 0) {
        F += t / E;
      }
      if (_ > 0) {
        _ += t / E;
      }
    }
    let O = W + L + F + _;
    let D = roughDrawingCore.roughLibrary.svg(w);
    let q = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      q.roughness = 0;
      q.fillStyle = "solid";
    }
    let R = 0;
    if (M.length > 0) {
      R = M.reduce((t, e) => {
        return t + ((e == null ? undefined : e.rowHeight) ?? 0);
      }, 0);
    }
    let N = Math.max(Z.width + y * 2, (e == null ? undefined : e.width) || 0, O);
    let P = Math.max((R ?? 0) + S.height, (e == null ? undefined : e.height) || 0);
    let z = -N / 2;
    let j = -P / 2;
    w.selectAll("g:not(:first-child)").each((t, e, r) => {
      let i = axisAndZoomUtilities.select(r[e]);
      let a = i.attr("transform");
      let o = 0;
      let l = 0;
      if (a) {
        let t = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(a);
        if (t) {
          o = parseFloat(t[1]);
          l = parseFloat(t[2]);
          if (i.attr("class").includes("attribute-name")) {
            o += W;
          } else if (i.attr("class").includes("attribute-keys")) {
            o += W + L;
          } else if (i.attr("class").includes("attribute-comment")) {
            o += W + L + F;
          }
        }
      }
      i.attr("transform", `translate(${z + y / 2 + o}, ${l + j + S.height + x / 2})`);
    });
    w.select(".name").attr("transform", "translate(" + -S.width / 2 + ", " + (j + x / 2) + ")");
    let H = D.rectangle(z, j, N, P, q);
    let U = w.insert(() => H, ":first-child").attr("style", b.join(""));
    let {
      themeVariables: Y
    } = mermaidConfigUtils_1.getConfig();
    let {
      rowEven: G,
      rowOdd: V,
      nodeBorder: X
    } = Y;
    B.push(0);
    for (let [t, e] of M.entries()) {
      let r = (t + 1) % 2 == 0 && e.yOffset !== 0;
      let i = D.rectangle(z, S.height + j + (e == null ? undefined : e.yOffset), N, e == null ? undefined : e.rowHeight, {
        ...q,
        fill: r ? G : V,
        stroke: X
      });
      w.insert(() => i, "g.label").attr("style", b.join("")).attr("class", `row-rect-${r ? "even" : "odd"}`);
    }
    let Q = D.line(z, S.height + j, N + z, S.height + j, q);
    w.insert(() => Q).attr("class", "divider");
    Q = D.line(W + z, S.height + j, W + z, P + j, q);
    w.insert(() => Q).attr("class", "divider");
    if (A) {
      Q = D.line(W + L + z, S.height + j, W + L + z, P + j, q);
      w.insert(() => Q).attr("class", "divider");
    }
    if ($) {
      Q = D.line(W + L + F + z, S.height + j, W + L + F + z, P + j, q);
      w.insert(() => Q).attr("class", "divider");
    }
    for (let t of B) {
      Q = D.line(z, S.height + j + t, N + z, S.height + j + t, q);
      w.insert(() => Q).attr("class", "divider");
    }
    f(e, U);
    if (v && e.look !== "handDrawn") {
      let t = v.split(";");
      let e = t == null ? undefined : (p = t.filter(t => t.includes("stroke"))) === null || p === undefined ? undefined : p.map(t => `${t}`).join("; ");
      w.selectAll("path").attr("style", e ?? "");
      w.selectAll(".row-rect-even path").attr("style", v);
    }
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return w;
  }
  async function t4(t, e, r, i = 0, a = 0, o = [], l = "") {
    let c = t.insert("g").attr("class", `label ${o.join(" ")}`).attr("transform", `translate(${i}, ${a})`).attr("style", l);
    if (e !== mermaidConfigUtils_1.parseGenericTypes(e)) {
      e = (e = mermaidConfigUtils_1.parseGenericTypes(e)).replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    }
    let u = c.node().appendChild(await iconUtilsTextRendering.createText(c, e, {
      width: mermaidDiagramUtils.calcTextWidth(e, r) + 100,
      style: l,
      useHtmlLabels: r.htmlLabels
    }, r));
    if (e.includes("&lt;") || e.includes("&gt;")) {
      let t = u.children[0];
      for (t.textContent = t.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); t.childNodes[0];) {
        (t = t.childNodes[0]).textContent = t.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
      }
    }
    let p = u.getBBox();
    if (mermaidConfigUtils_1.evaluate(r.htmlLabels)) {
      let t = u.children[0];
      t.style.textAlign = "start";
      let e = axisAndZoomUtilities.select(u);
      p = t.getBoundingClientRect();
      e.attr("width", p.width);
      e.attr("height", p.height);
    }
    return p;
  }
  async function t8(t, e, r, a, o = (i = r.class.padding) !== null && i !== undefined ? i : 12) {
    let l = !a * 3;
    let n = t.insert("g").attr("class", m(e)).attr("id", e.domId || e.id);
    let s = null;
    let h = null;
    let c = null;
    let d = null;
    let u = 0;
    let p = 0;
    let g = 0;
    s = n.insert("g").attr("class", "annotation-group text");
    if (e.annotations.length > 0) {
      let t = e.annotations[0];
      await t9(s, {
        text: `\xab${t}\xbb`
      }, 0);
      u = s.node().getBBox().height;
    }
    h = n.insert("g").attr("class", "label-group text");
    await t9(h, e, 0, ["font-weight: bolder"]);
    let f = h.node().getBBox();
    p = f.height;
    c = n.insert("g").attr("class", "members-group text");
    let y = 0;
    for (let t of e.members) {
      let e = await t9(c, t, y, [t.parseClassifier()]);
      y += e + l;
    }
    if ((g = c.node().getBBox().height) <= 0) {
      g = o / 2;
    }
    d = n.insert("g").attr("class", "methods-group text");
    let x = 0;
    for (let t of e.methods) {
      let e = await t9(d, t, x, [t.parseClassifier()]);
      x += e + l;
    }
    let b = n.node().getBBox();
    if (s !== null) {
      let t = s.node().getBBox();
      s.attr("transform", `translate(${-t.width / 2})`);
    }
    h.attr("transform", `translate(${-f.width / 2}, ${u})`);
    b = n.node().getBBox();
    c.attr("transform", `translate(0, ${u + p + o * 2})`);
    b = n.node().getBBox();
    d.attr("transform", `translate(0, ${u + p + (g ? g + o * 4 : o * 2)})`);
    b = n.node().getBBox();
    return {
      shapeSvg: n,
      bbox: b
    };
  }
  async function t9(t, e, r) {
    var i;
    let a;
    let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    let l = t.insert("g").attr("class", "label").attr("style", o.join("; "));
    let u = mermaidConfigUtils_1.getConfig();
    let p = "useHtmlLabels" in e ? e.useHtmlLabels : (i = mermaidConfigUtils_1.evaluate(u.htmlLabels)) === null || i === undefined || i;
    let g = "";
    g = "text" in e ? e.text : e.label;
    if (!p && g.startsWith("\\")) {
      g = g.substring(1);
    }
    if (mermaidConfigUtils_1.hasKatex(g)) {
      p = true;
    }
    let f = await iconUtilsTextRendering.createText(l, mermaidConfigUtils_1.sanitizeTextAlt(mermaidDiagramUtils.decodeEntities(g)), {
      width: mermaidDiagramUtils.calcTextWidth(g, u) + 50,
      classes: "markdown-node-label",
      useHtmlLabels: p
    }, u);
    let m = 1;
    if (p) {
      let t = f.children[0];
      let e = axisAndZoomUtilities.select(f);
      m = t.innerHTML.split("<br>").length;
      if (t.innerHTML.includes("</math>")) {
        m += t.innerHTML.split("<mrow>").length - 1;
      }
      let r = t.getElementsByTagName("img");
      if (r) {
        let t = g.replace(/<img[^>]*>/g, "").trim() === "";
        await Promise.all([...r].map(e => new Promise(r => {
          function i() {
            e.style.display = "flex";
            e.style.flexDirection = "column";
            if (t) {
              var i;
              let t = parseInt(((i = u.fontSize) === null || i === undefined ? undefined : i.toString()) ?? window.getComputedStyle(document.body).fontSize, 10) * 5 + "px";
              e.style.minWidth = t;
              e.style.maxWidth = t;
            } else {
              e.style.width = "100%";
            }
            r(e);
          }
          loggerLevelUtils.setFunctionName(i, "setupImage");
          setTimeout(() => {
            if (e.complete) {
              i();
            }
          });
          e.addEventListener("error", i);
          e.addEventListener("load", i);
        })));
      }
      a = t.getBoundingClientRect();
      e.attr("width", a.width);
      e.attr("height", a.height);
    } else {
      if (o.includes("font-weight: bolder")) {
        axisAndZoomUtilities.select(f).selectAll("tspan").attr("font-weight", "");
      }
      m = f.children.length;
      let t = f.children[0];
      if (f.textContent === "" || f.textContent.includes("&gt")) {
        t.textContent = g[0] + g.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim();
        if (g[1] === " ") {
          t.textContent = t.textContent[0] + " " + t.textContent.substring(1);
        }
      }
      if (t.textContent === "undefined") {
        t.textContent = "";
      }
      a = f.getBBox();
    }
    l.attr("transform", "translate(0," + (-a.height / (m * 2) + r) + ")");
    return a.height;
  }
  async function t7(t, e) {
    var r;
    var n;
    let g = mermaidConfigUtils_1.getConfigAlias();
    let m = g.class.padding ?? 12;
    let y = (n = e.useHtmlLabels ?? mermaidConfigUtils_1.evaluate(g.htmlLabels)) === null || n === undefined || n;
    e.annotations = e.annotations ?? [];
    e.members = e.members ?? [];
    e.methods = e.methods ?? [];
    let {
      shapeSvg: x,
      bbox: b
    } = await t8(t, e, g, y, m);
    let {
      labelStyles: C,
      nodeStyles: v
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = C;
    e.cssStyles = e.styles || "";
    let k = ((r = e.styles) === null || r === undefined ? undefined : r.join(";")) || v || "";
    e.cssStyles ||= k.replaceAll("!important", "").split(";");
    let w = e.members.length === 0 && e.methods.length === 0 && !g.class?.hideEmptyMembersBox;
    let S = roughDrawingCore.roughLibrary.svg(x);
    let T = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      T.roughness = 0;
      T.fillStyle = "solid";
    }
    let B = b.width;
    let M = b.height;
    if (e.members.length === 0 && e.methods.length === 0) {
      M += m;
    } else if (e.members.length > 0 && e.methods.length === 0) {
      M += m * 2;
    }
    let W = -B / 2;
    let L = -M / 2;
    let F = S.rectangle(W - m, L - m - (w ? m : e.members.length === 0 && e.methods.length === 0 ? -m / 2 : 0), B + m * 2, M + m * 2 + (w ? m * 2 : e.members.length === 0 && e.methods.length === 0 ? -m : 0), T);
    let _ = x.insert(() => F, ":first-child");
    _.attr("class", "basic label-container");
    let A = _.node().getBBox();
    x.selectAll(".text").each((t, r, i) => {
      let a = axisAndZoomUtilities.select(i[r]);
      let o = a.attr("transform");
      let l = 0;
      if (o) {
        let t = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(o);
        if (t) {
          l = parseFloat(t[2]);
        }
      }
      let n = l + L + m - (w ? m : e.members.length === 0 && e.methods.length === 0 ? -m / 2 : 0);
      if (!y) {
        n -= 4;
      }
      let s = W;
      if (a.attr("class").includes("label-group") || a.attr("class").includes("annotation-group")) {
        var h;
        s = -((h = a.node()) === null || h === undefined ? undefined : h.getBBox().width) / 2 || 0;
        x.selectAll("text").each(function (t, e, r) {
          if (window.getComputedStyle(r[e]).textAnchor === "middle") {
            s = 0;
          }
        });
      }
      a.attr("transform", `translate(${s}, ${n})`);
    });
    let $ = x.select(".annotation-group").node().getBBox().height - (w ? m / 2 : 0) || 0;
    let E = x.select(".label-group").node().getBBox().height - (w ? m / 2 : 0) || 0;
    let Z = x.select(".members-group").node().getBBox().height - (w ? m / 2 : 0) || 0;
    if (e.members.length > 0 || e.methods.length > 0 || w) {
      let t = S.line(A.x, $ + E + L + m, A.x + A.width, $ + E + L + m, T);
      x.insert(() => t).attr("class", "divider").attr("style", k);
    }
    if (w || e.members.length > 0 || e.methods.length > 0) {
      let t = S.line(A.x, $ + E + Z + L + m * 2 + m, A.x + A.width, $ + E + Z + L + m + m * 2, T);
      x.insert(() => t).attr("class", "divider").attr("style", k);
    }
    if (e.look !== "handDrawn") {
      x.selectAll("path").attr("style", k);
    }
    _.select(":nth-child(2)").attr("style", k);
    x.selectAll(".divider").select("path").attr("style", k);
    if (e.labelStyle) {
      x.selectAll("span").attr("style", e.labelStyle);
    } else {
      x.selectAll("span").attr("style", k);
    }
    if (!y) {
      let t = RegExp(/color\s*:\s*([^;]*)/);
      let e = t.exec(k);
      if (e) {
        let t = e[0].replace("color", "fill");
        x.selectAll("tspan").attr("style", t);
      } else if (C) {
        let e = t.exec(C);
        if (e) {
          let t = e[0].replace("color", "fill");
          x.selectAll("tspan").attr("style", t);
        }
      }
    }
    f(e, _);
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return x;
  }
  async function et(t, e) {
    var r;
    var i;
    let s;
    let {
      labelStyles: h,
      nodeStyles: c
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = h;
    let p = "verifyMethod" in e;
    let g = m(e);
    let y = t.insert("g").attr("class", g).attr("id", e.domId ?? e.id);
    let x = s = p ? await ee(y, `&lt;&lt;${e.type}&gt;&gt;`, 0, e.labelStyle) : await ee(y, "&lt;&lt;Element&gt;&gt;", 0, e.labelStyle);
    let b = await ee(y, e.name, x, e.labelStyle + "; font-weight: bold;");
    x += b + 20;
    if (p) {
      let t = await ee(y, `${e.requirementId ? `ID: ${e.requirementId}` : ""}`, x, e.labelStyle);
      x += t;
      let r = await ee(y, `${e.text ? `Text: ${e.text}` : ""}`, x, e.labelStyle);
      x += r;
      let i = await ee(y, `${e.risk ? `Risk: ${e.risk}` : ""}`, x, e.labelStyle);
      x += i;
      await ee(y, `${e.verifyMethod ? `Verification: ${e.verifyMethod}` : ""}`, x, e.labelStyle);
    } else {
      let t = await ee(y, `${e.type ? `Type: ${e.type}` : ""}`, x, e.labelStyle);
      x += t;
      await ee(y, `${e.docRef ? `Doc Ref: ${e.docRef}` : ""}`, x, e.labelStyle);
    }
    let C = (((r = y.node()) === null || r === undefined ? undefined : r.getBBox().width) ?? 200) + 20;
    let v = (((i = y.node()) === null || i === undefined ? undefined : i.getBBox().height) ?? 200) + 20;
    let k = -C / 2;
    let w = -v / 2;
    let S = roughDrawingCore.roughLibrary.svg(y);
    let T = mermaidStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      T.roughness = 0;
      T.fillStyle = "solid";
    }
    let B = S.rectangle(k, w, C, v, T);
    let M = y.insert(() => B, ":first-child");
    M.attr("class", "basic label-container").attr("style", c);
    y.selectAll(".label").each((t, e, r) => {
      let i = axisAndZoomUtilities.select(r[e]);
      let a = i.attr("transform");
      let o = 0;
      let l = 0;
      if (a) {
        let t = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(a);
        if (t) {
          o = parseFloat(t[1]);
          l = parseFloat(t[2]);
        }
      }
      let n = l - v / 2;
      let s = k + 10;
      if (e === 0 || e === 1) {
        s = o;
      }
      i.attr("transform", `translate(${s}, ${n + 20})`);
    });
    if (x > s + b + 20) {
      let t = S.line(k, w + s + b + 20, k + C, w + s + b + 20, T);
      y.insert(() => t).attr("style", c);
    }
    f(e, M);
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return y;
  }
  async function ee(t, e, r) {
    var i;
    let a;
    let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    if (e === "") {
      return 0;
    }
    let l = t.insert("g").attr("class", "label").attr("style", o);
    let c = mermaidConfigUtils_1.getConfigAlias();
    let u = (i = c.htmlLabels) === null || i === undefined || i;
    let p = await iconUtilsTextRendering.createText(l, mermaidConfigUtils_1.sanitizeTextAlt(mermaidDiagramUtils.decodeEntities(e)), {
      width: mermaidDiagramUtils.calcTextWidth(e, c) + 50,
      classes: "markdown-node-label",
      useHtmlLabels: u,
      style: o
    }, c);
    if (u) {
      let t = p.children[0];
      let e = axisAndZoomUtilities.select(p);
      a = t.getBoundingClientRect();
      e.attr("width", a.width);
      e.attr("height", a.height);
    } else {
      for (let t of p.children[0].children) {
        t.textContent = t.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<");
        if (o) {
          t.setAttribute("style", o);
        }
      }
      a = p.getBBox();
      a.height += 6;
    }
    l.attr("transform", `translate(${-a.width / 2},${-a.height / 2 + r})`);
    return a.height;
  }
  loggerLevelUtils.setFunctionName(tJ, "tiltedCylinder");
  loggerLevelUtils.setFunctionName(tK, "trapezoid");
  loggerLevelUtils.setFunctionName(t0, "trapezoidalPentagon");
  loggerLevelUtils.setFunctionName(t1, "triangle");
  loggerLevelUtils.setFunctionName(t2, "waveEdgedRectangle");
  loggerLevelUtils.setFunctionName(t5, "waveRectangle");
  loggerLevelUtils.setFunctionName(t3, "windowPane");
  loggerLevelUtils.setFunctionName(t6, "erBox");
  loggerLevelUtils.setFunctionName(t4, "addText");
  loggerLevelUtils.setFunctionName(t8, "textHelper");
  loggerLevelUtils.setFunctionName(t9, "addText");
  loggerLevelUtils.setFunctionName(t7, "classBox");
  loggerLevelUtils.setFunctionName(et, "requirementBox");
  loggerLevelUtils.setFunctionName(ee, "addText");
  var er = loggerLevelUtils.setFunctionName(t => {
    switch (t) {
      case "Very High":
        return "red";
      case "High":
        return "orange";
      case "Medium":
        return null;
      case "Low":
        return "blue";
      case "Very Low":
        return "lightblue";
    }
  }, "colorFromPriority");
  async function ei(t, e, r) {
    var o;
    let n;
    let s;
    let h;
    let c;
    let {
      config: d
    } = r;
    let {
      labelStyles: y,
      nodeStyles: x
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = y || "";
    let b = e.width;
    e.width = (e.width ?? 200) - 10;
    let {
      shapeSvg: C,
      bbox: v,
      label: k
    } = await p(t, e, m(e));
    let w = e.padding || 10;
    let T = "";
    if ("ticket" in e && e.ticket && (d == null ? undefined : d.kanban?.ticketBaseUrl)) {
      T = d == null ? undefined : (o = d.kanban) === null || o === undefined ? undefined : o.ticketBaseUrl.replace("#TICKET#", e.ticket);
      n = C.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", T).attr("target", "_blank");
    }
    let B = {
      useHtmlLabels: e.useHtmlLabels,
      labelStyle: e.labelStyle || "",
      width: e.width,
      img: e.img,
      padding: e.padding || 8,
      centerLabel: false
    };
    if (n) {
      ({
        label: s,
        bbox: h
      } = await g(n, "ticket" in e && e.ticket || "", B));
    } else {
      ({
        label: s,
        bbox: h
      } = await g(C, "ticket" in e && e.ticket || "", B));
    }
    let {
      label: M,
      bbox: W
    } = await g(C, "assigned" in e && e.assigned || "", B);
    e.width = b;
    let L = (e == null ? undefined : e.width) || 0;
    let F = Math.max(h.height, W.height) / 2;
    let _ = Math.max(v.height + 20, (e == null ? undefined : e.height) || 0) + F;
    let A = -L / 2;
    let $ = -_ / 2;
    k.attr("transform", "translate(" + (w - L / 2) + ", " + (-F - v.height / 2) + ")");
    s.attr("transform", "translate(" + (w - L / 2) + ", " + (-F + v.height / 2) + ")");
    M.attr("transform", "translate(" + (w + L / 2 - W.width - 20) + ", " + (-F + v.height / 2) + ")");
    let {
      rx: E,
      ry: Z
    } = e;
    let {
      cssStyles: O
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(C);
      let r = mermaidStyleUtils.userNodeOverrides(e, {});
      let i = E || Z ? t.path(S(A, $, L, _, E || 0), r) : t.rectangle(A, $, L, _, r);
      (c = C.insert(() => i, ":first-child")).attr("class", "basic label-container").attr("style", O || null);
    } else {
      (c = C.insert("rect", ":first-child")).attr("class", "basic label-container __APA__").attr("style", x).attr("rx", E ?? 5).attr("ry", Z ?? 5).attr("x", A).attr("y", $).attr("width", L).attr("height", _);
      let t = "priority" in e && e.priority;
      if (t) {
        let e = C.append("line");
        let r = A + 2;
        let i = $ + Math.floor((E ?? 0) / 2);
        let a = $ + _ - Math.floor((E ?? 0) / 2);
        e.attr("x1", r).attr("y1", i).attr("x2", r).attr("y2", a).attr("stroke-width", "4").attr("stroke", er(t));
      }
    }
    f(e, c);
    e.height = _;
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return C;
  }
  async function ea(t, e) {
    let r;
    let {
      labelStyles: i,
      nodeStyles: a
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = i;
    let {
      shapeSvg: o,
      bbox: n,
      halfPadding: h,
      label: d
    } = await p(t, e, m(e));
    let g = n.width + h * 10;
    let y = n.height + h * 8;
    let x = g * 0.15;
    let {
      cssStyles: b
    } = e;
    let C = n.width + 20;
    let v = n.height + 20;
    let k = Math.max(g, C);
    let w = Math.max(y, v);
    d.attr("transform", `translate(${-n.width / 2}, ${-n.height / 2})`);
    let S = `M0 0 
    a${x},${x} 1 0,0 ${k * 0.25},${w * -1 * 0.1}
    a${x},${x} 1 0,0 ${k * 0.25},0
    a${x},${x} 1 0,0 ${k * 0.25},0
    a${x},${x} 1 0,0 ${k * 0.25},${w * 0.1}

    a${x},${x} 1 0,0 ${k * 0.15},${w * 0.33}
    a${x * 0.8},${x * 0.8} 1 0,0 0,${w * 0.34}
    a${x},${x} 1 0,0 ${k * -1 * 0.15},${w * 0.33}

    a${x},${x} 1 0,0 ${k * -1 * 0.25},${w * 0.15}
    a${x},${x} 1 0,0 ${k * -1 * 0.25},0
    a${x},${x} 1 0,0 ${k * -1 * 0.25},0
    a${x},${x} 1 0,0 ${k * -1 * 0.25},${w * -1 * 0.15}

    a${x},${x} 1 0,0 ${k * -1 * 0.1},${w * -1 * 0.33}
    a${x * 0.8},${x * 0.8} 1 0,0 0,${w * -1 * 0.34}
    a${x},${x} 1 0,0 ${k * 0.1},${w * -1 * 0.33}
  H0 V0 Z`;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(o);
      let i = mermaidStyleUtils.userNodeOverrides(e, {});
      let a = t.path(S, i);
      (r = o.insert(() => a, ":first-child")).attr("class", "basic label-container").attr("style", mermaidDiagramUtils.handleUndefinedAttr(b));
    } else {
      r = o.insert("path", ":first-child").attr("class", "basic label-container").attr("style", a).attr("d", S);
    }
    r.attr("transform", `translate(${-k / 2}, ${-w / 2})`);
    f(e, r);
    e.calcIntersect = function (t, e) {
      return I.rect(t, e);
    };
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("Bang intersect", e, t);
      return I.rect(e, t);
    };
    return o;
  }
  async function eo(t, e) {
    let r;
    let {
      labelStyles: i,
      nodeStyles: a
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = i;
    let {
      shapeSvg: o,
      bbox: n,
      halfPadding: h,
      label: d
    } = await p(t, e, m(e));
    let g = n.width + h * 2;
    let y = n.height + h * 2;
    let x = g * 0.15;
    let b = g * 0.25;
    let C = g * 0.35;
    let v = g * 0.2;
    let {
      cssStyles: k
    } = e;
    let w = `M0 0 
    a${x},${x} 0 0,1 ${g * 0.25},${g * -1 * 0.1}
    a${C},${C} 1 0,1 ${g * 0.4},${g * -1 * 0.1}
    a${b},${b} 1 0,1 ${g * 0.35},${g * 0.2}

    a${x},${x} 1 0,1 ${g * 0.15},${y * 0.35}
    a${v},${v} 1 0,1 ${g * -1 * 0.15},${y * 0.65}

    a${b},${x} 1 0,1 ${g * -1 * 0.25},${g * 0.15}
    a${C},${C} 1 0,1 ${g * -1 * 0.5},0
    a${x},${x} 1 0,1 ${g * -1 * 0.25},${g * -1 * 0.15}

    a${x},${x} 1 0,1 ${g * -1 * 0.1},${y * -1 * 0.35}
    a${v},${v} 1 0,1 ${g * 0.1},${y * -1 * 0.65}
  H0 V0 Z`;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(o);
      let i = mermaidStyleUtils.userNodeOverrides(e, {});
      let a = t.path(w, i);
      (r = o.insert(() => a, ":first-child")).attr("class", "basic label-container").attr("style", mermaidDiagramUtils.handleUndefinedAttr(k));
    } else {
      r = o.insert("path", ":first-child").attr("class", "basic label-container").attr("style", a).attr("d", w);
    }
    d.attr("transform", `translate(${-n.width / 2}, ${-n.height / 2})`);
    r.attr("transform", `translate(${-g / 2}, ${-y / 2})`);
    f(e, r);
    e.calcIntersect = function (t, e) {
      return I.rect(t, e);
    };
    e.intersect = function (t) {
      loggerLevelUtils.logger.info("Cloud intersect", e, t);
      return I.rect(e, t);
    };
    return o;
  }
  async function el(t, e) {
    let {
      labelStyles: r,
      nodeStyles: i
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = r;
    let {
      shapeSvg: a,
      bbox: o,
      halfPadding: n,
      label: s
    } = await p(t, e, m(e));
    let h = o.width + n * 8;
    let c = o.height + n * 2;
    let d = `
    M${-h / 2} ${c / 2 - 5}
    v${-c + 10}
    q0,-5 5,-5
    h${h - 10}
    q5,0 5,5
    v${c - 10}
    q0,5 -5,5
    h${-h + 10}
    q-5,0 -5,-5
    Z
  `;
    let u = a.append("path").attr("id", "node-" + e.id).attr("class", "node-bkg node-" + e.type).attr("style", i).attr("d", d);
    a.append("line").attr("class", "node-line-").attr("x1", -h / 2).attr("y1", c / 2).attr("x2", h / 2).attr("y2", c / 2);
    s.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`);
    a.append(() => s.node());
    f(e, u);
    e.calcIntersect = function (t, e) {
      return I.rect(t, e);
    };
    e.intersect = function (t) {
      return I.rect(e, t);
    };
    return a;
  }
  async function en(t, e) {
    let i = {
      padding: e.padding ?? 0
    };
    return H(t, e, i);
  }
  loggerLevelUtils.setFunctionName(ei, "kanbanItem");
  loggerLevelUtils.setFunctionName(ea, "bang");
  loggerLevelUtils.setFunctionName(eo, "cloud");
  loggerLevelUtils.setFunctionName(el, "defaultMindmapNode");
  loggerLevelUtils.setFunctionName(en, "mindmapCircle");
  var es = [{
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: tR
  }, {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: tD
  }, {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: tN
  }, {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: tH
  }, {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: ta
  }, {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: H
  }, {
    semanticName: "Bang",
    name: "Bang",
    shortName: "bang",
    description: "Bang",
    aliases: ["bang"],
    handler: ea
  }, {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: eo
  }, {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: t$
  }, {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: td
  }, {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: tk
  }, {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: tv
  }, {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: tK
  }, {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: tx
  }, {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: tl
  }, {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: tG
  }, {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: z
  }, {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: tI
  }, {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: tj
  }, {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: tz
  }, {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: th
  }, {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: tu
  }, {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: V
  }, {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Q
  }, {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: K
  }, {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: tw
  }, {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: t2
  }, {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: tc
  }, {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: tJ
  }, {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: tM
  }, {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: tt
  }, {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: to
  }, {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: t1
  }, {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: t3
  }, {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: tn
  }, {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: t0
  }, {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: ts
  }, {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: tq
  }, {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: tF
  }, {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: tL
  }, {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: N
  }, {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: Y
  }, {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: tY
  }, {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: tU
  }, {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: t5
  }, {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: tE
  }, {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: tW
  }];
  var eh = loggerLevelUtils.setFunctionName(() => Object.fromEntries([...Object.entries({
    state: tP,
    choice: j,
    note: t_,
    rectWithTitle: tZ,
    labelRect: tC,
    iconSquare: tm,
    iconCircle: tg,
    icon: tp,
    iconRounded: tf,
    imageSquare: ty,
    anchor: q,
    kanbanItem: ei,
    mindmapCircle: en,
    defaultMindmapNode: el,
    classBox: t7,
    erBox: t6,
    requirementBox: et
  }), ...es.flatMap(t => [t.shortName, ...("aliases" in t ? t.aliases : []), ...("internalAliases" in t ? t.internalAliases : [])].map(e => [e, t.handler]))]), "generateShapeMap")();
  function ec(t) {
    return t in eh;
  }
  loggerLevelUtils.setFunctionName(ec, "isValidShape");
  var ed = new Map();
  async function eu(t, e, r) {
    let i;
    let a;
    if (e.shape === "rect") {
      if (e.rx && e.ry) {
        e.shape = "roundedRect";
      } else {
        e.shape = "squareRect";
      }
    }
    let o = e.shape ? eh[e.shape] : undefined;
    if (!o) {
      throw Error(`No such shape: ${e.shape}. Please check your syntax.`);
    }
    if (e.link) {
      let l;
      if (r.config.securityLevel === "sandbox") {
        l = "_top";
      } else if (e.linkTarget) {
        l = e.linkTarget || "_blank";
      }
      i = t.insert("svg:a").attr("xlink:href", e.link).attr("target", l ?? null);
      a = await o(i, e, r);
    } else {
      i = a = await o(t, e, r);
    }
    if (e.tooltip) {
      a.attr("title", e.tooltip);
    }
    ed.set(e.id, i);
    if (e.haveCallback) {
      i.attr("class", i.attr("class") + " clickable");
    }
    return i;
  }
  loggerLevelUtils.setFunctionName(eu, "insertNode");
  var ep = loggerLevelUtils.setFunctionName((t, e) => {
    ed.set(e.id, t);
  }, "setNodeElem");
  var eg = loggerLevelUtils.setFunctionName(() => {
    ed.clear();
  }, "clear");
  var ef = loggerLevelUtils.setFunctionName(t => {
    let e = ed.get(t.id);
    loggerLevelUtils.logger.trace("Transforming node", t.diff, t, "translate(" + (t.x - t.width / 2 - 5) + ", " + t.width / 2 + ")");
    let r = t.diff || 0;
    if (t.clusterNode) {
      e.attr("transform", "translate(" + (t.x + r - t.width / 2) + ", " + (t.y - t.height / 2 - 8) + ")");
    } else {
      e.attr("transform", "translate(" + t.x + ", " + t.y + ")");
    }
    return r;
  }, "positionNode");
  require.d(exports, {
    labelHelper: function () {
      return p;
    },
    insertCluster: function () {
      return eu;
    },
    createLabel: function () {
      return w;
    },
    setNodeElem: function () {
      return ep;
    },
    clearClusterCache: function () {
      return A;
    },
    kanbanItem: function () {
      return ef;
    },
    isValidShape: function () {
      return ec;
    },
    clearNodeCache: function () {
      return eg;
    },
    updateNodeBounds: function () {
      return f;
    },
    insertNode: function () {
      return _;
    }
  });
}