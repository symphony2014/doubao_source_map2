// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mermaid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 724919
         */
module.exports = function (module, exports, require) {
  var i;
  var mermaidPackageJson = require("mermaid-package-json") /*id: 114389*/;
  var selectSvgElement = require("select-svg-element") /*id: 840584*/;
  var jsYamlCoreImplementation = require("js-yaml-core-implementation") /*id: 671191*/;
  var mermaidLayoutRegistryRenderer = require("mermaid-layout-registry-renderer") /*id: 484129*/;
  require("mermaid-flowchart-edge-renderer") /*id: 968232*/;
  require("diagram-arrow-offset-utils") /*id: 173696*/;
  require("mermaid-node-shapes-renderer") /*id: 411411*/;
  require("subgraph-title-margins-calculator") /*id: 954180*/;
  require("mermaid-style-utils") /*id: 717687*/;
  var iconUtilsTextRendering = require("icon-utils-text-rendering") /*id: 990626*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var dedentTemplateString = require("dedent-template-string") /*id: 454132*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var cssSyntaxStringifier = require("css-syntax-stringifier") /*id: 392385*/;
  var cssParser = require("css-parser") /*id: 363110*/;
  var dompurifyCore = require("dompurify-core") /*id: 345925*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var x = {
    id: "c4",
    detector: loggerLevelUtils.setFunctionName(t => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t), "detector"),
    loader: loggerLevelUtils.setFunctionName(async () => {
      let {
        diagram: t
      } = await require.e("c4-diagram") /*id: 1902*/.then(require.bind(require, "c4-diagram-parser-renderer") /*id: 563322*/);
      return {
        id: "c4",
        diagram: t
      };
    }, "loader")
  };
  var b = "flowchart";
  var C = loggerLevelUtils.setFunctionName((t, e) => {
    return (e == null ? undefined : e.flowchart?.defaultRenderer) !== "dagre-wrapper" && (e == null ? undefined : e.flowchart?.defaultRenderer) !== "elk" && /^\s*graph/.test(t);
  }, "detector");
  var v = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-flowchart-diagram") /*id: 77528*/.then(require.bind(require, "mermaid-flowchart-parser-renderer-module") /*id: 903652*/);
    return {
      id: b,
      diagram: t
    };
  }, "loader");
  var k = {
    id: b,
    detector: C,
    loader: v
  };
  var w = "flowchart-v2";
  var S = loggerLevelUtils.setFunctionName((t, e) => {
    return (e == null ? undefined : e.flowchart?.defaultRenderer) !== "dagre-d3" && ((e == null ? undefined : e.flowchart?.defaultRenderer) === "elk" && (e.layout = "elk"), !!/^\s*graph/.test(t) && (e == null ? undefined : e.flowchart?.defaultRenderer) === "dagre-wrapper" || /^\s*flowchart/.test(t));
  }, "detector");
  var T = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-flowchart-diagram") /*id: 77528*/.then(require.bind(require, "mermaid-flowchart-parser-renderer-module") /*id: 903652*/);
    return {
      id: w,
      diagram: t
    };
  }, "loader");
  var B = {
    id: w,
    detector: S,
    loader: T
  };
  var M = {
    id: "er",
    detector: loggerLevelUtils.setFunctionName(t => /^\s*erDiagram/.test(t), "detector"),
    loader: loggerLevelUtils.setFunctionName(async () => {
      let {
        diagram: t
      } = await require.e("er-diagram-parser") /*id: 86186*/.then(require.bind(require, "mermaid-er-diagram-parser-renderer") /*id: 478214*/);
      return {
        id: "er",
        diagram: t
      };
    }, "loader")
  };
  var W = "gitGraph";
  var L = loggerLevelUtils.setFunctionName(t => /^\s*gitGraph/.test(t), "detector");
  var F = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await Promise.all([require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("git-graph-diagram") /*id: 16050*/]).then(require.bind(require, "mermaid-git-graph-diagram") /*id: 919541*/);
    return {
      id: W,
      diagram: t
    };
  }, "loader");
  var _ = {
    id: W,
    detector: L,
    loader: F
  };
  var A = "gantt";
  var $ = loggerLevelUtils.setFunctionName(t => /^\s*gantt/.test(t), "detector");
  var E = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-gantt-parser") /*id: 20443*/.then(require.bind(require, "mermaid-gantt-diagram") /*id: 953076*/);
    return {
      id: A,
      diagram: t
    };
  }, "loader");
  var Z = {
    id: A,
    detector: $,
    loader: E
  };
  var O = "info";
  var D = loggerLevelUtils.setFunctionName(t => /^\s*info/.test(t), "detector");
  var I = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await Promise.all([require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("diagram-renderer") /*id: 92902*/]).then(require.bind(require, "mermaid-info-diagram-module_1") /*id: 5081*/);
    return {
      id: O,
      diagram: t
    };
  }, "loader");
  var q = {
    id: O,
    detector: D,
    loader: I
  };
  var R = {
    id: "pie",
    detector: loggerLevelUtils.setFunctionName(t => /^\s*pie/.test(t), "detector"),
    loader: loggerLevelUtils.setFunctionName(async () => {
      let {
        diagram: t
      } = await Promise.all([require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("pie-chart-diagram") /*id: 87132*/]).then(require.bind(require, "mermaid-pie-diagram-module") /*id: 358608*/);
      return {
        id: "pie",
        diagram: t
      };
    }, "loader")
  };
  var N = "quadrantChart";
  var P = loggerLevelUtils.setFunctionName(t => /^\s*quadrantChart/.test(t), "detector");
  var z = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("quadrant-chart-parser-renderer") /*id: 23293*/.then(require.bind(require, "mermaid-quadrant-chart-diagram") /*id: 46128*/);
    return {
      id: N,
      diagram: t
    };
  }, "loader");
  var j = {
    id: N,
    detector: P,
    loader: z
  };
  var H = "xychart";
  var U = loggerLevelUtils.setFunctionName(t => /^\s*xychart(-beta)?/.test(t), "detector");
  var Y = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-xychart-diagram") /*id: 40537*/.then(require.bind(require, "mermaid-xy-chart-parser-renderer") /*id: 815604*/);
    return {
      id: H,
      diagram: t
    };
  }, "loader");
  var G = {
    id: H,
    detector: U,
    loader: Y
  };
  var V = "requirement";
  var X = loggerLevelUtils.setFunctionName(t => /^\s*requirement(Diagram)?/.test(t), "detector");
  var Q = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-requirement-diagram-renderer") /*id: 29501*/.then(require.bind(require, "mermaid-requirement-diagram") /*id: 940188*/);
    return {
      id: V,
      diagram: t
    };
  }, "loader");
  var J = {
    id: V,
    detector: X,
    loader: Q
  };
  var K = "sequence";
  var tt = loggerLevelUtils.setFunctionName(t => /^\s*sequenceDiagram/.test(t), "detector");
  var te = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("sequence-diagram-renderer") /*id: 94773*/.then(require.bind(require, "mermaid-sequence-diagram-parser-renderer") /*id: 511119*/);
    return {
      id: K,
      diagram: t
    };
  }, "loader");
  var tr = {
    id: K,
    detector: tt,
    loader: te
  };
  var ti = "class";
  var ta = loggerLevelUtils.setFunctionName((t, e) => {
    return (e == null ? undefined : e.class?.defaultRenderer) !== "dagre-wrapper" && /^\s*classDiagram/.test(t);
  }, "detector");
  var to = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-class-diagram-v3") /*id: 42509*/.then(require.bind(require, "mermaid-class-diagram") /*id: 513106*/);
    return {
      id: ti,
      diagram: t
    };
  }, "loader");
  var tl = {
    id: ti,
    detector: ta,
    loader: to
  };
  var tn = "classDiagram";
  var ts = loggerLevelUtils.setFunctionName((t, e) => {
    return !!/^\s*classDiagram/.test(t) && (e == null ? undefined : e.class?.defaultRenderer) === "dagre-wrapper" || /^\s*classDiagram-v2/.test(t);
  }, "detector");
  var th = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-class-diagram-v4") /*id: 77798*/.then(require.bind(require, "mermaid-diagram-core") /*id: 74065*/);
    return {
      id: tn,
      diagram: t
    };
  }, "loader");
  var tc = {
    id: tn,
    detector: ts,
    loader: th
  };
  var td = "state";
  var tu = loggerLevelUtils.setFunctionName((t, e) => {
    return (e == null ? undefined : e.state?.defaultRenderer) !== "dagre-wrapper" && /^\s*stateDiagram/.test(t);
  }, "detector");
  var tp = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await Promise.all([require.e("graph-layout-engine") /*id: 60274*/, require.e("state-diagram-parser") /*id: 99388*/]).then(require.bind(require, "mermaid-state-diagram-renderer") /*id: 465795*/);
    return {
      id: td,
      diagram: t
    };
  }, "loader");
  var tg = {
    id: td,
    detector: tu,
    loader: tp
  };
  var tf = "stateDiagram";
  var tm = loggerLevelUtils.setFunctionName((t, e) => {
    return !!/^\s*stateDiagram-v2/.test(t) || !!/^\s*stateDiagram/.test(t) && (e == null ? undefined : e.state?.defaultRenderer) === "dagre-wrapper";
  }, "detector");
  var ty = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-state-diagram-renderer-styles") /*id: 91748*/.then(require.bind(require, "mermaid-state-diagram-v2") /*id: 315688*/);
    return {
      id: tf,
      diagram: t
    };
  }, "loader");
  var tx = {
    id: tf,
    detector: tm,
    loader: ty
  };
  var tb = "journey";
  var tC = loggerLevelUtils.setFunctionName(t => /^\s*journey/.test(t), "detector");
  var tv = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("user-journey-diagram") /*id: 16090*/.then(require.bind(require, "mermaid-journey-diagram_1") /*id: 47544*/);
    return {
      id: tb,
      diagram: t
    };
  }, "loader");
  var tk = {
    id: tb,
    detector: tC,
    loader: tv
  };
  var tw = {
    draw: loggerLevelUtils.setFunctionName((t, e, r) => {
      loggerLevelUtils.logger.debug("rendering svg for syntax error\n");
      let i = selectSvgElement.selectSvgElement(e);
      let a = i.append("g");
      i.attr("viewBox", "0 0 2412 512");
      mermaidConfigUtils_1.configureSvgSize(i, 100, 512, true);
      a.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z");
      a.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z");
      a.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z");
      a.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z");
      a.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z");
      a.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z");
      a.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text");
      a.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
    }, "draw")
  };
  var tS = {
    db: {},
    renderer: tw,
    parser: {
      parse: loggerLevelUtils.setFunctionName(() => {}, "parse")
    }
  };
  var tT = "flowchart-elk";
  var tB = loggerLevelUtils.setFunctionName(function (t) {
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (!!/^\s*flowchart-elk/.test(t) || !!/^\s*(flowchart|graph)/.test(t) && (r == null ? undefined : r.flowchart?.defaultRenderer) === "elk") && (r.layout = "elk", true);
  }, "detector");
  var tM = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-flowchart-diagram") /*id: 77528*/.then(require.bind(require, "mermaid-flowchart-parser-renderer-module") /*id: 903652*/);
    return {
      id: tT,
      diagram: t
    };
  }, "loader");
  var tW = {
    id: tT,
    detector: tB,
    loader: tM
  };
  var tL = "timeline";
  var tF = loggerLevelUtils.setFunctionName(t => /^\s*timeline/.test(t), "detector");
  var t_ = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("timeline-chart-renderer") /*id: 23501*/.then(require.bind(require, "mermaid-timeline-diagram-module") /*id: 546590*/);
    return {
      id: tL,
      diagram: t
    };
  }, "loader");
  var tA = {
    id: tL,
    detector: tF,
    loader: t_
  };
  var t$ = "mindmap";
  var tE = loggerLevelUtils.setFunctionName(t => /^\s*mindmap/.test(t), "detector");
  var tZ = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-mindmap-parser") /*id: 91326*/.then(require.bind(require, "mermaid-mindmap-parser-renderer") /*id: 861422*/);
    return {
      id: t$,
      diagram: t
    };
  }, "loader");
  var tO = {
    id: t$,
    detector: tE,
    loader: tZ
  };
  var tD = "kanban";
  var tI = loggerLevelUtils.setFunctionName(t => /^\s*kanban/.test(t), "detector");
  var tq = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("kanban-mindmap-diagram") /*id: 81998*/.then(require.bind(require, "mermaid-kanban-diagram_1") /*id: 139952*/);
    return {
      id: tD,
      diagram: t
    };
  }, "loader");
  var tR = {
    id: tD,
    detector: tI,
    loader: tq
  };
  var tN = "sankey";
  var tP = loggerLevelUtils.setFunctionName(t => /^\s*sankey(-beta)?/.test(t), "detector");
  var tz = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("sankey-diagram") /*id: 1800*/.then(require.bind(require, "mermaid-sankey-diagram-module") /*id: 153170*/);
    return {
      id: tN,
      diagram: t
    };
  }, "loader");
  var tj = {
    id: tN,
    detector: tP,
    loader: tz
  };
  var tH = "packet";
  var tU = loggerLevelUtils.setFunctionName(t => /^\s*packet(-beta)?/.test(t), "detector");
  var tY = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await Promise.all([require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("mermaid-packet-diagram") /*id: 50861*/]).then(require.bind(require, "mermaid-packet-diagram-parser") /*id: 653628*/);
    return {
      id: tH,
      diagram: t
    };
  }, "loader");
  var tG = {
    id: tH,
    detector: tU,
    loader: tY
  };
  var tV = "radar";
  var tX = loggerLevelUtils.setFunctionName(t => /^\s*radar-beta/.test(t), "detector");
  var tQ = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await Promise.all([require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("radar-chart-renderer") /*id: 63809*/]).then(require.bind(require, "mermaid-radar-diagram_1") /*id: 163463*/);
    return {
      id: tV,
      diagram: t
    };
  }, "loader");
  var tJ = {
    id: tV,
    detector: tX,
    loader: tQ
  };
  var tK = "block";
  var t0 = loggerLevelUtils.setFunctionName(t => /^\s*block(-beta)?/.test(t), "detector");
  var t1 = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await require.e("mermaid-block-diagram") /*id: 55285*/.then(require.bind(require, "mermaid-block-diagram-renderer") /*id: 315015*/);
    return {
      id: tK,
      diagram: t
    };
  }, "loader");
  var t2 = {
    id: tK,
    detector: t0,
    loader: t1
  };
  var t5 = "architecture";
  var t3 = loggerLevelUtils.setFunctionName(t => /^\s*architecture/.test(t), "detector");
  var t6 = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await Promise.all([require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("webpack-chunk-cose-layout") /*id: 32838*/, require.e("architecture-diagram-layout") /*id: 17826*/]).then(require.bind(require, "mermaid-architecture-diagram") /*id: 607294*/);
    return {
      id: t5,
      diagram: t
    };
  }, "loader");
  var t4 = {
    id: t5,
    detector: t3,
    loader: t6
  };
  var t8 = "treemap";
  var t9 = loggerLevelUtils.setFunctionName(t => /^\s*treemap/.test(t), "detector");
  var t7 = loggerLevelUtils.setFunctionName(async () => {
    let {
      diagram: t
    } = await Promise.all([require.e("chevrotain-parser-lexer") /*id: 78089*/, require.e("treemap-diagram-renderer") /*id: 41287*/]).then(require.bind(require, "mermaid-treemap-diagram") /*id: 239234*/);
    return {
      id: t8,
      diagram: t
    };
  }, "loader");
  var et = {
    id: t8,
    detector: t9,
    loader: t7
  };
  var ee = false;
  var er = loggerLevelUtils.setFunctionName(() => {
    if (!ee) {
      ee = true;
      mermaidConfigUtils_1.registerDiagram("error", tS, t => t.toLowerCase().trim() === "error");
      mermaidConfigUtils_1.registerDiagram("---", {
        db: {
          clear: loggerLevelUtils.setFunctionName(() => {}, "clear")
        },
        styles: {},
        renderer: {
          draw: loggerLevelUtils.setFunctionName(() => {}, "draw")
        },
        parser: {
          parse: loggerLevelUtils.setFunctionName(() => {
            throw Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
          }, "parse")
        },
        init: loggerLevelUtils.setFunctionName(() => null, "init")
      }, t => t.toLowerCase().trimStart().startsWith("---"));
      mermaidConfigUtils_1.registerLazyDiagrams(tW, tO, t4);
      mermaidConfigUtils_1.registerLazyDiagrams(x, tR, tc, tl, M, Z, q, R, J, tr, B, k, tA, _, tx, tg, tk, j, tj, tG, G, t2, tJ, et);
    }
  }, "addDiagrams");
  var ei = loggerLevelUtils.setFunctionName(async () => {
    loggerLevelUtils.logger.debug("Loading registered diagrams");
    let t = (await Promise.allSettled(Object.entries(mermaidConfigUtils_1.diagramTypeRegistry).map(async t => {
      let [e, {
        detector: r,
        loader: i
      }] = t;
      if (i) {
        try {
          mermaidConfigUtils_1.getDiagram(e);
        } catch {
          try {
            let {
              diagram: t,
              id: e
            } = await i();
            mermaidConfigUtils_1.registerDiagram(e, t, r);
          } catch (t) {
            loggerLevelUtils.logger.error(`Failed to load external diagram with key ${e}. Removing from detectors.`);
            delete mermaidConfigUtils_1.diagramTypeRegistry[e];
            throw t;
          }
        }
      }
    }))).filter(t => t.status === "rejected");
    if (t.length > 0) {
      loggerLevelUtils.logger.error(`Failed to load ${t.length} external diagrams`);
      for (let e of t) {
        loggerLevelUtils.logger.error(e);
      }
      throw Error(`Failed to load ${t.length} external diagrams`);
    }
  }, "loadRegisteredDiagrams");
  function ea(t, e) {
    t.attr("role", "graphics-document document");
    if (e !== "") {
      t.attr("aria-roledescription", e);
    }
  }
  function eo(t, e, r, i) {
    if (t.insert !== undefined) {
      if (r) {
        let e = `chart-desc-${i}`;
        t.attr("aria-describedby", e);
        t.insert("desc", ":first-child").attr("id", e).text(r);
      }
      if (e) {
        let r = `chart-title-${i}`;
        t.attr("aria-labelledby", r);
        t.insert("title", ":first-child").attr("id", r).text(e);
      }
    }
  }
  loggerLevelUtils.setFunctionName(ea, "setA11yDiagramInfo");
  loggerLevelUtils.setFunctionName(eo, "addSVGa11yTitleDescription");
  i = class t {
    static async fromText(e) {
      var r;
      var i;
      let a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let o = mermaidConfigUtils_1.getConfig();
      let l = mermaidConfigUtils_1.detectType(e, o);
      e = mermaidDiagramUtils.encodeEntities(e) + "\n";
      try {
        mermaidConfigUtils_1.getDiagram(l);
      } catch {
        let t = mermaidConfigUtils_1.getDiagramLoader(l);
        if (!t) {
          throw new mermaidConfigUtils_1.UnknownDiagramError(`Diagram ${l} not found.`);
        }
        let {
          id: e,
          diagram: r
        } = await t();
        mermaidConfigUtils_1.registerDiagram(e, r);
      }
      let {
        db: n,
        parser: s,
        renderer: d,
        init: u
      } = mermaidConfigUtils_1.getDiagram(l);
      if (s.parser) {
        s.parser.yy = n;
      }
      if ((r = n.clear) !== null && r !== undefined) {
        r.call(n);
      }
      if (u != null) {
        u(o);
      }
      if (a.title) {
        if ((i = n.setDiagramTitle) !== null && i !== undefined) {
          i.call(n, a.title);
        }
      }
      await s.parse(e);
      return new t(l, e, n, s, d);
    }
    async render(t, e) {
      await this.renderer.draw(this.text, t, e, this);
    }
    getParser() {
      return this.parser;
    }
    getType() {
      return this.type;
    }
    constructor(t, e, r, i, a) {
      this.type = t;
      this.text = e;
      this.db = r;
      this.parser = i;
      this.renderer = a;
    }
  };
  loggerLevelUtils.setFunctionName(i, "Diagram");
  var el = i;
  var en = [];
  var es = loggerLevelUtils.setFunctionName(() => {
    en.forEach(t => {
      t();
    });
    en = [];
  }, "attachFunctions");
  var eh = loggerLevelUtils.setFunctionName(t => t.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
  function ec(t) {
    let r = t.match(mermaidConfigUtils_1.frontmatterRegex);
    if (!r) {
      return {
        text: t,
        metadata: {}
      };
    }
    let i = jsYamlCoreImplementation.load(r[1], {
      schema: jsYamlCoreImplementation.Schema
    }) ?? {};
    i = typeof i != "object" || Array.isArray(i) ? {} : i;
    let a = {};
    if (i.displayMode) {
      a.displayMode = i.displayMode.toString();
    }
    if (i.title) {
      a.title = i.title.toString();
    }
    if (i.config) {
      a.config = i.config;
    }
    return {
      text: t.slice(r[0].length),
      metadata: a
    };
  }
  loggerLevelUtils.setFunctionName(ec, "extractFrontMatter");
  var ed = loggerLevelUtils.setFunctionName(t => t.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (t, e, r) => "<" + e + r.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText");
  var eu = loggerLevelUtils.setFunctionName(t => {
    let {
      text: e,
      metadata: r
    } = ec(t);
    let {
      displayMode: i,
      title: a,
      config: o = {}
    } = r;
    if (i) {
      o.gantt ||= {};
      o.gantt.displayMode = i;
    }
    return {
      title: a,
      config: o,
      text: e
    };
  }, "processFrontmatter");
  var ep = loggerLevelUtils.setFunctionName(t => {
    let r = mermaidDiagramUtils.mermaidUtils.detectInit(t) ?? {};
    let i = mermaidDiagramUtils.mermaidUtils.detectDirective(t, "wrap");
    if (Array.isArray(i)) {
      r.wrap = i.some(t => {
        let {
          type: e
        } = t;
        return e === "wrap";
      });
    } else if ((i == null ? undefined : i.type) === "wrap") {
      r.wrap = true;
    }
    return {
      text: mermaidDiagramUtils.removeDirectives(t),
      directive: r
    };
  }, "processDirectives");
  function eg(t) {
    let e = eu(ed(t));
    let r = ep(e.text);
    let i = mermaidDiagramUtils.cleanAndMerge(e.config, r.directive);
    return {
      code: t = eh(r.text),
      title: e.title,
      config: i
    };
  }
  function ef(t) {
    return btoa(Array.from(new TextEncoder().encode(t), t => String.fromCodePoint(t)).join(""));
  }
  loggerLevelUtils.setFunctionName(eg, "preprocessDiagram");
  loggerLevelUtils.setFunctionName(ef, "toBase64");
  var em = ["foreignobject"];
  var ey = ["dominant-baseline"];
  function ex(t) {
    let r = eg(t);
    mermaidConfigUtils_1.resetConfig();
    mermaidConfigUtils_1.addDirective(r.config ?? {});
    return r;
  }
  async function eb(t, e) {
    er();
    try {
      let {
        code: e,
        config: r
      } = ex(t);
      return {
        diagramType: (await eF(e)).type,
        config: r
      };
    } catch (t) {
      if (e == null ? undefined : e.suppressErrors) {
        return false;
      }
      throw t;
    }
  }
  loggerLevelUtils.setFunctionName(ex, "processAndSetConfigs");
  loggerLevelUtils.setFunctionName(eb, "parse");
  var eC = loggerLevelUtils.setFunctionName(function (t, e, r = []) {
    return `
.${t} ${e} { ${r.join(" !important; ")} !important; }`;
  }, "cssImportantStyles");
  var ev = loggerLevelUtils.setFunctionName(function (t, e = new Map()) {
    let r = "";
    if (t.themeCSS !== undefined) {
      r += `
${t.themeCSS}`;
    }
    if (t.fontFamily !== undefined) {
      r += `
:root { --mermaid-font-family: ${t.fontFamily}}`;
    }
    if (t.altFontFamily !== undefined) {
      r += `
:root { --mermaid-alt-font-family: ${t.altFontFamily}}`;
    }
    if (e instanceof Map) {
      let o = t.htmlLabels ?? t.flowchart?.htmlLabels ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
      e.forEach(t => {
        if (!isEmptyUtil.isEmpty(t.styles)) {
          o.forEach(e => {
            r += eC(t.id, e, t.styles);
          });
        }
        if (!isEmptyUtil.isEmpty(t.textStyles)) {
          r += eC(t.id, "tspan", ((t == null ? undefined : t.textStyles) || []).map(t => t.replace("color", "fill")));
        }
      });
    }
    return r;
  }, "createCssStyles");
  var ek = loggerLevelUtils.setFunctionName((t, e, r, i) => {
    let a = ev(t, r);
    let o = mermaidConfigUtils_1.getStyles(e, a, t.themeVariables);
    return cssSyntaxStringifier.transformNodes(cssParser.parseCss(`${i}{${o}}`), cssSyntaxStringifier.buildCssString);
  }, "createUserStyles");
  var ew = loggerLevelUtils.setFunctionName(function (t = "", e, r) {
    let i = t;
    if (!r && !e) {
      i = i.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#");
    }
    return i = (i = mermaidDiagramUtils.decodeEntities(i)).replace(/<br>/g, "<br/>");
  }, "cleanUpSvgCode");
  var eS = loggerLevelUtils.setFunctionName(function () {
    var e;
    let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let i = arguments.length > 1 ? arguments[1] : undefined;
    let a = (i == null ? undefined : (e = i.viewBox) === null || e === undefined ? undefined : e.baseVal?.height) ? i.viewBox.baseVal.height + "px" : "100%";
    let o = ef(`<body style="margin:0">${r}</body>`);
    return `<iframe style="width:100%;height:${a};border:0;margin:0;" src="data:text/html;charset=UTF-8;base64,${o}" sandbox="allow-top-navigation-by-user-activation allow-popups">
  The "iframe" tag is not supported by your browser.
</iframe>`;
  }, "putIntoIFrame");
  var eT = loggerLevelUtils.setFunctionName((t, e, r, i, a) => {
    let o = t.append("div");
    o.attr("id", r);
    if (i) {
      o.attr("style", i);
    }
    let l = o.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", "http://www.w3.org/2000/svg");
    if (a) {
      l.attr("xmlns:xlink", a);
    }
    l.append("g");
    return t;
  }, "appendDivSvgG");
  function eB(t, e) {
    return t.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
  }
  loggerLevelUtils.setFunctionName(eB, "sandboxedIframe");
  var eM = loggerLevelUtils.setFunctionName((t, e, r, i) => {
    var a;
    var o;
    var l;
    if ((a = t.getElementById(e)) !== null && a !== undefined) {
      a.remove();
    }
    if ((o = t.getElementById(r)) !== null && o !== undefined) {
      o.remove();
    }
    if ((l = t.getElementById(i)) !== null && l !== undefined) {
      l.remove();
    }
  }, "removeExistingElements");
  var eW = loggerLevelUtils.setFunctionName(async function (t, e, r) {
    var i;
    var o;
    var l;
    var n;
    var s;
    var h;
    let g;
    let f;
    er();
    let y = ex(e);
    e = y.code;
    let x = mermaidConfigUtils_1.getConfig();
    loggerLevelUtils.logger.debug(x);
    if (e.length > ((x == null ? undefined : x.maxTextSize) ?? 50000)) {
      e = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
    }
    let b = "#" + t;
    let C = "i" + t;
    let v = "#" + C;
    let k = "d" + t;
    let w = "#" + k;
    let S = loggerLevelUtils.setFunctionName(() => {
      let t = B ? v : w;
      let e = axisAndZoomUtilities.select(t).node();
      if (e && "remove" in e) {
        e.remove();
      }
    }, "removeTempElements");
    let T = axisAndZoomUtilities.select("body");
    let B = x.securityLevel === "sandbox";
    let M = x.securityLevel === "loose";
    let W = x.fontFamily;
    if (r !== undefined) {
      if (r) {
        r.innerHTML = "";
      }
      if (B) {
        let t = eB(axisAndZoomUtilities.select(r), C);
        (T = axisAndZoomUtilities.select(t.nodes()[0].contentDocument.body)).node().style.margin = 0;
      } else {
        T = axisAndZoomUtilities.select(r);
      }
      eT(T, t, k, `font-family: ${W}`, "http://www.w3.org/1999/xlink");
    } else {
      eM(document, t, k, C);
      if (B) {
        let t = eB(axisAndZoomUtilities.select("body"), C);
        (T = axisAndZoomUtilities.select(t.nodes()[0].contentDocument.body)).node().style.margin = 0;
      } else {
        T = axisAndZoomUtilities.select("body");
      }
      eT(T, t, k);
    }
    try {
      g = await el.fromText(e, {
        title: y.title
      });
    } catch (t) {
      if (x.suppressErrorRendering) {
        S();
        throw t;
      }
      g = await el.fromText("error");
      f = t;
    }
    let L = T.select(w).node();
    let F = g.type;
    let _ = L.firstChild;
    let A = _.firstChild;
    let $ = ek(x, F, (i = (o = g.renderer).getClasses) === null || i === undefined ? undefined : i.call(o, e, g), b);
    let E = document.createElement("style");
    E.innerHTML = $;
    _.insertBefore(E, A);
    try {
      await g.renderer.draw(e, t, mermaidPackageJson.mermaidPackage.version, g);
    } catch (r) {
      if (x.suppressErrorRendering) {
        S();
      } else {
        tw.draw(e, t, mermaidPackageJson.mermaidPackage.version);
      }
      throw r;
    }
    let Z = T.select(`${w} svg`);
    e_(F, Z, (l = (n = g.db).getAccTitle) === null || l === undefined ? undefined : l.call(n), (s = (h = g.db).getAccDescription) === null || s === undefined ? undefined : s.call(h));
    T.select(`[id="${t}"]`).selectAll("foreignobject > *").attr("xmlns", "http://www.w3.org/1999/xhtml");
    let O = T.select(w).node().innerHTML;
    loggerLevelUtils.logger.debug("config.arrowMarkerAbsolute", x.arrowMarkerAbsolute);
    O = ew(O, B, mermaidConfigUtils_1.evaluate(x.arrowMarkerAbsolute));
    if (B) {
      O = eS(O, T.select(w + " svg").node());
    } else if (!M) {
      O = dompurifyCore.DOMPurify.sanitize(O, {
        ADD_TAGS: em,
        ADD_ATTR: ey,
        HTML_INTEGRATION_POINTS: {
          foreignobject: true
        }
      });
    }
    es();
    if (f) {
      throw f;
    }
    S();
    return {
      diagramType: F,
      svg: O,
      bindFunctions: g.db.bindFunctions
    };
  }, "render");
  function eL() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let r = mermaidConfigUtils_1.assignWithDepth({}, e);
    if ((r == null ? undefined : r.fontFamily) && !r.themeVariables?.fontFamily) {
      r.themeVariables ||= {};
      r.themeVariables.fontFamily = r.fontFamily;
    }
    mermaidConfigUtils_1.saveInitConfig(r);
    if ((r == null ? undefined : r.theme) && r.theme in mermaidConfigUtils_1.themeDefinitions) {
      r.themeVariables = mermaidConfigUtils_1.themeDefinitions[r.theme].getThemeVariables(r.themeVariables);
    } else if (r) {
      r.themeVariables = mermaidConfigUtils_1.themeDefinitions.default.getThemeVariables(r.themeVariables);
    }
    let i = typeof r == "object" ? mermaidConfigUtils_1.setSiteConfig(r) : mermaidConfigUtils_1.getSiteConfig();
    loggerLevelUtils.setLogLevel(i.logLevel);
    er();
  }
  loggerLevelUtils.setFunctionName(eL, "initialize");
  var eF = loggerLevelUtils.setFunctionName(function (t, e = {}) {
    let {
      code: r
    } = eg(t);
    return el.fromText(r, e);
  }, "getDiagramFromText");
  function e_(t, e, r, i) {
    ea(e, t);
    eo(e, r, i, e.attr("id"));
  }
  loggerLevelUtils.setFunctionName(e_, "addA11yInfo");
  var eA = Object.freeze({
    render: eW,
    parse: eb,
    getDiagramFromText: eF,
    initialize: eL,
    getConfig: mermaidConfigUtils_1.getConfig,
    setConfig: mermaidConfigUtils_1.setConfigAlias,
    getSiteConfig: mermaidConfigUtils_1.getSiteConfig,
    updateSiteConfig: mermaidConfigUtils_1.updateSiteConfig,
    reset: loggerLevelUtils.setFunctionName(() => {
      mermaidConfigUtils_1.resetConfig();
    }, "reset"),
    globalReset: loggerLevelUtils.setFunctionName(() => {
      mermaidConfigUtils_1.resetConfig(mermaidConfigUtils_1.frozenDefaultConfig);
    }, "globalReset"),
    defaultConfig: mermaidConfigUtils_1.frozenDefaultConfig
  });
  loggerLevelUtils.setLogLevel(mermaidConfigUtils_1.getConfig().logLevel);
  mermaidConfigUtils_1.resetConfig(mermaidConfigUtils_1.getConfig());
  var e$ = loggerLevelUtils.setFunctionName((t, e, r) => {
    loggerLevelUtils.logger.warn(t);
    if (mermaidDiagramUtils.isDetailedError(t)) {
      if (r) {
        r(t.str, t.hash);
      }
      e.push({
        ...t,
        message: t.str,
        error: t
      });
    } else {
      if (r) {
        r(t);
      }
      if (t instanceof Error) {
        e.push({
          str: t.message,
          message: t.message,
          hash: t.name,
          error: t
        });
      }
    }
  }, "handleError");
  var eE = loggerLevelUtils.setFunctionName(async function (t = {
    querySelector: ".mermaid"
  }) {
    try {
      await eZ(t);
    } catch (e) {
      if (mermaidDiagramUtils.isDetailedError(e)) {
        loggerLevelUtils.logger.error(e.str);
      }
      if (eY.parseError) {
        eY.parseError(e);
      }
      if (!t.suppressErrors) {
        loggerLevelUtils.logger.error("Use the suppressErrors option to suppress these errors");
        throw e;
      }
    }
  }, "run");
  var eZ = loggerLevelUtils.setFunctionName(async function () {
    let t;
    let e;
    let {
      postRenderCallback: r,
      querySelector: i,
      nodes: a
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      querySelector: ".mermaid"
    };
    let o = eA.getConfig();
    loggerLevelUtils.logger.debug(`${r ? "" : "No "}Callback function found`);
    if (a) {
      t = a;
    } else if (i) {
      t = document.querySelectorAll(i);
    } else {
      throw Error("Nodes and querySelector are both undefined");
    }
    loggerLevelUtils.logger.debug(`Found ${t.length} diagrams`);
    if ((o == null ? undefined : o.startOnLoad) !== undefined) {
      loggerLevelUtils.logger.debug("Start On Load: " + (o == null ? undefined : o.startOnLoad));
      eA.updateSiteConfig({
        startOnLoad: o == null ? undefined : o.startOnLoad
      });
    }
    let l = new mermaidDiagramUtils.mermaidUtils.InitIDGenerator(o.deterministicIds, o.deterministicIDSeed);
    let n = [];
    for (let i of Array.from(t)) {
      loggerLevelUtils.logger.info("Rendering diagram: " + i.id);
      if (i.getAttribute("data-processed")) {
        continue;
      }
      i.setAttribute("data-processed", "true");
      let t = `mermaid-${l.next()}`;
      e = i.innerHTML;
      e = dedentTemplateString.dedent(mermaidDiagramUtils.mermaidUtils.entityDecode(e)).trim().replace(/<br\s*\/?>/gi, "<br/>");
      let a = mermaidDiagramUtils.mermaidUtils.detectInit(e);
      if (a) {
        loggerLevelUtils.logger.debug("Detected early reinit: ", a);
      }
      try {
        let {
          svg: a,
          bindFunctions: o
        } = await eH(t, e, i);
        i.innerHTML = a;
        if (r) {
          await r(t);
        }
        if (o) {
          o(i);
        }
      } catch (t) {
        e$(t, n, eY.parseError);
      }
    }
    if (n.length > 0) {
      throw n[0];
    }
  }, "runThrowsErrors");
  var eO = loggerLevelUtils.setFunctionName(function (t) {
    eA.initialize(t);
  }, "initialize");
  var eD = loggerLevelUtils.setFunctionName(async function (t, e, r) {
    loggerLevelUtils.logger.warn("mermaid.init is deprecated. Please use run instead.");
    if (t) {
      eO(t);
    }
    let i = {
      postRenderCallback: r,
      querySelector: ".mermaid"
    };
    if (typeof e == "string") {
      i.querySelector = e;
    } else if (e) {
      if (e instanceof HTMLElement) {
        i.nodes = [e];
      } else {
        i.nodes = e;
      }
    }
    await eE(i);
  }, "init");
  var eI = loggerLevelUtils.setFunctionName(async function (t, {
    lazyLoad: e = true
  } = {}) {
    er();
    mermaidConfigUtils_1.registerLazyDiagrams(...t);
    if (e === false) {
      await ei();
    }
  }, "registerExternalDiagrams");
  var eq = loggerLevelUtils.setFunctionName(function () {
    if (eY.startOnLoad) {
      let {
        startOnLoad: t
      } = eA.getConfig();
      if (t) {
        eY.run().catch(t => loggerLevelUtils.logger.error("Mermaid failed to initialize", t));
      }
    }
  }, "contentLoaded");
  if (typeof document != "undefined") {
    window.addEventListener("load", eq, false);
  }
  var eR = loggerLevelUtils.setFunctionName(function (t) {
    eY.parseError = t;
  }, "setParseErrorHandler");
  var eN = [];
  var eP = false;
  var ez = loggerLevelUtils.setFunctionName(async () => {
    if (!eP) {
      for (eP = true; eN.length > 0;) {
        let t = eN.shift();
        if (t) {
          try {
            await t();
          } catch (t) {
            loggerLevelUtils.logger.error("Error executing queue", t);
          }
        }
      }
      eP = false;
    }
  }, "executeQueue");
  var ej = loggerLevelUtils.setFunctionName(async (t, e) => new Promise((r, i) => {
    let a = loggerLevelUtils.setFunctionName(() => new Promise((a, o) => {
      eA.parse(t, e).then(t => {
        a(t);
        r(t);
      }, t => {
        var e;
        loggerLevelUtils.logger.error("Error parsing", t);
        if ((e = eY.parseError) !== null && e !== undefined) {
          e.call(eY, t);
        }
        o(t);
        i(t);
      });
    }), "performCall");
    eN.push(a);
    ez().catch(i);
  }), "parse");
  var eH = loggerLevelUtils.setFunctionName((t, e, r) => new Promise((i, a) => {
    let o = loggerLevelUtils.setFunctionName(() => new Promise((o, l) => {
      eA.render(t, e, r).then(t => {
        o(t);
        i(t);
      }, t => {
        var e;
        loggerLevelUtils.logger.error("Error parsing", t);
        if ((e = eY.parseError) !== null && e !== undefined) {
          e.call(eY, t);
        }
        l(t);
        a(t);
      });
    }), "performCall");
    eN.push(o);
    ez().catch(a);
  }), "render");
  var eU = loggerLevelUtils.setFunctionName(() => Object.keys(mermaidConfigUtils_1.diagramTypeRegistry).map(t => ({
    id: t
  })), "getRegisteredDiagramsMetadata");
  var eY = {
    startOnLoad: true,
    mermaidAPI: eA,
    parse: ej,
    render: eH,
    init: eD,
    run: eE,
    registerExternalDiagrams: eI,
    registerLayoutLoaders: mermaidLayoutRegistryRenderer.registerLayoutLoaders,
    initialize: eO,
    parseError: undefined,
    contentLoaded: eq,
    setParseErrorHandler: eR,
    detectType: mermaidConfigUtils_1.detectType,
    registerIconPacks: iconUtilsTextRendering.registerIconPacks,
    getRegisteredDiagramsMetadata: eU
  };
  var eG = eY;
  require.d(exports, {
    mermaid: function () {
      return eG;
    }
  });
}