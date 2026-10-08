// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerMermaidView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 887826
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var yamlSchemaUtils = require("yaml-schema-utils") /*id: 165530*/;
  var mermaidLayoutRegistry = require("mermaid-layout-registry") /*id: 103329*/;
  require("mermaid-edge-rendering-utils") /*id: 836477*/;
  require("line-arrow-offset-utils") /*id: 744654*/;
  require("mermaid-node-shapes-renderer_1") /*id: 608361*/;
  require("mermaid-subgraph-title-margin-utils") /*id: 152138*/;
  require("mermaid-node-style-utils") /*id: 587619*/;
  var mermaidTextIconUtils = require("mermaid-text-icon-utils") /*id: 5699*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidPackageJson_1 = require("mermaid-package-json_1") /*id: 965787*/;
  var mermaidSvgElementSelector = require("mermaid-svg-element-selector") /*id: 871430*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var dedentTemplateString = require("dedent-template-string") /*id: 454132*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var cssSyntaxStringifier = require("css-syntax-stringifier") /*id: 392385*/;
  var cssParser = require("css-parser") /*id: 363110*/;
  var dompurifyCore = require("dompurify-core") /*id: 345925*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var x = {
    id: "c4",
    detector: mermaidConfigUtils.setName(e => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"),
    loader: mermaidConfigUtils.setName(async () => {
      let {
        diagram: e
      } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("mermaid-c4-diagram-utils") /*id: 65210*/]).then(require.bind(require, "mermaid-c4-diagram-renderer") /*id: 858244*/);
      return {
        id: "c4",
        diagram: e
      };
    }, "loader")
  };
  var E = "flowchart";
  var C = mermaidConfigUtils.setName((e, i) => {
    return (i == null ? undefined : i.flowchart?.defaultRenderer) !== "dagre-wrapper" && (i == null ? undefined : i.flowchart?.defaultRenderer) !== "elk" && /^\s*graph/.test(e);
  }, "detector");
  var _ = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("js-yaml-core-library") /*id: 23945*/, require.e("ui-modules-utilities") /*id: 41045*/]).then(require.bind(require, "flowchart-parser-renderer-module") /*id: 101112*/);
    return {
      id: E,
      diagram: e
    };
  }, "loader");
  var T = {
    id: E,
    detector: C,
    loader: _
  };
  var I = "flowchart-v2";
  var R = mermaidConfigUtils.setName((e, i) => {
    return (i == null ? undefined : i.flowchart?.defaultRenderer) !== "dagre-d3" && ((i == null ? undefined : i.flowchart?.defaultRenderer) === "elk" && (i.layout = "elk"), !!/^\s*graph/.test(e) && (i == null ? undefined : i.flowchart?.defaultRenderer) === "dagre-wrapper" || /^\s*flowchart/.test(e));
  }, "detector");
  var L = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("js-yaml-core-library") /*id: 23945*/, require.e("ui-modules-utilities") /*id: 41045*/]).then(require.bind(require, "flowchart-parser-renderer-module") /*id: 101112*/);
    return {
      id: I,
      diagram: e
    };
  }, "loader");
  var N = {
    id: I,
    detector: R,
    loader: L
  };
  var A = {
    id: "er",
    detector: mermaidConfigUtils.setName(e => /^\s*erDiagram/.test(e), "detector"),
    loader: mermaidConfigUtils.setName(async () => {
      let {
        diagram: e
      } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("flowchart-edge-rendering") /*id: 92010*/]).then(require.bind(require, "mermaid-er-diagram-handler") /*id: 63261*/);
      return {
        id: "er",
        diagram: e
      };
    }, "loader")
  };
  var P = "gitGraph";
  var D = mermaidConfigUtils.setName(e => /^\s*gitGraph/.test(e), "detector");
  var j = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("url-sanitizer-utility") /*id: 91909*/]).then(require.bind(require, "mermaid-gitgraph-diagram") /*id: 241345*/);
    return {
      id: P,
      diagram: e
    };
  }, "loader");
  var O = {
    id: P,
    detector: D,
    loader: j
  };
  var B = "gantt";
  var F = mermaidConfigUtils.setName(e => /^\s*gantt/.test(e), "detector");
  var Z = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("mermaid-diagrams") /*id: 4078*/]).then(require.bind(require, "mermaid-gantt-diagram-parser-renderer") /*id: 773465*/);
    return {
      id: B,
      diagram: e
    };
  }, "loader");
  var z = {
    id: B,
    detector: F,
    loader: Z
  };
  var H = "info";
  var $ = mermaidConfigUtils.setName(e => /^\s*info/.test(e), "detector");
  var W = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("mermaid-core-package") /*id: 65529*/]).then(require.bind(require, "mermaid-info-diagram-module") /*id: 162873*/);
    return {
      id: H,
      diagram: e
    };
  }, "loader");
  var V = {
    id: H,
    detector: $,
    loader: W
  };
  var U = {
    id: "pie",
    detector: mermaidConfigUtils.setName(e => /^\s*pie/.test(e), "detector"),
    loader: mermaidConfigUtils.setName(async () => {
      let {
        diagram: e
      } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("mermaid-utils") /*id: 84277*/]).then(require.bind(require, "mermaid-pie-diagram") /*id: 852342*/);
      return {
        id: "pie",
        diagram: e
      };
    }, "loader")
  };
  var X = "quadrantChart";
  var Y = mermaidConfigUtils.setName(e => /^\s*quadrantChart/.test(e), "detector");
  var q = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("quadrant-chart-parser") /*id: 36622*/]).then(require.bind(require, "mermaid-quadrant-chart-renderer") /*id: 216506*/);
    return {
      id: X,
      diagram: e
    };
  }, "loader");
  var G = {
    id: X,
    detector: Y,
    loader: q
  };
  var J = "xychart";
  var K = mermaidConfigUtils.setName(e => /^\s*xychart(-beta)?/.test(e), "detector");
  var Q = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("xy-chart-renderer") /*id: 29963*/]).then(require.bind(require, "mermaid-pie-diagram-renderer") /*id: 959752*/);
    return {
      id: J,
      diagram: e
    };
  }, "loader");
  var ee = {
    id: J,
    detector: K,
    loader: Q
  };
  var et = "requirement";
  var ei = mermaidConfigUtils.setName(e => /^\s*requirement(Diagram)?/.test(e), "detector");
  var er = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("mermaid-diagram-edge-arrow-rendering") /*id: 82305*/]).then(require.bind(require, "mermaid-requirement-diagram-parser") /*id: 369401*/);
    return {
      id: et,
      diagram: e
    };
  }, "loader");
  var en = {
    id: et,
    detector: ei,
    loader: er
  };
  var eo = "sequence";
  var el = mermaidConfigUtils.setName(e => /^\s*sequenceDiagram/.test(e), "detector");
  var es = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("sequence-diagram") /*id: 51757*/]).then(require.bind(require, "sequence-diagram-parser-renderer") /*id: 624130*/);
    return {
      id: eo,
      diagram: e
    };
  }, "loader");
  var ea = {
    id: eo,
    detector: el,
    loader: es
  };
  var ec = "class";
  var ed = mermaidConfigUtils.setName((e, i) => {
    return (i == null ? undefined : i.class?.defaultRenderer) !== "dagre-wrapper" && /^\s*classDiagram/.test(e);
  }, "detector");
  var eu = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("mermaid-class-diagram-v1") /*id: 10244*/]).then(require.bind(require, "mermaid-class-diagram-definition") /*id: 848557*/);
    return {
      id: ec,
      diagram: e
    };
  }, "loader");
  var eh = {
    id: ec,
    detector: ed,
    loader: eu
  };
  var ep = "classDiagram";
  var ef = mermaidConfigUtils.setName((e, i) => {
    return !!/^\s*classDiagram/.test(e) && (i == null ? undefined : i.class?.defaultRenderer) === "dagre-wrapper" || /^\s*classDiagram-v2/.test(e);
  }, "detector");
  var eg = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("mermaid-class-diagram-v2") /*id: 4327*/]).then(require.bind(require, "mermaid-diagram-module") /*id: 497279*/);
    return {
      id: ep,
      diagram: e
    };
  }, "loader");
  var em = {
    id: ep,
    detector: ef,
    loader: eg
  };
  var ev = "state";
  var eb = mermaidConfigUtils.setName((e, i) => {
    return (i == null ? undefined : i.state?.defaultRenderer) !== "dagre-wrapper" && /^\s*stateDiagram/.test(e);
  }, "detector");
  var ey = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("graph-layout-engine") /*id: 60274*/, require.e("mermaid-state-diagram") /*id: 65122*/]).then(require.bind(require, "mermaid-state-diagram") /*id: 794737*/);
    return {
      id: ev,
      diagram: e
    };
  }, "loader");
  var ew = {
    id: ev,
    detector: eb,
    loader: ey
  };
  var ek = "stateDiagram";
  var eS = mermaidConfigUtils.setName((e, i) => {
    return !!/^\s*stateDiagram-v2/.test(e) || !!/^\s*stateDiagram/.test(e) && (i == null ? undefined : i.state?.defaultRenderer) === "dagre-wrapper";
  }, "detector");
  var eM = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("mermaid-state-diagram-core-parser") /*id: 39061*/]).then(require.bind(require, "mermaid-state-diagram-module") /*id: 324362*/);
    return {
      id: ek,
      diagram: e
    };
  }, "loader");
  var ex = {
    id: ek,
    detector: eS,
    loader: eM
  };
  var eE = "journey";
  var eC = mermaidConfigUtils.setName(e => /^\s*journey/.test(e), "detector");
  var e_ = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("mermaid-journey-diagram") /*id: 14080*/]).then(require.bind(require, "mermaid-journey-diagram") /*id: 709460*/);
    return {
      id: eE,
      diagram: e
    };
  }, "loader");
  var eT = {
    id: eE,
    detector: eC,
    loader: e_
  };
  var eI = {
    draw: mermaidConfigUtils.setName((e, i, r) => {
      mermaidConfigUtils.logger.debug("rendering svg for syntax error\n");
      let n = mermaidSvgElementSelector.selectSvgElement(i);
      let o = n.append("g");
      n.attr("viewBox", "0 0 2412 512");
      mermaidConfigUtils.configureSvgSize(n, 100, 512, true);
      o.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z");
      o.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z");
      o.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z");
      o.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z");
      o.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z");
      o.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z");
      o.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text");
      o.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
    }, "draw")
  };
  var eR = {
    db: {},
    renderer: eI,
    parser: {
      parse: mermaidConfigUtils.setName(() => {}, "parse")
    }
  };
  var eL = "flowchart-elk";
  var eN = mermaidConfigUtils.setName(function (e) {
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (!!/^\s*flowchart-elk/.test(e) || !!/^\s*(flowchart|graph)/.test(e) && (r == null ? undefined : r.flowchart?.defaultRenderer) === "elk") && (r.layout = "elk", true);
  }, "detector");
  var eA = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("js-yaml-core-library") /*id: 23945*/, require.e("ui-modules-utilities") /*id: 41045*/]).then(require.bind(require, "flowchart-parser-renderer-module") /*id: 101112*/);
    return {
      id: eL,
      diagram: e
    };
  }, "loader");
  var eP = {
    id: eL,
    detector: eN,
    loader: eA
  };
  var eD = "timeline";
  var ej = mermaidConfigUtils.setName(e => /^\s*timeline/.test(e), "detector");
  var eO = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("mermaid-timeline-parser") /*id: 29329*/]).then(require.bind(require, "mermaid-timeline-diagram") /*id: 65613*/);
    return {
      id: eD,
      diagram: e
    };
  }, "loader");
  var eB = {
    id: eD,
    detector: ej,
    loader: eO
  };
  var eF = "mindmap";
  var eZ = mermaidConfigUtils.setName(e => /^\s*mindmap/.test(e), "detector");
  var ez = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("webpack-chunk-cose-layout") /*id: 32838*/, require.e("mindmap-diagram") /*id: 51836*/]).then(require.bind(require, "mermaid-mindmap-diagram") /*id: 870448*/);
    return {
      id: eF,
      diagram: e
    };
  }, "loader");
  var eH = {
    id: eF,
    detector: eZ,
    loader: ez
  };
  var e$ = "kanban";
  var eW = mermaidConfigUtils.setName(e => /^\s*kanban/.test(e), "detector");
  var eV = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("js-yaml-core-library") /*id: 23945*/, require.e("mermaid-kanban-diagram") /*id: 98766*/]).then(require.bind(require, "mermaid-kanban-diagram") /*id: 842794*/);
    return {
      id: e$,
      diagram: e
    };
  }, "loader");
  var eU = {
    id: e$,
    detector: eW,
    loader: eV
  };
  var eX = "sankey";
  var eY = mermaidConfigUtils.setName(e => /^\s*sankey(-beta)?/.test(e), "detector");
  var eq = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("sankey-diagram-renderer") /*id: 67511*/]).then(require.bind(require, "mermaid-sankey-diagram") /*id: 225762*/);
    return {
      id: eX,
      diagram: e
    };
  }, "loader");
  var eG = {
    id: eX,
    detector: eY,
    loader: eq
  };
  var eJ = "packet";
  var eK = mermaidConfigUtils.setName(e => /^\s*packet(-beta)?/.test(e), "detector");
  var eQ = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("packet-diagram-utility") /*id: 45718*/]).then(require.bind(require, "mermaid-packet-diagram-renderer") /*id: 477536*/);
    return {
      id: eJ,
      diagram: e
    };
  }, "loader");
  var e0 = {
    id: eJ,
    detector: eK,
    loader: eQ
  };
  var e1 = "radar";
  var e2 = mermaidConfigUtils.setName(e => /^\s*radar-beta/.test(e), "detector");
  var e4 = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("mermaid-radar-diagram") /*id: 11049*/]).then(require.bind(require, "mermaid-radar-diagram") /*id: 636218*/);
    return {
      id: e1,
      diagram: e
    };
  }, "loader");
  var e3 = {
    id: e1,
    detector: e2,
    loader: e4
  };
  var e5 = "block";
  var e6 = mermaidConfigUtils.setName(e => /^\s*block(-beta)?/.test(e), "detector");
  var e9 = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("mermaid-block-diagram-parser") /*id: 93687*/]).then(require.bind(require, "mermaid-block-beta-parser-renderer") /*id: 323490*/);
    return {
      id: e5,
      diagram: e
    };
  }, "loader");
  var e7 = {
    id: e5,
    detector: e6,
    loader: e9
  };
  var e8 = "architecture";
  var te = mermaidConfigUtils.setName(e => /^\s*architecture/.test(e), "detector");
  var tt = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("webpack-chunk-cose-layout") /*id: 32838*/, require.e("diagram-renderer-layout-engine") /*id: 70488*/]).then(require.bind(require, "mermaid-architecture-diagram_1") /*id: 93227*/);
    return {
      id: e8,
      diagram: e
    };
  }, "loader");
  var ti = {
    id: e8,
    detector: te,
    loader: tt
  };
  var tr = "treemap";
  var tn = mermaidConfigUtils.setName(e => /^\s*treemap/.test(e), "detector");
  var to = mermaidConfigUtils.setName(async () => {
    let {
      diagram: e
    } = await Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("mermaid-treemap-renderer") /*id: 79569*/]).then(require.bind(require, "mermaid-treemap-diagram-module") /*id: 33419*/);
    return {
      id: tr,
      diagram: e
    };
  }, "loader");
  var tl = {
    id: tr,
    detector: tn,
    loader: to
  };
  var ts = false;
  var ta = mermaidConfigUtils.setName(() => {
    if (!ts) {
      ts = true;
      mermaidConfigUtils.registerDiagram("error", eR, e => e.toLowerCase().trim() === "error");
      mermaidConfigUtils.registerDiagram("---", {
        db: {
          clear: mermaidConfigUtils.setName(() => {}, "clear")
        },
        styles: {},
        renderer: {
          draw: mermaidConfigUtils.setName(() => {}, "draw")
        },
        parser: {
          parse: mermaidConfigUtils.setName(() => {
            throw Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
          }, "parse")
        },
        init: mermaidConfigUtils.setName(() => null, "init")
      }, e => e.toLowerCase().trimStart().startsWith("---"));
      mermaidConfigUtils.registerLazyDiagrams(eP, eH, ti);
      mermaidConfigUtils.registerLazyDiagrams(x, eU, em, eh, A, z, V, U, en, ea, N, T, eB, O, ex, ew, eT, G, eG, e0, ee, e7, e3, tl);
    }
  }, "addDiagrams");
  var tc = mermaidConfigUtils.setName(async () => {
    mermaidConfigUtils.logger.debug("Loading registered diagrams");
    let e = (await Promise.allSettled(Object.entries(mermaidConfigUtils.diagramDetectors).map(async e => {
      let [i, {
        detector: r,
        loader: n
      }] = e;
      if (n) {
        try {
          mermaidConfigUtils.getDiagram(i);
        } catch {
          try {
            let {
              diagram: e,
              id: i
            } = await n();
            mermaidConfigUtils.registerDiagram(i, e, r);
          } catch (e) {
            mermaidConfigUtils.logger.error(`Failed to load external diagram with key ${i}. Removing from detectors.`);
            delete mermaidConfigUtils.diagramDetectors[i];
            throw e;
          }
        }
      }
    }))).filter(e => e.status === "rejected");
    if (e.length > 0) {
      mermaidConfigUtils.logger.error(`Failed to load ${e.length} external diagrams`);
      for (let i of e) {
        mermaidConfigUtils.logger.error(i);
      }
      throw Error(`Failed to load ${e.length} external diagrams`);
    }
  }, "loadRegisteredDiagrams");
  function td(e, i) {
    e.attr("role", "graphics-document document");
    if (i !== "") {
      e.attr("aria-roledescription", i);
    }
  }
  function tu(e, i, r, n) {
    if (e.insert !== undefined) {
      if (r) {
        let i = `chart-desc-${n}`;
        e.attr("aria-describedby", i);
        e.insert("desc", ":first-child").attr("id", i).text(r);
      }
      if (i) {
        let r = `chart-title-${n}`;
        e.attr("aria-labelledby", r);
        e.insert("title", ":first-child").attr("id", r).text(i);
      }
    }
  }
  mermaidConfigUtils.setName(td, "setA11yDiagramInfo");
  mermaidConfigUtils.setName(tu, "addSVGa11yTitleDescription");
  a = class e {
    static async fromText(i) {
      var r;
      var n;
      let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let l = mermaidConfigUtils.getConfig();
      let s = mermaidConfigUtils.detectType(i, l);
      i = mermaidTextLayoutUtils.encodeEntities(i) + "\n";
      try {
        mermaidConfigUtils.getDiagram(s);
      } catch {
        let e = mermaidConfigUtils.getDiagramLoader(s);
        if (!e) {
          throw new mermaidConfigUtils.UnknownDiagramError(`Diagram ${s} not found.`);
        }
        let {
          id: i,
          diagram: r
        } = await e();
        mermaidConfigUtils.registerDiagram(i, r);
      }
      let {
        db: a,
        parser: c,
        renderer: d,
        init: u
      } = mermaidConfigUtils.getDiagram(s);
      if (c.parser) {
        c.parser.yy = a;
      }
      if ((r = a.clear) !== null && r !== undefined) {
        r.call(a);
      }
      if (u != null) {
        u(l);
      }
      if (o.title) {
        if ((n = a.setDiagramTitle) !== null && n !== undefined) {
          n.call(a, o.title);
        }
      }
      await c.parse(i);
      return new e(s, i, a, c, d);
    }
    async render(e, i) {
      await this.renderer.draw(this.text, e, i, this);
    }
    getParser() {
      return this.parser;
    }
    getType() {
      return this.type;
    }
    constructor(e, i, r, n, o) {
      this.type = e;
      this.text = i;
      this.db = r;
      this.parser = n;
      this.renderer = o;
    }
  };
  mermaidConfigUtils.setName(a, "Diagram");
  var th = a;
  var tp = [];
  var tf = mermaidConfigUtils.setName(() => {
    tp.forEach(e => {
      e();
    });
    tp = [];
  }, "attachFunctions");
  var tg = mermaidConfigUtils.setName(e => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
  function tm(e) {
    let r = e.match(mermaidConfigUtils.directiveCommentRegex);
    if (!r) {
      return {
        text: e,
        metadata: {}
      };
    }
    let n = yamlSchemaUtils.load(r[1], {
      schema: yamlSchemaUtils.Schema
    }) ?? {};
    n = typeof n != "object" || Array.isArray(n) ? {} : n;
    let o = {};
    if (n.displayMode) {
      o.displayMode = n.displayMode.toString();
    }
    if (n.title) {
      o.title = n.title.toString();
    }
    if (n.config) {
      o.config = n.config;
    }
    return {
      text: e.slice(r[0].length),
      metadata: o
    };
  }
  mermaidConfigUtils.setName(tm, "extractFrontMatter");
  var tv = mermaidConfigUtils.setName(e => e.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (e, i, r) => "<" + i + r.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText");
  var tb = mermaidConfigUtils.setName(e => {
    let {
      text: i,
      metadata: r
    } = tm(e);
    let {
      displayMode: n,
      title: o,
      config: l = {}
    } = r;
    if (n) {
      l.gantt ||= {};
      l.gantt.displayMode = n;
    }
    return {
      title: o,
      config: l,
      text: i
    };
  }, "processFrontmatter");
  var ty = mermaidConfigUtils.setName(e => {
    let r = mermaidTextLayoutUtils.textLayoutUtils.detectInit(e) ?? {};
    let n = mermaidTextLayoutUtils.textLayoutUtils.detectDirective(e, "wrap");
    if (Array.isArray(n)) {
      r.wrap = n.some(e => {
        let {
          type: i
        } = e;
        return i === "wrap";
      });
    } else if ((n == null ? undefined : n.type) === "wrap") {
      r.wrap = true;
    }
    return {
      text: mermaidTextLayoutUtils.removeDirectives(e),
      directive: r
    };
  }, "processDirectives");
  function tw(e) {
    let i = tb(tv(e));
    let r = ty(i.text);
    let n = mermaidTextLayoutUtils.cleanAndMerge(i.config, r.directive);
    return {
      code: e = tg(r.text),
      title: i.title,
      config: n
    };
  }
  function tk(e) {
    return btoa(Array.from(new TextEncoder().encode(e), e => String.fromCodePoint(e)).join(""));
  }
  mermaidConfigUtils.setName(tw, "preprocessDiagram");
  mermaidConfigUtils.setName(tk, "toBase64");
  var tS = ["foreignobject"];
  var tM = ["dominant-baseline"];
  function tx(e) {
    let r = tw(e);
    mermaidConfigUtils.resetConfig();
    mermaidConfigUtils.addDirective(r.config ?? {});
    return r;
  }
  async function tE(e, i) {
    ta();
    try {
      let {
        code: i,
        config: r
      } = tx(e);
      return {
        diagramType: (await tj(i)).type,
        config: r
      };
    } catch (e) {
      if (i == null ? undefined : i.suppressErrors) {
        return false;
      }
      throw e;
    }
  }
  mermaidConfigUtils.setName(tx, "processAndSetConfigs");
  mermaidConfigUtils.setName(tE, "parse");
  var tC = mermaidConfigUtils.setName(function (e, i, r = []) {
    return `
.${e} ${i} { ${r.join(" !important; ")} !important; }`;
  }, "cssImportantStyles");
  var t_ = mermaidConfigUtils.setName(function (e, i = new Map()) {
    let r = "";
    if (e.themeCSS !== undefined) {
      r += `
${e.themeCSS}`;
    }
    if (e.fontFamily !== undefined) {
      r += `
:root { --mermaid-font-family: ${e.fontFamily}}`;
    }
    if (e.altFontFamily !== undefined) {
      r += `
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`;
    }
    if (i instanceof Map) {
      let l = e.htmlLabels ?? e.flowchart?.htmlLabels ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
      i.forEach(e => {
        if (!isEmptyUtil.isEmpty(e.styles)) {
          l.forEach(i => {
            r += tC(e.id, i, e.styles);
          });
        }
        if (!isEmptyUtil.isEmpty(e.textStyles)) {
          r += tC(e.id, "tspan", ((e == null ? undefined : e.textStyles) || []).map(e => e.replace("color", "fill")));
        }
      });
    }
    return r;
  }, "createCssStyles");
  var tT = mermaidConfigUtils.setName((e, i, r, n) => {
    let o = t_(e, r);
    let l = mermaidConfigUtils.getStyles(i, o, e.themeVariables);
    return cssSyntaxStringifier.transformNodes(cssParser.parseCss(`${n}{${l}}`), cssSyntaxStringifier.buildCssString);
  }, "createUserStyles");
  var tI = mermaidConfigUtils.setName(function (e = "", i, r) {
    let n = e;
    if (!r && !i) {
      n = n.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#");
    }
    return n = (n = mermaidTextLayoutUtils.decodeEntities(n)).replace(/<br>/g, "<br/>");
  }, "cleanUpSvgCode");
  var tR = mermaidConfigUtils.setName(function () {
    var i;
    let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let n = arguments.length > 1 ? arguments[1] : undefined;
    let o = (n == null ? undefined : (i = n.viewBox) === null || i === undefined ? undefined : i.baseVal?.height) ? n.viewBox.baseVal.height + "px" : "100%";
    let l = tk(`<body style="margin:0">${r}</body>`);
    return `<iframe style="width:100%;height:${o};border:0;margin:0;" src="data:text/html;charset=UTF-8;base64,${l}" sandbox="allow-top-navigation-by-user-activation allow-popups">
  The "iframe" tag is not supported by your browser.
</iframe>`;
  }, "putIntoIFrame");
  var tL = mermaidConfigUtils.setName((e, i, r, n, o) => {
    let l = e.append("div");
    l.attr("id", r);
    if (n) {
      l.attr("style", n);
    }
    let s = l.append("svg").attr("id", i).attr("width", "100%").attr("xmlns", "http://www.w3.org/2000/svg");
    if (o) {
      s.attr("xmlns:xlink", o);
    }
    s.append("g");
    return e;
  }, "appendDivSvgG");
  function tN(e, i) {
    return e.append("iframe").attr("id", i).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
  }
  mermaidConfigUtils.setName(tN, "sandboxedIframe");
  var tA = mermaidConfigUtils.setName((e, i, r, n) => {
    var o;
    var l;
    var s;
    if ((o = e.getElementById(i)) !== null && o !== undefined) {
      o.remove();
    }
    if ((l = e.getElementById(r)) !== null && l !== undefined) {
      l.remove();
    }
    if ((s = e.getElementById(n)) !== null && s !== undefined) {
      s.remove();
    }
  }, "removeExistingElements");
  var tP = mermaidConfigUtils.setName(async function (e, i, r) {
    var n;
    var o;
    var l;
    var s;
    var a;
    var c;
    let u;
    let h;
    ta();
    let p = tx(i);
    i = p.code;
    let f = mermaidConfigUtils.getConfig();
    mermaidConfigUtils.logger.debug(f);
    if (i.length > ((f == null ? undefined : f.maxTextSize) ?? 50000)) {
      i = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
    }
    let m = "#" + e;
    let b = "i" + e;
    let w = "#" + b;
    let k = "d" + e;
    let M = "#" + k;
    let x = mermaidConfigUtils.setName(() => {
      let e = C ? w : M;
      let i = axisAndZoomUtilities.select(e).node();
      if (i && "remove" in i) {
        i.remove();
      }
    }, "removeTempElements");
    let E = axisAndZoomUtilities.select("body");
    let C = f.securityLevel === "sandbox";
    let _ = f.securityLevel === "loose";
    let T = f.fontFamily;
    if (r !== undefined) {
      if (r) {
        r.innerHTML = "";
      }
      if (C) {
        let e = tN(axisAndZoomUtilities.select(r), b);
        (E = axisAndZoomUtilities.select(e.nodes()[0].contentDocument.body)).node().style.margin = 0;
      } else {
        E = axisAndZoomUtilities.select(r);
      }
      tL(E, e, k, `font-family: ${T}`, "http://www.w3.org/1999/xlink");
    } else {
      tA(document, e, k, b);
      if (C) {
        let e = tN(axisAndZoomUtilities.select("body"), b);
        (E = axisAndZoomUtilities.select(e.nodes()[0].contentDocument.body)).node().style.margin = 0;
      } else {
        E = axisAndZoomUtilities.select("body");
      }
      tL(E, e, k);
    }
    try {
      u = await th.fromText(i, {
        title: p.title
      });
    } catch (e) {
      if (f.suppressErrorRendering) {
        x();
        throw e;
      }
      u = await th.fromText("error");
      h = e;
    }
    let I = E.select(M).node();
    let R = u.type;
    let L = I.firstChild;
    let N = L.firstChild;
    let A = tT(f, R, (n = (o = u.renderer).getClasses) === null || n === undefined ? undefined : n.call(o, i, u), m);
    let P = document.createElement("style");
    P.innerHTML = A;
    L.insertBefore(P, N);
    try {
      await u.renderer.draw(i, e, mermaidPackageJson_1.packageJson.version, u);
    } catch (r) {
      if (f.suppressErrorRendering) {
        x();
      } else {
        eI.draw(i, e, mermaidPackageJson_1.packageJson.version);
      }
      throw r;
    }
    let D = E.select(`${M} svg`);
    tO(R, D, (l = (s = u.db).getAccTitle) === null || l === undefined ? undefined : l.call(s), (a = (c = u.db).getAccDescription) === null || a === undefined ? undefined : a.call(c));
    E.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", "http://www.w3.org/1999/xhtml");
    let j = E.select(M).node().innerHTML;
    mermaidConfigUtils.logger.debug("config.arrowMarkerAbsolute", f.arrowMarkerAbsolute);
    j = tI(j, C, mermaidConfigUtils.evaluate(f.arrowMarkerAbsolute));
    if (C) {
      j = tR(j, E.select(M + " svg").node());
    } else if (!_) {
      j = dompurifyCore.DOMPurify.sanitize(j, {
        ADD_TAGS: tS,
        ADD_ATTR: tM,
        HTML_INTEGRATION_POINTS: {
          foreignobject: true
        }
      });
    }
    tf();
    if (h) {
      throw h;
    }
    x();
    return {
      diagramType: R,
      svg: j,
      bindFunctions: u.db.bindFunctions
    };
  }, "render");
  function tD() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let r = mermaidConfigUtils.assignWithDepth({}, i);
    if ((r == null ? undefined : r.fontFamily) && !r.themeVariables?.fontFamily) {
      r.themeVariables ||= {};
      r.themeVariables.fontFamily = r.fontFamily;
    }
    mermaidConfigUtils.saveInitConfig(r);
    if ((r == null ? undefined : r.theme) && r.theme in mermaidConfigUtils.themeRegistry) {
      r.themeVariables = mermaidConfigUtils.themeRegistry[r.theme].getThemeVariables(r.themeVariables);
    } else if (r) {
      r.themeVariables = mermaidConfigUtils.themeRegistry.default.getThemeVariables(r.themeVariables);
    }
    let n = typeof r == "object" ? mermaidConfigUtils.setSiteConfig(r) : mermaidConfigUtils.getSiteConfig();
    mermaidConfigUtils.setLogLevel(n.logLevel);
    ta();
  }
  mermaidConfigUtils.setName(tD, "initialize");
  var tj = mermaidConfigUtils.setName(function (e, i = {}) {
    let {
      code: r
    } = tw(e);
    return th.fromText(r, i);
  }, "getDiagramFromText");
  function tO(e, i, r, n) {
    td(i, e);
    tu(i, r, n, i.attr("id"));
  }
  mermaidConfigUtils.setName(tO, "addA11yInfo");
  var tB = Object.freeze({
    render: tP,
    parse: tE,
    getDiagramFromText: tj,
    initialize: tD,
    getConfig: mermaidConfigUtils.getConfig,
    setConfig: mermaidConfigUtils.setConfigMain,
    getSiteConfig: mermaidConfigUtils.getSiteConfig,
    updateSiteConfig: mermaidConfigUtils.updateSiteConfig,
    reset: mermaidConfigUtils.setName(() => {
      mermaidConfigUtils.resetConfig();
    }, "reset"),
    globalReset: mermaidConfigUtils.setName(() => {
      mermaidConfigUtils.resetConfig(mermaidConfigUtils.defaultConfig);
    }, "globalReset"),
    defaultConfig: mermaidConfigUtils.defaultConfig
  });
  mermaidConfigUtils.setLogLevel(mermaidConfigUtils.getConfig().logLevel);
  mermaidConfigUtils.resetConfig(mermaidConfigUtils.getConfig());
  var tF = mermaidConfigUtils.setName((e, i, r) => {
    mermaidConfigUtils.logger.warn(e);
    if (mermaidTextLayoutUtils.isDetailedError(e)) {
      if (r) {
        r(e.str, e.hash);
      }
      i.push({
        ...e,
        message: e.str,
        error: e
      });
    } else {
      if (r) {
        r(e);
      }
      if (e instanceof Error) {
        i.push({
          str: e.message,
          message: e.message,
          hash: e.name,
          error: e
        });
      }
    }
  }, "handleError");
  var tZ = mermaidConfigUtils.setName(async function (e = {
    querySelector: ".mermaid"
  }) {
    try {
      await tz(e);
    } catch (i) {
      if (mermaidTextLayoutUtils.isDetailedError(i)) {
        mermaidConfigUtils.logger.error(i.str);
      }
      if (tQ.parseError) {
        tQ.parseError(i);
      }
      if (!e.suppressErrors) {
        mermaidConfigUtils.logger.error("Use the suppressErrors option to suppress these errors");
        throw i;
      }
    }
  }, "run");
  var tz = mermaidConfigUtils.setName(async function () {
    let e;
    let i;
    let {
      postRenderCallback: r,
      querySelector: n,
      nodes: o
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      querySelector: ".mermaid"
    };
    let l = tB.getConfig();
    mermaidConfigUtils.logger.debug(`${r ? "" : "No "}Callback function found`);
    if (o) {
      e = o;
    } else if (n) {
      e = document.querySelectorAll(n);
    } else {
      throw Error("Nodes and querySelector are both undefined");
    }
    mermaidConfigUtils.logger.debug(`Found ${e.length} diagrams`);
    if ((l == null ? undefined : l.startOnLoad) !== undefined) {
      mermaidConfigUtils.logger.debug("Start On Load: " + (l == null ? undefined : l.startOnLoad));
      tB.updateSiteConfig({
        startOnLoad: l == null ? undefined : l.startOnLoad
      });
    }
    let s = new mermaidTextLayoutUtils.textLayoutUtils.InitIDGenerator(l.deterministicIds, l.deterministicIDSeed);
    let a = [];
    for (let n of Array.from(e)) {
      mermaidConfigUtils.logger.info("Rendering diagram: " + n.id);
      if (n.getAttribute("data-processed")) {
        continue;
      }
      n.setAttribute("data-processed", "true");
      let e = `mermaid-${s.next()}`;
      i = n.innerHTML;
      i = dedentTemplateString.dedent(mermaidTextLayoutUtils.textLayoutUtils.entityDecode(i)).trim().replace(/<br\s*\/?>/gi, "<br/>");
      let o = mermaidTextLayoutUtils.textLayoutUtils.detectInit(i);
      if (o) {
        mermaidConfigUtils.logger.debug("Detected early reinit: ", o);
      }
      try {
        let {
          svg: o,
          bindFunctions: l
        } = await tJ(e, i, n);
        n.innerHTML = o;
        if (r) {
          await r(e);
        }
        if (l) {
          l(n);
        }
      } catch (e) {
        tF(e, a, tQ.parseError);
      }
    }
    if (a.length > 0) {
      throw a[0];
    }
  }, "runThrowsErrors");
  var tH = mermaidConfigUtils.setName(function (e) {
    tB.initialize(e);
  }, "initialize");
  var t$ = mermaidConfigUtils.setName(async function (e, i, r) {
    mermaidConfigUtils.logger.warn("mermaid.init is deprecated. Please use run instead.");
    if (e) {
      tH(e);
    }
    let n = {
      postRenderCallback: r,
      querySelector: ".mermaid"
    };
    if (typeof i == "string") {
      n.querySelector = i;
    } else if (i) {
      if (i instanceof HTMLElement) {
        n.nodes = [i];
      } else {
        n.nodes = i;
      }
    }
    await tZ(n);
  }, "init");
  var tW = mermaidConfigUtils.setName(async function (e, {
    lazyLoad: i = true
  } = {}) {
    ta();
    mermaidConfigUtils.registerLazyDiagrams(...e);
    if (i === false) {
      await tc();
    }
  }, "registerExternalDiagrams");
  var tV = mermaidConfigUtils.setName(function () {
    if (tQ.startOnLoad) {
      let {
        startOnLoad: e
      } = tB.getConfig();
      if (e) {
        tQ.run().catch(e => mermaidConfigUtils.logger.error("Mermaid failed to initialize", e));
      }
    }
  }, "contentLoaded");
  if (typeof document != "undefined") {
    window.addEventListener("load", tV, false);
  }
  var tU = mermaidConfigUtils.setName(function (e) {
    tQ.parseError = e;
  }, "setParseErrorHandler");
  var tX = [];
  var tY = false;
  var tq = mermaidConfigUtils.setName(async () => {
    if (!tY) {
      for (tY = true; tX.length > 0;) {
        let e = tX.shift();
        if (e) {
          try {
            await e();
          } catch (e) {
            mermaidConfigUtils.logger.error("Error executing queue", e);
          }
        }
      }
      tY = false;
    }
  }, "executeQueue");
  var tG = mermaidConfigUtils.setName(async (e, i) => new Promise((r, n) => {
    let o = mermaidConfigUtils.setName(() => new Promise((o, l) => {
      tB.parse(e, i).then(e => {
        o(e);
        r(e);
      }, e => {
        var i;
        mermaidConfigUtils.logger.error("Error parsing", e);
        if ((i = tQ.parseError) !== null && i !== undefined) {
          i.call(tQ, e);
        }
        l(e);
        n(e);
      });
    }), "performCall");
    tX.push(o);
    tq().catch(n);
  }), "parse");
  var tJ = mermaidConfigUtils.setName((e, i, r) => new Promise((n, o) => {
    let l = mermaidConfigUtils.setName(() => new Promise((l, s) => {
      tB.render(e, i, r).then(e => {
        l(e);
        n(e);
      }, e => {
        var i;
        mermaidConfigUtils.logger.error("Error parsing", e);
        if ((i = tQ.parseError) !== null && i !== undefined) {
          i.call(tQ, e);
        }
        s(e);
        o(e);
      });
    }), "performCall");
    tX.push(l);
    tq().catch(o);
  }), "render");
  var tK = mermaidConfigUtils.setName(() => Object.keys(mermaidConfigUtils.diagramDetectors).map(e => ({
    id: e
  })), "getRegisteredDiagramsMetadata");
  var tQ = {
    startOnLoad: true,
    mermaidAPI: tB,
    parse: tG,
    render: tJ,
    init: t$,
    run: tZ,
    registerExternalDiagrams: tW,
    registerLayoutLoaders: mermaidLayoutRegistry.registerLayoutLoaders,
    initialize: tH,
    parseError: undefined,
    contentLoaded: tV,
    setParseErrorHandler: tU,
    detectType: mermaidConfigUtils.detectType,
    registerIconPacks: mermaidTextIconUtils.registerIconPacks,
    getRegisteredDiagramsMetadata: tK
  };
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var designTokens = require("design-tokens") /*id: 637887*/;
  var uiThemeDesignTokens = require("ui-theme-design-tokens") /*id: 332627*/;
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docMindmapConstants = require("doc-mindmap-constants") /*id: 316876*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  let t7 = `flowchart LR
  A([\u{6CE8}\u{518C}/\u{767B}\u{5F55}])-->B[\u{8F93}\u{5165}\u{624B}\u{673A}\u{53F7}]
  B-->C{\u{662F}\u{5426}\u{5DF2}\u{6CE8}\u{518C}?}
  C--\u{662F}-->D[\u{8F93}\u{5165}\u{5BC6}\u{7801}]
  C--\u{5426}-->E[\u{8F93}\u{5165}\u{9A8C}\u{8BC1}\u{7801}]
  D-->F([\u{6CE8}\u{518C}/\u{767B}\u{5F55}\u{6210}\u{529F}])
  E-->F`;
  let t8 = `flowchart LR
A([Register/Login])-->B[Enter phone number]
B-->C{Registered?}
C--Yes-->D[Enter password]
C--No-->E[Enter validate code]
D-->F([Register/Login success])
E-->F`;
  let ie = `classDiagram
  Animal <|-- Duck
  Animal <|-- Fish
  Animal <|-- Elephant
  Animal : +int age
  Animal : +String gender
  Animal: +isMammal()
  Animal: +mate()
  class Duck {
      +String beakColor
      +swim()
      +quack()
  }
  class Fish {
      -int sizeInFeet
      -canEat()
  }
  class Elephant {
      +bool is_wild
      +run()
  }`;
  let it = `sequenceDiagram
  John->>Alice: How are you?
  activate Alice
  Alice-->>John: Great!
  deactivate Alice`;
  let ii = `erDiagram
CUSTOMER ||--o{ ORDER : places
ORDER ||--|{ LINE-ITEM : contains
CUSTOMER }|..|{ DELIVERY-ADDRESS : uses`;
  let ir = `gantt
  title \u{4E00}\u{4E2A}\u{7518}\u{7279}\u{56FE}\u{4F8B}\u{5B50}
  dateFormat  YYYY-MM-DD
  section \u{533A}\u{57DF}A
  \u{4E00}\u{4E2A}\u{4EFB}\u{52A1}            :a1, 2022-01-01, 2d
  \u{53E6}\u{4E00}\u{4E2A}\u{4EFB}\u{52A1}          :after a1  , 1d
  section \u{533A}\u{57DF}B
  \u{4EFB}\u{52A1}C              :2022-01-04, 3d
  \u{4EFB}\u{52A1}D              : 2d
`;
  let io = `  gantt
  title A gantt example
  dateFormat  YYYY-MM-DD
  section Zone A
  A task            :a1, 2022-01-01, 2d
  Another task          :after a1  , 1d
  section Zone B
  Task C              :2022-01-04, 3d
  Task D              : 2d
`;
  let il = `pie title \u{884C}\u{4E1A}\u{5206}\u{5E03}
  "\u{5236}\u{9020}\u{4E1A}" : 336
  "\u{670D}\u{52A1}\u{4E1A}" : 237
  "\u{5176}\u{4ED6}" : 151
`;
  let is = `pie title Industry Distribution
  "Manufacturing" : 336
  "Service" : 237
  "Others" : 151
`;
  let ia = `markmap

# \u{5065}\u{5EB7}\u{751F}\u{6D3B}\u{65B9}\u{5F0F}
- \u{996E}\u{98DF}\u{65B9}\u{9762}
    - \u{591A}\u{5403}\u{852C}\u{83DC}\u{6C34}\u{679C}
    - \u{63A7}\u{5236}\u{7CD6}\u{5206}\u{6444}\u{5165}
    - \u{4FDD}\u{8BC1}\u{86CB}\u{767D}\u{8D28}\u{6444}\u{5165}
    - \u{589E}\u{52A0}\u{81B3}\u{98DF}\u{7EA4}\u{7EF4}
- \u{8FD0}\u{52A8}\u{65B9}\u{9762}
    - \u{6709}\u{6C27}\u{8FD0}\u{52A8}
    - \u{529B}\u{91CF}\u{8BAD}\u{7EC3}
    - \u{65E5}\u{5E38}\u{6D3B}\u{52A8}
- \u{7761}\u{7720}\u{65B9}\u{9762}
    - \u{4FDD}\u{8BC1}\u{5145}\u{8DB3}\u{7761}\u{7720}
    - \u{89C4}\u{5F8B}\u{4F5C}\u{606F}\u{65F6}\u{95F4}
    - \u{8425}\u{9020}\u{8212}\u{9002}\u{7761}\u{7720}\u{73AF}\u{5883}
- \u{5FC3}\u{7406}\u{5065}\u{5EB7}\u{65B9}\u{9762}
    - \u{7F13}\u{89E3}\u{538B}\u{529B}
    - \u{4FDD}\u{6301}\u{793E}\u{4EA4}
    - \u{57F9}\u{517B}\u{5174}\u{8DA3}\u{7231}\u{597D}
`;
  let ic = `markmap

# Healthy Life Style
- Food
    - Eat vegetables and fruits
    - Control sugar intake
    - Ensure protein intake
    - Include dietary fiber
- Exercise
    - Aerobic exercise
    - Strength training
    - Daily activities
- Sleep
    - Ensure sufficient sleep
    - Maintain regular sleep schedule
    - Create comfortable sleep environment
- Mental Health
    - Manage stress
    - Maintain social connections
    - Cultivate interests and hobbies
`;
  var id = () => {
    let e = platformDocUtils.HiA.getLanguage() === "zh";
    return [{
      id: "flowchart",
      name: t("LarkCCM_DocVerse_Mmd_Flowchart_Menu"),
      tpl: e ? t7 : t8
    }, {
      id: "sequenceDiagram",
      name: t("LarkCCM_DocVerse_Mmd_SequenceDiagram_Menu"),
      tpl: it
    }, {
      id: "classDiagram",
      name: t("LarkCCM_DocVerse_Mmd_ClassDiagramMenu"),
      tpl: ie
    }, {
      id: "erDiagram",
      name: t("LarkCCM_DocVerse_Mmd_ERDiagramMenu"),
      tpl: ii
    }, {
      id: "gantt",
      name: t("LarkCCM_DocVerse_Mmd_GanttDiagram_Menu"),
      tpl: e ? ir : io
    }, {
      id: "pie",
      name: t("LarkCCM_DocVerse_Mmd_PieChart_Menu"),
      tpl: e ? il : is
    }, {
      id: "markmap",
      name: t("LarkCCM_DocVerse_Mmd_MindMap_Menu"),
      tpl: e ? ia : ic
    }];
  };
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var ip = classnamesUtils;
  let ig = function (e) {
    let i = reactCoreLibraryReexport.useRef(e);
    i.current = e;
    return i;
  };
  let im = e => function () {
    var i = arguments.length;
    var r = Array(i);
    var n = 0;
    for (; n < i; n++) {
      r[n] = arguments[n];
    }
    return e.current(...r);
  };
  let iv = e => {
    let i = ig(e);
    return reactCoreLibraryReexport.useMemo(() => im(i), []);
  };
  var entityTypes_1 = require("entity-types_1") /*id: 140922*/;
  var appTypeConstants = require("app-type-constants") /*id: 214968*/;
  var imageViewerManagerProvider = require("image-viewer-manager-provider") /*id: 347257*/;
  let ik = e => {
    let i = document.createElement("div");
    i.innerHTML = e;
    let r = new XMLSerializer().serializeToString(i.childNodes[0]);
    return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(r)))}`;
  };
  let iS = e => {
    let i = document.createElement("div");
    i.innerHTML = e;
    let r = i.querySelector("div > svg");
    if (!r) {
      return 1200;
    }
    let n = r.getAttribute("viewBox");
    if (!n) {
      return 1200;
    }
    let [,, o, l] = n.split(" ");
    return Number(o);
  };
  let iM = async (e, i) => {
    try {
      let {
        svg: r
      } = await tQ.render(i, e);
      return ik(r);
    } catch (e) {
      return null;
    }
  };
  let ix = (e, i) => {
    let r = document.createElement("div");
    r.innerHTML = e;
    let n = r.querySelector("div > svg");
    if (!n) {
      return;
    }
    let o = n.getAttribute("viewBox");
    if (!o) {
      return;
    }
    let [,, l, s] = o.split(" ");
    let a = Number(l);
    let d = Number(s);
    let u = ik(e);
    let h = document.createElement("canvas");
    let p = h.getContext("2d");
    if (!p) {
      return;
    }
    h.width = a * 2;
    h.height = d * 2;
    let f = new Image(a * 2, d * 2);
    f.onload = () => {
      p.drawImage(f, 0, 0, h.width, h.height);
      let e = h.toDataURL("image/jpeg");
      docxEditorCore.onServiceReady(i.editorAPI, imageViewerManagerProvider.imageViewerManager, i => {
        i.openImageViewer({
          type: appTypeConstants.getAppTypes.THIRD_PARTY,
          payload: {
            imageList: [{
              src: async () => (await e) || u,
              width: a,
              height: d,
              downloadImageUrl: e,
              filename: "Mermaid.jpg",
              type: entityTypes_1.EntityTypes.ThirdParty,
              recordId: ""
            }],
            index: 0
          }
        });
      });
    };
    f.onerror = () => {};
    f.src = u;
  };
  var reactMenuComponent = require("react-menu-component") /*id: 821060*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udTypographyBody0Style = require("ud-typography-body-0-style") /*id: 307052*/;
  var udTypographyTitle4 = require("ud-typography-title-4") /*id: 312297*/;
  var docxLayoutDisplayConfig = require("docx-layout-display-config") /*id: 17845*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var docxToolboxHashConstant = require("docx-toolbox-hash-constant") /*id: 80440*/;
  var constantIdentifier_2 = require("constant-identifier_2") /*id: 529828*/;
  var moduleExportIdentifier_1 = require("module-export-identifier_1") /*id: 298928*/;
  var constantIdentifierModule = require("constant-identifier-module") /*id: 712724*/;
  var webpackChunkIdentifier = require("webpack-chunk-identifier") /*id: 122172*/;
  var moduleExportIdentifier = require("module-export-identifier") /*id: 256534*/;
  var flowDocShortcutId = require("flow-doc-shortcut-id") /*id: 764182*/;
  var cssClassName_1 = require("css-class-name_1") /*id: 764291*/;
  var flowDocShortcutId_1 = require("flow-doc-shortcut-id_1") /*id: 778900*/;
  var docPreviewComponentId = require("doc-preview-component-id") /*id: 999823*/;
  var uniqueIdConstant_1 = require("unique-id-constant_1") /*id: 676402*/;
  var docxToolboxModule = require("docx-toolbox-module") /*id: 228920*/;
  var previewComponentConstant = require("preview-component-constant") /*id: 642458*/;
  var previewComponentHash = require("preview-component-hash") /*id: 390629*/;
  var iX = "u15xxrlo";
  var exportedIdentifierUack55o = require("exported-identifier-uack55o") /*id: 620625*/;
  var flowDocPreviewComponent = require("flow-doc-preview-component") /*id: 511442*/;
  var iG = "u3q11tn";
  var flowDocPreviewComponentChunk = require("flow-doc-preview-component-chunk") /*id: 83816*/;
  var iK = "u112k1a0";
  var constantIdentifier = require("constant-identifier") /*id: 442827*/;
  var i0 = {
    props: {
      borderTopWidth: "u1w7h210",
      borderTopStyle: "u1ptk4iw",
      borderTopColor: "ua71vky"
    }
  };
  var i1 = {
    props: {
      borderTopWidth: iX,
      whiteSpace: exportedIdentifierUack55o.exportedIdentifier,
      textAlign: flowDocPreviewComponent.previewToken,
      "::before": {
        position: "u1297fsr",
        top: iG,
        width: "u1nit24q",
        borderTopWidth: "u6igr4h",
        borderTopStyle: "u1wpgwoz",
        borderTopColor: "u1rcpuug",
        borderTopColor: "uy5eah",
        transform: "u37xc01",
        boxSizing: flowDocPreviewComponentChunk.moduleIdentifier,
        content: "u1nxbuxv"
      },
      "::after": {
        position: "u1w0xtbn",
        top: iK,
        width: "u1qodldx",
        borderTopWidth: "uamjuou",
        borderTopStyle: "umpvupu",
        borderTopColor: "u1wqody0",
        borderTopColor: "u1k2ilhr",
        transform: "uevilsf",
        boxSizing: "u5ucc2x",
        content: constantIdentifier.uniqueId
      }
    }
  };
  var i2 = {
    props: {
      "::before": {
        top: iG,
        width: "u1x64zb4"
      },
      "::after": {
        top: iK,
        width: "u1re7fmy"
      }
    }
  };
  var i4 = {
    props: {
      "::before": {
        top: iG,
        width: "u1knp0kc"
      },
      "::after": {
        top: iK,
        width: "u1u1lwha"
      }
    }
  };
  var i3 = {
    props: {
      display: uniqueIdConstant_1.constantId,
      clear: "ulz4sl8",
      width: docxToolboxModule.moduleKey,
      minWidth: "u10r8f4q",
      marginTop: "u7mkx23",
      marginRight: previewComponentConstant.componentId,
      marginBottom: "uzx33jt",
      marginLeft: previewComponentHash.componentHash
    }
  };
  var i5 = {
    props: {
      position: constantIdentifierModule.constantIdentifier,
      top: "u10ifo7m",
      display: webpackChunkIdentifier.chunkIdentifier,
      height: "uaql1jf",
      marginTop: moduleExportIdentifier.moduleId,
      marginRight: flowDocShortcutId.flowShortcutId,
      marginBottom: cssClassName_1.className,
      marginLeft: flowDocShortcutId_1.flowDocShortcutId,
      verticalAlign: docPreviewComponentId.docPreviewId,
      borderTopWidth: iX,
      borderLeftWidth: "umnb5c9",
      borderLeftStyle: "u1gnmxmo",
      borderLeftColor: "u1h65u2y"
    }
  };
  var i6 = {
    props: {
      borderTopStyle: "u1t7zgic"
    }
  };
  var i9 = {
    props: {
      "::before": {
        borderTopStyle: "upxr6h1"
      },
      "::after": {
        borderTopStyle: "uot9yd9"
      }
    }
  };
  var i7 = {
    props: {
      display: webpackChunkIdentifier.chunkIdentifier,
      paddingTop: docxToolboxHashConstant.hashConstant,
      paddingRight: "u13hymzj",
      paddingBottom: constantIdentifier_2.constantIdentifier,
      paddingLeft: "u1jew9w3",
      boxSizing: moduleExportIdentifier_1.identifier
    }
  };
  function i8(e) {
    var i;
    var r = e.text;
    var n = e.children;
    var o = e.style;
    var l = e.className;
    var s = e.type;
    var a = s === undefined ? "horizontal" : s;
    var c = e.plain;
    var u = c !== undefined && c;
    var h = e.dashed;
    var p = h !== undefined && h;
    var f = e.orientation;
    var g = f === undefined ? "center" : f;
    var m = reactContextUtilsHooks.useComponentClass("divider");
    var v = !!n || !!r;
    var b = !v || u ? udTypographyBody0Style.udTypographyBody0 : udTypographyTitle4.udTypographyTitle4;
    var y = conditionalClassnames.default(m(), m(`--${a}`), (i = {}, objectPropertySetter.setObjectProperty(i, m("--with-text"), v), objectPropertySetter.setObjectProperty(i, m(`--with-text-${g}`), v), objectPropertySetter.setObjectProperty(i, m("--dashed"), p), objectPropertySetter.setObjectProperty(i, m("--plain"), u), i), composeClassNamesUtil.composeClassNames(i0, docxLayoutDisplayConfig.layoutDisplayConfig, b, a === "horizontal" ? i3 : a === "vertical" ? i5 : undefined, v && i1, p && i6, g === "left" && i2, g === "right" && i4, v && p && i9), l);
    return reactCoreLibraryReexport.createElement("div", {
      style: o,
      className: y
    }, v ? reactCoreLibraryReexport.createElement("span", {
      className: conditionalClassnames.default(m("__title"), composeClassNamesUtil.composeClassNames(i7))
    }, r ?? n) : null);
  }
  var dropdownComponent_1 = require("dropdown-component_1") /*id: 534681*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var iconButtonWrapper = require("icon-button-wrapper") /*id: 359015*/;
  var listCheckBoldIcon = require("list-check-bold-icon") /*id: 565964*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var ra = ["prefixId"];
  function rc(e) {
    e.prefixId;
    var i = objectOmitHelper_1.omitWithSymbols(e, ra);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, i), reactCoreLibraryReexport.createElement("path", {
      d: "M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm2 0v4h16V5H4ZM2 15a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4Zm2 0v4h16v-4H4Z",
      fill: "currentColor"
    }));
  }
  var rd = reactCoreLibraryReexport.forwardRef(function (e, i) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: rc
    }, e, {
      ref: i,
      svgProps: {
        "data-icon": "ViewTaskOutlined"
      }
    }));
  });
  var expandOutlinedIcon = require("expand-outlined-icon") /*id: 784996*/;
  var styleSetOutlinedIcon = require("style-set-outlined-icon") /*id: 236586*/;
  let rp = "ontouchend" in document ? "click" : "hover";
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let rm = () => [{
    id: "default",
    name: t("LarkCCM_DocVerse_Default_Menu")
  }, {
    id: "neutral",
    name: t("LarkCCM_DocVerse_Neutral_Menu")
  }, {
    id: "forest",
    name: t("LarkCCM_DocVerse_Forest_Menu")
  }, {
    id: "base",
    name: t("LarkCCM_DocVerse_Base_Menu")
  }];
  var rv = e => {
    let {
      style: i,
      hasText: r,
      theme: n = rm()[0],
      onThemeChange: o
    } = e;
    let l = reactCoreLibraryReexport.useRef(null);
    let s = reactCoreLibraryReexport.useCallback(e => {
      if (o != null) {
        o(e.key);
      }
      docxEventCollector.wrappedCollector("ccm_doc_mini_app_mermaid_click", {
        click: "theme",
        type: e.key
      });
    }, [o]);
    let a = reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu, {
      onClick: s,
      children: rm().map(e => e.id === n ? reactJsxRuntimeCoreReexport.jsxs(reactMenuComponent.Menu.Item, {
        className: "mermaid-theme-item-checked",
        children: [e.name, reactJsxRuntimeCoreReexport.jsx(listCheckBoldIcon.ListCheckBoldIcon, {
          style: {
            marginLeft: 10
          }
        })]
      }, e.id) : reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu.Item, {
        children: e.name
      }, e.id))
    });
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(dropdownComponent_1.Dropdown, {
        overlay: a,
        placement: "bottom",
        trigger: rp,
        children: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          style: i,
          className: "mermaid-theme-select-btn",
          type: "text",
          icon: reactJsxRuntimeCoreReexport.jsx(styleSetOutlinedIcon.StyleSetOutlined, {}),
          children: t("LarkCCM_DocVerse_Mmd_Theme")
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        ref: l,
        children: reactJsxRuntimeCoreReexport.jsx(dropdownComponent_1.Dropdown, {
          getPopupContainer: () => (l == null ? undefined : l.current) || document.body,
          overlay: a,
          placement: "bottom",
          trigger: rp,
          boundaryPadding: 2,
          children: reactJsxRuntimeCoreReexport.jsx(iconButtonWrapper.IconButton, {
            style: i,
            size: 14,
            icon: reactJsxRuntimeCoreReexport.jsx(styleSetOutlinedIcon.StyleSetOutlined, {})
          })
        })
      });
    }
  };
  var popoverComponent_1 = require("popover-component_1") /*id: 539955*/;
  var templateOutlinedIcon = require("template-outlined-icon") /*id: 94487*/;
  var useDiContainerHook = require("use-di-container-hook") /*id: 3542*/;
  var docUiServiceSymbols = require("doc-ui-service-symbols") /*id: 452862*/;
  let rS = e => {
    let {
      content: i,
      ...r
    } = e;
    if (i) {
      return reactJsxRuntimeCoreReexport.jsx(popoverComponent_1.Popover, {
        overlayStyle: {
          zIndex: 1050
        },
        placement: "left",
        mode: "pure",
        offset: 2,
        showArrow: false,
        content: i,
        boundaryPadding: 2,
        mouseLeaveDelay: 0,
        children: reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu.Item, {
          ...r,
          style: {
            minWidth: 80
          },
          children: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: e.children
          })
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu.Item, {
        ...r,
        style: {
          minWidth: 80
        },
        children: e.children
      });
    }
  };
  let rM = {};
  var rx = e => {
    let {
      onTemplateChange: i
    } = e;
    let [r, n] = reactCoreLibraryReexport.useState(() => window.innerWidth >= 500 && rp === "hover");
    let [o, l] = reactCoreLibraryReexport.useState([]);
    let s = reactCoreLibraryReexport.useRef(null);
    let a = () => {
      n(window.innerWidth >= 500);
    };
    let c = useDiContainerHook.useDiContainer(docUiServiceSymbols.DocMindMapComponent);
    reactCoreLibraryReexport.useEffect(() => {
      let e = debounceUtil_1_1.debounce(a, 300);
      window.addEventListener("resize", e);
      return () => {
        e.cancel();
        window.removeEventListener("resize", e);
      };
    }, []);
    let u = reactCoreLibraryReexport.useCallback(e => {
      if (i != null) {
        i(e.key);
      }
      docxEventCollector.wrappedCollector("ccm_doc_mini_app_mermaid_click", {
        click: "template",
        template_type: e.key
      });
    }, [i]);
    let h = async e => {
      if (!r) {
        return e;
      }
      let i = browserThemeManager.getThemeMode().toLocaleLowerCase();
      let n = e.id + i;
      let o = "";
      if (rM[n]) {
        o = rM[n];
      } else if (e.id === "markmap") {
        o = "";
      } else {
        let r = `%%{init: {'theme':'${i === "dark" ? "dark" : "default"}'}}%%
