// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mermaidFlowchartEdgeRenderer'
// - Resolved require(968232) to 'mermaid-flowchart-edge-renderer'
// - Resolved require(173696) to 'diagram-arrow-offset-utils'
// - Renamed variable 'i' to 'mermaidNodeShapesRenderer'
// - Resolved require(411411) to 'mermaid-node-shapes-renderer'
// - Renamed variable 'a' to 'subgraphTitleMarginsCalculator'
// - Resolved require(954180) to 'subgraph-title-margins-calculator'
// - Resolved require(717687) to 'mermaid-style-utils'
// - Resolved require(990626) to 'icon-utils-text-rendering'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'd' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'o' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'c' to 'graphLayoutEngine'
// - Resolved require(855238) to 'graph-layout-engine'
// - Renamed variable 'l' to 'graphSerializeUtil'
// - Resolved require(213222) to 'graph-serialize-util'
// - Renamed variable 's' to 'graphDataStructureExport'
// - Resolved require(736993) to 'graph-data-structure-export'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'c' to 'serializeGraph' (module 213222)
// - Updated imported property 'k' to 'Graph' (module 736993)
// - Updated imported property 'jr' to 'updateNodeBounds' (module 411411)
// - Updated imported property 'Yn' to 'setNodeElem' (module 411411)
// - Updated imported property 'Lf' to 'insertCluster' (module 411411)
// - Updated imported property 'aH' to 'kanbanItem' (module 411411)
// - Updated imported property 'us' to 'insertNode' (module 411411)
// - Updated imported property 'gU' to 'clearNodeCache' (module 411411)
// - Updated imported property 'ZH' to 'clearClusterCache' (module 411411)
// - Updated imported property 'I_' to 'insertEdgeLabel' (module 968232)
// - Updated imported property 'QP' to 'insertEdge' (module 968232)
// - Updated imported property 'Jj' to 'positionEdgeLabel' (module 968232)
// - Updated imported property 'DQ' to 'insertMarkers' (module 968232)
// - Updated imported property 'ZH' to 'clearCache' (module 968232)
// - Updated imported property 'bK' to 'layoutGraph' (module 855238)
// - Updated imported property 'L' to 'getSubGraphTitleMargins' (module 954180)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72523.2eab9d1b.js
         * chunkId: 72523
         * moduleId: 692415
         */
