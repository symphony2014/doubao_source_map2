// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_b' to 'getRegisteredLayoutAlgorithm'
// - Renamed export 'jM' to 'registerLayoutLoaders'
// - Renamed export 'sY' to 'render'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10244.d40828c2.js
         * chunkId: 10244
         * moduleId: 103329
         */
module.exports = function (module, exports, require) {
  var mermaidEdgeRenderingUtils = require("mermaid-edge-rendering-utils") /*id: 836477*/;
  var mermaidNodeShapesRenderer_1 = require("mermaid-node-shapes-renderer_1") /*id: 608361*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var l = {
    common: mermaidConfigUtils.textUtils,
    getConfig: mermaidConfigUtils.getConfig,
    insertCluster: mermaidNodeShapesRenderer_1.insertNode,
    insertEdge: mermaidEdgeRenderingUtils.insertEdge,
    insertEdgeLabel: mermaidEdgeRenderingUtils.insertEdgeLabel,
    insertMarkers: mermaidEdgeRenderingUtils.insertMarkers,
    insertNode: mermaidNodeShapesRenderer_1.insertCluster,
    interpolateToCurve: mermaidTextLayoutUtils.interpolateToCurve,
    labelHelper: mermaidNodeShapesRenderer_1.labelHelper,
    log: mermaidConfigUtils.logger,
    positionEdgeLabel: mermaidEdgeRenderingUtils.positionEdgeLabel
  };
  var o = {};
  var u = mermaidConfigUtils.setName(t => {
    for (let e of t) {
      o[e.name] = e;
    }
  }, "registerLayoutLoaders");
  mermaidConfigUtils.setName(() => {
    u([{
      name: "dagre",
      loader: mermaidConfigUtils.setName(async () => await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("graph-layout-engine") /*id: 60274*/, require.e("flowchart-diagram-renderer") /*id: 33786*/]).then(require.bind(require, "mermaid-graph-cluster-renderer") /*id: 119276*/), "loader")
    }]);
  }, "registerDefaultLayoutLoaders")();
  var c = mermaidConfigUtils.setName(async (t, e) => {
    if (!(t.layoutAlgorithm in o)) {
      throw Error(`Unknown layout algorithm: ${t.layoutAlgorithm}`);
    }
    let r = o[t.layoutAlgorithm];
    return (await r.loader()).render(t, e, l, {
      algorithm: r.algorithm
    });
  }, "render");
  var h = mermaidConfigUtils.setName(function (t = "", {
    fallback: e = "dagre"
  } = {}) {
    if (t in o) {
      return t;
    }
    if (e in o) {
      mermaidConfigUtils.logger.warn(`Layout algorithm ${t} is not registered. Using ${e} as fallback.`);
      return e;
    }
    throw Error(`Both layout algorithms ${t} and ${e} are not registered.`);
  }, "getRegisteredLayoutAlgorithm");
  require.d(exports, {
    getRegisteredLayoutAlgorithm: function () {
      return h;
    },
    registerLayoutLoaders: function () {
      return u;
    },
    render: function () {
      return c;
    }
  });
}