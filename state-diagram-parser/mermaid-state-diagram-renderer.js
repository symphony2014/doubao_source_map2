// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'stateDiagramV2ParserDb'
// - Resolved require(831790) to 'state-diagram-v2-parser-db'
// - Resolved require(150827) to 'diagram-element-selector'
// - Resolved require(3049) to 'mermaid-svg-viewport-setup'
// - Resolved require(484129) to 'mermaid-layout-registry-renderer'
// - Resolved require(968232) to 'mermaid-flowchart-edge-renderer'
// - Resolved require(173696) to 'diagram-arrow-offset-utils'
// - Resolved require(411411) to 'mermaid-node-shapes-renderer'
// - Resolved require(954180) to 'subgraph-title-margins-calculator'
// - Resolved require(717687) to 'mermaid-style-utils'
// - Resolved require(990626) to 'icon-utils-text-rendering'
// - Renamed variable 'n' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'a' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'o' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'l' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'c' to 'graphLayoutEngine'
// - Resolved require(855238) to 'graph-layout-engine'
// - Renamed variable 'd' to 'graphDataStructureExport'
// - Resolved require(736993) to 'graph-data-structure-export'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'SY' to 'textUtilities' (module 401926)
// - Updated imported property 'Gr' to 'getUrl' (module 401926)
// - Updated imported property 'v2' to 'configureSvgSize' (module 401926)
// - Updated imported property 'oI' to 'StateDB' (module 831790)
// - Updated imported property 'J8' to 'parser' (module 831790)
// - Updated imported property 'Ee' to 'getStyles' (module 831790)
// - Updated imported property 'w8' to 'mermaidUtils' (module 583673)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'k' to 'Graph' (module 736993)
// - Updated imported property 'bK' to 'layoutGraph' (module 855238)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99388.b41820dc.js
         * chunkId: 99388
         * moduleId: 465795
         */
