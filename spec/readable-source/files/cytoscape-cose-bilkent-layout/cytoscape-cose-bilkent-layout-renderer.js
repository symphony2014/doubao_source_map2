// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'o' to 'cytoscapeCoreModule'
// - Resolved require(305745) to 'cytoscape-core-module'
// - Renamed variable 'a' to 'coseBilkentLayout'
// - Resolved require(168116) to 'cose-bilkent-layout'
// - Renamed variable 'd' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'Z' to 'Cytoscape' (module 305745)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 86242.babb676b.js
         * chunkId: 86242
         * moduleId: 356453
         */
module.exports = function (module, exports, require) {
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var cytoscapeCoreModule = require("cytoscape-core-module") /*id: 305745*/;
  var coseBilkentLayout = require("cose-bilkent-layout") /*id: 168116*/;
  var r = coseBilkentLayout;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  function s(t, e) {
    t.forEach(t => {
      let a = {
        id: t.id,
        labelText: t.label,
        height: t.height,
        width: t.width,
        padding: t.padding ?? 0
      };
      Object.keys(t).forEach(e => {
        if (!["id", "label", "height", "width", "padding", "x", "y"].includes(e)) {
          a[e] = t[e];
        }
      });
      e.add({
        group: "nodes",
        data: a,
        position: {
          x: t.x ?? 0,
          y: t.y ?? 0
        }
      });
    });
  }
  function l(t, e) {
    t.forEach(t => {
      let n = {
        id: t.id,
        source: t.start,
        target: t.end
      };
      Object.keys(t).forEach(e => {
        if (!["id", "start", "end"].includes(e)) {
          n[e] = t[e];
        }
      });
      e.add({
        group: "edges",
        data: n
      });
    });
  }
  function u(t) {
    return new Promise(e => {
      let n = axisAndZoomUtilities.select("body").append("div").attr("id", "cy").attr("style", "display:none");
      let a = cytoscapeCoreModule.Cytoscape({
        container: document.getElementById("cy"),
        style: [{
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }]
      });
      n.remove();
      s(t.nodes, a);
      l(t.edges, a);
      a.nodes().forEach(function (t) {
        t.layoutDimensions = () => {
          let e = t.data();
          return {
            w: e.width,
            h: e.height
          };
        };
      });
      a.layout({
        name: "cose-bilkent",
        quality: "proof",
        styleEnabled: false,
        animate: false
      }).run();
      a.ready(t => {
        loggerLevelUtils.logger.info("Cytoscape ready", t);
        e(a);
      });
    });
  }
  function g(t) {
    return t.nodes().map(t => {
      let e = t.data();
      let n = t.position();
      let i = {
        id: e.id,
        x: n.x,
        y: n.y
      };
      Object.keys(e).forEach(t => {
        if (t !== "id") {
          i[t] = e[t];
        }
      });
      return i;
    });
  }
  function c(t) {
    return t.edges().map(t => {
      let e = t.data();
      let n = t._private.rscratch;
      let i = {
        id: e.id,
        source: e.source,
        target: e.target,
        startX: n.startX,
        startY: n.startY,
        midX: n.midX,
        midY: n.midY,
        endX: n.endX,
        endY: n.endY
      };
      Object.keys(e).forEach(t => {
        if (!["id", "source", "target"].includes(t)) {
          i[t] = e[t];
        }
      });
      return i;
    });
  }
  async function y(t, e) {
    loggerLevelUtils.logger.debug("Starting cose-bilkent layout algorithm");
    try {
      p(t);
      let e = await u(t);
      let n = g(e);
      let o = c(e);
      loggerLevelUtils.logger.debug(`Layout completed: ${n.length} nodes, ${o.length} edges`);
      return {
        nodes: n,
        edges: o
      };
    } catch (t) {
      loggerLevelUtils.logger.error("Error in cose-bilkent layout algorithm:", t);
      throw t;
    }
  }
  function p(t) {
    if (!t) {
      throw Error("Layout data is required");
    }
    if (!t.config) {
      throw Error("Configuration is required in layout data");
    }
    if (!t.rootNode) {
      throw Error("Root node is required");
    }
    if (!t.nodes || !Array.isArray(t.nodes)) {
      throw Error("No nodes found in layout data");
    }
    if (!Array.isArray(t.edges)) {
      throw Error("Edges array is required in layout data");
    }
    return true;
  }
  cytoscapeCoreModule.Cytoscape.use(r);
  loggerLevelUtils.setFunctionName(s, "addNodes");
  loggerLevelUtils.setFunctionName(l, "addEdges");
  loggerLevelUtils.setFunctionName(u, "createCytoscapeInstance");
  loggerLevelUtils.setFunctionName(g, "extractPositionedNodes");
  loggerLevelUtils.setFunctionName(c, "extractPositionedEdges");
  loggerLevelUtils.setFunctionName(y, "executeCoseBilkentLayout");
  loggerLevelUtils.setFunctionName(p, "validateLayoutData");
  var E = loggerLevelUtils.setFunctionName(async (t, e, n, i) => {
    let {
      insertCluster: o,
      insertEdge: a,
      insertEdgeLabel: r,
      insertMarkers: d,
      insertNode: s,
      log: l,
      positionEdgeLabel: u
    } = n;
    let {
      algorithm: g
    } = i;
    let c = {};
    let p = {};
    let E = e.select("g");
    d(E, t.markers, t.type, t.diagramId);
    let h = E.insert("g").attr("class", "subgraphs");
    let f = E.insert("g").attr("class", "edgePaths");
    let L = E.insert("g").attr("class", "edgeLabels");
    let _ = E.insert("g").attr("class", "nodes");
    l.debug("Inserting nodes into DOM for dimension calculation");
    await Promise.all(t.nodes.map(async e => {
      if (e.isGroup) {
        let t = {
          ...e
        };
        p[e.id] = t;
        c[e.id] = t;
        await o(h, e);
      } else {
        let n = {
          ...e
        };
        c[e.id] = n;
        let i = await s(_, e, {
          config: t.config,
          dir: t.direction || "TB"
        });
        let o = i.node().getBBox();
        n.width = o.width;
        n.height = o.height;
        n.domId = i;
        l.debug(`Node ${e.id} dimensions: ${o.width}x${o.height}`);
      }
    }));
    l.debug("Running cose-bilkent layout algorithm");
    let T = {
      ...t,
      nodes: t.nodes.map(t => {
        let e = c[t.id];
        return {
          ...t,
          width: e.width,
          height: e.height
        };
      })
    };
    let A = await y(T, t.config);
    l.debug("Positioning nodes based on layout results");
    A.nodes.forEach(t => {
      let e = c[t.id];
      if (e == null ? undefined : e.domId) {
        e.domId.attr("transform", `translate(${t.x}, ${t.y})`);
        e.x = t.x;
        e.y = t.y;
        l.debug(`Positioned node ${e.id} at center (${t.x}, ${t.y})`);
      }
    });
    A.edges.forEach(e => {
      let n = t.edges.find(t => t.id === e.id);
      if (n) {
        n.points = [{
          x: e.startX,
          y: e.startY
        }, {
          x: e.midX,
          y: e.midY
        }, {
          x: e.endX,
          y: e.endY
        }];
      }
    });
    l.debug("Inserting and positioning edges");
    await Promise.all(t.edges.map(async e => {
      await r(L, e);
      let o = c[e.start ?? ""];
      let d = c[e.end ?? ""];
      if (o && d) {
        let n = A.edges.find(t => t.id === e.id);
        if (n) {
          l.debug("APA01 positionedEdge", n);
          let i = {
            ...e
          };
          let r = a(f, i, p, t.type, o, d, t.diagramId);
          u(i, r);
        } else {
          let n = {
            ...e,
            points: [{
              x: o.x || 0,
              y: o.y || 0
            }, {
              x: d.x || 0,
              y: d.y || 0
            }]
          };
          let i = a(f, n, p, t.type, o, d, t.diagramId);
          u(n, i);
        }
      }
    }));
    l.debug("Cose-bilkent rendering completed");
  }, "render");
  require.r(exports);
  require.d(exports, {
    render: function () {
      return E;
    }
  });
}