module.exports = function (module, exports, require) {
  var mermaidFlowchartEdgeRenderer = require("mermaid-flowchart-edge-renderer") /*id: 968232*/;
  require("diagram-arrow-offset-utils") /*id: 173696*/;
  var mermaidNodeShapesRenderer = require("mermaid-node-shapes-renderer") /*id: 411411*/;
  var subgraphTitleMarginsCalculator = require("subgraph-title-margins-calculator") /*id: 954180*/;
  require("mermaid-style-utils") /*id: 717687*/;
  require("icon-utils-text-rendering") /*id: 990626*/;
  require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var graphLayoutEngine = require("graph-layout-engine") /*id: 855238*/;
  var graphSerializeUtil = require("graph-serialize-util") /*id: 213222*/;
  var graphDataStructureExport = require("graph-data-structure-export") /*id: 736993*/;
  var g = new Map();
  var u = new Map();
  var f = new Map();
  var h = loggerLevelUtils.setFunctionName(() => {
    u.clear();
    f.clear();
    g.clear();
  }, "clear");
  var p = loggerLevelUtils.setFunctionName((e, n) => {
    let t = u.get(n) || [];
    loggerLevelUtils.logger.trace("In isDescendant", n, " ", e, " = ", t.includes(e));
    return t.includes(e);
  }, "isDescendant");
  var v = loggerLevelUtils.setFunctionName((e, n) => {
    let t = u.get(n) || [];
    loggerLevelUtils.logger.info("Descendants of ", n, " is ", t);
    loggerLevelUtils.logger.info("Edge is ", e);
    return e.v !== n && e.w !== n && (t ? t.includes(e.v) || p(e.v, n) || p(e.w, n) || t.includes(e.w) : (loggerLevelUtils.logger.debug("Tilt, ", n, ",not in descendants"), false));
  }, "edgeInCluster");
  var w = loggerLevelUtils.setFunctionName((e, n, t, r) => {
    loggerLevelUtils.logger.warn("Copying children of ", e, "root", r, "data", n.node(e), r);
    let i = n.children(e) || [];
    if (e !== r) {
      i.push(e);
    }
    loggerLevelUtils.logger.warn("Copying (nodes) clusterId", e, "nodes", i);
    i.forEach(i => {
      if (n.children(i).length > 0) {
        w(i, n, t, r);
      } else {
        let a = n.node(i);
        loggerLevelUtils.logger.info("cp ", i, " to ", r, " with parent ", e);
        t.setNode(i, a);
        if (r !== n.parent(i)) {
          loggerLevelUtils.logger.warn("Setting parent", i, n.parent(i));
          t.setParent(i, n.parent(i));
        }
        if (e !== r && i !== e) {
          loggerLevelUtils.logger.debug("Setting parent", i, e);
          t.setParent(i, e);
        } else {
          loggerLevelUtils.logger.info("In copy ", e, "root", r, "data", n.node(e), r);
          loggerLevelUtils.logger.debug("Not Setting parent for node=", i, "cluster!==rootId", e !== r, "node!==clusterId", i !== e);
        }
        let d = n.edges(i);
        loggerLevelUtils.logger.debug("Copying Edges", d);
        d.forEach(i => {
          loggerLevelUtils.logger.info("Edge", i);
          let a = n.edge(i.v, i.w, i.name);
          loggerLevelUtils.logger.info("Edge data", a, r);
          try {
            if (v(i, r)) {
              loggerLevelUtils.logger.info("Copying as ", i.v, i.w, a, i.name);
              t.setEdge(i.v, i.w, a, i.name);
              loggerLevelUtils.logger.info("newGraph edges ", t.edges(), t.edge(t.edges()[0]));
            } else {
              loggerLevelUtils.logger.info("Skipping copy of edge ", i.v, "-->", i.w, " rootId: ", r, " clusterId:", e);
            }
          } catch (e) {
            loggerLevelUtils.logger.error(e);
          }
        });
      }
      loggerLevelUtils.logger.debug("Removing node", i);
      n.removeNode(i);
    });
  }, "copy");
  var M = loggerLevelUtils.setFunctionName((e, n) => {
    let t = n.children(e);
    let r = [...t];
    for (let i of t) {
      f.set(i, e);
      r = [...r, ...M(i, n)];
    }
    return r;
  }, "extractDescendants");
  var y = loggerLevelUtils.setFunctionName((e, n, t) => {
    let r = e.edges().filter(e => e.v === n || e.w === n);
    let i = e.edges().filter(e => e.v === t || e.w === t);
    let a = r.map(e => ({
      v: e.v === n ? t : e.v,
      w: e.w === n ? n : e.w
    }));
    let d = i.map(e => ({
      v: e.v,
      w: e.w
    }));
    return a.filter(e => d.some(n => e.v === n.v && e.w === n.w));
  }, "findCommonEdges");
  var X = loggerLevelUtils.setFunctionName((e, n, t) => {
    let r;
    let i = n.children(e);
    loggerLevelUtils.logger.trace("Searching children of id ", e, i);
    if (i.length < 1) {
      return e;
    }
    for (let e of i) {
      let i = X(e, n, t);
      let a = y(n, t, i);
      if (i) {
        if (!(a.length > 0)) {
          return i;
        }
        r = i;
      }
    }
    return r;
  }, "findNonClusterChild");
  var m = loggerLevelUtils.setFunctionName(e => g.has(e) && g.get(e).externalConnections && g.has(e) ? g.get(e).id : e, "getAnchorId");
  var E = loggerLevelUtils.setFunctionName((e, n) => {
    if (!e || n > 10) {
      loggerLevelUtils.logger.debug("Opting out, no graph ");
      return;
    }
    loggerLevelUtils.logger.debug("Opting in, graph ");
    e.nodes().forEach(function (n) {
      if (e.children(n).length > 0) {
        loggerLevelUtils.logger.warn("Cluster identified", n, " Replacement id in edges: ", X(n, e, n));
        u.set(n, M(n, e));
        g.set(n, {
          id: X(n, e, n),
          clusterData: e.node(n)
        });
      }
    });
    e.nodes().forEach(function (n) {
      let t = e.children(n);
      let r = e.edges();
      if (t.length > 0) {
        loggerLevelUtils.logger.debug("Cluster identified", n, u);
        r.forEach(e => {
          if (p(e.v, n) ^ p(e.w, n)) {
            loggerLevelUtils.logger.warn("Edge: ", e, " leaves cluster ", n);
            loggerLevelUtils.logger.warn("Descendants of XXX ", n, ": ", u.get(n));
            g.get(n).externalConnections = true;
          }
        });
      } else {
        loggerLevelUtils.logger.debug("Not a cluster ", n, u);
      }
    });
    for (let n of g.keys()) {
      let t = g.get(n).id;
      let r = e.parent(t);
      if (r !== n && g.has(r) && !g.get(r).externalConnections) {
        g.get(n).id = r;
      }
    }
    e.edges().forEach(function (n) {
      let t = e.edge(n);
      loggerLevelUtils.logger.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n));
      loggerLevelUtils.logger.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
      let r = n.v;
      let i = n.w;
      loggerLevelUtils.logger.warn("Fix XXX", g, "ids:", n.v, n.w, "Translating: ", g.get(n.v), " --- ", g.get(n.w));
      if (g.get(n.v) || g.get(n.w)) {
        loggerLevelUtils.logger.warn("Fixing and trying - removing XXX", n.v, n.w, n.name);
        r = m(n.v);
        i = m(n.w);
        e.removeEdge(n.v, n.w, n.name);
        if (r !== n.v) {
          let i = e.parent(r);
          g.get(i).externalConnections = true;
          t.fromCluster = n.v;
        }
        if (i !== n.w) {
          let r = e.parent(i);
          g.get(r).externalConnections = true;
          t.toCluster = n.w;
        }
        loggerLevelUtils.logger.warn("Fix Replacing with XXX", r, i, n.name);
        e.setEdge(r, i, t, n.name);
      }
    });
    loggerLevelUtils.logger.warn("Adjusted Graph", graphSerializeUtil.serializeGraph(e));
    N(e, 0);
    loggerLevelUtils.logger.trace(g);
  }, "adjustClustersAndEdges");
  var N = loggerLevelUtils.setFunctionName((e, n) => {
    loggerLevelUtils.logger.warn("extractor - ", n, graphSerializeUtil.serializeGraph(e), e.children("D"));
    if (n > 10) {
      loggerLevelUtils.logger.error("Bailing out");
      return;
    }
    let t = e.nodes();
    let r = false;
    for (let n of t) {
      let t = e.children(n);
      r = r || t.length > 0;
    }
    if (!r) {
      loggerLevelUtils.logger.debug("Done, no node has children", e.nodes());
      return;
    }
    loggerLevelUtils.logger.debug("Nodes = ", t, n);
    for (let r of t) {
      loggerLevelUtils.logger.debug("Extracting node", r, g, g.has(r) && !g.get(r).externalConnections, !e.parent(r), e.node(r), e.children("D"), " Depth ", n);
      if (g.has(r)) {
        if (!g.get(r).externalConnections && e.children(r) && e.children(r).length > 0) {
          var a;
          loggerLevelUtils.logger.warn("Cluster without external connections, without a parent and with children", r, n);
          let t = e.graph().rankdir === "TB" ? "LR" : "TB";
          if ((a = g.get(r)) === null || a === undefined ? undefined : a.clusterData?.dir) {
            t = g.get(r).clusterData.dir;
            loggerLevelUtils.logger.warn("Fixing dir", g.get(r).clusterData.dir, t);
          }
          let d = new graphDataStructureExport.Graph({
            multigraph: true,
            compound: true
          }).setGraph({
            rankdir: t,
            nodesep: 50,
            ranksep: 50,
            marginx: 8,
            marginy: 8
          }).setDefaultEdgeLabel(function () {
            return {};
          });
          loggerLevelUtils.logger.warn("Old graph before copy", graphSerializeUtil.serializeGraph(e));
          w(r, e, d, r);
          e.setNode(r, {
            clusterNode: true,
            id: r,
            clusterData: g.get(r).clusterData,
            label: g.get(r).label,
            graph: d
          });
          loggerLevelUtils.logger.warn("New graph after copy node: (", r, ")", graphSerializeUtil.serializeGraph(d));
          loggerLevelUtils.logger.debug("Old graph after copy", graphSerializeUtil.serializeGraph(e));
        } else {
          loggerLevelUtils.logger.warn("Cluster ** ", r, " **not meeting the criteria !externalConnections:", !g.get(r).externalConnections, " no parent: ", !e.parent(r), " children ", e.children(r) && e.children(r).length > 0, e.children("D"), n);
          loggerLevelUtils.logger.debug(g);
        }
      } else {
        loggerLevelUtils.logger.debug("Not a cluster", r, n);
      }
    }
    t = e.nodes();
    loggerLevelUtils.logger.warn("New list of nodes", t);
    for (let r of t) {
      let t = e.node(r);
      loggerLevelUtils.logger.warn(" Now next level", r, t);
      if (t == null ? undefined : t.clusterNode) {
        N(t.graph, n + 1);
      }
    }
  }, "extractor");
  var b = loggerLevelUtils.setFunctionName((e, n) => {
    if (n.length === 0) {
      return [];
    }
    let t = Object.assign([], n);
    n.forEach(n => {
      let r = e.children(n);
      let i = b(e, r);
      t = [...t, ...i];
    });
    return t;
  }, "sorter");
  var Z = loggerLevelUtils.setFunctionName(e => b(e, e.children()), "sortNodesByHierarchy");
  var C = loggerLevelUtils.setFunctionName(async (e, n, t, d, s, u) => {
    loggerLevelUtils.logger.warn("Graph in recursive render:XAX", graphSerializeUtil.serializeGraph(n), s);
    let f = n.graph().rankdir;
    loggerLevelUtils.logger.trace("Dir in recursive render - dir:", f);
    let h = e.insert("g").attr("class", "root");
    if (n.nodes()) {
      loggerLevelUtils.logger.info("Recursive render XXX", n.nodes());
    } else {
      loggerLevelUtils.logger.info("No nodes found for", n);
    }
    if (n.edges().length > 0) {
      loggerLevelUtils.logger.info("Recursive edges", n.edge(n.edges()[0]));
    }
    let p = h.insert("g").attr("class", "clusters");
    let v = h.insert("g").attr("class", "edgePaths");
    let w = h.insert("g").attr("class", "edgeLabels");
    let M = h.insert("g").attr("class", "nodes");
    await Promise.all(n.nodes().map(async function (e) {
      let r = n.node(e);
      if (s !== undefined) {
        let t = JSON.parse(JSON.stringify(s.clusterData));
        loggerLevelUtils.logger.trace("Setting data for parent cluster XXX\n Node.id = ", e, "\n data=", t.height, "\nParent cluster", s.height);
        n.setNode(s.id, t);
        if (!n.parent(e)) {
          loggerLevelUtils.logger.trace("Setting parent", e, s.id);
          n.setParent(e, s.id, t);
        }
      }
      loggerLevelUtils.logger.info("(Insert) Node XXX" + e + ": " + JSON.stringify(n.node(e)));
      if (r == null ? undefined : r.clusterNode) {
        loggerLevelUtils.logger.info("Cluster identified XBX", e, r.width, n.node(e));
        let {
          ranksep: a,
          nodesep: c
        } = n.graph();
        r.graph.setGraph({
          ...r.graph.graph(),
          ranksep: a + 25,
          nodesep: c
        });
        let l = await C(M, r.graph, t, d, n.node(e), u);
        let s = l.elem;
        mermaidNodeShapesRenderer.updateNodeBounds(r, s);
        r.diff = l.diff || 0;
        loggerLevelUtils.logger.info("New compound node after recursive render XAX", e, "width", r.width, "height", r.height);
        mermaidNodeShapesRenderer.setNodeElem(s, r);
      } else if (n.children(e).length > 0) {
        loggerLevelUtils.logger.trace("Cluster - the non recursive path XBX", e, r.id, r, r.width, "Graph:", n);
        loggerLevelUtils.logger.trace(X(r.id, n));
        g.set(r.id, {
          id: X(r.id, n),
          node: r
        });
      } else {
        loggerLevelUtils.logger.trace("Node - the non recursive path XAX", e, M, n.node(e), f);
        await mermaidNodeShapesRenderer.insertCluster(M, n.node(e), {
          config: u,
          dir: f
        });
      }
    }));
    let y = loggerLevelUtils.setFunctionName(async () => {
      let e = n.edges().map(async function (e) {
        let t = n.edge(e.v, e.w, e.name);
        loggerLevelUtils.logger.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
        loggerLevelUtils.logger.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(n.edge(e)));
        loggerLevelUtils.logger.info("Fix", g, "ids:", e.v, e.w, "Translating: ", g.get(e.v), g.get(e.w));
        await mermaidFlowchartEdgeRenderer.insertEdgeLabel(w, t);
      });
      await Promise.all(e);
    }, "processEdges");
    await y();
    loggerLevelUtils.logger.info("Graph before layout:", JSON.stringify(graphSerializeUtil.serializeGraph(n)));
    loggerLevelUtils.logger.info("############################################# XXX");
    loggerLevelUtils.logger.info("###                Layout                 ### XXX");
    loggerLevelUtils.logger.info("############################################# XXX");
    graphLayoutEngine.layoutGraph(n);
    loggerLevelUtils.logger.info("Graph after layout:", JSON.stringify(graphSerializeUtil.serializeGraph(n)));
    let m = 0;
    let {
      subGraphTitleTotalMargin: E
    } = subgraphTitleMarginsCalculator.getSubGraphTitleMargins(u);
    await Promise.all(Z(n).map(async function (e) {
      let t = n.node(e);
      loggerLevelUtils.logger.info("Position XBX => " + e + ": (" + t.x, "," + t.y, ") width: ", t.width, " height: ", t.height);
      if (t == null ? undefined : t.clusterNode) {
        t.y += E;
        loggerLevelUtils.logger.info("A tainted cluster node XBX1", e, t.id, t.width, t.height, t.x, t.y, n.parent(e));
        g.get(t.id).node = t;
        mermaidNodeShapesRenderer.kanbanItem(t);
      } else if (n.children(e).length > 0) {
        loggerLevelUtils.logger.info("A pure cluster node XBX1", e, t.id, t.x, t.y, t.width, t.height, n.parent(e));
        t.height += E;
        n.node(t.parentId);
        let a = (t == null ? undefined : t.padding) / 2 || 0;
        let d = (t == null ? undefined : t.labelBBox?.height) || 0;
        loggerLevelUtils.logger.debug("OffsetY", d - a || 0, "labelHeight", d, "halfPadding", a);
        await mermaidNodeShapesRenderer.insertNode(p, t);
        g.get(t.id).node = t;
      } else {
        let e = n.node(t.parentId);
        t.y += E / 2;
        loggerLevelUtils.logger.info("A regular node XBX1 - using the padding", t.id, "parent", t.parentId, t.width, t.height, t.x, t.y, "offsetY", t.offsetY, "parent", e, e == null ? undefined : e.offsetY, t);
        mermaidNodeShapesRenderer.kanbanItem(t);
      }
    }));
    n.edges().forEach(function (e) {
      let i = n.edge(e);
      loggerLevelUtils.logger.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(i), i);
      i.points.forEach(e => e.y += E / 2);
      let a = n.node(e.v);
      var c = n.node(e.w);
      let l = mermaidFlowchartEdgeRenderer.insertEdge(v, i, g, t, a, c, d);
      mermaidFlowchartEdgeRenderer.positionEdgeLabel(i, l);
    });
    n.nodes().forEach(function (e) {
      let t = n.node(e);
      loggerLevelUtils.logger.info(e, t.type, t.diff);
      if (t.isGroup) {
        m = t.diff;
      }
    });
    loggerLevelUtils.logger.warn("Returning from recursive render XAX", h, m);
    return {
      elem: h,
      diff: m
    };
  }, "recursiveRender");
  var S = loggerLevelUtils.setFunctionName(async (e, n) => {
    var c;
    var f;
    let p = new graphDataStructureExport.Graph({
      multigraph: true,
      compound: true
    }).setGraph({
      rankdir: e.direction,
      nodesep: e.config?.nodeSpacing || ((c = e.config) === null || c === undefined ? undefined : c.flowchart?.nodeSpacing) || e.nodeSpacing,
      ranksep: e.config?.rankSpacing || ((f = e.config) === null || f === undefined ? undefined : f.flowchart?.rankSpacing) || e.rankSpacing,
      marginx: 8,
      marginy: 8
    }).setDefaultEdgeLabel(function () {
      return {};
    });
    let v = n.select("g");
    mermaidFlowchartEdgeRenderer.insertMarkers(v, e.markers, e.type, e.diagramId);
    mermaidNodeShapesRenderer.clearNodeCache();
    mermaidFlowchartEdgeRenderer.clearCache();
    mermaidNodeShapesRenderer.clearClusterCache();
    h();
    e.nodes.forEach(e => {
      p.setNode(e.id, {
        ...e
      });
      if (e.parentId) {
        p.setParent(e.id, e.parentId);
      }
    });
    loggerLevelUtils.logger.debug("Edges:", e.edges);
    e.edges.forEach(e => {
      if (e.start === e.end) {
        let n = e.start;
        let t = n + "---" + n + "---1";
        let r = n + "---" + n + "---2";
        let i = p.node(n);
        p.setNode(t, {
          domId: t,
          id: t,
          parentId: i.parentId,
          labelStyle: "",
          label: "",
          padding: 0,
          shape: "labelRect",
          style: "",
          width: 10,
          height: 10
        });
        p.setParent(t, i.parentId);
        p.setNode(r, {
          domId: r,
          id: r,
          parentId: i.parentId,
          labelStyle: "",
          padding: 0,
          shape: "labelRect",
          label: "",
          style: "",
          width: 10,
          height: 10
        });
        p.setParent(r, i.parentId);
        let a = structuredClone(e);
        let d = structuredClone(e);
        let o = structuredClone(e);
        a.label = "";
        a.arrowTypeEnd = "none";
        a.id = n + "-cyclic-special-1";
        d.arrowTypeStart = "none";
        d.arrowTypeEnd = "none";
        d.id = n + "-cyclic-special-mid";
        o.label = "";
        if (i.isGroup) {
          a.fromCluster = n;
          o.toCluster = n;
        }
        o.id = n + "-cyclic-special-2";
        o.arrowTypeStart = "none";
        p.setEdge(n, t, a, n + "-cyclic-special-0");
        p.setEdge(t, r, d, n + "-cyclic-special-1");
        p.setEdge(r, n, o, n + "-cyc<lic-special-2");
      } else {
        p.setEdge(e.start, e.end, {
          ...e
        }, e.id);
      }
    });
    loggerLevelUtils.logger.warn("Graph at first:", JSON.stringify(graphSerializeUtil.serializeGraph(p)));
    E(p);
    loggerLevelUtils.logger.warn("Graph after XAX:", JSON.stringify(graphSerializeUtil.serializeGraph(p)));
    let w = mermaidConfigUtils_1.getConfigAlias();
    await C(v, p, e.type, e.diagramId, undefined, w);
  }, "render");
  require.r(exports);
  require.d(exports, {
    render: function () {
      return S;
    }
  });
}