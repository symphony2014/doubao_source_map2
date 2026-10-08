// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DQ' to 'insertMarkers'
// - Renamed export 'I_' to 'insertEdgeLabel'
// - Renamed export 'Jj' to 'positionEdgeLabel'
// - Renamed export 'QP' to 'insertEdge'
// - Renamed export 'ZH' to 'clear'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10244.d40828c2.js
         * chunkId: 10244
         * moduleId: 836477
         */
module.exports = function (module, exports, require) {
  var lineArrowOffsetUtils = require("line-arrow-offset-utils") /*id: 744654*/;
  var mermaidNodeShapesRenderer_1 = require("mermaid-node-shapes-renderer_1") /*id: 608361*/;
  var mermaidSubgraphTitleMarginUtils = require("mermaid-subgraph-title-margin-utils") /*id: 152138*/;
  var mermaidNodeStyleUtils = require("mermaid-node-style-utils") /*id: 587619*/;
  var mermaidTextIconUtils = require("mermaid-text-icon-utils") /*id: 5699*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var roughDrawingCore = require("rough-drawing-core") /*id: 157146*/;
  var d = mermaidConfigUtils.setName((t, e, r, a, s, i) => {
    if (e.arrowTypeStart) {
      y(t, "start", e.arrowTypeStart, r, a, s, i);
    }
    if (e.arrowTypeEnd) {
      y(t, "end", e.arrowTypeEnd, r, a, s, i);
    }
  }, "addEdgeMarkers");
  var p = {
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
  var y = mermaidConfigUtils.setName((t, e, r, a, s, i, n) => {
    let l = p[r];
    if (!l) {
      mermaidConfigUtils.logger.warn(`Unknown arrow type: ${r}`);
      return;
    }
    let o = l.type;
    let c = `${s}_${i}-${o}${e === "start" ? "Start" : "End"}`;
    if (n && n.trim() !== "") {
      let r = n.replace(/[^\dA-Za-z]/g, "_");
      let s = `${c}_${r}`;
      if (!document.getElementById(s)) {
        let t = document.getElementById(c);
        if (t) {
          var h;
          let e = t.cloneNode(true);
          e.id = s;
          e.querySelectorAll("path, circle, line").forEach(t => {
            t.setAttribute("stroke", n);
            if (l.fill) {
              t.setAttribute("fill", n);
            }
          });
          if ((h = t.parentNode) !== null && h !== undefined) {
            h.appendChild(e);
          }
        }
      }
      t.attr(`marker-${e}`, `url(${a}#${s})`);
    } else {
      t.attr(`marker-${e}`, `url(${a}#${c})`);
    }
  }, "addEdgeMarker");
  var g = new Map();
  var m = new Map();
  var f = mermaidConfigUtils.setName(() => {
    g.clear();
    m.clear();
  }, "clear");
  var b = mermaidConfigUtils.setName(t => t ? t.reduce((t, e) => t + ";" + e, "") : "", "getLabelStyles");
  var k = mermaidConfigUtils.setName(async (t, e) => {
    let r;
    let a = mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels);
    let i = await mermaidTextIconUtils.replaceIconSubstring(t, e.label, {
      style: b(e.labelStyle),
      useHtmlLabels: a,
      addSvgBackground: true,
      isNode: false
    });
    mermaidConfigUtils.logger.info("abc82", e, e.labelType);
    let n = t.insert("g").attr("class", "edgeLabel");
    let o = n.insert("g").attr("class", "label");
    o.node().appendChild(i);
    let h = i.getBBox();
    if (a) {
      let t = i.children[0];
      let e = axisAndZoomUtilities.select(i);
      h = t.getBoundingClientRect();
      e.attr("width", h.width);
      e.attr("height", h.height);
    }
    o.attr("transform", "translate(" + -h.width / 2 + ", " + -h.height / 2 + ")");
    g.set(e.id, n);
    e.width = h.width;
    e.height = h.height;
    if (e.startLabelLeft) {
      let a = await mermaidNodeShapesRenderer_1.createLabel(e.startLabelLeft, b(e.labelStyle));
      let i = t.insert("g").attr("class", "edgeTerminals");
      let n = i.insert("g").attr("class", "inner");
      r = n.node().appendChild(a);
      let l = a.getBBox();
      n.attr("transform", "translate(" + -l.width / 2 + ", " + -l.height / 2 + ")");
      if (!m.get(e.id)) {
        m.set(e.id, {});
      }
      m.get(e.id).startLeft = i;
      A(r, e.startLabelLeft);
    }
    if (e.startLabelRight) {
      let a = await mermaidNodeShapesRenderer_1.createLabel(e.startLabelRight, b(e.labelStyle));
      let i = t.insert("g").attr("class", "edgeTerminals");
      let n = i.insert("g").attr("class", "inner");
      r = i.node().appendChild(a);
      n.node().appendChild(a);
      let l = a.getBBox();
      n.attr("transform", "translate(" + -l.width / 2 + ", " + -l.height / 2 + ")");
      if (!m.get(e.id)) {
        m.set(e.id, {});
      }
      m.get(e.id).startRight = i;
      A(r, e.startLabelRight);
    }
    if (e.endLabelLeft) {
      let a = await mermaidNodeShapesRenderer_1.createLabel(e.endLabelLeft, b(e.labelStyle));
      let i = t.insert("g").attr("class", "edgeTerminals");
      let n = i.insert("g").attr("class", "inner");
      r = n.node().appendChild(a);
      let l = a.getBBox();
      n.attr("transform", "translate(" + -l.width / 2 + ", " + -l.height / 2 + ")");
      i.node().appendChild(a);
      if (!m.get(e.id)) {
        m.set(e.id, {});
      }
      m.get(e.id).endLeft = i;
      A(r, e.endLabelLeft);
    }
    if (e.endLabelRight) {
      let a = await mermaidNodeShapesRenderer_1.createLabel(e.endLabelRight, b(e.labelStyle));
      let i = t.insert("g").attr("class", "edgeTerminals");
      let n = i.insert("g").attr("class", "inner");
      r = n.node().appendChild(a);
      let l = a.getBBox();
      n.attr("transform", "translate(" + -l.width / 2 + ", " + -l.height / 2 + ")");
      i.node().appendChild(a);
      if (!m.get(e.id)) {
        m.set(e.id, {});
      }
      m.get(e.id).endRight = i;
      A(r, e.endLabelRight);
    }
    return i;
  }, "insertEdgeLabel");
  function A(t, e) {
    if (mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels && t) {
      t.style.width = e.length * 9 + "px";
      t.style.height = "12px";
    }
  }
  mermaidConfigUtils.setName(A, "setTerminalWidth");
  var C = mermaidConfigUtils.setName((t, e) => {
    mermaidConfigUtils.logger.debug("Moving label abc88 ", t.id, t.label, g.get(t.id), e);
    let r = e.updatedPath ? e.updatedPath : e.originalPath;
    let a = mermaidConfigUtils.getConfigAlias();
    let {
      subGraphTitleTotalMargin: s
    } = mermaidSubgraphTitleMarginUtils.getSubGraphTitleMargins(a);
    if (t.label) {
      let a = g.get(t.id);
      let i = t.x;
      let n = t.y;
      if (r) {
        let a = mermaidTextLayoutUtils.textLayoutUtils.calcLabelPosition(r);
        mermaidConfigUtils.logger.debug("Moving label " + t.label + " from (", i, ",", n, ") to (", a.x, ",", a.y, ") abc88");
        if (e.updatedPath) {
          i = a.x;
          n = a.y;
        }
      }
      a.attr("transform", `translate(${i}, ${n + s / 2})`);
    }
    if (t.startLabelLeft) {
      let e = m.get(t.id).startLeft;
      let a = t.x;
      let s = t.y;
      if (r) {
        let e = mermaidTextLayoutUtils.textLayoutUtils.calcTerminalLabelPosition(!!t.arrowTypeStart * 10, "start_left", r);
        a = e.x;
        s = e.y;
      }
      e.attr("transform", `translate(${a}, ${s})`);
    }
    if (t.startLabelRight) {
      let e = m.get(t.id).startRight;
      let a = t.x;
      let s = t.y;
      if (r) {
        let e = mermaidTextLayoutUtils.textLayoutUtils.calcTerminalLabelPosition(!!t.arrowTypeStart * 10, "start_right", r);
        a = e.x;
        s = e.y;
      }
      e.attr("transform", `translate(${a}, ${s})`);
    }
    if (t.endLabelLeft) {
      let e = m.get(t.id).endLeft;
      let a = t.x;
      let s = t.y;
      if (r) {
        let e = mermaidTextLayoutUtils.textLayoutUtils.calcTerminalLabelPosition(!!t.arrowTypeEnd * 10, "end_left", r);
        a = e.x;
        s = e.y;
      }
      e.attr("transform", `translate(${a}, ${s})`);
    }
    if (t.endLabelRight) {
      let e = m.get(t.id).endRight;
      let a = t.x;
      let s = t.y;
      if (r) {
        let e = mermaidTextLayoutUtils.textLayoutUtils.calcTerminalLabelPosition(!!t.arrowTypeEnd * 10, "end_right", r);
        a = e.x;
        s = e.y;
      }
      e.attr("transform", `translate(${a}, ${s})`);
    }
  }, "positionEdgeLabel");
  var E = mermaidConfigUtils.setName((t, e) => {
    let r = t.x;
    let a = t.y;
    let s = Math.abs(e.x - r);
    let i = Math.abs(e.y - a);
    let n = t.width / 2;
    let l = t.height / 2;
    return s >= n || i >= l;
  }, "outsideNode");
  var T = mermaidConfigUtils.setName((t, e, r) => {
    mermaidConfigUtils.logger.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(e)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);
    let a = t.x;
    let s = t.y;
    let i = Math.abs(a - r.x);
    let n = t.width / 2;
    let l = r.x < e.x ? n - i : n + i;
    let o = t.height / 2;
    let c = Math.abs(e.y - r.y);
    let h = Math.abs(e.x - r.x);
    if (Math.abs(s - e.y) * n > Math.abs(a - e.x) * o) {
      let t = r.y < e.y ? e.y - o - s : s - o - e.y;
      l = h * t / c;
      let a = {
        x: r.x < e.x ? r.x + l : r.x - h + l,
        y: r.y < e.y ? r.y + c - t : r.y - c + t
      };
      if (l === 0) {
        a.x = e.x;
        a.y = e.y;
      }
      if (h === 0) {
        a.x = e.x;
      }
      if (c === 0) {
        a.y = e.y;
      }
      mermaidConfigUtils.logger.debug(`abc89 top/bottom calc, Q ${c}, q ${t}, R ${h}, r ${l}`, a);
      return a;
    }
    {
      let t = c * (l = r.x < e.x ? e.x - n - a : a - n - e.x) / h;
      let s = r.x < e.x ? r.x + h - l : r.x - h + l;
      let i = r.y < e.y ? r.y + t : r.y - t;
      mermaidConfigUtils.logger.debug(`sides calc abc89, Q ${c}, q ${t}, R ${h}, r ${l}`, {
        _x: s,
        _y: i
      });
      if (l === 0) {
        s = e.x;
        i = e.y;
      }
      if (h === 0) {
        s = e.x;
      }
      if (c === 0) {
        i = e.y;
      }
      return {
        x: s,
        y: i
      };
    }
  }, "intersection");
  var _ = mermaidConfigUtils.setName((t, e) => {
    mermaidConfigUtils.logger.warn("abc88 cutPathAtIntersect", t, e);
    let r = [];
    let a = t[0];
    let s = false;
    t.forEach(t => {
      mermaidConfigUtils.logger.info("abc88 checking point", t, e);
      if (E(e, t) || s) {
        mermaidConfigUtils.logger.warn("abc88 outside", t, a);
        a = t;
        if (!s) {
          r.push(t);
        }
      } else {
        let i = T(e, a, t);
        mermaidConfigUtils.logger.debug("abc88 inside", t, a, i);
        mermaidConfigUtils.logger.debug("abc88 intersection", i, e);
        let n = false;
        r.forEach(t => {
          n = n || t.x === i.x && t.y === i.y;
        });
        if (r.some(t => t.x === i.x && t.y === i.y)) {
          mermaidConfigUtils.logger.warn("abc88 no intersect", i, r);
        } else {
          r.push(i);
        }
        s = true;
      }
    });
    mermaidConfigUtils.logger.debug("returning points", r);
    return r;
  }, "cutPathAtIntersect");
  function x(t) {
    let e = [];
    let r = [];
    for (let a = 1; a < t.length - 1; a++) {
      let s = t[a - 1];
      let i = t[a];
      let n = t[a + 1];
      if (s.x === i.x && i.y === n.y && Math.abs(i.x - n.x) > 5 && Math.abs(i.y - s.y) > 5) {
        e.push(i);
        r.push(a);
      } else if (s.y === i.y && i.x === n.x && Math.abs(i.x - s.x) > 5 && Math.abs(i.y - n.y) > 5) {
        e.push(i);
        r.push(a);
      }
    }
    return {
      cornerPoints: e,
      cornerPointPositions: r
    };
  }
  mermaidConfigUtils.setName(x, "extractCornerPoints");
  var F = mermaidConfigUtils.setName(function (t, e, r) {
    let a = e.x - t.x;
    let s = e.y - t.y;
    let i = r / Math.sqrt(a * a + s * s);
    return {
      x: e.x - i * a,
      y: e.y - i * s
    };
  }, "findAdjacentPoint");
  var B = mermaidConfigUtils.setName(function (t) {
    let {
      cornerPointPositions: e
    } = x(t);
    let r = [];
    for (let a = 0; a < t.length; a++) {
      if (e.includes(a)) {
        let e = t[a - 1];
        let s = t[a + 1];
        let i = t[a];
        let n = F(e, i, 5);
        let l = F(s, i, 5);
        let o = l.x - n.x;
        let c = l.y - n.y;
        r.push(n);
        let h = Math.sqrt(2) * 2;
        let d = {
          x: i.x,
          y: i.y
        };
        if (Math.abs(s.x - e.x) > 10 && Math.abs(s.y - e.y) >= 10) {
          mermaidConfigUtils.logger.debug("Corner point fixing", Math.abs(s.x - e.x), Math.abs(s.y - e.y));
          d = i.x === n.x ? {
            x: o < 0 ? n.x - 5 + h : n.x + 5 - h,
            y: c < 0 ? n.y - h : n.y + h
          } : {
            x: o < 0 ? n.x - h : n.x + h,
            y: c < 0 ? n.y - 5 + h : n.y + 5 - h
          };
        } else {
          mermaidConfigUtils.logger.debug("Corner point skipping fixing", Math.abs(s.x - e.x), Math.abs(s.y - e.y));
        }
        r.push(d, l);
      } else {
        r.push(t[a]);
      }
    }
    return r;
  }, "fixCorners");
  var S = mermaidConfigUtils.setName(function (t, e, r, s, i, l, p) {
    let g;
    let m;
    let {
      handDrawnSeed: f
    } = mermaidConfigUtils.getConfigAlias();
    let b = e.points;
    let k = false;
    let A = [];
    for (let t in e.cssCompiledStyles) {
      if (!mermaidNodeStyleUtils.isLabelStyle(t)) {
        A.push(e.cssCompiledStyles[t]);
      }
    }
    if (l.intersect && i.intersect) {
      (b = b.slice(1, e.points.length - 1)).unshift(i.intersect(b[0]));
      mermaidConfigUtils.logger.debug("Last point APA12", e.start, "-->", e.end, b[b.length - 1], l, l.intersect(b[b.length - 1]));
      b.push(l.intersect(b[b.length - 1]));
    }
    if (e.toCluster) {
      mermaidConfigUtils.logger.info("to cluster abc88", r.get(e.toCluster));
      b = _(e.points, r.get(e.toCluster).node);
      k = true;
    }
    if (e.fromCluster) {
      mermaidConfigUtils.logger.debug("from cluster abc88", r.get(e.fromCluster), JSON.stringify(b, null, 2));
      b = _(b.reverse(), r.get(e.fromCluster).node).reverse();
      k = true;
    }
    let C = b.filter(t => !Number.isNaN(t.y));
    C = B(C);
    let E = axisAndZoomUtilities.$0Z;
    E = axisAndZoomUtilities.c_6;
    switch (e.curve) {
      case "linear":
        E = axisAndZoomUtilities.c_6;
        break;
      case "basis":
      default:
        E = axisAndZoomUtilities.$0Z;
        break;
      case "cardinal":
        E = axisAndZoomUtilities.YY7;
        break;
      case "bumpX":
        E = axisAndZoomUtilities.qpX;
        break;
      case "bumpY":
        E = axisAndZoomUtilities.u93;
        break;
      case "catmullRom":
        E = axisAndZoomUtilities.zgE;
        break;
      case "monotoneX":
        E = axisAndZoomUtilities.FdL;
        break;
      case "monotoneY":
        E = axisAndZoomUtilities.ak_;
        break;
      case "natural":
        E = axisAndZoomUtilities.SxZ;
        break;
      case "step":
        E = axisAndZoomUtilities.eA_;
        break;
      case "stepAfter":
        E = axisAndZoomUtilities.jsv;
        break;
      case "stepBefore":
        E = axisAndZoomUtilities.createTensionZero;
    }
    let {
      x: T,
      y: x
    } = lineArrowOffsetUtils.getLineOffsetFns(e);
    let F = axisAndZoomUtilities.jvg().x(T).y(x).curve(E);
    switch (e.thickness) {
      case "normal":
      default:
        g = "edge-thickness-normal";
        break;
      case "thick":
        g = "edge-thickness-thick";
        break;
      case "invisible":
        g = "edge-thickness-invisible";
    }
    switch (e.pattern) {
      case "solid":
      default:
        g += " edge-pattern-solid";
        break;
      case "dotted":
        g += " edge-pattern-dotted";
        break;
      case "dashed":
        g += " edge-pattern-dashed";
    }
    let S = F(C);
    let D = Array.isArray(e.style) ? e.style : e.style ? [e.style] : [];
    let L = D.find(t => t == null ? undefined : t.startsWith("stroke:"));
    if (e.look === "handDrawn") {
      let r = roughDrawingCore.roughLibrary.svg(t);
      Object.assign([], C);
      let a = r.path(S, {
        roughness: 0.3,
        seed: f
      });
      g += " transition";
      let s = (m = axisAndZoomUtilities.select(a).select("path").attr("id", e.id).attr("class", " " + g + (e.classes ? " " + e.classes : "")).attr("style", D ? D.reduce((t, e) => t + ";" + e, "") : "")).attr("d");
      m.attr("d", s);
      t.node().appendChild(m.node());
    } else {
      let r = A.join(";");
      let a = D ? D.reduce((t, e) => t + e + ";", "") : "";
      let s = "";
      if (e.animate) {
        s = " edge-animation-fast";
      }
      if (e.animation) {
        s = " edge-animation-" + e.animation;
      }
      let i = r ? r + ";" + a + ";" : a;
      m = t.append("path").attr("d", S).attr("id", e.id).attr("class", " " + g + (e.classes ? " " + e.classes : "") + (s ?? "")).attr("style", i);
      L = i.match(/stroke:([^;]+)/)?.[1];
    }
    let $ = "";
    if (mermaidConfigUtils.getConfigAlias().flowchart.arrowMarkerAbsolute || mermaidConfigUtils.getConfigAlias().state.arrowMarkerAbsolute) {
      $ = mermaidConfigUtils.getUrl(true);
    }
    mermaidConfigUtils.logger.info("arrowTypeStart", e.arrowTypeStart);
    mermaidConfigUtils.logger.info("arrowTypeEnd", e.arrowTypeEnd);
    d(m, e, $, p, s, L);
    let w = Math.floor(b.length / 2);
    let M = b[w];
    if (!mermaidTextLayoutUtils.textLayoutUtils.isLabelCoordinateInPath(M, m.attr("d"))) {
      k = true;
    }
    let O = {};
    if (k) {
      O.updatedPath = b;
    }
    O.originalPath = e.points;
    return O;
  }, "insertEdge");
  var D = mermaidConfigUtils.setName((t, e, r, a) => {
    e.forEach(e => {
      X[e](t, r, a);
    });
  }, "insertMarkers");
  var L = mermaidConfigUtils.setName((t, e, r) => {
    mermaidConfigUtils.logger.trace("Making markers for ", r);
    t.append("defs").append("marker").attr("id", r + "_" + e + "-extensionStart").attr("class", "marker extension " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-extensionEnd").attr("class", "marker extension " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
  }, "extension");
  var $ = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-compositionStart").attr("class", "marker composition " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-compositionEnd").attr("class", "marker composition " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "composition");
  var w = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-aggregationStart").attr("class", "marker aggregation " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-aggregationEnd").attr("class", "marker aggregation " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "aggregation");
  var M = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-dependencyStart").attr("class", "marker dependency " + e).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-dependencyEnd").attr("class", "marker dependency " + e).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "dependency");
  var O = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-lollipopStart").attr("class", "marker lollipop " + e).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
    t.append("defs").append("marker").attr("id", r + "_" + e + "-lollipopEnd").attr("class", "marker lollipop " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
  }, "lollipop");
  var N = mermaidConfigUtils.setName((t, e, r) => {
    t.append("marker").attr("id", r + "_" + e + "-pointEnd").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    t.append("marker").attr("id", r + "_" + e + "-pointStart").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "point");
  var v = mermaidConfigUtils.setName((t, e, r) => {
    t.append("marker").attr("id", r + "_" + e + "-circleEnd").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    t.append("marker").attr("id", r + "_" + e + "-circleStart").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "circle");
  var W = mermaidConfigUtils.setName((t, e, r) => {
    t.append("marker").attr("id", r + "_" + e + "-crossEnd").attr("class", "marker cross " + e).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
    t.append("marker").attr("id", r + "_" + e + "-crossStart").attr("class", "marker cross " + e).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
  }, "cross");
  var R = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "barb");
  var I = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-onlyOneStart").attr("class", "marker onlyOne " + e).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-onlyOneEnd").attr("class", "marker onlyOne " + e).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
  }, "only_one");
  var P = mermaidConfigUtils.setName((t, e, r) => {
    let a = t.append("defs").append("marker").attr("id", r + "_" + e + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + e).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    a.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6);
    a.append("path").attr("d", "M9,0 L9,18");
    let s = t.append("defs").append("marker").attr("id", r + "_" + e + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + e).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6);
    s.append("path").attr("d", "M21,0 L21,18");
  }, "zero_or_one");
  var Y = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-oneOrMoreStart").attr("class", "marker oneOrMore " + e).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + e).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
  }, "one_or_more");
  var U = mermaidConfigUtils.setName((t, e, r) => {
    let a = t.append("defs").append("marker").attr("id", r + "_" + e + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + e).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    a.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6);
    a.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
    let s = t.append("defs").append("marker").attr("id", r + "_" + e + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + e).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6);
    s.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
  }, "zero_or_more");
  var X = {
    extension: L,
    composition: $,
    aggregation: w,
    dependency: M,
    lollipop: O,
    point: N,
    circle: v,
    cross: W,
    barb: R,
    only_one: I,
    zero_or_one: P,
    one_or_more: Y,
    zero_or_more: U,
    requirement_arrow: mermaidConfigUtils.setName((t, e, r) => {
      t.append("defs").append("marker").attr("id", r + "_" + e + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", `M0,0
      L20,10
      M20,10
      L0,20`);
    }, "requirement_arrow"),
    requirement_contains: mermaidConfigUtils.setName((t, e, r) => {
      let a = t.append("defs").append("marker").attr("id", r + "_" + e + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
      a.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none");
      a.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10);
      a.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
    }, "requirement_contains")
  };
  var z = D;
  require.d(exports, {
    insertMarkers: function () {
      return z;
    },
    insertEdgeLabel: function () {
      return k;
    },
    positionEdgeLabel: function () {
      return C;
    },
    insertEdge: function () {
      return S;
    },
    clear: function () {
      return f;
    }
  });
}