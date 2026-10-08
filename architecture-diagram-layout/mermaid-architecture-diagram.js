// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'selectSvgElement'
// - Resolved require(840584) to 'select-svg-element'
// - Renamed variable 'o' to 'iconUtilsTextRendering'
// - Resolved require(990626) to 'icon-utils-text-rendering'
// - Renamed variable 'a' to 'populateCommonDb'
// - Resolved require(521289) to 'populate-common-db'
// - Renamed variable 's' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'l' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'd' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'c' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Renamed variable 'f' to 'cytoscapeCoreModule'
// - Resolved require(305745) to 'cytoscape-core-module'
// - Renamed variable 'u' to 'cytoscapeFcoseLayout'
// - Resolved require(754977) to 'cytoscape-fcose-layout'
// - Renamed variable 'g' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'vZ' to 'defaultConfig' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'iE' to 'getConfig' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'oO' to 'sanitizeText' (module 401926)
// - Updated imported property 'j7' to 'setupViewbox' (module 401926)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 583673)
// - Updated imported property 'Ln' to 'getEdgeId' (module 583673)
// - Updated imported property 'A' to 'populateCommonDb' (module 521289)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'cN' to 'iconDataPlaceholder' (module 990626)
// - Updated imported property 'rw' to 'createText' (module 990626)
// - Updated imported property 's4' to 'getIconSVG' (module 990626)
// - Updated imported property 'ef' to 'registerIconPacks' (module 990626)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'Z' to 'Cytoscape' (module 305745)
// - Updated imported property 'P' to 'selectSvgElement' (module 840584)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17826.af03783e.js
         * chunkId: 17826
         * moduleId: 607294
         */
