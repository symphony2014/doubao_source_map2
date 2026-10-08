// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mermaidStateDiagramParser'
// - Resolved require(426467) to 'mermaid-state-diagram-parser'
// - Resolved require(553740) to 'mermaid-diagram-element-getter'
// - Resolved require(509839) to 'svg-viewport-setup'
// - Resolved require(103329) to 'mermaid-layout-registry'
// - Resolved require(836477) to 'mermaid-edge-rendering-utils'
// - Resolved require(744654) to 'line-arrow-offset-utils'
// - Resolved require(608361) to 'mermaid-node-shapes-renderer_1'
// - Resolved require(152138) to 'mermaid-subgraph-title-margin-utils'
// - Resolved require(587619) to 'mermaid-node-style-utils'
// - Resolved require(5699) to 'mermaid-text-icon-utils'
// - Renamed variable 's' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'n' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'o' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'l' to 'graphLayoutEngine'
// - Resolved require(855238) to 'graph-layout-engine'
// - Renamed variable 'd' to 'graphDataStructureExport'
// - Resolved require(736993) to 'graph-data-structure-export'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'SY' to 'textUtils' (module 101498)
// - Updated imported property 'Gr' to 'getUrl' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'oI' to 'StateDB' (module 426467)
// - Updated imported property 'J8' to 'parser' (module 426467)
// - Updated imported property 'Ee' to 'getStyles' (module 426467)
// - Updated imported property 'w8' to 'textLayoutUtils' (module 997032)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'k' to 'Graph' (module 736993)
// - Updated imported property 'bK' to 'layoutGraph' (module 855238)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 65122.32b3ba00.js
         * chunkId: 65122
         * moduleId: 794737
         */
