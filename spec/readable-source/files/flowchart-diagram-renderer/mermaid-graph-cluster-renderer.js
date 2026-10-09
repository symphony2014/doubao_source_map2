// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'mermaidEdgeRenderingUtils'
// - Resolved require(836477) to 'mermaid-edge-rendering-utils'
// - Resolved require(744654) to 'line-arrow-offset-utils'
// - Renamed variable 'n' to 'mermaidNodeShapesRenderer_1'
// - Resolved require(608361) to 'mermaid-node-shapes-renderer_1'
// - Renamed variable 'i' to 'mermaidSubgraphTitleMarginUtils'
// - Resolved require(152138) to 'mermaid-subgraph-title-margin-utils'
// - Resolved require(587619) to 'mermaid-node-style-utils'
// - Resolved require(5699) to 'mermaid-text-icon-utils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'd' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'o' to 'graphLayoutEngine'
// - Resolved require(855238) to 'graph-layout-engine'
// - Renamed variable 's' to 'graphSerializeUtil'
// - Resolved require(213222) to 'graph-serialize-util'
// - Renamed variable 'l' to 'graphDataStructureExport'
// - Resolved require(736993) to 'graph-data-structure-export'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'c' to 'serializeGraph' (module 213222)
// - Updated imported property 'k' to 'Graph' (module 736993)
// - Updated imported property 'jr' to 'updateNodeBounds' (module 608361)
// - Updated imported property 'Yn' to 'setNodeElem' (module 608361)
// - Updated imported property 'Lf' to 'insertCluster' (module 608361)
// - Updated imported property 'aH' to 'kanbanItem' (module 608361)
// - Updated imported property 'us' to 'insertNode' (module 608361)
// - Updated imported property 'gU' to 'clearNodeCache' (module 608361)
// - Updated imported property 'ZH' to 'clearClusterCache' (module 608361)
// - Updated imported property 'I_' to 'insertEdgeLabel' (module 836477)
// - Updated imported property 'QP' to 'insertEdge' (module 836477)
// - Updated imported property 'Jj' to 'positionEdgeLabel' (module 836477)
// - Updated imported property 'DQ' to 'insertMarkers' (module 836477)
// - Updated imported property 'ZH' to 'clear' (module 836477)
// - Updated imported property 'bK' to 'layoutGraph' (module 855238)
// - Updated imported property 'L' to 'getSubGraphTitleMargins' (module 152138)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33786.7b847ee6.js
         * chunkId: 33786
         * moduleId: 119276
         */