module.exports = function (module, exports, require) {
  var n;
  var selectSvgElement = require("select-svg-element") /*id: 840584*/;
  var iconUtilsTextRendering = require("icon-utils-text-rendering") /*id: 990626*/;
  var populateCommonDb = require("populate-common-db") /*id: 521289*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var cytoscapeCoreModule = require("cytoscape-core-module") /*id: 305745*/;
  var cytoscapeFcoseLayout = require("cytoscape-fcose-layout") /*id: 754977*/;
  var h = cytoscapeFcoseLayout;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var p = {
    L: "left",
    R: "right",
    T: "top",
    B: "bottom"
  };
  var y = {
    L: loggerLevelUtils.setFunctionName(e => `${e},${e / 2} 0,${e} 0,0`, "L"),
    R: loggerLevelUtils.setFunctionName(e => `0,${e / 2} ${e},0 ${e},${e}`, "R"),
    T: loggerLevelUtils.setFunctionName(e => `0,0 ${e},0 ${e / 2},${e}`, "T"),
    B: loggerLevelUtils.setFunctionName(e => `${e / 2},0 ${e},${e} 0,${e}`, "B")
  };
  var m = {
    L: loggerLevelUtils.setFunctionName((e, t) => e - t + 2, "L"),
    R: loggerLevelUtils.setFunctionName((e, t) => e - 2, "R"),
    T: loggerLevelUtils.setFunctionName((e, t) => e - t + 2, "T"),
    B: loggerLevelUtils.setFunctionName((e, t) => e - 2, "B")
  };
  var v = loggerLevelUtils.setFunctionName(function (e) {
    if (x(e)) {
      if (e === "L") {
        return "R";
      } else {
        return "L";
      }
    } else if (e === "T") {
      return "B";
    } else {
      return "T";
    }
  }, "getOppositeArchitectureDirection");
  var E = loggerLevelUtils.setFunctionName(function (e) {
    return e === "L" || e === "R" || e === "T" || e === "B";
  }, "isArchitectureDirection");
  var x = loggerLevelUtils.setFunctionName(function (e) {
    return e === "L" || e === "R";
  }, "isArchitectureDirectionX");
  var C = loggerLevelUtils.setFunctionName(function (e) {
    return e === "T" || e === "B";
  }, "isArchitectureDirectionY");
  var T = loggerLevelUtils.setFunctionName(function (e, t) {
    let i = x(e) && C(t);
    let n = C(e) && x(t);
    return i || n;
  }, "isArchitectureDirectionXY");
  var N = loggerLevelUtils.setFunctionName(function (e) {
    let t = e[0];
    let i = e[1];
    let n = x(t) && C(i);
    let r = C(t) && x(i);
    return n || r;
  }, "isArchitecturePairXY");
  var w = loggerLevelUtils.setFunctionName(function (e) {
    return e !== "LL" && e !== "RR" && e !== "TT" && e !== "BB";
  }, "isValidArchitectureDirectionPair");
  var b = loggerLevelUtils.setFunctionName(function (e, t) {
    let i = `${e}${t}`;
    if (w(i)) {
      return i;
    } else {
      return undefined;
    }
  }, "getArchitectureDirectionPair");
  var L = loggerLevelUtils.setFunctionName(function (e, t) {
    let [i, n] = e;
    let r = t[0];
    let o = t[1];
    if (x(r)) {
      if (C(o)) {
        return [i + (r === "L" ? -1 : 1), n + (o === "T" ? 1 : -1)];
      } else {
        return [i + (r === "L" ? -1 : 1), n];
      }
    } else if (x(o)) {
      return [i + (o === "L" ? 1 : -1), n + (r === "T" ? 1 : -1)];
    } else {
      return [i, n + (r === "T" ? 1 : -1)];
    }
  }, "shiftPositionByArchitectureDirectionPair");
  var A = loggerLevelUtils.setFunctionName(function (e) {
    if (e === "LT" || e === "TL") {
      return [1, 1];
    } else if (e === "BL" || e === "LB") {
      return [1, -1];
    } else if (e === "BR" || e === "RB") {
      return [-1, -1];
    } else {
      return [-1, 1];
    }
  }, "getArchitectureDirectionXYFactors");
  var I = loggerLevelUtils.setFunctionName(function (e, t) {
    if (T(e, t)) {
      return "bend";
    } else if (x(e)) {
      return "horizontal";
    } else {
      return "vertical";
    }
  }, "getArchitectureDirectionAlignment");
  var _ = loggerLevelUtils.setFunctionName(function (e) {
    return e.type === "service";
  }, "isArchitectureService");
  var k = loggerLevelUtils.setFunctionName(function (e) {
    return e.type === "junction";
  }, "isArchitectureJunction");
  var D = loggerLevelUtils.setFunctionName(e => e.data(), "edgeData");
  var R = loggerLevelUtils.setFunctionName(e => e.data(), "nodeData");
  var O = mermaidConfigUtils_1.defaultConfig.architecture;
  n = class {
    clear() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.dataStructures = undefined;
      this.elements = {};
      mermaidConfigUtils_1.clearCommonDb();
    }
    addService(e) {
      let {
        id: t,
        icon: i,
        in: n,
        title: r,
        iconText: o
      } = e;
      if (this.registeredIds[t] !== undefined) {
        throw Error(`The service id [${t}] is already in use by another ${this.registeredIds[t]}`);
      }
      if (n !== undefined) {
        if (t === n) {
          throw Error(`The service [${t}] cannot be placed within itself`);
        }
        if (this.registeredIds[n] === undefined) {
          throw Error(`The service [${t}]'s parent does not exist. Please make sure the parent is created before this service`);
        }
        if (this.registeredIds[n] === "node") {
          throw Error(`The service [${t}]'s parent is not a group`);
        }
      }
      this.registeredIds[t] = "node";
      this.nodes[t] = {
        id: t,
        type: "service",
        icon: i,
        iconText: o,
        title: r,
        edges: [],
        in: n
      };
    }
    getServices() {
      return Object.values(this.nodes).filter(_);
    }
    addJunction(e) {
      let {
        id: t,
        in: i
      } = e;
      this.registeredIds[t] = "node";
      this.nodes[t] = {
        id: t,
        type: "junction",
        edges: [],
        in: i
      };
    }
    getJunctions() {
      return Object.values(this.nodes).filter(k);
    }
    getNodes() {
      return Object.values(this.nodes);
    }
    getNode(e) {
      return this.nodes[e] ?? null;
    }
    addGroup(e) {
      let {
        id: r,
        icon: o,
        in: a,
        title: s
      } = e;
      if (this.registeredIds?.[r] !== undefined) {
        throw Error(`The group id [${r}] is already in use by another ${this.registeredIds[r]}`);
      }
      if (a !== undefined) {
        if (r === a) {
          throw Error(`The group [${r}] cannot be placed within itself`);
        }
        if (this.registeredIds?.[a] === undefined) {
          throw Error(`The group [${r}]'s parent does not exist. Please make sure the parent is created before this group`);
        }
        if (this.registeredIds?.[a] === "node") {
          throw Error(`The group [${r}]'s parent is not a group`);
        }
      }
      this.registeredIds[r] = "group";
      this.groups[r] = {
        id: r,
        icon: o,
        title: s,
        in: a
      };
    }
    getGroups() {
      return Object.values(this.groups);
    }
    addEdge(e) {
      let {
        lhsId: t,
        rhsId: i,
        lhsDir: n,
        rhsDir: r,
        lhsInto: o,
        rhsInto: a,
        lhsGroup: s,
        rhsGroup: l,
        title: d
      } = e;
      if (!E(n)) {
        throw Error(`Invalid direction given for left hand side of edge ${t}--${i}. Expected (L,R,T,B) got ${String(n)}`);
      }
      if (!E(r)) {
        throw Error(`Invalid direction given for right hand side of edge ${t}--${i}. Expected (L,R,T,B) got ${String(r)}`);
      }
      if (this.nodes[t] === undefined && this.groups[t] === undefined) {
        throw Error(`The left-hand id [${t}] does not yet exist. Please create the service/group before declaring an edge to it.`);
      }
      if (this.nodes[i] === undefined && this.groups[i] === undefined) {
        throw Error(`The right-hand id [${i}] does not yet exist. Please create the service/group before declaring an edge to it.`);
      }
      let c = this.nodes[t].in;
      let f = this.nodes[i].in;
      if (s && c && f && c == f) {
        throw Error(`The left-hand id [${t}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
      }
      if (l && c && f && c == f) {
        throw Error(`The right-hand id [${i}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
      }
      this.edges.push({
        lhsId: t,
        lhsDir: n,
        lhsInto: o,
        lhsGroup: s,
        rhsId: i,
        rhsDir: r,
        rhsInto: a,
        rhsGroup: l,
        title: d
      });
      if (this.nodes[t] && this.nodes[i]) {
        this.nodes[t].edges.push(this.edges[this.edges.length - 1]);
        this.nodes[i].edges.push(this.edges[this.edges.length - 1]);
      }
    }
    getEdges() {
      return this.edges;
    }
    getDataStructures() {
      if (this.dataStructures === undefined) {
        let e = {};
        let t = Object.entries(this.nodes).reduce((t, i) => {
          let [n, r] = i;
          t[n] = r.edges.reduce((t, i) => {
            var a;
            var s;
            let l = this.getNode(i.lhsId)?.in;
            let d = this.getNode(i.rhsId)?.in;
            if (l && d && l !== d) {
              let t = I(i.lhsDir, i.rhsDir);
              if (t !== "bend") {
                if ((a = e[l]) === null || a === undefined) {
                  e[l] = {};
                }
                e[l][d] = t;
                if ((s = e[d]) === null || s === undefined) {
                  e[d] = {};
                }
                e[d][l] = t;
              }
            }
            if (i.lhsId === n) {
              let e = b(i.lhsDir, i.rhsDir);
              if (e) {
                t[e] = i.rhsId;
              }
            } else {
              let e = b(i.rhsDir, i.lhsDir);
              if (e) {
                t[e] = i.lhsId;
              }
            }
            return t;
          }, {});
          return t;
        }, {});
        let i = Object.keys(t)[0];
        let n = {
          [i]: 1
        };
        let r = Object.keys(t).reduce((e, t) => t === i ? e : {
          ...e,
          [t]: 1
        }, {});
        let o = loggerLevelUtils.setFunctionName(e => {
          let i = {
            [e]: [0, 0]
          };
          let o = [e];
          while (o.length > 0) {
            let e = o.shift();
            if (e) {
              n[e] = 1;
              delete r[e];
              let a = t[e];
              let [s, l] = i[e];
              Object.entries(a).forEach(e => {
                let [t, r] = e;
                if (!n[r]) {
                  i[r] = L([s, l], t);
                  o.push(r);
                }
              });
            }
          }
          return i;
        }, "BFS");
        let a = [o(i)];
        while (Object.keys(r).length > 0) {
          a.push(o(Object.keys(r)[0]));
        }
        this.dataStructures = {
          adjList: t,
          spatialMaps: a,
          groupAlignments: e
        };
      }
      return this.dataStructures;
    }
    setElementForId(e, t) {
      this.elements[e] = t;
    }
    getElementById(e) {
      return this.elements[e];
    }
    getConfig() {
      return mermaidDiagramUtils.cleanAndMerge({
        ...O,
        ...mermaidConfigUtils_1.getConfig().architecture
      });
    }
    getConfigField(e) {
      return this.getConfig()[e];
    }
    constructor() {
      this.nodes = {};
      this.groups = {};
      this.edges = [];
      this.registeredIds = {};
      this.elements = {};
      this.setAccTitle = mermaidConfigUtils_1.setAccTitle;
      this.getAccTitle = mermaidConfigUtils_1.getAccTitle;
      this.setDiagramTitle = mermaidConfigUtils_1.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils_1.getDiagramTitle;
      this.getAccDescription = mermaidConfigUtils_1.getAccDescription;
      this.setAccDescription = mermaidConfigUtils_1.setAccDescription;
      this.clear();
    }
  };
  loggerLevelUtils.setFunctionName(n, "ArchitectureDB");
  var S = n;
  var F = loggerLevelUtils.setFunctionName((e, t) => {
    populateCommonDb.populateCommonDb(e, t);
    e.groups.map(e => t.addGroup(e));
    e.services.map(e => t.addService({
      ...e,
      type: "service"
    }));
    e.junctions.map(e => t.addJunction({
      ...e,
      type: "junction"
    }));
    e.edges.map(e => t.addEdge(e));
  }, "populateDb");
  var M = {
    parser: {
      yy: undefined
    },
    parse: loggerLevelUtils.setFunctionName(async e => {
      let i = await mermaidDiagramParserFactory.parseDiagram("architecture", e);
      loggerLevelUtils.logger.debug(i);
      let n = M.parser?.yy;
      if (!(n instanceof S)) {
        throw Error("parser.parser?.yy was not a ArchitectureDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
      }
      F(i, n);
    }, "parse")
  };
  var P = loggerLevelUtils.setFunctionName(e => `
  .edge {
    stroke-width: ${e.archEdgeWidth};
    stroke: ${e.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${e.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${e.archGroupBorderColor};
    stroke-width: ${e.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, "getStyles");
  var $ = loggerLevelUtils.setFunctionName(e => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${e}</g>`, "wrapIcon");
  var B = {
    prefix: "mermaid-architecture",
    height: 80,
    width: 80,
    icons: {
      database: {
        body: $("<path id=\"b\" data-name=\"4\" d=\"m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path id=\"c\" data-name=\"3\" d=\"m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path id=\"d\" data-name=\"2\" d=\"m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse id=\"e\" data-name=\"1\" cx=\"40\" cy=\"22.14\" rx=\"20\" ry=\"7.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"20\" y1=\"57.86\" x2=\"20\" y2=\"22.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"60\" y1=\"57.86\" x2=\"60\" y2=\"22.14\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>")
      },
      server: {
        body: $("<rect x=\"17.5\" y=\"17.5\" width=\"45\" height=\"45\" rx=\"2\" ry=\"2\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"32.5\" x2=\"62.5\" y2=\"32.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"47.5\" x2=\"62.5\" y2=\"47.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><g><path d=\"m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><path d=\"m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><path d=\"m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: #fff; stroke-width: 0px;\"/><path d=\"m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"25\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"40\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g><g><circle cx=\"32.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"27.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/><circle cx=\"22.5\" cy=\"55\" r=\".75\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10;\"/></g>")
      },
      disk: {
        body: $("<rect x=\"20\" y=\"15\" width=\"40\" height=\"50\" rx=\"1\" ry=\"1\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"24\" cy=\"19.17\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"56\" cy=\"19.17\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"24\" cy=\"60.83\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"56\" cy=\"60.83\" rx=\".8\" ry=\".83\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"40\" cy=\"33.75\" rx=\"14\" ry=\"14.58\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><ellipse cx=\"40\" cy=\"33.75\" rx=\"4\" ry=\"4.17\" style=\"fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z\" style=\"fill: #fff; stroke-width: 0px;\"/>")
      },
      internet: {
        body: $("<circle cx=\"40\" cy=\"40\" r=\"22.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"40\" y1=\"17.5\" x2=\"40\" y2=\"62.5\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"17.5\" y1=\"40\" x2=\"62.5\" y2=\"40\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><path d=\"m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"19.75\" y1=\"30.1\" x2=\"60.25\" y2=\"30.1\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/><line x1=\"19.75\" y1=\"49.9\" x2=\"60.25\" y2=\"49.9\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>")
      },
      cloud: {
        body: $("<path d=\"m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z\" style=\"fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;\"/>")
      },
      unknown: iconUtilsTextRendering.iconDataPlaceholder,
      blank: {
        body: $("")
      }
    }
  };
  var G = loggerLevelUtils.setFunctionName(async function (e, t, i) {
    let n = i.getConfigField("padding");
    let r = i.getConfigField("iconSize");
    let a = r / 2;
    let d = r / 6;
    let c = d / 2;
    await Promise.all(t.edges().map(async t => {
      let {
        source: u,
        sourceDir: h,
        sourceArrow: g,
        sourceGroup: p,
        target: v,
        targetDir: E,
        targetArrow: w,
        targetGroup: L,
        label: I
      } = D(t);
      let {
        x: _,
        y: k
      } = t[0].sourceEndpoint();
      let {
        x: R,
        y: O
      } = t[0].midpoint();
      let {
        x: S,
        y: F
      } = t[0].targetEndpoint();
      let M = n + 4;
      if (p) {
        if (x(h)) {
          _ += h === "L" ? -M : M;
        } else {
          k += h === "T" ? -M : M + 18;
        }
      }
      if (L) {
        if (x(E)) {
          S += E === "L" ? -M : M;
        } else {
          F += E === "T" ? -M : M + 18;
        }
      }
      if (!p && i.getNode(u)?.type === "junction") {
        if (x(h)) {
          _ += h === "L" ? a : -a;
        } else {
          k += h === "T" ? a : -a;
        }
      }
      if (!L && i.getNode(v)?.type === "junction") {
        if (x(E)) {
          S += E === "L" ? a : -a;
        } else {
          F += E === "T" ? a : -a;
        }
      }
      if (t[0]._private.rscratch) {
        let t = e.insert("g");
        t.insert("path").attr("d", `M ${_},${k} L ${R},${O} L${S},${F} `).attr("class", "edge").attr("id", mermaidDiagramUtils.getEdgeId(u, v, {
          prefix: "L"
        }));
        if (g) {
          let e = x(h) ? m[h](_, d) : _ - c;
          let i = C(h) ? m[h](k, d) : k - c;
          t.insert("polygon").attr("points", y[h](d)).attr("transform", `translate(${e},${i})`).attr("class", "arrow");
        }
        if (w) {
          let e = x(E) ? m[E](S, d) : S - c;
          let i = C(E) ? m[E](F, d) : F - c;
          t.insert("polygon").attr("points", y[E](d)).attr("transform", `translate(${e},${i})`).attr("class", "arrow");
        }
        if (I) {
          let e = T(h, E) ? "XY" : x(h) ? "X" : "Y";
          let i = 0;
          i = e === "X" ? Math.abs(_ - S) : e === "Y" ? Math.abs(k - F) / 1.5 : Math.abs(_ - S) / 2;
          let n = t.append("g");
          await iconUtilsTextRendering.createText(n, I, {
            useHtmlLabels: false,
            width: i,
            classes: "architecture-service-label"
          }, mermaidConfigUtils_1.getConfigAlias());
          n.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
          if (e === "X") {
            n.attr("transform", "translate(" + R + ", " + O + ")");
          } else if (e === "Y") {
            n.attr("transform", "translate(" + R + ", " + O + ") rotate(-90)");
          } else if (e === "XY") {
            let e = b(h, E);
            if (e && N(e)) {
              let t = n.node().getBoundingClientRect();
              let [i, r] = A(e);
              n.attr("dominant-baseline", "auto").attr("transform", `rotate(${i * -1 * r * 45})`);
              let o = n.node().getBoundingClientRect();
              n.attr("transform", `
                translate(${R}, ${O - t.height / 2})
                translate(${i * o.width / 2}, ${r * o.height / 2})
                rotate(${i * -1 * r * 45}, 0, ${t.height / 2})
              `);
            }
          }
        }
      }
    }));
  }, "drawEdges");
  var W = loggerLevelUtils.setFunctionName(async function (e, t, i) {
    let n = i.getConfigField("padding") * 0.75;
    let r = i.getConfigField("fontSize");
    let a = i.getConfigField("iconSize") / 2;
    await Promise.all(t.nodes().map(async t => {
      let s = R(t);
      if (s.type === "group") {
        let {
          h: d,
          w: c,
          x1: f,
          y1: u
        } = t.boundingBox();
        let h = e.append("rect");
        h.attr("id", `group-${s.id}`).attr("x", f + a).attr("y", u + a).attr("width", c).attr("height", d).attr("class", "node-bkg");
        let g = e.append("g");
        let p = f;
        let y = u;
        if (s.icon) {
          let e = g.append("g");
          e.html(`<g>${await iconUtilsTextRendering.getIconSVG(s.icon, {
            height: n,
            width: n,
            fallbackPrefix: B.prefix
          })}</g>`);
          e.attr("transform", "translate(" + (p + a + 1) + ", " + (y + a + 1) + ")");
          p += n;
          y += r / 2 - 1 - 2;
        }
        if (s.label) {
          let e = g.append("g");
          await iconUtilsTextRendering.createText(e, s.label, {
            useHtmlLabels: false,
            width: c,
            classes: "architecture-service-label"
          }, mermaidConfigUtils_1.getConfigAlias());
          e.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start");
          e.attr("transform", "translate(" + (p + a + 4) + ", " + (y + a + 2) + ")");
        }
        i.setElementForId(s.id, h);
      }
    }));
  }, "drawGroups");
  var U = loggerLevelUtils.setFunctionName(async function (e, t, i) {
    let n = mermaidConfigUtils_1.getConfigAlias();
    for (let a of i) {
      let i = t.append("g");
      let s = e.getConfigField("iconSize");
      if (a.title) {
        let e = i.append("g");
        await iconUtilsTextRendering.createText(e, a.title, {
          useHtmlLabels: false,
          width: s * 1.5,
          classes: "architecture-service-label"
        }, n);
        e.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
        e.attr("transform", "translate(" + s / 2 + ", " + s + ")");
      }
      let d = i.append("g");
      if (a.icon) {
        d.html(`<g>${await iconUtilsTextRendering.getIconSVG(a.icon, {
          height: s,
          width: s,
          fallbackPrefix: B.prefix
        })}</g>`);
      } else if (a.iconText) {
        d.html(`<g>${await iconUtilsTextRendering.getIconSVG("blank", {
          height: s,
          width: s,
          fallbackPrefix: B.prefix
        })}</g>`);
        let e = d.append("g").append("foreignObject").attr("width", s).attr("height", s).append("div").attr("class", "node-icon-text").attr("style", `height: ${s}px;`).append("div").html(mermaidConfigUtils_1.sanitizeText(a.iconText, n));
        let t = parseInt(window.getComputedStyle(e.node(), null).getPropertyValue("font-size").replace(/\D/g, "")) ?? 16;
        e.attr("style", `-webkit-line-clamp: ${Math.floor((s - 2) / t)};`);
      } else {
        d.append("path").attr("class", "node-bkg").attr("id", "node-" + a.id).attr("d", `M0 ${s} v${-s} q0,-5 5,-5 h${s} q5,0 5,5 v${s} H0 Z`);
      }
      i.attr("id", `service-${a.id}`).attr("class", "architecture-service");
      let {
        width: c,
        height: f
      } = i.node().getBBox();
      a.width = c;
      a.height = f;
      e.setElementForId(a.id, i);
    }
    return 0;
  }, "drawServices");
  var z = loggerLevelUtils.setFunctionName(function (e, t, i) {
    i.forEach(i => {
      let n = t.append("g");
      let r = e.getConfigField("iconSize");
      n.append("g").append("rect").attr("id", "node-" + i.id).attr("fill-opacity", "0").attr("width", r).attr("height", r);
      n.attr("class", "architecture-junction");
      let {
        width: o,
        height: a
      } = n._groups[0][0].getBBox();
      n.width = o;
      n.height = a;
      e.setElementForId(i.id, n);
    });
  }, "drawJunctions");
  function Y(e, t, i) {
    e.forEach(e => {
      t.add({
        group: "nodes",
        data: {
          type: "service",
          id: e.id,
          icon: e.icon,
          label: e.title,
          parent: e.in,
          width: i.getConfigField("iconSize"),
          height: i.getConfigField("iconSize")
        },
        classes: "node-service"
      });
    });
  }
  function j(e, t, i) {
    e.forEach(e => {
      t.add({
        group: "nodes",
        data: {
          type: "junction",
          id: e.id,
          parent: e.in,
          width: i.getConfigField("iconSize"),
          height: i.getConfigField("iconSize")
        },
        classes: "node-junction"
      });
    });
  }
  function H(e, t) {
    t.nodes().map(t => {
      let i = R(t);
      if (i.type !== "group") {
        i.x = t.position().x;
        i.y = t.position().y;
        e.getElementById(i.id).attr("transform", "translate(" + (i.x || 0) + "," + (i.y || 0) + ")");
      }
    });
  }
  function Z(e, t) {
    e.forEach(e => {
      t.add({
        group: "nodes",
        data: {
          type: "group",
          id: e.id,
          icon: e.icon,
          label: e.title,
          parent: e.in
        },
        classes: "node-group"
      });
    });
  }
  function V(e, t) {
    e.forEach(e => {
      let {
        lhsId: i,
        rhsId: n,
        lhsInto: r,
        lhsGroup: o,
        rhsInto: a,
        lhsDir: s,
        rhsDir: l,
        rhsGroup: d,
        title: c
      } = e;
      let f = T(e.lhsDir, e.rhsDir) ? "segments" : "straight";
      let u = {
        id: `${i}-${n}`,
        label: c,
        source: i,
        sourceDir: s,
        sourceArrow: r,
        sourceGroup: o,
        sourceEndpoint: s === "L" ? "0 50%" : s === "R" ? "100% 50%" : s === "T" ? "50% 0" : "50% 100%",
        target: n,
        targetDir: l,
        targetArrow: a,
        targetGroup: d,
        targetEndpoint: l === "L" ? "0 50%" : l === "R" ? "100% 50%" : l === "T" ? "50% 0" : "50% 100%"
      };
      t.add({
        group: "edges",
        data: u,
        classes: f
      });
    });
  }
  function X(e, t, i) {
    let n = loggerLevelUtils.setFunctionName((e, t) => Object.entries(e).reduce((e, n) => {
      let [r, o] = n;
      let a = 0;
      let s = Object.entries(o);
      if (s.length === 1) {
        e[r] = s[0][1];
        return e;
      }
      for (let n = 0; n < s.length - 1; n++) {
        for (let o = n + 1; o < s.length; o++) {
          var d;
          var c;
          let [f, u] = s[n];
          let [h, g] = s[o];
          if (i[f]?.[h] === t) {
            if ((d = e[r]) === null || d === undefined) {
              e[r] = [];
            }
            e[r] = [...e[r], ...u, ...g];
          } else if (f === "default" || h === "default") {
            if ((c = e[r]) === null || c === undefined) {
              e[r] = [];
            }
            e[r] = [...e[r], ...u, ...g];
          } else {
            e[`${r}-${a++}`] = u;
            e[`${r}-${a++}`] = g;
          }
        }
      }
      return e;
    }, {}), "flattenAlignments");
    let [r, o] = t.map(t => {
      let i = {};
      let r = {};
      Object.entries(t).forEach(t => {
        var o;
        var a;
        var l;
        var d;
        var c;
        var f;
        let [u, [h, g]] = t;
        let p = e.getNode(u)?.in ?? "default";
        if ((l = i[g]) === null || l === undefined) {
          i[g] = {};
        }
        if ((d = (o = i[g])[p]) === null || d === undefined) {
          o[p] = [];
        }
        i[g][p].push(u);
        if ((c = r[h]) === null || c === undefined) {
          r[h] = {};
        }
        if ((f = (a = r[h])[p]) === null || f === undefined) {
          a[p] = [];
        }
        r[h][p].push(u);
      });
      return {
        horiz: Object.values(n(i, "horizontal")).filter(e => e.length > 1),
        vert: Object.values(n(r, "vertical")).filter(e => e.length > 1)
      };
    }).reduce((e, t) => {
      let [i, n] = e;
      let {
        horiz: r,
        vert: o
      } = t;
      return [[...i, ...r], [...n, ...o]];
    }, [[], []]);
    return {
      horizontal: r,
      vertical: o
    };
  }
  function q(e, t) {
    let i = [];
    let n = loggerLevelUtils.setFunctionName(e => `${e[0]},${e[1]}`, "posToStr");
    let r = loggerLevelUtils.setFunctionName(e => e.split(",").map(e => parseInt(e)), "strToPos");
    e.forEach(e => {
      let o = Object.fromEntries(Object.entries(e).map(e => {
        let [t, i] = e;
        return [n(i), t];
      }));
      let a = [n([0, 0])];
      let s = {};
      let l = {
        L: [-1, 0],
        R: [1, 0],
        T: [0, 1],
        B: [0, -1]
      };
      while (a.length > 0) {
        let e = a.shift();
        if (e) {
          s[e] = 1;
          let d = o[e];
          if (d) {
            let c = r(e);
            Object.entries(l).forEach(e => {
              let [r, l] = e;
              let f = n([c[0] + l[0], c[1] + l[1]]);
              let u = o[f];
              if (u && !s[f]) {
                a.push(f);
                i.push({
                  [p[r]]: u,
                  [p[v(r)]]: d,
                  gap: t.getConfigField("iconSize") * 1.5
                });
              }
            });
          }
        }
      }
    });
    return i;
  }
  function J(e, t, i, n, r, o) {
    let {
      spatialMaps: a,
      groupAlignments: s
    } = o;
    return new Promise(o => {
      let l = axisAndZoomUtilities.select("body").append("div").attr("id", "cy").attr("style", "display:none");
      let c = cytoscapeCoreModule.Cytoscape({
        container: document.getElementById("cy"),
        style: [{
          selector: "edge",
          style: {
            "curve-style": "straight",
            label: "data(label)",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        }, {
          selector: "edge.segments",
          style: {
            "curve-style": "segments",
            "segment-weights": "0",
            "segment-distances": [0.5],
            "edge-distances": "endpoints",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        }, {
          selector: "node",
          style: {
            "compound-sizing-wrt-labels": "include"
          }
        }, {
          selector: "node[label]",
          style: {
            "text-valign": "bottom",
            "text-halign": "center",
            "font-size": `${r.getConfigField("fontSize")}px`
          }
        }, {
          selector: ".node-service",
          style: {
            label: "data(label)",
            width: "data(width)",
            height: "data(height)"
          }
        }, {
          selector: ".node-junction",
          style: {
            width: "data(width)",
            height: "data(height)"
          }
        }, {
          selector: ".node-group",
          style: {
            padding: `${r.getConfigField("padding")}px`
          }
        }],
        layout: {
          name: "grid",
          boundingBox: {
            x1: 0,
            x2: 100,
            y1: 0,
            y2: 100
          }
        }
      });
      l.remove();
      Z(i, c);
      Y(e, c, r);
      j(t, c, r);
      V(n, c);
      let u = X(r, a, s);
      let h = q(a, r);
      let p = c.layout({
        name: "fcose",
        quality: "proof",
        styleEnabled: false,
        animate: false,
        nodeDimensionsIncludeLabels: false,
        idealEdgeLength(e) {
          let [t, i] = e.connectedNodes();
          let {
            parent: n
          } = R(t);
          let {
            parent: o
          } = R(i);
          if (n === o) {
            return r.getConfigField("iconSize") * 1.5;
          } else {
            return r.getConfigField("iconSize") * 0.5;
          }
        },
        edgeElasticity(e) {
          let [t, i] = e.connectedNodes();
          let {
            parent: n
          } = R(t);
          let {
            parent: r
          } = R(i);
          if (n === r) {
            return 0.45;
          } else {
            return 0.001;
          }
        },
        alignmentConstraint: u,
        relativePlacementConstraint: h
      });
      p.one("layoutstop", () => {
        function e(e, t, i, n) {
          let r;
          let o;
          let {
            x: a,
            y: s
          } = e;
          let {
            x: l,
            y: d
          } = t;
          o = (n - s + (a - i) * (s - d) / (a - l)) / Math.sqrt(1 + Math.pow((s - d) / (a - l), 2));
          r = Math.sqrt(Math.pow(n - s, 2) + Math.pow(i - a, 2) - Math.pow(o, 2)) / Math.sqrt(Math.pow(l - a, 2) + Math.pow(d - s, 2));
          let c = (l - a) * (n - s) - (d - s) * (i - a);
          switch (true) {
            case c >= 0:
              c = 1;
              break;
            case c < 0:
              c = -1;
          }
          let f = (l - a) * (i - a) + (d - s) * (n - s);
          switch (true) {
            case f >= 0:
              f = 1;
              break;
            case f < 0:
              f = -1;
          }
          return {
            distances: o = Math.abs(o) * c,
            weights: r *= f
          };
        }
        loggerLevelUtils.setFunctionName(e, "getSegmentWeights");
        c.startBatch();
        for (let i of Object.values(c.edges())) {
          var t;
          if ((t = i.data) === null || t === undefined ? undefined : t.call(i)) {
            let {
              x: t,
              y: n
            } = i.source().position();
            let {
              x: r,
              y: o
            } = i.target().position();
            if (t !== r && n !== o) {
              let t = i.sourceEndpoint();
              let n = i.targetEndpoint();
              let {
                sourceDir: r
              } = D(i);
              let [o, a] = C(r) ? [t.x, n.y] : [n.x, t.y];
              let {
                weights: s,
                distances: l
              } = e(t, n, o, a);
              i.style("segment-distances", l);
              i.style("segment-weights", s);
            }
          }
        }
        c.endBatch();
        p.run();
      });
      p.run();
      c.ready(e => {
        loggerLevelUtils.logger.info("Ready", e);
        o(c);
      });
    });
  }
  iconUtilsTextRendering.registerIconPacks([{
    name: B.prefix,
    icons: B
  }]);
  cytoscapeCoreModule.Cytoscape.use(h);
  loggerLevelUtils.setFunctionName(Y, "addServices");
  loggerLevelUtils.setFunctionName(j, "addJunctions");
  loggerLevelUtils.setFunctionName(H, "positionNodes");
  loggerLevelUtils.setFunctionName(Z, "addGroups");
  loggerLevelUtils.setFunctionName(V, "addEdges");
  loggerLevelUtils.setFunctionName(X, "getAlignments");
  loggerLevelUtils.setFunctionName(q, "getRelativeConstraints");
  loggerLevelUtils.setFunctionName(J, "layoutArchitecture");
  var K = {
    parser: M,
    get db() {
      return new S();
    },
    renderer: {
      draw: loggerLevelUtils.setFunctionName(async (e, t, i, n) => {
        let o = n.db;
        let a = o.getServices();
        let s = o.getJunctions();
        let d = o.getGroups();
        let c = o.getEdges();
        let f = o.getDataStructures();
        let u = selectSvgElement.selectSvgElement(t);
        let h = u.append("g");
        h.attr("class", "architecture-edges");
        let g = u.append("g");
        g.attr("class", "architecture-services");
        let p = u.append("g");
        p.attr("class", "architecture-groups");
        await U(o, g, a);
        z(o, g, s);
        let y = await J(a, s, d, c, o, f);
        await G(h, y, o);
        await W(p, y, o);
        H(o, y);
        mermaidConfigUtils_1.setupViewbox(undefined, u, o.getConfigField("padding"), o.getConfigField("useMaxWidth"));
      }, "draw")
    },
    styles: P
  };
  require.d(exports, {
    diagram: function () {
      return K;
    }
  });
}