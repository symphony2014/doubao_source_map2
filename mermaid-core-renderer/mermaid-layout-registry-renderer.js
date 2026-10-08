// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_b' to 'getRegisteredLayoutAlgorithm'
// - Renamed export 'jM' to 'registerLayoutLoaders'
// - Renamed export 'sY' to 'render'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 484129
         */
module.exports = function (module, exports, require) {
  var mermaidFlowchartEdgeRenderer = require("mermaid-flowchart-edge-renderer") /*id: 968232*/;
  var mermaidNodeShapesRenderer = require("mermaid-node-shapes-renderer") /*id: 411411*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var s = {
    common: mermaidConfigUtils_1.textUtilities,
    getConfig: mermaidConfigUtils_1.getConfig,
    insertCluster: mermaidNodeShapesRenderer.insertNode,
    insertEdge: mermaidFlowchartEdgeRenderer.insertEdge,
    insertEdgeLabel: mermaidFlowchartEdgeRenderer.insertEdgeLabel,
    insertMarkers: mermaidFlowchartEdgeRenderer.insertMarkers,
    insertNode: mermaidNodeShapesRenderer.insertCluster,
    interpolateToCurve: mermaidDiagramUtils.interpolateToCurve,
    labelHelper: mermaidNodeShapesRenderer.labelHelper,
    log: loggerLevelUtils.logger,
    positionEdgeLabel: mermaidFlowchartEdgeRenderer.positionEdgeLabel
  };
  var h = {};
  var c = loggerLevelUtils.setFunctionName(t => {
    for (let e of t) {
      h[e.name] = e;
    }
  }, "registerLayoutLoaders");
  loggerLevelUtils.setFunctionName(() => {
    c([{
      name: "dagre",
      loader: loggerLevelUtils.setFunctionName(async () => await Promise.all([require.e("graph-layout-engine") /*id: 60274*/, require.e("graph-cluster-layout") /*id: 72523*/]).then(require.bind(require, "mermaid-flowchart-renderer") /*id: 692415*/), "loader")
    }, {
      name: "cose-bilkent",
      loader: loggerLevelUtils.setFunctionName(async () => await Promise.all([require.e("webpack-chunk-cose-layout") /*id: 32838*/, require.e("cytoscape-cose-bilkent-layout") /*id: 86242*/]).then(require.bind(require, "cytoscape-cose-bilkent-layout-renderer") /*id: 356453*/), "loader")
    }]);
  }, "registerDefaultLayoutLoaders")();
  var d = loggerLevelUtils.setFunctionName(async (t, e) => {
    if (!(t.layoutAlgorithm in h)) {
      throw Error(`Unknown layout algorithm: ${t.layoutAlgorithm}`);
    }
    let r = h[t.layoutAlgorithm];
    return (await r.loader()).render(t, e, s, {
      algorithm: r.algorithm
    });
  }, "render");
  var u = loggerLevelUtils.setFunctionName(function (t = "", {
    fallback: e = "dagre"
  } = {}) {
    if (t in h) {
      return t;
    }
    if (e in h) {
      loggerLevelUtils.logger.warn(`Layout algorithm ${t} is not registered. Using ${e} as fallback.`);
      return e;
    }
    throw Error(`Both layout algorithms ${t} and ${e} are not registered.`);
  }, "getRegisteredLayoutAlgorithm");
  require.d(exports, {
    getRegisteredLayoutAlgorithm: function () {
      return u;
    },
    registerLayoutLoaders: function () {
      return c;
    },
    render: function () {
      return d;
    }
  });
}