module.exports = function (module, exports, require) {
  var s;
  var stateDiagramV2ParserDb = require("state-diagram-v2-parser-db") /*id: 831790*/;
  require("diagram-element-selector") /*id: 150827*/;
  require("mermaid-svg-viewport-setup") /*id: 3049*/;
  require("mermaid-layout-registry-renderer") /*id: 484129*/;
  require("mermaid-flowchart-edge-renderer") /*id: 968232*/;
  require("diagram-arrow-offset-utils") /*id: 173696*/;
  require("mermaid-node-shapes-renderer") /*id: 411411*/;
  require("subgraph-title-margins-calculator") /*id: 954180*/;
  require("mermaid-style-utils") /*id: 717687*/;
  require("icon-utils-text-rendering") /*id: 990626*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var graphLayoutEngine = require("graph-layout-engine") /*id: 855238*/;
  var graphDataStructureExport = require("graph-data-structure-export") /*id: 736993*/;
  var h = loggerLevelUtils.setFunctionName(t => t.append("circle").attr("class", "start-state").attr("r", mermaidConfigUtils_1.getConfigAlias().state.sizeUnit).attr("cx", mermaidConfigUtils_1.getConfigAlias().state.padding + mermaidConfigUtils_1.getConfigAlias().state.sizeUnit).attr("cy", mermaidConfigUtils_1.getConfigAlias().state.padding + mermaidConfigUtils_1.getConfigAlias().state.sizeUnit), "drawStartState");
  var u = loggerLevelUtils.setFunctionName(t => t.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", mermaidConfigUtils_1.getConfigAlias().state.textHeight).attr("class", "divider").attr("x2", mermaidConfigUtils_1.getConfigAlias().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider");
  var p = loggerLevelUtils.setFunctionName((t, e) => {
    let i = t.append("text").attr("x", mermaidConfigUtils_1.getConfigAlias().state.padding * 2).attr("y", mermaidConfigUtils_1.getConfigAlias().state.textHeight + mermaidConfigUtils_1.getConfigAlias().state.padding * 2).attr("font-size", mermaidConfigUtils_1.getConfigAlias().state.fontSize).attr("class", "state-title").text(e.id);
    let s = i.node().getBBox();
    t.insert("rect", ":first-child").attr("x", mermaidConfigUtils_1.getConfigAlias().state.padding).attr("y", mermaidConfigUtils_1.getConfigAlias().state.padding).attr("width", s.width + mermaidConfigUtils_1.getConfigAlias().state.padding * 2).attr("height", s.height + mermaidConfigUtils_1.getConfigAlias().state.padding * 2).attr("rx", mermaidConfigUtils_1.getConfigAlias().state.radius);
    return i;
  }, "drawSimpleState");
  var g = loggerLevelUtils.setFunctionName((t, e) => {
    let i = loggerLevelUtils.setFunctionName(function (t, e, i) {
      let s = t.append("tspan").attr("x", mermaidConfigUtils_1.getConfigAlias().state.padding * 2).text(e);
      if (!i) {
        s.attr("dy", mermaidConfigUtils_1.getConfigAlias().state.textHeight);
      }
    }, "addTspan");
    let s = t.append("text").attr("x", mermaidConfigUtils_1.getConfigAlias().state.padding * 2).attr("y", mermaidConfigUtils_1.getConfigAlias().state.textHeight + mermaidConfigUtils_1.getConfigAlias().state.padding * 1.3).attr("font-size", mermaidConfigUtils_1.getConfigAlias().state.fontSize).attr("class", "state-title").text(e.descriptions[0]).node().getBBox();
    let r = s.height;
    let n = t.append("text").attr("x", mermaidConfigUtils_1.getConfigAlias().state.padding).attr("y", r + mermaidConfigUtils_1.getConfigAlias().state.padding * 0.4 + mermaidConfigUtils_1.getConfigAlias().state.dividerMargin + mermaidConfigUtils_1.getConfigAlias().state.textHeight).attr("class", "state-description");
    let l = true;
    let c = true;
    e.descriptions.forEach(function (t) {
      if (!l) {
        i(n, t, c);
        c = false;
      }
      l = false;
    });
    let d = t.append("line").attr("x1", mermaidConfigUtils_1.getConfigAlias().state.padding).attr("y1", mermaidConfigUtils_1.getConfigAlias().state.padding + r + mermaidConfigUtils_1.getConfigAlias().state.dividerMargin / 2).attr("y2", mermaidConfigUtils_1.getConfigAlias().state.padding + r + mermaidConfigUtils_1.getConfigAlias().state.dividerMargin / 2).attr("class", "descr-divider");
    let h = n.node().getBBox();
    let u = Math.max(h.width, s.width);
    d.attr("x2", u + mermaidConfigUtils_1.getConfigAlias().state.padding * 3);
    t.insert("rect", ":first-child").attr("x", mermaidConfigUtils_1.getConfigAlias().state.padding).attr("y", mermaidConfigUtils_1.getConfigAlias().state.padding).attr("width", u + mermaidConfigUtils_1.getConfigAlias().state.padding * 2).attr("height", h.height + r + mermaidConfigUtils_1.getConfigAlias().state.padding * 2).attr("rx", mermaidConfigUtils_1.getConfigAlias().state.radius);
    return t;
  }, "drawDescrState");
  var y = loggerLevelUtils.setFunctionName((t, e, i) => {
    let s;
    let r = mermaidConfigUtils_1.getConfigAlias().state.padding;
    let n = mermaidConfigUtils_1.getConfigAlias().state.padding * 2;
    let o = t.node().getBBox();
    let l = o.width;
    let c = o.x;
    let d = t.append("text").attr("x", 0).attr("y", mermaidConfigUtils_1.getConfigAlias().state.titleShift).attr("font-size", mermaidConfigUtils_1.getConfigAlias().state.fontSize).attr("class", "state-title").text(e.id);
    let h = d.node().getBBox().width + n;
    let u = Math.max(h, l);
    if (u === l) {
      u += n;
    }
    let p = t.node().getBBox();
    e.doc;
    s = c - r;
    if (h > l) {
      s = (l - u) / 2 + r;
    }
    if (Math.abs(c - p.x) < r && h > l) {
      s = c - (h - l) / 2;
    }
    let g = 1 - mermaidConfigUtils_1.getConfigAlias().state.textHeight;
    t.insert("rect", ":first-child").attr("x", s).attr("y", g).attr("class", i ? "alt-composit" : "composit").attr("width", u).attr("height", p.height + mermaidConfigUtils_1.getConfigAlias().state.textHeight + mermaidConfigUtils_1.getConfigAlias().state.titleShift + 1).attr("rx", "0");
    d.attr("x", s + r);
    if (h <= l) {
      d.attr("x", c + (u - n) / 2 - h / 2 + r);
    }
    t.insert("rect", ":first-child").attr("x", s).attr("y", mermaidConfigUtils_1.getConfigAlias().state.titleShift - mermaidConfigUtils_1.getConfigAlias().state.textHeight - mermaidConfigUtils_1.getConfigAlias().state.padding).attr("width", u).attr("height", mermaidConfigUtils_1.getConfigAlias().state.textHeight * 3).attr("rx", mermaidConfigUtils_1.getConfigAlias().state.radius);
    t.insert("rect", ":first-child").attr("x", s).attr("y", mermaidConfigUtils_1.getConfigAlias().state.titleShift - mermaidConfigUtils_1.getConfigAlias().state.textHeight - mermaidConfigUtils_1.getConfigAlias().state.padding).attr("width", u).attr("height", p.height + 3 + mermaidConfigUtils_1.getConfigAlias().state.textHeight * 2).attr("rx", mermaidConfigUtils_1.getConfigAlias().state.radius);
    return t;
  }, "addTitleAndBox");
  var f = loggerLevelUtils.setFunctionName(t => {
    t.append("circle").attr("class", "end-state-outer").attr("r", mermaidConfigUtils_1.getConfigAlias().state.sizeUnit + mermaidConfigUtils_1.getConfigAlias().state.miniPadding).attr("cx", mermaidConfigUtils_1.getConfigAlias().state.padding + mermaidConfigUtils_1.getConfigAlias().state.sizeUnit + mermaidConfigUtils_1.getConfigAlias().state.miniPadding).attr("cy", mermaidConfigUtils_1.getConfigAlias().state.padding + mermaidConfigUtils_1.getConfigAlias().state.sizeUnit + mermaidConfigUtils_1.getConfigAlias().state.miniPadding);
    return t.append("circle").attr("class", "end-state-inner").attr("r", mermaidConfigUtils_1.getConfigAlias().state.sizeUnit).attr("cx", mermaidConfigUtils_1.getConfigAlias().state.padding + mermaidConfigUtils_1.getConfigAlias().state.sizeUnit + 2).attr("cy", mermaidConfigUtils_1.getConfigAlias().state.padding + mermaidConfigUtils_1.getConfigAlias().state.sizeUnit + 2);
  }, "drawEndState");
  var S = loggerLevelUtils.setFunctionName((t, e) => {
    let i = mermaidConfigUtils_1.getConfigAlias().state.forkWidth;
    let s = mermaidConfigUtils_1.getConfigAlias().state.forkHeight;
    if (e.parentId) {
      let t = i;
      i = s;
      s = t;
    }
    return t.append("rect").style("stroke", "black").style("fill", "black").attr("width", i).attr("height", s).attr("x", mermaidConfigUtils_1.getConfigAlias().state.padding).attr("y", mermaidConfigUtils_1.getConfigAlias().state.padding);
  }, "drawForkJoinState");
  var m = loggerLevelUtils.setFunctionName((t, e, i, s) => {
    let r = 0;
    let n = s.append("text");
    n.style("text-anchor", "start");
    n.attr("class", "noteText");
    let o = t.replace(/\r\n/g, "<br/>");
    let l = (o = o.replace(/\n/g, "<br/>")).split(mermaidConfigUtils_1.textUtilities.lineBreakRegex);
    let c = mermaidConfigUtils_1.getConfigAlias().state.noteMargin * 1.25;
    for (let t of l) {
      let s = t.trim();
      if (s.length > 0) {
        let t = n.append("tspan");
        t.text(s);
        if (c === 0) {
          c += t.node().getBBox().height;
        }
        r += c;
        t.attr("x", e + mermaidConfigUtils_1.getConfigAlias().state.noteMargin);
        t.attr("y", i + r + mermaidConfigUtils_1.getConfigAlias().state.noteMargin * 1.25);
      }
    }
    return {
      textWidth: n.node().getBBox().width,
      textHeight: r
    };
  }, "_drawLongText");
  var x = loggerLevelUtils.setFunctionName((t, e) => {
    e.attr("class", "state-note");
    let i = e.append("rect").attr("x", 0).attr("y", mermaidConfigUtils_1.getConfigAlias().state.padding);
    let {
      textWidth: s,
      textHeight: r
    } = m(t, 0, 0, e.append("g"));
    i.attr("height", r + mermaidConfigUtils_1.getConfigAlias().state.noteMargin * 2);
    i.attr("width", s + mermaidConfigUtils_1.getConfigAlias().state.noteMargin * 2);
    return i;
  }, "drawNote");
  var b = loggerLevelUtils.setFunctionName(function (t, e) {
    let i = e.id;
    let s = {
      id: i,
      label: e.id,
      width: 0,
      height: 0
    };
    let r = t.append("g").attr("id", i).attr("class", "stateGroup");
    if (e.type === "start") {
      h(r);
    }
    if (e.type === "end") {
      f(r);
    }
    if (e.type === "fork" || e.type === "join") {
      S(r, e);
    }
    if (e.type === "note") {
      x(e.note.text, r);
    }
    if (e.type === "divider") {
      u(r);
    }
    if (e.type === "default" && e.descriptions.length === 0) {
      p(r, e);
    }
    if (e.type === "default" && e.descriptions.length > 0) {
      g(r, e);
    }
    let n = r.node().getBBox();
    s.width = n.width + mermaidConfigUtils_1.getConfigAlias().state.padding * 2;
    s.height = n.height + mermaidConfigUtils_1.getConfigAlias().state.padding * 2;
    return s;
  }, "drawState");
  var _ = 0;
  var T = loggerLevelUtils.setFunctionName(function (t, e, i) {
    let s = loggerLevelUtils.setFunctionName(function (t) {
      switch (t) {
        case stateDiagramV2ParserDb.StateDB.relationType.AGGREGATION:
          return "aggregation";
        case stateDiagramV2ParserDb.StateDB.relationType.EXTENSION:
          return "extension";
        case stateDiagramV2ParserDb.StateDB.relationType.COMPOSITION:
          return "composition";
        case stateDiagramV2ParserDb.StateDB.relationType.DEPENDENCY:
          return "dependency";
      }
    }, "getRelationType");
    e.points = e.points.filter(t => !Number.isNaN(t.y));
    let c = e.points;
    let d = axisAndZoomUtilities.jvg().x(function (t) {
      return t.x;
    }).y(function (t) {
      return t.y;
    }).curve(axisAndZoomUtilities.$0Z);
    let h = t.append("path").attr("d", d(c)).attr("id", "edge" + _).attr("class", "transition");
    let u = "";
    if (mermaidConfigUtils_1.getConfigAlias().state.arrowMarkerAbsolute) {
      u = mermaidConfigUtils_1.getUrl(true);
    }
    h.attr("marker-end", "url(" + u + "#" + s(stateDiagramV2ParserDb.StateDB.relationType.DEPENDENCY) + "End)");
    if (i.title !== undefined) {
      let s = t.append("g").attr("class", "stateLabel");
      let {
        x: r,
        y: l
      } = mermaidDiagramUtils.mermaidUtils.calcLabelPosition(e.points);
      let c = mermaidConfigUtils_1.textUtilities.getRows(i.title);
      let d = 0;
      let h = [];
      let u = 0;
      let p = 0;
      for (let t = 0; t <= c.length; t++) {
        let e = s.append("text").attr("text-anchor", "middle").text(c[t]).attr("x", r).attr("y", l + d);
        let i = e.node().getBBox();
        u = Math.max(u, i.width);
        p = Math.min(p, i.x);
        loggerLevelUtils.logger.info(i.x, r, l + d);
        if (d === 0) {
          d = e.node().getBBox().height;
          loggerLevelUtils.logger.info("Title height", d, l);
        }
        h.push(e);
      }
      let g = d * c.length;
      if (c.length > 1) {
        let t = (c.length - 1) * d * 0.5;
        h.forEach((e, i) => e.attr("y", l + i * d - t));
        g = d * c.length;
      }
      let y = s.node().getBBox();
      s.insert("rect", ":first-child").attr("class", "box").attr("x", r - u / 2 - mermaidConfigUtils_1.getConfigAlias().state.padding / 2).attr("y", l - g / 2 - mermaidConfigUtils_1.getConfigAlias().state.padding / 2 - 3.5).attr("width", u + mermaidConfigUtils_1.getConfigAlias().state.padding).attr("height", g + mermaidConfigUtils_1.getConfigAlias().state.padding);
      loggerLevelUtils.logger.info(y);
    }
    _++;
  }, "drawEdge");
  var E = {};
  var v = loggerLevelUtils.setFunctionName(function () {}, "setConf");
  var k = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "insertMarkers");
  var D = loggerLevelUtils.setFunctionName(function (t, e, i, r) {
    let n;
    s = mermaidConfigUtils_1.getConfigAlias().state;
    let c = mermaidConfigUtils_1.getConfigAlias().securityLevel;
    if (c === "sandbox") {
      n = axisAndZoomUtilities.select("#i" + e);
    }
    let d = c === "sandbox" ? axisAndZoomUtilities.select(n.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
    let h = c === "sandbox" ? n.nodes()[0].contentDocument : document;
    loggerLevelUtils.logger.debug("Rendering diagram " + t);
    let u = d.select(`[id='${e}']`);
    k(u);
    L(r.db.getRootDoc(), u, undefined, false, d, h, r);
    let p = s.padding;
    let g = u.node().getBBox();
    let y = g.width + p * 2;
    let f = g.height + p * 2;
    mermaidConfigUtils_1.configureSvgSize(u, f, y * 1.75, s.useMaxWidth);
    u.attr("viewBox", `${g.x - s.padding}  ${g.y - s.padding} ${y} ${f}`);
  }, "draw");
  var C = loggerLevelUtils.setFunctionName(t => t ? t.length * s.fontSizeFactor : 1, "getLabelWidth");
  var L = loggerLevelUtils.setFunctionName((t, e, i, r, n, l, h) => {
    let u;
    let p = new graphDataStructureExport.Graph({
      compound: true,
      multigraph: true
    });
    let g = true;
    for (u = 0; u < t.length; u++) {
      if (t[u].stmt === "relation") {
        g = false;
        break;
      }
    }
    if (i) {
      p.setGraph({
        rankdir: "LR",
        multigraph: true,
        compound: true,
        ranker: "tight-tree",
        ranksep: g ? 1 : s.edgeLengthFactor,
        nodeSep: g ? 1 : 50,
        isMultiGraph: true
      });
    } else {
      p.setGraph({
        rankdir: "TB",
        multigraph: true,
        compound: true,
        ranksep: g ? 1 : s.edgeLengthFactor,
        nodeSep: g ? 1 : 50,
        ranker: "tight-tree",
        isMultiGraph: true
      });
    }
    p.setDefaultEdgeLabel(function () {
      return {};
    });
    let f = h.db.getStates();
    let S = h.db.getRelations();
    for (let t of Object.keys(f)) {
      let a;
      let o = f[t];
      if (i) {
        o.parentId = i;
      }
      if (o.doc) {
        let t = e.append("g").attr("id", o.id).attr("class", "stateGroup");
        a = L(o.doc, t, o.id, !r, n, l, h);
        {
          let e = (t = y(t, o, r)).node().getBBox();
          a.width = e.width;
          a.height = e.height + s.padding / 2;
          E[o.id] = {
            y: s.compositTitleSize
          };
        }
      } else {
        a = b(e, o, p);
      }
      if (o.note) {
        let t = b(e, {
          descriptions: [],
          id: o.id + "-note",
          note: o.note,
          type: "note"
        }, p);
        if (o.note.position === "left of") {
          p.setNode(a.id + "-note", t);
          p.setNode(a.id, a);
        } else {
          p.setNode(a.id, a);
          p.setNode(a.id + "-note", t);
        }
        p.setParent(a.id, a.id + "-group");
        p.setParent(a.id + "-note", a.id + "-group");
      } else {
        p.setNode(a.id, a);
      }
    }
    loggerLevelUtils.logger.debug("Count=", p.nodeCount(), p);
    let m = 0;
    S.forEach(function (t) {
      m++;
      loggerLevelUtils.logger.debug("Setting edge", t);
      p.setEdge(t.id1, t.id2, {
        relation: t,
        width: C(t.title),
        height: s.labelHeight * mermaidConfigUtils_1.textUtilities.getRows(t.title).length,
        labelpos: "c"
      }, "id" + m);
    });
    graphLayoutEngine.layoutGraph(p);
    loggerLevelUtils.logger.debug("Graph after layout", p.nodes());
    let x = e.node();
    p.nodes().forEach(function (t) {
      if (t !== undefined && p.node(t) !== undefined) {
        loggerLevelUtils.logger.warn("Node " + t + ": " + JSON.stringify(p.node(t)));
        n.select("#" + x.id + " #" + t).attr("transform", "translate(" + (p.node(t).x - p.node(t).width / 2) + "," + (p.node(t).y + (E[t] ? E[t].y : 0) - p.node(t).height / 2) + " )");
        n.select("#" + x.id + " #" + t).attr("data-x-shift", p.node(t).x - p.node(t).width / 2);
        l.querySelectorAll("#" + x.id + " #" + t + " .divider").forEach(t => {
          let e = t.parentElement;
          let i = 0;
          let s = 0;
          if (e) {
            if (e.parentElement) {
              i = e.parentElement.getBBox().width;
            }
            if (Number.isNaN(s = parseInt(e.getAttribute("data-x-shift"), 10))) {
              s = 0;
            }
          }
          t.setAttribute("x1", 0 - s + 8);
          t.setAttribute("x2", i - s - 8);
        });
      } else {
        loggerLevelUtils.logger.debug("No Node " + t + ": " + JSON.stringify(p.node(t)));
      }
    });
    let _ = x.getBBox();
    p.edges().forEach(function (t) {
      if (t !== undefined && p.edge(t) !== undefined) {
        loggerLevelUtils.logger.debug("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(p.edge(t)));
        T(e, p.edge(t), p.edge(t).relation);
      }
    });
    _ = x.getBBox();
    let v = {
      id: i || "root",
      label: i || "root",
      width: 0,
      height: 0
    };
    v.width = _.width + s.padding * 2;
    v.height = _.height + s.padding * 2;
    loggerLevelUtils.logger.debug("Doc rendered", v, p);
    return v;
  }, "renderDoc");
  var $ = {
    parser: stateDiagramV2ParserDb.parser,
    get db() {
      return new stateDiagramV2ParserDb.StateDB(1);
    },
    renderer: {
      setConf: v,
      draw: D
    },
    styles: stateDiagramV2ParserDb.getStyles,
    init: loggerLevelUtils.setFunctionName(t => {
      t.state ||= {};
      t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return $;
    }
  });
}