module.exports = function (module, exports, require) {
  var a;
  var mermaidStateDiagramParser = require("mermaid-state-diagram-parser") /*id: 426467*/;
  require("mermaid-diagram-element-getter") /*id: 553740*/;
  require("svg-viewport-setup") /*id: 509839*/;
  require("mermaid-layout-registry") /*id: 103329*/;
  require("mermaid-edge-rendering-utils") /*id: 836477*/;
  require("line-arrow-offset-utils") /*id: 744654*/;
  require("mermaid-node-shapes-renderer_1") /*id: 608361*/;
  require("mermaid-subgraph-title-margin-utils") /*id: 152138*/;
  require("mermaid-node-style-utils") /*id: 587619*/;
  require("mermaid-text-icon-utils") /*id: 5699*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var graphLayoutEngine = require("graph-layout-engine") /*id: 855238*/;
  var graphDataStructureExport = require("graph-data-structure-export") /*id: 736993*/;
  var c = mermaidConfigUtils.setName(t => t.append("circle").attr("class", "start-state").attr("r", mermaidConfigUtils.getConfigAlias().state.sizeUnit).attr("cx", mermaidConfigUtils.getConfigAlias().state.padding + mermaidConfigUtils.getConfigAlias().state.sizeUnit).attr("cy", mermaidConfigUtils.getConfigAlias().state.padding + mermaidConfigUtils.getConfigAlias().state.sizeUnit), "drawStartState");
  var h = mermaidConfigUtils.setName(t => t.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", mermaidConfigUtils.getConfigAlias().state.textHeight).attr("class", "divider").attr("x2", mermaidConfigUtils.getConfigAlias().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider");
  var p = mermaidConfigUtils.setName((t, e) => {
    let r = t.append("text").attr("x", mermaidConfigUtils.getConfigAlias().state.padding * 2).attr("y", mermaidConfigUtils.getConfigAlias().state.textHeight + mermaidConfigUtils.getConfigAlias().state.padding * 2).attr("font-size", mermaidConfigUtils.getConfigAlias().state.fontSize).attr("class", "state-title").text(e.id);
    let a = r.node().getBBox();
    t.insert("rect", ":first-child").attr("x", mermaidConfigUtils.getConfigAlias().state.padding).attr("y", mermaidConfigUtils.getConfigAlias().state.padding).attr("width", a.width + mermaidConfigUtils.getConfigAlias().state.padding * 2).attr("height", a.height + mermaidConfigUtils.getConfigAlias().state.padding * 2).attr("rx", mermaidConfigUtils.getConfigAlias().state.radius);
    return r;
  }, "drawSimpleState");
  var u = mermaidConfigUtils.setName((t, e) => {
    let r = mermaidConfigUtils.setName(function (t, e, r) {
      let a = t.append("tspan").attr("x", mermaidConfigUtils.getConfigAlias().state.padding * 2).text(e);
      if (!r) {
        a.attr("dy", mermaidConfigUtils.getConfigAlias().state.textHeight);
      }
    }, "addTspan");
    let a = t.append("text").attr("x", mermaidConfigUtils.getConfigAlias().state.padding * 2).attr("y", mermaidConfigUtils.getConfigAlias().state.textHeight + mermaidConfigUtils.getConfigAlias().state.padding * 1.3).attr("font-size", mermaidConfigUtils.getConfigAlias().state.fontSize).attr("class", "state-title").text(e.descriptions[0]).node().getBBox();
    let i = a.height;
    let s = t.append("text").attr("x", mermaidConfigUtils.getConfigAlias().state.padding).attr("y", i + mermaidConfigUtils.getConfigAlias().state.padding * 0.4 + mermaidConfigUtils.getConfigAlias().state.dividerMargin + mermaidConfigUtils.getConfigAlias().state.textHeight).attr("class", "state-description");
    let o = true;
    let l = true;
    e.descriptions.forEach(function (t) {
      if (!o) {
        r(s, t, l);
        l = false;
      }
      o = false;
    });
    let d = t.append("line").attr("x1", mermaidConfigUtils.getConfigAlias().state.padding).attr("y1", mermaidConfigUtils.getConfigAlias().state.padding + i + mermaidConfigUtils.getConfigAlias().state.dividerMargin / 2).attr("y2", mermaidConfigUtils.getConfigAlias().state.padding + i + mermaidConfigUtils.getConfigAlias().state.dividerMargin / 2).attr("class", "descr-divider");
    let c = s.node().getBBox();
    let h = Math.max(c.width, a.width);
    d.attr("x2", h + mermaidConfigUtils.getConfigAlias().state.padding * 3);
    t.insert("rect", ":first-child").attr("x", mermaidConfigUtils.getConfigAlias().state.padding).attr("y", mermaidConfigUtils.getConfigAlias().state.padding).attr("width", h + mermaidConfigUtils.getConfigAlias().state.padding * 2).attr("height", c.height + i + mermaidConfigUtils.getConfigAlias().state.padding * 2).attr("rx", mermaidConfigUtils.getConfigAlias().state.radius);
    return t;
  }, "drawDescrState");
  var g = mermaidConfigUtils.setName((t, e, r) => {
    let a;
    let i = mermaidConfigUtils.getConfigAlias().state.padding;
    let s = mermaidConfigUtils.getConfigAlias().state.padding * 2;
    let o = t.node().getBBox();
    let l = o.width;
    let d = o.x;
    let c = t.append("text").attr("x", 0).attr("y", mermaidConfigUtils.getConfigAlias().state.titleShift).attr("font-size", mermaidConfigUtils.getConfigAlias().state.fontSize).attr("class", "state-title").text(e.id);
    let h = c.node().getBBox().width + s;
    let p = Math.max(h, l);
    if (p === l) {
      p += s;
    }
    let u = t.node().getBBox();
    e.doc;
    a = d - i;
    if (h > l) {
      a = (l - p) / 2 + i;
    }
    if (Math.abs(d - u.x) < i && h > l) {
      a = d - (h - l) / 2;
    }
    let g = 1 - mermaidConfigUtils.getConfigAlias().state.textHeight;
    t.insert("rect", ":first-child").attr("x", a).attr("y", g).attr("class", r ? "alt-composit" : "composit").attr("width", p).attr("height", u.height + mermaidConfigUtils.getConfigAlias().state.textHeight + mermaidConfigUtils.getConfigAlias().state.titleShift + 1).attr("rx", "0");
    c.attr("x", a + i);
    if (h <= l) {
      c.attr("x", d + (p - s) / 2 - h / 2 + i);
    }
    t.insert("rect", ":first-child").attr("x", a).attr("y", mermaidConfigUtils.getConfigAlias().state.titleShift - mermaidConfigUtils.getConfigAlias().state.textHeight - mermaidConfigUtils.getConfigAlias().state.padding).attr("width", p).attr("height", mermaidConfigUtils.getConfigAlias().state.textHeight * 3).attr("rx", mermaidConfigUtils.getConfigAlias().state.radius);
    t.insert("rect", ":first-child").attr("x", a).attr("y", mermaidConfigUtils.getConfigAlias().state.titleShift - mermaidConfigUtils.getConfigAlias().state.textHeight - mermaidConfigUtils.getConfigAlias().state.padding).attr("width", p).attr("height", u.height + 3 + mermaidConfigUtils.getConfigAlias().state.textHeight * 2).attr("rx", mermaidConfigUtils.getConfigAlias().state.radius);
    return t;
  }, "addTitleAndBox");
  var y = mermaidConfigUtils.setName(t => {
    t.append("circle").attr("class", "end-state-outer").attr("r", mermaidConfigUtils.getConfigAlias().state.sizeUnit + mermaidConfigUtils.getConfigAlias().state.miniPadding).attr("cx", mermaidConfigUtils.getConfigAlias().state.padding + mermaidConfigUtils.getConfigAlias().state.sizeUnit + mermaidConfigUtils.getConfigAlias().state.miniPadding).attr("cy", mermaidConfigUtils.getConfigAlias().state.padding + mermaidConfigUtils.getConfigAlias().state.sizeUnit + mermaidConfigUtils.getConfigAlias().state.miniPadding);
    return t.append("circle").attr("class", "end-state-inner").attr("r", mermaidConfigUtils.getConfigAlias().state.sizeUnit).attr("cx", mermaidConfigUtils.getConfigAlias().state.padding + mermaidConfigUtils.getConfigAlias().state.sizeUnit + 2).attr("cy", mermaidConfigUtils.getConfigAlias().state.padding + mermaidConfigUtils.getConfigAlias().state.sizeUnit + 2);
  }, "drawEndState");
  var f = mermaidConfigUtils.setName((t, e) => {
    let r = mermaidConfigUtils.getConfigAlias().state.forkWidth;
    let a = mermaidConfigUtils.getConfigAlias().state.forkHeight;
    if (e.parentId) {
      let t = r;
      r = a;
      a = t;
    }
    return t.append("rect").style("stroke", "black").style("fill", "black").attr("width", r).attr("height", a).attr("x", mermaidConfigUtils.getConfigAlias().state.padding).attr("y", mermaidConfigUtils.getConfigAlias().state.padding);
  }, "drawForkJoinState");
  var m = mermaidConfigUtils.setName((t, e, r, a) => {
    let i = 0;
    let s = a.append("text");
    s.style("text-anchor", "start");
    s.attr("class", "noteText");
    let o = t.replace(/\r\n/g, "<br/>");
    let l = (o = o.replace(/\n/g, "<br/>")).split(mermaidConfigUtils.textUtils.lineBreakRegex);
    let d = mermaidConfigUtils.getConfigAlias().state.noteMargin * 1.25;
    for (let t of l) {
      let a = t.trim();
      if (a.length > 0) {
        let t = s.append("tspan");
        t.text(a);
        if (d === 0) {
          d += t.node().getBBox().height;
        }
        i += d;
        t.attr("x", e + mermaidConfigUtils.getConfigAlias().state.noteMargin);
        t.attr("y", r + i + mermaidConfigUtils.getConfigAlias().state.noteMargin * 1.25);
      }
    }
    return {
      textWidth: s.node().getBBox().width,
      textHeight: i
    };
  }, "_drawLongText");
  var k = mermaidConfigUtils.setName((t, e) => {
    e.attr("class", "state-note");
    let r = e.append("rect").attr("x", 0).attr("y", mermaidConfigUtils.getConfigAlias().state.padding);
    let {
      textWidth: a,
      textHeight: i
    } = m(t, 0, 0, e.append("g"));
    r.attr("height", i + mermaidConfigUtils.getConfigAlias().state.noteMargin * 2);
    r.attr("width", a + mermaidConfigUtils.getConfigAlias().state.noteMargin * 2);
    return r;
  }, "drawNote");
  var S = mermaidConfigUtils.setName(function (t, e) {
    let r = e.id;
    let a = {
      id: r,
      label: e.id,
      width: 0,
      height: 0
    };
    let i = t.append("g").attr("id", r).attr("class", "stateGroup");
    if (e.type === "start") {
      c(i);
    }
    if (e.type === "end") {
      y(i);
    }
    if (e.type === "fork" || e.type === "join") {
      f(i, e);
    }
    if (e.type === "note") {
      k(e.note.text, i);
    }
    if (e.type === "divider") {
      h(i);
    }
    if (e.type === "default" && e.descriptions.length === 0) {
      p(i, e);
    }
    if (e.type === "default" && e.descriptions.length > 0) {
      u(i, e);
    }
    let s = i.node().getBBox();
    a.width = s.width + mermaidConfigUtils.getConfigAlias().state.padding * 2;
    a.height = s.height + mermaidConfigUtils.getConfigAlias().state.padding * 2;
    return a;
  }, "drawState");
  var b = 0;
  var x = mermaidConfigUtils.setName(function (t, e, r) {
    let a = mermaidConfigUtils.setName(function (t) {
      switch (t) {
        case mermaidStateDiagramParser.StateDB.relationType.AGGREGATION:
          return "aggregation";
        case mermaidStateDiagramParser.StateDB.relationType.EXTENSION:
          return "extension";
        case mermaidStateDiagramParser.StateDB.relationType.COMPOSITION:
          return "composition";
        case mermaidStateDiagramParser.StateDB.relationType.DEPENDENCY:
          return "dependency";
      }
    }, "getRelationType");
    e.points = e.points.filter(t => !Number.isNaN(t.y));
    let l = e.points;
    let d = axisAndZoomUtilities.jvg().x(function (t) {
      return t.x;
    }).y(function (t) {
      return t.y;
    }).curve(axisAndZoomUtilities.$0Z);
    let c = t.append("path").attr("d", d(l)).attr("id", "edge" + b).attr("class", "transition");
    let h = "";
    if (mermaidConfigUtils.getConfigAlias().state.arrowMarkerAbsolute) {
      h = mermaidConfigUtils.getUrl(true);
    }
    c.attr("marker-end", "url(" + h + "#" + a(mermaidStateDiagramParser.StateDB.relationType.DEPENDENCY) + "End)");
    if (r.title !== undefined) {
      let a = t.append("g").attr("class", "stateLabel");
      let {
        x: i,
        y: o
      } = mermaidTextLayoutUtils.textLayoutUtils.calcLabelPosition(e.points);
      let l = mermaidConfigUtils.textUtils.getRows(r.title);
      let d = 0;
      let c = [];
      let h = 0;
      let p = 0;
      for (let t = 0; t <= l.length; t++) {
        let e = a.append("text").attr("text-anchor", "middle").text(l[t]).attr("x", i).attr("y", o + d);
        let r = e.node().getBBox();
        h = Math.max(h, r.width);
        p = Math.min(p, r.x);
        mermaidConfigUtils.logger.info(r.x, i, o + d);
        if (d === 0) {
          d = e.node().getBBox().height;
          mermaidConfigUtils.logger.info("Title height", d, o);
        }
        c.push(e);
      }
      let u = d * l.length;
      if (l.length > 1) {
        let t = (l.length - 1) * d * 0.5;
        c.forEach((e, r) => e.attr("y", o + r * d - t));
        u = d * l.length;
      }
      let g = a.node().getBBox();
      a.insert("rect", ":first-child").attr("class", "box").attr("x", i - h / 2 - mermaidConfigUtils.getConfigAlias().state.padding / 2).attr("y", o - u / 2 - mermaidConfigUtils.getConfigAlias().state.padding / 2 - 3.5).attr("width", h + mermaidConfigUtils.getConfigAlias().state.padding).attr("height", u + mermaidConfigUtils.getConfigAlias().state.padding);
      mermaidConfigUtils.logger.info(g);
    }
    b++;
  }, "drawEdge");
  var _ = {};
  var E = mermaidConfigUtils.setName(function () {}, "setConf");
  var T = mermaidConfigUtils.setName(function (t) {
    t.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "insertMarkers");
  var v = mermaidConfigUtils.setName(function (t, e, r, i) {
    let s;
    a = mermaidConfigUtils.getConfigAlias().state;
    let l = mermaidConfigUtils.getConfigAlias().securityLevel;
    if (l === "sandbox") {
      s = axisAndZoomUtilities.select("#i" + e);
    }
    let d = l === "sandbox" ? axisAndZoomUtilities.select(s.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
    let c = l === "sandbox" ? s.nodes()[0].contentDocument : document;
    mermaidConfigUtils.logger.debug("Rendering diagram " + t);
    let h = d.select(`[id='${e}']`);
    T(h);
    L(i.db.getRootDoc(), h, undefined, false, d, c, i);
    let p = a.padding;
    let u = h.node().getBBox();
    let g = u.width + p * 2;
    let y = u.height + p * 2;
    mermaidConfigUtils.configureSvgSize(h, y, g * 1.75, a.useMaxWidth);
    h.attr("viewBox", `${u.x - a.padding}  ${u.y - a.padding} ${g} ${y}`);
  }, "draw");
  var w = mermaidConfigUtils.setName(t => t ? t.length * a.fontSizeFactor : 1, "getLabelWidth");
  var L = mermaidConfigUtils.setName((t, e, r, i, s, o, c) => {
    let h;
    let p = new graphDataStructureExport.Graph({
      compound: true,
      multigraph: true
    });
    let u = true;
    for (h = 0; h < t.length; h++) {
      if (t[h].stmt === "relation") {
        u = false;
        break;
      }
    }
    if (r) {
      p.setGraph({
        rankdir: "LR",
        multigraph: true,
        compound: true,
        ranker: "tight-tree",
        ranksep: u ? 1 : a.edgeLengthFactor,
        nodeSep: u ? 1 : 50,
        isMultiGraph: true
      });
    } else {
      p.setGraph({
        rankdir: "TB",
        multigraph: true,
        compound: true,
        ranksep: u ? 1 : a.edgeLengthFactor,
        nodeSep: u ? 1 : 50,
        ranker: "tight-tree",
        isMultiGraph: true
      });
    }
    p.setDefaultEdgeLabel(function () {
      return {};
    });
    let y = c.db.getStates();
    let f = c.db.getRelations();
    for (let t of Object.keys(y)) {
      let n;
      let l = y[t];
      if (r) {
        l.parentId = r;
      }
      if (l.doc) {
        let t = e.append("g").attr("id", l.id).attr("class", "stateGroup");
        n = L(l.doc, t, l.id, !i, s, o, c);
        {
          let e = (t = g(t, l, i)).node().getBBox();
          n.width = e.width;
          n.height = e.height + a.padding / 2;
          _[l.id] = {
            y: a.compositTitleSize
          };
        }
      } else {
        n = S(e, l, p);
      }
      if (l.note) {
        let t = S(e, {
          descriptions: [],
          id: l.id + "-note",
          note: l.note,
          type: "note"
        }, p);
        if (l.note.position === "left of") {
          p.setNode(n.id + "-note", t);
          p.setNode(n.id, n);
        } else {
          p.setNode(n.id, n);
          p.setNode(n.id + "-note", t);
        }
        p.setParent(n.id, n.id + "-group");
        p.setParent(n.id + "-note", n.id + "-group");
      } else {
        p.setNode(n.id, n);
      }
    }
    mermaidConfigUtils.logger.debug("Count=", p.nodeCount(), p);
    let m = 0;
    f.forEach(function (t) {
      m++;
      mermaidConfigUtils.logger.debug("Setting edge", t);
      p.setEdge(t.id1, t.id2, {
        relation: t,
        width: w(t.title),
        height: a.labelHeight * mermaidConfigUtils.textUtils.getRows(t.title).length,
        labelpos: "c"
      }, "id" + m);
    });
    graphLayoutEngine.layoutGraph(p);
    mermaidConfigUtils.logger.debug("Graph after layout", p.nodes());
    let k = e.node();
    p.nodes().forEach(function (t) {
      if (t !== undefined && p.node(t) !== undefined) {
        mermaidConfigUtils.logger.warn("Node " + t + ": " + JSON.stringify(p.node(t)));
        s.select("#" + k.id + " #" + t).attr("transform", "translate(" + (p.node(t).x - p.node(t).width / 2) + "," + (p.node(t).y + (_[t] ? _[t].y : 0) - p.node(t).height / 2) + " )");
        s.select("#" + k.id + " #" + t).attr("data-x-shift", p.node(t).x - p.node(t).width / 2);
        o.querySelectorAll("#" + k.id + " #" + t + " .divider").forEach(t => {
          let e = t.parentElement;
          let r = 0;
          let a = 0;
          if (e) {
            if (e.parentElement) {
              r = e.parentElement.getBBox().width;
            }
            if (Number.isNaN(a = parseInt(e.getAttribute("data-x-shift"), 10))) {
              a = 0;
            }
          }
          t.setAttribute("x1", 0 - a + 8);
          t.setAttribute("x2", r - a - 8);
        });
      } else {
        mermaidConfigUtils.logger.debug("No Node " + t + ": " + JSON.stringify(p.node(t)));
      }
    });
    let b = k.getBBox();
    p.edges().forEach(function (t) {
      if (t !== undefined && p.edge(t) !== undefined) {
        mermaidConfigUtils.logger.debug("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(p.edge(t)));
        x(e, p.edge(t), p.edge(t).relation);
      }
    });
    b = k.getBBox();
    let E = {
      id: r || "root",
      label: r || "root",
      width: 0,
      height: 0
    };
    E.width = b.width + a.padding * 2;
    E.height = b.height + a.padding * 2;
    mermaidConfigUtils.logger.debug("Doc rendered", E, p);
    return E;
  }, "renderDoc");
  var M = {
    parser: mermaidStateDiagramParser.parser,
    get db() {
      return new mermaidStateDiagramParser.StateDB(1);
    },
    renderer: {
      setConf: E,
      draw: v
    },
    styles: mermaidStateDiagramParser.getStyles,
    init: mermaidConfigUtils.setName(t => {
      t.state ||= {};
      t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return M;
    }
  });
}