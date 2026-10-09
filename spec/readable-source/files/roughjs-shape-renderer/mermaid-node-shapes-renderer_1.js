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
         * chunk file: 68615.ae4e84e7.js
         * chunkId: 68615
         * moduleId: 608361
         */
module.exports = function (module, exports, require) {
  var a;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mermaidSubgraphTitleMarginUtils = require("mermaid-subgraph-title-margin-utils") /*id: 152138*/;
  var mermaidNodeStyleUtils = require("mermaid-node-style-utils") /*id: 587619*/;
  var mermaidTextIconUtils = require("mermaid-text-icon-utils") /*id: 5699*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var roughDrawingCore = require("rough-drawing-core") /*id: 157146*/;
  var u = mermaidConfigUtils.setName(async (t, e, l) => {
    let r;
    let c;
    let u = e.useHtmlLabels || mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias()?.htmlLabels);
    r = l || "node default";
    let g = t.insert("g").attr("class", r).attr("id", e.domId || e.id);
    let p = g.insert("g").attr("class", "label").attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(e.labelStyle));
    c = e.label === undefined ? "" : typeof e.label == "string" ? e.label : e.label[0];
    let f = await mermaidTextIconUtils.replaceIconSubstring(p, mermaidConfigUtils.sanitizeText(mermaidTextLayoutUtils.decodeEntities(c), mermaidConfigUtils.getConfigAlias()), {
      useHtmlLabels: u,
      width: e.width || mermaidConfigUtils.getConfigAlias().flowchart?.wrappingWidth,
      cssClasses: "markdown-node-label",
      style: e.labelStyle,
      addSvgBackground: !!e.icon || !!e.img
    });
    let y = f.getBBox();
    let m = ((e == null ? undefined : e.padding) ?? 0) / 2;
    if (u) {
      let t = f.children[0];
      let e = axisAndZoomUtilities.select(f);
      let l = t.getElementsByTagName("img");
      if (l) {
        let t = c.replace(/<img[^>]*>/g, "").trim() === "";
        await Promise.all([...l].map(e => new Promise(l => {
          function a() {
            e.style.display = "flex";
            e.style.flexDirection = "column";
            if (t) {
              let t = mermaidConfigUtils.getConfigAlias().fontSize ? mermaidConfigUtils.getConfigAlias().fontSize : window.getComputedStyle(document.body).fontSize;
              let [l = mermaidConfigUtils.configDefaults.fontSize] = mermaidTextLayoutUtils.parseFontSize(t);
              let a = l * 5 + "px";
              e.style.minWidth = a;
              e.style.maxWidth = a;
            } else {
              e.style.width = "100%";
            }
            l(e);
          }
          mermaidConfigUtils.setName(a, "setupImage");
          setTimeout(() => {
            if (e.complete) {
              a();
            }
          });
          e.addEventListener("error", a);
          e.addEventListener("load", a);
        })));
      }
      y = t.getBoundingClientRect();
      e.attr("width", y.width);
      e.attr("height", y.height);
    }
    if (u) {
      p.attr("transform", "translate(" + -y.width / 2 + ", " + -y.height / 2 + ")");
    } else {
      p.attr("transform", "translate(0, " + -y.height / 2 + ")");
    }
    if (e.centerLabel) {
      p.attr("transform", "translate(" + -y.width / 2 + ", " + -y.height / 2 + ")");
    }
    p.insert("rect", ":first-child");
    return {
      shapeSvg: g,
      bbox: y,
      halfPadding: m,
      label: p
    };
  }, "labelHelper");
  var g = mermaidConfigUtils.setName(async (t, e, l) => {
    var i;
    var r;
    var u;
    let g = l.useHtmlLabels || mermaidConfigUtils.evaluate((i = mermaidConfigUtils.getConfigAlias()) === null || i === undefined ? undefined : i.flowchart?.htmlLabels);
    let p = t.insert("g").attr("class", "label").attr("style", l.labelStyle || "");
    let f = await mermaidTextIconUtils.replaceIconSubstring(p, mermaidConfigUtils.sanitizeText(mermaidTextLayoutUtils.decodeEntities(e), mermaidConfigUtils.getConfigAlias()), {
      useHtmlLabels: g,
      width: l.width || ((r = mermaidConfigUtils.getConfigAlias()) === null || r === undefined ? undefined : r.flowchart?.wrappingWidth),
      style: l.labelStyle,
      addSvgBackground: !!l.icon || !!l.img
    });
    let y = f.getBBox();
    let m = l.padding / 2;
    if (mermaidConfigUtils.evaluate((u = mermaidConfigUtils.getConfigAlias()) === null || u === undefined ? undefined : u.flowchart?.htmlLabels)) {
      let t = f.children[0];
      let e = axisAndZoomUtilities.select(f);
      y = t.getBoundingClientRect();
      e.attr("width", y.width);
      e.attr("height", y.height);
    }
    if (g) {
      p.attr("transform", "translate(" + -y.width / 2 + ", " + -y.height / 2 + ")");
    } else {
      p.attr("transform", "translate(0, " + -y.height / 2 + ")");
    }
    if (l.centerLabel) {
      p.attr("transform", "translate(" + -y.width / 2 + ", " + -y.height / 2 + ")");
    }
    p.insert("rect", ":first-child");
    return {
      shapeSvg: t,
      bbox: y,
      halfPadding: m,
      label: p
    };
  }, "insertLabel");
  var p = mermaidConfigUtils.setName((t, e) => {
    let l = e.node().getBBox();
    t.width = l.width;
    t.height = l.height;
  }, "updateNodeBounds");
  var f = mermaidConfigUtils.setName((t, e) => (t.look === "handDrawn" ? "rough-node" : "node") + " " + t.cssClasses + " " + (e || ""), "getNodeClasses");
  function y(t) {
    let e = t.map((t, e) => `${e === 0 ? "M" : "L"}${t.x},${t.y}`);
    e.push("Z");
    return e.join(" ");
  }
  function m(t, e, l, a, i, n) {
    let r = [];
    let s = l - t;
    let o = Math.PI * 2 / (s / n);
    let h = e + (a - e) / 2;
    for (let e = 0; e <= 50; e++) {
      let l = t + e / 50 * s;
      let a = h + i * Math.sin(o * (l - t));
      r.push({
        x: l,
        y: a
      });
    }
    return r;
  }
  function w(t, e, l, a, i, n) {
    let r = [];
    let s = i * Math.PI / 180;
    let o = (n * Math.PI / 180 - s) / (a - 1);
    for (let i = 0; i < a; i++) {
      let a = s + i * o;
      let n = t + l * Math.cos(a);
      let h = e + l * Math.sin(a);
      r.push({
        x: -n,
        y: -h
      });
    }
    return r;
  }
  mermaidConfigUtils.setName(y, "createPathFromPoints");
  mermaidConfigUtils.setName(m, "generateFullSineWavePoints");
  mermaidConfigUtils.setName(w, "generateCirclePoints");
  var x = mermaidConfigUtils.setName((t, e) => {
    var l;
    var a;
    var i = t.x;
    var n = t.y;
    var r = e.x - i;
    var s = e.y - n;
    var o = t.width / 2;
    var h = t.height / 2;
    if (Math.abs(s) * o > Math.abs(r) * h) {
      if (s < 0) {
        h = -h;
      }
      l = s === 0 ? 0 : h * r / s;
      a = h;
    } else {
      if (r < 0) {
        o = -o;
      }
      l = o;
      a = r === 0 ? 0 : o * s / r;
    }
    return {
      x: i + l,
      y: n + a
    };
  }, "intersectRect");
  function v(t, e) {
    if (e) {
      t.attr("style", e);
    }
  }
  async function b(t) {
    let e = axisAndZoomUtilities.select(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
    let l = e.append("xhtml:div");
    let a = mermaidConfigUtils.getConfigAlias();
    let i = t.label;
    if (t.label && mermaidConfigUtils.hasKatex(t.label)) {
      i = await mermaidConfigUtils.renderKatex(t.label.replace(mermaidConfigUtils.textUtils.lineBreakRegex, "\n"), a);
    }
    let n = "<span class=\"" + (t.isNode ? "nodeLabel" : "edgeLabel") + "\" " + (t.labelStyle ? "style=\"" + t.labelStyle + "\"" : "") + ">" + i + "</span>";
    l.html(mermaidConfigUtils.sanitizeText(n, a));
    v(l, t.labelStyle);
    l.style("display", "inline-block");
    l.style("padding-right", "1px");
    l.style("white-space", "nowrap");
    l.attr("xmlns", "http://www.w3.org/1999/xhtml");
    return e.node();
  }
  mermaidConfigUtils.setName(v, "applyStyle");
  mermaidConfigUtils.setName(b, "addHtmlLabel");
  var k = mermaidConfigUtils.setName(async (t, e, l, a) => {
    let i = t || "";
    if (typeof i == "object") {
      i = i[0];
    }
    if (mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels)) {
      i = i.replace(/\\n|\n/g, "<br />");
      mermaidConfigUtils.logger.info("vertexText" + i);
      let t = {
        isNode: a,
        label: mermaidTextLayoutUtils.decodeEntities(i).replace(/fa[blrs]?:fa-[\w-]+/g, t => `<i class='${t.replace(":", " ")}'></i>`),
        labelStyle: e ? e.replace("fill:", "color:") : e
      };
      return await b(t);
    }
    {
      let t = document.createElementNS("http://www.w3.org/2000/svg", "text");
      t.setAttribute("style", e.replace("color:", "fill:"));
      let a = [];
      for (let e of typeof i == "string" ? i.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(i) ? i : []) {
        let a = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        a.setAttribute("dy", "1em");
        a.setAttribute("x", "0");
        if (l) {
          a.setAttribute("class", "title-row");
        } else {
          a.setAttribute("class", "row");
        }
        a.textContent = e.trim();
        t.appendChild(a);
      }
      return t;
    }
  }, "createLabel");
  var M = mermaidConfigUtils.setName((t, e, l, a, i) => ["M", t + i, e, "H", t + l - i, "A", i, i, 0, 0, 1, t + l, e + i, "V", e + a - i, "A", i, i, 0, 0, 1, t + l - i, e + a, "H", t + i, "A", i, i, 0, 0, 1, t, e + a - i, "V", e + i, "A", i, i, 0, 0, 1, t + i, e, "Z"].join(" "), "createRoundedRectPathD");
  var $ = mermaidConfigUtils.setName(async (t, e) => {
    let l;
    mermaidConfigUtils.logger.info("Creating subgraph rect for ", e.id, e);
    let a = mermaidConfigUtils.getConfigAlias();
    let {
      themeVariables: i,
      handDrawnSeed: o
    } = a;
    let {
      clusterBkg: u,
      clusterBorder: g
    } = i;
    let {
      labelStyles: p,
      nodeStyles: f,
      borderStyles: y,
      backgroundStyles: m
    } = mermaidNodeStyleUtils.styles2String(e);
    let w = t.insert("g").attr("class", "cluster " + e.cssClasses).attr("id", e.id).attr("data-look", e.look);
    let v = mermaidConfigUtils.evaluate(a.flowchart.htmlLabels);
    let b = w.insert("g").attr("class", "cluster-label ");
    let k = await mermaidTextIconUtils.replaceIconSubstring(b, e.label, {
      style: e.labelStyle,
      useHtmlLabels: v,
      isNode: true
    });
    let $ = k.getBBox();
    if (mermaidConfigUtils.evaluate(a.flowchart.htmlLabels)) {
      let t = k.children[0];
      let e = axisAndZoomUtilities.select(k);
      $ = t.getBoundingClientRect();
      e.attr("width", $.width);
      e.attr("height", $.height);
    }
    let S = e.width <= $.width + e.padding ? $.width + e.padding : e.width;
    if (e.width <= $.width + e.padding) {
      e.diff = (S - e.width) / 2 - e.padding;
    } else {
      e.diff = -e.padding;
    }
    let D = e.height;
    let W = e.x - S / 2;
    let C = e.y - D / 2;
    mermaidConfigUtils.logger.trace("Data ", e, JSON.stringify(e));
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(w);
      let a = mermaidNodeStyleUtils.userNodeOverrides(e, {
        roughness: 0.7,
        fill: u,
        stroke: g,
        fillWeight: 3,
        seed: o
      });
      let i = t.path(M(W, C, S, D, 0), a);
      (l = w.insert(() => {
        mermaidConfigUtils.logger.debug("Rough node insert CXC", i);
        return i;
      }, ":first-child")).select("path:nth-child(2)").attr("style", y.join(";"));
      l.select("path").attr("style", m.join(";").replace("fill", "stroke"));
    } else {
      (l = w.insert("rect", ":first-child")).attr("style", f).attr("rx", e.rx).attr("ry", e.ry).attr("x", W).attr("y", C).attr("width", S).attr("height", D);
    }
    let {
      subGraphTitleTopMargin: P
    } = mermaidSubgraphTitleMarginUtils.getSubGraphTitleMargins(a);
    b.attr("transform", `translate(${e.x - $.width / 2}, ${e.y - e.height / 2 + P})`);
    if (p) {
      let t = b.select("span");
      if (t) {
        t.attr("style", p);
      }
    }
    let A = l.node().getBBox();
    e.offsetX = 0;
    e.width = A.width;
    e.height = A.height;
    e.offsetY = $.height - e.padding / 2;
    e.intersect = function (t) {
      return x(e, t);
    };
    return {
      cluster: w,
      labelBBox: $
    };
  }, "rect");
  var S = mermaidConfigUtils.setName((t, e) => {
    let l = t.insert("g").attr("class", "note-cluster").attr("id", e.id);
    let a = l.insert("rect", ":first-child");
    let i = e.padding * 0;
    let n = i / 2;
    a.attr("rx", e.rx).attr("ry", e.ry).attr("x", e.x - e.width / 2 - n).attr("y", e.y - e.height / 2 - n).attr("width", e.width + i).attr("height", e.height + i).attr("fill", "none");
    let r = a.node().getBBox();
    e.width = r.width;
    e.height = r.height;
    e.intersect = function (t) {
      return x(e, t);
    };
    return {
      cluster: l,
      labelBBox: {
        width: 0,
        height: 0
      }
    };
  }, "noteGroup");
  var D = mermaidConfigUtils.setName(async (t, e) => {
    let l;
    let a = mermaidConfigUtils.getConfigAlias();
    let {
      themeVariables: i,
      handDrawnSeed: n
    } = a;
    let {
      altBackground: r,
      compositeBackground: s,
      compositeTitleBackground: o,
      nodeBorder: u
    } = i;
    let g = t.insert("g").attr("class", e.cssClasses).attr("id", e.id).attr("data-id", e.id).attr("data-look", e.look);
    let p = g.insert("g", ":first-child");
    let f = g.insert("g").attr("class", "cluster-label");
    let y = g.append("rect");
    let m = f.node().appendChild(await k(e.label, e.labelStyle, undefined, true));
    let w = m.getBBox();
    if (mermaidConfigUtils.evaluate(a.flowchart.htmlLabels)) {
      let t = m.children[0];
      let e = axisAndZoomUtilities.select(m);
      w = t.getBoundingClientRect();
      e.attr("width", w.width);
      e.attr("height", w.height);
    }
    let v = e.padding * 0;
    let b = (e.width <= w.width + e.padding ? w.width + e.padding : e.width) + v;
    if (e.width <= w.width + e.padding) {
      e.diff = (b - e.width) / 2 - e.padding;
    } else {
      e.diff = -e.padding;
    }
    let $ = e.height + v;
    let S = e.height + v - w.height - 6;
    let D = e.x - b / 2;
    let W = e.y - $ / 2;
    e.width = b;
    let C = e.y - e.height / 2 - v / 2 + w.height + 2;
    if (e.look === "handDrawn") {
      let t = e.cssClasses.includes("statediagram-cluster-alt");
      let a = roughDrawingCore.roughLibrary.svg(g);
      let i = e.rx || e.ry ? a.path(M(D, W, b, $, 10), {
        roughness: 0.7,
        fill: o,
        fillStyle: "solid",
        stroke: u,
        seed: n
      }) : a.rectangle(D, W, b, $, {
        seed: n
      });
      l = g.insert(() => i, ":first-child");
      let h = a.rectangle(D, C, b, S, {
        fill: t ? r : s,
        fillStyle: t ? "hachure" : "solid",
        stroke: u,
        seed: n
      });
      l = g.insert(() => i, ":first-child");
      y = g.insert(() => h);
    } else {
      (l = p.insert("rect", ":first-child")).attr("class", "outer").attr("x", D).attr("y", W).attr("width", b).attr("height", $).attr("data-look", e.look);
      y.attr("class", "inner").attr("x", D).attr("y", C).attr("width", b).attr("height", S);
    }
    f.attr("transform", `translate(${e.x - w.width / 2}, ${W + 1 - !mermaidConfigUtils.evaluate(a.flowchart.htmlLabels) * 3})`);
    let P = l.node().getBBox();
    e.height = P.height;
    e.offsetX = 0;
    e.offsetY = w.height - e.padding / 2;
    e.labelBBox = w;
    e.intersect = function (t) {
      return x(e, t);
    };
    return {
      cluster: g,
      labelBBox: w
    };
  }, "roundedWithTitle");
  var W = mermaidConfigUtils.setName(async (t, e) => {
    let l;
    mermaidConfigUtils.logger.info("Creating subgraph rect for ", e.id, e);
    let a = mermaidConfigUtils.getConfigAlias();
    let {
      themeVariables: i,
      handDrawnSeed: o
    } = a;
    let {
      clusterBkg: u,
      clusterBorder: g
    } = i;
    let {
      labelStyles: p,
      nodeStyles: f,
      borderStyles: y,
      backgroundStyles: m
    } = mermaidNodeStyleUtils.styles2String(e);
    let w = t.insert("g").attr("class", "cluster " + e.cssClasses).attr("id", e.id).attr("data-look", e.look);
    let v = mermaidConfigUtils.evaluate(a.flowchart.htmlLabels);
    let b = w.insert("g").attr("class", "cluster-label ");
    let k = await mermaidTextIconUtils.replaceIconSubstring(b, e.label, {
      style: e.labelStyle,
      useHtmlLabels: v,
      isNode: true,
      width: e.width
    });
    let $ = k.getBBox();
    if (mermaidConfigUtils.evaluate(a.flowchart.htmlLabels)) {
      let t = k.children[0];
      let e = axisAndZoomUtilities.select(k);
      $ = t.getBoundingClientRect();
      e.attr("width", $.width);
      e.attr("height", $.height);
    }
    let S = e.width <= $.width + e.padding ? $.width + e.padding : e.width;
    if (e.width <= $.width + e.padding) {
      e.diff = (S - e.width) / 2 - e.padding;
    } else {
      e.diff = -e.padding;
    }
    let D = e.height;
    let W = e.x - S / 2;
    let C = e.y - D / 2;
    mermaidConfigUtils.logger.trace("Data ", e, JSON.stringify(e));
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(w);
      let a = mermaidNodeStyleUtils.userNodeOverrides(e, {
        roughness: 0.7,
        fill: u,
        stroke: g,
        fillWeight: 4,
        seed: o
      });
      let i = t.path(M(W, C, S, D, e.rx), a);
      (l = w.insert(() => {
        mermaidConfigUtils.logger.debug("Rough node insert CXC", i);
        return i;
      }, ":first-child")).select("path:nth-child(2)").attr("style", y.join(";"));
      l.select("path").attr("style", m.join(";").replace("fill", "stroke"));
    } else {
      (l = w.insert("rect", ":first-child")).attr("style", f).attr("rx", e.rx).attr("ry", e.ry).attr("x", W).attr("y", C).attr("width", S).attr("height", D);
    }
    let {
      subGraphTitleTopMargin: P
    } = mermaidSubgraphTitleMarginUtils.getSubGraphTitleMargins(a);
    b.attr("transform", `translate(${e.x - $.width / 2}, ${e.y - e.height / 2 + P})`);
    if (p) {
      let t = b.select("span");
      if (t) {
        t.attr("style", p);
      }
    }
    let A = l.node().getBBox();
    e.offsetX = 0;
    e.width = A.width;
    e.height = A.height;
    e.offsetY = $.height - e.padding / 2;
    e.intersect = function (t) {
      return x(e, t);
    };
    return {
      cluster: w,
      labelBBox: $
    };
  }, "kanbanSection");
  var C = {
    rect: $,
    squareRect: $,
    roundedWithTitle: D,
    noteGroup: S,
    divider: mermaidConfigUtils.setName((t, e) => {
      let l;
      let {
        themeVariables: a,
        handDrawnSeed: i
      } = mermaidConfigUtils.getConfigAlias();
      let {
        nodeBorder: n
      } = a;
      let r = t.insert("g").attr("class", e.cssClasses).attr("id", e.id).attr("data-look", e.look);
      let s = r.insert("g", ":first-child");
      let o = e.padding * 0;
      let d = e.width + o;
      e.diff = -e.padding;
      let u = e.height + o;
      let g = e.x - d / 2;
      let p = e.y - u / 2;
      e.width = d;
      if (e.look === "handDrawn") {
        let t = roughDrawingCore.roughLibrary.svg(r).rectangle(g, p, d, u, {
          fill: "lightgrey",
          roughness: 0.5,
          strokeLineDash: [5],
          stroke: n,
          seed: i
        });
        l = r.insert(() => t, ":first-child");
      } else {
        (l = s.insert("rect", ":first-child")).attr("class", "divider").attr("x", g).attr("y", p).attr("width", d).attr("height", u).attr("data-look", e.look);
      }
      let f = l.node().getBBox();
      e.height = f.height;
      e.offsetX = 0;
      e.offsetY = 0;
      e.intersect = function (t) {
        return x(e, t);
      };
      return {
        cluster: r,
        labelBBox: {}
      };
    }, "divider"),
    kanbanSection: W
  };
  var P = new Map();
  var A = mermaidConfigUtils.setName(async (t, e) => {
    let l = e.shape || "rect";
    let a = await C[l](t, e);
    P.set(e.id, a);
    return a;
  }, "insertCluster");
  var N = mermaidConfigUtils.setName(() => {
    P = new Map();
  }, "clear");
  function L(t, e, l, a) {
    var i = t.x;
    var n = t.y;
    var r = i - a.x;
    var s = n - a.y;
    var o = Math.sqrt(e * e * s * s + l * l * r * r);
    var h = Math.abs(e * l * r / o);
    if (a.x < i) {
      h = -h;
    }
    var d = Math.abs(e * l * s / o);
    if (a.y < n) {
      d = -d;
    }
    return {
      x: i + h,
      y: n + d
    };
  }
  function B(t, e, l) {
    return L(t, e, e, l);
  }
  function R(t, e, l, a) {
    var i;
    var n;
    var r;
    var s;
    var o;
    var h;
    var d;
    var c;
    var u;
    var g;
    var p;
    var f;
    var y;
    i = e.y - t.y;
    r = t.x - e.x;
    o = e.x * t.y - t.x * e.y;
    u = i * l.x + r * l.y + o;
    g = i * a.x + r * a.y + o;
    if (u === 0 || g === 0 || !_(u, g)) {
      n = a.y - l.y;
      s = l.x - a.x;
      h = a.x * l.y - l.x * a.y;
      d = n * t.x + s * t.y + h;
      c = n * e.x + s * e.y + h;
      if ((d === 0 || c === 0 || !_(d, c)) && (p = i * s - n * r) != 0) {
        f = Math.abs(p / 2);
        return {
          x: (y = r * h - s * o) < 0 ? (y - f) / p : (y + f) / p,
          y: (y = n * o - i * h) < 0 ? (y - f) / p : (y + f) / p
        };
      }
    }
  }
  function _(t, e) {
    return t * e > 0;
  }
  function T(t, e, l) {
    let a = t.x;
    let i = t.y;
    let n = [];
    let r = Number.POSITIVE_INFINITY;
    let s = Number.POSITIVE_INFINITY;
    if (typeof e.forEach == "function") {
      e.forEach(function (t) {
        r = Math.min(r, t.x);
        s = Math.min(s, t.y);
      });
    } else {
      r = Math.min(r, e.x);
      s = Math.min(s, e.y);
    }
    let o = a - t.width / 2 - r;
    let h = i - t.height / 2 - s;
    for (let a = 0; a < e.length; a++) {
      let i = e[a];
      let r = e[a < e.length - 1 ? a + 1 : 0];
      let s = R(t, l, {
        x: o + i.x,
        y: h + i.y
      }, {
        x: o + r.x,
        y: h + r.y
      });
      if (s) {
        n.push(s);
      }
    }
    if (n.length) {
      if (n.length > 1) {
        n.sort(function (t, e) {
          let a = t.x - l.x;
          let i = t.y - l.y;
          let n = Math.sqrt(a * a + i * i);
          let r = e.x - l.x;
          let s = e.y - l.y;
          let o = Math.sqrt(r * r + s * s);
          if (n < o) {
            return -1;
          } else {
            return +(n !== o);
          }
        });
      }
      return n[0];
    } else {
      return t;
    }
  }
  mermaidConfigUtils.setName(function (t, e) {
    return t.intersect(e);
  }, "intersectNode");
  mermaidConfigUtils.setName(L, "intersectEllipse");
  mermaidConfigUtils.setName(B, "intersectCircle");
  mermaidConfigUtils.setName(R, "intersectLine");
  mermaidConfigUtils.setName(_, "sameSign");
  mermaidConfigUtils.setName(T, "intersectPolygon");
  var q = {
    circle: B,
    polygon: T,
    rect: x
  };
  function Z(t, e) {
    let {
      labelStyles: l
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = l;
    let a = f(e);
    let i = a;
    if (!a) {
      i = "anchor";
    }
    let n = t.insert("g").attr("class", i).attr("id", e.domId || e.id);
    let {
      cssStyles: s
    } = e;
    let d = roughDrawingCore.roughLibrary.svg(n);
    let u = mermaidNodeStyleUtils.userNodeOverrides(e, {
      fill: "black",
      stroke: "none",
      fillStyle: "solid"
    });
    if (e.look !== "handDrawn") {
      u.roughness = 0;
    }
    let g = d.circle(0, 0, 2, u);
    let y = n.insert(() => g, ":first-child");
    y.attr("class", "anchor").attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(s));
    p(e, y);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("Circle intersect", e, 1, t);
      return q.circle(e, 1, t);
    };
    return n;
  }
  function O(t, e, l, a, i, n, r) {
    let s = Math.atan2(a - e, l - t);
    let o = Math.sqrt(((l - t) / 2 / i) ** 2 + ((a - e) / 2 / n) ** 2);
    if (o > 1) {
      throw Error("The given radii are too small to create an arc between the points.");
    }
    let h = Math.sqrt(1 - o ** 2);
    let d = (t + l) / 2 + h * n * Math.sin(s) * (r ? -1 : 1);
    let c = (e + a) / 2 - h * i * Math.cos(s) * (r ? -1 : 1);
    let u = Math.atan2((e - c) / n, (t - d) / i);
    let g = Math.atan2((a - c) / n, (l - d) / i) - u;
    if (r && g < 0) {
      g += Math.PI * 2;
    }
    if (!r && g > 0) {
      g -= Math.PI * 2;
    }
    let p = [];
    for (let t = 0; t < 20; t++) {
      let e = u + t / 19 * g;
      let l = d + i * Math.cos(e);
      let a = c + n * Math.sin(e);
      p.push({
        x: l,
        y: a
      });
    }
    return p;
  }
  async function I(t, e) {
    let {
      labelStyles: l,
      nodeStyles: a
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = l;
    let {
      shapeSvg: i,
      bbox: n
    } = await u(t, e, f(e));
    let s = n.width + e.padding + 20;
    let o = n.height + e.padding;
    let h = o / 2;
    let d = h / (2.5 + o / 50);
    let {
      cssStyles: g
    } = e;
    let m = [{
      x: s / 2,
      y: -o / 2
    }, {
      x: -s / 2,
      y: -o / 2
    }, ...O(-s / 2, -o / 2, -s / 2, o / 2, d, h, false), {
      x: s / 2,
      y: o / 2
    }, ...O(s / 2, o / 2, s / 2, -o / 2, d, h, true)];
    let w = roughDrawingCore.roughLibrary.svg(i);
    let x = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      x.roughness = 0;
      x.fillStyle = "solid";
    }
    let v = y(m);
    let b = w.path(v, x);
    let k = i.insert(() => b, ":first-child");
    k.attr("class", "basic label-container");
    if (g && e.look !== "handDrawn") {
      k.selectAll("path").attr("style", g);
    }
    if (a && e.look !== "handDrawn") {
      k.selectAll("path").attr("style", a);
    }
    k.attr("transform", `translate(${d / 2}, 0)`);
    p(e, k);
    e.intersect = function (t) {
      return q.polygon(e, m, t);
    };
    return i;
  }
  function G(t, e, l, a) {
    return t.insert("polygon", ":first-child").attr("points", a.map(function (t) {
      return t.x + "," + t.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -e / 2 + "," + l / 2 + ")");
  }
  async function E(t, e) {
    let l;
    let {
      labelStyles: a,
      nodeStyles: i
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = a;
    let {
      shapeSvg: n,
      bbox: s
    } = await u(t, e, f(e));
    let o = s.height + e.padding;
    let h = s.width + e.padding + 12;
    let d = -o;
    let g = [{
      x: 12,
      y: d
    }, {
      x: h,
      y: d
    }, {
      x: h,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: d + 12
    }, {
      x: 12,
      y: d
    }];
    let {
      cssStyles: m
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(n);
      let a = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let i = y(g);
      let s = t.path(i, a);
      l = n.insert(() => s, ":first-child").attr("transform", `translate(${-h / 2}, ${o / 2})`);
      if (m) {
        l.attr("style", m);
      }
    } else {
      l = G(n, h, o, g);
    }
    if (i) {
      l.attr("style", i);
    }
    p(e, l);
    e.intersect = function (t) {
      return q.polygon(e, g, t);
    };
    return n;
  }
  function U(t, e) {
    let {
      nodeStyles: i
    } = mermaidNodeStyleUtils.styles2String(e);
    e.label = "";
    let n = t.insert("g").attr("class", f(e)).attr("id", e.domId ?? e.id);
    let {
      cssStyles: s
    } = e;
    let o = Math.max(28, e.width ?? 0);
    let h = [{
      x: 0,
      y: o / 2
    }, {
      x: o / 2,
      y: 0
    }, {
      x: 0,
      y: -o / 2
    }, {
      x: -o / 2,
      y: 0
    }];
    let d = roughDrawingCore.roughLibrary.svg(n);
    let u = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      u.roughness = 0;
      u.fillStyle = "solid";
    }
    let g = y(h);
    let p = d.path(g, u);
    let m = n.insert(() => p, ":first-child");
    if (s && e.look !== "handDrawn") {
      m.selectAll("path").attr("style", s);
    }
    if (i && e.look !== "handDrawn") {
      m.selectAll("path").attr("style", i);
    }
    e.width = 28;
    e.height = 28;
    e.intersect = function (t) {
      return q.polygon(e, h, t);
    };
    return n;
  }
  async function F(t, e) {
    let l;
    let {
      labelStyles: a,
      nodeStyles: i
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = a;
    let {
      shapeSvg: n,
      bbox: s,
      halfPadding: d
    } = await u(t, e, f(e));
    let g = s.width / 2 + d;
    let {
      cssStyles: y
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(n);
      let a = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let i = t.circle(0, 0, g * 2, a);
      (l = n.insert(() => i, ":first-child")).attr("class", "basic label-container").attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(y));
    } else {
      l = n.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", i).attr("r", g).attr("cx", 0).attr("cy", 0);
    }
    p(e, l);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("Circle intersect", e, g, t);
      return q.circle(e, g, t);
    };
    return n;
  }
  function j(t) {
    let e = Math.cos(Math.PI / 4);
    let l = Math.sin(Math.PI / 4);
    let a = t * 2;
    let i = {
      x: a / 2 * e,
      y: a / 2 * l
    };
    let n = {
      x: -(a / 2) * e,
      y: a / 2 * l
    };
    let r = {
      x: -(a / 2) * e,
      y: -(a / 2) * l
    };
    let s = {
      x: a / 2 * e,
      y: -(a / 2) * l
    };
    return `M ${n.x},${n.y} L ${s.x},${s.y}
                   M ${i.x},${i.y} L ${r.x},${r.y}`;
  }
  function z(t, e) {
    let {
      labelStyles: i,
      nodeStyles: n
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = i;
    e.label = "";
    let s = t.insert("g").attr("class", f(e)).attr("id", e.domId ?? e.id);
    let o = Math.max(30, (e == null ? undefined : e.width) ?? 0);
    let {
      cssStyles: d
    } = e;
    let u = roughDrawingCore.roughLibrary.svg(s);
    let g = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      g.roughness = 0;
      g.fillStyle = "solid";
    }
    let y = u.circle(0, 0, o * 2, g);
    let m = j(o);
    let w = u.path(m, g);
    let x = s.insert(() => y, ":first-child");
    x.insert(() => w);
    if (d && e.look !== "handDrawn") {
      x.selectAll("path").attr("style", d);
    }
    if (n && e.look !== "handDrawn") {
      x.selectAll("path").attr("style", n);
    }
    p(e, x);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("crossedCircle intersect", e, {
        radius: o,
        point: t
      });
      return q.circle(e, o, t);
    };
    return s;
  }
  function H(t, e, l, a = 100, i = 0, n = 180) {
    let r = [];
    let s = i * Math.PI / 180;
    let o = (n * Math.PI / 180 - s) / (a - 1);
    for (let i = 0; i < a; i++) {
      let a = s + i * o;
      let n = t + l * Math.cos(a);
      let h = e + l * Math.sin(a);
      r.push({
        x: -n,
        y: -h
      });
    }
    return r;
  }
  async function V(t, e) {
    let {
      labelStyles: o,
      nodeStyles: h
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = o;
    let {
      shapeSvg: d,
      bbox: g,
      label: m
    } = await u(t, e, f(e));
    let w = g.width + (e.padding ?? 0);
    let x = g.height + (e.padding ?? 0);
    let v = Math.max(5, x * 0.1);
    let {
      cssStyles: b
    } = e;
    let k = [...H(w / 2, -x / 2, v, 30, -90, 0), {
      x: -w / 2 - v,
      y: v
    }, ...H(w / 2 + v * 2, -v, v, 20, -180, -270), ...H(w / 2 + v * 2, v, v, 20, -90, -180), {
      x: -w / 2 - v,
      y: -x / 2
    }, ...H(w / 2, x / 2, v, 20, 0, 90)];
    let M = [{
      x: w / 2,
      y: -x / 2 - v
    }, {
      x: -w / 2,
      y: -x / 2 - v
    }, ...H(w / 2, -x / 2, v, 20, -90, 0), {
      x: -w / 2 - v,
      y: -v
    }, ...H(w / 2 + w * 0.1, -v, v, 20, -180, -270), ...H(w / 2 + w * 0.1, v, v, 20, -90, -180), {
      x: -w / 2 - v,
      y: x / 2
    }, ...H(w / 2, x / 2, v, 20, 0, 90), {
      x: -w / 2,
      y: x / 2 + v
    }, {
      x: w / 2,
      y: x / 2 + v
    }];
    let $ = roughDrawingCore.roughLibrary.svg(d);
    let S = mermaidNodeStyleUtils.userNodeOverrides(e, {
      fill: "none"
    });
    if (e.look !== "handDrawn") {
      S.roughness = 0;
      S.fillStyle = "solid";
    }
    let D = y(k).replace("Z", "");
    let W = $.path(D, S);
    let C = y(M);
    let P = $.path(C, {
      ...S
    });
    let A = d.insert("g", ":first-child");
    A.insert(() => P, ":first-child").attr("stroke-opacity", 0);
    A.insert(() => W, ":first-child");
    A.attr("class", "text");
    if (b && e.look !== "handDrawn") {
      A.selectAll("path").attr("style", b);
    }
    if (h && e.look !== "handDrawn") {
      A.selectAll("path").attr("style", h);
    }
    A.attr("transform", `translate(${v}, 0)`);
    m.attr("transform", `translate(${-w / 2 + v - (g.x - (g.left ?? 0))},${-x / 2 + (e.padding ?? 0) / 2 - (g.y - (g.top ?? 0))})`);
    p(e, A);
    e.intersect = function (t) {
      return q.polygon(e, M, t);
    };
    return d;
  }
  function Y(t, e, l, a = 100, i = 0, n = 180) {
    let r = [];
    let s = i * Math.PI / 180;
    let o = (n * Math.PI / 180 - s) / (a - 1);
    for (let i = 0; i < a; i++) {
      let a = s + i * o;
      let n = t + l * Math.cos(a);
      let h = e + l * Math.sin(a);
      r.push({
        x: n,
        y: h
      });
    }
    return r;
  }
  async function X(t, e) {
    let {
      labelStyles: h,
      nodeStyles: d
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = h;
    let {
      shapeSvg: g,
      bbox: m,
      label: w
    } = await u(t, e, f(e));
    let x = m.width + (e.padding ?? 0);
    let v = m.height + (e.padding ?? 0);
    let b = Math.max(5, v * 0.1);
    let {
      cssStyles: k
    } = e;
    let M = [...Y(x / 2, -v / 2, b, 20, -90, 0), {
      x: x / 2 + b,
      y: -b
    }, ...Y(x / 2 + b * 2, -b, b, 20, -180, -270), ...Y(x / 2 + b * 2, b, b, 20, -90, -180), {
      x: x / 2 + b,
      y: v / 2
    }, ...Y(x / 2, v / 2, b, 20, 0, 90)];
    let $ = [{
      x: -x / 2,
      y: -v / 2 - b
    }, {
      x: x / 2,
      y: -v / 2 - b
    }, ...Y(x / 2, -v / 2, b, 20, -90, 0), {
      x: x / 2 + b,
      y: -b
    }, ...Y(x / 2 + b * 2, -b, b, 20, -180, -270), ...Y(x / 2 + b * 2, b, b, 20, -90, -180), {
      x: x / 2 + b,
      y: v / 2
    }, ...Y(x / 2, v / 2, b, 20, 0, 90), {
      x: x / 2,
      y: v / 2 + b
    }, {
      x: -x / 2,
      y: v / 2 + b
    }];
    let S = roughDrawingCore.roughLibrary.svg(g);
    let D = mermaidNodeStyleUtils.userNodeOverrides(e, {
      fill: "none"
    });
    if (e.look !== "handDrawn") {
      D.roughness = 0;
      D.fillStyle = "solid";
    }
    let W = y(M).replace("Z", "");
    let C = S.path(W, D);
    let P = y($);
    let A = S.path(P, {
      ...D
    });
    let N = g.insert("g", ":first-child");
    N.insert(() => A, ":first-child").attr("stroke-opacity", 0);
    N.insert(() => C, ":first-child");
    N.attr("class", "text");
    if (k && e.look !== "handDrawn") {
      N.selectAll("path").attr("style", k);
    }
    if (d && e.look !== "handDrawn") {
      N.selectAll("path").attr("style", d);
    }
    N.attr("transform", `translate(${-b}, 0)`);
    w.attr("transform", `translate(${-x / 2 + (e.padding ?? 0) / 2 - (m.x - (m.left ?? 0))},${-v / 2 + (e.padding ?? 0) / 2 - (m.y - (m.top ?? 0))})`);
    p(e, N);
    e.intersect = function (t) {
      return q.polygon(e, $, t);
    };
    return g;
  }
  function J(t, e, l, a = 100, i = 0, n = 180) {
    let r = [];
    let s = i * Math.PI / 180;
    let o = (n * Math.PI / 180 - s) / (a - 1);
    for (let i = 0; i < a; i++) {
      let a = s + i * o;
      let n = t + l * Math.cos(a);
      let h = e + l * Math.sin(a);
      r.push({
        x: -n,
        y: -h
      });
    }
    return r;
  }
  async function Q(t, e) {
    let {
      labelStyles: h,
      nodeStyles: d
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = h;
    let {
      shapeSvg: g,
      bbox: m,
      label: w
    } = await u(t, e, f(e));
    let x = m.width + (e.padding ?? 0);
    let v = m.height + (e.padding ?? 0);
    let b = Math.max(5, v * 0.1);
    let {
      cssStyles: k
    } = e;
    let M = [...J(x / 2, -v / 2, b, 30, -90, 0), {
      x: -x / 2 - b,
      y: b
    }, ...J(x / 2 + b * 2, -b, b, 20, -180, -270), ...J(x / 2 + b * 2, b, b, 20, -90, -180), {
      x: -x / 2 - b,
      y: -v / 2
    }, ...J(x / 2, v / 2, b, 20, 0, 90)];
    let $ = [...J(-x / 2 + b + b / 2, -v / 2, b, 20, -90, -180), {
      x: x / 2 - b / 2,
      y: b
    }, ...J(-x / 2 - b / 2, -b, b, 20, 0, 90), ...J(-x / 2 - b / 2, b, b, 20, -90, 0), {
      x: x / 2 - b / 2,
      y: -b
    }, ...J(-x / 2 + b + b / 2, v / 2, b, 30, -180, -270)];
    let S = [{
      x: x / 2,
      y: -v / 2 - b
    }, {
      x: -x / 2,
      y: -v / 2 - b
    }, ...J(x / 2, -v / 2, b, 20, -90, 0), {
      x: -x / 2 - b,
      y: -b
    }, ...J(x / 2 + b * 2, -b, b, 20, -180, -270), ...J(x / 2 + b * 2, b, b, 20, -90, -180), {
      x: -x / 2 - b,
      y: v / 2
    }, ...J(x / 2, v / 2, b, 20, 0, 90), {
      x: -x / 2,
      y: v / 2 + b
    }, {
      x: x / 2 - b - b / 2,
      y: v / 2 + b
    }, ...J(-x / 2 + b + b / 2, -v / 2, b, 20, -90, -180), {
      x: x / 2 - b / 2,
      y: b
    }, ...J(-x / 2 - b / 2, -b, b, 20, 0, 90), ...J(-x / 2 - b / 2, b, b, 20, -90, 0), {
      x: x / 2 - b / 2,
      y: -b
    }, ...J(-x / 2 + b + b / 2, v / 2, b, 30, -180, -270)];
    let D = roughDrawingCore.roughLibrary.svg(g);
    let W = mermaidNodeStyleUtils.userNodeOverrides(e, {
      fill: "none"
    });
    if (e.look !== "handDrawn") {
      W.roughness = 0;
      W.fillStyle = "solid";
    }
    let C = y(M).replace("Z", "");
    let P = D.path(C, W);
    let A = y($).replace("Z", "");
    let N = D.path(A, W);
    let L = y(S);
    let B = D.path(L, {
      ...W
    });
    let R = g.insert("g", ":first-child");
    R.insert(() => B, ":first-child").attr("stroke-opacity", 0);
    R.insert(() => P, ":first-child");
    R.insert(() => N, ":first-child");
    R.attr("class", "text");
    if (k && e.look !== "handDrawn") {
      R.selectAll("path").attr("style", k);
    }
    if (d && e.look !== "handDrawn") {
      R.selectAll("path").attr("style", d);
    }
    R.attr("transform", `translate(${b - b / 4}, 0)`);
    w.attr("transform", `translate(${-x / 2 + (e.padding ?? 0) / 2 - (m.x - (m.left ?? 0))},${-v / 2 + (e.padding ?? 0) / 2 - (m.y - (m.top ?? 0))})`);
    p(e, R);
    e.intersect = function (t) {
      return q.polygon(e, S, t);
    };
    return g;
  }
  async function K(t, e) {
    let {
      labelStyles: s,
      nodeStyles: o
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = s;
    let {
      shapeSvg: h,
      bbox: d
    } = await u(t, e, f(e));
    let g = Math.max(80, (d.width + (e.padding ?? 0) * 2) * 1.25, (e == null ? undefined : e.width) ?? 0);
    let m = Math.max(20, d.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let x = m / 2;
    let {
      cssStyles: v
    } = e;
    let b = roughDrawingCore.roughLibrary.svg(h);
    let k = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      k.roughness = 0;
      k.fillStyle = "solid";
    }
    let M = g - x;
    let $ = m / 4;
    let S = [{
      x: M,
      y: 0
    }, {
      x: $,
      y: 0
    }, {
      x: 0,
      y: m / 2
    }, {
      x: $,
      y: m
    }, {
      x: M,
      y: m
    }, ...w(-M, -m / 2, x, 50, 270, 90)];
    let D = y(S);
    let W = b.path(D, k);
    let C = h.insert(() => W, ":first-child");
    C.attr("class", "basic label-container");
    if (v && e.look !== "handDrawn") {
      C.selectChildren("path").attr("style", v);
    }
    if (o && e.look !== "handDrawn") {
      C.selectChildren("path").attr("style", o);
    }
    C.attr("transform", `translate(${-g / 2}, ${-m / 2})`);
    p(e, C);
    e.intersect = function (t) {
      return q.polygon(e, S, t);
    };
    return h;
  }
  mermaidConfigUtils.setName(Z, "anchor");
  mermaidConfigUtils.setName(O, "generateArcPoints");
  mermaidConfigUtils.setName(I, "bowTieRect");
  mermaidConfigUtils.setName(G, "insertPolygonShape");
  mermaidConfigUtils.setName(E, "card");
  mermaidConfigUtils.setName(U, "choice");
  mermaidConfigUtils.setName(F, "circle");
  mermaidConfigUtils.setName(j, "createLine");
  mermaidConfigUtils.setName(z, "crossedCircle");
  mermaidConfigUtils.setName(H, "generateCirclePoints");
  mermaidConfigUtils.setName(V, "curlyBraceLeft");
  mermaidConfigUtils.setName(Y, "generateCirclePoints");
  mermaidConfigUtils.setName(X, "curlyBraceRight");
  mermaidConfigUtils.setName(J, "generateCirclePoints");
  mermaidConfigUtils.setName(Q, "curlyBraces");
  mermaidConfigUtils.setName(K, "curvedTrapezoid");
  var tt = mermaidConfigUtils.setName((t, e, l, a, i, n) => `M${t},${e + n} a${i},${n} 0,0,0 ${l},0 a${i},${n} 0,0,0 ${-l},0 l0,${a} a${i},${n} 0,0,0 ${l},0 l0,${-a}`, "createCylinderPathD");
  var te = mermaidConfigUtils.setName((t, e, l, a, i, n) => `M${t},${e + n} M${t + l},${e + n} a${i},${n} 0,0,0 ${-l},0 l0,${a} a${i},${n} 0,0,0 ${l},0 l0,${-a}`, "createOuterCylinderPathD");
  var tl = mermaidConfigUtils.setName((t, e, l, a, i, n) => `M${t - l / 2},${-a / 2} a${i},${n} 0,0,0 ${l},0`, "createInnerCylinderPathD");
  async function ta(t, e) {
    let h;
    let {
      labelStyles: d,
      nodeStyles: g
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = d;
    let {
      shapeSvg: y,
      bbox: m,
      label: w
    } = await u(t, e, f(e));
    let x = Math.max(m.width + e.padding, e.width ?? 0);
    let v = x / 2;
    let b = v / (2.5 + x / 50);
    let k = Math.max(m.height + b + e.padding, e.height ?? 0);
    let {
      cssStyles: M
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(y);
      let l = te(0, 0, x, k, v, b);
      let a = tl(0, b, x, k, v, b);
      let i = t.path(l, mermaidNodeStyleUtils.userNodeOverrides(e, {}));
      let n = t.path(a, mermaidNodeStyleUtils.userNodeOverrides(e, {
        fill: "none"
      }));
      h = y.insert(() => n, ":first-child");
      (h = y.insert(() => i, ":first-child")).attr("class", "basic label-container");
      if (M) {
        h.attr("style", M);
      }
    } else {
      let t = tt(0, 0, x, k, v, b);
      h = y.insert("path", ":first-child").attr("d", t).attr("class", "basic label-container").attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(M)).attr("style", g);
    }
    h.attr("label-offset-y", b);
    h.attr("transform", `translate(${-x / 2}, ${-(k / 2 + b)})`);
    p(e, h);
    w.attr("transform", `translate(${-(m.width / 2) - (m.x - (m.left ?? 0))}, ${-(m.height / 2) + (e.padding ?? 0) / 1.5 - (m.y - (m.top ?? 0))})`);
    e.intersect = function (t) {
      let o = q.rect(e, t);
      let h = o.x - (e.x ?? 0);
      if (v != 0 && (Math.abs(h) < (e.width ?? 0) / 2 || Math.abs(h) == (e.width ?? 0) / 2 && Math.abs(o.y - (e.y ?? 0)) > (e.height ?? 0) / 2 - b)) {
        let l = b * b * (1 - h * h / (v * v));
        if (l > 0) {
          l = Math.sqrt(l);
        }
        l = b - l;
        if (t.y - (e.y ?? 0) > 0) {
          l = -l;
        }
        o.y += l;
      }
      return o;
    };
    return y;
  }
  async function ti(t, e) {
    let {
      labelStyles: s,
      nodeStyles: o
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = s;
    let {
      shapeSvg: h,
      bbox: d,
      label: g
    } = await u(t, e, f(e));
    let y = d.width + e.padding;
    let m = d.height + e.padding;
    let w = m * 0.2;
    let x = -y / 2;
    let v = -m / 2 - w / 2;
    let {
      cssStyles: b
    } = e;
    let k = roughDrawingCore.roughLibrary.svg(h);
    let M = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      M.roughness = 0;
      M.fillStyle = "solid";
    }
    let $ = k.polygon([{
      x,
      y: v + w
    }, {
      x: -x,
      y: v + w
    }, {
      x: -x,
      y: -v
    }, {
      x,
      y: -v
    }, {
      x,
      y: v
    }, {
      x: -x,
      y: v
    }, {
      x: -x,
      y: v + w
    }].map(t => [t.x, t.y]), M);
    let S = h.insert(() => $, ":first-child");
    S.attr("class", "basic label-container");
    if (b && e.look !== "handDrawn") {
      S.selectAll("path").attr("style", b);
    }
    if (o && e.look !== "handDrawn") {
      S.selectAll("path").attr("style", o);
    }
    g.attr("transform", `translate(${x + (e.padding ?? 0) / 2 - (d.x - (d.left ?? 0))}, ${v + w + (e.padding ?? 0) / 2 - (d.y - (d.top ?? 0))})`);
    p(e, S);
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return h;
  }
  async function tn(t, e) {
    let l;
    let {
      labelStyles: a,
      nodeStyles: i
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = a;
    let {
      shapeSvg: n,
      bbox: s,
      halfPadding: d
    } = await u(t, e, f(e));
    let g = s.width / 2 + d + 5;
    let y = s.width / 2 + d;
    let {
      cssStyles: m
    } = e;
    if (e.look === "handDrawn") {
      var w;
      var x;
      let t = roughDrawingCore.roughLibrary.svg(n);
      let a = mermaidNodeStyleUtils.userNodeOverrides(e, {
        roughness: 0.2,
        strokeWidth: 2.5
      });
      let i = mermaidNodeStyleUtils.userNodeOverrides(e, {
        roughness: 0.2,
        strokeWidth: 1.5
      });
      let s = t.circle(0, 0, g * 2, a);
      let h = t.circle(0, 0, y * 2, i);
      (l = n.insert("g", ":first-child")).attr("class", mermaidTextLayoutUtils.handleUndefinedAttr(e.cssClasses)).attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(m));
      if ((w = l.node()) !== null && w !== undefined) {
        w.appendChild(s);
      }
      if ((x = l.node()) !== null && x !== undefined) {
        x.appendChild(h);
      }
    } else {
      let t = (l = n.insert("g", ":first-child")).insert("circle", ":first-child");
      let e = l.insert("circle");
      l.attr("class", "basic label-container").attr("style", i);
      t.attr("class", "outer-circle").attr("style", i).attr("r", g).attr("cx", 0).attr("cy", 0);
      e.attr("class", "inner-circle").attr("style", i).attr("r", y).attr("cx", 0).attr("cy", 0);
    }
    p(e, l);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("DoubleCircle intersect", e, g, t);
      return q.circle(e, g, t);
    };
    return n;
  }
  function tr(t, e, l) {
    let {
      config: {
        themeVariables: i
      }
    } = l;
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidNodeStyleUtils.styles2String(e);
    e.label = "";
    e.labelStyle = n;
    let o = t.insert("g").attr("class", f(e)).attr("id", e.domId ?? e.id);
    let {
      cssStyles: d
    } = e;
    let u = roughDrawingCore.roughLibrary.svg(o);
    let {
      nodeBorder: g
    } = i;
    let y = mermaidNodeStyleUtils.userNodeOverrides(e, {
      fillStyle: "solid"
    });
    if (e.look !== "handDrawn") {
      y.roughness = 0;
    }
    let m = u.circle(0, 0, 14, y);
    let w = o.insert(() => m, ":first-child");
    w.selectAll("path").attr("style", `fill: ${g} !important;`);
    if (d && d.length > 0 && e.look !== "handDrawn") {
      w.selectAll("path").attr("style", d);
    }
    if (s && e.look !== "handDrawn") {
      w.selectAll("path").attr("style", s);
    }
    p(e, w);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("filledCircle intersect", e, {
        radius: 7,
        point: t
      });
      return q.circle(e, 7, t);
    };
    return o;
  }
  async function ts(t, e) {
    let {
      labelStyles: s,
      nodeStyles: o
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = s;
    let {
      shapeSvg: d,
      bbox: g,
      label: m
    } = await u(t, e, f(e));
    let w = g.width + (e.padding ?? 0);
    let x = w + g.height;
    let v = w + g.height;
    let b = [{
      x: 0,
      y: -x
    }, {
      x: v,
      y: -x
    }, {
      x: v / 2,
      y: 0
    }];
    let {
      cssStyles: k
    } = e;
    let M = roughDrawingCore.roughLibrary.svg(d);
    let $ = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      $.roughness = 0;
      $.fillStyle = "solid";
    }
    let S = y(b);
    let D = M.path(S, $);
    let W = d.insert(() => D, ":first-child").attr("transform", `translate(${-x / 2}, ${x / 2})`);
    if (k && e.look !== "handDrawn") {
      W.selectChildren("path").attr("style", k);
    }
    if (o && e.look !== "handDrawn") {
      W.selectChildren("path").attr("style", o);
    }
    e.width = w;
    e.height = x;
    p(e, W);
    m.attr("transform", `translate(${-g.width / 2 - (g.x - (g.left ?? 0))}, ${-x / 2 + (e.padding ?? 0) / 2 + (g.y - (g.top ?? 0))})`);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("Triangle intersect", e, b, t);
      return q.polygon(e, b, t);
    };
    return d;
  }
  function to(t, e, l) {
    let {
      dir: d,
      config: {
        state: u,
        themeVariables: g
      }
    } = l;
    let {
      nodeStyles: y
    } = mermaidNodeStyleUtils.styles2String(e);
    e.label = "";
    let m = t.insert("g").attr("class", f(e)).attr("id", e.domId ?? e.id);
    let {
      cssStyles: w
    } = e;
    let x = Math.max(70, (e == null ? undefined : e.width) ?? 0);
    let v = Math.max(10, (e == null ? undefined : e.height) ?? 0);
    if (d === "LR") {
      x = Math.max(10, (e == null ? undefined : e.width) ?? 0);
      v = Math.max(70, (e == null ? undefined : e.height) ?? 0);
    }
    let b = x * -1 / 2;
    let k = v * -1 / 2;
    let M = roughDrawingCore.roughLibrary.svg(m);
    let $ = mermaidNodeStyleUtils.userNodeOverrides(e, {
      stroke: g.lineColor,
      fill: g.lineColor
    });
    if (e.look !== "handDrawn") {
      $.roughness = 0;
      $.fillStyle = "solid";
    }
    let S = M.rectangle(b, k, x, v, $);
    let D = m.insert(() => S, ":first-child");
    if (w && e.look !== "handDrawn") {
      D.selectAll("path").attr("style", w);
    }
    if (y && e.look !== "handDrawn") {
      D.selectAll("path").attr("style", y);
    }
    p(e, D);
    let W = (u == null ? undefined : u.padding) ?? 0;
    if (e.width && e.height) {
      e.width += W / 2 || 0;
      e.height += W / 2 || 0;
    }
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return m;
  }
  async function th(t, e) {
    let {
      labelStyles: s,
      nodeStyles: o
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = s;
    let {
      shapeSvg: d,
      bbox: g
    } = await u(t, e, f(e));
    let m = Math.max(80, g.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let x = Math.max(50, g.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let v = x / 2;
    let {
      cssStyles: b
    } = e;
    let k = roughDrawingCore.roughLibrary.svg(d);
    let M = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      M.roughness = 0;
      M.fillStyle = "solid";
    }
    let $ = [{
      x: -m / 2,
      y: -x / 2
    }, {
      x: m / 2 - v,
      y: -x / 2
    }, ...w(-m / 2 + v, 0, v, 50, 90, 270), {
      x: m / 2 - v,
      y: x / 2
    }, {
      x: -m / 2,
      y: x / 2
    }];
    let S = y($);
    let D = k.path(S, M);
    let W = d.insert(() => D, ":first-child");
    W.attr("class", "basic label-container");
    if (b && e.look !== "handDrawn") {
      W.selectChildren("path").attr("style", b);
    }
    if (o && e.look !== "handDrawn") {
      W.selectChildren("path").attr("style", o);
    }
    p(e, W);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("Pill intersect", e, {
        radius: v,
        point: t
      });
      return q.polygon(e, $, t);
    };
    return d;
  }
  async function td(t, e) {
    let {
      labelStyles: i,
      nodeStyles: n
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = i;
    let {
      shapeSvg: s,
      bbox: o
    } = await u(t, e, f(e));
    let h = o.height + (e.padding ?? 0);
    let d = o.width + (e.padding ?? 0) * 2.5;
    let {
      cssStyles: g
    } = e;
    let m = roughDrawingCore.roughLibrary.svg(s);
    let w = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      w.roughness = 0;
      w.fillStyle = "solid";
    }
    let x = d / 2;
    let v = x / 6;
    let b = h / 2;
    let k = (x += v) - b / 2;
    let M = [{
      x: -k,
      y: -b
    }, {
      x: 0,
      y: -b
    }, {
      x: k,
      y: -b
    }, {
      x: x,
      y: 0
    }, {
      x: k,
      y: b
    }, {
      x: 0,
      y: b
    }, {
      x: -k,
      y: b
    }, {
      x: -x,
      y: 0
    }];
    let $ = y(M);
    let S = m.path($, w);
    let D = s.insert(() => S, ":first-child");
    D.attr("class", "basic label-container");
    if (g && e.look !== "handDrawn") {
      D.selectChildren("path").attr("style", g);
    }
    if (n && e.look !== "handDrawn") {
      D.selectChildren("path").attr("style", n);
    }
    e.width = d;
    e.height = h;
    p(e, D);
    e.intersect = function (t) {
      return q.polygon(e, M, t);
    };
    return s;
  }
  async function tc(t, e) {
    let {
      labelStyles: i,
      nodeStyles: n
    } = mermaidNodeStyleUtils.styles2String(e);
    e.label = "";
    e.labelStyle = i;
    let {
      shapeSvg: s
    } = await u(t, e, f(e));
    let o = Math.max(30, (e == null ? undefined : e.width) ?? 0);
    let d = Math.max(30, (e == null ? undefined : e.height) ?? 0);
    let {
      cssStyles: g
    } = e;
    let m = roughDrawingCore.roughLibrary.svg(s);
    let w = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      w.roughness = 0;
      w.fillStyle = "solid";
    }
    let x = [{
      x: 0,
      y: 0
    }, {
      x: o,
      y: 0
    }, {
      x: 0,
      y: d
    }, {
      x: o,
      y: d
    }];
    let v = y(x);
    let b = m.path(v, w);
    let k = s.insert(() => b, ":first-child");
    k.attr("class", "basic label-container");
    if (g && e.look !== "handDrawn") {
      k.selectChildren("path").attr("style", g);
    }
    if (n && e.look !== "handDrawn") {
      k.selectChildren("path").attr("style", n);
    }
    k.attr("transform", `translate(${-o / 2}, ${-d / 2})`);
    p(e, k);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("Pill intersect", e, {
        points: x
      });
      return q.polygon(e, x, t);
    };
    return s;
  }
  async function tu(t, e, l) {
    let {
      config: {
        themeVariables: d,
        flowchart: g
      }
    } = l;
    let {
      labelStyles: f
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = f;
    let y = Math.max(e.assetHeight ?? 48, e.assetWidth ?? 48);
    let m = g == null ? undefined : g.wrappingWidth;
    e.width = Math.max(y, m ?? 0);
    let {
      shapeSvg: w,
      bbox: x,
      label: v
    } = await u(t, e, "icon-shape default");
    let b = e.pos === "t";
    let {
      nodeBorder: k
    } = d;
    let {
      stylesMap: M
    } = mermaidNodeStyleUtils.compileStyles(e);
    let $ = -y / 2;
    let S = -y / 2;
    let D = !!e.label * 8;
    let W = roughDrawingCore.roughLibrary.svg(w);
    let C = mermaidNodeStyleUtils.userNodeOverrides(e, {
      stroke: "none",
      fill: "none"
    });
    if (e.look !== "handDrawn") {
      C.roughness = 0;
      C.fillStyle = "solid";
    }
    let P = W.rectangle($, S, y, y, C);
    let A = Math.max(y, x.width);
    let N = y + x.height + D;
    let L = W.rectangle(-A / 2, -N / 2, A, N, {
      ...C,
      fill: "transparent",
      stroke: "none"
    });
    let B = w.insert(() => P, ":first-child");
    let R = w.insert(() => L);
    if (e.icon) {
      let t = w.append("g");
      t.html(`<g>${await mermaidTextIconUtils.getIconSVG(e.icon, {
        height: y,
        width: y,
        fallbackPrefix: ""
      })}</g>`);
      let l = t.node().getBBox();
      let a = l.width;
      let i = l.height;
      let r = l.x;
      let o = l.y;
      t.attr("transform", `translate(${-a / 2 - r},${b ? x.height / 2 + D / 2 - i / 2 - o : -x.height / 2 - D / 2 - i / 2 - o})`);
      t.attr("style", `color: ${M.get("stroke") ?? k};`);
    }
    v.attr("transform", `translate(${-x.width / 2 - (x.x - (x.left ?? 0))},${b ? -N / 2 : N / 2 - x.height})`);
    B.attr("transform", `translate(0,${b ? x.height / 2 + D / 2 : -x.height / 2 - D / 2})`);
    p(e, R);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("iconSquare intersect", e, t);
      if (!e.label) {
        return q.rect(e, t);
      }
      let n = e.x ?? 0;
      let r = e.y ?? 0;
      let s = e.height ?? 0;
      let o = [];
      o = b ? [{
        x: n - x.width / 2,
        y: r - s / 2
      }, {
        x: n + x.width / 2,
        y: r - s / 2
      }, {
        x: n + x.width / 2,
        y: r - s / 2 + x.height + D
      }, {
        x: n + y / 2,
        y: r - s / 2 + x.height + D
      }, {
        x: n + y / 2,
        y: r + s / 2
      }, {
        x: n - y / 2,
        y: r + s / 2
      }, {
        x: n - y / 2,
        y: r - s / 2 + x.height + D
      }, {
        x: n - x.width / 2,
        y: r - s / 2 + x.height + D
      }] : [{
        x: n - y / 2,
        y: r - s / 2
      }, {
        x: n + y / 2,
        y: r - s / 2
      }, {
        x: n + y / 2,
        y: r - s / 2 + y
      }, {
        x: n + x.width / 2,
        y: r - s / 2 + y
      }, {
        x: n + x.width / 2 / 2,
        y: r + s / 2
      }, {
        x: n - x.width / 2,
        y: r + s / 2
      }, {
        x: n - x.width / 2,
        y: r - s / 2 + y
      }, {
        x: n - y / 2,
        y: r - s / 2 + y
      }];
      return q.polygon(e, o, t);
    };
    return w;
  }
  async function tg(t, e, l) {
    let {
      config: {
        themeVariables: d,
        flowchart: g
      }
    } = l;
    let {
      labelStyles: f
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = f;
    let y = Math.max(e.assetHeight ?? 48, e.assetWidth ?? 48);
    let m = g == null ? undefined : g.wrappingWidth;
    e.width = Math.max(y, m ?? 0);
    let {
      shapeSvg: w,
      bbox: x,
      label: v
    } = await u(t, e, "icon-shape default");
    let b = !!e.label * 8;
    let k = e.pos === "t";
    let {
      nodeBorder: M,
      mainBkg: $
    } = d;
    let {
      stylesMap: S
    } = mermaidNodeStyleUtils.compileStyles(e);
    let D = roughDrawingCore.roughLibrary.svg(w);
    let W = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      W.roughness = 0;
      W.fillStyle = "solid";
    }
    let C = S.get("fill");
    W.stroke = C ?? $;
    let P = w.append("g");
    if (e.icon) {
      P.html(`<g>${await mermaidTextIconUtils.getIconSVG(e.icon, {
        height: y,
        width: y,
        fallbackPrefix: ""
      })}</g>`);
    }
    let A = P.node().getBBox();
    let N = A.width;
    let L = A.height;
    let B = A.x;
    let R = A.y;
    let _ = Math.max(N, L) * Math.SQRT2 + 40;
    let T = D.circle(0, 0, _, W);
    let Z = Math.max(_, x.width);
    let O = _ + x.height + b;
    let I = D.rectangle(-Z / 2, -O / 2, Z, O, {
      ...W,
      fill: "transparent",
      stroke: "none"
    });
    let G = w.insert(() => T, ":first-child");
    let E = w.insert(() => I);
    P.attr("transform", `translate(${-N / 2 - B},${k ? x.height / 2 + b / 2 - L / 2 - R : -x.height / 2 - b / 2 - L / 2 - R})`);
    P.attr("style", `color: ${S.get("stroke") ?? M};`);
    v.attr("transform", `translate(${-x.width / 2 - (x.x - (x.left ?? 0))},${k ? -O / 2 : O / 2 - x.height})`);
    G.attr("transform", `translate(0,${k ? x.height / 2 + b / 2 : -x.height / 2 - b / 2})`);
    p(e, E);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("iconSquare intersect", e, t);
      return q.rect(e, t);
    };
    return w;
  }
  async function tp(t, e, l) {
    let {
      config: {
        themeVariables: d,
        flowchart: g
      }
    } = l;
    let {
      labelStyles: f
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = f;
    let y = Math.max(e.assetHeight ?? 48, e.assetWidth ?? 48);
    let m = g == null ? undefined : g.wrappingWidth;
    e.width = Math.max(y, m ?? 0);
    let {
      shapeSvg: w,
      bbox: x,
      halfPadding: v,
      label: b
    } = await u(t, e, "icon-shape default");
    let k = e.pos === "t";
    let $ = y + v * 2;
    let S = y + v * 2;
    let {
      nodeBorder: D,
      mainBkg: W
    } = d;
    let {
      stylesMap: C
    } = mermaidNodeStyleUtils.compileStyles(e);
    let P = !!e.label * 8;
    let A = roughDrawingCore.roughLibrary.svg(w);
    let N = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      N.roughness = 0;
      N.fillStyle = "solid";
    }
    let L = C.get("fill");
    N.stroke = L ?? W;
    let B = A.path(M(-S / 2, -$ / 2, S, $, 5), N);
    let R = Math.max(S, x.width);
    let _ = $ + x.height + P;
    let T = A.rectangle(-R / 2, -_ / 2, R, _, {
      ...N,
      fill: "transparent",
      stroke: "none"
    });
    let Z = w.insert(() => B, ":first-child").attr("class", "icon-shape2");
    let O = w.insert(() => T);
    if (e.icon) {
      let t = w.append("g");
      t.html(`<g>${await mermaidTextIconUtils.getIconSVG(e.icon, {
        height: y,
        width: y,
        fallbackPrefix: ""
      })}</g>`);
      let l = t.node().getBBox();
      let a = l.width;
      let i = l.height;
      let r = l.x;
      let o = l.y;
      t.attr("transform", `translate(${-a / 2 - r},${k ? x.height / 2 + P / 2 - i / 2 - o : -x.height / 2 - P / 2 - i / 2 - o})`);
      t.attr("style", `color: ${C.get("stroke") ?? D};`);
    }
    b.attr("transform", `translate(${-x.width / 2 - (x.x - (x.left ?? 0))},${k ? -_ / 2 : _ / 2 - x.height})`);
    Z.attr("transform", `translate(0,${k ? x.height / 2 + P / 2 : -x.height / 2 - P / 2})`);
    p(e, O);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("iconSquare intersect", e, t);
      if (!e.label) {
        return q.rect(e, t);
      }
      let n = e.x ?? 0;
      let r = e.y ?? 0;
      let s = e.height ?? 0;
      let o = [];
      o = k ? [{
        x: n - x.width / 2,
        y: r - s / 2
      }, {
        x: n + x.width / 2,
        y: r - s / 2
      }, {
        x: n + x.width / 2,
        y: r - s / 2 + x.height + P
      }, {
        x: n + S / 2,
        y: r - s / 2 + x.height + P
      }, {
        x: n + S / 2,
        y: r + s / 2
      }, {
        x: n - S / 2,
        y: r + s / 2
      }, {
        x: n - S / 2,
        y: r - s / 2 + x.height + P
      }, {
        x: n - x.width / 2,
        y: r - s / 2 + x.height + P
      }] : [{
        x: n - S / 2,
        y: r - s / 2
      }, {
        x: n + S / 2,
        y: r - s / 2
      }, {
        x: n + S / 2,
        y: r - s / 2 + $
      }, {
        x: n + x.width / 2,
        y: r - s / 2 + $
      }, {
        x: n + x.width / 2 / 2,
        y: r + s / 2
      }, {
        x: n - x.width / 2,
        y: r + s / 2
      }, {
        x: n - x.width / 2,
        y: r - s / 2 + $
      }, {
        x: n - S / 2,
        y: r - s / 2 + $
      }];
      return q.polygon(e, o, t);
    };
    return w;
  }
  async function tf(t, e, l) {
    let {
      config: {
        themeVariables: d,
        flowchart: g
      }
    } = l;
    let {
      labelStyles: f
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = f;
    let y = Math.max(e.assetHeight ?? 48, e.assetWidth ?? 48);
    let m = g == null ? undefined : g.wrappingWidth;
    e.width = Math.max(y, m ?? 0);
    let {
      shapeSvg: w,
      bbox: x,
      halfPadding: v,
      label: b
    } = await u(t, e, "icon-shape default");
    let k = e.pos === "t";
    let $ = y + v * 2;
    let S = y + v * 2;
    let {
      nodeBorder: D,
      mainBkg: W
    } = d;
    let {
      stylesMap: C
    } = mermaidNodeStyleUtils.compileStyles(e);
    let P = !!e.label * 8;
    let A = roughDrawingCore.roughLibrary.svg(w);
    let N = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      N.roughness = 0;
      N.fillStyle = "solid";
    }
    let L = C.get("fill");
    N.stroke = L ?? W;
    let B = A.path(M(-S / 2, -$ / 2, S, $, 0.1), N);
    let R = Math.max(S, x.width);
    let _ = $ + x.height + P;
    let T = A.rectangle(-R / 2, -_ / 2, R, _, {
      ...N,
      fill: "transparent",
      stroke: "none"
    });
    let Z = w.insert(() => B, ":first-child");
    let O = w.insert(() => T);
    if (e.icon) {
      let t = w.append("g");
      t.html(`<g>${await mermaidTextIconUtils.getIconSVG(e.icon, {
        height: y,
        width: y,
        fallbackPrefix: ""
      })}</g>`);
      let l = t.node().getBBox();
      let a = l.width;
      let i = l.height;
      let r = l.x;
      let o = l.y;
      t.attr("transform", `translate(${-a / 2 - r},${k ? x.height / 2 + P / 2 - i / 2 - o : -x.height / 2 - P / 2 - i / 2 - o})`);
      t.attr("style", `color: ${C.get("stroke") ?? D};`);
    }
    b.attr("transform", `translate(${-x.width / 2 - (x.x - (x.left ?? 0))},${k ? -_ / 2 : _ / 2 - x.height})`);
    Z.attr("transform", `translate(0,${k ? x.height / 2 + P / 2 : -x.height / 2 - P / 2})`);
    p(e, O);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("iconSquare intersect", e, t);
      if (!e.label) {
        return q.rect(e, t);
      }
      let n = e.x ?? 0;
      let r = e.y ?? 0;
      let s = e.height ?? 0;
      let o = [];
      o = k ? [{
        x: n - x.width / 2,
        y: r - s / 2
      }, {
        x: n + x.width / 2,
        y: r - s / 2
      }, {
        x: n + x.width / 2,
        y: r - s / 2 + x.height + P
      }, {
        x: n + S / 2,
        y: r - s / 2 + x.height + P
      }, {
        x: n + S / 2,
        y: r + s / 2
      }, {
        x: n - S / 2,
        y: r + s / 2
      }, {
        x: n - S / 2,
        y: r - s / 2 + x.height + P
      }, {
        x: n - x.width / 2,
        y: r - s / 2 + x.height + P
      }] : [{
        x: n - S / 2,
        y: r - s / 2
      }, {
        x: n + S / 2,
        y: r - s / 2
      }, {
        x: n + S / 2,
        y: r - s / 2 + $
      }, {
        x: n + x.width / 2,
        y: r - s / 2 + $
      }, {
        x: n + x.width / 2 / 2,
        y: r + s / 2
      }, {
        x: n - x.width / 2,
        y: r + s / 2
      }, {
        x: n - x.width / 2,
        y: r - s / 2 + $
      }, {
        x: n - S / 2,
        y: r - s / 2 + $
      }];
      return q.polygon(e, o, t);
    };
    return w;
  }
  async function ty(t, e, l) {
    let {
      config: {
        flowchart: d
      }
    } = l;
    let g = new Image();
    g.src = xssContentSanitizer.sanitizeUrl((e == null ? undefined : e.img) ?? "", null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFRjF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*t5-%R*aWJ-TjB$$EZaZWxKNlZrN$ZiRl-xWWxkd2$sbFlTbT$r$0%wOQ"
    });
    await g.decode();
    let f = Number(g.naturalWidth.toString().replace("px", ""));
    let y = Number(g.naturalHeight.toString().replace("px", ""));
    e.imageAspectRatio = f / y;
    let {
      labelStyles: m
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = m;
    let w = d == null ? undefined : d.wrappingWidth;
    e.defaultWidth = d == null ? undefined : d.wrappingWidth;
    let x = Math.max(e.label && w != null ? w : 0, (e == null ? undefined : e.assetWidth) ?? f);
    let v = e.constraint === "on" && (e == null ? undefined : e.assetHeight) ? e.assetHeight * e.imageAspectRatio : x;
    let b = e.constraint === "on" ? v / e.imageAspectRatio : (e == null ? undefined : e.assetHeight) ?? y;
    e.width = Math.max(v, w ?? 0);
    let {
      shapeSvg: k,
      bbox: M,
      label: $
    } = await u(t, e, "image-shape default");
    let S = e.pos === "t";
    let D = -v / 2;
    let W = !!e.label * 8;
    let C = roughDrawingCore.roughLibrary.svg(k);
    let P = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      P.roughness = 0;
      P.fillStyle = "solid";
    }
    let A = C.rectangle(D, -b / 2, v, b, P);
    let N = Math.max(v, M.width);
    let L = b + M.height + W;
    let B = C.rectangle(-N / 2, -L / 2, N, L, {
      ...P,
      fill: "none",
      stroke: "none"
    });
    let R = k.insert(() => A, ":first-child");
    let _ = k.insert(() => B);
    if (e.img) {
      let t = k.append("image");
      t.attr("href", e.img);
      t.attr("width", v);
      t.attr("height", b);
      t.attr("preserveAspectRatio", "none");
      t.attr("transform", `translate(${-v / 2},${S ? L / 2 - b : -L / 2})`);
    }
    $.attr("transform", `translate(${-M.width / 2 - (M.x - (M.left ?? 0))},${S ? -b / 2 - M.height / 2 - W / 2 : b / 2 - M.height / 2 + W / 2})`);
    R.attr("transform", `translate(0,${S ? M.height / 2 + W / 2 : -M.height / 2 - W / 2})`);
    p(e, _);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("iconSquare intersect", e, t);
      if (!e.label) {
        return q.rect(e, t);
      }
      let n = e.x ?? 0;
      let r = e.y ?? 0;
      let s = e.height ?? 0;
      let o = [];
      o = S ? [{
        x: n - M.width / 2,
        y: r - s / 2
      }, {
        x: n + M.width / 2,
        y: r - s / 2
      }, {
        x: n + M.width / 2,
        y: r - s / 2 + M.height + W
      }, {
        x: n + v / 2,
        y: r - s / 2 + M.height + W
      }, {
        x: n + v / 2,
        y: r + s / 2
      }, {
        x: n - v / 2,
        y: r + s / 2
      }, {
        x: n - v / 2,
        y: r - s / 2 + M.height + W
      }, {
        x: n - M.width / 2,
        y: r - s / 2 + M.height + W
      }] : [{
        x: n - v / 2,
        y: r - s / 2
      }, {
        x: n + v / 2,
        y: r - s / 2
      }, {
        x: n + v / 2,
        y: r - s / 2 + b
      }, {
        x: n + M.width / 2,
        y: r - s / 2 + b
      }, {
        x: n + M.width / 2 / 2,
        y: r + s / 2
      }, {
        x: n - M.width / 2,
        y: r + s / 2
      }, {
        x: n - M.width / 2,
        y: r - s / 2 + b
      }, {
        x: n - v / 2,
        y: r - s / 2 + b
      }];
      return q.polygon(e, o, t);
    };
    return k;
  }
  async function tm(t, e) {
    let s;
    let {
      labelStyles: o,
      nodeStyles: h
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = o;
    let {
      shapeSvg: d,
      bbox: g
    } = await u(t, e, f(e));
    let m = Math.max(g.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let w = Math.max(g.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let x = [{
      x: 0,
      y: 0
    }, {
      x: m,
      y: 0
    }, {
      x: m + w * 3 / 6,
      y: -w
    }, {
      x: w * -3 / 6,
      y: -w
    }];
    let {
      cssStyles: v
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(d);
      let l = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let a = y(x);
      let i = t.path(a, l);
      s = d.insert(() => i, ":first-child").attr("transform", `translate(${-m / 2}, ${w / 2})`);
      if (v) {
        s.attr("style", v);
      }
    } else {
      s = G(d, m, w, x);
    }
    if (h) {
      s.attr("style", h);
    }
    e.width = m;
    e.height = w;
    p(e, s);
    e.intersect = function (t) {
      return q.polygon(e, x, t);
    };
    return d;
  }
  async function tw(t, e, l) {
    let a;
    let {
      labelStyles: i,
      nodeStyles: n
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = i;
    let {
      shapeSvg: s,
      bbox: h
    } = await u(t, e, f(e));
    let d = Math.max(h.width + l.labelPaddingX * 2, (e == null ? undefined : e.width) || 0);
    let g = Math.max(h.height + l.labelPaddingY * 2, (e == null ? undefined : e.height) || 0);
    let y = -d / 2;
    let m = -g / 2;
    let {
      rx: w,
      ry: x
    } = e;
    let {
      cssStyles: v
    } = e;
    if ((l == null ? undefined : l.rx) && l.ry) {
      w = l.rx;
      x = l.ry;
    }
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(s);
      let l = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let i = w || x ? t.path(M(y, m, d, g, w || 0), l) : t.rectangle(y, m, d, g, l);
      (a = s.insert(() => i, ":first-child")).attr("class", "basic label-container").attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(v));
    } else {
      (a = s.insert("rect", ":first-child")).attr("class", "basic label-container").attr("style", n).attr("rx", mermaidTextLayoutUtils.handleUndefinedAttr(w)).attr("ry", mermaidTextLayoutUtils.handleUndefinedAttr(x)).attr("x", y).attr("y", m).attr("width", d).attr("height", g);
    }
    p(e, a);
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return s;
  }
  async function tx(t, e) {
    let {
      shapeSvg: i,
      bbox: n,
      label: r
    } = await u(t, e, "label");
    let s = i.insert("rect", ":first-child");
    s.attr("width", 0.1).attr("height", 0.1);
    i.attr("class", "label edgeLabel");
    r.attr("transform", `translate(${-(n.width / 2) - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`);
    p(e, s);
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return i;
  }
  async function tv(t, e) {
    let s;
    let {
      labelStyles: o,
      nodeStyles: h
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = o;
    let {
      shapeSvg: d,
      bbox: g
    } = await u(t, e, f(e));
    let m = Math.max(g.width + (e.padding ?? 0), (e == null ? undefined : e.width) ?? 0);
    let w = Math.max(g.height + (e.padding ?? 0), (e == null ? undefined : e.height) ?? 0);
    let x = [{
      x: 0,
      y: 0
    }, {
      x: m + w * 3 / 6,
      y: 0
    }, {
      x: m,
      y: -w
    }, {
      x: -(w * 3) / 6,
      y: -w
    }];
    let {
      cssStyles: v
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(d);
      let l = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let a = y(x);
      let i = t.path(a, l);
      s = d.insert(() => i, ":first-child").attr("transform", `translate(${-m / 2}, ${w / 2})`);
      if (v) {
        s.attr("style", v);
      }
    } else {
      s = G(d, m, w, x);
    }
    if (h) {
      s.attr("style", h);
    }
    e.width = m;
    e.height = w;
    p(e, s);
    e.intersect = function (t) {
      return q.polygon(e, x, t);
    };
    return d;
  }
  async function tb(t, e) {
    let s;
    let {
      labelStyles: o,
      nodeStyles: h
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = o;
    let {
      shapeSvg: d,
      bbox: g
    } = await u(t, e, f(e));
    let m = Math.max(g.width + (e.padding ?? 0), (e == null ? undefined : e.width) ?? 0);
    let w = Math.max(g.height + (e.padding ?? 0), (e == null ? undefined : e.height) ?? 0);
    let x = [{
      x: w * -3 / 6,
      y: 0
    }, {
      x: m,
      y: 0
    }, {
      x: m + w * 3 / 6,
      y: -w
    }, {
      x: 0,
      y: -w
    }];
    let {
      cssStyles: v
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(d);
      let l = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let a = y(x);
      let i = t.path(a, l);
      s = d.insert(() => i, ":first-child").attr("transform", `translate(${-m / 2}, ${w / 2})`);
      if (v) {
        s.attr("style", v);
      }
    } else {
      s = G(d, m, w, x);
    }
    if (h) {
      s.attr("style", h);
    }
    e.width = m;
    e.height = w;
    p(e, s);
    e.intersect = function (t) {
      return q.polygon(e, x, t);
    };
    return d;
  }
  function tk(t, e) {
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidNodeStyleUtils.styles2String(e);
    e.label = "";
    e.labelStyle = n;
    let o = t.insert("g").attr("class", f(e)).attr("id", e.domId ?? e.id);
    let {
      cssStyles: d
    } = e;
    let u = Math.max(35, (e == null ? undefined : e.width) ?? 0);
    let g = Math.max(35, (e == null ? undefined : e.height) ?? 0);
    let m = [{
      x: u,
      y: 0
    }, {
      x: 0,
      y: g + 3.5
    }, {
      x: u - 14,
      y: g + 3.5
    }, {
      x: 0,
      y: g * 2
    }, {
      x: u,
      y: g - 3.5
    }, {
      x: 14,
      y: g - 3.5
    }];
    let w = roughDrawingCore.roughLibrary.svg(o);
    let x = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      x.roughness = 0;
      x.fillStyle = "solid";
    }
    let v = y(m);
    let b = w.path(v, x);
    let k = o.insert(() => b, ":first-child");
    if (d && e.look !== "handDrawn") {
      k.selectAll("path").attr("style", d);
    }
    if (s && e.look !== "handDrawn") {
      k.selectAll("path").attr("style", s);
    }
    k.attr("transform", `translate(-${u / 2},${-g})`);
    p(e, k);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("lightningBolt intersect", e, t);
      return q.polygon(e, m, t);
    };
    return o;
  }
  mermaidConfigUtils.setName(ta, "cylinder");
  mermaidConfigUtils.setName(ti, "dividedRectangle");
  mermaidConfigUtils.setName(tn, "doublecircle");
  mermaidConfigUtils.setName(tr, "filledCircle");
  mermaidConfigUtils.setName(ts, "flippedTriangle");
  mermaidConfigUtils.setName(to, "forkJoin");
  mermaidConfigUtils.setName(th, "halfRoundedRectangle");
  mermaidConfigUtils.setName(td, "hexagon");
  mermaidConfigUtils.setName(tc, "hourglass");
  mermaidConfigUtils.setName(tu, "icon");
  mermaidConfigUtils.setName(tg, "iconCircle");
  mermaidConfigUtils.setName(tp, "iconRounded");
  mermaidConfigUtils.setName(tf, "iconSquare");
  mermaidConfigUtils.setName(ty, "imageSquare");
  mermaidConfigUtils.setName(tm, "inv_trapezoid");
  mermaidConfigUtils.setName(tw, "drawRect");
  mermaidConfigUtils.setName(tx, "labelRect");
  mermaidConfigUtils.setName(tv, "lean_left");
  mermaidConfigUtils.setName(tb, "lean_right");
  mermaidConfigUtils.setName(tk, "lightningBolt");
  var tM = mermaidConfigUtils.setName((t, e, l, a, i, n, r) => `M${t},${e + n} a${i},${n} 0,0,0 ${l},0 a${i},${n} 0,0,0 ${-l},0 l0,${a} a${i},${n} 0,0,0 ${l},0 l0,${-a} M${t},${e + n + r} a${i},${n} 0,0,0 ${l},0`, "createCylinderPathD");
  var t$ = mermaidConfigUtils.setName((t, e, l, a, i, n, r) => `M${t},${e + n} M${t + l},${e + n} a${i},${n} 0,0,0 ${-l},0 l0,${a} a${i},${n} 0,0,0 ${l},0 l0,${-a} M${t},${e + n + r} a${i},${n} 0,0,0 ${l},0`, "createOuterCylinderPathD");
  var tS = mermaidConfigUtils.setName((t, e, l, a, i, n) => `M${t - l / 2},${-a / 2} a${i},${n} 0,0,0 ${l},0`, "createInnerCylinderPathD");
  async function tD(t, e) {
    let d;
    let {
      labelStyles: g,
      nodeStyles: y
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = g;
    let {
      shapeSvg: m,
      bbox: w,
      label: x
    } = await u(t, e, f(e));
    let v = Math.max(w.width + (e.padding ?? 0), e.width ?? 0);
    let b = v / 2;
    let k = b / (2.5 + v / 50);
    let M = Math.max(w.height + k + (e.padding ?? 0), e.height ?? 0);
    let $ = M * 0.1;
    let {
      cssStyles: S
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(m);
      let l = t$(0, 0, v, M, b, k, $);
      let a = tS(0, k, v, M, b, k);
      let i = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let n = t.path(l, i);
      let s = t.path(a, i);
      m.insert(() => s, ":first-child").attr("class", "line");
      (d = m.insert(() => n, ":first-child")).attr("class", "basic label-container");
      if (S) {
        d.attr("style", S);
      }
    } else {
      let t = tM(0, 0, v, M, b, k, $);
      d = m.insert("path", ":first-child").attr("d", t).attr("class", "basic label-container").attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(S)).attr("style", y);
    }
    d.attr("label-offset-y", k);
    d.attr("transform", `translate(${-v / 2}, ${-(M / 2 + k)})`);
    p(e, d);
    x.attr("transform", `translate(${-(w.width / 2) - (w.x - (w.left ?? 0))}, ${-(w.height / 2) + k - (w.y - (w.top ?? 0))})`);
    e.intersect = function (t) {
      let o = q.rect(e, t);
      let h = o.x - (e.x ?? 0);
      if (b != 0 && (Math.abs(h) < (e.width ?? 0) / 2 || Math.abs(h) == (e.width ?? 0) / 2 && Math.abs(o.y - (e.y ?? 0)) > (e.height ?? 0) / 2 - k)) {
        let l = k * k * (1 - h * h / (b * b));
        if (l > 0) {
          l = Math.sqrt(l);
        }
        l = k - l;
        if (t.y - (e.y ?? 0) > 0) {
          l = -l;
        }
        o.y += l;
      }
      return o;
    };
    return m;
  }
  async function tW(t, e) {
    let {
      labelStyles: g,
      nodeStyles: y
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = g;
    let {
      shapeSvg: w,
      bbox: x,
      label: v
    } = await u(t, e, f(e));
    let b = Math.max(x.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let k = Math.max(x.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let M = k / 4;
    let $ = k + M;
    let {
      cssStyles: S
    } = e;
    let D = roughDrawingCore.roughLibrary.svg(w);
    let W = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      W.roughness = 0;
      W.fillStyle = "solid";
    }
    let C = [{
      x: -b / 2 - b / 2 * 0.1,
      y: -$ / 2
    }, {
      x: -b / 2 - b / 2 * 0.1,
      y: $ / 2
    }, ...m(-b / 2 - b / 2 * 0.1, $ / 2, b / 2 + b / 2 * 0.1, $ / 2, M, 0.8), {
      x: b / 2 + b / 2 * 0.1,
      y: -$ / 2
    }, {
      x: -b / 2 - b / 2 * 0.1,
      y: -$ / 2
    }, {
      x: -b / 2,
      y: -$ / 2
    }, {
      x: -b / 2,
      y: $ / 2 * 1.1
    }, {
      x: -b / 2,
      y: -$ / 2
    }];
    let P = D.polygon(C.map(t => [t.x, t.y]), W);
    let A = w.insert(() => P, ":first-child");
    A.attr("class", "basic label-container");
    if (S && e.look !== "handDrawn") {
      A.selectAll("path").attr("style", S);
    }
    if (y && e.look !== "handDrawn") {
      A.selectAll("path").attr("style", y);
    }
    A.attr("transform", `translate(0,${-M / 2})`);
    v.attr("transform", `translate(${-b / 2 + (e.padding ?? 0) + b / 2 * 0.1 / 2 - (x.x - (x.left ?? 0))},${-k / 2 + (e.padding ?? 0) - M / 2 - (x.y - (x.top ?? 0))})`);
    p(e, A);
    e.intersect = function (t) {
      return q.polygon(e, C, t);
    };
    return w;
  }
  async function tC(t, e) {
    let {
      labelStyles: h,
      nodeStyles: d
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = h;
    let {
      shapeSvg: g,
      bbox: m,
      label: w
    } = await u(t, e, f(e));
    let x = Math.max(m.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let v = Math.max(m.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let b = -x / 2;
    let k = -v / 2;
    let {
      cssStyles: M
    } = e;
    let $ = roughDrawingCore.roughLibrary.svg(g);
    let S = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    let D = [{
      x: b - 5,
      y: k + 5
    }, {
      x: b - 5,
      y: k + v + 5
    }, {
      x: b + x - 5,
      y: k + v + 5
    }, {
      x: b + x - 5,
      y: k + v
    }, {
      x: b + x,
      y: k + v
    }, {
      x: b + x,
      y: k + v - 5
    }, {
      x: b + x + 5,
      y: k + v - 5
    }, {
      x: b + x + 5,
      y: k - 5
    }, {
      x: b + 5,
      y: k - 5
    }, {
      x: b + 5,
      y: k
    }, {
      x: b,
      y: k
    }, {
      x: b,
      y: k + 5
    }];
    if (e.look !== "handDrawn") {
      S.roughness = 0;
      S.fillStyle = "solid";
    }
    let W = y(D);
    let C = $.path(W, S);
    let P = y([{
      x: b,
      y: k + 5
    }, {
      x: b + x - 5,
      y: k + 5
    }, {
      x: b + x - 5,
      y: k + v
    }, {
      x: b + x,
      y: k + v
    }, {
      x: b + x,
      y: k
    }, {
      x: b,
      y: k
    }]);
    let A = $.path(P, {
      ...S,
      fill: "none"
    });
    let N = g.insert(() => A, ":first-child");
    N.insert(() => C, ":first-child");
    N.attr("class", "basic label-container");
    if (M && e.look !== "handDrawn") {
      N.selectAll("path").attr("style", M);
    }
    if (d && e.look !== "handDrawn") {
      N.selectAll("path").attr("style", d);
    }
    w.attr("transform", `translate(${-(m.width / 2) - 5 - (m.x - (m.left ?? 0))}, ${-(m.height / 2) + 5 - (m.y - (m.top ?? 0))})`);
    p(e, N);
    e.intersect = function (t) {
      return q.polygon(e, D, t);
    };
    return g;
  }
  async function tP(t, e) {
    let {
      labelStyles: h,
      nodeStyles: d
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = h;
    let {
      shapeSvg: g,
      bbox: w,
      label: x
    } = await u(t, e, f(e));
    let v = Math.max(w.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let b = Math.max(w.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let k = b / 4;
    let M = b + k;
    let $ = -v / 2;
    let S = -M / 2;
    let {
      cssStyles: D
    } = e;
    let W = m($ - 5, S + M + 5, $ + v - 5, S + M + 5, k, 0.8);
    let C = W == null ? undefined : W[W.length - 1];
    let P = [{
      x: $ - 5,
      y: S + 5
    }, {
      x: $ - 5,
      y: S + M + 5
    }, ...W, {
      x: $ + v - 5,
      y: C.y - 5
    }, {
      x: $ + v,
      y: C.y - 5
    }, {
      x: $ + v,
      y: C.y - 10
    }, {
      x: $ + v + 5,
      y: C.y - 10
    }, {
      x: $ + v + 5,
      y: S - 5
    }, {
      x: $ + 5,
      y: S - 5
    }, {
      x: $ + 5,
      y: S
    }, {
      x: $,
      y: S
    }, {
      x: $,
      y: S + 5
    }];
    let A = [{
      x: $,
      y: S + 5
    }, {
      x: $ + v - 5,
      y: S + 5
    }, {
      x: $ + v - 5,
      y: C.y - 5
    }, {
      x: $ + v,
      y: C.y - 5
    }, {
      x: $ + v,
      y: S
    }, {
      x: $,
      y: S
    }];
    let N = roughDrawingCore.roughLibrary.svg(g);
    let L = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      L.roughness = 0;
      L.fillStyle = "solid";
    }
    let B = y(P);
    let R = N.path(B, L);
    let _ = y(A);
    let T = N.path(_, L);
    let Z = g.insert(() => R, ":first-child");
    Z.insert(() => T);
    Z.attr("class", "basic label-container");
    if (D && e.look !== "handDrawn") {
      Z.selectAll("path").attr("style", D);
    }
    if (d && e.look !== "handDrawn") {
      Z.selectAll("path").attr("style", d);
    }
    Z.attr("transform", `translate(0,${-k / 2})`);
    x.attr("transform", `translate(${-(w.width / 2) - 5 - (w.x - (w.left ?? 0))}, ${-(w.height / 2) + 5 - k / 2 - (w.y - (w.top ?? 0))})`);
    p(e, Z);
    e.intersect = function (t) {
      return q.polygon(e, P, t);
    };
    return g;
  }
  async function tA(t, e, l) {
    let {
      config: {
        themeVariables: y
      }
    } = l;
    let {
      labelStyles: m,
      nodeStyles: w
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = m;
    if (!e.useHtmlLabels && mermaidConfigUtils.getConfig().flowchart?.htmlLabels === false) {
      e.centerLabel = true;
    }
    let {
      shapeSvg: x,
      bbox: v,
      label: b
    } = await u(t, e, f(e));
    let k = Math.max(v.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let M = Math.max(v.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let {
      cssStyles: $
    } = e;
    let S = roughDrawingCore.roughLibrary.svg(x);
    let D = mermaidNodeStyleUtils.userNodeOverrides(e, {
      fill: y.noteBkgColor,
      stroke: y.noteBorderColor
    });
    if (e.look !== "handDrawn") {
      D.roughness = 0;
      D.fillStyle = "solid";
    }
    let W = S.rectangle(-k / 2, -M / 2, k, M, D);
    let C = x.insert(() => W, ":first-child");
    C.attr("class", "basic label-container");
    if ($ && e.look !== "handDrawn") {
      C.selectAll("path").attr("style", $);
    }
    if (w && e.look !== "handDrawn") {
      C.selectAll("path").attr("style", w);
    }
    b.attr("transform", `translate(${-v.width / 2 - (v.x - (v.left ?? 0))}, ${-(v.height / 2) - (v.y - (v.top ?? 0))})`);
    p(e, C);
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return x;
  }
  mermaidConfigUtils.setName(tD, "linedCylinder");
  mermaidConfigUtils.setName(tW, "linedWaveEdgedRect");
  mermaidConfigUtils.setName(tC, "multiRect");
  mermaidConfigUtils.setName(tP, "multiWaveEdgedRectangle");
  mermaidConfigUtils.setName(tA, "note");
  var tN = mermaidConfigUtils.setName((t, e, l) => `M${t + l / 2},${e} L${t + l},${e - l / 2} L${t + l / 2},${e - l} L${t},${e - l / 2} Z`, "createDecisionBoxPathD");
  async function tL(t, e) {
    let l;
    let {
      labelStyles: a,
      nodeStyles: i
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = a;
    let {
      shapeSvg: n,
      bbox: s
    } = await u(t, e, f(e));
    let o = s.width + e.padding + (s.height + e.padding);
    let d = [{
      x: o / 2,
      y: 0
    }, {
      x: o,
      y: -o / 2
    }, {
      x: o / 2,
      y: -o
    }, {
      x: 0,
      y: -o / 2
    }];
    let {
      cssStyles: g
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(n);
      let a = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let i = tN(0, 0, o);
      let s = t.path(i, a);
      l = n.insert(() => s, ":first-child").attr("transform", `translate(${-o / 2 + 0.5}, ${o / 2})`);
      if (g) {
        l.attr("style", g);
      }
    } else {
      (l = G(n, o, o, d)).attr("transform", `translate(${-o / 2 + 0.5}, ${o / 2})`);
    }
    if (i) {
      l.attr("style", i);
    }
    p(e, l);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.debug("APA12 Intersect called SPLIT\npoint:", t, "\nnode:\n", e, "\nres:", q.polygon(e, d, t));
      return q.polygon(e, d, t);
    };
    return n;
  }
  async function tB(t, e) {
    let {
      labelStyles: h,
      nodeStyles: d
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = h;
    let {
      shapeSvg: g,
      bbox: m,
      label: w
    } = await u(t, e, f(e));
    let x = Math.max(m.width + (e.padding ?? 0), (e == null ? undefined : e.width) ?? 0);
    let v = Math.max(m.height + (e.padding ?? 0), (e == null ? undefined : e.height) ?? 0);
    let b = -x / 2;
    let k = -v / 2;
    let M = k / 2;
    let $ = [{
      x: b + M,
      y: k
    }, {
      x: b,
      y: 0
    }, {
      x: b + M,
      y: -k
    }, {
      x: -b,
      y: -k
    }, {
      x: -b,
      y: k
    }];
    let {
      cssStyles: S
    } = e;
    let D = roughDrawingCore.roughLibrary.svg(g);
    let W = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      W.roughness = 0;
      W.fillStyle = "solid";
    }
    let C = y($);
    let P = D.path(C, W);
    let A = g.insert(() => P, ":first-child");
    A.attr("class", "basic label-container");
    if (S && e.look !== "handDrawn") {
      A.selectAll("path").attr("style", S);
    }
    if (d && e.look !== "handDrawn") {
      A.selectAll("path").attr("style", d);
    }
    A.attr("transform", `translate(${-M / 2},0)`);
    w.attr("transform", `translate(${-M / 2 - m.width / 2 - (m.x - (m.left ?? 0))}, ${-(m.height / 2) - (m.y - (m.top ?? 0))})`);
    p(e, A);
    e.intersect = function (t) {
      return q.polygon(e, $, t);
    };
    return g;
  }
  async function tR(t, e) {
    var a;
    let i;
    let n;
    let s;
    let {
      labelStyles: o,
      nodeStyles: u
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = o;
    i = e.cssClasses ? "node " + e.cssClasses : "node default";
    let g = t.insert("g").attr("class", i).attr("id", e.domId || e.id);
    let f = g.insert("g");
    let y = g.insert("g").attr("class", "label").attr("style", u);
    let m = e.description;
    let w = e.label;
    let x = y.node().appendChild(await k(w, e.labelStyle, true, true));
    let v = {
      width: 0,
      height: 0
    };
    if (mermaidConfigUtils.evaluate((a = mermaidConfigUtils.getConfigAlias()) === null || a === undefined ? undefined : a.flowchart?.htmlLabels)) {
      let t = x.children[0];
      let e = axisAndZoomUtilities.select(x);
      v = t.getBoundingClientRect();
      e.attr("width", v.width);
      e.attr("height", v.height);
    }
    mermaidConfigUtils.logger.info("Text 2", m);
    let b = m || [];
    let $ = x.getBBox();
    let S = y.node().appendChild(await k(b.join ? b.join("<br/>") : b, e.labelStyle, true, true));
    let D = S.children[0];
    let W = axisAndZoomUtilities.select(S);
    v = D.getBoundingClientRect();
    W.attr("width", v.width);
    W.attr("height", v.height);
    let C = (e.padding || 0) / 2;
    axisAndZoomUtilities.select(S).attr("transform", "translate( " + (v.width > $.width ? 0 : ($.width - v.width) / 2) + ", " + ($.height + C + 5) + ")");
    axisAndZoomUtilities.select(x).attr("transform", "translate( " + (v.width < $.width ? 0 : -($.width - v.width) / 2) + ", 0)");
    v = y.node().getBBox();
    y.attr("transform", "translate(" + -v.width / 2 + ", " + (-v.height / 2 - C + 3) + ")");
    let P = v.width + (e.padding || 0);
    let A = v.height + (e.padding || 0);
    let N = -v.width / 2 - C;
    let L = -v.height / 2 - C;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(g);
      let l = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let a = t.path(M(N, L, P, A, e.rx || 0), l);
      let i = t.line(-v.width / 2 - C, -v.height / 2 - C + $.height + C, v.width / 2 + C, -v.height / 2 - C + $.height + C, l);
      s = g.insert(() => {
        mermaidConfigUtils.logger.debug("Rough node insert CXC", a);
        return i;
      }, ":first-child");
      n = g.insert(() => {
        mermaidConfigUtils.logger.debug("Rough node insert CXC", a);
        return a;
      }, ":first-child");
    } else {
      n = f.insert("rect", ":first-child");
      s = f.insert("line");
      n.attr("class", "outer title-state").attr("style", u).attr("x", -v.width / 2 - C).attr("y", -v.height / 2 - C).attr("width", v.width + (e.padding || 0)).attr("height", v.height + (e.padding || 0));
      s.attr("class", "divider").attr("x1", -v.width / 2 - C).attr("x2", v.width / 2 + C).attr("y1", -v.height / 2 - C + $.height + C).attr("y2", -v.height / 2 - C + $.height + C);
    }
    p(e, n);
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return g;
  }
  function t_(t, e, l, a, i, n, r) {
    let s = Math.atan2(a - e, l - t);
    let o = Math.sqrt(((l - t) / 2 / i) ** 2 + ((a - e) / 2 / n) ** 2);
    if (o > 1) {
      throw Error("The given radii are too small to create an arc between the points.");
    }
    let h = Math.sqrt(1 - o ** 2);
    let d = (t + l) / 2 + h * n * Math.sin(s) * (r ? -1 : 1);
    let c = (e + a) / 2 - h * i * Math.cos(s) * (r ? -1 : 1);
    let u = Math.atan2((e - c) / n, (t - d) / i);
    let g = Math.atan2((a - c) / n, (l - d) / i) - u;
    if (r && g < 0) {
      g += Math.PI * 2;
    }
    if (!r && g > 0) {
      g -= Math.PI * 2;
    }
    let p = [];
    for (let t = 0; t < 20; t++) {
      let e = u + t / 19 * g;
      let l = d + i * Math.cos(e);
      let a = c + n * Math.sin(e);
      p.push({
        x: l,
        y: a
      });
    }
    return p;
  }
  async function tT(t, e) {
    let {
      labelStyles: i,
      nodeStyles: n
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = i;
    let {
      shapeSvg: s,
      bbox: o
    } = await u(t, e, f(e));
    let h = (e == null ? undefined : e.padding) ?? 0;
    let d = (e == null ? undefined : e.padding) ?? 0;
    let g = ((e == null ? undefined : e.width) ? e == null ? undefined : e.width : o.width) + h * 2;
    let m = ((e == null ? undefined : e.height) ? e == null ? undefined : e.height : o.height) + d * 2;
    let {
      cssStyles: w
    } = e;
    let x = roughDrawingCore.roughLibrary.svg(s);
    let v = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      v.roughness = 0;
      v.fillStyle = "solid";
    }
    let b = [{
      x: -g / 2 + 5,
      y: -m / 2
    }, {
      x: g / 2 - 5,
      y: -m / 2
    }, ...t_(g / 2 - 5, -m / 2, g / 2, -m / 2 + 5, 5, 5, true), {
      x: g / 2,
      y: -m / 2 + 5
    }, {
      x: g / 2,
      y: m / 2 - 5
    }, ...t_(g / 2, m / 2 - 5, g / 2 - 5, m / 2, 5, 5, true), {
      x: g / 2 - 5,
      y: m / 2
    }, {
      x: -g / 2 + 5,
      y: m / 2
    }, ...t_(-g / 2 + 5, m / 2, -g / 2, m / 2 - 5, 5, 5, true), {
      x: -g / 2,
      y: m / 2 - 5
    }, {
      x: -g / 2,
      y: -m / 2 + 5
    }, ...t_(-g / 2, -m / 2 + 5, -g / 2 + 5, -m / 2, 5, 5, true)];
    let k = y(b);
    let M = x.path(k, v);
    let $ = s.insert(() => M, ":first-child");
    $.attr("class", "basic label-container outer-path");
    if (w && e.look !== "handDrawn") {
      $.selectChildren("path").attr("style", w);
    }
    if (n && e.look !== "handDrawn") {
      $.selectChildren("path").attr("style", n);
    }
    p(e, $);
    e.intersect = function (t) {
      return q.polygon(e, b, t);
    };
    return s;
  }
  async function tq(t, e) {
    let {
      labelStyles: m,
      nodeStyles: w
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = m;
    let {
      shapeSvg: x,
      bbox: v,
      label: b
    } = await u(t, e, f(e));
    let k = (e == null ? undefined : e.padding) ?? 0;
    let M = Math.max(v.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let $ = Math.max(v.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let S = -v.width / 2 - k;
    let D = -v.height / 2 - k;
    let {
      cssStyles: W
    } = e;
    let C = roughDrawingCore.roughLibrary.svg(x);
    let P = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      P.roughness = 0;
      P.fillStyle = "solid";
    }
    let A = C.polygon([{
      x: S,
      y: D
    }, {
      x: S + M + 8,
      y: D
    }, {
      x: S + M + 8,
      y: D + $
    }, {
      x: S - 8,
      y: D + $
    }, {
      x: S - 8,
      y: D
    }, {
      x: S,
      y: D
    }, {
      x: S,
      y: D + $
    }].map(t => [t.x, t.y]), P);
    let N = x.insert(() => A, ":first-child");
    N.attr("class", "basic label-container").attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(W));
    if (w && e.look !== "handDrawn") {
      N.selectAll("path").attr("style", w);
    }
    if (W && e.look !== "handDrawn") {
      N.selectAll("path").attr("style", w);
    }
    b.attr("transform", `translate(${-M / 2 + 4 + (e.padding ?? 0) - (v.x - (v.left ?? 0))},${-$ / 2 + (e.padding ?? 0) - (v.y - (v.top ?? 0))})`);
    p(e, N);
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return x;
  }
  async function tZ(t, e) {
    let {
      labelStyles: g,
      nodeStyles: m
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = g;
    let {
      shapeSvg: w,
      bbox: x,
      label: v
    } = await u(t, e, f(e));
    let b = Math.max(x.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let k = Math.max(x.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let M = -b / 2;
    let $ = -k / 2;
    let {
      cssStyles: S
    } = e;
    let D = roughDrawingCore.roughLibrary.svg(w);
    let W = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      W.roughness = 0;
      W.fillStyle = "solid";
    }
    let C = [{
      x: M,
      y: $
    }, {
      x: M,
      y: $ + k
    }, {
      x: M + b,
      y: $ + k
    }, {
      x: M + b,
      y: $ - k / 2
    }];
    let P = y(C);
    let A = D.path(P, W);
    let N = w.insert(() => A, ":first-child");
    N.attr("class", "basic label-container");
    if (S && e.look !== "handDrawn") {
      N.selectChildren("path").attr("style", S);
    }
    if (m && e.look !== "handDrawn") {
      N.selectChildren("path").attr("style", m);
    }
    N.attr("transform", `translate(0, ${k / 4})`);
    v.attr("transform", `translate(${-b / 2 + (e.padding ?? 0) - (x.x - (x.left ?? 0))}, ${-k / 4 + (e.padding ?? 0) - (x.y - (x.top ?? 0))})`);
    p(e, N);
    e.intersect = function (t) {
      return q.polygon(e, C, t);
    };
    return w;
  }
  async function tO(t, e) {
    let l = {
      rx: 0,
      ry: 0,
      classes: "",
      labelPaddingX: ((e == null ? undefined : e.padding) || 0) * 2,
      labelPaddingY: +((e == null ? undefined : e.padding) || 0)
    };
    return tw(t, e, l);
  }
  async function tI(t, e) {
    let {
      labelStyles: l,
      nodeStyles: a
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = l;
    let {
      shapeSvg: i,
      bbox: n
    } = await u(t, e, f(e));
    let s = n.height + e.padding;
    let o = n.width + s / 4 + e.padding;
    let h = s / 2;
    let {
      cssStyles: d
    } = e;
    let g = roughDrawingCore.roughLibrary.svg(i);
    let m = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      m.roughness = 0;
      m.fillStyle = "solid";
    }
    let x = [{
      x: -o / 2 + h,
      y: -s / 2
    }, {
      x: o / 2 - h,
      y: -s / 2
    }, ...w(-o / 2 + h, 0, h, 50, 90, 270), {
      x: o / 2 - h,
      y: s / 2
    }, ...w(o / 2 - h, 0, h, 50, 270, 450)];
    let v = y(x);
    let b = g.path(v, m);
    let k = i.insert(() => b, ":first-child");
    k.attr("class", "basic label-container outer-path");
    if (d && e.look !== "handDrawn") {
      k.selectChildren("path").attr("style", d);
    }
    if (a && e.look !== "handDrawn") {
      k.selectChildren("path").attr("style", a);
    }
    p(e, k);
    e.intersect = function (t) {
      return q.polygon(e, x, t);
    };
    return i;
  }
  async function tG(t, e) {
    return tw(t, e, {
      rx: 5,
      ry: 5,
      classes: "flowchart-node"
    });
  }
  function tE(t, e, l) {
    let {
      config: {
        themeVariables: a
      }
    } = l;
    let {
      labelStyles: i,
      nodeStyles: n
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = i;
    let {
      cssStyles: s
    } = e;
    let {
      lineColor: o,
      stateBorder: h,
      nodeBorder: d
    } = a;
    let u = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id);
    let g = roughDrawingCore.roughLibrary.svg(u);
    let f = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      f.roughness = 0;
      f.fillStyle = "solid";
    }
    let y = g.circle(0, 0, 14, {
      ...f,
      stroke: o,
      strokeWidth: 2
    });
    let m = h ?? d;
    let w = g.circle(0, 0, 5, {
      ...f,
      fill: m,
      stroke: m,
      strokeWidth: 2,
      fillStyle: "solid"
    });
    let x = u.insert(() => y, ":first-child");
    x.insert(() => w);
    if (s) {
      x.selectAll("path").attr("style", s);
    }
    if (n) {
      x.selectAll("path").attr("style", n);
    }
    p(e, x);
    e.intersect = function (t) {
      return q.circle(e, 7, t);
    };
    return u;
  }
  function tU(t, e, l) {
    let a;
    let {
      config: {
        themeVariables: i
      }
    } = l;
    let {
      lineColor: n
    } = i;
    let s = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id);
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(s).circle(0, 0, 14, mermaidNodeStyleUtils.solidStateFill(n));
      (a = s.insert(() => t)).attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    } else {
      (a = s.insert("circle", ":first-child")).attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    }
    p(e, a);
    e.intersect = function (t) {
      return q.circle(e, 7, t);
    };
    return s;
  }
  async function tF(t, e) {
    let {
      labelStyles: l,
      nodeStyles: a
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = l;
    let {
      shapeSvg: i,
      bbox: n
    } = await u(t, e, f(e));
    let s = ((e == null ? undefined : e.padding) || 0) / 2;
    let h = n.width + e.padding;
    let d = n.height + e.padding;
    let g = -n.width / 2 - s;
    let y = -n.height / 2 - s;
    let m = [{
      x: 0,
      y: 0
    }, {
      x: h,
      y: 0
    }, {
      x: h,
      y: -d
    }, {
      x: 0,
      y: -d
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
      y: -d
    }, {
      x: -8,
      y: -d
    }, {
      x: -8,
      y: 0
    }];
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(i);
      let l = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let a = t.rectangle(g - 8, y, h + 16, d, l);
      let n = t.line(g, y, g, y + d, l);
      let s = t.line(g + h, y, g + h, y + d, l);
      i.insert(() => n, ":first-child");
      i.insert(() => s, ":first-child");
      let u = i.insert(() => a, ":first-child");
      let {
        cssStyles: f
      } = e;
      u.attr("class", "basic label-container").attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(f));
      p(e, u);
    } else {
      let t = G(i, h, d, m);
      if (a) {
        t.attr("style", a);
      }
      p(e, t);
    }
    e.intersect = function (t) {
      return q.polygon(e, m, t);
    };
    return i;
  }
  async function tj(t, e) {
    let {
      labelStyles: s,
      nodeStyles: o
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = s;
    let {
      shapeSvg: h,
      bbox: d
    } = await u(t, e, f(e));
    let g = Math.max(d.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let m = Math.max(d.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let w = -g / 2;
    let x = -m / 2;
    let v = m * 0.2;
    let {
      cssStyles: b
    } = e;
    let k = roughDrawingCore.roughLibrary.svg(h);
    let M = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    let $ = [{
      x: w - v / 2,
      y: x
    }, {
      x: w + g + v / 2,
      y: x
    }, {
      x: w + g + v / 2,
      y: x + m
    }, {
      x: w - v / 2,
      y: x + m
    }];
    if (e.look !== "handDrawn") {
      M.roughness = 0;
      M.fillStyle = "solid";
    }
    let S = y($);
    let D = k.path(S, M);
    let W = y([{
      x: w + g - v / 2,
      y: x + m
    }, {
      x: w + g + v / 2,
      y: x + m
    }, {
      x: w + g + v / 2,
      y: x + m - m * 0.2
    }]);
    let C = k.path(W, {
      ...M,
      fillStyle: "solid"
    });
    let P = h.insert(() => C, ":first-child");
    P.insert(() => D, ":first-child");
    P.attr("class", "basic label-container");
    if (b && e.look !== "handDrawn") {
      P.selectAll("path").attr("style", b);
    }
    if (o && e.look !== "handDrawn") {
      P.selectAll("path").attr("style", o);
    }
    p(e, P);
    e.intersect = function (t) {
      return q.polygon(e, $, t);
    };
    return h;
  }
  async function tz(t, e) {
    let {
      labelStyles: g,
      nodeStyles: w
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = g;
    let {
      shapeSvg: x,
      bbox: v,
      label: b
    } = await u(t, e, f(e));
    let k = Math.max(v.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let M = Math.max(v.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let $ = M / 4;
    let S = k * 0.2;
    let D = M * 0.2;
    let W = M + $;
    let {
      cssStyles: C
    } = e;
    let P = roughDrawingCore.roughLibrary.svg(x);
    let A = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      A.roughness = 0;
      A.fillStyle = "solid";
    }
    let N = [{
      x: -k / 2 - k / 2 * 0.1,
      y: W / 2
    }, ...m(-k / 2 - k / 2 * 0.1, W / 2, k / 2 + k / 2 * 0.1, W / 2, $, 0.8), {
      x: k / 2 + k / 2 * 0.1,
      y: -W / 2
    }, {
      x: -k / 2 - k / 2 * 0.1,
      y: -W / 2
    }];
    let L = -k / 2 + k / 2 * 0.1;
    let B = -W / 2 - D * 0.4;
    let R = [{
      x: L + k - S,
      y: (B + M) * 1.4
    }, {
      x: L + k,
      y: B + M - D
    }, {
      x: L + k,
      y: (B + M) * 0.9
    }, ...m(L + k, (B + M) * 1.3, L + k - S, (B + M) * 1.5, -(M * 0.03), 0.5)];
    let _ = y(N);
    let T = P.path(_, A);
    let Z = y(R);
    let O = P.path(Z, {
      ...A,
      fillStyle: "solid"
    });
    let I = x.insert(() => O, ":first-child");
    I.insert(() => T, ":first-child");
    I.attr("class", "basic label-container");
    if (C && e.look !== "handDrawn") {
      I.selectAll("path").attr("style", C);
    }
    if (w && e.look !== "handDrawn") {
      I.selectAll("path").attr("style", w);
    }
    I.attr("transform", `translate(0,${-$ / 2})`);
    b.attr("transform", `translate(${-k / 2 + (e.padding ?? 0) - (v.x - (v.left ?? 0))},${-M / 2 + (e.padding ?? 0) - $ / 2 - (v.y - (v.top ?? 0))})`);
    p(e, I);
    e.intersect = function (t) {
      return q.polygon(e, N, t);
    };
    return x;
  }
  async function tH(t, e) {
    let {
      labelStyles: l,
      nodeStyles: a
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = l;
    let {
      shapeSvg: i,
      bbox: n
    } = await u(t, e, f(e));
    let s = Math.max(n.width + e.padding, (e == null ? undefined : e.width) || 0);
    let o = Math.max(n.height + e.padding, (e == null ? undefined : e.height) || 0);
    let h = i.insert("rect", ":first-child");
    h.attr("class", "text").attr("style", a).attr("rx", 0).attr("ry", 0).attr("x", -s / 2).attr("y", -o / 2).attr("width", s).attr("height", o);
    p(e, h);
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return i;
  }
  mermaidConfigUtils.setName(tL, "question");
  mermaidConfigUtils.setName(tB, "rect_left_inv_arrow");
  mermaidConfigUtils.setName(tR, "rectWithTitle");
  mermaidConfigUtils.setName(t_, "generateArcPoints");
  mermaidConfigUtils.setName(tT, "roundedRect");
  mermaidConfigUtils.setName(tq, "shadedProcess");
  mermaidConfigUtils.setName(tZ, "slopedRect");
  mermaidConfigUtils.setName(tO, "squareRect");
  mermaidConfigUtils.setName(tI, "stadium");
  mermaidConfigUtils.setName(tG, "state");
  mermaidConfigUtils.setName(tE, "stateEnd");
  mermaidConfigUtils.setName(tU, "stateStart");
  mermaidConfigUtils.setName(tF, "subroutine");
  mermaidConfigUtils.setName(tj, "taggedRect");
  mermaidConfigUtils.setName(tz, "taggedWaveEdgedRectangle");
  mermaidConfigUtils.setName(tH, "text");
  var tV = mermaidConfigUtils.setName((t, e, l, a, i, n) => `M${t},${e}
    a${i},${n} 0,0,1 0,${-a}
    l${l},0
    a${i},${n} 0,0,1 0,${a}
    M${l},${-a}
    a${i},${n} 0,0,0 0,${a}
    l${-l},0`, "createCylinderPathD");
  var tY = mermaidConfigUtils.setName((t, e, l, a, i, n) => `M${t},${e} M${t + l},${e} a${i},${n} 0,0,0 0,${-a} l${-l},0 a${i},${n} 0,0,0 0,${a} l${l},0`, "createOuterCylinderPathD");
  var tX = mermaidConfigUtils.setName((t, e, l, a, i, n) => `M${t + l / 2},${-a / 2} a${i},${n} 0,0,0 0,${a}`, "createInnerCylinderPathD");
  async function tJ(t, e) {
    let i;
    let {
      labelStyles: n,
      nodeStyles: s
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = n;
    let {
      shapeSvg: h,
      bbox: d,
      label: g,
      halfPadding: y
    } = await u(t, e, f(e));
    let m = e.look === "neo" ? y * 2 : y;
    let w = d.height + m;
    let x = w / 2;
    let v = x / (2.5 + w / 50);
    let b = d.width + v + m;
    let {
      cssStyles: k
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(h);
      let l = tY(0, 0, b, w, v, x);
      let a = tX(0, 0, b, w, v, x);
      let n = t.path(l, mermaidNodeStyleUtils.userNodeOverrides(e, {}));
      let s = t.path(a, mermaidNodeStyleUtils.userNodeOverrides(e, {
        fill: "none"
      }));
      i = h.insert(() => s, ":first-child");
      (i = h.insert(() => n, ":first-child")).attr("class", "basic label-container");
      if (k) {
        i.attr("style", k);
      }
    } else {
      let t = tV(0, 0, b, w, v, x);
      (i = h.insert("path", ":first-child").attr("d", t).attr("class", "basic label-container").attr("style", mermaidTextLayoutUtils.handleUndefinedAttr(k)).attr("style", s)).attr("class", "basic label-container");
      if (k) {
        i.selectAll("path").attr("style", k);
      }
      if (s) {
        i.selectAll("path").attr("style", s);
      }
    }
    i.attr("label-offset-x", v);
    i.attr("transform", `translate(${-b / 2}, ${w / 2} )`);
    g.attr("transform", `translate(${-(d.width / 2) - v - (d.x - (d.left ?? 0))}, ${-(d.height / 2) - (d.y - (d.top ?? 0))})`);
    p(e, i);
    e.intersect = function (t) {
      let o = q.rect(e, t);
      let h = o.y - (e.y ?? 0);
      if (x != 0 && (Math.abs(h) < (e.height ?? 0) / 2 || Math.abs(h) == (e.height ?? 0) / 2 && Math.abs(o.x - (e.x ?? 0)) > (e.width ?? 0) / 2 - v)) {
        let l = v * v * (1 - h * h / (x * x));
        if (l != 0) {
          l = Math.sqrt(Math.abs(l));
        }
        l = v - l;
        if (t.x - (e.x ?? 0) > 0) {
          l = -l;
        }
        o.x += l;
      }
      return o;
    };
    return h;
  }
  async function tQ(t, e) {
    let l;
    let {
      labelStyles: a,
      nodeStyles: i
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = a;
    let {
      shapeSvg: n,
      bbox: s
    } = await u(t, e, f(e));
    let o = s.width + e.padding;
    let h = s.height + e.padding;
    let d = [{
      x: h * -3 / 6,
      y: 0
    }, {
      x: o + h * 3 / 6,
      y: 0
    }, {
      x: o,
      y: -h
    }, {
      x: 0,
      y: -h
    }];
    let {
      cssStyles: g
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(n);
      let a = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let i = y(d);
      let s = t.path(i, a);
      l = n.insert(() => s, ":first-child").attr("transform", `translate(${-o / 2}, ${h / 2})`);
      if (g) {
        l.attr("style", g);
      }
    } else {
      l = G(n, o, h, d);
    }
    if (i) {
      l.attr("style", i);
    }
    e.width = o;
    e.height = h;
    p(e, l);
    e.intersect = function (t) {
      return q.polygon(e, d, t);
    };
    return n;
  }
  async function tK(t, e) {
    let {
      labelStyles: s,
      nodeStyles: o
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = s;
    let {
      shapeSvg: h,
      bbox: d
    } = await u(t, e, f(e));
    let g = Math.max(60, d.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let m = Math.max(20, d.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let {
      cssStyles: w
    } = e;
    let x = roughDrawingCore.roughLibrary.svg(h);
    let v = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      v.roughness = 0;
      v.fillStyle = "solid";
    }
    let b = [{
      x: -g / 2 * 0.8,
      y: -m / 2
    }, {
      x: g / 2 * 0.8,
      y: -m / 2
    }, {
      x: g / 2,
      y: -m / 2 * 0.6
    }, {
      x: g / 2,
      y: m / 2
    }, {
      x: -g / 2,
      y: m / 2
    }, {
      x: -g / 2,
      y: -m / 2 * 0.6
    }];
    let k = y(b);
    let M = x.path(k, v);
    let $ = h.insert(() => M, ":first-child");
    $.attr("class", "basic label-container");
    if (w && e.look !== "handDrawn") {
      $.selectChildren("path").attr("style", w);
    }
    if (o && e.look !== "handDrawn") {
      $.selectChildren("path").attr("style", o);
    }
    p(e, $);
    e.intersect = function (t) {
      return q.polygon(e, b, t);
    };
    return h;
  }
  async function t0(t, e) {
    let {
      labelStyles: o,
      nodeStyles: d
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = o;
    let {
      shapeSvg: g,
      bbox: m,
      label: w
    } = await u(t, e, f(e));
    let x = mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias().flowchart?.htmlLabels);
    let v = m.width + (e.padding ?? 0);
    let b = v + m.height;
    let k = v + m.height;
    let M = [{
      x: 0,
      y: 0
    }, {
      x: k,
      y: 0
    }, {
      x: k / 2,
      y: -b
    }];
    let {
      cssStyles: $
    } = e;
    let S = roughDrawingCore.roughLibrary.svg(g);
    let D = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      D.roughness = 0;
      D.fillStyle = "solid";
    }
    let W = y(M);
    let C = S.path(W, D);
    let P = g.insert(() => C, ":first-child").attr("transform", `translate(${-b / 2}, ${b / 2})`);
    if ($ && e.look !== "handDrawn") {
      P.selectChildren("path").attr("style", $);
    }
    if (d && e.look !== "handDrawn") {
      P.selectChildren("path").attr("style", d);
    }
    e.width = v;
    e.height = b;
    p(e, P);
    w.attr("transform", `translate(${-m.width / 2 - (m.x - (m.left ?? 0))}, ${b / 2 - (m.height + (e.padding ?? 0) / (x ? 2 : 1) - (m.y - (m.top ?? 0)))})`);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("Triangle intersect", e, M, t);
      return q.polygon(e, M, t);
    };
    return g;
  }
  async function t2(t, e) {
    let {
      labelStyles: g,
      nodeStyles: w
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = g;
    let {
      shapeSvg: x,
      bbox: v,
      label: b
    } = await u(t, e, f(e));
    let k = Math.max(v.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let M = Math.max(v.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let $ = M / 8;
    let S = M + $;
    let {
      cssStyles: D
    } = e;
    let W = 70 - k;
    let C = W > 0 ? W / 2 : 0;
    let P = roughDrawingCore.roughLibrary.svg(x);
    let A = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      A.roughness = 0;
      A.fillStyle = "solid";
    }
    let N = [{
      x: -k / 2 - C,
      y: S / 2
    }, ...m(-k / 2 - C, S / 2, k / 2 + C, S / 2, $, 0.8), {
      x: k / 2 + C,
      y: -S / 2
    }, {
      x: -k / 2 - C,
      y: -S / 2
    }];
    let L = y(N);
    let B = P.path(L, A);
    let R = x.insert(() => B, ":first-child");
    R.attr("class", "basic label-container");
    if (D && e.look !== "handDrawn") {
      R.selectAll("path").attr("style", D);
    }
    if (w && e.look !== "handDrawn") {
      R.selectAll("path").attr("style", w);
    }
    R.attr("transform", `translate(0,${-$ / 2})`);
    b.attr("transform", `translate(${-k / 2 + (e.padding ?? 0) - (v.x - (v.left ?? 0))},${-M / 2 + (e.padding ?? 0) - $ - (v.y - (v.top ?? 0))})`);
    p(e, R);
    e.intersect = function (t) {
      return q.polygon(e, N, t);
    };
    return x;
  }
  async function t1(t, e) {
    let {
      labelStyles: s,
      nodeStyles: o
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = s;
    let {
      shapeSvg: h,
      bbox: d
    } = await u(t, e, f(e));
    let g = Math.max(d.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let w = Math.max(d.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let x = g / w;
    let v = g;
    let b = w;
    if (v > b * x) {
      b = v / x;
    } else {
      v = b * x;
    }
    v = Math.max(v, 100);
    let k = Math.min((b = Math.max(b, 50)) * 0.2, b / 4);
    let M = b + k * 2;
    let {
      cssStyles: $
    } = e;
    let S = roughDrawingCore.roughLibrary.svg(h);
    let D = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      D.roughness = 0;
      D.fillStyle = "solid";
    }
    let W = [{
      x: -v / 2,
      y: M / 2
    }, ...m(-v / 2, M / 2, v / 2, M / 2, k, 1), {
      x: v / 2,
      y: -M / 2
    }, ...m(v / 2, -M / 2, -v / 2, -M / 2, k, -1)];
    let C = y(W);
    let P = S.path(C, D);
    let A = h.insert(() => P, ":first-child");
    A.attr("class", "basic label-container");
    if ($ && e.look !== "handDrawn") {
      A.selectAll("path").attr("style", $);
    }
    if (o && e.look !== "handDrawn") {
      A.selectAll("path").attr("style", o);
    }
    p(e, A);
    e.intersect = function (t) {
      return q.polygon(e, W, t);
    };
    return h;
  }
  async function t5(t, e) {
    let {
      labelStyles: h,
      nodeStyles: d
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = h;
    let {
      shapeSvg: g,
      bbox: y,
      label: m
    } = await u(t, e, f(e));
    let w = Math.max(y.width + (e.padding ?? 0) * 2, (e == null ? undefined : e.width) ?? 0);
    let x = Math.max(y.height + (e.padding ?? 0) * 2, (e == null ? undefined : e.height) ?? 0);
    let v = -w / 2;
    let b = -x / 2;
    let {
      cssStyles: k
    } = e;
    let M = roughDrawingCore.roughLibrary.svg(g);
    let $ = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    let S = [{
      x: v - 5,
      y: b - 5
    }, {
      x: v - 5,
      y: b + x
    }, {
      x: v + w,
      y: b + x
    }, {
      x: v + w,
      y: b - 5
    }];
    let D = `M${v - 5},${b - 5} L${v + w},${b - 5} L${v + w},${b + x} L${v - 5},${b + x} L${v - 5},${b - 5}
                M${v - 5},${b} L${v + w},${b}
                M${v},${b - 5} L${v},${b + x}`;
    if (e.look !== "handDrawn") {
      $.roughness = 0;
      $.fillStyle = "solid";
    }
    let W = M.path(D, $);
    let C = g.insert(() => W, ":first-child");
    C.attr("transform", "translate(2.5, 2.5)");
    C.attr("class", "basic label-container");
    if (k && e.look !== "handDrawn") {
      C.selectAll("path").attr("style", k);
    }
    if (d && e.look !== "handDrawn") {
      C.selectAll("path").attr("style", d);
    }
    m.attr("transform", `translate(${-(y.width / 2) + 2.5 - (y.x - (y.left ?? 0))}, ${-(y.height / 2) + 2.5 - (y.y - (y.top ?? 0))})`);
    p(e, C);
    e.intersect = function (t) {
      return q.polygon(e, S, t);
    };
    return g;
  }
  async function t3(t, e) {
    var s;
    var g;
    if (e.alias) {
      e.label = e.alias;
    }
    if (e.look === "handDrawn") {
      let {
        themeVariables: l
      } = mermaidConfigUtils.getConfig();
      let {
        background: a
      } = l;
      let i = {
        ...e,
        id: e.id + "-background",
        look: "default",
        cssStyles: ["stroke: none", `fill: ${a}`]
      };
      await t3(t, i);
    }
    let y = mermaidConfigUtils.getConfig();
    e.useHtmlLabels = y.htmlLabels;
    let m = y.er?.diagramPadding ?? 10;
    let w = y.er?.entityPadding ?? 6;
    let {
      cssStyles: x
    } = e;
    let {
      labelStyles: v,
      nodeStyles: b
    } = mermaidNodeStyleUtils.styles2String(e);
    if (e.attributes.length === 0 && e.label) {
      let l = {
        rx: 0,
        ry: 0,
        labelPaddingX: m,
        labelPaddingY: m * 1.5,
        classes: ""
      };
      if (mermaidTextLayoutUtils.calculateTextWidth(e.label, y) + l.labelPaddingX * 2 < y.er.minEntityWidth) {
        e.width = y.er.minEntityWidth;
      }
      let a = await tw(t, e, l);
      if (!mermaidConfigUtils.evaluate(y.htmlLabels)) {
        let t = a.select("text");
        let e = (s = t.node()) === null || s === undefined ? undefined : s.getBBox();
        t.attr("transform", `translate(${-e.width / 2}, 0)`);
      }
      return a;
    }
    if (!y.htmlLabels) {
      m *= 1.25;
      w *= 1.25;
    }
    let k = f(e);
    k ||= "node default";
    let M = t.insert("g").attr("class", k).attr("id", e.domId || e.id);
    let $ = await t4(M, e.label ?? "", y, 0, 0, ["name"], v);
    $.height += w;
    let S = 0;
    let D = [];
    let W = [];
    let C = 0;
    let P = 0;
    let A = 0;
    let N = 0;
    let L = true;
    let B = true;
    for (let t of e.attributes) {
      let e = await t4(M, t.type, y, 0, S, ["attribute-type"], v);
      C = Math.max(C, e.width + m);
      let l = await t4(M, t.name, y, 0, S, ["attribute-name"], v);
      P = Math.max(P, l.width + m);
      let a = await t4(M, t.keys.join(), y, 0, S, ["attribute-keys"], v);
      A = Math.max(A, a.width + m);
      let i = await t4(M, t.comment, y, 0, S, ["attribute-comment"], v);
      N = Math.max(N, i.width + m);
      let n = Math.max(e.height, l.height, a.height, i.height) + w;
      W.push({
        yOffset: S,
        rowHeight: n
      });
      S += n;
    }
    let R = 4;
    if (A <= m) {
      L = false;
      A = 0;
      R--;
    }
    if (N <= m) {
      B = false;
      N = 0;
      R--;
    }
    let _ = M.node().getBBox();
    if ($.width + m * 2 - (C + P + A + N) > 0) {
      let t = $.width + m * 2 - (C + P + A + N);
      C += t / R;
      P += t / R;
      if (A > 0) {
        A += t / R;
      }
      if (N > 0) {
        N += t / R;
      }
    }
    let T = C + P + A + N;
    let Z = roughDrawingCore.roughLibrary.svg(M);
    let O = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      O.roughness = 0;
      O.fillStyle = "solid";
    }
    let I = 0;
    if (W.length > 0) {
      I = W.reduce((t, e) => {
        return t + ((e == null ? undefined : e.rowHeight) ?? 0);
      }, 0);
    }
    let G = Math.max(_.width + m * 2, (e == null ? undefined : e.width) || 0, T);
    let E = Math.max((I ?? 0) + $.height, (e == null ? undefined : e.height) || 0);
    let U = -G / 2;
    let F = -E / 2;
    M.selectAll("g:not(:first-child)").each((t, e, l) => {
      let a = axisAndZoomUtilities.select(l[e]);
      let i = a.attr("transform");
      let n = 0;
      let r = 0;
      if (i) {
        let t = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(i);
        if (t) {
          n = parseFloat(t[1]);
          r = parseFloat(t[2]);
          if (a.attr("class").includes("attribute-name")) {
            n += C;
          } else if (a.attr("class").includes("attribute-keys")) {
            n += C + P;
          } else if (a.attr("class").includes("attribute-comment")) {
            n += C + P + A;
          }
        }
      }
      a.attr("transform", `translate(${U + m / 2 + n}, ${r + F + $.height + w / 2})`);
    });
    M.select(".name").attr("transform", "translate(" + -$.width / 2 + ", " + (F + w / 2) + ")");
    let j = Z.rectangle(U, F, G, E, O);
    let z = M.insert(() => j, ":first-child").attr("style", x.join(""));
    let {
      themeVariables: H
    } = mermaidConfigUtils.getConfig();
    let {
      rowEven: V,
      rowOdd: Y,
      nodeBorder: X
    } = H;
    D.push(0);
    for (let [t, e] of W.entries()) {
      let l = (t + 1) % 2 == 0 && e.yOffset !== 0;
      let a = Z.rectangle(U, $.height + F + (e == null ? undefined : e.yOffset), G, e == null ? undefined : e.rowHeight, {
        ...O,
        fill: l ? V : Y,
        stroke: X
      });
      M.insert(() => a, "g.label").attr("style", x.join("")).attr("class", `row-rect-${l ? "even" : "odd"}`);
    }
    let J = Z.line(U, $.height + F, G + U, $.height + F, O);
    M.insert(() => J).attr("class", "divider");
    J = Z.line(C + U, $.height + F, C + U, E + F, O);
    M.insert(() => J).attr("class", "divider");
    if (L) {
      J = Z.line(C + P + U, $.height + F, C + P + U, E + F, O);
      M.insert(() => J).attr("class", "divider");
    }
    if (B) {
      J = Z.line(C + P + A + U, $.height + F, C + P + A + U, E + F, O);
      M.insert(() => J).attr("class", "divider");
    }
    for (let t of D) {
      J = Z.line(U, $.height + F + t, G + U, $.height + F + t, O);
      M.insert(() => J).attr("class", "divider");
    }
    p(e, z);
    if (b && e.look !== "handDrawn") {
      let t = b.split(";");
      let e = t == null ? undefined : (g = t.filter(t => t.includes("stroke"))) === null || g === undefined ? undefined : g.map(t => `${t}`).join("; ");
      M.selectAll("path").attr("style", e ?? "");
      M.selectAll(".row-rect-even path").attr("style", b);
    }
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return M;
  }
  async function t4(t, e, l, a = 0, i = 0, n = [], r = "") {
    let c = t.insert("g").attr("class", `label ${n.join(" ")}`).attr("transform", `translate(${a}, ${i})`).attr("style", r);
    if (e !== mermaidConfigUtils.parseGenericTypes(e)) {
      e = (e = mermaidConfigUtils.parseGenericTypes(e)).replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    }
    let u = c.node().appendChild(await mermaidTextIconUtils.replaceIconSubstring(c, e, {
      width: mermaidTextLayoutUtils.calculateTextWidth(e, l) + 100,
      style: r,
      useHtmlLabels: l.htmlLabels
    }, l));
    if (e.includes("&lt;") || e.includes("&gt;")) {
      let t = u.children[0];
      for (t.textContent = t.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); t.childNodes[0];) {
        (t = t.childNodes[0]).textContent = t.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
      }
    }
    let g = u.getBBox();
    if (mermaidConfigUtils.evaluate(l.htmlLabels)) {
      let t = u.children[0];
      t.style.textAlign = "start";
      let e = axisAndZoomUtilities.select(u);
      g = t.getBoundingClientRect();
      e.attr("width", g.width);
      e.attr("height", g.height);
    }
    return g;
  }
  async function t8(t, e, l, i, n = (a = l.class.padding) !== null && a !== undefined ? a : 12) {
    let r = !i * 3;
    let s = t.insert("g").attr("class", f(e)).attr("id", e.domId || e.id);
    let o = null;
    let h = null;
    let d = null;
    let c = null;
    let u = 0;
    let g = 0;
    let p = 0;
    o = s.insert("g").attr("class", "annotation-group text");
    if (e.annotations.length > 0) {
      let t = e.annotations[0];
      await t9(o, {
        text: `\xab${t}\xbb`
      }, 0);
      u = o.node().getBBox().height;
    }
    h = s.insert("g").attr("class", "label-group text");
    await t9(h, e, 0, ["font-weight: bolder"]);
    let y = h.node().getBBox();
    g = y.height;
    d = s.insert("g").attr("class", "members-group text");
    let m = 0;
    for (let t of e.members) {
      let e = await t9(d, t, m, [t.parseClassifier()]);
      m += e + r;
    }
    if ((p = d.node().getBBox().height) <= 0) {
      p = n / 2;
    }
    c = s.insert("g").attr("class", "methods-group text");
    let w = 0;
    for (let t of e.methods) {
      let e = await t9(c, t, w, [t.parseClassifier()]);
      w += e + r;
    }
    let x = s.node().getBBox();
    if (o !== null) {
      let t = o.node().getBBox();
      o.attr("transform", `translate(${-t.width / 2})`);
    }
    h.attr("transform", `translate(${-y.width / 2}, ${u})`);
    x = s.node().getBBox();
    d.attr("transform", `translate(0, ${u + g + n * 2})`);
    x = s.node().getBBox();
    c.attr("transform", `translate(0, ${u + g + (p ? p + n * 4 : n * 2)})`);
    x = s.node().getBBox();
    return {
      shapeSvg: s,
      bbox: x
    };
  }
  async function t9(t, e, l) {
    var a;
    let i;
    let n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    let r = t.insert("g").attr("class", "label").attr("style", n.join("; "));
    let c = mermaidConfigUtils.getConfig();
    let u = "useHtmlLabels" in e ? e.useHtmlLabels : (a = mermaidConfigUtils.evaluate(c.htmlLabels)) === null || a === undefined || a;
    let g = "";
    g = "text" in e ? e.text : e.label;
    if (!u && g.startsWith("\\")) {
      g = g.substring(1);
    }
    if (mermaidConfigUtils.hasKatex(g)) {
      u = true;
    }
    let p = await mermaidTextIconUtils.replaceIconSubstring(r, mermaidConfigUtils.sanitizeTextCfg(mermaidTextLayoutUtils.decodeEntities(g)), {
      width: mermaidTextLayoutUtils.calculateTextWidth(g, c) + 50,
      classes: "markdown-node-label",
      useHtmlLabels: u
    }, c);
    let f = 1;
    if (u) {
      let t = p.children[0];
      let e = axisAndZoomUtilities.select(p);
      f = t.innerHTML.split("<br>").length;
      if (t.innerHTML.includes("</math>")) {
        f += t.innerHTML.split("<mrow>").length - 1;
      }
      let l = t.getElementsByTagName("img");
      if (l) {
        let t = g.replace(/<img[^>]*>/g, "").trim() === "";
        await Promise.all([...l].map(e => new Promise(l => {
          function a() {
            e.style.display = "flex";
            e.style.flexDirection = "column";
            if (t) {
              var a;
              let t = parseInt(((a = c.fontSize) === null || a === undefined ? undefined : a.toString()) ?? window.getComputedStyle(document.body).fontSize, 10) * 5 + "px";
              e.style.minWidth = t;
              e.style.maxWidth = t;
            } else {
              e.style.width = "100%";
            }
            l(e);
          }
          mermaidConfigUtils.setName(a, "setupImage");
          setTimeout(() => {
            if (e.complete) {
              a();
            }
          });
          e.addEventListener("error", a);
          e.addEventListener("load", a);
        })));
      }
      i = t.getBoundingClientRect();
      e.attr("width", i.width);
      e.attr("height", i.height);
    } else {
      if (n.includes("font-weight: bolder")) {
        axisAndZoomUtilities.select(p).selectAll("tspan").attr("font-weight", "");
      }
      f = p.children.length;
      let t = p.children[0];
      if (p.textContent === "" || p.textContent.includes("&gt")) {
        t.textContent = g[0] + g.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim();
        if (g[1] === " ") {
          t.textContent = t.textContent[0] + " " + t.textContent.substring(1);
        }
      }
      if (t.textContent === "undefined") {
        t.textContent = "";
      }
      i = p.getBBox();
    }
    r.attr("transform", "translate(0," + (-i.height / (f * 2) + l) + ")");
    return i.height;
  }
  async function t6(t, e) {
    var l;
    var s;
    let f = mermaidConfigUtils.getConfigAlias();
    let y = f.class.padding ?? 12;
    let m = (s = e.useHtmlLabels ?? mermaidConfigUtils.evaluate(f.htmlLabels)) === null || s === undefined || s;
    e.annotations = e.annotations ?? [];
    e.members = e.members ?? [];
    e.methods = e.methods ?? [];
    let {
      shapeSvg: w,
      bbox: x
    } = await t8(t, e, f, m, y);
    let {
      labelStyles: v,
      nodeStyles: b
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = v;
    e.cssStyles = e.styles || "";
    let k = ((l = e.styles) === null || l === undefined ? undefined : l.join(";")) || b || "";
    e.cssStyles ||= k.replaceAll("!important", "").split(";");
    let M = e.members.length === 0 && e.methods.length === 0 && !f.class?.hideEmptyMembersBox;
    let $ = roughDrawingCore.roughLibrary.svg(w);
    let S = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      S.roughness = 0;
      S.fillStyle = "solid";
    }
    let D = x.width;
    let W = x.height;
    if (e.members.length === 0 && e.methods.length === 0) {
      W += y;
    } else if (e.members.length > 0 && e.methods.length === 0) {
      W += y * 2;
    }
    let C = -D / 2;
    let P = -W / 2;
    let A = $.rectangle(C - y, P - y - (M ? y : e.members.length === 0 && e.methods.length === 0 ? -y / 2 : 0), D + y * 2, W + y * 2 + (M ? y * 2 : e.members.length === 0 && e.methods.length === 0 ? -y : 0), S);
    let N = w.insert(() => A, ":first-child");
    N.attr("class", "basic label-container");
    let L = N.node().getBBox();
    w.selectAll(".text").each((t, l, a) => {
      let i = axisAndZoomUtilities.select(a[l]);
      let n = i.attr("transform");
      let r = 0;
      if (n) {
        let t = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(n);
        if (t) {
          r = parseFloat(t[2]);
        }
      }
      let s = r + P + y - (M ? y : e.members.length === 0 && e.methods.length === 0 ? -y / 2 : 0);
      if (!m) {
        s -= 4;
      }
      let o = C;
      if (i.attr("class").includes("label-group") || i.attr("class").includes("annotation-group")) {
        var h;
        o = -((h = i.node()) === null || h === undefined ? undefined : h.getBBox().width) / 2 || 0;
        w.selectAll("text").each(function (t, e, l) {
          if (window.getComputedStyle(l[e]).textAnchor === "middle") {
            o = 0;
          }
        });
      }
      i.attr("transform", `translate(${o}, ${s})`);
    });
    let B = w.select(".annotation-group").node().getBBox().height - (M ? y / 2 : 0) || 0;
    let R = w.select(".label-group").node().getBBox().height - (M ? y / 2 : 0) || 0;
    let _ = w.select(".members-group").node().getBBox().height - (M ? y / 2 : 0) || 0;
    if (e.members.length > 0 || e.methods.length > 0 || M) {
      let t = $.line(L.x, B + R + P + y, L.x + L.width, B + R + P + y, S);
      w.insert(() => t).attr("class", "divider").attr("style", k);
    }
    if (M || e.members.length > 0 || e.methods.length > 0) {
      let t = $.line(L.x, B + R + _ + P + y * 2 + y, L.x + L.width, B + R + _ + P + y + y * 2, S);
      w.insert(() => t).attr("class", "divider").attr("style", k);
    }
    if (e.look !== "handDrawn") {
      w.selectAll("path").attr("style", k);
    }
    N.select(":nth-child(2)").attr("style", k);
    w.selectAll(".divider").select("path").attr("style", k);
    if (e.labelStyle) {
      w.selectAll("span").attr("style", e.labelStyle);
    } else {
      w.selectAll("span").attr("style", k);
    }
    if (!m) {
      let t = RegExp(/color\s*:\s*([^;]*)/);
      let e = t.exec(k);
      if (e) {
        let t = e[0].replace("color", "fill");
        w.selectAll("tspan").attr("style", t);
      } else if (v) {
        let e = t.exec(v);
        if (e) {
          let t = e[0].replace("color", "fill");
          w.selectAll("tspan").attr("style", t);
        }
      }
    }
    p(e, N);
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return w;
  }
  async function t7(t, e) {
    var l;
    var a;
    let o;
    let {
      labelStyles: h,
      nodeStyles: u
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = h;
    let g = "verifyMethod" in e;
    let y = f(e);
    let m = t.insert("g").attr("class", y).attr("id", e.domId ?? e.id);
    let w = o = g ? await et(m, `&lt;&lt;${e.type}&gt;&gt;`, 0, e.labelStyle) : await et(m, "&lt;&lt;Element&gt;&gt;", 0, e.labelStyle);
    let x = await et(m, e.name, w, e.labelStyle + "; font-weight: bold;");
    w += x + 20;
    if (g) {
      let t = await et(m, `${e.requirementId ? `ID: ${e.requirementId}` : ""}`, w, e.labelStyle);
      w += t;
      let l = await et(m, `${e.text ? `Text: ${e.text}` : ""}`, w, e.labelStyle);
      w += l;
      let a = await et(m, `${e.risk ? `Risk: ${e.risk}` : ""}`, w, e.labelStyle);
      w += a;
      await et(m, `${e.verifyMethod ? `Verification: ${e.verifyMethod}` : ""}`, w, e.labelStyle);
    } else {
      let t = await et(m, `${e.type ? `Type: ${e.type}` : ""}`, w, e.labelStyle);
      w += t;
      await et(m, `${e.docRef ? `Doc Ref: ${e.docRef}` : ""}`, w, e.labelStyle);
    }
    let v = (((l = m.node()) === null || l === undefined ? undefined : l.getBBox().width) ?? 200) + 20;
    let b = (((a = m.node()) === null || a === undefined ? undefined : a.getBBox().height) ?? 200) + 20;
    let k = -v / 2;
    let M = -b / 2;
    let $ = roughDrawingCore.roughLibrary.svg(m);
    let S = mermaidNodeStyleUtils.userNodeOverrides(e, {});
    if (e.look !== "handDrawn") {
      S.roughness = 0;
      S.fillStyle = "solid";
    }
    let D = $.rectangle(k, M, v, b, S);
    let W = m.insert(() => D, ":first-child");
    W.attr("class", "basic label-container").attr("style", u);
    m.selectAll(".label").each((t, e, l) => {
      let a = axisAndZoomUtilities.select(l[e]);
      let i = a.attr("transform");
      let n = 0;
      let r = 0;
      if (i) {
        let t = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(i);
        if (t) {
          n = parseFloat(t[1]);
          r = parseFloat(t[2]);
        }
      }
      let s = r - b / 2;
      let o = k + 10;
      if (e === 0 || e === 1) {
        o = n;
      }
      a.attr("transform", `translate(${o}, ${s + 20})`);
    });
    if (w > o + x + 20) {
      let t = $.line(k, M + o + x + 20, k + v, M + o + x + 20, S);
      m.insert(() => t).attr("style", u);
    }
    p(e, W);
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return m;
  }
  async function et(t, e, l) {
    var a;
    let i;
    let n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    if (e === "") {
      return 0;
    }
    let r = t.insert("g").attr("class", "label").attr("style", n);
    let c = mermaidConfigUtils.getConfigAlias();
    let u = (a = c.htmlLabels) === null || a === undefined || a;
    let g = await mermaidTextIconUtils.replaceIconSubstring(r, mermaidConfigUtils.sanitizeTextCfg(mermaidTextLayoutUtils.decodeEntities(e)), {
      width: mermaidTextLayoutUtils.calculateTextWidth(e, c) + 50,
      classes: "markdown-node-label",
      useHtmlLabels: u,
      style: n
    }, c);
    if (u) {
      let t = g.children[0];
      let e = axisAndZoomUtilities.select(g);
      i = t.getBoundingClientRect();
      e.attr("width", i.width);
      e.attr("height", i.height);
    } else {
      for (let t of g.children[0].children) {
        t.textContent = t.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<");
        if (n) {
          t.setAttribute("style", n);
        }
      }
      i = g.getBBox();
      i.height += 6;
    }
    r.attr("transform", `translate(${-i.width / 2},${-i.height / 2 + l})`);
    return i.height;
  }
  mermaidConfigUtils.setName(tJ, "tiltedCylinder");
  mermaidConfigUtils.setName(tQ, "trapezoid");
  mermaidConfigUtils.setName(tK, "trapezoidalPentagon");
  mermaidConfigUtils.setName(t0, "triangle");
  mermaidConfigUtils.setName(t2, "waveEdgedRectangle");
  mermaidConfigUtils.setName(t1, "waveRectangle");
  mermaidConfigUtils.setName(t5, "windowPane");
  mermaidConfigUtils.setName(t3, "erBox");
  mermaidConfigUtils.setName(t4, "addText");
  mermaidConfigUtils.setName(t8, "textHelper");
  mermaidConfigUtils.setName(t9, "addText");
  mermaidConfigUtils.setName(t6, "classBox");
  mermaidConfigUtils.setName(t7, "requirementBox");
  mermaidConfigUtils.setName(et, "addText");
  var ee = mermaidConfigUtils.setName(t => {
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
  async function el(t, e, l) {
    var n;
    let s;
    let o;
    let h;
    let d;
    let {
      config: y
    } = l;
    let {
      labelStyles: m,
      nodeStyles: w
    } = mermaidNodeStyleUtils.styles2String(e);
    e.labelStyle = m || "";
    let x = e.width;
    e.width = (e.width ?? 200) - 10;
    let {
      shapeSvg: v,
      bbox: b,
      label: k
    } = await u(t, e, f(e));
    let $ = e.padding || 10;
    let S = "";
    if ("ticket" in e && e.ticket && (y == null ? undefined : y.kanban?.ticketBaseUrl)) {
      S = y == null ? undefined : (n = y.kanban) === null || n === undefined ? undefined : n.ticketBaseUrl.replace("#TICKET#", e.ticket);
      s = v.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", S).attr("target", "_blank");
    }
    let D = {
      useHtmlLabels: e.useHtmlLabels,
      labelStyle: e.labelStyle || "",
      width: e.width,
      img: e.img,
      padding: e.padding || 8,
      centerLabel: false
    };
    if (s) {
      ({
        label: o,
        bbox: h
      } = await g(s, "ticket" in e && e.ticket || "", D));
    } else {
      ({
        label: o,
        bbox: h
      } = await g(v, "ticket" in e && e.ticket || "", D));
    }
    let {
      label: W,
      bbox: C
    } = await g(v, "assigned" in e && e.assigned || "", D);
    e.width = x;
    let P = (e == null ? undefined : e.width) || 0;
    let A = Math.max(h.height, C.height) / 2;
    let N = Math.max(b.height + 20, (e == null ? undefined : e.height) || 0) + A;
    let L = -P / 2;
    let B = -N / 2;
    k.attr("transform", "translate(" + ($ - P / 2) + ", " + (-A - b.height / 2) + ")");
    o.attr("transform", "translate(" + ($ - P / 2) + ", " + (-A + b.height / 2) + ")");
    W.attr("transform", "translate(" + ($ + P / 2 - C.width - 20) + ", " + (-A + b.height / 2) + ")");
    let {
      rx: R,
      ry: _
    } = e;
    let {
      cssStyles: T
    } = e;
    if (e.look === "handDrawn") {
      let t = roughDrawingCore.roughLibrary.svg(v);
      let l = mermaidNodeStyleUtils.userNodeOverrides(e, {});
      let a = R || _ ? t.path(M(L, B, P, N, R || 0), l) : t.rectangle(L, B, P, N, l);
      (d = v.insert(() => a, ":first-child")).attr("class", "basic label-container").attr("style", T || null);
    } else {
      (d = v.insert("rect", ":first-child")).attr("class", "basic label-container __APA__").attr("style", w).attr("rx", R ?? 5).attr("ry", _ ?? 5).attr("x", L).attr("y", B).attr("width", P).attr("height", N);
      let t = "priority" in e && e.priority;
      if (t) {
        let e = v.append("line");
        let l = L + 2;
        let a = B + Math.floor((R ?? 0) / 2);
        let i = B + N - Math.floor((R ?? 0) / 2);
        e.attr("x1", l).attr("y1", a).attr("x2", l).attr("y2", i).attr("stroke-width", "4").attr("stroke", ee(t));
      }
    }
    p(e, d);
    e.height = N;
    e.intersect = function (t) {
      return q.rect(e, t);
    };
    return v;
  }
  mermaidConfigUtils.setName(el, "kanbanItem");
  var ea = [{
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: tO
  }, {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: tT
  }, {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: tI
  }, {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: tF
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
    handler: F
  }, {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: tL
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
    handler: tb
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
    handler: tQ
  }, {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: tm
  }, {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: tn
  }, {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: tH
  }, {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: E
  }, {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: tq
  }, {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: tU
  }, {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: tE
  }, {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: to
  }, {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: tc
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
    handler: X
  }, {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Q
  }, {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: tk
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
    handler: th
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
    handler: tD
  }, {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: K
  }, {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: ti
  }, {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: t0
  }, {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: t5
  }, {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: tr
  }, {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: tK
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
    handler: tZ
  }, {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: tP
  }, {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: tC
  }, {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: I
  }, {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: z
  }, {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: tz
  }, {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: tj
  }, {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: t1
  }, {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: tB
  }, {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: tW
  }];
  var ei = mermaidConfigUtils.setName(() => Object.fromEntries([...Object.entries({
    state: tG,
    choice: U,
    note: tA,
    rectWithTitle: tR,
    labelRect: tx,
    iconSquare: tf,
    iconCircle: tg,
    icon: tu,
    iconRounded: tp,
    imageSquare: ty,
    anchor: Z,
    kanbanItem: el,
    classBox: t6,
    erBox: t3,
    requirementBox: t7
  }), ...ea.flatMap(t => [t.shortName, ...("aliases" in t ? t.aliases : []), ...("internalAliases" in t ? t.internalAliases : [])].map(e => [e, t.handler]))]), "generateShapeMap")();
  function en(t) {
    return t in ei;
  }
  mermaidConfigUtils.setName(en, "isValidShape");
  var er = new Map();
  async function es(t, e, l) {
    let a;
    let i;
    if (e.shape === "rect") {
      if (e.rx && e.ry) {
        e.shape = "roundedRect";
      } else {
        e.shape = "squareRect";
      }
    }
    let n = e.shape ? ei[e.shape] : undefined;
    if (!n) {
      throw Error(`No such shape: ${e.shape}. Please check your syntax.`);
    }
    if (e.link) {
      let r;
      if (l.config.securityLevel === "sandbox") {
        r = "_top";
      } else if (e.linkTarget) {
        r = e.linkTarget || "_blank";
      }
      a = t.insert("svg:a").attr("xlink:href", e.link).attr("target", r ?? null);
      i = await n(a, e, l);
    } else {
      a = i = await n(t, e, l);
    }
    if (e.tooltip) {
      i.attr("title", e.tooltip);
    }
    er.set(e.id, a);
    if (e.haveCallback) {
      a.attr("class", a.attr("class") + " clickable");
    }
    return a;
  }
  mermaidConfigUtils.setName(es, "insertNode");
  var eo = mermaidConfigUtils.setName((t, e) => {
    er.set(e.id, t);
  }, "setNodeElem");
  var eh = mermaidConfigUtils.setName(() => {
    er.clear();
  }, "clear");
  var ed = mermaidConfigUtils.setName(t => {
    let e = er.get(t.id);
    mermaidConfigUtils.logger.trace("Transforming node", t.diff, t, "translate(" + (t.x - t.width / 2 - 5) + ", " + t.width / 2 + ")");
    let l = t.diff || 0;
    if (t.clusterNode) {
      e.attr("transform", "translate(" + (t.x + l - t.width / 2) + ", " + (t.y - t.height / 2 - 8) + ")");
    } else {
      e.attr("transform", "translate(" + t.x + ", " + t.y + ")");
    }
    return l;
  }, "positionNode");
  require.d(exports, {
    labelHelper: function () {
      return u;
    },
    insertCluster: function () {
      return es;
    },
    createLabel: function () {
      return k;
    },
    setNodeElem: function () {
      return eo;
    },
    clearClusterCache: function () {
      return N;
    },
    kanbanItem: function () {
      return ed;
    },
    isValidShape: function () {
      return en;
    },
    clearNodeCache: function () {
      return eh;
    },
    updateNodeBounds: function () {
      return p;
    },
    insertNode: function () {
      return A;
    }
  });
}