module.exports = function (module, exports, require) {
  var mermaidEdgeRenderingUtils = require("mermaid-edge-rendering-utils") /*id: 836477*/;
  require("line-arrow-offset-utils") /*id: 744654*/;
  var mermaidNodeShapesRenderer_1 = require("mermaid-node-shapes-renderer_1") /*id: 608361*/;
  var mermaidSubgraphTitleMarginUtils = require("mermaid-subgraph-title-margin-utils") /*id: 152138*/;
  require("mermaid-node-style-utils") /*id: 587619*/;
  require("mermaid-text-icon-utils") /*id: 5699*/;
  require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var graphLayoutEngine = require("graph-layout-engine") /*id: 855238*/;
  var graphSerializeUtil = require("graph-serialize-util") /*id: 213222*/;
  var graphDataStructureExport = require("graph-data-structure-export") /*id: 736993*/;
  var c = new Map();
  var p = new Map();
  var h = new Map();
  var g = mermaidConfigUtils.setName(() => {
    p.clear();
    h.clear();
    c.clear();
  }, "clear");
  var f = mermaidConfigUtils.setName((t, e) => {
    let r = p.get(e) || [];
    mermaidConfigUtils.logger.trace("In isDescendant", e, " ", t, " = ", r.includes(t));
    return r.includes(t);
  }, "isDescendant");
  var u = mermaidConfigUtils.setName((t, e) => {
    let r = p.get(e) || [];
    mermaidConfigUtils.logger.info("Descendants of ", e, " is ", r);
    mermaidConfigUtils.logger.info("Edge is ", t);
    return t.v !== e && t.w !== e && (r ? r.includes(t.v) || f(t.v, e) || f(t.w, e) || r.includes(t.w) : (mermaidConfigUtils.logger.debug("Tilt, ", e, ",not in descendants"), false));
  }, "edgeInCluster");
  var y = mermaidConfigUtils.setName((t, e, r, a) => {
    mermaidConfigUtils.logger.warn("Copying children of ", t, "root", a, "data", e.node(t), a);
    let n = e.children(t) || [];
    if (t !== a) {
      n.push(t);
    }
    mermaidConfigUtils.logger.warn("Copying (nodes) clusterId", t, "nodes", n);
    n.forEach(n => {
      if (e.children(n).length > 0) {
        y(n, e, r, a);
      } else {
        let i = e.node(n);
        mermaidConfigUtils.logger.info("cp ", n, " to ", a, " with parent ", t);
        r.setNode(n, i);
        if (a !== e.parent(n)) {
          mermaidConfigUtils.logger.warn("Setting parent", n, e.parent(n));
          r.setParent(n, e.parent(n));
        }
        if (t !== a && n !== t) {
          mermaidConfigUtils.logger.debug("Setting parent", n, t);
          r.setParent(n, t);
        } else {
          mermaidConfigUtils.logger.info("In copy ", t, "root", a, "data", e.node(t), a);
          mermaidConfigUtils.logger.debug("Not Setting parent for node=", n, "cluster!==rootId", t !== a, "node!==clusterId", n !== t);
        }
        let o = e.edges(n);
        mermaidConfigUtils.logger.debug("Copying Edges", o);
        o.forEach(n => {
          mermaidConfigUtils.logger.info("Edge", n);
          let i = e.edge(n.v, n.w, n.name);
          mermaidConfigUtils.logger.info("Edge data", i, a);
          try {
            if (u(n, a)) {
              mermaidConfigUtils.logger.info("Copying as ", n.v, n.w, i, n.name);
              r.setEdge(n.v, n.w, i, n.name);
              mermaidConfigUtils.logger.info("newGraph edges ", r.edges(), r.edge(r.edges()[0]));
            } else {
              mermaidConfigUtils.logger.info("Skipping copy of edge ", n.v, "-->", n.w, " rootId: ", a, " clusterId:", t);
            }
          } catch (t) {
            mermaidConfigUtils.logger.error(t);
          }
        });
      }
      mermaidConfigUtils.logger.debug("Removing node", n);
      e.removeNode(n);
    });
  }, "copy");
  var m = mermaidConfigUtils.setName((t, e) => {
    let r = e.children(t);
    let a = [...r];
    for (let n of r) {
      h.set(n, t);
      a = [...a, ...m(n, e)];
    }
    return a;
  }, "extractDescendants");
  var w = mermaidConfigUtils.setName((t, e, r) => {
    let a = t.edges().filter(t => t.v === e || t.w === e);
    let n = t.edges().filter(t => t.v === r || t.w === r);
    let i = a.map(t => ({
      v: t.v === e ? r : t.v,
      w: t.w === e ? e : t.w
    }));
    let d = n.map(t => ({
      v: t.v,
      w: t.w
    }));
    return i.filter(t => d.some(e => t.v === e.v && t.w === e.w));
  }, "findCommonEdges");
  var M = mermaidConfigUtils.setName((t, e, r) => {
    let a;
    let n = e.children(t);
    mermaidConfigUtils.logger.trace("Searching children of id ", t, n);
    if (n.length < 1) {
      return t;
    }
    for (let t of n) {
      let n = M(t, e, r);
      let i = w(e, r, n);
      if (n) {
        if (!(i.length > 0)) {
          return n;
        }
        a = n;
      }
    }
    return a;
  }, "findNonClusterChild");
  var k = mermaidConfigUtils.setName(t => c.has(t) && c.get(t).externalConnections && c.has(t) ? c.get(t).id : t, "getAnchorId");
  var b = mermaidConfigUtils.setName((t, e) => {
    if (!t || e > 10) {
      mermaidConfigUtils.logger.debug("Opting out, no graph ");
      return;
    }
    mermaidConfigUtils.logger.debug("Opting in, graph ");
    t.nodes().forEach(function (e) {
      if (t.children(e).length > 0) {
        mermaidConfigUtils.logger.warn("Cluster identified", e, " Replacement id in edges: ", M(e, t, e));
        p.set(e, m(e, t));
        c.set(e, {
          id: M(e, t, e),
          clusterData: t.node(e)
        });
      }
    });
    t.nodes().forEach(function (e) {
      let r = t.children(e);
      let a = t.edges();
      if (r.length > 0) {
        mermaidConfigUtils.logger.debug("Cluster identified", e, p);
        a.forEach(t => {
          if (f(t.v, e) ^ f(t.w, e)) {
            mermaidConfigUtils.logger.warn("Edge: ", t, " leaves cluster ", e);
            mermaidConfigUtils.logger.warn("Descendants of XXX ", e, ": ", p.get(e));
            c.get(e).externalConnections = true;
          }
        });
      } else {
        mermaidConfigUtils.logger.debug("Not a cluster ", e, p);
      }
    });
    for (let e of c.keys()) {
      let r = c.get(e).id;
      let a = t.parent(r);
      if (a !== e && c.has(a) && !c.get(a).externalConnections) {
        c.get(e).id = a;
      }
    }
    t.edges().forEach(function (e) {
      let r = t.edge(e);
      mermaidConfigUtils.logger.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
      mermaidConfigUtils.logger.warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(t.edge(e)));
      let a = e.v;
      let n = e.w;
      mermaidConfigUtils.logger.warn("Fix XXX", c, "ids:", e.v, e.w, "Translating: ", c.get(e.v), " --- ", c.get(e.w));
      if (c.get(e.v) || c.get(e.w)) {
        mermaidConfigUtils.logger.warn("Fixing and trying - removing XXX", e.v, e.w, e.name);
        a = k(e.v);
        n = k(e.w);
        t.removeEdge(e.v, e.w, e.name);
        if (a !== e.v) {
          let n = t.parent(a);
          c.get(n).externalConnections = true;
          r.fromCluster = e.v;
        }
        if (n !== e.w) {
          let a = t.parent(n);
          c.get(a).externalConnections = true;
          r.toCluster = e.w;
        }
        mermaidConfigUtils.logger.warn("Fix Replacing with XXX", a, n, e.name);
        t.setEdge(a, n, r, e.name);
      }
    });
    mermaidConfigUtils.logger.warn("Adjusted Graph", graphSerializeUtil.serializeGraph(t));
    x(t, 0);
    mermaidConfigUtils.logger.trace(c);
  }, "adjustClustersAndEdges");
  var x = mermaidConfigUtils.setName((t, e) => {
    mermaidConfigUtils.logger.warn("extractor - ", e, graphSerializeUtil.serializeGraph(t), t.children("D"));
    if (e > 10) {
      mermaidConfigUtils.logger.error("Bailing out");
      return;
    }
    let r = t.nodes();
    let a = false;
    for (let e of r) {
      let r = t.children(e);
      a = a || r.length > 0;
    }
    if (!a) {
      mermaidConfigUtils.logger.debug("Done, no node has children", t.nodes());
      return;
    }
    mermaidConfigUtils.logger.debug("Nodes = ", r, e);
    for (let a of r) {
      mermaidConfigUtils.logger.debug("Extracting node", a, c, c.has(a) && !c.get(a).externalConnections, !t.parent(a), t.node(a), t.children("D"), " Depth ", e);
      if (c.has(a)) {
        if (!c.get(a).externalConnections && t.children(a) && t.children(a).length > 0) {
          var i;
          mermaidConfigUtils.logger.warn("Cluster without external connections, without a parent and with children", a, e);
          let r = t.graph().rankdir === "TB" ? "LR" : "TB";
          if ((i = c.get(a)) === null || i === undefined ? undefined : i.clusterData?.dir) {
            r = c.get(a).clusterData.dir;
            mermaidConfigUtils.logger.warn("Fixing dir", c.get(a).clusterData.dir, r);
          }
          let o = new graphDataStructureExport.Graph({
            multigraph: true,
            compound: true
          }).setGraph({
            rankdir: r,
            nodesep: 50,
            ranksep: 50,
            marginx: 8,
            marginy: 8
          }).setDefaultEdgeLabel(function () {
            return {};
          });
          mermaidConfigUtils.logger.warn("Old graph before copy", graphSerializeUtil.serializeGraph(t));
          y(a, t, o, a);
          t.setNode(a, {
            clusterNode: true,
            id: a,
            clusterData: c.get(a).clusterData,
            label: c.get(a).label,
            graph: o
          });
          mermaidConfigUtils.logger.warn("New graph after copy node: (", a, ")", graphSerializeUtil.serializeGraph(o));
          mermaidConfigUtils.logger.debug("Old graph after copy", graphSerializeUtil.serializeGraph(t));
        } else {
          mermaidConfigUtils.logger.warn("Cluster ** ", a, " **not meeting the criteria !externalConnections:", !c.get(a).externalConnections, " no parent: ", !t.parent(a), " children ", t.children(a) && t.children(a).length > 0, t.children("D"), e);
          mermaidConfigUtils.logger.debug(c);
        }
      } else {
        mermaidConfigUtils.logger.debug("Not a cluster", a, e);
      }
    }
    r = t.nodes();
    mermaidConfigUtils.logger.warn("New list of nodes", r);
    for (let a of r) {
      let r = t.node(a);
      mermaidConfigUtils.logger.warn(" Now next level", a, r);
      if (r == null ? undefined : r.clusterNode) {
        x(r.graph, e + 1);
      }
    }
  }, "extractor");
  var v = mermaidConfigUtils.setName((t, e) => {
    if (e.length === 0) {
      return [];
    }
    let r = Object.assign([], e);
    e.forEach(e => {
      let a = t.children(e);
      let n = v(t, a);
      r = [...r, ...n];
    });
    return r;
  }, "sorter");
  var L = mermaidConfigUtils.setName(t => v(t, t.children()), "sortNodesByHierarchy");
  var X = mermaidConfigUtils.setName(async (t, e, r, l, p, h) => {
    mermaidConfigUtils.logger.warn("Graph in recursive render:XAX", graphSerializeUtil.serializeGraph(e), p);
    let g = e.graph().rankdir;
    mermaidConfigUtils.logger.trace("Dir in recursive render - dir:", g);
    let f = t.insert("g").attr("class", "root");
    if (e.nodes()) {
      mermaidConfigUtils.logger.info("Recursive render XXX", e.nodes());
    } else {
      mermaidConfigUtils.logger.info("No nodes found for", e);
    }
    if (e.edges().length > 0) {
      mermaidConfigUtils.logger.info("Recursive edges", e.edge(e.edges()[0]));
    }
    let u = f.insert("g").attr("class", "clusters");
    let y = f.insert("g").attr("class", "edgePaths");
    let m = f.insert("g").attr("class", "edgeLabels");
    let w = f.insert("g").attr("class", "nodes");
    await Promise.all(e.nodes().map(async function (t) {
      let a = e.node(t);
      if (p !== undefined) {
        let r = JSON.parse(JSON.stringify(p.clusterData));
        mermaidConfigUtils.logger.trace("Setting data for parent cluster XXX\n Node.id = ", t, "\n data=", r.height, "\nParent cluster", p.height);
        e.setNode(p.id, r);
        if (!e.parent(t)) {
          mermaidConfigUtils.logger.trace("Setting parent", t, p.id);
          e.setParent(t, p.id, r);
        }
      }
      mermaidConfigUtils.logger.info("(Insert) Node XXX" + t + ": " + JSON.stringify(e.node(t)));
      if (a == null ? undefined : a.clusterNode) {
        mermaidConfigUtils.logger.info("Cluster identified XBX", t, a.width, e.node(t));
        let {
          ranksep: i,
          nodesep: o
        } = e.graph();
        a.graph.setGraph({
          ...a.graph.graph(),
          ranksep: i + 25,
          nodesep: o
        });
        let s = await X(w, a.graph, r, l, e.node(t), h);
        let c = s.elem;
        mermaidNodeShapesRenderer_1.updateNodeBounds(a, c);
        a.diff = s.diff || 0;
        mermaidConfigUtils.logger.info("New compound node after recursive render XAX", t, "width", a.width, "height", a.height);
        mermaidNodeShapesRenderer_1.setNodeElem(c, a);
      } else if (e.children(t).length > 0) {
        mermaidConfigUtils.logger.trace("Cluster - the non recursive path XBX", t, a.id, a, a.width, "Graph:", e);
        mermaidConfigUtils.logger.trace(M(a.id, e));
        c.set(a.id, {
          id: M(a.id, e),
          node: a
        });
      } else {
        mermaidConfigUtils.logger.trace("Node - the non recursive path XAX", t, w, e.node(t), g);
        await mermaidNodeShapesRenderer_1.insertCluster(w, e.node(t), {
          config: h,
          dir: g
        });
      }
    }));
    let k = mermaidConfigUtils.setName(async () => {
      let t = e.edges().map(async function (t) {
        let r = e.edge(t.v, t.w, t.name);
        mermaidConfigUtils.logger.info("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(t));
        mermaidConfigUtils.logger.info("Edge " + t.v + " -> " + t.w + ": ", t, " ", JSON.stringify(e.edge(t)));
        mermaidConfigUtils.logger.info("Fix", c, "ids:", t.v, t.w, "Translating: ", c.get(t.v), c.get(t.w));
        await mermaidEdgeRenderingUtils.insertEdgeLabel(m, r);
      });
      await Promise.all(t);
    }, "processEdges");
    await k();
    mermaidConfigUtils.logger.info("Graph before layout:", JSON.stringify(graphSerializeUtil.serializeGraph(e)));
    mermaidConfigUtils.logger.info("############################################# XXX");
    mermaidConfigUtils.logger.info("###                Layout                 ### XXX");
    mermaidConfigUtils.logger.info("############################################# XXX");
    graphLayoutEngine.layoutGraph(e);
    mermaidConfigUtils.logger.info("Graph after layout:", JSON.stringify(graphSerializeUtil.serializeGraph(e)));
    let b = 0;
    let {
      subGraphTitleTotalMargin: x
    } = mermaidSubgraphTitleMarginUtils.getSubGraphTitleMargins(h);
    await Promise.all(L(e).map(async function (t) {
      let r = e.node(t);
      mermaidConfigUtils.logger.info("Position XBX => " + t + ": (" + r.x, "," + r.y, ") width: ", r.width, " height: ", r.height);
      if (r == null ? undefined : r.clusterNode) {
        r.y += x;
        mermaidConfigUtils.logger.info("A tainted cluster node XBX1", t, r.id, r.width, r.height, r.x, r.y, e.parent(t));
        c.get(r.id).node = r;
        mermaidNodeShapesRenderer_1.kanbanItem(r);
      } else if (e.children(t).length > 0) {
        mermaidConfigUtils.logger.info("A pure cluster node XBX1", t, r.id, r.x, r.y, r.width, r.height, e.parent(t));
        r.height += x;
        e.node(r.parentId);
        let i = (r == null ? undefined : r.padding) / 2 || 0;
        let o = (r == null ? undefined : r.labelBBox?.height) || 0;
        mermaidConfigUtils.logger.debug("OffsetY", o - i || 0, "labelHeight", o, "halfPadding", i);
        await mermaidNodeShapesRenderer_1.insertNode(u, r);
        c.get(r.id).node = r;
      } else {
        let t = e.node(r.parentId);
        r.y += x / 2;
        mermaidConfigUtils.logger.info("A regular node XBX1 - using the padding", r.id, "parent", r.parentId, r.width, r.height, r.x, r.y, "offsetY", r.offsetY, "parent", t, t == null ? undefined : t.offsetY, r);
        mermaidNodeShapesRenderer_1.kanbanItem(r);
      }
    }));
    e.edges().forEach(function (t) {
      let n = e.edge(t);
      mermaidConfigUtils.logger.info("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(n), n);
      n.points.forEach(t => t.y += x / 2);
      let i = e.node(t.v);
      var o = e.node(t.w);
      let s = mermaidEdgeRenderingUtils.insertEdge(y, n, c, r, i, o, l);
      mermaidEdgeRenderingUtils.positionEdgeLabel(n, s);
    });
    e.nodes().forEach(function (t) {
      let r = e.node(t);
      mermaidConfigUtils.logger.info(t, r.type, r.diff);
      if (r.isGroup) {
        b = r.diff;
      }
    });
    mermaidConfigUtils.logger.warn("Returning from recursive render XAX", f, b);
    return {
      elem: f,
      diff: b
    };
  }, "recursiveRender");
  var E = mermaidConfigUtils.setName(async (t, e) => {
    var o;
    var h;
    let f = new graphDataStructureExport.Graph({
      multigraph: true,
      compound: true
    }).setGraph({
      rankdir: t.direction,
      nodesep: t.config?.nodeSpacing || ((o = t.config) === null || o === undefined ? undefined : o.flowchart?.nodeSpacing) || t.nodeSpacing,
      ranksep: t.config?.rankSpacing || ((h = t.config) === null || h === undefined ? undefined : h.flowchart?.rankSpacing) || t.rankSpacing,
      marginx: 8,
      marginy: 8
    }).setDefaultEdgeLabel(function () {
      return {};
    });
    let u = e.select("g");
    mermaidEdgeRenderingUtils.insertMarkers(u, t.markers, t.type, t.diagramId);
    mermaidNodeShapesRenderer_1.clearNodeCache();
    mermaidEdgeRenderingUtils.clear();
    mermaidNodeShapesRenderer_1.clearClusterCache();
    g();
    t.nodes.forEach(t => {
      f.setNode(t.id, {
        ...t
      });
      if (t.parentId) {
        f.setParent(t.id, t.parentId);
      }
    });
    mermaidConfigUtils.logger.debug("Edges:", t.edges);
    t.edges.forEach(t => {
      if (t.start === t.end) {
        let e = t.start;
        let r = e + "---" + e + "---1";
        let a = e + "---" + e + "---2";
        let n = f.node(e);
        f.setNode(r, {
          domId: r,
          id: r,
          parentId: n.parentId,
          labelStyle: "",
          label: "",
          padding: 0,
          shape: "labelRect",
          style: "",
          width: 10,
          height: 10
        });
        f.setParent(r, n.parentId);
        f.setNode(a, {
          domId: a,
          id: a,
          parentId: n.parentId,
          labelStyle: "",
          padding: 0,
          shape: "labelRect",
          label: "",
          style: "",
          width: 10,
          height: 10
        });
        f.setParent(a, n.parentId);
        let i = structuredClone(t);
        let d = structuredClone(t);
        let o = structuredClone(t);
        i.label = "";
        i.arrowTypeEnd = "none";
        i.id = e + "-cyclic-special-1";
        d.arrowTypeStart = "none";
        d.arrowTypeEnd = "none";
        d.id = e + "-cyclic-special-mid";
        o.label = "";
        if (n.isGroup) {
          i.fromCluster = e;
          o.toCluster = e;
        }
        o.id = e + "-cyclic-special-2";
        o.arrowTypeStart = "none";
        f.setEdge(e, r, i, e + "-cyclic-special-0");
        f.setEdge(r, a, d, e + "-cyclic-special-1");
        f.setEdge(a, e, o, e + "-cyc<lic-special-2");
      } else {
        f.setEdge(t.start, t.end, {
          ...t
        }, t.id);
      }
    });
    mermaidConfigUtils.logger.warn("Graph at first:", JSON.stringify(graphSerializeUtil.serializeGraph(f)));
    b(f);
    mermaidConfigUtils.logger.warn("Graph after XAX:", JSON.stringify(graphSerializeUtil.serializeGraph(f)));
    let y = mermaidConfigUtils.getConfigAlias();
    await X(u, f, t.type, t.diagramId, undefined, y);
  }, "render");
  require.r(exports);
  require.d(exports, {
    render: function () {
      return E;
    }
  });
}