${e.tpl}`;
        let l = await iM(r, `${e.id}-preview`);
        if (!l) {
          return null;
        }
        o = rM[n] = l;
      }
      let l = reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mermaid-preview-wrapper",
        children: e.id === "markmap" ? reactJsxRuntimeCoreReexport.jsx(c, {
          t: () => "",
          value: e.tpl,
          handleRetry: () => null,
          extName: "",
          iconUrl: "",
          isDone: true,
          hideAction: true,
          inMessage: false,
          minHeight: 135
        }) : reactJsxRuntimeCoreReexport.jsx("div", {
          style: {
            backgroundImage: `url(${o})`
          }
        })
      });
      return {
        ...e,
        content: l
      };
    };
    let p = reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu, {
      onClick: u,
      children: o.map(e => reactJsxRuntimeCoreReexport.jsx(rS, {
        content: e.content,
        children: e.name
      }, e.id))
    });
    let f = async () => {
      l((await Promise.all(id().map(h))).filter(e => !!e));
    };
    reactCoreLibraryReexport.useEffect(() => {
      f();
    }, [r]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: s,
      children: reactJsxRuntimeCoreReexport.jsx(dropdownComponent_1.Dropdown, {
        getPopupContainer: () => (s == null ? undefined : s.current) || document.body,
        overlay: p,
        placement: "bottom",
        children: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          className: "mermaid-template-select-btn",
          type: "text",
          icon: reactJsxRuntimeCoreReexport.jsx(templateOutlinedIcon.TemplateOutlinedIcon, {}),
          children: t("LarkCCM_DocVerse_Mmd_Template_Button")
        })
      })
    });
  };
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let rC = () => [{
    id: "codeChart",
    name: t("LarkCCM_DocVerse_ShowDiagramNCode_Menu")
  }, {
    id: "code",
    name: t("LarkCCM_DocVerse_ShowCode_Menu")
  }, {
    id: "chart",
    name: t("LarkCCM_DocVerse_ShowDiagram_Menu")
  }];
  var r_ = e => {
    let {
      onTemplateChange: i,
      onThemeChange: r,
      onViewChange: n,
      showTemplate: o,
      showTheme: l = true,
      showFullscreen: s,
      theme: a,
      view: c,
      updateFullScreenInfo: u
    } = e;
    let h = reactCoreLibraryReexport.useRef(null);
    let p = browserEnvironmentDetectionUtils.browserDetector.isMobile;
    let f = reactCoreLibraryReexport.useCallback(e => {
      if (i != null) {
        i(e);
      }
    }, [i]);
    let g = reactCoreLibraryReexport.useCallback(e => {
      if (r != null) {
        r(e);
      }
    }, [r]);
    let m = reactCoreLibraryReexport.useCallback(e => {
      if (n != null) {
        n(e.key);
      }
    }, [n]);
    let v = reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu, {
      onClick: m,
      children: rC().map(e => e.id === c ? reactJsxRuntimeCoreReexport.jsxs(reactMenuComponent.Menu.Item, {
        className: "mermaid-view-item-checked",
        children: [e.name, reactJsxRuntimeCoreReexport.jsx(listCheckBoldIcon.ListCheckBoldIcon, {
          style: {
            marginLeft: 10
          }
        })]
      }, e.id) : reactJsxRuntimeCoreReexport.jsx(reactMenuComponent.Menu.Item, {
        children: e.name
      }, e.id))
    });
    let b = l || s;
    if (p) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mermaid-toolbar",
        ref: h,
        children: [o && reactJsxRuntimeCoreReexport.jsx(rx, {
          onTemplateChange: f
        }), o && reactJsxRuntimeCoreReexport.jsx(i8, {
          type: "vertical"
        }), reactJsxRuntimeCoreReexport.jsx(dropdownComponent_1.Dropdown, {
          getPopupContainer: () => (h == null ? undefined : h.current) || document.body,
          overlay: v,
          placement: "bottom",
          trigger: rp,
          boundaryPadding: 2,
          children: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
            type: "text",
            icon: reactJsxRuntimeCoreReexport.jsx(rd, {}),
            children: t("LarkCCM_DocVerse_View_Button")
          })
        }), b && reactJsxRuntimeCoreReexport.jsx(i8, {
          type: "vertical"
        }), s && reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
          mouseEnterDelay: 200,
          title: t("LarkCCM_DocVerse_Mmd_FullScreen_Tooltip"),
          children: reactJsxRuntimeCoreReexport.jsx(iconButtonWrapper.IconButton, {
            size: 14,
            onClick: () => {
              if (u != null) {
                u(true);
              }
              docxEventCollector.wrappedCollector("ccm_doc_mini_app_mermaid_click", {
                click: "full_screen",
                type: "enter",
                is_full_screen: "false"
              });
            },
            icon: reactJsxRuntimeCoreReexport.jsx(expandOutlinedIcon.ExpandOutlinedIcon, {})
          })
        }), l && reactJsxRuntimeCoreReexport.jsx(rv, {
          style: {
            marginLeft: s ? 8 : undefined
          },
          theme: a,
          onThemeChange: g
        })]
      });
    }
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let rR = (e, i, r) => {
    if (r) {
      e.setAttribute(i, r);
      return;
    }
    e.removeAttribute(i);
  };
  let rL = function (e, i = 2) {
    let r = "";
    let n = e.querySelector("svg > g");
    let o = e.style.cssText;
    let l = e.getBoundingClientRect();
    let {
      width: s,
      height: a
    } = l;
    if (n) {
      var c;
      let o = n.style.transform;
      let d = n.getAttribute("transform");
      n.style.transform = "";
      n.removeAttribute("transform");
      let u = n.getBoundingClientRect();
      let h = u.width + 96;
      let p = u.height + 96;
      let f = new DOMMatrixReadOnly(window.getComputedStyle(n).transform);
      n.style.transform = `matrix(1, ${f.b}, ${f.c}, 1, ${f.e + l.x - u.x}, ${f.f + l.y - u.y})`;
      if (((c = browserThemeManager.getThemeMode()) === null || c === undefined ? undefined : c.toLocaleLowerCase()) === "dark") {
        e.style.color = uiThemeDesignTokens.designTokens.N00;
        e.style.backgroundColor = designTokens.designTokens.N50;
      } else {
        e.style.backgroundColor = uiThemeDesignTokens.designTokens.N00;
      }
      e.style.width = `${h}px`;
      e.style.height = `${p}px`;
      e.style.transform = `scale(${i}) translate(48px, 48px)`;
      e.style.transformOrigin = "top left";
      s = h * i;
      a = p * i;
      r = new XMLSerializer().serializeToString(e);
      n.style.transform = o;
      rR(n, "transform", d || "");
    } else {
      r = new XMLSerializer().serializeToString(e);
    }
    rR(e, "style", o);
    return {
      svgCode: r,
      width: s,
      height: a
    };
  };
  let rN = (e, i) => {
    if (!i) {
      return;
    }
    let {
      svgCode: r,
      width: n,
      height: o
    } = rL(i);
    let l = `data:image/svg+xml;utf8,${encodeURIComponent(r)}`;
    let s = document.createElement("canvas");
    let a = s.getContext("2d");
    if (!a) {
      return;
    }
    s.width = n;
    s.height = o;
    let d = new Image(n * 2, o * 2);
    d.onload = () => {
      a.fillRect(0, 0, n * 2, o * 2);
      a.drawImage(d, 0, 0, s.width, s.height);
      let i = s.toDataURL("image/jpeg");
      docxEditorCore.onServiceReady(e.editorAPI, imageViewerManagerProvider.imageViewerManager, e => {
        e.openImageViewer({
          type: appTypeConstants.getAppTypes.THIRD_PARTY,
          payload: {
            imageList: [{
              src: xssContentSanitizer.sanitizeUrl(async () => Promise.resolve(i), null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWR*cFlTblJa$jJ4clRETmFjRnBZWTNaamJWWm9X$E5SZ*1*SFZuTmpSM$o1WTNrNWR*bFlTbkpp$jBaM1R*aENl$nBZ$25C-$dHTjFaRWhP-%dOdFpERmpkejA5"
              }),
              width: n,
              height: o,
              filename: "markmap.jpg",
              type: entityTypes_1.EntityTypes.ThirdParty,
              downloadImageUrl: i,
              recordId: ""
            }],
            index: 0
          }
        });
      });
    };
    d.onerror = () => {};
    d.src = xssContentSanitizer.sanitizeUrl(l, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWR*cFlTblJa$jJ4clRETmFjRnBZWTNaamJWWm9X$E5SZ*1*SFZuTmpSM$o1WTNrNWR*bFlTbkpp$jBaM1R*aENl$nBZ$25C-$dHTjFaRWhP-%dOdFpERmpkejA5"
    });
  };
  var docI18nServiceToken = require("doc-i18n-service-token") /*id: 900813*/;
  let rP = {
    initialExpandLevel: -1
  };
  function rD(e) {
    let {
      value: i,
      blockManager: r,
      onRendered: n
    } = e;
    let o = reactCoreLibraryReexport.useRef(null);
    let l = reactCoreLibraryReexport.useRef();
    let s = reactCoreLibraryReexport.useRef(false);
    let a = useDiContainerHook.useDiContainer(docI18nServiceToken.DocI18nService).useTranslateFn();
    let c = useDiContainerHook.useDiContainer(docUiServiceSymbols.DocMindMapComponent);
    reactCoreLibraryReexport.useEffect(() => {
      let e = debounceUtil_1_1.debounce(() => {
        var e;
        if ((e = l.current) !== null && e !== undefined) {
          e.fit();
        }
        if (!s.current) {
          s.current = true;
          setTimeout(() => n == null ? undefined : n(), 100);
        }
      }, 300);
      let i = new resizeObserverPolyfill.ResizeObserver(e);
      if (o.current) {
        i.observe(o.current);
      }
      return () => {
        if (o.current) {
          i.unobserve(o.current);
        }
        i.disconnect();
      };
    }, [l.current]);
    let u = reactCoreLibraryReexport.useMemo(() => i.replace(/[\n]+/g, "\n").trim(), [i]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "docx-markmap-container",
      ref: o,
      onClick: e => {
        var i;
        e.preventDefault();
        e.stopPropagation();
        rN(r, (i = o.current) === null || i === undefined ? undefined : i.querySelector("svg"));
      },
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "docx-markmap-mask",
        children: reactJsxRuntimeCoreReexport.jsx(c, {
          t: a,
          value: u,
          markmapRef: l,
          handleRetry: emptyExportFunction.emptyFunction,
          extName: "",
          iconUrl: "",
          isDone: true,
          hideAction: true,
          inMessage: false,
          markmapOptions: rP
        })
      })
    });
  }
  var rj = e => {
    let {
      value: i,
      isMarkmap: r,
      svgGraph: n,
      isBlockInViewport: o,
      svgLoading: l,
      blockManager: s,
      error: a,
      needCursor: c,
      onResultClick: u,
      onLoad: h
    } = e;
    let p = reactCoreLibraryReexport.useRef(null);
    if (r && o) {
      return reactJsxRuntimeCoreReexport.jsx(rD, {
        blockManager: s,
        value: i,
        onRendered: h
      });
    }
    if (a) {
      let e = a.split("\n");
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "result-error",
        children: e.map((e, i) => reactJsxRuntimeCoreReexport.jsx("div", {
          children: e
        }, i))
      });
    }
    if (/^\s*$/.test(n) && !l) {
      if (h != null) {
        h();
      }
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "result-empty",
        children: t("LarkCCM_DocVerse_Mmd_Empty")
      });
    }
    if (l || !n) {
      return null;
    }
    let f = ik(n);
    let g = iS(n);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "result-render-wrapper",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "result-render-wrapper__inner",
        style: {
          cursor: c ? "zoom-in" : undefined
        },
        onClick: e => {
          if (u != null) {
            u(e);
          }
        },
        ref: p,
        children: reactJsxRuntimeCoreReexport.jsx("img", {
          className: "result-render-wrapper__img",
          src: xssContentSanitizer.sanitizeUrl(f, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWR*cFlTblJa$jJ4clRETmFjRnBZWTNaamJWWm9X$E5SZ*xre%9-%mpSemwx$2xjM%1HTj$PW*xh$0%0eFlraFJkR050$m5W-$IxWj$%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
          }),
          onLoad: h,
          alt: "",
          style: {
            maxWidth: `${g}px`
          }
        })
      })
    });
  };
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var closeOutlinedIconComponent = require("close-outlined-icon-component") /*id: 426699*/;
  var rF = e => {
    let {
      title: i,
      children: r,
      padding: n,
      headerSlot: o,
      isCenter: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "mermaid-fullscreen-container",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mermaid-fullscreen-container__header",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          children: i
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          children: o
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mermaid-fullscreen-container__body",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: ip("mermaid-fullscreen-container__body__inner", {
            "mermaid-fullscreen-container__body__inner--center": l
          }),
          style: {
            padding: n
          },
          children: r
        })
      })]
    });
  };
  var stringEscapeUtils = require("string-escape-utils") /*id: 74368*/;
  var reactScrollArea = require("react-scroll-area") /*id: 85763*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  let r$ = {
    "&nbsp;": "\xA0",
    "&iexcl;": "¡",
    "&cent;": "¢",
    "&pound;": "£",
    "&curren;": "¤",
    "&yen;": "¥",
    "&brvbar;": "¦",
    "&sect;": "§",
    "&uml;": "¨",
    "&copy;": "©",
    "&ordf;": "ª",
    "&laquo;": "«",
    "&not;": "¬",
    "&shy;": "­",
    "&reg;": "®",
    "&macr;": "¯",
    "&deg;": "°",
    "&plusmn;": "±",
    "&sup2;": "²",
    "&sup3;": "³",
    "&acute;": "´",
    "&micro;": "µ",
    "&para;": "¶",
    "&middot;": "·",
    "&cedil;": "¸",
    "&sup1;": "¹",
    "&ordm;": "º",
    "&raquo;": "»",
    "&frac14;": "¼",
    "&frac12;": "½",
    "&frac34;": "¾",
    "&iquest;": "¿",
    "&Agrave;": "À",
    "&Aacute;": "Á",
    "&Acirc;": "Â",
    "&Atilde;": "Ã",
    "&Auml;": "Ä",
    "&Aring;": "Å",
    "&AElig;": "Æ",
    "&Ccedil;": "Ç",
    "&Egrave;": "È",
    "&Eacute;": "É",
    "&Ecirc;": "Ê",
    "&Euml;": "Ë",
    "&Igrave;": "Ì",
    "&Iacute;": "Í",
    "&Icirc;": "Î",
    "&Iuml;": "Ï",
    "&ETH;": "Ð",
    "&Ntilde;": "Ñ",
    "&Ograve;": "Ò",
    "&Oacute;": "Ó",
    "&Ocirc;": "Ô",
    "&Otilde;": "Õ",
    "&Ouml;": "Ö",
    "&times;": "×",
    "&Oslash;": "Ø",
    "&Ugrave;": "Ù",
    "&Uacute;": "Ú",
    "&Ucirc;": "Û",
    "&Uuml;": "Ü",
    "&Yacute;": "Ý",
    "&THORN;": "Þ",
    "&szlig;": "ß",
    "&agrave;": "à",
    "&aacute;": "á",
    "&acirc;": "â",
    "&atilde;": "ã",
    "&auml;": "ä",
    "&aring;": "å",
    "&aelig;": "æ",
    "&ccedil;": "ç",
    "&egrave;": "è",
    "&eacute;": "é",
    "&ecirc;": "ê",
    "&euml;": "ë",
    "&igrave;": "ì",
    "&iacute;": "í",
    "&icirc;": "î",
    "&iuml;": "ï",
    "&eth;": "ð",
    "&ntilde;": "ñ",
    "&ograve;": "ò",
    "&oacute;": "ó",
    "&ocirc;": "ô",
    "&otilde;": "õ",
    "&ouml;": "ö",
    "&divide;": "÷",
    "&oslash;": "ø",
    "&ugrave;": "ù",
    "&uacute;": "ú",
    "&ucirc;": "û",
    "&uuml;": "ü",
    "&yacute;": "ý",
    "&thorn;": "þ",
    "&yuml;": "ÿ",
    "&quot;": "\"",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&apos;": "'",
    "&OElig;": "Œ",
    "&oelig;": "œ",
    "&Scaron;": "Š",
    "&scaron;": "š",
    "&Yuml;": "Ÿ",
    "&circ;": "ˆ",
    "&tilde;": "˜",
    "&ensp;": "\u2002",
    "&emsp;": "\u2003",
    "&thinsp;": "\u2009",
    "&zwnj;": "‌",
    "&zwj;": "‍",
    "&lrm;": "‎",
    "&rlm;": "‏",
    "&ndash;": "–",
    "&mdash;": "—",
    "&lsquo;": "‘",
    "&rsquo;": "’",
    "&sbquo;": "‚",
    "&ldquo;": "“",
    "&rdquo;": "”",
    "&bdquo;": "„",
    "&dagger;": "†",
    "&Dagger;": "‡",
    "&permil;": "‰",
    "&lsaquo;": "‹",
    "&rsaquo;": "›",
    "&euro;": "€",
    "&fnof;": "ƒ",
    "&Alpha;": "Α",
    "&Beta;": "Β",
    "&Gamma;": "Γ",
    "&Delta;": "Δ",
    "&Epsilon;": "Ε",
    "&Zeta;": "Ζ",
    "&Eta;": "Η",
    "&Theta;": "Θ",
    "&Iota;": "Ι",
    "&Kappa;": "Κ",
    "&Lambda;": "Λ",
    "&Mu;": "Μ",
    "&Nu;": "Ν",
    "&Xi;": "Ξ",
    "&Omicron;": "Ο",
    "&Pi;": "Π",
    "&Rho;": "Ρ",
    "&Sigma;": "Σ",
    "&Tau;": "Τ",
    "&Upsilon;": "Υ",
    "&Phi;": "Φ",
    "&Chi;": "Χ",
    "&Psi;": "Ψ",
    "&Omega;": "Ω",
    "&alpha;": "α",
    "&beta;": "β",
    "&gamma;": "γ",
    "&delta;": "δ",
    "&epsilon;": "ε",
    "&zeta;": "ζ",
    "&eta;": "η",
    "&theta;": "θ",
    "&iota;": "ι",
    "&kappa;": "κ",
    "&lambda;": "λ",
    "&mu;": "μ",
    "&nu;": "ν",
    "&xi;": "ξ",
    "&omicron;": "ο",
    "&pi;": "π",
    "&rho;": "ρ",
    "&sigmaf;": "ς",
    "&sigma;": "σ",
    "&tau;": "τ",
    "&upsilon;": "υ",
    "&phi;": "φ",
    "&chi;": "χ",
    "&psi;": "ψ",
    "&omega;": "ω",
    "&thetasym;": "ϑ",
    "&upsih;": "ϒ",
    "&piv;": "ϖ",
    "&bull;": "•",
    "&hellip;": "…",
    "&prime;": "′",
    "&Prime;": "″",
    "&oline;": "‾",
    "&frasl;": "⁄",
    "&weierp;": "℘",
    "&image;": "ℑ",
    "&real;": "ℜ",
    "&trade;": "™",
    "&alefsym;": "ℵ",
    "&larr;": "←",
    "&uarr;": "↑",
    "&rarr;": "→",
    "&darr;": "↓",
    "&harr;": "↔",
    "&crarr;": "↵",
    "&lArr;": "⇐",
    "&uArr;": "⇑",
    "&rArr;": "⇒",
    "&dArr;": "⇓",
    "&hArr;": "⇔",
    "&forall;": "∀",
    "&part;": "∂",
    "&exist;": "∃",
    "&empty;": "∅",
    "&nabla;": "∇",
    "&isin;": "∈",
    "&notin;": "∉",
    "&ni;": "∋",
    "&prod;": "∏",
    "&sum;": "∑",
    "&minus;": "−",
    "&lowast;": "∗",
    "&radic;": "√",
    "&prop;": "∝",
    "&infin;": "∞",
    "&ang;": "∠",
    "&and;": "∧",
    "&or;": "∨",
    "&cap;": "∩",
    "&cup;": "∪",
    "&int;": "∫",
    "&there4;": "∴",
    "&sim;": "∼",
    "&cong;": "≅",
    "&asymp;": "≈",
    "&ne;": "≠",
    "&equiv;": "≡",
    "&le;": "≤",
    "&ge;": "≥",
    "&sub;": "⊂",
    "&sup;": "⊃",
    "&nsub;": "⊄",
    "&sube;": "⊆",
    "&supe;": "⊇",
    "&oplus;": "⊕",
    "&otimes;": "⊗",
    "&perp;": "⊥",
    "&sdot;": "⋅",
    "&lceil;": "⌈",
    "&rceil;": "⌉",
    "&lfloor;": "⌊",
    "&rfloor;": "⌋",
    "&lang;": "〈",
    "&rang;": "〉",
    "&loz;": "◊",
    "&spades;": "♠",
    "&clubs;": "♣",
    "&hearts;": "♥",
    "&diams;": "♦"
  };
  let rW = e => {
    let i;
    if (e.charAt(1) !== "#") {
      return r$[e] || e;
    }
    let r = e.charAt(2);
    if (isNaN(i = r === "x" || r === "X" ? parseInt(r = e.substring(3, e.length - 1), 16) : parseInt(r = e.substring(2, e.length - 1)))) {
      return e;
    } else {
      return String.fromCharCode(i);
    }
  };
  let rV = e => Math.max(Math.ceil(e / 22 * 1.25), 10);
  let rU = (e, i) => i ? e.replace(/ /g, "&nbsp;").split("\n").map((e, i, r) => e === "" && i === r.length - 1 ? "" : `<div>${e || "<br />"}</div>`).join("") : `${e.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;")}`;
  let rX = e => e.innerText;
  let rY = (e, i) => {
    e.innerHTML = Array(i).fill(0).map((e, i) => `<div>${i + 1}</div>`).join("");
  };
  var rq = e => {
    let {
      editable: i,
      value: r,
      triggerUpdate: n,
      fillContainer: o,
      isFullscreen: l,
      blockManager: s,
      onKeyDown: a,
      onKeyUp: c,
      onChange: u,
      onFocus: h,
      onBlur: p
    } = e;
    let f = reactCoreLibraryReexport.useRef(null);
    let g = reactCoreLibraryReexport.useRef(null);
    let m = reactCoreLibraryReexport.useRef(null);
    let v = reactCoreLibraryReexport.useRef(null);
    let b = reactCoreLibraryReexport.useRef(null);
    let y = reactCoreLibraryReexport.useRef(null);
    let w = reactCoreLibraryReexport.useRef(null);
    let k = reactCoreLibraryReexport.useRef(null);
    let S = reactCoreLibraryReexport.useRef(null);
    let M = reactCoreLibraryReexport.useRef(null);
    let x = reactCoreLibraryReexport.useRef(10);
    let E = reactCoreLibraryReexport.useRef(r || "");
    let C = ig(i);
    let _ = reactCoreLibraryReexport.useRef(0);
    let T = reactCoreLibraryReexport.useRef(false);
    let I = (e, i) => {
      if (k.current) {
        let e = rV(i);
        if (e !== x.current) {
          rY(k.current, e);
          x.current = e;
        }
      }
      if (f.current && !o) {
        let e = Math.max(i, 22) + 22;
        f.current.style.height = `${e > 792 ? 792 : e}px`;
      }
      if (k.current && g.current) {
        g.current.style.width = `calc(100% - ${12 + k.current?.offsetWidth}px)`;
      }
      if (y.current) {
        y.current.style.width = `${Math.max(e + 30, _.current)}px`;
      }
    };
    let R = reactCoreLibraryReexport.useCallback(e => {
      if (a != null) {
        a(e);
      }
    }, [a]);
    let L = reactCoreLibraryReexport.useCallback(e => {
      if (c != null) {
        c(e);
      }
    }, [c]);
    let N = reactCoreLibraryReexport.useCallback(e => {
      if (!v.current) {
        return;
      }
      let i = rX(e.target);
      v.current.innerHTML = rU(stringEscapeUtils.escapeHTML(i), true);
      I(v.current.offsetWidth, v.current.offsetHeight);
      E.current = i;
      if (u != null) {
        u(i.replace(/&#?\w+;/g, rW), e);
      }
    }, [u]);
    let A = e => {
      if (h != null) {
        h(e);
      }
      T.current = true;
      docxEventCollector.wrappedCollector("ccm_doc_mini_app_mermaid_click", {
        click: "edit_code",
        is_full_screen: `${l}`
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = new resizeObserverPolyfill.ResizeObserver(e => {
        let {
          contentRect: i
        } = e[0];
        if (v.current) {
          I(i.width, i.height);
        }
      });
      if (v.current) {
        e.observe(v.current);
      }
      return () => {
        if (v.current) {
          e.unobserve(v.current);
        }
        e.disconnect();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e = debounceUtil_1_1.debounce(e => {
        let {
          contentRect: i
        } = e[0];
        if (k.current) {
          _.current = i.width;
          if (v.current) {
            I(v.current.offsetWidth, v.current.offsetHeight);
          }
        }
      }, 300);
      let i = new resizeObserverPolyfill.ResizeObserver(e);
      if (b.current) {
        i.observe(b.current);
      }
      return () => {
        if (b.current) {
          i.unobserve(b.current);
        }
        i.disconnect();
        e.cancel();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e = new resizeObserverPolyfill.ResizeObserver(e => {
        let {
          contentRect: i
        } = e[0];
        if (k.current) {
          k.current.style.height = `${i.height}px`;
        }
      });
      if (y.current) {
        e.observe(y.current);
      }
      return () => {
        if (y.current) {
          e.unobserve(y.current);
        }
        e.disconnect();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e = new resizeObserverPolyfill.ResizeObserver(e => {
        let {
          contentRect: i
        } = e[0];
        if (S.current) {
          S.current.style.height = `${i.height + 15}px`;
        }
      });
      if (M.current) {
        e.observe(M.current);
      }
      return () => {
        if (M.current) {
          e.unobserve(M.current);
        }
        e.disconnect();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (m.current && r && !T.current && v.current) {
        let e = stringEscapeUtils.escapeHTML(r);
        v.current.innerHTML = rU(e, true);
        m.current.innerHTML = rU(e, !C.current);
        E.current = r;
      }
    }, [n, T.current, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i && m.current) {
        let e = stringEscapeUtils.escapeHTML(E.current);
        m.current.innerHTML = rU(e);
      }
    }, [i]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = m.current;
      if (e) {
        let i = e => {
          A(e);
        };
        e.addEventListener("focus", i);
        return () => {
          e.removeEventListener("focus", i);
        };
      }
    }, [A, m.current]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = m.current;
      if (e) {
        let i = e => {
          var i;
          if ((i = s.events) !== null && i !== undefined) {
            i.emit("behavior.copy", {
              event: e
            });
          }
        };
        e.addEventListener("copy", i);
        return () => {
          e.removeEventListener("copy", i);
        };
      }
    }, [m.current, s]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: ip("mermaid-editor-wrapper", {
        "mermaid-editor-wrapper--fill-container": o
      }),
      ref: f,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "line-num-wrapper",
        ref: w,
        contentEditable: false,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "line-num-wrapper__count",
          ref: k,
          children: Array(10).fill(0).map((e, i) => reactJsxRuntimeCoreReexport.jsx("div", {
            "data-index": i + 1
          }, i))
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "line-num-wrapper__placeholder",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "line-num-wrapper__placeholder__inner",
            ref: S
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "content-editable-wrapper",
        ref: g,
        children: reactJsxRuntimeCoreReexport.jsx(reactScrollArea.ScrollArea, {
          scrollX: true,
          scrollY: true,
          className: "scroll-container",
          ref: b,
          onScroll: e => {
            let i = e.target;
            if (w.current) {
              w.current.scrollTop = i.scrollTop;
            }
          },
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "scroll-container-inner",
            ref: y,
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              ref: m,
              className: "content-editable",
              contentEditable: !!i && (!!browserEnvDetectionUtil.browserDetector.isFF || "plaintext-only"),
              onClick: e => {
                e.stopPropagation();
                e.preventDefault();
              },
              onKeyDown: R,
              onKeyUp: L,
              onInput: N,
              onFocus: A,
              onBlur: e => {
                if (p != null) {
                  p(e);
                }
                T.current = false;
              },
              onPaste: () => {
                setTimeout(() => {
                  let e = m.current;
                  let i = v.current;
                  if (e && i) {
                    i.innerHTML = rU(stringEscapeUtils.escapeHTML(rX(e)), true);
                    I(i.offsetWidth, i.offsetHeight);
                  }
                });
              }
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "scroll-placeholder",
              ref: M,
              onClick: () => {
                if (!C.current) {
                  return;
                }
                let e = m.current;
                if (!e) {
                  return;
                }
                if (!e.childNodes.length) {
                  e.focus();
                  return;
                }
                let i = document.createRange();
                let r = window.getSelection();
                let n = e.childNodes[e.childNodes.length - 1];
                i.setStart(n, (n.nodeValue || "").length);
                i.setEnd(n, (n.nodeValue || "").length);
                if (r) {
                  r.removeAllRanges();
                  r.addRange(i);
                }
                e.focus();
              }
            })]
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "hidden-content",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "hidden-content__inner",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            ref: v
          })
        })
      })]
    });
  };
  let rG = (e, i, r) => e < r ? r : e > i - r ? i - r : e;
  function rJ(e) {
    let {
      blockManager: i
    } = e;
    let r = reactCoreLibraryReexport.useRef(null);
    let n = reactCoreLibraryReexport.useRef(null);
    let o = reactCoreLibraryReexport.useRef(50);
    let [l, s] = reactCoreLibraryReexport.useState(o.current);
    let {
      theme: a,
      error: c,
      dataFromTpl: u,
      isMarkmap: h,
      svgGraph: p,
      svgLoading: f,
      editable: g,
      triggerUpdate: m,
      triggerUpdateResult: v,
      handleThemeChange: b,
      handleTemplateChange: y,
      handleTextareaChange: w,
      onKeyUp: k,
      onKeyDown: S,
      onFocus: M,
      onBlur: x
    } = e;
    let E = e => {
      if (!r.current) {
        return;
      }
      let {
        pageX: i,
        containerWidth: n,
        leftContainerWidth: o
      } = r.current;
      let l = rG(o + (e.pageX - i), n, 200) / n;
      s((l = l < 0.15 ? 0.15 : l > 0.85 ? 0.85 : l) * 100);
    };
    let C = reactCoreLibraryReexport.useCallback(() => {
      if (r.current) {
        r.current = null;
        o.current = l;
      }
    }, [l]);
    let _ = iv(() => {
      ix(p, i);
    });
    reactCoreLibraryReexport.useEffect(() => {
      window.addEventListener("mousemove", E);
      return () => {
        window.removeEventListener("mousemove", E);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      window.addEventListener("mouseup", C);
      return () => {
        window.removeEventListener("mouseup", C);
      };
    }, [C]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "mermaid-full-container",
      ref: n,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "full-wrapper",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "full-left-wrapper",
          style: {
            width: `calc(${l}% - 12px)`
          },
          children: reactJsxRuntimeCoreReexport.jsx(rF, {
            title: t("LarkCCM_DocVerse_Mmd_Code_Header"),
            headerSlot: g ? reactJsxRuntimeCoreReexport.jsx(rx, {
              onTemplateChange: y
            }) : undefined,
            padding: "20px 0 0 16px",
            children: reactJsxRuntimeCoreReexport.jsx(rq, {
              editable: g,
              triggerUpdate: m,
              value: u,
              fillContainer: true,
              isFullscreen: true,
              blockManager: i,
              onChange: w,
              onKeyDown: S,
              onKeyUp: k,
              onFocus: M,
              onBlur: x
            })
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "resize-bar",
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "resize-btn",
            onMouseDown: e => {
              if (!n.current) {
                return;
              }
              let i = n.current.offsetWidth - 56 - 24;
              r.current = {
                pageX: e.pageX,
                pageY: e.pageY,
                containerWidth: i,
                leftContainerWidth: i * o.current / 100
              };
            },
            children: [reactJsxRuntimeCoreReexport.jsx("div", {}), reactJsxRuntimeCoreReexport.jsx("div", {})]
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "full-right-wrapper",
          style: {
            width: `calc(${100 - l}% - 12px)`
          },
          children: reactJsxRuntimeCoreReexport.jsx(rF, {
            title: t("LarkCCM_DocVerse_Mmd_Diagram_Header"),
            isCenter: true,
            headerSlot: g && !h ? reactJsxRuntimeCoreReexport.jsx(rv, {
              hasText: true,
              theme: a,
              onThemeChange: b
            }) : undefined,
            padding: 12,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "fullscreen-result-wrapper",
              children: reactJsxRuntimeCoreReexport.jsx(rj, {
                value: u,
                isMarkmap: h,
                triggerUpdate: v,
                isBlockInViewport: true,
                svgGraph: p,
                svgLoading: f,
                error: c,
                blockManager: i,
                needCursor: true,
                onResultClick: _
              })
            })
          })
        })]
      })
    });
  }
  var docxViewModeDetector = require("docx-view-mode-detector") /*id: 44270*/;
  var rQ = e => {
    let {
      isFullscreen: i = false,
      onClose: r,
      svgGraph: n,
      error: o,
      theme: l,
      dataFromTpl: s,
      isMarkmap: a,
      svgLoading: c,
      editable: u,
      triggerUpdate: h,
      triggerUpdateResult: p,
      handleTextareaChange: f,
      handleThemeChange: g,
      handleTemplateChange: m,
      onKeyUp: v,
      onKeyDown: b,
      onFocus: y,
      onBlur: w
    } = e;
    let k = docxViewModeDetector.useViewModeDetector();
    reactCoreLibraryReexport.useEffect(() => {
      let {
        prev: e
      } = k;
      if (e === docxViewModeDetector.viewModeConstants.UNKNOWN) {
        return;
      }
    }, [k]);
    if (i) {
      return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsxs("div", {
        className: ip("mermaid-fullscreen-view", {
          empty: !i,
          [status]: true
        }),
        contentEditable: false,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "mermaid-fullscreen-view--header",
          children: [reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
            type: "text",
            className: "doc-mini-app--close mermaid-fullscreen-view--header--back",
            size: "large",
            icon: reactJsxRuntimeCoreReexport.jsx(closeOutlinedIconComponent.CloseOutlinedIcon, {}),
            onClick: r,
            children: t("CreationDoc_Common_ExitFullScreen")
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "mermaid-fullscreen-view--header--title",
            children: [reactJsxRuntimeCoreReexport.jsx("img", {
              src: xssContentSanitizer.sanitizeUrl(docMindmapConstants.mindmapIconUrl, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWR*cFlTblJa$jJ4clRETmFjRnBZWTNaamJWWm9X$E5SZ*xre%9-%mpSemwx$2xjM%1HTj$P$zFr$jNoell6Sk9l$nB-$m5WT$d*cHdXb*hqZ*1*WE5Xd*FXR2QxWk$oT05*bFlTbT$r$0%wOQ"
              }),
              className: "mermaid-fullscreen-view--header--img"
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              children: t("CreationDoc_Docs_Mermaid_Title")
            })]
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          style: {
            height: "calc(100vh - 64px)",
            overflow: "scroll"
          },
          children: reactJsxRuntimeCoreReexport.jsx(rJ, {
            svgId: e.svgId,
            blockManager: e.blockManager,
            defaultView: n,
            isMarkmap: a,
            theme: l,
            error: o,
            dataFromTpl: s,
            svgGraph: n,
            svgLoading: c,
            editable: u,
            triggerUpdate: h,
            triggerUpdateResult: p,
            handleThemeChange: g,
            handleTemplateChange: m,
            handleTextareaChange: f,
            onKeyDown: b,
            onKeyUp: v,
            onFocus: y,
            onBlur: w
          })
        })]
      }), document.body);
    } else {
      return null;
    }
  };
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  let r1 = (e, i, r) => e < r ? r : e > i - r ? i - r : e;
  (o = {})[o.a = 65] = "a";
  o[o.A = 97] = "A";
  let r2 = o;
  function r4(e) {
    let {
      editorAPI: i,
      blockManager: r,
      svgGraph: n,
      error: o,
      theme: l,
      dataFromTpl: s,
      svgLoading: a,
      editable: c,
      currentView: u,
      triggerUpdate: h,
      triggerUpdateResult: p,
      handleViewChange: f,
      handleTextareaChange: g,
      handleThemeChange: m,
      handleTemplateChange: v,
      isFullscreen: b,
      enterFullMode: y,
      exitFullMode: w,
      isMarkmap: k,
      isSelected: S,
      isBlockInViewport: M,
      onResultRenderLoad: x
    } = e;
    let E = !browserEnvironmentDetectionUtils.browserDetector.isMobile && c;
    let C = reactCoreLibraryReexport.useRef(null);
    let _ = reactCoreLibraryReexport.useRef(null);
    let T = reactCoreLibraryReexport.useRef(50);
    let [I, R] = reactCoreLibraryReexport.useState(T.current);
    let [L, N] = reactCoreLibraryReexport.useState(false);
    let A = () => {
      i.getService(compatBrowserSelectionService_1.selectionServiceKey).removeAllSelection();
    };
    let P = () => {};
    let D = e => {
      if (e.key === "Enter") {
        document.body.classList.add("hide-scroll");
      }
      let i = browserEnvironmentDetectionUtils.browserDetector.isMac ? e.metaKey : e.ctrlKey;
      if ((e.keyCode === r2.A || e.keyCode === r2.a) && i && !e.altKey) {
        let i = document.createRange();
        i.selectNodeContents(e.target);
        let r = window.getSelection();
        if (r != null) {
          r.removeAllRanges();
        }
        if (r != null) {
          r.addRange(i);
        }
        e.preventDefault();
        e.stopPropagation();
      }
    };
    let j = () => {
      document.body.classList.remove("hide-scroll");
    };
    let O = iv(() => {
      ix(n, r);
    });
    let B = e => {
      if (!_.current) {
        return;
      }
      let {
        pageX: i,
        containerWidth: r,
        leftContainerWidth: n
      } = _.current;
      let o = r1(n + (e.pageX - i), r, 500) / r;
      R((o = o < 0.15 ? 0.15 : o > 0.85 ? 0.85 : o) * 100);
    };
    let F = reactCoreLibraryReexport.useCallback(() => {
      if (_.current) {
        _.current = null;
        T.current = I;
      }
    }, [I]);
    reactCoreLibraryReexport.useEffect(() => {
      window.addEventListener("mousemove", B);
      return () => {
        window.removeEventListener("mousemove", B);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      window.addEventListener("mouseup", F);
      return () => {
        window.removeEventListener("mouseup", F);
      };
    }, [F]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = debounceUtil_1_1.debounce(e => {
        let {
          contentRect: i
        } = e[0];
        if (i == null ? undefined : i.width) {
          N(i.width < 500);
        }
      }, 300);
      let i = new resizeObserverPolyfill.ResizeObserver(e);
      if (C.current) {
        i.observe(C.current);
      }
      return () => {
        if (C.current) {
          i.unobserve(C.current);
        }
        i.disconnect();
      };
    }, []);
    let Z = u === "code";
    let z = u === "chart";
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: ip("doc-mermaid-container", {
          selected: S,
          "min-width-container": L
        }),
        contentEditable: false,
        ref: C,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "wrapper",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "toolbar-wrapper",
            children: reactJsxRuntimeCoreReexport.jsx(r_, {
              showTemplate: E,
              showTheme: E && !Z && !k,
              showFullscreen: E,
              theme: l,
              view: u,
              updateFullScreenInfo: y,
              onTemplateChange: v,
              onThemeChange: m,
              onViewChange: f
            })
          }), !z && reactJsxRuntimeCoreReexport.jsx("div", {
            className: ip("left-wrapper", {
              "left-wrapper--full": Z
            }),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "left-wrapper__inner",
              children: reactJsxRuntimeCoreReexport.jsx(rq, {
                editable: E,
                triggerUpdate: h,
                value: s,
                blockManager: r,
                onKeyDown: D,
                onKeyUp: j,
                onChange: g,
                onFocus: A,
                onBlur: P
              })
            })
          }), !Z && !b && reactJsxRuntimeCoreReexport.jsx("div", {
            className: ip("right-wrapper", {
              "right-wrapper--full": z
            }),
            children: reactJsxRuntimeCoreReexport.jsx(rj, {
              isMarkmap: k,
              value: s,
              blockManager: r,
              triggerUpdate: p,
              svgGraph: n,
              svgLoading: a,
              error: o,
              isBlockInViewport: M,
              needCursor: true,
              onResultClick: O,
              onLoad: x
            })
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx(rQ, {
        isFullscreen: b,
        onClose: w,
        svgId: e.svgId,
        blockManager: e.blockManager,
        theme: l,
        error: o,
        isMarkmap: k,
        dataFromTpl: s,
        svgGraph: n,
        svgLoading: a,
        editable: E,
        triggerUpdate: h,
        triggerUpdateResult: p,
        handleThemeChange: m,
        handleTemplateChange: v,
        handleTextareaChange: g,
        onKeyDown: D,
        onKeyUp: j,
        onFocus: A,
        onBlur: P
      })]
    });
  }
  var historyVisibilityTracker = require("history-visibility-tracker") /*id: 52208*/;
  var diProviderUndoManager = require("di-provider-undo-manager") /*id: 142010*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var themeAwareLogoComponent = require("theme-aware-logo-component") /*id: 384167*/;
  var reactThemeProviderWrapper = require("react-theme-provider-wrapper") /*id: 805172*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  let ni = reactThemeProviderWrapper.withThemeProvider(themeAwareLogoComponent.ThemeAwareLogo);
  function nr(e) {
    let {
      onLoad: i,
      loadingError: r,
      onClickRetry: n,
      customErrText: o,
      noAutoRetry: l
    } = e;
    let s = reactCoreLibraryReexport.useRef(null);
    let a = () => {
      n();
    };
    let [c, u] = reactCoreLibraryReexport.useState(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (!r) {
        return;
      }
      let e = setTimeout(() => {
        if (!l && i) {
          i();
        }
      }, 20000);
      if (c === null || c !== r.id) {
        u(r.id);
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadError(r);
      }
      return () => clearTimeout(e);
    }, [i, r]);
    let h = () => reactJsxRuntimeCoreReexport.jsx("div", {
      className: "retry-tips",
      children: reactJsxRuntimeCoreReexport.jsxs("span", {
        className: "retry-text",
        children: [o || t("CreationDoc_DocX_Block_Load_Fail"), reactJsxRuntimeCoreReexport.jsx("button", {
          type: "button",
          onClick: a,
          className: "retry-btn",
          children: t("CreationDoc_Docs_TwoWayLinks_LoadingError_Toast12")
        })]
      })
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: r ? (() => {
        let {
          hasText: i
        } = e;
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: ip(e.classNames, "docx-block-loading-retry docx-block-loading"),
          style: e.style,
          ref: s,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "docx-block-mode",
            contentEditable: false,
            suppressContentEditableWarning: true,
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "docx-retry-content",
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: "docx-retry-placeholder-img",
                style: i ? {
                  fontSize: 10
                } : undefined,
                onClick: i ? a : undefined,
                children: reactJsxRuntimeCoreReexport.jsx(ni, {
                  style: {
                    maxHeight: "88px",
                    maxWidth: "88px"
                  }
                })
              }), !i && h()]
            })
          })
        });
      })() : e.children
    });
  }
  var flowDocShortcutCore = require("flow-doc-shortcut-core") /*id: 977936*/;
  function no(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let nl = {
    pie: {
      useWidth: 1000
    },
    gantt: {
      useWidth: Math.max(document.body.offsetWidth, 1200)
    },
    suppressErrorRendering: true
  };
  let ns = ["neutral", "forest", "base"];
  let na = e => /^\s*markmap/.test(e);
  if (docxShortcutFeatureDetection.isShortcutEnabled()) {
    flowDocShortcutCore.registerBlockLoadListener("mermaidBlockRendered", docBlockTypeConstants.blockTypeConstants.MERMAID);
  }
  class nc extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    get pageToken() {
      return this.props.editorAPI.config.get("token");
    }
    get isEditable() {
      return this.props.editorAPI.config.editable;
    }
    get isBlockRendered() {
      return this.isRendered;
    }
    get containerElement() {
      let {
        hostElement: e
      } = this;
      if (e) {
        return e.querySelector(".doc-mermaid-container");
      } else {
        return null;
      }
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      if (docxShortcutFeatureDetection.isShortcutEnabled() && this.state.currentView === "code") {
        setTimeout(() => {
          this.notifyShortCutServer();
        }, 500);
      }
      this.observer = new IntersectionObserver(e => {
        e.forEach(e => {
          if (e.isIntersecting) {
            this.setState({
              isBlockInViewport: true
            });
          }
        });
      });
      let e = this.props.hostElementRef.current;
      if (e) {
        this.observer.observe(e);
      }
    }
    onEditorFocus() {
      this.editorFocus = true;
    }
    onEditorBlur() {
      this.editorFocus = false;
    }
    blockViewDidUpdate(e, i) {
      super.blockViewDidUpdate(e, i);
      let {
        editable: r
      } = e.editorAPI.config;
      if (!this.editorFocus && !this.state.isInFullScreen) {
        if (i.svgData !== this.snapshot.data) {
          this.triggerSetDataByInject(this.snapshot.data);
        }
        if (i.theme !== this.snapshot.theme) {
          this.handleThemeChange(this.snapshot.theme);
        }
        if (i.currentView !== this.snapshot.view) {
          this.handleViewChange(this.snapshot.view);
        }
        if (!this.isEditable && r !== this.isEditMode) {
          this.quitEditMode();
        }
      }
    }
    blockViewWillUnmount() {
      var e;
      super.blockViewWillUnmount();
      if ((e = this.observer) !== null && e !== undefined) {
        e.disconnect();
      }
      this.observer = null;
    }
    setSelected(e) {
      this.setState({
        isSelected: e
      });
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsx(nr, {
        onClickRetry: this.diagramBlockRetry,
        loadingError: undefined,
        style: {
          height: 220
        },
        children: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: reactJsxRuntimeCoreReexport.jsx(r4, {
            svgId: this.svgId,
            editorAPI: this.props.editorAPI,
            blockManager: this.blockManager,
            svgGraph: this.state.svgGraph,
            isSelected: this.state.isSelected,
            isMarkmap: this.state.isMarkmap,
            editable: this.isEditable,
            isBlockInViewport: this.state.isBlockInViewport,
            svgLoading: this.state.svgLoading,
            triggerUpdate: this.triggerUpdate,
            dataFromTpl: this.state.svgData,
            theme: this.state.theme,
            error: this.state.error,
            triggerUpdateResult: this.triggerUpdateResult,
            currentView: this.state.currentView,
            isFullscreen: this.state.isInFullScreen,
            exitFullMode: this.exitFullMode,
            enterFullMode: this.enterFullMode,
            handleViewChange: this.handleViewChange,
            handleTextareaChange: this.handleTextareaChange,
            handleThemeChange: this.handleThemeChange,
            handleTemplateChange: this.handleTemplateChange,
            onResultRenderLoad: docxShortcutFeatureDetection.isShortcutEnabled() ? this.notifyShortCutServer : undefined
          })
        })
      });
    }
    constructor(e) {
      var i;
      super(e);
      i = this;
      no(this, "isEditMode", false);
      no(this, "isRendered", false);
      no(this, "svgId", `docx-mermaid-svg-${this.id}`);
      no(this, "themeType", this.record.snapshot?.theme || "default");
      no(this, "offUndoManagerReady", undefined);
      no(this, "enableOfflineEdit", true);
      no(this, "triggerUpdateResult", 0);
      no(this, "triggerUpdate", 0);
      no(this, "editorFocus", false);
      no(this, "observer", null);
      no(this, "state", {
        error: "",
        svgLoading: !!this.record.snapshot?.data || !!docMindmapConstants.mindmapConfig.data,
        svgGraph: "",
        isInFullScreen: false,
        isBlockInViewport: this.blockManager.layoutManager.isBlockInViewport(this.id) || false,
        svgData: this.record.snapshot?.data || docMindmapConstants.mindmapConfig.data,
        theme: this.record.snapshot?.theme || docMindmapConstants.mindmapConfig.theme,
        isSelected: !!this.selectionAPI.getSelection().find(e => {
          let {
            id: i
          } = e;
          return this.id === i;
        }),
        isMarkmap: na(this.record.snapshot?.data || docMindmapConstants.mindmapConfig.data),
        currentView: this.record.snapshot?.view || docMindmapConstants.mindmapConfig.view
      });
      no(this, "enterFullMode", () => {
        this.isEditMode = true;
        this.selectionAPI.setSelection([]);
        historyVisibilityTracker.historyVisibilityTracker.setStatus(historyVisibilityTracker.PageType.MINDMAP);
        this.updateFullScreenInfo(true);
      });
      no(this, "updateFullScreenInfo", e => {
        this.setState({
          isInFullScreen: e
        });
        if (e) {
          this.offUndoManagerReady = docxEditorCore.onServiceReady(this.editorAPI, diProviderUndoManager.undoManagerProvider, e => {
            e.setIsInBlockFullScreenMode(true);
          });
        } else {
          var i;
          var r;
          if ((i = this.offUndoManagerReady) !== null && i !== undefined) {
            i.call(this);
          }
          if ((r = this.getService(diProviderUndoManager.undoManagerProvider, {
            optional: true
          })) !== null && r !== undefined) {
            r.setIsInBlockFullScreenMode(false);
          }
        }
      });
      no(this, "exitFullMode", () => {
        historyVisibilityTracker.historyVisibilityTracker.setStatus(historyVisibilityTracker.PageType.PAGEMAIN);
        this.updateFullScreenInfo(false);
      });
      no(this, "quitEditMode", () => {
        this.exitFullMode();
        this.isEditMode = false;
        historyVisibilityTracker.historyVisibilityTracker.setStatus(historyVisibilityTracker.PageType.PAGEMAIN);
        this.updateFullScreenInfo(false);
      });
      no(this, "diagramBlockRetry", () => {
        if (!networkStateEventCollector.collectNetworkState()) {
          return;
        }
      });
      no(this, "triggerSetDataByInject", function (e, r = false) {
        let n = na(e);
        if (n) {
          i.setState({
            error: ""
          });
        }
        i.setState({
          svgData: e,
          isMarkmap: n
        });
        i.triggerUpdate = Date.now();
        if (r) {
          i.saveData("data", e);
        }
        i.triggerSetData(e);
      });
      no(this, "handleViewChange", e => {
        this.editorFocus = true;
        this.setState({
          currentView: e
        }, () => {
          this.editorFocus = false;
        });
        if (this.isEditable) {
          this.saveData("view", e);
        }
        docxEventCollector.wrappedCollector("ccm_doc_mini_app_mermaid_click", {
          click: "view_switch",
          type: e === "codeChart" ? "code_and_chart" : e,
          is_full_screen: "false"
        });
      });
      no(this, "handleTemplateChange", e => {
        let i = id().find(i => i.id === e);
        if (i && this.state.svgData !== i.tpl) {
          this.triggerSetDataByInject(i.tpl, true);
        }
      });
      no(this, "handleThemeChange", e => {
        this.triggerThemeChange(e);
      });
      no(this, "triggerThemeChange", e => {
        this.themeType = this.calcRenderTheme(e);
        this.setState({
          theme: e
        });
        this.saveData("theme", e);
        this.triggerSetData(this.state.svgData);
      });
      no(this, "calcRenderTheme", e => {
        let i = browserThemeManager.getThemeMode();
        if (ns.includes(e)) {
          return e;
        } else if (i === "LIGHT") {
          return "default";
        } else {
          return "dark";
        }
      });
      no(this, "renderByData", debounceUtil_1_1.debounce(async e => {
        window.asd = tQ;
        try {
          var i;
          if (!e) {
            this.setState({
              error: "",
              svgLoading: false,
              svgGraph: ""
            });
            return;
          }
          let r = e == null ? undefined : e.replace(RegExp(String.fromCharCode(160), "g"), " ");
          let n = `%%{init: {'theme':'${this.themeType}'}}%%
${r}`;
          let {
            svg: o
          } = await tQ.render(this.svgId, n);
          let l = this.themeType === "dark" ? designTokens.designTokens.N50 : uiThemeDesignTokens.designTokens.N00;
          let s = (o = o.replace(/style="/, `style="background-color: ${l};`)) == null ? undefined : (i = o.replace(RegExp("\b", "g"), "")) === null || i === undefined ? undefined : i.replace(RegExp(String.fromCharCode(160), "g"), " ");
          this.setState({
            error: "",
            svgLoading: false,
            svgGraph: s
          });
        } catch (e) {
          if (e && typeof e.message == "string") {
            this.setState({
              error: e.message
            });
          } else {
            this.setState({
              error: ""
            });
          }
          this.setState({
            svgLoading: false,
            svgGraph: ""
          });
        }
        this.triggerUpdateResult = Date.now();
      }, 300));
      no(this, "saveData", (e, i) => {
        if (!!this.isEditable && !isUndefinedCheck.isUndefined(i)) {
          this.blockManager.applyTransaction("updateMermaid", r => {
            r.replace(this.record.id, [e], i);
          });
        }
      });
      no(this, "triggerSetData", function (e, r = false) {
        if (e && !r) {
          i.renderByData(e);
        }
      });
      no(this, "handleTextareaChange", (e, i) => {
        if (i) {
          let i = na(e);
          this.triggerSetData(e, i);
          if (i) {
            this.setState({
              error: ""
            });
          }
          this.setState({
            svgData: e,
            isMarkmap: i
          });
          this.saveData("data", e);
          if (/^\s*$/.test(e)) {
            this.setState({
              error: "",
              svgGraph: ""
            });
          }
        }
      });
      no(this, "notifyShortCutServer", () => {
        let {
          recordId: e
        } = this.model;
        window.dispatchEvent(docxShortcutFeatureDetection.createCustomEvent("mermaidBlockRendered", {
          detail: {
            recordId: e
          }
        }));
      });
      this.themeType = this.calcRenderTheme(this.record.snapshot?.theme);
      tQ.initialize({
        ...nl,
        startOnLoad: true,
        theme: this.themeType
      });
      this.triggerSetData(this.record.snapshot?.data || docMindmapConstants.mindmapConfig.data);
      tQ.parseError = function (e) {
        if (typeof e == "string") {
          this.setState({
            error: e
          });
        }
      };
    }
  }
  no(nc, "type", docBlockTypeConstants.blockTypeConstants.MERMAID);
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  class nu extends docBlockModelClass.DocBlockModel {
    getText() {
      return t("CreationDoc_Docs_Mermaid_Title");
    }
  }
  function nh(e) {
    docxEditorCore.registerViewModel(nu, {
      viewCreator: nc,
      extensions: [...e]
    });
  }
  l = "type";
  s = docBlockTypeConstants.blockTypeConstants.MERMAID;
  if ((l = typeof (n = function (e, i) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var r = e[Symbol.toPrimitive];
    if (r !== undefined) {
      var n = r.call(e, i || "default");
      if (typeof n != "object") {
        return n;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(e);
  }(l, "string")) == "symbol" ? n : n + "") in nu) {
    Object.defineProperty(nu, l, {
      value: s,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    nu[l] = s;
  }
  require.d(exports, {
    registerMermaidView: function () {
      return nh;
    }
  });
}