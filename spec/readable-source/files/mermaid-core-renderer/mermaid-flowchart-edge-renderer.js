// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DQ' to 'insertMarkers'
// - Renamed export 'I_' to 'insertEdgeLabel'
// - Renamed export 'Jj' to 'positionEdgeLabel'
// - Renamed export 'QP' to 'insertEdge'
// - Renamed export 'ZH' to 'clearCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 968232
         */
module.exports = function (module, exports, require) {
  var diagramArrowOffsetUtils = require("diagram-arrow-offset-utils") /*id: 173696*/;
  var mermaidNodeShapesRenderer = require("mermaid-node-shapes-renderer") /*id: 411411*/;
  var subgraphTitleMarginsCalculator = require("subgraph-title-margins-calculator") /*id: 954180*/;
  var mermaidStyleUtils = require("mermaid-style-utils") /*id: 717687*/;
  var iconUtilsTextRendering = require("icon-utils-text-rendering") /*id: 990626*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var roughDrawingCore = require("rough-drawing-core") /*id: 157146*/;
  var p = loggerLevelUtils.setFunctionName((t, e, r, i, a, o) => {
    if (e.arrowTypeStart) {
      f(t, "start", e.arrowTypeStart, r, i, a, o);
    }
    if (e.arrowTypeEnd) {
      f(t, "end", e.arrowTypeEnd, r, i, a, o);
    }
  }, "addEdgeMarkers");
  var g = {
    arrow_cross: {
      type: "cross",
      fill: false
    },
    arrow_point: {
      type: "point",
      fill: true
    },
    arrow_barb: {
      type: "barb",
      fill: true
    },
    arrow_circle: {
      type: "circle",
      fill: false
    },
    aggregation: {
      type: "aggregation",
      fill: false
    },
    extension: {
      type: "extension",
      fill: false
    },
    composition: {
      type: "composition",
      fill: true
    },
    dependency: {
      type: "dependency",
      fill: true
    },
    lollipop: {
      type: "lollipop",
      fill: false
    },
    only_one: {
      type: "onlyOne",
      fill: false
    },
    zero_or_one: {
      type: "zeroOrOne",
      fill: false
    },
    one_or_more: {
      type: "oneOrMore",
      fill: false
    },
    zero_or_more: {
      type: "zeroOrMore",
      fill: false
    },
    requirement_arrow: {
      type: "requirement_arrow",
      fill: false
    },
    requirement_contains: {
      type: "requirement_contains",
      fill: false
    }
  };
  var f = loggerLevelUtils.setFunctionName((t, e, r, i, a, o, l) => {
    let n = g[r];
    if (!n) {
      loggerLevelUtils.logger.warn(`Unknown arrow type: ${r}`);
      return;
    }
    let s = n.type;
    let h = `${a}_${o}-${s}${e === "start" ? "Start" : "End"}`;
    if (l && l.trim() !== "") {
      let r = l.replace(/[^\dA-Za-z]/g, "_");
      let a = `${h}_${r}`;
      if (!document.getElementById(a)) {
        let t = document.getElementById(h);
        if (t) {
          var d;
          let e = t.cloneNode(true);
          e.id = a;
          e.querySelectorAll("path, circle, line").forEach(t => {
            t.setAttribute("stroke", l);
            if (n.fill) {
              t.setAttribute("fill", l);
            }
          });
          if ((d = t.parentNode) !== null && d !== undefined) {
            d.appendChild(e);
          }
        }
      }
      t.attr(`marker-${e}`, `url(${i}#${a})`);
    } else {
      t.attr(`marker-${e}`, `url(${i}#${h})`);
    }
  }, "addEdgeMarker");
  var m = new Map();
  var y = new Map();
  var x = loggerLevelUtils.setFunctionName(() => {
    m.clear();
    y.clear();
  }, "clear");
  var b = loggerLevelUtils.setFunctionName(t => t ? t.reduce((t, e) => t + ";" + e, "") : "", "getLabelStyles");
  var C = loggerLevelUtils.setFunctionName(async (t, e) => {
    let r;
    let i = mermaidConfigUtils_1.evaluate(mermaidConfigUtils_1.getConfigAlias().flowchart.htmlLabels);
    let {
      labelStyles: o
    } = mermaidStyleUtils.stylesToString(e);
    e.labelStyle = o;
    let s = await iconUtilsTextRendering.createText(t, e.label, {
      style: e.labelStyle,
      useHtmlLabels: i,
      addSvgBackground: true,
      isNode: false
    });
    loggerLevelUtils.logger.info("abc82", e, e.labelType);
    let u = t.insert("g").attr("class", "edgeLabel");
    let p = u.insert("g").attr("class", "label").attr("data-id", e.id);
    p.node().appendChild(s);
    let g = s.getBBox();
    if (i) {
      let t = s.children[0];
      let e = axisAndZoomUtilities.select(s);
      g = t.getBoundingClientRect();
      e.attr("width", g.width);
      e.attr("height", g.height);
    }
    p.attr("transform", "translate(" + -g.width / 2 + ", " + -g.height / 2 + ")");
    m.set(e.id, u);
    e.width = g.width;
    e.height = g.height;
    if (e.startLabelLeft) {
      let i = await mermaidNodeShapesRenderer.createLabel(e.startLabelLeft, b(e.labelStyle));
      let o = t.insert("g").attr("class", "edgeTerminals");
      let l = o.insert("g").attr("class", "inner");
      r = l.node().appendChild(i);
      let n = i.getBBox();
      l.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")");
      if (!y.get(e.id)) {
        y.set(e.id, {});
      }
      y.get(e.id).startLeft = o;
      v(r, e.startLabelLeft);
    }
    if (e.startLabelRight) {
      let i = await mermaidNodeShapesRenderer.createLabel(e.startLabelRight, b(e.labelStyle));
      let o = t.insert("g").attr("class", "edgeTerminals");
      let l = o.insert("g").attr("class", "inner");
      r = o.node().appendChild(i);
      l.node().appendChild(i);
      let n = i.getBBox();
      l.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")");
      if (!y.get(e.id)) {
        y.set(e.id, {});
      }
      y.get(e.id).startRight = o;
      v(r, e.startLabelRight);
    }
    if (e.endLabelLeft) {
      let i = await mermaidNodeShapesRenderer.createLabel(e.endLabelLeft, b(e.labelStyle));
      let o = t.insert("g").attr("class", "edgeTerminals");
      let l = o.insert("g").attr("class", "inner");
      r = l.node().appendChild(i);
      let n = i.getBBox();
      l.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")");
      o.node().appendChild(i);
      if (!y.get(e.id)) {
        y.set(e.id, {});
      }
      y.get(e.id).endLeft = o;
      v(r, e.endLabelLeft);
    }
    if (e.endLabelRight) {
      let i = await mermaidNodeShapesRenderer.createLabel(e.endLabelRight, b(e.labelStyle));
      let o = t.insert("g").attr("class", "edgeTerminals");
      let l = o.insert("g").attr("class", "inner");
      r = l.node().appendChild(i);
      let n = i.getBBox();
      l.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")");
      o.node().appendChild(i);
      if (!y.get(e.id)) {
        y.set(e.id, {});
      }
      y.get(e.id).endRight = o;
      v(r, e.endLabelRight);
    }
    return s;
  }, "insertEdgeLabel");
  function v(t, e) {
    if (mermaidConfigUtils_1.getConfigAlias().flowchart.htmlLabels && t) {
      t.style.width = e.length * 9 + "px";
      t.style.height = "12px";
    }
  }
  loggerLevelUtils.setFunctionName(v, "setTerminalWidth");
  var k = loggerLevelUtils.setFunctionName((t, e) => {
    loggerLevelUtils.logger.debug("Moving label abc88 ", t.id, t.label, m.get(t.id), e);
    let r = e.updatedPath ? e.updatedPath : e.originalPath;
    let i = mermaidConfigUtils_1.getConfigAlias();
    let {
      subGraphTitleTotalMargin: a
    } = subgraphTitleMarginsCalculator.getSubGraphTitleMargins(i);
    if (t.label) {
      let i = m.get(t.id);
      let o = t.x;
      let l = t.y;
      if (r) {
        let i = mermaidDiagramUtils.mermaidUtils.calcLabelPosition(r);
        loggerLevelUtils.logger.debug("Moving label " + t.label + " from (", o, ",", l, ") to (", i.x, ",", i.y, ") abc88");
        if (e.updatedPath) {
          o = i.x;
          l = i.y;
        }
      }
      i.attr("transform", `translate(${o}, ${l + a / 2})`);
    }
    if (t.startLabelLeft) {
      let e = y.get(t.id).startLeft;
      let i = t.x;
      let a = t.y;
      if (r) {
        let e = mermaidDiagramUtils.mermaidUtils.calcTerminalLabelPosition(!!t.arrowTypeStart * 10, "start_left", r);
        i = e.x;
        a = e.y;
      }
      e.attr("transform", `translate(${i}, ${a})`);
    }
    if (t.startLabelRight) {
      let e = y.get(t.id).startRight;
      let i = t.x;
      let a = t.y;
      if (r) {
        let e = mermaidDiagramUtils.mermaidUtils.calcTerminalLabelPosition(!!t.arrowTypeStart * 10, "start_right", r);
        i = e.x;
        a = e.y;
      }
      e.attr("transform", `translate(${i}, ${a})`);
    }
    if (t.endLabelLeft) {
      let e = y.get(t.id).endLeft;
      let i = t.x;
      let a = t.y;
      if (r) {
        let e = mermaidDiagramUtils.mermaidUtils.calcTerminalLabelPosition(!!t.arrowTypeEnd * 10, "end_left", r);
        i = e.x;
        a = e.y;
      }
      e.attr("transform", `translate(${i}, ${a})`);
    }
    if (t.endLabelRight) {
      let e = y.get(t.id).endRight;
      let i = t.x;
      let a = t.y;
      if (r) {
        let e = mermaidDiagramUtils.mermaidUtils.calcTerminalLabelPosition(!!t.arrowTypeEnd * 10, "end_right", r);
        i = e.x;
        a = e.y;
      }
      e.attr("transform", `translate(${i}, ${a})`);
    }
  }, "positionEdgeLabel");
  var w = loggerLevelUtils.setFunctionName((t, e) => {
    let r = t.x;
    let i = t.y;
    let a = Math.abs(e.x - r);
    let o = Math.abs(e.y - i);
    let l = t.width / 2;
    let n = t.height / 2;
    return a >= l || o >= n;
  }, "outsideNode");
  var S = loggerLevelUtils.setFunctionName((t, e, r) => {
    loggerLevelUtils.logger.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(e)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);
    let i = t.x;
    let a = t.y;
    let o = Math.abs(i - r.x);
    let l = t.width / 2;
    let n = r.x < e.x ? l - o : l + o;
    let s = t.height / 2;
    let h = Math.abs(e.y - r.y);
    let d = Math.abs(e.x - r.x);
    if (Math.abs(a - e.y) * l > Math.abs(i - e.x) * s) {
      let t = r.y < e.y ? e.y - s - a : a - s - e.y;
      n = d * t / h;
      let i = {
        x: r.x < e.x ? r.x + n : r.x - d + n,
        y: r.y < e.y ? r.y + h - t : r.y - h + t
      };
      if (n === 0) {
        i.x = e.x;
        i.y = e.y;
      }
      if (d === 0) {
        i.x = e.x;
      }
      if (h === 0) {
        i.y = e.y;
      }
      loggerLevelUtils.logger.debug(`abc89 top/bottom calc, Q ${h}, q ${t}, R ${d}, r ${n}`, i);
      return i;
    }
    {
      let t = h * (n = r.x < e.x ? e.x - l - i : i - l - e.x) / d;
      let a = r.x < e.x ? r.x + d - n : r.x - d + n;
      let o = r.y < e.y ? r.y + t : r.y - t;
      loggerLevelUtils.logger.debug(`sides calc abc89, Q ${h}, q ${t}, R ${d}, r ${n}`, {
        _x: a,
        _y: o
      });
      if (n === 0) {
        a = e.x;
        o = e.y;
      }
      if (d === 0) {
        a = e.x;
      }
      if (h === 0) {
        o = e.y;
      }
      return {
        x: a,
        y: o
      };
    }
  }, "intersection");
  var T = loggerLevelUtils.setFunctionName((t, e) => {
    loggerLevelUtils.logger.warn("abc88 cutPathAtIntersect", t, e);
    let r = [];
    let i = t[0];
    let a = false;
    t.forEach(t => {
      loggerLevelUtils.logger.info("abc88 checking point", t, e);
      if (w(e, t) || a) {
        loggerLevelUtils.logger.warn("abc88 outside", t, i);
        i = t;
        if (!a) {
          r.push(t);
        }
      } else {
        let o = S(e, i, t);
        loggerLevelUtils.logger.debug("abc88 inside", t, i, o);
        loggerLevelUtils.logger.debug("abc88 intersection", o, e);
        let l = false;
        r.forEach(t => {
          l = l || t.x === o.x && t.y === o.y;
        });
        if (r.some(t => t.x === o.x && t.y === o.y)) {
          loggerLevelUtils.logger.warn("abc88 no intersect", o, r);
        } else {
          r.push(o);
        }
        a = true;
      }
    });
    loggerLevelUtils.logger.debug("returning points", r);
    return r;
  }, "cutPathAtIntersect");
  function B(t) {
    let e = [];
    let r = [];
    for (let i = 1; i < t.length - 1; i++) {
      let a = t[i - 1];
      let o = t[i];
      let l = t[i + 1];
      if (a.x === o.x && o.y === l.y && Math.abs(o.x - l.x) > 5 && Math.abs(o.y - a.y) > 5) {
        e.push(o);
        r.push(i);
      } else if (a.y === o.y && o.x === l.x && Math.abs(o.x - a.x) > 5 && Math.abs(o.y - l.y) > 5) {
        e.push(o);
        r.push(i);
      }
    }
    return {
      cornerPoints: e,
      cornerPointPositions: r
    };
  }
  loggerLevelUtils.setFunctionName(B, "extractCornerPoints");
  var M = loggerLevelUtils.setFunctionName(function (t, e, r) {
    let i = e.x - t.x;
    let a = e.y - t.y;
    let o = r / Math.sqrt(i * i + a * a);
    return {
      x: e.x - o * i,
      y: e.y - o * a
    };
  }, "findAdjacentPoint");
  var W = loggerLevelUtils.setFunctionName(function (t) {
    let {
      cornerPointPositions: e
    } = B(t);
    let r = [];
    for (let i = 0; i < t.length; i++) {
      if (e.includes(i)) {
        let e = t[i - 1];
        let a = t[i + 1];
        let o = t[i];
        let l = M(e, o, 5);
        let n = M(a, o, 5);
        let s = n.x - l.x;
        let h = n.y - l.y;
        r.push(l);
        let d = Math.sqrt(2) * 2;
        let u = {
          x: o.x,
          y: o.y
        };
        if (Math.abs(a.x - e.x) > 10 && Math.abs(a.y - e.y) >= 10) {
          loggerLevelUtils.logger.debug("Corner point fixing", Math.abs(a.x - e.x), Math.abs(a.y - e.y));
          u = o.x === l.x ? {
            x: s < 0 ? l.x - 5 + d : l.x + 5 - d,
            y: h < 0 ? l.y - d : l.y + d
          } : {
            x: s < 0 ? l.x - d : l.x + d,
            y: h < 0 ? l.y - 5 + d : l.y + 5 - d
          };
        } else {
          loggerLevelUtils.logger.debug("Corner point skipping fixing", Math.abs(a.x - e.x), Math.abs(a.y - e.y));
        }
        r.push(u, n);
      } else {
        r.push(t[i]);
      }
    }
    return r;
  }, "fixCorners");
  var L = loggerLevelUtils.setFunctionName((t, e, r) => {
    let i = Array(Math.floor((t - e - r) / 4)).fill("2 2").join(" ");
    return `0 ${e} ${i} ${r}`;
  }, "generateDashArray");
  var F = loggerLevelUtils.setFunctionName(function (t, e, r, a, o, n, g) {
    let m;
    let y;
    let x = arguments.length > 7 && arguments[7] !== undefined && arguments[7];
    let {
      handDrawnSeed: b
    } = mermaidConfigUtils_1.getConfigAlias();
    let C = e.points;
    let v = false;
    let k = [];
    for (let t in e.cssCompiledStyles) {
      if (!mermaidStyleUtils.isLabelStyle(t)) {
        k.push(e.cssCompiledStyles[t]);
      }
    }
    loggerLevelUtils.logger.debug("UIO intersect check", e.points, n.x, o.x);
    if (n.intersect && o.intersect && !x) {
      (C = C.slice(1, e.points.length - 1)).unshift(o.intersect(C[0]));
      loggerLevelUtils.logger.debug("Last point UIO", e.start, "-->", e.end, C[C.length - 1], n, n.intersect(C[C.length - 1]));
      C.push(n.intersect(C[C.length - 1]));
    }
    let w = btoa(JSON.stringify(C));
    if (e.toCluster) {
      loggerLevelUtils.logger.info("to cluster abc88", r.get(e.toCluster));
      C = T(e.points, r.get(e.toCluster).node);
      v = true;
    }
    if (e.fromCluster) {
      loggerLevelUtils.logger.debug("from cluster abc88", r.get(e.fromCluster), JSON.stringify(C, null, 2));
      C = T(C.reverse(), r.get(e.fromCluster).node).reverse();
      v = true;
    }
    let S = C.filter(t => !Number.isNaN(t.y));
    S = W(S);
    let B = axisAndZoomUtilities.$0Z;
    B = axisAndZoomUtilities.c_6;
    switch (e.curve) {
      case "linear":
        B = axisAndZoomUtilities.c_6;
        break;
      case "basis":
      default:
        B = axisAndZoomUtilities.$0Z;
        break;
      case "cardinal":
        B = axisAndZoomUtilities.YY7;
        break;
      case "bumpX":
        B = axisAndZoomUtilities.qpX;
        break;
      case "bumpY":
        B = axisAndZoomUtilities.u93;
        break;
      case "catmullRom":
        B = axisAndZoomUtilities.zgE;
        break;
      case "monotoneX":
        B = axisAndZoomUtilities.FdL;
        break;
      case "monotoneY":
        B = axisAndZoomUtilities.ak_;
        break;
      case "natural":
        B = axisAndZoomUtilities.SxZ;
        break;
      case "step":
        B = axisAndZoomUtilities.eA_;
        break;
      case "stepAfter":
        B = axisAndZoomUtilities.jsv;
        break;
      case "stepBefore":
        B = axisAndZoomUtilities.createTensionZero;
    }
    let {
      x: M,
      y: F
    } = diagramArrowOffsetUtils.getLineOffsetFns(e);
    let A = axisAndZoomUtilities.jvg().x(M).y(F).curve(B);
    switch (e.thickness) {
      case "normal":
      default:
        m = "edge-thickness-normal";
        break;
      case "thick":
        m = "edge-thickness-thick";
        break;
      case "invisible":
        m = "edge-thickness-invisible";
    }
    switch (e.pattern) {
      case "solid":
      default:
        m += " edge-pattern-solid";
        break;
      case "dotted":
        m += " edge-pattern-dotted";
        break;
      case "dashed":
        m += " edge-pattern-dashed";
    }
    let E = e.curve === "rounded" ? _($(S, e), 5) : A(S);
    let Z = Array.isArray(e.style) ? e.style : [e.style];
    let O = Z.find(t => t == null ? undefined : t.startsWith("stroke:"));
    let D = false;
    if (e.look === "handDrawn") {
      let r = roughDrawingCore.roughLibrary.svg(t);
      Object.assign([], S);
      let i = r.path(E, {
        roughness: 0.3,
        seed: b
      });
      m += " transition";
      let a = (y = axisAndZoomUtilities.select(i).select("path").attr("id", e.id).attr("class", " " + m + (e.classes ? " " + e.classes : "")).attr("style", Z ? Z.reduce((t, e) => t + ";" + e, "") : "")).attr("d");
      y.attr("d", a);
      t.node().appendChild(y.node());
    } else {
      let r = k.join(";");
      let a = Z ? Z.reduce((t, e) => t + e + ";", "") : "";
      let o = "";
      if (e.animate) {
        o = " edge-animation-fast";
      }
      if (e.animation) {
        o = " edge-animation-" + e.animation;
      }
      let l = (r ? r + ";" + a + ";" : a) + ";" + (Z ? Z.reduce((t, e) => t + ";" + e, "") : "");
      y = t.append("path").attr("d", E).attr("id", e.id).attr("class", " " + m + (e.classes ? " " + e.classes : "") + (o ?? "")).attr("style", l);
      O = l.match(/stroke:([^;]+)/)?.[1];
      D = e.animate === true || !!e.animation || r.includes("animation");
      let n = y.node();
      let s = typeof n.getTotalLength == "function" ? n.getTotalLength() : 0;
      let h = diagramArrowOffsetUtils.arrowHeadConfig[e.arrowTypeStart] || 0;
      let c = diagramArrowOffsetUtils.arrowHeadConfig[e.arrowTypeEnd] || 0;
      if (e.look === "neo" && !D) {
        let t = e.pattern === "dotted" || e.pattern === "dashed" ? L(s, h, c) : `0 ${h} ${s - h - c} ${c}`;
        let r = `stroke-dasharray: ${t}; stroke-dashoffset: 0;`;
        y.attr("style", r + y.attr("style"));
      }
    }
    y.attr("data-edge", true);
    y.attr("data-et", "edge");
    y.attr("data-id", e.id);
    y.attr("data-points", w);
    if (e.showPoints) {
      S.forEach(e => {
        t.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", e.x).attr("cy", e.y);
      });
    }
    let I = "";
    if (mermaidConfigUtils_1.getConfigAlias().flowchart.arrowMarkerAbsolute || mermaidConfigUtils_1.getConfigAlias().state.arrowMarkerAbsolute) {
      I = (I = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search).replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }
    loggerLevelUtils.logger.info("arrowTypeStart", e.arrowTypeStart);
    loggerLevelUtils.logger.info("arrowTypeEnd", e.arrowTypeEnd);
    p(y, e, I, g, a, O);
    let q = Math.floor(C.length / 2);
    let R = C[q];
    if (!mermaidDiagramUtils.mermaidUtils.isLabelCoordinateInPath(R, y.attr("d"))) {
      v = true;
    }
    let N = {};
    if (v) {
      N.updatedPath = C;
    }
    N.originalPath = e.points;
    return N;
  }, "insertEdge");
  function _(t, e) {
    if (t.length < 2) {
      return "";
    }
    let r = "";
    let i = t.length;
    for (let a = 0; a < i; a++) {
      let o = t[a];
      let l = t[a - 1];
      let n = t[a + 1];
      if (a === 0) {
        r += `M${o.x},${o.y}`;
      } else if (a === i - 1) {
        r += `L${o.x},${o.y}`;
      } else {
        let t = o.x - l.x;
        let i = o.y - l.y;
        let a = n.x - o.x;
        let s = n.y - o.y;
        let h = Math.hypot(t, i);
        let c = Math.hypot(a, s);
        if (h < 0.00001 || c < 0.00001) {
          r += `L${o.x},${o.y}`;
          continue;
        }
        let d = t / h;
        let u = i / h;
        let p = a / c;
        let g = s / c;
        let f = Math.acos(Math.max(-1, Math.min(1, d * p + u * g)));
        if (f < 0.00001 || Math.abs(Math.PI - f) < 0.00001) {
          r += `L${o.x},${o.y}`;
          continue;
        }
        let m = Math.min(e / Math.sin(f / 2), h / 2, c / 2);
        let y = o.x - d * m;
        let x = o.y - u * m;
        let b = o.x + p * m;
        let C = o.y + g * m;
        r += `L${y},${x}Q${o.x},${o.y} ${b},${C}`;
      }
    }
    return r;
  }
  function A(t, e) {
    if (!t || !e) {
      return {
        angle: 0,
        deltaX: 0,
        deltaY: 0
      };
    }
    let r = e.x - t.x;
    let i = e.y - t.y;
    return {
      angle: Math.atan2(i, r),
      deltaX: r,
      deltaY: i
    };
  }
  function $(t, e) {
    let r = t.map(t => ({
      ...t
    }));
    if (t.length >= 2 && diagramArrowOffsetUtils.arrowLengthConfig[e.arrowTypeStart]) {
      let a = diagramArrowOffsetUtils.arrowLengthConfig[e.arrowTypeStart];
      let o = t[0];
      let {
        angle: l
      } = A(o, t[1]);
      let n = a * Math.cos(l);
      let s = a * Math.sin(l);
      r[0].x = o.x + n;
      r[0].y = o.y + s;
    }
    let a = t.length;
    if (a >= 2 && diagramArrowOffsetUtils.arrowLengthConfig[e.arrowTypeEnd]) {
      let o = diagramArrowOffsetUtils.arrowLengthConfig[e.arrowTypeEnd];
      let l = t[a - 1];
      let {
        angle: n
      } = A(t[a - 2], l);
      let s = o * Math.cos(n);
      let h = o * Math.sin(n);
      r[a - 1].x = l.x - s;
      r[a - 1].y = l.y - h;
    }
    return r;
  }
  loggerLevelUtils.setFunctionName(_, "generateRoundedPath");
  loggerLevelUtils.setFunctionName(A, "calculateDeltaAndAngle");
  loggerLevelUtils.setFunctionName($, "applyMarkerOffsetsToPoints");
  var E = loggerLevelUtils.setFunctionName((t, e, r, i) => {
    e.forEach(e => {
      G[e](t, r, i);
    });
  }, "insertMarkers");
  var Z = loggerLevelUtils.setFunctionName((t, e, r) => {
    loggerLevelUtils.logger.trace("Making markers for ", r);
    t.append("defs").append("marker").attr("id", r + "_" + e + "-extensionStart").attr("class", "marker extension " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-extensionEnd").attr("class", "marker extension " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
  }, "extension");
  var O = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-compositionStart").attr("class", "marker composition " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-compositionEnd").attr("class", "marker composition " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "composition");
  var D = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-aggregationStart").attr("class", "marker aggregation " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-aggregationEnd").attr("class", "marker aggregation " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "aggregation");
  var I = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-dependencyStart").attr("class", "marker dependency " + e).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-dependencyEnd").attr("class", "marker dependency " + e).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "dependency");
  var q = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-lollipopStart").attr("class", "marker lollipop " + e).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
    t.append("defs").append("marker").attr("id", r + "_" + e + "-lollipopEnd").attr("class", "marker lollipop " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
  }, "lollipop");
  var R = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("marker").attr("id", r + "_" + e + "-pointEnd").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    t.append("marker").attr("id", r + "_" + e + "-pointStart").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "point");
  var N = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("marker").attr("id", r + "_" + e + "-circleEnd").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    t.append("marker").attr("id", r + "_" + e + "-circleStart").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "circle");
  var P = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("marker").attr("id", r + "_" + e + "-crossEnd").attr("class", "marker cross " + e).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
    t.append("marker").attr("id", r + "_" + e + "-crossStart").attr("class", "marker cross " + e).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
  }, "cross");
  var z = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "barb");
  var j = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-onlyOneStart").attr("class", "marker onlyOne " + e).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-onlyOneEnd").attr("class", "marker onlyOne " + e).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
  }, "only_one");
  var H = loggerLevelUtils.setFunctionName((t, e, r) => {
    let i = t.append("defs").append("marker").attr("id", r + "_" + e + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + e).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6);
    i.append("path").attr("d", "M9,0 L9,18");
    let a = t.append("defs").append("marker").attr("id", r + "_" + e + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + e).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    a.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6);
    a.append("path").attr("d", "M21,0 L21,18");
  }, "zero_or_one");
  var U = loggerLevelUtils.setFunctionName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-oneOrMoreStart").attr("class", "marker oneOrMore " + e).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + e).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
  }, "one_or_more");
  var Y = loggerLevelUtils.setFunctionName((t, e, r) => {
    let i = t.append("defs").append("marker").attr("id", r + "_" + e + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + e).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6);
    i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
    let a = t.append("defs").append("marker").attr("id", r + "_" + e + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + e).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    a.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6);
    a.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
  }, "zero_or_more");
  var G = {
    extension: Z,
    composition: O,
    aggregation: D,
    dependency: I,
    lollipop: q,
    point: R,
    circle: N,
    cross: P,
    barb: z,
    only_one: j,
    zero_or_one: H,
    one_or_more: U,
    zero_or_more: Y,
    requirement_arrow: loggerLevelUtils.setFunctionName((t, e, r) => {
      t.append("defs").append("marker").attr("id", r + "_" + e + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", `M0,0
      L20,10
      M20,10
      L0,20`);
    }, "requirement_arrow"),
    requirement_contains: loggerLevelUtils.setFunctionName((t, e, r) => {
      let i = t.append("defs").append("marker").attr("id", r + "_" + e + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
      i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none");
      i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10);
      i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
    }, "requirement_contains")
  };
  var V = E;
  require.d(exports, {
    insertMarkers: function () {
      return V;
    },
    insertEdgeLabel: function () {
      return C;
    },
    positionEdgeLabel: function () {
      return k;
    },
    insertEdge: function () {
      return F;
    },
    clearCache: function () {
      return x;
    }
  });
}